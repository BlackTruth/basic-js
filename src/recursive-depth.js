module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let deepCounter = 0;
    for (let subArr of arr) {
      if (Array.isArray(subArr)) {
        let currentDeep = this.calculateDepth(subArr);
        if (deepCounter < currentDeep) deepCounter = currentDeep;
      }
    }
    return deepCounter + 1;
  }
};
