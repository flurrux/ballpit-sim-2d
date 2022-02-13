// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8wcER":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"h7u1C":[function(require,module,exports) {
var _option = require("fp-ts/lib/Option");
var _autoCanvas = require("../lib/auto-canvas");
var _ctxUtil = require("../lib/ctx-util");
var _vec2 = require("../lib/vec2");
var _fluidSimulation = require("./fluid-simulation");
var _util = require("./util");
const makePointGrid = (startPoint, stride, size)=>{
    // const startPoint = Vec2.multiply(size, -stride / 2);
    let points = [];
    for(let x = 0; x < size[0]; x++)for(let y = 0; y < size[1]; y++)points.push(_vec2.add(startPoint, _vec2.multiply([
        x,
        y
    ], stride)));
    return points;
};
function makeCenteredPointGrid(containerSize, stride, size) {
    return makePointGrid([
        (containerSize[0] - size[0] * stride) / 2,
        (containerSize[1] - size[1] * stride) / 2, 
    ], stride, size);
}
function makePointPyramid(startPoint, stride, baseCount) {
    let points = [];
    for(let i = 0; i < baseCount; i++){
        const y = startPoint[1] + i * stride;
        const rowX = startPoint[0] + stride * 0.5 * i;
        for(let j = 0; j < baseCount - i; j++){
            const x = rowX + j * stride;
            points.push([
                x,
                y
            ]);
        }
    }
    return points;
}
function randomOffset() {
    return [
        Math.random() - 0.5,
        Math.random() - 0.5
    ];
}
function createInitialParticles(radius, containerSize) {
    // const maxStacking = containerSize.map(v => Math.floor(v / (2 * radius))) as Vector2;
    return [
        ...makeCenteredPointGrid(containerSize, radius, [
            16,
            16
        ])
    ].map((position)=>({
            position: _vec2.add(position, _vec2.multiply(randomOffset(), 0.01)),
            velocity: [
                0,
                0
            ]
        })
    );
}
function setupScene() {
    const canvas1 = _autoCanvas.createCanvas(()=>render()
    );
    const ctx = canvas1.getContext("2d");
    const backgroundColor = "#d4d3d2";
    const sceneScale = 100 / window.devicePixelRatio;
    const targetContainerSize = [
        6,
        6
    ];
    const cellSize = 0.4;
    const gridSize = targetContainerSize.map((v)=>Math.round(v / cellSize)
    );
    const containerSize = gridSize.map((v)=>v * cellSize
    );
    const particleRadius = 0.2;
    let particles = createInitialParticles(particleRadius, containerSize);
    //instructions ###
    document.body.insertAdjacentHTML("beforeend", `
			<div 
				style="
					position: absolute; 
					left: 0px; right: 0px; bottom: 0px; 
					padding: 10px; 
					display: flex; 
					flex-direction: column; 
					text-align: center;
				"
			>
				<span>press space to pause/resume the simulation</span>
				<span>use the left/right arrow keys to rotate the container</span>
			</div>
		`);
    //scene-rotation-control ###
    let sceneRotationControlState = {
        rotationSpeed: 0,
        targetValue: 0
    };
    const setSceneRotationVelocity = (velocity)=>{
        sceneRotationControlState = {
            ...sceneRotationControlState,
            rotationSpeed: velocity
        };
    };
    const keyToSceneRotationVelocity = {
        "ArrowRight": 2,
        "ArrowLeft": -2
    };
    function getSceneRotationValueForKey(key) {
        return _option.fromNullable(keyToSceneRotationVelocity[key]);
    }
    document.addEventListener("keydown", (e)=>{
        const nextSpeed = getSceneRotationValueForKey(e.key);
        if (_option.isSome(nextSpeed)) setSceneRotationVelocity(nextSpeed.value);
    });
    document.addEventListener("keyup", (e)=>{
        const nextSpeed = getSceneRotationValueForKey(e.key);
        if (_option.isSome(nextSpeed)) setSceneRotationVelocity(0);
    });
    let sceneRotation = 0;
    function updateSceneControlAndRotation(dt) {
        sceneRotationControlState = {
            ...sceneRotationControlState,
            targetValue: sceneRotationControlState.targetValue + sceneRotationControlState.rotationSpeed * dt
        };
        sceneRotation = _util.interpolate(sceneRotation, sceneRotationControlState.targetValue, 8 * dt);
    }
    const gravityStrength = 3;
    const render = ()=>{
        const { canvas  } = ctx;
        const [w, h] = [
            canvas.clientWidth,
            canvas.clientHeight
        ];
        ctx.save();
        const pr = devicePixelRatio;
        ctx.scale(pr, pr);
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, w, h);
        ctx.translate(w / 2, h / 2);
        ctx.scale(sceneScale, -sceneScale);
        ctx.rotate(sceneRotation);
        ctx.translate(-containerSize[0] / 2, -containerSize[1] / 2);
        //render grid ###
        ctx.globalAlpha = 0.1;
        ctx.strokeStyle = "black";
        ctx.lineWidth = 0.03;
        ctx.lineCap = "round";
        for(let i = 0; i <= gridSize[0]; i++){
            _ctxUtil.pathPolyline(ctx, [
                [
                    i * cellSize,
                    0
                ],
                [
                    i * cellSize,
                    containerSize[1]
                ]
            ]);
            ctx.stroke();
        }
        for(let i1 = 0; i1 <= gridSize[1]; i1++){
            _ctxUtil.pathPolyline(ctx, [
                [
                    0,
                    i1 * cellSize
                ],
                [
                    containerSize[0],
                    i1 * cellSize
                ]
            ]);
            ctx.stroke();
        }
        //render particles ###
        ctx.globalAlpha = 1;
        ctx.fillStyle = "#69b3d1";
        ctx.strokeStyle = "#323333";
        ctx.lineWidth = 0.03;
        for (const particle of particles){
            ctx.beginPath();
            ctx.arc(...particle.position, particleRadius / 2, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
        }
        //render container outline ###
        ctx.strokeStyle = "#323333";
        ctx.lineWidth = 0.03;
        _ctxUtil.pathPolyline(ctx, [
            [
                0,
                0
            ],
            [
                containerSize[0],
                0
            ],
            containerSize,
            [
                0,
                containerSize[1]
            ],
            [
                0,
                0
            ]
        ]);
        ctx.stroke();
        ctx.restore();
    };
    const updateAndRender = (dt)=>{
        updateSceneControlAndRotation(dt);
        const gravityVector = [
            -Math.sin(sceneRotation) * gravityStrength,
            -Math.cos(sceneRotation) * gravityStrength
        ];
        const simFunc = _fluidSimulation.simulateFluidParticles({
            cellSize,
            gridSize,
            particleRadius,
            forceField: ()=>gravityVector
        });
        particles = simFunc(dt)(particles);
        render();
    };
    let simRunning = false;
    document.addEventListener("keydown", (e)=>{
        if (e.key === " ") simRunning = !simRunning;
        else if (e.key === "d") updateAndRender(1 / 30);
    });
    _util.startLoop((args)=>{
        if (!simRunning) return;
        updateAndRender(args.dt);
    });
    render();
    setTimeout(()=>simRunning = true
    , 1000);
}
setupScene();

},{"fp-ts/lib/Option":"5s8cT","../lib/auto-canvas":"7tehe","../lib/ctx-util":"iYwXE","../lib/vec2":"cs2vU","./fluid-simulation":"guVDm","./util":"7wzGb"}],"5s8cT":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {
    };
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromEither = exports.MonadThrow = exports.throwError = exports.Witherable = exports.wilt = exports.wither = exports.Traversable = exports.sequence = exports.traverse = exports.Filterable = exports.partitionMap = exports.partition = exports.filterMap = exports.filter = exports.Compactable = exports.separate = exports.compact = exports.Extend = exports.extend = exports.Alternative = exports.guard = exports.Zero = exports.zero = exports.Alt = exports.alt = exports.altW = exports.Foldable = exports.reduceRight = exports.foldMap = exports.reduce = exports.Monad = exports.Chain = exports.chain = exports.Applicative = exports.Apply = exports.ap = exports.Pointed = exports.of = exports.Functor = exports.map = exports.getMonoid = exports.getOrd = exports.getEq = exports.getShow = exports.URI = exports.getRight = exports.getLeft = exports.fromPredicate = exports.some = exports.none = void 0;
exports.getLastMonoid = exports.getFirstMonoid = exports.getApplyMonoid = exports.getApplySemigroup = exports.option = exports.mapNullable = exports.getRefinement = exports.sequenceArray = exports.traverseArray = exports.traverseArrayWithIndex = exports.traverseReadonlyArrayWithIndex = exports.traverseReadonlyNonEmptyArrayWithIndex = exports.ApT = exports.apS = exports.bind = exports.bindTo = exports.Do = exports.exists = exports.elem = exports.toUndefined = exports.toNullable = exports.chainNullableK = exports.fromNullableK = exports.tryCatchK = exports.tryCatch = exports.fromNullable = exports.chainEitherK = exports.fromEitherK = exports.duplicate = exports.chainFirst = exports.flatten = exports.apSecond = exports.apFirst = exports.flap = exports.getOrElse = exports.getOrElseW = exports.fold = exports.match = exports.foldW = exports.matchW = exports.isNone = exports.isSome = exports.FromEither = void 0;
var Applicative_1 = require("./Applicative");
var Apply_1 = require("./Apply");
var Chain_1 = require("./Chain");
var FromEither_1 = require("./FromEither");
var function_1 = require("./function");
var Functor_1 = require("./Functor");
var _ = __importStar(require("./internal"));
var Predicate_1 = require("./Predicate");
var Semigroup_1 = require("./Semigroup");
var Separated_1 = require("./Separated");
var Witherable_1 = require("./Witherable");
var Zero_1 = require("./Zero");
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * `None` doesn't have a constructor, instead you can use it directly as a value. Represents a missing value.
 *
 * @category constructors
 * @since 2.0.0
 */ exports.none = _.none;
/**
 * Constructs a `Some`. Represents an optional value that exists.
 *
 * @category constructors
 * @since 2.0.0
 */ exports.some = _.some;
function fromPredicate(predicate) {
    return function(a) {
        return predicate(a) ? exports.some(a) : exports.none;
    };
}
exports.fromPredicate = fromPredicate;
/**
 * Returns the `Left` value of an `Either` if possible.
 *
 * @example
 * import { getLeft, none, some } from 'fp-ts/Option'
 * import { right, left } from 'fp-ts/Either'
 *
 * assert.deepStrictEqual(getLeft(right(1)), none)
 * assert.deepStrictEqual(getLeft(left('a')), some('a'))
 *
 * @category constructors
 * @since 2.0.0
 */ var getLeft = function(ma) {
    return ma._tag === 'Right' ? exports.none : exports.some(ma.left);
};
exports.getLeft = getLeft;
/**
 * Returns the `Right` value of an `Either` if possible.
 *
 * @example
 * import { getRight, none, some } from 'fp-ts/Option'
 * import { right, left } from 'fp-ts/Either'
 *
 * assert.deepStrictEqual(getRight(right(1)), some(1))
 * assert.deepStrictEqual(getRight(left('a')), none)
 *
 * @category constructors
 * @since 2.0.0
 */ var getRight = function(ma) {
    return ma._tag === 'Left' ? exports.none : exports.some(ma.right);
};
exports.getRight = getRight;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function(fa, f) {
    return function_1.pipe(fa, exports.map(f));
};
var _ap = function(fab, fa) {
    return function_1.pipe(fab, exports.ap(fa));
};
var _chain = function(ma, f) {
    return function_1.pipe(ma, exports.chain(f));
};
var _reduce = function(fa, b, f) {
    return function_1.pipe(fa, exports.reduce(b, f));
};
var _foldMap = function(M) {
    var foldMapM = exports.foldMap(M);
    return function(fa, f) {
        return function_1.pipe(fa, foldMapM(f));
    };
};
var _reduceRight = function(fa, b, f) {
    return function_1.pipe(fa, exports.reduceRight(b, f));
};
var _traverse = function(F) {
    var traverseF = exports.traverse(F);
    return function(ta, f) {
        return function_1.pipe(ta, traverseF(f));
    };
};
/* istanbul ignore next */ var _alt = function(fa, that) {
    return function_1.pipe(fa, exports.alt(that));
};
var _filter = function(fa, predicate) {
    return function_1.pipe(fa, exports.filter(predicate));
};
/* istanbul ignore next */ var _filterMap = function(fa, f) {
    return function_1.pipe(fa, exports.filterMap(f));
};
/* istanbul ignore next */ var _extend = function(wa, f) {
    return function_1.pipe(wa, exports.extend(f));
};
/* istanbul ignore next */ var _partition = function(fa, predicate) {
    return function_1.pipe(fa, exports.partition(predicate));
};
/* istanbul ignore next */ var _partitionMap = function(fa, f) {
    return function_1.pipe(fa, exports.partitionMap(f));
};
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */ exports.URI = 'Option';
/**
 * @category instances
 * @since 2.0.0
 */ var getShow = function(S) {
    return {
        show: function(ma) {
            return exports.isNone(ma) ? 'none' : "some(" + S.show(ma.value) + ")";
        }
    };
};
exports.getShow = getShow;
/**
 * @example
 * import { none, some, getEq } from 'fp-ts/Option'
 * import * as N from 'fp-ts/number'
 *
 * const E = getEq(N.Eq)
 * assert.strictEqual(E.equals(none, none), true)
 * assert.strictEqual(E.equals(none, some(1)), false)
 * assert.strictEqual(E.equals(some(1), none), false)
 * assert.strictEqual(E.equals(some(1), some(2)), false)
 * assert.strictEqual(E.equals(some(1), some(1)), true)
 *
 * @category instances
 * @since 2.0.0
 */ var getEq = function(E) {
    return {
        equals: function(x, y) {
            return x === y || (exports.isNone(x) ? exports.isNone(y) : exports.isNone(y) ? false : E.equals(x.value, y.value));
        }
    };
};
exports.getEq = getEq;
/**
 * The `Ord` instance allows `Option` values to be compared with
 * `compare`, whenever there is an `Ord` instance for
 * the type the `Option` contains.
 *
 * `None` is considered to be less than any `Some` value.
 *
 *
 * @example
 * import { none, some, getOrd } from 'fp-ts/Option'
 * import * as N from 'fp-ts/number'
 *
 * const O = getOrd(N.Ord)
 * assert.strictEqual(O.compare(none, none), 0)
 * assert.strictEqual(O.compare(none, some(1)), -1)
 * assert.strictEqual(O.compare(some(1), none), 1)
 * assert.strictEqual(O.compare(some(1), some(2)), -1)
 * assert.strictEqual(O.compare(some(1), some(1)), 0)
 *
 * @category instances
 * @since 2.0.0
 */ var getOrd = function(O) {
    return {
        equals: exports.getEq(O).equals,
        compare: function(x, y) {
            return x === y ? 0 : exports.isSome(x) ? exports.isSome(y) ? O.compare(x.value, y.value) : 1 : -1;
        }
    };
};
exports.getOrd = getOrd;
/**
 * Monoid returning the left-most non-`None` value. If both operands are `Some`s then the inner values are
 * concatenated using the provided `Semigroup`
 *
 * | x       | y       | concat(x, y)       |
 * | ------- | ------- | ------------------ |
 * | none    | none    | none               |
 * | some(a) | none    | some(a)            |
 * | none    | some(b) | some(b)            |
 * | some(a) | some(b) | some(concat(a, b)) |
 *
 * @example
 * import { getMonoid, some, none } from 'fp-ts/Option'
 * import { SemigroupSum } from 'fp-ts/number'
 *
 * const M = getMonoid(SemigroupSum)
 * assert.deepStrictEqual(M.concat(none, none), none)
 * assert.deepStrictEqual(M.concat(some(1), none), some(1))
 * assert.deepStrictEqual(M.concat(none, some(1)), some(1))
 * assert.deepStrictEqual(M.concat(some(1), some(2)), some(3))
 *
 * @category instances
 * @since 2.0.0
 */ var getMonoid = function(S) {
    return {
        concat: function(x, y) {
            return exports.isNone(x) ? y : exports.isNone(y) ? x : exports.some(S.concat(x.value, y.value));
        },
        empty: exports.none
    };
};
exports.getMonoid = getMonoid;
/**
 * @category instance operations
 * @since 2.0.0
 */ var map = function(f) {
    return function(fa) {
        return exports.isNone(fa) ? exports.none : exports.some(f(fa.value));
    };
};
exports.map = map;
/**
 * @category instances
 * @since 2.7.0
 */ exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * @category instance operations
 * @since 2.7.0
 */ exports.of = exports.some;
/**
 * @category instances
 * @since 2.10.0
 */ exports.Pointed = {
    URI: exports.URI,
    of: exports.of
};
/**
 * @category instance operations
 * @since 2.0.0
 */ var ap = function(fa) {
    return function(fab) {
        return exports.isNone(fab) ? exports.none : exports.isNone(fa) ? exports.none : exports.some(fab.value(fa.value));
    };
};
exports.ap = ap;
/**
 * @category instances
 * @since 2.10.0
 */ exports.Apply = {
    URI: exports.URI,
    map: _map,
    ap: _ap
};
/**
 * @category instances
 * @since 2.7.0
 */ exports.Applicative = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category instance operations
 * @since 2.0.0
 */ var chain = function(f) {
    return function(ma) {
        return exports.isNone(ma) ? exports.none : f(ma.value);
    };
};
exports.chain = chain;
/**
 * @category instances
 * @since 2.10.0
 */ exports.Chain = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    chain: _chain
};
/**
 * @category instances
 * @since 2.7.0
 */ exports.Monad = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain
};
/**
 * @category instance operations
 * @since 2.0.0
 */ var reduce = function(b, f) {
    return function(fa) {
        return exports.isNone(fa) ? b : f(b, fa.value);
    };
};
exports.reduce = reduce;
/**
 * @category instance operations
 * @since 2.0.0
 */ var foldMap = function(M) {
    return function(f) {
        return function(fa) {
            return exports.isNone(fa) ? M.empty : f(fa.value);
        };
    };
};
exports.foldMap = foldMap;
/**
 * @category instance operations
 * @since 2.0.0
 */ var reduceRight = function(b, f) {
    return function(fa) {
        return exports.isNone(fa) ? b : f(fa.value, b);
    };
};
exports.reduceRight = reduceRight;
/**
 * @category instances
 * @since 2.7.0
 */ exports.Foldable = {
    URI: exports.URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category instance operations
 * @since 2.9.0
 */ var altW = function(that) {
    return function(fa) {
        return exports.isNone(fa) ? that() : fa;
    };
};
exports.altW = altW;
/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * In case of `Option` returns the left-most non-`None` value.
 *
 * @example
 * import * as O from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     O.some('a'),
 *     O.alt(() => O.some('b'))
 *   ),
 *   O.some('a')
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     O.none,
 *     O.alt(() => O.some('b'))
 *   ),
 *   O.some('b')
 * )
 *
 * @category instance operations
 * @since 2.0.0
 */ exports.alt = exports.altW;
/**
 * @category instances
 * @since 2.7.0
 */ exports.Alt = {
    URI: exports.URI,
    map: _map,
    alt: _alt
};
/**
 * @category instance operations
 * @since 2.7.0
 */ var zero = function() {
    return exports.none;
};
exports.zero = zero;
/**
 * @category instances
 * @since 2.11.0
 */ exports.Zero = {
    URI: exports.URI,
    zero: exports.zero
};
/**
 * @category constructors
 * @since 2.11.0
 */ exports.guard = /*#__PURE__*/ Zero_1.guard(exports.Zero, exports.Pointed);
/**
 * @category instances
 * @since 2.7.0
 */ exports.Alternative = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    alt: _alt,
    zero: exports.zero
};
/**
 * @category instance operations
 * @since 2.0.0
 */ var extend = function(f) {
    return function(wa) {
        return exports.isNone(wa) ? exports.none : exports.some(f(wa));
    };
};
exports.extend = extend;
/**
 * @category instances
 * @since 2.7.0
 */ exports.Extend = {
    URI: exports.URI,
    map: _map,
    extend: _extend
};
/**
 * @category instance operations
 * @since 2.0.0
 */ exports.compact = /*#__PURE__*/ exports.chain(function_1.identity);
var defaultSeparated = /*#__PURE__*/ Separated_1.separated(exports.none, exports.none);
/**
 * @category instance operations
 * @since 2.0.0
 */ var separate = function(ma) {
    return exports.isNone(ma) ? defaultSeparated : Separated_1.separated(exports.getLeft(ma.value), exports.getRight(ma.value));
};
exports.separate = separate;
/**
 * @category instances
 * @since 2.7.0
 */ exports.Compactable = {
    URI: exports.URI,
    compact: exports.compact,
    separate: exports.separate
};
/**
 * @category instance operations
 * @since 2.0.0
 */ var filter = function(predicate) {
    return function(fa) {
        return exports.isNone(fa) ? exports.none : predicate(fa.value) ? fa : exports.none;
    };
};
exports.filter = filter;
/**
 * @category instance operations
 * @since 2.0.0
 */ var filterMap = function(f) {
    return function(fa) {
        return exports.isNone(fa) ? exports.none : f(fa.value);
    };
};
exports.filterMap = filterMap;
/**
 * @category instance operations
 * @since 2.0.0
 */ var partition = function(predicate) {
    return function(fa) {
        return Separated_1.separated(_filter(fa, Predicate_1.not(predicate)), _filter(fa, predicate));
    };
};
exports.partition = partition;
/**
 * @category instance operations
 * @since 2.0.0
 */ var partitionMap = function(f) {
    return function_1.flow(exports.map(f), exports.separate);
};
exports.partitionMap = partitionMap;
/**
 * @category instances
 * @since 2.7.0
 */ exports.Filterable = {
    URI: exports.URI,
    map: _map,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap
};
/**
 * @category instance operations
 * @since 2.6.3
 */ var traverse = function(F) {
    return function(f) {
        return function(ta) {
            return exports.isNone(ta) ? F.of(exports.none) : F.map(f(ta.value), exports.some);
        };
    };
};
exports.traverse = traverse;
/**
 * @category instance operations
 * @since 2.6.3
 */ var sequence = function(F) {
    return function(ta) {
        return exports.isNone(ta) ? F.of(exports.none) : F.map(ta.value, exports.some);
    };
};
exports.sequence = sequence;
/**
 * @category instances
 * @since 2.7.0
 */ exports.Traversable = {
    URI: exports.URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence
};
var _wither = /*#__PURE__*/ Witherable_1.witherDefault(exports.Traversable, exports.Compactable);
var _wilt = /*#__PURE__*/ Witherable_1.wiltDefault(exports.Traversable, exports.Compactable);
/**
 * @category instance operations
 * @since 2.6.5
 */ var wither = function(F) {
    var _witherF = _wither(F);
    return function(f) {
        return function(fa) {
            return _witherF(fa, f);
        };
    };
};
exports.wither = wither;
/**
 * @category instance operations
 * @since 2.6.5
 */ var wilt = function(F) {
    var _wiltF = _wilt(F);
    return function(f) {
        return function(fa) {
            return _wiltF(fa, f);
        };
    };
};
exports.wilt = wilt;
/**
 * @category instances
 * @since 2.7.0
 */ exports.Witherable = {
    URI: exports.URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    wither: _wither,
    wilt: _wilt
};
/**
 * @category instance operations
 * @since 2.7.0
 */ var throwError = function() {
    return exports.none;
};
exports.throwError = throwError;
/**
 * @category instances
 * @since 2.7.0
 */ exports.MonadThrow = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: _chain,
    throwError: exports.throwError
};
/**
 * Transforms an `Either` to an `Option` discarding the error.
 *
 * Alias of [getRight](#getright)
 *
 * @category natural transformations
 * @since 2.0.0
 */ exports.fromEither = exports.getRight;
/**
 * @category instances
 * @since 2.11.0
 */ exports.FromEither = {
    URI: exports.URI,
    fromEither: exports.fromEither
};
// -------------------------------------------------------------------------------------
// refinements
// -------------------------------------------------------------------------------------
/**
 * Returns `true` if the option is an instance of `Some`, `false` otherwise.
 *
 * @example
 * import { some, none, isSome } from 'fp-ts/Option'
 *
 * assert.strictEqual(isSome(some(1)), true)
 * assert.strictEqual(isSome(none), false)
 *
 * @category refinements
 * @since 2.0.0
 */ exports.isSome = _.isSome;
/**
 * Returns `true` if the option is `None`, `false` otherwise.
 *
 * @example
 * import { some, none, isNone } from 'fp-ts/Option'
 *
 * assert.strictEqual(isNone(some(1)), false)
 * assert.strictEqual(isNone(none), true)
 *
 * @category refinements
 * @since 2.0.0
 */ var isNone = function(fa) {
    return fa._tag === 'None';
};
exports.isNone = isNone;
// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------
/**
 * Less strict version of [`match`](#match).
 *
 * @category destructors
 * @since 2.10.0
 */ var matchW = function(onNone, onSome) {
    return function(ma) {
        return exports.isNone(ma) ? onNone() : onSome(ma.value);
    };
};
exports.matchW = matchW;
/**
 * Alias of [`matchW`](#matchw).
 *
 * @category destructors
 * @since 2.10.0
 */ exports.foldW = exports.matchW;
/**
 * Takes a (lazy) default value, a function, and an `Option` value, if the `Option` value is `None` the default value is
 * returned, otherwise the function is applied to the value inside the `Some` and the result is returned.
 *
 * @example
 * import { some, none, match } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     match(() => 'a none', a => `a some containing ${a}`)
 *   ),
 *   'a some containing 1'
 * )
 *
 * assert.strictEqual(
 *   pipe(
 *     none,
 *     match(() => 'a none', a => `a some containing ${a}`)
 *   ),
 *   'a none'
 * )
 *
 * @category destructors
 * @since 2.10.0
 */ exports.match = exports.matchW;
/**
 * Alias of [`match`](#match).
 *
 * @category destructors
 * @since 2.0.0
 */ exports.fold = exports.match;
/**
 * Less strict version of [`getOrElse`](#getorelse).
 *
 * @category destructors
 * @since 2.6.0
 */ var getOrElseW = function(onNone) {
    return function(ma) {
        return exports.isNone(ma) ? onNone() : ma.value;
    };
};
exports.getOrElseW = getOrElseW;
/**
 * Extracts the value out of the structure, if it exists. Otherwise returns the given default value
 *
 * @example
 * import { some, none, getOrElse } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     getOrElse(() => 0)
 *   ),
 *   1
 * )
 * assert.strictEqual(
 *   pipe(
 *     none,
 *     getOrElse(() => 0)
 *   ),
 *   0
 * )
 *
 * @category destructors
 * @since 2.0.0
 */ exports.getOrElse = exports.getOrElseW;
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */ exports.flap = /*#__PURE__*/ Functor_1.flap(exports.Functor);
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */ exports.apFirst = /*#__PURE__*/ Apply_1.apFirst(exports.Apply);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */ exports.apSecond = /*#__PURE__*/ Apply_1.apSecond(exports.Apply);
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */ exports.flatten = exports.compact;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */ exports.chainFirst = /*#__PURE__*/ Chain_1.chainFirst(exports.Chain);
/**
 * Derivable from `Extend`.
 *
 * @category combinators
 * @since 2.0.0
 */ exports.duplicate = /*#__PURE__*/ exports.extend(function_1.identity);
/**
 * @category combinators
 * @since 2.11.0
 */ exports.fromEitherK = /*#__PURE__*/ FromEither_1.fromEitherK(exports.FromEither);
/**
 * @category combinators
 * @since 2.11.0
 */ exports.chainEitherK = /*#__PURE__*/ FromEither_1.chainEitherK(exports.FromEither, exports.Chain);
// -------------------------------------------------------------------------------------
// interop
// -------------------------------------------------------------------------------------
/**
 * Constructs a new `Option` from a nullable type. If the value is `null` or `undefined`, returns `None`, otherwise
 * returns the value wrapped in a `Some`.
 *
 * @example
 * import { none, some, fromNullable } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(fromNullable(undefined), none)
 * assert.deepStrictEqual(fromNullable(null), none)
 * assert.deepStrictEqual(fromNullable(1), some(1))
 *
 * @category interop
 * @since 2.0.0
 */ var fromNullable = function(a) {
    return a == null ? exports.none : exports.some(a);
};
exports.fromNullable = fromNullable;
/**
 * Transforms an exception into an `Option`. If `f` throws, returns `None`, otherwise returns the output wrapped in a
 * `Some`.
 *
 * See also [`tryCatchK`](#trycatchk).
 *
 * @example
 * import { none, some, tryCatch } from 'fp-ts/Option'
 *
 * assert.deepStrictEqual(
 *   tryCatch(() => {
 *     throw new Error()
 *   }),
 *   none
 * )
 * assert.deepStrictEqual(tryCatch(() => 1), some(1))
 *
 * @category interop
 * @since 2.0.0
 */ var tryCatch = function(f) {
    try {
        return exports.some(f());
    } catch (e) {
        return exports.none;
    }
};
exports.tryCatch = tryCatch;
/**
 * Converts a function that may throw to one returning a `Option`.
 *
 * @category interop
 * @since 2.10.0
 */ var tryCatchK = function(f) {
    return function() {
        var a = [];
        for(var _i = 0; _i < arguments.length; _i++)a[_i] = arguments[_i];
        return exports.tryCatch(function() {
            return f.apply(void 0, a);
        });
    };
};
exports.tryCatchK = tryCatchK;
/**
 * Returns a *smart constructor* from a function that returns a nullable value.
 *
 * @example
 * import { fromNullableK, none, some } from 'fp-ts/Option'
 *
 * const f = (s: string): number | undefined => {
 *   const n = parseFloat(s)
 *   return isNaN(n) ? undefined : n
 * }
 *
 * const g = fromNullableK(f)
 *
 * assert.deepStrictEqual(g('1'), some(1))
 * assert.deepStrictEqual(g('a'), none)
 *
 * @category interop
 * @since 2.9.0
 */ var fromNullableK = function(f) {
    return function_1.flow(f, exports.fromNullable);
};
exports.fromNullableK = fromNullableK;
/**
 * This is `chain` + `fromNullable`, useful when working with optional values.
 *
 * @example
 * import { some, none, fromNullable, chainNullableK } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * interface Employee {
 *   readonly company?: {
 *     readonly address?: {
 *       readonly street?: {
 *         readonly name?: string
 *       }
 *     }
 *   }
 * }
 *
 * const employee1: Employee = { company: { address: { street: { name: 'high street' } } } }
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     fromNullable(employee1.company),
 *     chainNullableK(company => company.address),
 *     chainNullableK(address => address.street),
 *     chainNullableK(street => street.name)
 *   ),
 *   some('high street')
 * )
 *
 * const employee2: Employee = { company: { address: { street: {} } } }
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     fromNullable(employee2.company),
 *     chainNullableK(company => company.address),
 *     chainNullableK(address => address.street),
 *     chainNullableK(street => street.name)
 *   ),
 *   none
 * )
 *
 * @category interop
 * @since 2.9.0
 */ var chainNullableK = function(f) {
    return function(ma) {
        return exports.isNone(ma) ? exports.none : exports.fromNullable(f(ma.value));
    };
};
exports.chainNullableK = chainNullableK;
/**
 * Extracts the value out of the structure, if it exists. Otherwise returns `null`.
 *
 * @example
 * import { some, none, toNullable } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     toNullable
 *   ),
 *   1
 * )
 * assert.strictEqual(
 *   pipe(
 *     none,
 *     toNullable
 *   ),
 *   null
 * )
 *
 * @category interop
 * @since 2.0.0
 */ exports.toNullable = /*#__PURE__*/ exports.match(function_1.constNull, function_1.identity);
/**
 * Extracts the value out of the structure, if it exists. Otherwise returns `undefined`.
 *
 * @example
 * import { some, none, toUndefined } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     toUndefined
 *   ),
 *   1
 * )
 * assert.strictEqual(
 *   pipe(
 *     none,
 *     toUndefined
 *   ),
 *   undefined
 * )
 *
 * @category interop
 * @since 2.0.0
 */ exports.toUndefined = /*#__PURE__*/ exports.match(function_1.constUndefined, function_1.identity);
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * Returns `true` if `ma` contains `a`
 *
 * @example
 * import { some, none, elem } from 'fp-ts/Option'
 * import * as N from 'fp-ts/number'
 *
 * assert.strictEqual(elem(N.Eq)(1, some(1)), true)
 * assert.strictEqual(elem(N.Eq)(2, some(1)), false)
 * assert.strictEqual(elem(N.Eq)(1, none), false)
 *
 * @since 2.0.0
 */ function elem(E) {
    return function(a, ma) {
        return exports.isNone(ma) ? false : E.equals(a, ma.value);
    };
}
exports.elem = elem;
/**
 * Returns `true` if the predicate is satisfied by the wrapped value
 *
 * @example
 * import { some, none, exists } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     exists(n => n > 0)
 *   ),
 *   true
 * )
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     exists(n => n > 1)
 *   ),
 *   false
 * )
 * assert.strictEqual(
 *   pipe(
 *     none,
 *     exists(n => n > 0)
 *   ),
 *   false
 * )
 *
 * @since 2.0.0
 */ var exists = function(predicate) {
    return function(ma) {
        return exports.isNone(ma) ? false : predicate(ma.value);
    };
};
exports.exists = exists;
// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------
/**
 * @since 2.9.0
 */ exports.Do = /*#__PURE__*/ exports.of(_.emptyRecord);
/**
 * @since 2.8.0
 */ exports.bindTo = /*#__PURE__*/ Functor_1.bindTo(exports.Functor);
/**
 * @since 2.8.0
 */ exports.bind = /*#__PURE__*/ Chain_1.bind(exports.Chain);
// -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------
/**
 * @since 2.8.0
 */ exports.apS = /*#__PURE__*/ Apply_1.apS(exports.Apply);
// -------------------------------------------------------------------------------------
// sequence T
// -------------------------------------------------------------------------------------
/**
 * @since 2.11.0
 */ exports.ApT = /*#__PURE__*/ exports.of(_.emptyReadonlyArray);
// -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------
/**
 * Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.11.0
 */ var traverseReadonlyNonEmptyArrayWithIndex = function(f) {
    return function(as) {
        var o = f(0, _.head(as));
        if (exports.isNone(o)) return exports.none;
        var out = [
            o.value
        ];
        for(var i = 1; i < as.length; i++){
            var o_1 = f(i, as[i]);
            if (exports.isNone(o_1)) return exports.none;
            out.push(o_1.value);
        }
        return exports.some(out);
    };
};
exports.traverseReadonlyNonEmptyArrayWithIndex = traverseReadonlyNonEmptyArrayWithIndex;
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.11.0
 */ var traverseReadonlyArrayWithIndex = function(f) {
    var g = exports.traverseReadonlyNonEmptyArrayWithIndex(f);
    return function(as) {
        return _.isNonEmpty(as) ? g(as) : exports.ApT;
    };
};
exports.traverseReadonlyArrayWithIndex = traverseReadonlyArrayWithIndex;
/**
 * @since 2.9.0
 */ exports.traverseArrayWithIndex = exports.traverseReadonlyArrayWithIndex;
/**
 * @since 2.9.0
 */ var traverseArray = function(f) {
    return exports.traverseReadonlyArrayWithIndex(function(_, a) {
        return f(a);
    });
};
exports.traverseArray = traverseArray;
/**
 * @since 2.9.0
 */ exports.sequenceArray = /*#__PURE__*/ exports.traverseArray(function_1.identity);
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
// tslint:disable: deprecation
/**
 * Use `Refinement` module instead.
 *
 * @since 2.0.0
 * @deprecated
 */ function getRefinement(getOption) {
    return function(a) {
        return exports.isSome(getOption(a));
    };
}
exports.getRefinement = getRefinement;
/**
 * Use [`chainNullableK`](#chainnullablek) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */ exports.mapNullable = exports.chainNullableK;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */ exports.option = {
    URI: exports.URI,
    map: _map,
    of: exports.of,
    ap: _ap,
    chain: _chain,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence,
    zero: exports.zero,
    alt: _alt,
    extend: _extend,
    compact: exports.compact,
    separate: exports.separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    wither: _wither,
    wilt: _wilt,
    throwError: exports.throwError
};
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getapplysemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */ exports.getApplySemigroup = /*#__PURE__*/ Apply_1.getApplySemigroup(exports.Apply);
/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getapplicativemonoid) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */ exports.getApplyMonoid = /*#__PURE__*/ Applicative_1.getApplicativeMonoid(exports.Applicative);
/**
 * Use
 *
 * ```ts
 * import { first } from 'fp-ts/Semigroup'
 * import { getMonoid } from 'fp-ts/Option'
 *
 * getMonoid(first())
 * ```
 *
 * instead.
 *
 * Monoid returning the left-most non-`None` value
 *
 * | x       | y       | concat(x, y) |
 * | ------- | ------- | ------------ |
 * | none    | none    | none         |
 * | some(a) | none    | some(a)      |
 * | none    | some(b) | some(b)      |
 * | some(a) | some(b) | some(a)      |
 *
 * @example
 * import { getFirstMonoid, some, none } from 'fp-ts/Option'
 *
 * const M = getFirstMonoid<number>()
 * assert.deepStrictEqual(M.concat(none, none), none)
 * assert.deepStrictEqual(M.concat(some(1), none), some(1))
 * assert.deepStrictEqual(M.concat(none, some(2)), some(2))
 * assert.deepStrictEqual(M.concat(some(1), some(2)), some(1))
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */ var getFirstMonoid = function() {
    return exports.getMonoid(Semigroup_1.first());
};
exports.getFirstMonoid = getFirstMonoid;
/**
 * Use
 *
 * ```ts
 * import { last } from 'fp-ts/Semigroup'
 * import { getMonoid } from 'fp-ts/Option'
 *
 * getMonoid(last())
 * ```
 *
 * instead.
 *
 * Monoid returning the right-most non-`None` value
 *
 * | x       | y       | concat(x, y) |
 * | ------- | ------- | ------------ |
 * | none    | none    | none         |
 * | some(a) | none    | some(a)      |
 * | none    | some(b) | some(b)      |
 * | some(a) | some(b) | some(b)      |
 *
 * @example
 * import { getLastMonoid, some, none } from 'fp-ts/Option'
 *
 * const M = getLastMonoid<number>()
 * assert.deepStrictEqual(M.concat(none, none), none)
 * assert.deepStrictEqual(M.concat(some(1), none), some(1))
 * assert.deepStrictEqual(M.concat(none, some(2)), some(2))
 * assert.deepStrictEqual(M.concat(some(1), some(2)), some(2))
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */ var getLastMonoid = function() {
    return exports.getMonoid(Semigroup_1.last());
};
exports.getLastMonoid = getLastMonoid;

},{"./Applicative":"aF5zE","./Apply":"dLIEt","./Chain":"5GlJ8","./FromEither":"f8h2s","./function":"i6pHr","./Functor":"807km","./internal":"92fyI","./Predicate":"9prnS","./Semigroup":"6Fb3T","./Separated":"1d4pB","./Witherable":"cv8J2","./Zero":"cDDA2"}],"aF5zE":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getApplicativeComposition = exports.getApplicativeMonoid = void 0;
/**
 * The `Applicative` type class extends the `Apply` type class with a `of` function, which can be used to create values
 * of type `f a` from values of type `a`.
 *
 * Where `Apply` provides the ability to lift functions of two or more arguments to functions whose arguments are
 * wrapped using `f`, and `Functor` provides the ability to lift functions of one argument, `pure` can be seen as the
 * function which lifts functions of _zero_ arguments. That is, `Applicative` functors support a lifting operation for
 * any number of function arguments.
 *
 * Instances must satisfy the following laws in addition to the `Apply` laws:
 *
 * 1. Identity: `A.ap(A.of(a => a), fa) <-> fa`
 * 2. Homomorphism: `A.ap(A.of(ab), A.of(a)) <-> A.of(ab(a))`
 * 3. Interchange: `A.ap(fab, A.of(a)) <-> A.ap(A.of(ab => ab(a)), fab)`
 *
 * Note. `Functor`'s `map` can be derived: `A.map(x, f) = A.ap(A.of(f), x)`
 *
 * @since 2.0.0
 */ var Apply_1 = require("./Apply");
var function_1 = require("./function");
var Functor_1 = require("./Functor");
function getApplicativeMonoid(F) {
    var f = Apply_1.getApplySemigroup(F);
    return function(M) {
        return {
            concat: f(M).concat,
            empty: F.of(M.empty)
        };
    };
}
exports.getApplicativeMonoid = getApplicativeMonoid;
/** @deprecated */ function getApplicativeComposition(F, G) {
    var map = Functor_1.getFunctorComposition(F, G).map;
    var _ap = Apply_1.ap(F, G);
    return {
        map: map,
        of: function(a) {
            return F.of(G.of(a));
        },
        ap: function(fgab, fga) {
            return function_1.pipe(fgab, _ap(fga));
        }
    };
}
exports.getApplicativeComposition = getApplicativeComposition;

},{"./Apply":"dLIEt","./function":"i6pHr","./Functor":"807km"}],"dLIEt":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sequenceS = exports.sequenceT = exports.getApplySemigroup = exports.apS = exports.apSecond = exports.apFirst = exports.ap = void 0;
var function_1 = require("./function");
function ap(F, G) {
    return function(fa) {
        return function(fab) {
            return F.ap(F.map(fab, function(gab) {
                return function(ga) {
                    return G.ap(gab, ga);
                };
            }), fa);
        };
    };
}
exports.ap = ap;
function apFirst(A) {
    return function(second) {
        return function(first) {
            return A.ap(A.map(first, function(a) {
                return function() {
                    return a;
                };
            }), second);
        };
    };
}
exports.apFirst = apFirst;
function apSecond(A) {
    return function(second) {
        return function(first) {
            return A.ap(A.map(first, function() {
                return function(b) {
                    return b;
                };
            }), second);
        };
    };
}
exports.apSecond = apSecond;
function apS(F) {
    return function(name, fb) {
        return function(fa) {
            return F.ap(F.map(fa, function(a) {
                return function(b) {
                    var _a;
                    return Object.assign({
                    }, a, (_a = {
                    }, _a[name] = b, _a));
                };
            }), fb);
        };
    };
}
exports.apS = apS;
function getApplySemigroup(F) {
    return function(S) {
        return {
            concat: function(first, second) {
                return F.ap(F.map(first, function(x) {
                    return function(y) {
                        return S.concat(x, y);
                    };
                }), second);
            }
        };
    };
}
exports.getApplySemigroup = getApplySemigroup;
function curried(f, n, acc) {
    return function(x) {
        var combined = Array(acc.length + 1);
        for(var i = 0; i < acc.length; i++)combined[i] = acc[i];
        combined[acc.length] = x;
        return n === 0 ? f.apply(null, combined) : curried(f, n - 1, combined);
    };
}
var tupleConstructors = {
    1: function(a) {
        return [
            a
        ];
    },
    2: function(a) {
        return function(b) {
            return [
                a,
                b
            ];
        };
    },
    3: function(a) {
        return function(b) {
            return function(c) {
                return [
                    a,
                    b,
                    c
                ];
            };
        };
    },
    4: function(a) {
        return function(b) {
            return function(c) {
                return function(d) {
                    return [
                        a,
                        b,
                        c,
                        d
                    ];
                };
            };
        };
    },
    5: function(a) {
        return function(b) {
            return function(c) {
                return function(d) {
                    return function(e) {
                        return [
                            a,
                            b,
                            c,
                            d,
                            e
                        ];
                    };
                };
            };
        };
    }
};
function getTupleConstructor(len) {
    if (!tupleConstructors.hasOwnProperty(len)) tupleConstructors[len] = curried(function_1.tuple, len - 1, []);
    return tupleConstructors[len];
}
function sequenceT(F) {
    return function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        var len = args.length;
        var f = getTupleConstructor(len);
        var fas = F.map(args[0], f);
        for(var i = 1; i < len; i++)fas = F.ap(fas, args[i]);
        return fas;
    };
}
exports.sequenceT = sequenceT;
function getRecordConstructor(keys) {
    var len = keys.length;
    switch(len){
        case 1:
            return function(a) {
                var _a;
                return _a = {
                }, _a[keys[0]] = a, _a;
            };
        case 2:
            return function(a) {
                return function(b) {
                    var _a;
                    return _a = {
                    }, _a[keys[0]] = a, _a[keys[1]] = b, _a;
                };
            };
        case 3:
            return function(a) {
                return function(b) {
                    return function(c) {
                        var _a;
                        return _a = {
                        }, _a[keys[0]] = a, _a[keys[1]] = b, _a[keys[2]] = c, _a;
                    };
                };
            };
        case 4:
            return function(a) {
                return function(b) {
                    return function(c) {
                        return function(d) {
                            var _a;
                            return _a = {
                            }, _a[keys[0]] = a, _a[keys[1]] = b, _a[keys[2]] = c, _a[keys[3]] = d, _a;
                        };
                    };
                };
            };
        case 5:
            return function(a) {
                return function(b) {
                    return function(c) {
                        return function(d) {
                            return function(e) {
                                var _a;
                                return _a = {
                                }, _a[keys[0]] = a, _a[keys[1]] = b, _a[keys[2]] = c, _a[keys[3]] = d, _a[keys[4]] = e, _a;
                            };
                        };
                    };
                };
            };
        default:
            return curried(function() {
                var args = [];
                for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
                var r = {
                };
                for(var i = 0; i < len; i++)r[keys[i]] = args[i];
                return r;
            }, len - 1, []);
    }
}
function sequenceS(F) {
    return function(r) {
        var keys = Object.keys(r);
        var len = keys.length;
        var f = getRecordConstructor(keys);
        var fr = F.map(r[keys[0]], f);
        for(var i = 1; i < len; i++)fr = F.ap(fr, r[keys[i]]);
        return fr;
    };
}
exports.sequenceS = sequenceS;

},{"./function":"i6pHr"}],"i6pHr":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEndomorphismMonoid = exports.not = exports.SK = exports.hole = exports.pipe = exports.untupled = exports.tupled = exports.absurd = exports.decrement = exports.increment = exports.tuple = exports.flow = exports.flip = exports.constVoid = exports.constUndefined = exports.constNull = exports.constFalse = exports.constTrue = exports.constant = exports.unsafeCoerce = exports.identity = exports.apply = exports.getRing = exports.getSemiring = exports.getMonoid = exports.getSemigroup = exports.getBooleanAlgebra = void 0;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.10.0
 */ var getBooleanAlgebra = function(B) {
    return function() {
        return {
            meet: function(x, y) {
                return function(a) {
                    return B.meet(x(a), y(a));
                };
            },
            join: function(x, y) {
                return function(a) {
                    return B.join(x(a), y(a));
                };
            },
            zero: function() {
                return B.zero;
            },
            one: function() {
                return B.one;
            },
            implies: function(x, y) {
                return function(a) {
                    return B.implies(x(a), y(a));
                };
            },
            not: function(x) {
                return function(a) {
                    return B.not(x(a));
                };
            }
        };
    };
};
exports.getBooleanAlgebra = getBooleanAlgebra;
/**
 * Unary functions form a semigroup as long as you can provide a semigroup for the codomain.
 *
 * @example
 * import { Predicate, getSemigroup } from 'fp-ts/function'
 * import * as B from 'fp-ts/boolean'
 *
 * const f: Predicate<number> = (n) => n <= 2
 * const g: Predicate<number> = (n) => n >= 0
 *
 * const S1 = getSemigroup(B.SemigroupAll)<number>()
 *
 * assert.deepStrictEqual(S1.concat(f, g)(1), true)
 * assert.deepStrictEqual(S1.concat(f, g)(3), false)
 *
 * const S2 = getSemigroup(B.SemigroupAny)<number>()
 *
 * assert.deepStrictEqual(S2.concat(f, g)(1), true)
 * assert.deepStrictEqual(S2.concat(f, g)(3), true)
 *
 * @category instances
 * @since 2.10.0
 */ var getSemigroup = function(S) {
    return function() {
        return {
            concat: function(f, g) {
                return function(a) {
                    return S.concat(f(a), g(a));
                };
            }
        };
    };
};
exports.getSemigroup = getSemigroup;
/**
 * Unary functions form a monoid as long as you can provide a monoid for the codomain.
 *
 * @example
 * import { Predicate } from 'fp-ts/Predicate'
 * import { getMonoid } from 'fp-ts/function'
 * import * as B from 'fp-ts/boolean'
 *
 * const f: Predicate<number> = (n) => n <= 2
 * const g: Predicate<number> = (n) => n >= 0
 *
 * const M1 = getMonoid(B.MonoidAll)<number>()
 *
 * assert.deepStrictEqual(M1.concat(f, g)(1), true)
 * assert.deepStrictEqual(M1.concat(f, g)(3), false)
 *
 * const M2 = getMonoid(B.MonoidAny)<number>()
 *
 * assert.deepStrictEqual(M2.concat(f, g)(1), true)
 * assert.deepStrictEqual(M2.concat(f, g)(3), true)
 *
 * @category instances
 * @since 2.10.0
 */ var getMonoid = function(M) {
    var getSemigroupM = exports.getSemigroup(M);
    return function() {
        return {
            concat: getSemigroupM().concat,
            empty: function() {
                return M.empty;
            }
        };
    };
};
exports.getMonoid = getMonoid;
/**
 * @category instances
 * @since 2.10.0
 */ var getSemiring = function(S) {
    return {
        add: function(f, g) {
            return function(x) {
                return S.add(f(x), g(x));
            };
        },
        zero: function() {
            return S.zero;
        },
        mul: function(f, g) {
            return function(x) {
                return S.mul(f(x), g(x));
            };
        },
        one: function() {
            return S.one;
        }
    };
};
exports.getSemiring = getSemiring;
/**
 * @category instances
 * @since 2.10.0
 */ var getRing = function(R) {
    var S = exports.getSemiring(R);
    return {
        add: S.add,
        mul: S.mul,
        one: S.one,
        zero: S.zero,
        sub: function(f, g) {
            return function(x) {
                return R.sub(f(x), g(x));
            };
        }
    };
};
exports.getRing = getRing;
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * @since 2.11.0
 */ var apply = function(a) {
    return function(f) {
        return f(a);
    };
};
exports.apply = apply;
/**
 * @since 2.0.0
 */ function identity(a) {
    return a;
}
exports.identity = identity;
/**
 * @since 2.0.0
 */ exports.unsafeCoerce = identity;
/**
 * @since 2.0.0
 */ function constant(a) {
    return function() {
        return a;
    };
}
exports.constant = constant;
/**
 * A thunk that returns always `true`.
 *
 * @since 2.0.0
 */ exports.constTrue = /*#__PURE__*/ constant(true);
/**
 * A thunk that returns always `false`.
 *
 * @since 2.0.0
 */ exports.constFalse = /*#__PURE__*/ constant(false);
/**
 * A thunk that returns always `null`.
 *
 * @since 2.0.0
 */ exports.constNull = /*#__PURE__*/ constant(null);
/**
 * A thunk that returns always `undefined`.
 *
 * @since 2.0.0
 */ exports.constUndefined = /*#__PURE__*/ constant(undefined);
/**
 * A thunk that returns always `void`.
 *
 * @since 2.0.0
 */ exports.constVoid = exports.constUndefined;
/**
 * Flips the order of the arguments of a function of two arguments.
 *
 * @since 2.0.0
 */ function flip(f) {
    return function(b, a) {
        return f(a, b);
    };
}
exports.flip = flip;
function flow(ab, bc, cd, de, ef, fg, gh, hi, ij) {
    switch(arguments.length){
        case 1:
            return ab;
        case 2:
            return function() {
                return bc(ab.apply(this, arguments));
            };
        case 3:
            return function() {
                return cd(bc(ab.apply(this, arguments)));
            };
        case 4:
            return function() {
                return de(cd(bc(ab.apply(this, arguments))));
            };
        case 5:
            return function() {
                return ef(de(cd(bc(ab.apply(this, arguments)))));
            };
        case 6:
            return function() {
                return fg(ef(de(cd(bc(ab.apply(this, arguments))))));
            };
        case 7:
            return function() {
                return gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))));
            };
        case 8:
            return function() {
                return hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments))))))));
            };
        case 9:
            return function() {
                return ij(hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))))));
            };
    }
    return;
}
exports.flow = flow;
/**
 * @since 2.0.0
 */ function tuple() {
    var t = [];
    for(var _i = 0; _i < arguments.length; _i++)t[_i] = arguments[_i];
    return t;
}
exports.tuple = tuple;
/**
 * @since 2.0.0
 */ function increment(n) {
    return n + 1;
}
exports.increment = increment;
/**
 * @since 2.0.0
 */ function decrement(n) {
    return n - 1;
}
exports.decrement = decrement;
/**
 * @since 2.0.0
 */ function absurd(_) {
    throw new Error('Called `absurd` function which should be uncallable');
}
exports.absurd = absurd;
/**
 * Creates a tupled version of this function: instead of `n` arguments, it accepts a single tuple argument.
 *
 * @example
 * import { tupled } from 'fp-ts/function'
 *
 * const add = tupled((x: number, y: number): number => x + y)
 *
 * assert.strictEqual(add([1, 2]), 3)
 *
 * @since 2.4.0
 */ function tupled(f) {
    return function(a) {
        return f.apply(void 0, a);
    };
}
exports.tupled = tupled;
/**
 * Inverse function of `tupled`
 *
 * @since 2.4.0
 */ function untupled(f) {
    return function() {
        var a = [];
        for(var _i = 0; _i < arguments.length; _i++)a[_i] = arguments[_i];
        return f(a);
    };
}
exports.untupled = untupled;
function pipe(a, ab, bc, cd, de, ef, fg, gh, hi, ij, jk, kl, lm, mn, no, op, pq, qr, rs, st) {
    switch(arguments.length){
        case 1:
            return a;
        case 2:
            return ab(a);
        case 3:
            return bc(ab(a));
        case 4:
            return cd(bc(ab(a)));
        case 5:
            return de(cd(bc(ab(a))));
        case 6:
            return ef(de(cd(bc(ab(a)))));
        case 7:
            return fg(ef(de(cd(bc(ab(a))))));
        case 8:
            return gh(fg(ef(de(cd(bc(ab(a)))))));
        case 9:
            return hi(gh(fg(ef(de(cd(bc(ab(a))))))));
        case 10:
            return ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))));
        case 11:
            return jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a))))))))));
        case 12:
            return kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))))));
        case 13:
            return lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a))))))))))));
        case 14:
            return mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))))))));
        case 15:
            return no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a))))))))))))));
        case 16:
            return op(no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))))))))));
        case 17:
            return pq(op(no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a))))))))))))))));
        case 18:
            return qr(pq(op(no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))))))))))));
        case 19:
            return rs(qr(pq(op(no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a))))))))))))))))));
        case 20:
            return st(rs(qr(pq(op(no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))))))))))))));
    }
    return;
}
exports.pipe = pipe;
/**
 * Type hole simulation
 *
 * @since 2.7.0
 */ exports.hole = absurd;
/**
 * @since 2.11.0
 */ var SK = function(_, b) {
    return b;
};
exports.SK = SK;
/**
 * Use `Predicate` module instead.
 *
 * @since 2.0.0
 * @deprecated
 */ function not(predicate) {
    return function(a) {
        return !predicate(a);
    };
}
exports.not = not;
/**
 * Use `Endomorphism` module instead.
 *
 * @category instances
 * @since 2.10.0
 * @deprecated
 */ var getEndomorphismMonoid = function() {
    return {
        concat: function(first, second) {
            return flow(first, second);
        },
        empty: identity
    };
};
exports.getEndomorphismMonoid = getEndomorphismMonoid;

},{}],"807km":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getFunctorComposition = exports.bindTo = exports.flap = exports.map = void 0;
/**
 * A `Functor` is a type constructor which supports a mapping operation `map`.
 *
 * `map` can be used to turn functions `a -> b` into functions `f a -> f b` whose argument and return types use the type
 * constructor `f` to represent some computational context.
 *
 * Instances must satisfy the following laws:
 *
 * 1. Identity: `F.map(fa, a => a) <-> fa`
 * 2. Composition: `F.map(fa, a => bc(ab(a))) <-> F.map(F.map(fa, ab), bc)`
 *
 * @since 2.0.0
 */ var function_1 = require("./function");
function map(F, G) {
    return function(f) {
        return function(fa) {
            return F.map(fa, function(ga) {
                return G.map(ga, f);
            });
        };
    };
}
exports.map = map;
function flap(F) {
    return function(a) {
        return function(fab) {
            return F.map(fab, function(f) {
                return f(a);
            });
        };
    };
}
exports.flap = flap;
function bindTo(F) {
    return function(name) {
        return function(fa) {
            return F.map(fa, function(a) {
                var _a;
                return _a = {
                }, _a[name] = a, _a;
            });
        };
    };
}
exports.bindTo = bindTo;
/** @deprecated */ function getFunctorComposition(F, G) {
    var _map = map(F, G);
    return {
        map: function(fga, f) {
            return function_1.pipe(fga, _map(f));
        }
    };
}
exports.getFunctorComposition = getFunctorComposition;

},{"./function":"i6pHr"}],"5GlJ8":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bind = exports.chainFirst = void 0;
function chainFirst(M) {
    return function(f) {
        return function(first) {
            return M.chain(first, function(a) {
                return M.map(f(a), function() {
                    return a;
                });
            });
        };
    };
}
exports.chainFirst = chainFirst;
function bind(M) {
    return function(name, f) {
        return function(ma) {
            return M.chain(ma, function(a) {
                return M.map(f(a), function(b) {
                    var _a;
                    return Object.assign({
                    }, a, (_a = {
                    }, _a[name] = b, _a));
                });
            });
        };
    };
}
exports.bind = bind;

},{}],"f8h2s":[function(require,module,exports) {
"use strict";
/**
 * The `FromEither` type class represents those data types which support errors.
 *
 * @since 2.10.0
 */ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {
    };
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.filterOrElse = exports.chainEitherK = exports.fromEitherK = exports.chainOptionK = exports.fromOptionK = exports.fromPredicate = exports.fromOption = void 0;
var function_1 = require("./function");
var _ = __importStar(require("./internal"));
function fromOption(F) {
    return function(onNone) {
        return function(ma) {
            return F.fromEither(_.isNone(ma) ? _.left(onNone()) : _.right(ma.value));
        };
    };
}
exports.fromOption = fromOption;
function fromPredicate(F) {
    return function(predicate, onFalse) {
        return function(a) {
            return F.fromEither(predicate(a) ? _.right(a) : _.left(onFalse(a)));
        };
    };
}
exports.fromPredicate = fromPredicate;
function fromOptionK(F) {
    var fromOptionF = fromOption(F);
    return function(onNone) {
        var from = fromOptionF(onNone);
        return function(f) {
            return function_1.flow(f, from);
        };
    };
}
exports.fromOptionK = fromOptionK;
function chainOptionK(F, M) {
    var fromOptionKF = fromOptionK(F);
    return function(onNone) {
        var from = fromOptionKF(onNone);
        return function(f) {
            return function(ma) {
                return M.chain(ma, from(f));
            };
        };
    };
}
exports.chainOptionK = chainOptionK;
function fromEitherK(F) {
    return function(f) {
        return function_1.flow(f, F.fromEither);
    };
}
exports.fromEitherK = fromEitherK;
function chainEitherK(F, M) {
    var fromEitherKF = fromEitherK(F);
    return function(f) {
        return function(ma) {
            return M.chain(ma, fromEitherKF(f));
        };
    };
}
exports.chainEitherK = chainEitherK;
function filterOrElse(F, M) {
    return function(predicate, onFalse) {
        return function(ma) {
            return M.chain(ma, function(a) {
                return F.fromEither(predicate(a) ? _.right(a) : _.left(onFalse(a)));
            });
        };
    };
}
exports.filterOrElse = filterOrElse;

},{"./function":"i6pHr","./internal":"92fyI"}],"92fyI":[function(require,module,exports) {
"use strict";
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromReadonlyNonEmptyArray = exports.has = exports.emptyRecord = exports.emptyReadonlyArray = exports.tail = exports.head = exports.isNonEmpty = exports.singleton = exports.right = exports.left = exports.isRight = exports.isLeft = exports.some = exports.none = exports.isSome = exports.isNone = void 0;
// -------------------------------------------------------------------------------------
// Option
// -------------------------------------------------------------------------------------
/** @internal */ var isNone = function(fa) {
    return fa._tag === 'None';
};
exports.isNone = isNone;
/** @internal */ var isSome = function(fa) {
    return fa._tag === 'Some';
};
exports.isSome = isSome;
/** @internal */ exports.none = {
    _tag: 'None'
};
/** @internal */ var some = function(a) {
    return {
        _tag: 'Some',
        value: a
    };
};
exports.some = some;
// -------------------------------------------------------------------------------------
// Either
// -------------------------------------------------------------------------------------
/** @internal */ var isLeft = function(ma) {
    return ma._tag === 'Left';
};
exports.isLeft = isLeft;
/** @internal */ var isRight = function(ma) {
    return ma._tag === 'Right';
};
exports.isRight = isRight;
/** @internal */ var left = function(e) {
    return {
        _tag: 'Left',
        left: e
    };
};
exports.left = left;
/** @internal */ var right = function(a) {
    return {
        _tag: 'Right',
        right: a
    };
};
exports.right = right;
// -------------------------------------------------------------------------------------
// ReadonlyNonEmptyArray
// -------------------------------------------------------------------------------------
/** @internal */ var singleton = function(a) {
    return [
        a
    ];
};
exports.singleton = singleton;
/** @internal */ var isNonEmpty = function(as) {
    return as.length > 0;
};
exports.isNonEmpty = isNonEmpty;
/** @internal */ var head = function(as) {
    return as[0];
};
exports.head = head;
/** @internal */ var tail = function(as) {
    return as.slice(1);
};
exports.tail = tail;
// -------------------------------------------------------------------------------------
// empty
// -------------------------------------------------------------------------------------
/** @internal */ exports.emptyReadonlyArray = [];
/** @internal */ exports.emptyRecord = {
};
// -------------------------------------------------------------------------------------
// Record
// -------------------------------------------------------------------------------------
/** @internal */ exports.has = Object.prototype.hasOwnProperty;
// -------------------------------------------------------------------------------------
// NonEmptyArray
// -------------------------------------------------------------------------------------
/** @internal */ var fromReadonlyNonEmptyArray = function(as) {
    return __spreadArray([
        as[0]
    ], as.slice(1));
};
exports.fromReadonlyNonEmptyArray = fromReadonlyNonEmptyArray;

},{}],"9prnS":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.and = exports.or = exports.not = exports.Contravariant = exports.getMonoidAll = exports.getSemigroupAll = exports.getMonoidAny = exports.getSemigroupAny = exports.URI = exports.contramap = void 0;
var function_1 = require("./function");
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
var contramap_ = function(predicate, f) {
    return function_1.pipe(predicate, exports.contramap(f));
};
/**
 * @category Contravariant
 * @since 2.11.0
 */ var contramap = function(f) {
    return function(predicate) {
        return function_1.flow(f, predicate);
    };
};
exports.contramap = contramap;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.11.0
 */ exports.URI = 'Predicate';
/**
 * @category instances
 * @since 2.11.0
 */ var getSemigroupAny = function() {
    return {
        concat: function(first, second) {
            return function_1.pipe(first, exports.or(second));
        }
    };
};
exports.getSemigroupAny = getSemigroupAny;
/**
 * @category instances
 * @since 2.11.0
 */ var getMonoidAny = function() {
    return {
        concat: exports.getSemigroupAny().concat,
        empty: function_1.constFalse
    };
};
exports.getMonoidAny = getMonoidAny;
/**
 * @category instances
 * @since 2.11.0
 */ var getSemigroupAll = function() {
    return {
        concat: function(first, second) {
            return function_1.pipe(first, exports.and(second));
        }
    };
};
exports.getSemigroupAll = getSemigroupAll;
/**
 * @category instances
 * @since 2.11.0
 */ var getMonoidAll = function() {
    return {
        concat: exports.getSemigroupAll().concat,
        empty: function_1.constTrue
    };
};
exports.getMonoidAll = getMonoidAll;
/**
 * @category instances
 * @since 2.11.0
 */ exports.Contravariant = {
    URI: exports.URI,
    contramap: contramap_
};
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * @since 2.11.0
 */ var not = function(predicate) {
    return function(a) {
        return !predicate(a);
    };
};
exports.not = not;
/**
 * @since 2.11.0
 */ var or = function(second) {
    return function(first) {
        return function(a) {
            return first(a) || second(a);
        };
    };
};
exports.or = or;
/**
 * @since 2.11.0
 */ var and = function(second) {
    return function(first) {
        return function(a) {
            return first(a) && second(a);
        };
    };
};
exports.and = and;

},{"./function":"i6pHr"}],"6Fb3T":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {
    };
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.semigroupProduct = exports.semigroupSum = exports.semigroupString = exports.getFunctionSemigroup = exports.semigroupAny = exports.semigroupAll = exports.fold = exports.getIntercalateSemigroup = exports.getMeetSemigroup = exports.getJoinSemigroup = exports.getDualSemigroup = exports.getStructSemigroup = exports.getTupleSemigroup = exports.getFirstSemigroup = exports.getLastSemigroup = exports.getObjectSemigroup = exports.semigroupVoid = exports.concatAll = exports.last = exports.first = exports.intercalate = exports.tuple = exports.struct = exports.reverse = exports.constant = exports.max = exports.min = void 0;
/**
 * If a type `A` can form a `Semigroup` it has an **associative** binary operation.
 *
 * ```ts
 * interface Semigroup<A> {
 *   readonly concat: (x: A, y: A) => A
 * }
 * ```
 *
 * Associativity means the following equality must hold for any choice of `x`, `y`, and `z`.
 *
 * ```ts
 * concat(x, concat(y, z)) = concat(concat(x, y), z)
 * ```
 *
 * A common example of a semigroup is the type `string` with the operation `+`.
 *
 * ```ts
 * import { Semigroup } from 'fp-ts/Semigroup'
 *
 * const semigroupString: Semigroup<string> = {
 *   concat: (x, y) => x + y
 * }
 *
 * const x = 'x'
 * const y = 'y'
 * const z = 'z'
 *
 * semigroupString.concat(x, y) // 'xy'
 *
 * semigroupString.concat(x, semigroupString.concat(y, z)) // 'xyz'
 *
 * semigroupString.concat(semigroupString.concat(x, y), z) // 'xyz'
 * ```
 *
 * *Adapted from https://typelevel.org/cats*
 *
 * @since 2.0.0
 */ var function_1 = require("./function");
var _ = __importStar(require("./internal"));
var M = __importStar(require("./Magma"));
var Or = __importStar(require("./Ord"));
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * Get a semigroup where `concat` will return the minimum, based on the provided order.
 *
 * @example
 * import * as N from 'fp-ts/number'
 * import * as S from 'fp-ts/Semigroup'
 *
 * const S1 = S.min(N.Ord)
 *
 * assert.deepStrictEqual(S1.concat(1, 2), 1)
 *
 * @category constructors
 * @since 2.10.0
 */ var min = function(O) {
    return {
        concat: Or.min(O)
    };
};
exports.min = min;
/**
 * Get a semigroup where `concat` will return the maximum, based on the provided order.
 *
 * @example
 * import * as N from 'fp-ts/number'
 * import * as S from 'fp-ts/Semigroup'
 *
 * const S1 = S.max(N.Ord)
 *
 * assert.deepStrictEqual(S1.concat(1, 2), 2)
 *
 * @category constructors
 * @since 2.10.0
 */ var max = function(O) {
    return {
        concat: Or.max(O)
    };
};
exports.max = max;
/**
 * @category constructors
 * @since 2.10.0
 */ var constant = function(a) {
    return {
        concat: function() {
            return a;
        }
    };
};
exports.constant = constant;
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * The dual of a `Semigroup`, obtained by swapping the arguments of `concat`.
 *
 * @example
 * import { reverse } from 'fp-ts/Semigroup'
 * import * as S from 'fp-ts/string'
 *
 * assert.deepStrictEqual(reverse(S.Semigroup).concat('a', 'b'), 'ba')
 *
 * @category combinators
 * @since 2.10.0
 */ exports.reverse = M.reverse;
/**
 * Given a struct of semigroups returns a semigroup for the struct.
 *
 * @example
 * import { struct } from 'fp-ts/Semigroup'
 * import * as N from 'fp-ts/number'
 *
 * interface Point {
 *   readonly x: number
 *   readonly y: number
 * }
 *
 * const S = struct<Point>({
 *   x: N.SemigroupSum,
 *   y: N.SemigroupSum
 * })
 *
 * assert.deepStrictEqual(S.concat({ x: 1, y: 2 }, { x: 3, y: 4 }), { x: 4, y: 6 })
 *
 * @category combinators
 * @since 2.10.0
 */ var struct = function(semigroups) {
    return {
        concat: function(first1, second) {
            var r = {
            };
            for(var k in semigroups)if (_.has.call(semigroups, k)) r[k] = semigroups[k].concat(first1[k], second[k]);
            return r;
        }
    };
};
exports.struct = struct;
/**
 * Given a tuple of semigroups returns a semigroup for the tuple.
 *
 * @example
 * import { tuple } from 'fp-ts/Semigroup'
 * import * as B from 'fp-ts/boolean'
 * import * as N from 'fp-ts/number'
 * import * as S from 'fp-ts/string'
 *
 * const S1 = tuple(S.Semigroup, N.SemigroupSum)
 * assert.deepStrictEqual(S1.concat(['a', 1], ['b', 2]), ['ab', 3])
 *
 * const S2 = tuple(S.Semigroup, N.SemigroupSum, B.SemigroupAll)
 * assert.deepStrictEqual(S2.concat(['a', 1, true], ['b', 2, false]), ['ab', 3, false])
 *
 * @category combinators
 * @since 2.10.0
 */ var tuple = function() {
    var semigroups = [];
    for(var _i = 0; _i < arguments.length; _i++)semigroups[_i] = arguments[_i];
    return {
        concat: function(first2, second) {
            return semigroups.map(function(s, i) {
                return s.concat(first2[i], second[i]);
            });
        }
    };
};
exports.tuple = tuple;
/**
 * Between each pair of elements insert `middle`.
 *
 * @example
 * import { intercalate } from 'fp-ts/Semigroup'
 * import * as S from 'fp-ts/string'
 * import { pipe } from 'fp-ts/function'
 *
 * const S1 = pipe(S.Semigroup, intercalate(' + '))
 *
 * assert.strictEqual(S1.concat('a', 'b'), 'a + b')
 *
 * @category combinators
 * @since 2.10.0
 */ var intercalate = function(middle) {
    return function(S) {
        return {
            concat: function(x, y) {
                return S.concat(x, S.concat(middle, y));
            }
        };
    };
};
exports.intercalate = intercalate;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * Always return the first argument.
 *
 * @example
 * import * as S from 'fp-ts/Semigroup'
 *
 * assert.deepStrictEqual(S.first<number>().concat(1, 2), 1)
 *
 * @category instances
 * @since 2.10.0
 */ var first = function() {
    return {
        concat: function_1.identity
    };
};
exports.first = first;
/**
 * Always return the last argument.
 *
 * @example
 * import * as S from 'fp-ts/Semigroup'
 *
 * assert.deepStrictEqual(S.last<number>().concat(1, 2), 2)
 *
 * @category instances
 * @since 2.10.0
 */ var last = function() {
    return {
        concat: function(_, y) {
            return y;
        }
    };
};
exports.last = last;
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * Given a sequence of `as`, concat them and return the total.
 *
 * If `as` is empty, return the provided `startWith` value.
 *
 * @example
 * import { concatAll } from 'fp-ts/Semigroup'
 * import * as N from 'fp-ts/number'
 *
 * const sum = concatAll(N.SemigroupSum)(0)
 *
 * assert.deepStrictEqual(sum([1, 2, 3]), 6)
 * assert.deepStrictEqual(sum([]), 0)
 *
 * @since 2.10.0
 */ exports.concatAll = M.concatAll;
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use `void` module instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */ exports.semigroupVoid = exports.constant(undefined);
/**
 * Use [`getAssignSemigroup`](./struct.ts.html#getAssignSemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */ var getObjectSemigroup = function() {
    return {
        concat: function(first3, second) {
            return Object.assign({
            }, first3, second);
        }
    };
};
exports.getObjectSemigroup = getObjectSemigroup;
/**
 * Use [`last`](#last) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */ exports.getLastSemigroup = exports.last;
/**
 * Use [`first`](#first) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */ exports.getFirstSemigroup = exports.first;
/**
 * Use [`tuple`](#tuple) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */ exports.getTupleSemigroup = exports.tuple;
/**
 * Use [`struct`](#struct) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */ exports.getStructSemigroup = exports.struct;
/**
 * Use [`reverse`](#reverse) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */ exports.getDualSemigroup = exports.reverse;
/**
 * Use [`max`](#max) instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */ exports.getJoinSemigroup = exports.max;
/**
 * Use [`min`](#min) instead.
 *
 * @category constructors
 * @since 2.0.0
 * @deprecated
 */ exports.getMeetSemigroup = exports.min;
/**
 * Use [`intercalate`](#intercalate) instead.
 *
 * @category combinators
 * @since 2.5.0
 * @deprecated
 */ exports.getIntercalateSemigroup = exports.intercalate;
function fold(S) {
    var concatAllS = exports.concatAll(S);
    return function(startWith, as) {
        return as === undefined ? concatAllS(startWith) : concatAllS(startWith)(as);
    };
}
exports.fold = fold;
/**
 * Use [`SemigroupAll`](./boolean.ts.html#SemigroupAll) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */ exports.semigroupAll = {
    concat: function(x, y) {
        return x && y;
    }
};
/**
 * Use [`SemigroupAny`](./boolean.ts.html#SemigroupAny) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */ exports.semigroupAny = {
    concat: function(x, y) {
        return x || y;
    }
};
/**
 * Use [`getSemigroup`](./function.ts.html#getSemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */ exports.getFunctionSemigroup = function_1.getSemigroup;
/**
 * Use [`Semigroup`](./string.ts.html#Semigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */ exports.semigroupString = {
    concat: function(x, y) {
        return x + y;
    }
};
/**
 * Use [`SemigroupSum`](./number.ts.html#SemigroupSum) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */ exports.semigroupSum = {
    concat: function(x, y) {
        return x + y;
    }
};
/**
 * Use [`SemigroupProduct`](./number.ts.html#SemigroupProduct) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */ exports.semigroupProduct = {
    concat: function(x, y) {
        return x * y;
    }
};

},{"./function":"i6pHr","./internal":"92fyI","./Magma":"44RDH","./Ord":"NAaD8"}],"44RDH":[function(require,module,exports) {
"use strict";
/**
 * A `Magma` is a pair `(A, concat)` in which `A` is a non-empty set and `concat` is a binary operation on `A`
 *
 * See [Semigroup](https://gcanti.github.io/fp-ts/modules/Semigroup.ts.html) for some instances.
 *
 * @since 2.0.0
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.concatAll = exports.endo = exports.filterSecond = exports.filterFirst = exports.reverse = void 0;
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * The dual of a `Magma`, obtained by swapping the arguments of `concat`.
 *
 * @example
 * import { reverse, concatAll } from 'fp-ts/Magma'
 * import * as N from 'fp-ts/number'
 *
 * const subAll = concatAll(reverse(N.MagmaSub))(0)
 *
 * assert.deepStrictEqual(subAll([1, 2, 3]), 2)
 *
 * @category combinators
 * @since 2.11.0
 */ var reverse = function(M) {
    return {
        concat: function(first, second) {
            return M.concat(second, first);
        }
    };
};
exports.reverse = reverse;
/**
 * @category combinators
 * @since 2.11.0
 */ var filterFirst = function(predicate) {
    return function(M) {
        return {
            concat: function(first, second) {
                return predicate(first) ? M.concat(first, second) : second;
            }
        };
    };
};
exports.filterFirst = filterFirst;
/**
 * @category combinators
 * @since 2.11.0
 */ var filterSecond = function(predicate) {
    return function(M) {
        return {
            concat: function(first, second) {
                return predicate(second) ? M.concat(first, second) : first;
            }
        };
    };
};
exports.filterSecond = filterSecond;
/**
 * @category combinators
 * @since 2.11.0
 */ var endo = function(f) {
    return function(M) {
        return {
            concat: function(first, second) {
                return M.concat(f(first), f(second));
            }
        };
    };
};
exports.endo = endo;
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * Given a sequence of `as`, concat them and return the total.
 *
 * If `as` is empty, return the provided `startWith` value.
 *
 * @example
 * import { concatAll } from 'fp-ts/Magma'
 * import * as N from 'fp-ts/number'
 *
 * const subAll = concatAll(N.MagmaSub)(0)
 *
 * assert.deepStrictEqual(subAll([1, 2, 3]), -6)
 *
 * @since 2.11.0
 */ var concatAll = function(M) {
    return function(startWith) {
        return function(as) {
            return as.reduce(function(a, acc) {
                return M.concat(a, acc);
            }, startWith);
        };
    };
};
exports.concatAll = concatAll;

},{}],"NAaD8":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ordDate = exports.ordNumber = exports.ordString = exports.ordBoolean = exports.ord = exports.getDualOrd = exports.getTupleOrd = exports.between = exports.clamp = exports.max = exports.min = exports.geq = exports.leq = exports.gt = exports.lt = exports.equals = exports.trivial = exports.Contravariant = exports.getMonoid = exports.getSemigroup = exports.URI = exports.contramap = exports.reverse = exports.tuple = exports.fromCompare = exports.equalsDefault = void 0;
var Eq_1 = require("./Eq");
var function_1 = require("./function");
// -------------------------------------------------------------------------------------
// defaults
// -------------------------------------------------------------------------------------
/**
 * @category defaults
 * @since 2.10.0
 */ var equalsDefault = function(compare1) {
    return function(first, second) {
        return first === second || compare1(first, second) === 0;
    };
};
exports.equalsDefault = equalsDefault;
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * @category constructors
 * @since 2.0.0
 */ var fromCompare = function(compare2) {
    return {
        equals: exports.equalsDefault(compare2),
        compare: function(first, second) {
            return first === second ? 0 : compare2(first, second);
        }
    };
};
exports.fromCompare = fromCompare;
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * Given a tuple of `Ord`s returns an `Ord` for the tuple.
 *
 * @example
 * import { tuple } from 'fp-ts/Ord'
 * import * as B from 'fp-ts/boolean'
 * import * as S from 'fp-ts/string'
 * import * as N from 'fp-ts/number'
 *
 * const O = tuple(S.Ord, N.Ord, B.Ord)
 * assert.strictEqual(O.compare(['a', 1, true], ['b', 2, true]), -1)
 * assert.strictEqual(O.compare(['a', 1, true], ['a', 2, true]), -1)
 * assert.strictEqual(O.compare(['a', 1, true], ['a', 1, false]), 1)
 *
 * @category combinators
 * @since 2.10.0
 */ var tuple = function() {
    var ords = [];
    for(var _i = 0; _i < arguments.length; _i++)ords[_i] = arguments[_i];
    return exports.fromCompare(function(first, second) {
        var i = 0;
        for(; i < ords.length - 1; i++){
            var r = ords[i].compare(first[i], second[i]);
            if (r !== 0) return r;
        }
        return ords[i].compare(first[i], second[i]);
    });
};
exports.tuple = tuple;
/**
 * @category combinators
 * @since 2.10.0
 */ var reverse = function(O) {
    return exports.fromCompare(function(first, second) {
        return O.compare(second, first);
    });
};
exports.reverse = reverse;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
/* istanbul ignore next */ var contramap_ = function(fa, f) {
    return function_1.pipe(fa, exports.contramap(f));
};
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * @category Contravariant
 * @since 2.0.0
 */ var contramap = function(f) {
    return function(fa) {
        return exports.fromCompare(function(first, second) {
            return fa.compare(f(first), f(second));
        });
    };
};
exports.contramap = contramap;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */ exports.URI = 'Ord';
/**
 * @category instances
 * @since 2.0.0
 */ var getSemigroup = function() {
    return {
        concat: function(first, second) {
            return exports.fromCompare(function(a, b) {
                var ox = first.compare(a, b);
                return ox !== 0 ? ox : second.compare(a, b);
            });
        }
    };
};
exports.getSemigroup = getSemigroup;
/**
 * Returns a `Monoid` such that:
 *
 * - its `concat(ord1, ord2)` operation will order first by `ord1`, and then by `ord2`
 * - its `empty` value is an `Ord` that always considers compared elements equal
 *
 * @example
 * import { sort } from 'fp-ts/Array'
 * import { contramap, reverse, getMonoid } from 'fp-ts/Ord'
 * import * as S from 'fp-ts/string'
 * import * as B from 'fp-ts/boolean'
 * import { pipe } from 'fp-ts/function'
 * import { concatAll } from 'fp-ts/Monoid'
 * import * as N from 'fp-ts/number'
 *
 * interface User {
 *   readonly id: number
 *   readonly name: string
 *   readonly age: number
 *   readonly rememberMe: boolean
 * }
 *
 * const byName = pipe(
 *   S.Ord,
 *   contramap((p: User) => p.name)
 * )
 *
 * const byAge = pipe(
 *   N.Ord,
 *   contramap((p: User) => p.age)
 * )
 *
 * const byRememberMe = pipe(
 *   B.Ord,
 *   contramap((p: User) => p.rememberMe)
 * )
 *
 * const M = getMonoid<User>()
 *
 * const users: Array<User> = [
 *   { id: 1, name: 'Guido', age: 47, rememberMe: false },
 *   { id: 2, name: 'Guido', age: 46, rememberMe: true },
 *   { id: 3, name: 'Giulio', age: 44, rememberMe: false },
 *   { id: 4, name: 'Giulio', age: 44, rememberMe: true }
 * ]
 *
 * // sort by name, then by age, then by `rememberMe`
 * const O1 = concatAll(M)([byName, byAge, byRememberMe])
 * assert.deepStrictEqual(sort(O1)(users), [
 *   { id: 3, name: 'Giulio', age: 44, rememberMe: false },
 *   { id: 4, name: 'Giulio', age: 44, rememberMe: true },
 *   { id: 2, name: 'Guido', age: 46, rememberMe: true },
 *   { id: 1, name: 'Guido', age: 47, rememberMe: false }
 * ])
 *
 * // now `rememberMe = true` first, then by name, then by age
 * const O2 = concatAll(M)([reverse(byRememberMe), byName, byAge])
 * assert.deepStrictEqual(sort(O2)(users), [
 *   { id: 4, name: 'Giulio', age: 44, rememberMe: true },
 *   { id: 2, name: 'Guido', age: 46, rememberMe: true },
 *   { id: 3, name: 'Giulio', age: 44, rememberMe: false },
 *   { id: 1, name: 'Guido', age: 47, rememberMe: false }
 * ])
 *
 * @category instances
 * @since 2.4.0
 */ var getMonoid = function() {
    return {
        concat: exports.getSemigroup().concat,
        empty: exports.fromCompare(function() {
            return 0;
        })
    };
};
exports.getMonoid = getMonoid;
/**
 * @category instances
 * @since 2.7.0
 */ exports.Contravariant = {
    URI: exports.URI,
    contramap: contramap_
};
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * @since 2.11.0
 */ exports.trivial = {
    equals: function_1.constTrue,
    compare: /*#__PURE__*/ function_1.constant(0)
};
/**
 * @since 2.11.0
 */ var equals = function(O) {
    return function(second) {
        return function(first) {
            return first === second || O.compare(first, second) === 0;
        };
    };
};
exports.equals = equals;
// TODO: curry in v3
/**
 * Test whether one value is _strictly less than_ another
 *
 * @since 2.0.0
 */ var lt = function(O) {
    return function(first, second) {
        return O.compare(first, second) === -1;
    };
};
exports.lt = lt;
// TODO: curry in v3
/**
 * Test whether one value is _strictly greater than_ another
 *
 * @since 2.0.0
 */ var gt = function(O) {
    return function(first, second) {
        return O.compare(first, second) === 1;
    };
};
exports.gt = gt;
// TODO: curry in v3
/**
 * Test whether one value is _non-strictly less than_ another
 *
 * @since 2.0.0
 */ var leq = function(O) {
    return function(first, second) {
        return O.compare(first, second) !== 1;
    };
};
exports.leq = leq;
// TODO: curry in v3
/**
 * Test whether one value is _non-strictly greater than_ another
 *
 * @since 2.0.0
 */ var geq = function(O) {
    return function(first, second) {
        return O.compare(first, second) !== -1;
    };
};
exports.geq = geq;
// TODO: curry in v3
/**
 * Take the minimum of two values. If they are considered equal, the first argument is chosen
 *
 * @since 2.0.0
 */ var min = function(O) {
    return function(first, second) {
        return first === second || O.compare(first, second) < 1 ? first : second;
    };
};
exports.min = min;
// TODO: curry in v3
/**
 * Take the maximum of two values. If they are considered equal, the first argument is chosen
 *
 * @since 2.0.0
 */ var max = function(O) {
    return function(first, second) {
        return first === second || O.compare(first, second) > -1 ? first : second;
    };
};
exports.max = max;
/**
 * Clamp a value between a minimum and a maximum
 *
 * @since 2.0.0
 */ var clamp = function(O) {
    var minO = exports.min(O);
    var maxO = exports.max(O);
    return function(low, hi) {
        return function(a) {
            return maxO(minO(a, hi), low);
        };
    };
};
exports.clamp = clamp;
/**
 * Test whether a value is between a minimum and a maximum (inclusive)
 *
 * @since 2.0.0
 */ var between = function(O) {
    var ltO = exports.lt(O);
    var gtO = exports.gt(O);
    return function(low, hi) {
        return function(a) {
            return ltO(a, low) || gtO(a, hi) ? false : true;
        };
    };
};
exports.between = between;
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
// tslint:disable: deprecation
/**
 * Use [`tuple`](#tuple) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */ exports.getTupleOrd = exports.tuple;
/**
 * Use [`reverse`](#reverse) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */ exports.getDualOrd = exports.reverse;
/**
 * Use [`Contravariant`](#contravariant) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */ exports.ord = exports.Contravariant;
// default compare for primitive types
function compare(first, second) {
    return first < second ? -1 : first > second ? 1 : 0;
}
var strictOrd = {
    equals: Eq_1.eqStrict.equals,
    compare: compare
};
/**
 * Use [`Ord`](./boolean.ts.html#ord) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */ exports.ordBoolean = strictOrd;
/**
 * Use [`Ord`](./string.ts.html#ord) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */ exports.ordString = strictOrd;
/**
 * Use [`Ord`](./number.ts.html#ord) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */ exports.ordNumber = strictOrd;
/**
 * Use [`Ord`](./Date.ts.html#ord) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */ exports.ordDate = /*#__PURE__*/ function_1.pipe(exports.ordNumber, /*#__PURE__*/ exports.contramap(function(date) {
    return date.valueOf();
}));

},{"./Eq":"95rVq","./function":"i6pHr"}],"95rVq":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.eqDate = exports.eqNumber = exports.eqString = exports.eqBoolean = exports.eq = exports.strictEqual = exports.getStructEq = exports.getTupleEq = exports.Contravariant = exports.getMonoid = exports.getSemigroup = exports.eqStrict = exports.URI = exports.contramap = exports.tuple = exports.struct = exports.fromEquals = void 0;
var function_1 = require("./function");
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * @category constructors
 * @since 2.0.0
 */ var fromEquals = function(equals) {
    return {
        equals: function(x, y) {
            return x === y || equals(x, y);
        }
    };
};
exports.fromEquals = fromEquals;
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------
/**
 * @category combinators
 * @since 2.10.0
 */ var struct = function(eqs) {
    return exports.fromEquals(function(first, second) {
        for(var key in eqs){
            if (!eqs[key].equals(first[key], second[key])) return false;
        }
        return true;
    });
};
exports.struct = struct;
/**
 * Given a tuple of `Eq`s returns a `Eq` for the tuple
 *
 * @example
 * import { tuple } from 'fp-ts/Eq'
 * import * as S from 'fp-ts/string'
 * import * as N from 'fp-ts/number'
 * import * as B from 'fp-ts/boolean'
 *
 * const E = tuple(S.Eq, N.Eq, B.Eq)
 * assert.strictEqual(E.equals(['a', 1, true], ['a', 1, true]), true)
 * assert.strictEqual(E.equals(['a', 1, true], ['b', 1, true]), false)
 * assert.strictEqual(E.equals(['a', 1, true], ['a', 2, true]), false)
 * assert.strictEqual(E.equals(['a', 1, true], ['a', 1, false]), false)
 *
 * @category combinators
 * @since 2.10.0
 */ var tuple = function() {
    var eqs = [];
    for(var _i = 0; _i < arguments.length; _i++)eqs[_i] = arguments[_i];
    return exports.fromEquals(function(first, second) {
        return eqs.every(function(E, i) {
            return E.equals(first[i], second[i]);
        });
    });
};
exports.tuple = tuple;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
/* istanbul ignore next */ var contramap_ = function(fa, f) {
    return function_1.pipe(fa, exports.contramap(f));
};
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * @category Contravariant
 * @since 2.0.0
 */ var contramap = function(f) {
    return function(fa) {
        return exports.fromEquals(function(x, y) {
            return fa.equals(f(x), f(y));
        });
    };
};
exports.contramap = contramap;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.0.0
 */ exports.URI = 'Eq';
/**
 * @category instances
 * @since 2.5.0
 */ exports.eqStrict = {
    equals: function(a, b) {
        return a === b;
    }
};
var empty = {
    equals: function() {
        return true;
    }
};
/**
 * @category instances
 * @since 2.10.0
 */ var getSemigroup = function() {
    return {
        concat: function(x, y) {
            return exports.fromEquals(function(a, b) {
                return x.equals(a, b) && y.equals(a, b);
            });
        }
    };
};
exports.getSemigroup = getSemigroup;
/**
 * @category instances
 * @since 2.6.0
 */ var getMonoid = function() {
    return {
        concat: exports.getSemigroup().concat,
        empty: empty
    };
};
exports.getMonoid = getMonoid;
/**
 * @category instances
 * @since 2.7.0
 */ exports.Contravariant = {
    URI: exports.URI,
    contramap: contramap_
};
// -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
/**
 * Use [`tuple`](#tuple) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */ exports.getTupleEq = exports.tuple;
/**
 * Use [`struct`](#struct) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */ exports.getStructEq = exports.struct;
/**
 * Use [`eqStrict`](#eqstrict) instead
 *
 * @since 2.0.0
 * @deprecated
 */ exports.strictEqual = exports.eqStrict.equals;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */ exports.eq = exports.Contravariant;
/**
 * Use [`Eq`](./boolean.ts.html#eq) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */ exports.eqBoolean = exports.eqStrict;
/**
 * Use [`Eq`](./string.ts.html#eq) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */ exports.eqString = exports.eqStrict;
/**
 * Use [`Eq`](./number.ts.html#eq) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */ exports.eqNumber = exports.eqStrict;
/**
 * Use [`Eq`](./Date.ts.html#eq) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */ exports.eqDate = {
    equals: function(first, second) {
        return first.valueOf() === second.valueOf();
    }
};

},{"./function":"i6pHr"}],"1d4pB":[function(require,module,exports) {
"use strict";
/**
 * ```ts
 * interface Separated<E, A> {
 *    readonly left: E
 *    readonly right: A
 * }
 * ```
 *
 * Represents a result of separating a whole into two parts.
 *
 * @since 2.10.0
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.right = exports.left = exports.flap = exports.Functor = exports.Bifunctor = exports.URI = exports.bimap = exports.mapLeft = exports.map = exports.separated = void 0;
var function_1 = require("./function");
var Functor_1 = require("./Functor");
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
/**
 * @category constructors
 * @since 2.10.0
 */ var separated = function(left1, right1) {
    return {
        left: left1,
        right: right1
    };
};
exports.separated = separated;
// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------
var _map = function(fa, f) {
    return function_1.pipe(fa, exports.map(f));
};
var _mapLeft = function(fa, f) {
    return function_1.pipe(fa, exports.mapLeft(f));
};
var _bimap = function(fa, g, f) {
    return function_1.pipe(fa, exports.bimap(g, f));
};
// -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.10.0
 */ var map = function(f) {
    return function(fa) {
        return exports.separated(exports.left(fa), f(exports.right(fa)));
    };
};
exports.map = map;
/**
 * Map a function over the first type argument of a bifunctor.
 *
 * @category Bifunctor
 * @since 2.10.0
 */ var mapLeft = function(f) {
    return function(fa) {
        return exports.separated(f(exports.left(fa)), exports.right(fa));
    };
};
exports.mapLeft = mapLeft;
/**
 * Map a pair of functions over the two type arguments of the bifunctor.
 *
 * @category Bifunctor
 * @since 2.10.0
 */ var bimap = function(f, g) {
    return function(fa) {
        return exports.separated(f(exports.left(fa)), g(exports.right(fa)));
    };
};
exports.bimap = bimap;
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.10.0
 */ exports.URI = 'Separated';
/**
 * @category instances
 * @since 2.10.0
 */ exports.Bifunctor = {
    URI: exports.URI,
    mapLeft: _mapLeft,
    bimap: _bimap
};
/**
 * @category instances
 * @since 2.10.0
 */ exports.Functor = {
    URI: exports.URI,
    map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */ exports.flap = /*#__PURE__*/ Functor_1.flap(exports.Functor);
// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------
/**
 * @since 2.10.0
 */ var left = function(s) {
    return s.left;
};
exports.left = left;
/**
 * @since 2.10.0
 */ var right = function(s) {
    return s.right;
};
exports.right = right;

},{"./function":"i6pHr","./Functor":"807km"}],"cv8J2":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {
    };
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.filterE = exports.witherDefault = exports.wiltDefault = void 0;
var _ = __importStar(require("./internal"));
function wiltDefault(T, C) {
    return function(F) {
        var traverseF = T.traverse(F);
        return function(wa, f) {
            return F.map(traverseF(wa, f), C.separate);
        };
    };
}
exports.wiltDefault = wiltDefault;
function witherDefault(T, C) {
    return function(F) {
        var traverseF = T.traverse(F);
        return function(wa, f) {
            return F.map(traverseF(wa, f), C.compact);
        };
    };
}
exports.witherDefault = witherDefault;
function filterE(W) {
    return function(F) {
        var witherF = W.wither(F);
        return function(predicate) {
            return function(ga) {
                return witherF(ga, function(a) {
                    return F.map(predicate(a), function(b) {
                        return b ? _.some(a) : _.none;
                    });
                });
            };
        };
    };
}
exports.filterE = filterE;

},{"./internal":"92fyI"}],"cDDA2":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.guard = void 0;
function guard(F, P) {
    return function(b) {
        return b ? P.of(undefined) : F.zero();
    };
}
exports.guard = guard;

},{}],"7tehe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "adjustCanvasSizeToWindow", ()=>adjustCanvasSizeToWindow
);
parcelHelpers.export(exports, "autoAdjustCanvasSize", ()=>autoAdjustCanvasSize
);
parcelHelpers.export(exports, "createCanvas", ()=>createCanvas
);
function adjustCanvasSizeToWindow(canvas) {
    const widthPx = window.innerWidth;
    const heightPx = window.innerHeight;
    const scalePx = window.devicePixelRatio || 1;
    Object.assign(canvas.style, {
        width: `${widthPx}px`,
        height: `${heightPx}px`
    });
    Object.assign(canvas, {
        width: widthPx * scalePx,
        height: heightPx * scalePx
    });
}
function autoAdjustCanvasSize(canvas, onResize) {
    window.onresize = ()=>{
        adjustCanvasSizeToWindow(canvas);
        onResize();
    };
}
function createCanvas(onResize) {
    document.body.insertAdjacentHTML("beforeend", "<canvas></canvas>");
    const canvas = document.querySelector("canvas");
    autoAdjustCanvasSize(canvas, onResize);
    adjustCanvasSizeToWindow(canvas);
    return canvas;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"iYwXE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pathPolygon", ()=>pathPolygon
);
parcelHelpers.export(exports, "pathPolyline", ()=>pathPolyline
);
parcelHelpers.export(exports, "drawDisc", ()=>drawDisc
);
const pathPolygon = (ctx, polygon)=>{
    pathPolyline(ctx, polygon);
    ctx.closePath();
};
const pathPolyline = (ctx, polyline)=>{
    ctx.beginPath();
    ctx.moveTo(...polyline[0]);
    polyline.slice(1).map((point)=>ctx.lineTo(...point)
    );
};
function drawDisc(ctx, point, radius, style) {
    if (style) Object.assign(ctx, style);
    ctx.beginPath();
    ctx.arc(point[0], point[1], radius, 0, Math.PI * 2);
    ctx.fill();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cs2vU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "add", ()=>add
);
parcelHelpers.export(exports, "multiply", ()=>multiply
);
parcelHelpers.export(exports, "subtract", ()=>subtract
);
parcelHelpers.export(exports, "divide", ()=>divide
);
parcelHelpers.export(exports, "isZero", ()=>isZero
);
parcelHelpers.export(exports, "magnitude", ()=>magnitude
);
parcelHelpers.export(exports, "normalize", ()=>normalize
);
parcelHelpers.export(exports, "distance", ()=>distance
);
parcelHelpers.export(exports, "dot", ()=>dot
);
parcelHelpers.export(exports, "mapComponents", ()=>mapComponents
);
parcelHelpers.export(exports, "round", ()=>round
);
parcelHelpers.export(exports, "vector2", ()=>vector2
);
parcelHelpers.export(exports, "interpolate", ()=>interpolate
);
var _util = require("../src/util");
const add = (a, b)=>[
        a[0] + b[0],
        a[1] + b[1], 
    ]
;
const multiply = (vector, scalar)=>[
        vector[0] * scalar,
        vector[1] * scalar, 
    ]
;
const subtract = (a, b)=>add(a, multiply(b, -1))
;
const divide = (vector, denominator)=>multiply(vector, 1 / denominator)
;
const isZero = (vector)=>vector.every((component)=>component === 0
    )
;
const magnitude = (vector)=>Math.hypot(...vector)
;
const normalize = (vector)=>isZero(vector) ? [
        0,
        0
    ] : divide(vector, magnitude(vector))
;
const distance = (a, b)=>magnitude(subtract(a, b))
;
const dot = (a, b)=>a[0] * b[0] + a[1] * b[1]
;
const mapComponents = (map)=>(v)=>{
        return [
            map(v[0]),
            map(v[1])
        ];
    }
;
const round = mapComponents(Math.round);
const vector2 = (x, y)=>[
        x,
        y
    ]
;
const interpolate = (a, b, t)=>vector2(_util.interpolate(a[0], b[0], t), _util.interpolate(a[1], b[1], t))
;

},{"../src/util":"7wzGb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7wzGb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "randomColor", ()=>randomColor
);
parcelHelpers.export(exports, "randomRange", ()=>randomRange
);
parcelHelpers.export(exports, "scaleVector", ()=>scaleVector
);
parcelHelpers.export(exports, "createArray", ()=>createArray
);
parcelHelpers.export(exports, "normalize", ()=>normalize
);
parcelHelpers.export(exports, "interpolate", ()=>interpolate
);
parcelHelpers.export(exports, "mapRange", ()=>mapRange
);
parcelHelpers.export(exports, "startLoop", ()=>startLoop
);
parcelHelpers.export(exports, "range", ()=>range
);
parcelHelpers.export(exports, "randomArrayItem", ()=>randomArrayItem
);
const randomColor = ()=>`rgb(${[
        0,
        1,
        2
    ].map(()=>Math.round(Math.random() * 255)
    ).join(",")})`
;
const randomRange = (min, max)=>min + (max - min) + Math.random()
;
const scaleVector = (scale)=>(vec)=>[
            vec[0] * scale,
            vec[1] * scale
        ]
;
const createArray = (length)=>{
    const arr = [];
    for(let i = 0; i < length; i++)arr[i] = i;
    return arr;
};
function normalize(from, to, value) {
    return (value - from) / (to - from);
}
function interpolate(from, to, value) {
    return from + (to - from) * value;
}
const mapRange = (range1, range2, value)=>{
    const relVal = value - range1[0];
    const scale = (range2[1] - range2[0]) / (range1[1] - range1[0]);
    return range2[0] + relVal * scale;
};
const startLoop = (onLoop)=>{
    let accumTime = 0;
    let prevTime = 0;
    const loop = ()=>{
        const curTime = window.performance.now();
        const deltaTime = (curTime - prevTime) / 1000;
        accumTime += deltaTime;
        prevTime = curTime;
        onLoop({
            dt: deltaTime,
            t: accumTime
        });
        requestAnimationFrame(loop);
    };
    loop();
};
function range(start, end) {
    const array = [];
    for(let i = start; i < end; i++)array.push(i);
    return array;
}
function randomArrayItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"guVDm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "simulateFluidParticles", ()=>simulateFluidParticles
);
var _vec2 = require("../lib/vec2");
const getPosition = (particle)=>particle.position
;
const sortIntoCells = (cellSize, gridSize)=>(points)=>{
        const columns = [];
        for(let x = 0; x < gridSize[0]; x++){
            const column = [];
            for(let y = 0; y < gridSize[1]; y++)column.push([]);
            columns.push(column);
        }
        const cellLocations = [];
        for(let i = 0; i < points.length; i++){
            const [cellX, cellY] = points[i].map((v)=>Math.floor(v / cellSize)
            );
            cellLocations.push([
                cellX,
                cellY
            ]);
            if (cellX < 0 || cellY < 0 || cellX >= gridSize[0] || cellY >= gridSize[1]) continue;
            columns[cellX][cellY].push(i);
        }
        return {
            cells: columns,
            particleIndexToCell: cellLocations
        };
    }
;
const calculateDepenetrationForces = (radius, cellSize, gridSize, points)=>{
    const attractionRadius = 1 * radius;
    const containerSize = _vec2.multiply(gridSize, cellSize);
    const { cells , particleIndexToCell  } = sortIntoCells(cellSize, gridSize)(points);
    let forces = points.map(()=>[
            0,
            0
        ]
    );
    for(let i = 0; i < points.length; i++){
        const [cellX, cellY] = particleIndexToCell[i];
        const point1 = points[i];
        //loop over the adjacent cells and calculate forces between pairs
        for(let j = -1; j <= 1; j++){
            const cx = cellX + j;
            if (cx < 0 || cx >= gridSize[0]) continue;
            for(let k = -1; k <= 1; k++){
                const cy = cellY + k;
                if (cy < 0 || cy >= gridSize[1]) continue;
                const cell = cells[cx][cy];
                for (const l of cell){
                    if (l === i) continue;
                    const point2 = points[l];
                    const diff = _vec2.subtract(point1, point2);
                    const mag = _vec2.magnitude(diff);
                    if (mag > attractionRadius) continue;
                    if (mag > radius) forces[i] = _vec2.add(forces[i], _vec2.multiply(diff, 0.005 * (radius - mag) / mag));
                    else forces[i] = _vec2.add(forces[i], _vec2.multiply(diff, (radius - mag) / mag));
                }
            }
        }
        const [x, y] = point1;
        //add boundary forces
        const rh = radius / 2;
        if (x < rh) forces[i][0] += rh - x;
        else if (x > containerSize[0] - rh) forces[i][0] -= rh - (containerSize[0] - x);
        if (y < rh) forces[i][1] += rh - y;
        else if (y > containerSize[1] - rh) forces[i][1] -= rh - (containerSize[1] - y);
    }
    return forces;
};
const simulateFluidParticles = (env)=>(dt)=>(particles)=>{
            const { cellSize , gridSize , particleRadius , forceField  } = env;
            //make a local copy of the particles
            particles = particles.map((p)=>({
                    ...p
                })
            );
            //move particles according to their velocity and add forces
            for (const particle of particles){
                const { position , velocity  } = particle;
                particle.position = _vec2.add(position, _vec2.multiply(velocity, dt));
                particle.velocity = _vec2.add(velocity, _vec2.multiply(forceField(position), dt));
            }
            //depenetrate
            let points = particles.map(getPosition);
            const forceStrength = 0.2;
            for(let i = 0; i < 10; i++){
                const forces = calculateDepenetrationForces(particleRadius, cellSize, gridSize, points);
                points = points.map((point, index)=>_vec2.add(point, _vec2.multiply(forces[index], forceStrength))
                );
            }
            //update velocities by depenetration offsets
            const dtInv = 1 / dt;
            for(let i1 = 0; i1 < particles.length; i1++){
                const particle = particles[i1];
                const point = points[i1];
                const depenetrationOffset = _vec2.subtract(point, particle.position);
                particle.position = point;
                particle.velocity = _vec2.add(particle.velocity, _vec2.multiply(depenetrationOffset, dtInv));
            }
            return particles;
        }
;

},{"../lib/vec2":"cs2vU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["8wcER","h7u1C"], "h7u1C", "parcelRequire5218")

//# sourceMappingURL=index.b71e74eb.js.map
