const colors = {
  blue: 0,
  cyan: 0,
  green: 0,
  magenta: 0,
  red: 0,
  white: 0,
  yellow: 0,
};

module.exports = function log(namespace) {
  const minimumColorCount = Math.min(...Object.values(colors));
  const leastUsedColors = Object.keys(colors)
    .filter((colorName) => colors[colorName] === minimumColorCount);
  const color = leastUsedColors[Math.floor(Math.random() * leastUsedColors.length)];
  colors[color] += 1;

  return (...params) => {
    // eslint-disable-next-line no-console
    console.log(`${namespace} `[color], ...params);
  };
};
