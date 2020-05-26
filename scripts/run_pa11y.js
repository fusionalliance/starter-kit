const spawn = require('cross-spawn');
const EventEmitter = require('events');

const bus = new EventEmitter();

// Events on the bus, indicating something has happened unless otherwise noted
// - error
// - build:start
// - build:done
// - serve:ready
// - serve:kill - triggers the server to end
// - serve:done
// - accessibility:start
// - accessibility:done

const runBuild = () => new Promise((resolve, reject) => {
  bus.emit('build:start');
  const build = spawn('npm', ['run', 'build']);

  build.on('error', (err) => {
    bus.emit('error', { error: err });
    reject(`erred with ${err}`);
  });

  build.on('close', (code) => {
    bus.emit('build:done');
    resolve(`closed with ${code}`);
  });
});

const runServe = () => new Promise((resolve, reject) => {
  bus.emit('serve:start');
  const serve = spawn('npx', ['http-server', 'public']);

  serve.stdout.on('data', (data) => {
    if (data.toString().includes('Hit CTRL-C to stop the server')) {
      bus.emit('serve:ready');
    }
  });

  serve.on('error', (err) => {
    bus.emit('error', { error: err });
    reject(`erred with ${err}`);
  });

  serve.on('close', (code) => {
    bus.emit('serve:done');
    resolve(`closed with ${code}`);
  });

  bus.on('serve:kill', () => {
    serve.kill();
  });
});

const runAccessibility = () => new Promise((resolve, reject) => {
  bus.emit('accessibility:start');

  const accessibility = spawn('npm', ['run', 'test:accessibility']);

  accessibility.stdout.on('data', (data) => {
    console.log('accessibility data', data.toString());
  });

  accessibility.on('error', (err) => {
    bus.emit('error', { error: err });
    reject(`erred with ${err}`);
  });

  accessibility.on('close', (code) => {
    bus.emit('accessibility:done');
    resolve(`closed with ${code}`);
  });
});

bus.on('error', ({ error }) => {
  console.error(`[ERROR] ${error}`);
});

bus.on('build:done', () => {
  runServe();
});

bus.on('serve:ready', () => {
  runAccessibility();
});

bus.on('accessibility:done', () => {
  bus.emit('serve:kill');
});

runBuild();
