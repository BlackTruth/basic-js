module.exports = function countCats(backyard) {
  return backyard.reduce(
    (count, row) =>
      row.reduce(
        (subCount, element) => (element == "^^" ? subCount + 1 : subCount),
        count
      ),
    0
  );
};
