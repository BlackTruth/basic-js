module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  return members
    .map(name => {
      if (typeof name == "string" && name.length > 0)
        return name
          .trim()
          .substring(0, 1)
          .toUpperCase();
    })
    .sort()
    .join("");
};
