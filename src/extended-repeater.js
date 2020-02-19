module.exports = function repeater(str, options) {
  resultAddit = [];
  result = [];
  let separator = "+";
  let additionSeparator = "|";
  let addit = "";
  if (options.separator !== undefined) separator = options.separator;
  if (options.additionSeparator !== undefined)
    additionSeparator = options.additionSeparator;
  if (typeof str != "string") str = str + "";
  if (options.addition !== undefined) {
    addit = options.addition + "";
    resultAddit = glueArr(
      addit,
      options.additionRepeatTimes,
      resultAddit,
      additionSeparator
    );
  }
  return glueArr(str + resultAddit, options.repeatTimes, result, separator);
};

function glueArr(pushStr, repTimes, resultArr, sep) {
  for (let i = 1; i < repTimes; i++) {
    resultArr.push(pushStr);
  }
  resultArr.push(pushStr);
  return resultArr.join(sep);
}
