module.exports = function (source) {
  console.log('client loader2');
  return '// client loader2\n' + source;
};
