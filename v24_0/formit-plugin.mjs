var VD = Object.defineProperty;
var HD = (f, p, v) => p in f ? VD(f, p, { enumerable: !0, configurable: !0, writable: !0, value: v }) : f[p] = v;
var Ua = (f, p, v) => (HD(f, typeof p != "symbol" ? p + "" : p, v), v);
(function() {
  const p = document.createElement("link").relList;
  if (p && p.supports && p.supports("modulepreload"))
    return;
  for (const T of document.querySelectorAll('link[rel="modulepreload"]'))
    S(T);
  new MutationObserver((T) => {
    for (const b of T)
      if (b.type === "childList")
        for (const y of b.addedNodes)
          y.tagName === "LINK" && y.rel === "modulepreload" && S(y);
  }).observe(document, { childList: !0, subtree: !0 });
  function v(T) {
    const b = {};
    return T.integrity && (b.integrity = T.integrity), T.referrerPolicy && (b.referrerPolicy = T.referrerPolicy), T.crossOrigin === "use-credentials" ? b.credentials = "include" : T.crossOrigin === "anonymous" ? b.credentials = "omit" : b.credentials = "same-origin", b;
  }
  function S(T) {
    if (T.ep)
      return;
    T.ep = !0;
    const b = v(T);
    fetch(T.href, b);
  }
})();
function Eb(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
var Av = {}, $D = {
  get exports() {
    return Av;
  },
  set exports(f) {
    Av = f;
  }
}, Tv = {}, My = {}, BD = {
  get exports() {
    return My;
  },
  set exports(f) {
    My = f;
  }
}, Yt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bw;
function WD() {
  if (bw)
    return Yt;
  bw = 1;
  var f = Symbol.for("react.element"), p = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), y = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), A = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), M = Symbol.iterator;
  function $(O) {
    return O === null || typeof O != "object" ? null : (O = M && O[M] || O["@@iterator"], typeof O == "function" ? O : null);
  }
  var z = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, V = Object.assign, ee = {};
  function Z(O, oe, re) {
    this.props = O, this.context = oe, this.refs = ee, this.updater = re || z;
  }
  Z.prototype.isReactComponent = {}, Z.prototype.setState = function(O, oe) {
    if (typeof O != "object" && typeof O != "function" && O != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, O, oe, "setState");
  }, Z.prototype.forceUpdate = function(O) {
    this.updater.enqueueForceUpdate(this, O, "forceUpdate");
  };
  function we() {
  }
  we.prototype = Z.prototype;
  function ce(O, oe, re) {
    this.props = O, this.context = oe, this.refs = ee, this.updater = re || z;
  }
  var ae = ce.prototype = new we();
  ae.constructor = ce, V(ae, Z.prototype), ae.isPureReactComponent = !0;
  var ie = Array.isArray, H = Object.prototype.hasOwnProperty, de = {
    current: null
  }, _e = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };
  function Qe(O, oe, re) {
    var pe, me = {}, De = null, P = null;
    if (oe != null)
      for (pe in oe.ref !== void 0 && (P = oe.ref), oe.key !== void 0 && (De = "" + oe.key), oe)
        H.call(oe, pe) && !_e.hasOwnProperty(pe) && (me[pe] = oe[pe]);
    var je = arguments.length - 2;
    if (je === 1)
      me.children = re;
    else if (1 < je) {
      for (var fe = Array(je), at = 0; at < je; at++)
        fe[at] = arguments[at + 2];
      me.children = fe;
    }
    if (O && O.defaultProps)
      for (pe in je = O.defaultProps, je)
        me[pe] === void 0 && (me[pe] = je[pe]);
    return {
      $$typeof: f,
      type: O,
      key: De,
      ref: P,
      props: me,
      _owner: de.current
    };
  }
  function ut(O, oe) {
    return {
      $$typeof: f,
      type: O.type,
      key: oe,
      ref: O.ref,
      props: O.props,
      _owner: O._owner
    };
  }
  function pt(O) {
    return typeof O == "object" && O !== null && O.$$typeof === f;
  }
  function vt(O) {
    var oe = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + O.replace(/[=:]/g, function(re) {
      return oe[re];
    });
  }
  var _t = /\/+/g;
  function Ue(O, oe) {
    return typeof O == "object" && O !== null && O.key != null ? vt("" + O.key) : oe.toString(36);
  }
  function ge(O, oe, re, pe, me) {
    var De = typeof O;
    (De === "undefined" || De === "boolean") && (O = null);
    var P = !1;
    if (O === null)
      P = !0;
    else
      switch (De) {
        case "string":
        case "number":
          P = !0;
          break;
        case "object":
          switch (O.$$typeof) {
            case f:
            case p:
              P = !0;
          }
      }
    if (P)
      return P = O, me = me(P), O = pe === "" ? "." + Ue(P, 0) : pe, ie(me) ? (re = "", O != null && (re = O.replace(_t, "$&/") + "/"), ge(me, oe, re, "", function(at) {
        return at;
      })) : me != null && (pt(me) && (me = ut(me, re + (!me.key || P && P.key === me.key ? "" : ("" + me.key).replace(_t, "$&/") + "/") + O)), oe.push(me)), 1;
    if (P = 0, pe = pe === "" ? "." : pe + ":", ie(O))
      for (var je = 0; je < O.length; je++) {
        De = O[je];
        var fe = pe + Ue(De, je);
        P += ge(De, oe, re, fe, me);
      }
    else if (fe = $(O), typeof fe == "function")
      for (O = fe.call(O), je = 0; !(De = O.next()).done; )
        De = De.value, fe = pe + Ue(De, je++), P += ge(De, oe, re, fe, me);
    else if (De === "object")
      throw oe = String(O), Error("Objects are not valid as a React child (found: " + (oe === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : oe) + "). If you meant to render a collection of children, use an array instead.");
    return P;
  }
  function Te(O, oe, re) {
    if (O == null)
      return O;
    var pe = [], me = 0;
    return ge(O, pe, "", "", function(De) {
      return oe.call(re, De, me++);
    }), pe;
  }
  function xe(O) {
    if (O._status === -1) {
      var oe = O._result;
      oe = oe(), oe.then(function(re) {
        (O._status === 0 || O._status === -1) && (O._status = 1, O._result = re);
      }, function(re) {
        (O._status === 0 || O._status === -1) && (O._status = 2, O._result = re);
      }), O._status === -1 && (O._status = 0, O._result = oe);
    }
    if (O._status === 1)
      return O._result.default;
    throw O._result;
  }
  var ye = {
    current: null
  }, J = {
    transition: null
  }, Me = {
    ReactCurrentDispatcher: ye,
    ReactCurrentBatchConfig: J,
    ReactCurrentOwner: de
  };
  return Yt.Children = {
    map: Te,
    forEach: function(oe, re, pe) {
      Te(oe, function() {
        re.apply(this, arguments);
      }, pe);
    },
    count: function(oe) {
      var re = 0;
      return Te(oe, function() {
        re++;
      }), re;
    },
    toArray: function(oe) {
      return Te(oe, function(re) {
        return re;
      }) || [];
    },
    only: function(oe) {
      if (!pt(oe))
        throw Error("React.Children.only expected to receive a single React element child.");
      return oe;
    }
  }, Yt.Component = Z, Yt.Fragment = v, Yt.Profiler = T, Yt.PureComponent = ce, Yt.StrictMode = S, Yt.Suspense = k, Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Me, Yt.cloneElement = function(O, oe, re) {
    if (O == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + O + ".");
    var pe = V({}, O.props), me = O.key, De = O.ref, P = O._owner;
    if (oe != null) {
      if (oe.ref !== void 0 && (De = oe.ref, P = de.current), oe.key !== void 0 && (me = "" + oe.key), O.type && O.type.defaultProps)
        var je = O.type.defaultProps;
      for (fe in oe)
        H.call(oe, fe) && !_e.hasOwnProperty(fe) && (pe[fe] = oe[fe] === void 0 && je !== void 0 ? je[fe] : oe[fe]);
    }
    var fe = arguments.length - 2;
    if (fe === 1)
      pe.children = re;
    else if (1 < fe) {
      je = Array(fe);
      for (var at = 0; at < fe; at++)
        je[at] = arguments[at + 2];
      pe.children = je;
    }
    return {
      $$typeof: f,
      type: O.type,
      key: me,
      ref: De,
      props: pe,
      _owner: P
    };
  }, Yt.createContext = function(O) {
    return O = {
      $$typeof: y,
      _currentValue: O,
      _currentValue2: O,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }, O.Provider = {
      $$typeof: b,
      _context: O
    }, O.Consumer = O;
  }, Yt.createElement = Qe, Yt.createFactory = function(O) {
    var oe = Qe.bind(null, O);
    return oe.type = O, oe;
  }, Yt.createRef = function() {
    return {
      current: null
    };
  }, Yt.forwardRef = function(O) {
    return {
      $$typeof: L,
      render: O
    };
  }, Yt.isValidElement = pt, Yt.lazy = function(O) {
    return {
      $$typeof: N,
      _payload: {
        _status: -1,
        _result: O
      },
      _init: xe
    };
  }, Yt.memo = function(O, oe) {
    return {
      $$typeof: A,
      type: O,
      compare: oe === void 0 ? null : oe
    };
  }, Yt.startTransition = function(O) {
    var oe = J.transition;
    J.transition = {};
    try {
      O();
    } finally {
      J.transition = oe;
    }
  }, Yt.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Yt.useCallback = function(O, oe) {
    return ye.current.useCallback(O, oe);
  }, Yt.useContext = function(O) {
    return ye.current.useContext(O);
  }, Yt.useDebugValue = function() {
  }, Yt.useDeferredValue = function(O) {
    return ye.current.useDeferredValue(O);
  }, Yt.useEffect = function(O, oe) {
    return ye.current.useEffect(O, oe);
  }, Yt.useId = function() {
    return ye.current.useId();
  }, Yt.useImperativeHandle = function(O, oe, re) {
    return ye.current.useImperativeHandle(O, oe, re);
  }, Yt.useInsertionEffect = function(O, oe) {
    return ye.current.useInsertionEffect(O, oe);
  }, Yt.useLayoutEffect = function(O, oe) {
    return ye.current.useLayoutEffect(O, oe);
  }, Yt.useMemo = function(O, oe) {
    return ye.current.useMemo(O, oe);
  }, Yt.useReducer = function(O, oe, re) {
    return ye.current.useReducer(O, oe, re);
  }, Yt.useRef = function(O) {
    return ye.current.useRef(O);
  }, Yt.useState = function(O) {
    return ye.current.useState(O);
  }, Yt.useSyncExternalStore = function(O, oe, re) {
    return ye.current.useSyncExternalStore(O, oe, re);
  }, Yt.useTransition = function() {
    return ye.current.useTransition();
  }, Yt.version = "18.2.0", Yt;
}
var _v = {}, GD = {
  get exports() {
    return _v;
  },
  set exports(f) {
    _v = f;
  }
};
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rw;
function YD() {
  return Rw || (Rw = 1, function(f, p) {
    ({}).NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var v = "18.2.0", S = Symbol.for("react.element"), T = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), A = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), ee = Symbol.for("react.offscreen"), Z = Symbol.iterator, we = "@@iterator";
      function ce(E) {
        if (E === null || typeof E != "object")
          return null;
        var _ = Z && E[Z] || E[we];
        return typeof _ == "function" ? _ : null;
      }
      var ae = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ie = {
        transition: null
      }, H = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, de = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, _e = {}, Qe = null;
      function ut(E) {
        Qe = E;
      }
      _e.setExtraStackFrame = function(E) {
        Qe = E;
      }, _e.getCurrentStack = null, _e.getStackAddendum = function() {
        var E = "";
        Qe && (E += Qe);
        var _ = _e.getCurrentStack;
        return _ && (E += _() || ""), E;
      };
      var pt = !1, vt = !1, _t = !1, Ue = !1, ge = !1, Te = {
        ReactCurrentDispatcher: ae,
        ReactCurrentBatchConfig: ie,
        ReactCurrentOwner: de
      };
      Te.ReactDebugCurrentFrame = _e, Te.ReactCurrentActQueue = H;
      function xe(E) {
        {
          for (var _ = arguments.length, q = new Array(_ > 1 ? _ - 1 : 0), ne = 1; ne < _; ne++)
            q[ne - 1] = arguments[ne];
          J("warn", E, q);
        }
      }
      function ye(E) {
        {
          for (var _ = arguments.length, q = new Array(_ > 1 ? _ - 1 : 0), ne = 1; ne < _; ne++)
            q[ne - 1] = arguments[ne];
          J("error", E, q);
        }
      }
      function J(E, _, q) {
        {
          var ne = Te.ReactDebugCurrentFrame, Re = ne.getStackAddendum();
          Re !== "" && (_ += "%s", q = q.concat([Re]));
          var ot = q.map(function(ke) {
            return String(ke);
          });
          ot.unshift("Warning: " + _), Function.prototype.apply.call(console[E], console, ot);
        }
      }
      var Me = {};
      function O(E, _) {
        {
          var q = E.constructor, ne = q && (q.displayName || q.name) || "ReactClass", Re = ne + "." + _;
          if (Me[Re])
            return;
          ye("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", _, ne), Me[Re] = !0;
        }
      }
      var oe = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(_) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(_, q, ne) {
          O(_, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(_, q, ne, Re) {
          O(_, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(_, q, ne, Re) {
          O(_, "setState");
        }
      }, re = Object.assign, pe = {};
      Object.freeze(pe);
      function me(E, _, q) {
        this.props = E, this.context = _, this.refs = pe, this.updater = q || oe;
      }
      me.prototype.isReactComponent = {}, me.prototype.setState = function(E, _) {
        if (typeof E != "object" && typeof E != "function" && E != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, E, _, "setState");
      }, me.prototype.forceUpdate = function(E) {
        this.updater.enqueueForceUpdate(this, E, "forceUpdate");
      };
      {
        var De = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, P = function(_, q) {
          Object.defineProperty(me.prototype, _, {
            get: function() {
              xe("%s(...) is deprecated in plain JavaScript React classes. %s", q[0], q[1]);
            }
          });
        };
        for (var je in De)
          De.hasOwnProperty(je) && P(je, De[je]);
      }
      function fe() {
      }
      fe.prototype = me.prototype;
      function at(E, _, q) {
        this.props = E, this.context = _, this.refs = pe, this.updater = q || oe;
      }
      var ht = at.prototype = new fe();
      ht.constructor = at, re(ht, me.prototype), ht.isPureReactComponent = !0;
      function Ot() {
        var E = {
          current: null
        };
        return Object.seal(E), E;
      }
      var ve = Array.isArray;
      function bt(E) {
        return ve(E);
      }
      function zt(E) {
        {
          var _ = typeof Symbol == "function" && Symbol.toStringTag, q = _ && E[Symbol.toStringTag] || E.constructor.name || "Object";
          return q;
        }
      }
      function qe(E) {
        try {
          return Pt(E), !1;
        } catch {
          return !0;
        }
      }
      function Pt(E) {
        return "" + E;
      }
      function ct(E) {
        if (qe(E))
          return ye("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", zt(E)), Pt(E);
      }
      function Zt(E, _, q) {
        var ne = E.displayName;
        if (ne)
          return ne;
        var Re = _.displayName || _.name || "";
        return Re !== "" ? q + "(" + Re + ")" : q;
      }
      function Zn(E) {
        return E.displayName || "Context";
      }
      function Vt(E) {
        if (E == null)
          return null;
        if (typeof E.tag == "number" && ye("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
          return E.displayName || E.name || null;
        if (typeof E == "string")
          return E;
        switch (E) {
          case b:
            return "Fragment";
          case T:
            return "Portal";
          case L:
            return "Profiler";
          case y:
            return "StrictMode";
          case M:
            return "Suspense";
          case $:
            return "SuspenseList";
        }
        if (typeof E == "object")
          switch (E.$$typeof) {
            case A:
              var _ = E;
              return Zn(_) + ".Consumer";
            case k:
              var q = E;
              return Zn(q._context) + ".Provider";
            case N:
              return Zt(E, E.render, "ForwardRef");
            case z:
              var ne = E.displayName || null;
              return ne !== null ? ne : Vt(E.type) || "Memo";
            case V: {
              var Re = E, ot = Re._payload, ke = Re._init;
              try {
                return Vt(ke(ot));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Yn = Object.prototype.hasOwnProperty, Jn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, dn, et, Lt;
      Lt = {};
      function fr(E) {
        if (Yn.call(E, "ref")) {
          var _ = Object.getOwnPropertyDescriptor(E, "ref").get;
          if (_ && _.isReactWarning)
            return !1;
        }
        return E.ref !== void 0;
      }
      function Sn(E) {
        if (Yn.call(E, "key")) {
          var _ = Object.getOwnPropertyDescriptor(E, "key").get;
          if (_ && _.isReactWarning)
            return !1;
        }
        return E.key !== void 0;
      }
      function Mn(E, _) {
        var q = function() {
          dn || (dn = !0, ye("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
        };
        q.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: q,
          configurable: !0
        });
      }
      function Si(E, _) {
        var q = function() {
          et || (et = !0, ye("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
        };
        q.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: q,
          configurable: !0
        });
      }
      function Ca(E) {
        if (typeof E.ref == "string" && de.current && E.__self && de.current.stateNode !== E.__self) {
          var _ = Vt(de.current.type);
          Lt[_] || (ye('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', _, E.ref), Lt[_] = !0);
        }
      }
      var Ae = function(_, q, ne, Re, ot, ke, nt) {
        var Et = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: S,
          // Built-in properties that belong on the element
          type: _,
          key: q,
          ref: ne,
          props: nt,
          // Record the component responsible for creating this element.
          _owner: ke
        };
        return Et._store = {}, Object.defineProperty(Et._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Et, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Re
        }), Object.defineProperty(Et, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ot
        }), Object.freeze && (Object.freeze(Et.props), Object.freeze(Et)), Et;
      };
      function tt(E, _, q) {
        var ne, Re = {}, ot = null, ke = null, nt = null, Et = null;
        if (_ != null) {
          fr(_) && (ke = _.ref, Ca(_)), Sn(_) && (ct(_.key), ot = "" + _.key), nt = _.__self === void 0 ? null : _.__self, Et = _.__source === void 0 ? null : _.__source;
          for (ne in _)
            Yn.call(_, ne) && !Jn.hasOwnProperty(ne) && (Re[ne] = _[ne]);
        }
        var Kt = arguments.length - 2;
        if (Kt === 1)
          Re.children = q;
        else if (Kt > 1) {
          for (var En = Array(Kt), fn = 0; fn < Kt; fn++)
            En[fn] = arguments[fn + 2];
          Object.freeze && Object.freeze(En), Re.children = En;
        }
        if (E && E.defaultProps) {
          var Hn = E.defaultProps;
          for (ne in Hn)
            Re[ne] === void 0 && (Re[ne] = Hn[ne]);
        }
        if (ot || ke) {
          var vn = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          ot && Mn(Re, vn), ke && Si(Re, vn);
        }
        return Ae(E, ot, ke, nt, Et, de.current, Re);
      }
      function At(E, _) {
        var q = Ae(E.type, _, E.ref, E._self, E._source, E._owner, E.props);
        return q;
      }
      function Qt(E, _, q) {
        if (E == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + E + ".");
        var ne, Re = re({}, E.props), ot = E.key, ke = E.ref, nt = E._self, Et = E._source, Kt = E._owner;
        if (_ != null) {
          fr(_) && (ke = _.ref, Kt = de.current), Sn(_) && (ct(_.key), ot = "" + _.key);
          var En;
          E.type && E.type.defaultProps && (En = E.type.defaultProps);
          for (ne in _)
            Yn.call(_, ne) && !Jn.hasOwnProperty(ne) && (_[ne] === void 0 && En !== void 0 ? Re[ne] = En[ne] : Re[ne] = _[ne]);
        }
        var fn = arguments.length - 2;
        if (fn === 1)
          Re.children = q;
        else if (fn > 1) {
          for (var Hn = Array(fn), vn = 0; vn < fn; vn++)
            Hn[vn] = arguments[vn + 2];
          Re.children = Hn;
        }
        return Ae(E.type, ot, ke, nt, Et, Kt, Re);
      }
      function rn(E) {
        return typeof E == "object" && E !== null && E.$$typeof === S;
      }
      var Qn = ".", Nn = ":";
      function Ar(E) {
        var _ = /[=:]/g, q = {
          "=": "=0",
          ":": "=2"
        }, ne = E.replace(_, function(Re) {
          return q[Re];
        });
        return "$" + ne;
      }
      var cn = !1, Pr = /\/+/g;
      function an(E) {
        return E.replace(Pr, "$&/");
      }
      function on(E, _) {
        return typeof E == "object" && E !== null && E.key != null ? (ct(E.key), Ar("" + E.key)) : _.toString(36);
      }
      function oi(E, _, q, ne, Re) {
        var ot = typeof E;
        (ot === "undefined" || ot === "boolean") && (E = null);
        var ke = !1;
        if (E === null)
          ke = !0;
        else
          switch (ot) {
            case "string":
            case "number":
              ke = !0;
              break;
            case "object":
              switch (E.$$typeof) {
                case S:
                case T:
                  ke = !0;
              }
          }
        if (ke) {
          var nt = E, Et = Re(nt), Kt = ne === "" ? Qn + on(nt, 0) : ne;
          if (bt(Et)) {
            var En = "";
            Kt != null && (En = an(Kt) + "/"), oi(Et, _, En, "", function(md) {
              return md;
            });
          } else
            Et != null && (rn(Et) && (Et.key && (!nt || nt.key !== Et.key) && ct(Et.key), Et = At(
              Et,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              q + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (Et.key && (!nt || nt.key !== Et.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                an("" + Et.key) + "/"
              ) : "") + Kt
            )), _.push(Et));
          return 1;
        }
        var fn, Hn, vn = 0, It = ne === "" ? Qn : ne + Nn;
        if (bt(E))
          for (var oa = 0; oa < E.length; oa++)
            fn = E[oa], Hn = It + on(fn, oa), vn += oi(fn, _, q, Hn, Re);
        else {
          var pu = ce(E);
          if (typeof pu == "function") {
            var hs = E;
            pu === hs.entries && (cn || xe("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), cn = !0);
            for (var hd = pu.call(hs), ci, ms = 0; !(ci = hd.next()).done; )
              fn = ci.value, Hn = It + on(fn, ms++), vn += oi(fn, _, q, Hn, Re);
          } else if (ot === "object") {
            var ys = String(E);
            throw new Error("Objects are not valid as a React child (found: " + (ys === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : ys) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return vn;
      }
      function Fa(E, _, q) {
        if (E == null)
          return E;
        var ne = [], Re = 0;
        return oi(E, ne, "", "", function(ot) {
          return _.call(q, ot, Re++);
        }), ne;
      }
      function yo(E) {
        var _ = 0;
        return Fa(E, function() {
          _++;
        }), _;
      }
      function ll(E, _, q) {
        Fa(E, function() {
          _.apply(this, arguments);
        }, q);
      }
      function tu(E) {
        return Fa(E, function(_) {
          return _;
        }) || [];
      }
      function Vi(E) {
        if (!rn(E))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return E;
      }
      function go(E) {
        var _ = {
          $$typeof: A,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: E,
          _currentValue2: E,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        _.Provider = {
          $$typeof: k,
          _context: _
        };
        var q = !1, ne = !1, Re = !1;
        {
          var ot = {
            $$typeof: A,
            _context: _
          };
          Object.defineProperties(ot, {
            Provider: {
              get: function() {
                return ne || (ne = !0, ye("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), _.Provider;
              },
              set: function(nt) {
                _.Provider = nt;
              }
            },
            _currentValue: {
              get: function() {
                return _._currentValue;
              },
              set: function(nt) {
                _._currentValue = nt;
              }
            },
            _currentValue2: {
              get: function() {
                return _._currentValue2;
              },
              set: function(nt) {
                _._currentValue2 = nt;
              }
            },
            _threadCount: {
              get: function() {
                return _._threadCount;
              },
              set: function(nt) {
                _._threadCount = nt;
              }
            },
            Consumer: {
              get: function() {
                return q || (q = !0, ye("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), _.Consumer;
              }
            },
            displayName: {
              get: function() {
                return _.displayName;
              },
              set: function(nt) {
                Re || (xe("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", nt), Re = !0);
              }
            }
          }), _.Consumer = ot;
        }
        return _._currentRenderer = null, _._currentRenderer2 = null, _;
      }
      var Ta = -1, Ei = 0, wa = 1, Ci = 2;
      function Vr(E) {
        if (E._status === Ta) {
          var _ = E._result, q = _();
          if (q.then(function(ot) {
            if (E._status === Ei || E._status === Ta) {
              var ke = E;
              ke._status = wa, ke._result = ot;
            }
          }, function(ot) {
            if (E._status === Ei || E._status === Ta) {
              var ke = E;
              ke._status = Ci, ke._result = ot;
            }
          }), E._status === Ta) {
            var ne = E;
            ne._status = Ei, ne._result = q;
          }
        }
        if (E._status === wa) {
          var Re = E._result;
          return Re === void 0 && ye(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, Re), "default" in Re || ye(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, Re), Re.default;
        } else
          throw E._result;
      }
      function ba(E) {
        var _ = {
          // We use these fields to store the result.
          _status: Ta,
          _result: E
        }, q = {
          $$typeof: V,
          _payload: _,
          _init: Vr
        };
        {
          var ne, Re;
          Object.defineProperties(q, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return ne;
              },
              set: function(ke) {
                ye("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ne = ke, Object.defineProperty(q, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return Re;
              },
              set: function(ke) {
                ye("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Re = ke, Object.defineProperty(q, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return q;
      }
      function Ti(E) {
        E != null && E.$$typeof === z ? ye("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof E != "function" ? ye("forwardRef requires a render function but was given %s.", E === null ? "null" : typeof E) : E.length !== 0 && E.length !== 2 && ye("forwardRef render functions accept exactly two parameters: props and ref. %s", E.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), E != null && (E.defaultProps != null || E.propTypes != null) && ye("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var _ = {
          $$typeof: N,
          render: E
        };
        {
          var q;
          Object.defineProperty(_, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return q;
            },
            set: function(Re) {
              q = Re, !E.name && !E.displayName && (E.displayName = Re);
            }
          });
        }
        return _;
      }
      var D;
      D = Symbol.for("react.module.reference");
      function Se(E) {
        return !!(typeof E == "string" || typeof E == "function" || E === b || E === L || ge || E === y || E === M || E === $ || Ue || E === ee || pt || vt || _t || typeof E == "object" && E !== null && (E.$$typeof === V || E.$$typeof === z || E.$$typeof === k || E.$$typeof === A || E.$$typeof === N || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        E.$$typeof === D || E.getModuleId !== void 0));
      }
      function Le(E, _) {
        Se(E) || ye("memo: The first argument must be a component. Instead received: %s", E === null ? "null" : typeof E);
        var q = {
          $$typeof: z,
          type: E,
          compare: _ === void 0 ? null : _
        };
        {
          var ne;
          Object.defineProperty(q, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return ne;
            },
            set: function(ot) {
              ne = ot, !E.name && !E.displayName && (E.displayName = ot);
            }
          });
        }
        return q;
      }
      function ze() {
        var E = ae.current;
        return E === null && ye(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), E;
      }
      function xt(E) {
        var _ = ze();
        if (E._context !== void 0) {
          var q = E._context;
          q.Consumer === E ? ye("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : q.Provider === E && ye("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return _.useContext(E);
      }
      function $t(E) {
        var _ = ze();
        return _.useState(E);
      }
      function kt(E, _, q) {
        var ne = ze();
        return ne.useReducer(E, _, q);
      }
      function yt(E) {
        var _ = ze();
        return _.useRef(E);
      }
      function pn(E, _) {
        var q = ze();
        return q.useEffect(E, _);
      }
      function wn(E, _) {
        var q = ze();
        return q.useInsertionEffect(E, _);
      }
      function bn(E, _) {
        var q = ze();
        return q.useLayoutEffect(E, _);
      }
      function Er(E, _) {
        var q = ze();
        return q.useCallback(E, _);
      }
      function wi(E, _) {
        var q = ze();
        return q.useMemo(E, _);
      }
      function nu(E, _, q) {
        var ne = ze();
        return ne.useImperativeHandle(E, _, q);
      }
      function Ht(E, _) {
        {
          var q = ze();
          return q.useDebugValue(E, _);
        }
      }
      function pd() {
        var E = ze();
        return E.useTransition();
      }
      function li(E) {
        var _ = ze();
        return _.useDeferredValue(E);
      }
      function Nt() {
        var E = ze();
        return E.useId();
      }
      function bi(E, _, q) {
        var ne = ze();
        return ne.useSyncExternalStore(E, _, q);
      }
      var So = 0, ru, Eo, ra, fs, Hr, ds, ps;
      function gc() {
      }
      gc.__reactDisabledLog = !0;
      function au() {
        {
          if (So === 0) {
            ru = console.log, Eo = console.info, ra = console.warn, fs = console.error, Hr = console.group, ds = console.groupCollapsed, ps = console.groupEnd;
            var E = {
              configurable: !0,
              enumerable: !0,
              value: gc,
              writable: !0
            };
            Object.defineProperties(console, {
              info: E,
              log: E,
              warn: E,
              error: E,
              group: E,
              groupCollapsed: E,
              groupEnd: E
            });
          }
          So++;
        }
      }
      function Co() {
        {
          if (So--, So === 0) {
            var E = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: re({}, E, {
                value: ru
              }),
              info: re({}, E, {
                value: Eo
              }),
              warn: re({}, E, {
                value: ra
              }),
              error: re({}, E, {
                value: fs
              }),
              group: re({}, E, {
                value: Hr
              }),
              groupCollapsed: re({}, E, {
                value: ds
              }),
              groupEnd: re({}, E, {
                value: ps
              })
            });
          }
          So < 0 && ye("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ui = Te.ReactCurrentDispatcher, $r;
      function To(E, _, q) {
        {
          if ($r === void 0)
            try {
              throw Error();
            } catch (Re) {
              var ne = Re.stack.trim().match(/\n( *(at )?)/);
              $r = ne && ne[1] || "";
            }
          return `
` + $r + E;
        }
      }
      var wo = !1, bo;
      {
        var iu = typeof WeakMap == "function" ? WeakMap : Map;
        bo = new iu();
      }
      function ou(E, _) {
        if (!E || wo)
          return "";
        {
          var q = bo.get(E);
          if (q !== void 0)
            return q;
        }
        var ne;
        wo = !0;
        var Re = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var ot;
        ot = ui.current, ui.current = null, au();
        try {
          if (_) {
            var ke = function() {
              throw Error();
            };
            if (Object.defineProperty(ke.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ke, []);
              } catch (It) {
                ne = It;
              }
              Reflect.construct(E, [], ke);
            } else {
              try {
                ke.call();
              } catch (It) {
                ne = It;
              }
              E.call(ke.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (It) {
              ne = It;
            }
            E();
          }
        } catch (It) {
          if (It && ne && typeof It.stack == "string") {
            for (var nt = It.stack.split(`
`), Et = ne.stack.split(`
`), Kt = nt.length - 1, En = Et.length - 1; Kt >= 1 && En >= 0 && nt[Kt] !== Et[En]; )
              En--;
            for (; Kt >= 1 && En >= 0; Kt--, En--)
              if (nt[Kt] !== Et[En]) {
                if (Kt !== 1 || En !== 1)
                  do
                    if (Kt--, En--, En < 0 || nt[Kt] !== Et[En]) {
                      var fn = `
` + nt[Kt].replace(" at new ", " at ");
                      return E.displayName && fn.includes("<anonymous>") && (fn = fn.replace("<anonymous>", E.displayName)), typeof E == "function" && bo.set(E, fn), fn;
                    }
                  while (Kt >= 1 && En >= 0);
                break;
              }
          }
        } finally {
          wo = !1, ui.current = ot, Co(), Error.prepareStackTrace = Re;
        }
        var Hn = E ? E.displayName || E.name : "", vn = Hn ? To(Hn) : "";
        return typeof E == "function" && bo.set(E, vn), vn;
      }
      function Hi(E, _, q) {
        return ou(E, !1);
      }
      function vd(E) {
        var _ = E.prototype;
        return !!(_ && _.isReactComponent);
      }
      function Ri(E, _, q) {
        if (E == null)
          return "";
        if (typeof E == "function")
          return ou(E, vd(E));
        if (typeof E == "string")
          return To(E);
        switch (E) {
          case M:
            return To("Suspense");
          case $:
            return To("SuspenseList");
        }
        if (typeof E == "object")
          switch (E.$$typeof) {
            case N:
              return Hi(E.render);
            case z:
              return Ri(E.type, _, q);
            case V: {
              var ne = E, Re = ne._payload, ot = ne._init;
              try {
                return Ri(ot(Re), _, q);
              } catch {
              }
            }
          }
        return "";
      }
      var Jt = {}, lu = Te.ReactDebugCurrentFrame;
      function ul(E) {
        if (E) {
          var _ = E._owner, q = Ri(E.type, E._source, _ ? _.type : null);
          lu.setExtraStackFrame(q);
        } else
          lu.setExtraStackFrame(null);
      }
      function uu(E, _, q, ne, Re) {
        {
          var ot = Function.call.bind(Yn);
          for (var ke in E)
            if (ot(E, ke)) {
              var nt = void 0;
              try {
                if (typeof E[ke] != "function") {
                  var Et = Error((ne || "React class") + ": " + q + " type `" + ke + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[ke] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Et.name = "Invariant Violation", Et;
                }
                nt = E[ke](_, ke, ne, q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Kt) {
                nt = Kt;
              }
              nt && !(nt instanceof Error) && (ul(Re), ye("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ne || "React class", q, ke, typeof nt), ul(null)), nt instanceof Error && !(nt.message in Jt) && (Jt[nt.message] = !0, ul(Re), ye("Failed %s type: %s", q, nt.message), ul(null));
            }
        }
      }
      function qt(E) {
        if (E) {
          var _ = E._owner, q = Ri(E.type, E._source, _ ? _.type : null);
          ut(q);
        } else
          ut(null);
      }
      var su;
      su = !1;
      function cu() {
        if (de.current) {
          var E = Vt(de.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
      function Tt(E) {
        if (E !== void 0) {
          var _ = E.fileName.replace(/^.*[\\\/]/, ""), q = E.lineNumber;
          return `

Check your code at ` + _ + ":" + q + ".";
        }
        return "";
      }
      function sl(E) {
        return E != null ? Tt(E.__source) : "";
      }
      var In = {};
      function aa(E) {
        var _ = cu();
        if (!_) {
          var q = typeof E == "string" ? E : E.displayName || E.name;
          q && (_ = `

Check the top-level render call using <` + q + ">.");
        }
        return _;
      }
      function Br(E, _) {
        if (!(!E._store || E._store.validated || E.key != null)) {
          E._store.validated = !0;
          var q = aa(_);
          if (!In[q]) {
            In[q] = !0;
            var ne = "";
            E && E._owner && E._owner !== de.current && (ne = " It was passed a child from " + Vt(E._owner.type) + "."), qt(E), ye('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', q, ne), qt(null);
          }
        }
      }
      function Ro(E, _) {
        if (typeof E == "object") {
          if (bt(E))
            for (var q = 0; q < E.length; q++) {
              var ne = E[q];
              rn(ne) && Br(ne, _);
            }
          else if (rn(E))
            E._store && (E._store.validated = !0);
          else if (E) {
            var Re = ce(E);
            if (typeof Re == "function" && Re !== E.entries)
              for (var ot = Re.call(E), ke; !(ke = ot.next()).done; )
                rn(ke.value) && Br(ke.value, _);
          }
        }
      }
      function Vn(E) {
        {
          var _ = E.type;
          if (_ == null || typeof _ == "string")
            return;
          var q;
          if (typeof _ == "function")
            q = _.propTypes;
          else if (typeof _ == "object" && (_.$$typeof === N || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          _.$$typeof === z))
            q = _.propTypes;
          else
            return;
          if (q) {
            var ne = Vt(_);
            uu(q, E.props, "prop", ne, E);
          } else if (_.PropTypes !== void 0 && !su) {
            su = !0;
            var Re = Vt(_);
            ye("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Re || "Unknown");
          }
          typeof _.getDefaultProps == "function" && !_.getDefaultProps.isReactClassApproved && ye("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function ln(E) {
        {
          for (var _ = Object.keys(E.props), q = 0; q < _.length; q++) {
            var ne = _[q];
            if (ne !== "children" && ne !== "key") {
              qt(E), ye("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ne), qt(null);
              break;
            }
          }
          E.ref !== null && (qt(E), ye("Invalid attribute `ref` supplied to `React.Fragment`."), qt(null));
        }
      }
      function Sc(E, _, q) {
        var ne = Se(E);
        if (!ne) {
          var Re = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (Re += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ot = sl(_);
          ot ? Re += ot : Re += cu();
          var ke;
          E === null ? ke = "null" : bt(E) ? ke = "array" : E !== void 0 && E.$$typeof === S ? (ke = "<" + (Vt(E.type) || "Unknown") + " />", Re = " Did you accidentally export a JSX literal instead of a component?") : ke = typeof E, ye("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ke, Re);
        }
        var nt = tt.apply(this, arguments);
        if (nt == null)
          return nt;
        if (ne)
          for (var Et = 2; Et < arguments.length; Et++)
            Ro(arguments[Et], E);
        return E === b ? ln(nt) : Vn(nt), nt;
      }
      var ia = !1;
      function dr(E) {
        var _ = Sc.bind(null, E);
        return _.type = E, ia || (ia = !0, xe("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(_, "type", {
          enumerable: !1,
          get: function() {
            return xe("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: E
            }), E;
          }
        }), _;
      }
      function xi(E, _, q) {
        for (var ne = Qt.apply(this, arguments), Re = 2; Re < arguments.length; Re++)
          Ro(arguments[Re], ne.type);
        return Vn(ne), ne;
      }
      function Ec(E, _) {
        var q = ie.transition;
        ie.transition = {};
        var ne = ie.transition;
        ie.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          E();
        } finally {
          if (ie.transition = q, q === null && ne._updatedFibers) {
            var Re = ne._updatedFibers.size;
            Re > 10 && xe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), ne._updatedFibers.clear();
          }
        }
      }
      var $i = !1, xo = null;
      function Cc(E) {
        if (xo === null)
          try {
            var _ = ("require" + Math.random()).slice(0, 7), q = f && f[_];
            xo = q.call(f, "timers").setImmediate;
          } catch {
            xo = function(ot) {
              $i === !1 && ($i = !0, typeof MessageChannel > "u" && ye("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var ke = new MessageChannel();
              ke.port1.onmessage = ot, ke.port2.postMessage(void 0);
            };
          }
        return xo(E);
      }
      var ja = 0, _o = !1;
      function Oo(E) {
        {
          var _ = ja;
          ja++, H.current === null && (H.current = []);
          var q = H.isBatchingLegacy, ne;
          try {
            if (H.isBatchingLegacy = !0, ne = E(), !q && H.didScheduleLegacyUpdate) {
              var Re = H.current;
              Re !== null && (H.didScheduleLegacyUpdate = !1, Do(Re));
            }
          } catch (Hn) {
            throw za(_), Hn;
          } finally {
            H.isBatchingLegacy = q;
          }
          if (ne !== null && typeof ne == "object" && typeof ne.then == "function") {
            var ot = ne, ke = !1, nt = {
              then: function(vn, It) {
                ke = !0, ot.then(function(oa) {
                  za(_), ja === 0 ? fu(oa, vn, It) : vn(oa);
                }, function(oa) {
                  za(_), It(oa);
                });
              }
            };
            return !_o && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ke || (_o = !0, ye("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), nt;
          } else {
            var Et = ne;
            if (za(_), ja === 0) {
              var Kt = H.current;
              Kt !== null && (Do(Kt), H.current = null);
              var En = {
                then: function(vn, It) {
                  H.current === null ? (H.current = [], fu(Et, vn, It)) : vn(Et);
                }
              };
              return En;
            } else {
              var fn = {
                then: function(vn, It) {
                  vn(Et);
                }
              };
              return fn;
            }
          }
        }
      }
      function za(E) {
        E !== ja - 1 && ye("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ja = E;
      }
      function fu(E, _, q) {
        {
          var ne = H.current;
          if (ne !== null)
            try {
              Do(ne), Cc(function() {
                ne.length === 0 ? (H.current = null, _(E)) : fu(E, _, q);
              });
            } catch (Re) {
              q(Re);
            }
          else
            _(E);
        }
      }
      var ko = !1;
      function Do(E) {
        if (!ko) {
          ko = !0;
          var _ = 0;
          try {
            for (; _ < E.length; _++) {
              var q = E[_];
              do
                q = q(!0);
              while (q !== null);
            }
            E.length = 0;
          } catch (ne) {
            throw E = E.slice(_ + 1), ne;
          } finally {
            ko = !1;
          }
        }
      }
      var cl = Sc, du = xi, vs = dr, si = {
        map: Fa,
        forEach: ll,
        count: yo,
        toArray: tu,
        only: Vi
      };
      p.Children = si, p.Component = me, p.Fragment = b, p.Profiler = L, p.PureComponent = at, p.StrictMode = y, p.Suspense = M, p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Te, p.cloneElement = du, p.createContext = go, p.createElement = cl, p.createFactory = vs, p.createRef = Ot, p.forwardRef = Ti, p.isValidElement = rn, p.lazy = ba, p.memo = Le, p.startTransition = Ec, p.unstable_act = Oo, p.useCallback = Er, p.useContext = xt, p.useDebugValue = Ht, p.useDeferredValue = li, p.useEffect = pn, p.useId = Nt, p.useImperativeHandle = nu, p.useInsertionEffect = wn, p.useLayoutEffect = bn, p.useMemo = wi, p.useReducer = kt, p.useRef = yt, p.useState = $t, p.useSyncExternalStore = bi, p.useTransition = pd, p.version = v, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(GD, _v)), _v;
}
var xw;
function eu() {
  return xw || (xw = 1, function(f) {
    ({}).NODE_ENV === "production" ? f.exports = WD() : f.exports = YD();
  }(BD)), My;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _w;
function QD() {
  if (_w)
    return Tv;
  _w = 1;
  var f = eu(), p = Symbol.for("react.element"), v = Symbol.for("react.fragment"), S = Object.prototype.hasOwnProperty, T = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };
  function y(L, k, A) {
    var N, M = {}, $ = null, z = null;
    A !== void 0 && ($ = "" + A), k.key !== void 0 && ($ = "" + k.key), k.ref !== void 0 && (z = k.ref);
    for (N in k)
      S.call(k, N) && !b.hasOwnProperty(N) && (M[N] = k[N]);
    if (L && L.defaultProps)
      for (N in k = L.defaultProps, k)
        M[N] === void 0 && (M[N] = k[N]);
    return {
      $$typeof: p,
      type: L,
      key: $,
      ref: z,
      props: M,
      _owner: T.current
    };
  }
  return Tv.Fragment = v, Tv.jsx = y, Tv.jsxs = y, Tv;
}
var wv = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ow;
function qD() {
  return Ow || (Ow = 1, {}.NODE_ENV !== "production" && function() {
    var f = eu(), p = Symbol.for("react.element"), v = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), L = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), z = Symbol.for("react.offscreen"), V = Symbol.iterator, ee = "@@iterator";
    function Z(D) {
      if (D === null || typeof D != "object")
        return null;
      var Se = V && D[V] || D[ee];
      return typeof Se == "function" ? Se : null;
    }
    var we = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ce(D) {
      {
        for (var Se = arguments.length, Le = new Array(Se > 1 ? Se - 1 : 0), ze = 1; ze < Se; ze++)
          Le[ze - 1] = arguments[ze];
        ae("error", D, Le);
      }
    }
    function ae(D, Se, Le) {
      {
        var ze = we.ReactDebugCurrentFrame, xt = ze.getStackAddendum();
        xt !== "" && (Se += "%s", Le = Le.concat([xt]));
        var $t = Le.map(function(kt) {
          return String(kt);
        });
        $t.unshift("Warning: " + Se), Function.prototype.apply.call(console[D], console, $t);
      }
    }
    var ie = !1, H = !1, de = !1, _e = !1, Qe = !1, ut;
    ut = Symbol.for("react.module.reference");
    function pt(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === S || D === b || Qe || D === T || D === A || D === N || _e || D === z || ie || H || de || typeof D == "object" && D !== null && (D.$$typeof === $ || D.$$typeof === M || D.$$typeof === y || D.$$typeof === L || D.$$typeof === k || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === ut || D.getModuleId !== void 0));
    }
    function vt(D, Se, Le) {
      var ze = D.displayName;
      if (ze)
        return ze;
      var xt = Se.displayName || Se.name || "";
      return xt !== "" ? Le + "(" + xt + ")" : Le;
    }
    function _t(D) {
      return D.displayName || "Context";
    }
    function Ue(D) {
      if (D == null)
        return null;
      if (typeof D.tag == "number" && ce("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof D == "function")
        return D.displayName || D.name || null;
      if (typeof D == "string")
        return D;
      switch (D) {
        case S:
          return "Fragment";
        case v:
          return "Portal";
        case b:
          return "Profiler";
        case T:
          return "StrictMode";
        case A:
          return "Suspense";
        case N:
          return "SuspenseList";
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case L:
            var Se = D;
            return _t(Se) + ".Consumer";
          case y:
            var Le = D;
            return _t(Le._context) + ".Provider";
          case k:
            return vt(D, D.render, "ForwardRef");
          case M:
            var ze = D.displayName || null;
            return ze !== null ? ze : Ue(D.type) || "Memo";
          case $: {
            var xt = D, $t = xt._payload, kt = xt._init;
            try {
              return Ue(kt($t));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ge = Object.assign, Te = 0, xe, ye, J, Me, O, oe, re;
    function pe() {
    }
    pe.__reactDisabledLog = !0;
    function me() {
      {
        if (Te === 0) {
          xe = console.log, ye = console.info, J = console.warn, Me = console.error, O = console.group, oe = console.groupCollapsed, re = console.groupEnd;
          var D = {
            configurable: !0,
            enumerable: !0,
            value: pe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: D,
            log: D,
            warn: D,
            error: D,
            group: D,
            groupCollapsed: D,
            groupEnd: D
          });
        }
        Te++;
      }
    }
    function De() {
      {
        if (Te--, Te === 0) {
          var D = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ge({}, D, {
              value: xe
            }),
            info: ge({}, D, {
              value: ye
            }),
            warn: ge({}, D, {
              value: J
            }),
            error: ge({}, D, {
              value: Me
            }),
            group: ge({}, D, {
              value: O
            }),
            groupCollapsed: ge({}, D, {
              value: oe
            }),
            groupEnd: ge({}, D, {
              value: re
            })
          });
        }
        Te < 0 && ce("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var P = we.ReactCurrentDispatcher, je;
    function fe(D, Se, Le) {
      {
        if (je === void 0)
          try {
            throw Error();
          } catch (xt) {
            var ze = xt.stack.trim().match(/\n( *(at )?)/);
            je = ze && ze[1] || "";
          }
        return `
` + je + D;
      }
    }
    var at = !1, ht;
    {
      var Ot = typeof WeakMap == "function" ? WeakMap : Map;
      ht = new Ot();
    }
    function ve(D, Se) {
      if (!D || at)
        return "";
      {
        var Le = ht.get(D);
        if (Le !== void 0)
          return Le;
      }
      var ze;
      at = !0;
      var xt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $t;
      $t = P.current, P.current = null, me();
      try {
        if (Se) {
          var kt = function() {
            throw Error();
          };
          if (Object.defineProperty(kt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(kt, []);
            } catch (Ht) {
              ze = Ht;
            }
            Reflect.construct(D, [], kt);
          } else {
            try {
              kt.call();
            } catch (Ht) {
              ze = Ht;
            }
            D.call(kt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ht) {
            ze = Ht;
          }
          D();
        }
      } catch (Ht) {
        if (Ht && ze && typeof Ht.stack == "string") {
          for (var yt = Ht.stack.split(`
`), pn = ze.stack.split(`
`), wn = yt.length - 1, bn = pn.length - 1; wn >= 1 && bn >= 0 && yt[wn] !== pn[bn]; )
            bn--;
          for (; wn >= 1 && bn >= 0; wn--, bn--)
            if (yt[wn] !== pn[bn]) {
              if (wn !== 1 || bn !== 1)
                do
                  if (wn--, bn--, bn < 0 || yt[wn] !== pn[bn]) {
                    var Er = `
` + yt[wn].replace(" at new ", " at ");
                    return D.displayName && Er.includes("<anonymous>") && (Er = Er.replace("<anonymous>", D.displayName)), typeof D == "function" && ht.set(D, Er), Er;
                  }
                while (wn >= 1 && bn >= 0);
              break;
            }
        }
      } finally {
        at = !1, P.current = $t, De(), Error.prepareStackTrace = xt;
      }
      var wi = D ? D.displayName || D.name : "", nu = wi ? fe(wi) : "";
      return typeof D == "function" && ht.set(D, nu), nu;
    }
    function bt(D, Se, Le) {
      return ve(D, !1);
    }
    function zt(D) {
      var Se = D.prototype;
      return !!(Se && Se.isReactComponent);
    }
    function qe(D, Se, Le) {
      if (D == null)
        return "";
      if (typeof D == "function")
        return ve(D, zt(D));
      if (typeof D == "string")
        return fe(D);
      switch (D) {
        case A:
          return fe("Suspense");
        case N:
          return fe("SuspenseList");
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case k:
            return bt(D.render);
          case M:
            return qe(D.type, Se, Le);
          case $: {
            var ze = D, xt = ze._payload, $t = ze._init;
            try {
              return qe($t(xt), Se, Le);
            } catch {
            }
          }
        }
      return "";
    }
    var Pt = Object.prototype.hasOwnProperty, ct = {}, Zt = we.ReactDebugCurrentFrame;
    function Zn(D) {
      if (D) {
        var Se = D._owner, Le = qe(D.type, D._source, Se ? Se.type : null);
        Zt.setExtraStackFrame(Le);
      } else
        Zt.setExtraStackFrame(null);
    }
    function Vt(D, Se, Le, ze, xt) {
      {
        var $t = Function.call.bind(Pt);
        for (var kt in D)
          if ($t(D, kt)) {
            var yt = void 0;
            try {
              if (typeof D[kt] != "function") {
                var pn = Error((ze || "React class") + ": " + Le + " type `" + kt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof D[kt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw pn.name = "Invariant Violation", pn;
              }
              yt = D[kt](Se, kt, ze, Le, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (wn) {
              yt = wn;
            }
            yt && !(yt instanceof Error) && (Zn(xt), ce("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ze || "React class", Le, kt, typeof yt), Zn(null)), yt instanceof Error && !(yt.message in ct) && (ct[yt.message] = !0, Zn(xt), ce("Failed %s type: %s", Le, yt.message), Zn(null));
          }
      }
    }
    var Yn = Array.isArray;
    function Jn(D) {
      return Yn(D);
    }
    function dn(D) {
      {
        var Se = typeof Symbol == "function" && Symbol.toStringTag, Le = Se && D[Symbol.toStringTag] || D.constructor.name || "Object";
        return Le;
      }
    }
    function et(D) {
      try {
        return Lt(D), !1;
      } catch {
        return !0;
      }
    }
    function Lt(D) {
      return "" + D;
    }
    function fr(D) {
      if (et(D))
        return ce("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", dn(D)), Lt(D);
    }
    var Sn = we.ReactCurrentOwner, Mn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Si, Ca, Ae;
    Ae = {};
    function tt(D) {
      if (Pt.call(D, "ref")) {
        var Se = Object.getOwnPropertyDescriptor(D, "ref").get;
        if (Se && Se.isReactWarning)
          return !1;
      }
      return D.ref !== void 0;
    }
    function At(D) {
      if (Pt.call(D, "key")) {
        var Se = Object.getOwnPropertyDescriptor(D, "key").get;
        if (Se && Se.isReactWarning)
          return !1;
      }
      return D.key !== void 0;
    }
    function Qt(D, Se) {
      if (typeof D.ref == "string" && Sn.current && Se && Sn.current.stateNode !== Se) {
        var Le = Ue(Sn.current.type);
        Ae[Le] || (ce('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ue(Sn.current.type), D.ref), Ae[Le] = !0);
      }
    }
    function rn(D, Se) {
      {
        var Le = function() {
          Si || (Si = !0, ce("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Se));
        };
        Le.isReactWarning = !0, Object.defineProperty(D, "key", {
          get: Le,
          configurable: !0
        });
      }
    }
    function Qn(D, Se) {
      {
        var Le = function() {
          Ca || (Ca = !0, ce("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Se));
        };
        Le.isReactWarning = !0, Object.defineProperty(D, "ref", {
          get: Le,
          configurable: !0
        });
      }
    }
    var Nn = function(Se, Le, ze, xt, $t, kt, yt) {
      var pn = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: p,
        // Built-in properties that belong on the element
        type: Se,
        key: Le,
        ref: ze,
        props: yt,
        // Record the component responsible for creating this element.
        _owner: kt
      };
      return pn._store = {}, Object.defineProperty(pn._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(pn, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: xt
      }), Object.defineProperty(pn, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $t
      }), Object.freeze && (Object.freeze(pn.props), Object.freeze(pn)), pn;
    };
    function Ar(D, Se, Le, ze, xt) {
      {
        var $t, kt = {}, yt = null, pn = null;
        Le !== void 0 && (fr(Le), yt = "" + Le), At(Se) && (fr(Se.key), yt = "" + Se.key), tt(Se) && (pn = Se.ref, Qt(Se, xt));
        for ($t in Se)
          Pt.call(Se, $t) && !Mn.hasOwnProperty($t) && (kt[$t] = Se[$t]);
        if (D && D.defaultProps) {
          var wn = D.defaultProps;
          for ($t in wn)
            kt[$t] === void 0 && (kt[$t] = wn[$t]);
        }
        if (yt || pn) {
          var bn = typeof D == "function" ? D.displayName || D.name || "Unknown" : D;
          yt && rn(kt, bn), pn && Qn(kt, bn);
        }
        return Nn(D, yt, pn, xt, ze, Sn.current, kt);
      }
    }
    var cn = we.ReactCurrentOwner, Pr = we.ReactDebugCurrentFrame;
    function an(D) {
      if (D) {
        var Se = D._owner, Le = qe(D.type, D._source, Se ? Se.type : null);
        Pr.setExtraStackFrame(Le);
      } else
        Pr.setExtraStackFrame(null);
    }
    var on;
    on = !1;
    function oi(D) {
      return typeof D == "object" && D !== null && D.$$typeof === p;
    }
    function Fa() {
      {
        if (cn.current) {
          var D = Ue(cn.current.type);
          if (D)
            return `

Check the render method of \`` + D + "`.";
        }
        return "";
      }
    }
    function yo(D) {
      {
        if (D !== void 0) {
          var Se = D.fileName.replace(/^.*[\\\/]/, ""), Le = D.lineNumber;
          return `

Check your code at ` + Se + ":" + Le + ".";
        }
        return "";
      }
    }
    var ll = {};
    function tu(D) {
      {
        var Se = Fa();
        if (!Se) {
          var Le = typeof D == "string" ? D : D.displayName || D.name;
          Le && (Se = `

Check the top-level render call using <` + Le + ">.");
        }
        return Se;
      }
    }
    function Vi(D, Se) {
      {
        if (!D._store || D._store.validated || D.key != null)
          return;
        D._store.validated = !0;
        var Le = tu(Se);
        if (ll[Le])
          return;
        ll[Le] = !0;
        var ze = "";
        D && D._owner && D._owner !== cn.current && (ze = " It was passed a child from " + Ue(D._owner.type) + "."), an(D), ce('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Le, ze), an(null);
      }
    }
    function go(D, Se) {
      {
        if (typeof D != "object")
          return;
        if (Jn(D))
          for (var Le = 0; Le < D.length; Le++) {
            var ze = D[Le];
            oi(ze) && Vi(ze, Se);
          }
        else if (oi(D))
          D._store && (D._store.validated = !0);
        else if (D) {
          var xt = Z(D);
          if (typeof xt == "function" && xt !== D.entries)
            for (var $t = xt.call(D), kt; !(kt = $t.next()).done; )
              oi(kt.value) && Vi(kt.value, Se);
        }
      }
    }
    function Ta(D) {
      {
        var Se = D.type;
        if (Se == null || typeof Se == "string")
          return;
        var Le;
        if (typeof Se == "function")
          Le = Se.propTypes;
        else if (typeof Se == "object" && (Se.$$typeof === k || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Se.$$typeof === M))
          Le = Se.propTypes;
        else
          return;
        if (Le) {
          var ze = Ue(Se);
          Vt(Le, D.props, "prop", ze, D);
        } else if (Se.PropTypes !== void 0 && !on) {
          on = !0;
          var xt = Ue(Se);
          ce("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", xt || "Unknown");
        }
        typeof Se.getDefaultProps == "function" && !Se.getDefaultProps.isReactClassApproved && ce("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ei(D) {
      {
        for (var Se = Object.keys(D.props), Le = 0; Le < Se.length; Le++) {
          var ze = Se[Le];
          if (ze !== "children" && ze !== "key") {
            an(D), ce("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ze), an(null);
            break;
          }
        }
        D.ref !== null && (an(D), ce("Invalid attribute `ref` supplied to `React.Fragment`."), an(null));
      }
    }
    function wa(D, Se, Le, ze, xt, $t) {
      {
        var kt = pt(D);
        if (!kt) {
          var yt = "";
          (D === void 0 || typeof D == "object" && D !== null && Object.keys(D).length === 0) && (yt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var pn = yo(xt);
          pn ? yt += pn : yt += Fa();
          var wn;
          D === null ? wn = "null" : Jn(D) ? wn = "array" : D !== void 0 && D.$$typeof === p ? (wn = "<" + (Ue(D.type) || "Unknown") + " />", yt = " Did you accidentally export a JSX literal instead of a component?") : wn = typeof D, ce("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", wn, yt);
        }
        var bn = Ar(D, Se, Le, xt, $t);
        if (bn == null)
          return bn;
        if (kt) {
          var Er = Se.children;
          if (Er !== void 0)
            if (ze)
              if (Jn(Er)) {
                for (var wi = 0; wi < Er.length; wi++)
                  go(Er[wi], D);
                Object.freeze && Object.freeze(Er);
              } else
                ce("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              go(Er, D);
        }
        return D === S ? Ei(bn) : Ta(bn), bn;
      }
    }
    function Ci(D, Se, Le) {
      return wa(D, Se, Le, !0);
    }
    function Vr(D, Se, Le) {
      return wa(D, Se, Le, !1);
    }
    var ba = Vr, Ti = Ci;
    wv.Fragment = S, wv.jsx = ba, wv.jsxs = Ti;
  }()), wv;
}
(function(f) {
  ({}).NODE_ENV === "production" ? f.exports = QD() : f.exports = qD();
})($D);
const Jl = Av.Fragment, Xe = Av.jsx, na = Av.jsxs;
var xv = {}, xE = {}, KD = {
  get exports() {
    return xE;
  },
  set exports(f) {
    xE = f;
  }
}, ri = {}, Ay = {}, XD = {
  get exports() {
    return Ay;
  },
  set exports(f) {
    Ay = f;
  }
}, pE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kw;
function ZD() {
  return kw || (kw = 1, function(f) {
    function p(J, Me) {
      var O = J.length;
      J.push(Me);
      e:
        for (; 0 < O; ) {
          var oe = O - 1 >>> 1, re = J[oe];
          if (0 < T(re, Me))
            J[oe] = Me, J[O] = re, O = oe;
          else
            break e;
        }
    }
    function v(J) {
      return J.length === 0 ? null : J[0];
    }
    function S(J) {
      if (J.length === 0)
        return null;
      var Me = J[0], O = J.pop();
      if (O !== Me) {
        J[0] = O;
        e:
          for (var oe = 0, re = J.length, pe = re >>> 1; oe < pe; ) {
            var me = 2 * (oe + 1) - 1, De = J[me], P = me + 1, je = J[P];
            if (0 > T(De, O))
              P < re && 0 > T(je, De) ? (J[oe] = je, J[P] = O, oe = P) : (J[oe] = De, J[me] = O, oe = me);
            else if (P < re && 0 > T(je, O))
              J[oe] = je, J[P] = O, oe = P;
            else
              break e;
          }
      }
      return Me;
    }
    function T(J, Me) {
      var O = J.sortIndex - Me.sortIndex;
      return O !== 0 ? O : J.id - Me.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var b = performance;
      f.unstable_now = function() {
        return b.now();
      };
    } else {
      var y = Date, L = y.now();
      f.unstable_now = function() {
        return y.now() - L;
      };
    }
    var k = [], A = [], N = 1, M = null, $ = 3, z = !1, V = !1, ee = !1, Z = typeof setTimeout == "function" ? setTimeout : null, we = typeof clearTimeout == "function" ? clearTimeout : null, ce = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ae(J) {
      for (var Me = v(A); Me !== null; ) {
        if (Me.callback === null)
          S(A);
        else if (Me.startTime <= J)
          S(A), Me.sortIndex = Me.expirationTime, p(k, Me);
        else
          break;
        Me = v(A);
      }
    }
    function ie(J) {
      if (ee = !1, ae(J), !V)
        if (v(k) !== null)
          V = !0, xe(H);
        else {
          var Me = v(A);
          Me !== null && ye(ie, Me.startTime - J);
        }
    }
    function H(J, Me) {
      V = !1, ee && (ee = !1, we(Qe), Qe = -1), z = !0;
      var O = $;
      try {
        for (ae(Me), M = v(k); M !== null && (!(M.expirationTime > Me) || J && !vt()); ) {
          var oe = M.callback;
          if (typeof oe == "function") {
            M.callback = null, $ = M.priorityLevel;
            var re = oe(M.expirationTime <= Me);
            Me = f.unstable_now(), typeof re == "function" ? M.callback = re : M === v(k) && S(k), ae(Me);
          } else
            S(k);
          M = v(k);
        }
        if (M !== null)
          var pe = !0;
        else {
          var me = v(A);
          me !== null && ye(ie, me.startTime - Me), pe = !1;
        }
        return pe;
      } finally {
        M = null, $ = O, z = !1;
      }
    }
    var de = !1, _e = null, Qe = -1, ut = 5, pt = -1;
    function vt() {
      return !(f.unstable_now() - pt < ut);
    }
    function _t() {
      if (_e !== null) {
        var J = f.unstable_now();
        pt = J;
        var Me = !0;
        try {
          Me = _e(!0, J);
        } finally {
          Me ? Ue() : (de = !1, _e = null);
        }
      } else
        de = !1;
    }
    var Ue;
    if (typeof ce == "function")
      Ue = function() {
        ce(_t);
      };
    else if (typeof MessageChannel < "u") {
      var ge = new MessageChannel(), Te = ge.port2;
      ge.port1.onmessage = _t, Ue = function() {
        Te.postMessage(null);
      };
    } else
      Ue = function() {
        Z(_t, 0);
      };
    function xe(J) {
      _e = J, de || (de = !0, Ue());
    }
    function ye(J, Me) {
      Qe = Z(function() {
        J(f.unstable_now());
      }, Me);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(J) {
      J.callback = null;
    }, f.unstable_continueExecution = function() {
      V || z || (V = !0, xe(H));
    }, f.unstable_forceFrameRate = function(J) {
      0 > J || 125 < J ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ut = 0 < J ? Math.floor(1e3 / J) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return $;
    }, f.unstable_getFirstCallbackNode = function() {
      return v(k);
    }, f.unstable_next = function(J) {
      switch ($) {
        case 1:
        case 2:
        case 3:
          var Me = 3;
          break;
        default:
          Me = $;
      }
      var O = $;
      $ = Me;
      try {
        return J();
      } finally {
        $ = O;
      }
    }, f.unstable_pauseExecution = function() {
    }, f.unstable_requestPaint = function() {
    }, f.unstable_runWithPriority = function(J, Me) {
      switch (J) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          J = 3;
      }
      var O = $;
      $ = J;
      try {
        return Me();
      } finally {
        $ = O;
      }
    }, f.unstable_scheduleCallback = function(J, Me, O) {
      var oe = f.unstable_now();
      switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? oe + O : oe) : O = oe, J) {
        case 1:
          var re = -1;
          break;
        case 2:
          re = 250;
          break;
        case 5:
          re = 1073741823;
          break;
        case 4:
          re = 1e4;
          break;
        default:
          re = 5e3;
      }
      return re = O + re, J = {
        id: N++,
        callback: Me,
        priorityLevel: J,
        startTime: O,
        expirationTime: re,
        sortIndex: -1
      }, O > oe ? (J.sortIndex = O, p(A, J), v(k) === null && J === v(A) && (ee ? (we(Qe), Qe = -1) : ee = !0, ye(ie, O - oe))) : (J.sortIndex = re, p(k, J), V || z || (V = !0, xe(H))), J;
    }, f.unstable_shouldYield = vt, f.unstable_wrapCallback = function(J) {
      var Me = $;
      return function() {
        var O = $;
        $ = Me;
        try {
          return J.apply(this, arguments);
        } finally {
          $ = O;
        }
      };
    };
  }(pE)), pE;
}
var vE = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dw;
function JD() {
  return Dw || (Dw = 1, function(f) {
    ({}).NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var p = !1, v = !1, S = 5;
      function T(Ae, tt) {
        var At = Ae.length;
        Ae.push(tt), L(Ae, tt, At);
      }
      function b(Ae) {
        return Ae.length === 0 ? null : Ae[0];
      }
      function y(Ae) {
        if (Ae.length === 0)
          return null;
        var tt = Ae[0], At = Ae.pop();
        return At !== tt && (Ae[0] = At, k(Ae, At, 0)), tt;
      }
      function L(Ae, tt, At) {
        for (var Qt = At; Qt > 0; ) {
          var rn = Qt - 1 >>> 1, Qn = Ae[rn];
          if (A(Qn, tt) > 0)
            Ae[rn] = tt, Ae[Qt] = Qn, Qt = rn;
          else
            return;
        }
      }
      function k(Ae, tt, At) {
        for (var Qt = At, rn = Ae.length, Qn = rn >>> 1; Qt < Qn; ) {
          var Nn = (Qt + 1) * 2 - 1, Ar = Ae[Nn], cn = Nn + 1, Pr = Ae[cn];
          if (A(Ar, tt) < 0)
            cn < rn && A(Pr, Ar) < 0 ? (Ae[Qt] = Pr, Ae[cn] = tt, Qt = cn) : (Ae[Qt] = Ar, Ae[Nn] = tt, Qt = Nn);
          else if (cn < rn && A(Pr, tt) < 0)
            Ae[Qt] = Pr, Ae[cn] = tt, Qt = cn;
          else
            return;
        }
      }
      function A(Ae, tt) {
        var At = Ae.sortIndex - tt.sortIndex;
        return At !== 0 ? At : Ae.id - tt.id;
      }
      var N = 1, M = 2, $ = 3, z = 4, V = 5;
      function ee(Ae, tt) {
      }
      var Z = typeof performance == "object" && typeof performance.now == "function";
      if (Z) {
        var we = performance;
        f.unstable_now = function() {
          return we.now();
        };
      } else {
        var ce = Date, ae = ce.now();
        f.unstable_now = function() {
          return ce.now() - ae;
        };
      }
      var ie = 1073741823, H = -1, de = 250, _e = 5e3, Qe = 1e4, ut = ie, pt = [], vt = [], _t = 1, Ue = null, ge = $, Te = !1, xe = !1, ye = !1, J = typeof setTimeout == "function" ? setTimeout : null, Me = typeof clearTimeout == "function" ? clearTimeout : null, O = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function oe(Ae) {
        for (var tt = b(vt); tt !== null; ) {
          if (tt.callback === null)
            y(vt);
          else if (tt.startTime <= Ae)
            y(vt), tt.sortIndex = tt.expirationTime, T(pt, tt);
          else
            return;
          tt = b(vt);
        }
      }
      function re(Ae) {
        if (ye = !1, oe(Ae), !xe)
          if (b(pt) !== null)
            xe = !0, fr(pe);
          else {
            var tt = b(vt);
            tt !== null && Sn(re, tt.startTime - Ae);
          }
      }
      function pe(Ae, tt) {
        xe = !1, ye && (ye = !1, Mn()), Te = !0;
        var At = ge;
        try {
          var Qt;
          if (!v)
            return me(Ae, tt);
        } finally {
          Ue = null, ge = At, Te = !1;
        }
      }
      function me(Ae, tt) {
        var At = tt;
        for (oe(At), Ue = b(pt); Ue !== null && !p && !(Ue.expirationTime > At && (!Ae || Zn())); ) {
          var Qt = Ue.callback;
          if (typeof Qt == "function") {
            Ue.callback = null, ge = Ue.priorityLevel;
            var rn = Ue.expirationTime <= At, Qn = Qt(rn);
            At = f.unstable_now(), typeof Qn == "function" ? Ue.callback = Qn : Ue === b(pt) && y(pt), oe(At);
          } else
            y(pt);
          Ue = b(pt);
        }
        if (Ue !== null)
          return !0;
        var Nn = b(vt);
        return Nn !== null && Sn(re, Nn.startTime - At), !1;
      }
      function De(Ae, tt) {
        switch (Ae) {
          case N:
          case M:
          case $:
          case z:
          case V:
            break;
          default:
            Ae = $;
        }
        var At = ge;
        ge = Ae;
        try {
          return tt();
        } finally {
          ge = At;
        }
      }
      function P(Ae) {
        var tt;
        switch (ge) {
          case N:
          case M:
          case $:
            tt = $;
            break;
          default:
            tt = ge;
            break;
        }
        var At = ge;
        ge = tt;
        try {
          return Ae();
        } finally {
          ge = At;
        }
      }
      function je(Ae) {
        var tt = ge;
        return function() {
          var At = ge;
          ge = tt;
          try {
            return Ae.apply(this, arguments);
          } finally {
            ge = At;
          }
        };
      }
      function fe(Ae, tt, At) {
        var Qt = f.unstable_now(), rn;
        if (typeof At == "object" && At !== null) {
          var Qn = At.delay;
          typeof Qn == "number" && Qn > 0 ? rn = Qt + Qn : rn = Qt;
        } else
          rn = Qt;
        var Nn;
        switch (Ae) {
          case N:
            Nn = H;
            break;
          case M:
            Nn = de;
            break;
          case V:
            Nn = ut;
            break;
          case z:
            Nn = Qe;
            break;
          case $:
          default:
            Nn = _e;
            break;
        }
        var Ar = rn + Nn, cn = {
          id: _t++,
          callback: tt,
          priorityLevel: Ae,
          startTime: rn,
          expirationTime: Ar,
          sortIndex: -1
        };
        return rn > Qt ? (cn.sortIndex = rn, T(vt, cn), b(pt) === null && cn === b(vt) && (ye ? Mn() : ye = !0, Sn(re, rn - Qt))) : (cn.sortIndex = Ar, T(pt, cn), !xe && !Te && (xe = !0, fr(pe))), cn;
      }
      function at() {
      }
      function ht() {
        !xe && !Te && (xe = !0, fr(pe));
      }
      function Ot() {
        return b(pt);
      }
      function ve(Ae) {
        Ae.callback = null;
      }
      function bt() {
        return ge;
      }
      var zt = !1, qe = null, Pt = -1, ct = S, Zt = -1;
      function Zn() {
        var Ae = f.unstable_now() - Zt;
        return !(Ae < ct);
      }
      function Vt() {
      }
      function Yn(Ae) {
        if (Ae < 0 || Ae > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Ae > 0 ? ct = Math.floor(1e3 / Ae) : ct = S;
      }
      var Jn = function() {
        if (qe !== null) {
          var tt = f.unstable_now();
          Zt = tt;
          var At = !0, Qt = !0;
          try {
            Qt = qe(At, tt);
          } finally {
            Qt ? dn() : (zt = !1, qe = null);
          }
        } else
          zt = !1;
      }, dn;
      if (typeof O == "function")
        dn = function() {
          O(Jn);
        };
      else if (typeof MessageChannel < "u") {
        var et = new MessageChannel(), Lt = et.port2;
        et.port1.onmessage = Jn, dn = function() {
          Lt.postMessage(null);
        };
      } else
        dn = function() {
          J(Jn, 0);
        };
      function fr(Ae) {
        qe = Ae, zt || (zt = !0, dn());
      }
      function Sn(Ae, tt) {
        Pt = J(function() {
          Ae(f.unstable_now());
        }, tt);
      }
      function Mn() {
        Me(Pt), Pt = -1;
      }
      var Si = Vt, Ca = null;
      f.unstable_IdlePriority = V, f.unstable_ImmediatePriority = N, f.unstable_LowPriority = z, f.unstable_NormalPriority = $, f.unstable_Profiling = Ca, f.unstable_UserBlockingPriority = M, f.unstable_cancelCallback = ve, f.unstable_continueExecution = ht, f.unstable_forceFrameRate = Yn, f.unstable_getCurrentPriorityLevel = bt, f.unstable_getFirstCallbackNode = Ot, f.unstable_next = P, f.unstable_pauseExecution = at, f.unstable_requestPaint = Si, f.unstable_runWithPriority = De, f.unstable_scheduleCallback = fe, f.unstable_shouldYield = Zn, f.unstable_wrapCallback = je, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(vE)), vE;
}
var Mw;
function Cb() {
  return Mw || (Mw = 1, function(f) {
    ({}).NODE_ENV === "production" ? f.exports = ZD() : f.exports = JD();
  }(XD)), Ay;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Aw;
function eM() {
  if (Aw)
    return ri;
  Aw = 1;
  var f = eu(), p = Cb();
  function v(n) {
    for (var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++)
      a += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var S = /* @__PURE__ */ new Set(), T = {};
  function b(n, a) {
    y(n, a), y(n + "Capture", a);
  }
  function y(n, a) {
    for (T[n] = a, n = 0; n < a.length; n++)
      S.add(a[n]);
  }
  var L = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), k = Object.prototype.hasOwnProperty, A = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, N = {}, M = {};
  function $(n) {
    return k.call(M, n) ? !0 : k.call(N, n) ? !1 : A.test(n) ? M[n] = !0 : (N[n] = !0, !1);
  }
  function z(n, a, o, u) {
    if (o !== null && o.type === 0)
      return !1;
    switch (typeof a) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return u ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function V(n, a, o, u) {
    if (a === null || typeof a > "u" || z(n, a, o, u))
      return !0;
    if (u)
      return !1;
    if (o !== null)
      switch (o.type) {
        case 3:
          return !a;
        case 4:
          return a === !1;
        case 5:
          return isNaN(a);
        case 6:
          return isNaN(a) || 1 > a;
      }
    return !1;
  }
  function ee(n, a, o, u, c, h, C) {
    this.acceptsBooleans = a === 2 || a === 3 || a === 4, this.attributeName = u, this.attributeNamespace = c, this.mustUseProperty = o, this.propertyName = n, this.type = a, this.sanitizeURL = h, this.removeEmptyString = C;
  }
  var Z = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Z[n] = new ee(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var a = n[0];
    Z[a] = new ee(a, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Z[n] = new ee(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Z[n] = new ee(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Z[n] = new ee(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Z[n] = new ee(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Z[n] = new ee(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Z[n] = new ee(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Z[n] = new ee(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var we = /[\-:]([a-z])/g;
  function ce(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var a = n.replace(we, ce);
    Z[a] = new ee(a, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var a = n.replace(we, ce);
    Z[a] = new ee(a, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var a = n.replace(we, ce);
    Z[a] = new ee(a, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Z[n] = new ee(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Z.xlinkHref = new ee("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Z[n] = new ee(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ae(n, a, o, u) {
    var c = Z.hasOwnProperty(a) ? Z[a] : null;
    (c !== null ? c.type !== 0 : u || !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (V(a, o, c, u) && (o = null), u || c === null ? $(a) && (o === null ? n.removeAttribute(a) : n.setAttribute(a, "" + o)) : c.mustUseProperty ? n[c.propertyName] = o === null ? c.type === 3 ? !1 : "" : o : (a = c.attributeName, u = c.attributeNamespace, o === null ? n.removeAttribute(a) : (c = c.type, o = c === 3 || c === 4 && o === !0 ? "" : "" + o, u ? n.setAttributeNS(u, a, o) : n.setAttribute(a, o))));
  }
  var ie = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, H = Symbol.for("react.element"), de = Symbol.for("react.portal"), _e = Symbol.for("react.fragment"), Qe = Symbol.for("react.strict_mode"), ut = Symbol.for("react.profiler"), pt = Symbol.for("react.provider"), vt = Symbol.for("react.context"), _t = Symbol.for("react.forward_ref"), Ue = Symbol.for("react.suspense"), ge = Symbol.for("react.suspense_list"), Te = Symbol.for("react.memo"), xe = Symbol.for("react.lazy"), ye = Symbol.for("react.offscreen"), J = Symbol.iterator;
  function Me(n) {
    return n === null || typeof n != "object" ? null : (n = J && n[J] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var O = Object.assign, oe;
  function re(n) {
    if (oe === void 0)
      try {
        throw Error();
      } catch (o) {
        var a = o.stack.trim().match(/\n( *(at )?)/);
        oe = a && a[1] || "";
      }
    return `
` + oe + n;
  }
  var pe = !1;
  function me(n, a) {
    if (!n || pe)
      return "";
    pe = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (a)
        if (a = function() {
          throw Error();
        }, Object.defineProperty(a.prototype, "props", {
          set: function() {
            throw Error();
          }
        }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(a, []);
          } catch (X) {
            var u = X;
          }
          Reflect.construct(n, [], a);
        } else {
          try {
            a.call();
          } catch (X) {
            u = X;
          }
          n.call(a.prototype);
        }
      else {
        try {
          throw Error();
        } catch (X) {
          u = X;
        }
        n();
      }
    } catch (X) {
      if (X && u && typeof X.stack == "string") {
        for (var c = X.stack.split(`
`), h = u.stack.split(`
`), C = c.length - 1, x = h.length - 1; 1 <= C && 0 <= x && c[C] !== h[x]; )
          x--;
        for (; 1 <= C && 0 <= x; C--, x--)
          if (c[C] !== h[x]) {
            if (C !== 1 || x !== 1)
              do
                if (C--, x--, 0 > x || c[C] !== h[x]) {
                  var I = `
` + c[C].replace(" at new ", " at ");
                  return n.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", n.displayName)), I;
                }
              while (1 <= C && 0 <= x);
            break;
          }
      }
    } finally {
      pe = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? re(n) : "";
  }
  function De(n) {
    switch (n.tag) {
      case 5:
        return re(n.type);
      case 16:
        return re("Lazy");
      case 13:
        return re("Suspense");
      case 19:
        return re("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = me(n.type, !1), n;
      case 11:
        return n = me(n.type.render, !1), n;
      case 1:
        return n = me(n.type, !0), n;
      default:
        return "";
    }
  }
  function P(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case _e:
        return "Fragment";
      case de:
        return "Portal";
      case ut:
        return "Profiler";
      case Qe:
        return "StrictMode";
      case Ue:
        return "Suspense";
      case ge:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case vt:
          return (n.displayName || "Context") + ".Consumer";
        case pt:
          return (n._context.displayName || "Context") + ".Provider";
        case _t:
          var a = n.render;
          return n = n.displayName, n || (n = a.displayName || a.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Te:
          return a = n.displayName || null, a !== null ? a : P(n.type) || "Memo";
        case xe:
          a = n._payload, n = n._init;
          try {
            return P(n(a));
          } catch {
          }
      }
    return null;
  }
  function je(n) {
    var a = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (a.displayName || "Context") + ".Consumer";
      case 10:
        return (a._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = a.render, n = n.displayName || n.name || "", a.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return a;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return P(a);
      case 8:
        return a === Qe ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof a == "function")
          return a.displayName || a.name || null;
        if (typeof a == "string")
          return a;
    }
    return null;
  }
  function fe(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function at(n) {
    var a = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (a === "checkbox" || a === "radio");
  }
  function ht(n) {
    var a = at(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, a), u = "" + n[a];
    if (!n.hasOwnProperty(a) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var c = o.get, h = o.set;
      return Object.defineProperty(n, a, {
        configurable: !0,
        get: function() {
          return c.call(this);
        },
        set: function(x) {
          u = "" + x, h.call(this, x);
        }
      }), Object.defineProperty(n, a, {
        enumerable: o.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(x) {
          u = "" + x;
        },
        stopTracking: function() {
          n._valueTracker = null, delete n[a];
        }
      };
    }
  }
  function Ot(n) {
    n._valueTracker || (n._valueTracker = ht(n));
  }
  function ve(n) {
    if (!n)
      return !1;
    var a = n._valueTracker;
    if (!a)
      return !0;
    var o = a.getValue(), u = "";
    return n && (u = at(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== o ? (a.setValue(n), !0) : !1;
  }
  function bt(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function zt(n, a) {
    var o = a.checked;
    return O({}, a, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: o ?? n._wrapperState.initialChecked
    });
  }
  function qe(n, a) {
    var o = a.defaultValue == null ? "" : a.defaultValue, u = a.checked != null ? a.checked : a.defaultChecked;
    o = fe(a.value != null ? a.value : o), n._wrapperState = {
      initialChecked: u,
      initialValue: o,
      controlled: a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null
    };
  }
  function Pt(n, a) {
    a = a.checked, a != null && ae(n, "checked", a, !1);
  }
  function ct(n, a) {
    Pt(n, a);
    var o = fe(a.value), u = a.type;
    if (o != null)
      u === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    a.hasOwnProperty("value") ? Zn(n, a.type, o) : a.hasOwnProperty("defaultValue") && Zn(n, a.type, fe(a.defaultValue)), a.checked == null && a.defaultChecked != null && (n.defaultChecked = !!a.defaultChecked);
  }
  function Zt(n, a, o) {
    if (a.hasOwnProperty("value") || a.hasOwnProperty("defaultValue")) {
      var u = a.type;
      if (!(u !== "submit" && u !== "reset" || a.value !== void 0 && a.value !== null))
        return;
      a = "" + n._wrapperState.initialValue, o || a === n.value || (n.value = a), n.defaultValue = a;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function Zn(n, a, o) {
    (a !== "number" || bt(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var Vt = Array.isArray;
  function Yn(n, a, o, u) {
    if (n = n.options, a) {
      a = {};
      for (var c = 0; c < o.length; c++)
        a["$" + o[c]] = !0;
      for (o = 0; o < n.length; o++)
        c = a.hasOwnProperty("$" + n[o].value), n[o].selected !== c && (n[o].selected = c), c && u && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + fe(o), a = null, c = 0; c < n.length; c++) {
        if (n[c].value === o) {
          n[c].selected = !0, u && (n[c].defaultSelected = !0);
          return;
        }
        a !== null || n[c].disabled || (a = n[c]);
      }
      a !== null && (a.selected = !0);
    }
  }
  function Jn(n, a) {
    if (a.dangerouslySetInnerHTML != null)
      throw Error(v(91));
    return O({}, a, {
      value: void 0,
      defaultValue: void 0,
      children: "" + n._wrapperState.initialValue
    });
  }
  function dn(n, a) {
    var o = a.value;
    if (o == null) {
      if (o = a.children, a = a.defaultValue, o != null) {
        if (a != null)
          throw Error(v(92));
        if (Vt(o)) {
          if (1 < o.length)
            throw Error(v(93));
          o = o[0];
        }
        a = o;
      }
      a == null && (a = ""), o = a;
    }
    n._wrapperState = {
      initialValue: fe(o)
    };
  }
  function et(n, a) {
    var o = fe(a.value), u = fe(a.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), a.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), u != null && (n.defaultValue = "" + u);
  }
  function Lt(n) {
    var a = n.textContent;
    a === n._wrapperState.initialValue && a !== "" && a !== null && (n.value = a);
  }
  function fr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Sn(n, a) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? fr(a) : n === "http://www.w3.org/2000/svg" && a === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Mn, Si = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(a, o, u, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(a, o, u, c);
      });
    } : n;
  }(function(n, a) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = a;
    else {
      for (Mn = Mn || document.createElement("div"), Mn.innerHTML = "<svg>" + a.valueOf().toString() + "</svg>", a = Mn.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; a.firstChild; )
        n.appendChild(a.firstChild);
    }
  });
  function Ca(n, a) {
    if (a) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = a;
        return;
      }
    }
    n.textContent = a;
  }
  var Ae = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, tt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ae).forEach(function(n) {
    tt.forEach(function(a) {
      a = a + n.charAt(0).toUpperCase() + n.substring(1), Ae[a] = Ae[n];
    });
  });
  function At(n, a, o) {
    return a == null || typeof a == "boolean" || a === "" ? "" : o || typeof a != "number" || a === 0 || Ae.hasOwnProperty(n) && Ae[n] ? ("" + a).trim() : a + "px";
  }
  function Qt(n, a) {
    n = n.style;
    for (var o in a)
      if (a.hasOwnProperty(o)) {
        var u = o.indexOf("--") === 0, c = At(o, a[o], u);
        o === "float" && (o = "cssFloat"), u ? n.setProperty(o, c) : n[o] = c;
      }
  }
  var rn = O({
    menuitem: !0
  }, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  });
  function Qn(n, a) {
    if (a) {
      if (rn[n] && (a.children != null || a.dangerouslySetInnerHTML != null))
        throw Error(v(137, n));
      if (a.dangerouslySetInnerHTML != null) {
        if (a.children != null)
          throw Error(v(60));
        if (typeof a.dangerouslySetInnerHTML != "object" || !("__html" in a.dangerouslySetInnerHTML))
          throw Error(v(61));
      }
      if (a.style != null && typeof a.style != "object")
        throw Error(v(62));
    }
  }
  function Nn(n, a) {
    if (n.indexOf("-") === -1)
      return typeof a.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ar = null;
  function cn(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Pr = null, an = null, on = null;
  function oi(n) {
    if (n = Os(n)) {
      if (typeof Pr != "function")
        throw Error(v(280));
      var a = n.stateNode;
      a && (a = it(a), Pr(n.stateNode, n.type, a));
    }
  }
  function Fa(n) {
    an ? on ? on.push(n) : on = [n] : an = n;
  }
  function yo() {
    if (an) {
      var n = an, a = on;
      if (on = an = null, oi(n), a)
        for (n = 0; n < a.length; n++)
          oi(a[n]);
    }
  }
  function ll(n, a) {
    return n(a);
  }
  function tu() {
  }
  var Vi = !1;
  function go(n, a, o) {
    if (Vi)
      return n(a, o);
    Vi = !0;
    try {
      return ll(n, a, o);
    } finally {
      Vi = !1, (an !== null || on !== null) && (tu(), yo());
    }
  }
  function Ta(n, a) {
    var o = n.stateNode;
    if (o === null)
      return null;
    var u = it(o);
    if (u === null)
      return null;
    o = u[a];
    e:
      switch (a) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (u = !u.disabled) || (n = n.type, u = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !u;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (o && typeof o != "function")
      throw Error(v(231, a, typeof o));
    return o;
  }
  var Ei = !1;
  if (L)
    try {
      var wa = {};
      Object.defineProperty(wa, "passive", {
        get: function() {
          Ei = !0;
        }
      }), window.addEventListener("test", wa, wa), window.removeEventListener("test", wa, wa);
    } catch {
      Ei = !1;
    }
  function Ci(n, a, o, u, c, h, C, x, I) {
    var X = Array.prototype.slice.call(arguments, 3);
    try {
      a.apply(o, X);
    } catch (te) {
      this.onError(te);
    }
  }
  var Vr = !1, ba = null, Ti = !1, D = null, Se = {
    onError: function(a) {
      Vr = !0, ba = a;
    }
  };
  function Le(n, a, o, u, c, h, C, x, I) {
    Vr = !1, ba = null, Ci.apply(Se, arguments);
  }
  function ze(n, a, o, u, c, h, C, x, I) {
    if (Le.apply(this, arguments), Vr) {
      if (Vr) {
        var X = ba;
        Vr = !1, ba = null;
      } else
        throw Error(v(198));
      Ti || (Ti = !0, D = X);
    }
  }
  function xt(n) {
    var a = n, o = n;
    if (n.alternate)
      for (; a.return; )
        a = a.return;
    else {
      n = a;
      do
        a = n, a.flags & 4098 && (o = a.return), n = a.return;
      while (n);
    }
    return a.tag === 3 ? o : null;
  }
  function $t(n) {
    if (n.tag === 13) {
      var a = n.memoizedState;
      if (a === null && (n = n.alternate, n !== null && (a = n.memoizedState)), a !== null)
        return a.dehydrated;
    }
    return null;
  }
  function kt(n) {
    if (xt(n) !== n)
      throw Error(v(188));
  }
  function yt(n) {
    var a = n.alternate;
    if (!a) {
      if (a = xt(n), a === null)
        throw Error(v(188));
      return a !== n ? null : n;
    }
    for (var o = n, u = a; ; ) {
      var c = o.return;
      if (c === null)
        break;
      var h = c.alternate;
      if (h === null) {
        if (u = c.return, u !== null) {
          o = u;
          continue;
        }
        break;
      }
      if (c.child === h.child) {
        for (h = c.child; h; ) {
          if (h === o)
            return kt(c), n;
          if (h === u)
            return kt(c), a;
          h = h.sibling;
        }
        throw Error(v(188));
      }
      if (o.return !== u.return)
        o = c, u = h;
      else {
        for (var C = !1, x = c.child; x; ) {
          if (x === o) {
            C = !0, o = c, u = h;
            break;
          }
          if (x === u) {
            C = !0, u = c, o = h;
            break;
          }
          x = x.sibling;
        }
        if (!C) {
          for (x = h.child; x; ) {
            if (x === o) {
              C = !0, o = h, u = c;
              break;
            }
            if (x === u) {
              C = !0, u = h, o = c;
              break;
            }
            x = x.sibling;
          }
          if (!C)
            throw Error(v(189));
        }
      }
      if (o.alternate !== u)
        throw Error(v(190));
    }
    if (o.tag !== 3)
      throw Error(v(188));
    return o.stateNode.current === o ? n : a;
  }
  function pn(n) {
    return n = yt(n), n !== null ? wn(n) : null;
  }
  function wn(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var a = wn(n);
      if (a !== null)
        return a;
      n = n.sibling;
    }
    return null;
  }
  var bn = p.unstable_scheduleCallback, Er = p.unstable_cancelCallback, wi = p.unstable_shouldYield, nu = p.unstable_requestPaint, Ht = p.unstable_now, pd = p.unstable_getCurrentPriorityLevel, li = p.unstable_ImmediatePriority, Nt = p.unstable_UserBlockingPriority, bi = p.unstable_NormalPriority, So = p.unstable_LowPriority, ru = p.unstable_IdlePriority, Eo = null, ra = null;
  function fs(n) {
    if (ra && typeof ra.onCommitFiberRoot == "function")
      try {
        ra.onCommitFiberRoot(Eo, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Hr = Math.clz32 ? Math.clz32 : gc, ds = Math.log, ps = Math.LN2;
  function gc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (ds(n) / ps | 0) | 0;
  }
  var au = 64, Co = 4194304;
  function ui(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function $r(n, a) {
    var o = n.pendingLanes;
    if (o === 0)
      return 0;
    var u = 0, c = n.suspendedLanes, h = n.pingedLanes, C = o & 268435455;
    if (C !== 0) {
      var x = C & ~c;
      x !== 0 ? u = ui(x) : (h &= C, h !== 0 && (u = ui(h)));
    } else
      C = o & ~c, C !== 0 ? u = ui(C) : h !== 0 && (u = ui(h));
    if (u === 0)
      return 0;
    if (a !== 0 && a !== u && !(a & c) && (c = u & -u, h = a & -a, c >= h || c === 16 && (h & 4194240) !== 0))
      return a;
    if (u & 4 && (u |= o & 16), a = n.entangledLanes, a !== 0)
      for (n = n.entanglements, a &= u; 0 < a; )
        o = 31 - Hr(a), c = 1 << o, u |= n[o], a &= ~c;
    return u;
  }
  function To(n, a) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return a + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function wo(n, a) {
    for (var o = n.suspendedLanes, u = n.pingedLanes, c = n.expirationTimes, h = n.pendingLanes; 0 < h; ) {
      var C = 31 - Hr(h), x = 1 << C, I = c[C];
      I === -1 ? (!(x & o) || x & u) && (c[C] = To(x, a)) : I <= a && (n.expiredLanes |= x), h &= ~x;
    }
  }
  function bo(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function iu() {
    var n = au;
    return au <<= 1, !(au & 4194240) && (au = 64), n;
  }
  function ou(n) {
    for (var a = [], o = 0; 31 > o; o++)
      a.push(n);
    return a;
  }
  function Hi(n, a, o) {
    n.pendingLanes |= a, a !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, a = 31 - Hr(a), n[a] = o;
  }
  function vd(n, a) {
    var o = n.pendingLanes & ~a;
    n.pendingLanes = a, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= a, n.mutableReadLanes &= a, n.entangledLanes &= a, a = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var c = 31 - Hr(o), h = 1 << c;
      a[c] = 0, u[c] = -1, n[c] = -1, o &= ~h;
    }
  }
  function Ri(n, a) {
    var o = n.entangledLanes |= a;
    for (n = n.entanglements; o; ) {
      var u = 31 - Hr(o), c = 1 << u;
      c & a | n[u] & a && (n[u] |= a), o &= ~c;
    }
  }
  var Jt = 0;
  function lu(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var ul, uu, qt, su, cu, Tt = !1, sl = [], In = null, aa = null, Br = null, Ro = /* @__PURE__ */ new Map(), Vn = /* @__PURE__ */ new Map(), ln = [], Sc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ia(n, a) {
    switch (n) {
      case "focusin":
      case "focusout":
        In = null;
        break;
      case "dragenter":
      case "dragleave":
        aa = null;
        break;
      case "mouseover":
      case "mouseout":
        Br = null;
        break;
      case "pointerover":
      case "pointerout":
        Ro.delete(a.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Vn.delete(a.pointerId);
    }
  }
  function dr(n, a, o, u, c, h) {
    return n === null || n.nativeEvent !== h ? (n = {
      blockedOn: a,
      domEventName: o,
      eventSystemFlags: u,
      nativeEvent: h,
      targetContainers: [c]
    }, a !== null && (a = Os(a), a !== null && uu(a)), n) : (n.eventSystemFlags |= u, a = n.targetContainers, c !== null && a.indexOf(c) === -1 && a.push(c), n);
  }
  function xi(n, a, o, u, c) {
    switch (a) {
      case "focusin":
        return In = dr(In, n, a, o, u, c), !0;
      case "dragenter":
        return aa = dr(aa, n, a, o, u, c), !0;
      case "mouseover":
        return Br = dr(Br, n, a, o, u, c), !0;
      case "pointerover":
        var h = c.pointerId;
        return Ro.set(h, dr(Ro.get(h) || null, n, a, o, u, c)), !0;
      case "gotpointercapture":
        return h = c.pointerId, Vn.set(h, dr(Vn.get(h) || null, n, a, o, u, c)), !0;
    }
    return !1;
  }
  function Ec(n) {
    var a = Va(n.target);
    if (a !== null) {
      var o = xt(a);
      if (o !== null) {
        if (a = o.tag, a === 13) {
          if (a = $t(o), a !== null) {
            n.blockedOn = a, cu(n.priority, function() {
              qt(o);
            });
            return;
          }
        } else if (a === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function $i(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var a = n.targetContainers; 0 < a.length; ) {
      var o = du(n.domEventName, n.eventSystemFlags, a[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var u = new o.constructor(o.type, o);
        Ar = u, o.target.dispatchEvent(u), Ar = null;
      } else
        return a = Os(o), a !== null && uu(a), n.blockedOn = o, !1;
      a.shift();
    }
    return !0;
  }
  function xo(n, a, o) {
    $i(n) && o.delete(a);
  }
  function Cc() {
    Tt = !1, In !== null && $i(In) && (In = null), aa !== null && $i(aa) && (aa = null), Br !== null && $i(Br) && (Br = null), Ro.forEach(xo), Vn.forEach(xo);
  }
  function ja(n, a) {
    n.blockedOn === a && (n.blockedOn = null, Tt || (Tt = !0, p.unstable_scheduleCallback(p.unstable_NormalPriority, Cc)));
  }
  function _o(n) {
    function a(c) {
      return ja(c, n);
    }
    if (0 < sl.length) {
      ja(sl[0], n);
      for (var o = 1; o < sl.length; o++) {
        var u = sl[o];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (In !== null && ja(In, n), aa !== null && ja(aa, n), Br !== null && ja(Br, n), Ro.forEach(a), Vn.forEach(a), o = 0; o < ln.length; o++)
      u = ln[o], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < ln.length && (o = ln[0], o.blockedOn === null); )
      Ec(o), o.blockedOn === null && ln.shift();
  }
  var Oo = ie.ReactCurrentBatchConfig, za = !0;
  function fu(n, a, o, u) {
    var c = Jt, h = Oo.transition;
    Oo.transition = null;
    try {
      Jt = 1, Do(n, a, o, u);
    } finally {
      Jt = c, Oo.transition = h;
    }
  }
  function ko(n, a, o, u) {
    var c = Jt, h = Oo.transition;
    Oo.transition = null;
    try {
      Jt = 4, Do(n, a, o, u);
    } finally {
      Jt = c, Oo.transition = h;
    }
  }
  function Do(n, a, o, u) {
    if (za) {
      var c = du(n, a, o, u);
      if (c === null)
        Dc(n, a, u, cl, o), ia(n, u);
      else if (xi(c, n, a, o, u))
        u.stopPropagation();
      else if (ia(n, u), a & 4 && -1 < Sc.indexOf(n)) {
        for (; c !== null; ) {
          var h = Os(c);
          if (h !== null && ul(h), h = du(n, a, o, u), h === null && Dc(n, a, u, cl, o), h === c)
            break;
          c = h;
        }
        c !== null && u.stopPropagation();
      } else
        Dc(n, a, u, null, o);
    }
  }
  var cl = null;
  function du(n, a, o, u) {
    if (cl = null, n = cn(u), n = Va(n), n !== null)
      if (a = xt(n), a === null)
        n = null;
      else if (o = a.tag, o === 13) {
        if (n = $t(a), n !== null)
          return n;
        n = null;
      } else if (o === 3) {
        if (a.stateNode.current.memoizedState.isDehydrated)
          return a.tag === 3 ? a.stateNode.containerInfo : null;
        n = null;
      } else
        a !== n && (n = null);
    return cl = n, null;
  }
  function vs(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (pd()) {
          case li:
            return 1;
          case Nt:
            return 4;
          case bi:
          case So:
            return 16;
          case ru:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var si = null, E = null, _ = null;
  function q() {
    if (_)
      return _;
    var n, a = E, o = a.length, u, c = "value" in si ? si.value : si.textContent, h = c.length;
    for (n = 0; n < o && a[n] === c[n]; n++)
      ;
    var C = o - n;
    for (u = 1; u <= C && a[o - u] === c[h - u]; u++)
      ;
    return _ = c.slice(n, 1 < u ? 1 - u : void 0);
  }
  function ne(n) {
    var a = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && a === 13 && (n = 13)) : n = a, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Re() {
    return !0;
  }
  function ot() {
    return !1;
  }
  function ke(n) {
    function a(o, u, c, h, C) {
      this._reactName = o, this._targetInst = c, this.type = u, this.nativeEvent = h, this.target = C, this.currentTarget = null;
      for (var x in n)
        n.hasOwnProperty(x) && (o = n[x], this[x] = o ? o(h) : h[x]);
      return this.isDefaultPrevented = (h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1) ? Re : ot, this.isPropagationStopped = ot, this;
    }
    return O(a.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = Re);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = Re);
      },
      persist: function() {
      },
      isPersistent: Re
    }), a;
  }
  var nt = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(a) {
      return a.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Et = ke(nt), Kt = O({}, nt, {
    view: 0,
    detail: 0
  }), En = ke(Kt), fn, Hn, vn, It = O({}, Kt, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Sd,
    button: 0,
    buttons: 0,
    relatedTarget: function(a) {
      return a.relatedTarget === void 0 ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
    },
    movementX: function(a) {
      return "movementX" in a ? a.movementX : (a !== vn && (vn && a.type === "mousemove" ? (fn = a.screenX - vn.screenX, Hn = a.screenY - vn.screenY) : Hn = fn = 0, vn = a), fn);
    },
    movementY: function(a) {
      return "movementY" in a ? a.movementY : Hn;
    }
  }), oa = ke(It), pu = O({}, It, {
    dataTransfer: 0
  }), hs = ke(pu), hd = O({}, Kt, {
    relatedTarget: 0
  }), ci = ke(hd), ms = O({}, nt, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ys = ke(ms), md = O({}, nt, {
    clipboardData: function(a) {
      return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    }
  }), Hy = ke(md), $y = O({}, nt, {
    data: 0
  }), yd = ke($y), gd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Fv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, jv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function zv(n) {
    var a = this.nativeEvent;
    return a.getModifierState ? a.getModifierState(n) : (n = jv[n]) ? !!a[n] : !1;
  }
  function Sd() {
    return zv;
  }
  var Bi = O({}, Kt, {
    key: function(a) {
      if (a.key) {
        var o = gd[a.key] || a.key;
        if (o !== "Unidentified")
          return o;
      }
      return a.type === "keypress" ? (a = ne(a), a === 13 ? "Enter" : String.fromCharCode(a)) : a.type === "keydown" || a.type === "keyup" ? Fv[a.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Sd,
    charCode: function(a) {
      return a.type === "keypress" ? ne(a) : 0;
    },
    keyCode: function(a) {
      return a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
    },
    which: function(a) {
      return a.type === "keypress" ? ne(a) : a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
    }
  }), By = ke(Bi), Ed = O({}, It, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Tc = ke(Ed), Cd = O({}, Kt, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Sd
  }), Wy = ke(Cd), wc = O({}, nt, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Pv = ke(wc), la = O({}, It, {
    deltaX: function(a) {
      return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
    },
    deltaY: function(a) {
      return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Wi = ke(la), er = [9, 13, 27, 32], fi = L && "CompositionEvent" in window, fl = null;
  L && "documentMode" in document && (fl = document.documentMode);
  var bc = L && "TextEvent" in window && !fl, Vv = L && (!fi || fl && 8 < fl && 11 >= fl), vu = String.fromCharCode(32), Hv = !1;
  function $v(n, a) {
    switch (n) {
      case "keyup":
        return er.indexOf(a.keyCode) !== -1;
      case "keydown":
        return a.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Rc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var hu = !1;
  function Gy(n, a) {
    switch (n) {
      case "compositionend":
        return Rc(a);
      case "keypress":
        return a.which !== 32 ? null : (Hv = !0, vu);
      case "textInput":
        return n = a.data, n === vu && Hv ? null : n;
      default:
        return null;
    }
  }
  function Yy(n, a) {
    if (hu)
      return n === "compositionend" || !fi && $v(n, a) ? (n = q(), _ = E = si = null, hu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(a.ctrlKey || a.altKey || a.metaKey) || a.ctrlKey && a.altKey) {
          if (a.char && 1 < a.char.length)
            return a.char;
          if (a.which)
            return String.fromCharCode(a.which);
        }
        return null;
      case "compositionend":
        return Vv && a.locale !== "ko" ? null : a.data;
      default:
        return null;
    }
  }
  var Bv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Wv(n) {
    var a = n && n.nodeName && n.nodeName.toLowerCase();
    return a === "input" ? !!Bv[n.type] : a === "textarea";
  }
  function Gv(n, a, o, u) {
    Fa(u), a = Rs(a, "onChange"), 0 < a.length && (o = new Et("onChange", "change", null, o, u), n.push({
      event: o,
      listeners: a
    }));
  }
  var gs = null, mu = null;
  function yu(n) {
    kc(n, 0);
  }
  function gu(n) {
    var a = Eu(n);
    if (ve(a))
      return n;
  }
  function Yv(n, a) {
    if (n === "change")
      return a;
  }
  var Td = !1;
  if (L) {
    var wd;
    if (L) {
      var bd = "oninput" in document;
      if (!bd) {
        var Qv = document.createElement("div");
        Qv.setAttribute("oninput", "return;"), bd = typeof Qv.oninput == "function";
      }
      wd = bd;
    } else
      wd = !1;
    Td = wd && (!document.documentMode || 9 < document.documentMode);
  }
  function qv() {
    gs && (gs.detachEvent("onpropertychange", Kv), mu = gs = null);
  }
  function Kv(n) {
    if (n.propertyName === "value" && gu(mu)) {
      var a = [];
      Gv(a, mu, n, cn(n)), go(yu, a);
    }
  }
  function Qy(n, a, o) {
    n === "focusin" ? (qv(), gs = a, mu = o, gs.attachEvent("onpropertychange", Kv)) : n === "focusout" && qv();
  }
  function qy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return gu(mu);
  }
  function Ky(n, a) {
    if (n === "click")
      return gu(a);
  }
  function Xv(n, a) {
    if (n === "input" || n === "change")
      return gu(a);
  }
  function Xy(n, a) {
    return n === a && (n !== 0 || 1 / n === 1 / a) || n !== n && a !== a;
  }
  var Pa = typeof Object.is == "function" ? Object.is : Xy;
  function Ss(n, a) {
    if (Pa(n, a))
      return !0;
    if (typeof n != "object" || n === null || typeof a != "object" || a === null)
      return !1;
    var o = Object.keys(n), u = Object.keys(a);
    if (o.length !== u.length)
      return !1;
    for (u = 0; u < o.length; u++) {
      var c = o[u];
      if (!k.call(a, c) || !Pa(n[c], a[c]))
        return !1;
    }
    return !0;
  }
  function Zv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function Jv(n, a) {
    var o = Zv(n);
    n = 0;
    for (var u; o; ) {
      if (o.nodeType === 3) {
        if (u = n + o.textContent.length, n <= a && u >= a)
          return {
            node: o,
            offset: a - n
          };
        n = u;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = Zv(o);
    }
  }
  function eh(n, a) {
    return n && a ? n === a ? !0 : n && n.nodeType === 3 ? !1 : a && a.nodeType === 3 ? eh(n, a.parentNode) : "contains" in n ? n.contains(a) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(a) & 16) : !1 : !1;
  }
  function xc() {
    for (var n = window, a = bt(); a instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof a.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o)
        n = a.contentWindow;
      else
        break;
      a = bt(n.document);
    }
    return a;
  }
  function Gi(n) {
    var a = n && n.nodeName && n.nodeName.toLowerCase();
    return a && (a === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || a === "textarea" || n.contentEditable === "true");
  }
  function _c(n) {
    var a = xc(), o = n.focusedElem, u = n.selectionRange;
    if (a !== o && o && o.ownerDocument && eh(o.ownerDocument.documentElement, o)) {
      if (u !== null && Gi(o)) {
        if (a = u.start, n = u.end, n === void 0 && (n = a), "selectionStart" in o)
          o.selectionStart = a, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (a = o.ownerDocument || document) && a.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = o.textContent.length, h = Math.min(u.start, c);
          u = u.end === void 0 ? h : Math.min(u.end, c), !n.extend && h > u && (c = u, u = h, h = c), c = Jv(o, h);
          var C = Jv(o, u);
          c && C && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== C.node || n.focusOffset !== C.offset) && (a = a.createRange(), a.setStart(c.node, c.offset), n.removeAllRanges(), h > u ? (n.addRange(a), n.extend(C.node, C.offset)) : (a.setEnd(C.node, C.offset), n.addRange(a)));
        }
      }
      for (a = [], n = o; n = n.parentNode; )
        n.nodeType === 1 && a.push({
          element: n,
          left: n.scrollLeft,
          top: n.scrollTop
        });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < a.length; o++)
        n = a[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var th = L && "documentMode" in document && 11 >= document.documentMode, di = null, Rd = null, Es = null, xd = !1;
  function nh(n, a, o) {
    var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    xd || di == null || di !== bt(u) || (u = di, "selectionStart" in u && Gi(u) ? u = {
      start: u.selectionStart,
      end: u.selectionEnd
    } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
      anchorNode: u.anchorNode,
      anchorOffset: u.anchorOffset,
      focusNode: u.focusNode,
      focusOffset: u.focusOffset
    }), Es && Ss(Es, u) || (Es = u, u = Rs(Rd, "onSelect"), 0 < u.length && (a = new Et("onSelect", "select", null, a, o), n.push({
      event: a,
      listeners: u
    }), a.target = di)));
  }
  function Oc(n, a) {
    var o = {};
    return o[n.toLowerCase()] = a.toLowerCase(), o["Webkit" + n] = "webkit" + a, o["Moz" + n] = "moz" + a, o;
  }
  var dl = {
    animationend: Oc("Animation", "AnimationEnd"),
    animationiteration: Oc("Animation", "AnimationIteration"),
    animationstart: Oc("Animation", "AnimationStart"),
    transitionend: Oc("Transition", "TransitionEnd")
  }, _d = {}, Od = {};
  L && (Od = document.createElement("div").style, "AnimationEvent" in window || (delete dl.animationend.animation, delete dl.animationiteration.animation, delete dl.animationstart.animation), "TransitionEvent" in window || delete dl.transitionend.transition);
  function pr(n) {
    if (_d[n])
      return _d[n];
    if (!dl[n])
      return n;
    var a = dl[n], o;
    for (o in a)
      if (a.hasOwnProperty(o) && o in Od)
        return _d[n] = a[o];
    return n;
  }
  var kd = pr("animationend"), rh = pr("animationiteration"), ah = pr("animationstart"), ih = pr("transitionend"), oh = /* @__PURE__ */ new Map(), lh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Yi(n, a) {
    oh.set(n, a), b(a, [n]);
  }
  for (var Cs = 0; Cs < lh.length; Cs++) {
    var pl = lh[Cs], Zy = pl.toLowerCase(), Ts = pl[0].toUpperCase() + pl.slice(1);
    Yi(Zy, "on" + Ts);
  }
  Yi(kd, "onAnimationEnd"), Yi(rh, "onAnimationIteration"), Yi(ah, "onAnimationStart"), Yi("dblclick", "onDoubleClick"), Yi("focusin", "onFocus"), Yi("focusout", "onBlur"), Yi(ih, "onTransitionEnd"), y("onMouseEnter", ["mouseout", "mouseover"]), y("onMouseLeave", ["mouseout", "mouseover"]), y("onPointerEnter", ["pointerout", "pointerover"]), y("onPointerLeave", ["pointerout", "pointerover"]), b("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), b("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), b("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), b("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), b("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), b("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ws = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Jy = new Set("cancel close invalid load scroll toggle".split(" ").concat(ws));
  function uh(n, a, o) {
    var u = n.type || "unknown-event";
    n.currentTarget = o, ze(u, a, void 0, n), n.currentTarget = null;
  }
  function kc(n, a) {
    a = (a & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var u = n[o], c = u.event;
      u = u.listeners;
      e: {
        var h = void 0;
        if (a)
          for (var C = u.length - 1; 0 <= C; C--) {
            var x = u[C], I = x.instance, X = x.currentTarget;
            if (x = x.listener, I !== h && c.isPropagationStopped())
              break e;
            uh(c, x, X), h = I;
          }
        else
          for (C = 0; C < u.length; C++) {
            if (x = u[C], I = x.instance, X = x.currentTarget, x = x.listener, I !== h && c.isPropagationStopped())
              break e;
            uh(c, x, X), h = I;
          }
      }
    }
    if (Ti)
      throw n = D, Ti = !1, D = null, n;
  }
  function Cn(n, a) {
    var o = a[Ud];
    o === void 0 && (o = a[Ud] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    o.has(u) || (sh(a, n, 2, !1), o.add(u));
  }
  function Mo(n, a, o) {
    var u = 0;
    a && (u |= 4), sh(o, n, u, a);
  }
  var Qi = "_reactListening" + Math.random().toString(36).slice(2);
  function Su(n) {
    if (!n[Qi]) {
      n[Qi] = !0, S.forEach(function(o) {
        o !== "selectionchange" && (Jy.has(o) || Mo(o, !1, n), Mo(o, !0, n));
      });
      var a = n.nodeType === 9 ? n : n.ownerDocument;
      a === null || a[Qi] || (a[Qi] = !0, Mo("selectionchange", !1, a));
    }
  }
  function sh(n, a, o, u) {
    switch (vs(a)) {
      case 1:
        var c = fu;
        break;
      case 4:
        c = ko;
        break;
      default:
        c = Do;
    }
    o = c.bind(null, a, o, n), c = void 0, !Ei || a !== "touchstart" && a !== "touchmove" && a !== "wheel" || (c = !0), u ? c !== void 0 ? n.addEventListener(a, o, {
      capture: !0,
      passive: c
    }) : n.addEventListener(a, o, !0) : c !== void 0 ? n.addEventListener(a, o, {
      passive: c
    }) : n.addEventListener(a, o, !1);
  }
  function Dc(n, a, o, u, c) {
    var h = u;
    if (!(a & 1) && !(a & 2) && u !== null)
      e:
        for (; ; ) {
          if (u === null)
            return;
          var C = u.tag;
          if (C === 3 || C === 4) {
            var x = u.stateNode.containerInfo;
            if (x === c || x.nodeType === 8 && x.parentNode === c)
              break;
            if (C === 4)
              for (C = u.return; C !== null; ) {
                var I = C.tag;
                if ((I === 3 || I === 4) && (I = C.stateNode.containerInfo, I === c || I.nodeType === 8 && I.parentNode === c))
                  return;
                C = C.return;
              }
            for (; x !== null; ) {
              if (C = Va(x), C === null)
                return;
              if (I = C.tag, I === 5 || I === 6) {
                u = h = C;
                continue e;
              }
              x = x.parentNode;
            }
          }
          u = u.return;
        }
    go(function() {
      var X = h, te = cn(o), Ce = [];
      e: {
        var Ee = oh.get(n);
        if (Ee !== void 0) {
          var Pe = Et, We = n;
          switch (n) {
            case "keypress":
              if (ne(o) === 0)
                break e;
            case "keydown":
            case "keyup":
              Pe = By;
              break;
            case "focusin":
              We = "focus", Pe = ci;
              break;
            case "focusout":
              We = "blur", Pe = ci;
              break;
            case "beforeblur":
            case "afterblur":
              Pe = ci;
              break;
            case "click":
              if (o.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Pe = oa;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Pe = hs;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Pe = Wy;
              break;
            case kd:
            case rh:
            case ah:
              Pe = ys;
              break;
            case ih:
              Pe = Pv;
              break;
            case "scroll":
              Pe = En;
              break;
            case "wheel":
              Pe = Wi;
              break;
            case "copy":
            case "cut":
            case "paste":
              Pe = Hy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Pe = Tc;
          }
          var Ke = (a & 4) !== 0, Kn = !Ke && n === "scroll", B = Ke ? Ee !== null ? Ee + "Capture" : null : Ee;
          Ke = [];
          for (var F = X, Q; F !== null; ) {
            Q = F;
            var Oe = Q.stateNode;
            if (Q.tag === 5 && Oe !== null && (Q = Oe, B !== null && (Oe = Ta(F, B), Oe != null && Ke.push(bs(F, Oe, Q)))), Kn)
              break;
            F = F.return;
          }
          0 < Ke.length && (Ee = new Pe(Ee, We, null, o, te), Ce.push({
            event: Ee,
            listeners: Ke
          }));
        }
      }
      if (!(a & 7)) {
        e: {
          if (Ee = n === "mouseover" || n === "pointerover", Pe = n === "mouseout" || n === "pointerout", Ee && o !== Ar && (We = o.relatedTarget || o.fromElement) && (Va(We) || We[qi]))
            break e;
          if ((Pe || Ee) && (Ee = te.window === te ? te : (Ee = te.ownerDocument) ? Ee.defaultView || Ee.parentWindow : window, Pe ? (We = o.relatedTarget || o.toElement, Pe = X, We = We ? Va(We) : null, We !== null && (Kn = xt(We), We !== Kn || We.tag !== 5 && We.tag !== 6) && (We = null)) : (Pe = null, We = X), Pe !== We)) {
            if (Ke = oa, Oe = "onMouseLeave", B = "onMouseEnter", F = "mouse", (n === "pointerout" || n === "pointerover") && (Ke = Tc, Oe = "onPointerLeave", B = "onPointerEnter", F = "pointer"), Kn = Pe == null ? Ee : Eu(Pe), Q = We == null ? Ee : Eu(We), Ee = new Ke(Oe, F + "leave", Pe, o, te), Ee.target = Kn, Ee.relatedTarget = Q, Oe = null, Va(te) === X && (Ke = new Ke(B, F + "enter", We, o, te), Ke.target = Q, Ke.relatedTarget = Kn, Oe = Ke), Kn = Oe, Pe && We)
              t: {
                for (Ke = Pe, B = We, F = 0, Q = Ke; Q; Q = vl(Q))
                  F++;
                for (Q = 0, Oe = B; Oe; Oe = vl(Oe))
                  Q++;
                for (; 0 < F - Q; )
                  Ke = vl(Ke), F--;
                for (; 0 < Q - F; )
                  B = vl(B), Q--;
                for (; F--; ) {
                  if (Ke === B || B !== null && Ke === B.alternate)
                    break t;
                  Ke = vl(Ke), B = vl(B);
                }
                Ke = null;
              }
            else
              Ke = null;
            Pe !== null && Dd(Ce, Ee, Pe, Ke, !1), We !== null && Kn !== null && Dd(Ce, Kn, We, Ke, !0);
          }
        }
        e: {
          if (Ee = X ? Eu(X) : window, Pe = Ee.nodeName && Ee.nodeName.toLowerCase(), Pe === "select" || Pe === "input" && Ee.type === "file")
            var Ze = Yv;
          else if (Wv(Ee))
            if (Td)
              Ze = Xv;
            else {
              Ze = qy;
              var Ge = Qy;
            }
          else
            (Pe = Ee.nodeName) && Pe.toLowerCase() === "input" && (Ee.type === "checkbox" || Ee.type === "radio") && (Ze = Ky);
          if (Ze && (Ze = Ze(n, X))) {
            Gv(Ce, Ze, o, te);
            break e;
          }
          Ge && Ge(n, Ee, X), n === "focusout" && (Ge = Ee._wrapperState) && Ge.controlled && Ee.type === "number" && Zn(Ee, "number", Ee.value);
        }
        switch (Ge = X ? Eu(X) : window, n) {
          case "focusin":
            (Wv(Ge) || Ge.contentEditable === "true") && (di = Ge, Rd = X, Es = null);
            break;
          case "focusout":
            Es = Rd = di = null;
            break;
          case "mousedown":
            xd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            xd = !1, nh(Ce, o, te);
            break;
          case "selectionchange":
            if (th)
              break;
          case "keydown":
          case "keyup":
            nh(Ce, o, te);
        }
        var rt;
        if (fi)
          e: {
            switch (n) {
              case "compositionstart":
                var St = "onCompositionStart";
                break e;
              case "compositionend":
                St = "onCompositionEnd";
                break e;
              case "compositionupdate":
                St = "onCompositionUpdate";
                break e;
            }
            St = void 0;
          }
        else
          hu ? $v(n, o) && (St = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (St = "onCompositionStart");
        St && (Vv && o.locale !== "ko" && (hu || St !== "onCompositionStart" ? St === "onCompositionEnd" && hu && (rt = q()) : (si = te, E = "value" in si ? si.value : si.textContent, hu = !0)), Ge = Rs(X, St), 0 < Ge.length && (St = new yd(St, n, null, o, te), Ce.push({
          event: St,
          listeners: Ge
        }), rt ? St.data = rt : (rt = Rc(o), rt !== null && (St.data = rt)))), (rt = bc ? Gy(n, o) : Yy(n, o)) && (X = Rs(X, "onBeforeInput"), 0 < X.length && (te = new yd("onBeforeInput", "beforeinput", null, o, te), Ce.push({
          event: te,
          listeners: X
        }), te.data = rt));
      }
      kc(Ce, a);
    });
  }
  function bs(n, a, o) {
    return {
      instance: n,
      listener: a,
      currentTarget: o
    };
  }
  function Rs(n, a) {
    for (var o = a + "Capture", u = []; n !== null; ) {
      var c = n, h = c.stateNode;
      c.tag === 5 && h !== null && (c = h, h = Ta(n, o), h != null && u.unshift(bs(n, h, c)), h = Ta(n, a), h != null && u.push(bs(n, h, c))), n = n.return;
    }
    return u;
  }
  function vl(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Dd(n, a, o, u, c) {
    for (var h = a._reactName, C = []; o !== null && o !== u; ) {
      var x = o, I = x.alternate, X = x.stateNode;
      if (I !== null && I === u)
        break;
      x.tag === 5 && X !== null && (x = X, c ? (I = Ta(o, h), I != null && C.unshift(bs(o, I, x))) : c || (I = Ta(o, h), I != null && C.push(bs(o, I, x)))), o = o.return;
    }
    C.length !== 0 && n.push({
      event: a,
      listeners: C
    });
  }
  var Md = /\r\n?/g, eg = /\u0000|\uFFFD/g;
  function Ad(n) {
    return (typeof n == "string" ? n : "" + n).replace(Md, `
`).replace(eg, "");
  }
  function Mc(n, a, o) {
    if (a = Ad(a), Ad(n) !== a && o)
      throw Error(v(425));
  }
  function Ac() {
  }
  var Ld = null, hl = null;
  function xs(n, a) {
    return n === "textarea" || n === "noscript" || typeof a.children == "string" || typeof a.children == "number" || typeof a.dangerouslySetInnerHTML == "object" && a.dangerouslySetInnerHTML !== null && a.dangerouslySetInnerHTML.__html != null;
  }
  var ml = typeof setTimeout == "function" ? setTimeout : void 0, ch = typeof clearTimeout == "function" ? clearTimeout : void 0, Nd = typeof Promise == "function" ? Promise : void 0, Id = typeof queueMicrotask == "function" ? queueMicrotask : typeof Nd < "u" ? function(n) {
    return Nd.resolve(null).then(n).catch(tg);
  } : ml;
  function tg(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Ao(n, a) {
    var o = a, u = 0;
    do {
      var c = o.nextSibling;
      if (n.removeChild(o), c && c.nodeType === 8)
        if (o = c.data, o === "/$") {
          if (u === 0) {
            n.removeChild(c), _o(a);
            return;
          }
          u--;
        } else
          o !== "$" && o !== "$?" && o !== "$!" || u++;
      o = c;
    } while (o);
    _o(a);
  }
  function pi(n) {
    for (; n != null; n = n.nextSibling) {
      var a = n.nodeType;
      if (a === 1 || a === 3)
        break;
      if (a === 8) {
        if (a = n.data, a === "$" || a === "$!" || a === "$?")
          break;
        if (a === "/$")
          return null;
      }
    }
    return n;
  }
  function _s(n) {
    n = n.previousSibling;
    for (var a = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (a === 0)
            return n;
          a--;
        } else
          o === "/$" && a++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Lo = Math.random().toString(36).slice(2), _i = "__reactFiber$" + Lo, yl = "__reactProps$" + Lo, qi = "__reactContainer$" + Lo, Ud = "__reactEvents$" + Lo, ng = "__reactListeners$" + Lo, Fd = "__reactHandles$" + Lo;
  function Va(n) {
    var a = n[_i];
    if (a)
      return a;
    for (var o = n.parentNode; o; ) {
      if (a = o[qi] || o[_i]) {
        if (o = a.alternate, a.child !== null || o !== null && o.child !== null)
          for (n = _s(n); n !== null; ) {
            if (o = n[_i])
              return o;
            n = _s(n);
          }
        return a;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function Os(n) {
    return n = n[_i] || n[qi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Eu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(v(33));
  }
  function it(n) {
    return n[yl] || null;
  }
  var No = [], xn = -1;
  function Dt(n) {
    return {
      current: n
    };
  }
  function nn(n) {
    0 > xn || (n.current = No[xn], No[xn] = null, xn--);
  }
  function un(n, a) {
    xn++, No[xn] = n.current, n.current = a;
  }
  var Oi = {}, gt = Dt(Oi), $n = Dt(!1), ua = Oi;
  function Ha(n, a) {
    var o = n.type.contextTypes;
    if (!o)
      return Oi;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === a)
      return u.__reactInternalMemoizedMaskedChildContext;
    var c = {}, h;
    for (h in o)
      c[h] = a[h];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = a, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function An(n) {
    return n = n.childContextTypes, n != null;
  }
  function $a() {
    nn($n), nn(gt);
  }
  function Io(n, a, o) {
    if (gt.current !== Oi)
      throw Error(v(168));
    un(gt, a), un($n, o);
  }
  function ks(n, a, o) {
    var u = n.stateNode;
    if (a = a.childContextTypes, typeof u.getChildContext != "function")
      return o;
    u = u.getChildContext();
    for (var c in u)
      if (!(c in a))
        throw Error(v(108, je(n) || "Unknown", c));
    return O({}, o, u);
  }
  function Lc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Oi, ua = gt.current, un(gt, n), un($n, $n.current), !0;
  }
  function fh(n, a, o) {
    var u = n.stateNode;
    if (!u)
      throw Error(v(169));
    o ? (n = ks(n, a, ua), u.__reactInternalMemoizedMergedChildContext = n, nn($n), nn(gt), un(gt, n)) : nn($n), un($n, o);
  }
  var Ra = null, vr = !1, Ds = !1;
  function jd(n) {
    Ra === null ? Ra = [n] : Ra.push(n);
  }
  function zd(n) {
    vr = !0, jd(n);
  }
  function sa() {
    if (!Ds && Ra !== null) {
      Ds = !0;
      var n = 0, a = Jt;
      try {
        var o = Ra;
        for (Jt = 1; n < o.length; n++) {
          var u = o[n];
          do
            u = u(!0);
          while (u !== null);
        }
        Ra = null, vr = !1;
      } catch (c) {
        throw Ra !== null && (Ra = Ra.slice(n + 1)), bn(li, sa), c;
      } finally {
        Jt = a, Ds = !1;
      }
    }
    return null;
  }
  var Uo = [], ca = 0, gl = null, Cu = 0, fa = [], Lr = 0, Ba = null, Cr = 1, Ki = "";
  function xa(n, a) {
    Uo[ca++] = Cu, Uo[ca++] = gl, gl = n, Cu = a;
  }
  function Pd(n, a, o) {
    fa[Lr++] = Cr, fa[Lr++] = Ki, fa[Lr++] = Ba, Ba = n;
    var u = Cr;
    n = Ki;
    var c = 32 - Hr(u) - 1;
    u &= ~(1 << c), o += 1;
    var h = 32 - Hr(a) + c;
    if (30 < h) {
      var C = c - c % 5;
      h = (u & (1 << C) - 1).toString(32), u >>= C, c -= C, Cr = 1 << 32 - Hr(a) + c | o << c | u, Ki = h + n;
    } else
      Cr = 1 << h | o << c | u, Ki = n;
  }
  function Nc(n) {
    n.return !== null && (xa(n, 1), Pd(n, 1, 0));
  }
  function Vd(n) {
    for (; n === gl; )
      gl = Uo[--ca], Uo[ca] = null, Cu = Uo[--ca], Uo[ca] = null;
    for (; n === Ba; )
      Ba = fa[--Lr], fa[Lr] = null, Ki = fa[--Lr], fa[Lr] = null, Cr = fa[--Lr], fa[Lr] = null;
  }
  var _a = null, da = null, _n = !1, Wa = null;
  function Hd(n, a) {
    var o = Xa(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = a, o.return = n, a = n.deletions, a === null ? (n.deletions = [o], n.flags |= 16) : a.push(o);
  }
  function dh(n, a) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return a = a.nodeType !== 1 || o.toLowerCase() !== a.nodeName.toLowerCase() ? null : a, a !== null ? (n.stateNode = a, _a = n, da = pi(a.firstChild), !0) : !1;
      case 6:
        return a = n.pendingProps === "" || a.nodeType !== 3 ? null : a, a !== null ? (n.stateNode = a, _a = n, da = null, !0) : !1;
      case 13:
        return a = a.nodeType !== 8 ? null : a, a !== null ? (o = Ba !== null ? {
          id: Cr,
          overflow: Ki
        } : null, n.memoizedState = {
          dehydrated: a,
          treeContext: o,
          retryLane: 1073741824
        }, o = Xa(18, null, null, 0), o.stateNode = a, o.return = n, n.child = o, _a = n, da = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ic(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Uc(n) {
    if (_n) {
      var a = da;
      if (a) {
        var o = a;
        if (!dh(n, a)) {
          if (Ic(n))
            throw Error(v(418));
          a = pi(o.nextSibling);
          var u = _a;
          a && dh(n, a) ? Hd(u, o) : (n.flags = n.flags & -4097 | 2, _n = !1, _a = n);
        }
      } else {
        if (Ic(n))
          throw Error(v(418));
        n.flags = n.flags & -4097 | 2, _n = !1, _a = n;
      }
    }
  }
  function ph(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    _a = n;
  }
  function Fc(n) {
    if (n !== _a)
      return !1;
    if (!_n)
      return ph(n), _n = !0, !1;
    var a;
    if ((a = n.tag !== 3) && !(a = n.tag !== 5) && (a = n.type, a = a !== "head" && a !== "body" && !xs(n.type, n.memoizedProps)), a && (a = da)) {
      if (Ic(n))
        throw vh(), Error(v(418));
      for (; a; )
        Hd(n, a), a = pi(a.nextSibling);
    }
    if (ph(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(v(317));
      e: {
        for (n = n.nextSibling, a = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (a === 0) {
                da = pi(n.nextSibling);
                break e;
              }
              a--;
            } else
              o !== "$" && o !== "$!" && o !== "$?" || a++;
          }
          n = n.nextSibling;
        }
        da = null;
      }
    } else
      da = _a ? pi(n.stateNode.nextSibling) : null;
    return !0;
  }
  function vh() {
    for (var n = da; n; )
      n = pi(n.nextSibling);
  }
  function Un() {
    da = _a = null, _n = !1;
  }
  function $d(n) {
    Wa === null ? Wa = [n] : Wa.push(n);
  }
  var jc = ie.ReactCurrentBatchConfig;
  function Oa(n, a) {
    if (n && n.defaultProps) {
      a = O({}, a), n = n.defaultProps;
      for (var o in n)
        a[o] === void 0 && (a[o] = n[o]);
      return a;
    }
    return a;
  }
  var ki = Dt(null), zc = null, Fo = null, Bd = null;
  function Wd() {
    Bd = Fo = zc = null;
  }
  function jo(n) {
    var a = ki.current;
    nn(ki), n._currentValue = a;
  }
  function hr(n, a, o) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & a) !== a ? (n.childLanes |= a, u !== null && (u.childLanes |= a)) : u !== null && (u.childLanes & a) !== a && (u.childLanes |= a), n === o)
        break;
      n = n.return;
    }
  }
  function Ne(n, a) {
    zc = n, Bd = Fo = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & a && (tr = !0), n.firstContext = null);
  }
  function qn(n) {
    var a = n._currentValue;
    if (Bd !== n)
      if (n = {
        context: n,
        memoizedValue: a,
        next: null
      }, Fo === null) {
        if (zc === null)
          throw Error(v(308));
        Fo = n, zc.dependencies = {
          lanes: 0,
          firstContext: n
        };
      } else
        Fo = Fo.next = n;
    return a;
  }
  var Tr = null;
  function Gd(n) {
    Tr === null ? Tr = [n] : Tr.push(n);
  }
  function hh(n, a, o, u) {
    var c = a.interleaved;
    return c === null ? (o.next = o, Gd(a)) : (o.next = c.next, c.next = o), a.interleaved = o, Xi(n, u);
  }
  function Xi(n, a) {
    n.lanes |= a;
    var o = n.alternate;
    for (o !== null && (o.lanes |= a), o = n, n = n.return; n !== null; )
      n.childLanes |= a, o = n.alternate, o !== null && (o.childLanes |= a), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var zo = !1;
  function Yd(n) {
    n.updateQueue = {
      baseState: n.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        interleaved: null,
        lanes: 0
      },
      effects: null
    };
  }
  function ir(n, a) {
    n = n.updateQueue, a.updateQueue === n && (a.updateQueue = {
      baseState: n.baseState,
      firstBaseUpdate: n.firstBaseUpdate,
      lastBaseUpdate: n.lastBaseUpdate,
      shared: n.shared,
      effects: n.effects
    });
  }
  function Zi(n, a) {
    return {
      eventTime: n,
      lane: a,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function Po(n, a, o) {
    var u = n.updateQueue;
    if (u === null)
      return null;
    if (u = u.shared, Ft & 2) {
      var c = u.pending;
      return c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a, Xi(n, o);
    }
    return c = u.interleaved, c === null ? (a.next = a, Gd(u)) : (a.next = c.next, c.next = a), u.interleaved = a, Xi(n, o);
  }
  function Pc(n, a, o) {
    if (a = a.updateQueue, a !== null && (a = a.shared, (o & 4194240) !== 0)) {
      var u = a.lanes;
      u &= n.pendingLanes, o |= u, a.lanes = o, Ri(n, o);
    }
  }
  function Qd(n, a) {
    var o = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, o === u)) {
      var c = null, h = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var C = {
            eventTime: o.eventTime,
            lane: o.lane,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null
          };
          h === null ? c = h = C : h = h.next = C, o = o.next;
        } while (o !== null);
        h === null ? c = h = a : h = h.next = a;
      } else
        c = h = a;
      o = {
        baseState: u.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: h,
        shared: u.shared,
        effects: u.effects
      }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = a : n.next = a, o.lastBaseUpdate = a;
  }
  function Vo(n, a, o, u) {
    var c = n.updateQueue;
    zo = !1;
    var h = c.firstBaseUpdate, C = c.lastBaseUpdate, x = c.shared.pending;
    if (x !== null) {
      c.shared.pending = null;
      var I = x, X = I.next;
      I.next = null, C === null ? h = X : C.next = X, C = I;
      var te = n.alternate;
      te !== null && (te = te.updateQueue, x = te.lastBaseUpdate, x !== C && (x === null ? te.firstBaseUpdate = X : x.next = X, te.lastBaseUpdate = I));
    }
    if (h !== null) {
      var Ce = c.baseState;
      C = 0, te = X = I = null, x = h;
      do {
        var Ee = x.lane, Pe = x.eventTime;
        if ((u & Ee) === Ee) {
          te !== null && (te = te.next = {
            eventTime: Pe,
            lane: 0,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          });
          e: {
            var We = n, Ke = x;
            switch (Ee = a, Pe = o, Ke.tag) {
              case 1:
                if (We = Ke.payload, typeof We == "function") {
                  Ce = We.call(Pe, Ce, Ee);
                  break e;
                }
                Ce = We;
                break e;
              case 3:
                We.flags = We.flags & -65537 | 128;
              case 0:
                if (We = Ke.payload, Ee = typeof We == "function" ? We.call(Pe, Ce, Ee) : We, Ee == null)
                  break e;
                Ce = O({}, Ce, Ee);
                break e;
              case 2:
                zo = !0;
            }
          }
          x.callback !== null && x.lane !== 0 && (n.flags |= 64, Ee = c.effects, Ee === null ? c.effects = [x] : Ee.push(x));
        } else
          Pe = {
            eventTime: Pe,
            lane: Ee,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          }, te === null ? (X = te = Pe, I = Ce) : te = te.next = Pe, C |= Ee;
        if (x = x.next, x === null) {
          if (x = c.shared.pending, x === null)
            break;
          Ee = x, x = Ee.next, Ee.next = null, c.lastBaseUpdate = Ee, c.shared.pending = null;
        }
      } while (1);
      if (te === null && (I = Ce), c.baseState = I, c.firstBaseUpdate = X, c.lastBaseUpdate = te, a = c.shared.interleaved, a !== null) {
        c = a;
        do
          C |= c.lane, c = c.next;
        while (c !== a);
      } else
        h === null && (c.shared.lanes = 0);
      no |= C, n.lanes = C, n.memoizedState = Ce;
    }
  }
  function Sl(n, a, o) {
    if (n = a.effects, a.effects = null, n !== null)
      for (a = 0; a < n.length; a++) {
        var u = n[a], c = u.callback;
        if (c !== null) {
          if (u.callback = null, u = o, typeof c != "function")
            throw Error(v(191, c));
          c.call(u);
        }
      }
  }
  var mh = new f.Component().refs;
  function qd(n, a, o, u) {
    a = n.memoizedState, o = o(u, a), o = o == null ? a : O({}, a, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var Vc = {
    isMounted: function(a) {
      return (a = a._reactInternals) ? xt(a) === a : !1;
    },
    enqueueSetState: function(a, o, u) {
      a = a._reactInternals;
      var c = Fr(), h = nr(a), C = Zi(c, h);
      C.payload = o, u != null && (C.callback = u), o = Po(a, C, h), o !== null && (jr(o, a, h, c), Pc(o, a, h));
    },
    enqueueReplaceState: function(a, o, u) {
      a = a._reactInternals;
      var c = Fr(), h = nr(a), C = Zi(c, h);
      C.tag = 1, C.payload = o, u != null && (C.callback = u), o = Po(a, C, h), o !== null && (jr(o, a, h, c), Pc(o, a, h));
    },
    enqueueForceUpdate: function(a, o) {
      a = a._reactInternals;
      var u = Fr(), c = nr(a), h = Zi(u, c);
      h.tag = 2, o != null && (h.callback = o), o = Po(a, h, c), o !== null && (jr(o, a, c, u), Pc(o, a, c));
    }
  };
  function yh(n, a, o, u, c, h, C) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, h, C) : a.prototype && a.prototype.isPureReactComponent ? !Ss(o, u) || !Ss(c, h) : !0;
  }
  function gh(n, a, o) {
    var u = !1, c = Oi, h = a.contextType;
    return typeof h == "object" && h !== null ? h = qn(h) : (c = An(a) ? ua : gt.current, u = a.contextTypes, h = (u = u != null) ? Ha(n, c) : Oi), a = new a(o, h), n.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = Vc, n.stateNode = a, a._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = h), a;
  }
  function Sh(n, a, o, u) {
    n = a.state, typeof a.componentWillReceiveProps == "function" && a.componentWillReceiveProps(o, u), typeof a.UNSAFE_componentWillReceiveProps == "function" && a.UNSAFE_componentWillReceiveProps(o, u), a.state !== n && Vc.enqueueReplaceState(a, a.state, null);
  }
  function Hc(n, a, o, u) {
    var c = n.stateNode;
    c.props = o, c.state = n.memoizedState, c.refs = mh, Yd(n);
    var h = a.contextType;
    typeof h == "object" && h !== null ? c.context = qn(h) : (h = An(a) ? ua : gt.current, c.context = Ha(n, h)), c.state = n.memoizedState, h = a.getDerivedStateFromProps, typeof h == "function" && (qd(n, a, h, o), c.state = n.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (a = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), a !== c.state && Vc.enqueueReplaceState(c, c.state, null), Vo(n, o, c, u), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Tu(n, a, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1)
            throw Error(v(309));
          var u = o.stateNode;
        }
        if (!u)
          throw Error(v(147, n));
        var c = u, h = "" + n;
        return a !== null && a.ref !== null && typeof a.ref == "function" && a.ref._stringRef === h ? a.ref : (a = function(x) {
          var I = c.refs;
          I === mh && (I = c.refs = {}), x === null ? delete I[h] : I[h] = x;
        }, a._stringRef = h, a);
      }
      if (typeof n != "string")
        throw Error(v(284));
      if (!o._owner)
        throw Error(v(290, n));
    }
    return n;
  }
  function $c(n, a) {
    throw n = Object.prototype.toString.call(a), Error(v(31, n === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : n));
  }
  function Eh(n) {
    var a = n._init;
    return a(n._payload);
  }
  function Ch(n) {
    function a(B, F) {
      if (n) {
        var Q = B.deletions;
        Q === null ? (B.deletions = [F], B.flags |= 16) : Q.push(F);
      }
    }
    function o(B, F) {
      if (!n)
        return null;
      for (; F !== null; )
        a(B, F), F = F.sibling;
      return null;
    }
    function u(B, F) {
      for (B = /* @__PURE__ */ new Map(); F !== null; )
        F.key !== null ? B.set(F.key, F) : B.set(F.index, F), F = F.sibling;
      return B;
    }
    function c(B, F) {
      return B = qo(B, F), B.index = 0, B.sibling = null, B;
    }
    function h(B, F, Q) {
      return B.index = Q, n ? (Q = B.alternate, Q !== null ? (Q = Q.index, Q < F ? (B.flags |= 2, F) : Q) : (B.flags |= 2, F)) : (B.flags |= 1048576, F);
    }
    function C(B) {
      return n && B.alternate === null && (B.flags |= 2), B;
    }
    function x(B, F, Q, Oe) {
      return F === null || F.tag !== 6 ? (F = qs(Q, B.mode, Oe), F.return = B, F) : (F = c(F, Q), F.return = B, F);
    }
    function I(B, F, Q, Oe) {
      var Ze = Q.type;
      return Ze === _e ? te(B, F, Q.props.children, Oe, Q.key) : F !== null && (F.elementType === Ze || typeof Ze == "object" && Ze !== null && Ze.$$typeof === xe && Eh(Ze) === F.type) ? (Oe = c(F, Q.props), Oe.ref = Tu(B, F, Q), Oe.return = B, Oe) : (Oe = Tf(Q.type, Q.key, Q.props, null, B.mode, Oe), Oe.ref = Tu(B, F, Q), Oe.return = B, Oe);
    }
    function X(B, F, Q, Oe) {
      return F === null || F.tag !== 4 || F.stateNode.containerInfo !== Q.containerInfo || F.stateNode.implementation !== Q.implementation ? (F = jl(Q, B.mode, Oe), F.return = B, F) : (F = c(F, Q.children || []), F.return = B, F);
    }
    function te(B, F, Q, Oe, Ze) {
      return F === null || F.tag !== 7 ? (F = Fl(Q, B.mode, Oe, Ze), F.return = B, F) : (F = c(F, Q), F.return = B, F);
    }
    function Ce(B, F, Q) {
      if (typeof F == "string" && F !== "" || typeof F == "number")
        return F = qs("" + F, B.mode, Q), F.return = B, F;
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case H:
            return Q = Tf(F.type, F.key, F.props, null, B.mode, Q), Q.ref = Tu(B, null, F), Q.return = B, Q;
          case de:
            return F = jl(F, B.mode, Q), F.return = B, F;
          case xe:
            var Oe = F._init;
            return Ce(B, Oe(F._payload), Q);
        }
        if (Vt(F) || Me(F))
          return F = Fl(F, B.mode, Q, null), F.return = B, F;
        $c(B, F);
      }
      return null;
    }
    function Ee(B, F, Q, Oe) {
      var Ze = F !== null ? F.key : null;
      if (typeof Q == "string" && Q !== "" || typeof Q == "number")
        return Ze !== null ? null : x(B, F, "" + Q, Oe);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case H:
            return Q.key === Ze ? I(B, F, Q, Oe) : null;
          case de:
            return Q.key === Ze ? X(B, F, Q, Oe) : null;
          case xe:
            return Ze = Q._init, Ee(B, F, Ze(Q._payload), Oe);
        }
        if (Vt(Q) || Me(Q))
          return Ze !== null ? null : te(B, F, Q, Oe, null);
        $c(B, Q);
      }
      return null;
    }
    function Pe(B, F, Q, Oe, Ze) {
      if (typeof Oe == "string" && Oe !== "" || typeof Oe == "number")
        return B = B.get(Q) || null, x(F, B, "" + Oe, Ze);
      if (typeof Oe == "object" && Oe !== null) {
        switch (Oe.$$typeof) {
          case H:
            return B = B.get(Oe.key === null ? Q : Oe.key) || null, I(F, B, Oe, Ze);
          case de:
            return B = B.get(Oe.key === null ? Q : Oe.key) || null, X(F, B, Oe, Ze);
          case xe:
            var Ge = Oe._init;
            return Pe(B, F, Q, Ge(Oe._payload), Ze);
        }
        if (Vt(Oe) || Me(Oe))
          return B = B.get(Q) || null, te(F, B, Oe, Ze, null);
        $c(F, Oe);
      }
      return null;
    }
    function We(B, F, Q, Oe) {
      for (var Ze = null, Ge = null, rt = F, St = F = 0, gr = null; rt !== null && St < Q.length; St++) {
        rt.index > St ? (gr = rt, rt = null) : gr = rt.sibling;
        var Xt = Ee(B, rt, Q[St], Oe);
        if (Xt === null) {
          rt === null && (rt = gr);
          break;
        }
        n && rt && Xt.alternate === null && a(B, rt), F = h(Xt, F, St), Ge === null ? Ze = Xt : Ge.sibling = Xt, Ge = Xt, rt = gr;
      }
      if (St === Q.length)
        return o(B, rt), _n && xa(B, St), Ze;
      if (rt === null) {
        for (; St < Q.length; St++)
          rt = Ce(B, Q[St], Oe), rt !== null && (F = h(rt, F, St), Ge === null ? Ze = rt : Ge.sibling = rt, Ge = rt);
        return _n && xa(B, St), Ze;
      }
      for (rt = u(B, rt); St < Q.length; St++)
        gr = Pe(rt, B, St, Q[St], Oe), gr !== null && (n && gr.alternate !== null && rt.delete(gr.key === null ? St : gr.key), F = h(gr, F, St), Ge === null ? Ze = gr : Ge.sibling = gr, Ge = gr);
      return n && rt.forEach(function(Ko) {
        return a(B, Ko);
      }), _n && xa(B, St), Ze;
    }
    function Ke(B, F, Q, Oe) {
      var Ze = Me(Q);
      if (typeof Ze != "function")
        throw Error(v(150));
      if (Q = Ze.call(Q), Q == null)
        throw Error(v(151));
      for (var Ge = Ze = null, rt = F, St = F = 0, gr = null, Xt = Q.next(); rt !== null && !Xt.done; St++, Xt = Q.next()) {
        rt.index > St ? (gr = rt, rt = null) : gr = rt.sibling;
        var Ko = Ee(B, rt, Xt.value, Oe);
        if (Ko === null) {
          rt === null && (rt = gr);
          break;
        }
        n && rt && Ko.alternate === null && a(B, rt), F = h(Ko, F, St), Ge === null ? Ze = Ko : Ge.sibling = Ko, Ge = Ko, rt = gr;
      }
      if (Xt.done)
        return o(B, rt), _n && xa(B, St), Ze;
      if (rt === null) {
        for (; !Xt.done; St++, Xt = Q.next())
          Xt = Ce(B, Xt.value, Oe), Xt !== null && (F = h(Xt, F, St), Ge === null ? Ze = Xt : Ge.sibling = Xt, Ge = Xt);
        return _n && xa(B, St), Ze;
      }
      for (rt = u(B, rt); !Xt.done; St++, Xt = Q.next())
        Xt = Pe(rt, B, St, Xt.value, Oe), Xt !== null && (n && Xt.alternate !== null && rt.delete(Xt.key === null ? St : Xt.key), F = h(Xt, F, St), Ge === null ? Ze = Xt : Ge.sibling = Xt, Ge = Xt);
      return n && rt.forEach(function(Tg) {
        return a(B, Tg);
      }), _n && xa(B, St), Ze;
    }
    function Kn(B, F, Q, Oe) {
      if (typeof Q == "object" && Q !== null && Q.type === _e && Q.key === null && (Q = Q.props.children), typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case H:
            e: {
              for (var Ze = Q.key, Ge = F; Ge !== null; ) {
                if (Ge.key === Ze) {
                  if (Ze = Q.type, Ze === _e) {
                    if (Ge.tag === 7) {
                      o(B, Ge.sibling), F = c(Ge, Q.props.children), F.return = B, B = F;
                      break e;
                    }
                  } else if (Ge.elementType === Ze || typeof Ze == "object" && Ze !== null && Ze.$$typeof === xe && Eh(Ze) === Ge.type) {
                    o(B, Ge.sibling), F = c(Ge, Q.props), F.ref = Tu(B, Ge, Q), F.return = B, B = F;
                    break e;
                  }
                  o(B, Ge);
                  break;
                } else
                  a(B, Ge);
                Ge = Ge.sibling;
              }
              Q.type === _e ? (F = Fl(Q.props.children, B.mode, Oe, Q.key), F.return = B, B = F) : (Oe = Tf(Q.type, Q.key, Q.props, null, B.mode, Oe), Oe.ref = Tu(B, F, Q), Oe.return = B, B = Oe);
            }
            return C(B);
          case de:
            e: {
              for (Ge = Q.key; F !== null; ) {
                if (F.key === Ge)
                  if (F.tag === 4 && F.stateNode.containerInfo === Q.containerInfo && F.stateNode.implementation === Q.implementation) {
                    o(B, F.sibling), F = c(F, Q.children || []), F.return = B, B = F;
                    break e;
                  } else {
                    o(B, F);
                    break;
                  }
                else
                  a(B, F);
                F = F.sibling;
              }
              F = jl(Q, B.mode, Oe), F.return = B, B = F;
            }
            return C(B);
          case xe:
            return Ge = Q._init, Kn(B, F, Ge(Q._payload), Oe);
        }
        if (Vt(Q))
          return We(B, F, Q, Oe);
        if (Me(Q))
          return Ke(B, F, Q, Oe);
        $c(B, Q);
      }
      return typeof Q == "string" && Q !== "" || typeof Q == "number" ? (Q = "" + Q, F !== null && F.tag === 6 ? (o(B, F.sibling), F = c(F, Q), F.return = B, B = F) : (o(B, F), F = qs(Q, B.mode, Oe), F.return = B, B = F), C(B)) : o(B, F);
    }
    return Kn;
  }
  var wu = Ch(!0), Th = Ch(!1), Ms = {}, vi = Dt(Ms), As = Dt(Ms), bu = Dt(Ms);
  function El(n) {
    if (n === Ms)
      throw Error(v(174));
    return n;
  }
  function Kd(n, a) {
    switch (un(bu, a), un(As, n), un(vi, Ms), n = a.nodeType, n) {
      case 9:
      case 11:
        a = (a = a.documentElement) ? a.namespaceURI : Sn(null, "");
        break;
      default:
        n = n === 8 ? a.parentNode : a, a = n.namespaceURI || null, n = n.tagName, a = Sn(a, n);
    }
    nn(vi), un(vi, a);
  }
  function Ho() {
    nn(vi), nn(As), nn(bu);
  }
  function st(n) {
    El(bu.current);
    var a = El(vi.current), o = Sn(a, n.type);
    a !== o && (un(As, n), un(vi, o));
  }
  function Ut(n) {
    As.current === n && (nn(vi), nn(As));
  }
  var ft = Dt(0);
  function Fn(n) {
    for (var a = n; a !== null; ) {
      if (a.tag === 13) {
        var o = a.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!"))
          return a;
      } else if (a.tag === 19 && a.memoizedProps.revealOrder !== void 0) {
        if (a.flags & 128)
          return a;
      } else if (a.child !== null) {
        a.child.return = a, a = a.child;
        continue;
      }
      if (a === n)
        break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === n)
          return null;
        a = a.return;
      }
      a.sibling.return = a.return, a = a.sibling;
    }
    return null;
  }
  var Ga = [];
  function Bc() {
    for (var n = 0; n < Ga.length; n++)
      Ga[n]._workInProgressVersionPrimary = null;
    Ga.length = 0;
  }
  var Wc = ie.ReactCurrentDispatcher, Xd = ie.ReactCurrentBatchConfig, Cl = 0, On = null, se = null, Bt = null, dt = !1, Di = !1, ka = 0, Tl = 0;
  function kn() {
    throw Error(v(321));
  }
  function wl(n, a) {
    if (a === null)
      return !1;
    for (var o = 0; o < a.length && o < n.length; o++)
      if (!Pa(n[o], a[o]))
        return !1;
    return !0;
  }
  function $o(n, a, o, u, c, h) {
    if (Cl = h, On = a, a.memoizedState = null, a.updateQueue = null, a.lanes = 0, Wc.current = n === null || n.memoizedState === null ? ag : ig, n = o(u, c), Di) {
      h = 0;
      do {
        if (Di = !1, ka = 0, 25 <= h)
          throw Error(v(301));
        h += 1, Bt = se = null, a.updateQueue = null, Wc.current = Jd, n = o(u, c);
      } while (Di);
    }
    if (Wc.current = uf, a = se !== null && se.next !== null, Cl = 0, Bt = se = On = null, dt = !1, a)
      throw Error(v(300));
    return n;
  }
  function bl() {
    var n = ka !== 0;
    return ka = 0, n;
  }
  function Ya() {
    var n = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Bt === null ? On.memoizedState = Bt = n : Bt = Bt.next = n, Bt;
  }
  function pa() {
    if (se === null) {
      var n = On.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = se.next;
    var a = Bt === null ? On.memoizedState : Bt.next;
    if (a !== null)
      Bt = a, se = n;
    else {
      if (n === null)
        throw Error(v(310));
      se = n, n = {
        memoizedState: se.memoizedState,
        baseState: se.baseState,
        baseQueue: se.baseQueue,
        queue: se.queue,
        next: null
      }, Bt === null ? On.memoizedState = Bt = n : Bt = Bt.next = n;
    }
    return Bt;
  }
  function Rl(n, a) {
    return typeof a == "function" ? a(n) : a;
  }
  function Ls(n) {
    var a = pa(), o = a.queue;
    if (o === null)
      throw Error(v(311));
    o.lastRenderedReducer = n;
    var u = se, c = u.baseQueue, h = o.pending;
    if (h !== null) {
      if (c !== null) {
        var C = c.next;
        c.next = h.next, h.next = C;
      }
      u.baseQueue = c = h, o.pending = null;
    }
    if (c !== null) {
      h = c.next, u = u.baseState;
      var x = C = null, I = null, X = h;
      do {
        var te = X.lane;
        if ((Cl & te) === te)
          I !== null && (I = I.next = {
            lane: 0,
            action: X.action,
            hasEagerState: X.hasEagerState,
            eagerState: X.eagerState,
            next: null
          }), u = X.hasEagerState ? X.eagerState : n(u, X.action);
        else {
          var Ce = {
            lane: te,
            action: X.action,
            hasEagerState: X.hasEagerState,
            eagerState: X.eagerState,
            next: null
          };
          I === null ? (x = I = Ce, C = u) : I = I.next = Ce, On.lanes |= te, no |= te;
        }
        X = X.next;
      } while (X !== null && X !== h);
      I === null ? C = u : I.next = x, Pa(u, a.memoizedState) || (tr = !0), a.memoizedState = u, a.baseState = C, a.baseQueue = I, o.lastRenderedState = u;
    }
    if (n = o.interleaved, n !== null) {
      c = n;
      do
        h = c.lane, On.lanes |= h, no |= h, c = c.next;
      while (c !== n);
    } else
      c === null && (o.lanes = 0);
    return [a.memoizedState, o.dispatch];
  }
  function Ns(n) {
    var a = pa(), o = a.queue;
    if (o === null)
      throw Error(v(311));
    o.lastRenderedReducer = n;
    var u = o.dispatch, c = o.pending, h = a.memoizedState;
    if (c !== null) {
      o.pending = null;
      var C = c = c.next;
      do
        h = n(h, C.action), C = C.next;
      while (C !== c);
      Pa(h, a.memoizedState) || (tr = !0), a.memoizedState = h, a.baseQueue === null && (a.baseState = h), o.lastRenderedState = h;
    }
    return [h, u];
  }
  function Gc() {
  }
  function Yc(n, a) {
    var o = On, u = pa(), c = a(), h = !Pa(u.memoizedState, c);
    if (h && (u.memoizedState = c, tr = !0), u = u.queue, Is(Kc.bind(null, o, u, n), [n]), u.getSnapshot !== a || h || Bt !== null && Bt.memoizedState.tag & 1) {
      if (o.flags |= 2048, xl(9, qc.bind(null, o, u, c, a), void 0, null), jn === null)
        throw Error(v(349));
      Cl & 30 || Qc(o, a, c);
    }
    return c;
  }
  function Qc(n, a, o) {
    n.flags |= 16384, n = {
      getSnapshot: a,
      value: o
    }, a = On.updateQueue, a === null ? (a = {
      lastEffect: null,
      stores: null
    }, On.updateQueue = a, a.stores = [n]) : (o = a.stores, o === null ? a.stores = [n] : o.push(n));
  }
  function qc(n, a, o, u) {
    a.value = o, a.getSnapshot = u, Xc(a) && Zc(n);
  }
  function Kc(n, a, o) {
    return o(function() {
      Xc(a) && Zc(n);
    });
  }
  function Xc(n) {
    var a = n.getSnapshot;
    n = n.value;
    try {
      var o = a();
      return !Pa(n, o);
    } catch {
      return !0;
    }
  }
  function Zc(n) {
    var a = Xi(n, 1);
    a !== null && jr(a, n, 1, -1);
  }
  function Jc(n) {
    var a = Ya();
    return typeof n == "function" && (n = n()), a.memoizedState = a.baseState = n, n = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Rl,
      lastRenderedState: n
    }, a.queue = n, n = n.dispatch = lf.bind(null, On, n), [a.memoizedState, n];
  }
  function xl(n, a, o, u) {
    return n = {
      tag: n,
      create: a,
      destroy: o,
      deps: u,
      next: null
    }, a = On.updateQueue, a === null ? (a = {
      lastEffect: null,
      stores: null
    }, On.updateQueue = a, a.lastEffect = n.next = n) : (o = a.lastEffect, o === null ? a.lastEffect = n.next = n : (u = o.next, o.next = n, n.next = u, a.lastEffect = n)), n;
  }
  function ef() {
    return pa().memoizedState;
  }
  function _l(n, a, o, u) {
    var c = Ya();
    On.flags |= n, c.memoizedState = xl(1 | a, o, void 0, u === void 0 ? null : u);
  }
  function Ji(n, a, o, u) {
    var c = pa();
    u = u === void 0 ? null : u;
    var h = void 0;
    if (se !== null) {
      var C = se.memoizedState;
      if (h = C.destroy, u !== null && wl(u, C.deps)) {
        c.memoizedState = xl(a, o, h, u);
        return;
      }
    }
    On.flags |= n, c.memoizedState = xl(1 | a, o, h, u);
  }
  function tf(n, a) {
    return _l(8390656, 8, n, a);
  }
  function Is(n, a) {
    return Ji(2048, 8, n, a);
  }
  function nf(n, a) {
    return Ji(4, 2, n, a);
  }
  function rf(n, a) {
    return Ji(4, 4, n, a);
  }
  function Zd(n, a) {
    if (typeof a == "function")
      return n = n(), a(n), function() {
        a(null);
      };
    if (a != null)
      return n = n(), a.current = n, function() {
        a.current = null;
      };
  }
  function Ru(n, a, o) {
    return o = o != null ? o.concat([n]) : null, Ji(4, 4, Zd.bind(null, a, n), o);
  }
  function af() {
  }
  function xu(n, a) {
    var o = pa();
    a = a === void 0 ? null : a;
    var u = o.memoizedState;
    return u !== null && a !== null && wl(a, u[1]) ? u[0] : (o.memoizedState = [n, a], n);
  }
  function Bo(n, a) {
    var o = pa();
    a = a === void 0 ? null : a;
    var u = o.memoizedState;
    return u !== null && a !== null && wl(a, u[1]) ? u[0] : (n = n(), o.memoizedState = [n, a], n);
  }
  function va(n, a, o) {
    return Cl & 21 ? (Pa(o, a) || (o = iu(), On.lanes |= o, no |= o, n.baseState = !0), a) : (n.baseState && (n.baseState = !1, tr = !0), n.memoizedState = o);
  }
  function rg(n, a) {
    var o = Jt;
    Jt = o !== 0 && 4 > o ? o : 4, n(!0);
    var u = Xd.transition;
    Xd.transition = {};
    try {
      n(!1), a();
    } finally {
      Jt = o, Xd.transition = u;
    }
  }
  function Tn() {
    return pa().memoizedState;
  }
  function of(n, a, o) {
    var u = nr(n);
    if (o = {
      lane: u,
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, _u(n))
      Us(a, o);
    else if (o = hh(n, a, o, u), o !== null) {
      var c = Fr();
      jr(o, n, u, c), wh(o, a, u);
    }
  }
  function lf(n, a, o) {
    var u = nr(n), c = {
      lane: u,
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (_u(n))
      Us(a, c);
    else {
      var h = n.alternate;
      if (n.lanes === 0 && (h === null || h.lanes === 0) && (h = a.lastRenderedReducer, h !== null))
        try {
          var C = a.lastRenderedState, x = h(C, o);
          if (c.hasEagerState = !0, c.eagerState = x, Pa(x, C)) {
            var I = a.interleaved;
            I === null ? (c.next = c, Gd(a)) : (c.next = I.next, I.next = c), a.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      o = hh(n, a, c, u), o !== null && (c = Fr(), jr(o, n, u, c), wh(o, a, u));
    }
  }
  function _u(n) {
    var a = n.alternate;
    return n === On || a !== null && a === On;
  }
  function Us(n, a) {
    Di = dt = !0;
    var o = n.pending;
    o === null ? a.next = a : (a.next = o.next, o.next = a), n.pending = a;
  }
  function wh(n, a, o) {
    if (o & 4194240) {
      var u = a.lanes;
      u &= n.pendingLanes, o |= u, a.lanes = o, Ri(n, o);
    }
  }
  var uf = {
    readContext: qn,
    useCallback: kn,
    useContext: kn,
    useEffect: kn,
    useImperativeHandle: kn,
    useInsertionEffect: kn,
    useLayoutEffect: kn,
    useMemo: kn,
    useReducer: kn,
    useRef: kn,
    useState: kn,
    useDebugValue: kn,
    useDeferredValue: kn,
    useTransition: kn,
    useMutableSource: kn,
    useSyncExternalStore: kn,
    useId: kn,
    unstable_isNewReconciler: !1
  }, ag = {
    readContext: qn,
    useCallback: function(a, o) {
      return Ya().memoizedState = [a, o === void 0 ? null : o], a;
    },
    useContext: qn,
    useEffect: tf,
    useImperativeHandle: function(a, o, u) {
      return u = u != null ? u.concat([a]) : null, _l(4194308, 4, Zd.bind(null, o, a), u);
    },
    useLayoutEffect: function(a, o) {
      return _l(4194308, 4, a, o);
    },
    useInsertionEffect: function(a, o) {
      return _l(4, 2, a, o);
    },
    useMemo: function(a, o) {
      var u = Ya();
      return o = o === void 0 ? null : o, a = a(), u.memoizedState = [a, o], a;
    },
    useReducer: function(a, o, u) {
      var c = Ya();
      return o = u !== void 0 ? u(o) : o, c.memoizedState = c.baseState = o, a = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: a,
        lastRenderedState: o
      }, c.queue = a, a = a.dispatch = of.bind(null, On, a), [c.memoizedState, a];
    },
    useRef: function(a) {
      var o = Ya();
      return a = {
        current: a
      }, o.memoizedState = a;
    },
    useState: Jc,
    useDebugValue: af,
    useDeferredValue: function(a) {
      return Ya().memoizedState = a;
    },
    useTransition: function() {
      var a = Jc(!1), o = a[0];
      return a = rg.bind(null, a[1]), Ya().memoizedState = a, [o, a];
    },
    useMutableSource: function() {
    },
    useSyncExternalStore: function(a, o, u) {
      var c = On, h = Ya();
      if (_n) {
        if (u === void 0)
          throw Error(v(407));
        u = u();
      } else {
        if (u = o(), jn === null)
          throw Error(v(349));
        Cl & 30 || Qc(c, o, u);
      }
      h.memoizedState = u;
      var C = {
        value: u,
        getSnapshot: o
      };
      return h.queue = C, tf(Kc.bind(null, c, C, a), [a]), c.flags |= 2048, xl(9, qc.bind(null, c, C, u, o), void 0, null), u;
    },
    useId: function() {
      var a = Ya(), o = jn.identifierPrefix;
      if (_n) {
        var u = Ki, c = Cr;
        u = (c & ~(1 << 32 - Hr(c) - 1)).toString(32) + u, o = ":" + o + "R" + u, u = ka++, 0 < u && (o += "H" + u.toString(32)), o += ":";
      } else
        u = Tl++, o = ":" + o + "r" + u.toString(32) + ":";
      return a.memoizedState = o;
    },
    unstable_isNewReconciler: !1
  }, ig = {
    readContext: qn,
    useCallback: xu,
    useContext: qn,
    useEffect: Is,
    useImperativeHandle: Ru,
    useInsertionEffect: nf,
    useLayoutEffect: rf,
    useMemo: Bo,
    useReducer: Ls,
    useRef: ef,
    useState: function() {
      return Ls(Rl);
    },
    useDebugValue: af,
    useDeferredValue: function(a) {
      var o = pa();
      return va(o, se.memoizedState, a);
    },
    useTransition: function() {
      var a = Ls(Rl)[0], o = pa().memoizedState;
      return [a, o];
    },
    useMutableSource: Gc,
    useSyncExternalStore: Yc,
    useId: Tn,
    unstable_isNewReconciler: !1
  }, Jd = {
    readContext: qn,
    useCallback: xu,
    useContext: qn,
    useEffect: Is,
    useImperativeHandle: Ru,
    useInsertionEffect: nf,
    useLayoutEffect: rf,
    useMemo: Bo,
    useReducer: Ns,
    useRef: ef,
    useState: function() {
      return Ns(Rl);
    },
    useDebugValue: af,
    useDeferredValue: function(a) {
      var o = pa();
      return se === null ? o.memoizedState = a : va(o, se.memoizedState, a);
    },
    useTransition: function() {
      var a = Ns(Rl)[0], o = pa().memoizedState;
      return [a, o];
    },
    useMutableSource: Gc,
    useSyncExternalStore: Yc,
    useId: Tn,
    unstable_isNewReconciler: !1
  };
  function Ou(n, a) {
    try {
      var o = "", u = a;
      do
        o += De(u), u = u.return;
      while (u);
      var c = o;
    } catch (h) {
      c = `
Error generating stack: ` + h.message + `
` + h.stack;
    }
    return {
      value: n,
      source: a,
      stack: c,
      digest: null
    };
  }
  function Fs(n, a, o) {
    return {
      value: n,
      source: null,
      stack: o ?? null,
      digest: a ?? null
    };
  }
  function sf(n, a) {
    try {
      console.error(a.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var og = typeof WeakMap == "function" ? WeakMap : Map;
  function bh(n, a, o) {
    o = Zi(-1, o), o.tag = 3, o.payload = {
      element: null
    };
    var u = a.value;
    return o.callback = function() {
      mf || (mf = !0, Al = u), sf(n, a);
    }, o;
  }
  function js(n, a, o) {
    o = Zi(-1, o), o.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = a.value;
      o.payload = function() {
        return u(c);
      }, o.callback = function() {
        sf(n, a);
      };
    }
    var h = n.stateNode;
    return h !== null && typeof h.componentDidCatch == "function" && (o.callback = function() {
      sf(n, a), typeof u != "function" && (Li === null ? Li = /* @__PURE__ */ new Set([this]) : Li.add(this));
      var C = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: C !== null ? C : ""
      });
    }), o;
  }
  function Rh(n, a, o) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new og();
      var c = /* @__PURE__ */ new Set();
      u.set(a, c);
    } else
      c = u.get(a), c === void 0 && (c = /* @__PURE__ */ new Set(), u.set(a, c));
    c.has(o) || (c.add(o), n = pg.bind(null, n, a, o), a.then(n, n));
  }
  function ep(n) {
    do {
      var a;
      if ((a = n.tag === 13) && (a = n.memoizedState, a = a !== null ? a.dehydrated !== null : !0), a)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function tp(n, a, o, u, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === a ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (a = Zi(-1, 1), a.tag = 2, Po(o, a, 1))), o.lanes |= 1), n);
  }
  var lg = ie.ReactCurrentOwner, tr = !1;
  function or(n, a, o, u) {
    a.child = n === null ? Th(a, null, o, u) : wu(a, n.child, o, u);
  }
  function Wo(n, a, o, u, c) {
    o = o.render;
    var h = a.ref;
    return Ne(a, c), u = $o(n, a, o, u, h, c), o = bl(), n !== null && !tr ? (a.updateQueue = n.updateQueue, a.flags &= -2053, n.lanes &= ~c, wr(n, a, c)) : (_n && o && Nc(a), a.flags |= 1, or(n, a, u, c), a.child);
  }
  function cf(n, a, o, u, c) {
    if (n === null) {
      var h = o.type;
      return typeof h == "function" && !Ep(h) && h.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (a.tag = 15, a.type = h, ha(n, a, h, u, c)) : (n = Tf(o.type, null, u, a, a.mode, c), n.ref = a.ref, n.return = a, a.child = n);
    }
    if (h = n.child, !(n.lanes & c)) {
      var C = h.memoizedProps;
      if (o = o.compare, o = o !== null ? o : Ss, o(C, u) && n.ref === a.ref)
        return wr(n, a, c);
    }
    return a.flags |= 1, n = qo(h, u), n.ref = a.ref, n.return = a, a.child = n;
  }
  function ha(n, a, o, u, c) {
    if (n !== null) {
      var h = n.memoizedProps;
      if (Ss(h, u) && n.ref === a.ref)
        if (tr = !1, a.pendingProps = u = h, (n.lanes & c) !== 0)
          n.flags & 131072 && (tr = !0);
        else
          return a.lanes = n.lanes, wr(n, a, c);
    }
    return ku(n, a, o, u, c);
  }
  function Ol(n, a, o) {
    var u = a.pendingProps, c = u.children, h = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden")
      if (!(a.mode & 1))
        a.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        }, un(Iu, Da), Da |= o;
      else {
        if (!(o & 1073741824))
          return n = h !== null ? h.baseLanes | o : o, a.lanes = a.childLanes = 1073741824, a.memoizedState = {
            baseLanes: n,
            cachePool: null,
            transitions: null
          }, a.updateQueue = null, un(Iu, Da), Da |= n, null;
        a.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        }, u = h !== null ? h.baseLanes : o, un(Iu, Da), Da |= u;
      }
    else
      h !== null ? (u = h.baseLanes | o, a.memoizedState = null) : u = o, un(Iu, Da), Da |= u;
    return or(n, a, c, o), a.child;
  }
  function Mt(n, a) {
    var o = a.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (a.flags |= 512, a.flags |= 2097152);
  }
  function ku(n, a, o, u, c) {
    var h = An(o) ? ua : gt.current;
    return h = Ha(a, h), Ne(a, c), o = $o(n, a, o, u, h, c), u = bl(), n !== null && !tr ? (a.updateQueue = n.updateQueue, a.flags &= -2053, n.lanes &= ~c, wr(n, a, c)) : (_n && u && Nc(a), a.flags |= 1, or(n, a, o, c), a.child);
  }
  function np(n, a, o, u, c) {
    if (An(o)) {
      var h = !0;
      Lc(a);
    } else
      h = !1;
    if (Ne(a, c), a.stateNode === null)
      Nr(n, a), gh(a, o, u), Hc(a, o, u, c), u = !0;
    else if (n === null) {
      var C = a.stateNode, x = a.memoizedProps;
      C.props = x;
      var I = C.context, X = o.contextType;
      typeof X == "object" && X !== null ? X = qn(X) : (X = An(o) ? ua : gt.current, X = Ha(a, X));
      var te = o.getDerivedStateFromProps, Ce = typeof te == "function" || typeof C.getSnapshotBeforeUpdate == "function";
      Ce || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (x !== u || I !== X) && Sh(a, C, u, X), zo = !1;
      var Ee = a.memoizedState;
      C.state = Ee, Vo(a, u, C, c), I = a.memoizedState, x !== u || Ee !== I || $n.current || zo ? (typeof te == "function" && (qd(a, o, te, u), I = a.memoizedState), (x = zo || yh(a, o, x, u, Ee, I, X)) ? (Ce || typeof C.UNSAFE_componentWillMount != "function" && typeof C.componentWillMount != "function" || (typeof C.componentWillMount == "function" && C.componentWillMount(), typeof C.UNSAFE_componentWillMount == "function" && C.UNSAFE_componentWillMount()), typeof C.componentDidMount == "function" && (a.flags |= 4194308)) : (typeof C.componentDidMount == "function" && (a.flags |= 4194308), a.memoizedProps = u, a.memoizedState = I), C.props = u, C.state = I, C.context = X, u = x) : (typeof C.componentDidMount == "function" && (a.flags |= 4194308), u = !1);
    } else {
      C = a.stateNode, ir(n, a), x = a.memoizedProps, X = a.type === a.elementType ? x : Oa(a.type, x), C.props = X, Ce = a.pendingProps, Ee = C.context, I = o.contextType, typeof I == "object" && I !== null ? I = qn(I) : (I = An(o) ? ua : gt.current, I = Ha(a, I));
      var Pe = o.getDerivedStateFromProps;
      (te = typeof Pe == "function" || typeof C.getSnapshotBeforeUpdate == "function") || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (x !== Ce || Ee !== I) && Sh(a, C, u, I), zo = !1, Ee = a.memoizedState, C.state = Ee, Vo(a, u, C, c);
      var We = a.memoizedState;
      x !== Ce || Ee !== We || $n.current || zo ? (typeof Pe == "function" && (qd(a, o, Pe, u), We = a.memoizedState), (X = zo || yh(a, o, X, u, Ee, We, I) || !1) ? (te || typeof C.UNSAFE_componentWillUpdate != "function" && typeof C.componentWillUpdate != "function" || (typeof C.componentWillUpdate == "function" && C.componentWillUpdate(u, We, I), typeof C.UNSAFE_componentWillUpdate == "function" && C.UNSAFE_componentWillUpdate(u, We, I)), typeof C.componentDidUpdate == "function" && (a.flags |= 4), typeof C.getSnapshotBeforeUpdate == "function" && (a.flags |= 1024)) : (typeof C.componentDidUpdate != "function" || x === n.memoizedProps && Ee === n.memoizedState || (a.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && Ee === n.memoizedState || (a.flags |= 1024), a.memoizedProps = u, a.memoizedState = We), C.props = u, C.state = We, C.context = I, u = X) : (typeof C.componentDidUpdate != "function" || x === n.memoizedProps && Ee === n.memoizedState || (a.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && Ee === n.memoizedState || (a.flags |= 1024), u = !1);
    }
    return xh(n, a, o, u, h, c);
  }
  function xh(n, a, o, u, c, h) {
    Mt(n, a);
    var C = (a.flags & 128) !== 0;
    if (!u && !C)
      return c && fh(a, o, !1), wr(n, a, h);
    u = a.stateNode, lg.current = a;
    var x = C && typeof o.getDerivedStateFromError != "function" ? null : u.render();
    return a.flags |= 1, n !== null && C ? (a.child = wu(a, n.child, null, h), a.child = wu(a, null, x, h)) : or(n, a, x, h), a.memoizedState = u.state, c && fh(a, o, !0), a.child;
  }
  function _h(n) {
    var a = n.stateNode;
    a.pendingContext ? Io(n, a.pendingContext, a.pendingContext !== a.context) : a.context && Io(n, a.context, !1), Kd(n, a.containerInfo);
  }
  function ff(n, a, o, u, c) {
    return Un(), $d(c), a.flags |= 256, or(n, a, o, u), a.child;
  }
  var kl = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
  };
  function rp(n) {
    return {
      baseLanes: n,
      cachePool: null,
      transitions: null
    };
  }
  function ap(n, a, o) {
    var u = a.pendingProps, c = ft.current, h = !1, C = (a.flags & 128) !== 0, x;
    if ((x = C) || (x = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), x ? (h = !0, a.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), un(ft, c & 1), n === null)
      return Uc(a), n = a.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (a.mode & 1 ? n.data === "$!" ? a.lanes = 8 : a.lanes = 1073741824 : a.lanes = 1, null) : (C = u.children, n = u.fallback, h ? (u = a.mode, h = a.child, C = {
        mode: "hidden",
        children: C
      }, !(u & 1) && h !== null ? (h.childLanes = 0, h.pendingProps = C) : h = Qs(C, u, 0, null), n = Fl(n, u, o, null), h.return = a, n.return = a, h.sibling = n, a.child = h, a.child.memoizedState = rp(o), a.memoizedState = kl, n) : ip(a, C));
    if (c = n.memoizedState, c !== null && (x = c.dehydrated, x !== null))
      return ug(n, a, C, u, x, c, o);
    if (h) {
      h = u.fallback, C = a.mode, c = n.child, x = c.sibling;
      var I = {
        mode: "hidden",
        children: u.children
      };
      return !(C & 1) && a.child !== c ? (u = a.child, u.childLanes = 0, u.pendingProps = I, a.deletions = null) : (u = qo(c, I), u.subtreeFlags = c.subtreeFlags & 14680064), x !== null ? h = qo(x, h) : (h = Fl(h, C, o, null), h.flags |= 2), h.return = a, u.return = a, u.sibling = h, a.child = u, u = h, h = a.child, C = n.child.memoizedState, C = C === null ? rp(o) : {
        baseLanes: C.baseLanes | o,
        cachePool: null,
        transitions: C.transitions
      }, h.memoizedState = C, h.childLanes = n.childLanes & ~o, a.memoizedState = kl, u;
    }
    return h = n.child, n = h.sibling, u = qo(h, {
      mode: "visible",
      children: u.children
    }), !(a.mode & 1) && (u.lanes = o), u.return = a, u.sibling = null, n !== null && (o = a.deletions, o === null ? (a.deletions = [n], a.flags |= 16) : o.push(n)), a.child = u, a.memoizedState = null, u;
  }
  function ip(n, a) {
    return a = Qs({
      mode: "visible",
      children: a
    }, n.mode, 0, null), a.return = n, n.child = a;
  }
  function Du(n, a, o, u) {
    return u !== null && $d(u), wu(a, n.child, null, o), n = ip(a, a.pendingProps.children), n.flags |= 2, a.memoizedState = null, n;
  }
  function ug(n, a, o, u, c, h, C) {
    if (o)
      return a.flags & 256 ? (a.flags &= -257, u = Fs(Error(v(422))), Du(n, a, C, u)) : a.memoizedState !== null ? (a.child = n.child, a.flags |= 128, null) : (h = u.fallback, c = a.mode, u = Qs({
        mode: "visible",
        children: u.children
      }, c, 0, null), h = Fl(h, c, C, null), h.flags |= 2, u.return = a, h.return = a, u.sibling = h, a.child = u, a.mode & 1 && wu(a, n.child, null, C), a.child.memoizedState = rp(C), a.memoizedState = kl, h);
    if (!(a.mode & 1))
      return Du(n, a, C, null);
    if (c.data === "$!") {
      if (u = c.nextSibling && c.nextSibling.dataset, u)
        var x = u.dgst;
      return u = x, h = Error(v(419)), u = Fs(h, u, void 0), Du(n, a, C, u);
    }
    if (x = (C & n.childLanes) !== 0, tr || x) {
      if (u = jn, u !== null) {
        switch (C & -C) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (u.suspendedLanes | C) ? 0 : c, c !== 0 && c !== h.retryLane && (h.retryLane = c, Xi(n, c), jr(u, n, c, -1));
      }
      return yp(), u = Fs(Error(v(421))), Du(n, a, C, u);
    }
    return c.data === "$?" ? (a.flags |= 128, a.child = n.child, a = vg.bind(null, n), c._reactRetry = a, null) : (n = h.treeContext, da = pi(c.nextSibling), _a = a, _n = !0, Wa = null, n !== null && (fa[Lr++] = Cr, fa[Lr++] = Ki, fa[Lr++] = Ba, Cr = n.id, Ki = n.overflow, Ba = a), a = ip(a, u.children), a.flags |= 4096, a);
  }
  function op(n, a, o) {
    n.lanes |= a;
    var u = n.alternate;
    u !== null && (u.lanes |= a), hr(n.return, a, o);
  }
  function df(n, a, o, u, c) {
    var h = n.memoizedState;
    h === null ? n.memoizedState = {
      isBackwards: a,
      rendering: null,
      renderingStartTime: 0,
      last: u,
      tail: o,
      tailMode: c
    } : (h.isBackwards = a, h.rendering = null, h.renderingStartTime = 0, h.last = u, h.tail = o, h.tailMode = c);
  }
  function lp(n, a, o) {
    var u = a.pendingProps, c = u.revealOrder, h = u.tail;
    if (or(n, a, u.children, o), u = ft.current, u & 2)
      u = u & 1 | 2, a.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = a.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && op(n, o, a);
            else if (n.tag === 19)
              op(n, o, a);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === a)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === a)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      u &= 1;
    }
    if (un(ft, u), !(a.mode & 1))
      a.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (o = a.child, c = null; o !== null; )
            n = o.alternate, n !== null && Fn(n) === null && (c = o), o = o.sibling;
          o = c, o === null ? (c = a.child, a.child = null) : (c = o.sibling, o.sibling = null), df(a, !1, c, o, h);
          break;
        case "backwards":
          for (o = null, c = a.child, a.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && Fn(n) === null) {
              a.child = c;
              break;
            }
            n = c.sibling, c.sibling = o, o = c, c = n;
          }
          df(a, !0, o, null, h);
          break;
        case "together":
          df(a, !1, null, null, void 0);
          break;
        default:
          a.memoizedState = null;
      }
    return a.child;
  }
  function Nr(n, a) {
    !(a.mode & 1) && n !== null && (n.alternate = null, a.alternate = null, a.flags |= 2);
  }
  function wr(n, a, o) {
    if (n !== null && (a.dependencies = n.dependencies), no |= a.lanes, !(o & a.childLanes))
      return null;
    if (n !== null && a.child !== n.child)
      throw Error(v(153));
    if (a.child !== null) {
      for (n = a.child, o = qo(n, n.pendingProps), a.child = o, o.return = a; n.sibling !== null; )
        n = n.sibling, o = o.sibling = qo(n, n.pendingProps), o.return = a;
      o.sibling = null;
    }
    return a.child;
  }
  function eo(n, a, o) {
    switch (a.tag) {
      case 3:
        _h(a), Un();
        break;
      case 5:
        st(a);
        break;
      case 1:
        An(a.type) && Lc(a);
        break;
      case 4:
        Kd(a, a.stateNode.containerInfo);
        break;
      case 10:
        var u = a.type._context, c = a.memoizedProps.value;
        un(ki, u._currentValue), u._currentValue = c;
        break;
      case 13:
        if (u = a.memoizedState, u !== null)
          return u.dehydrated !== null ? (un(ft, ft.current & 1), a.flags |= 128, null) : o & a.child.childLanes ? ap(n, a, o) : (un(ft, ft.current & 1), n = wr(n, a, o), n !== null ? n.sibling : null);
        un(ft, ft.current & 1);
        break;
      case 19:
        if (u = (o & a.childLanes) !== 0, n.flags & 128) {
          if (u)
            return lp(n, a, o);
          a.flags |= 128;
        }
        if (c = a.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), un(ft, ft.current), u)
          break;
        return null;
      case 22:
      case 23:
        return a.lanes = 0, Ol(n, a, o);
    }
    return wr(n, a, o);
  }
  var zs, Dl, Qa, lr;
  zs = function(a, o) {
    for (var u = o.child; u !== null; ) {
      if (u.tag === 5 || u.tag === 6)
        a.appendChild(u.stateNode);
      else if (u.tag !== 4 && u.child !== null) {
        u.child.return = u, u = u.child;
        continue;
      }
      if (u === o)
        break;
      for (; u.sibling === null; ) {
        if (u.return === null || u.return === o)
          return;
        u = u.return;
      }
      u.sibling.return = u.return, u = u.sibling;
    }
  }, Dl = function() {
  }, Qa = function(a, o, u, c) {
    var h = a.memoizedProps;
    if (h !== c) {
      a = o.stateNode, El(vi.current);
      var C = null;
      switch (u) {
        case "input":
          h = zt(a, h), c = zt(a, c), C = [];
          break;
        case "select":
          h = O({}, h, {
            value: void 0
          }), c = O({}, c, {
            value: void 0
          }), C = [];
          break;
        case "textarea":
          h = Jn(a, h), c = Jn(a, c), C = [];
          break;
        default:
          typeof h.onClick != "function" && typeof c.onClick == "function" && (a.onclick = Ac);
      }
      Qn(u, c);
      var x;
      u = null;
      for (te in h)
        if (!c.hasOwnProperty(te) && h.hasOwnProperty(te) && h[te] != null)
          if (te === "style") {
            var I = h[te];
            for (x in I)
              I.hasOwnProperty(x) && (u || (u = {}), u[x] = "");
          } else
            te !== "dangerouslySetInnerHTML" && te !== "children" && te !== "suppressContentEditableWarning" && te !== "suppressHydrationWarning" && te !== "autoFocus" && (T.hasOwnProperty(te) ? C || (C = []) : (C = C || []).push(te, null));
      for (te in c) {
        var X = c[te];
        if (I = h != null ? h[te] : void 0, c.hasOwnProperty(te) && X !== I && (X != null || I != null))
          if (te === "style")
            if (I) {
              for (x in I)
                !I.hasOwnProperty(x) || X && X.hasOwnProperty(x) || (u || (u = {}), u[x] = "");
              for (x in X)
                X.hasOwnProperty(x) && I[x] !== X[x] && (u || (u = {}), u[x] = X[x]);
            } else
              u || (C || (C = []), C.push(te, u)), u = X;
          else
            te === "dangerouslySetInnerHTML" ? (X = X ? X.__html : void 0, I = I ? I.__html : void 0, X != null && I !== X && (C = C || []).push(te, X)) : te === "children" ? typeof X != "string" && typeof X != "number" || (C = C || []).push(te, "" + X) : te !== "suppressContentEditableWarning" && te !== "suppressHydrationWarning" && (T.hasOwnProperty(te) ? (X != null && te === "onScroll" && Cn("scroll", a), C || I === X || (C = [])) : (C = C || []).push(te, X));
      }
      u && (C = C || []).push("style", u);
      var te = C;
      (o.updateQueue = te) && (o.flags |= 4);
    }
  }, lr = function(a, o, u, c) {
    u !== c && (o.flags |= 4);
  };
  function Ps(n, a) {
    if (!_n)
      switch (n.tailMode) {
        case "hidden":
          a = n.tail;
          for (var o = null; a !== null; )
            a.alternate !== null && (o = a), a = a.sibling;
          o === null ? n.tail = null : o.sibling = null;
          break;
        case "collapsed":
          o = n.tail;
          for (var u = null; o !== null; )
            o.alternate !== null && (u = o), o = o.sibling;
          u === null ? a || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null;
      }
  }
  function Ir(n) {
    var a = n.alternate !== null && n.alternate.child === n.child, o = 0, u = 0;
    if (a)
      for (var c = n.child; c !== null; )
        o |= c.lanes | c.childLanes, u |= c.subtreeFlags & 14680064, u |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        o |= c.lanes | c.childLanes, u |= c.subtreeFlags, u |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= u, n.childLanes = o, a;
  }
  function sg(n, a, o) {
    var u = a.pendingProps;
    switch (Vd(a), a.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ir(a), null;
      case 1:
        return An(a.type) && $a(), Ir(a), null;
      case 3:
        return u = a.stateNode, Ho(), nn($n), nn(gt), Bc(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (Fc(a) ? a.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(a.flags & 256) || (a.flags |= 1024, Wa !== null && (Ys(Wa), Wa = null))), Dl(n, a), Ir(a), null;
      case 5:
        Ut(a);
        var c = El(bu.current);
        if (o = a.type, n !== null && a.stateNode != null)
          Qa(n, a, o, u, c), n.ref !== a.ref && (a.flags |= 512, a.flags |= 2097152);
        else {
          if (!u) {
            if (a.stateNode === null)
              throw Error(v(166));
            return Ir(a), null;
          }
          if (n = El(vi.current), Fc(a)) {
            u = a.stateNode, o = a.type;
            var h = a.memoizedProps;
            switch (u[_i] = a, u[yl] = h, n = (a.mode & 1) !== 0, o) {
              case "dialog":
                Cn("cancel", u), Cn("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                Cn("load", u);
                break;
              case "video":
              case "audio":
                for (c = 0; c < ws.length; c++)
                  Cn(ws[c], u);
                break;
              case "source":
                Cn("error", u);
                break;
              case "img":
              case "image":
              case "link":
                Cn("error", u), Cn("load", u);
                break;
              case "details":
                Cn("toggle", u);
                break;
              case "input":
                qe(u, h), Cn("invalid", u);
                break;
              case "select":
                u._wrapperState = {
                  wasMultiple: !!h.multiple
                }, Cn("invalid", u);
                break;
              case "textarea":
                dn(u, h), Cn("invalid", u);
            }
            Qn(o, h), c = null;
            for (var C in h)
              if (h.hasOwnProperty(C)) {
                var x = h[C];
                C === "children" ? typeof x == "string" ? u.textContent !== x && (h.suppressHydrationWarning !== !0 && Mc(u.textContent, x, n), c = ["children", x]) : typeof x == "number" && u.textContent !== "" + x && (h.suppressHydrationWarning !== !0 && Mc(u.textContent, x, n), c = ["children", "" + x]) : T.hasOwnProperty(C) && x != null && C === "onScroll" && Cn("scroll", u);
              }
            switch (o) {
              case "input":
                Ot(u), Zt(u, h, !0);
                break;
              case "textarea":
                Ot(u), Lt(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof h.onClick == "function" && (u.onclick = Ac);
            }
            u = c, a.updateQueue = u, u !== null && (a.flags |= 4);
          } else {
            C = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = fr(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = C.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = C.createElement(o, {
              is: u.is
            }) : (n = C.createElement(o), o === "select" && (C = n, u.multiple ? C.multiple = !0 : u.size && (C.size = u.size))) : n = C.createElementNS(n, o), n[_i] = a, n[yl] = u, zs(n, a, !1, !1), a.stateNode = n;
            e: {
              switch (C = Nn(o, u), o) {
                case "dialog":
                  Cn("cancel", n), Cn("close", n), c = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Cn("load", n), c = u;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < ws.length; c++)
                    Cn(ws[c], n);
                  c = u;
                  break;
                case "source":
                  Cn("error", n), c = u;
                  break;
                case "img":
                case "image":
                case "link":
                  Cn("error", n), Cn("load", n), c = u;
                  break;
                case "details":
                  Cn("toggle", n), c = u;
                  break;
                case "input":
                  qe(n, u), c = zt(n, u), Cn("invalid", n);
                  break;
                case "option":
                  c = u;
                  break;
                case "select":
                  n._wrapperState = {
                    wasMultiple: !!u.multiple
                  }, c = O({}, u, {
                    value: void 0
                  }), Cn("invalid", n);
                  break;
                case "textarea":
                  dn(n, u), c = Jn(n, u), Cn("invalid", n);
                  break;
                default:
                  c = u;
              }
              Qn(o, c), x = c;
              for (h in x)
                if (x.hasOwnProperty(h)) {
                  var I = x[h];
                  h === "style" ? Qt(n, I) : h === "dangerouslySetInnerHTML" ? (I = I ? I.__html : void 0, I != null && Si(n, I)) : h === "children" ? typeof I == "string" ? (o !== "textarea" || I !== "") && Ca(n, I) : typeof I == "number" && Ca(n, "" + I) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (T.hasOwnProperty(h) ? I != null && h === "onScroll" && Cn("scroll", n) : I != null && ae(n, h, I, C));
                }
              switch (o) {
                case "input":
                  Ot(n), Zt(n, u, !1);
                  break;
                case "textarea":
                  Ot(n), Lt(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + fe(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, h = u.value, h != null ? Yn(n, !!u.multiple, h, !1) : u.defaultValue != null && Yn(n, !!u.multiple, u.defaultValue, !0);
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Ac);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break e;
                case "img":
                  u = !0;
                  break e;
                default:
                  u = !1;
              }
            }
            u && (a.flags |= 4);
          }
          a.ref !== null && (a.flags |= 512, a.flags |= 2097152);
        }
        return Ir(a), null;
      case 6:
        if (n && a.stateNode != null)
          lr(n, a, n.memoizedProps, u);
        else {
          if (typeof u != "string" && a.stateNode === null)
            throw Error(v(166));
          if (o = El(bu.current), El(vi.current), Fc(a)) {
            if (u = a.stateNode, o = a.memoizedProps, u[_i] = a, (h = u.nodeValue !== o) && (n = _a, n !== null))
              switch (n.tag) {
                case 3:
                  Mc(u.nodeValue, o, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Mc(u.nodeValue, o, (n.mode & 1) !== 0);
              }
            h && (a.flags |= 4);
          } else
            u = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u), u[_i] = a, a.stateNode = u;
        }
        return Ir(a), null;
      case 13:
        if (nn(ft), u = a.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (_n && da !== null && a.mode & 1 && !(a.flags & 128))
            vh(), Un(), a.flags |= 98560, h = !1;
          else if (h = Fc(a), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!h)
                throw Error(v(318));
              if (h = a.memoizedState, h = h !== null ? h.dehydrated : null, !h)
                throw Error(v(317));
              h[_i] = a;
            } else
              Un(), !(a.flags & 128) && (a.memoizedState = null), a.flags |= 4;
            Ir(a), h = !1;
          } else
            Wa !== null && (Ys(Wa), Wa = null), h = !0;
          if (!h)
            return a.flags & 65536 ? a : null;
        }
        return a.flags & 128 ? (a.lanes = o, a) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (a.child.flags |= 8192, a.mode & 1 && (n === null || ft.current & 1 ? sr === 0 && (sr = 3) : yp())), a.updateQueue !== null && (a.flags |= 4), Ir(a), null);
      case 4:
        return Ho(), Dl(n, a), n === null && Su(a.stateNode.containerInfo), Ir(a), null;
      case 10:
        return jo(a.type._context), Ir(a), null;
      case 17:
        return An(a.type) && $a(), Ir(a), null;
      case 19:
        if (nn(ft), h = a.memoizedState, h === null)
          return Ir(a), null;
        if (u = (a.flags & 128) !== 0, C = h.rendering, C === null)
          if (u)
            Ps(h, !1);
          else {
            if (sr !== 0 || n !== null && n.flags & 128)
              for (n = a.child; n !== null; ) {
                if (C = Fn(n), C !== null) {
                  for (a.flags |= 128, Ps(h, !1), u = C.updateQueue, u !== null && (a.updateQueue = u, a.flags |= 4), a.subtreeFlags = 0, u = o, o = a.child; o !== null; )
                    h = o, n = u, h.flags &= 14680066, C = h.alternate, C === null ? (h.childLanes = 0, h.lanes = n, h.child = null, h.subtreeFlags = 0, h.memoizedProps = null, h.memoizedState = null, h.updateQueue = null, h.dependencies = null, h.stateNode = null) : (h.childLanes = C.childLanes, h.lanes = C.lanes, h.child = C.child, h.subtreeFlags = 0, h.deletions = null, h.memoizedProps = C.memoizedProps, h.memoizedState = C.memoizedState, h.updateQueue = C.updateQueue, h.type = C.type, n = C.dependencies, h.dependencies = n === null ? null : {
                      lanes: n.lanes,
                      firstContext: n.firstContext
                    }), o = o.sibling;
                  return un(ft, ft.current & 1 | 2), a.child;
                }
                n = n.sibling;
              }
            h.tail !== null && Ht() > Fu && (a.flags |= 128, u = !0, Ps(h, !1), a.lanes = 4194304);
          }
        else {
          if (!u)
            if (n = Fn(C), n !== null) {
              if (a.flags |= 128, u = !0, o = n.updateQueue, o !== null && (a.updateQueue = o, a.flags |= 4), Ps(h, !0), h.tail === null && h.tailMode === "hidden" && !C.alternate && !_n)
                return Ir(a), null;
            } else
              2 * Ht() - h.renderingStartTime > Fu && o !== 1073741824 && (a.flags |= 128, u = !0, Ps(h, !1), a.lanes = 4194304);
          h.isBackwards ? (C.sibling = a.child, a.child = C) : (o = h.last, o !== null ? o.sibling = C : a.child = C, h.last = C);
        }
        return h.tail !== null ? (a = h.tail, h.rendering = a, h.tail = a.sibling, h.renderingStartTime = Ht(), a.sibling = null, o = ft.current, un(ft, u ? o & 1 | 2 : o & 1), a) : (Ir(a), null);
      case 22:
      case 23:
        return mp(), u = a.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (a.flags |= 8192), u && a.mode & 1 ? Da & 1073741824 && (Ir(a), a.subtreeFlags & 6 && (a.flags |= 8192)) : Ir(a), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(v(156, a.tag));
  }
  function up(n, a) {
    switch (Vd(a), a.tag) {
      case 1:
        return An(a.type) && $a(), n = a.flags, n & 65536 ? (a.flags = n & -65537 | 128, a) : null;
      case 3:
        return Ho(), nn($n), nn(gt), Bc(), n = a.flags, n & 65536 && !(n & 128) ? (a.flags = n & -65537 | 128, a) : null;
      case 5:
        return Ut(a), null;
      case 13:
        if (nn(ft), n = a.memoizedState, n !== null && n.dehydrated !== null) {
          if (a.alternate === null)
            throw Error(v(340));
          Un();
        }
        return n = a.flags, n & 65536 ? (a.flags = n & -65537 | 128, a) : null;
      case 19:
        return nn(ft), null;
      case 4:
        return Ho(), null;
      case 10:
        return jo(a.type._context), null;
      case 22:
      case 23:
        return mp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Vs = !1, ur = !1, Oh = typeof WeakSet == "function" ? WeakSet : Set, Be = null;
  function Mu(n, a) {
    var o = n.ref;
    if (o !== null)
      if (typeof o == "function")
        try {
          o(null);
        } catch (u) {
          Wn(n, a, u);
        }
      else
        o.current = null;
  }
  function Hs(n, a, o) {
    try {
      o();
    } catch (u) {
      Wn(n, a, u);
    }
  }
  var kh = !1;
  function Dh(n, a) {
    if (Ld = za, n = xc(), Gi(n)) {
      if ("selectionStart" in n)
        var o = {
          start: n.selectionStart,
          end: n.selectionEnd
        };
      else
        e: {
          o = (o = n.ownerDocument) && o.defaultView || window;
          var u = o.getSelection && o.getSelection();
          if (u && u.rangeCount !== 0) {
            o = u.anchorNode;
            var c = u.anchorOffset, h = u.focusNode;
            u = u.focusOffset;
            try {
              o.nodeType, h.nodeType;
            } catch {
              o = null;
              break e;
            }
            var C = 0, x = -1, I = -1, X = 0, te = 0, Ce = n, Ee = null;
            t:
              for (; ; ) {
                for (var Pe; Ce !== o || c !== 0 && Ce.nodeType !== 3 || (x = C + c), Ce !== h || u !== 0 && Ce.nodeType !== 3 || (I = C + u), Ce.nodeType === 3 && (C += Ce.nodeValue.length), (Pe = Ce.firstChild) !== null; )
                  Ee = Ce, Ce = Pe;
                for (; ; ) {
                  if (Ce === n)
                    break t;
                  if (Ee === o && ++X === c && (x = C), Ee === h && ++te === u && (I = C), (Pe = Ce.nextSibling) !== null)
                    break;
                  Ce = Ee, Ee = Ce.parentNode;
                }
                Ce = Pe;
              }
            o = x === -1 || I === -1 ? null : {
              start: x,
              end: I
            };
          } else
            o = null;
        }
      o = o || {
        start: 0,
        end: 0
      };
    } else
      o = null;
    for (hl = {
      focusedElem: n,
      selectionRange: o
    }, za = !1, Be = a; Be !== null; )
      if (a = Be, n = a.child, (a.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = a, Be = n;
      else
        for (; Be !== null; ) {
          a = Be;
          try {
            var We = a.alternate;
            if (a.flags & 1024)
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (We !== null) {
                    var Ke = We.memoizedProps, Kn = We.memoizedState, B = a.stateNode, F = B.getSnapshotBeforeUpdate(a.elementType === a.type ? Ke : Oa(a.type, Ke), Kn);
                    B.__reactInternalSnapshotBeforeUpdate = F;
                  }
                  break;
                case 3:
                  var Q = a.stateNode.containerInfo;
                  Q.nodeType === 1 ? Q.textContent = "" : Q.nodeType === 9 && Q.documentElement && Q.removeChild(Q.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(v(163));
              }
          } catch (Oe) {
            Wn(a, a.return, Oe);
          }
          if (n = a.sibling, n !== null) {
            n.return = a.return, Be = n;
            break;
          }
          Be = a.return;
        }
    return We = kh, kh = !1, We;
  }
  function $s(n, a, o) {
    var u = a.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var c = u = u.next;
      do {
        if ((c.tag & n) === n) {
          var h = c.destroy;
          c.destroy = void 0, h !== void 0 && Hs(a, o, h);
        }
        c = c.next;
      } while (c !== u);
    }
  }
  function Bs(n, a) {
    if (a = a.updateQueue, a = a !== null ? a.lastEffect : null, a !== null) {
      var o = a = a.next;
      do {
        if ((o.tag & n) === n) {
          var u = o.create;
          o.destroy = u();
        }
        o = o.next;
      } while (o !== a);
    }
  }
  function sp(n) {
    var a = n.ref;
    if (a !== null) {
      var o = n.stateNode;
      switch (n.tag) {
        case 5:
          n = o;
          break;
        default:
          n = o;
      }
      typeof a == "function" ? a(n) : a.current = n;
    }
  }
  function cp(n) {
    var a = n.alternate;
    a !== null && (n.alternate = null, cp(a)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (a = n.stateNode, a !== null && (delete a[_i], delete a[yl], delete a[Ud], delete a[ng], delete a[Fd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Mh(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function pf(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Mh(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function Au(n, a, o) {
    var u = n.tag;
    if (u === 5 || u === 6)
      n = n.stateNode, a ? o.nodeType === 8 ? o.parentNode.insertBefore(n, a) : o.insertBefore(n, a) : (o.nodeType === 8 ? (a = o.parentNode, a.insertBefore(n, o)) : (a = o, a.appendChild(n)), o = o._reactRootContainer, o != null || a.onclick !== null || (a.onclick = Ac));
    else if (u !== 4 && (n = n.child, n !== null))
      for (Au(n, a, o), n = n.sibling; n !== null; )
        Au(n, a, o), n = n.sibling;
  }
  function Mi(n, a, o) {
    var u = n.tag;
    if (u === 5 || u === 6)
      n = n.stateNode, a ? o.insertBefore(n, a) : o.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null))
      for (Mi(n, a, o), n = n.sibling; n !== null; )
        Mi(n, a, o), n = n.sibling;
  }
  var Ln = null, mr = !1;
  function qa(n, a, o) {
    for (o = o.child; o !== null; )
      Lu(n, a, o), o = o.sibling;
  }
  function Lu(n, a, o) {
    if (ra && typeof ra.onCommitFiberUnmount == "function")
      try {
        ra.onCommitFiberUnmount(Eo, o);
      } catch {
      }
    switch (o.tag) {
      case 5:
        ur || Mu(o, a);
      case 6:
        var u = Ln, c = mr;
        Ln = null, qa(n, a, o), Ln = u, mr = c, Ln !== null && (mr ? (n = Ln, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : Ln.removeChild(o.stateNode));
        break;
      case 18:
        Ln !== null && (mr ? (n = Ln, o = o.stateNode, n.nodeType === 8 ? Ao(n.parentNode, o) : n.nodeType === 1 && Ao(n, o), _o(n)) : Ao(Ln, o.stateNode));
        break;
      case 4:
        u = Ln, c = mr, Ln = o.stateNode.containerInfo, mr = !0, qa(n, a, o), Ln = u, mr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!ur && (u = o.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          c = u = u.next;
          do {
            var h = c, C = h.destroy;
            h = h.tag, C !== void 0 && (h & 2 || h & 4) && Hs(o, a, C), c = c.next;
          } while (c !== u);
        }
        qa(n, a, o);
        break;
      case 1:
        if (!ur && (Mu(o, a), u = o.stateNode, typeof u.componentWillUnmount == "function"))
          try {
            u.props = o.memoizedProps, u.state = o.memoizedState, u.componentWillUnmount();
          } catch (x) {
            Wn(o, a, x);
          }
        qa(n, a, o);
        break;
      case 21:
        qa(n, a, o);
        break;
      case 22:
        o.mode & 1 ? (ur = (u = ur) || o.memoizedState !== null, qa(n, a, o), ur = u) : qa(n, a, o);
        break;
      default:
        qa(n, a, o);
    }
  }
  function to(n) {
    var a = n.updateQueue;
    if (a !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new Oh()), a.forEach(function(u) {
        var c = hg.bind(null, n, u);
        o.has(u) || (o.add(u), u.then(c, c));
      });
    }
  }
  function hi(n, a) {
    var o = a.deletions;
    if (o !== null)
      for (var u = 0; u < o.length; u++) {
        var c = o[u];
        try {
          var h = n, C = a, x = C;
          e:
            for (; x !== null; ) {
              switch (x.tag) {
                case 5:
                  Ln = x.stateNode, mr = !1;
                  break e;
                case 3:
                  Ln = x.stateNode.containerInfo, mr = !0;
                  break e;
                case 4:
                  Ln = x.stateNode.containerInfo, mr = !0;
                  break e;
              }
              x = x.return;
            }
          if (Ln === null)
            throw Error(v(160));
          Lu(h, C, c), Ln = null, mr = !1;
          var I = c.alternate;
          I !== null && (I.return = null), c.return = null;
        } catch (X) {
          Wn(c, a, X);
        }
      }
    if (a.subtreeFlags & 12854)
      for (a = a.child; a !== null; )
        Ah(a, n), a = a.sibling;
  }
  function Ah(n, a) {
    var o = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (hi(a, n), Ai(n), u & 4) {
          try {
            $s(3, n, n.return), Bs(3, n);
          } catch (Ke) {
            Wn(n, n.return, Ke);
          }
          try {
            $s(5, n, n.return);
          } catch (Ke) {
            Wn(n, n.return, Ke);
          }
        }
        break;
      case 1:
        hi(a, n), Ai(n), u & 512 && o !== null && Mu(o, o.return);
        break;
      case 5:
        if (hi(a, n), Ai(n), u & 512 && o !== null && Mu(o, o.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            Ca(c, "");
          } catch (Ke) {
            Wn(n, n.return, Ke);
          }
        }
        if (u & 4 && (c = n.stateNode, c != null)) {
          var h = n.memoizedProps, C = o !== null ? o.memoizedProps : h, x = n.type, I = n.updateQueue;
          if (n.updateQueue = null, I !== null)
            try {
              x === "input" && h.type === "radio" && h.name != null && Pt(c, h), Nn(x, C);
              var X = Nn(x, h);
              for (C = 0; C < I.length; C += 2) {
                var te = I[C], Ce = I[C + 1];
                te === "style" ? Qt(c, Ce) : te === "dangerouslySetInnerHTML" ? Si(c, Ce) : te === "children" ? Ca(c, Ce) : ae(c, te, Ce, X);
              }
              switch (x) {
                case "input":
                  ct(c, h);
                  break;
                case "textarea":
                  et(c, h);
                  break;
                case "select":
                  var Ee = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!h.multiple;
                  var Pe = h.value;
                  Pe != null ? Yn(c, !!h.multiple, Pe, !1) : Ee !== !!h.multiple && (h.defaultValue != null ? Yn(c, !!h.multiple, h.defaultValue, !0) : Yn(c, !!h.multiple, h.multiple ? [] : "", !1));
              }
              c[yl] = h;
            } catch (Ke) {
              Wn(n, n.return, Ke);
            }
        }
        break;
      case 6:
        if (hi(a, n), Ai(n), u & 4) {
          if (n.stateNode === null)
            throw Error(v(162));
          c = n.stateNode, h = n.memoizedProps;
          try {
            c.nodeValue = h;
          } catch (Ke) {
            Wn(n, n.return, Ke);
          }
        }
        break;
      case 3:
        if (hi(a, n), Ai(n), u & 4 && o !== null && o.memoizedState.isDehydrated)
          try {
            _o(a.containerInfo);
          } catch (Ke) {
            Wn(n, n.return, Ke);
          }
        break;
      case 4:
        hi(a, n), Ai(n);
        break;
      case 13:
        hi(a, n), Ai(n), c = n.child, c.flags & 8192 && (h = c.memoizedState !== null, c.stateNode.isHidden = h, !h || c.alternate !== null && c.alternate.memoizedState !== null || (pp = Ht())), u & 4 && to(n);
        break;
      case 22:
        if (te = o !== null && o.memoizedState !== null, n.mode & 1 ? (ur = (X = ur) || te, hi(a, n), ur = X) : hi(a, n), Ai(n), u & 8192) {
          if (X = n.memoizedState !== null, (n.stateNode.isHidden = X) && !te && n.mode & 1)
            for (Be = n, te = n.child; te !== null; ) {
              for (Ce = Be = te; Be !== null; ) {
                switch (Ee = Be, Pe = Ee.child, Ee.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    $s(4, Ee, Ee.return);
                    break;
                  case 1:
                    Mu(Ee, Ee.return);
                    var We = Ee.stateNode;
                    if (typeof We.componentWillUnmount == "function") {
                      u = Ee, o = Ee.return;
                      try {
                        a = u, We.props = a.memoizedProps, We.state = a.memoizedState, We.componentWillUnmount();
                      } catch (Ke) {
                        Wn(u, o, Ke);
                      }
                    }
                    break;
                  case 5:
                    Mu(Ee, Ee.return);
                    break;
                  case 22:
                    if (Ee.memoizedState !== null) {
                      fp(Ce);
                      continue;
                    }
                }
                Pe !== null ? (Pe.return = Ee, Be = Pe) : fp(Ce);
              }
              te = te.sibling;
            }
          e:
            for (te = null, Ce = n; ; ) {
              if (Ce.tag === 5) {
                if (te === null) {
                  te = Ce;
                  try {
                    c = Ce.stateNode, X ? (h = c.style, typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none") : (x = Ce.stateNode, I = Ce.memoizedProps.style, C = I != null && I.hasOwnProperty("display") ? I.display : null, x.style.display = At("display", C));
                  } catch (Ke) {
                    Wn(n, n.return, Ke);
                  }
                }
              } else if (Ce.tag === 6) {
                if (te === null)
                  try {
                    Ce.stateNode.nodeValue = X ? "" : Ce.memoizedProps;
                  } catch (Ke) {
                    Wn(n, n.return, Ke);
                  }
              } else if ((Ce.tag !== 22 && Ce.tag !== 23 || Ce.memoizedState === null || Ce === n) && Ce.child !== null) {
                Ce.child.return = Ce, Ce = Ce.child;
                continue;
              }
              if (Ce === n)
                break e;
              for (; Ce.sibling === null; ) {
                if (Ce.return === null || Ce.return === n)
                  break e;
                te === Ce && (te = null), Ce = Ce.return;
              }
              te === Ce && (te = null), Ce.sibling.return = Ce.return, Ce = Ce.sibling;
            }
        }
        break;
      case 19:
        hi(a, n), Ai(n), u & 4 && to(n);
        break;
      case 21:
        break;
      default:
        hi(a, n), Ai(n);
    }
  }
  function Ai(n) {
    var a = n.flags;
    if (a & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (Mh(o)) {
              var u = o;
              break e;
            }
            o = o.return;
          }
          throw Error(v(160));
        }
        switch (u.tag) {
          case 5:
            var c = u.stateNode;
            u.flags & 32 && (Ca(c, ""), u.flags &= -33);
            var h = pf(n);
            Mi(n, h, c);
            break;
          case 3:
          case 4:
            var C = u.stateNode.containerInfo, x = pf(n);
            Au(n, x, C);
            break;
          default:
            throw Error(v(161));
        }
      } catch (I) {
        Wn(n, n.return, I);
      }
      n.flags &= -3;
    }
    a & 4096 && (n.flags &= -4097);
  }
  function Lh(n, a, o) {
    Be = n, Nu(n);
  }
  function Nu(n, a, o) {
    for (var u = (n.mode & 1) !== 0; Be !== null; ) {
      var c = Be, h = c.child;
      if (c.tag === 22 && u) {
        var C = c.memoizedState !== null || Vs;
        if (!C) {
          var x = c.alternate, I = x !== null && x.memoizedState !== null || ur;
          x = Vs;
          var X = ur;
          if (Vs = C, (ur = I) && !X)
            for (Be = c; Be !== null; )
              C = Be, I = C.child, C.tag === 22 && C.memoizedState !== null ? Ih(c) : I !== null ? (I.return = C, Be = I) : Ih(c);
          for (; h !== null; )
            Be = h, Nu(h), h = h.sibling;
          Be = c, Vs = x, ur = X;
        }
        Nh(n);
      } else
        c.subtreeFlags & 8772 && h !== null ? (h.return = c, Be = h) : Nh(n);
    }
  }
  function Nh(n) {
    for (; Be !== null; ) {
      var a = Be;
      if (a.flags & 8772) {
        var o = a.alternate;
        try {
          if (a.flags & 8772)
            switch (a.tag) {
              case 0:
              case 11:
              case 15:
                ur || Bs(5, a);
                break;
              case 1:
                var u = a.stateNode;
                if (a.flags & 4 && !ur)
                  if (o === null)
                    u.componentDidMount();
                  else {
                    var c = a.elementType === a.type ? o.memoizedProps : Oa(a.type, o.memoizedProps);
                    u.componentDidUpdate(c, o.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
                  }
                var h = a.updateQueue;
                h !== null && Sl(a, h, u);
                break;
              case 3:
                var C = a.updateQueue;
                if (C !== null) {
                  if (o = null, a.child !== null)
                    switch (a.child.tag) {
                      case 5:
                        o = a.child.stateNode;
                        break;
                      case 1:
                        o = a.child.stateNode;
                    }
                  Sl(a, C, o);
                }
                break;
              case 5:
                var x = a.stateNode;
                if (o === null && a.flags & 4) {
                  o = x;
                  var I = a.memoizedProps;
                  switch (a.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      I.autoFocus && o.focus();
                      break;
                    case "img":
                      I.src && (o.src = I.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (a.memoizedState === null) {
                  var X = a.alternate;
                  if (X !== null) {
                    var te = X.memoizedState;
                    if (te !== null) {
                      var Ce = te.dehydrated;
                      Ce !== null && _o(Ce);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(v(163));
            }
          ur || a.flags & 512 && sp(a);
        } catch (Ee) {
          Wn(a, a.return, Ee);
        }
      }
      if (a === n) {
        Be = null;
        break;
      }
      if (o = a.sibling, o !== null) {
        o.return = a.return, Be = o;
        break;
      }
      Be = a.return;
    }
  }
  function fp(n) {
    for (; Be !== null; ) {
      var a = Be;
      if (a === n) {
        Be = null;
        break;
      }
      var o = a.sibling;
      if (o !== null) {
        o.return = a.return, Be = o;
        break;
      }
      Be = a.return;
    }
  }
  function Ih(n) {
    for (; Be !== null; ) {
      var a = Be;
      try {
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            var o = a.return;
            try {
              Bs(4, a);
            } catch (I) {
              Wn(a, o, I);
            }
            break;
          case 1:
            var u = a.stateNode;
            if (typeof u.componentDidMount == "function") {
              var c = a.return;
              try {
                u.componentDidMount();
              } catch (I) {
                Wn(a, c, I);
              }
            }
            var h = a.return;
            try {
              sp(a);
            } catch (I) {
              Wn(a, h, I);
            }
            break;
          case 5:
            var C = a.return;
            try {
              sp(a);
            } catch (I) {
              Wn(a, C, I);
            }
        }
      } catch (I) {
        Wn(a, a.return, I);
      }
      if (a === n) {
        Be = null;
        break;
      }
      var x = a.sibling;
      if (x !== null) {
        x.return = a.return, Be = x;
        break;
      }
      Be = a.return;
    }
  }
  var vf = Math.ceil, Ws = ie.ReactCurrentDispatcher, dp = ie.ReactCurrentOwner, Ur = ie.ReactCurrentBatchConfig, Ft = 0, jn = null, Bn = null, yr = 0, Da = 0, Iu = Dt(0), sr = 0, Gs = null, no = 0, hf = 0, Uu = 0, Ml = null, Wr = null, pp = 0, Fu = 1 / 0, ro = null, mf = !1, Al = null, Li = null, Go = !1, Yo = null, yf = 0, ju = 0, gf = null, Ll = -1, Nl = 0;
  function Fr() {
    return Ft & 6 ? Ht() : Ll !== -1 ? Ll : Ll = Ht();
  }
  function nr(n) {
    return n.mode & 1 ? Ft & 2 && yr !== 0 ? yr & -yr : jc.transition !== null ? (Nl === 0 && (Nl = iu()), Nl) : (n = Jt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : vs(n.type)), n) : 1;
  }
  function jr(n, a, o, u) {
    if (50 < ju)
      throw ju = 0, gf = null, Error(v(185));
    Hi(n, o, u), (!(Ft & 2) || n !== jn) && (n === jn && (!(Ft & 2) && (hf |= o), sr === 4 && Ka(n, yr)), zr(n, u), o === 1 && Ft === 0 && !(a.mode & 1) && (Fu = Ht() + 500, vr && sa()));
  }
  function zr(n, a) {
    var o = n.callbackNode;
    wo(n, a);
    var u = $r(n, n === jn ? yr : 0);
    if (u === 0)
      o !== null && Er(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (a = u & -u, n.callbackPriority !== a) {
      if (o != null && Er(o), a === 1)
        n.tag === 0 ? zd(Uh.bind(null, n)) : jd(Uh.bind(null, n)), Id(function() {
          !(Ft & 6) && sa();
        }), o = null;
      else {
        switch (lu(u)) {
          case 1:
            o = li;
            break;
          case 4:
            o = Nt;
            break;
          case 16:
            o = bi;
            break;
          case 536870912:
            o = ru;
            break;
          default:
            o = bi;
        }
        o = Sp(o, zu.bind(null, n));
      }
      n.callbackPriority = a, n.callbackNode = o;
    }
  }
  function zu(n, a) {
    if (Ll = -1, Nl = 0, Ft & 6)
      throw Error(v(327));
    var o = n.callbackNode;
    if (Vu() && n.callbackNode !== o)
      return null;
    var u = $r(n, n === jn ? yr : 0);
    if (u === 0)
      return null;
    if (u & 30 || u & n.expiredLanes || a)
      a = Ef(n, u);
    else {
      a = u;
      var c = Ft;
      Ft |= 2;
      var h = Sf();
      (jn !== n || yr !== a) && (ro = null, Fu = Ht() + 500, Il(n, a));
      do
        try {
          fg();
          break;
        } catch (x) {
          Fh(n, x);
        }
      while (1);
      Wd(), Ws.current = h, Ft = c, Bn !== null ? a = 0 : (jn = null, yr = 0, a = sr);
    }
    if (a !== 0) {
      if (a === 2 && (c = bo(n), c !== 0 && (u = c, a = vp(n, c))), a === 1)
        throw o = Gs, Il(n, 0), Ka(n, u), zr(n, Ht()), o;
      if (a === 6)
        Ka(n, u);
      else {
        if (c = n.current.alternate, !(u & 30) && !hp(c) && (a = Ef(n, u), a === 2 && (h = bo(n), h !== 0 && (u = h, a = vp(n, h))), a === 1))
          throw o = Gs, Il(n, 0), Ka(n, u), zr(n, Ht()), o;
        switch (n.finishedWork = c, n.finishedLanes = u, a) {
          case 0:
          case 1:
            throw Error(v(345));
          case 2:
            Ul(n, Wr, ro);
            break;
          case 3:
            if (Ka(n, u), (u & 130023424) === u && (a = pp + 500 - Ht(), 10 < a)) {
              if ($r(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & u) !== u) {
                Fr(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = ml(Ul.bind(null, n, Wr, ro), a);
              break;
            }
            Ul(n, Wr, ro);
            break;
          case 4:
            if (Ka(n, u), (u & 4194240) === u)
              break;
            for (a = n.eventTimes, c = -1; 0 < u; ) {
              var C = 31 - Hr(u);
              h = 1 << C, C = a[C], C > c && (c = C), u &= ~h;
            }
            if (u = c, u = Ht() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * vf(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = ml(Ul.bind(null, n, Wr, ro), u);
              break;
            }
            Ul(n, Wr, ro);
            break;
          case 5:
            Ul(n, Wr, ro);
            break;
          default:
            throw Error(v(329));
        }
      }
    }
    return zr(n, Ht()), n.callbackNode === o ? zu.bind(null, n) : null;
  }
  function vp(n, a) {
    var o = Ml;
    return n.current.memoizedState.isDehydrated && (Il(n, a).flags |= 256), n = Ef(n, a), n !== 2 && (a = Wr, Wr = o, a !== null && Ys(a)), n;
  }
  function Ys(n) {
    Wr === null ? Wr = n : Wr.push.apply(Wr, n);
  }
  function hp(n) {
    for (var a = n; ; ) {
      if (a.flags & 16384) {
        var o = a.updateQueue;
        if (o !== null && (o = o.stores, o !== null))
          for (var u = 0; u < o.length; u++) {
            var c = o[u], h = c.getSnapshot;
            c = c.value;
            try {
              if (!Pa(h(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (o = a.child, a.subtreeFlags & 16384 && o !== null)
        o.return = a, a = o;
      else {
        if (a === n)
          break;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === n)
            return !0;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
    }
    return !0;
  }
  function Ka(n, a) {
    for (a &= ~Uu, a &= ~hf, n.suspendedLanes |= a, n.pingedLanes &= ~a, n = n.expirationTimes; 0 < a; ) {
      var o = 31 - Hr(a), u = 1 << o;
      n[o] = -1, a &= ~u;
    }
  }
  function Uh(n) {
    if (Ft & 6)
      throw Error(v(327));
    Vu();
    var a = $r(n, 0);
    if (!(a & 1))
      return zr(n, Ht()), null;
    var o = Ef(n, a);
    if (n.tag !== 0 && o === 2) {
      var u = bo(n);
      u !== 0 && (a = u, o = vp(n, u));
    }
    if (o === 1)
      throw o = Gs, Il(n, 0), Ka(n, a), zr(n, Ht()), o;
    if (o === 6)
      throw Error(v(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = a, Ul(n, Wr, ro), zr(n, Ht()), null;
  }
  function Pu(n, a) {
    var o = Ft;
    Ft |= 1;
    try {
      return n(a);
    } finally {
      Ft = o, Ft === 0 && (Fu = Ht() + 500, vr && sa());
    }
  }
  function Qo(n) {
    Yo !== null && Yo.tag === 0 && !(Ft & 6) && Vu();
    var a = Ft;
    Ft |= 1;
    var o = Ur.transition, u = Jt;
    try {
      if (Ur.transition = null, Jt = 1, n)
        return n();
    } finally {
      Jt = u, Ur.transition = o, Ft = a, !(Ft & 6) && sa();
    }
  }
  function mp() {
    Da = Iu.current, nn(Iu);
  }
  function Il(n, a) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, ch(o)), Bn !== null)
      for (o = Bn.return; o !== null; ) {
        var u = o;
        switch (Vd(u), u.tag) {
          case 1:
            u = u.type.childContextTypes, u != null && $a();
            break;
          case 3:
            Ho(), nn($n), nn(gt), Bc();
            break;
          case 5:
            Ut(u);
            break;
          case 4:
            Ho();
            break;
          case 13:
            nn(ft);
            break;
          case 19:
            nn(ft);
            break;
          case 10:
            jo(u.type._context);
            break;
          case 22:
          case 23:
            mp();
        }
        o = o.return;
      }
    if (jn = n, Bn = n = qo(n.current, null), yr = Da = a, sr = 0, Gs = null, Uu = hf = no = 0, Wr = Ml = null, Tr !== null) {
      for (a = 0; a < Tr.length; a++)
        if (o = Tr[a], u = o.interleaved, u !== null) {
          o.interleaved = null;
          var c = u.next, h = o.pending;
          if (h !== null) {
            var C = h.next;
            h.next = c, u.next = C;
          }
          o.pending = u;
        }
      Tr = null;
    }
    return n;
  }
  function Fh(n, a) {
    do {
      var o = Bn;
      try {
        if (Wd(), Wc.current = uf, dt) {
          for (var u = On.memoizedState; u !== null; ) {
            var c = u.queue;
            c !== null && (c.pending = null), u = u.next;
          }
          dt = !1;
        }
        if (Cl = 0, Bt = se = On = null, Di = !1, ka = 0, dp.current = null, o === null || o.return === null) {
          sr = 1, Gs = a, Bn = null;
          break;
        }
        e: {
          var h = n, C = o.return, x = o, I = a;
          if (a = yr, x.flags |= 32768, I !== null && typeof I == "object" && typeof I.then == "function") {
            var X = I, te = x, Ce = te.tag;
            if (!(te.mode & 1) && (Ce === 0 || Ce === 11 || Ce === 15)) {
              var Ee = te.alternate;
              Ee ? (te.updateQueue = Ee.updateQueue, te.memoizedState = Ee.memoizedState, te.lanes = Ee.lanes) : (te.updateQueue = null, te.memoizedState = null);
            }
            var Pe = ep(C);
            if (Pe !== null) {
              Pe.flags &= -257, tp(Pe, C, x, h, a), Pe.mode & 1 && Rh(h, X, a), a = Pe, I = X;
              var We = a.updateQueue;
              if (We === null) {
                var Ke = /* @__PURE__ */ new Set();
                Ke.add(I), a.updateQueue = Ke;
              } else
                We.add(I);
              break e;
            } else {
              if (!(a & 1)) {
                Rh(h, X, a), yp();
                break e;
              }
              I = Error(v(426));
            }
          } else if (_n && x.mode & 1) {
            var Kn = ep(C);
            if (Kn !== null) {
              !(Kn.flags & 65536) && (Kn.flags |= 256), tp(Kn, C, x, h, a), $d(Ou(I, x));
              break e;
            }
          }
          h = I = Ou(I, x), sr !== 4 && (sr = 2), Ml === null ? Ml = [h] : Ml.push(h), h = C;
          do {
            switch (h.tag) {
              case 3:
                h.flags |= 65536, a &= -a, h.lanes |= a;
                var B = bh(h, I, a);
                Qd(h, B);
                break e;
              case 1:
                x = I;
                var F = h.type, Q = h.stateNode;
                if (!(h.flags & 128) && (typeof F.getDerivedStateFromError == "function" || Q !== null && typeof Q.componentDidCatch == "function" && (Li === null || !Li.has(Q)))) {
                  h.flags |= 65536, a &= -a, h.lanes |= a;
                  var Oe = js(h, x, a);
                  Qd(h, Oe);
                  break e;
                }
            }
            h = h.return;
          } while (h !== null);
        }
        gp(o);
      } catch (Ze) {
        a = Ze, Bn === o && o !== null && (Bn = o = o.return);
        continue;
      }
      break;
    } while (1);
  }
  function Sf() {
    var n = Ws.current;
    return Ws.current = uf, n === null ? uf : n;
  }
  function yp() {
    (sr === 0 || sr === 3 || sr === 2) && (sr = 4), jn === null || !(no & 268435455) && !(hf & 268435455) || Ka(jn, yr);
  }
  function Ef(n, a) {
    var o = Ft;
    Ft |= 2;
    var u = Sf();
    (jn !== n || yr !== a) && (ro = null, Il(n, a));
    do
      try {
        cg();
        break;
      } catch (c) {
        Fh(n, c);
      }
    while (1);
    if (Wd(), Ft = o, Ws.current = u, Bn !== null)
      throw Error(v(261));
    return jn = null, yr = 0, sr;
  }
  function cg() {
    for (; Bn !== null; )
      jh(Bn);
  }
  function fg() {
    for (; Bn !== null && !wi(); )
      jh(Bn);
  }
  function jh(n) {
    var a = Ph(n.alternate, n, Da);
    n.memoizedProps = n.pendingProps, a === null ? gp(n) : Bn = a, dp.current = null;
  }
  function gp(n) {
    var a = n;
    do {
      var o = a.alternate;
      if (n = a.return, a.flags & 32768) {
        if (o = up(o, a), o !== null) {
          o.flags &= 32767, Bn = o;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          sr = 6, Bn = null;
          return;
        }
      } else if (o = sg(o, a, Da), o !== null) {
        Bn = o;
        return;
      }
      if (a = a.sibling, a !== null) {
        Bn = a;
        return;
      }
      Bn = a = n;
    } while (a !== null);
    sr === 0 && (sr = 5);
  }
  function Ul(n, a, o) {
    var u = Jt, c = Ur.transition;
    try {
      Ur.transition = null, Jt = 1, dg(n, a, o, u);
    } finally {
      Ur.transition = c, Jt = u;
    }
    return null;
  }
  function dg(n, a, o, u) {
    do
      Vu();
    while (Yo !== null);
    if (Ft & 6)
      throw Error(v(327));
    o = n.finishedWork;
    var c = n.finishedLanes;
    if (o === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current)
      throw Error(v(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var h = o.lanes | o.childLanes;
    if (vd(n, h), n === jn && (Bn = jn = null, yr = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || Go || (Go = !0, Sp(bi, function() {
      return Vu(), null;
    })), h = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || h) {
      h = Ur.transition, Ur.transition = null;
      var C = Jt;
      Jt = 1;
      var x = Ft;
      Ft |= 4, dp.current = null, Dh(n, o), Ah(o, n), _c(hl), za = !!Ld, hl = Ld = null, n.current = o, Lh(o), nu(), Ft = x, Jt = C, Ur.transition = h;
    } else
      n.current = o;
    if (Go && (Go = !1, Yo = n, yf = c), h = n.pendingLanes, h === 0 && (Li = null), fs(o.stateNode), zr(n, Ht()), a !== null)
      for (u = n.onRecoverableError, o = 0; o < a.length; o++)
        c = a[o], u(c.value, {
          componentStack: c.stack,
          digest: c.digest
        });
    if (mf)
      throw mf = !1, n = Al, Al = null, n;
    return yf & 1 && n.tag !== 0 && Vu(), h = n.pendingLanes, h & 1 ? n === gf ? ju++ : (ju = 0, gf = n) : ju = 0, sa(), null;
  }
  function Vu() {
    if (Yo !== null) {
      var n = lu(yf), a = Ur.transition, o = Jt;
      try {
        if (Ur.transition = null, Jt = 16 > n ? 16 : n, Yo === null)
          var u = !1;
        else {
          if (n = Yo, Yo = null, yf = 0, Ft & 6)
            throw Error(v(331));
          var c = Ft;
          for (Ft |= 4, Be = n.current; Be !== null; ) {
            var h = Be, C = h.child;
            if (Be.flags & 16) {
              var x = h.deletions;
              if (x !== null) {
                for (var I = 0; I < x.length; I++) {
                  var X = x[I];
                  for (Be = X; Be !== null; ) {
                    var te = Be;
                    switch (te.tag) {
                      case 0:
                      case 11:
                      case 15:
                        $s(8, te, h);
                    }
                    var Ce = te.child;
                    if (Ce !== null)
                      Ce.return = te, Be = Ce;
                    else
                      for (; Be !== null; ) {
                        te = Be;
                        var Ee = te.sibling, Pe = te.return;
                        if (cp(te), te === X) {
                          Be = null;
                          break;
                        }
                        if (Ee !== null) {
                          Ee.return = Pe, Be = Ee;
                          break;
                        }
                        Be = Pe;
                      }
                  }
                }
                var We = h.alternate;
                if (We !== null) {
                  var Ke = We.child;
                  if (Ke !== null) {
                    We.child = null;
                    do {
                      var Kn = Ke.sibling;
                      Ke.sibling = null, Ke = Kn;
                    } while (Ke !== null);
                  }
                }
                Be = h;
              }
            }
            if (h.subtreeFlags & 2064 && C !== null)
              C.return = h, Be = C;
            else
              e:
                for (; Be !== null; ) {
                  if (h = Be, h.flags & 2048)
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        $s(9, h, h.return);
                    }
                  var B = h.sibling;
                  if (B !== null) {
                    B.return = h.return, Be = B;
                    break e;
                  }
                  Be = h.return;
                }
          }
          var F = n.current;
          for (Be = F; Be !== null; ) {
            C = Be;
            var Q = C.child;
            if (C.subtreeFlags & 2064 && Q !== null)
              Q.return = C, Be = Q;
            else
              e:
                for (C = F; Be !== null; ) {
                  if (x = Be, x.flags & 2048)
                    try {
                      switch (x.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Bs(9, x);
                      }
                    } catch (Ze) {
                      Wn(x, x.return, Ze);
                    }
                  if (x === C) {
                    Be = null;
                    break e;
                  }
                  var Oe = x.sibling;
                  if (Oe !== null) {
                    Oe.return = x.return, Be = Oe;
                    break e;
                  }
                  Be = x.return;
                }
          }
          if (Ft = c, sa(), ra && typeof ra.onPostCommitFiberRoot == "function")
            try {
              ra.onPostCommitFiberRoot(Eo, n);
            } catch {
            }
          u = !0;
        }
        return u;
      } finally {
        Jt = o, Ur.transition = a;
      }
    }
    return !1;
  }
  function zh(n, a, o) {
    a = Ou(o, a), a = bh(n, a, 1), n = Po(n, a, 1), a = Fr(), n !== null && (Hi(n, 1, a), zr(n, a));
  }
  function Wn(n, a, o) {
    if (n.tag === 3)
      zh(n, n, o);
    else
      for (; a !== null; ) {
        if (a.tag === 3) {
          zh(a, n, o);
          break;
        } else if (a.tag === 1) {
          var u = a.stateNode;
          if (typeof a.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Li === null || !Li.has(u))) {
            n = Ou(o, n), n = js(a, n, 1), a = Po(a, n, 1), n = Fr(), a !== null && (Hi(a, 1, n), zr(a, n));
            break;
          }
        }
        a = a.return;
      }
  }
  function pg(n, a, o) {
    var u = n.pingCache;
    u !== null && u.delete(a), a = Fr(), n.pingedLanes |= n.suspendedLanes & o, jn === n && (yr & o) === o && (sr === 4 || sr === 3 && (yr & 130023424) === yr && 500 > Ht() - pp ? Il(n, 0) : Uu |= o), zr(n, a);
  }
  function Cf(n, a) {
    a === 0 && (n.mode & 1 ? (a = Co, Co <<= 1, !(Co & 130023424) && (Co = 4194304)) : a = 1);
    var o = Fr();
    n = Xi(n, a), n !== null && (Hi(n, a, o), zr(n, o));
  }
  function vg(n) {
    var a = n.memoizedState, o = 0;
    a !== null && (o = a.retryLane), Cf(n, o);
  }
  function hg(n, a) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var u = n.stateNode, c = n.memoizedState;
        c !== null && (o = c.retryLane);
        break;
      case 19:
        u = n.stateNode;
        break;
      default:
        throw Error(v(314));
    }
    u !== null && u.delete(a), Cf(n, o);
  }
  var Ph;
  Ph = function(a, o, u) {
    if (a !== null)
      if (a.memoizedProps !== o.pendingProps || $n.current)
        tr = !0;
      else {
        if (!(a.lanes & u) && !(o.flags & 128))
          return tr = !1, eo(a, o, u);
        tr = !!(a.flags & 131072);
      }
    else
      tr = !1, _n && o.flags & 1048576 && Pd(o, Cu, o.index);
    switch (o.lanes = 0, o.tag) {
      case 2:
        var c = o.type;
        Nr(a, o), a = o.pendingProps;
        var h = Ha(o, gt.current);
        Ne(o, u), h = $o(null, o, c, a, h, u);
        var C = bl();
        return o.flags |= 1, typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0 ? (o.tag = 1, o.memoizedState = null, o.updateQueue = null, An(c) ? (C = !0, Lc(o)) : C = !1, o.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, Yd(o), h.updater = Vc, o.stateNode = h, h._reactInternals = o, Hc(o, c, a, u), o = xh(null, o, c, !0, C, u)) : (o.tag = 0, _n && C && Nc(o), or(null, o, h, u), o = o.child), o;
      case 16:
        c = o.elementType;
        e: {
          switch (Nr(a, o), a = o.pendingProps, h = c._init, c = h(c._payload), o.type = c, h = o.tag = yg(c), a = Oa(c, a), h) {
            case 0:
              o = ku(null, o, c, a, u);
              break e;
            case 1:
              o = np(null, o, c, a, u);
              break e;
            case 11:
              o = Wo(null, o, c, a, u);
              break e;
            case 14:
              o = cf(null, o, c, Oa(c.type, a), u);
              break e;
          }
          throw Error(v(306, c, ""));
        }
        return o;
      case 0:
        return c = o.type, h = o.pendingProps, h = o.elementType === c ? h : Oa(c, h), ku(a, o, c, h, u);
      case 1:
        return c = o.type, h = o.pendingProps, h = o.elementType === c ? h : Oa(c, h), np(a, o, c, h, u);
      case 3:
        e: {
          if (_h(o), a === null)
            throw Error(v(387));
          c = o.pendingProps, C = o.memoizedState, h = C.element, ir(a, o), Vo(o, c, null, u);
          var x = o.memoizedState;
          if (c = x.element, C.isDehydrated)
            if (C = {
              element: c,
              isDehydrated: !1,
              cache: x.cache,
              pendingSuspenseBoundaries: x.pendingSuspenseBoundaries,
              transitions: x.transitions
            }, o.updateQueue.baseState = C, o.memoizedState = C, o.flags & 256) {
              h = Ou(Error(v(423)), o), o = ff(a, o, c, u, h);
              break e;
            } else if (c !== h) {
              h = Ou(Error(v(424)), o), o = ff(a, o, c, u, h);
              break e;
            } else
              for (da = pi(o.stateNode.containerInfo.firstChild), _a = o, _n = !0, Wa = null, u = Th(o, null, c, u), o.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (Un(), c === h) {
              o = wr(a, o, u);
              break e;
            }
            or(a, o, c, u);
          }
          o = o.child;
        }
        return o;
      case 5:
        return st(o), a === null && Uc(o), c = o.type, h = o.pendingProps, C = a !== null ? a.memoizedProps : null, x = h.children, xs(c, h) ? x = null : C !== null && xs(c, C) && (o.flags |= 32), Mt(a, o), or(a, o, x, u), o.child;
      case 6:
        return a === null && Uc(o), null;
      case 13:
        return ap(a, o, u);
      case 4:
        return Kd(o, o.stateNode.containerInfo), c = o.pendingProps, a === null ? o.child = wu(o, null, c, u) : or(a, o, c, u), o.child;
      case 11:
        return c = o.type, h = o.pendingProps, h = o.elementType === c ? h : Oa(c, h), Wo(a, o, c, h, u);
      case 7:
        return or(a, o, o.pendingProps, u), o.child;
      case 8:
        return or(a, o, o.pendingProps.children, u), o.child;
      case 12:
        return or(a, o, o.pendingProps.children, u), o.child;
      case 10:
        e: {
          if (c = o.type._context, h = o.pendingProps, C = o.memoizedProps, x = h.value, un(ki, c._currentValue), c._currentValue = x, C !== null)
            if (Pa(C.value, x)) {
              if (C.children === h.children && !$n.current) {
                o = wr(a, o, u);
                break e;
              }
            } else
              for (C = o.child, C !== null && (C.return = o); C !== null; ) {
                var I = C.dependencies;
                if (I !== null) {
                  x = C.child;
                  for (var X = I.firstContext; X !== null; ) {
                    if (X.context === c) {
                      if (C.tag === 1) {
                        X = Zi(-1, u & -u), X.tag = 2;
                        var te = C.updateQueue;
                        if (te !== null) {
                          te = te.shared;
                          var Ce = te.pending;
                          Ce === null ? X.next = X : (X.next = Ce.next, Ce.next = X), te.pending = X;
                        }
                      }
                      C.lanes |= u, X = C.alternate, X !== null && (X.lanes |= u), hr(C.return, u, o), I.lanes |= u;
                      break;
                    }
                    X = X.next;
                  }
                } else if (C.tag === 10)
                  x = C.type === o.type ? null : C.child;
                else if (C.tag === 18) {
                  if (x = C.return, x === null)
                    throw Error(v(341));
                  x.lanes |= u, I = x.alternate, I !== null && (I.lanes |= u), hr(x, u, o), x = C.sibling;
                } else
                  x = C.child;
                if (x !== null)
                  x.return = C;
                else
                  for (x = C; x !== null; ) {
                    if (x === o) {
                      x = null;
                      break;
                    }
                    if (C = x.sibling, C !== null) {
                      C.return = x.return, x = C;
                      break;
                    }
                    x = x.return;
                  }
                C = x;
              }
          or(a, o, h.children, u), o = o.child;
        }
        return o;
      case 9:
        return h = o.type, c = o.pendingProps.children, Ne(o, u), h = qn(h), c = c(h), o.flags |= 1, or(a, o, c, u), o.child;
      case 14:
        return c = o.type, h = Oa(c, o.pendingProps), h = Oa(c.type, h), cf(a, o, c, h, u);
      case 15:
        return ha(a, o, o.type, o.pendingProps, u);
      case 17:
        return c = o.type, h = o.pendingProps, h = o.elementType === c ? h : Oa(c, h), Nr(a, o), o.tag = 1, An(c) ? (a = !0, Lc(o)) : a = !1, Ne(o, u), gh(o, c, h), Hc(o, c, h, u), xh(null, o, c, !0, a, u);
      case 19:
        return lp(a, o, u);
      case 22:
        return Ol(a, o, u);
    }
    throw Error(v(156, o.tag));
  };
  function Sp(n, a) {
    return bn(n, a);
  }
  function mg(n, a, o, u) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = a, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Xa(n, a, o, u) {
    return new mg(n, a, o, u);
  }
  function Ep(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function yg(n) {
    if (typeof n == "function")
      return Ep(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === _t)
        return 11;
      if (n === Te)
        return 14;
    }
    return 2;
  }
  function qo(n, a) {
    var o = n.alternate;
    return o === null ? (o = Xa(n.tag, a, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = a, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, a = n.dependencies, o.dependencies = a === null ? null : {
      lanes: a.lanes,
      firstContext: a.firstContext
    }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function Tf(n, a, o, u, c, h) {
    var C = 2;
    if (u = n, typeof n == "function")
      Ep(n) && (C = 1);
    else if (typeof n == "string")
      C = 5;
    else
      e:
        switch (n) {
          case _e:
            return Fl(o.children, c, h, a);
          case Qe:
            C = 8, c |= 8;
            break;
          case ut:
            return n = Xa(12, o, a, c | 2), n.elementType = ut, n.lanes = h, n;
          case Ue:
            return n = Xa(13, o, a, c), n.elementType = Ue, n.lanes = h, n;
          case ge:
            return n = Xa(19, o, a, c), n.elementType = ge, n.lanes = h, n;
          case ye:
            return Qs(o, c, h, a);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case pt:
                  C = 10;
                  break e;
                case vt:
                  C = 9;
                  break e;
                case _t:
                  C = 11;
                  break e;
                case Te:
                  C = 14;
                  break e;
                case xe:
                  C = 16, u = null;
                  break e;
              }
            throw Error(v(130, n == null ? n : typeof n, ""));
        }
    return a = Xa(C, o, a, c), a.elementType = n, a.type = u, a.lanes = h, a;
  }
  function Fl(n, a, o, u) {
    return n = Xa(7, n, u, a), n.lanes = o, n;
  }
  function Qs(n, a, o, u) {
    return n = Xa(22, n, u, a), n.elementType = ye, n.lanes = o, n.stateNode = {
      isHidden: !1
    }, n;
  }
  function qs(n, a, o) {
    return n = Xa(6, n, null, a), n.lanes = o, n;
  }
  function jl(n, a, o) {
    return a = Xa(4, n.children !== null ? n.children : [], n.key, a), a.lanes = o, a.stateNode = {
      containerInfo: n.containerInfo,
      pendingChildren: null,
      implementation: n.implementation
    }, a;
  }
  function gg(n, a, o, u, c) {
    this.tag = a, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ou(0), this.expirationTimes = ou(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ou(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function wf(n, a, o, u, c, h, C, x, I) {
    return n = new gg(n, a, o, x, I), a === 1 ? (a = 1, h === !0 && (a |= 8)) : a = 0, h = Xa(3, null, null, a), n.current = h, h.stateNode = n, h.memoizedState = {
      element: u,
      isDehydrated: o,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }, Yd(h), n;
  }
  function Vh(n, a, o) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: de,
      key: u == null ? null : "" + u,
      children: n,
      containerInfo: a,
      implementation: o
    };
  }
  function Cp(n) {
    if (!n)
      return Oi;
    n = n._reactInternals;
    e: {
      if (xt(n) !== n || n.tag !== 1)
        throw Error(v(170));
      var a = n;
      do {
        switch (a.tag) {
          case 3:
            a = a.stateNode.context;
            break e;
          case 1:
            if (An(a.type)) {
              a = a.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        a = a.return;
      } while (a !== null);
      throw Error(v(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (An(o))
        return ks(n, o, a);
    }
    return a;
  }
  function Hh(n, a, o, u, c, h, C, x, I) {
    return n = wf(o, u, !0, n, c, h, C, x, I), n.context = Cp(null), o = n.current, u = Fr(), c = nr(o), h = Zi(u, c), h.callback = a ?? null, Po(o, h, c), n.current.lanes = c, Hi(n, c, u), zr(n, u), n;
  }
  function Ks(n, a, o, u) {
    var c = a.current, h = Fr(), C = nr(c);
    return o = Cp(o), a.context === null ? a.context = o : a.pendingContext = o, a = Zi(h, C), a.payload = {
      element: n
    }, u = u === void 0 ? null : u, u !== null && (a.callback = u), n = Po(c, a, C), n !== null && (jr(n, c, C, h), Pc(n, c, C)), C;
  }
  function bf(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function $h(n, a) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < a ? o : a;
    }
  }
  function Tp(n, a) {
    $h(n, a), (n = n.alternate) && $h(n, a);
  }
  function Bh() {
    return null;
  }
  var wp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Rf(n) {
    this._internalRoot = n;
  }
  ao.prototype.render = Rf.prototype.render = function(n) {
    var a = this._internalRoot;
    if (a === null)
      throw Error(v(409));
    Ks(n, a, null, null);
  }, ao.prototype.unmount = Rf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var a = n.containerInfo;
      Qo(function() {
        Ks(null, n, null, null);
      }), a[qi] = null;
    }
  };
  function ao(n) {
    this._internalRoot = n;
  }
  ao.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var a = su();
      n = {
        blockedOn: null,
        target: n,
        priority: a
      };
      for (var o = 0; o < ln.length && a !== 0 && a < ln[o].priority; o++)
        ;
      ln.splice(o, 0, n), o === 0 && Ec(n);
    }
  };
  function bp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function xf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Wh() {
  }
  function Sg(n, a, o, u, c) {
    if (c) {
      if (typeof u == "function") {
        var h = u;
        u = function() {
          var te = bf(C);
          h.call(te);
        };
      }
      var C = Hh(a, u, n, 0, null, !1, !1, "", Wh);
      return n._reactRootContainer = C, n[qi] = C.current, Su(n.nodeType === 8 ? n.parentNode : n), Qo(), C;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof u == "function") {
      var x = u;
      u = function() {
        var te = bf(I);
        x.call(te);
      };
    }
    var I = wf(n, 0, !1, null, null, !1, !1, "", Wh);
    return n._reactRootContainer = I, n[qi] = I.current, Su(n.nodeType === 8 ? n.parentNode : n), Qo(function() {
      Ks(a, I, o, u);
    }), I;
  }
  function _f(n, a, o, u, c) {
    var h = o._reactRootContainer;
    if (h) {
      var C = h;
      if (typeof c == "function") {
        var x = c;
        c = function() {
          var X = bf(C);
          x.call(X);
        };
      }
      Ks(a, C, n, c);
    } else
      C = Sg(o, a, n, c, u);
    return bf(C);
  }
  ul = function(a) {
    switch (a.tag) {
      case 3:
        var o = a.stateNode;
        if (o.current.memoizedState.isDehydrated) {
          var u = ui(o.pendingLanes);
          u !== 0 && (Ri(o, u | 1), zr(o, Ht()), !(Ft & 6) && (Fu = Ht() + 500, sa()));
        }
        break;
      case 13:
        Qo(function() {
          var c = Xi(a, 1);
          if (c !== null) {
            var h = Fr();
            jr(c, a, 1, h);
          }
        }), Tp(a, 1);
    }
  }, uu = function(a) {
    if (a.tag === 13) {
      var o = Xi(a, 134217728);
      if (o !== null) {
        var u = Fr();
        jr(o, a, 134217728, u);
      }
      Tp(a, 134217728);
    }
  }, qt = function(a) {
    if (a.tag === 13) {
      var o = nr(a), u = Xi(a, o);
      if (u !== null) {
        var c = Fr();
        jr(u, a, o, c);
      }
      Tp(a, o);
    }
  }, su = function() {
    return Jt;
  }, cu = function(a, o) {
    var u = Jt;
    try {
      return Jt = a, o();
    } finally {
      Jt = u;
    }
  }, Pr = function(a, o, u) {
    switch (o) {
      case "input":
        if (ct(a, u), o = u.name, u.type === "radio" && o != null) {
          for (u = a; u.parentNode; )
            u = u.parentNode;
          for (u = u.querySelectorAll("input[name=" + JSON.stringify("" + o) + '][type="radio"]'), o = 0; o < u.length; o++) {
            var c = u[o];
            if (c !== a && c.form === a.form) {
              var h = it(c);
              if (!h)
                throw Error(v(90));
              ve(c), ct(c, h);
            }
          }
        }
        break;
      case "textarea":
        et(a, u);
        break;
      case "select":
        o = u.value, o != null && Yn(a, !!u.multiple, o, !1);
    }
  }, ll = Pu, tu = Qo;
  var Eg = {
    usingClientEntryPoint: !1,
    Events: [Os, Eu, it, Fa, yo, Pu]
  }, Hu = {
    findFiberByHostInstance: Va,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
  }, Cg = {
    bundleType: Hu.bundleType,
    version: Hu.version,
    rendererPackageName: Hu.rendererPackageName,
    rendererConfig: Hu.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ie.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(a) {
      return a = pn(a), a === null ? null : a.stateNode;
    },
    findFiberByHostInstance: Hu.findFiberByHostInstance || Bh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Of = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Of.isDisabled && Of.supportsFiber)
      try {
        Eo = Of.inject(Cg), ra = Of;
      } catch {
      }
  }
  return ri.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Eg, ri.createPortal = function(n, a) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!bp(a))
      throw Error(v(200));
    return Vh(n, a, null, o);
  }, ri.createRoot = function(n, a) {
    if (!bp(n))
      throw Error(v(299));
    var o = !1, u = "", c = wp;
    return a != null && (a.unstable_strictMode === !0 && (o = !0), a.identifierPrefix !== void 0 && (u = a.identifierPrefix), a.onRecoverableError !== void 0 && (c = a.onRecoverableError)), a = wf(n, 1, !1, null, null, o, !1, u, c), n[qi] = a.current, Su(n.nodeType === 8 ? n.parentNode : n), new Rf(a);
  }, ri.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var a = n._reactInternals;
    if (a === void 0)
      throw typeof n.render == "function" ? Error(v(188)) : (n = Object.keys(n).join(","), Error(v(268, n)));
    return n = pn(a), n = n === null ? null : n.stateNode, n;
  }, ri.flushSync = function(n) {
    return Qo(n);
  }, ri.hydrate = function(n, a, o) {
    if (!xf(a))
      throw Error(v(200));
    return _f(null, n, a, !0, o);
  }, ri.hydrateRoot = function(n, a, o) {
    if (!bp(n))
      throw Error(v(405));
    var u = o != null && o.hydratedSources || null, c = !1, h = "", C = wp;
    if (o != null && (o.unstable_strictMode === !0 && (c = !0), o.identifierPrefix !== void 0 && (h = o.identifierPrefix), o.onRecoverableError !== void 0 && (C = o.onRecoverableError)), a = Hh(a, null, n, 1, o ?? null, c, !1, h, C), n[qi] = a.current, Su(n), u)
      for (n = 0; n < u.length; n++)
        o = u[n], c = o._getVersion, c = c(o._source), a.mutableSourceEagerHydrationData == null ? a.mutableSourceEagerHydrationData = [o, c] : a.mutableSourceEagerHydrationData.push(o, c);
    return new ao(a);
  }, ri.render = function(n, a, o) {
    if (!xf(a))
      throw Error(v(200));
    return _f(null, n, a, !1, o);
  }, ri.unmountComponentAtNode = function(n) {
    if (!xf(n))
      throw Error(v(40));
    return n._reactRootContainer ? (Qo(function() {
      _f(null, null, n, !1, function() {
        n._reactRootContainer = null, n[qi] = null;
      });
    }), !0) : !1;
  }, ri.unstable_batchedUpdates = Pu, ri.unstable_renderSubtreeIntoContainer = function(n, a, o, u) {
    if (!xf(o))
      throw Error(v(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(v(38));
    return _f(n, a, o, !1, u);
  }, ri.version = "18.2.0-next-9e3b772b8-20220608", ri;
}
var ai = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lw;
function tM() {
  return Lw || (Lw = 1, {}.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var f = eu(), p = Cb(), v = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, S = !1;
    function T(e) {
      S = e;
    }
    function b(e) {
      if (!S) {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          r[i - 1] = arguments[i];
        L("warn", e, r);
      }
    }
    function y(e) {
      if (!S) {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          r[i - 1] = arguments[i];
        L("error", e, r);
      }
    }
    function L(e, t, r) {
      {
        var i = v.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", r = r.concat([l]));
        var s = r.map(function(d) {
          return String(d);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var k = 0, A = 1, N = 2, M = 3, $ = 4, z = 5, V = 6, ee = 7, Z = 8, we = 9, ce = 10, ae = 11, ie = 12, H = 13, de = 14, _e = 15, Qe = 16, ut = 17, pt = 18, vt = 19, _t = 21, Ue = 22, ge = 23, Te = 24, xe = 25, ye = !0, J = !1, Me = !1, O = !1, oe = !1, re = !0, pe = !1, me = !1, De = !0, P = !0, je = !0, fe = /* @__PURE__ */ new Set(), at = {}, ht = {};
    function Ot(e, t) {
      ve(e, t), ve(e + "Capture", t);
    }
    function ve(e, t) {
      at[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), at[e] = t;
      {
        var r = e.toLowerCase();
        ht[r] = e, e === "onDoubleClick" && (ht.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        fe.add(t[i]);
    }
    var bt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", zt = Object.prototype.hasOwnProperty;
    function qe(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, r = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return r;
      }
    }
    function Pt(e) {
      try {
        return ct(e), !1;
      } catch {
        return !0;
      }
    }
    function ct(e) {
      return "" + e;
    }
    function Zt(e, t) {
      if (Pt(e))
        return y("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, qe(e)), ct(e);
    }
    function Zn(e) {
      if (Pt(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), ct(e);
    }
    function Vt(e, t) {
      if (Pt(e))
        return y("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, qe(e)), ct(e);
    }
    function Yn(e, t) {
      if (Pt(e))
        return y("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, qe(e)), ct(e);
    }
    function Jn(e) {
      if (Pt(e))
        return y("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), ct(e);
    }
    function dn(e) {
      if (Pt(e))
        return y("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", qe(e)), ct(e);
    }
    var et = 0, Lt = 1, fr = 2, Sn = 3, Mn = 4, Si = 5, Ca = 6, Ae = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", tt = Ae + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", At = new RegExp("^[" + Ae + "][" + tt + "]*$"), Qt = {}, rn = {};
    function Qn(e) {
      return zt.call(rn, e) ? !0 : zt.call(Qt, e) ? !1 : At.test(e) ? (rn[e] = !0, !0) : (Qt[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function Nn(e, t, r) {
      return t !== null ? t.type === et : r ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Ar(e, t, r, i) {
      if (r !== null && r.type === et)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (r !== null)
            return !r.acceptsBooleans;
          var l = e.toLowerCase().slice(0, 5);
          return l !== "data-" && l !== "aria-";
        }
        default:
          return !1;
      }
    }
    function cn(e, t, r, i) {
      if (t === null || typeof t > "u" || Ar(e, t, r, i))
        return !0;
      if (i)
        return !1;
      if (r !== null)
        switch (r.type) {
          case Sn:
            return !t;
          case Mn:
            return t === !1;
          case Si:
            return isNaN(t);
          case Ca:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Pr(e) {
      return on.hasOwnProperty(e) ? on[e] : null;
    }
    function an(e, t, r, i, l, s, d) {
      this.acceptsBooleans = t === fr || t === Sn || t === Mn, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = d;
    }
    var on = {}, oi = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    oi.forEach(function(e) {
      on[e] = new an(
        e,
        et,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], r = e[1];
      on[t] = new an(
        t,
        Lt,
        !1,
        // mustUseProperty
        r,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      on[e] = new an(
        e,
        fr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      on[e] = new an(
        e,
        fr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      on[e] = new an(
        e,
        Sn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      on[e] = new an(
        e,
        Sn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      on[e] = new an(
        e,
        Mn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      on[e] = new an(
        e,
        Ca,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      on[e] = new an(
        e,
        Si,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Fa = /[\-\:]([a-z])/g, yo = function(t) {
      return t[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Fa, yo);
      on[t] = new an(
        t,
        Lt,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Fa, yo);
      on[t] = new an(
        t,
        Lt,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Fa, yo);
      on[t] = new an(
        t,
        Lt,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      on[e] = new an(
        e,
        Lt,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ll = "xlinkHref";
    on[ll] = new an(
      "xlinkHref",
      Lt,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      on[e] = new an(
        e,
        Lt,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var tu = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Vi = !1;
    function go(e) {
      !Vi && tu.test(e) && (Vi = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Ta(e, t, r, i) {
      if (i.mustUseProperty) {
        var l = i.propertyName;
        return e[l];
      } else {
        Zt(r, t), i.sanitizeURL && go("" + r);
        var s = i.attributeName, d = null;
        if (i.type === Mn) {
          if (e.hasAttribute(s)) {
            var m = e.getAttribute(s);
            return m === "" ? !0 : cn(t, r, i, !1) ? m : m === "" + r ? r : m;
          }
        } else if (e.hasAttribute(s)) {
          if (cn(t, r, i, !1))
            return e.getAttribute(s);
          if (i.type === Sn)
            return r;
          d = e.getAttribute(s);
        }
        return cn(t, r, i, !1) ? d === null ? r : d : d === "" + r ? r : d;
      }
    }
    function Ei(e, t, r, i) {
      {
        if (!Qn(t))
          return;
        if (!e.hasAttribute(t))
          return r === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return Zt(r, t), l === "" + r ? r : l;
      }
    }
    function wa(e, t, r, i) {
      var l = Pr(t);
      if (!Nn(t, l, i)) {
        if (cn(t, r, l, i) && (r = null), i || l === null) {
          if (Qn(t)) {
            var s = t;
            r === null ? e.removeAttribute(s) : (Zt(r, t), e.setAttribute(s, "" + r));
          }
          return;
        }
        var d = l.mustUseProperty;
        if (d) {
          var m = l.propertyName;
          if (r === null) {
            var g = l.type;
            e[m] = g === Sn ? !1 : "";
          } else
            e[m] = r;
          return;
        }
        var w = l.attributeName, R = l.attributeNamespace;
        if (r === null)
          e.removeAttribute(w);
        else {
          var U = l.type, j;
          U === Sn || U === Mn && r === !0 ? j = "" : (Zt(r, w), j = "" + r, l.sanitizeURL && go(j.toString())), R ? e.setAttributeNS(R, w, j) : e.setAttribute(w, j);
        }
      }
    }
    var Ci = Symbol.for("react.element"), Vr = Symbol.for("react.portal"), ba = Symbol.for("react.fragment"), Ti = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), Se = Symbol.for("react.provider"), Le = Symbol.for("react.context"), ze = Symbol.for("react.forward_ref"), xt = Symbol.for("react.suspense"), $t = Symbol.for("react.suspense_list"), kt = Symbol.for("react.memo"), yt = Symbol.for("react.lazy"), pn = Symbol.for("react.scope"), wn = Symbol.for("react.debug_trace_mode"), bn = Symbol.for("react.offscreen"), Er = Symbol.for("react.legacy_hidden"), wi = Symbol.for("react.cache"), nu = Symbol.for("react.tracing_marker"), Ht = Symbol.iterator, pd = "@@iterator";
    function li(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ht && e[Ht] || e[pd];
      return typeof t == "function" ? t : null;
    }
    var Nt = Object.assign, bi = 0, So, ru, Eo, ra, fs, Hr, ds;
    function ps() {
    }
    ps.__reactDisabledLog = !0;
    function gc() {
      {
        if (bi === 0) {
          So = console.log, ru = console.info, Eo = console.warn, ra = console.error, fs = console.group, Hr = console.groupCollapsed, ds = console.groupEnd;
          var e = { configurable: !0, enumerable: !0, value: ps, writable: !0 };
          Object.defineProperties(console, { info: e, log: e, warn: e, error: e, group: e, groupCollapsed: e, groupEnd: e });
        }
        bi++;
      }
    }
    function au() {
      {
        if (bi--, bi === 0) {
          var e = { configurable: !0, enumerable: !0, writable: !0 };
          Object.defineProperties(console, { log: Nt({}, e, { value: So }), info: Nt({}, e, { value: ru }), warn: Nt({}, e, { value: Eo }), error: Nt({}, e, { value: ra }), group: Nt({}, e, { value: fs }), groupCollapsed: Nt({}, e, { value: Hr }), groupEnd: Nt({}, e, { value: ds }) });
        }
        bi < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Co = v.ReactCurrentDispatcher, ui;
    function $r(e, t, r) {
      {
        if (ui === void 0)
          try {
            throw Error();
          } catch (l) {
            var i = l.stack.trim().match(/\n( *(at )?)/);
            ui = i && i[1] || "";
          }
        return `
` + ui + e;
      }
    }
    var To = !1, wo;
    {
      var bo = typeof WeakMap == "function" ? WeakMap : Map;
      wo = new bo();
    }
    function iu(e, t) {
      if (!e || To)
        return "";
      {
        var r = wo.get(e);
        if (r !== void 0)
          return r;
      }
      var i;
      To = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Co.current, Co.current = null, gc();
      try {
        if (t) {
          var d = function() {
            throw Error();
          };
          if (Object.defineProperty(d.prototype, "props", { set: function() {
            throw Error();
          } }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(d, []);
            } catch (K) {
              i = K;
            }
            Reflect.construct(e, [], d);
          } else {
            try {
              d.call();
            } catch (K) {
              i = K;
            }
            e.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (K) {
            i = K;
          }
          e();
        }
      } catch (K) {
        if (K && i && typeof K.stack == "string") {
          for (var m = K.stack.split(`
`), g = i.stack.split(`
`), w = m.length - 1, R = g.length - 1; w >= 1 && R >= 0 && m[w] !== g[R]; )
            R--;
          for (; w >= 1 && R >= 0; w--, R--)
            if (m[w] !== g[R]) {
              if (w !== 1 || R !== 1)
                do
                  if (w--, R--, R < 0 || m[w] !== g[R]) {
                    var U = `
` + m[w].replace(" at new ", " at ");
                    return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), typeof e == "function" && wo.set(e, U), U;
                  }
                while (w >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        To = !1, Co.current = s, au(), Error.prepareStackTrace = l;
      }
      var j = e ? e.displayName || e.name : "", W = j ? $r(j) : "";
      return typeof e == "function" && wo.set(e, W), W;
    }
    function ou(e, t, r) {
      return iu(e, !0);
    }
    function Hi(e, t, r) {
      return iu(e, !1);
    }
    function vd(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Ri(e, t, r) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return iu(e, vd(e));
      if (typeof e == "string")
        return $r(e);
      switch (e) {
        case xt:
          return $r("Suspense");
        case $t:
          return $r("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ze:
            return Hi(e.render);
          case kt:
            return Ri(e.type, t, r);
          case yt: {
            var i = e, l = i._payload, s = i._init;
            try {
              return Ri(s(l), t, r);
            } catch {
            }
          }
        }
      return "";
    }
    function Jt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case z:
          return $r(e.type);
        case Qe:
          return $r("Lazy");
        case H:
          return $r("Suspense");
        case vt:
          return $r("SuspenseList");
        case k:
        case N:
        case _e:
          return Hi(e.type);
        case ae:
          return Hi(e.type.render);
        case A:
          return ou(e.type);
        default:
          return "";
      }
    }
    function lu(e) {
      try {
        var t = "", r = e;
        do
          t += Jt(r), r = r.return;
        while (r);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function ul(e, t, r) {
      var i = e.displayName;
      if (i)
        return i;
      var l = t.displayName || t.name || "";
      return l !== "" ? r + "(" + l + ")" : r;
    }
    function uu(e) {
      return e.displayName || "Context";
    }
    function qt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ba:
          return "Fragment";
        case Vr:
          return "Portal";
        case D:
          return "Profiler";
        case Ti:
          return "StrictMode";
        case xt:
          return "Suspense";
        case $t:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Le:
            var t = e;
            return uu(t) + ".Consumer";
          case Se:
            var r = e;
            return uu(r._context) + ".Provider";
          case ze:
            return ul(e, e.render, "ForwardRef");
          case kt:
            var i = e.displayName || null;
            return i !== null ? i : qt(e.type) || "Memo";
          case yt: {
            var l = e, s = l._payload, d = l._init;
            try {
              return qt(d(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function su(e, t, r) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? r + "(" + i + ")" : r);
    }
    function cu(e) {
      return e.displayName || "Context";
    }
    function Tt(e) {
      var t = e.tag, r = e.type;
      switch (t) {
        case Te:
          return "Cache";
        case we:
          var i = r;
          return cu(i) + ".Consumer";
        case ce:
          var l = r;
          return cu(l._context) + ".Provider";
        case pt:
          return "DehydratedFragment";
        case ae:
          return su(r, r.render, "ForwardRef");
        case ee:
          return "Fragment";
        case z:
          return r;
        case $:
          return "Portal";
        case M:
          return "Root";
        case V:
          return "Text";
        case Qe:
          return qt(r);
        case Z:
          return r === Ti ? "StrictMode" : "Mode";
        case Ue:
          return "Offscreen";
        case ie:
          return "Profiler";
        case _t:
          return "Scope";
        case H:
          return "Suspense";
        case vt:
          return "SuspenseList";
        case xe:
          return "TracingMarker";
        case A:
        case k:
        case ut:
        case N:
        case de:
        case _e:
          if (typeof r == "function")
            return r.displayName || r.name || null;
          if (typeof r == "string")
            return r;
          break;
      }
      return null;
    }
    var sl = v.ReactDebugCurrentFrame, In = null, aa = !1;
    function Br() {
      {
        if (In === null)
          return null;
        var e = In._debugOwner;
        if (e !== null && typeof e < "u")
          return Tt(e);
      }
      return null;
    }
    function Ro() {
      return In === null ? "" : lu(In);
    }
    function Vn() {
      sl.getCurrentStack = null, In = null, aa = !1;
    }
    function ln(e) {
      sl.getCurrentStack = e === null ? null : Ro, In = e, aa = !1;
    }
    function Sc() {
      return In;
    }
    function ia(e) {
      aa = e;
    }
    function dr(e) {
      return "" + e;
    }
    function xi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return dn(e), e;
        default:
          return "";
      }
    }
    var Ec = { button: !0, checkbox: !0, image: !0, hidden: !0, radio: !0, reset: !0, submit: !0 };
    function $i(e, t) {
      Ec[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || y("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || y("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function xo(e) {
      var t = e.type, r = e.nodeName;
      return r && r.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Cc(e) {
      return e._valueTracker;
    }
    function ja(e) {
      e._valueTracker = null;
    }
    function _o(e) {
      var t = "";
      return e && (xo(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Oo(e) {
      var t = xo(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      dn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof r > "u" || typeof r.get != "function" || typeof r.set != "function")) {
        var l = r.get, s = r.set;
        Object.defineProperty(e, t, { configurable: !0, get: function() {
          return l.call(this);
        }, set: function(g) {
          dn(g), i = "" + g, s.call(this, g);
        } }), Object.defineProperty(e, t, { enumerable: r.enumerable });
        var d = { getValue: function() {
          return i;
        }, setValue: function(g) {
          dn(g), i = "" + g;
        }, stopTracking: function() {
          ja(e), delete e[t];
        } };
        return d;
      }
    }
    function za(e) {
      Cc(e) || (e._valueTracker = Oo(e));
    }
    function fu(e) {
      if (!e)
        return !1;
      var t = Cc(e);
      if (!t)
        return !0;
      var r = t.getValue(), i = _o(e);
      return i !== r ? (t.setValue(i), !0) : !1;
    }
    function ko(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Do = !1, cl = !1, du = !1, vs = !1;
    function si(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function E(e, t) {
      var r = e, i = t.checked, l = Nt({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: i ?? r._wrapperState.initialChecked });
      return l;
    }
    function _(e, t) {
      $i("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !cl && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Br() || "A component", t.type), cl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Do && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Br() || "A component", t.type), Do = !0);
      var r = e, i = t.defaultValue == null ? "" : t.defaultValue;
      r._wrapperState = { initialChecked: t.checked != null ? t.checked : t.defaultChecked, initialValue: xi(t.value != null ? t.value : i), controlled: si(t) };
    }
    function q(e, t) {
      var r = e, i = t.checked;
      i != null && wa(r, "checked", i, !1);
    }
    function ne(e, t) {
      var r = e;
      {
        var i = si(t);
        !r._wrapperState.controlled && i && !vs && (y("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), vs = !0), r._wrapperState.controlled && !i && !du && (y("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), du = !0);
      }
      q(e, t);
      var l = xi(t.value), s = t.type;
      if (l != null)
        s === "number" ? (l === 0 && r.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        r.value != l) && (r.value = dr(l)) : r.value !== dr(l) && (r.value = dr(l));
      else if (s === "submit" || s === "reset") {
        r.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? nt(r, t.type, l) : t.hasOwnProperty("defaultValue") && nt(r, t.type, xi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (r.defaultChecked = !!t.defaultChecked);
    }
    function Re(e, t, r) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, s = l === "submit" || l === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var d = dr(i._wrapperState.initialValue);
        r || d !== i.value && (i.value = d), i.defaultValue = d;
      }
      var m = i.name;
      m !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, m !== "" && (i.name = m);
    }
    function ot(e, t) {
      var r = e;
      ne(r, t), ke(r, t);
    }
    function ke(e, t) {
      var r = t.name;
      if (t.type === "radio" && r != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Zt(r, "name");
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), s = 0; s < l.length; s++) {
          var d = l[s];
          if (!(d === e || d.form !== e.form)) {
            var m = um(d);
            if (!m)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            fu(d), ne(d, m);
          }
        }
      }
    }
    function nt(e, t, r) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ko(e.ownerDocument) !== e) && (r == null ? e.defaultValue = dr(e._wrapperState.initialValue) : e.defaultValue !== dr(r) && (e.defaultValue = dr(r)));
    }
    var Et = !1, Kt = !1, En = !1;
    function fn(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? f.Children.forEach(t.children, function(r) {
        r != null && (typeof r == "string" || typeof r == "number" || Kt || (Kt = !0, y("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (En || (En = !0, y("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Et && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Et = !0);
    }
    function Hn(e, t) {
      t.value != null && e.setAttribute("value", dr(xi(t.value)));
    }
    var vn = Array.isArray;
    function It(e) {
      return vn(e);
    }
    var oa;
    oa = !1;
    function pu() {
      var e = Br();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var hs = ["value", "defaultValue"];
    function hd(e) {
      {
        $i("select", e);
        for (var t = 0; t < hs.length; t++) {
          var r = hs[t];
          if (e[r] != null) {
            var i = It(e[r]);
            e.multiple && !i ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", r, pu()) : !e.multiple && i && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", r, pu());
          }
        }
      }
    }
    function ci(e, t, r, i) {
      var l = e.options;
      if (t) {
        for (var s = r, d = {}, m = 0; m < s.length; m++)
          d["$" + s[m]] = !0;
        for (var g = 0; g < l.length; g++) {
          var w = d.hasOwnProperty("$" + l[g].value);
          l[g].selected !== w && (l[g].selected = w), w && i && (l[g].defaultSelected = !0);
        }
      } else {
        for (var R = dr(xi(r)), U = null, j = 0; j < l.length; j++) {
          if (l[j].value === R) {
            l[j].selected = !0, i && (l[j].defaultSelected = !0);
            return;
          }
          U === null && !l[j].disabled && (U = l[j]);
        }
        U !== null && (U.selected = !0);
      }
    }
    function ms(e, t) {
      return Nt({}, t, { value: void 0 });
    }
    function ys(e, t) {
      var r = e;
      hd(t), r._wrapperState = { wasMultiple: !!t.multiple }, t.value !== void 0 && t.defaultValue !== void 0 && !oa && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), oa = !0);
    }
    function md(e, t) {
      var r = e;
      r.multiple = !!t.multiple;
      var i = t.value;
      i != null ? ci(r, !!t.multiple, i, !1) : t.defaultValue != null && ci(r, !!t.multiple, t.defaultValue, !0);
    }
    function Hy(e, t) {
      var r = e, i = r._wrapperState.wasMultiple;
      r._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? ci(r, !!t.multiple, l, !1) : i !== !!t.multiple && (t.defaultValue != null ? ci(r, !!t.multiple, t.defaultValue, !0) : ci(r, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function $y(e, t) {
      var r = e, i = t.value;
      i != null && ci(r, !!t.multiple, i, !1);
    }
    var yd = !1;
    function gd(e, t) {
      var r = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Nt({}, t, { value: void 0, defaultValue: void 0, children: dr(r._wrapperState.initialValue) });
      return i;
    }
    function Fv(e, t) {
      var r = e;
      $i("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !yd && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Br() || "A component"), yd = !0);
      var i = t.value;
      if (i == null) {
        var l = t.children, s = t.defaultValue;
        if (l != null) {
          y("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (It(l)) {
              if (l.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              l = l[0];
            }
            s = l;
          }
        }
        s == null && (s = ""), i = s;
      }
      r._wrapperState = { initialValue: xi(i) };
    }
    function jv(e, t) {
      var r = e, i = xi(t.value), l = xi(t.defaultValue);
      if (i != null) {
        var s = dr(i);
        s !== r.value && (r.value = s), t.defaultValue == null && r.defaultValue !== s && (r.defaultValue = s);
      }
      l != null && (r.defaultValue = dr(l));
    }
    function zv(e, t) {
      var r = e, i = r.textContent;
      i === r._wrapperState.initialValue && i !== "" && i !== null && (r.value = i);
    }
    function Sd(e, t) {
      jv(e, t);
    }
    var Bi = "http://www.w3.org/1999/xhtml", By = "http://www.w3.org/1998/Math/MathML", Ed = "http://www.w3.org/2000/svg";
    function Tc(e) {
      switch (e) {
        case "svg":
          return Ed;
        case "math":
          return By;
        default:
          return Bi;
      }
    }
    function Cd(e, t) {
      return e == null || e === Bi ? Tc(t) : e === Ed && t === "foreignObject" ? Bi : e;
    }
    var Wy = function(t) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, i, l, s) {
        MSApp.execUnsafeLocalFunction(function() {
          return t(r, i, l, s);
        });
      } : t;
    }, wc, Pv = Wy(function(e, t) {
      if (e.namespaceURI === Ed && !("innerHTML" in e)) {
        wc = wc || document.createElement("div"), wc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var r = wc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; r.firstChild; )
          e.appendChild(r.firstChild);
        return;
      }
      e.innerHTML = t;
    }), la = 1, Wi = 3, er = 8, fi = 9, fl = 11, bc = function(t, r) {
      if (r) {
        var i = t.firstChild;
        if (i && i === t.lastChild && i.nodeType === Wi) {
          i.nodeValue = r;
          return;
        }
      }
      t.textContent = r;
    }, Vv = { animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"], background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"], backgroundPosition: ["backgroundPositionX", "backgroundPositionY"], border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"], borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"], borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"], borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"], borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"], borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"], borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"], borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"], borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"], borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"], borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"], borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"], borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"], borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"], columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"], columns: ["columnCount", "columnWidth"], flex: ["flexBasis", "flexGrow", "flexShrink"], flexFlow: ["flexDirection", "flexWrap"], font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"], fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"], gap: ["columnGap", "rowGap"], grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"], gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"], gridColumn: ["gridColumnEnd", "gridColumnStart"], gridColumnGap: ["columnGap"], gridGap: ["columnGap", "rowGap"], gridRow: ["gridRowEnd", "gridRowStart"], gridRowGap: ["rowGap"], gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"], listStyle: ["listStyleImage", "listStylePosition", "listStyleType"], margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"], marker: ["markerEnd", "markerMid", "markerStart"], mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"], maskPosition: ["maskPositionX", "maskPositionY"], outline: ["outlineColor", "outlineStyle", "outlineWidth"], overflow: ["overflowX", "overflowY"], padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"], placeContent: ["alignContent", "justifyContent"], placeItems: ["alignItems", "justifyItems"], placeSelf: ["alignSelf", "justifySelf"], textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"], textEmphasis: ["textEmphasisColor", "textEmphasisStyle"], transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"], wordWrap: ["overflowWrap"] }, vu = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Hv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var $v = ["Webkit", "ms", "Moz", "O"];
    Object.keys(vu).forEach(function(e) {
      $v.forEach(function(t) {
        vu[Hv(t, e)] = vu[e];
      });
    });
    function Rc(e, t, r) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !r && typeof t == "number" && t !== 0 && !(vu.hasOwnProperty(e) && vu[e]) ? t + "px" : (Yn(t, e), ("" + t).trim());
    }
    var hu = /([A-Z])/g, Gy = /^ms-/;
    function Yy(e) {
      return e.replace(hu, "-$1").toLowerCase().replace(Gy, "-ms-");
    }
    var Bv = function() {
    };
    {
      var Wv = /^(?:webkit|moz|o)[A-Z]/, Gv = /^-ms-/, gs = /-(.)/g, mu = /;\s*$/, yu = {}, gu = {}, Yv = !1, Td = !1, wd = function(t) {
        return t.replace(gs, function(r, i) {
          return i.toUpperCase();
        });
      }, bd = function(t) {
        yu.hasOwnProperty(t) && yu[t] || (yu[t] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          t,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          wd(t.replace(Gv, "ms-"))
        ));
      }, Qv = function(t) {
        yu.hasOwnProperty(t) && yu[t] || (yu[t] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", t, t.charAt(0).toUpperCase() + t.slice(1)));
      }, qv = function(t, r) {
        gu.hasOwnProperty(r) && gu[r] || (gu[r] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, t, r.replace(mu, "")));
      }, Kv = function(t, r) {
        Yv || (Yv = !0, y("`NaN` is an invalid value for the `%s` css style property.", t));
      }, Qy = function(t, r) {
        Td || (Td = !0, y("`Infinity` is an invalid value for the `%s` css style property.", t));
      };
      Bv = function(t, r) {
        t.indexOf("-") > -1 ? bd(t) : Wv.test(t) ? Qv(t) : mu.test(r) && qv(t, r), typeof r == "number" && (isNaN(r) ? Kv(t, r) : isFinite(r) || Qy(t, r));
      };
    }
    var qy = Bv;
    function Ky(e) {
      {
        var t = "", r = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var s = i.indexOf("--") === 0;
              t += r + (s ? i : Yy(i)) + ":", t += Rc(i, l, s), r = ";";
            }
          }
        return t || null;
      }
    }
    function Xv(e, t) {
      var r = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || qy(i, t[i]);
          var s = Rc(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? r.setProperty(i, s) : r[i] = s;
        }
    }
    function Xy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Pa(e) {
      var t = {};
      for (var r in e)
        for (var i = Vv[r] || [r], l = 0; l < i.length; l++)
          t[i[l]] = r;
      return t;
    }
    function Ss(e, t) {
      {
        if (!t)
          return;
        var r = Pa(e), i = Pa(t), l = {};
        for (var s in r) {
          var d = r[s], m = i[s];
          if (m && d !== m) {
            var g = d + "," + m;
            if (l[g])
              continue;
            l[g] = !0, y("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Xy(e[d]) ? "Removing" : "Updating", d, m);
          }
        }
      }
    }
    var Zv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Jv = Nt({ menuitem: !0 }, Zv), eh = "__html";
    function xc(e, t) {
      if (t) {
        if (Jv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(eh in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && y("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Gi(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var _c = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, th = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, di = {}, Rd = new RegExp("^(aria)-[" + tt + "]*$"), Es = new RegExp("^(aria)[A-Z][" + tt + "]*$");
    function xd(e, t) {
      {
        if (zt.call(di, t) && di[t])
          return !0;
        if (Es.test(t)) {
          var r = "aria-" + t.slice(4).toLowerCase(), i = th.hasOwnProperty(r) ? r : null;
          if (i == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), di[t] = !0, !0;
          if (t !== i)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), di[t] = !0, !0;
        }
        if (Rd.test(t)) {
          var l = t.toLowerCase(), s = th.hasOwnProperty(l) ? l : null;
          if (s == null)
            return di[t] = !0, !1;
          if (t !== s)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), di[t] = !0, !0;
        }
      }
      return !0;
    }
    function nh(e, t) {
      {
        var r = [];
        for (var i in t) {
          var l = xd(e, i);
          l || r.push(i);
        }
        var s = r.map(function(d) {
          return "`" + d + "`";
        }).join(", ");
        r.length === 1 ? y("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : r.length > 1 && y("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Oc(e, t) {
      Gi(e, t) || nh(e, t);
    }
    var dl = !1;
    function _d(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !dl && (dl = !0, e === "select" && t.multiple ? y("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : y("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Od = function() {
    };
    {
      var pr = {}, kd = /^on./, rh = /^on[^A-Z]/, ah = new RegExp("^(aria)-[" + tt + "]*$"), ih = new RegExp("^(aria)[A-Z][" + tt + "]*$");
      Od = function(t, r, i, l) {
        if (zt.call(pr, r) && pr[r])
          return !0;
        var s = r.toLowerCase();
        if (s === "onfocusin" || s === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), pr[r] = !0, !0;
        if (l != null) {
          var d = l.registrationNameDependencies, m = l.possibleRegistrationNames;
          if (d.hasOwnProperty(r))
            return !0;
          var g = m.hasOwnProperty(s) ? m[s] : null;
          if (g != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", r, g), pr[r] = !0, !0;
          if (kd.test(r))
            return y("Unknown event handler property `%s`. It will be ignored.", r), pr[r] = !0, !0;
        } else if (kd.test(r))
          return rh.test(r) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", r), pr[r] = !0, !0;
        if (ah.test(r) || ih.test(r))
          return !0;
        if (s === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), pr[r] = !0, !0;
        if (s === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), pr[r] = !0, !0;
        if (s === "is" && i !== null && i !== void 0 && typeof i != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof i), pr[r] = !0, !0;
        if (typeof i == "number" && isNaN(i))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", r), pr[r] = !0, !0;
        var w = Pr(r), R = w !== null && w.type === et;
        if (_c.hasOwnProperty(s)) {
          var U = _c[s];
          if (U !== r)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", r, U), pr[r] = !0, !0;
        } else if (!R && r !== s)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", r, s), pr[r] = !0, !0;
        return typeof i == "boolean" && Ar(r, i, w, !1) ? (i ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', i, r, r, i, r) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', i, r, r, i, r, r, r), pr[r] = !0, !0) : R ? !0 : Ar(r, i, w, !1) ? (pr[r] = !0, !1) : ((i === "false" || i === "true") && w !== null && w.type === Sn && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", i, r, i === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', r, i), pr[r] = !0), !0);
      };
    }
    var oh = function(t, r, i) {
      {
        var l = [];
        for (var s in r) {
          var d = Od(t, s, r[s], i);
          d || l.push(s);
        }
        var m = l.map(function(g) {
          return "`" + g + "`";
        }).join(", ");
        l.length === 1 ? y("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", m, t) : l.length > 1 && y("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", m, t);
      }
    };
    function lh(e, t, r) {
      Gi(e, t) || oh(e, t, r);
    }
    var Yi = 1, Cs = 1 << 1, pl = 1 << 2, Zy = Yi | Cs | pl, Ts = null;
    function ws(e) {
      Ts !== null && y("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Ts = e;
    }
    function Jy() {
      Ts === null && y("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Ts = null;
    }
    function uh(e) {
      return e === Ts;
    }
    function kc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Wi ? t.parentNode : t;
    }
    var Cn = null, Mo = null, Qi = null;
    function Su(e) {
      var t = Wu(e);
      if (t) {
        if (typeof Cn != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var r = t.stateNode;
        if (r) {
          var i = um(r);
          Cn(t.stateNode, t.type, i);
        }
      }
    }
    function sh(e) {
      Cn = e;
    }
    function Dc(e) {
      Mo ? Qi ? Qi.push(e) : Qi = [e] : Mo = e;
    }
    function bs() {
      return Mo !== null || Qi !== null;
    }
    function Rs() {
      if (Mo) {
        var e = Mo, t = Qi;
        if (Mo = null, Qi = null, Su(e), t)
          for (var r = 0; r < t.length; r++)
            Su(t[r]);
      }
    }
    var vl = function(t, r) {
      return t(r);
    }, Dd = function() {
    }, Md = !1;
    function eg() {
      var e = bs();
      e && (Dd(), Rs());
    }
    function Ad(e, t, r) {
      if (Md)
        return e(t, r);
      Md = !0;
      try {
        return vl(e, t, r);
      } finally {
        Md = !1, eg();
      }
    }
    function Mc(e, t, r) {
      vl = e, Dd = r;
    }
    function Ac(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Ld(e, t, r) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(r.disabled && Ac(t));
        default:
          return !1;
      }
    }
    function hl(e, t) {
      var r = e.stateNode;
      if (r === null)
        return null;
      var i = um(r);
      if (i === null)
        return null;
      var l = i[t];
      if (Ld(t, e.type, i))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var xs = !1;
    if (bt)
      try {
        var ml = {};
        Object.defineProperty(ml, "passive", { get: function() {
          xs = !0;
        } }), window.addEventListener("test", ml, ml), window.removeEventListener("test", ml, ml);
      } catch {
        xs = !1;
      }
    function ch(e, t, r, i, l, s, d, m, g) {
      var w = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(r, w);
      } catch (R) {
        this.onError(R);
      }
    }
    var Nd = ch;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Id = document.createElement("react");
      Nd = function(t, r, i, l, s, d, m, g, w) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var R = document.createEvent("Event"), U = !1, j = !0, W = window.event, K = Object.getOwnPropertyDescriptor(window, "event");
        function le() {
          Id.removeEventListener(ue, lt, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = W);
        }
        var He = Array.prototype.slice.call(arguments, 3);
        function lt() {
          U = !0, le(), r.apply(i, He), j = !1;
        }
        var Je, Gt = !1, jt = !1;
        function G(Y) {
          if (Je = Y.error, Gt = !0, Je === null && Y.colno === 0 && Y.lineno === 0 && (jt = !0), Y.defaultPrevented && Je != null && typeof Je == "object")
            try {
              Je._suppressLogging = !0;
            } catch {
            }
        }
        var ue = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", G), Id.addEventListener(ue, lt, !1), R.initEvent(ue, !1, !1), Id.dispatchEvent(R), K && Object.defineProperty(window, "event", K), U && j && (Gt ? jt && (Je = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Je = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Je)), window.removeEventListener("error", G), !U)
          return le(), ch.apply(this, arguments);
      };
    }
    var tg = Nd, Ao = !1, pi = null, _s = !1, Lo = null, _i = { onError: function(t) {
      Ao = !0, pi = t;
    } };
    function yl(e, t, r, i, l, s, d, m, g) {
      Ao = !1, pi = null, tg.apply(_i, arguments);
    }
    function qi(e, t, r, i, l, s, d, m, g) {
      if (yl.apply(this, arguments), Ao) {
        var w = Fd();
        _s || (_s = !0, Lo = w);
      }
    }
    function Ud() {
      if (_s) {
        var e = Lo;
        throw _s = !1, Lo = null, e;
      }
    }
    function ng() {
      return Ao;
    }
    function Fd() {
      if (Ao) {
        var e = pi;
        return Ao = !1, pi = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Va(e) {
      return e._reactInternals;
    }
    function Os(e) {
      return e._reactInternals !== void 0;
    }
    function Eu(e, t) {
      e._reactInternals = t;
    }
    var it = (
      /*                      */
      0
    ), No = (
      /*                */
      1
    ), xn = (
      /*                    */
      2
    ), Dt = (
      /*                       */
      4
    ), nn = (
      /*                */
      16
    ), un = (
      /*                 */
      32
    ), Oi = (
      /*                     */
      64
    ), gt = (
      /*                   */
      128
    ), $n = (
      /*            */
      256
    ), ua = (
      /*                          */
      512
    ), Ha = (
      /*                     */
      1024
    ), An = (
      /*                      */
      2048
    ), $a = (
      /*                    */
      4096
    ), Io = (
      /*                   */
      8192
    ), ks = (
      /*             */
      16384
    ), Lc = An | Dt | Oi | ua | Ha | ks, fh = (
      /*               */
      32767
    ), Ra = (
      /*                   */
      32768
    ), vr = (
      /*                */
      65536
    ), Ds = (
      /* */
      131072
    ), jd = (
      /*                       */
      1048576
    ), zd = (
      /*                    */
      2097152
    ), sa = (
      /*                 */
      4194304
    ), Uo = (
      /*                */
      8388608
    ), ca = (
      /*               */
      16777216
    ), gl = (
      /*              */
      33554432
    ), Cu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Dt | Ha | 0
    ), fa = xn | Dt | nn | un | ua | $a | Io, Lr = Dt | Oi | ua | Io, Ba = An | nn, Cr = sa | Uo | zd, Ki = v.ReactCurrentOwner;
    function xa(e) {
      var t = e, r = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (xn | $a)) !== it && (r = t.return), i = t.return;
        while (i);
      }
      return t.tag === M ? r : null;
    }
    function Pd(e) {
      if (e.tag === H) {
        var t = e.memoizedState;
        if (t === null) {
          var r = e.alternate;
          r !== null && (t = r.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Nc(e) {
      return e.tag === M ? e.stateNode.containerInfo : null;
    }
    function Vd(e) {
      return xa(e) === e;
    }
    function _a(e) {
      {
        var t = Ki.current;
        if (t !== null && t.tag === A) {
          var r = t, i = r.stateNode;
          i._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Tt(r) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = Va(e);
      return l ? xa(l) === l : !1;
    }
    function da(e) {
      if (xa(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function _n(e) {
      var t = e.alternate;
      if (!t) {
        var r = xa(e);
        if (r === null)
          throw new Error("Unable to find node on an unmounted component.");
        return r !== e ? null : e;
      }
      for (var i = e, l = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var d = s.alternate;
        if (d === null) {
          var m = s.return;
          if (m !== null) {
            i = l = m;
            continue;
          }
          break;
        }
        if (s.child === d.child) {
          for (var g = s.child; g; ) {
            if (g === i)
              return da(s), e;
            if (g === l)
              return da(s), t;
            g = g.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== l.return)
          i = s, l = d;
        else {
          for (var w = !1, R = s.child; R; ) {
            if (R === i) {
              w = !0, i = s, l = d;
              break;
            }
            if (R === l) {
              w = !0, l = s, i = d;
              break;
            }
            R = R.sibling;
          }
          if (!w) {
            for (R = d.child; R; ) {
              if (R === i) {
                w = !0, i = d, l = s;
                break;
              }
              if (R === l) {
                w = !0, l = d, i = s;
                break;
              }
              R = R.sibling;
            }
            if (!w)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== l)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== M)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Wa(e) {
      var t = _n(e);
      return t !== null ? Hd(t) : null;
    }
    function Hd(e) {
      if (e.tag === z || e.tag === V)
        return e;
      for (var t = e.child; t !== null; ) {
        var r = Hd(t);
        if (r !== null)
          return r;
        t = t.sibling;
      }
      return null;
    }
    function dh(e) {
      var t = _n(e);
      return t !== null ? Ic(t) : null;
    }
    function Ic(e) {
      if (e.tag === z || e.tag === V)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== $) {
          var r = Ic(t);
          if (r !== null)
            return r;
        }
        t = t.sibling;
      }
      return null;
    }
    var Uc = p.unstable_scheduleCallback, ph = p.unstable_cancelCallback, Fc = p.unstable_shouldYield, vh = p.unstable_requestPaint, Un = p.unstable_now, $d = p.unstable_getCurrentPriorityLevel, jc = p.unstable_ImmediatePriority, Oa = p.unstable_UserBlockingPriority, ki = p.unstable_NormalPriority, zc = p.unstable_LowPriority, Fo = p.unstable_IdlePriority, Bd = p.unstable_yieldValue, Wd = p.unstable_setDisableYieldValue, jo = null, hr = null, Ne = null, qn = !1, Tr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Gd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        De && (e = Nt({}, e, { getLaneLabelMap: Po, injectProfilingHooks: Zi })), jo = t.inject(e), hr = t;
      } catch (r) {
        y("React instrumentation encountered an error: %s.", r);
      }
      return !!t.checkDCE;
    }
    function hh(e, t) {
      if (hr && typeof hr.onScheduleFiberRoot == "function")
        try {
          hr.onScheduleFiberRoot(jo, e, t);
        } catch (r) {
          qn || (qn = !0, y("React instrumentation encountered an error: %s", r));
        }
    }
    function Xi(e, t) {
      if (hr && typeof hr.onCommitFiberRoot == "function")
        try {
          var r = (e.current.flags & gt) === gt;
          if (P) {
            var i;
            switch (t) {
              case Nr:
                i = jc;
                break;
              case wr:
                i = Oa;
                break;
              case eo:
                i = ki;
                break;
              case zs:
                i = Fo;
                break;
              default:
                i = ki;
                break;
            }
            hr.onCommitFiberRoot(jo, e, i, r);
          }
        } catch (l) {
          qn || (qn = !0, y("React instrumentation encountered an error: %s", l));
        }
    }
    function zo(e) {
      if (hr && typeof hr.onPostCommitFiberRoot == "function")
        try {
          hr.onPostCommitFiberRoot(jo, e);
        } catch (t) {
          qn || (qn = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Yd(e) {
      if (hr && typeof hr.onCommitFiberUnmount == "function")
        try {
          hr.onCommitFiberUnmount(jo, e);
        } catch (t) {
          qn || (qn = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function ir(e) {
      if (typeof Bd == "function" && (Wd(e), T(e)), hr && typeof hr.setStrictMode == "function")
        try {
          hr.setStrictMode(jo, e);
        } catch (t) {
          qn || (qn = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Zi(e) {
      Ne = e;
    }
    function Po() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, r = 0; r < On; r++) {
          var i = rg(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Pc(e) {
      Ne !== null && typeof Ne.markCommitStarted == "function" && Ne.markCommitStarted(e);
    }
    function Qd() {
      Ne !== null && typeof Ne.markCommitStopped == "function" && Ne.markCommitStopped();
    }
    function Vo(e) {
      Ne !== null && typeof Ne.markComponentRenderStarted == "function" && Ne.markComponentRenderStarted(e);
    }
    function Sl() {
      Ne !== null && typeof Ne.markComponentRenderStopped == "function" && Ne.markComponentRenderStopped();
    }
    function mh(e) {
      Ne !== null && typeof Ne.markComponentPassiveEffectMountStarted == "function" && Ne.markComponentPassiveEffectMountStarted(e);
    }
    function qd() {
      Ne !== null && typeof Ne.markComponentPassiveEffectMountStopped == "function" && Ne.markComponentPassiveEffectMountStopped();
    }
    function Vc(e) {
      Ne !== null && typeof Ne.markComponentPassiveEffectUnmountStarted == "function" && Ne.markComponentPassiveEffectUnmountStarted(e);
    }
    function yh() {
      Ne !== null && typeof Ne.markComponentPassiveEffectUnmountStopped == "function" && Ne.markComponentPassiveEffectUnmountStopped();
    }
    function gh(e) {
      Ne !== null && typeof Ne.markComponentLayoutEffectMountStarted == "function" && Ne.markComponentLayoutEffectMountStarted(e);
    }
    function Sh() {
      Ne !== null && typeof Ne.markComponentLayoutEffectMountStopped == "function" && Ne.markComponentLayoutEffectMountStopped();
    }
    function Hc(e) {
      Ne !== null && typeof Ne.markComponentLayoutEffectUnmountStarted == "function" && Ne.markComponentLayoutEffectUnmountStarted(e);
    }
    function Tu() {
      Ne !== null && typeof Ne.markComponentLayoutEffectUnmountStopped == "function" && Ne.markComponentLayoutEffectUnmountStopped();
    }
    function $c(e, t, r) {
      Ne !== null && typeof Ne.markComponentErrored == "function" && Ne.markComponentErrored(e, t, r);
    }
    function Eh(e, t, r) {
      Ne !== null && typeof Ne.markComponentSuspended == "function" && Ne.markComponentSuspended(e, t, r);
    }
    function Ch(e) {
      Ne !== null && typeof Ne.markLayoutEffectsStarted == "function" && Ne.markLayoutEffectsStarted(e);
    }
    function wu() {
      Ne !== null && typeof Ne.markLayoutEffectsStopped == "function" && Ne.markLayoutEffectsStopped();
    }
    function Th(e) {
      Ne !== null && typeof Ne.markPassiveEffectsStarted == "function" && Ne.markPassiveEffectsStarted(e);
    }
    function Ms() {
      Ne !== null && typeof Ne.markPassiveEffectsStopped == "function" && Ne.markPassiveEffectsStopped();
    }
    function vi(e) {
      Ne !== null && typeof Ne.markRenderStarted == "function" && Ne.markRenderStarted(e);
    }
    function As() {
      Ne !== null && typeof Ne.markRenderYielded == "function" && Ne.markRenderYielded();
    }
    function bu() {
      Ne !== null && typeof Ne.markRenderStopped == "function" && Ne.markRenderStopped();
    }
    function El(e) {
      Ne !== null && typeof Ne.markRenderScheduled == "function" && Ne.markRenderScheduled(e);
    }
    function Kd(e, t) {
      Ne !== null && typeof Ne.markForceUpdateScheduled == "function" && Ne.markForceUpdateScheduled(e, t);
    }
    function Ho(e, t) {
      Ne !== null && typeof Ne.markStateUpdateScheduled == "function" && Ne.markStateUpdateScheduled(e, t);
    }
    var st = (
      /*                         */
      0
    ), Ut = (
      /*                 */
      1
    ), ft = (
      /*                    */
      2
    ), Fn = (
      /*               */
      8
    ), Ga = (
      /*              */
      16
    ), Bc = Math.clz32 ? Math.clz32 : Cl, Wc = Math.log, Xd = Math.LN2;
    function Cl(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Wc(t) / Xd | 0) | 0;
    }
    var On = 31, se = (
      /*                        */
      0
    ), Bt = (
      /*                          */
      0
    ), dt = (
      /*                        */
      1
    ), Di = (
      /*    */
      2
    ), ka = (
      /*             */
      4
    ), Tl = (
      /*            */
      8
    ), kn = (
      /*                     */
      16
    ), wl = (
      /*                */
      32
    ), $o = (
      /*                       */
      4194240
    ), bl = (
      /*                        */
      64
    ), Ya = (
      /*                        */
      128
    ), pa = (
      /*                        */
      256
    ), Rl = (
      /*                        */
      512
    ), Ls = (
      /*                        */
      1024
    ), Ns = (
      /*                        */
      2048
    ), Gc = (
      /*                        */
      4096
    ), Yc = (
      /*                        */
      8192
    ), Qc = (
      /*                        */
      16384
    ), qc = (
      /*                       */
      32768
    ), Kc = (
      /*                       */
      65536
    ), Xc = (
      /*                       */
      131072
    ), Zc = (
      /*                       */
      262144
    ), Jc = (
      /*                       */
      524288
    ), xl = (
      /*                       */
      1048576
    ), ef = (
      /*                       */
      2097152
    ), _l = (
      /*                            */
      130023424
    ), Ji = (
      /*                             */
      4194304
    ), tf = (
      /*                             */
      8388608
    ), Is = (
      /*                             */
      16777216
    ), nf = (
      /*                             */
      33554432
    ), rf = (
      /*                             */
      67108864
    ), Zd = Ji, Ru = (
      /*          */
      134217728
    ), af = (
      /*                          */
      268435455
    ), xu = (
      /*               */
      268435456
    ), Bo = (
      /*                        */
      536870912
    ), va = (
      /*                   */
      1073741824
    );
    function rg(e) {
      {
        if (e & dt)
          return "Sync";
        if (e & Di)
          return "InputContinuousHydration";
        if (e & ka)
          return "InputContinuous";
        if (e & Tl)
          return "DefaultHydration";
        if (e & kn)
          return "Default";
        if (e & wl)
          return "TransitionHydration";
        if (e & $o)
          return "Transition";
        if (e & _l)
          return "Retry";
        if (e & Ru)
          return "SelectiveHydration";
        if (e & xu)
          return "IdleHydration";
        if (e & Bo)
          return "Idle";
        if (e & va)
          return "Offscreen";
      }
    }
    var Tn = -1, of = bl, lf = Ji;
    function _u(e) {
      switch (tr(e)) {
        case dt:
          return dt;
        case Di:
          return Di;
        case ka:
          return ka;
        case Tl:
          return Tl;
        case kn:
          return kn;
        case wl:
          return wl;
        case bl:
        case Ya:
        case pa:
        case Rl:
        case Ls:
        case Ns:
        case Gc:
        case Yc:
        case Qc:
        case qc:
        case Kc:
        case Xc:
        case Zc:
        case Jc:
        case xl:
        case ef:
          return e & $o;
        case Ji:
        case tf:
        case Is:
        case nf:
        case rf:
          return e & _l;
        case Ru:
          return Ru;
        case xu:
          return xu;
        case Bo:
          return Bo;
        case va:
          return va;
        default:
          return y("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Us(e, t) {
      var r = e.pendingLanes;
      if (r === se)
        return se;
      var i = se, l = e.suspendedLanes, s = e.pingedLanes, d = r & af;
      if (d !== se) {
        var m = d & ~l;
        if (m !== se)
          i = _u(m);
        else {
          var g = d & s;
          g !== se && (i = _u(g));
        }
      } else {
        var w = r & ~l;
        w !== se ? i = _u(w) : s !== se && (i = _u(s));
      }
      if (i === se)
        return se;
      if (t !== se && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === se) {
        var R = tr(i), U = tr(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          R >= U || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          R === kn && (U & $o) !== se
        )
          return t;
      }
      (i & ka) !== se && (i |= r & kn);
      var j = e.entangledLanes;
      if (j !== se)
        for (var W = e.entanglements, K = i & j; K > 0; ) {
          var le = Wo(K), He = 1 << le;
          i |= W[le], K &= ~He;
        }
      return i;
    }
    function wh(e, t) {
      for (var r = e.eventTimes, i = Tn; t > 0; ) {
        var l = Wo(t), s = 1 << l, d = r[l];
        d > i && (i = d), t &= ~s;
      }
      return i;
    }
    function uf(e, t) {
      switch (e) {
        case dt:
        case Di:
        case ka:
          return t + 250;
        case Tl:
        case kn:
        case wl:
        case bl:
        case Ya:
        case pa:
        case Rl:
        case Ls:
        case Ns:
        case Gc:
        case Yc:
        case Qc:
        case qc:
        case Kc:
        case Xc:
        case Zc:
        case Jc:
        case xl:
        case ef:
          return t + 5e3;
        case Ji:
        case tf:
        case Is:
        case nf:
        case rf:
          return Tn;
        case Ru:
        case xu:
        case Bo:
        case va:
          return Tn;
        default:
          return y("Should have found matching lanes. This is a bug in React."), Tn;
      }
    }
    function ag(e, t) {
      for (var r = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, d = r; d > 0; ) {
        var m = Wo(d), g = 1 << m, w = s[m];
        w === Tn ? ((g & i) === se || (g & l) !== se) && (s[m] = uf(g, t)) : w <= t && (e.expiredLanes |= g), d &= ~g;
      }
    }
    function ig(e) {
      return _u(e.pendingLanes);
    }
    function Jd(e) {
      var t = e.pendingLanes & ~va;
      return t !== se ? t : t & va ? va : se;
    }
    function Ou(e) {
      return (e & dt) !== se;
    }
    function Fs(e) {
      return (e & af) !== se;
    }
    function sf(e) {
      return (e & _l) === e;
    }
    function og(e) {
      var t = dt | ka | kn;
      return (e & t) === se;
    }
    function bh(e) {
      return (e & $o) === e;
    }
    function js(e, t) {
      var r = Di | ka | Tl | kn;
      return (t & r) !== se;
    }
    function Rh(e, t) {
      return (t & e.expiredLanes) !== se;
    }
    function ep(e) {
      return (e & $o) !== se;
    }
    function tp() {
      var e = of;
      return of <<= 1, (of & $o) === se && (of = bl), e;
    }
    function lg() {
      var e = lf;
      return lf <<= 1, (lf & _l) === se && (lf = Ji), e;
    }
    function tr(e) {
      return e & -e;
    }
    function or(e) {
      return tr(e);
    }
    function Wo(e) {
      return 31 - Bc(e);
    }
    function cf(e) {
      return Wo(e);
    }
    function ha(e, t) {
      return (e & t) !== se;
    }
    function Ol(e, t) {
      return (e & t) === t;
    }
    function Mt(e, t) {
      return e | t;
    }
    function ku(e, t) {
      return e & ~t;
    }
    function np(e, t) {
      return e & t;
    }
    function xh(e) {
      return e;
    }
    function _h(e, t) {
      return e !== Bt && e < t ? e : t;
    }
    function ff(e) {
      for (var t = [], r = 0; r < On; r++)
        t.push(e);
      return t;
    }
    function kl(e, t, r) {
      e.pendingLanes |= t, t !== Bo && (e.suspendedLanes = se, e.pingedLanes = se);
      var i = e.eventTimes, l = cf(t);
      i[l] = r;
    }
    function rp(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var r = e.expirationTimes, i = t; i > 0; ) {
        var l = Wo(i), s = 1 << l;
        r[l] = Tn, i &= ~s;
      }
    }
    function ap(e, t, r) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function ip(e, t) {
      var r = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = se, e.pingedLanes = se, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, s = e.expirationTimes, d = r; d > 0; ) {
        var m = Wo(d), g = 1 << m;
        i[m] = se, l[m] = Tn, s[m] = Tn, d &= ~g;
      }
    }
    function Du(e, t) {
      for (var r = e.entangledLanes |= t, i = e.entanglements, l = r; l; ) {
        var s = Wo(l), d = 1 << s;
        // Is this one of the newly entangled lanes?
        d & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), l &= ~d;
      }
    }
    function ug(e, t) {
      var r = tr(t), i;
      switch (r) {
        case ka:
          i = Di;
          break;
        case kn:
          i = Tl;
          break;
        case bl:
        case Ya:
        case pa:
        case Rl:
        case Ls:
        case Ns:
        case Gc:
        case Yc:
        case Qc:
        case qc:
        case Kc:
        case Xc:
        case Zc:
        case Jc:
        case xl:
        case ef:
        case Ji:
        case tf:
        case Is:
        case nf:
        case rf:
          i = wl;
          break;
        case Bo:
          i = xu;
          break;
        default:
          i = Bt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Bt ? Bt : i;
    }
    function op(e, t, r) {
      if (Tr)
        for (var i = e.pendingUpdatersLaneMap; r > 0; ) {
          var l = cf(r), s = 1 << l, d = i[l];
          d.add(t), r &= ~s;
        }
    }
    function df(e, t) {
      if (Tr)
        for (var r = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = cf(t), s = 1 << l, d = r[l];
          d.size > 0 && (d.forEach(function(m) {
            var g = m.alternate;
            (g === null || !i.has(g)) && i.add(m);
          }), d.clear()), t &= ~s;
        }
    }
    function lp(e, t) {
      return null;
    }
    var Nr = dt, wr = ka, eo = kn, zs = Bo, Dl = Bt;
    function Qa() {
      return Dl;
    }
    function lr(e) {
      Dl = e;
    }
    function Ps(e, t) {
      var r = Dl;
      try {
        return Dl = e, t();
      } finally {
        Dl = r;
      }
    }
    function Ir(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function sg(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function up(e, t) {
      return e !== 0 && e < t;
    }
    function Vs(e) {
      var t = tr(e);
      return up(Nr, t) ? up(wr, t) ? Fs(t) ? eo : zs : wr : Nr;
    }
    function ur(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Oh;
    function Be(e) {
      Oh = e;
    }
    function Mu(e) {
      Oh(e);
    }
    var Hs;
    function kh(e) {
      Hs = e;
    }
    var Dh;
    function $s(e) {
      Dh = e;
    }
    var Bs;
    function sp(e) {
      Bs = e;
    }
    var cp;
    function Mh(e) {
      cp = e;
    }
    var pf = !1, Au = [], Mi = null, Ln = null, mr = null, qa = /* @__PURE__ */ new Map(), Lu = /* @__PURE__ */ new Map(), to = [], hi = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Ah(e) {
      return hi.indexOf(e) > -1;
    }
    function Ai(e, t, r, i, l) {
      return { blockedOn: e, domEventName: t, eventSystemFlags: r, nativeEvent: l, targetContainers: [i] };
    }
    function Lh(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Mi = null;
          break;
        case "dragenter":
        case "dragleave":
          Ln = null;
          break;
        case "mouseover":
        case "mouseout":
          mr = null;
          break;
        case "pointerover":
        case "pointerout": {
          var r = t.pointerId;
          qa.delete(r);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Lu.delete(i);
          break;
        }
      }
    }
    function Nu(e, t, r, i, l, s) {
      if (e === null || e.nativeEvent !== s) {
        var d = Ai(t, r, i, l, s);
        if (t !== null) {
          var m = Wu(t);
          m !== null && Hs(m);
        }
        return d;
      }
      e.eventSystemFlags |= i;
      var g = e.targetContainers;
      return l !== null && g.indexOf(l) === -1 && g.push(l), e;
    }
    function Nh(e, t, r, i, l) {
      switch (t) {
        case "focusin": {
          var s = l;
          return Mi = Nu(Mi, e, t, r, i, s), !0;
        }
        case "dragenter": {
          var d = l;
          return Ln = Nu(Ln, e, t, r, i, d), !0;
        }
        case "mouseover": {
          var m = l;
          return mr = Nu(mr, e, t, r, i, m), !0;
        }
        case "pointerover": {
          var g = l, w = g.pointerId;
          return qa.set(w, Nu(qa.get(w) || null, e, t, r, i, g)), !0;
        }
        case "gotpointercapture": {
          var R = l, U = R.pointerId;
          return Lu.set(U, Nu(Lu.get(U) || null, e, t, r, i, R)), !0;
        }
      }
      return !1;
    }
    function fp(e) {
      var t = Js(e.target);
      if (t !== null) {
        var r = xa(t);
        if (r !== null) {
          var i = r.tag;
          if (i === H) {
            var l = Pd(r);
            if (l !== null) {
              e.blockedOn = l, cp(e.priority, function() {
                Dh(r);
              });
              return;
            }
          } else if (i === M) {
            var s = r.stateNode;
            if (ur(s)) {
              e.blockedOn = Nc(r);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Ih(e) {
      for (var t = Bs(), r = { blockedOn: null, target: e, priority: t }, i = 0; i < to.length && up(t, to[i].priority); i++)
        ;
      to.splice(i, 0, r), i === 0 && fp(r);
    }
    function vf(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var r = t[0], i = Ml(e.domEventName, e.eventSystemFlags, r, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, s = new l.constructor(l.type, l);
          ws(s), l.target.dispatchEvent(s), Jy();
        } else {
          var d = Wu(i);
          return d !== null && Hs(d), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Ws(e, t, r) {
      vf(e) && r.delete(t);
    }
    function dp() {
      pf = !1, Mi !== null && vf(Mi) && (Mi = null), Ln !== null && vf(Ln) && (Ln = null), mr !== null && vf(mr) && (mr = null), qa.forEach(Ws), Lu.forEach(Ws);
    }
    function Ur(e, t) {
      e.blockedOn === t && (e.blockedOn = null, pf || (pf = !0, p.unstable_scheduleCallback(p.unstable_NormalPriority, dp)));
    }
    function Ft(e) {
      if (Au.length > 0) {
        Ur(Au[0], e);
        for (var t = 1; t < Au.length; t++) {
          var r = Au[t];
          r.blockedOn === e && (r.blockedOn = null);
        }
      }
      Mi !== null && Ur(Mi, e), Ln !== null && Ur(Ln, e), mr !== null && Ur(mr, e);
      var i = function(g) {
        return Ur(g, e);
      };
      qa.forEach(i), Lu.forEach(i);
      for (var l = 0; l < to.length; l++) {
        var s = to[l];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; to.length > 0; ) {
        var d = to[0];
        if (d.blockedOn !== null)
          break;
        fp(d), d.blockedOn === null && to.shift();
      }
    }
    var jn = v.ReactCurrentBatchConfig, Bn = !0;
    function yr(e) {
      Bn = !!e;
    }
    function Da() {
      return Bn;
    }
    function Iu(e, t, r) {
      var i = Wr(t), l;
      switch (i) {
        case Nr:
          l = sr;
          break;
        case wr:
          l = Gs;
          break;
        case eo:
        default:
          l = no;
          break;
      }
      return l.bind(null, t, r, e);
    }
    function sr(e, t, r, i) {
      var l = Qa(), s = jn.transition;
      jn.transition = null;
      try {
        lr(Nr), no(e, t, r, i);
      } finally {
        lr(l), jn.transition = s;
      }
    }
    function Gs(e, t, r, i) {
      var l = Qa(), s = jn.transition;
      jn.transition = null;
      try {
        lr(wr), no(e, t, r, i);
      } finally {
        lr(l), jn.transition = s;
      }
    }
    function no(e, t, r, i) {
      Bn && hf(e, t, r, i);
    }
    function hf(e, t, r, i) {
      var l = Ml(e, t, r, i);
      if (l === null) {
        kg(e, t, i, Uu, r), Lh(e, i);
        return;
      }
      if (Nh(l, e, t, r, i)) {
        i.stopPropagation();
        return;
      }
      if (Lh(e, i), t & pl && Ah(e)) {
        for (; l !== null; ) {
          var s = Wu(l);
          s !== null && Mu(s);
          var d = Ml(e, t, r, i);
          if (d === null && kg(e, t, i, Uu, r), d === l)
            break;
          l = d;
        }
        l !== null && i.stopPropagation();
        return;
      }
      kg(e, t, i, null, r);
    }
    var Uu = null;
    function Ml(e, t, r, i) {
      Uu = null;
      var l = kc(i), s = Js(l);
      if (s !== null) {
        var d = xa(s);
        if (d === null)
          s = null;
        else {
          var m = d.tag;
          if (m === H) {
            var g = Pd(d);
            if (g !== null)
              return g;
            s = null;
          } else if (m === M) {
            var w = d.stateNode;
            if (ur(w))
              return Nc(d);
            s = null;
          } else
            d !== s && (s = null);
        }
      }
      return Uu = s, null;
    }
    function Wr(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Nr;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return wr;
        case "message": {
          var t = $d();
          switch (t) {
            case jc:
              return Nr;
            case Oa:
              return wr;
            case ki:
            case zc:
              return eo;
            case Fo:
              return zs;
            default:
              return eo;
          }
        }
        default:
          return eo;
      }
    }
    function pp(e, t, r) {
      return e.addEventListener(t, r, !1), r;
    }
    function Fu(e, t, r) {
      return e.addEventListener(t, r, !0), r;
    }
    function ro(e, t, r, i) {
      return e.addEventListener(t, r, { capture: !0, passive: i }), r;
    }
    function mf(e, t, r, i) {
      return e.addEventListener(t, r, { passive: i }), r;
    }
    var Al = null, Li = null, Go = null;
    function Yo(e) {
      return Al = e, Li = gf(), !0;
    }
    function yf() {
      Al = null, Li = null, Go = null;
    }
    function ju() {
      if (Go)
        return Go;
      var e, t = Li, r = t.length, i, l = gf(), s = l.length;
      for (e = 0; e < r && t[e] === l[e]; e++)
        ;
      var d = r - e;
      for (i = 1; i <= d && t[r - i] === l[s - i]; i++)
        ;
      var m = i > 1 ? 1 - i : void 0;
      return Go = l.slice(e, m), Go;
    }
    function gf() {
      return "value" in Al ? Al.value : Al.textContent;
    }
    function Ll(e) {
      var t, r = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && r === 13 && (t = 13)) : t = r, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Nl() {
      return !0;
    }
    function Fr() {
      return !1;
    }
    function nr(e) {
      function t(r, i, l, s, d) {
        this._reactName = r, this._targetInst = l, this.type = i, this.nativeEvent = s, this.target = d, this.currentTarget = null;
        for (var m in e)
          if (e.hasOwnProperty(m)) {
            var g = e[m];
            g ? this[m] = g(s) : this[m] = s[m];
          }
        var w = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return w ? this.isDefaultPrevented = Nl : this.isDefaultPrevented = Fr, this.isPropagationStopped = Fr, this;
      }
      return Nt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = Nl);
        },
        stopPropagation: function() {
          var i = this.nativeEvent;
          i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = Nl);
        },
        /**
        * We release all dispatched `SyntheticEvent`s after each event loop, adding
        * them back into the pool. This allows a way to hold onto a reference that
        * won't be added back into the pool.
        */
        persist: function() {
        },
        /**
           * Checks if this event should be released back into the pool.
           *
           * @return {boolean} True if this should not be released, false otherwise.
           */
        isPersistent: Nl
      }), t;
    }
    var jr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
      return t.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 }, zr = nr(jr), zu = Nt({}, jr, { view: 0, detail: 0 }), vp = nr(zu), Ys, hp, Ka;
    function Uh(e) {
      e !== Ka && (Ka && e.type === "mousemove" ? (Ys = e.screenX - Ka.screenX, hp = e.screenY - Ka.screenY) : (Ys = 0, hp = 0), Ka = e);
    }
    var Pu = Nt({}, zu, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Cf, button: 0, buttons: 0, relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    }, movementX: function(t) {
      return "movementX" in t ? t.movementX : (Uh(t), Ys);
    }, movementY: function(t) {
      return "movementY" in t ? t.movementY : hp;
    } }), Qo = nr(Pu), mp = Nt({}, Pu, { dataTransfer: 0 }), Il = nr(mp), Fh = Nt({}, zu, { relatedTarget: 0 }), Sf = nr(Fh), yp = Nt({}, jr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ef = nr(yp), cg = Nt({}, jr, { clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    } }), fg = nr(cg), jh = Nt({}, jr, { data: 0 }), gp = nr(jh), Ul = gp, dg = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Vu = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" };
    function zh(e) {
      if (e.key) {
        var t = dg[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var r = Ll(e);
        return r === 13 ? "Enter" : String.fromCharCode(r);
      }
      return e.type === "keydown" || e.type === "keyup" ? Vu[e.keyCode] || "Unidentified" : "";
    }
    var Wn = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function pg(e) {
      var t = this, r = t.nativeEvent;
      if (r.getModifierState)
        return r.getModifierState(e);
      var i = Wn[e];
      return i ? !!r[i] : !1;
    }
    function Cf(e) {
      return pg;
    }
    var vg = Nt({}, zu, {
      key: zh,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Cf,
      // Legacy Interface
      charCode: function(t) {
        return t.type === "keypress" ? Ll(t) : 0;
      },
      keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function(t) {
        return t.type === "keypress" ? Ll(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      }
    }), hg = nr(vg), Ph = Nt({}, Pu, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Sp = nr(Ph), mg = Nt({}, zu, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Cf }), Xa = nr(mg), Ep = Nt({}, jr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), yg = nr(Ep), qo = Nt({}, Pu, {
      deltaX: function(t) {
        return "deltaX" in t ? t.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in t ? -t.wheelDeltaX : 0
        );
      },
      deltaY: function(t) {
        return "deltaY" in t ? t.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in t ? -t.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in t ? -t.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Tf = nr(qo), Fl = [9, 13, 27, 32], Qs = 229, qs = bt && "CompositionEvent" in window, jl = null;
    bt && "documentMode" in document && (jl = document.documentMode);
    var gg = bt && "TextEvent" in window && !jl, wf = bt && (!qs || jl && jl > 8 && jl <= 11), Vh = 32, Cp = String.fromCharCode(Vh);
    function Hh() {
      Ot("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ot("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Ot("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Ot("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ks = !1;
    function bf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function $h(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Tp(e, t) {
      return e === "keydown" && t.keyCode === Qs;
    }
    function Bh(e, t) {
      switch (e) {
        case "keyup":
          return Fl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Qs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function wp(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Rf(e) {
      return e.locale === "ko";
    }
    var ao = !1;
    function bp(e, t, r, i, l) {
      var s, d;
      if (qs ? s = $h(t) : ao ? Bh(t, i) && (s = "onCompositionEnd") : Tp(t, i) && (s = "onCompositionStart"), !s)
        return null;
      wf && !Rf(i) && (!ao && s === "onCompositionStart" ? ao = Yo(l) : s === "onCompositionEnd" && ao && (d = ju()));
      var m = qh(r, s);
      if (m.length > 0) {
        var g = new gp(s, t, null, i, l);
        if (e.push({ event: g, listeners: m }), d)
          g.data = d;
        else {
          var w = wp(i);
          w !== null && (g.data = w);
        }
      }
    }
    function xf(e, t) {
      switch (e) {
        case "compositionend":
          return wp(t);
        case "keypress":
          var r = t.which;
          return r !== Vh ? null : (Ks = !0, Cp);
        case "textInput":
          var i = t.data;
          return i === Cp && Ks ? null : i;
        default:
          return null;
      }
    }
    function Wh(e, t) {
      if (ao) {
        if (e === "compositionend" || !qs && Bh(e, t)) {
          var r = ju();
          return yf(), ao = !1, r;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!bf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return wf && !Rf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Sg(e, t, r, i, l) {
      var s;
      if (gg ? s = xf(t, i) : s = Wh(t, i), !s)
        return null;
      var d = qh(r, "onBeforeInput");
      if (d.length > 0) {
        var m = new Ul("onBeforeInput", "beforeinput", null, i, l);
        e.push({ event: m, listeners: d }), m.data = s;
      }
    }
    function _f(e, t, r, i, l, s, d) {
      bp(e, t, r, i, l), Sg(e, t, r, i, l);
    }
    var Eg = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
    function Hu(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Eg[e.type] : t === "textarea";
    }
    /**
    * Checks if an event is supported in the current execution environment.
    *
    * NOTE: This will not work correctly for non-generic events such as `change`,
    * `reset`, `load`, `error`, and `select`.
    *
    * Borrows from Modernizr.
    *
    * @param {string} eventNameSuffix Event name, e.g. "click".
    * @return {boolean} True if the event is supported.
    * @internal
    * @license Modernizr 3.0.0pre (Custom Build) | MIT
    */
    function Cg(e) {
      if (!bt)
        return !1;
      var t = "on" + e, r = t in document;
      if (!r) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), r = typeof i[t] == "function";
      }
      return r;
    }
    function Of() {
      Ot("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, r, i) {
      Dc(i);
      var l = qh(t, "onChange");
      if (l.length > 0) {
        var s = new zr("onChange", "change", null, r, i);
        e.push({ event: s, listeners: l });
      }
    }
    var a = null, o = null;
    function u(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function c(e) {
      var t = [];
      n(t, o, e, kc(e)), Ad(h, t);
    }
    function h(e) {
      iC(e, 0);
    }
    function C(e) {
      var t = Nf(e);
      if (fu(t))
        return e;
    }
    function x(e, t) {
      if (e === "change")
        return t;
    }
    var I = !1;
    bt && (I = Cg("input") && (!document.documentMode || document.documentMode > 9));
    function X(e, t) {
      a = e, o = t, a.attachEvent("onpropertychange", Ce);
    }
    function te() {
      a && (a.detachEvent("onpropertychange", Ce), a = null, o = null);
    }
    function Ce(e) {
      e.propertyName === "value" && C(o) && c(e);
    }
    function Ee(e, t, r) {
      e === "focusin" ? (te(), X(t, r)) : e === "focusout" && te();
    }
    function Pe(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return C(o);
    }
    function We(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ke(e, t) {
      if (e === "click")
        return C(t);
    }
    function Kn(e, t) {
      if (e === "input" || e === "change")
        return C(t);
    }
    function B(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || nt(e, "number", e.value);
    }
    function F(e, t, r, i, l, s, d) {
      var m = r ? Nf(r) : window, g, w;
      if (u(m) ? g = x : Hu(m) ? I ? g = Kn : (g = Pe, w = Ee) : We(m) && (g = Ke), g) {
        var R = g(t, r);
        if (R) {
          n(e, R, i, l);
          return;
        }
      }
      w && w(t, m, r), t === "focusout" && B(m);
    }
    function Q() {
      ve("onMouseEnter", ["mouseout", "mouseover"]), ve("onMouseLeave", ["mouseout", "mouseover"]), ve("onPointerEnter", ["pointerout", "pointerover"]), ve("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Oe(e, t, r, i, l, s, d) {
      var m = t === "mouseover" || t === "pointerover", g = t === "mouseout" || t === "pointerout";
      if (m && !uh(i)) {
        var w = i.relatedTarget || i.fromElement;
        if (w && (Js(w) || jp(w)))
          return;
      }
      if (!(!g && !m)) {
        var R;
        if (l.window === l)
          R = l;
        else {
          var U = l.ownerDocument;
          U ? R = U.defaultView || U.parentWindow : R = window;
        }
        var j, W;
        if (g) {
          var K = i.relatedTarget || i.toElement;
          if (j = r, W = K ? Js(K) : null, W !== null) {
            var le = xa(W);
            (W !== le || W.tag !== z && W.tag !== V) && (W = null);
          }
        } else
          j = null, W = r;
        if (j !== W) {
          var He = Qo, lt = "onMouseLeave", Je = "onMouseEnter", Gt = "mouse";
          (t === "pointerout" || t === "pointerover") && (He = Sp, lt = "onPointerLeave", Je = "onPointerEnter", Gt = "pointer");
          var jt = j == null ? R : Nf(j), G = W == null ? R : Nf(W), ue = new He(lt, Gt + "leave", j, i, l);
          ue.target = jt, ue.relatedTarget = G;
          var Y = null, be = Js(l);
          if (be === r) {
            var $e = new He(Je, Gt + "enter", W, i, l);
            $e.target = G, $e.relatedTarget = jt, Y = $e;
          }
          yR(e, ue, Y, j, W);
        }
      }
    }
    function Ze(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ge = typeof Object.is == "function" ? Object.is : Ze;
    function rt(e, t) {
      if (Ge(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var r = Object.keys(e), i = Object.keys(t);
      if (r.length !== i.length)
        return !1;
      for (var l = 0; l < r.length; l++) {
        var s = r[l];
        if (!zt.call(t, s) || !Ge(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function St(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function gr(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Xt(e, t) {
      for (var r = St(e), i = 0, l = 0; r; ) {
        if (r.nodeType === Wi) {
          if (l = i + r.textContent.length, i <= t && l >= t)
            return { node: r, offset: t - i };
          i = l;
        }
        r = St(gr(r));
      }
    }
    function Ko(e) {
      var t = e.ownerDocument, r = t && t.defaultView || window, i = r.getSelection && r.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var l = i.anchorNode, s = i.anchorOffset, d = i.focusNode, m = i.focusOffset;
      try {
        l.nodeType, d.nodeType;
      } catch {
        return null;
      }
      return Tg(e, l, s, d, m);
    }
    function Tg(e, t, r, i, l) {
      var s = 0, d = -1, m = -1, g = 0, w = 0, R = e, U = null;
      e:
        for (; ; ) {
          for (var j = null; R === t && (r === 0 || R.nodeType === Wi) && (d = s + r), R === i && (l === 0 || R.nodeType === Wi) && (m = s + l), R.nodeType === Wi && (s += R.nodeValue.length), (j = R.firstChild) !== null; )
            U = R, R = j;
          for (; ; ) {
            if (R === e)
              break e;
            if (U === t && ++g === r && (d = s), U === i && ++w === l && (m = s), (j = R.nextSibling) !== null)
              break;
            R = U, U = R.parentNode;
          }
          R = j;
        }
      return d === -1 || m === -1 ? null : { start: d, end: m };
    }
    function Zb(e, t) {
      var r = e.ownerDocument || document, i = r && r.defaultView || window;
      if (i.getSelection) {
        var l = i.getSelection(), s = e.textContent.length, d = Math.min(t.start, s), m = t.end === void 0 ? d : Math.min(t.end, s);
        if (!l.extend && d > m) {
          var g = m;
          m = d, d = g;
        }
        var w = Xt(e, d), R = Xt(e, m);
        if (w && R) {
          if (l.rangeCount === 1 && l.anchorNode === w.node && l.anchorOffset === w.offset && l.focusNode === R.node && l.focusOffset === R.offset)
            return;
          var U = r.createRange();
          U.setStart(w.node, w.offset), l.removeAllRanges(), d > m ? (l.addRange(U), l.extend(R.node, R.offset)) : (U.setEnd(R.node, R.offset), l.addRange(U));
        }
      }
    }
    function YE(e) {
      return e && e.nodeType === Wi;
    }
    function QE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : YE(e) ? !1 : YE(t) ? QE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function Jb(e) {
      return e && e.ownerDocument && QE(e.ownerDocument.documentElement, e);
    }
    function eR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function qE() {
      for (var e = window, t = ko(); t instanceof e.HTMLIFrameElement; ) {
        if (eR(t))
          e = t.contentWindow;
        else
          return t;
        t = ko(e.document);
      }
      return t;
    }
    function wg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function tR() {
      var e = qE();
      return { focusedElem: e, selectionRange: wg(e) ? rR(e) : null };
    }
    function nR(e) {
      var t = qE(), r = e.focusedElem, i = e.selectionRange;
      if (t !== r && Jb(r)) {
        i !== null && wg(r) && aR(r, i);
        for (var l = [], s = r; s = s.parentNode; )
          s.nodeType === la && l.push({ element: s, left: s.scrollLeft, top: s.scrollTop });
        typeof r.focus == "function" && r.focus();
        for (var d = 0; d < l.length; d++) {
          var m = l[d];
          m.element.scrollLeft = m.left, m.element.scrollTop = m.top;
        }
      }
    }
    function rR(e) {
      var t;
      return "selectionStart" in e ? t = { start: e.selectionStart, end: e.selectionEnd } : t = Ko(e), t || { start: 0, end: 0 };
    }
    function aR(e, t) {
      var r = t.start, i = t.end;
      i === void 0 && (i = r), "selectionStart" in e ? (e.selectionStart = r, e.selectionEnd = Math.min(i, e.value.length)) : Zb(e, t);
    }
    var iR = bt && "documentMode" in document && document.documentMode <= 11;
    function oR() {
      Ot("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var kf = null, bg = null, Rp = null, Rg = !1;
    function lR(e) {
      if ("selectionStart" in e && wg(e))
        return { start: e.selectionStart, end: e.selectionEnd };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, r = t.getSelection();
      return { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset };
    }
    function uR(e) {
      return e.window === e ? e.document : e.nodeType === fi ? e : e.ownerDocument;
    }
    function KE(e, t, r) {
      var i = uR(r);
      if (!(Rg || kf == null || kf !== ko(i))) {
        var l = lR(kf);
        if (!Rp || !rt(Rp, l)) {
          Rp = l;
          var s = qh(bg, "onSelect");
          if (s.length > 0) {
            var d = new zr("onSelect", "select", null, t, r);
            e.push({ event: d, listeners: s }), d.target = kf;
          }
        }
      }
    }
    function sR(e, t, r, i, l, s, d) {
      var m = r ? Nf(r) : window;
      switch (t) {
        case "focusin":
          (Hu(m) || m.contentEditable === "true") && (kf = m, bg = r, Rp = null);
          break;
        case "focusout":
          kf = null, bg = null, Rp = null;
          break;
        case "mousedown":
          Rg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Rg = !1, KE(e, i, l);
          break;
        case "selectionchange":
          if (iR)
            break;
        case "keydown":
        case "keyup":
          KE(e, i, l);
      }
    }
    function Gh(e, t) {
      var r = {};
      return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
    }
    var Df = { animationend: Gh("Animation", "AnimationEnd"), animationiteration: Gh("Animation", "AnimationIteration"), animationstart: Gh("Animation", "AnimationStart"), transitionend: Gh("Transition", "TransitionEnd") }, xg = {}, XE = {};
    bt && (XE = document.createElement("div").style, "AnimationEvent" in window || (delete Df.animationend.animation, delete Df.animationiteration.animation, delete Df.animationstart.animation), "TransitionEvent" in window || delete Df.transitionend.transition);
    function Yh(e) {
      if (xg[e])
        return xg[e];
      if (!Df[e])
        return e;
      var t = Df[e];
      for (var r in t)
        if (t.hasOwnProperty(r) && r in XE)
          return xg[e] = t[r];
      return e;
    }
    var ZE = Yh("animationend"), JE = Yh("animationiteration"), eC = Yh("animationstart"), tC = Yh("transitionend"), nC = /* @__PURE__ */ new Map(), rC = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function $u(e, t) {
      nC.set(e, t), Ot(t, [e]);
    }
    function cR() {
      for (var e = 0; e < rC.length; e++) {
        var t = rC[e], r = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        $u(r, "on" + i);
      }
      $u(ZE, "onAnimationEnd"), $u(JE, "onAnimationIteration"), $u(eC, "onAnimationStart"), $u("dblclick", "onDoubleClick"), $u("focusin", "onFocus"), $u("focusout", "onBlur"), $u(tC, "onTransitionEnd");
    }
    function fR(e, t, r, i, l, s, d) {
      var m = nC.get(t);
      if (m !== void 0) {
        var g = zr, w = t;
        switch (t) {
          case "keypress":
            if (Ll(i) === 0)
              return;
          case "keydown":
          case "keyup":
            g = hg;
            break;
          case "focusin":
            w = "focus", g = Sf;
            break;
          case "focusout":
            w = "blur", g = Sf;
            break;
          case "beforeblur":
          case "afterblur":
            g = Sf;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Qo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Il;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Xa;
            break;
          case ZE:
          case JE:
          case eC:
            g = Ef;
            break;
          case tC:
            g = yg;
            break;
          case "scroll":
            g = vp;
            break;
          case "wheel":
            g = Tf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = fg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Sp;
            break;
        }
        var R = (s & pl) !== 0;
        {
          var U = !R && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", j = hR(r, m, i.type, R, U);
          if (j.length > 0) {
            var W = new g(m, w, null, i, l);
            e.push({ event: W, listeners: j });
          }
        }
      }
    }
    cR(), Q(), Of(), oR(), Hh();
    function dR(e, t, r, i, l, s, d) {
      fR(e, t, r, i, l, s);
      var m = (s & Zy) === 0;
      m && (Oe(e, t, r, i, l), F(e, t, r, i, l), sR(e, t, r, i, l), _f(e, t, r, i, l));
    }
    var xp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], _g = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(xp));
    function aC(e, t, r) {
      var i = e.type || "unknown-event";
      e.currentTarget = r, qi(i, t, void 0, e), e.currentTarget = null;
    }
    function pR(e, t, r) {
      var i;
      if (r)
        for (var l = t.length - 1; l >= 0; l--) {
          var s = t[l], d = s.instance, m = s.currentTarget, g = s.listener;
          if (d !== i && e.isPropagationStopped())
            return;
          aC(e, g, m), i = d;
        }
      else
        for (var w = 0; w < t.length; w++) {
          var R = t[w], U = R.instance, j = R.currentTarget, W = R.listener;
          if (U !== i && e.isPropagationStopped())
            return;
          aC(e, W, j), i = U;
        }
    }
    function iC(e, t) {
      for (var r = (t & pl) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], s = l.event, d = l.listeners;
        pR(s, d, r);
      }
      Ud();
    }
    function vR(e, t, r, i, l) {
      var s = kc(r), d = [];
      dR(d, e, i, r, s, t), iC(d, t);
    }
    function zn(e, t) {
      _g.has(e) || y('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var r = !1, i = Bx(t), l = gR(e, r);
      i.has(l) || (oC(t, e, Cs, r), i.add(l));
    }
    function Og(e, t, r) {
      _g.has(e) && !t && y('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= pl), oC(r, e, i, t);
    }
    var Qh = "_reactListening" + Math.random().toString(36).slice(2);
    function _p(e) {
      if (!e[Qh]) {
        e[Qh] = !0, fe.forEach(function(r) {
          r !== "selectionchange" && (_g.has(r) || Og(r, !1, e), Og(r, !0, e));
        });
        var t = e.nodeType === fi ? e : e.ownerDocument;
        t !== null && (t[Qh] || (t[Qh] = !0, Og("selectionchange", !1, t)));
      }
    }
    function oC(e, t, r, i, l) {
      var s = Iu(e, t, r), d = void 0;
      xs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (d = !0), e = e, i ? d !== void 0 ? ro(e, t, s, d) : Fu(e, t, s) : d !== void 0 ? mf(e, t, s, d) : pp(e, t, s);
    }
    function lC(e, t) {
      return e === t || e.nodeType === er && e.parentNode === t;
    }
    function kg(e, t, r, i, l) {
      var s = i;
      if (!(t & Yi) && !(t & Cs)) {
        var d = l;
        if (i !== null) {
          var m = i;
          e:
            for (; ; ) {
              if (m === null)
                return;
              var g = m.tag;
              if (g === M || g === $) {
                var w = m.stateNode.containerInfo;
                if (lC(w, d))
                  break;
                if (g === $)
                  for (var R = m.return; R !== null; ) {
                    var U = R.tag;
                    if (U === M || U === $) {
                      var j = R.stateNode.containerInfo;
                      if (lC(j, d))
                        return;
                    }
                    R = R.return;
                  }
                for (; w !== null; ) {
                  var W = Js(w);
                  if (W === null)
                    return;
                  var K = W.tag;
                  if (K === z || K === V) {
                    m = s = W;
                    continue e;
                  }
                  w = w.parentNode;
                }
              }
              m = m.return;
            }
        }
      }
      Ad(function() {
        return vR(e, t, r, s);
      });
    }
    function Op(e, t, r) {
      return { instance: e, listener: t, currentTarget: r };
    }
    function hR(e, t, r, i, l, s) {
      for (var d = t !== null ? t + "Capture" : null, m = i ? d : t, g = [], w = e, R = null; w !== null; ) {
        var U = w, j = U.stateNode, W = U.tag;
        if (W === z && j !== null && (R = j, m !== null)) {
          var K = hl(w, m);
          K != null && g.push(Op(w, K, R));
        }
        if (l)
          break;
        w = w.return;
      }
      return g;
    }
    function qh(e, t) {
      for (var r = t + "Capture", i = [], l = e; l !== null; ) {
        var s = l, d = s.stateNode, m = s.tag;
        if (m === z && d !== null) {
          var g = d, w = hl(l, r);
          w != null && i.unshift(Op(l, w, g));
          var R = hl(l, t);
          R != null && i.push(Op(l, R, g));
        }
        l = l.return;
      }
      return i;
    }
    function Mf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== z);
      return e || null;
    }
    function mR(e, t) {
      for (var r = e, i = t, l = 0, s = r; s; s = Mf(s))
        l++;
      for (var d = 0, m = i; m; m = Mf(m))
        d++;
      for (; l - d > 0; )
        r = Mf(r), l--;
      for (; d - l > 0; )
        i = Mf(i), d--;
      for (var g = l; g--; ) {
        if (r === i || i !== null && r === i.alternate)
          return r;
        r = Mf(r), i = Mf(i);
      }
      return null;
    }
    function uC(e, t, r, i, l) {
      for (var s = t._reactName, d = [], m = r; m !== null && m !== i; ) {
        var g = m, w = g.alternate, R = g.stateNode, U = g.tag;
        if (w !== null && w === i)
          break;
        if (U === z && R !== null) {
          var j = R;
          if (l) {
            var W = hl(m, s);
            W != null && d.unshift(Op(m, W, j));
          } else if (!l) {
            var K = hl(m, s);
            K != null && d.push(Op(m, K, j));
          }
        }
        m = m.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function yR(e, t, r, i, l) {
      var s = i && l ? mR(i, l) : null;
      i !== null && uC(e, t, i, s, !1), l !== null && r !== null && uC(e, r, l, s, !0);
    }
    function gR(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Za = !1, kp = "dangerouslySetInnerHTML", Kh = "suppressContentEditableWarning", Bu = "suppressHydrationWarning", sC = "autoFocus", Xs = "children", Zs = "style", Xh = "__html", Dg, Zh, Dp, cC, Jh, fC, dC;
    Dg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Zh = function(t, r) {
      Oc(t, r), _d(t, r), lh(t, r, { registrationNameDependencies: at, possibleRegistrationNames: ht });
    }, fC = bt && !document.documentMode, Dp = function(t, r, i) {
      if (!Za) {
        var l = em(i), s = em(r);
        s !== l && (Za = !0, y("Prop `%s` did not match. Server: %s Client: %s", t, JSON.stringify(s), JSON.stringify(l)));
      }
    }, cC = function(t) {
      if (!Za) {
        Za = !0;
        var r = [];
        t.forEach(function(i) {
          r.push(i);
        }), y("Extra attributes from the server: %s", r);
      }
    }, Jh = function(t, r) {
      r === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", t, t, t) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", t, typeof r);
    }, dC = function(t, r) {
      var i = t.namespaceURI === Bi ? t.ownerDocument.createElement(t.tagName) : t.ownerDocument.createElementNS(t.namespaceURI, t.tagName);
      return i.innerHTML = r, i.innerHTML;
    };
    var SR = /\r\n?/g, ER = /\u0000|\uFFFD/g;
    function em(e) {
      Jn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(SR, `
`).replace(ER, "");
    }
    function tm(e, t, r, i) {
      var l = em(t), s = em(e);
      if (s !== l && (i && (Za || (Za = !0, y('Text content did not match. Server: "%s" Client: "%s"', s, l))), r && ye))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function pC(e) {
      return e.nodeType === fi ? e : e.ownerDocument;
    }
    function CR() {
    }
    function nm(e) {
      e.onclick = CR;
    }
    function TR(e, t, r, i, l) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var d = i[s];
          if (s === Zs)
            d && Object.freeze(d), Xv(t, d);
          else if (s === kp) {
            var m = d ? d[Xh] : void 0;
            m != null && Pv(t, m);
          } else if (s === Xs)
            if (typeof d == "string") {
              var g = e !== "textarea" || d !== "";
              g && bc(t, d);
            } else
              typeof d == "number" && bc(t, "" + d);
          else
            s === Kh || s === Bu || s === sC || (at.hasOwnProperty(s) ? d != null && (typeof d != "function" && Jh(s, d), s === "onScroll" && zn("scroll", t)) : d != null && wa(t, s, d, l));
        }
    }
    function wR(e, t, r, i) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], d = t[l + 1];
        s === Zs ? Xv(e, d) : s === kp ? Pv(e, d) : s === Xs ? bc(e, d) : wa(e, s, d, i);
      }
    }
    function bR(e, t, r, i) {
      var l, s = pC(r), d, m = i;
      if (m === Bi && (m = Tc(e)), m === Bi) {
        if (l = Gi(e, t), !l && e !== e.toLowerCase() && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var g = s.createElement("div");
          g.innerHTML = "<script><\/script>";
          var w = g.firstChild;
          d = g.removeChild(w);
        } else if (typeof t.is == "string")
          d = s.createElement(e, { is: t.is });
        else if (d = s.createElement(e), e === "select") {
          var R = d;
          t.multiple ? R.multiple = !0 : t.size && (R.size = t.size);
        }
      } else
        d = s.createElementNS(m, e);
      return m === Bi && !l && Object.prototype.toString.call(d) === "[object HTMLUnknownElement]" && !zt.call(Dg, e) && (Dg[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), d;
    }
    function RR(e, t) {
      return pC(t).createTextNode(e);
    }
    function xR(e, t, r, i) {
      var l = Gi(t, r);
      Zh(t, r);
      var s;
      switch (t) {
        case "dialog":
          zn("cancel", e), zn("close", e), s = r;
          break;
        case "iframe":
        case "object":
        case "embed":
          zn("load", e), s = r;
          break;
        case "video":
        case "audio":
          for (var d = 0; d < xp.length; d++)
            zn(xp[d], e);
          s = r;
          break;
        case "source":
          zn("error", e), s = r;
          break;
        case "img":
        case "image":
        case "link":
          zn("error", e), zn("load", e), s = r;
          break;
        case "details":
          zn("toggle", e), s = r;
          break;
        case "input":
          _(e, r), s = E(e, r), zn("invalid", e);
          break;
        case "option":
          fn(e, r), s = r;
          break;
        case "select":
          ys(e, r), s = ms(e, r), zn("invalid", e);
          break;
        case "textarea":
          Fv(e, r), s = gd(e, r), zn("invalid", e);
          break;
        default:
          s = r;
      }
      switch (xc(t, s), TR(t, e, i, s, l), t) {
        case "input":
          za(e), Re(e, r, !1);
          break;
        case "textarea":
          za(e), zv(e);
          break;
        case "option":
          Hn(e, r);
          break;
        case "select":
          md(e, r);
          break;
        default:
          typeof s.onClick == "function" && nm(e);
          break;
      }
    }
    function _R(e, t, r, i, l) {
      Zh(t, i);
      var s = null, d, m;
      switch (t) {
        case "input":
          d = E(e, r), m = E(e, i), s = [];
          break;
        case "select":
          d = ms(e, r), m = ms(e, i), s = [];
          break;
        case "textarea":
          d = gd(e, r), m = gd(e, i), s = [];
          break;
        default:
          d = r, m = i, typeof d.onClick != "function" && typeof m.onClick == "function" && nm(e);
          break;
      }
      xc(t, m);
      var g, w, R = null;
      for (g in d)
        if (!(m.hasOwnProperty(g) || !d.hasOwnProperty(g) || d[g] == null))
          if (g === Zs) {
            var U = d[g];
            for (w in U)
              U.hasOwnProperty(w) && (R || (R = {}), R[w] = "");
          } else
            g === kp || g === Xs || g === Kh || g === Bu || g === sC || (at.hasOwnProperty(g) ? s || (s = []) : (s = s || []).push(g, null));
      for (g in m) {
        var j = m[g], W = d != null ? d[g] : void 0;
        if (!(!m.hasOwnProperty(g) || j === W || j == null && W == null))
          if (g === Zs)
            if (j && Object.freeze(j), W) {
              for (w in W)
                W.hasOwnProperty(w) && (!j || !j.hasOwnProperty(w)) && (R || (R = {}), R[w] = "");
              for (w in j)
                j.hasOwnProperty(w) && W[w] !== j[w] && (R || (R = {}), R[w] = j[w]);
            } else
              R || (s || (s = []), s.push(g, R)), R = j;
          else if (g === kp) {
            var K = j ? j[Xh] : void 0, le = W ? W[Xh] : void 0;
            K != null && le !== K && (s = s || []).push(g, K);
          } else
            g === Xs ? (typeof j == "string" || typeof j == "number") && (s = s || []).push(g, "" + j) : g === Kh || g === Bu || (at.hasOwnProperty(g) ? (j != null && (typeof j != "function" && Jh(g, j), g === "onScroll" && zn("scroll", e)), !s && W !== j && (s = [])) : (s = s || []).push(g, j));
      }
      return R && (Ss(R, m[Zs]), (s = s || []).push(Zs, R)), s;
    }
    function OR(e, t, r, i, l) {
      r === "input" && l.type === "radio" && l.name != null && q(e, l);
      var s = Gi(r, i), d = Gi(r, l);
      switch (wR(e, t, s, d), r) {
        case "input":
          ne(e, l);
          break;
        case "textarea":
          jv(e, l);
          break;
        case "select":
          Hy(e, l);
          break;
      }
    }
    function kR(e) {
      {
        var t = e.toLowerCase();
        return _c.hasOwnProperty(t) && _c[t] || null;
      }
    }
    function DR(e, t, r, i, l, s, d) {
      var m, g;
      switch (m = Gi(t, r), Zh(t, r), t) {
        case "dialog":
          zn("cancel", e), zn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          zn("load", e);
          break;
        case "video":
        case "audio":
          for (var w = 0; w < xp.length; w++)
            zn(xp[w], e);
          break;
        case "source":
          zn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          zn("error", e), zn("load", e);
          break;
        case "details":
          zn("toggle", e);
          break;
        case "input":
          _(e, r), zn("invalid", e);
          break;
        case "option":
          fn(e, r);
          break;
        case "select":
          ys(e, r), zn("invalid", e);
          break;
        case "textarea":
          Fv(e, r), zn("invalid", e);
          break;
      }
      xc(t, r);
      {
        g = /* @__PURE__ */ new Set();
        for (var R = e.attributes, U = 0; U < R.length; U++) {
          var j = R[U].name.toLowerCase();
          switch (j) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              g.add(R[U].name);
          }
        }
      }
      var W = null;
      for (var K in r)
        if (r.hasOwnProperty(K)) {
          var le = r[K];
          if (K === Xs)
            typeof le == "string" ? e.textContent !== le && (r[Bu] !== !0 && tm(e.textContent, le, s, d), W = [Xs, le]) : typeof le == "number" && e.textContent !== "" + le && (r[Bu] !== !0 && tm(e.textContent, le, s, d), W = [Xs, "" + le]);
          else if (at.hasOwnProperty(K))
            le != null && (typeof le != "function" && Jh(K, le), K === "onScroll" && zn("scroll", e));
          else if (d && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof m == "boolean") {
            var He = void 0, lt = m && pe ? null : Pr(K);
            if (r[Bu] !== !0) {
              if (!(K === Kh || K === Bu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              K === "value" || K === "checked" || K === "selected")) {
                if (K === kp) {
                  var Je = e.innerHTML, Gt = le ? le[Xh] : void 0;
                  if (Gt != null) {
                    var jt = dC(e, Gt);
                    jt !== Je && Dp(K, Je, jt);
                  }
                } else if (K === Zs) {
                  if (g.delete(K), fC) {
                    var G = Ky(le);
                    He = e.getAttribute("style"), G !== He && Dp(K, He, G);
                  }
                } else if (m && !pe)
                  g.delete(K.toLowerCase()), He = Ei(e, K, le), le !== He && Dp(K, He, le);
                else if (!Nn(K, lt, m) && !cn(K, le, lt, m)) {
                  var ue = !1;
                  if (lt !== null)
                    g.delete(lt.attributeName), He = Ta(e, K, le, lt);
                  else {
                    var Y = i;
                    if (Y === Bi && (Y = Tc(t)), Y === Bi)
                      g.delete(K.toLowerCase());
                    else {
                      var be = kR(K);
                      be !== null && be !== K && (ue = !0, g.delete(be)), g.delete(K);
                    }
                    He = Ei(e, K, le);
                  }
                  var $e = pe;
                  !$e && le !== He && !ue && Dp(K, He, le);
                }
              }
            }
          }
        }
      switch (d && // $FlowFixMe - Should be inferred as not undefined.
      g.size > 0 && r[Bu] !== !0 && cC(g), t) {
        case "input":
          za(e), Re(e, r, !0);
          break;
        case "textarea":
          za(e), zv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof r.onClick == "function" && nm(e);
          break;
      }
      return W;
    }
    function MR(e, t, r) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Mg(e, t) {
      {
        if (Za)
          return;
        Za = !0, y("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Ag(e, t) {
      {
        if (Za)
          return;
        Za = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Lg(e, t, r) {
      {
        if (Za)
          return;
        Za = !0, y("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ng(e, t) {
      {
        if (t === "" || Za)
          return;
        Za = !0, y('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function AR(e, t, r) {
      switch (t) {
        case "input":
          ot(e, r);
          return;
        case "textarea":
          Sd(e, r);
          return;
        case "select":
          $y(e, r);
          return;
      }
    }
    var Mp = function() {
    }, Ap = function() {
    };
    {
      var LR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], vC = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], NR = vC.concat(["button"]), IR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], hC = { current: null, formTag: null, aTagInScope: null, buttonTagInScope: null, nobrTagInScope: null, pTagInButtonScope: null, listItemTagAutoclosing: null, dlItemTagAutoclosing: null };
      Ap = function(t, r) {
        var i = Nt({}, t || hC), l = { tag: r };
        return vC.indexOf(r) !== -1 && (i.aTagInScope = null, i.buttonTagInScope = null, i.nobrTagInScope = null), NR.indexOf(r) !== -1 && (i.pTagInButtonScope = null), LR.indexOf(r) !== -1 && r !== "address" && r !== "div" && r !== "p" && (i.listItemTagAutoclosing = null, i.dlItemTagAutoclosing = null), i.current = l, r === "form" && (i.formTag = l), r === "a" && (i.aTagInScope = l), r === "button" && (i.buttonTagInScope = l), r === "nobr" && (i.nobrTagInScope = l), r === "p" && (i.pTagInButtonScope = l), r === "li" && (i.listItemTagAutoclosing = l), (r === "dd" || r === "dt") && (i.dlItemTagAutoclosing = l), i;
      };
      var UR = function(t, r) {
        switch (r) {
          case "select":
            return t === "option" || t === "optgroup" || t === "#text";
          case "optgroup":
            return t === "option" || t === "#text";
          case "option":
            return t === "#text";
          case "tr":
            return t === "th" || t === "td" || t === "style" || t === "script" || t === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return t === "tr" || t === "style" || t === "script" || t === "template";
          case "colgroup":
            return t === "col" || t === "template";
          case "table":
            return t === "caption" || t === "colgroup" || t === "tbody" || t === "tfoot" || t === "thead" || t === "style" || t === "script" || t === "template";
          case "head":
            return t === "base" || t === "basefont" || t === "bgsound" || t === "link" || t === "meta" || t === "title" || t === "noscript" || t === "noframes" || t === "style" || t === "script" || t === "template";
          case "html":
            return t === "head" || t === "body" || t === "frameset";
          case "frameset":
            return t === "frame";
          case "#document":
            return t === "html";
        }
        switch (t) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return r !== "h1" && r !== "h2" && r !== "h3" && r !== "h4" && r !== "h5" && r !== "h6";
          case "rp":
          case "rt":
            return IR.indexOf(r) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return r == null;
        }
        return !0;
      }, FR = function(t, r) {
        switch (t) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return r.pTagInButtonScope;
          case "form":
            return r.formTag || r.pTagInButtonScope;
          case "li":
            return r.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return r.dlItemTagAutoclosing;
          case "button":
            return r.buttonTagInScope;
          case "a":
            return r.aTagInScope;
          case "nobr":
            return r.nobrTagInScope;
        }
        return null;
      }, mC = {};
      Mp = function(t, r, i) {
        i = i || hC;
        var l = i.current, s = l && l.tag;
        r != null && (t != null && y("validateDOMNesting: when childText is passed, childTag should be null"), t = "#text");
        var d = UR(t, s) ? null : l, m = d ? null : FR(t, i), g = d || m;
        if (g) {
          var w = g.tag, R = !!d + "|" + t + "|" + w;
          if (!mC[R]) {
            mC[R] = !0;
            var U = t, j = "";
            if (t === "#text" ? /\S/.test(r) ? U = "Text nodes" : (U = "Whitespace text nodes", j = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : U = "<" + t + ">", d) {
              var W = "";
              w === "table" && t === "tr" && (W += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), y("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", U, w, j, W);
            } else
              y("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", U, w);
          }
        }
      };
    }
    var rm = "suppressHydrationWarning", am = "$", im = "/$", Lp = "$?", Np = "$!", jR = "style", Ig = null, Ug = null;
    function zR(e) {
      var t, r, i = e.nodeType;
      switch (i) {
        case fi:
        case fl: {
          t = i === fi ? "#document" : "#fragment";
          var l = e.documentElement;
          r = l ? l.namespaceURI : Cd(null, "");
          break;
        }
        default: {
          var s = i === er ? e.parentNode : e, d = s.namespaceURI || null;
          t = s.tagName, r = Cd(d, t);
          break;
        }
      }
      {
        var m = t.toLowerCase(), g = Ap(null, m);
        return { namespace: r, ancestorInfo: g };
      }
    }
    function PR(e, t, r) {
      {
        var i = e, l = Cd(i.namespace, t), s = Ap(i.ancestorInfo, t);
        return { namespace: l, ancestorInfo: s };
      }
    }
    function UI(e) {
      return e;
    }
    function VR(e) {
      Ig = Da(), Ug = tR();
      var t = null;
      return yr(!1), t;
    }
    function HR(e) {
      nR(Ug), yr(Ig), Ig = null, Ug = null;
    }
    function $R(e, t, r, i, l) {
      var s;
      {
        var d = i;
        if (Mp(e, null, d.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var m = "" + t.children, g = Ap(d.ancestorInfo, e);
          Mp(null, m, g);
        }
        s = d.namespace;
      }
      var w = bR(e, t, r, s);
      return Fp(l, w), Bg(w, t), w;
    }
    function BR(e, t) {
      e.appendChild(t);
    }
    function WR(e, t, r, i, l) {
      switch (xR(e, t, r, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!r.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function GR(e, t, r, i, l, s) {
      {
        var d = s;
        if (typeof i.children != typeof r.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var m = "" + i.children, g = Ap(d.ancestorInfo, t);
          Mp(null, m, g);
        }
      }
      return _R(e, t, r, i);
    }
    function Fg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function YR(e, t, r, i) {
      {
        var l = r;
        Mp(null, e, l.ancestorInfo);
      }
      var s = RR(e, t);
      return Fp(i, s), s;
    }
    function QR() {
      var e = window.event;
      return e === void 0 ? eo : Wr(e.type);
    }
    var jg = typeof setTimeout == "function" ? setTimeout : void 0, qR = typeof clearTimeout == "function" ? clearTimeout : void 0, zg = -1, yC = typeof Promise == "function" ? Promise : void 0, KR = typeof queueMicrotask == "function" ? queueMicrotask : typeof yC < "u" ? function(e) {
      return yC.resolve(null).then(e).catch(XR);
    } : jg;
    function XR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function ZR(e, t, r, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          r.autoFocus && e.focus();
          return;
        case "img": {
          r.src && (e.src = r.src);
          return;
        }
      }
    }
    function JR(e, t, r, i, l, s) {
      OR(e, t, r, i, l), Bg(e, l);
    }
    function gC(e) {
      bc(e, "");
    }
    function ex(e, t, r) {
      e.nodeValue = r;
    }
    function tx(e, t) {
      e.appendChild(t);
    }
    function nx(e, t) {
      var r;
      e.nodeType === er ? (r = e.parentNode, r.insertBefore(t, e)) : (r = e, r.appendChild(t));
      var i = e._reactRootContainer;
      i == null && r.onclick === null && nm(r);
    }
    function rx(e, t, r) {
      e.insertBefore(t, r);
    }
    function ax(e, t, r) {
      e.nodeType === er ? e.parentNode.insertBefore(t, r) : e.insertBefore(t, r);
    }
    function ix(e, t) {
      e.removeChild(t);
    }
    function ox(e, t) {
      e.nodeType === er ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Pg(e, t) {
      var r = t, i = 0;
      do {
        var l = r.nextSibling;
        if (e.removeChild(r), l && l.nodeType === er) {
          var s = l.data;
          if (s === im)
            if (i === 0) {
              e.removeChild(l), Ft(t);
              return;
            } else
              i--;
          else
            (s === am || s === Lp || s === Np) && i++;
        }
        r = l;
      } while (r);
      Ft(t);
    }
    function lx(e, t) {
      e.nodeType === er ? Pg(e.parentNode, t) : e.nodeType === la && Pg(e, t), Ft(e);
    }
    function ux(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function sx(e) {
      e.nodeValue = "";
    }
    function cx(e, t) {
      e = e;
      var r = t[jR], i = r != null && r.hasOwnProperty("display") ? r.display : null;
      e.style.display = Rc("display", i);
    }
    function fx(e, t) {
      e.nodeValue = t;
    }
    function dx(e) {
      e.nodeType === la ? e.textContent = "" : e.nodeType === fi && e.documentElement && e.removeChild(e.documentElement);
    }
    function px(e, t, r) {
      return e.nodeType !== la || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function vx(e, t) {
      return t === "" || e.nodeType !== Wi ? null : e;
    }
    function hx(e) {
      return e.nodeType !== er ? null : e;
    }
    function SC(e) {
      return e.data === Lp;
    }
    function Vg(e) {
      return e.data === Np;
    }
    function mx(e) {
      var t = e.nextSibling && e.nextSibling.dataset, r, i, l;
      return t && (r = t.dgst, i = t.msg, l = t.stck), { message: i, digest: r, stack: l };
    }
    function yx(e, t) {
      e._reactRetry = t;
    }
    function om(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === la || t === Wi)
          break;
        if (t === er) {
          var r = e.data;
          if (r === am || r === Np || r === Lp)
            break;
          if (r === im)
            return null;
        }
      }
      return e;
    }
    function Ip(e) {
      return om(e.nextSibling);
    }
    function gx(e) {
      return om(e.firstChild);
    }
    function Sx(e) {
      return om(e.firstChild);
    }
    function Ex(e) {
      return om(e.nextSibling);
    }
    function Cx(e, t, r, i, l, s, d) {
      Fp(s, e), Bg(e, r);
      var m;
      {
        var g = l;
        m = g.namespace;
      }
      var w = (s.mode & Ut) !== st;
      return DR(e, t, r, m, i, w, d);
    }
    function Tx(e, t, r, i) {
      return Fp(r, e), r.mode & Ut, MR(e, t);
    }
    function wx(e, t) {
      Fp(t, e);
    }
    function bx(e) {
      for (var t = e.nextSibling, r = 0; t; ) {
        if (t.nodeType === er) {
          var i = t.data;
          if (i === im) {
            if (r === 0)
              return Ip(t);
            r--;
          } else
            (i === am || i === Np || i === Lp) && r++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function EC(e) {
      for (var t = e.previousSibling, r = 0; t; ) {
        if (t.nodeType === er) {
          var i = t.data;
          if (i === am || i === Np || i === Lp) {
            if (r === 0)
              return t;
            r--;
          } else
            i === im && r++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Rx(e) {
      Ft(e);
    }
    function xx(e) {
      Ft(e);
    }
    function _x(e) {
      return e !== "head" && e !== "body";
    }
    function Ox(e, t, r, i) {
      var l = !0;
      tm(t.nodeValue, r, i, l);
    }
    function kx(e, t, r, i, l, s) {
      if (t[rm] !== !0) {
        var d = !0;
        tm(i.nodeValue, l, s, d);
      }
    }
    function Dx(e, t) {
      t.nodeType === la ? Mg(e, t) : t.nodeType === er || Ag(e, t);
    }
    function Mx(e, t) {
      {
        var r = e.parentNode;
        r !== null && (t.nodeType === la ? Mg(r, t) : t.nodeType === er || Ag(r, t));
      }
    }
    function Ax(e, t, r, i, l) {
      (l || t[rm] !== !0) && (i.nodeType === la ? Mg(r, i) : i.nodeType === er || Ag(r, i));
    }
    function Lx(e, t, r) {
      Lg(e, t);
    }
    function Nx(e, t) {
      Ng(e, t);
    }
    function Ix(e, t, r) {
      {
        var i = e.parentNode;
        i !== null && Lg(i, t);
      }
    }
    function Ux(e, t) {
      {
        var r = e.parentNode;
        r !== null && Ng(r, t);
      }
    }
    function Fx(e, t, r, i, l, s) {
      (s || t[rm] !== !0) && Lg(r, i);
    }
    function jx(e, t, r, i, l) {
      (l || t[rm] !== !0) && Ng(r, i);
    }
    function zx(e) {
      y("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Px(e) {
      _p(e);
    }
    var Af = Math.random().toString(36).slice(2), Lf = "__reactFiber$" + Af, Hg = "__reactProps$" + Af, Up = "__reactContainer$" + Af, $g = "__reactEvents$" + Af, Vx = "__reactListeners$" + Af, Hx = "__reactHandles$" + Af;
    function $x(e) {
      delete e[Lf], delete e[Hg], delete e[$g], delete e[Vx], delete e[Hx];
    }
    function Fp(e, t) {
      t[Lf] = e;
    }
    function lm(e, t) {
      t[Up] = e;
    }
    function CC(e) {
      e[Up] = null;
    }
    function jp(e) {
      return !!e[Up];
    }
    function Js(e) {
      var t = e[Lf];
      if (t)
        return t;
      for (var r = e.parentNode; r; ) {
        if (t = r[Up] || r[Lf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = EC(e); l !== null; ) {
              var s = l[Lf];
              if (s)
                return s;
              l = EC(l);
            }
          return t;
        }
        e = r, r = e.parentNode;
      }
      return null;
    }
    function Wu(e) {
      var t = e[Lf] || e[Up];
      return t && (t.tag === z || t.tag === V || t.tag === H || t.tag === M) ? t : null;
    }
    function Nf(e) {
      if (e.tag === z || e.tag === V)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function um(e) {
      return e[Hg] || null;
    }
    function Bg(e, t) {
      e[Hg] = t;
    }
    function Bx(e) {
      var t = e[$g];
      return t === void 0 && (t = e[$g] = /* @__PURE__ */ new Set()), t;
    }
    var TC = {}, wC = v.ReactDebugCurrentFrame;
    function sm(e) {
      if (e) {
        var t = e._owner, r = Ri(e.type, e._source, t ? t.type : null);
        wC.setExtraStackFrame(r);
      } else
        wC.setExtraStackFrame(null);
    }
    function io(e, t, r, i, l) {
      {
        var s = Function.call.bind(zt);
        for (var d in e)
          if (s(e, d)) {
            var m = void 0;
            try {
              if (typeof e[d] != "function") {
                var g = Error((i || "React class") + ": " + r + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              m = e[d](t, d, i, r, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              m = w;
            }
            m && !(m instanceof Error) && (sm(l), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", r, d, typeof m), sm(null)), m instanceof Error && !(m.message in TC) && (TC[m.message] = !0, sm(l), y("Failed %s type: %s", r, m.message), sm(null));
          }
      }
    }
    var Wg = [], cm;
    cm = [];
    var zl = -1;
    function Gu(e) {
      return { current: e };
    }
    function ma(e, t) {
      if (zl < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== cm[zl] && y("Unexpected Fiber popped."), e.current = Wg[zl], Wg[zl] = null, cm[zl] = null, zl--;
    }
    function ya(e, t, r) {
      zl++, Wg[zl] = e.current, cm[zl] = r, e.current = t;
    }
    var Gg;
    Gg = {};
    var mi = {};
    Object.freeze(mi);
    var Pl = Gu(mi), Xo = Gu(!1), Yg = mi;
    function If(e, t, r) {
      return r && Zo(t) ? Yg : Pl.current;
    }
    function bC(e, t, r) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = r;
      }
    }
    function Uf(e, t) {
      {
        var r = e.type, i = r.contextTypes;
        if (!i)
          return mi;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var d in i)
          s[d] = t[d];
        {
          var m = Tt(e) || "Unknown";
          io(i, s, "context", m);
        }
        return l && bC(e, t, s), s;
      }
    }
    function fm() {
      return Xo.current;
    }
    function Zo(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function dm(e) {
      ma(Xo, e), ma(Pl, e);
    }
    function Qg(e) {
      ma(Xo, e), ma(Pl, e);
    }
    function RC(e, t, r) {
      {
        if (Pl.current !== mi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ya(Pl, t, e), ya(Xo, r, e);
      }
    }
    function xC(e, t, r) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Tt(e) || "Unknown";
            Gg[s] || (Gg[s] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return r;
        }
        var d = i.getChildContext();
        for (var m in d)
          if (!(m in l))
            throw new Error((Tt(e) || "Unknown") + '.getChildContext(): key "' + m + '" is not defined in childContextTypes.');
        {
          var g = Tt(e) || "Unknown";
          io(l, d, "child context", g);
        }
        return Nt({}, r, d);
      }
    }
    function pm(e) {
      {
        var t = e.stateNode, r = t && t.__reactInternalMemoizedMergedChildContext || mi;
        return Yg = Pl.current, ya(Pl, r, e), ya(Xo, Xo.current, e), !0;
      }
    }
    function _C(e, t, r) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (r) {
          var l = xC(e, t, Yg);
          i.__reactInternalMemoizedMergedChildContext = l, ma(Xo, e), ma(Pl, e), ya(Pl, l, e), ya(Xo, r, e);
        } else
          ma(Xo, e), ya(Xo, r, e);
      }
    }
    function Wx(e) {
      {
        if (!Vd(e) || e.tag !== A)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case M:
              return t.stateNode.context;
            case A: {
              var r = t.type;
              if (Zo(r))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Yu = 0, vm = 1, Vl = null, qg = !1, Kg = !1;
    function OC(e) {
      Vl === null ? Vl = [e] : Vl.push(e);
    }
    function Gx(e) {
      qg = !0, OC(e);
    }
    function kC() {
      qg && Qu();
    }
    function Qu() {
      if (!Kg && Vl !== null) {
        Kg = !0;
        var e = 0, t = Qa();
        try {
          var r = !0, i = Vl;
          for (lr(Nr); e < i.length; e++) {
            var l = i[e];
            do
              l = l(r);
            while (l !== null);
          }
          Vl = null, qg = !1;
        } catch (s) {
          throw Vl !== null && (Vl = Vl.slice(e + 1)), Uc(jc, Qu), s;
        } finally {
          lr(t), Kg = !1;
        }
      }
      return null;
    }
    var Ff = [], jf = 0, hm = null, mm = 0, Ni = [], Ii = 0, ec = null, Hl = 1, $l = "";
    function Yx(e) {
      return nc(), (e.flags & jd) !== it;
    }
    function Qx(e) {
      return nc(), mm;
    }
    function qx() {
      var e = $l, t = Hl, r = t & ~Kx(t);
      return r.toString(32) + e;
    }
    function tc(e, t) {
      nc(), Ff[jf++] = mm, Ff[jf++] = hm, hm = e, mm = t;
    }
    function DC(e, t, r) {
      nc(), Ni[Ii++] = Hl, Ni[Ii++] = $l, Ni[Ii++] = ec, ec = e;
      var i = Hl, l = $l, s = ym(i) - 1, d = i & ~(1 << s), m = r + 1, g = ym(t) + s;
      if (g > 30) {
        var w = s - s % 5, R = (1 << w) - 1, U = (d & R).toString(32), j = d >> w, W = s - w, K = ym(t) + W, le = m << W, He = le | j, lt = U + l;
        Hl = 1 << K | He, $l = lt;
      } else {
        var Je = m << s, Gt = Je | d, jt = l;
        Hl = 1 << g | Gt, $l = jt;
      }
    }
    function Xg(e) {
      nc();
      var t = e.return;
      if (t !== null) {
        var r = 1, i = 0;
        tc(e, r), DC(e, r, i);
      }
    }
    function ym(e) {
      return 32 - Bc(e);
    }
    function Kx(e) {
      return 1 << ym(e) - 1;
    }
    function Zg(e) {
      for (; e === hm; )
        hm = Ff[--jf], Ff[jf] = null, mm = Ff[--jf], Ff[jf] = null;
      for (; e === ec; )
        ec = Ni[--Ii], Ni[Ii] = null, $l = Ni[--Ii], Ni[Ii] = null, Hl = Ni[--Ii], Ni[Ii] = null;
    }
    function Xx() {
      return nc(), ec !== null ? { id: Hl, overflow: $l } : null;
    }
    function Zx(e, t) {
      nc(), Ni[Ii++] = Hl, Ni[Ii++] = $l, Ni[Ii++] = ec, Hl = t.id, $l = t.overflow, ec = e;
    }
    function nc() {
      Yr() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Gr = null, Ui = null, oo = !1, rc = !1, qu = null;
    function Jx() {
      oo && y("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function MC() {
      rc = !0;
    }
    function e_() {
      return rc;
    }
    function t_(e) {
      var t = e.stateNode.containerInfo;
      return Ui = Sx(t), Gr = e, oo = !0, qu = null, rc = !1, !0;
    }
    function n_(e, t, r) {
      return Ui = Ex(t), Gr = e, oo = !0, qu = null, rc = !1, r !== null && Zx(e, r), !0;
    }
    function AC(e, t) {
      switch (e.tag) {
        case M: {
          Dx(e.stateNode.containerInfo, t);
          break;
        }
        case z: {
          var r = (e.mode & Ut) !== st;
          Ax(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            r
          );
          break;
        }
        case H: {
          var i = e.memoizedState;
          i.dehydrated !== null && Mx(i.dehydrated, t);
          break;
        }
      }
    }
    function LC(e, t) {
      AC(e, t);
      var r = iD();
      r.stateNode = t, r.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [r], e.flags |= nn) : i.push(r);
    }
    function Jg(e, t) {
      {
        if (rc)
          return;
        switch (e.tag) {
          case M: {
            var r = e.stateNode.containerInfo;
            switch (t.tag) {
              case z:
                var i = t.type;
                t.pendingProps, Lx(r, i);
                break;
              case V:
                var l = t.pendingProps;
                Nx(r, l);
                break;
            }
            break;
          }
          case z: {
            var s = e.type, d = e.memoizedProps, m = e.stateNode;
            switch (t.tag) {
              case z: {
                var g = t.type, w = t.pendingProps, R = (e.mode & Ut) !== st;
                Fx(
                  s,
                  d,
                  m,
                  g,
                  w,
                  // TODO: Delete this argument when we remove the legacy root API.
                  R
                );
                break;
              }
              case V: {
                var U = t.pendingProps, j = (e.mode & Ut) !== st;
                jx(
                  s,
                  d,
                  m,
                  U,
                  // TODO: Delete this argument when we remove the legacy root API.
                  j
                );
                break;
              }
            }
            break;
          }
          case H: {
            var W = e.memoizedState, K = W.dehydrated;
            if (K !== null)
              switch (t.tag) {
                case z:
                  var le = t.type;
                  t.pendingProps, Ix(K, le);
                  break;
                case V:
                  var He = t.pendingProps;
                  Ux(K, He);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function NC(e, t) {
      t.flags = t.flags & ~$a | xn, Jg(e, t);
    }
    function IC(e, t) {
      switch (e.tag) {
        case z: {
          var r = e.type;
          e.pendingProps;
          var i = px(t, r);
          return i !== null ? (e.stateNode = i, Gr = e, Ui = gx(i), !0) : !1;
        }
        case V: {
          var l = e.pendingProps, s = vx(t, l);
          return s !== null ? (e.stateNode = s, Gr = e, Ui = null, !0) : !1;
        }
        case H: {
          var d = hx(t);
          if (d !== null) {
            var m = { dehydrated: d, treeContext: Xx(), retryLane: va };
            e.memoizedState = m;
            var g = oD(d);
            return g.return = e, e.child = g, Gr = e, Ui = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function eS(e) {
      return (e.mode & Ut) !== st && (e.flags & gt) === it;
    }
    function tS(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function nS(e) {
      if (oo) {
        var t = Ui;
        if (!t) {
          eS(e) && (Jg(Gr, e), tS()), NC(Gr, e), oo = !1, Gr = e;
          return;
        }
        var r = t;
        if (!IC(e, t)) {
          eS(e) && (Jg(Gr, e), tS()), t = Ip(r);
          var i = Gr;
          if (!t || !IC(e, t)) {
            NC(Gr, e), oo = !1, Gr = e;
            return;
          }
          LC(i, r);
        }
      }
    }
    function r_(e, t, r) {
      var i = e.stateNode, l = !rc, s = Cx(i, e.type, e.memoizedProps, t, r, e, l);
      return e.updateQueue = s, s !== null;
    }
    function a_(e) {
      var t = e.stateNode, r = e.memoizedProps, i = Tx(t, r, e);
      if (i) {
        var l = Gr;
        if (l !== null)
          switch (l.tag) {
            case M: {
              var s = l.stateNode.containerInfo, d = (l.mode & Ut) !== st;
              Ox(
                s,
                t,
                r,
                // TODO: Delete this argument when we remove the legacy root API.
                d
              );
              break;
            }
            case z: {
              var m = l.type, g = l.memoizedProps, w = l.stateNode, R = (l.mode & Ut) !== st;
              kx(
                m,
                g,
                w,
                t,
                r,
                // TODO: Delete this argument when we remove the legacy root API.
                R
              );
              break;
            }
          }
      }
      return i;
    }
    function i_(e) {
      var t = e.memoizedState, r = t !== null ? t.dehydrated : null;
      if (!r)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      wx(r, e);
    }
    function o_(e) {
      var t = e.memoizedState, r = t !== null ? t.dehydrated : null;
      if (!r)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return bx(r);
    }
    function UC(e) {
      for (var t = e.return; t !== null && t.tag !== z && t.tag !== M && t.tag !== H; )
        t = t.return;
      Gr = t;
    }
    function gm(e) {
      if (e !== Gr)
        return !1;
      if (!oo)
        return UC(e), oo = !0, !1;
      if (e.tag !== M && (e.tag !== z || _x(e.type) && !Fg(e.type, e.memoizedProps))) {
        var t = Ui;
        if (t)
          if (eS(e))
            FC(e), tS();
          else
            for (; t; )
              LC(e, t), t = Ip(t);
      }
      return UC(e), e.tag === H ? Ui = o_(e) : Ui = Gr ? Ip(e.stateNode) : null, !0;
    }
    function l_() {
      return oo && Ui !== null;
    }
    function FC(e) {
      for (var t = Ui; t; )
        AC(e, t), t = Ip(t);
    }
    function zf() {
      Gr = null, Ui = null, oo = !1, rc = !1;
    }
    function jC() {
      qu !== null && (AT(qu), qu = null);
    }
    function Yr() {
      return oo;
    }
    function rS(e) {
      qu === null ? qu = [e] : qu.push(e);
    }
    var u_ = v.ReactCurrentBatchConfig, s_ = null;
    function c_() {
      return u_.transition;
    }
    var lo = { recordUnsafeLifecycleWarnings: function(t, r) {
    }, flushPendingUnsafeLifecycleWarnings: function() {
    }, recordLegacyContextWarning: function(t, r) {
    }, flushLegacyContextWarning: function() {
    }, discardPendingWarnings: function() {
    } };
    {
      var f_ = function(t) {
        for (var r = null, i = t; i !== null; )
          i.mode & Fn && (r = i), i = i.return;
        return r;
      }, ac = function(t) {
        var r = [];
        return t.forEach(function(i) {
          r.push(i);
        }), r.sort().join(", ");
      }, zp = [], Pp = [], Vp = [], Hp = [], $p = [], Bp = [], ic = /* @__PURE__ */ new Set();
      lo.recordUnsafeLifecycleWarnings = function(e, t) {
        ic.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && zp.push(e), e.mode & Fn && typeof t.UNSAFE_componentWillMount == "function" && Pp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Vp.push(e), e.mode & Fn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Hp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && $p.push(e), e.mode & Fn && typeof t.UNSAFE_componentWillUpdate == "function" && Bp.push(e));
      }, lo.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        zp.length > 0 && (zp.forEach(function(j) {
          e.add(Tt(j) || "Component"), ic.add(j.type);
        }), zp = []);
        var t = /* @__PURE__ */ new Set();
        Pp.length > 0 && (Pp.forEach(function(j) {
          t.add(Tt(j) || "Component"), ic.add(j.type);
        }), Pp = []);
        var r = /* @__PURE__ */ new Set();
        Vp.length > 0 && (Vp.forEach(function(j) {
          r.add(Tt(j) || "Component"), ic.add(j.type);
        }), Vp = []);
        var i = /* @__PURE__ */ new Set();
        Hp.length > 0 && (Hp.forEach(function(j) {
          i.add(Tt(j) || "Component"), ic.add(j.type);
        }), Hp = []);
        var l = /* @__PURE__ */ new Set();
        $p.length > 0 && ($p.forEach(function(j) {
          l.add(Tt(j) || "Component"), ic.add(j.type);
        }), $p = []);
        var s = /* @__PURE__ */ new Set();
        if (Bp.length > 0 && (Bp.forEach(function(j) {
          s.add(Tt(j) || "Component"), ic.add(j.type);
        }), Bp = []), t.size > 0) {
          var d = ac(t);
          y(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, d);
        }
        if (i.size > 0) {
          var m = ac(i);
          y(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, m);
        }
        if (s.size > 0) {
          var g = ac(s);
          y(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, g);
        }
        if (e.size > 0) {
          var w = ac(e);
          b(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, w);
        }
        if (r.size > 0) {
          var R = ac(r);
          b(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
        if (l.size > 0) {
          var U = ac(l);
          b(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, U);
        }
      };
      var Sm = /* @__PURE__ */ new Map(), zC = /* @__PURE__ */ new Set();
      lo.recordLegacyContextWarning = function(e, t) {
        var r = f_(e);
        if (r === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!zC.has(e.type)) {
          var i = Sm.get(r);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Sm.set(r, i)), i.push(e));
        }
      }, lo.flushLegacyContextWarning = function() {
        Sm.forEach(function(e, t) {
          if (e.length !== 0) {
            var r = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Tt(s) || "Component"), zC.add(s.type);
            });
            var l = ac(i);
            try {
              ln(r), y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              Vn();
            }
          }
        });
      }, lo.discardPendingWarnings = function() {
        zp = [], Pp = [], Vp = [], Hp = [], $p = [], Bp = [], Sm = /* @__PURE__ */ new Map();
      };
    }
    function uo(e, t) {
      if (e && e.defaultProps) {
        var r = Nt({}, t), i = e.defaultProps;
        for (var l in i)
          r[l] === void 0 && (r[l] = i[l]);
        return r;
      }
      return t;
    }
    var aS = Gu(null), iS;
    iS = {};
    var Em = null, Pf = null, oS = null, Cm = !1;
    function Tm() {
      Em = null, Pf = null, oS = null, Cm = !1;
    }
    function PC() {
      Cm = !0;
    }
    function VC() {
      Cm = !1;
    }
    function HC(e, t, r) {
      ya(aS, t._currentValue, e), t._currentValue = r, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== iS && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = iS;
    }
    function lS(e, t) {
      var r = aS.current;
      ma(aS, t), e._currentValue = r;
    }
    function uS(e, t, r) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (Ol(i.childLanes, t) ? l !== null && !Ol(l.childLanes, t) && (l.childLanes = Mt(l.childLanes, t)) : (i.childLanes = Mt(i.childLanes, t), l !== null && (l.childLanes = Mt(l.childLanes, t))), i === r)
          break;
        i = i.return;
      }
      i !== r && y("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function d_(e, t, r) {
      p_(e, t, r);
    }
    function p_(e, t, r) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, s = i.dependencies;
        if (s !== null) {
          l = i.child;
          for (var d = s.firstContext; d !== null; ) {
            if (d.context === t) {
              if (i.tag === A) {
                var m = or(r), g = Bl(Tn, m);
                g.tag = bm;
                var w = i.updateQueue;
                if (w !== null) {
                  var R = w.shared, U = R.pending;
                  U === null ? g.next = g : (g.next = U.next, U.next = g), R.pending = g;
                }
              }
              i.lanes = Mt(i.lanes, r);
              var j = i.alternate;
              j !== null && (j.lanes = Mt(j.lanes, r)), uS(i.return, r, e), s.lanes = Mt(s.lanes, r);
              break;
            }
            d = d.next;
          }
        } else if (i.tag === ce)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === pt) {
          var W = i.return;
          if (W === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          W.lanes = Mt(W.lanes, r);
          var K = W.alternate;
          K !== null && (K.lanes = Mt(K.lanes, r)), uS(W, r, e), l = i.sibling;
        } else
          l = i.child;
        if (l !== null)
          l.return = i;
        else
          for (l = i; l !== null; ) {
            if (l === e) {
              l = null;
              break;
            }
            var le = l.sibling;
            if (le !== null) {
              le.return = l.return, l = le;
              break;
            }
            l = l.return;
          }
        i = l;
      }
    }
    function Vf(e, t) {
      Em = e, Pf = null, oS = null;
      var r = e.dependencies;
      if (r !== null) {
        var i = r.firstContext;
        i !== null && (ha(r.lanes, t) && av(), r.firstContext = null);
      }
    }
    function Sr(e) {
      Cm && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (oS !== e) {
        var r = { context: e, memoizedValue: t, next: null };
        if (Pf === null) {
          if (Em === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Pf = r, Em.dependencies = { lanes: se, firstContext: r };
        } else
          Pf = Pf.next = r;
      }
      return t;
    }
    var oc = null;
    function sS(e) {
      oc === null ? oc = [e] : oc.push(e);
    }
    function v_() {
      if (oc !== null) {
        for (var e = 0; e < oc.length; e++) {
          var t = oc[e], r = t.interleaved;
          if (r !== null) {
            t.interleaved = null;
            var i = r.next, l = t.pending;
            if (l !== null) {
              var s = l.next;
              l.next = i, r.next = s;
            }
            t.pending = r;
          }
        }
        oc = null;
      }
    }
    function $C(e, t, r, i) {
      var l = t.interleaved;
      return l === null ? (r.next = r, sS(t)) : (r.next = l.next, l.next = r), t.interleaved = r, wm(e, i);
    }
    function h_(e, t, r, i) {
      var l = t.interleaved;
      l === null ? (r.next = r, sS(t)) : (r.next = l.next, l.next = r), t.interleaved = r;
    }
    function m_(e, t, r, i) {
      var l = t.interleaved;
      return l === null ? (r.next = r, sS(t)) : (r.next = l.next, l.next = r), t.interleaved = r, wm(e, i);
    }
    function Ja(e, t) {
      return wm(e, t);
    }
    var y_ = wm;
    function wm(e, t) {
      e.lanes = Mt(e.lanes, t);
      var r = e.alternate;
      r !== null && (r.lanes = Mt(r.lanes, t)), r === null && (e.flags & (xn | $a)) !== it && BT(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = Mt(l.childLanes, t), r = l.alternate, r !== null ? r.childLanes = Mt(r.childLanes, t) : (l.flags & (xn | $a)) !== it && BT(e), i = l, l = l.return;
      if (i.tag === M) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var BC = 0, WC = 1, bm = 2, cS = 3, Rm = !1, fS, xm;
    fS = !1, xm = null;
    function dS(e) {
      var t = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: se }, effects: null };
      e.updateQueue = t;
    }
    function GC(e, t) {
      var r = t.updateQueue, i = e.updateQueue;
      if (r === i) {
        var l = { baseState: i.baseState, firstBaseUpdate: i.firstBaseUpdate, lastBaseUpdate: i.lastBaseUpdate, shared: i.shared, effects: i.effects };
        t.updateQueue = l;
      }
    }
    function Bl(e, t) {
      var r = { eventTime: e, lane: t, tag: BC, payload: null, callback: null, next: null };
      return r;
    }
    function Ku(e, t, r) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var l = i.shared;
      if (xm === l && !fS && (y("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), fS = !0), yk()) {
        var s = l.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, y_(e, r);
      } else
        return m_(e, l, t, r);
    }
    function _m(e, t, r) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (ep(r)) {
          var s = l.lanes;
          s = np(s, e.pendingLanes);
          var d = Mt(s, r);
          l.lanes = d, Du(e, d);
        }
      }
    }
    function pS(e, t) {
      var r = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var l = i.updateQueue;
        if (r === l) {
          var s = null, d = null, m = r.firstBaseUpdate;
          if (m !== null) {
            var g = m;
            do {
              var w = { eventTime: g.eventTime, lane: g.lane, tag: g.tag, payload: g.payload, callback: g.callback, next: null };
              d === null ? s = d = w : (d.next = w, d = w), g = g.next;
            } while (g !== null);
            d === null ? s = d = t : (d.next = t, d = t);
          } else
            s = d = t;
          r = { baseState: l.baseState, firstBaseUpdate: s, lastBaseUpdate: d, shared: l.shared, effects: l.effects }, e.updateQueue = r;
          return;
        }
      }
      var R = r.lastBaseUpdate;
      R === null ? r.firstBaseUpdate = t : R.next = t, r.lastBaseUpdate = t;
    }
    function g_(e, t, r, i, l, s) {
      switch (r.tag) {
        case WC: {
          var d = r.payload;
          if (typeof d == "function") {
            PC();
            var m = d.call(s, i, l);
            {
              if (e.mode & Fn) {
                ir(!0);
                try {
                  d.call(s, i, l);
                } finally {
                  ir(!1);
                }
              }
              VC();
            }
            return m;
          }
          return d;
        }
        case cS:
          e.flags = e.flags & ~vr | gt;
        case BC: {
          var g = r.payload, w;
          if (typeof g == "function") {
            PC(), w = g.call(s, i, l);
            {
              if (e.mode & Fn) {
                ir(!0);
                try {
                  g.call(s, i, l);
                } finally {
                  ir(!1);
                }
              }
              VC();
            }
          } else
            w = g;
          return w == null ? i : Nt({}, i, w);
        }
        case bm:
          return Rm = !0, i;
      }
      return i;
    }
    function Om(e, t, r, i) {
      var l = e.updateQueue;
      Rm = !1, xm = l.shared;
      var s = l.firstBaseUpdate, d = l.lastBaseUpdate, m = l.shared.pending;
      if (m !== null) {
        l.shared.pending = null;
        var g = m, w = g.next;
        g.next = null, d === null ? s = w : d.next = w, d = g;
        var R = e.alternate;
        if (R !== null) {
          var U = R.updateQueue, j = U.lastBaseUpdate;
          j !== d && (j === null ? U.firstBaseUpdate = w : j.next = w, U.lastBaseUpdate = g);
        }
      }
      if (s !== null) {
        var W = l.baseState, K = se, le = null, He = null, lt = null, Je = s;
        do {
          var Gt = Je.lane, jt = Je.eventTime;
          if (Ol(i, Gt)) {
            if (lt !== null) {
              var ue = {
                eventTime: jt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Bt,
                tag: Je.tag,
                payload: Je.payload,
                callback: Je.callback,
                next: null
              };
              lt = lt.next = ue;
            }
            W = g_(e, l, Je, W, t, r);
            var Y = Je.callback;
            if (Y !== null && // If the update was already committed, we should not queue its
            // callback again.
            Je.lane !== Bt) {
              e.flags |= Oi;
              var be = l.effects;
              be === null ? l.effects = [Je] : be.push(Je);
            }
          } else {
            var G = { eventTime: jt, lane: Gt, tag: Je.tag, payload: Je.payload, callback: Je.callback, next: null };
            lt === null ? (He = lt = G, le = W) : lt = lt.next = G, K = Mt(K, Gt);
          }
          if (Je = Je.next, Je === null) {
            if (m = l.shared.pending, m === null)
              break;
            var $e = m, Fe = $e.next;
            $e.next = null, Je = Fe, l.lastBaseUpdate = $e, l.shared.pending = null;
          }
        } while (!0);
        lt === null && (le = W), l.baseState = le, l.firstBaseUpdate = He, l.lastBaseUpdate = lt;
        var mt = l.shared.interleaved;
        if (mt !== null) {
          var Rt = mt;
          do
            K = Mt(K, Rt.lane), Rt = Rt.next;
          while (Rt !== mt);
        } else
          s === null && (l.shared.lanes = se);
        mv(K), e.lanes = K, e.memoizedState = W;
      }
      xm = null;
    }
    function S_(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function YC() {
      Rm = !1;
    }
    function km() {
      return Rm;
    }
    function QC(e, t, r) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l], d = s.callback;
          d !== null && (s.callback = null, S_(d, r));
        }
    }
    var vS = {}, qC = new f.Component().refs, hS, mS, yS, gS, SS, KC, Dm, ES, CS, TS;
    {
      hS = /* @__PURE__ */ new Set(), mS = /* @__PURE__ */ new Set(), yS = /* @__PURE__ */ new Set(), gS = /* @__PURE__ */ new Set(), ES = /* @__PURE__ */ new Set(), SS = /* @__PURE__ */ new Set(), CS = /* @__PURE__ */ new Set(), TS = /* @__PURE__ */ new Set();
      var XC = /* @__PURE__ */ new Set();
      Dm = function(t, r) {
        if (!(t === null || typeof t == "function")) {
          var i = r + "_" + t;
          XC.has(i) || (XC.add(i), y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", r, t));
        }
      }, KC = function(t, r) {
        if (r === void 0) {
          var i = qt(t) || "Component";
          SS.has(i) || (SS.add(i), y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", i));
        }
      }, Object.defineProperty(vS, "_processChildContext", { enumerable: !1, value: function() {
        throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
      } }), Object.freeze(vS);
    }
    function wS(e, t, r, i) {
      var l = e.memoizedState, s = r(i, l);
      {
        if (e.mode & Fn) {
          ir(!0);
          try {
            s = r(i, l);
          } finally {
            ir(!1);
          }
        }
        KC(t, s);
      }
      var d = s == null ? l : Nt({}, l, s);
      if (e.memoizedState = d, e.lanes === se) {
        var m = e.updateQueue;
        m.baseState = d;
      }
    }
    var bS = { isMounted: _a, enqueueSetState: function(t, r, i) {
      var l = Va(t), s = La(), d = as(l), m = Bl(s, d);
      m.payload = r, i != null && (Dm(i, "setState"), m.callback = i);
      var g = Ku(l, m, d);
      g !== null && (Mr(g, l, d, s), _m(g, l, d)), Ho(l, d);
    }, enqueueReplaceState: function(t, r, i) {
      var l = Va(t), s = La(), d = as(l), m = Bl(s, d);
      m.tag = WC, m.payload = r, i != null && (Dm(i, "replaceState"), m.callback = i);
      var g = Ku(l, m, d);
      g !== null && (Mr(g, l, d, s), _m(g, l, d)), Ho(l, d);
    }, enqueueForceUpdate: function(t, r) {
      var i = Va(t), l = La(), s = as(i), d = Bl(l, s);
      d.tag = bm, r != null && (Dm(r, "forceUpdate"), d.callback = r);
      var m = Ku(i, d, s);
      m !== null && (Mr(m, i, s, l), _m(m, i, s)), Kd(i, s);
    } };
    function ZC(e, t, r, i, l, s, d) {
      var m = e.stateNode;
      if (typeof m.shouldComponentUpdate == "function") {
        var g = m.shouldComponentUpdate(i, s, d);
        {
          if (e.mode & Fn) {
            ir(!0);
            try {
              g = m.shouldComponentUpdate(i, s, d);
            } finally {
              ir(!1);
            }
          }
          g === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", qt(t) || "Component");
        }
        return g;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !rt(r, i) || !rt(l, s) : !0;
    }
    function E_(e, t, r) {
      var i = e.stateNode;
      {
        var l = qt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), i.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !CS.has(t) && (CS.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", qt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var d = i.props !== r;
        i.props !== void 0 && d && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !yS.has(t) && (yS.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", qt(t))), typeof i.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var m = i.state;
        m && (typeof m != "object" || It(m)) && y("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function JC(e, t) {
      t.updater = bS, e.stateNode = t, Eu(t, e), t._reactInternalInstance = vS;
    }
    function e1(e, t, r) {
      var i = !1, l = mi, s = mi, d = t.contextType;
      if ("contextType" in t) {
        var m = (
          // Allow null for conditional declaration
          d === null || d !== void 0 && d.$$typeof === Le && d._context === void 0
        );
        if (!m && !TS.has(t)) {
          TS.add(t);
          var g = "";
          d === void 0 ? g = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof d != "object" ? g = " However, it is set to a " + typeof d + "." : d.$$typeof === Se ? g = " Did you accidentally pass the Context.Provider instead?" : d._context !== void 0 ? g = " Did you accidentally pass the Context.Consumer instead?" : g = " However, it is set to an object with keys {" + Object.keys(d).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", qt(t) || "Component", g);
        }
      }
      if (typeof d == "object" && d !== null)
        s = Sr(d);
      else {
        l = If(e, t, !0);
        var w = t.contextTypes;
        i = w != null, s = i ? Uf(e, l) : mi;
      }
      var R = new t(r, s);
      if (e.mode & Fn) {
        ir(!0);
        try {
          R = new t(r, s);
        } finally {
          ir(!1);
        }
      }
      var U = e.memoizedState = R.state !== null && R.state !== void 0 ? R.state : null;
      JC(e, R);
      {
        if (typeof t.getDerivedStateFromProps == "function" && U === null) {
          var j = qt(t) || "Component";
          mS.has(j) || (mS.add(j), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", j, R.state === null ? "null" : "undefined", j));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof R.getSnapshotBeforeUpdate == "function") {
          var W = null, K = null, le = null;
          if (typeof R.componentWillMount == "function" && R.componentWillMount.__suppressDeprecationWarning !== !0 ? W = "componentWillMount" : typeof R.UNSAFE_componentWillMount == "function" && (W = "UNSAFE_componentWillMount"), typeof R.componentWillReceiveProps == "function" && R.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? K = "componentWillReceiveProps" : typeof R.UNSAFE_componentWillReceiveProps == "function" && (K = "UNSAFE_componentWillReceiveProps"), typeof R.componentWillUpdate == "function" && R.componentWillUpdate.__suppressDeprecationWarning !== !0 ? le = "componentWillUpdate" : typeof R.UNSAFE_componentWillUpdate == "function" && (le = "UNSAFE_componentWillUpdate"), W !== null || K !== null || le !== null) {
            var He = qt(t) || "Component", lt = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            gS.has(He) || (gS.add(He), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, He, lt, W !== null ? `
  ` + W : "", K !== null ? `
  ` + K : "", le !== null ? `
  ` + le : ""));
          }
        }
      }
      return i && bC(e, l, s), R;
    }
    function C_(e, t) {
      var r = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), r !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Tt(e) || "Component"), bS.enqueueReplaceState(t, t.state, null));
    }
    function t1(e, t, r, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, i), t.state !== l) {
        {
          var s = Tt(e) || "Component";
          hS.has(s) || (hS.add(s), y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        bS.enqueueReplaceState(t, t.state, null);
      }
    }
    function RS(e, t, r, i) {
      E_(e, t, r);
      var l = e.stateNode;
      l.props = r, l.state = e.memoizedState, l.refs = qC, dS(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        l.context = Sr(s);
      else {
        var d = If(e, t, !0);
        l.context = Uf(e, d);
      }
      {
        if (l.state === r) {
          var m = qt(t) || "Component";
          ES.has(m) || (ES.add(m), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", m));
        }
        e.mode & Fn && lo.recordLegacyContextWarning(e, l), lo.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var g = t.getDerivedStateFromProps;
      if (typeof g == "function" && (wS(e, t, g, r), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (C_(e, l), Om(e, r, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var w = Dt;
        w |= sa, (e.mode & Ga) !== st && (w |= ca), e.flags |= w;
      }
    }
    function T_(e, t, r, i) {
      var l = e.stateNode, s = e.memoizedProps;
      l.props = s;
      var d = l.context, m = t.contextType, g = mi;
      if (typeof m == "object" && m !== null)
        g = Sr(m);
      else {
        var w = If(e, t, !0);
        g = Uf(e, w);
      }
      var R = t.getDerivedStateFromProps, U = typeof R == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !U && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== r || d !== g) && t1(e, l, r, g), YC();
      var j = e.memoizedState, W = l.state = j;
      if (Om(e, r, l, i), W = e.memoizedState, s === r && j === W && !fm() && !km()) {
        if (typeof l.componentDidMount == "function") {
          var K = Dt;
          K |= sa, (e.mode & Ga) !== st && (K |= ca), e.flags |= K;
        }
        return !1;
      }
      typeof R == "function" && (wS(e, t, R, r), W = e.memoizedState);
      var le = km() || ZC(e, t, s, r, j, W, g);
      if (le) {
        if (!U && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var He = Dt;
          He |= sa, (e.mode & Ga) !== st && (He |= ca), e.flags |= He;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var lt = Dt;
          lt |= sa, (e.mode & Ga) !== st && (lt |= ca), e.flags |= lt;
        }
        e.memoizedProps = r, e.memoizedState = W;
      }
      return l.props = r, l.state = W, l.context = g, le;
    }
    function w_(e, t, r, i, l) {
      var s = t.stateNode;
      GC(e, t);
      var d = t.memoizedProps, m = t.type === t.elementType ? d : uo(t.type, d);
      s.props = m;
      var g = t.pendingProps, w = s.context, R = r.contextType, U = mi;
      if (typeof R == "object" && R !== null)
        U = Sr(R);
      else {
        var j = If(t, r, !0);
        U = Uf(t, j);
      }
      var W = r.getDerivedStateFromProps, K = typeof W == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !K && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (d !== g || w !== U) && t1(t, s, i, U), YC();
      var le = t.memoizedState, He = s.state = le;
      if (Om(t, i, s, l), He = t.memoizedState, d === g && le === He && !fm() && !km() && !Me)
        return typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || le !== e.memoizedState) && (t.flags |= Dt), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || le !== e.memoizedState) && (t.flags |= Ha), !1;
      typeof W == "function" && (wS(t, r, W, i), He = t.memoizedState);
      var lt = km() || ZC(t, r, m, i, le, He, U) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Me;
      return lt ? (!K && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, He, U), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, He, U)), typeof s.componentDidUpdate == "function" && (t.flags |= Dt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Ha)) : (typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || le !== e.memoizedState) && (t.flags |= Dt), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || le !== e.memoizedState) && (t.flags |= Ha), t.memoizedProps = i, t.memoizedState = He), s.props = i, s.state = He, s.context = U, lt;
    }
    var xS, _S, OS, kS, DS, n1 = function(t, r) {
    };
    xS = !1, _S = !1, OS = {}, kS = {}, DS = {}, n1 = function(t, r) {
      if (!(t === null || typeof t != "object") && !(!t._store || t._store.validated || t.key != null)) {
        if (typeof t._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        t._store.validated = !0;
        var i = Tt(r) || "Component";
        kS[i] || (kS[i] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Wp(e, t, r) {
      var i = r.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Fn || me) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(r._owner && r._self && r._owner.stateNode !== r._self)) {
          var l = Tt(e) || "Component";
          OS[l] || (y('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), OS[l] = !0);
        }
        if (r._owner) {
          var s = r._owner, d;
          if (s) {
            var m = s;
            if (m.tag !== A)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            d = m.stateNode;
          }
          if (!d)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var g = d;
          Vt(i, "ref");
          var w = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === w)
            return t.ref;
          var R = function(j) {
            var W = g.refs;
            W === qC && (W = g.refs = {}), j === null ? delete W[w] : W[w] = j;
          };
          return R._stringRef = w, R;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!r._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Mm(e, t) {
      var r = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Am(e) {
      {
        var t = Tt(e) || "Component";
        if (DS[t])
          return;
        DS[t] = !0, y("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function r1(e) {
      var t = e._payload, r = e._init;
      return r(t);
    }
    function a1(e) {
      function t(G, ue) {
        if (e) {
          var Y = G.deletions;
          Y === null ? (G.deletions = [ue], G.flags |= nn) : Y.push(ue);
        }
      }
      function r(G, ue) {
        if (!e)
          return null;
        for (var Y = ue; Y !== null; )
          t(G, Y), Y = Y.sibling;
        return null;
      }
      function i(G, ue) {
        for (var Y = /* @__PURE__ */ new Map(), be = ue; be !== null; )
          be.key !== null ? Y.set(be.key, be) : Y.set(be.index, be), be = be.sibling;
        return Y;
      }
      function l(G, ue) {
        var Y = vc(G, ue);
        return Y.index = 0, Y.sibling = null, Y;
      }
      function s(G, ue, Y) {
        if (G.index = Y, !e)
          return G.flags |= jd, ue;
        var be = G.alternate;
        if (be !== null) {
          var $e = be.index;
          return $e < ue ? (G.flags |= xn, ue) : $e;
        } else
          return G.flags |= xn, ue;
      }
      function d(G) {
        return e && G.alternate === null && (G.flags |= xn), G;
      }
      function m(G, ue, Y, be) {
        if (ue === null || ue.tag !== V) {
          var $e = rE(Y, G.mode, be);
          return $e.return = G, $e;
        } else {
          var Fe = l(ue, Y);
          return Fe.return = G, Fe;
        }
      }
      function g(G, ue, Y, be) {
        var $e = Y.type;
        if ($e === ba)
          return R(G, ue, Y.props.children, be, Y.key);
        if (ue !== null && (ue.elementType === $e || // Keep this check inline so it only runs on the false path:
        QT(ue, Y) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof $e == "object" && $e !== null && $e.$$typeof === yt && r1($e) === ue.type)) {
          var Fe = l(ue, Y.props);
          return Fe.ref = Wp(G, ue, Y), Fe.return = G, Fe._debugSource = Y._source, Fe._debugOwner = Y._owner, Fe;
        }
        var mt = nE(Y, G.mode, be);
        return mt.ref = Wp(G, ue, Y), mt.return = G, mt;
      }
      function w(G, ue, Y, be) {
        if (ue === null || ue.tag !== $ || ue.stateNode.containerInfo !== Y.containerInfo || ue.stateNode.implementation !== Y.implementation) {
          var $e = aE(Y, G.mode, be);
          return $e.return = G, $e;
        } else {
          var Fe = l(ue, Y.children || []);
          return Fe.return = G, Fe;
        }
      }
      function R(G, ue, Y, be, $e) {
        if (ue === null || ue.tag !== ee) {
          var Fe = os(Y, G.mode, be, $e);
          return Fe.return = G, Fe;
        } else {
          var mt = l(ue, Y);
          return mt.return = G, mt;
        }
      }
      function U(G, ue, Y) {
        if (typeof ue == "string" && ue !== "" || typeof ue == "number") {
          var be = rE("" + ue, G.mode, Y);
          return be.return = G, be;
        }
        if (typeof ue == "object" && ue !== null) {
          switch (ue.$$typeof) {
            case Ci: {
              var $e = nE(ue, G.mode, Y);
              return $e.ref = Wp(G, null, ue), $e.return = G, $e;
            }
            case Vr: {
              var Fe = aE(ue, G.mode, Y);
              return Fe.return = G, Fe;
            }
            case yt: {
              var mt = ue._payload, Rt = ue._init;
              return U(G, Rt(mt), Y);
            }
          }
          if (It(ue) || li(ue)) {
            var mn = os(ue, G.mode, Y, null);
            return mn.return = G, mn;
          }
          Mm(G, ue);
        }
        return typeof ue == "function" && Am(G), null;
      }
      function j(G, ue, Y, be) {
        var $e = ue !== null ? ue.key : null;
        if (typeof Y == "string" && Y !== "" || typeof Y == "number")
          return $e !== null ? null : m(G, ue, "" + Y, be);
        if (typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case Ci:
              return Y.key === $e ? g(G, ue, Y, be) : null;
            case Vr:
              return Y.key === $e ? w(G, ue, Y, be) : null;
            case yt: {
              var Fe = Y._payload, mt = Y._init;
              return j(G, ue, mt(Fe), be);
            }
          }
          if (It(Y) || li(Y))
            return $e !== null ? null : R(G, ue, Y, be, null);
          Mm(G, Y);
        }
        return typeof Y == "function" && Am(G), null;
      }
      function W(G, ue, Y, be, $e) {
        if (typeof be == "string" && be !== "" || typeof be == "number") {
          var Fe = G.get(Y) || null;
          return m(ue, Fe, "" + be, $e);
        }
        if (typeof be == "object" && be !== null) {
          switch (be.$$typeof) {
            case Ci: {
              var mt = G.get(be.key === null ? Y : be.key) || null;
              return g(ue, mt, be, $e);
            }
            case Vr: {
              var Rt = G.get(be.key === null ? Y : be.key) || null;
              return w(ue, Rt, be, $e);
            }
            case yt:
              var mn = be._payload, en = be._init;
              return W(G, ue, Y, en(mn), $e);
          }
          if (It(be) || li(be)) {
            var cr = G.get(Y) || null;
            return R(ue, cr, be, $e, null);
          }
          Mm(ue, be);
        }
        return typeof be == "function" && Am(ue), null;
      }
      function K(G, ue, Y) {
        {
          if (typeof G != "object" || G === null)
            return ue;
          switch (G.$$typeof) {
            case Ci:
            case Vr:
              n1(G, Y);
              var be = G.key;
              if (typeof be != "string")
                break;
              if (ue === null) {
                ue = /* @__PURE__ */ new Set(), ue.add(be);
                break;
              }
              if (!ue.has(be)) {
                ue.add(be);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", be);
              break;
            case yt:
              var $e = G._payload, Fe = G._init;
              K(Fe($e), ue, Y);
              break;
          }
        }
        return ue;
      }
      function le(G, ue, Y, be) {
        for (var $e = null, Fe = 0; Fe < Y.length; Fe++) {
          var mt = Y[Fe];
          $e = K(mt, $e, G);
        }
        for (var Rt = null, mn = null, en = ue, cr = 0, tn = 0, rr = null; en !== null && tn < Y.length; tn++) {
          en.index > tn ? (rr = en, en = null) : rr = en.sibling;
          var Sa = j(G, en, Y[tn], be);
          if (Sa === null) {
            en === null && (en = rr);
            break;
          }
          e && en && Sa.alternate === null && t(G, en), cr = s(Sa, cr, tn), mn === null ? Rt = Sa : mn.sibling = Sa, mn = Sa, en = rr;
        }
        if (tn === Y.length) {
          if (r(G, en), Yr()) {
            var ea = tn;
            tc(G, ea);
          }
          return Rt;
        }
        if (en === null) {
          for (; tn < Y.length; tn++) {
            var gi = U(G, Y[tn], be);
            gi !== null && (cr = s(gi, cr, tn), mn === null ? Rt = gi : mn.sibling = gi, mn = gi);
          }
          if (Yr()) {
            var Na = tn;
            tc(G, Na);
          }
          return Rt;
        }
        for (var Ia = i(G, en); tn < Y.length; tn++) {
          var Ea = W(Ia, G, tn, Y[tn], be);
          Ea !== null && (e && Ea.alternate !== null && Ia.delete(Ea.key === null ? tn : Ea.key), cr = s(Ea, cr, tn), mn === null ? Rt = Ea : mn.sibling = Ea, mn = Ea);
        }
        if (e && Ia.forEach(function(ad) {
          return t(G, ad);
        }), Yr()) {
          var Kl = tn;
          tc(G, Kl);
        }
        return Rt;
      }
      function He(G, ue, Y, be) {
        var $e = li(Y);
        if (typeof $e != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          Y[Symbol.toStringTag] === "Generator" && (_S || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), _S = !0), Y.entries === $e && (xS || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), xS = !0);
          var Fe = $e.call(Y);
          if (Fe)
            for (var mt = null, Rt = Fe.next(); !Rt.done; Rt = Fe.next()) {
              var mn = Rt.value;
              mt = K(mn, mt, G);
            }
        }
        var en = $e.call(Y);
        if (en == null)
          throw new Error("An iterable object provided no iterator.");
        for (var cr = null, tn = null, rr = ue, Sa = 0, ea = 0, gi = null, Na = en.next(); rr !== null && !Na.done; ea++, Na = en.next()) {
          rr.index > ea ? (gi = rr, rr = null) : gi = rr.sibling;
          var Ia = j(G, rr, Na.value, be);
          if (Ia === null) {
            rr === null && (rr = gi);
            break;
          }
          e && rr && Ia.alternate === null && t(G, rr), Sa = s(Ia, Sa, ea), tn === null ? cr = Ia : tn.sibling = Ia, tn = Ia, rr = gi;
        }
        if (Na.done) {
          if (r(G, rr), Yr()) {
            var Ea = ea;
            tc(G, Ea);
          }
          return cr;
        }
        if (rr === null) {
          for (; !Na.done; ea++, Na = en.next()) {
            var Kl = U(G, Na.value, be);
            Kl !== null && (Sa = s(Kl, Sa, ea), tn === null ? cr = Kl : tn.sibling = Kl, tn = Kl);
          }
          if (Yr()) {
            var ad = ea;
            tc(G, ad);
          }
          return cr;
        }
        for (var Cv = i(G, rr); !Na.done; ea++, Na = en.next()) {
          var ol = W(Cv, G, ea, Na.value, be);
          ol !== null && (e && ol.alternate !== null && Cv.delete(ol.key === null ? ea : ol.key), Sa = s(ol, Sa, ea), tn === null ? cr = ol : tn.sibling = ol, tn = ol);
        }
        if (e && Cv.forEach(function(PD) {
          return t(G, PD);
        }), Yr()) {
          var zD = ea;
          tc(G, zD);
        }
        return cr;
      }
      function lt(G, ue, Y, be) {
        if (ue !== null && ue.tag === V) {
          r(G, ue.sibling);
          var $e = l(ue, Y);
          return $e.return = G, $e;
        }
        r(G, ue);
        var Fe = rE(Y, G.mode, be);
        return Fe.return = G, Fe;
      }
      function Je(G, ue, Y, be) {
        for (var $e = Y.key, Fe = ue; Fe !== null; ) {
          if (Fe.key === $e) {
            var mt = Y.type;
            if (mt === ba) {
              if (Fe.tag === ee) {
                r(G, Fe.sibling);
                var Rt = l(Fe, Y.props.children);
                return Rt.return = G, Rt._debugSource = Y._source, Rt._debugOwner = Y._owner, Rt;
              }
            } else if (Fe.elementType === mt || // Keep this check inline so it only runs on the false path:
            QT(Fe, Y) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof mt == "object" && mt !== null && mt.$$typeof === yt && r1(mt) === Fe.type) {
              r(G, Fe.sibling);
              var mn = l(Fe, Y.props);
              return mn.ref = Wp(G, Fe, Y), mn.return = G, mn._debugSource = Y._source, mn._debugOwner = Y._owner, mn;
            }
            r(G, Fe);
            break;
          } else
            t(G, Fe);
          Fe = Fe.sibling;
        }
        if (Y.type === ba) {
          var en = os(Y.props.children, G.mode, be, Y.key);
          return en.return = G, en;
        } else {
          var cr = nE(Y, G.mode, be);
          return cr.ref = Wp(G, ue, Y), cr.return = G, cr;
        }
      }
      function Gt(G, ue, Y, be) {
        for (var $e = Y.key, Fe = ue; Fe !== null; ) {
          if (Fe.key === $e)
            if (Fe.tag === $ && Fe.stateNode.containerInfo === Y.containerInfo && Fe.stateNode.implementation === Y.implementation) {
              r(G, Fe.sibling);
              var mt = l(Fe, Y.children || []);
              return mt.return = G, mt;
            } else {
              r(G, Fe);
              break;
            }
          else
            t(G, Fe);
          Fe = Fe.sibling;
        }
        var Rt = aE(Y, G.mode, be);
        return Rt.return = G, Rt;
      }
      function jt(G, ue, Y, be) {
        var $e = typeof Y == "object" && Y !== null && Y.type === ba && Y.key === null;
        if ($e && (Y = Y.props.children), typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case Ci:
              return d(Je(G, ue, Y, be));
            case Vr:
              return d(Gt(G, ue, Y, be));
            case yt:
              var Fe = Y._payload, mt = Y._init;
              return jt(G, ue, mt(Fe), be);
          }
          if (It(Y))
            return le(G, ue, Y, be);
          if (li(Y))
            return He(G, ue, Y, be);
          Mm(G, Y);
        }
        return typeof Y == "string" && Y !== "" || typeof Y == "number" ? d(lt(G, ue, "" + Y, be)) : (typeof Y == "function" && Am(G), r(G, ue));
      }
      return jt;
    }
    var Hf = a1(!0), i1 = a1(!1);
    function b_(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var r = t.child, i = vc(r, r.pendingProps);
        for (t.child = i, i.return = t; r.sibling !== null; )
          r = r.sibling, i = i.sibling = vc(r, r.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function R_(e, t) {
      for (var r = e.child; r !== null; )
        eD(r, t), r = r.sibling;
    }
    var Gp = {}, Xu = Gu(Gp), Yp = Gu(Gp), Lm = Gu(Gp);
    function Nm(e) {
      if (e === Gp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function o1() {
      var e = Nm(Lm.current);
      return e;
    }
    function MS(e, t) {
      ya(Lm, t, e), ya(Yp, e, e), ya(Xu, Gp, e);
      var r = zR(t);
      ma(Xu, e), ya(Xu, r, e);
    }
    function $f(e) {
      ma(Xu, e), ma(Yp, e), ma(Lm, e);
    }
    function AS() {
      var e = Nm(Xu.current);
      return e;
    }
    function l1(e) {
      Nm(Lm.current);
      var t = Nm(Xu.current), r = PR(t, e.type);
      t !== r && (ya(Yp, e, e), ya(Xu, r, e));
    }
    function LS(e) {
      Yp.current === e && (ma(Xu, e), ma(Yp, e));
    }
    var x_ = 0, u1 = 1, s1 = 1, Qp = 2, so = Gu(x_);
    function NS(e, t) {
      return (e & t) !== 0;
    }
    function Bf(e) {
      return e & u1;
    }
    function IS(e, t) {
      return e & u1 | t;
    }
    function __(e, t) {
      return e | t;
    }
    function Zu(e, t) {
      ya(so, t, e);
    }
    function Wf(e) {
      ma(so, e);
    }
    function O_(e, t) {
      var r = e.memoizedState;
      return r !== null ? r.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Im(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === H) {
          var r = t.memoizedState;
          if (r !== null) {
            var i = r.dehydrated;
            if (i === null || SC(i) || Vg(i))
              return t;
          }
        } else if (t.tag === vt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & gt) !== it;
          if (l)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var ei = (
      /*   */
      0
    ), br = (
      /* */
      1
    ), Jo = (
      /*  */
      2
    ), Rr = (
      /*    */
      4
    ), Qr = (
      /*   */
      8
    ), US = [];
    function FS() {
      for (var e = 0; e < US.length; e++) {
        var t = US[e];
        t._workInProgressVersionPrimary = null;
      }
      US.length = 0;
    }
    function k_(e, t) {
      var r = t._getVersion, i = r(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Ve = v.ReactCurrentDispatcher, qp = v.ReactCurrentBatchConfig, jS, Gf;
    jS = /* @__PURE__ */ new Set();
    var lc = se, hn = null, xr = null, _r = null, Um = !1, Kp = !1, Xp = 0, D_ = 0, M_ = 25, he = null, Fi = null, Ju = -1, zS = !1;
    function sn() {
      {
        var e = he;
        Fi === null ? Fi = [e] : Fi.push(e);
      }
    }
    function Ie() {
      {
        var e = he;
        Fi !== null && (Ju++, Fi[Ju] !== e && A_(e));
      }
    }
    function Yf(e) {
      e != null && !It(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", he, typeof e);
    }
    function A_(e) {
      {
        var t = Tt(hn);
        if (!jS.has(t) && (jS.add(t), Fi !== null)) {
          for (var r = "", i = 30, l = 0; l <= Ju; l++) {
            for (var s = Fi[l], d = l === Ju ? e : s, m = l + 1 + ". " + s; m.length < i; )
              m += " ";
            m += d + `
`, r += m;
          }
          y(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, r);
        }
      }
    }
    function ga() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function PS(e, t) {
      if (zS)
        return !1;
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", he), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, he, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var r = 0; r < t.length && r < e.length; r++)
        if (!Ge(e[r], t[r]))
          return !1;
      return !0;
    }
    function Qf(e, t, r, i, l, s) {
      lc = s, hn = t, Fi = e !== null ? e._debugHookTypes : null, Ju = -1, zS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = se, e !== null && e.memoizedState !== null ? Ve.current = M1 : Fi !== null ? Ve.current = D1 : Ve.current = k1;
      var d = r(i, l);
      if (Kp) {
        var m = 0;
        do {
          if (Kp = !1, Xp = 0, m >= M_)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          m += 1, zS = !1, xr = null, _r = null, t.updateQueue = null, Ju = -1, Ve.current = A1, d = r(i, l);
        } while (Kp);
      }
      Ve.current = qm, t._debugHookTypes = Fi;
      var g = xr !== null && xr.next !== null;
      if (lc = se, hn = null, xr = null, _r = null, he = null, Fi = null, Ju = -1, e !== null && (e.flags & Cr) !== (t.flags & Cr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Ut) !== st && y("Internal React error: Expected static flag was missing. Please notify the React team."), Um = !1, g)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return d;
    }
    function qf() {
      var e = Xp !== 0;
      return Xp = 0, e;
    }
    function c1(e, t, r) {
      t.updateQueue = e.updateQueue, (t.mode & Ga) !== st ? t.flags &= ~(gl | ca | An | Dt) : t.flags &= ~(An | Dt), e.lanes = ku(e.lanes, r);
    }
    function f1() {
      if (Ve.current = qm, Um) {
        for (var e = hn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Um = !1;
      }
      lc = se, hn = null, xr = null, _r = null, Fi = null, Ju = -1, he = null, b1 = !1, Kp = !1, Xp = 0;
    }
    function el() {
      var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return _r === null ? hn.memoizedState = _r = e : _r = _r.next = e, _r;
    }
    function ji() {
      var e;
      if (xr === null) {
        var t = hn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = xr.next;
      var r;
      if (_r === null ? r = hn.memoizedState : r = _r.next, r !== null)
        _r = r, r = _r.next, xr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        xr = e;
        var i = { memoizedState: xr.memoizedState, baseState: xr.baseState, baseQueue: xr.baseQueue, queue: xr.queue, next: null };
        _r === null ? hn.memoizedState = _r = i : _r = _r.next = i;
      }
      return _r;
    }
    function d1() {
      return { lastEffect: null, stores: null };
    }
    function VS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function HS(e, t, r) {
      var i = el(), l;
      r !== void 0 ? l = r(t) : l = t, i.memoizedState = i.baseState = l;
      var s = { pending: null, interleaved: null, lanes: se, dispatch: null, lastRenderedReducer: e, lastRenderedState: l };
      i.queue = s;
      var d = s.dispatch = U_.bind(null, hn, s);
      return [i.memoizedState, d];
    }
    function $S(e, t, r) {
      var i = ji(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = xr, d = s.baseQueue, m = l.pending;
      if (m !== null) {
        if (d !== null) {
          var g = d.next, w = m.next;
          d.next = w, m.next = g;
        }
        s.baseQueue !== d && y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = d = m, l.pending = null;
      }
      if (d !== null) {
        var R = d.next, U = s.baseState, j = null, W = null, K = null, le = R;
        do {
          var He = le.lane;
          if (Ol(lc, He)) {
            if (K !== null) {
              var Je = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Bt,
                action: le.action,
                hasEagerState: le.hasEagerState,
                eagerState: le.eagerState,
                next: null
              };
              K = K.next = Je;
            }
            if (le.hasEagerState)
              U = le.eagerState;
            else {
              var Gt = le.action;
              U = e(U, Gt);
            }
          } else {
            var lt = { lane: He, action: le.action, hasEagerState: le.hasEagerState, eagerState: le.eagerState, next: null };
            K === null ? (W = K = lt, j = U) : K = K.next = lt, hn.lanes = Mt(hn.lanes, He), mv(He);
          }
          le = le.next;
        } while (le !== null && le !== R);
        K === null ? j = U : K.next = W, Ge(U, i.memoizedState) || av(), i.memoizedState = U, i.baseState = j, i.baseQueue = K, l.lastRenderedState = U;
      }
      var jt = l.interleaved;
      if (jt !== null) {
        var G = jt;
        do {
          var ue = G.lane;
          hn.lanes = Mt(hn.lanes, ue), mv(ue), G = G.next;
        } while (G !== jt);
      } else
        d === null && (l.lanes = se);
      var Y = l.dispatch;
      return [i.memoizedState, Y];
    }
    function BS(e, t, r) {
      var i = ji(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = l.dispatch, d = l.pending, m = i.memoizedState;
      if (d !== null) {
        l.pending = null;
        var g = d.next, w = g;
        do {
          var R = w.action;
          m = e(m, R), w = w.next;
        } while (w !== g);
        Ge(m, i.memoizedState) || av(), i.memoizedState = m, i.baseQueue === null && (i.baseState = m), l.lastRenderedState = m;
      }
      return [m, s];
    }
    function FI(e, t, r) {
    }
    function jI(e, t, r) {
    }
    function WS(e, t, r) {
      var i = hn, l = el(), s, d = Yr();
      if (d) {
        if (r === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = r(), Gf || s !== r() && (y("The result of getServerSnapshot should be cached to avoid an infinite loop"), Gf = !0);
      } else {
        if (s = t(), !Gf) {
          var m = t();
          Ge(s, m) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Gf = !0);
        }
        var g = py();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        js(g, lc) || p1(i, t, s);
      }
      l.memoizedState = s;
      var w = { value: s, getSnapshot: t };
      return l.queue = w, Vm(h1.bind(null, i, w, e), [e]), i.flags |= An, Zp(br | Qr, v1.bind(null, i, w, s, t), void 0, null), s;
    }
    function Fm(e, t, r) {
      var i = hn, l = ji(), s = t();
      if (!Gf) {
        var d = t();
        Ge(s, d) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Gf = !0);
      }
      var m = l.memoizedState, g = !Ge(m, s);
      g && (l.memoizedState = s, av());
      var w = l.queue;
      if (ev(h1.bind(null, i, w, e), [e]), w.getSnapshot !== t || g || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      _r !== null && _r.memoizedState.tag & br) {
        i.flags |= An, Zp(br | Qr, v1.bind(null, i, w, s, t), void 0, null);
        var R = py();
        if (R === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        js(R, lc) || p1(i, t, s);
      }
      return s;
    }
    function p1(e, t, r) {
      e.flags |= ks;
      var i = { getSnapshot: t, value: r }, l = hn.updateQueue;
      if (l === null)
        l = d1(), hn.updateQueue = l, l.stores = [i];
      else {
        var s = l.stores;
        s === null ? l.stores = [i] : s.push(i);
      }
    }
    function v1(e, t, r, i) {
      t.value = r, t.getSnapshot = i, m1(t) && y1(e);
    }
    function h1(e, t, r) {
      var i = function() {
        m1(t) && y1(e);
      };
      return r(i);
    }
    function m1(e) {
      var t = e.getSnapshot, r = e.value;
      try {
        var i = t();
        return !Ge(r, i);
      } catch {
        return !0;
      }
    }
    function y1(e) {
      var t = Ja(e, dt);
      t !== null && Mr(t, e, dt, Tn);
    }
    function jm(e) {
      var t = el();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var r = { pending: null, interleaved: null, lanes: se, dispatch: null, lastRenderedReducer: VS, lastRenderedState: e };
      t.queue = r;
      var i = r.dispatch = F_.bind(null, hn, r);
      return [t.memoizedState, i];
    }
    function GS(e) {
      return $S(VS);
    }
    function YS(e) {
      return BS(VS);
    }
    function Zp(e, t, r, i) {
      var l = {
        tag: e,
        create: t,
        destroy: r,
        deps: i,
        // Circular
        next: null
      }, s = hn.updateQueue;
      if (s === null)
        s = d1(), hn.updateQueue = s, s.lastEffect = l.next = l;
      else {
        var d = s.lastEffect;
        if (d === null)
          s.lastEffect = l.next = l;
        else {
          var m = d.next;
          d.next = l, l.next = m, s.lastEffect = l;
        }
      }
      return l;
    }
    function QS(e) {
      var t = el();
      {
        var r = { current: e };
        return t.memoizedState = r, r;
      }
    }
    function zm(e) {
      var t = ji();
      return t.memoizedState;
    }
    function Jp(e, t, r, i) {
      var l = el(), s = i === void 0 ? null : i;
      hn.flags |= e, l.memoizedState = Zp(br | t, r, void 0, s);
    }
    function Pm(e, t, r, i) {
      var l = ji(), s = i === void 0 ? null : i, d = void 0;
      if (xr !== null) {
        var m = xr.memoizedState;
        if (d = m.destroy, s !== null) {
          var g = m.deps;
          if (PS(s, g)) {
            l.memoizedState = Zp(t, r, d, s);
            return;
          }
        }
      }
      hn.flags |= e, l.memoizedState = Zp(br | t, r, d, s);
    }
    function Vm(e, t) {
      return (hn.mode & Ga) !== st ? Jp(gl | An | Uo, Qr, e, t) : Jp(An | Uo, Qr, e, t);
    }
    function ev(e, t) {
      return Pm(An, Qr, e, t);
    }
    function qS(e, t) {
      return Jp(Dt, Jo, e, t);
    }
    function Hm(e, t) {
      return Pm(Dt, Jo, e, t);
    }
    function KS(e, t) {
      var r = Dt;
      return r |= sa, (hn.mode & Ga) !== st && (r |= ca), Jp(r, Rr, e, t);
    }
    function $m(e, t) {
      return Pm(Dt, Rr, e, t);
    }
    function g1(e, t) {
      if (typeof t == "function") {
        var r = t, i = e();
        return r(i), function() {
          r(null);
        };
      } else if (t != null) {
        var l = t;
        l.hasOwnProperty("current") || y("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
        var s = e();
        return l.current = s, function() {
          l.current = null;
        };
      }
    }
    function XS(e, t, r) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = r != null ? r.concat([e]) : null, l = Dt;
      return l |= sa, (hn.mode & Ga) !== st && (l |= ca), Jp(l, Rr, g1.bind(null, t, e), i);
    }
    function Bm(e, t, r) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = r != null ? r.concat([e]) : null;
      return Pm(Dt, Rr, g1.bind(null, t, e), i);
    }
    function L_(e, t) {
    }
    var Wm = L_;
    function ZS(e, t) {
      var r = el(), i = t === void 0 ? null : t;
      return r.memoizedState = [e, i], e;
    }
    function Gm(e, t) {
      var r = ji(), i = t === void 0 ? null : t, l = r.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (PS(i, s))
          return l[0];
      }
      return r.memoizedState = [e, i], e;
    }
    function JS(e, t) {
      var r = el(), i = t === void 0 ? null : t, l = e();
      return r.memoizedState = [l, i], l;
    }
    function Ym(e, t) {
      var r = ji(), i = t === void 0 ? null : t, l = r.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (PS(i, s))
          return l[0];
      }
      var d = e();
      return r.memoizedState = [d, i], d;
    }
    function e0(e) {
      var t = el();
      return t.memoizedState = e, e;
    }
    function S1(e) {
      var t = ji(), r = xr, i = r.memoizedState;
      return C1(t, i, e);
    }
    function E1(e) {
      var t = ji();
      if (xr === null)
        return t.memoizedState = e, e;
      var r = xr.memoizedState;
      return C1(t, r, e);
    }
    function C1(e, t, r) {
      var i = !og(lc);
      if (i) {
        if (!Ge(r, t)) {
          var l = tp();
          hn.lanes = Mt(hn.lanes, l), mv(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, av()), e.memoizedState = r, r;
    }
    function N_(e, t, r) {
      var i = Qa();
      lr(Ir(i, wr)), e(!0);
      var l = qp.transition;
      qp.transition = {};
      var s = qp.transition;
      qp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (lr(i), qp.transition = l, l === null && s._updatedFibers) {
          var d = s._updatedFibers.size;
          d > 10 && b("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function t0() {
      var e = jm(!1), t = e[0], r = e[1], i = N_.bind(null, r), l = el();
      return l.memoizedState = i, [t, i];
    }
    function T1() {
      var e = GS(), t = e[0], r = ji(), i = r.memoizedState;
      return [t, i];
    }
    function w1() {
      var e = YS(), t = e[0], r = ji(), i = r.memoizedState;
      return [t, i];
    }
    var b1 = !1;
    function I_() {
      return b1;
    }
    function n0() {
      var e = el(), t = py(), r = t.identifierPrefix, i;
      if (Yr()) {
        var l = qx();
        i = ":" + r + "R" + l;
        var s = Xp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var d = D_++;
        i = ":" + r + "r" + d.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Qm() {
      var e = ji(), t = e.memoizedState;
      return t;
    }
    function U_(e, t, r) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = as(e), l = { lane: i, action: r, hasEagerState: !1, eagerState: null, next: null };
      if (R1(e))
        x1(t, l);
      else {
        var s = $C(e, t, l, i);
        if (s !== null) {
          var d = La();
          Mr(s, e, i, d), _1(s, t, i);
        }
      }
      O1(e, i);
    }
    function F_(e, t, r) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = as(e), l = { lane: i, action: r, hasEagerState: !1, eagerState: null, next: null };
      if (R1(e))
        x1(t, l);
      else {
        var s = e.alternate;
        if (e.lanes === se && (s === null || s.lanes === se)) {
          var d = t.lastRenderedReducer;
          if (d !== null) {
            var m;
            m = Ve.current, Ve.current = co;
            try {
              var g = t.lastRenderedState, w = d(g, r);
              if (l.hasEagerState = !0, l.eagerState = w, Ge(w, g)) {
                h_(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              Ve.current = m;
            }
          }
        }
        var R = $C(e, t, l, i);
        if (R !== null) {
          var U = La();
          Mr(R, e, i, U), _1(R, t, i);
        }
      }
      O1(e, i);
    }
    function R1(e) {
      var t = e.alternate;
      return e === hn || t !== null && t === hn;
    }
    function x1(e, t) {
      Kp = Um = !0;
      var r = e.pending;
      r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
    }
    function _1(e, t, r) {
      if (ep(r)) {
        var i = t.lanes;
        i = np(i, e.pendingLanes);
        var l = Mt(i, r);
        t.lanes = l, Du(e, l);
      }
    }
    function O1(e, t, r) {
      Ho(e, t);
    }
    var qm = { readContext: Sr, useCallback: ga, useContext: ga, useEffect: ga, useImperativeHandle: ga, useInsertionEffect: ga, useLayoutEffect: ga, useMemo: ga, useReducer: ga, useRef: ga, useState: ga, useDebugValue: ga, useDeferredValue: ga, useTransition: ga, useMutableSource: ga, useSyncExternalStore: ga, useId: ga, unstable_isNewReconciler: J }, k1 = null, D1 = null, M1 = null, A1 = null, tl = null, co = null, Km = null;
    {
      var r0 = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, wt = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      k1 = { readContext: function(t) {
        return Sr(t);
      }, useCallback: function(t, r) {
        return he = "useCallback", sn(), Yf(r), ZS(t, r);
      }, useContext: function(t) {
        return he = "useContext", sn(), Sr(t);
      }, useEffect: function(t, r) {
        return he = "useEffect", sn(), Yf(r), Vm(t, r);
      }, useImperativeHandle: function(t, r, i) {
        return he = "useImperativeHandle", sn(), Yf(i), XS(t, r, i);
      }, useInsertionEffect: function(t, r) {
        return he = "useInsertionEffect", sn(), Yf(r), qS(t, r);
      }, useLayoutEffect: function(t, r) {
        return he = "useLayoutEffect", sn(), Yf(r), KS(t, r);
      }, useMemo: function(t, r) {
        he = "useMemo", sn(), Yf(r);
        var i = Ve.current;
        Ve.current = tl;
        try {
          return JS(t, r);
        } finally {
          Ve.current = i;
        }
      }, useReducer: function(t, r, i) {
        he = "useReducer", sn();
        var l = Ve.current;
        Ve.current = tl;
        try {
          return HS(t, r, i);
        } finally {
          Ve.current = l;
        }
      }, useRef: function(t) {
        return he = "useRef", sn(), QS(t);
      }, useState: function(t) {
        he = "useState", sn();
        var r = Ve.current;
        Ve.current = tl;
        try {
          return jm(t);
        } finally {
          Ve.current = r;
        }
      }, useDebugValue: function(t, r) {
        return he = "useDebugValue", sn(), void 0;
      }, useDeferredValue: function(t) {
        return he = "useDeferredValue", sn(), e0(t);
      }, useTransition: function() {
        return he = "useTransition", sn(), t0();
      }, useMutableSource: function(t, r, i) {
        return he = "useMutableSource", sn(), void 0;
      }, useSyncExternalStore: function(t, r, i) {
        return he = "useSyncExternalStore", sn(), WS(t, r, i);
      }, useId: function() {
        return he = "useId", sn(), n0();
      }, unstable_isNewReconciler: J }, D1 = { readContext: function(t) {
        return Sr(t);
      }, useCallback: function(t, r) {
        return he = "useCallback", Ie(), ZS(t, r);
      }, useContext: function(t) {
        return he = "useContext", Ie(), Sr(t);
      }, useEffect: function(t, r) {
        return he = "useEffect", Ie(), Vm(t, r);
      }, useImperativeHandle: function(t, r, i) {
        return he = "useImperativeHandle", Ie(), XS(t, r, i);
      }, useInsertionEffect: function(t, r) {
        return he = "useInsertionEffect", Ie(), qS(t, r);
      }, useLayoutEffect: function(t, r) {
        return he = "useLayoutEffect", Ie(), KS(t, r);
      }, useMemo: function(t, r) {
        he = "useMemo", Ie();
        var i = Ve.current;
        Ve.current = tl;
        try {
          return JS(t, r);
        } finally {
          Ve.current = i;
        }
      }, useReducer: function(t, r, i) {
        he = "useReducer", Ie();
        var l = Ve.current;
        Ve.current = tl;
        try {
          return HS(t, r, i);
        } finally {
          Ve.current = l;
        }
      }, useRef: function(t) {
        return he = "useRef", Ie(), QS(t);
      }, useState: function(t) {
        he = "useState", Ie();
        var r = Ve.current;
        Ve.current = tl;
        try {
          return jm(t);
        } finally {
          Ve.current = r;
        }
      }, useDebugValue: function(t, r) {
        return he = "useDebugValue", Ie(), void 0;
      }, useDeferredValue: function(t) {
        return he = "useDeferredValue", Ie(), e0(t);
      }, useTransition: function() {
        return he = "useTransition", Ie(), t0();
      }, useMutableSource: function(t, r, i) {
        return he = "useMutableSource", Ie(), void 0;
      }, useSyncExternalStore: function(t, r, i) {
        return he = "useSyncExternalStore", Ie(), WS(t, r, i);
      }, useId: function() {
        return he = "useId", Ie(), n0();
      }, unstable_isNewReconciler: J }, M1 = { readContext: function(t) {
        return Sr(t);
      }, useCallback: function(t, r) {
        return he = "useCallback", Ie(), Gm(t, r);
      }, useContext: function(t) {
        return he = "useContext", Ie(), Sr(t);
      }, useEffect: function(t, r) {
        return he = "useEffect", Ie(), ev(t, r);
      }, useImperativeHandle: function(t, r, i) {
        return he = "useImperativeHandle", Ie(), Bm(t, r, i);
      }, useInsertionEffect: function(t, r) {
        return he = "useInsertionEffect", Ie(), Hm(t, r);
      }, useLayoutEffect: function(t, r) {
        return he = "useLayoutEffect", Ie(), $m(t, r);
      }, useMemo: function(t, r) {
        he = "useMemo", Ie();
        var i = Ve.current;
        Ve.current = co;
        try {
          return Ym(t, r);
        } finally {
          Ve.current = i;
        }
      }, useReducer: function(t, r, i) {
        he = "useReducer", Ie();
        var l = Ve.current;
        Ve.current = co;
        try {
          return $S(t, r, i);
        } finally {
          Ve.current = l;
        }
      }, useRef: function(t) {
        return he = "useRef", Ie(), zm();
      }, useState: function(t) {
        he = "useState", Ie();
        var r = Ve.current;
        Ve.current = co;
        try {
          return GS(t);
        } finally {
          Ve.current = r;
        }
      }, useDebugValue: function(t, r) {
        return he = "useDebugValue", Ie(), Wm();
      }, useDeferredValue: function(t) {
        return he = "useDeferredValue", Ie(), S1(t);
      }, useTransition: function() {
        return he = "useTransition", Ie(), T1();
      }, useMutableSource: function(t, r, i) {
        return he = "useMutableSource", Ie(), void 0;
      }, useSyncExternalStore: function(t, r, i) {
        return he = "useSyncExternalStore", Ie(), Fm(t, r);
      }, useId: function() {
        return he = "useId", Ie(), Qm();
      }, unstable_isNewReconciler: J }, A1 = { readContext: function(t) {
        return Sr(t);
      }, useCallback: function(t, r) {
        return he = "useCallback", Ie(), Gm(t, r);
      }, useContext: function(t) {
        return he = "useContext", Ie(), Sr(t);
      }, useEffect: function(t, r) {
        return he = "useEffect", Ie(), ev(t, r);
      }, useImperativeHandle: function(t, r, i) {
        return he = "useImperativeHandle", Ie(), Bm(t, r, i);
      }, useInsertionEffect: function(t, r) {
        return he = "useInsertionEffect", Ie(), Hm(t, r);
      }, useLayoutEffect: function(t, r) {
        return he = "useLayoutEffect", Ie(), $m(t, r);
      }, useMemo: function(t, r) {
        he = "useMemo", Ie();
        var i = Ve.current;
        Ve.current = Km;
        try {
          return Ym(t, r);
        } finally {
          Ve.current = i;
        }
      }, useReducer: function(t, r, i) {
        he = "useReducer", Ie();
        var l = Ve.current;
        Ve.current = Km;
        try {
          return BS(t, r, i);
        } finally {
          Ve.current = l;
        }
      }, useRef: function(t) {
        return he = "useRef", Ie(), zm();
      }, useState: function(t) {
        he = "useState", Ie();
        var r = Ve.current;
        Ve.current = Km;
        try {
          return YS(t);
        } finally {
          Ve.current = r;
        }
      }, useDebugValue: function(t, r) {
        return he = "useDebugValue", Ie(), Wm();
      }, useDeferredValue: function(t) {
        return he = "useDeferredValue", Ie(), E1(t);
      }, useTransition: function() {
        return he = "useTransition", Ie(), w1();
      }, useMutableSource: function(t, r, i) {
        return he = "useMutableSource", Ie(), void 0;
      }, useSyncExternalStore: function(t, r, i) {
        return he = "useSyncExternalStore", Ie(), Fm(t, r);
      }, useId: function() {
        return he = "useId", Ie(), Qm();
      }, unstable_isNewReconciler: J }, tl = { readContext: function(t) {
        return r0(), Sr(t);
      }, useCallback: function(t, r) {
        return he = "useCallback", wt(), sn(), ZS(t, r);
      }, useContext: function(t) {
        return he = "useContext", wt(), sn(), Sr(t);
      }, useEffect: function(t, r) {
        return he = "useEffect", wt(), sn(), Vm(t, r);
      }, useImperativeHandle: function(t, r, i) {
        return he = "useImperativeHandle", wt(), sn(), XS(t, r, i);
      }, useInsertionEffect: function(t, r) {
        return he = "useInsertionEffect", wt(), sn(), qS(t, r);
      }, useLayoutEffect: function(t, r) {
        return he = "useLayoutEffect", wt(), sn(), KS(t, r);
      }, useMemo: function(t, r) {
        he = "useMemo", wt(), sn();
        var i = Ve.current;
        Ve.current = tl;
        try {
          return JS(t, r);
        } finally {
          Ve.current = i;
        }
      }, useReducer: function(t, r, i) {
        he = "useReducer", wt(), sn();
        var l = Ve.current;
        Ve.current = tl;
        try {
          return HS(t, r, i);
        } finally {
          Ve.current = l;
        }
      }, useRef: function(t) {
        return he = "useRef", wt(), sn(), QS(t);
      }, useState: function(t) {
        he = "useState", wt(), sn();
        var r = Ve.current;
        Ve.current = tl;
        try {
          return jm(t);
        } finally {
          Ve.current = r;
        }
      }, useDebugValue: function(t, r) {
        return he = "useDebugValue", wt(), sn(), void 0;
      }, useDeferredValue: function(t) {
        return he = "useDeferredValue", wt(), sn(), e0(t);
      }, useTransition: function() {
        return he = "useTransition", wt(), sn(), t0();
      }, useMutableSource: function(t, r, i) {
        return he = "useMutableSource", wt(), sn(), void 0;
      }, useSyncExternalStore: function(t, r, i) {
        return he = "useSyncExternalStore", wt(), sn(), WS(t, r, i);
      }, useId: function() {
        return he = "useId", wt(), sn(), n0();
      }, unstable_isNewReconciler: J }, co = { readContext: function(t) {
        return r0(), Sr(t);
      }, useCallback: function(t, r) {
        return he = "useCallback", wt(), Ie(), Gm(t, r);
      }, useContext: function(t) {
        return he = "useContext", wt(), Ie(), Sr(t);
      }, useEffect: function(t, r) {
        return he = "useEffect", wt(), Ie(), ev(t, r);
      }, useImperativeHandle: function(t, r, i) {
        return he = "useImperativeHandle", wt(), Ie(), Bm(t, r, i);
      }, useInsertionEffect: function(t, r) {
        return he = "useInsertionEffect", wt(), Ie(), Hm(t, r);
      }, useLayoutEffect: function(t, r) {
        return he = "useLayoutEffect", wt(), Ie(), $m(t, r);
      }, useMemo: function(t, r) {
        he = "useMemo", wt(), Ie();
        var i = Ve.current;
        Ve.current = co;
        try {
          return Ym(t, r);
        } finally {
          Ve.current = i;
        }
      }, useReducer: function(t, r, i) {
        he = "useReducer", wt(), Ie();
        var l = Ve.current;
        Ve.current = co;
        try {
          return $S(t, r, i);
        } finally {
          Ve.current = l;
        }
      }, useRef: function(t) {
        return he = "useRef", wt(), Ie(), zm();
      }, useState: function(t) {
        he = "useState", wt(), Ie();
        var r = Ve.current;
        Ve.current = co;
        try {
          return GS(t);
        } finally {
          Ve.current = r;
        }
      }, useDebugValue: function(t, r) {
        return he = "useDebugValue", wt(), Ie(), Wm();
      }, useDeferredValue: function(t) {
        return he = "useDeferredValue", wt(), Ie(), S1(t);
      }, useTransition: function() {
        return he = "useTransition", wt(), Ie(), T1();
      }, useMutableSource: function(t, r, i) {
        return he = "useMutableSource", wt(), Ie(), void 0;
      }, useSyncExternalStore: function(t, r, i) {
        return he = "useSyncExternalStore", wt(), Ie(), Fm(t, r);
      }, useId: function() {
        return he = "useId", wt(), Ie(), Qm();
      }, unstable_isNewReconciler: J }, Km = { readContext: function(t) {
        return r0(), Sr(t);
      }, useCallback: function(t, r) {
        return he = "useCallback", wt(), Ie(), Gm(t, r);
      }, useContext: function(t) {
        return he = "useContext", wt(), Ie(), Sr(t);
      }, useEffect: function(t, r) {
        return he = "useEffect", wt(), Ie(), ev(t, r);
      }, useImperativeHandle: function(t, r, i) {
        return he = "useImperativeHandle", wt(), Ie(), Bm(t, r, i);
      }, useInsertionEffect: function(t, r) {
        return he = "useInsertionEffect", wt(), Ie(), Hm(t, r);
      }, useLayoutEffect: function(t, r) {
        return he = "useLayoutEffect", wt(), Ie(), $m(t, r);
      }, useMemo: function(t, r) {
        he = "useMemo", wt(), Ie();
        var i = Ve.current;
        Ve.current = co;
        try {
          return Ym(t, r);
        } finally {
          Ve.current = i;
        }
      }, useReducer: function(t, r, i) {
        he = "useReducer", wt(), Ie();
        var l = Ve.current;
        Ve.current = co;
        try {
          return BS(t, r, i);
        } finally {
          Ve.current = l;
        }
      }, useRef: function(t) {
        return he = "useRef", wt(), Ie(), zm();
      }, useState: function(t) {
        he = "useState", wt(), Ie();
        var r = Ve.current;
        Ve.current = co;
        try {
          return YS(t);
        } finally {
          Ve.current = r;
        }
      }, useDebugValue: function(t, r) {
        return he = "useDebugValue", wt(), Ie(), Wm();
      }, useDeferredValue: function(t) {
        return he = "useDeferredValue", wt(), Ie(), E1(t);
      }, useTransition: function() {
        return he = "useTransition", wt(), Ie(), w1();
      }, useMutableSource: function(t, r, i) {
        return he = "useMutableSource", wt(), Ie(), void 0;
      }, useSyncExternalStore: function(t, r, i) {
        return he = "useSyncExternalStore", wt(), Ie(), Fm(t, r);
      }, useId: function() {
        return he = "useId", wt(), Ie(), Qm();
      }, unstable_isNewReconciler: J };
    }
    var es = p.unstable_now, L1 = 0, Xm = -1, tv = -1, Zm = -1, a0 = !1, Jm = !1;
    function N1() {
      return a0;
    }
    function j_() {
      Jm = !0;
    }
    function z_() {
      a0 = !1, Jm = !1;
    }
    function P_() {
      a0 = Jm, Jm = !1;
    }
    function I1() {
      return L1;
    }
    function U1() {
      L1 = es();
    }
    function i0(e) {
      tv = es(), e.actualStartTime < 0 && (e.actualStartTime = es());
    }
    function F1(e) {
      tv = -1;
    }
    function ey(e, t) {
      if (tv >= 0) {
        var r = es() - tv;
        e.actualDuration += r, t && (e.selfBaseDuration = r), tv = -1;
      }
    }
    function nl(e) {
      if (Xm >= 0) {
        var t = es() - Xm;
        Xm = -1;
        for (var r = e.return; r !== null; ) {
          switch (r.tag) {
            case M:
              var i = r.stateNode;
              i.effectDuration += t;
              return;
            case ie:
              var l = r.stateNode;
              l.effectDuration += t;
              return;
          }
          r = r.return;
        }
      }
    }
    function o0(e) {
      if (Zm >= 0) {
        var t = es() - Zm;
        Zm = -1;
        for (var r = e.return; r !== null; ) {
          switch (r.tag) {
            case M:
              var i = r.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case ie:
              var l = r.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          r = r.return;
        }
      }
    }
    function rl() {
      Xm = es();
    }
    function l0() {
      Zm = es();
    }
    function u0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function uc(e, t) {
      return { value: e, source: t, stack: lu(t), digest: null };
    }
    function s0(e, t, r) {
      return { value: e, source: null, stack: r ?? null, digest: t ?? null };
    }
    function V_(e, t) {
      return !0;
    }
    function c0(e, t) {
      try {
        var r = V_(e, t);
        if (r === !1)
          return;
        var i = t.value, l = t.source, s = t.stack, d = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === A)
            return;
          console.error(i);
        }
        var m = l ? Tt(l) : null, g = m ? "The above error occurred in the <" + m + "> component:" : "The above error occurred in one of your React components:", w;
        if (e.tag === M)
          w = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var R = Tt(e) || "Anonymous";
          w = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + R + ".");
        }
        var U = g + `
` + d + `

` + ("" + w);
        console.error(U);
      } catch (j) {
        setTimeout(function() {
          throw j;
        });
      }
    }
    var H_ = typeof WeakMap == "function" ? WeakMap : Map;
    function j1(e, t, r) {
      var i = Bl(Tn, r);
      i.tag = cS, i.payload = { element: null };
      var l = t.value;
      return i.callback = function() {
        Nk(l), c0(e, t);
      }, i;
    }
    function f0(e, t, r) {
      var i = Bl(Tn, r);
      i.tag = cS;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var s = t.value;
        i.payload = function() {
          return l(s);
        }, i.callback = function() {
          qT(e), c0(e, t);
        };
      }
      var d = e.stateNode;
      return d !== null && typeof d.componentDidCatch == "function" && (i.callback = function() {
        qT(e), c0(e, t), typeof l != "function" && Ak(this);
        var g = t.value, w = t.stack;
        this.componentDidCatch(g, { componentStack: w !== null ? w : "" }), typeof l != "function" && (ha(e.lanes, dt) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Tt(e) || "Unknown"));
      }), i;
    }
    function z1(e, t, r) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new H_(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(r)) {
        l.add(r);
        var s = Ik.bind(null, e, t, r);
        Tr && yv(e, r), t.then(s, s);
      }
    }
    function $_(e, t, r, i) {
      var l = e.updateQueue;
      if (l === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(r), e.updateQueue = s;
      } else
        l.add(r);
    }
    function B_(e, t) {
      var r = e.tag;
      if ((e.mode & Ut) === st && (r === k || r === ae || r === _e)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function P1(e) {
      var t = e;
      do {
        if (t.tag === H && O_(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function V1(e, t, r, i, l) {
      if ((e.mode & Ut) === st) {
        if (e === t)
          e.flags |= vr;
        else {
          if (e.flags |= gt, r.flags |= Ds, r.flags &= ~(Lc | Ra), r.tag === A) {
            var s = r.alternate;
            if (s === null)
              r.tag = ut;
            else {
              var d = Bl(Tn, dt);
              d.tag = bm, Ku(r, d, dt);
            }
          }
          r.lanes = Mt(r.lanes, dt);
        }
        return e;
      }
      return e.flags |= vr, e.lanes = l, e;
    }
    function W_(e, t, r, i, l) {
      if (r.flags |= Ra, Tr && yv(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        B_(r), Yr() && r.mode & Ut && MC();
        var d = P1(t);
        if (d !== null) {
          d.flags &= ~$n, V1(d, t, r, e, l), d.mode & Ut && z1(e, s, l), $_(d, e, s);
          return;
        } else {
          if (!Ou(l)) {
            z1(e, s, l), B0();
            return;
          }
          var m = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = m;
        }
      } else if (Yr() && r.mode & Ut) {
        MC();
        var g = P1(t);
        if (g !== null) {
          (g.flags & vr) === it && (g.flags |= $n), V1(g, t, r, e, l), rS(uc(i, r));
          return;
        }
      }
      i = uc(i, r), bk(i);
      var w = t;
      do {
        switch (w.tag) {
          case M: {
            var R = i;
            w.flags |= vr;
            var U = or(l);
            w.lanes = Mt(w.lanes, U);
            var j = j1(w, R, U);
            pS(w, j);
            return;
          }
          case A:
            var W = i, K = w.type, le = w.stateNode;
            if ((w.flags & gt) === it && (typeof K.getDerivedStateFromError == "function" || le !== null && typeof le.componentDidCatch == "function" && !PT(le))) {
              w.flags |= vr;
              var He = or(l);
              w.lanes = Mt(w.lanes, He);
              var lt = f0(w, W, He);
              pS(w, lt);
              return;
            }
            break;
        }
        w = w.return;
      } while (w !== null);
    }
    function G_() {
      return null;
    }
    var nv = v.ReactCurrentOwner, fo = !1, d0, rv, p0, v0, h0, sc, m0, ty;
    d0 = {}, rv = {}, p0 = {}, v0 = {}, h0 = {}, sc = !1, m0 = {}, ty = {};
    function Ma(e, t, r, i) {
      e === null ? t.child = i1(t, null, r, i) : t.child = Hf(t, e.child, r, i);
    }
    function Y_(e, t, r, i) {
      t.child = Hf(t, e.child, null, i), t.child = Hf(t, null, r, i);
    }
    function H1(e, t, r, i, l) {
      if (t.type !== t.elementType) {
        var s = r.propTypes;
        s && io(
          s,
          i,
          // Resolved props
          "prop",
          qt(r)
        );
      }
      var d = r.render, m = t.ref, g, w;
      Vf(t, l), Vo(t);
      {
        if (nv.current = t, ia(!0), g = Qf(e, t, d, i, m, l), w = qf(), t.mode & Fn) {
          ir(!0);
          try {
            g = Qf(e, t, d, i, m, l), w = qf();
          } finally {
            ir(!1);
          }
        }
        ia(!1);
      }
      return Sl(), e !== null && !fo ? (c1(e, t, l), Wl(e, t, l)) : (Yr() && w && Xg(t), t.flags |= No, Ma(e, t, g, l), t.child);
    }
    function $1(e, t, r, i, l) {
      if (e === null) {
        var s = r.type;
        if (Zk(s) && r.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        r.defaultProps === void 0) {
          var d = s;
          return d = rd(s), t.tag = _e, t.type = d, S0(t, s), B1(e, t, d, i, l);
        }
        {
          var m = s.propTypes;
          m && io(
            m,
            i,
            // Resolved props
            "prop",
            qt(s)
          );
        }
        var g = tE(r.type, null, i, t, t.mode, l);
        return g.ref = t.ref, g.return = t, t.child = g, g;
      }
      {
        var w = r.type, R = w.propTypes;
        R && io(
          R,
          i,
          // Resolved props
          "prop",
          qt(w)
        );
      }
      var U = e.child, j = R0(e, l);
      if (!j) {
        var W = U.memoizedProps, K = r.compare;
        if (K = K !== null ? K : rt, K(W, i) && e.ref === t.ref)
          return Wl(e, t, l);
      }
      t.flags |= No;
      var le = vc(U, i);
      return le.ref = t.ref, le.return = t, t.child = le, le;
    }
    function B1(e, t, r, i, l) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === yt) {
          var d = s, m = d._payload, g = d._init;
          try {
            s = g(m);
          } catch {
            s = null;
          }
          var w = s && s.propTypes;
          w && io(
            w,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            qt(s)
          );
        }
      }
      if (e !== null) {
        var R = e.memoizedProps;
        if (rt(R, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (fo = !1, t.pendingProps = i = R, R0(e, l))
            (e.flags & Ds) !== it && (fo = !0);
          else
            return t.lanes = e.lanes, Wl(e, t, l);
      }
      return y0(e, t, r, i, l);
    }
    function W1(e, t, r) {
      var i = t.pendingProps, l = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || O)
        if ((t.mode & Ut) === st) {
          var d = { baseLanes: se, cachePool: null, transitions: null };
          t.memoizedState = d, vy(t, r);
        } else if (ha(r, va)) {
          var U = { baseLanes: se, cachePool: null, transitions: null };
          t.memoizedState = U;
          var j = s !== null ? s.baseLanes : r;
          vy(t, j);
        } else {
          var m = null, g;
          if (s !== null) {
            var w = s.baseLanes;
            g = Mt(w, r);
          } else
            g = r;
          t.lanes = t.childLanes = va;
          var R = { baseLanes: g, cachePool: m, transitions: null };
          return t.memoizedState = R, t.updateQueue = null, vy(t, g), null;
        }
      else {
        var W;
        s !== null ? (W = Mt(s.baseLanes, r), t.memoizedState = null) : W = r, vy(t, W);
      }
      return Ma(e, t, l, r), t.child;
    }
    function Q_(e, t, r) {
      var i = t.pendingProps;
      return Ma(e, t, i, r), t.child;
    }
    function q_(e, t, r) {
      var i = t.pendingProps.children;
      return Ma(e, t, i, r), t.child;
    }
    function K_(e, t, r) {
      {
        t.flags |= Dt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, s = l.children;
      return Ma(e, t, s, r), t.child;
    }
    function G1(e, t) {
      var r = t.ref;
      (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= ua, t.flags |= zd);
    }
    function y0(e, t, r, i, l) {
      if (t.type !== t.elementType) {
        var s = r.propTypes;
        s && io(
          s,
          i,
          // Resolved props
          "prop",
          qt(r)
        );
      }
      var d;
      {
        var m = If(t, r, !0);
        d = Uf(t, m);
      }
      var g, w;
      Vf(t, l), Vo(t);
      {
        if (nv.current = t, ia(!0), g = Qf(e, t, r, i, d, l), w = qf(), t.mode & Fn) {
          ir(!0);
          try {
            g = Qf(e, t, r, i, d, l), w = qf();
          } finally {
            ir(!1);
          }
        }
        ia(!1);
      }
      return Sl(), e !== null && !fo ? (c1(e, t, l), Wl(e, t, l)) : (Yr() && w && Xg(t), t.flags |= No, Ma(e, t, g, l), t.child);
    }
    function Y1(e, t, r, i, l) {
      {
        switch (pD(t)) {
          case !1: {
            var s = t.stateNode, d = t.type, m = new d(t.memoizedProps, s.context), g = m.state;
            s.updater.enqueueSetState(s, g, null);
            break;
          }
          case !0: {
            t.flags |= gt, t.flags |= vr;
            var w = new Error("Simulated error coming from DevTools"), R = or(l);
            t.lanes = Mt(t.lanes, R);
            var U = f0(t, uc(w, t), R);
            pS(t, U);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var j = r.propTypes;
          j && io(
            j,
            i,
            // Resolved props
            "prop",
            qt(r)
          );
        }
      }
      var W;
      Zo(r) ? (W = !0, pm(t)) : W = !1, Vf(t, l);
      var K = t.stateNode, le;
      K === null ? (ry(e, t), e1(t, r, i), RS(t, r, i, l), le = !0) : e === null ? le = T_(t, r, i, l) : le = w_(e, t, r, i, l);
      var He = g0(e, t, r, le, W, l);
      {
        var lt = t.stateNode;
        le && lt.props !== i && (sc || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Tt(t) || "a component"), sc = !0);
      }
      return He;
    }
    function g0(e, t, r, i, l, s) {
      G1(e, t);
      var d = (t.flags & gt) !== it;
      if (!i && !d)
        return l && _C(t, r, !1), Wl(e, t, s);
      var m = t.stateNode;
      nv.current = t;
      var g;
      if (d && typeof r.getDerivedStateFromError != "function")
        g = null, F1();
      else {
        Vo(t);
        {
          if (ia(!0), g = m.render(), t.mode & Fn) {
            ir(!0);
            try {
              m.render();
            } finally {
              ir(!1);
            }
          }
          ia(!1);
        }
        Sl();
      }
      return t.flags |= No, e !== null && d ? Y_(e, t, g, s) : Ma(e, t, g, s), t.memoizedState = m.state, l && _C(t, r, !0), t.child;
    }
    function Q1(e) {
      var t = e.stateNode;
      t.pendingContext ? RC(e, t.pendingContext, t.pendingContext !== t.context) : t.context && RC(e, t.context, !1), MS(e, t.containerInfo);
    }
    function X_(e, t, r) {
      if (Q1(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, s = l.element;
      GC(e, t), Om(t, i, null, r);
      var d = t.memoizedState;
      t.stateNode;
      var m = d.element;
      if (l.isDehydrated) {
        var g = { element: m, isDehydrated: !1, cache: d.cache, pendingSuspenseBoundaries: d.pendingSuspenseBoundaries, transitions: d.transitions }, w = t.updateQueue;
        if (w.baseState = g, t.memoizedState = g, t.flags & $n) {
          var R = uc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return q1(e, t, m, r, R);
        } else if (m !== s) {
          var U = uc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return q1(e, t, m, r, U);
        } else {
          t_(t);
          var j = i1(t, null, m, r);
          t.child = j;
          for (var W = j; W; )
            W.flags = W.flags & ~xn | $a, W = W.sibling;
        }
      } else {
        if (zf(), m === s)
          return Wl(e, t, r);
        Ma(e, t, m, r);
      }
      return t.child;
    }
    function q1(e, t, r, i, l) {
      return zf(), rS(l), t.flags |= $n, Ma(e, t, r, i), t.child;
    }
    function Z_(e, t, r) {
      l1(t), e === null && nS(t);
      var i = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, d = l.children, m = Fg(i, l);
      return m ? d = null : s !== null && Fg(i, s) && (t.flags |= un), G1(e, t), Ma(e, t, d, r), t.child;
    }
    function J_(e, t) {
      return e === null && nS(t), null;
    }
    function eO(e, t, r, i) {
      ry(e, t);
      var l = t.pendingProps, s = r, d = s._payload, m = s._init, g = m(d);
      t.type = g;
      var w = t.tag = Jk(g), R = uo(g, l), U;
      switch (w) {
        case k:
          return S0(t, g), t.type = g = rd(g), U = y0(null, t, g, R, i), U;
        case A:
          return t.type = g = q0(g), U = Y1(null, t, g, R, i), U;
        case ae:
          return t.type = g = K0(g), U = H1(null, t, g, R, i), U;
        case de: {
          if (t.type !== t.elementType) {
            var j = g.propTypes;
            j && io(
              j,
              R,
              // Resolved for outer only
              "prop",
              qt(g)
            );
          }
          return U = $1(
            null,
            t,
            g,
            uo(g.type, R),
            // The inner type can have defaults too
            i
          ), U;
        }
      }
      var W = "";
      throw g !== null && typeof g == "object" && g.$$typeof === yt && (W = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + g + ". " + ("Lazy element type must resolve to a class or function." + W));
    }
    function tO(e, t, r, i, l) {
      ry(e, t), t.tag = A;
      var s;
      return Zo(r) ? (s = !0, pm(t)) : s = !1, Vf(t, l), e1(t, r, i), RS(t, r, i, l), g0(null, t, r, !0, s, l);
    }
    function nO(e, t, r, i) {
      ry(e, t);
      var l = t.pendingProps, s;
      {
        var d = If(t, r, !1);
        s = Uf(t, d);
      }
      Vf(t, i);
      var m, g;
      Vo(t);
      {
        if (r.prototype && typeof r.prototype.render == "function") {
          var w = qt(r) || "Unknown";
          d0[w] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", w, w), d0[w] = !0);
        }
        t.mode & Fn && lo.recordLegacyContextWarning(t, null), ia(!0), nv.current = t, m = Qf(null, t, r, l, s, i), g = qf(), ia(!1);
      }
      if (Sl(), t.flags |= No, typeof m == "object" && m !== null && typeof m.render == "function" && m.$$typeof === void 0) {
        var R = qt(r) || "Unknown";
        rv[R] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), rv[R] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof m == "object" && m !== null && typeof m.render == "function" && m.$$typeof === void 0
      ) {
        {
          var U = qt(r) || "Unknown";
          rv[U] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", U, U, U), rv[U] = !0);
        }
        t.tag = A, t.memoizedState = null, t.updateQueue = null;
        var j = !1;
        return Zo(r) ? (j = !0, pm(t)) : j = !1, t.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, dS(t), JC(t, m), RS(t, r, l, i), g0(null, t, r, !0, j, i);
      } else {
        if (t.tag = k, t.mode & Fn) {
          ir(!0);
          try {
            m = Qf(null, t, r, l, s, i), g = qf();
          } finally {
            ir(!1);
          }
        }
        return Yr() && g && Xg(t), Ma(null, t, m, i), S0(t, r), t.child;
      }
    }
    function S0(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var r = "", i = Br();
          i && (r += `

Check the render method of \`` + i + "`.");
          var l = i || "", s = e._debugSource;
          s && (l = s.fileName + ":" + s.lineNumber), h0[l] || (h0[l] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", r));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var d = qt(t) || "Unknown";
          v0[d] || (y("%s: Function components do not support getDerivedStateFromProps.", d), v0[d] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var m = qt(t) || "Unknown";
          p0[m] || (y("%s: Function components do not support contextType.", m), p0[m] = !0);
        }
      }
    }
    var E0 = { dehydrated: null, treeContext: null, retryLane: Bt };
    function C0(e) {
      return { baseLanes: e, cachePool: G_(), transitions: null };
    }
    function rO(e, t) {
      var r = null;
      return { baseLanes: Mt(e.baseLanes, t), cachePool: r, transitions: e.transitions };
    }
    function aO(e, t, r, i) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return NS(e, Qp);
    }
    function iO(e, t) {
      return ku(e.childLanes, t);
    }
    function K1(e, t, r) {
      var i = t.pendingProps;
      vD(t) && (t.flags |= gt);
      var l = so.current, s = !1, d = (t.flags & gt) !== it;
      if (d || aO(l, e) ? (s = !0, t.flags &= ~gt) : (e === null || e.memoizedState !== null) && (l = __(l, s1)), l = Bf(l), Zu(t, l), e === null) {
        nS(t);
        var m = t.memoizedState;
        if (m !== null) {
          var g = m.dehydrated;
          if (g !== null)
            return cO(t, g);
        }
        var w = i.children, R = i.fallback;
        if (s) {
          var U = oO(t, w, R, r), j = t.child;
          return j.memoizedState = C0(r), t.memoizedState = E0, U;
        } else
          return T0(t, w);
      } else {
        var W = e.memoizedState;
        if (W !== null) {
          var K = W.dehydrated;
          if (K !== null)
            return fO(e, t, d, i, K, W, r);
        }
        if (s) {
          var le = i.fallback, He = i.children, lt = uO(e, t, He, le, r), Je = t.child, Gt = e.child.memoizedState;
          return Je.memoizedState = Gt === null ? C0(r) : rO(Gt, r), Je.childLanes = iO(e, r), t.memoizedState = E0, lt;
        } else {
          var jt = i.children, G = lO(e, t, jt, r);
          return t.memoizedState = null, G;
        }
      }
    }
    function T0(e, t, r) {
      var i = e.mode, l = { mode: "visible", children: t }, s = w0(l, i);
      return s.return = e, e.child = s, s;
    }
    function oO(e, t, r, i) {
      var l = e.mode, s = e.child, d = { mode: "hidden", children: t }, m, g;
      return (l & Ut) === st && s !== null ? (m = s, m.childLanes = se, m.pendingProps = d, e.mode & ft && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = 0, m.treeBaseDuration = 0), g = os(r, l, i, null)) : (m = w0(d, l), g = os(r, l, i, null)), m.return = e, g.return = e, m.sibling = g, e.child = m, g;
    }
    function w0(e, t, r) {
      return XT(e, t, se, null);
    }
    function X1(e, t) {
      return vc(e, t);
    }
    function lO(e, t, r, i) {
      var l = e.child, s = l.sibling, d = X1(l, { mode: "visible", children: r });
      if ((t.mode & Ut) === st && (d.lanes = i), d.return = t, d.sibling = null, s !== null) {
        var m = t.deletions;
        m === null ? (t.deletions = [s], t.flags |= nn) : m.push(s);
      }
      return t.child = d, d;
    }
    function uO(e, t, r, i, l) {
      var s = t.mode, d = e.child, m = d.sibling, g = { mode: "hidden", children: r }, w;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Ut) === st && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== d
      ) {
        var R = t.child;
        w = R, w.childLanes = se, w.pendingProps = g, t.mode & ft && (w.actualDuration = 0, w.actualStartTime = -1, w.selfBaseDuration = d.selfBaseDuration, w.treeBaseDuration = d.treeBaseDuration), t.deletions = null;
      } else
        w = X1(d, g), w.subtreeFlags = d.subtreeFlags & Cr;
      var U;
      return m !== null ? U = vc(m, i) : (U = os(i, s, l, null), U.flags |= xn), U.return = t, w.return = t, w.sibling = U, t.child = w, U;
    }
    function ny(e, t, r, i) {
      i !== null && rS(i), Hf(t, e.child, null, r);
      var l = t.pendingProps, s = l.children, d = T0(t, s);
      return d.flags |= xn, t.memoizedState = null, d;
    }
    function sO(e, t, r, i, l) {
      var s = t.mode, d = { mode: "visible", children: r }, m = w0(d, s), g = os(i, s, l, null);
      return g.flags |= xn, m.return = t, g.return = t, m.sibling = g, t.child = m, (t.mode & Ut) !== st && Hf(t, e.child, null, l), g;
    }
    function cO(e, t, r) {
      return (e.mode & Ut) === st ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = dt) : Vg(t) ? e.lanes = Tl : e.lanes = va, null;
    }
    function fO(e, t, r, i, l, s, d) {
      if (r)
        if (t.flags & $n) {
          t.flags &= ~$n;
          var G = s0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return ny(e, t, d, G);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= gt, null;
          var ue = i.children, Y = i.fallback, be = sO(e, t, ue, Y, d), $e = t.child;
          return $e.memoizedState = C0(d), t.memoizedState = E0, be;
        }
      else {
        if (Jx(), (t.mode & Ut) === st)
          return ny(
            e,
            t,
            d,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Vg(l)) {
          var m, g, w;
          {
            var R = mx(l);
            m = R.digest, g = R.message, w = R.stack;
          }
          var U;
          g ? U = new Error(g) : U = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var j = s0(U, m, w);
          return ny(e, t, d, j);
        }
        var W = ha(d, e.childLanes);
        if (fo || W) {
          var K = py();
          if (K !== null) {
            var le = ug(K, d);
            if (le !== Bt && le !== s.retryLane) {
              s.retryLane = le;
              var He = Tn;
              Ja(e, le), Mr(K, e, le, He);
            }
          }
          B0();
          var lt = s0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return ny(e, t, d, lt);
        } else if (SC(l)) {
          t.flags |= gt, t.child = e.child;
          var Je = Uk.bind(null, e);
          return yx(l, Je), null;
        } else {
          n_(t, l, s.treeContext);
          var Gt = i.children, jt = T0(t, Gt);
          return jt.flags |= $a, jt;
        }
      }
    }
    function Z1(e, t, r) {
      e.lanes = Mt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Mt(i.lanes, t)), uS(e.return, t, r);
    }
    function dO(e, t, r) {
      for (var i = t; i !== null; ) {
        if (i.tag === H) {
          var l = i.memoizedState;
          l !== null && Z1(i, r, e);
        } else if (i.tag === vt)
          Z1(i, r, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function pO(e) {
      for (var t = e, r = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Im(i) === null && (r = t), t = t.sibling;
      }
      return r;
    }
    function vO(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !m0[e])
        if (m0[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              y('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          y('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function hO(e, t) {
      e !== void 0 && !ty[e] && (e !== "collapsed" && e !== "hidden" ? (ty[e] = !0, y('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (ty[e] = !0, y('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function J1(e, t) {
      {
        var r = It(e), i = !r && typeof li(e) == "function";
        if (r || i) {
          var l = r ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function mO(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (It(e)) {
          for (var r = 0; r < e.length; r++)
            if (!J1(e[r], r))
              return;
        } else {
          var i = li(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var s = l.next(), d = 0; !s.done; s = l.next()) {
                if (!J1(s.value, d))
                  return;
                d++;
              }
          } else
            y('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function b0(e, t, r, i, l) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: i, tail: r, tailMode: l } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = r, s.tailMode = l);
    }
    function eT(e, t, r) {
      var i = t.pendingProps, l = i.revealOrder, s = i.tail, d = i.children;
      vO(l), hO(s, l), mO(d, l), Ma(e, t, d, r);
      var m = so.current, g = NS(m, Qp);
      if (g)
        m = IS(m, Qp), t.flags |= gt;
      else {
        var w = e !== null && (e.flags & gt) !== it;
        w && dO(t, t.child, r), m = Bf(m);
      }
      if (Zu(t, m), (t.mode & Ut) === st)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var R = pO(t.child), U;
            R === null ? (U = t.child, t.child = null) : (U = R.sibling, R.sibling = null), b0(
              t,
              !1,
              // isBackwards
              U,
              R,
              s
            );
            break;
          }
          case "backwards": {
            var j = null, W = t.child;
            for (t.child = null; W !== null; ) {
              var K = W.alternate;
              if (K !== null && Im(K) === null) {
                t.child = W;
                break;
              }
              var le = W.sibling;
              W.sibling = j, j = W, W = le;
            }
            b0(
              t,
              !0,
              // isBackwards
              j,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            b0(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function yO(e, t, r) {
      MS(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Hf(t, null, i, r) : Ma(e, t, i, r), t.child;
    }
    var tT = !1;
    function gO(e, t, r) {
      var i = t.type, l = i._context, s = t.pendingProps, d = t.memoizedProps, m = s.value;
      {
        "value" in s || tT || (tT = !0, y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var g = t.type.propTypes;
        g && io(g, s, "prop", "Context.Provider");
      }
      if (HC(t, l, m), d !== null) {
        var w = d.value;
        if (Ge(w, m)) {
          if (d.children === s.children && !fm())
            return Wl(e, t, r);
        } else
          d_(t, l, r);
      }
      var R = s.children;
      return Ma(e, t, R, r), t.child;
    }
    var nT = !1;
    function SO(e, t, r) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (nT || (nT = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Vf(t, r);
      var d = Sr(i);
      Vo(t);
      var m;
      return nv.current = t, ia(!0), m = s(d), ia(!1), Sl(), t.flags |= No, Ma(e, t, m, r), t.child;
    }
    function av() {
      fo = !0;
    }
    function ry(e, t) {
      (t.mode & Ut) === st && e !== null && (e.alternate = null, t.alternate = null, t.flags |= xn);
    }
    function Wl(e, t, r) {
      return e !== null && (t.dependencies = e.dependencies), F1(), mv(t.lanes), ha(r, t.childLanes) ? (b_(e, t), t.child) : null;
    }
    function EO(e, t, r) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, r.index = t.index, r.sibling = t.sibling, r.return = t.return, r.ref = t.ref, t === i.child)
          i.child = r;
        else {
          var l = i.child;
          if (l === null)
            throw new Error("Expected parent to have a child.");
          for (; l.sibling !== t; )
            if (l = l.sibling, l === null)
              throw new Error("Expected to find the previous sibling.");
          l.sibling = r;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= nn) : s.push(e), r.flags |= xn, r;
      }
    }
    function R0(e, t) {
      var r = e.lanes;
      return !!ha(r, t);
    }
    function CO(e, t, r) {
      switch (t.tag) {
        case M:
          Q1(t), t.stateNode, zf();
          break;
        case z:
          l1(t);
          break;
        case A: {
          var i = t.type;
          Zo(i) && pm(t);
          break;
        }
        case $:
          MS(t, t.stateNode.containerInfo);
          break;
        case ce: {
          var l = t.memoizedProps.value, s = t.type._context;
          HC(t, s, l);
          break;
        }
        case ie:
          {
            var d = ha(r, t.childLanes);
            d && (t.flags |= Dt);
            {
              var m = t.stateNode;
              m.effectDuration = 0, m.passiveEffectDuration = 0;
            }
          }
          break;
        case H: {
          var g = t.memoizedState;
          if (g !== null) {
            if (g.dehydrated !== null)
              return Zu(t, Bf(so.current)), t.flags |= gt, null;
            var w = t.child, R = w.childLanes;
            if (ha(r, R))
              return K1(e, t, r);
            Zu(t, Bf(so.current));
            var U = Wl(e, t, r);
            return U !== null ? U.sibling : null;
          } else
            Zu(t, Bf(so.current));
          break;
        }
        case vt: {
          var j = (e.flags & gt) !== it, W = ha(r, t.childLanes);
          if (j) {
            if (W)
              return eT(e, t, r);
            t.flags |= gt;
          }
          var K = t.memoizedState;
          if (K !== null && (K.rendering = null, K.tail = null, K.lastEffect = null), Zu(t, so.current), W)
            break;
          return null;
        }
        case Ue:
        case ge:
          return t.lanes = se, W1(e, t, r);
      }
      return Wl(e, t, r);
    }
    function rT(e, t, r) {
      if (t._debugNeedsRemount && e !== null)
        return EO(e, t, tE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || fm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          fo = !0;
        else {
          var s = R0(e, r);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & gt) === it)
            return fo = !1, CO(e, t, r);
          (e.flags & Ds) !== it ? fo = !0 : fo = !1;
        }
      } else if (fo = !1, Yr() && Yx(t)) {
        var d = t.index, m = Qx();
        DC(t, m, d);
      }
      switch (t.lanes = se, t.tag) {
        case N:
          return nO(e, t, t.type, r);
        case Qe: {
          var g = t.elementType;
          return eO(e, t, g, r);
        }
        case k: {
          var w = t.type, R = t.pendingProps, U = t.elementType === w ? R : uo(w, R);
          return y0(e, t, w, U, r);
        }
        case A: {
          var j = t.type, W = t.pendingProps, K = t.elementType === j ? W : uo(j, W);
          return Y1(e, t, j, K, r);
        }
        case M:
          return X_(e, t, r);
        case z:
          return Z_(e, t, r);
        case V:
          return J_(e, t);
        case H:
          return K1(e, t, r);
        case $:
          return yO(e, t, r);
        case ae: {
          var le = t.type, He = t.pendingProps, lt = t.elementType === le ? He : uo(le, He);
          return H1(e, t, le, lt, r);
        }
        case ee:
          return Q_(e, t, r);
        case Z:
          return q_(e, t, r);
        case ie:
          return K_(e, t, r);
        case ce:
          return gO(e, t, r);
        case we:
          return SO(e, t, r);
        case de: {
          var Je = t.type, Gt = t.pendingProps, jt = uo(Je, Gt);
          if (t.type !== t.elementType) {
            var G = Je.propTypes;
            G && io(
              G,
              jt,
              // Resolved for outer only
              "prop",
              qt(Je)
            );
          }
          return jt = uo(Je.type, jt), $1(e, t, Je, jt, r);
        }
        case _e:
          return B1(e, t, t.type, t.pendingProps, r);
        case ut: {
          var ue = t.type, Y = t.pendingProps, be = t.elementType === ue ? Y : uo(ue, Y);
          return tO(e, t, ue, be, r);
        }
        case vt:
          return eT(e, t, r);
        case _t:
          break;
        case Ue:
          return W1(e, t, r);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Kf(e) {
      e.flags |= Dt;
    }
    function aT(e) {
      e.flags |= ua, e.flags |= zd;
    }
    var iT, x0, oT, lT;
    iT = function(t, r, i, l) {
      for (var s = r.child; s !== null; ) {
        if (s.tag === z || s.tag === V)
          BR(t, s.stateNode);
        else if (s.tag !== $) {
          if (s.child !== null) {
            s.child.return = s, s = s.child;
            continue;
          }
        }
        if (s === r)
          return;
        for (; s.sibling === null; ) {
          if (s.return === null || s.return === r)
            return;
          s = s.return;
        }
        s.sibling.return = s.return, s = s.sibling;
      }
    }, x0 = function(t, r) {
    }, oT = function(t, r, i, l, s) {
      var d = t.memoizedProps;
      if (d !== l) {
        var m = r.stateNode, g = AS(), w = GR(m, i, d, l, s, g);
        r.updateQueue = w, w && Kf(r);
      }
    }, lT = function(t, r, i, l) {
      i !== l && Kf(r);
    };
    function iv(e, t) {
      if (!Yr())
        switch (e.tailMode) {
          case "hidden": {
            for (var r = e.tail, i = null; r !== null; )
              r.alternate !== null && (i = r), r = r.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var l = e.tail, s = null; l !== null; )
              l.alternate !== null && (s = l), l = l.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function qr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, r = se, i = it;
      if (t) {
        if ((e.mode & ft) !== st) {
          for (var g = e.selfBaseDuration, w = e.child; w !== null; )
            r = Mt(r, Mt(w.lanes, w.childLanes)), i |= w.subtreeFlags & Cr, i |= w.flags & Cr, g += w.treeBaseDuration, w = w.sibling;
          e.treeBaseDuration = g;
        } else
          for (var R = e.child; R !== null; )
            r = Mt(r, Mt(R.lanes, R.childLanes)), i |= R.subtreeFlags & Cr, i |= R.flags & Cr, R.return = e, R = R.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & ft) !== st) {
          for (var l = e.actualDuration, s = e.selfBaseDuration, d = e.child; d !== null; )
            r = Mt(r, Mt(d.lanes, d.childLanes)), i |= d.subtreeFlags, i |= d.flags, l += d.actualDuration, s += d.treeBaseDuration, d = d.sibling;
          e.actualDuration = l, e.treeBaseDuration = s;
        } else
          for (var m = e.child; m !== null; )
            r = Mt(r, Mt(m.lanes, m.childLanes)), i |= m.subtreeFlags, i |= m.flags, m.return = e, m = m.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = r, t;
    }
    function TO(e, t, r) {
      if (l_() && (t.mode & Ut) !== st && (t.flags & gt) === it)
        return FC(t), zf(), t.flags |= $n | Ra | vr, !1;
      var i = gm(t);
      if (r !== null && r.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (i_(t), qr(t), (t.mode & ft) !== st) {
            var l = r !== null;
            if (l) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (zf(), (t.flags & gt) === it && (t.memoizedState = null), t.flags |= Dt, qr(t), (t.mode & ft) !== st) {
            var d = r !== null;
            if (d) {
              var m = t.child;
              m !== null && (t.treeBaseDuration -= m.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return jC(), !0;
    }
    function uT(e, t, r) {
      var i = t.pendingProps;
      switch (Zg(t), t.tag) {
        case N:
        case Qe:
        case _e:
        case k:
        case ae:
        case ee:
        case Z:
        case ie:
        case we:
        case de:
          return qr(t), null;
        case A: {
          var l = t.type;
          return Zo(l) && dm(t), qr(t), null;
        }
        case M: {
          var s = t.stateNode;
          if ($f(t), Qg(t), FS(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var d = gm(t);
            if (d)
              Kf(t);
            else if (e !== null) {
              var m = e.memoizedState;
              // Check if this is a client root
              (!m.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & $n) !== it) && (t.flags |= Ha, jC());
            }
          }
          return x0(e, t), qr(t), null;
        }
        case z: {
          LS(t);
          var g = o1(), w = t.type;
          if (e !== null && t.stateNode != null)
            oT(e, t, w, i, g), e.ref !== t.ref && aT(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return qr(t), null;
            }
            var R = AS(), U = gm(t);
            if (U)
              r_(t, g, R) && Kf(t);
            else {
              var j = $R(w, i, g, R, t);
              iT(j, t, !1, !1), t.stateNode = j, WR(j, w, i, g) && Kf(t);
            }
            t.ref !== null && aT(t);
          }
          return qr(t), null;
        }
        case V: {
          var W = i;
          if (e && t.stateNode != null) {
            var K = e.memoizedProps;
            lT(e, t, K, W);
          } else {
            if (typeof W != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var le = o1(), He = AS(), lt = gm(t);
            lt ? a_(t) && Kf(t) : t.stateNode = YR(W, le, He, t);
          }
          return qr(t), null;
        }
        case H: {
          Wf(t);
          var Je = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Gt = TO(e, t, Je);
            if (!Gt)
              return t.flags & vr ? t : null;
          }
          if ((t.flags & gt) !== it)
            return t.lanes = r, (t.mode & ft) !== st && u0(t), t;
          var jt = Je !== null, G = e !== null && e.memoizedState !== null;
          if (jt !== G && jt) {
            var ue = t.child;
            if (ue.flags |= Io, (t.mode & Ut) !== st) {
              var Y = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !oe);
              Y || NS(so.current, s1) ? wk() : B0();
            }
          }
          var be = t.updateQueue;
          if (be !== null && (t.flags |= Dt), qr(t), (t.mode & ft) !== st && jt) {
            var $e = t.child;
            $e !== null && (t.treeBaseDuration -= $e.treeBaseDuration);
          }
          return null;
        }
        case $:
          return $f(t), x0(e, t), e === null && Px(t.stateNode.containerInfo), qr(t), null;
        case ce:
          var Fe = t.type._context;
          return lS(Fe, t), qr(t), null;
        case ut: {
          var mt = t.type;
          return Zo(mt) && dm(t), qr(t), null;
        }
        case vt: {
          Wf(t);
          var Rt = t.memoizedState;
          if (Rt === null)
            return qr(t), null;
          var mn = (t.flags & gt) !== it, en = Rt.rendering;
          if (en === null)
            if (mn)
              iv(Rt, !1);
            else {
              var cr = Rk() && (e === null || (e.flags & gt) === it);
              if (!cr)
                for (var tn = t.child; tn !== null; ) {
                  var rr = Im(tn);
                  if (rr !== null) {
                    mn = !0, t.flags |= gt, iv(Rt, !1);
                    var Sa = rr.updateQueue;
                    return Sa !== null && (t.updateQueue = Sa, t.flags |= Dt), t.subtreeFlags = it, R_(t, r), Zu(t, IS(so.current, Qp)), t.child;
                  }
                  tn = tn.sibling;
                }
              Rt.tail !== null && Un() > kT() && (t.flags |= gt, mn = !0, iv(Rt, !1), t.lanes = Zd);
            }
          else {
            if (!mn) {
              var ea = Im(en);
              if (ea !== null) {
                t.flags |= gt, mn = !0;
                var gi = ea.updateQueue;
                if (gi !== null && (t.updateQueue = gi, t.flags |= Dt), iv(Rt, !0), Rt.tail === null && Rt.tailMode === "hidden" && !en.alternate && !Yr())
                  return qr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Un() * 2 - Rt.renderingStartTime > kT() && r !== va && (t.flags |= gt, mn = !0, iv(Rt, !1), t.lanes = Zd);
            }
            if (Rt.isBackwards)
              en.sibling = t.child, t.child = en;
            else {
              var Na = Rt.last;
              Na !== null ? Na.sibling = en : t.child = en, Rt.last = en;
            }
          }
          if (Rt.tail !== null) {
            var Ia = Rt.tail;
            Rt.rendering = Ia, Rt.tail = Ia.sibling, Rt.renderingStartTime = Un(), Ia.sibling = null;
            var Ea = so.current;
            return mn ? Ea = IS(Ea, Qp) : Ea = Bf(Ea), Zu(t, Ea), Ia;
          }
          return qr(t), null;
        }
        case _t:
          break;
        case Ue:
        case ge: {
          $0(t);
          var Kl = t.memoizedState, ad = Kl !== null;
          if (e !== null) {
            var Cv = e.memoizedState, ol = Cv !== null;
            ol !== ad && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !O && (t.flags |= Io);
          }
          return !ad || (t.mode & Ut) === st ? qr(t) : ha(il, va) && (qr(t), t.subtreeFlags & (xn | Dt) && (t.flags |= Io)), null;
        }
        case Te:
          return null;
        case xe:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function wO(e, t, r) {
      switch (Zg(t), t.tag) {
        case A: {
          var i = t.type;
          Zo(i) && dm(t);
          var l = t.flags;
          return l & vr ? (t.flags = l & ~vr | gt, (t.mode & ft) !== st && u0(t), t) : null;
        }
        case M: {
          t.stateNode, $f(t), Qg(t), FS();
          var s = t.flags;
          return (s & vr) !== it && (s & gt) === it ? (t.flags = s & ~vr | gt, t) : null;
        }
        case z:
          return LS(t), null;
        case H: {
          Wf(t);
          var d = t.memoizedState;
          if (d !== null && d.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            zf();
          }
          var m = t.flags;
          return m & vr ? (t.flags = m & ~vr | gt, (t.mode & ft) !== st && u0(t), t) : null;
        }
        case vt:
          return Wf(t), null;
        case $:
          return $f(t), null;
        case ce:
          var g = t.type._context;
          return lS(g, t), null;
        case Ue:
        case ge:
          return $0(t), null;
        case Te:
          return null;
        default:
          return null;
      }
    }
    function sT(e, t, r) {
      switch (Zg(t), t.tag) {
        case A: {
          var i = t.type.childContextTypes;
          i != null && dm(t);
          break;
        }
        case M: {
          t.stateNode, $f(t), Qg(t), FS();
          break;
        }
        case z: {
          LS(t);
          break;
        }
        case $:
          $f(t);
          break;
        case H:
          Wf(t);
          break;
        case vt:
          Wf(t);
          break;
        case ce:
          var l = t.type._context;
          lS(l, t);
          break;
        case Ue:
        case ge:
          $0(t);
          break;
      }
    }
    var cT = null;
    cT = /* @__PURE__ */ new Set();
    var ay = !1, Kr = !1, bO = typeof WeakSet == "function" ? WeakSet : Set, Ye = null, Xf = null, Zf = null;
    function RO(e) {
      yl(null, function() {
        throw e;
      }), Fd();
    }
    var xO = function(t, r) {
      if (r.props = t.memoizedProps, r.state = t.memoizedState, t.mode & ft)
        try {
          rl(), r.componentWillUnmount();
        } finally {
          nl(t);
        }
      else
        r.componentWillUnmount();
    };
    function fT(e, t) {
      try {
        ts(Rr, e);
      } catch (r) {
        Dn(e, t, r);
      }
    }
    function _0(e, t, r) {
      try {
        xO(e, r);
      } catch (i) {
        Dn(e, t, i);
      }
    }
    function _O(e, t, r) {
      try {
        r.componentDidMount();
      } catch (i) {
        Dn(e, t, i);
      }
    }
    function dT(e, t) {
      try {
        vT(e);
      } catch (r) {
        Dn(e, t, r);
      }
    }
    function Jf(e, t) {
      var r = e.ref;
      if (r !== null)
        if (typeof r == "function") {
          var i;
          try {
            if (P && je && e.mode & ft)
              try {
                rl(), i = r(null);
              } finally {
                nl(e);
              }
            else
              i = r(null);
          } catch (l) {
            Dn(e, t, l);
          }
          typeof i == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Tt(e));
        } else
          r.current = null;
    }
    function iy(e, t, r) {
      try {
        r();
      } catch (i) {
        Dn(e, t, i);
      }
    }
    var pT = !1;
    function OO(e, t) {
      VR(e.containerInfo), Ye = t, kO();
      var r = pT;
      return pT = !1, r;
    }
    function kO() {
      for (; Ye !== null; ) {
        var e = Ye, t = e.child;
        (e.subtreeFlags & Cu) !== it && t !== null ? (t.return = e, Ye = t) : DO();
      }
    }
    function DO() {
      for (; Ye !== null; ) {
        var e = Ye;
        ln(e);
        try {
          MO(e);
        } catch (r) {
          Dn(e, e.return, r);
        }
        Vn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ye = t;
          return;
        }
        Ye = e.return;
      }
    }
    function MO(e) {
      var t = e.alternate, r = e.flags;
      if ((r & Ha) !== it) {
        switch (ln(e), e.tag) {
          case k:
          case ae:
          case _e:
            break;
          case A: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !sc && (s.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Tt(e) || "instance"), s.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Tt(e) || "instance"));
              var d = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : uo(e.type, i), l);
              {
                var m = cT;
                d === void 0 && !m.has(e.type) && (m.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Tt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = d;
            }
            break;
          }
          case M: {
            {
              var g = e.stateNode;
              dx(g.containerInfo);
            }
            break;
          }
          case z:
          case V:
          case $:
          case ut:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Vn();
      }
    }
    function po(e, t, r) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var s = l.next, d = s;
        do {
          if ((d.tag & e) === e) {
            var m = d.destroy;
            d.destroy = void 0, m !== void 0 && ((e & Qr) !== ei ? Vc(t) : (e & Rr) !== ei && Hc(t), (e & Jo) !== ei && gv(!0), iy(t, r, m), (e & Jo) !== ei && gv(!1), (e & Qr) !== ei ? yh() : (e & Rr) !== ei && Tu());
          }
          d = d.next;
        } while (d !== s);
      }
    }
    function ts(e, t) {
      var r = t.updateQueue, i = r !== null ? r.lastEffect : null;
      if (i !== null) {
        var l = i.next, s = l;
        do {
          if ((s.tag & e) === e) {
            (e & Qr) !== ei ? mh(t) : (e & Rr) !== ei && gh(t);
            var d = s.create;
            (e & Jo) !== ei && gv(!0), s.destroy = d(), (e & Jo) !== ei && gv(!1), (e & Qr) !== ei ? qd() : (e & Rr) !== ei && Sh();
            {
              var m = s.destroy;
              if (m !== void 0 && typeof m != "function") {
                var g = void 0;
                (s.tag & Rr) !== it ? g = "useLayoutEffect" : (s.tag & Jo) !== it ? g = "useInsertionEffect" : g = "useEffect";
                var w = void 0;
                m === null ? w = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof m.then == "function" ? w = `

It looks like you wrote ` + g + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + g + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : w = " You returned: " + m, y("%s must not return anything besides a function, which is used for clean-up.%s", g, w);
              }
            }
          }
          s = s.next;
        } while (s !== l);
      }
    }
    function AO(e, t) {
      if ((t.flags & Dt) !== it)
        switch (t.tag) {
          case ie: {
            var r = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, s = i.onPostCommit, d = I1(), m = t.alternate === null ? "mount" : "update";
            N1() && (m = "nested-update"), typeof s == "function" && s(l, m, r, d);
            var g = t.return;
            e:
              for (; g !== null; ) {
                switch (g.tag) {
                  case M:
                    var w = g.stateNode;
                    w.passiveEffectDuration += r;
                    break e;
                  case ie:
                    var R = g.stateNode;
                    R.passiveEffectDuration += r;
                    break e;
                }
                g = g.return;
              }
            break;
          }
        }
    }
    function LO(e, t, r, i) {
      if ((r.flags & Lr) !== it)
        switch (r.tag) {
          case k:
          case ae:
          case _e: {
            if (!Kr)
              if (r.mode & ft)
                try {
                  rl(), ts(Rr | br, r);
                } finally {
                  nl(r);
                }
              else
                ts(Rr | br, r);
            break;
          }
          case A: {
            var l = r.stateNode;
            if (r.flags & Dt && !Kr)
              if (t === null)
                if (r.type === r.elementType && !sc && (l.props !== r.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Tt(r) || "instance"), l.state !== r.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Tt(r) || "instance")), r.mode & ft)
                  try {
                    rl(), l.componentDidMount();
                  } finally {
                    nl(r);
                  }
                else
                  l.componentDidMount();
              else {
                var s = r.elementType === r.type ? t.memoizedProps : uo(r.type, t.memoizedProps), d = t.memoizedState;
                if (r.type === r.elementType && !sc && (l.props !== r.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Tt(r) || "instance"), l.state !== r.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Tt(r) || "instance")), r.mode & ft)
                  try {
                    rl(), l.componentDidUpdate(s, d, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    nl(r);
                  }
                else
                  l.componentDidUpdate(s, d, l.__reactInternalSnapshotBeforeUpdate);
              }
            var m = r.updateQueue;
            m !== null && (r.type === r.elementType && !sc && (l.props !== r.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Tt(r) || "instance"), l.state !== r.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Tt(r) || "instance")), QC(r, m, l));
            break;
          }
          case M: {
            var g = r.updateQueue;
            if (g !== null) {
              var w = null;
              if (r.child !== null)
                switch (r.child.tag) {
                  case z:
                    w = r.child.stateNode;
                    break;
                  case A:
                    w = r.child.stateNode;
                    break;
                }
              QC(r, g, w);
            }
            break;
          }
          case z: {
            var R = r.stateNode;
            if (t === null && r.flags & Dt) {
              var U = r.type, j = r.memoizedProps;
              ZR(R, U, j);
            }
            break;
          }
          case V:
            break;
          case $:
            break;
          case ie: {
            {
              var W = r.memoizedProps, K = W.onCommit, le = W.onRender, He = r.stateNode.effectDuration, lt = I1(), Je = t === null ? "mount" : "update";
              N1() && (Je = "nested-update"), typeof le == "function" && le(r.memoizedProps.id, Je, r.actualDuration, r.treeBaseDuration, r.actualStartTime, lt);
              {
                typeof K == "function" && K(r.memoizedProps.id, Je, He, lt), Dk(r);
                var Gt = r.return;
                e:
                  for (; Gt !== null; ) {
                    switch (Gt.tag) {
                      case M:
                        var jt = Gt.stateNode;
                        jt.effectDuration += He;
                        break e;
                      case ie:
                        var G = Gt.stateNode;
                        G.effectDuration += He;
                        break e;
                    }
                    Gt = Gt.return;
                  }
              }
            }
            break;
          }
          case H: {
            VO(e, r);
            break;
          }
          case vt:
          case ut:
          case _t:
          case Ue:
          case ge:
          case xe:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Kr || r.flags & ua && vT(r);
    }
    function NO(e) {
      switch (e.tag) {
        case k:
        case ae:
        case _e: {
          if (e.mode & ft)
            try {
              rl(), fT(e, e.return);
            } finally {
              nl(e);
            }
          else
            fT(e, e.return);
          break;
        }
        case A: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && _O(e, e.return, t), dT(e, e.return);
          break;
        }
        case z: {
          dT(e, e.return);
          break;
        }
      }
    }
    function IO(e, t) {
      for (var r = null, i = e; ; ) {
        if (i.tag === z) {
          if (r === null) {
            r = i;
            try {
              var l = i.stateNode;
              t ? ux(l) : cx(i.stateNode, i.memoizedProps);
            } catch (d) {
              Dn(e, e.return, d);
            }
          }
        } else if (i.tag === V) {
          if (r === null)
            try {
              var s = i.stateNode;
              t ? sx(s) : fx(s, i.memoizedProps);
            } catch (d) {
              Dn(e, e.return, d);
            }
        } else if (!((i.tag === Ue || i.tag === ge) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          r === i && (r = null), i = i.return;
        }
        r === i && (r = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function vT(e) {
      var t = e.ref;
      if (t !== null) {
        var r = e.stateNode, i;
        switch (e.tag) {
          case z:
            i = r;
            break;
          default:
            i = r;
        }
        if (typeof t == "function") {
          var l;
          if (e.mode & ft)
            try {
              rl(), l = t(i);
            } finally {
              nl(e);
            }
          else
            l = t(i);
          typeof l == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Tt(e));
        } else
          t.hasOwnProperty("current") || y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Tt(e)), t.current = i;
      }
    }
    function UO(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function hT(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, hT(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === z) {
          var r = e.stateNode;
          r !== null && $x(r);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function FO(e) {
      for (var t = e.return; t !== null; ) {
        if (mT(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function mT(e) {
      return e.tag === z || e.tag === M || e.tag === $;
    }
    function yT(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || mT(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== z && t.tag !== V && t.tag !== pt; ) {
            if (t.flags & xn || t.child === null || t.tag === $)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & xn))
            return t.stateNode;
        }
    }
    function jO(e) {
      var t = FO(e);
      switch (t.tag) {
        case z: {
          var r = t.stateNode;
          t.flags & un && (gC(r), t.flags &= ~un);
          var i = yT(e);
          k0(e, i, r);
          break;
        }
        case M:
        case $: {
          var l = t.stateNode.containerInfo, s = yT(e);
          O0(e, s, l);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function O0(e, t, r) {
      var i = e.tag, l = i === z || i === V;
      if (l) {
        var s = e.stateNode;
        t ? ax(r, s, t) : nx(r, s);
      } else if (i !== $) {
        var d = e.child;
        if (d !== null) {
          O0(d, t, r);
          for (var m = d.sibling; m !== null; )
            O0(m, t, r), m = m.sibling;
        }
      }
    }
    function k0(e, t, r) {
      var i = e.tag, l = i === z || i === V;
      if (l) {
        var s = e.stateNode;
        t ? rx(r, s, t) : tx(r, s);
      } else if (i !== $) {
        var d = e.child;
        if (d !== null) {
          k0(d, t, r);
          for (var m = d.sibling; m !== null; )
            k0(m, t, r), m = m.sibling;
        }
      }
    }
    var Xr = null, vo = !1;
    function zO(e, t, r) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case z: {
                Xr = i.stateNode, vo = !1;
                break e;
              }
              case M: {
                Xr = i.stateNode.containerInfo, vo = !0;
                break e;
              }
              case $: {
                Xr = i.stateNode.containerInfo, vo = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Xr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        gT(e, t, r), Xr = null, vo = !1;
      }
      UO(r);
    }
    function ns(e, t, r) {
      for (var i = r.child; i !== null; )
        gT(e, t, i), i = i.sibling;
    }
    function gT(e, t, r) {
      switch (Yd(r), r.tag) {
        case z:
          Kr || Jf(r, t);
        case V: {
          {
            var i = Xr, l = vo;
            Xr = null, ns(e, t, r), Xr = i, vo = l, Xr !== null && (vo ? ox(Xr, r.stateNode) : ix(Xr, r.stateNode));
          }
          return;
        }
        case pt: {
          Xr !== null && (vo ? lx(Xr, r.stateNode) : Pg(Xr, r.stateNode));
          return;
        }
        case $: {
          {
            var s = Xr, d = vo;
            Xr = r.stateNode.containerInfo, vo = !0, ns(e, t, r), Xr = s, vo = d;
          }
          return;
        }
        case k:
        case ae:
        case de:
        case _e: {
          if (!Kr) {
            var m = r.updateQueue;
            if (m !== null) {
              var g = m.lastEffect;
              if (g !== null) {
                var w = g.next, R = w;
                do {
                  var U = R, j = U.destroy, W = U.tag;
                  j !== void 0 && ((W & Jo) !== ei ? iy(r, t, j) : (W & Rr) !== ei && (Hc(r), r.mode & ft ? (rl(), iy(r, t, j), nl(r)) : iy(r, t, j), Tu())), R = R.next;
                } while (R !== w);
              }
            }
          }
          ns(e, t, r);
          return;
        }
        case A: {
          if (!Kr) {
            Jf(r, t);
            var K = r.stateNode;
            typeof K.componentWillUnmount == "function" && _0(r, t, K);
          }
          ns(e, t, r);
          return;
        }
        case _t: {
          ns(e, t, r);
          return;
        }
        case Ue: {
          if (
            // TODO: Remove this dead flag
            r.mode & Ut
          ) {
            var le = Kr;
            Kr = le || r.memoizedState !== null, ns(e, t, r), Kr = le;
          } else
            ns(e, t, r);
          break;
        }
        default: {
          ns(e, t, r);
          return;
        }
      }
    }
    function PO(e) {
      e.memoizedState;
    }
    function VO(e, t) {
      var r = t.memoizedState;
      if (r === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var s = l.dehydrated;
            s !== null && xx(s);
          }
        }
      }
    }
    function ST(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var r = e.stateNode;
        r === null && (r = e.stateNode = new bO()), t.forEach(function(i) {
          var l = Fk.bind(null, e, i);
          if (!r.has(i)) {
            if (r.add(i), Tr)
              if (Xf !== null && Zf !== null)
                yv(Zf, Xf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function HO(e, t, r) {
      Xf = r, Zf = e, ln(t), ET(t, e), ln(t), Xf = null, Zf = null;
    }
    function ho(e, t, r) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l];
          try {
            zO(e, t, s);
          } catch (g) {
            Dn(s, t, g);
          }
        }
      var d = Sc();
      if (t.subtreeFlags & fa)
        for (var m = t.child; m !== null; )
          ln(m), ET(m, e), m = m.sibling;
      ln(d);
    }
    function ET(e, t, r) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case k:
        case ae:
        case de:
        case _e: {
          if (ho(t, e), al(e), l & Dt) {
            try {
              po(Jo | br, e, e.return), ts(Jo | br, e);
            } catch (mt) {
              Dn(e, e.return, mt);
            }
            if (e.mode & ft) {
              try {
                rl(), po(Rr | br, e, e.return);
              } catch (mt) {
                Dn(e, e.return, mt);
              }
              nl(e);
            } else
              try {
                po(Rr | br, e, e.return);
              } catch (mt) {
                Dn(e, e.return, mt);
              }
          }
          return;
        }
        case A: {
          ho(t, e), al(e), l & ua && i !== null && Jf(i, i.return);
          return;
        }
        case z: {
          ho(t, e), al(e), l & ua && i !== null && Jf(i, i.return);
          {
            if (e.flags & un) {
              var s = e.stateNode;
              try {
                gC(s);
              } catch (mt) {
                Dn(e, e.return, mt);
              }
            }
            if (l & Dt) {
              var d = e.stateNode;
              if (d != null) {
                var m = e.memoizedProps, g = i !== null ? i.memoizedProps : m, w = e.type, R = e.updateQueue;
                if (e.updateQueue = null, R !== null)
                  try {
                    JR(d, R, w, g, m, e);
                  } catch (mt) {
                    Dn(e, e.return, mt);
                  }
              }
            }
          }
          return;
        }
        case V: {
          if (ho(t, e), al(e), l & Dt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var U = e.stateNode, j = e.memoizedProps, W = i !== null ? i.memoizedProps : j;
            try {
              ex(U, W, j);
            } catch (mt) {
              Dn(e, e.return, mt);
            }
          }
          return;
        }
        case M: {
          if (ho(t, e), al(e), l & Dt && i !== null) {
            var K = i.memoizedState;
            if (K.isDehydrated)
              try {
                Rx(t.containerInfo);
              } catch (mt) {
                Dn(e, e.return, mt);
              }
          }
          return;
        }
        case $: {
          ho(t, e), al(e);
          return;
        }
        case H: {
          ho(t, e), al(e);
          var le = e.child;
          if (le.flags & Io) {
            var He = le.stateNode, lt = le.memoizedState, Je = lt !== null;
            if (He.isHidden = Je, Je) {
              var Gt = le.alternate !== null && le.alternate.memoizedState !== null;
              Gt || Tk();
            }
          }
          if (l & Dt) {
            try {
              PO(e);
            } catch (mt) {
              Dn(e, e.return, mt);
            }
            ST(e);
          }
          return;
        }
        case Ue: {
          var jt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Ut
          ) {
            var G = Kr;
            Kr = G || jt, ho(t, e), Kr = G;
          } else
            ho(t, e);
          if (al(e), l & Io) {
            var ue = e.stateNode, Y = e.memoizedState, be = Y !== null, $e = e;
            if (ue.isHidden = be, be && !jt && ($e.mode & Ut) !== st) {
              Ye = $e;
              for (var Fe = $e.child; Fe !== null; )
                Ye = Fe, BO(Fe), Fe = Fe.sibling;
            }
            IO($e, be);
          }
          return;
        }
        case vt: {
          ho(t, e), al(e), l & Dt && ST(e);
          return;
        }
        case _t:
          return;
        default: {
          ho(t, e), al(e);
          return;
        }
      }
    }
    function al(e) {
      var t = e.flags;
      if (t & xn) {
        try {
          jO(e);
        } catch (r) {
          Dn(e, e.return, r);
        }
        e.flags &= ~xn;
      }
      t & $a && (e.flags &= ~$a);
    }
    function $O(e, t, r) {
      Xf = r, Zf = t, Ye = e, CT(e, t, r), Xf = null, Zf = null;
    }
    function CT(e, t, r) {
      for (var i = (e.mode & Ut) !== st; Ye !== null; ) {
        var l = Ye, s = l.child;
        if (l.tag === Ue && i) {
          var d = l.memoizedState !== null, m = d || ay;
          if (m) {
            D0(e, t, r);
            continue;
          } else {
            var g = l.alternate, w = g !== null && g.memoizedState !== null, R = w || Kr, U = ay, j = Kr;
            ay = m, Kr = R, Kr && !j && (Ye = l, WO(l));
            for (var W = s; W !== null; )
              Ye = W, CT(
                W,
                // New root; bubble back up to here and stop.
                t,
                r
              ), W = W.sibling;
            Ye = l, ay = U, Kr = j, D0(e, t, r);
            continue;
          }
        }
        (l.subtreeFlags & Lr) !== it && s !== null ? (s.return = l, Ye = s) : D0(e, t, r);
      }
    }
    function D0(e, t, r) {
      for (; Ye !== null; ) {
        var i = Ye;
        if ((i.flags & Lr) !== it) {
          var l = i.alternate;
          ln(i);
          try {
            LO(t, l, i, r);
          } catch (d) {
            Dn(i, i.return, d);
          }
          Vn();
        }
        if (i === e) {
          Ye = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Ye = s;
          return;
        }
        Ye = i.return;
      }
    }
    function BO(e) {
      for (; Ye !== null; ) {
        var t = Ye, r = t.child;
        switch (t.tag) {
          case k:
          case ae:
          case de:
          case _e: {
            if (t.mode & ft)
              try {
                rl(), po(Rr, t, t.return);
              } finally {
                nl(t);
              }
            else
              po(Rr, t, t.return);
            break;
          }
          case A: {
            Jf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && _0(t, t.return, i);
            break;
          }
          case z: {
            Jf(t, t.return);
            break;
          }
          case Ue: {
            var l = t.memoizedState !== null;
            if (l) {
              TT(e);
              continue;
            }
            break;
          }
        }
        r !== null ? (r.return = t, Ye = r) : TT(e);
      }
    }
    function TT(e) {
      for (; Ye !== null; ) {
        var t = Ye;
        if (t === e) {
          Ye = null;
          return;
        }
        var r = t.sibling;
        if (r !== null) {
          r.return = t.return, Ye = r;
          return;
        }
        Ye = t.return;
      }
    }
    function WO(e) {
      for (; Ye !== null; ) {
        var t = Ye, r = t.child;
        if (t.tag === Ue) {
          var i = t.memoizedState !== null;
          if (i) {
            wT(e);
            continue;
          }
        }
        r !== null ? (r.return = t, Ye = r) : wT(e);
      }
    }
    function wT(e) {
      for (; Ye !== null; ) {
        var t = Ye;
        ln(t);
        try {
          NO(t);
        } catch (i) {
          Dn(t, t.return, i);
        }
        if (Vn(), t === e) {
          Ye = null;
          return;
        }
        var r = t.sibling;
        if (r !== null) {
          r.return = t.return, Ye = r;
          return;
        }
        Ye = t.return;
      }
    }
    function GO(e, t, r, i) {
      Ye = t, YO(t, e, r, i);
    }
    function YO(e, t, r, i) {
      for (; Ye !== null; ) {
        var l = Ye, s = l.child;
        (l.subtreeFlags & Ba) !== it && s !== null ? (s.return = l, Ye = s) : QO(e, t, r, i);
      }
    }
    function QO(e, t, r, i) {
      for (; Ye !== null; ) {
        var l = Ye;
        if ((l.flags & An) !== it) {
          ln(l);
          try {
            qO(t, l, r, i);
          } catch (d) {
            Dn(l, l.return, d);
          }
          Vn();
        }
        if (l === e) {
          Ye = null;
          return;
        }
        var s = l.sibling;
        if (s !== null) {
          s.return = l.return, Ye = s;
          return;
        }
        Ye = l.return;
      }
    }
    function qO(e, t, r, i) {
      switch (t.tag) {
        case k:
        case ae:
        case _e: {
          if (t.mode & ft) {
            l0();
            try {
              ts(Qr | br, t);
            } finally {
              o0(t);
            }
          } else
            ts(Qr | br, t);
          break;
        }
      }
    }
    function KO(e) {
      Ye = e, XO();
    }
    function XO() {
      for (; Ye !== null; ) {
        var e = Ye, t = e.child;
        if ((Ye.flags & nn) !== it) {
          var r = e.deletions;
          if (r !== null) {
            for (var i = 0; i < r.length; i++) {
              var l = r[i];
              Ye = l, ek(l, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var d = s.child;
                if (d !== null) {
                  s.child = null;
                  do {
                    var m = d.sibling;
                    d.sibling = null, d = m;
                  } while (d !== null);
                }
              }
            }
            Ye = e;
          }
        }
        (e.subtreeFlags & Ba) !== it && t !== null ? (t.return = e, Ye = t) : ZO();
      }
    }
    function ZO() {
      for (; Ye !== null; ) {
        var e = Ye;
        (e.flags & An) !== it && (ln(e), JO(e), Vn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ye = t;
          return;
        }
        Ye = e.return;
      }
    }
    function JO(e) {
      switch (e.tag) {
        case k:
        case ae:
        case _e: {
          e.mode & ft ? (l0(), po(Qr | br, e, e.return), o0(e)) : po(Qr | br, e, e.return);
          break;
        }
      }
    }
    function ek(e, t) {
      for (; Ye !== null; ) {
        var r = Ye;
        ln(r), nk(r, t), Vn();
        var i = r.child;
        i !== null ? (i.return = r, Ye = i) : tk(e);
      }
    }
    function tk(e) {
      for (; Ye !== null; ) {
        var t = Ye, r = t.sibling, i = t.return;
        if (hT(t), t === e) {
          Ye = null;
          return;
        }
        if (r !== null) {
          r.return = i, Ye = r;
          return;
        }
        Ye = i;
      }
    }
    function nk(e, t) {
      switch (e.tag) {
        case k:
        case ae:
        case _e: {
          e.mode & ft ? (l0(), po(Qr, e, t), o0(e)) : po(Qr, e, t);
          break;
        }
      }
    }
    function rk(e) {
      switch (e.tag) {
        case k:
        case ae:
        case _e: {
          try {
            ts(Rr | br, e);
          } catch (r) {
            Dn(e, e.return, r);
          }
          break;
        }
        case A: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (r) {
            Dn(e, e.return, r);
          }
          break;
        }
      }
    }
    function ak(e) {
      switch (e.tag) {
        case k:
        case ae:
        case _e: {
          try {
            ts(Qr | br, e);
          } catch (t) {
            Dn(e, e.return, t);
          }
          break;
        }
      }
    }
    function ik(e) {
      switch (e.tag) {
        case k:
        case ae:
        case _e: {
          try {
            po(Rr | br, e, e.return);
          } catch (r) {
            Dn(e, e.return, r);
          }
          break;
        }
        case A: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && _0(e, e.return, t);
          break;
        }
      }
    }
    function ok(e) {
      switch (e.tag) {
        case k:
        case ae:
        case _e:
          try {
            po(Qr | br, e, e.return);
          } catch (t) {
            Dn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var ov = Symbol.for;
      ov("selector.component"), ov("selector.has_pseudo_class"), ov("selector.role"), ov("selector.test_id"), ov("selector.text");
    }
    var lk = [];
    function uk() {
      lk.forEach(function(e) {
        return e();
      });
    }
    var sk = v.ReactCurrentActQueue;
    function ck(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), r = typeof jest < "u";
        return r && t !== !1;
      }
    }
    function bT() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && sk.current !== null && y("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var fk = Math.ceil, M0 = v.ReactCurrentDispatcher, A0 = v.ReactCurrentOwner, Zr = v.ReactCurrentBatchConfig, mo = v.ReactCurrentActQueue, Or = (
      /*             */
      0
    ), RT = (
      /*               */
      1
    ), Jr = (
      /*                */
      2
    ), zi = (
      /*                */
      4
    ), Gl = 0, lv = 1, cc = 2, oy = 3, uv = 4, xT = 5, L0 = 6, Wt = Or, Aa = null, Xn = null, kr = se, il = se, N0 = Gu(se), Dr = Gl, sv = null, ly = se, cv = se, uy = se, fv = null, ti = null, I0 = 0, _T = 500, OT = 1 / 0, dk = 500, Yl = null;
    function dv() {
      OT = Un() + dk;
    }
    function kT() {
      return OT;
    }
    var sy = !1, U0 = null, ed = null, fc = !1, rs = null, pv = se, F0 = [], j0 = null, pk = 50, vv = 0, z0 = null, P0 = !1, cy = !1, vk = 50, td = 0, fy = null, hv = Tn, dy = se, DT = !1;
    function py() {
      return Aa;
    }
    function La() {
      return (Wt & (Jr | zi)) !== Or ? Un() : (hv !== Tn || (hv = Un()), hv);
    }
    function as(e) {
      var t = e.mode;
      if ((t & Ut) === st)
        return dt;
      if ((Wt & Jr) !== Or && kr !== se)
        return or(kr);
      var r = c_() !== s_;
      if (r) {
        if (Zr.transition !== null) {
          var i = Zr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return dy === Bt && (dy = tp()), dy;
      }
      var l = Qa();
      if (l !== Bt)
        return l;
      var s = QR();
      return s;
    }
    function hk(e) {
      var t = e.mode;
      return (t & Ut) === st ? dt : lg();
    }
    function Mr(e, t, r, i) {
      zk(), DT && y("useInsertionEffect must not schedule updates."), P0 && (cy = !0), kl(e, r, i), (Wt & Jr) !== se && e === Aa ? Hk(t) : (Tr && op(e, t, r), $k(t), e === Aa && ((Wt & Jr) === Or && (cv = Mt(cv, r)), Dr === uv && is(e, kr)), ni(e, i), r === dt && Wt === Or && (t.mode & Ut) === st && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !mo.isBatchingLegacy && (dv(), kC()));
    }
    function mk(e, t, r) {
      var i = e.current;
      i.lanes = t, kl(e, t, r), ni(e, r);
    }
    function yk(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Wt & Jr) !== Or
      );
    }
    function ni(e, t) {
      var r = e.callbackNode;
      ag(e, t);
      var i = Us(e, e === Aa ? kr : se);
      if (i === se) {
        r !== null && GT(r), e.callbackNode = null, e.callbackPriority = Bt;
        return;
      }
      var l = tr(i), s = e.callbackPriority;
      if (s === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(mo.current !== null && r !== Y0)) {
        r == null && s !== dt && y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      r != null && GT(r);
      var d;
      if (l === dt)
        e.tag === Yu ? (mo.isBatchingLegacy !== null && (mo.didScheduleLegacyUpdate = !0), Gx(LT.bind(null, e))) : OC(LT.bind(null, e)), mo.current !== null ? mo.current.push(Qu) : KR(function() {
          (Wt & (Jr | zi)) === Or && Qu();
        }), d = null;
      else {
        var m;
        switch (Vs(i)) {
          case Nr:
            m = jc;
            break;
          case wr:
            m = Oa;
            break;
          case eo:
            m = ki;
            break;
          case zs:
            m = Fo;
            break;
          default:
            m = ki;
            break;
        }
        d = Q0(m, MT.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = d;
    }
    function MT(e, t) {
      if (z_(), hv = Tn, dy = se, (Wt & (Jr | zi)) !== Or)
        throw new Error("Should not already be working.");
      var r = e.callbackNode, i = ql();
      if (i && e.callbackNode !== r)
        return null;
      var l = Us(e, e === Aa ? kr : se);
      if (l === se)
        return null;
      var s = !js(e, l) && !Rh(e, l) && !t, d = s ? _k(e, l) : hy(e, l);
      if (d !== Gl) {
        if (d === cc) {
          var m = Jd(e);
          m !== se && (l = m, d = V0(e, m));
        }
        if (d === lv) {
          var g = sv;
          throw dc(e, se), is(e, l), ni(e, Un()), g;
        }
        if (d === L0)
          is(e, l);
        else {
          var w = !js(e, l), R = e.current.alternate;
          if (w && !Sk(R)) {
            if (d = hy(e, l), d === cc) {
              var U = Jd(e);
              U !== se && (l = U, d = V0(e, U));
            }
            if (d === lv) {
              var j = sv;
              throw dc(e, se), is(e, l), ni(e, Un()), j;
            }
          }
          e.finishedWork = R, e.finishedLanes = l, gk(e, d, l);
        }
      }
      return ni(e, Un()), e.callbackNode === r ? MT.bind(null, e) : null;
    }
    function V0(e, t) {
      var r = fv;
      if (ur(e)) {
        var i = dc(e, t);
        i.flags |= $n, zx(e.containerInfo);
      }
      var l = hy(e, t);
      if (l !== cc) {
        var s = ti;
        ti = r, s !== null && AT(s);
      }
      return l;
    }
    function AT(e) {
      ti === null ? ti = e : ti.push.apply(ti, e);
    }
    function gk(e, t, r) {
      switch (t) {
        case Gl:
        case lv:
          throw new Error("Root did not complete. This is a bug in React.");
        case cc: {
          pc(e, ti, Yl);
          break;
        }
        case oy: {
          if (is(e, r), sf(r) && // do not delay if we're inside an act() scope
          !YT()) {
            var i = I0 + _T - Un();
            if (i > 10) {
              var l = Us(e, se);
              if (l !== se)
                break;
              var s = e.suspendedLanes;
              if (!Ol(s, r)) {
                La(), ap(e, s);
                break;
              }
              e.timeoutHandle = jg(pc.bind(null, e, ti, Yl), i);
              break;
            }
          }
          pc(e, ti, Yl);
          break;
        }
        case uv: {
          if (is(e, r), bh(r))
            break;
          if (!YT()) {
            var d = wh(e, r), m = d, g = Un() - m, w = jk(g) - g;
            if (w > 10) {
              e.timeoutHandle = jg(pc.bind(null, e, ti, Yl), w);
              break;
            }
          }
          pc(e, ti, Yl);
          break;
        }
        case xT: {
          pc(e, ti, Yl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Sk(e) {
      for (var t = e; ; ) {
        if (t.flags & ks) {
          var r = t.updateQueue;
          if (r !== null) {
            var i = r.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var s = i[l], d = s.getSnapshot, m = s.value;
                try {
                  if (!Ge(d(), m))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var g = t.child;
        if (t.subtreeFlags & ks && g !== null) {
          g.return = t, t = g;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function is(e, t) {
      t = ku(t, uy), t = ku(t, cv), rp(e, t);
    }
    function LT(e) {
      if (P_(), (Wt & (Jr | zi)) !== Or)
        throw new Error("Should not already be working.");
      ql();
      var t = Us(e, se);
      if (!ha(t, dt))
        return ni(e, Un()), null;
      var r = hy(e, t);
      if (e.tag !== Yu && r === cc) {
        var i = Jd(e);
        i !== se && (t = i, r = V0(e, i));
      }
      if (r === lv) {
        var l = sv;
        throw dc(e, se), is(e, t), ni(e, Un()), l;
      }
      if (r === L0)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, pc(e, ti, Yl), ni(e, Un()), null;
    }
    function Ek(e, t) {
      t !== se && (Du(e, Mt(t, dt)), ni(e, Un()), (Wt & (Jr | zi)) === Or && (dv(), Qu()));
    }
    function H0(e, t) {
      var r = Wt;
      Wt |= RT;
      try {
        return e(t);
      } finally {
        Wt = r, Wt === Or && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !mo.isBatchingLegacy && (dv(), kC());
      }
    }
    function Ck(e, t, r, i, l) {
      var s = Qa(), d = Zr.transition;
      try {
        return Zr.transition = null, lr(Nr), e(t, r, i, l);
      } finally {
        lr(s), Zr.transition = d, Wt === Or && dv();
      }
    }
    function Ql(e) {
      rs !== null && rs.tag === Yu && (Wt & (Jr | zi)) === Or && ql();
      var t = Wt;
      Wt |= RT;
      var r = Zr.transition, i = Qa();
      try {
        return Zr.transition = null, lr(Nr), e ? e() : void 0;
      } finally {
        lr(i), Zr.transition = r, Wt = t, (Wt & (Jr | zi)) === Or && Qu();
      }
    }
    function NT() {
      return (Wt & (Jr | zi)) !== Or;
    }
    function vy(e, t) {
      ya(N0, il, e), il = Mt(il, t);
    }
    function $0(e) {
      il = N0.current, ma(N0, e);
    }
    function dc(e, t) {
      e.finishedWork = null, e.finishedLanes = se;
      var r = e.timeoutHandle;
      if (r !== zg && (e.timeoutHandle = zg, qR(r)), Xn !== null)
        for (var i = Xn.return; i !== null; ) {
          var l = i.alternate;
          sT(l, i), i = i.return;
        }
      Aa = e;
      var s = vc(e.current, null);
      return Xn = s, kr = il = t, Dr = Gl, sv = null, ly = se, cv = se, uy = se, fv = null, ti = null, v_(), lo.discardPendingWarnings(), s;
    }
    function IT(e, t) {
      do {
        var r = Xn;
        try {
          if (Tm(), f1(), Vn(), A0.current = null, r === null || r.return === null) {
            Dr = lv, sv = t, Xn = null;
            return;
          }
          if (P && r.mode & ft && ey(r, !0), De)
            if (Sl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Eh(r, i, kr);
            } else
              $c(r, t, kr);
          W_(e, r.return, r, t, kr), zT(r);
        } catch (l) {
          t = l, Xn === r && r !== null ? (r = r.return, Xn = r) : r = Xn;
          continue;
        }
        return;
      } while (!0);
    }
    function UT() {
      var e = M0.current;
      return M0.current = qm, e === null ? qm : e;
    }
    function FT(e) {
      M0.current = e;
    }
    function Tk() {
      I0 = Un();
    }
    function mv(e) {
      ly = Mt(e, ly);
    }
    function wk() {
      Dr === Gl && (Dr = oy);
    }
    function B0() {
      (Dr === Gl || Dr === oy || Dr === cc) && (Dr = uv), Aa !== null && (Fs(ly) || Fs(cv)) && is(Aa, kr);
    }
    function bk(e) {
      Dr !== uv && (Dr = cc), fv === null ? fv = [e] : fv.push(e);
    }
    function Rk() {
      return Dr === Gl;
    }
    function hy(e, t) {
      var r = Wt;
      Wt |= Jr;
      var i = UT();
      if (Aa !== e || kr !== t) {
        if (Tr) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (yv(e, kr), l.clear()), df(e, t);
        }
        Yl = lp(), dc(e, t);
      }
      vi(t);
      do
        try {
          xk();
          break;
        } catch (s) {
          IT(e, s);
        }
      while (!0);
      if (Tm(), Wt = r, FT(i), Xn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return bu(), Aa = null, kr = se, Dr;
    }
    function xk() {
      for (; Xn !== null; )
        jT(Xn);
    }
    function _k(e, t) {
      var r = Wt;
      Wt |= Jr;
      var i = UT();
      if (Aa !== e || kr !== t) {
        if (Tr) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (yv(e, kr), l.clear()), df(e, t);
        }
        Yl = lp(), dv(), dc(e, t);
      }
      vi(t);
      do
        try {
          Ok();
          break;
        } catch (s) {
          IT(e, s);
        }
      while (!0);
      return Tm(), FT(i), Wt = r, Xn !== null ? (As(), Gl) : (bu(), Aa = null, kr = se, Dr);
    }
    function Ok() {
      for (; Xn !== null && !Fc(); )
        jT(Xn);
    }
    function jT(e) {
      var t = e.alternate;
      ln(e);
      var r;
      (e.mode & ft) !== st ? (i0(e), r = W0(t, e, il), ey(e, !0)) : r = W0(t, e, il), Vn(), e.memoizedProps = e.pendingProps, r === null ? zT(e) : Xn = r, A0.current = null;
    }
    function zT(e) {
      var t = e;
      do {
        var r = t.alternate, i = t.return;
        if ((t.flags & Ra) === it) {
          ln(t);
          var l = void 0;
          if ((t.mode & ft) === st ? l = uT(r, t, il) : (i0(t), l = uT(r, t, il), ey(t, !1)), Vn(), l !== null) {
            Xn = l;
            return;
          }
        } else {
          var s = wO(r, t);
          if (s !== null) {
            s.flags &= fh, Xn = s;
            return;
          }
          if ((t.mode & ft) !== st) {
            ey(t, !1);
            for (var d = t.actualDuration, m = t.child; m !== null; )
              d += m.actualDuration, m = m.sibling;
            t.actualDuration = d;
          }
          if (i !== null)
            i.flags |= Ra, i.subtreeFlags = it, i.deletions = null;
          else {
            Dr = L0, Xn = null;
            return;
          }
        }
        var g = t.sibling;
        if (g !== null) {
          Xn = g;
          return;
        }
        t = i, Xn = t;
      } while (t !== null);
      Dr === Gl && (Dr = xT);
    }
    function pc(e, t, r) {
      var i = Qa(), l = Zr.transition;
      try {
        Zr.transition = null, lr(Nr), kk(e, t, r, i);
      } finally {
        Zr.transition = l, lr(i);
      }
      return null;
    }
    function kk(e, t, r, i) {
      do
        ql();
      while (rs !== null);
      if (Pk(), (Wt & (Jr | zi)) !== Or)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, s = e.finishedLanes;
      if (Pc(s), l === null)
        return Qd(), null;
      if (s === se && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = se, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Bt;
      var d = Mt(l.lanes, l.childLanes);
      ip(e, d), e === Aa && (Aa = null, Xn = null, kr = se), ((l.subtreeFlags & Ba) !== it || (l.flags & Ba) !== it) && (fc || (fc = !0, j0 = r, Q0(ki, function() {
        return ql(), null;
      })));
      var m = (l.subtreeFlags & (Cu | fa | Lr | Ba)) !== it, g = (l.flags & (Cu | fa | Lr | Ba)) !== it;
      if (m || g) {
        var w = Zr.transition;
        Zr.transition = null;
        var R = Qa();
        lr(Nr);
        var U = Wt;
        Wt |= zi, A0.current = null, OO(e, l), U1(), HO(e, l, s), HR(e.containerInfo), e.current = l, Ch(s), $O(l, e, s), wu(), vh(), Wt = U, lr(R), Zr.transition = w;
      } else
        e.current = l, U1();
      var j = fc;
      if (fc ? (fc = !1, rs = e, pv = s) : (td = 0, fy = null), d = e.pendingLanes, d === se && (ed = null), j || $T(e.current, !1), Xi(l.stateNode, i), Tr && e.memoizedUpdaters.clear(), uk(), ni(e, Un()), t !== null)
        for (var W = e.onRecoverableError, K = 0; K < t.length; K++) {
          var le = t[K], He = le.stack, lt = le.digest;
          W(le.value, { componentStack: He, digest: lt });
        }
      if (sy) {
        sy = !1;
        var Je = U0;
        throw U0 = null, Je;
      }
      return ha(pv, dt) && e.tag !== Yu && ql(), d = e.pendingLanes, ha(d, dt) ? (j_(), e === z0 ? vv++ : (vv = 0, z0 = e)) : vv = 0, Qu(), Qd(), null;
    }
    function ql() {
      if (rs !== null) {
        var e = Vs(pv), t = sg(eo, e), r = Zr.transition, i = Qa();
        try {
          return Zr.transition = null, lr(t), Mk();
        } finally {
          lr(i), Zr.transition = r;
        }
      }
      return !1;
    }
    function Dk(e) {
      F0.push(e), fc || (fc = !0, Q0(ki, function() {
        return ql(), null;
      }));
    }
    function Mk() {
      if (rs === null)
        return !1;
      var e = j0;
      j0 = null;
      var t = rs, r = pv;
      if (rs = null, pv = se, (Wt & (Jr | zi)) !== Or)
        throw new Error("Cannot flush passive effects while already rendering.");
      P0 = !0, cy = !1, Th(r);
      var i = Wt;
      Wt |= zi, KO(t.current), GO(t, t.current, r, e);
      {
        var l = F0;
        F0 = [];
        for (var s = 0; s < l.length; s++) {
          var d = l[s];
          AO(t, d);
        }
      }
      Ms(), $T(t.current, !0), Wt = i, Qu(), cy ? t === fy ? td++ : (td = 0, fy = t) : td = 0, P0 = !1, cy = !1, zo(t);
      {
        var m = t.current.stateNode;
        m.effectDuration = 0, m.passiveEffectDuration = 0;
      }
      return !0;
    }
    function PT(e) {
      return ed !== null && ed.has(e);
    }
    function Ak(e) {
      ed === null ? ed = /* @__PURE__ */ new Set([e]) : ed.add(e);
    }
    function Lk(e) {
      sy || (sy = !0, U0 = e);
    }
    var Nk = Lk;
    function VT(e, t, r) {
      var i = uc(r, t), l = j1(e, i, dt), s = Ku(e, l, dt), d = La();
      s !== null && (kl(s, dt, d), ni(s, d));
    }
    function Dn(e, t, r) {
      if (RO(r), gv(!1), e.tag === M) {
        VT(e, e, r);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === M) {
          VT(i, e, r);
          return;
        } else if (i.tag === A) {
          var l = i.type, s = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !PT(s)) {
            var d = uc(r, e), m = f0(i, d, dt), g = Ku(i, m, dt), w = La();
            g !== null && (kl(g, dt, w), ni(g, w));
            return;
          }
        }
        i = i.return;
      }
      y(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, r);
    }
    function Ik(e, t, r) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = La();
      ap(e, r), Bk(e), Aa === e && Ol(kr, r) && (Dr === uv || Dr === oy && sf(kr) && Un() - I0 < _T ? dc(e, se) : uy = Mt(uy, r)), ni(e, l);
    }
    function HT(e, t) {
      t === Bt && (t = hk(e));
      var r = La(), i = Ja(e, t);
      i !== null && (kl(i, t, r), ni(i, r));
    }
    function Uk(e) {
      var t = e.memoizedState, r = Bt;
      t !== null && (r = t.retryLane), HT(e, r);
    }
    function Fk(e, t) {
      var r = Bt, i;
      switch (e.tag) {
        case H:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (r = l.retryLane);
          break;
        case vt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), HT(e, r);
    }
    function jk(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : fk(e / 1960) * 1960;
    }
    function zk() {
      if (vv > pk)
        throw vv = 0, z0 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      td > vk && (td = 0, fy = null, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Pk() {
      lo.flushLegacyContextWarning(), lo.flushPendingUnsafeLifecycleWarnings();
    }
    function $T(e, t) {
      ln(e), my(e, ca, ik), t && my(e, gl, ok), my(e, ca, rk), t && my(e, gl, ak), Vn();
    }
    function my(e, t, r) {
      for (var i = e, l = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== l && i.child !== null && s !== it ? i = i.child : ((i.flags & t) !== it && r(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var yy = null;
    function BT(e) {
      {
        if ((Wt & Jr) !== Or || !(e.mode & Ut))
          return;
        var t = e.tag;
        if (t !== N && t !== M && t !== A && t !== k && t !== ae && t !== de && t !== _e)
          return;
        var r = Tt(e) || "ReactComponent";
        if (yy !== null) {
          if (yy.has(r))
            return;
          yy.add(r);
        } else
          yy = /* @__PURE__ */ new Set([r]);
        var i = In;
        try {
          ln(e), y("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? ln(e) : Vn();
        }
      }
    }
    var W0;
    {
      var Vk = null;
      W0 = function(t, r, i) {
        var l = ZT(Vk, r);
        try {
          return rT(t, r, i);
        } catch (d) {
          if (e_() || d !== null && typeof d == "object" && typeof d.then == "function")
            throw d;
          if (Tm(), f1(), sT(t, r), ZT(r, l), r.mode & ft && i0(r), yl(null, rT, null, t, r, i), ng()) {
            var s = Fd();
            typeof s == "object" && s !== null && s._suppressLogging && typeof d == "object" && d !== null && !d._suppressLogging && (d._suppressLogging = !0);
          }
          throw d;
        }
      };
    }
    var WT = !1, G0;
    G0 = /* @__PURE__ */ new Set();
    function Hk(e) {
      if (aa && !I_())
        switch (e.tag) {
          case k:
          case ae:
          case _e: {
            var t = Xn && Tt(Xn) || "Unknown", r = t;
            if (!G0.has(r)) {
              G0.add(r);
              var i = Tt(e) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case A: {
            WT || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), WT = !0);
            break;
          }
        }
    }
    function yv(e, t) {
      if (Tr) {
        var r = e.memoizedUpdaters;
        r.forEach(function(i) {
          op(e, i, t);
        });
      }
    }
    var Y0 = {};
    function Q0(e, t) {
      {
        var r = mo.current;
        return r !== null ? (r.push(t), Y0) : Uc(e, t);
      }
    }
    function GT(e) {
      if (e !== Y0)
        return ph(e);
    }
    function YT() {
      return mo.current !== null;
    }
    function $k(e) {
      {
        if (e.mode & Ut) {
          if (!bT())
            return;
        } else if (!ck() || Wt !== Or || e.tag !== k && e.tag !== ae && e.tag !== _e)
          return;
        if (mo.current === null) {
          var t = In;
          try {
            ln(e), y(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Tt(e));
          } finally {
            t ? ln(e) : Vn();
          }
        }
      }
    }
    function Bk(e) {
      e.tag !== Yu && bT() && mo.current === null && y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function gv(e) {
      DT = e;
    }
    var Pi = null, nd = null, Wk = function(t) {
      Pi = t;
    };
    function rd(e) {
      {
        if (Pi === null)
          return e;
        var t = Pi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function q0(e) {
      return rd(e);
    }
    function K0(e) {
      {
        if (Pi === null)
          return e;
        var t = Pi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var r = rd(e.render);
            if (e.render !== r) {
              var i = { $$typeof: ze, render: r };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function QT(e, t) {
      {
        if (Pi === null)
          return !1;
        var r = e.elementType, i = t.type, l = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case A: {
            typeof i == "function" && (l = !0);
            break;
          }
          case k: {
            (typeof i == "function" || s === yt) && (l = !0);
            break;
          }
          case ae: {
            (s === ze || s === yt) && (l = !0);
            break;
          }
          case de:
          case _e: {
            (s === kt || s === yt) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var d = Pi(r);
          if (d !== void 0 && d === Pi(i))
            return !0;
        }
        return !1;
      }
    }
    function qT(e) {
      {
        if (Pi === null || typeof WeakSet != "function")
          return;
        nd === null && (nd = /* @__PURE__ */ new WeakSet()), nd.add(e);
      }
    }
    var Gk = function(t, r) {
      {
        if (Pi === null)
          return;
        var i = r.staleFamilies, l = r.updatedFamilies;
        ql(), Ql(function() {
          X0(t.current, l, i);
        });
      }
    }, Yk = function(t, r) {
      {
        if (t.context !== mi)
          return;
        ql(), Ql(function() {
          Sv(r, t, null, null);
        });
      }
    };
    function X0(e, t, r) {
      {
        var i = e.alternate, l = e.child, s = e.sibling, d = e.tag, m = e.type, g = null;
        switch (d) {
          case k:
          case _e:
          case A:
            g = m;
            break;
          case ae:
            g = m.render;
            break;
        }
        if (Pi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var w = !1, R = !1;
        if (g !== null) {
          var U = Pi(g);
          U !== void 0 && (r.has(U) ? R = !0 : t.has(U) && (d === A ? R = !0 : w = !0));
        }
        if (nd !== null && (nd.has(e) || i !== null && nd.has(i)) && (R = !0), R && (e._debugNeedsRemount = !0), R || w) {
          var j = Ja(e, dt);
          j !== null && Mr(j, e, dt, Tn);
        }
        l !== null && !R && X0(l, t, r), s !== null && X0(s, t, r);
      }
    }
    var Qk = function(t, r) {
      {
        var i = /* @__PURE__ */ new Set(), l = new Set(r.map(function(s) {
          return s.current;
        }));
        return Z0(t.current, l, i), i;
      }
    };
    function Z0(e, t, r) {
      {
        var i = e.child, l = e.sibling, s = e.tag, d = e.type, m = null;
        switch (s) {
          case k:
          case _e:
          case A:
            m = d;
            break;
          case ae:
            m = d.render;
            break;
        }
        var g = !1;
        m !== null && t.has(m) && (g = !0), g ? qk(e, r) : i !== null && Z0(i, t, r), l !== null && Z0(l, t, r);
      }
    }
    function qk(e, t) {
      {
        var r = Kk(e, t);
        if (r)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case z:
              t.add(i.stateNode);
              return;
            case $:
              t.add(i.stateNode.containerInfo);
              return;
            case M:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function Kk(e, t) {
      for (var r = e, i = !1; ; ) {
        if (r.tag === z)
          i = !0, t.add(r.stateNode);
        else if (r.child !== null) {
          r.child.return = r, r = r.child;
          continue;
        }
        if (r === e)
          return i;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === e)
            return i;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
      return !1;
    }
    var J0;
    {
      J0 = !1;
      try {
        var KT = Object.preventExtensions({});
      } catch {
        J0 = !0;
      }
    }
    function Xk(e, t, r, i) {
      this.tag = e, this.key = r, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = it, this.subtreeFlags = it, this.deletions = null, this.lanes = se, this.childLanes = se, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !J0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var yi = function(t, r, i, l) {
      return new Xk(t, r, i, l);
    };
    function eE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Zk(e) {
      return typeof e == "function" && !eE(e) && e.defaultProps === void 0;
    }
    function Jk(e) {
      if (typeof e == "function")
        return eE(e) ? A : k;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ze)
          return ae;
        if (t === kt)
          return de;
      }
      return N;
    }
    function vc(e, t) {
      var r = e.alternate;
      r === null ? (r = yi(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r._debugSource = e._debugSource, r._debugOwner = e._debugOwner, r._debugHookTypes = e._debugHookTypes, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = it, r.subtreeFlags = it, r.deletions = null, r.actualDuration = 0, r.actualStartTime = -1), r.flags = e.flags & Cr, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (r.dependencies = i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r.selfBaseDuration = e.selfBaseDuration, r.treeBaseDuration = e.treeBaseDuration, r._debugNeedsRemount = e._debugNeedsRemount, r.tag) {
        case N:
        case k:
        case _e:
          r.type = rd(e.type);
          break;
        case A:
          r.type = q0(e.type);
          break;
        case ae:
          r.type = K0(e.type);
          break;
      }
      return r;
    }
    function eD(e, t) {
      e.flags &= Cr | xn;
      var r = e.alternate;
      if (r === null)
        e.childLanes = se, e.lanes = t, e.child = null, e.subtreeFlags = it, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = r.childLanes, e.lanes = r.lanes, e.child = r.child, e.subtreeFlags = it, e.deletions = null, e.memoizedProps = r.memoizedProps, e.memoizedState = r.memoizedState, e.updateQueue = r.updateQueue, e.type = r.type;
        var i = r.dependencies;
        e.dependencies = i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }, e.selfBaseDuration = r.selfBaseDuration, e.treeBaseDuration = r.treeBaseDuration;
      }
      return e;
    }
    function tD(e, t, r) {
      var i;
      return e === vm ? (i = Ut, t === !0 && (i |= Fn, i |= Ga)) : i = st, Tr && (i |= ft), yi(M, null, null, i);
    }
    function tE(e, t, r, i, l, s) {
      var d = N, m = e;
      if (typeof e == "function")
        eE(e) ? (d = A, m = q0(m)) : m = rd(m);
      else if (typeof e == "string")
        d = z;
      else {
        e:
          switch (e) {
            case ba:
              return os(r.children, l, s, t);
            case Ti:
              d = Z, l |= Fn, (l & Ut) !== st && (l |= Ga);
              break;
            case D:
              return nD(r, l, s, t);
            case xt:
              return rD(r, l, s, t);
            case $t:
              return aD(r, l, s, t);
            case bn:
              return XT(r, l, s, t);
            case Er:
            case pn:
            case wi:
            case nu:
            case wn:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case Se:
                    d = ce;
                    break e;
                  case Le:
                    d = we;
                    break e;
                  case ze:
                    d = ae, m = K0(m);
                    break e;
                  case kt:
                    d = de;
                    break e;
                  case yt:
                    d = Qe, m = null;
                    break e;
                }
              var g = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var w = i ? Tt(i) : null;
                w && (g += `

Check the render method of \`` + w + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + g));
            }
          }
      }
      var R = yi(d, r, t, l);
      return R.elementType = e, R.type = m, R.lanes = s, R._debugOwner = i, R;
    }
    function nE(e, t, r) {
      var i = null;
      i = e._owner;
      var l = e.type, s = e.key, d = e.props, m = tE(l, s, d, i, t, r);
      return m._debugSource = e._source, m._debugOwner = e._owner, m;
    }
    function os(e, t, r, i) {
      var l = yi(ee, e, i, t);
      return l.lanes = r, l;
    }
    function nD(e, t, r, i) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = yi(ie, e, i, t | ft);
      return l.elementType = D, l.lanes = r, l.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, l;
    }
    function rD(e, t, r, i) {
      var l = yi(H, e, i, t);
      return l.elementType = xt, l.lanes = r, l;
    }
    function aD(e, t, r, i) {
      var l = yi(vt, e, i, t);
      return l.elementType = $t, l.lanes = r, l;
    }
    function XT(e, t, r, i) {
      var l = yi(Ue, e, i, t);
      l.elementType = bn, l.lanes = r;
      var s = { isHidden: !1 };
      return l.stateNode = s, l;
    }
    function rE(e, t, r) {
      var i = yi(V, e, null, t);
      return i.lanes = r, i;
    }
    function iD() {
      var e = yi(z, null, null, st);
      return e.elementType = "DELETED", e;
    }
    function oD(e) {
      var t = yi(pt, null, null, st);
      return t.stateNode = e, t;
    }
    function aE(e, t, r) {
      var i = e.children !== null ? e.children : [], l = yi($, i, e.key, t);
      return l.lanes = r, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function ZT(e, t) {
      return e === null && (e = yi(N, null, null, st)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function lD(e, t, r, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = zg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Bt, this.eventTimes = ff(se), this.expirationTimes = ff(Tn), this.pendingLanes = se, this.suspendedLanes = se, this.pingedLanes = se, this.expiredLanes = se, this.mutableReadLanes = se, this.finishedLanes = se, this.entangledLanes = se, this.entanglements = ff(se), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], d = 0; d < On; d++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case vm:
          this._debugRootType = r ? "hydrateRoot()" : "createRoot()";
          break;
        case Yu:
          this._debugRootType = r ? "hydrate()" : "render()";
          break;
      }
    }
    function JT(e, t, r, i, l, s, d, m, g, w) {
      var R = new lD(e, t, r, m, g), U = tD(t, s);
      R.current = U, U.stateNode = R;
      {
        var j = {
          element: i,
          isDehydrated: r,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        U.memoizedState = j;
      }
      return dS(U), R;
    }
    var iE = "18.2.0";
    function uD(e, t, r) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Zn(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Vr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: r
      };
    }
    var oE, lE;
    oE = !1, lE = {};
    function ew(e) {
      if (!e)
        return mi;
      var t = Va(e), r = Wx(t);
      if (t.tag === A) {
        var i = t.type;
        if (Zo(i))
          return xC(t, i, r);
      }
      return r;
    }
    function sD(e, t) {
      {
        var r = Va(e);
        if (r === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var l = Wa(r);
        if (l === null)
          return null;
        if (l.mode & Fn) {
          var s = Tt(r) || "Component";
          if (!lE[s]) {
            lE[s] = !0;
            var d = In;
            try {
              ln(l), r.mode & Fn ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              d ? ln(d) : Vn();
            }
          }
        }
        return l.stateNode;
      }
    }
    function tw(e, t, r, i, l, s, d, m) {
      var g = !1, w = null;
      return JT(e, t, g, w, r, i, l, s, d);
    }
    function nw(e, t, r, i, l, s, d, m, g, w) {
      var R = !0, U = JT(r, i, R, e, l, s, d, m, g);
      U.context = ew(null);
      var j = U.current, W = La(), K = as(j), le = Bl(W, K);
      return le.callback = t ?? null, Ku(j, le, K), mk(U, K, W), U;
    }
    function Sv(e, t, r, i) {
      hh(t, e);
      var l = t.current, s = La(), d = as(l);
      El(d);
      var m = ew(r);
      t.context === null ? t.context = m : t.pendingContext = m, aa && In !== null && !oE && (oE = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Tt(In) || "Unknown"));
      var g = Bl(s, d);
      g.payload = { element: e }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), g.callback = i);
      var w = Ku(l, g, d);
      return w !== null && (Mr(w, l, d, s), _m(w, l, d)), d;
    }
    function gy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case z:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function cD(e) {
      switch (e.tag) {
        case M: {
          var t = e.stateNode;
          if (ur(t)) {
            var r = ig(t);
            Ek(t, r);
          }
          break;
        }
        case H: {
          Ql(function() {
            var l = Ja(e, dt);
            if (l !== null) {
              var s = La();
              Mr(l, e, dt, s);
            }
          });
          var i = dt;
          uE(e, i);
          break;
        }
      }
    }
    function rw(e, t) {
      var r = e.memoizedState;
      r !== null && r.dehydrated !== null && (r.retryLane = _h(r.retryLane, t));
    }
    function uE(e, t) {
      rw(e, t);
      var r = e.alternate;
      r && rw(r, t);
    }
    function fD(e) {
      if (e.tag === H) {
        var t = Ru, r = Ja(e, t);
        if (r !== null) {
          var i = La();
          Mr(r, e, t, i);
        }
        uE(e, t);
      }
    }
    function dD(e) {
      if (e.tag === H) {
        var t = as(e), r = Ja(e, t);
        if (r !== null) {
          var i = La();
          Mr(r, e, t, i);
        }
        uE(e, t);
      }
    }
    function aw(e) {
      var t = dh(e);
      return t === null ? null : t.stateNode;
    }
    var iw = function(t) {
      return null;
    };
    function pD(e) {
      return iw(e);
    }
    var ow = function(t) {
      return !1;
    };
    function vD(e) {
      return ow(e);
    }
    var lw = null, uw = null, sw = null, cw = null, fw = null, dw = null, pw = null, vw = null, hw = null;
    {
      var hD = function e(t, r, i) {
        var l = r[i], s = It(t) ? t.slice() : Nt({}, t);
        return i + 1 === r.length ? (It(s) ? s.splice(l, 1) : delete s[l], s) : (s[l] = e(t[l], r, i + 1), s);
      }, mw = function(t, r) {
        return hD(t, r, 0);
      }, mD = function e(t, r, i, l) {
        var s = r[l], d = It(t) ? t.slice() : Nt({}, t);
        if (l + 1 === r.length) {
          var m = i[l];
          d[m] = d[s], It(d) ? d.splice(s, 1) : delete d[s];
        } else
          d[s] = e(
            // $FlowFixMe number or string is fine here
            t[s],
            r,
            i,
            l + 1
          );
        return d;
      }, yw = function(t, r, i) {
        if (r.length !== i.length) {
          b("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var l = 0; l < i.length - 1; l++)
            if (r[l] !== i[l]) {
              b("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return mD(t, r, i, 0);
      }, yD = function e(t, r, i, l) {
        if (i >= r.length)
          return l;
        var s = r[i], d = It(t) ? t.slice() : Nt({}, t);
        return d[s] = e(t[s], r, i + 1, l), d;
      }, gw = function(t, r, i) {
        return yD(t, r, 0, i);
      }, sE = function(t, r) {
        for (var i = t.memoizedState; i !== null && r > 0; )
          i = i.next, r--;
        return i;
      };
      lw = function(t, r, i, l) {
        var s = sE(t, r);
        if (s !== null) {
          var d = gw(s.memoizedState, i, l);
          s.memoizedState = d, s.baseState = d, t.memoizedProps = Nt({}, t.memoizedProps);
          var m = Ja(t, dt);
          m !== null && Mr(m, t, dt, Tn);
        }
      }, uw = function(t, r, i) {
        var l = sE(t, r);
        if (l !== null) {
          var s = mw(l.memoizedState, i);
          l.memoizedState = s, l.baseState = s, t.memoizedProps = Nt({}, t.memoizedProps);
          var d = Ja(t, dt);
          d !== null && Mr(d, t, dt, Tn);
        }
      }, sw = function(t, r, i, l) {
        var s = sE(t, r);
        if (s !== null) {
          var d = yw(s.memoizedState, i, l);
          s.memoizedState = d, s.baseState = d, t.memoizedProps = Nt({}, t.memoizedProps);
          var m = Ja(t, dt);
          m !== null && Mr(m, t, dt, Tn);
        }
      }, cw = function(t, r, i) {
        t.pendingProps = gw(t.memoizedProps, r, i), t.alternate && (t.alternate.pendingProps = t.pendingProps);
        var l = Ja(t, dt);
        l !== null && Mr(l, t, dt, Tn);
      }, fw = function(t, r) {
        t.pendingProps = mw(t.memoizedProps, r), t.alternate && (t.alternate.pendingProps = t.pendingProps);
        var i = Ja(t, dt);
        i !== null && Mr(i, t, dt, Tn);
      }, dw = function(t, r, i) {
        t.pendingProps = yw(t.memoizedProps, r, i), t.alternate && (t.alternate.pendingProps = t.pendingProps);
        var l = Ja(t, dt);
        l !== null && Mr(l, t, dt, Tn);
      }, pw = function(t) {
        var r = Ja(t, dt);
        r !== null && Mr(r, t, dt, Tn);
      }, vw = function(t) {
        iw = t;
      }, hw = function(t) {
        ow = t;
      };
    }
    function gD(e) {
      var t = Wa(e);
      return t === null ? null : t.stateNode;
    }
    function SD(e) {
      return null;
    }
    function ED() {
      return In;
    }
    function CD(e) {
      var t = e.findFiberByHostInstance, r = v.ReactCurrentDispatcher;
      return Gd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: lw,
        overrideHookStateDeletePath: uw,
        overrideHookStateRenamePath: sw,
        overrideProps: cw,
        overridePropsDeletePath: fw,
        overridePropsRenamePath: dw,
        setErrorHandler: vw,
        setSuspenseHandler: hw,
        scheduleUpdate: pw,
        currentDispatcherRef: r,
        findHostInstanceByFiber: gD,
        findFiberByHostInstance: t || SD,
        // React Refresh
        findHostInstancesForRefresh: Qk,
        scheduleRefresh: Gk,
        scheduleRoot: Yk,
        setRefreshHandler: Wk,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: ED,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: iE
      });
    }
    var Sw = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function cE(e) {
      this._internalRoot = e;
    }
    Sy.prototype.render = cE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? y("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Ey(arguments[1]) ? y("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && y("You passed a second argument to root.render(...) but it only accepts one argument.");
        var r = t.containerInfo;
        if (r.nodeType !== er) {
          var i = aw(t.current);
          i && i.parentNode !== r && y("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Sv(e, t, null, null);
    }, Sy.prototype.unmount = cE.prototype.unmount = function() {
      typeof arguments[0] == "function" && y("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        NT() && y("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Ql(function() {
          Sv(null, e, null, null);
        }), CC(t);
      }
    };
    function TD(e, t) {
      if (!Ey(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      Ew(e);
      var r = !1, i = !1, l = "", s = Sw;
      t != null && (t.hydrate ? b("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Ci && y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var d = tw(e, vm, null, r, i, l, s);
      lm(d.current, e);
      var m = e.nodeType === er ? e.parentNode : e;
      return _p(m), new cE(d);
    }
    function Sy(e) {
      this._internalRoot = e;
    }
    function wD(e) {
      e && Ih(e);
    }
    Sy.prototype.unstable_scheduleHydration = wD;
    function bD(e, t, r) {
      if (!Ey(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      Ew(e), t === void 0 && y("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = r ?? null, l = r != null && r.hydratedSources || null, s = !1, d = !1, m = "", g = Sw;
      r != null && (r.unstable_strictMode === !0 && (s = !0), r.identifierPrefix !== void 0 && (m = r.identifierPrefix), r.onRecoverableError !== void 0 && (g = r.onRecoverableError));
      var w = nw(t, null, e, vm, i, s, d, m, g);
      if (lm(w.current, e), _p(e), l)
        for (var R = 0; R < l.length; R++) {
          var U = l[R];
          k_(w, U);
        }
      return new Sy(w);
    }
    function Ey(e) {
      return !!(e && (e.nodeType === la || e.nodeType === fi || e.nodeType === fl || !re));
    }
    function Ev(e) {
      return !!(e && (e.nodeType === la || e.nodeType === fi || e.nodeType === fl || e.nodeType === er && e.nodeValue === " react-mount-point-unstable "));
    }
    function Ew(e) {
      e.nodeType === la && e.tagName && e.tagName.toUpperCase() === "BODY" && y("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), jp(e) && (e._reactRootContainer ? y("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : y("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var RD = v.ReactCurrentOwner, Cw;
    Cw = function(t) {
      if (t._reactRootContainer && t.nodeType !== er) {
        var r = aw(t._reactRootContainer.current);
        r && r.parentNode !== t && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var i = !!t._reactRootContainer, l = fE(t), s = !!(l && Wu(l));
      s && !i && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), t.nodeType === la && t.tagName && t.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function fE(e) {
      return e ? e.nodeType === fi ? e.documentElement : e.firstChild : null;
    }
    function Tw() {
    }
    function xD(e, t, r, i, l) {
      if (l) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var W = gy(d);
            s.call(W);
          };
        }
        var d = nw(
          t,
          i,
          e,
          Yu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Tw
        );
        e._reactRootContainer = d, lm(d.current, e);
        var m = e.nodeType === er ? e.parentNode : e;
        return _p(m), Ql(), d;
      } else {
        for (var g; g = e.lastChild; )
          e.removeChild(g);
        if (typeof i == "function") {
          var w = i;
          i = function() {
            var W = gy(R);
            w.call(W);
          };
        }
        var R = tw(
          e,
          Yu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Tw
        );
        e._reactRootContainer = R, lm(R.current, e);
        var U = e.nodeType === er ? e.parentNode : e;
        return _p(U), Ql(function() {
          Sv(t, R, r, i);
        }), R;
      }
    }
    function _D(e, t) {
      e !== null && typeof e != "function" && y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Cy(e, t, r, i, l) {
      Cw(r), _D(l === void 0 ? null : l, "render");
      var s = r._reactRootContainer, d;
      if (!s)
        d = xD(r, t, e, l, i);
      else {
        if (d = s, typeof l == "function") {
          var m = l;
          l = function() {
            var w = gy(d);
            m.call(w);
          };
        }
        Sv(t, d, e, l);
      }
      return gy(d);
    }
    function OD(e) {
      {
        var t = RD.current;
        if (t !== null && t.stateNode !== null) {
          var r = t.stateNode._warnedAboutRefsInRender;
          r || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", qt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === la ? e : sD(e, "findDOMNode");
    }
    function kD(e, t, r) {
      if (y("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Ev(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = jp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Cy(null, e, t, !0, r);
    }
    function DD(e, t, r) {
      if (y("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Ev(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = jp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Cy(null, e, t, !1, r);
    }
    function MD(e, t, r, i) {
      if (y("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Ev(r))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Os(e))
        throw new Error("parentComponent must be a valid React Component");
      return Cy(e, t, r, !1, i);
    }
    function AD(e) {
      if (!Ev(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = jp(e) && e._reactRootContainer === void 0;
        t && y("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var r = fE(e), i = r && !Wu(r);
          i && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Ql(function() {
          Cy(null, null, e, !1, function() {
            e._reactRootContainer = null, CC(e);
          });
        }), !0;
      } else {
        {
          var l = fE(e), s = !!(l && Wu(l)), d = e.nodeType === la && Ev(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", d ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Be(cD), kh(fD), $s(dD), sp(Qa), Mh(Ps), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), sh(AR), Mc(H0, Ck, Ql);
    function LD(e, t) {
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ey(t))
        throw new Error("Target container is not a DOM element.");
      return uD(e, t, null, r);
    }
    function ND(e, t, r, i) {
      return MD(e, t, r, i);
    }
    var dE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Wu, Nf, um, Dc, Rs, H0]
    };
    function ID(e, t) {
      return dE.usingClientEntryPoint || y('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), TD(e, t);
    }
    function UD(e, t, r) {
      return dE.usingClientEntryPoint || y('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), bD(e, t, r);
    }
    function FD(e) {
      return NT() && y("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Ql(e);
    }
    var jD = CD({ findFiberByHostInstance: Js, bundleType: 1, version: iE, rendererPackageName: "react-dom" });
    if (!jD && bt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var ww = window.location.protocol;
      /^(https?|file):$/.test(ww) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (ww === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ai.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dE, ai.createPortal = LD, ai.createRoot = ID, ai.findDOMNode = OD, ai.flushSync = FD, ai.hydrate = kD, ai.hydrateRoot = UD, ai.render = DD, ai.unmountComponentAtNode = AD, ai.unstable_batchedUpdates = H0, ai.unstable_renderSubtreeIntoContainer = ND, ai.version = iE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ai;
}
(function(f) {
  function p() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if ({}.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p);
      } catch (v) {
        console.error(v);
      }
    }
  }
  ({}).NODE_ENV === "production" ? (p(), f.exports = eM()) : f.exports = tM();
})(KD);
var bv = xE;
if ({}.NODE_ENV === "production")
  xv.createRoot = bv.createRoot, xv.hydrateRoot = bv.hydrateRoot;
else {
  var Ty = bv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  xv.createRoot = function(f, p) {
    Ty.usingClientEntryPoint = !0;
    try {
      return bv.createRoot(f, p);
    } finally {
      Ty.usingClientEntryPoint = !1;
    }
  }, xv.hydrateRoot = function(f, p, v) {
    Ty.usingClientEntryPoint = !0;
    try {
      return bv.hydrateRoot(f, p, v);
    } finally {
      Ty.usingClientEntryPoint = !1;
    }
  };
}
var Gn = eu();
const Py = /* @__PURE__ */ Eb(Gn);
const ss = (f) => {
  const p = f.split(":");
  if (p.length === 6) {
    const [, v, S, T, b, y] = p;
    return { namespace: v, system: S, authcontext: T, id: b, revision: y };
  } else if (p.length === 5) {
    const [, v, S, T, b] = p;
    return { namespace: v, system: S, id: T, revision: b };
  }
  throw new Error("urn is not of length 5 or 6");
}, Tb = (f, p, v = !0) => {
  let S;
  const { authcontext: T, system: b, id: y, revision: L } = ss(f);
  if (T)
    if (v)
      S = `/api/${b}/elements/${y}/revisions/${L}?authcontext=${T}&version=2`;
    else {
      const k = y.indexOf("+");
      S = `/api/${b}/elements/${y.slice(
        0,
        k
      )}/revisions/${L}?authcontext=${T}&version=2`;
    }
  else
    S = `/api/${b}/elements/${y}/revisions/${L}?projectId=${p}`;
  return S;
};
function Nw(f, p) {
  let v = {};
  for (const [S, T] of Object.entries(f))
    S !== p && (v[S] = T);
  return v;
}
const nM = [
  "site_limit",
  "building",
  "vegetation",
  "generic",
  "road",
  "rails",
  "property_boundary",
  "zone",
  "terrain",
  "constraints"
], rM = {
  ...Object.fromEntries(nM.map((f) => [f, f])),
  buildings: "building",
  roads: "road",
  tree_area: "vegetation",
  tree_line: "vegetation",
  ConceptualRoot: "generic",
  ConceptualElement: "generic",
  "property-boundaries": "property_boundary"
  //temporary, to support deprecated category naming
}, Ct = 0, Zl = 3.2808399, wy = 0.3047999995367042, wb = "root", ar = {
  FORMA_CONTEXT: "Forma Context",
  FORMA_TERRAIN: "Forma Terrain",
  SURROUNDING_BUILDINGS: "Surrounding Buildings",
  FORMA_PROPOSAL_BUILDINGS: "Forma Proposal Buildings",
  FORMA_AUTO_BUILDINGS: "Forma Auto Buildings",
  FORMA_BUILDINGS: "Forma Buildings",
  FORMA_SITE_LIMIT: "site_limit",
  FORMA_BUILDING: "building",
  FORMA_VEGETATION: "vegetation",
  FORMA_GENERIC: "generic",
  FORMA_ROAD: "road",
  FORMA_RAILS: "rails",
  FORMA_PROPERTY_BOUNDARY: "property_boundary",
  FORMA_ZONE: "zone",
  FORMA_BUILDING_ENVELOPE: "building_envelope"
};
var cd = Symbol("IDBStore"), aM = (
  /**
   * Create a database.
   * @param {string} dbName
   * @param {string} storeName
   */
  function(p, v) {
    var S = this;
    p === void 0 && (p = "composi-idb"), v === void 0 && (v = "composi-store");
    var T = 1;
    this.storeName = v, this.dbName = p, this._dbp = new Promise(function(b, y) {
      var L = indexedDB.open(p, T);
      L.onerror = function() {
        return y(L.error);
      }, L.onsuccess = function() {
        b(L.result);
      }, L.onupgradeneeded = function() {
        L.result.createObjectStore(v);
      };
    }), this[cd] = function(b, y) {
      return S._dbp.then(function(L) {
        return new Promise(function(k, A) {
          var N = L.transaction(S.storeName, b);
          N.oncomplete = function() {
            return k();
          }, N.onabort = N.onerror = function() {
            return A(N.error);
          }, y(N.objectStore(S.storeName));
        });
      });
    };
  }
), hE;
function Nv() {
  return hE || (hE = new aM()), hE;
}
function iM(f, p) {
  p === void 0 && (p = Nv());
  var v;
  return p[cd]("readonly", function(S) {
    v = S.get(f);
  }).then(function() {
    return v.result;
  });
}
function oM(f, p, v) {
  return v === void 0 && (v = Nv()), v[cd]("readwrite", function(S) {
    S.put(p, f);
  });
}
function lM(f, p) {
  return p === void 0 && (p = Nv()), p[cd]("readwrite", function(v) {
    v.delete(f);
  });
}
function uM(f) {
  return f === void 0 && (f = Nv()), f[cd]("readwrite", function(p) {
    p.clear();
  });
}
function sM(f) {
  f === void 0 && (f = Nv());
  var p = [];
  return f[cd]("readonly", function(v) {
    return (
      // This would be store.getAllKeys(),
      // but it isn't supported by Edge or Safari.
      // And openKeyCursor isn't supported by Safari.
      (v.openKeyCursor || v.openCursor).call(v).onsuccess = function() {
        this.result && (p.push(this.result.key), this.result.continue());
      }
    );
  }).then(function() {
    return p;
  });
}
var Ly = {
  get: iM,
  set: oM,
  remove: lM,
  clear: uM,
  keys: sM,
  name: "composi-idb",
  storeName: "composi-store"
};
function cM(f, p) {
  Ly.set(f, p);
}
async function bb(f) {
  return await Ly.get(f);
}
async function fM(f) {
  const p = await Ly.keys();
  for (const v of p)
    v.includes(f) && (await Ly.remove(v), console.log(`removing ${v} from cache`));
}
function zE(f, p) {
  FormIt.Layers.AddLayer(f, p, !0);
  let v = FormIt.Layers.GetLayerID(p), S;
  return v == WSM.INVALID_ID ? console.error("Cannot retrieve the Forma layer") : (S = Rb(f, p), S == WSM.INVALID_ID && (console.error("Cannot retrieve the Forma WSM layer"), v = void 0)), [v, S];
}
async function Rb(f, p) {
  const v = await WSM.APIGetAllObjectsByTypeReadOnly(f, WSM.nObjectType.nLayerType);
  let S = WSM.INVALID_ID;
  for (let T = 0; T < v.length; T++)
    if ((await WSM.APIGetLayerDataReadOnly(f, v[T])).name == p) {
      S = v[T];
      break;
    }
  return S;
}
async function dM() {
  const f = [
    "site_limit",
    "building",
    "vegetation",
    "generic",
    "road",
    "rails",
    "property_boundary",
    "zone",
    "building_envelope"
  ], p = Object.values(ar).filter(
    (b) => f.includes(b)
  );
  let v = [];
  for (const b of p)
    v.push(Ny(b));
  return v.push(Ny(ar.FORMA_CONTEXT)), (await Promise.all(v)).filter((b) => b.formItLayerId === WSM.INVALID_ID || b.wsmLayerId === -1).length === 0;
}
async function Ny(f = ar.FORMA_CONTEXT) {
  const p = await FormIt.Layers.GetLayerID(f);
  if (p === WSM.INVALID_ID) {
    const v = await Promise.all(zE(Ct, f)), S = {
      formItLayerId: v[0],
      wsmLayerId: v[1]
    }, T = S.formItLayerId, b = S.wsmLayerId, y = "FormIt::OutOfContextLayer";
    if (T === WSM.INVALID_ID || !b)
      return S;
    if (!WSM.Utils.SetOrCreateStringAttributeForObject(
      Ct,
      b,
      y,
      "true"
    )) {
      console.error("Cannot set out of context attribute");
      return;
    }
    return FormIt.Layers.SetLayerPickable(T, !1), S;
  }
  return {
    formItLayerId: p,
    wsmLayerId: p !== WSM.INVALID_ID ? await Rb(Ct, f) : -1
  };
}
function xb(f, p) {
  for (const [v, S] of Object.entries(p))
    for (const T of S)
      if (f.includes(T))
        return v;
}
const ls = "https://local.autodeskforma.eu:3001";
class pM {
  getWorkspaces() {
    return fetch(`${ls}/api/workspaces`).then((p) => {
      if (!p.ok)
        throw new Error(p.statusText);
      return p.json();
    });
  }
  getProjects(p) {
    return fetch(`${ls}/api/projects?customer=${p}&include_archived=false`).then((v) => {
      if (!v.ok)
        throw new Error(v.statusText);
      return v.json();
    });
  }
  countProposals(p) {
    return fetch(`${ls}/api/proposal/elements/count?authcontext=${p}`).then((v) => {
      if (!v.ok)
        throw new Error(v.statusText);
      return v.json();
    });
  }
  getProposals(p) {
    return fetch(`${ls}/api/proposal/elements?authcontext=${p}&version=2`).then((v) => {
      if (!v.ok)
        throw new Error(v.statusText);
      return v.json();
    });
  }
  getElement(p, v, S, T) {
    try {
      const b = `/api/${p}/elements/${v}/revisions/${S}?authcontext=${T}&version=2`;
      return fetch(b).then((y) => {
        if (!y.ok)
          throw new Error(y.statusText);
        return y.json();
      });
    } catch {
      return null;
    }
  }
  getProposalElement(p, v) {
    try {
      const S = `/api/proposal/elements/${p}?authcontext=${v}`;
      return fetch(S).then((T) => {
        if (!T.ok)
          throw new Error(T.statusText);
        return T.json();
      });
    } catch {
      return null;
    }
  }
  FormatThumbnailUrl(p, v) {
    return `${ls}/api/thumbnails/v2/${v}?size=170&authcontext=${p}&projectId=${p}`;
  }
  FormatConceptualWorkerUrl() {
    return `${ls}/web-components/conceptual-design/conceptual-design-terrain-worker-initiator.mjs`;
  }
  fetchRawDatas(p) {
    return p.indexOf("/") === 0 && (p = `${ls}${p}`), fetch(p, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": "true"
      }
    });
  }
  getAsJson(p) {
    return p.indexOf("/") === 0 && (p = `${ls}${p}`), fetch(p, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": "true"
      }
    }).then((v) => {
      if (v.ok) {
        var S = v.json();
        return S;
      }
      return !1;
    });
  }
}
const ii = new pM();
async function id(f) {
  FormIt.FormaAddIn.DeleteTempFile(f);
}
async function Vy(f, p, v, S) {
  if (!p)
    await ii.fetchRawDatas(f.fetchUrl).then(async (T) => {
      let b = await T.arrayBuffer();
      return Array.from(new Uint8Array(b));
    }).then(async (T) => {
      let b = await FormIt.FormaAddIn.CreateTempPath(f.savePath);
      v && id(b), await FormIt.FormaAddIn.MakeBlobFile(b, T).then(() => {
        S && (f.tempGlbLocation = b, S(f));
      });
    });
  else {
    let T = await FormIt.FormaAddIn.CreateTempPath(f.savePath);
    if (T === "{}")
      return !0;
    v && id(T), await FormIt.FormaAddIn.MakeBlobFile(T, p).then(() => {
      S && (f.tempGlbLocation = T, S(f));
    });
  }
}
var vM = typeof global == "object" && global && global.Object === Object && global;
const _b = vM;
var hM = typeof self == "object" && self && self.Object === Object && self, mM = _b || hM || Function("return this")();
const cs = mM;
var yM = cs.Symbol;
const Iy = yM;
var Ob = Object.prototype, gM = Ob.hasOwnProperty, SM = Ob.toString, Rv = Iy ? Iy.toStringTag : void 0;
function EM(f) {
  var p = gM.call(f, Rv), v = f[Rv];
  try {
    f[Rv] = void 0;
    var S = !0;
  } catch {
  }
  var T = SM.call(f);
  return S && (p ? f[Rv] = v : delete f[Rv]), T;
}
var CM = Object.prototype, TM = CM.toString;
function wM(f) {
  return TM.call(f);
}
var bM = "[object Null]", RM = "[object Undefined]", Iw = Iy ? Iy.toStringTag : void 0;
function Iv(f) {
  return f == null ? f === void 0 ? RM : bM : Iw && Iw in Object(f) ? EM(f) : wM(f);
}
function PE(f) {
  return f != null && typeof f == "object";
}
var xM = Array.isArray;
const _M = xM;
function kb(f) {
  var p = typeof f;
  return f != null && (p == "object" || p == "function");
}
var OM = "[object AsyncFunction]", kM = "[object Function]", DM = "[object GeneratorFunction]", MM = "[object Proxy]";
function Db(f) {
  if (!kb(f))
    return !1;
  var p = Iv(f);
  return p == kM || p == DM || p == OM || p == MM;
}
var AM = cs["__core-js_shared__"];
const mE = AM;
var Uw = function() {
  var f = /[^.]+$/.exec(mE && mE.keys && mE.keys.IE_PROTO || "");
  return f ? "Symbol(src)_1." + f : "";
}();
function LM(f) {
  return !!Uw && Uw in f;
}
var NM = Function.prototype, IM = NM.toString;
function yc(f) {
  if (f != null) {
    try {
      return IM.call(f);
    } catch {
    }
    try {
      return f + "";
    } catch {
    }
  }
  return "";
}
var UM = /[\\^$.*+?()[\]{}|]/g, FM = /^\[object .+?Constructor\]$/, jM = Function.prototype, zM = Object.prototype, PM = jM.toString, VM = zM.hasOwnProperty, HM = RegExp("^" + PM.call(VM).replace(UM, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function $M(f) {
  if (!kb(f) || LM(f))
    return !1;
  var p = Db(f) ? HM : FM;
  return p.test(yc(f));
}
function BM(f, p) {
  return f == null ? void 0 : f[p];
}
function Uv(f, p) {
  var v = BM(f, p);
  return $M(v) ? v : void 0;
}
var WM = Uv(cs, "WeakMap");
const _E = WM;
var GM = 9007199254740991;
function Mb(f) {
  return typeof f == "number" && f > -1 && f % 1 == 0 && f <= GM;
}
function YM(f) {
  return f != null && Mb(f.length) && !Db(f);
}
var QM = Object.prototype;
function Ab(f) {
  var p = f && f.constructor, v = typeof p == "function" && p.prototype || QM;
  return f === v;
}
var qM = "[object Arguments]";
function Fw(f) {
  return PE(f) && Iv(f) == qM;
}
var Lb = Object.prototype, KM = Lb.hasOwnProperty, XM = Lb.propertyIsEnumerable, ZM = Fw(function() {
  return arguments;
}()) ? Fw : function(f) {
  return PE(f) && KM.call(f, "callee") && !XM.call(f, "callee");
};
const JM = ZM;
function eA() {
  return !1;
}
var Nb = typeof exports == "object" && exports && !exports.nodeType && exports, jw = Nb && typeof module == "object" && module && !module.nodeType && module, tA = jw && jw.exports === Nb, zw = tA ? cs.Buffer : void 0, nA = zw ? zw.isBuffer : void 0, rA = nA || eA;
const aA = rA;
var iA = "[object Arguments]", oA = "[object Array]", lA = "[object Boolean]", uA = "[object Date]", sA = "[object Error]", cA = "[object Function]", fA = "[object Map]", dA = "[object Number]", pA = "[object Object]", vA = "[object RegExp]", hA = "[object Set]", mA = "[object String]", yA = "[object WeakMap]", gA = "[object ArrayBuffer]", SA = "[object DataView]", EA = "[object Float32Array]", CA = "[object Float64Array]", TA = "[object Int8Array]", wA = "[object Int16Array]", bA = "[object Int32Array]", RA = "[object Uint8Array]", xA = "[object Uint8ClampedArray]", _A = "[object Uint16Array]", OA = "[object Uint32Array]", Pn = {};
Pn[EA] = Pn[CA] = Pn[TA] = Pn[wA] = Pn[bA] = Pn[RA] = Pn[xA] = Pn[_A] = Pn[OA] = !0;
Pn[iA] = Pn[oA] = Pn[gA] = Pn[lA] = Pn[SA] = Pn[uA] = Pn[sA] = Pn[cA] = Pn[fA] = Pn[dA] = Pn[pA] = Pn[vA] = Pn[hA] = Pn[mA] = Pn[yA] = !1;
function kA(f) {
  return PE(f) && Mb(f.length) && !!Pn[Iv(f)];
}
function DA(f) {
  return function(p) {
    return f(p);
  };
}
var Ib = typeof exports == "object" && exports && !exports.nodeType && exports, Ov = Ib && typeof module == "object" && module && !module.nodeType && module, MA = Ov && Ov.exports === Ib, yE = MA && _b.process, AA = function() {
  try {
    var f = Ov && Ov.require && Ov.require("util").types;
    return f || yE && yE.binding && yE.binding("util");
  } catch {
  }
}();
const Pw = AA;
var Vw = Pw && Pw.isTypedArray, LA = Vw ? DA(Vw) : kA;
const NA = LA;
function IA(f, p) {
  return function(v) {
    return f(p(v));
  };
}
var UA = IA(Object.keys, Object);
const FA = UA;
var jA = Object.prototype, zA = jA.hasOwnProperty;
function PA(f) {
  if (!Ab(f))
    return FA(f);
  var p = [];
  for (var v in Object(f))
    zA.call(f, v) && v != "constructor" && p.push(v);
  return p;
}
var VA = Uv(cs, "Map");
const OE = VA;
var HA = Uv(cs, "DataView");
const kE = HA;
var $A = Uv(cs, "Promise");
const DE = $A;
var BA = Uv(cs, "Set");
const ME = BA;
var Hw = "[object Map]", WA = "[object Object]", $w = "[object Promise]", Bw = "[object Set]", Ww = "[object WeakMap]", Gw = "[object DataView]", GA = yc(kE), YA = yc(OE), QA = yc(DE), qA = yc(ME), KA = yc(_E), hc = Iv;
(kE && hc(new kE(new ArrayBuffer(1))) != Gw || OE && hc(new OE()) != Hw || DE && hc(DE.resolve()) != $w || ME && hc(new ME()) != Bw || _E && hc(new _E()) != Ww) && (hc = function(p) {
  var v = Iv(p), S = v == WA ? p.constructor : void 0, T = S ? yc(S) : "";
  if (T)
    switch (T) {
      case GA:
        return Gw;
      case YA:
        return Hw;
      case QA:
        return $w;
      case qA:
        return Bw;
      case KA:
        return Ww;
    }
  return v;
});
const XA = hc;
var ZA = "[object Map]", JA = "[object Set]", eL = Object.prototype, tL = eL.hasOwnProperty;
function Ub(f) {
  if (f == null)
    return !0;
  if (YM(f) && (_M(f) || typeof f == "string" || typeof f.splice == "function" || aA(f) || NA(f) || JM(f)))
    return !f.length;
  var p = XA(f);
  if (p == ZA || p == JA)
    return !f.size;
  if (Ab(f))
    return !PA(f).length;
  for (var v in f)
    if (tL.call(f, v))
      return !1;
  return !0;
}
var by, nL = new Uint8Array(16);
function rL() {
  if (!by && (by = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !by))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return by(nL);
}
const aL = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function iL(f) {
  return typeof f == "string" && aL.test(f);
}
var ta = [];
for (var gE = 0; gE < 256; ++gE)
  ta.push((gE + 256).toString(16).substr(1));
function oL(f) {
  var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, v = (ta[f[p + 0]] + ta[f[p + 1]] + ta[f[p + 2]] + ta[f[p + 3]] + "-" + ta[f[p + 4]] + ta[f[p + 5]] + "-" + ta[f[p + 6]] + ta[f[p + 7]] + "-" + ta[f[p + 8]] + ta[f[p + 9]] + "-" + ta[f[p + 10]] + ta[f[p + 11]] + ta[f[p + 12]] + ta[f[p + 13]] + ta[f[p + 14]] + ta[f[p + 15]]).toLowerCase();
  if (!iL(v))
    throw TypeError("Stringified UUID is invalid");
  return v;
}
function fd(f, p, v) {
  f = f || {};
  var S = f.random || (f.rng || rL)();
  if (S[6] = S[6] & 15 | 64, S[8] = S[8] & 63 | 128, p) {
    v = v || 0;
    for (var T = 0; T < 16; ++T)
      p[v + T] = S[T];
    return p;
  }
  return oL(S);
}
const kv = (f) => {
  const p = [...f];
  return p[0] = f[0], p[1] = f[4], p[2] = f[8], p[3] = f[12], p[4] = f[1], p[5] = f[5], p[6] = f[9], p[7] = f[13], p[8] = f[2], p[9] = f[6], p[10] = f[10], p[11] = f[14], p[12] = f[3], p[13] = f[7], p[14] = f[11], p[15] = f[15], p;
};
function lL(f, p) {
  const v = {}, S = (T, b = []) => {
    var A;
    const y = f[T.urn];
    if (!y)
      throw new Error(`Child ${T.key} points to unknown urn ${T.urn}`);
    const L = [...b, T.key], k = L.join("/");
    v[k] = T.urn, (A = y.children) == null || A.forEach((N) => S(N, L));
  };
  return S({ urn: p, key: wb }), v;
}
function uL(f, p, v) {
  var b, y, L;
  const S = {}, T = [];
  for (const [k, A] of Object.entries(p)) {
    const N = f[A], M = k.split("/").slice(0, 2).join("/"), $ = N.properties.spacemakerObjectStorageReferenceFormats, z = ($ == null ? void 0 : $[0]) === "axm", { system: V } = ss(N.urn), ee = sL(k, f, p);
    if (V === "integrate" && z) {
      const ce = {
        ...N,
        parentTransform: N.transform,
        path: k
      };
      T.push(ce);
      continue;
    }
    if (N.properties.category === "ConceptualElement")
      continue;
    const we = (L = (y = (b = N.properties) == null ? void 0 : b.geometry) == null ? void 0 : y.volumeMesh) == null ? void 0 : L.url;
    if (we) {
      const ce = ss(A).id, ae = N.properties.geometry.volumeMesh.id;
      S[we] || (S[we] = {
        elements: []
      });
      const ie = v == null ? void 0 : v.includes(M);
      S[we].elements.push({
        transform: ee,
        needsConverted: ie,
        id: ce,
        geometryId: ae,
        properties: N == null ? void 0 : N.properties,
        urn: N.urn,
        fullIdPath: k
      });
    }
  }
  return { glbUrlMap: S, axmList: T };
}
function sL(f, p, v) {
  const S = f.split("/");
  let T, b = 0, y = S[b];
  return T = Fb(
    y,
    b,
    v,
    p,
    T,
    S
  ), T;
}
const Fb = (f, p, v, S, T, b) => {
  var ee, Z;
  const y = f.split("/"), L = y.length > 1 ? y.slice(0, p).join("/") : void 0, k = v[L], A = S[k], N = (Z = (ee = A == null ? void 0 : A.children) == null ? void 0 : ee.find(
    (we) => we.key === y.slice(-1).toString()
  )) == null ? void 0 : Z.transform, M = v[y.join("/")], $ = S[M], z = $ == null ? void 0 : $.transform;
  return T = Yw(
    T,
    Yw(N, z)
  ), p++, b.slice(p).length > 0 && (f = b.slice(0, p + 1).join("/"), Fb(
    f,
    p,
    v,
    S,
    T,
    b
  )), T;
}, Yw = (f, p) => {
  let v = f;
  if (p)
    if (f) {
      let S = WSM.Geom.Transf3d();
      S.data = kv(f);
      const T = WSM.Geom.Transf3d();
      T.data = kv(p), WSM.Transf3d.Multiply(S, T).then((b) => {
        v = kv(b.data);
      });
    } else
      v = p;
  return v;
};
async function cL(f, p) {
  return new Promise(async (v, S) => {
    try {
      const T = "terrain.window.WSM", b = ss(p.urn).revision, y = await fL(
        `3d-sketch-terrain-${f}-revision-${b}`
      );
      let L = Array.from(y);
      await Vy(
        {
          savePath: T
        },
        L,
        !0,
        async (k) => {
          let A = k.tempGlbLocation;
          const N = await WSM.APIGetIdOfActiveDeltaReadOnly(Ct);
          await FormIt.ImportFile(A, !1, WSM.INVALID_ID, !1);
          const M = await WSM.APIGetIdOfActiveDeltaReadOnly(Ct), z = (await WSM.APIGetCreatedChangedAndDeletedInDeltaRangeReadOnly(
            Ct,
            N,
            M,
            [WSM.nObjectType.nGroupType]
          )).created;
          if (await id(A), z.length === 1)
            v({
              allIdsCreated: z,
              isTerrain: !0,
              isAxm: !1
            });
          else
            throw new Error("Error reading terrain transform from cached window.WSM, did not get 1 created group");
        }
      );
    } catch (T) {
      let b = `Error loading terrain from cache - ${T}`;
      console.log(b), S(b);
    }
  });
}
async function fL(f) {
  let p = 0;
  return new Promise((v, S) => {
    try {
      const T = setInterval(async () => {
        const b = await bb(f);
        b ? (clearInterval(T), v(b)) : (p++, p % 100 === 0 && console.log(`Did not find cache for ${f}, still waiting.`));
      }, 100);
    } catch (T) {
      S(T);
    }
  });
}
async function dL(f, p, v, S, T) {
  const b = `${v}.glb`, y = f.includes("/terrain/"), L = !f.includes("/parametric/");
  return new Promise(async (k, A) => {
    try {
      await Vy(
        {
          fetchUrl: f,
          savePath: b
        },
        null,
        !0,
        async (N) => {
          let M = N.tempGlbLocation;
          const $ = [], z = [];
          let V = [], ee;
          if (p.forEach((Z) => {
            Z.needsConverted ? z.push(Z) : $.push(Z);
          }), $.length > 0) {
            const Z = await Qw({
              fileLocation: M,
              elementDetails: $,
              isTerrain: y,
              transform: void 0
              //May not be needed as we multiply the transform for each node now?
            });
            if (!Z) {
              id(M);
              const ie = `Failed to request and load file into memory for url - ${f}`;
              console.warn(ie), A(ie);
              return;
            }
            let we = xb(
              $[0].fullIdPath,
              S
            );
            we || (we = ar.FORMA_CONTEXT);
            const ce = await Ny(we);
            await FormIt.Layers.AssignLayerToObjects(ce.formItLayerId, [
              Ct,
              Z
            ]);
            const ae = !T.includes(we);
            FormIt.Layers.SetLayerVisibility(we, ae), FormIt.Layers.SetLayerPickable(we, !1), V = [...V, Z];
          }
          if (z.length > 0) {
            const Z = await Qw({
              fileLocation: b,
              elementDetails: z,
              isTerrain: y,
              transform: void 0
              //May not be needed as we calculate the total transform for each node now?
            }), we = WSM.APIGetGroupReferencedHistoryReadOnly(
              Ct,
              Z
            ), ce = WSM.APIGetAllObjectsByTypeReadOnly(we, WSM.nMeshType), ae = Math.sqrt(3) / 2;
            WSM.APIConvertMeshesToObjects(we, ce, ae), ee = Z, V = [...V, Z];
          }
          id(M), k({
            allIdsCreated: V,
            idEditingForConversion: ee,
            isTerrain: y,
            needElevationFix: L
          });
        }
      );
    } catch (N) {
      A(`Failed to request and load file into memory for url - ${f} - error: ${N}`);
    }
  });
}
async function pL(f, p, v, S) {
  return new Promise(async (T, b) => {
    var L;
    let y = `/api/spacemaker-object-storage/v1/${(L = f == null ? void 0 : f.properties) == null ? void 0 : L.spacemakerObjectStorageReferences[0]}`;
    try {
      const k = `${fd()}.axm`, A = await WSM.APIGetIdOfActiveDeltaReadOnly(Ct);
      await Vy(
        {
          fetchUrl: y,
          savePath: k
        },
        null,
        !0,
        async (N) => {
          let M = N.tempGlbLocation;
          await FormIt.ImportFile(M, !1, Ct, !1), await id(M), await WSM.APIGetIdOfActiveDeltaReadOnly(Ct).then(async ($) => {
            await WSM.APIGetCreatedChangedAndDeletedInDeltaRangeReadOnly(
              Ct,
              A,
              $,
              [WSM.nObjectType.nInstanceType]
            ).then(async (z) => {
              if (z.created.length > 0) {
                if (f.parentTransform) {
                  f.parentTransform[12] *= Zl, f.parentTransform[13] *= Zl, f.parentTransform[14] *= Zl;
                  const V = WSM.Geom.Transf3d();
                  V.data = kv(f.parentTransform), WSM.APITransformObjects(Ct, z.created, V);
                }
                if (!p) {
                  let V = xb(f.path, v);
                  V || (V = ar.FORMA_CONTEXT), await Ny(V).then(async (ee) => {
                    const Z = !S.includes(V);
                    await FormIt.Layers.AssignLayerToObjects(ee.formItLayerId, z.created), await FormIt.Layers.SetLayerVisibility(V, Z), await FormIt.Layers.SetLayerPickable(ee.formItLayerId, !1);
                  });
                }
                for (const V of z.created) {
                  const ee = !Ub(await WSM.APIGetObjectLevelsReadOnly(Ct, V));
                  if (p && ee) {
                    let we = (await Promise.all(zE(Ct, ar.FORMA_BUILDINGS)))[0];
                    await FormIt.Layers.AssignLayerToObjects(we, V), await FormIt.Layers.SetLayerPickable(we, !1);
                  }
                }
              }
            });
          }), T({ allIdsCreated: void 0, isAxm: !0, needElevationFix: !0 });
        }
      );
    } catch (k) {
      b(`Failed to request and load file into memory for url - ${y} - error: ${k}`);
    }
  });
}
async function Qw({
  fileLocation: f,
  elementDetails: p,
  isTerrain: v,
  transform: S
}) {
  const b = p.map((Z) => ({
    objectName: "GltfNodeInfo",
    id: Z.geometryId,
    transform: Z.transform || [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
  })).filter((Z) => Z.id);
  let y = await WSM.Geom.Transf3d();
  S && (y.data = kv(S));
  const L = await WSM.Geom.Point3d(0, 0, 0), k = await WSM.Vector3d.Vector3d(Zl, Zl, Zl), A = await WSM.Transf3d.MakeScalingTransform(L, k);
  y = await WSM.Transf3d.Multiply(A, y);
  const N = await WSM.APIGetIdOfActiveDeltaReadOnly(Ct);
  await WSM.Gltf.APILoadGltfFile(
    Ct,
    f,
    y,
    WSM.INVALID_ID,
    v ? WSM.nGeneratedNormalsOptions.nSmoothNormals : WSM.nGeneratedNormalsOptions.nUnsharedNormals,
    b || [],
    !v
  );
  const M = await WSM.APIGetIdOfActiveDeltaReadOnly(Ct), z = (await WSM.APIGetCreatedChangedAndDeletedInDeltaRangeReadOnly(
    Ct,
    N,
    M,
    [WSM.nObjectType.nMeshType, WSM.nObjectType.nInstanceType]
  )).created, V = await WSM.Utils.CreateAlignedAndCenteredGroup(Ct, z), ee = await WSM.APIGetObjectsByTypeReadOnly(
    Ct,
    V,
    WSM.nObjectType.nInstanceType
  );
  if (ee.length !== 1) {
    console.error("Created instanceIds should be 1");
    return;
  }
  return ee[0];
}
async function jb(f, p, v, S) {
  typeof f == "string" && (f = {
    key: fd(),
    urn: f,
    transform: void 0
  });
  let T;
  if (v[f.urn])
    T = v[f.urn], await qw(T, p, v, S);
  else {
    const b = Tb(f.urn, p);
    await ii.getAsJson(b).then(async (y) => {
      for (const [L, k] of Object.entries(y))
        L.indexOf(":integrate:") > -1 && S.push(L), v[L] = k;
      T = v[f.urn], await qw(T, p, v, S);
    });
  }
}
async function qw(f, p, v, S) {
  var T;
  if (((T = f.children) == null ? void 0 : T.length) > 0)
    for (const b of f.children)
      await jb(
        b,
        p,
        v,
        S
      );
}
var Kw = function(p) {
  var v, S = /* @__PURE__ */ new Set(), T = function(N, M) {
    var $ = typeof N == "function" ? N(v) : N;
    if ($ !== v) {
      var z = v;
      v = M ? $ : Object.assign({}, v, $), S.forEach(function(V) {
        return V(v, z);
      });
    }
  }, b = function() {
    return v;
  }, y = function(N) {
    return S.add(N), function() {
      return S.delete(N);
    };
  }, L = function() {
    return S.clear();
  }, k = {
    setState: T,
    getState: b,
    subscribe: y,
    destroy: L
  };
  return v = p(T, b, k), k;
}, vL = function(p) {
  return p ? Kw(p) : Kw;
}, AE = {}, hL = {
  get exports() {
    return AE;
  },
  set exports(f) {
    AE = f;
  }
}, SE = {}, Uy = {}, mL = {
  get exports() {
    return Uy;
  },
  set exports(f) {
    Uy = f;
  }
}, EE = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xw;
function yL() {
  if (Xw)
    return EE;
  Xw = 1;
  var f = eu();
  function p(M, $) {
    return M === $ && (M !== 0 || 1 / M === 1 / $) || M !== M && $ !== $;
  }
  var v = typeof Object.is == "function" ? Object.is : p, S = f.useState, T = f.useEffect, b = f.useLayoutEffect, y = f.useDebugValue;
  function L(M, $) {
    var z = $(), V = S({
      inst: {
        value: z,
        getSnapshot: $
      }
    }), ee = V[0].inst, Z = V[1];
    return b(function() {
      ee.value = z, ee.getSnapshot = $, k(ee) && Z({
        inst: ee
      });
    }, [M, z, $]), T(function() {
      return k(ee) && Z({
        inst: ee
      }), M(function() {
        k(ee) && Z({
          inst: ee
        });
      });
    }, [M]), y(z), z;
  }
  function k(M) {
    var $ = M.getSnapshot;
    M = M.value;
    try {
      var z = $();
      return !v(M, z);
    } catch {
      return !0;
    }
  }
  function A(M, $) {
    return $();
  }
  var N = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? A : L;
  return EE.useSyncExternalStore = f.useSyncExternalStore !== void 0 ? f.useSyncExternalStore : N, EE;
}
var CE = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zw;
function gL() {
  return Zw || (Zw = 1, {}.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var f = eu(), p = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(ae) {
      {
        for (var ie = arguments.length, H = new Array(ie > 1 ? ie - 1 : 0), de = 1; de < ie; de++)
          H[de - 1] = arguments[de];
        S("error", ae, H);
      }
    }
    function S(ae, ie, H) {
      {
        var de = p.ReactDebugCurrentFrame, _e = de.getStackAddendum();
        _e !== "" && (ie += "%s", H = H.concat([_e]));
        var Qe = H.map(function(ut) {
          return String(ut);
        });
        Qe.unshift("Warning: " + ie), Function.prototype.apply.call(console[ae], console, Qe);
      }
    }
    function T(ae, ie) {
      return ae === ie && (ae !== 0 || 1 / ae === 1 / ie) || ae !== ae && ie !== ie;
    }
    var b = typeof Object.is == "function" ? Object.is : T, y = f.useState, L = f.useEffect, k = f.useLayoutEffect, A = f.useDebugValue, N = !1, M = !1;
    function $(ae, ie, H) {
      N || f.startTransition !== void 0 && (N = !0, v("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var de = ie();
      if (!M) {
        var _e = ie();
        b(de, _e) || (v("The result of getSnapshot should be cached to avoid an infinite loop"), M = !0);
      }
      var Qe = y({
        inst: {
          value: de,
          getSnapshot: ie
        }
      }), ut = Qe[0].inst, pt = Qe[1];
      return k(function() {
        ut.value = de, ut.getSnapshot = ie, z(ut) && pt({
          inst: ut
        });
      }, [ae, de, ie]), L(function() {
        z(ut) && pt({
          inst: ut
        });
        var vt = function() {
          z(ut) && pt({
            inst: ut
          });
        };
        return ae(vt);
      }, [ae]), A(de), de;
    }
    function z(ae) {
      var ie = ae.getSnapshot, H = ae.value;
      try {
        var de = ie();
        return !b(H, de);
      } catch {
        return !0;
      }
    }
    function V(ae, ie, H) {
      return ie();
    }
    var ee = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Z = !ee, we = Z ? V : $, ce = f.useSyncExternalStore !== void 0 ? f.useSyncExternalStore : we;
    CE.useSyncExternalStore = ce, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), CE;
}
var Jw;
function zb() {
  return Jw || (Jw = 1, function(f) {
    ({}).NODE_ENV === "production" ? f.exports = yL() : f.exports = gL();
  }(mL)), Uy;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eb;
function SL() {
  if (eb)
    return SE;
  eb = 1;
  var f = eu(), p = zb();
  function v(A, N) {
    return A === N && (A !== 0 || 1 / A === 1 / N) || A !== A && N !== N;
  }
  var S = typeof Object.is == "function" ? Object.is : v, T = p.useSyncExternalStore, b = f.useRef, y = f.useEffect, L = f.useMemo, k = f.useDebugValue;
  return SE.useSyncExternalStoreWithSelector = function(A, N, M, $, z) {
    var V = b(null);
    if (V.current === null) {
      var ee = {
        hasValue: !1,
        value: null
      };
      V.current = ee;
    } else
      ee = V.current;
    V = L(function() {
      function we(de) {
        if (!ce) {
          if (ce = !0, ae = de, de = $(de), z !== void 0 && ee.hasValue) {
            var _e = ee.value;
            if (z(_e, de))
              return ie = _e;
          }
          return ie = de;
        }
        if (_e = ie, S(ae, de))
          return _e;
        var Qe = $(de);
        return z !== void 0 && z(_e, Qe) ? _e : (ae = de, ie = Qe);
      }
      var ce = !1, ae, ie, H = M === void 0 ? null : M;
      return [function() {
        return we(N());
      }, H === null ? void 0 : function() {
        return we(H());
      }];
    }, [N, M, $, z]);
    var Z = T(A, V[0], V[1]);
    return y(function() {
      ee.hasValue = !0, ee.value = Z;
    }, [Z]), k(Z), Z;
  }, SE;
}
var TE = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tb;
function EL() {
  return tb || (tb = 1, {}.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var f = eu(), p = zb();
    function v(N, M) {
      return N === M && (N !== 0 || 1 / N === 1 / M) || N !== N && M !== M;
    }
    var S = typeof Object.is == "function" ? Object.is : v, T = p.useSyncExternalStore, b = f.useRef, y = f.useEffect, L = f.useMemo, k = f.useDebugValue;
    function A(N, M, $, z, V) {
      var ee = b(null), Z;
      ee.current === null ? (Z = {
        hasValue: !1,
        value: null
      }, ee.current = Z) : Z = ee.current;
      var we = L(function() {
        var H = !1, de, _e, Qe = function(Ue) {
          if (!H) {
            H = !0, de = Ue;
            var ge = z(Ue);
            if (V !== void 0 && Z.hasValue) {
              var Te = Z.value;
              if (V(Te, ge))
                return _e = Te, Te;
            }
            return _e = ge, ge;
          }
          var xe = de, ye = _e;
          if (S(xe, Ue))
            return ye;
          var J = z(Ue);
          return V !== void 0 && V(ye, J) ? ye : (de = Ue, _e = J, J);
        }, ut = $ === void 0 ? null : $, pt = function() {
          return Qe(M());
        }, vt = ut === null ? void 0 : function() {
          return Qe(ut());
        };
        return [pt, vt];
      }, [M, $, z, V]), ce = we[0], ae = we[1], ie = T(N, ce, ae);
      return y(function() {
        Z.hasValue = !0, Z.value = ie;
      }, [ie]), k(ie), ie;
    }
    TE.useSyncExternalStoreWithSelector = A, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), TE;
}
(function(f) {
  ({}).NODE_ENV === "production" ? f.exports = SL() : f.exports = EL();
})(hL);
const CL = /* @__PURE__ */ Eb(AE);
var TL = CL.useSyncExternalStoreWithSelector;
function wL(f, p, v) {
  p === void 0 && (p = f.getState);
  var S = TL(f.subscribe, f.getState, f.getServerState || f.getState, p, v);
  return Gn.useDebugValue(S), S;
}
var nb = function(p) {
  var v = typeof p == "function" ? vL(p) : p, S = function(b, y) {
    return wL(v, b, y);
  };
  return Object.assign(S, v), S;
}, bL = function(p) {
  return p ? nb(p) : nb;
}, RL = bL, wE = function(p, v) {
  if (!p.includes(v))
    throw new Error("'" + v + "' not found. It must be provided in initialState as a property key.");
}, xL = function(p) {
  var v = RL(function() {
    return p;
  }), S = Object.keys(p), T = function(y, L) {
    ({}).NODE_ENV !== "production" && wE(S, y), v.setState(function(k) {
      var A;
      return A = {}, A[y] = (N = k[y], M = L, typeof M == "function" ? M(N) : M), A;
      var N, M;
    });
  };
  return {
    useGlobalState: function(y) {
      ({}).NODE_ENV !== "production" && wE(S, y);
      var L = Gn.useCallback(function(k) {
        return k[y];
      }, [y]);
      return [v(L), Gn.useCallback(function(k) {
        return T(y, k);
      }, [y])];
    },
    getGlobalState: function(y) {
      return {}.NODE_ENV !== "production" && wE(S, y), v.getState()[y];
    },
    setGlobalState: T,
    subscribe: function(y, L) {
      v.subscribe(function(k, A) {
        k[y] !== A[y] && L(k[y]);
      });
    }
  };
};
const _L = "urn:adsk-forma-elements:dummy:none:id-dummy:1337", OL = {
  elements: {},
  synced: !1,
  terrainElevationTransf3d: null,
  rootUrn: _L,
  loadedIntegrate: [],
  mapHistoryIdToInitialDeltaId: /* @__PURE__ */ new Map()
}, { useGlobalState: Ry, setGlobalState: Dv } = xL(OL);
function kL(f, p, v, S) {
  let T = [];
  for (const b of f.children)
    T.push(jb(
      b,
      p,
      v,
      S
    ));
  return T;
}
async function DL(f, p, v, S, T, b) {
  const y = lL(f, p.urn), { glbUrlMap: L, axmList: k } = uL(
    f,
    y,
    S
  );
  let A, N, M = [], $ = [];
  for (const [z, V] of Object.entries(L))
    if (z.includes("terrain")) {
      const ee = V.elements[0];
      if (A) {
        if (A !== ee.id)
          throw new Error(
            `Found terrain id ${ee.id} does not match id of previously found terrain id ${A}. Unable to determine which terrain to load.`
          );
        console.warn(
          `Found a duplicate terrain in proposal. This may not be a problem. ${ee.id}`
        );
      } else
        A = ee.id, N = cL(v.proposalId, ee);
    } else
      M.push(dL(
        z,
        V.elements,
        fd(),
        T,
        b
      ));
  for (const z of k) {
    const V = z.path === S;
    $.push(
      pL(
        z,
        V,
        T,
        b
      )
    );
  }
  await Promise.all([
    N,
    ...M,
    ...$
  ]).then(([z, ...V]) => {
    ML(z).then(async () => {
      AL(z, V, v.projectId);
    });
  });
}
async function ML(f) {
  const p = f.allIdsCreated[0];
  let v;
  const S = await WSM.APIGetObjectsByTypeReadOnly(
    Ct,
    p,
    WSM.nObjectType.nInstanceType
  );
  S.length === 1 ? v = S[0] : console.error("Error getting terrain instance, did not create 1 instance");
  let b = (await Promise.all(zE(Ct, ar.FORMA_TERRAIN)))[0];
  await FormIt.Layers.AssignLayerToObjects(b, v), await FormIt.Layers.SetLayerPickable(b, !1);
  const y = await WSM.APIGetGroupReferencedHistoryReadOnly(Ct, p), L = await WSM.APIGetAllObjectsByTypeReadOnly(y, WSM.nObjectType.nMeshType), k = {
    //@ts-ignore
    [WSM.INFERENCE_HINT_FORCEZNORMAL]: !0,
    //@ts-ignore
    [WSM.INFERENCE_HINT_NO_VERTEX_INF]: !0
  };
  await WSM.Utils.SetOrCreateStringAttributeForObject(
    y,
    L[0],
    //@ts-ignore
    WSM.INFERENCE_HINT,
    JSON.stringify(k)
  );
}
async function AL(f, p, v) {
  const S = f.allIdsCreated[0], T = await WSM.APIGetStringAttributesByKeyReadOnly(
    Ct,
    S,
    //@ts-ignore
    FormIt.TERRAIN_KEY
  );
  if (T.length === 1) {
    const b = await WSM.APIGetStringAttributeKeyValueReadOnly(Ct, T[0]), y = Number(b.sValue);
    let L = await WSM.Geom.Transf3d(), k = await WSM.Geom.Vector3d(0, 0, y);
    await WSM.Geom.TranslateTransform(
      L,
      k
    ).then(async (A) => {
      Dv("terrainElevationTransf3d", A);
      const N = p.filter((M) => !M.isTerrain && M.needElevationFix);
      for (const M of N)
        await WSM.APITransformObjects(Ct, M.allIdsCreated, A), M.idEditingForConversion && await FormIt.GroupEdit.SetInContextEditingPath(M.idEditingForConversion);
    });
  } else
    throw new Error("Error reading terrain transform from cached wsm, could not read attribute");
}
async function LL(f, p, v) {
  var y;
  const S = await ii.getProposalElement(
    p,
    f
  );
  if (!S)
    return;
  const T = Object.values(S).find(
    (L) => L.properties.category === "proposal"
  ), b = (y = T == null ? void 0 : T.children) == null ? void 0 : y.find((L) => L.urn.includes("terrain"));
  NL(b, f, p.proposalId, v);
}
async function NL(f, p, v, S) {
  var L, k, A;
  const T = ss(f.urn).revision;
  let b = `3d-sketch-terrain-${v}-revision-${T}`;
  if (await bb(b))
    S && S();
  else {
    const N = Tb(f.urn, p), $ = await (await fetch(N)).json();
    let z, V;
    if (WSM.APIDeleteAllHistories(), WSM.APICreateHistory(Ct), FormIt.UndoManagement.BeginState(), Object.entries($).length === 1)
      for (const [, H] of Object.entries($))
        z = (A = (k = (L = H.properties) == null ? void 0 : L.geometry) == null ? void 0 : k.volumeMesh) == null ? void 0 : A.url, V = await UL(H.properties, p);
    else
      throw new Error("Did not find exactly one terrain urn");
    const ee = "terrain.glb", Z = "terrain.wsm";
    let we = await WSM.Geom.Transf3d();
    const ce = await WSM.Geom.Point3d(0, 0, 0), ae = await WSM.Geom.Vector3d(Zl, Zl, Zl), ie = await WSM.Geom.MakeScalingTransform(ce, ae);
    await WSM.Transf3d.Multiply(ie, we).then(async (H) => {
      we = H, await Vy(
        {
          fetchUrl: z,
          savePath: ee,
          transf3d: we,
          materialId: V,
          tempWsmLocation: Z,
          key: b,
          proposalId: v,
          terrainRevisionId: T,
          callback: S
        },
        null,
        !0,
        IL
      );
    });
  }
}
async function IL(f, p) {
  await WSM.Glft.APILoadGltfFile(
    Ct,
    f.tempGlbLocation,
    f.transf3d,
    WSM.INVALID_ID,
    !0,
    [],
    !1
  ).then(async () => {
    const v = await WSM.APIGetAllObjectsByTypeReadOnly(0, WSM.nObjectType.nMeshType);
    if (await WSM.APISetObjectsMaterial(Ct, v, f.materialId), v.length !== 1)
      throw new Error("3D Sketch terrain worker - Did not create exactly one terrain mesh");
    const T = (await WSM.APIGetBoxReadOnly(Ct, v[0])).lower.z - 1, b = await WSM.Geom.TranslateTransform(
      await WSM.Geom.Transf3d(),
      await WSM.Geom.Vector3d(0, 0, -T)
    ), y = await WSM.Utils.CreateAlignedAndCenteredGroup(Ct, v);
    await WSM.APITransformObject(Ct, y, b), await WSM.Utils.SetOrCreateStringAttributeForObject(
      Ct,
      y,
      //@ts-ignore
      FormIt.TERRAIN_KEY,
      JSON.stringify(-T)
    ), await FormIt.UndoManagement.EndState("Initial State"), await WSM.APISaveToFileReadOnly(Ct, y, f.tempWsmLocation, 0, !0, 1, []);
    const L = window.FormItModule.FormIt_ReadFile(tempWsmLocation);
    fM(`3d-sketch-terrain-${f.proposalId}`), cM(f.key, L), console.log(`persisted terrain in cache: ${f.proposalId}-revision-${f.terrainRevisionId}`), p && p();
  });
}
async function UL(f, p) {
  const v = await ii.getAsJson(`/api/projects/${p}`), S = "/texture/v2", T = f.geoReference.srid, b = encodeURIComponent(JSON.stringify(f.bbox)), y = `${S}/texture.jpeg?countryCode=${v.countryCode}&srid=${T}&bbox=${b}&size=4096&projectId=${p}`, [L] = await Promise.all([await ii.getAsJson(y)]), k = L.link, A = "terrainTexture.jpeg", N = await fetch(k);
  if (N.ok) {
    const M = await N.blob();
    let $ = await FormIt.FormaAddIn.CreateTempPath(A);
    const z = await createImageBitmap(M, { imageOrientation: "flipY" }), V = new self.OffscreenCanvas(z.width, z.height);
    V.getContext("bitmaprenderer").transferFromImageBitmap(z);
    const Z = await V.convertToBlob(), we = new Uint8Array(await Z.arrayBuffer()), ce = await WSM.APICreateTexture(Ct, [...we], !0, $);
    return await WSM.APICreateMaterial(
      Ct,
      WSM.Color(225, 225, 225, 255),
      1,
      1,
      ce
    );
  }
}
var Pb = {};
(function(f) {
  Object.defineProperty(f, "__esModule", {
    value: !0
  }), f.ReferenceType = void 0, function(p) {
    p.INLINE = "Inline", p.REMOTE = "Remote";
  }(f.ReferenceType || (f.ReferenceType = {}));
})(Pb);
const rb = (f) => [
  f[0],
  f[4],
  f[8],
  f[12],
  f[1],
  f[5],
  f[9],
  f[13],
  f[2],
  f[6],
  f[10],
  f[14],
  f[3],
  f[7],
  f[11],
  f[15]
], FL = (f) => {
  const p = {}, v = [], S = [];
  for (const T of f.indices) {
    const [b, y, L] = f.vertices.slice(T * 3, T * 3 + 3);
    p[b] || (p[b] = {}), p[b][y] || (p[b][y] = {}), p[b][y][L] || (p[b][y][L] = S.length / 3, S.push(b, y, L)), v.push(p[b][y][L]);
  }
  return { ...f, indices: v, vertices: S };
}, jL = (f) => {
  let p = [], v = [];
  for (const S of f) {
    const T = v.length / 3;
    p = p.concat(S.indices.map((b) => b + T)), v = v.concat(S.vertices);
  }
  return { ...f[0], indices: p, vertices: v };
}, zL = async (f, p, v) => {
  const S = {
    id: fd(),
    properties: {
      category: "ConceptualRoot"
    },
    children: []
  }, T = {
    [S.id]: S
  }, b = {
    rootElement: S.id,
    elements: T
  };
  await ab(p, T, S, f);
  for (const [, y] of Object.entries(v))
    await ab(y.flat(), T, S, f, !0);
  return b;
};
async function ab(f, p, v, S, T = !1) {
  const b = 0.3047999995367042, y = await WSM.Geom.Point3d(0, 0, 0), L = await WSM.Geom.Vector3d(b, b, b), k = await WSM.Geom.MakeScalingTransform(y, L);
  for (const A of f) {
    const N = FL(jL(A.meshes)), M = {
      id: fd(),
      children: [],
      properties: {
        category: "ConceptualElement",
        geometry: {
          type: Pb.ReferenceType.INLINE,
          format: "Mesh",
          verts: N.vertices,
          faces: N.indices
        }
      }
    };
    if (T && (M.properties.subcategory = "ConceptualBuildingFloor"), A.transforms.length > 1) {
      p[M.id] = M;
      for (const $ of A.transforms) {
        let z = await WSM.Geom.Transf3d();
        $.data && (z.data = $.data), S && S.data && (z = await WSM.Transf3d.Multiply(S, z)), z = await WSM.Transf3d.Multiply(k, z), v.children.push({
          id: M.id,
          transform: rb(z.data)
        });
      }
    } else {
      let $ = await WSM.Geom.Transf3d();
      A.transforms[0].data && ($.data = A.transforms[0].data), S && S.data && ($ = await WSM.Transf3d.Multiply(S, $)), $ = await WSM.Transf3d.Multiply(k, $), p[M.id] = {
        ...M
      }, v.children.push({
        id: M.id,
        transform: rb($.data)
      });
    }
  }
}
async function PL(f, p, v) {
  FormIt.Layers.SetLayerVisibility(p, !1).then(() => {
    WSM.Utils.GetAllGeometryInformation(Ct).then((S) => {
      FormIt.Layers.SetLayerVisibility(p, !0).then(() => {
        VL(f).then(() => {
          BL(Ct, S, v);
        });
      });
    });
  });
}
async function VL(f) {
  await f.forEach(async (p) => {
    p.layerData && (p.layerData.Visible = p.previousVisiblity, await FormIt.Layers.SetLayersVisibility([p.layerData]));
  });
}
async function HL() {
  const f = [
    ar.FORMA_CONTEXT,
    ar.FORMA_TERRAIN,
    ar.SURROUNDING_BUILDINGS,
    ar.FORMA_AUTO_BUILDINGS,
    ar.FORMA_PROPOSAL_BUILDINGS,
    ar.FORMA_SITE_LIMIT,
    ar.FORMA_BUILDING,
    ar.FORMA_VEGETATION,
    ar.FORMA_GENERIC,
    ar.FORMA_ROAD,
    ar.FORMA_RAILS,
    ar.FORMA_PROPERTY_BOUNDARY,
    ar.FORMA_ZONE,
    ar.FORMA_BUILDING_ENVELOPE
  ];
  let p = [];
  for (const v of f) {
    let S = await $L(v);
    S.layerData && p.push(S);
  }
  return p;
}
async function $L(f) {
  const p = await FormIt.Layers.GetLayerID(f);
  let v = !1, S;
  return p != WSM.INVALID_ID && (S = await FormIt.Layers.GetLayerData(p), v = S.Visible, S.Visible = !1, await FormIt.Layers.SetLayersVisibility([S])), {
    layerData: S,
    previousVisiblity: v
  };
}
async function BL(f = WSM.INVALID_ID, p, v) {
  WSM.Utils.ComputeGeometryFromLevels(Ct, !1, f).then((S) => {
    let T = {};
    S && S.map((b) => {
      const { outer_loop: y, inner_loops: L } = b.second[0], A = [y.vertices.map((N) => [
        N.x * wy,
        N.y * wy
      ])];
      if (L.length > 0) {
        const N = L[0].vertices.map((M) => [
          M.x * wy,
          M.y * wy
        ]);
        A.push(N);
      }
      return A;
    }), v && v(p, T);
  });
}
async function WL(f) {
  await FormIt.GroupEdit.EndEditInContext();
  let p;
  if (f)
    await FormIt.Selection.AddSelections(f), p = await Vb();
  else {
    await FormIt.Selection.SelectAll();
    const S = (await FormIt.Selection.GetSelections()).map(
      (T) => T.ids[0].Object
    );
    S.length > 100 && console.warn(
      `We are saving ${S.length} instances. Consider using a set here.`
    ), p = await GL(S);
  }
  return p;
}
async function GL(f) {
  const p = [], v = await WSM.APIGetAllObjectsByTypeReadOnly(Ct, WSM.nObjectType.nLevelType);
  v && v.forEach(async (T) => {
    const b = await WSM.APIGetObjectsByTypeReadOnly(
      Ct,
      T,
      WSM.nObjectType.nLevelAttributeType
    );
    if (b.length === 0)
      p.push(T);
    else {
      b.length > 1 && console.warn(`Found a level with more than one level attribute. ${T}`);
      const y = await WSM.APIGetObjectsByTypeReadOnly(
        Ct,
        b[0],
        WSM.nInstanceType,
        !0
      );
      y.length == 0 ? p.push(T) : (y.length > 1 && console.warn(`Found a level on more than one instance. ${T}`), f.includes(y[0]) || p.push(T));
    }
  }), FormIt.UndoManagement.BeginState(), p.length > 0 && await WSM.APIDeleteObjects(Ct, p);
  let S = await Vb();
  return FormIt.UndoManagement.RejectState(), FormIt.Selection.ClearSelections(), S;
}
async function Vb() {
  let f = await FormIt.FormaAddIn.SaveCurrentAXMtoTempFile(!0), p = await FormIt.FormaAddIn.ReadFileandMakeBlob(f);
  for (var v = new Uint8Array(p.length), S = 0; S < v.length; S++)
    v[S] = p[S];
  return v;
}
async function YL(f, p, v) {
  const S = new Blob([f]), T = new File([S], "internalRepresentation.axm");
  await QL(T, p).then((b) => {
    v && v(b);
  });
}
async function QL(f, p) {
  const v = JSON.stringify({
    projectId: p
  });
  try {
    const S = await fetch("/api/spacemaker-object-storage/v1/", {
      method: "POST",
      body: v,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": "true"
      }
    });
    if (S.ok) {
      const { id: T, url: b, fields: y } = await S.json(), L = new FormData();
      if (Object.keys(y).forEach((A) => {
        L.append(A, y[A]);
      }), L.append("file", f), (await fetch(b, {
        method: "POST",
        body: L,
        headers: {
          "Set-Cookie": "true"
        }
      })).ok)
        return T;
    }
  } catch {
    return !1;
  }
  return !1;
}
async function qL(f, p, v, S, T, b, y) {
  const L = FormItInterface.CallMethod("FormItPlugin.getAllInstancesToBeSaved", [b]), k = FormItInterface.CallMethod("FormItPlugin.getFloorGeometriesByBuildingId", [L]);
  if (S.length === 0 && Ub(k)) {
    await VE({
      elementId: p,
      authContext: v,
      urnToDelete: "",
      elementResponseMap: T,
      proposalElement: null
    });
    return;
  }
  zL(
    f,
    S,
    k
  ).then((A) => {
    y && y(A);
  });
}
async function KL(f, p, v, S, T, b, y, L, k, A) {
  let N = v.proposalId, M = v.urn;
  const $ = f ? await WSM.Geom.InvertTransform(f) : void 0;
  WL(b).then(async (z) => {
    if (!z) {
      console.error("Can't save temporary wsm file.");
      return;
    }
    qL(
      $,
      N,
      S,
      p,
      y,
      L,
      async (V) => {
        let ee = await od(S, N), Z = "", we = "", ce = !1, ae = Object.entries(V.elements).map(([ie, H]) => ie);
        if (y) {
          let ie = y[M];
          if (ie) {
            const H = Object.values(ie.children).filter(
              (de) => {
                let _e = de.urn.indexOf(":integrate:") > 0, Qe = !1;
                return k && (Qe = (k == null ? void 0 : k.indexOf(de.urn)) > -1), !Qe && _e;
              }
            );
            for (const de of H) {
              we = de.urn, we && (Z = ss(we).id);
              let Qe = { projectId: S, editingElementId: Z, proposalId: N }, ut = { editingElementUrn: we, deletingElementUrn: null };
              ae.indexOf(Z) !== -1 ? (ae = ae.filter((vt) => {
              }), await xy(
                Qe,
                V,
                z,
                T,
                ut,
                ee,
                y,
                A
              )) : (Z = "", ce = await xy(
                { projectId: S, editingElementId: Z, proposalId: N },
                V,
                z,
                T,
                { editingElementUrn: null, deletingElementUrn: we },
                ee,
                y,
                A
              ));
            }
            ae.length > 0 && (ce && (ee = await od(S, N)), we = "", Z = "", await xy(
              { projectId: S, editingElementId: Z, proposalId: N },
              V,
              z,
              T,
              { editingElementUrn: null, deletingElementUrn: null },
              ee,
              y,
              A
            ));
          } else
            await xy(
              { projectId: S, editingElementId: Z, proposalId: N },
              V,
              z,
              T,
              { editingElementUrn: null, deletingElementUrn: null },
              ee,
              y,
              A
            );
        }
      }
    );
  });
}
async function xy(f, p, v, S, T, b, y, L) {
  let k = f.projectId, A = f.editingElementId, N = f.proposalId, M = T.editingElementUrn, $ = T.deletingElementUrn;
  if (!$)
    YL(
      v,
      k,
      async (z) => {
        if (!z) {
          L && L(!1);
          return;
        }
        await XL(
          k,
          p,
          z,
          A,
          S,
          N,
          M,
          b,
          y,
          L
        );
      }
    );
  else
    return await VE({
      elementId: N,
      authContext: k,
      elementResponseMap: y,
      urnToDelete: $,
      proposalElement: b
    });
}
async function XL(f, p, v, S, T, b, y, L, k, A) {
  ZL(
    f,
    p,
    v,
    S,
    T
  ).then(async (N) => {
    !N || typeof N == "string" || N instanceof String ? A && A(N) : N ? VE({
      elementId: b,
      authContext: f,
      elementResponseMap: k,
      createdUrn: N.urn,
      proposalElement: L
    }).then((M) => {
      A && A(M);
    }) : A && A(!1);
  });
}
async function ZL(f, p, v, S, T) {
  let b = await p;
  const y = b.elements[b.rootElement].properties;
  y.spacemakerObjectStorageReferences = [v], y.spacemakerObjectStorageReferenceFormats = ["axm"], T.length > 0 && (y.areaStatsReps = {
    grossFloorPolygons: T
  });
  const L = await JL(f);
  if (L) {
    const k = await eN(L.url, JSON.stringify(b));
    try {
      if (k) {
        const A = S ? `/api/integrate/elements/${S}?version=2&authcontext=${f}&s3Id=${L.id}` : `/api/integrate/elements?version=2&authcontext=${f}&s3Id=${L.id}`;
        let N = await fetch(A, {
          method: "POST"
        }).catch((M) => {
          throw console.log(M), new Error(M);
        });
        if (N.ok)
          return await N.json();
        {
          let M = await N.json(), $ = `${M.errorMessage}: ${M.errors ? M.errors[0].message : "no detail can be found"}`;
          return console.log($), $;
        }
      }
    } catch {
      return !1;
    }
  }
  return !1;
}
async function VE({
  elementId: f,
  authContext: p,
  elementResponseMap: v,
  createdUrn: S,
  urnToDelete: T,
  proposalElement: b
}) {
  b === null ? b = await od(p, f) : v = Nw(v, b.urn);
  const { revision: y } = ss(b.urn);
  if (T)
    v = Nw(v, T), b.children = b.children.filter((L) => L.urn !== T);
  else if (S)
    b.children.push({
      urn: S,
      key: fd()
    });
  else
    return console.error("not a valid update, bad parameters"), !1;
  try {
    return (await fetch(
      `/api/proposal/elements/${f}/revisions/${y}?version=2&authcontext=${p}`,
      {
        method: "PUT",
        body: JSON.stringify(b)
      }
    )).ok ? (Object.values(b.children).filter(
      (k) => k.urn.indexOf("integrate") > -1
    ).forEach(
      (k) => {
        v[k.urn] || (v[k.urn] = k);
      }
    ), od(p, f).then((k) => {
      v[k.urn] = k;
    }), Dv("elements", v), !0) : !1;
  } catch {
    return !1;
  }
}
async function od(f, p) {
  const v = await ii.getProposalElement(
    p,
    f
  );
  if (v === null) {
    console.error("proposal can't be retrieved to be updated");
    return;
  }
  return Object.values(v).find(
    (T) => T.properties.category === "proposal"
  );
}
async function JL(f) {
  try {
    const p = await fetch(`/api/integrate/upload_link?authcontext=${f}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": "true"
      }
    });
    if (p.ok)
      return await p.json();
  } catch {
    return !1;
  }
  return !1;
}
async function eN(f, p) {
  try {
    return (await fetch(f, {
      method: "PUT",
      body: p
    })).ok;
  } catch {
    return !1;
  }
}
class tN {
  getCookie(p) {
    const v = p.length + 1;
    return document.cookie.split(";").map((S) => S.trim()).filter((S) => S.substring(0, v) === `${p}=`).map((S) => decodeURIComponent(S.substring(v)))[0] || null;
  }
  accessSpacemaker(p) {
    let v = null;
    if (p) {
      v = window.open("https://app.spacemaker.ai/auth/login?rd=https%3A%2F%2Fapp.spacemaker.ai%2Fprojects", "_blank", "width= 500px, height=500px");
      let S = setInterval(() => {
        this.getCookie("ajs_user_id") !== null && (clearInterval(S), v !== null && v.close());
      }, 1e3);
    } else {
      const T = "https://local.autodeskforma.eu:3001?loggedIn=1";
      window.location.replace(`https://app.autodeskforma.eu/auth/login?rd=${T}`);
    }
  }
  async save({
    projectId: p,
    proposal: v,
    elementResponseMap: S,
    terrainElevationTransf3d: T,
    loadedIntegrateElements: b,
    mapHistoryIdToInitialDeltaId: y
  }, L) {
    await FormIt.Model.IsModified() && this.beforeSaveLayerHandling().then(async () => {
      HL().then(async (A) => {
        PL(
          A,
          ar.FORMA_BUILDINGS,
          (N, M) => {
            M || (M = {}), KL(
              T,
              N,
              v,
              p,
              M,
              0,
              S,
              y,
              b,
              L
            );
          }
        );
      });
    });
  }
  async beforeSaveLayerHandling() {
    const p = [], v = [], S = await WSM.APIGetAllNonOwnedReadOnly(Ct);
    for (const T of S) {
      const b = await WSM.APIGetObjectTypeReadOnly(Ct, T);
      b === WSM.nObjectType.nBodyType || b === WSM.nObjectType.nMeshType ? p.push(T) : (b === WSM.nFaceType || b === WSM.nEdgeType || b === WSM.nVertexType || b === WSM.nLineMeshType || b === WSM.nPointMeshType) && v.push(T);
    }
    if (p.length > 0 || v.length > 0) {
      await FormIt.UndoManagement.BeginState();
      for (const T of p)
        await WSM.Utils.CreateAlignedAndCenteredGroup(Ct, [T]);
      v.length > 0 && await WSM.Utils.CreateAlignedAndCenteredGroup(Ct, v), await FormIt.UndoManagement.EndState("Move toplevels to instances");
    }
  }
  async getElementsAndSaveCache(p, v) {
    await LL(p.projectId, p.proposalId, v);
  }
  getTopLevelObjects(p, v, S = wb) {
    let T = p[v];
    const b = T.children || [], y = b == null ? void 0 : b.find((k) => {
      var A, N, M;
      return (M = (N = (A = T.properties) == null ? void 0 : A.flags) == null ? void 0 : N[k.key]) == null ? void 0 : M.scenario;
    }), L = [];
    for (let k of b)
      k !== y && L.push({ child: k, parentPath: S, scenario: !1 });
    return L;
  }
  buildElementInfo(p, v, S, T) {
    var k;
    const b = T[p.urn], y = v + "/" + p.key, L = rM[(k = b.properties) == null ? void 0 : k.category] ?? "generic";
    return L === "terrain" ? [] : [
      {
        path: y,
        category: L,
        scenario: S,
        element: b
      }
    ];
  }
  async fetchAndLoadElements(p, v, S) {
    const T = await ii.getProposalElement(
      v.proposalId,
      v.projectId
    );
    if (!T)
      return;
    const b = Object.values(T).find((V) => V.properties.category === "proposal"), y = {
      [b.urn]: b
    };
    let L = [], k = {
      [b.urn]: b
    };
    for (const V of b.children) {
      const ee = ss(V.urn);
      let Z = ee.system, we = ee.id, ce = ee.revision;
      await ii.getElement(
        Z,
        we,
        ce,
        v.projectId
      ).then((ae) => {
        let ie = V.urn;
        k[ie] = ae[V.urn];
      });
    }
    const A = this.getTopLevelObjects(y, b.urn), N = { proposal: {}, scenario: {} }, M = A.flatMap(
      ({ child: V, parentPath: ee }) => this.buildElementInfo(
        V,
        ee,
        !1,
        k
      )
    );
    for (const V of M) {
      const ee = V.scenario ? "scenario" : "proposal";
      N[ee][V.category] = N[ee][V.category] ?? [], N[ee][V.category].push(V.path);
    }
    let $ = N.proposal;
    if (await dM()) {
      let V = kL(b, v.projectId, y, L);
      await Promise.all(V).then(async () => {
        DL(y, b, v, "", $, p).then(() => {
          S(v.proposalId, y, L);
        });
      });
    }
  }
}
const Fy = new tN();
class nN extends Gn.Component {
  constructor(p) {
    super(p), this.state = {
      loggedIn: !1
    };
  }
  static login() {
    return Fy.accessSpacemaker(!1), null;
  }
  render() {
    return /* @__PURE__ */ Xe(Jl, {});
  }
}
class HE {
  constructor() {
    Ua(this, "id");
    Ua(this, "urn");
    Ua(this, "name");
    Ua(this, "metadata");
    Ua(this, "version");
    this.id = "", this.urn = "", this.name = "", this.version = "1", this.metadata = null;
  }
  Fill(p, v, S, T, b) {
    if (this.id = p, this.version = S, v === null || v === "") {
      let y = p.split("prop_");
      this.name = `prop_${y[1].substring(0, 2)}`;
    } else
      this.name = v;
    this.urn = b, this.metadata = T;
  }
}
var ld = {}, rN = {
  get exports() {
    return ld;
  },
  set exports(f) {
    ld = f;
  }
}, yn = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ib;
function aN() {
  if (ib)
    return yn;
  ib = 1;
  var f = typeof Symbol == "function" && Symbol.for, p = f ? Symbol.for("react.element") : 60103, v = f ? Symbol.for("react.portal") : 60106, S = f ? Symbol.for("react.fragment") : 60107, T = f ? Symbol.for("react.strict_mode") : 60108, b = f ? Symbol.for("react.profiler") : 60114, y = f ? Symbol.for("react.provider") : 60109, L = f ? Symbol.for("react.context") : 60110, k = f ? Symbol.for("react.async_mode") : 60111, A = f ? Symbol.for("react.concurrent_mode") : 60111, N = f ? Symbol.for("react.forward_ref") : 60112, M = f ? Symbol.for("react.suspense") : 60113, $ = f ? Symbol.for("react.suspense_list") : 60120, z = f ? Symbol.for("react.memo") : 60115, V = f ? Symbol.for("react.lazy") : 60116, ee = f ? Symbol.for("react.block") : 60121, Z = f ? Symbol.for("react.fundamental") : 60117, we = f ? Symbol.for("react.responder") : 60118, ce = f ? Symbol.for("react.scope") : 60119;
  function ae(H) {
    if (typeof H == "object" && H !== null) {
      var de = H.$$typeof;
      switch (de) {
        case p:
          switch (H = H.type, H) {
            case k:
            case A:
            case S:
            case b:
            case T:
            case M:
              return H;
            default:
              switch (H = H && H.$$typeof, H) {
                case L:
                case N:
                case V:
                case z:
                case y:
                  return H;
                default:
                  return de;
              }
          }
        case v:
          return de;
      }
    }
  }
  function ie(H) {
    return ae(H) === A;
  }
  return yn.AsyncMode = k, yn.ConcurrentMode = A, yn.ContextConsumer = L, yn.ContextProvider = y, yn.Element = p, yn.ForwardRef = N, yn.Fragment = S, yn.Lazy = V, yn.Memo = z, yn.Portal = v, yn.Profiler = b, yn.StrictMode = T, yn.Suspense = M, yn.isAsyncMode = function(H) {
    return ie(H) || ae(H) === k;
  }, yn.isConcurrentMode = ie, yn.isContextConsumer = function(H) {
    return ae(H) === L;
  }, yn.isContextProvider = function(H) {
    return ae(H) === y;
  }, yn.isElement = function(H) {
    return typeof H == "object" && H !== null && H.$$typeof === p;
  }, yn.isForwardRef = function(H) {
    return ae(H) === N;
  }, yn.isFragment = function(H) {
    return ae(H) === S;
  }, yn.isLazy = function(H) {
    return ae(H) === V;
  }, yn.isMemo = function(H) {
    return ae(H) === z;
  }, yn.isPortal = function(H) {
    return ae(H) === v;
  }, yn.isProfiler = function(H) {
    return ae(H) === b;
  }, yn.isStrictMode = function(H) {
    return ae(H) === T;
  }, yn.isSuspense = function(H) {
    return ae(H) === M;
  }, yn.isValidElementType = function(H) {
    return typeof H == "string" || typeof H == "function" || H === S || H === A || H === b || H === T || H === M || H === $ || typeof H == "object" && H !== null && (H.$$typeof === V || H.$$typeof === z || H.$$typeof === y || H.$$typeof === L || H.$$typeof === N || H.$$typeof === Z || H.$$typeof === we || H.$$typeof === ce || H.$$typeof === ee);
  }, yn.typeOf = ae, yn;
}
var gn = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ob;
function iN() {
  return ob || (ob = 1, {}.NODE_ENV !== "production" && function() {
    var f = typeof Symbol == "function" && Symbol.for, p = f ? Symbol.for("react.element") : 60103, v = f ? Symbol.for("react.portal") : 60106, S = f ? Symbol.for("react.fragment") : 60107, T = f ? Symbol.for("react.strict_mode") : 60108, b = f ? Symbol.for("react.profiler") : 60114, y = f ? Symbol.for("react.provider") : 60109, L = f ? Symbol.for("react.context") : 60110, k = f ? Symbol.for("react.async_mode") : 60111, A = f ? Symbol.for("react.concurrent_mode") : 60111, N = f ? Symbol.for("react.forward_ref") : 60112, M = f ? Symbol.for("react.suspense") : 60113, $ = f ? Symbol.for("react.suspense_list") : 60120, z = f ? Symbol.for("react.memo") : 60115, V = f ? Symbol.for("react.lazy") : 60116, ee = f ? Symbol.for("react.block") : 60121, Z = f ? Symbol.for("react.fundamental") : 60117, we = f ? Symbol.for("react.responder") : 60118, ce = f ? Symbol.for("react.scope") : 60119;
    function ae(ve) {
      return typeof ve == "string" || typeof ve == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      ve === S || ve === A || ve === b || ve === T || ve === M || ve === $ || typeof ve == "object" && ve !== null && (ve.$$typeof === V || ve.$$typeof === z || ve.$$typeof === y || ve.$$typeof === L || ve.$$typeof === N || ve.$$typeof === Z || ve.$$typeof === we || ve.$$typeof === ce || ve.$$typeof === ee);
    }
    function ie(ve) {
      if (typeof ve == "object" && ve !== null) {
        var bt = ve.$$typeof;
        switch (bt) {
          case p:
            var zt = ve.type;
            switch (zt) {
              case k:
              case A:
              case S:
              case b:
              case T:
              case M:
                return zt;
              default:
                var qe = zt && zt.$$typeof;
                switch (qe) {
                  case L:
                  case N:
                  case V:
                  case z:
                  case y:
                    return qe;
                  default:
                    return bt;
                }
            }
          case v:
            return bt;
        }
      }
    }
    var H = k, de = A, _e = L, Qe = y, ut = p, pt = N, vt = S, _t = V, Ue = z, ge = v, Te = b, xe = T, ye = M, J = !1;
    function Me(ve) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(ve) || ie(ve) === k;
    }
    function O(ve) {
      return ie(ve) === A;
    }
    function oe(ve) {
      return ie(ve) === L;
    }
    function re(ve) {
      return ie(ve) === y;
    }
    function pe(ve) {
      return typeof ve == "object" && ve !== null && ve.$$typeof === p;
    }
    function me(ve) {
      return ie(ve) === N;
    }
    function De(ve) {
      return ie(ve) === S;
    }
    function P(ve) {
      return ie(ve) === V;
    }
    function je(ve) {
      return ie(ve) === z;
    }
    function fe(ve) {
      return ie(ve) === v;
    }
    function at(ve) {
      return ie(ve) === b;
    }
    function ht(ve) {
      return ie(ve) === T;
    }
    function Ot(ve) {
      return ie(ve) === M;
    }
    gn.AsyncMode = H, gn.ConcurrentMode = de, gn.ContextConsumer = _e, gn.ContextProvider = Qe, gn.Element = ut, gn.ForwardRef = pt, gn.Fragment = vt, gn.Lazy = _t, gn.Memo = Ue, gn.Portal = ge, gn.Profiler = Te, gn.StrictMode = xe, gn.Suspense = ye, gn.isAsyncMode = Me, gn.isConcurrentMode = O, gn.isContextConsumer = oe, gn.isContextProvider = re, gn.isElement = pe, gn.isForwardRef = me, gn.isFragment = De, gn.isLazy = P, gn.isMemo = je, gn.isPortal = fe, gn.isProfiler = at, gn.isStrictMode = ht, gn.isSuspense = Ot, gn.isValidElementType = ae, gn.typeOf = ie;
  }()), gn;
}
(function(f) {
  ({}).NODE_ENV === "production" ? f.exports = aN() : f.exports = iN();
})(rN);
function oN(f) {
  function p(re, pe, me, De, P) {
    for (var je = 0, fe = 0, at = 0, ht = 0, Ot, ve, bt = 0, zt = 0, qe, Pt = qe = Ot = 0, ct = 0, Zt = 0, Zn = 0, Vt = 0, Yn = me.length, Jn = Yn - 1, dn, et = "", Lt = "", fr = "", Sn = "", Mn; ct < Yn; ) {
      if (ve = me.charCodeAt(ct), ct === Jn && fe + ht + at + je !== 0 && (fe !== 0 && (ve = fe === 47 ? 10 : 47), ht = at = je = 0, Yn++, Jn++), fe + ht + at + je === 0) {
        if (ct === Jn && (0 < Zt && (et = et.replace($, "")), 0 < et.trim().length)) {
          switch (ve) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              et += me.charAt(ct);
          }
          ve = 59;
        }
        switch (ve) {
          case 123:
            for (et = et.trim(), Ot = et.charCodeAt(0), qe = 1, Vt = ++ct; ct < Yn; ) {
              switch (ve = me.charCodeAt(ct)) {
                case 123:
                  qe++;
                  break;
                case 125:
                  qe--;
                  break;
                case 47:
                  switch (ve = me.charCodeAt(ct + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Pt = ct + 1; Pt < Jn; ++Pt)
                          switch (me.charCodeAt(Pt)) {
                            case 47:
                              if (ve === 42 && me.charCodeAt(Pt - 1) === 42 && ct + 2 !== Pt) {
                                ct = Pt + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (ve === 47) {
                                ct = Pt + 1;
                                break e;
                              }
                          }
                        ct = Pt;
                      }
                  }
                  break;
                case 91:
                  ve++;
                case 40:
                  ve++;
                case 34:
                case 39:
                  for (; ct++ < Jn && me.charCodeAt(ct) !== ve; )
                    ;
              }
              if (qe === 0)
                break;
              ct++;
            }
            switch (qe = me.substring(Vt, ct), Ot === 0 && (Ot = (et = et.replace(M, "").trim()).charCodeAt(0)), Ot) {
              case 64:
                switch (0 < Zt && (et = et.replace($, "")), ve = et.charCodeAt(1), ve) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Zt = pe;
                    break;
                  default:
                    Zt = xe;
                }
                if (qe = p(pe, Zt, qe, ve, P + 1), Vt = qe.length, 0 < J && (Zt = v(xe, et, Zn), Mn = L(3, qe, Zt, pe, Ue, _t, Vt, ve, P, De), et = Zt.join(""), Mn !== void 0 && (Vt = (qe = Mn.trim()).length) === 0 && (ve = 0, qe = "")), 0 < Vt)
                  switch (ve) {
                    case 115:
                      et = et.replace(de, y);
                    case 100:
                    case 109:
                    case 45:
                      qe = et + "{" + qe + "}";
                      break;
                    case 107:
                      et = et.replace(ce, "$1 $2"), qe = et + "{" + qe + "}", qe = Te === 1 || Te === 2 && b("@" + qe, 3) ? "@-webkit-" + qe + "@" + qe : "@" + qe;
                      break;
                    default:
                      qe = et + qe, De === 112 && (qe = (Lt += qe, ""));
                  }
                else
                  qe = "";
                break;
              default:
                qe = p(pe, v(pe, et, Zn), qe, De, P + 1);
            }
            fr += qe, qe = Zn = Zt = Pt = Ot = 0, et = "", ve = me.charCodeAt(++ct);
            break;
          case 125:
          case 59:
            if (et = (0 < Zt ? et.replace($, "") : et).trim(), 1 < (Vt = et.length))
              switch (Pt === 0 && (Ot = et.charCodeAt(0), Ot === 45 || 96 < Ot && 123 > Ot) && (Vt = (et = et.replace(" ", ":")).length), 0 < J && (Mn = L(1, et, pe, re, Ue, _t, Lt.length, De, P, De)) !== void 0 && (Vt = (et = Mn.trim()).length) === 0 && (et = "\0\0"), Ot = et.charCodeAt(0), ve = et.charCodeAt(1), Ot) {
                case 0:
                  break;
                case 64:
                  if (ve === 105 || ve === 99) {
                    Sn += et + me.charAt(ct);
                    break;
                  }
                default:
                  et.charCodeAt(Vt - 1) !== 58 && (Lt += T(et, Ot, ve, et.charCodeAt(2)));
              }
            Zn = Zt = Pt = Ot = 0, et = "", ve = me.charCodeAt(++ct);
        }
      }
      switch (ve) {
        case 13:
        case 10:
          fe === 47 ? fe = 0 : 1 + Ot === 0 && De !== 107 && 0 < et.length && (Zt = 1, et += "\0"), 0 < J * O && L(0, et, pe, re, Ue, _t, Lt.length, De, P, De), _t = 1, Ue++;
          break;
        case 59:
        case 125:
          if (fe + ht + at + je === 0) {
            _t++;
            break;
          }
        default:
          switch (_t++, dn = me.charAt(ct), ve) {
            case 9:
            case 32:
              if (ht + je + fe === 0)
                switch (bt) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    dn = "";
                    break;
                  default:
                    ve !== 32 && (dn = " ");
                }
              break;
            case 0:
              dn = "\\0";
              break;
            case 12:
              dn = "\\f";
              break;
            case 11:
              dn = "\\v";
              break;
            case 38:
              ht + fe + je === 0 && (Zt = Zn = 1, dn = "\f" + dn);
              break;
            case 108:
              if (ht + fe + je + ge === 0 && 0 < Pt)
                switch (ct - Pt) {
                  case 2:
                    bt === 112 && me.charCodeAt(ct - 3) === 58 && (ge = bt);
                  case 8:
                    zt === 111 && (ge = zt);
                }
              break;
            case 58:
              ht + fe + je === 0 && (Pt = ct);
              break;
            case 44:
              fe + at + ht + je === 0 && (Zt = 1, dn += "\r");
              break;
            case 34:
            case 39:
              fe === 0 && (ht = ht === ve ? 0 : ht === 0 ? ve : ht);
              break;
            case 91:
              ht + fe + at === 0 && je++;
              break;
            case 93:
              ht + fe + at === 0 && je--;
              break;
            case 41:
              ht + fe + je === 0 && at--;
              break;
            case 40:
              if (ht + fe + je === 0) {
                if (Ot === 0)
                  switch (2 * bt + 3 * zt) {
                    case 533:
                      break;
                    default:
                      Ot = 1;
                  }
                at++;
              }
              break;
            case 64:
              fe + at + ht + je + Pt + qe === 0 && (qe = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ht + je + at))
                switch (fe) {
                  case 0:
                    switch (2 * ve + 3 * me.charCodeAt(ct + 1)) {
                      case 235:
                        fe = 47;
                        break;
                      case 220:
                        Vt = ct, fe = 42;
                    }
                    break;
                  case 42:
                    ve === 47 && bt === 42 && Vt + 2 !== ct && (me.charCodeAt(Vt + 2) === 33 && (Lt += me.substring(Vt, ct + 1)), dn = "", fe = 0);
                }
          }
          fe === 0 && (et += dn);
      }
      zt = bt, bt = ve, ct++;
    }
    if (Vt = Lt.length, 0 < Vt) {
      if (Zt = pe, 0 < J && (Mn = L(2, Lt, Zt, re, Ue, _t, Vt, De, P, De), Mn !== void 0 && (Lt = Mn).length === 0))
        return Sn + Lt + fr;
      if (Lt = Zt.join(",") + "{" + Lt + "}", Te * ge !== 0) {
        switch (Te !== 2 || b(Lt, 2) || (ge = 0), ge) {
          case 111:
            Lt = Lt.replace(ie, ":-moz-$1") + Lt;
            break;
          case 112:
            Lt = Lt.replace(ae, "::-webkit-input-$1") + Lt.replace(ae, "::-moz-$1") + Lt.replace(ae, ":-ms-input-$1") + Lt;
        }
        ge = 0;
      }
    }
    return Sn + Lt + fr;
  }
  function v(re, pe, me) {
    var De = pe.trim().split(Z);
    pe = De;
    var P = De.length, je = re.length;
    switch (je) {
      case 0:
      case 1:
        var fe = 0;
        for (re = je === 0 ? "" : re[0] + " "; fe < P; ++fe)
          pe[fe] = S(re, pe[fe], me).trim();
        break;
      default:
        var at = fe = 0;
        for (pe = []; fe < P; ++fe)
          for (var ht = 0; ht < je; ++ht)
            pe[at++] = S(re[ht] + " ", De[fe], me).trim();
    }
    return pe;
  }
  function S(re, pe, me) {
    var De = pe.charCodeAt(0);
    switch (33 > De && (De = (pe = pe.trim()).charCodeAt(0)), De) {
      case 38:
        return pe.replace(we, "$1" + re.trim());
      case 58:
        return re.trim() + pe.replace(we, "$1" + re.trim());
      default:
        if (0 < 1 * me && 0 < pe.indexOf("\f"))
          return pe.replace(we, (re.charCodeAt(0) === 58 ? "" : "$1") + re.trim());
    }
    return re + pe;
  }
  function T(re, pe, me, De) {
    var P = re + ";", je = 2 * pe + 3 * me + 4 * De;
    if (je === 944) {
      re = P.indexOf(":", 9) + 1;
      var fe = P.substring(re, P.length - 1).trim();
      return fe = P.substring(0, re).trim() + fe + ";", Te === 1 || Te === 2 && b(fe, 1) ? "-webkit-" + fe + fe : fe;
    }
    if (Te === 0 || Te === 2 && !b(P, 1))
      return P;
    switch (je) {
      case 1015:
        return P.charCodeAt(10) === 97 ? "-webkit-" + P + P : P;
      case 951:
        return P.charCodeAt(3) === 116 ? "-webkit-" + P + P : P;
      case 963:
        return P.charCodeAt(5) === 110 ? "-webkit-" + P + P : P;
      case 1009:
        if (P.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + P + P;
      case 978:
        return "-webkit-" + P + "-moz-" + P + P;
      case 1019:
      case 983:
        return "-webkit-" + P + "-moz-" + P + "-ms-" + P + P;
      case 883:
        if (P.charCodeAt(8) === 45)
          return "-webkit-" + P + P;
        if (0 < P.indexOf("image-set(", 11))
          return P.replace(vt, "$1-webkit-$2") + P;
        break;
      case 932:
        if (P.charCodeAt(4) === 45)
          switch (P.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + P.replace("-grow", "") + "-webkit-" + P + "-ms-" + P.replace("grow", "positive") + P;
            case 115:
              return "-webkit-" + P + "-ms-" + P.replace("shrink", "negative") + P;
            case 98:
              return "-webkit-" + P + "-ms-" + P.replace("basis", "preferred-size") + P;
          }
        return "-webkit-" + P + "-ms-" + P + P;
      case 964:
        return "-webkit-" + P + "-ms-flex-" + P + P;
      case 1023:
        if (P.charCodeAt(8) !== 99)
          break;
        return fe = P.substring(P.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + fe + "-webkit-" + P + "-ms-flex-pack" + fe + P;
      case 1005:
        return V.test(P) ? P.replace(z, ":-webkit-") + P.replace(z, ":-moz-") + P : P;
      case 1e3:
        switch (fe = P.substring(13).trim(), pe = fe.indexOf("-") + 1, fe.charCodeAt(0) + fe.charCodeAt(pe)) {
          case 226:
            fe = P.replace(H, "tb");
            break;
          case 232:
            fe = P.replace(H, "tb-rl");
            break;
          case 220:
            fe = P.replace(H, "lr");
            break;
          default:
            return P;
        }
        return "-webkit-" + P + "-ms-" + fe + P;
      case 1017:
        if (P.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (pe = (P = re).length - 10, fe = (P.charCodeAt(pe) === 33 ? P.substring(0, pe) : P).substring(re.indexOf(":", 7) + 1).trim(), je = fe.charCodeAt(0) + (fe.charCodeAt(7) | 0)) {
          case 203:
            if (111 > fe.charCodeAt(8))
              break;
          case 115:
            P = P.replace(fe, "-webkit-" + fe) + ";" + P;
            break;
          case 207:
          case 102:
            P = P.replace(fe, "-webkit-" + (102 < je ? "inline-" : "") + "box") + ";" + P.replace(fe, "-webkit-" + fe) + ";" + P.replace(fe, "-ms-" + fe + "box") + ";" + P;
        }
        return P + ";";
      case 938:
        if (P.charCodeAt(5) === 45)
          switch (P.charCodeAt(6)) {
            case 105:
              return fe = P.replace("-items", ""), "-webkit-" + P + "-webkit-box-" + fe + "-ms-flex-" + fe + P;
            case 115:
              return "-webkit-" + P + "-ms-flex-item-" + P.replace(Qe, "") + P;
            default:
              return "-webkit-" + P + "-ms-flex-line-pack" + P.replace("align-content", "").replace(Qe, "") + P;
          }
        break;
      case 973:
      case 989:
        if (P.charCodeAt(3) !== 45 || P.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (pt.test(re) === !0)
          return (fe = re.substring(re.indexOf(":") + 1)).charCodeAt(0) === 115 ? T(re.replace("stretch", "fill-available"), pe, me, De).replace(":fill-available", ":stretch") : P.replace(fe, "-webkit-" + fe) + P.replace(fe, "-moz-" + fe.replace("fill-", "")) + P;
        break;
      case 962:
        if (P = "-webkit-" + P + (P.charCodeAt(5) === 102 ? "-ms-" + P : "") + P, me + De === 211 && P.charCodeAt(13) === 105 && 0 < P.indexOf("transform", 10))
          return P.substring(0, P.indexOf(";", 27) + 1).replace(ee, "$1-webkit-$2") + P;
    }
    return P;
  }
  function b(re, pe) {
    var me = re.indexOf(pe === 1 ? ":" : "{"), De = re.substring(0, pe !== 3 ? me : 10);
    return me = re.substring(me + 1, re.length - 1), Me(pe !== 2 ? De : De.replace(ut, "$1"), me, pe);
  }
  function y(re, pe) {
    var me = T(pe, pe.charCodeAt(0), pe.charCodeAt(1), pe.charCodeAt(2));
    return me !== pe + ";" ? me.replace(_e, " or ($1)").substring(4) : "(" + pe + ")";
  }
  function L(re, pe, me, De, P, je, fe, at, ht, Ot) {
    for (var ve = 0, bt = pe, zt; ve < J; ++ve)
      switch (zt = ye[ve].call(N, re, bt, me, De, P, je, fe, at, ht, Ot)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          bt = zt;
      }
    if (bt !== pe)
      return bt;
  }
  function k(re) {
    switch (re) {
      case void 0:
      case null:
        J = ye.length = 0;
        break;
      default:
        if (typeof re == "function")
          ye[J++] = re;
        else if (typeof re == "object")
          for (var pe = 0, me = re.length; pe < me; ++pe)
            k(re[pe]);
        else
          O = !!re | 0;
    }
    return k;
  }
  function A(re) {
    return re = re.prefix, re !== void 0 && (Me = null, re ? typeof re != "function" ? Te = 1 : (Te = 2, Me = re) : Te = 0), A;
  }
  function N(re, pe) {
    var me = re;
    if (33 > me.charCodeAt(0) && (me = me.trim()), oe = me, me = [oe], 0 < J) {
      var De = L(-1, pe, me, me, Ue, _t, 0, 0, 0, 0);
      De !== void 0 && typeof De == "string" && (pe = De);
    }
    var P = p(xe, me, pe, 0, 0);
    return 0 < J && (De = L(-2, P, me, me, Ue, _t, P.length, 0, 0, 0), De !== void 0 && (P = De)), oe = "", ge = 0, _t = Ue = 1, P;
  }
  var M = /^\0+/g, $ = /[\0\r\f]/g, z = /: */g, V = /zoo|gra/, ee = /([,: ])(transform)/g, Z = /,\r+?/g, we = /([\t\r\n ])*\f?&/g, ce = /@(k\w+)\s*(\S*)\s*/, ae = /::(place)/g, ie = /:(read-only)/g, H = /[svh]\w+-[tblr]{2}/, de = /\(\s*(.*)\s*\)/g, _e = /([\s\S]*?);/g, Qe = /-self|flex-/g, ut = /[^]*?(:[rp][el]a[\w-]+)[^]*/, pt = /stretch|:\s*\w+\-(?:conte|avail)/, vt = /([^-])(image-set\()/, _t = 1, Ue = 1, ge = 0, Te = 1, xe = [], ye = [], J = 0, Me = null, O = 0, oe = "";
  return N.use = k, N.set = A, f !== void 0 && A(f), N;
}
var lN = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function uN(f) {
  var p = /* @__PURE__ */ Object.create(null);
  return function(v) {
    return p[v] === void 0 && (p[v] = f(v)), p[v];
  };
}
var sN = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, lb = /* @__PURE__ */ uN(
  function(f) {
    return sN.test(f) || f.charCodeAt(0) === 111 && f.charCodeAt(1) === 110 && f.charCodeAt(2) < 91;
  }
  /* Z+1 */
), $E = ld, cN = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, fN = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, dN = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Hb = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, BE = {};
BE[$E.ForwardRef] = dN;
BE[$E.Memo] = Hb;
function ub(f) {
  return $E.isMemo(f) ? Hb : BE[f.$$typeof] || cN;
}
var pN = Object.defineProperty, vN = Object.getOwnPropertyNames, sb = Object.getOwnPropertySymbols, hN = Object.getOwnPropertyDescriptor, mN = Object.getPrototypeOf, cb = Object.prototype;
function $b(f, p, v) {
  if (typeof p != "string") {
    if (cb) {
      var S = mN(p);
      S && S !== cb && $b(f, S, v);
    }
    var T = vN(p);
    sb && (T = T.concat(sb(p)));
    for (var b = ub(f), y = ub(p), L = 0; L < T.length; ++L) {
      var k = T[L];
      if (!fN[k] && !(v && v[k]) && !(y && y[k]) && !(b && b[k])) {
        var A = hN(p, k);
        try {
          pN(f, k, A);
        } catch {
        }
      }
    }
  }
  return f;
}
var yN = $b;
function Xl() {
  return (Xl = Object.assign || function(f) {
    for (var p = 1; p < arguments.length; p++) {
      var v = arguments[p];
      for (var S in v)
        Object.prototype.hasOwnProperty.call(v, S) && (f[S] = v[S]);
    }
    return f;
  }).apply(this, arguments);
}
var fb = function(p, v) {
  for (var S = [p[0]], T = 0, b = v.length; T < b; T += 1)
    S.push(v[T], p[T + 1]);
  return S;
}, LE = function(p) {
  return p !== null && typeof p == "object" && (p.toString ? p.toString() : Object.prototype.toString.call(p)) === "[object Object]" && !ld.typeOf(p);
}, jy = Object.freeze([]), us = Object.freeze({});
function Lv(f) {
  return typeof f == "function";
}
function NE(f) {
  return {}.NODE_ENV !== "production" && typeof f == "string" && f || f.displayName || f.name || "Component";
}
function WE(f) {
  return f && typeof f.styledComponentId == "string";
}
var ud = typeof process < "u" && {} !== void 0 && ({}.REACT_APP_SC_ATTR || {}.SC_ATTR) || "data-styled", GE = typeof window < "u" && "HTMLElement" in window, gN = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && {} !== void 0 && ({}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && {}.REACT_APP_SC_DISABLE_SPEEDY !== "" ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" && {}.REACT_APP_SC_DISABLE_SPEEDY : {}.SC_DISABLE_SPEEDY !== void 0 && {}.SC_DISABLE_SPEEDY !== "" ? {}.SC_DISABLE_SPEEDY !== "false" && {}.SC_DISABLE_SPEEDY : {}.NODE_ENV !== "production")), SN = {}.NODE_ENV !== "production" ? {
  1: `Cannot create styled-component for component: %s.

`,
  2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`,
  3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`,
  4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`,
  5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`,
  6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`,
  7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',
  8: `ThemeProvider: Please make your "theme" prop an object.

`,
  9: "Missing document `<head>`\n\n",
  10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`,
  11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`,
  12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
  13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`,
  14: `ThemeProvider: "theme" prop is required.

`,
  15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
  16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`,
  17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`
} : {};
function EN() {
  for (var f = arguments.length <= 0 ? void 0 : arguments[0], p = [], v = 1, S = arguments.length; v < S; v += 1)
    p.push(v < 0 || arguments.length <= v ? void 0 : arguments[v]);
  return p.forEach(function(T) {
    f = f.replace(/%[a-z]/, T);
  }), f;
}
function dd(f) {
  for (var p = arguments.length, v = new Array(p > 1 ? p - 1 : 0), S = 1; S < p; S++)
    v[S - 1] = arguments[S];
  throw {}.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + f + " for more information." + (v.length > 0 ? " Args: " + v.join(", ") : "")) : new Error(EN.apply(void 0, [SN[f]].concat(v)).trim());
}
var CN = function() {
  function f(v) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = v;
  }
  var p = f.prototype;
  return p.indexOfGroup = function(v) {
    for (var S = 0, T = 0; T < v; T++)
      S += this.groupSizes[T];
    return S;
  }, p.insertRules = function(v, S) {
    if (v >= this.groupSizes.length) {
      for (var T = this.groupSizes, b = T.length, y = b; v >= y; )
        (y <<= 1) < 0 && dd(16, "" + v);
      this.groupSizes = new Uint32Array(y), this.groupSizes.set(T), this.length = y;
      for (var L = b; L < y; L++)
        this.groupSizes[L] = 0;
    }
    for (var k = this.indexOfGroup(v + 1), A = 0, N = S.length; A < N; A++)
      this.tag.insertRule(k, S[A]) && (this.groupSizes[v]++, k++);
  }, p.clearGroup = function(v) {
    if (v < this.length) {
      var S = this.groupSizes[v], T = this.indexOfGroup(v), b = T + S;
      this.groupSizes[v] = 0;
      for (var y = T; y < b; y++)
        this.tag.deleteRule(T);
    }
  }, p.getGroup = function(v) {
    var S = "";
    if (v >= this.length || this.groupSizes[v] === 0)
      return S;
    for (var T = this.groupSizes[v], b = this.indexOfGroup(v), y = b + T, L = b; L < y; L++)
      S += this.tag.getRule(L) + `/*!sc*/
`;
    return S;
  }, f;
}(), Dy = /* @__PURE__ */ new Map(), zy = /* @__PURE__ */ new Map(), Mv = 1, _y = function(p) {
  if (Dy.has(p))
    return Dy.get(p);
  for (; zy.has(Mv); )
    Mv++;
  var v = Mv++;
  return {}.NODE_ENV !== "production" && ((0 | v) < 0 || v > 1 << 30) && dd(16, "" + v), Dy.set(p, v), zy.set(v, p), v;
}, TN = function(p) {
  return zy.get(p);
}, wN = function(p, v) {
  v >= Mv && (Mv = v + 1), Dy.set(p, v), zy.set(v, p);
}, bN = "style[" + ud + '][data-styled-version="5.3.9"]', RN = new RegExp("^" + ud + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), xN = function(p, v, S) {
  for (var T, b = S.split(","), y = 0, L = b.length; y < L; y++)
    (T = b[y]) && p.registerName(v, T);
}, _N = function(p, v) {
  for (var S = (v.textContent || "").split(`/*!sc*/
`), T = [], b = 0, y = S.length; b < y; b++) {
    var L = S[b].trim();
    if (L) {
      var k = L.match(RN);
      if (k) {
        var A = 0 | parseInt(k[1], 10), N = k[2];
        A !== 0 && (wN(N, A), xN(p, N, k[3]), p.getTag().insertRules(A, T)), T.length = 0;
      } else
        T.push(L);
    }
  }
}, ON = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Bb = function(p) {
  var v = document.head, S = p || v, T = document.createElement("style"), b = function(k) {
    for (var A = k.childNodes, N = A.length; N >= 0; N--) {
      var M = A[N];
      if (M && M.nodeType === 1 && M.hasAttribute(ud))
        return M;
    }
  }(S), y = b !== void 0 ? b.nextSibling : null;
  T.setAttribute(ud, "active"), T.setAttribute("data-styled-version", "5.3.9");
  var L = ON();
  return L && T.setAttribute("nonce", L), S.insertBefore(T, y), T;
}, kN = function() {
  function f(v) {
    var S = this.element = Bb(v);
    S.appendChild(document.createTextNode("")), this.sheet = function(T) {
      if (T.sheet)
        return T.sheet;
      for (var b = document.styleSheets, y = 0, L = b.length; y < L; y++) {
        var k = b[y];
        if (k.ownerNode === T)
          return k;
      }
      dd(17);
    }(S), this.length = 0;
  }
  var p = f.prototype;
  return p.insertRule = function(v, S) {
    try {
      return this.sheet.insertRule(S, v), this.length++, !0;
    } catch {
      return !1;
    }
  }, p.deleteRule = function(v) {
    this.sheet.deleteRule(v), this.length--;
  }, p.getRule = function(v) {
    var S = this.sheet.cssRules[v];
    return S !== void 0 && typeof S.cssText == "string" ? S.cssText : "";
  }, f;
}(), DN = function() {
  function f(v) {
    var S = this.element = Bb(v);
    this.nodes = S.childNodes, this.length = 0;
  }
  var p = f.prototype;
  return p.insertRule = function(v, S) {
    if (v <= this.length && v >= 0) {
      var T = document.createTextNode(S), b = this.nodes[v];
      return this.element.insertBefore(T, b || null), this.length++, !0;
    }
    return !1;
  }, p.deleteRule = function(v) {
    this.element.removeChild(this.nodes[v]), this.length--;
  }, p.getRule = function(v) {
    return v < this.length ? this.nodes[v].textContent : "";
  }, f;
}(), MN = function() {
  function f(v) {
    this.rules = [], this.length = 0;
  }
  var p = f.prototype;
  return p.insertRule = function(v, S) {
    return v <= this.length && (this.rules.splice(v, 0, S), this.length++, !0);
  }, p.deleteRule = function(v) {
    this.rules.splice(v, 1), this.length--;
  }, p.getRule = function(v) {
    return v < this.length ? this.rules[v] : "";
  }, f;
}(), db = GE, AN = {
  isServer: !GE,
  useCSSOMInjection: !gN
}, Wb = function() {
  function f(v, S, T) {
    v === void 0 && (v = us), S === void 0 && (S = {}), this.options = Xl({}, AN, {}, v), this.gs = S, this.names = new Map(T), this.server = !!v.isServer, !this.server && GE && db && (db = !1, function(b) {
      for (var y = document.querySelectorAll(bN), L = 0, k = y.length; L < k; L++) {
        var A = y[L];
        A && A.getAttribute(ud) !== "active" && (_N(b, A), A.parentNode && A.parentNode.removeChild(A));
      }
    }(this));
  }
  f.registerId = function(v) {
    return _y(v);
  };
  var p = f.prototype;
  return p.reconstructWithOptions = function(v, S) {
    return S === void 0 && (S = !0), new f(Xl({}, this.options, {}, v), this.gs, S && this.names || void 0);
  }, p.allocateGSInstance = function(v) {
    return this.gs[v] = (this.gs[v] || 0) + 1;
  }, p.getTag = function() {
    return this.tag || (this.tag = (T = (S = this.options).isServer, b = S.useCSSOMInjection, y = S.target, v = T ? new MN(y) : b ? new kN(y) : new DN(y), new CN(v)));
    var v, S, T, b, y;
  }, p.hasNameForId = function(v, S) {
    return this.names.has(v) && this.names.get(v).has(S);
  }, p.registerName = function(v, S) {
    if (_y(v), this.names.has(v))
      this.names.get(v).add(S);
    else {
      var T = /* @__PURE__ */ new Set();
      T.add(S), this.names.set(v, T);
    }
  }, p.insertRules = function(v, S, T) {
    this.registerName(v, S), this.getTag().insertRules(_y(v), T);
  }, p.clearNames = function(v) {
    this.names.has(v) && this.names.get(v).clear();
  }, p.clearRules = function(v) {
    this.getTag().clearGroup(_y(v)), this.clearNames(v);
  }, p.clearTag = function() {
    this.tag = void 0;
  }, p.toString = function() {
    return function(v) {
      for (var S = v.getTag(), T = S.length, b = "", y = 0; y < T; y++) {
        var L = TN(y);
        if (L !== void 0) {
          var k = v.names.get(L), A = S.getGroup(y);
          if (k && A && k.size) {
            var N = ud + ".g" + y + '[id="' + L + '"]', M = "";
            k !== void 0 && k.forEach(function($) {
              $.length > 0 && (M += $ + ",");
            }), b += "" + A + N + '{content:"' + M + `"}/*!sc*/
`;
          }
        }
      }
      return b;
    }(this);
  }, f;
}(), LN = /(a)(d)/gi, pb = function(p) {
  return String.fromCharCode(p + (p > 25 ? 39 : 97));
};
function IE(f) {
  var p, v = "";
  for (p = Math.abs(f); p > 52; p = p / 52 | 0)
    v = pb(p % 52) + v;
  return (pb(p % 52) + v).replace(LN, "$1-$2");
}
var mc = function(p, v) {
  for (var S = v.length; S; )
    p = 33 * p ^ v.charCodeAt(--S);
  return p;
}, Gb = function(p) {
  return mc(5381, p);
};
function NN(f) {
  for (var p = 0; p < f.length; p += 1) {
    var v = f[p];
    if (Lv(v) && !WE(v))
      return !1;
  }
  return !0;
}
var IN = Gb("5.3.9"), UN = function() {
  function f(p, v, S) {
    this.rules = p, this.staticRulesId = "", this.isStatic = {}.NODE_ENV === "production" && (S === void 0 || S.isStatic) && NN(p), this.componentId = v, this.baseHash = mc(IN, v), this.baseStyle = S, Wb.registerId(v);
  }
  return f.prototype.generateAndInjectStyles = function(p, v, S) {
    var T = this.componentId, b = [];
    if (this.baseStyle && b.push(this.baseStyle.generateAndInjectStyles(p, v, S)), this.isStatic && !S.hash)
      if (this.staticRulesId && v.hasNameForId(T, this.staticRulesId))
        b.push(this.staticRulesId);
      else {
        var y = sd(this.rules, p, v, S).join(""), L = IE(mc(this.baseHash, y) >>> 0);
        if (!v.hasNameForId(T, L)) {
          var k = S(y, "." + L, void 0, T);
          v.insertRules(T, L, k);
        }
        b.push(L), this.staticRulesId = L;
      }
    else {
      for (var A = this.rules.length, N = mc(this.baseHash, S.hash), M = "", $ = 0; $ < A; $++) {
        var z = this.rules[$];
        if (typeof z == "string")
          M += z, {}.NODE_ENV !== "production" && (N = mc(N, z + $));
        else if (z) {
          var V = sd(z, p, v, S), ee = Array.isArray(V) ? V.join("") : V;
          N = mc(N, ee + $), M += ee;
        }
      }
      if (M) {
        var Z = IE(N >>> 0);
        if (!v.hasNameForId(T, Z)) {
          var we = S(M, "." + Z, void 0, T);
          v.insertRules(T, Z, we);
        }
        b.push(Z);
      }
    }
    return b.join(" ");
  }, f;
}(), FN = /^\s*\/\/.*$/gm, jN = [":", "[", ".", "#"];
function zN(f) {
  var p, v, S, T, b = f === void 0 ? us : f, y = b.options, L = y === void 0 ? us : y, k = b.plugins, A = k === void 0 ? jy : k, N = new oN(L), M = [], $ = function(ee) {
    function Z(we) {
      if (we)
        try {
          ee(we + "}");
        } catch {
        }
    }
    return function(we, ce, ae, ie, H, de, _e, Qe, ut, pt) {
      switch (we) {
        case 1:
          if (ut === 0 && ce.charCodeAt(0) === 64)
            return ee(ce + ";"), "";
          break;
        case 2:
          if (Qe === 0)
            return ce + "/*|*/";
          break;
        case 3:
          switch (Qe) {
            case 102:
            case 112:
              return ee(ae[0] + ce), "";
            default:
              return ce + (pt === 0 ? "/*|*/" : "");
          }
        case -2:
          ce.split("/*|*/}").forEach(Z);
      }
    };
  }(function(ee) {
    M.push(ee);
  }), z = function(Z, we, ce) {
    return we === 0 && jN.indexOf(ce[v.length]) !== -1 || ce.match(T) ? Z : "." + p;
  };
  function V(ee, Z, we, ce) {
    ce === void 0 && (ce = "&");
    var ae = ee.replace(FN, ""), ie = Z && we ? we + " " + Z + " { " + ae + " }" : ae;
    return p = ce, v = Z, S = new RegExp("\\" + v + "\\b", "g"), T = new RegExp("(\\" + v + "\\b){2,}"), N(we || !Z ? "" : Z, ie);
  }
  return N.use([].concat(A, [function(ee, Z, we) {
    ee === 2 && we.length && we[0].lastIndexOf(v) > 0 && (we[0] = we[0].replace(S, z));
  }, $, function(ee) {
    if (ee === -2) {
      var Z = M;
      return M = [], Z;
    }
  }])), V.hash = A.length ? A.reduce(function(ee, Z) {
    return Z.name || dd(15), mc(ee, Z.name);
  }, 5381).toString() : "", V;
}
var Yb = Py.createContext();
Yb.Consumer;
var Qb = Py.createContext(), PN = (Qb.Consumer, new Wb()), UE = zN();
function VN() {
  return Gn.useContext(Yb) || PN;
}
function HN() {
  return Gn.useContext(Qb) || UE;
}
var $N = function() {
  function f(p, v) {
    var S = this;
    this.inject = function(T, b) {
      b === void 0 && (b = UE);
      var y = S.name + b.hash;
      T.hasNameForId(S.id, y) || T.insertRules(S.id, y, b(S.rules, y, "@keyframes"));
    }, this.toString = function() {
      return dd(12, String(S.name));
    }, this.name = p, this.id = "sc-keyframes-" + p, this.rules = v;
  }
  return f.prototype.getName = function(p) {
    return p === void 0 && (p = UE), this.name + p.hash;
  }, f;
}(), BN = /([A-Z])/, WN = /([A-Z])/g, GN = /^ms-/, YN = function(p) {
  return "-" + p.toLowerCase();
};
function vb(f) {
  return BN.test(f) ? f.replace(WN, YN).replace(GN, "-ms-") : f;
}
var hb = function(p) {
  return p == null || p === !1 || p === "";
};
function sd(f, p, v, S) {
  if (Array.isArray(f)) {
    for (var T, b = [], y = 0, L = f.length; y < L; y += 1)
      (T = sd(f[y], p, v, S)) !== "" && (Array.isArray(T) ? b.push.apply(b, T) : b.push(T));
    return b;
  }
  if (hb(f))
    return "";
  if (WE(f))
    return "." + f.styledComponentId;
  if (Lv(f)) {
    if (typeof (A = f) != "function" || A.prototype && A.prototype.isReactComponent || !p)
      return f;
    var k = f(p);
    return {}.NODE_ENV !== "production" && ld.isElement(k) && console.warn(NE(f) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), sd(k, p, v, S);
  }
  var A;
  return f instanceof $N ? v ? (f.inject(v, S), f.getName(S)) : f : LE(f) ? function N(M, $) {
    var z, V, ee = [];
    for (var Z in M)
      M.hasOwnProperty(Z) && !hb(M[Z]) && (Array.isArray(M[Z]) && M[Z].isCss || Lv(M[Z]) ? ee.push(vb(Z) + ":", M[Z], ";") : LE(M[Z]) ? ee.push.apply(ee, N(M[Z], Z)) : ee.push(vb(Z) + ": " + (z = Z, (V = M[Z]) == null || typeof V == "boolean" || V === "" ? "" : typeof V != "number" || V === 0 || z in lN ? String(V).trim() : V + "px") + ";"));
    return $ ? [$ + " {"].concat(ee, ["}"]) : ee;
  }(f) : f.toString();
}
var mb = function(p) {
  return Array.isArray(p) && (p.isCss = !0), p;
};
function QN(f) {
  for (var p = arguments.length, v = new Array(p > 1 ? p - 1 : 0), S = 1; S < p; S++)
    v[S - 1] = arguments[S];
  return Lv(f) || LE(f) ? mb(sd(fb(jy, [f].concat(v)))) : v.length === 0 && f.length === 1 && typeof f[0] == "string" ? f : mb(sd(fb(f, v)));
}
var yb = /invalid hook call/i, Oy = /* @__PURE__ */ new Set(), qN = function(p, v) {
  if ({}.NODE_ENV !== "production") {
    var S = "The component " + p + (v ? ' with the id of "' + v + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, T = console.error;
    try {
      var b = !0;
      console.error = function(y) {
        if (yb.test(y))
          b = !1, Oy.delete(S);
        else {
          for (var L = arguments.length, k = new Array(L > 1 ? L - 1 : 0), A = 1; A < L; A++)
            k[A - 1] = arguments[A];
          T.apply(void 0, [y].concat(k));
        }
      }, Gn.useRef(), b && !Oy.has(S) && (console.warn(S), Oy.add(S));
    } catch (y) {
      yb.test(y.message) && Oy.delete(S);
    } finally {
      console.error = T;
    }
  }
}, KN = function(p, v, S) {
  return S === void 0 && (S = us), p.theme !== S.theme && p.theme || v || S.theme;
}, XN = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ZN = /(^-|-$)/g;
function bE(f) {
  return f.replace(XN, "-").replace(ZN, "");
}
var JN = function(p) {
  return IE(Gb(p) >>> 0);
};
function ky(f) {
  return typeof f == "string" && ({}.NODE_ENV === "production" || f.charAt(0) === f.charAt(0).toLowerCase());
}
var FE = function(p) {
  return typeof p == "function" || typeof p == "object" && p !== null && !Array.isArray(p);
}, eI = function(p) {
  return p !== "__proto__" && p !== "constructor" && p !== "prototype";
};
function tI(f, p, v) {
  var S = f[v];
  FE(p) && FE(S) ? qb(S, p) : f[v] = p;
}
function qb(f) {
  for (var p = arguments.length, v = new Array(p > 1 ? p - 1 : 0), S = 1; S < p; S++)
    v[S - 1] = arguments[S];
  for (var T = 0, b = v; T < b.length; T++) {
    var y = b[T];
    if (FE(y))
      for (var L in y)
        eI(L) && tI(f, y[L], L);
  }
  return f;
}
var Kb = Py.createContext();
Kb.Consumer;
var RE = {};
function Xb(f, p, v) {
  var S = WE(f), T = !ky(f), b = p.attrs, y = b === void 0 ? jy : b, L = p.componentId, k = L === void 0 ? function(ce, ae) {
    var ie = typeof ce != "string" ? "sc" : bE(ce);
    RE[ie] = (RE[ie] || 0) + 1;
    var H = ie + "-" + JN("5.3.9" + ie + RE[ie]);
    return ae ? ae + "-" + H : H;
  }(p.displayName, p.parentComponentId) : L, A = p.displayName, N = A === void 0 ? function(ce) {
    return ky(ce) ? "styled." + ce : "Styled(" + NE(ce) + ")";
  }(f) : A, M = p.displayName && p.componentId ? bE(p.displayName) + "-" + p.componentId : p.componentId || k, $ = S && f.attrs ? Array.prototype.concat(f.attrs, y).filter(Boolean) : y, z = p.shouldForwardProp;
  S && f.shouldForwardProp && (z = p.shouldForwardProp ? function(ce, ae, ie) {
    return f.shouldForwardProp(ce, ae, ie) && p.shouldForwardProp(ce, ae, ie);
  } : f.shouldForwardProp);
  var V, ee = new UN(v, M, S ? f.componentStyle : void 0), Z = ee.isStatic && y.length === 0, we = function(ae, ie) {
    return function(H, de, _e, Qe) {
      var ut = H.attrs, pt = H.componentStyle, vt = H.defaultProps, _t = H.foldedComponentIds, Ue = H.shouldForwardProp, ge = H.styledComponentId, Te = H.target;
      ({}).NODE_ENV !== "production" && Gn.useDebugValue(ge);
      var xe = function(P, je, fe) {
        P === void 0 && (P = us);
        var at = Xl({}, je, {
          theme: P
        }), ht = {};
        return fe.forEach(function(Ot) {
          var ve, bt, zt, qe = Ot;
          for (ve in Lv(qe) && (qe = qe(at)), qe)
            at[ve] = ht[ve] = ve === "className" ? (bt = ht[ve], zt = qe[ve], bt && zt ? bt + " " + zt : bt || zt) : qe[ve];
        }), [at, ht];
      }(KN(de, Gn.useContext(Kb), vt) || us, de, ut), ye = xe[0], J = xe[1], Me = function(P, je, fe, at) {
        var ht = VN(), Ot = HN(), ve = je ? P.generateAndInjectStyles(us, ht, Ot) : P.generateAndInjectStyles(fe, ht, Ot);
        return {}.NODE_ENV !== "production" && Gn.useDebugValue(ve), {}.NODE_ENV !== "production" && !je && at && at(ve), ve;
      }(pt, Qe, ye, {}.NODE_ENV !== "production" ? H.warnTooManyClasses : void 0), O = _e, oe = J.$as || de.$as || J.as || de.as || Te, re = ky(oe), pe = J !== de ? Xl({}, de, {}, J) : de, me = {};
      for (var De in pe)
        De[0] !== "$" && De !== "as" && (De === "forwardedAs" ? me.as = pe[De] : (Ue ? Ue(De, lb, oe) : !re || lb(De)) && (me[De] = pe[De]));
      return de.style && J.style !== de.style && (me.style = Xl({}, de.style, {}, J.style)), me.className = Array.prototype.concat(_t, ge, Me !== ge ? Me : null, de.className, J.className).filter(Boolean).join(" "), me.ref = O, Gn.createElement(oe, me);
    }(V, ae, ie, Z);
  };
  return we.displayName = N, (V = Py.forwardRef(we)).attrs = $, V.componentStyle = ee, V.displayName = N, V.shouldForwardProp = z, V.foldedComponentIds = S ? Array.prototype.concat(f.foldedComponentIds, f.styledComponentId) : jy, V.styledComponentId = M, V.target = S ? f.target : f, V.withComponent = function(ce) {
    var ae = p.componentId, ie = function(de, _e) {
      if (de == null)
        return {};
      var Qe, ut, pt = {}, vt = Object.keys(de);
      for (ut = 0; ut < vt.length; ut++)
        Qe = vt[ut], _e.indexOf(Qe) >= 0 || (pt[Qe] = de[Qe]);
      return pt;
    }(p, ["componentId"]), H = ae && ae + "-" + (ky(ce) ? ce : bE(NE(ce)));
    return Xb(ce, Xl({}, ie, {
      attrs: $,
      componentId: H
    }), v);
  }, Object.defineProperty(V, "defaultProps", {
    get: function() {
      return this._foldedDefaultProps;
    },
    set: function(ae) {
      this._foldedDefaultProps = S ? qb({}, f.defaultProps, ae) : ae;
    }
  }), {}.NODE_ENV !== "production" && (qN(N, M), V.warnTooManyClasses = function(ce, ae) {
    var ie = {}, H = !1;
    return function(de) {
      if (!H && (ie[de] = !0, Object.keys(ie).length >= 200)) {
        var _e = ae ? ' with the id of "' + ae + '"' : "";
        console.warn("Over 200 classes were generated for component " + ce + _e + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), H = !0, ie = {};
      }
    };
  }(N, M)), Object.defineProperty(V, "toString", {
    value: function() {
      return "." + V.styledComponentId;
    }
  }), T && yN(V, f, {
    attrs: !0,
    componentStyle: !0,
    displayName: !0,
    foldedComponentIds: !0,
    shouldForwardProp: !0,
    styledComponentId: !0,
    target: !0,
    withComponent: !0
  }), V;
}
var jE = function(p) {
  return function v(S, T, b) {
    if (b === void 0 && (b = us), !ld.isValidElementType(T))
      return dd(1, String(T));
    var y = function() {
      return S(T, b, QN.apply(void 0, arguments));
    };
    return y.withConfig = function(L) {
      return v(S, T, Xl({}, b, {}, L));
    }, y.attrs = function(L) {
      return v(S, T, Xl({}, b, {
        attrs: Array.prototype.concat(b.attrs, L).filter(Boolean)
      }));
    }, y;
  }(Xb, p);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(f) {
  jE[f] = jE(f);
});
({}).NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), {}.NODE_ENV !== "production" && {}.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const Rn = jE, nI = Rn.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 255px;
    overflow: hidden;
`, rI = Rn.div`
    position: relative;
    text-decoration: none;
    display: block;
`, aI = Rn.div`
    width: 175px;
    min-height: 158px;
    border-radius: 4px;
    padding: 5px 5px 5px 5px;
    margin: 0rem 1.0rem .5rem 2.0rem;
    opacity: 1;
    background-color: 1;
    transition: box-shadow 100ms linear 0s;
`, gb = Rn.div`
    display: flex;
`, iI = Rn.div`
    display: flex;
    flex-direction: column;
    margin: 0px 5px 0px 0px;
`, oI = Rn.span`
    font-family: Inter;
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: rgb(42, 51, 61)
`, lI = Rn.span`
    font-family: Inter;
    font-size: 10px;
    line-height: 16px;
    color: rgb(91, 102, 113)
`, uI = Rn.div`
    custor: pointer;
    height: 115px;
    width: 115px;
    border-radius: 4px;
    background-size: cover;
    background-color: white;
    background-position: center center;
    overflow: hidden;
`, sI = Rn.div`
    transition: opacity 100ms linear 0s;
    overflow: hidden;
    background-color: rgb(226, 226, 226);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`, cI = Rn.div`
    display: flex;
    flex-direction: column;
    margin: 0rem .1rem 0rem .4rem;
    padding: 0px .2em 0px .5em;
    border: 1.5px solid rgb(233, 234, 236);
    border-radius: 4px;
    align-items: center;
    justify-content: center;
`;
Rn.div`
    height: 80px;
    width: 80px;
    display: flex;
    justify-content: space-evenly;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
`;
const fI = Rn.div`
    margin-top: 6px;
`, dI = Rn.div`
    font-family: Inter;
    font-size: 12px;
    font-weight: 550;
    color: rgb(42, 51, 61);
    line-height: 24px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
`, pI = Rn.div`
    position: relative;
    width: fit-content;
    text-align: left;
`, vI = Rn.div`
    position: relative;
    font-family: Inter;
    font-size: 10px;
    line-height: 16px;
    color: rgb(115, 127, 140);
    margin-top: -2px;
    min-height: 16px;
    width: fit-content;
    overflow: visible;
    text-align: left;
`, hI = Rn.div`
    display: flex;
    flex-direction: column;
    flex-row: row wrap;
    overflow: visible;
    align-items: center;
`, mI = Rn.div`
    position: relative;
    text-decoration: none;
    display: block;
`, yI = Rn.div`
    width: 175px;
    border-radius: 4px;
    padding: 5px 5px 5px 5px;
    margin: 0rem 1.0rem .5rem 2.0rem;
    opacity: 1;
    background-color: 1;
    transition: box-shadow 100ms linear 0s;
    overflow-y: auto;
`, Sb = Rn.div`
    display: flex;
`, gI = Rn.div`
    display: flex;
    flex-direction: column;
    margin: 0px 5px 0px 0px;
`, SI = Rn.div`
    custor: pointer;
    height: 56px;
    width: 56px;
    border-radius: 4px;
    background-size: cover;
    background-color: white;
    background-position: center center;
    overflow: hidden;
`, EI = Rn.div`
    transition: opacity 100ms linear 0s;
    overflow: hidden;
    background-color: rgb(226, 226, 226);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`, CI = Rn.div`
    display: flex;
    flex-direction: column;
    margin: 0rem .1rem 0rem .4rem;
    padding: 0px .2em 0px .5em;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
`;
Rn.div`
    height: 80px;
    width: 80px;
    display: flex;
    justify-content: space-evenly;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
`;
Rn.div`
    margin-top: 6px;
`;
const TI = Rn.div`
    font-family: Inter;
    font-size: 12px;
    font-weight: 550;
    color: rgb(42, 51, 61);
    line-height: 24px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
`, wI = Rn.div`
    position: relative;
    width: fit-content;
    text-align: left;
`, bI = Rn.div`
    position: relative;
    font-family: Inter;
    font-size: 10px;
    line-height: 16px;
    color: rgb(115, 127, 140);
    margin-top: -2px;
    min-height: 16px;
    width: fit-content;
    overflow: visible;
    text-align: left;
`;
function RI(f) {
  const { proposal: p, proposalSelectionHandler: v, isSelected: S } = f, T = ii.FormatThumbnailUrl(p.projectId, p.urn);
  return /* @__PURE__ */ Xe(Jl, { children: /* @__PURE__ */ Xe(
    mI,
    {
      onClick: () => {
        v(p.id);
      },
      children: /* @__PURE__ */ Xe(
        yI,
        {
          id: p.proposalId,
          className: S ? "proposal selected" : "proposal",
          children: /* @__PURE__ */ na(Sb, { className: "infos", children: [
            /* @__PURE__ */ Xe(SI, { children: /* @__PURE__ */ Xe(EI, { children: /* @__PURE__ */ Xe("img", { alt: "Site Preview", src: T, width: "56", height: "56" }) }) }),
            /* @__PURE__ */ Xe(CI, { children: /* @__PURE__ */ Xe(Sb, { children: /* @__PURE__ */ na(gI, { children: [
              /* @__PURE__ */ Xe(TI, { children: p.name }),
              /* @__PURE__ */ Xe(wI, { children: /* @__PURE__ */ Xe(bI, { children: p.creationDate }) })
            ] }) }) })
          ] })
        }
      )
    }
  ) });
}
function xI(f) {
  const { proposals: p, proposalSelectionHandler: v, selectedProposalId: S } = f;
  return p ? /* @__PURE__ */ Xe(Jl, { children: /* @__PURE__ */ Xe("div", { "data-checkly": "ProposalList", children: /* @__PURE__ */ Xe(hI, { children: p == null ? void 0 : p.map((T) => /* @__PURE__ */ Xe(
    RI,
    {
      proposal: T,
      proposalSelectionHandler: v,
      isSelected: T.proposalId === S
    },
    T.proposalId
  )) }) }) }) : /* @__PURE__ */ Xe(Jl, { children: /* @__PURE__ */ Xe("div", { "data-checkly": "ProposalList" }) });
}
function _I(f) {
  const { project: p, projectSelectionHandler: v, proposalSelectionHandler: S, isSelected: T, selectedProposalId: b } = f, y = ii.FormatThumbnailUrl(p.projectId, p.urn);
  return /* @__PURE__ */ na(Jl, { children: [
    /* @__PURE__ */ Xe(
      rI,
      {
        onClick: () => {
          v(p.id);
        },
        children: /* @__PURE__ */ na(
          aI,
          {
            id: p.projectId,
            className: T ? "project selected" : "project",
            children: [
              /* @__PURE__ */ na(gb, { className: "infos", children: [
                /* @__PURE__ */ Xe(uI, { children: /* @__PURE__ */ Xe(sI, { children: /* @__PURE__ */ Xe(
                  "img",
                  {
                    alt: "Site Preview",
                    src: y,
                    width: "115",
                    height: "115"
                  }
                ) }) }),
                /* @__PURE__ */ Xe(cI, { children: /* @__PURE__ */ Xe(gb, { children: /* @__PURE__ */ na(iI, { children: [
                  /* @__PURE__ */ Xe(oI, { children: p.proposalCount }),
                  /* @__PURE__ */ Xe(lI, { children: "Proposals" })
                ] }) }) })
              ] }),
              /* @__PURE__ */ na(fI, { children: [
                /* @__PURE__ */ Xe(dI, { children: p.name }),
                /* @__PURE__ */ Xe(pI, { children: /* @__PURE__ */ Xe(vI, { children: p.creationTime }) })
              ] })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ Xe(
      "div",
      {
        id: p.proposalsListContainer,
        className: T ? "visible" : "hidden",
        children: /* @__PURE__ */ Xe(
          xI,
          {
            proposals: p.proposals,
            proposalSelectionHandler: S,
            selectedProposalId: b
          }
        )
      }
    )
  ] });
}
function OI(f) {
  const { projects: p, projectSelectionHandler: v, proposalSelectionHandler: S, selectedProjectId: T, selectedProposalId: b } = f;
  if (!p)
    return /* @__PURE__ */ Xe(Jl, { children: /* @__PURE__ */ Xe("div", { "data-checkly": "ProjectList" }) });
  function y(k) {
    document.querySelectorAll(".project.selected").forEach((M) => {
      M.classList.remove("selected");
    }), document.querySelectorAll(".visible").forEach((M) => {
      M.classList.remove("visible"), M.classList.add("hidden");
    }), L(""), v(k);
  }
  function L(k) {
    document.querySelectorAll(".proposal.selected").forEach((N) => {
      N.classList.remove("selected");
    }), S(k);
  }
  return /* @__PURE__ */ Xe(Jl, { children: /* @__PURE__ */ Xe("div", { id: "projectlist-container", "data-checkly": "ProjectList", children: /* @__PURE__ */ Xe(nI, { children: p == null ? void 0 : p.map((k) => /* @__PURE__ */ Xe(
    _I,
    {
      project: k,
      projectSelectionHandler: y,
      proposalSelectionHandler: L,
      isSelected: k.projectId === T,
      selectedProposalId: b
    },
    k.projectId
  )) }) }) });
}
class kI extends HE {
  constructor() {
    super(...arguments);
    Ua(this, "projectId");
    Ua(this, "newestProposalId");
    Ua(this, "creationTime");
    Ua(this, "proposalCount");
    Ua(this, "proposals");
    Ua(this, "proposalsListContainer");
  }
  Fill(v, S, T, b) {
    super.Fill(v, S, T, b, ""), this.projectId = this.id, this.newestProposalId = "", this.creationTime = "", this.proposalCount = 0;
  }
}
class DI extends HE {
  constructor() {
    super(...arguments);
    Ua(this, "proposalId");
    Ua(this, "projectId");
    Ua(this, "creationDate");
  }
  Fill(v, S, T, b, y) {
    super.Fill(v, S, T, b, y), this.proposalId = this.id, this.creationDate = "";
  }
}
async function MI(f, p) {
  const v = async (S) => {
    try {
      await (await import(S)).default(p, f);
    } catch (T) {
      console.log("error in terrain worker initiator", T);
    }
  };
  if (p && f) {
    let S = ii.FormatConceptualWorkerUrl();
    v(S);
  }
}
function AI() {
  function f(ge, Te) {
    ge.then(Te).catch((xe) => console.log(xe));
  }
  function p(ge) {
    try {
      let Te = ge !== null && ge.length > 0;
      if (document.getElementById("message").style.display = Te ? "block" : "none", Te) {
        Qe || (ee("info"), z(""));
        let xe = ge.map((ye) => {
          var J = new HE();
          return J.Fill(ye.id, ye.name, ye.version, ye.metadata, ye.urn), J;
        });
        we(xe), xe.length > 0 && T(xe[0].id);
      }
    } catch {
      const xe = "Unable to read workspaces";
      throw ee("error"), z(xe), new Error(xe);
    }
  }
  async function v(ge) {
    try {
      let Te = ge.filter((xe) => xe.metadata !== null && !xe.metadata.isDraft && xe.version !== 1).map((xe) => {
        var ye = new kI();
        ye.Fill(xe.id, xe.name, xe.version, xe.metadata);
        let Me = new Date().getTime() - xe.created, O = Math.floor(Me / (1e3 * 24 * 60 * 60));
        return ye.creationTime = O == 0 ? "Today" : `${O} days ago`, ye;
      });
      await S(Te), Qe || (ee("info"), z(""));
    } catch {
      const xe = "Unable to read projects from selected workspace";
      throw ee("error"), z(xe), new Error(xe);
    }
  }
  async function S(ge) {
    try {
      for (const Te of ge)
        await ii.getProposals(Te.projectId).then((xe) => {
          Te.proposals = xe.map((ye) => {
            var J = new DI();
            const Me = ye.urn.split(":");
            let O = Me[Me.length - 2], oe = Me[Me.length - 1], re = ye.properties.name;
            J.Fill(O, re, oe, ye.metadata, ye.urn);
            let pe = new Date(ye.metadata.createdAt), me = pe.getHours(), De = pe.getMinutes();
            return pe.getDate() === new Date().getDate() ? J.creationDate = `Today ${me}:${De} ${me < 12 ? "AM" : "PM"}` : J.creationDate = `${pe.toLocaleString()}`, J.projectId = Te.projectId, de && de.id === J.id && (_e(J), Qe && od(Te.projectId, de.proposalId).then((P) => {
              pt[P.urn] = P;
            })), J;
          }), Te.proposals.sort(function(ye, J) {
            return new Date(ye.metadata.createdAt).getTime() - new Date(J.metadata.createdAt).getTime();
          }), Te.proposals.length > 0 && (Te.newestProposalId = Te.proposals[0].id, Te.urn = Te.proposals[0].urn, Te.proposalCount = Te.proposals.length), Te.proposalsListContainer = `project-${Te.projectId}-proposals-list`;
        });
      H(ge), Qe ? V !== "error" && ut(!1) : (ee("info"), z(""));
    } catch {
      const xe = "Unable to read proposals from projects";
      throw ee("error"), z(xe), new Error(xe);
    }
  }
  function T(ge) {
    f(
      ii.getProjects(ge),
      v.bind(this)
    );
  }
  function b() {
    let ge = document.getElementById("workspace-select");
    ge !== null && T(ge.value);
  }
  async function y(ge) {
    if (ce !== null && (ce == null ? void 0 : ce.projectId) === ge)
      ae(null), _e(null);
    else {
      let Te = ie == null ? void 0 : ie.filter((xe) => xe.projectId == ge);
      ae(Te !== null ? Te[0] : null);
    }
    k("");
  }
  async function L(ge) {
    if (de !== null && (de == null ? void 0 : de.proposalId) === ge)
      _e(null), ge = "";
    else if (ce !== null) {
      let Te = ce.proposals.filter((xe) => xe.proposalId == ge);
      Te !== null && Te.length > 0 ? (_e(Te[0]), od(ce.projectId, Te[0].proposalId).then((xe) => {
        pt[xe.urn] = xe;
      })) : _e(null);
    } else
      _e(null);
    k(ge);
  }
  async function k(ge) {
    const Te = ce !== null && (ce == null ? void 0 : ce.projectId) !== "" && ge !== "";
    let xe = document.getElementById("sync-btn"), ye = document.getElementById("load-btn");
    if (xe !== null) {
      let J = xe, Me = !Te;
      J.disabled = Me, Me ? J.classList.contains("disabled") || J.classList.add("disabled") : J.classList.remove("disabled");
    }
    if (ye !== null) {
      let J = ye, Me = !Te;
      J.disabled = Me, Me ? J.classList.contains("disabled") || J.classList.add("disabled") : J.classList.remove("disabled");
    }
  }
  async function A() {
    let ge = document.getElementById("working-container");
    ge.style.display = "flex";
    let Te = document.getElementById("plugin-container");
    Te.classList.add("disabled");
    let xe = document.getElementById("message");
    xe.className = "info", xe.textContent = "Loading datas from Forma...", FormIt.NewFile(!0), MI(de.projectId, de.proposalId), Fy.fetchAndLoadElements(
      [],
      de,
      async (ye, J, Me) => {
        ee(ye ? "success" : "error"), z(ye ? "Datas have been loaded from Forma" : "Loading failed"), ge.style.display = "none", Te.classList.remove("disabled"), await N(), Dv("elements", J), Dv("loadedIntegrate", Me);
      }
    );
  }
  async function N() {
    const ge = /* @__PURE__ */ new Map();
    (await WSM.APIGetAllReachableHistoriesReadOnly(
      Ct,
      !1
    )).forEach(async (xe) => {
      const ye = await WSM.APIGetIdOfActiveDeltaReadOnly(xe);
      ge.set(xe, ye), Dv("mapHistoryIdToInitialDeltaId", ge);
    });
  }
  function M() {
    let ge = document.getElementById("projectlist-container");
    ge.classList.add("disabled");
    let Te = document.getElementById("message");
    Te.className = "info", Te.textContent = "Sending datas to Forma...";
    let xe = ce.projectId;
    Fy.save(
      {
        projectId: xe,
        proposal: de,
        elementResponseMap: pt,
        terrainElevationTransf3d: _t,
        loadedIntegrateElements: vt,
        mapHistoryIdToInitialDeltaId: Ue
      },
      (ye) => {
        ut(!0), ye && (typeof ye == "string" || ye instanceof String) ? (ee("error"), z(`Synchronization failed: ${ye}`)) : (ee(ye ? "success" : "error"), z(ye ? "Datas have been synchronized successfully on Forma" : "Synchronization failed")), ge.classList.remove("disabled");
      }
    );
  }
  const [$, z] = Gn.useState(""), [V, ee] = Gn.useState("info"), [Z, we] = Gn.useState(), [ce, ae] = Gn.useState(null), [ie, H] = Gn.useState(), [de, _e] = Gn.useState(null), [Qe, ut] = Gn.useState(!1), [pt] = Ry("elements"), [vt] = Ry("loadedIntegrate"), [_t] = Ry("terrainElevationTransf3d"), [Ue] = Ry("mapHistoryIdToInitialDeltaId");
  return Gn.useEffect(() => {
    let ge = document.getElementById("sync-btn");
    ge !== null && (ge.disabled = !0);
    let Te = document.getElementById("load-btn");
    Te !== null && (Te.disabled = !0);
  }, []), Gn.useEffect(() => {
    f(
      ii.getWorkspaces(),
      p.bind(this)
    );
  }, [Qe]), /* @__PURE__ */ na("div", { id: "FormaControls", className: "col-md-12", children: [
    /* @__PURE__ */ na("div", { id: "working-container", className: "hidden", children: [
      /* @__PURE__ */ Xe(
        "img",
        {
          id: "working-screen",
          src: "assets/favicon.svg",
          width: "115",
          height: "115"
        }
      ),
      /* @__PURE__ */ Xe("label", { children: "Fetching from Forma..." })
    ] }),
    /* @__PURE__ */ na("div", { id: "plugin-container", className: "plugin", children: [
      /* @__PURE__ */ na("div", { id: "plugin-content", children: [
        /* @__PURE__ */ Xe(
          "select",
          {
            id: "workspace-select",
            className: "fetchSelect",
            onChange: b.bind(this),
            defaultValue: "",
            children: Z == null ? void 0 : Z.map(({ id: ge, name: Te }) => /* @__PURE__ */ Xe("option", { value: ge, children: Te }, ge))
          }
        ),
        /* @__PURE__ */ Xe(
          OI,
          {
            projects: ie,
            projectSelectionHandler: y,
            proposalSelectionHandler: L,
            selectedProjectId: ce == null ? void 0 : ce.projectId,
            selectedProposalId: de == null ? void 0 : de.proposalId
          }
        ),
        /* @__PURE__ */ na("div", { id: "action", children: [
          /* @__PURE__ */ Xe("button", { className: "st blue disabled", id: "load-btn", onClick: A, children: "Fetch from Forma" }),
          /* @__PURE__ */ Xe("button", { className: "st gray disabled", id: "sync-btn", onClick: M, children: "Send to Forma" })
        ] })
      ] }),
      /* @__PURE__ */ Xe("label", { id: "message", className: V, children: $ })
    ] })
  ] });
}
function LI() {
  let f = window.location.href.indexOf("loggedIn=1") > -1, p = Fy.getCookie("ajs_user_id"), v = null;
  return f = f || p !== null, f ? v = /* @__PURE__ */ Xe(AI, {}) : v = /* @__PURE__ */ na("div", { id: "LoginControls", className: "", children: [
    /* @__PURE__ */ Xe("h4", { children: "Start plugin to select a project" }),
    /* @__PURE__ */ na("button", { id: "LoginButton", className: "button is-link", onClick: nN.login, children: [
      /* @__PURE__ */ Xe("span", { children: "Start plugin" }),
      /* @__PURE__ */ Xe("i", { className: "fab fa-github fa-lg" })
    ] })
  ] }), { loggedIn: f, node: v };
}
function NI() {
  const [f, p] = Gn.useState(!1), [v, S] = Gn.useState(/* @__PURE__ */ Xe(Jl, {}));
  return Gn.useEffect(() => {
    let T = LI();
    T !== null && (p(T.loggedIn), S(T.node));
  }, []), /* @__PURE__ */ Xe("div", { id: "PluginWrapper", children: /* @__PURE__ */ na("div", { id: "PluginContainer", children: [
    /* @__PURE__ */ Xe("h1", { className: "title", children: "FormIt-Forma" }),
    /* @__PURE__ */ Xe("h3", { className: "title", children: "Send data between FormIt and Forma" }),
    /* @__PURE__ */ Xe("div", { id: "AppControls", children: /* @__PURE__ */ Xe("div", { className: "container mt-3", children: /* @__PURE__ */ Xe("div", { id: "app", children: v }) }) }),
    /* @__PURE__ */ na("div", { id: "NoAccess", hidden: !0, children: [
      /* @__PURE__ */ Xe("div", { children: /* @__PURE__ */ Xe("div", { className: "alertIcon" }) }),
      /* @__PURE__ */ na("div", { children: [
        "It looks like your web browser is in private or incognito mode. FormIt-Forma plugin needs to save data to the local storage, so it can only be used in standard browsing mode.",
        /* @__PURE__ */ Xe("br", {}),
        /* @__PURE__ */ Xe("br", {}),
        "To use FormIt-Forma Plugin, please switch to standard browsing mode."
      ] })
    ] })
  ] }) });
}
const II = xv.createRoot(
  document.getElementById("root")
);
II.render(
  /* @__PURE__ */ Xe(Jl, { children: /* @__PURE__ */ Xe("div", { id: "MainControls", children: /* @__PURE__ */ Xe(NI, {}) }) })
);
//# sourceMappingURL=formit-plugin.mjs.map
