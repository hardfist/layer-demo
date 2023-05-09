module.exports = function (source) {
  console.log('client loader1');
  return '// client loader1;\n' + source;
};
