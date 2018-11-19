/*!
 * vue-train-timetable v0.1.1
 * (c) 2018-present Madao <chrishyman256@gmail.com>
 * Released under the MIT License.
 */
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
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

  computed: {
    // bearingWallText() {
    //   return this.direction == "vertical" ? "" : (this.timetable.map(function(item) {
    //     return item.name
    //   })[0]
    // },
    directionStyle: function directionStyle() {
      var timetableEl = this.$refs.timetable;
      var result = this.direction == "vertical" ? {} : {
        width: this.displayList.length * 50 + "px"
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
      return this.display_end && this.timetable.indexOf(data) == this.timetable.length - 1;
    },
    is_start: function is_start(data) {
      return this.display_start && this.timetable.indexOf(data) == 0;
    },
    appendBarClass: function appendBarClass(data) {
      var list = this.displayList;
      var index = list.indexOf(data);
      var classNames = [];
      if (index == list.length - 1) {
        classNames.push("end");
      } else if (index == 0) {
        classNames.push("start");
      }
      if (this.is_start(data)) {
        classNames.push("departure");
      } else if (this.is_end(data)) {
        classNames.push("terminal");
      }
      return classNames.join(" ");
    }
  }
};

/* script */

var __vue_script__ = script;

/* template */
var __vue_render__ = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: "__vue-train-timetbale " + _vm.directionClass }, [_c("ul", {
    ref: "timetable",
    class: "timetable " + _vm.directionClass,
    style: _vm.directionStyle
  }, _vm._l(_vm.displayList, function (stop, index) {
    return _c("li", { class: "stop-item " + _vm.appendBarClass(stop) }, [_c("i", { staticClass: "stop-bar", style: _vm.barBackground }, [_vm.is_start(stop) ? _c("i", {
      staticClass: "start-point",
      style: _vm.barBackground
    }) : _vm.is_end(stop) ? _c("i", {
      staticClass: "end-point",
      style: _vm.barBackground
    }) : _c("i", {
      staticClass: "stop-bar pointing",
      style: _vm.barBackground
    })]), _vm._v(" "), _c("span", { staticClass: "stop-text", style: { color: _vm.text_color } }, [_vm._v("\n        " + _vm._s(stop.name) + "\n        "), stop.icon ? _c("i", { class: stop.icon }) : _vm._e()])]);
  }))]);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function (inject) {
  if (!inject) { return; }
  inject("data-v-c487f6fa_0", { source: "\n.__vue-train-timetbale[data-v-c487f6fa] {\n  font-family: helvetica, sans-serif;\n  position: relative;\n  font-weight: 500;\n  box-sizing: border-box;\n}\n.__vue-train-timetbale ul[data-v-c487f6fa] {\n  padding: 0;\n  margin: 0;\n}\n.__vue-train-timetbale ul li[data-v-c487f6fa] {\n  list-style: none;\n}\n.__vue-train-timetbale .timetable[data-v-c487f6fa] {\n  height: 100%;\n}\n.__vue-train-timetbale .start-point[data-v-c487f6fa],\n.__vue-train-timetbale .end-point[data-v-c487f6fa] {\n  width: 12px;\n  height: 12px;\n  border-radius: 12px;\n  position: absolute;\n  left: 0;\n  margin-left: -3px;\n}\n.__vue-train-timetbale .start-point[data-v-c487f6fa] {\n  top: -6px;\n}\n.__vue-train-timetbale .end-point[data-v-c487f6fa] {\n  bottom: -6px;\n}\n.__vue-train-timetbale .stop-item[data-v-c487f6fa] {\n  padding: 5px 0 5px 20px;\n  box-sizing: border-box;\n  position: relative;\n  height: 25px;\n}\n.__vue-train-timetbale .stop-bar[data-v-c487f6fa] {\n  position: absolute;\n}\n.__vue-train-timetbale .bearing-wall[data-v-c487f6fa] {\n  position: relative;\n  display: block;\n  visibility: hidden;\n  width: 0.1px;\n  text-indent: -1000px;\n  word-break: break-all;\n  line-height: 0.6;\n}\n.__vue-train-timetbale.horizontal[data-v-c487f6fa] {\n  height: 100%;\n}\n.__vue-train-timetbale.horizontal .start-point[data-v-c487f6fa] {\n  top: -4px;\n}\n.__vue-train-timetbale.horizontal .stop-bar[data-v-c487f6fa] {\n  width: 100%;\n  height: 4px;\n  bottom: 0px;\n  left: 0;\n}\n.__vue-train-timetbale.horizontal .stop-bar.pointing[data-v-c487f6fa] {\n  bottom: 0;\n  width: 4px;\n  height: 10px;\n  position: absolute;\n  left: 0;\n}\n.__vue-train-timetbale.horizontal .stop-item[data-v-c487f6fa] {\n  float: left;\n  position: relative;\n  width: 50px;\n  height: 100%;\n}\n.__vue-train-timetbale.horizontal .stop-text[data-v-c487f6fa] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  transform: rotateZ(-45deg) translateY(-5px) translateX(10px);\n  transform-origin: left;\n  text-align: left;\n  width: 140px;\n}\n.__vue-train-timetbale.horizontal .departure .stop-text[data-v-c487f6fa] {\n  transform: rotateZ(-45deg) translateY(-15px) translateX(-10px);\n}\n.__vue-train-timetbale.horizontal .end-point[data-v-c487f6fa] {\n  bottom: -3px;\n}\n.__vue-train-timetbale.horizontal .terminal .stop-bar[data-v-c487f6fa] {\n  width: 0;\n}\n.__vue-train-timetbale.vertical .stop-item.start .stop-bar[data-v-c487f6fa] {\n  top: 50%;\n  height: 50%;\n}\n.__vue-train-timetbale.vertical .stop-item.start .stop-bar .pointing[data-v-c487f6fa] {\n  top: 0;\n}\n.__vue-train-timetbale.vertical .stop-item.end .stop-bar[data-v-c487f6fa] {\n  bottom: 50%;\n  height: 50%;\n}\n.__vue-train-timetbale.vertical .stop-item.end .stop-bar .pointing[data-v-c487f6fa] {\n  top: 100%;\n}\n.__vue-train-timetbale.vertical .stop-item .departure .stop-text[data-v-c487f6fa] {\n  top: -50px;\n  left: 0;\n  transform: rotateZ(20deg) translateX(-30%);\n  transform-origin: left;\n  max-width: 140px;\n  text-align: left;\n}\n.__vue-train-timetbale.vertical .stop-bar[data-v-c487f6fa] {\n  width: 5px;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.__vue-train-timetbale.vertical .stop-bar.pointing[data-v-c487f6fa] {\n  height: 4px;\n  width: 15px;\n  top: 50%;\n  left: 0;\n  margin-top: -2px;\n}\n", map: { "version": 3, "sources": ["vue-train-timetable.vue"], "names": [], "mappings": ";AAAA;EACE,mCAAmC;EACnC,mBAAmB;EACnB,iBAAiB;EACjB,uBAAuB;CACxB;AACD;EACE,WAAW;EACX,UAAU;CACX;AACD;EACE,iBAAiB;CAClB;AACD;EACE,aAAa;CACd;AACD;;EAEE,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,mBAAmB;EACnB,QAAQ;EACR,kBAAkB;CACnB;AACD;EACE,UAAU;CACX;AACD;EACE,aAAa;CACd;AACD;EACE,wBAAwB;EACxB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;CACd;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,eAAe;EACf,mBAAmB;EACnB,aAAa;EACb,qBAAqB;EACrB,sBAAsB;EACtB,iBAAiB;CAClB;AACD;EACE,aAAa;CACd;AACD;EACE,UAAU;CACX;AACD;EACE,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,QAAQ;CACT;AACD;EACE,UAAU;EACV,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,QAAQ;CACT;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,aAAa;CACd;AACD;EACE,mBAAmB;EACnB,UAAU;EACV,QAAQ;EACR,6DAA6D;EAC7D,uBAAuB;EACvB,iBAAiB;EACjB,aAAa;CACd;AACD;EACE,+DAA+D;CAChE;AACD;EACE,aAAa;CACd;AACD;EACE,SAAS;CACV;AACD;EACE,SAAS;EACT,YAAY;CACb;AACD;EACE,OAAO;CACR;AACD;EACE,YAAY;EACZ,YAAY;CACb;AACD;EACE,UAAU;CACX;AACD;EACE,WAAW;EACX,QAAQ;EACR,2CAA2C;EAC3C,uBAAuB;EACvB,iBAAiB;EACjB,iBAAiB;CAClB;AACD;EACE,WAAW;EACX,aAAa;EACb,OAAO;EACP,QAAQ;CACT;AACD;EACE,YAAY;EACZ,YAAY;EACZ,SAAS;EACT,QAAQ;EACR,iBAAiB;CAClB", "file": "vue-train-timetable.vue", "sourcesContent": [".__vue-train-timetbale {\n  font-family: helvetica, sans-serif;\n  position: relative;\n  font-weight: 500;\n  box-sizing: border-box;\n}\n.__vue-train-timetbale ul {\n  padding: 0;\n  margin: 0;\n}\n.__vue-train-timetbale ul li {\n  list-style: none;\n}\n.__vue-train-timetbale .timetable {\n  height: 100%;\n}\n.__vue-train-timetbale .start-point,\n.__vue-train-timetbale .end-point {\n  width: 12px;\n  height: 12px;\n  border-radius: 12px;\n  position: absolute;\n  left: 0;\n  margin-left: -3px;\n}\n.__vue-train-timetbale .start-point {\n  top: -6px;\n}\n.__vue-train-timetbale .end-point {\n  bottom: -6px;\n}\n.__vue-train-timetbale .stop-item {\n  padding: 5px 0 5px 20px;\n  box-sizing: border-box;\n  position: relative;\n  height: 25px;\n}\n.__vue-train-timetbale .stop-bar {\n  position: absolute;\n}\n.__vue-train-timetbale .bearing-wall {\n  position: relative;\n  display: block;\n  visibility: hidden;\n  width: 0.1px;\n  text-indent: -1000px;\n  word-break: break-all;\n  line-height: 0.6;\n}\n.__vue-train-timetbale.horizontal {\n  height: 100%;\n}\n.__vue-train-timetbale.horizontal .start-point {\n  top: -4px;\n}\n.__vue-train-timetbale.horizontal .stop-bar {\n  width: 100%;\n  height: 4px;\n  bottom: 0px;\n  left: 0;\n}\n.__vue-train-timetbale.horizontal .stop-bar.pointing {\n  bottom: 0;\n  width: 4px;\n  height: 10px;\n  position: absolute;\n  left: 0;\n}\n.__vue-train-timetbale.horizontal .stop-item {\n  float: left;\n  position: relative;\n  width: 50px;\n  height: 100%;\n}\n.__vue-train-timetbale.horizontal .stop-text {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  transform: rotateZ(-45deg) translateY(-5px) translateX(10px);\n  transform-origin: left;\n  text-align: left;\n  width: 140px;\n}\n.__vue-train-timetbale.horizontal .departure .stop-text {\n  transform: rotateZ(-45deg) translateY(-15px) translateX(-10px);\n}\n.__vue-train-timetbale.horizontal .end-point {\n  bottom: -3px;\n}\n.__vue-train-timetbale.horizontal .terminal .stop-bar {\n  width: 0;\n}\n.__vue-train-timetbale.vertical .stop-item.start .stop-bar {\n  top: 50%;\n  height: 50%;\n}\n.__vue-train-timetbale.vertical .stop-item.start .stop-bar .pointing {\n  top: 0;\n}\n.__vue-train-timetbale.vertical .stop-item.end .stop-bar {\n  bottom: 50%;\n  height: 50%;\n}\n.__vue-train-timetbale.vertical .stop-item.end .stop-bar .pointing {\n  top: 100%;\n}\n.__vue-train-timetbale.vertical .stop-item .departure .stop-text {\n  top: -50px;\n  left: 0;\n  transform: rotateZ(20deg) translateX(-30%);\n  transform-origin: left;\n  max-width: 140px;\n  text-align: left;\n}\n.__vue-train-timetbale.vertical .stop-bar {\n  width: 5px;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.__vue-train-timetbale.vertical .stop-bar.pointing {\n  height: 4px;\n  width: 15px;\n  top: 50%;\n  left: 0;\n  margin-top: -2px;\n}\n"] }, media: undefined });
};
/* scoped */
var __vue_scope_id__ = "data-v-c487f6fa";
/* module identifier */
var __vue_module_identifier__ = undefined;
/* functional template */
var __vue_is_functional_template__ = false;
/* component normalizer */
function __vue_normalize__(template, style, script$$1, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "/Users/madao/dev/vue-train-timetable/src/vue-train-timetable.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) { component.functional = true; }
  }

  component._scopeId = scope;

  {
    var hook;
    if (style) {
      hook = function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        var originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */
function __vue_create_injector__() {
  var head = document.head || document.getElementsByTagName('head')[0];
  var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return; } // SSR styles are present.

    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      var code = css.source;
      var index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        var el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) { el.setAttribute('media', css.media); }
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) { style.element.removeChild(nodes[index]); }
        if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }else { style.element.appendChild(textNode); }
      }
    }
  };
}
/* style inject SSR */

var vueTrainTimetable = __vue_normalize__({ render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, __vue_create_injector__, undefined);

export default vueTrainTimetable;
