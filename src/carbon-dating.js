const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") return false;
  sampleActivity = Number(sampleActivity);
  if (isNaN(sampleActivity)) return false;
  if (sampleActivity <= 0) return false;
  if (sampleActivity > MODERN_ACTIVITY) return false;
  // t = (ln(MODERN_ACTIVITY/sampleActiviry))/(0.693/HALF_LIFE_PERIOD)
  // t = HALF_LIFE_PERIOD*ln(MODERN_ACTIVITY/sampleActiviry)/0.693
  return Math.ceil(
    (HALF_LIFE_PERIOD * Math.log(MODERN_ACTIVITY / sampleActivity)) / 0.693
  );
};
