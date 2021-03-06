module.exports = function transform(arr) {
  let result = [];
  if (!Array.isArray(arr)) throw "Error";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "--double-next") {
      if (i + 1 < arr.length) result.push(arr[i + 1]);
    } else if (arr[i] == "--double-prev") {
      if (i - 1 > -1) result.push(arr[i - 1]);
    } else if (arr[i] == "--discard-prev") {
      result.pop();
    } else if (arr[i - 1] == "--discard-next" || arr[i] == "--discard-next") {
      // do nothing
    } else result.push(arr[i]);
  }

  return result;
};
