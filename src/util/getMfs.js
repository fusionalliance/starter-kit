const memFs = require('mem-fs');
const editor = require('mem-fs-editor');

// https://github.com/sboudrias/mem-fs-editor
const store = memFs.create();
const mfs = editor.create(store);

module.exports = () => mfs;
