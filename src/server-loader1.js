module.exports = function (source) {
  console.log('server loader1');
  return '// server loader1\n' + source;
};
