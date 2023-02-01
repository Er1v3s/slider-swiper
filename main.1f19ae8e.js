// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/Swiper.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Swiper = /*#__PURE__*/function () {
  function Swiper() {
    var _this = this;
    _classCallCheck(this, Swiper);
    _defineProperty(this, "resetCircleBackground", function () {
      _this.buttons.forEach(function (button) {
        button.style.backgroundColor = "transparent";
      });
    });
    _defineProperty(this, "changeActiveCircle", function () {
      _this.resetCircleBackground();
      _this.buttons[_this.slide - 1].style.backgroundColor = "white";
    });
    this.maxTouchScreenWidth = 1280;
    this.initialX = null;
    this.sliderWidth = null;
    this.slide = 1;
    this.slider = document.querySelector(".slider");
    this.length = document.querySelectorAll(".image").length;
    this.bottom = document.querySelector(".bottom");
    document.addEventListener("DOMContentLoaded", function () {
      _this.buttons = document.querySelectorAll(".button");
    });
    window.addEventListener("resize", function () {
      _this.sliderWidth = _this.slider.clientWidth;
      _this.slider.style.transform = "translateX(-".concat((_this.slide == _this.length ? _this.slide - 1 : _this.slide) * _this.sliderWidth, "px)");
    });
    document.addEventListener("touchstart", function (event) {
      _this.startTouch(event);
    });
    document.addEventListener("touchmove", function (event) {
      _this.startMove(event);
    });
  }
  _createClass(Swiper, [{
    key: "nextSlide",
    value: function nextSlide() {
      this.slider.style.transform = "translateX(-".concat(this.slide * this.sliderWidth, "px)");
      this.slide++;
    }
  }, {
    key: "prevSlide",
    value: function prevSlide() {
      this.slide--;
      this.slider.style.transform = "translateX(-".concat((this.slide - 1) * this.sliderWidth, "px)");
    }
  }, {
    key: "goToFirstSlide",
    value: function goToFirstSlide() {
      this.slide = 1;
      this.slider.style.transform = "translateX(0px)";
    }
  }, {
    key: "goToLastSlide",
    value: function goToLastSlide() {
      this.slide = this.length;
      this.slider.style.transform = "translateX(-".concat((this.length - 1) * this.sliderWidth, "px)");
    }
  }, {
    key: "startTouch",
    value: function startTouch(event) {
      if (window.innerWidth < this.maxTouchScreenWidth) {
        this.initialX = event.touches[0].clientX;
      } else {
        return false;
      }
    }
  }, {
    key: "startMove",
    value: function startMove(event) {
      if (!this.initialX) return;
      this.positionX = event.touches[0].clientX;
      var diffX = this.initialX - this.positionX;
      diffX = Math.abs(diffX);
      if (diffX > 0) {
        if (this.initialX < this.positionX) {
          this.slide <= 1 ? this.goToLastSlide() : this.prevSlide();
        } else {
          this.slide < this.length ? this.nextSlide() : this.goToFirstSlide();
        }
        this.changeActiveCircle();
      }
      this.initialX = null;
    }
  }]);
  return Swiper;
}();
new Swiper();
},{}],"js/slider.js":[function(require,module,exports) {
var arrowLeft = document.querySelector(".left");
var arrowRight = document.querySelector(".right");
var slider = document.querySelector(".slider");
var images = document.querySelectorAll(".image");
var bottom = document.querySelector(".bottom");

// slider width handler (fixes resizing window eventlistener on the bottom)
var sliderWidth = slider.clientWidth;
var slide = 1;

// images counter
var length = images.length;

// create circles below slider
for (var i = 0; i < length; i++) {
  var div = document.createElement("div");
  div.classList.add("button");
  bottom.appendChild(div);
}

// handle elements after creating it!! not before!!
var buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

// reset bg of every circle
var resetCircleBackground = function resetCircleBackground() {
  buttons.forEach(function (button) {
    button.style.backgroundColor = "transparent";
  });
};
var changeActiveCircle = function changeActiveCircle() {
  resetCircleBackground();
  buttons[slide - 1].style.backgroundColor = "white";
};

// handle the circle click event
buttons.forEach(function (btn, index) {
  btn.addEventListener("click", function () {
    slider.style.transform = "translateX(-".concat(index * sliderWidth, "px)");
    slide = index + 1;
    changeActiveCircle();
  });
});

// functions for changing slides

var nextSlide = function nextSlide() {
  slider.style.transform = "translateX(-".concat(slide * sliderWidth, "px)");
  slide++;
};
var prevSlide = function prevSlide() {
  slide--;
  slider.style.transform = "translateX(-".concat((slide - 1) * sliderWidth, "px)");
};
var goToFirstSlide = function goToFirstSlide() {
  slide = 1;
  slider.style.transform = "translateX(0px)";
};
var goToLastSlide = function goToLastSlide() {
  slide = length;
  slider.style.transform = "translateX(-".concat((length - 1) * sliderWidth, "px)");
};

// handle the arrows click event

arrowRight.addEventListener("click", function () {
  slide < length ? nextSlide() : goToFirstSlide();
  changeActiveCircle();
});
arrowLeft.addEventListener("click", function () {
  slide <= 1 ? goToLastSlide() : prevSlide();
  changeActiveCircle();
});

// fixes resizing window
window.addEventListener("resize", function () {
  sliderWidth = slider.clientWidth;
  slider.style.transform = "translateX(-".concat(slide * sliderWidth - sliderWidth - (sliderWidth > 320 ? 0 : 10), "px)");
});
},{}],"js/theme.js":[function(require,module,exports) {
// dark mode
var themeBtn = document.querySelector("input");
var body = document.body;
var handleDarkTheme = function handleDarkTheme() {
  if (body.getAttribute("data-theme") === "light") {
    body.setAttribute("data-theme", "dark");
  } else {
    body.setAttribute("data-theme", "light");
  }
};
themeBtn.addEventListener("change", handleDarkTheme);
},{}],"main.js":[function(require,module,exports) {
"use strict";

require("./js/Swiper");
require("./js/slider");
require("./js/theme");
},{"./js/Swiper":"js/Swiper.js","./js/slider":"js/slider.js","./js/theme":"js/theme.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52841" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map