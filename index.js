Rooster = {};

Rooster.announceDawn = () => {
  return 'cock-a-doodle-doo!';
}

// Throws Error if hour is not between 0 and 23 inclusive
Rooster.timeAtDawn = (hour) => {
  if (hour < 0 || hour > 23) {
    throw new RangeError;
  } else {
    return hour.toString();
  };
}

module.exports = Rooster;
