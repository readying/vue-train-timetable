// need to use require instead of import (changes from babel 5 to 6)
const Component = require("./vue-train-timetable");
module.exports = Component;

Component.install = Vue => Vue.component(Component.name, Component);

// Install by default if using the script tag
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(Component);
}
