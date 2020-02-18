module.exports = function createDreamTeam(members) {
  members = members.map(name =>
    name
      .trim()
      .substring(0, 1)
      .toUpperCase()
  );
  return members.sort().join("");
};
