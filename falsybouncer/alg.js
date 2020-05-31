function bouncer(arr) {
  return arr.filter((cv) => {
    if (cv) return cv;
  });
}

bouncer([7, 'ate', '', false, 9]);
