const chainMaker = {
  chains: [],
  getLength() {
    return this.chains.length;
  },
  addLink(value) {
    this.chains.push(value + "");
    return this;
  },
  removeLink(position) {
    if (
      isNaN(position) ||
      position < 1 ||
      position > this.chains.length ||
      Math.round(position) != position
    ) {
      this.chains = [];
      throw "Error";
    }

    this.chains.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chains = this.chains.reverse();
    return this;
  },
  finishChain() {
    let result = this.chains.join(" )~~( ");
    this.chains = [];
    return "( " + result + " )";
  }
};

module.exports = chainMaker;
