module.exports = function repeater(str, options) {
  resultAddit = [];
  result = [];
  let separator = "+";
  if (options.separator !== undefined) separator = options.separator;
  let additionSeparator = "|";
  if (options.additionSeparator !== undefined)
    additionSeparator = options.additionSeparator;
  let addit = "";
  if (typeof str != "string") str = str.toString();
  if (options.addition !== undefined) {
    addit = options.addition.toString();

    for (let i = 1; i <= options.additionRepeatTimes; i++)
      resultAddit.push(addit);

    resultAddit = resultAddit.join(additionSeparator);
  }

  for (let i = 1; i <= options.repeatTimes; i++) {
    result.push(str);
    result.push(resultAddit);
    result.push(separator);
  }
  return result.join("");
};
