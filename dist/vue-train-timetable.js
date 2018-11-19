(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.vueTrainTimetable = factory());
}(this, (function () { 'use strict';

var vueTrainTimetable = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: "__vue-train-timetbale " + _vm.directionClass }, [_c('ul', { ref: "timetable", class: "timetable " + _vm.directionClass, style: _vm.directionStyle }, _vm._l(_vm.displayList, function (stop, index) {
      return _c('li', { staticClass: "stop-item" }, [_c('i', { class: "stop-bar " + _vm.appendBarClass(stop), style: _vm.barBackground }, [_vm.is_start(stop) ? _c('i', { staticClass: "start-point", style: _vm.barBackground }) : _vm.is_end(stop) ? _c('i', { staticClass: "end-point", style: _vm.barBackground }) : _c('i', { staticClass: "stop-bar pointing", style: _vm.barBackground })]), _vm._v(" "), _c('span', { staticClass: "stop-text", style: { color: _vm.text_color } }, [_vm._v(" " + _vm._s(stop.name) + " "), stop.icon ? _c('i', { class: stop.icon }) : _vm._e()])]);
    }))]);
  }, staticRenderFns: [], _scopeId: 'data-v-1204c08c',
  name: "vue-train-timetable",
  props: {
    timetable: {
      type: Array,
      default: [],
      required: true
    },
    position: {
      type: Number,
      default: 0,
      required: false
    },
    maximum_display: {
      type: Number,
      default: 10,
      required: false
    },
    minimum_display: {
      type: Number,
      default: 5,
      required: false
    },
    display_start: {
      type: Boolean,
      default: true,
      required: false
    },
    display_end: {
      type: Boolean,
      default: true,
      required: false
    },
    bar_color: {
      type: String,
      default: "rgb(235, 247, 149)",
      required: false
    },
    text_color: {
      type: String,
      default: "white",
      required: false
    },
    direction: {
      type: String,
      default: "vertical",
      required: false
    }
  },

  data: function data() {
    return {};
  },

  watch: {},

  computed: {
    directionStyle: function directionStyle() {
      var timetableEl = this.$refs.timetable;
      var result = this.direction == "vertical" ? {} : {
        width: this.displayList.length * 25 + "px"
      };
      return result;
    },
    directionClass: function directionClass() {
      return this.direction == "vertical" ? "vertical" : "horizontal";
    },
    barBackground: function barBackground() {
      return {
        "background-color": this.bar_color
      };
    },
    displayList: function displayList() {
      var position = parseInt(this.position, 10);
      var size = this.timetable.length;
      var start = position;
      var end = position + this.maximum_display;
      if (end >= size) { end = size; }
      console.log(end - start, this.minimum_display);
      if (end - start < this.minimum_display) {
        start = end - this.minimum_display;
        if (start < 0) { start = 0; }
      }
      return this.timetable.slice(start, end);
    }
  },
  methods: {
    is_end: function is_end(data) {
      return this.timetable.indexOf(data) == this.timetable.length - 1;
    },
    is_start: function is_start(data) {
      return this.timetable.indexOf(data) == 0;
    },
    appendBarClass: function appendBarClass(data) {
      var list = this.displayList;
      var index = list.indexOf(data);
      if (index == list.length - 1) {
        return "end";
      } else if (index == 0) {
        return "start";
      }
      return "";
    }
  }
};

var vueTrainTimetable$1 = Object.freeze({
	default: vueTrainTimetable
});

var Component = ( vueTrainTimetable$1 && vueTrainTimetable ) || vueTrainTimetable$1;

// need to use require instead of import (changes from babel 5 to 6)

var src = Component;

Component.install = function (Vue) { return Vue.component(Component.name, Component); };

// Install by default if using the script tag
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(Component);
}

return src;

})));
