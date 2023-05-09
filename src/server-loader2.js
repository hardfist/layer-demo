module.exports = function (source) {
  console.log('server loader2');
  return '// server loader2\n' + source;
};
