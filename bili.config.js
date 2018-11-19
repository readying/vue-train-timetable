const { name } = require("./package.json");
const vue = require("rollup-plugin-vue").default;
const less = require("rollup-plugin-less");

module.exports = {
  js: "buble",
  input: "src/vue-train-timetable.vue",
  banner: true,
  format: ["umd", "umd-min", "cjs", "es"],
  filename: name + "[suffix].js",
  plugins: [less({ output: `dist/${name}.css` }), vue({ less: true })]
};
