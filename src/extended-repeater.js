module.exports = function repeater(str, options) {
  resultAddit = [];
  result = [];
  let separator = "+";
  let additionSeparator = "|";
  let addit = "";
  if (options.separator !== undefined)
    separator = options.separator;
  if (options.additionSeparator !== undefined)
    additionSeparator = options.additionSeparator;
  if (typeof str != "string")
    str = str + "";
  if (options.addition !== undefined) {
    addit = options.addition + "";
    for (let i = 1; i < options.additionRepeatTimes; i++) {
      resultAddit.push(addit);
    }
    resultAddit.push(addit);
    resultAddit = resultAddit.join(additionSeparator);
  }
  for (let i = 1; i < options.repeatTimes; i++) {
    result.push(str, resultAddit, separator);
  }
  result.push(str, resultAddit);
  return result.join("");
};
