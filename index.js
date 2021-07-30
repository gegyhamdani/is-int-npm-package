function isInt(value) {
  if (Number.isNaN(value)) {
    return false;
  }

  const num = parseInt(value, 10);
  if (num >= 0 && num <= 65536) {
    return true;
  }

  return false;
}

module.exports = isInt