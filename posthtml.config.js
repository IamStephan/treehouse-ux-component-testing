module.exports = {
  plugins: {
    "posthtml-modules": {
      root: "./",
      locals: { MODE: process.env.NODE_ENV },
    },
    "posthtml-inline-svg": {},
    "posthtml-expressions": {
      mode: "all",
    },
    "posthtml-beautify": {},
  },
};
