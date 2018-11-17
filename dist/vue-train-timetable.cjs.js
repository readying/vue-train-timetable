'use strict';

// need to use require instead of import (changes from babel 5 to 6)
var Component = require("./train_time_table.vue");
module.exports = Component;

Component.install = function (Vue) { return Vue.component(Component.name, Component); };

// Install by default if using the script tag
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(Component);
}
