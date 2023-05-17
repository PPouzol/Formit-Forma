var VD = Object.defineProperty;
var HD = (c, v, p) => v in c ? VD(c, v, { enumerable: !0, configurable: !0, writable: !0, value: p }) : c[v] = p;
var Ia = (c, v, p) => (HD(c, typeof v != "symbol" ? v + "" : v, p), p);
(function() {
  const v = document.createElement("link").relList;
  if (v && v.supports && v.supports("modulepreload"))
    return;
  for (const T of document.querySelectorAll('link[rel="modulepreload"]'))
    S(T);
  new MutationObserver((T) => {
    for (const b of T)
      if (b.type === "childList")
        for (const y of b.addedNodes)
          y.tagName === "LINK" && y.rel === "modulepreload" && S(y);
  }).observe(document, { childList: !0, subtree: !0 });
  function p(T) {
    const b = {};
    return T.integrity && (b.integrity = T.integrity), T.referrerPolicy && (b.referrerPolicy = T.referrerPolicy), T.crossOrigin === "use-credentials" ? b.credentials = "include" : T.crossOrigin === "anonymous" ? b.credentials = "omit" : b.credentials = "same-origin", b;
  }
  function S(T) {
    if (T.ep)
      return;
    T.ep = !0;
    const b = p(T);
    fetch(T.href, b);
  }
})();
FormIt.FormaAddIn = {};
FormIt.FormaAddIn.SaveCurrentAXMtoTempFile = function(c) {
  return args = {
    TestAPI: "FormIt.FormaAddIn.SaveCurrentAXMtoTempFile",
    bSelectedOnly: c
  }, callAsyncAPI(args);
};
FormIt.FormaAddIn.ReadFileandMakeBlob = function(c) {
  return args = {
    TestAPI: "FormIt.FormaAddIn.ReadFileandMakeBlob",
    aPath: c
  }, callAsyncAPI(args);
};
FormIt.FormaAddIn.ImportAXMBlob = function(c) {
  return args = {
    TestAPI: "FormIt.FormaAddIn.ReadAXMandMakeBlob",
    blob: c
  }, callAsyncAPI(args);
};
FormIt.FormaAddIn.CreateTempPath = function(c) {
  return args = {
    TestAPI: "FormIt.FormaAddIn.CreateTempPath",
    aPath: c
  }, callAsyncAPI(args);
};
FormIt.FormaAddIn.MakeBlobFile = function(c, v) {
  return args = {
    TestAPI: "FormIt.FormaAddIn.MakeBlobFile",
    aPath: c,
    blob: v
  }, callAsyncAPI(args);
};
FormIt.FormaAddIn.DeleteTempFile = function(c) {
  return args = {
    TestAPI: "FormIt.FormaAddIn.DeleteTempFile",
    aPath: c
  }, callAsyncAPI(args);
};
FormItPlugin = {};
FormItPlugin.PluginLocation = "PLUGINLOCATION";
FormItPlugin.ShowDialog = function() {
  var c = {
    PluginName: "FormIt-Forma",
    DialogBox: "PLUGINLOCATION/login.html",
    DialogBoxType: "Modeless",
    Settings: {
      EnableNewWindowLinks: !0
    }
  };
  FormIt.CreateDialogBox(JSON.stringify(c));
};
FormItPlugin.getAllInstancesToBeSaved = function(c) {
  debugger;
  return getAllInstancesToBeSaved(JSON.stringify(c));
};
FormItPlugin.getFloorGeometriesByBuildingId = function(c) {
  debugger;
  return getFloorGeometriesByBuildingId(JSON.stringify(c));
};
function wb(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var Mv = {}, $D = {
  get exports() {
    return Mv;
  },
  set exports(c) {
    Mv = c;
  }
}, Tv = {}, Ay = {}, BD = {
  get exports() {
    return Ay;
  },
  set exports(c) {
    Ay = c;
  }
}, Gt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _w;
function WD() {
  if (_w)
    return Gt;
  _w = 1;
  var c = Symbol.for("react.element"), v = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), y = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), M = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), A = Symbol.iterator;
  function B(_) {
    return _ === null || typeof _ != "object" ? null : (_ = A && _[A] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var P = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, H = Object.assign, Z = {};
  function J(_, le, ne) {
    this.props = _, this.context = le, this.refs = Z, this.updater = ne || P;
  }
  J.prototype.isReactComponent = {}, J.prototype.setState = function(_, le) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, le, "setState");
  }, J.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function Ce() {
  }
  Ce.prototype = J.prototype;
  function ce(_, le, ne) {
    this.props = _, this.context = le, this.refs = Z, this.updater = ne || P;
  }
  var ae = ce.prototype = new Ce();
  ae.constructor = ce, H(ae, J.prototype), ae.isPureReactComponent = !0;
  var ee = Array.isArray, V = Object.prototype.hasOwnProperty, me = {
    current: null
  }, _e = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };
  function Qe(_, le, ne) {
    var fe, ve = {}, De = null, z = null;
    if (le != null)
      for (fe in le.ref !== void 0 && (z = le.ref), le.key !== void 0 && (De = "" + le.key), le)
        V.call(le, fe) && !_e.hasOwnProperty(fe) && (ve[fe] = le[fe]);
    var je = arguments.length - 2;
    if (je === 1)
      ve.children = ne;
    else if (1 < je) {
      for (var ue = Array(je), nt = 0; nt < je; nt++)
        ue[nt] = arguments[nt + 2];
      ve.children = ue;
    }
    if (_ && _.defaultProps)
      for (fe in je = _.defaultProps, je)
        ve[fe] === void 0 && (ve[fe] = je[fe]);
    return {
      $$typeof: c,
      type: _,
      key: De,
      ref: z,
      props: ve,
      _owner: me.current
    };
  }
  function lt(_, le) {
    return {
      $$typeof: c,
      type: _.type,
      key: le,
      ref: _.ref,
      props: _.props,
      _owner: _._owner
    };
  }
  function vt(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === c;
  }
  function mt(_) {
    var le = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + _.replace(/[=:]/g, function(ne) {
      return le[ne];
    });
  }
  var Et = /\/+/g;
  function Fe(_, le) {
    return typeof _ == "object" && _ !== null && _.key != null ? mt("" + _.key) : le.toString(36);
  }
  function Ee(_, le, ne, fe, ve) {
    var De = typeof _;
    (De === "undefined" || De === "boolean") && (_ = null);
    var z = !1;
    if (_ === null)
      z = !0;
    else
      switch (De) {
        case "string":
        case "number":
          z = !0;
          break;
        case "object":
          switch (_.$$typeof) {
            case c:
            case v:
              z = !0;
          }
      }
    if (z)
      return z = _, ve = ve(z), _ = fe === "" ? "." + Fe(z, 0) : fe, ee(ve) ? (ne = "", _ != null && (ne = _.replace(Et, "$&/") + "/"), Ee(ve, le, ne, "", function(nt) {
        return nt;
      })) : ve != null && (vt(ve) && (ve = lt(ve, ne + (!ve.key || z && z.key === ve.key ? "" : ("" + ve.key).replace(Et, "$&/") + "/") + _)), le.push(ve)), 1;
    if (z = 0, fe = fe === "" ? "." : fe + ":", ee(_))
      for (var je = 0; je < _.length; je++) {
        De = _[je];
        var ue = fe + Fe(De, je);
        z += Ee(De, le, ne, ue, ve);
      }
    else if (ue = B(_), typeof ue == "function")
      for (_ = ue.call(_), je = 0; !(De = _.next()).done; )
        De = De.value, ue = fe + Fe(De, je++), z += Ee(De, le, ne, ue, ve);
    else if (De === "object")
      throw le = String(_), Error("Objects are not valid as a React child (found: " + (le === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : le) + "). If you meant to render a collection of children, use an array instead.");
    return z;
  }
  function Te(_, le, ne) {
    if (_ == null)
      return _;
    var fe = [], ve = 0;
    return Ee(_, fe, "", "", function(De) {
      return le.call(ne, De, ve++);
    }), fe;
  }
  function Re(_) {
    if (_._status === -1) {
      var le = _._result;
      le = le(), le.then(function(ne) {
        (_._status === 0 || _._status === -1) && (_._status = 1, _._result = ne);
      }, function(ne) {
        (_._status === 0 || _._status === -1) && (_._status = 2, _._result = ne);
      }), _._status === -1 && (_._status = 0, _._result = le);
    }
    if (_._status === 1)
      return _._result.default;
    throw _._result;
  }
  var pe = {
    current: null
  }, re = {
    transition: null
  }, ke = {
    ReactCurrentDispatcher: pe,
    ReactCurrentBatchConfig: re,
    ReactCurrentOwner: me
  };
  return Gt.Children = {
    map: Te,
    forEach: function(_, le, ne) {
      Te(_, function() {
        le.apply(this, arguments);
      }, ne);
    },
    count: function(_) {
      var le = 0;
      return Te(_, function() {
        le++;
      }), le;
    },
    toArray: function(_) {
      return Te(_, function(le) {
        return le;
      }) || [];
    },
    only: function(_) {
      if (!vt(_))
        throw Error("React.Children.only expected to receive a single React element child.");
      return _;
    }
  }, Gt.Component = J, Gt.Fragment = p, Gt.Profiler = T, Gt.PureComponent = ce, Gt.StrictMode = S, Gt.Suspense = k, Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ke, Gt.cloneElement = function(_, le, ne) {
    if (_ == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var fe = H({}, _.props), ve = _.key, De = _.ref, z = _._owner;
    if (le != null) {
      if (le.ref !== void 0 && (De = le.ref, z = me.current), le.key !== void 0 && (ve = "" + le.key), _.type && _.type.defaultProps)
        var je = _.type.defaultProps;
      for (ue in le)
        V.call(le, ue) && !_e.hasOwnProperty(ue) && (fe[ue] = le[ue] === void 0 && je !== void 0 ? je[ue] : le[ue]);
    }
    var ue = arguments.length - 2;
    if (ue === 1)
      fe.children = ne;
    else if (1 < ue) {
      je = Array(ue);
      for (var nt = 0; nt < ue; nt++)
        je[nt] = arguments[nt + 2];
      fe.children = je;
    }
    return {
      $$typeof: c,
      type: _.type,
      key: ve,
      ref: De,
      props: fe,
      _owner: z
    };
  }, Gt.createContext = function(_) {
    return _ = {
      $$typeof: y,
      _currentValue: _,
      _currentValue2: _,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }, _.Provider = {
      $$typeof: b,
      _context: _
    }, _.Consumer = _;
  }, Gt.createElement = Qe, Gt.createFactory = function(_) {
    var le = Qe.bind(null, _);
    return le.type = _, le;
  }, Gt.createRef = function() {
    return {
      current: null
    };
  }, Gt.forwardRef = function(_) {
    return {
      $$typeof: N,
      render: _
    };
  }, Gt.isValidElement = vt, Gt.lazy = function(_) {
    return {
      $$typeof: j,
      _payload: {
        _status: -1,
        _result: _
      },
      _init: Re
    };
  }, Gt.memo = function(_, le) {
    return {
      $$typeof: M,
      type: _,
      compare: le === void 0 ? null : le
    };
  }, Gt.startTransition = function(_) {
    var le = re.transition;
    re.transition = {};
    try {
      _();
    } finally {
      re.transition = le;
    }
  }, Gt.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Gt.useCallback = function(_, le) {
    return pe.current.useCallback(_, le);
  }, Gt.useContext = function(_) {
    return pe.current.useContext(_);
  }, Gt.useDebugValue = function() {
  }, Gt.useDeferredValue = function(_) {
    return pe.current.useDeferredValue(_);
  }, Gt.useEffect = function(_, le) {
    return pe.current.useEffect(_, le);
  }, Gt.useId = function() {
    return pe.current.useId();
  }, Gt.useImperativeHandle = function(_, le, ne) {
    return pe.current.useImperativeHandle(_, le, ne);
  }, Gt.useInsertionEffect = function(_, le) {
    return pe.current.useInsertionEffect(_, le);
  }, Gt.useLayoutEffect = function(_, le) {
    return pe.current.useLayoutEffect(_, le);
  }, Gt.useMemo = function(_, le) {
    return pe.current.useMemo(_, le);
  }, Gt.useReducer = function(_, le, ne) {
    return pe.current.useReducer(_, le, ne);
  }, Gt.useRef = function(_) {
    return pe.current.useRef(_);
  }, Gt.useState = function(_) {
    return pe.current.useState(_);
  }, Gt.useSyncExternalStore = function(_, le, ne) {
    return pe.current.useSyncExternalStore(_, le, ne);
  }, Gt.useTransition = function() {
    return pe.current.useTransition();
  }, Gt.version = "18.2.0", Gt;
}
var _v = {}, GD = {
  get exports() {
    return _v;
  },
  set exports(c) {
    _v = c;
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
var Ow;
function YD() {
  return Ow || (Ow = 1, function(c, v) {
    ({}).NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var p = "18.2.0", S = Symbol.for("react.element"), T = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), M = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), Z = Symbol.for("react.offscreen"), J = Symbol.iterator, Ce = "@@iterator";
      function ce(E) {
        if (E === null || typeof E != "object")
          return null;
        var O = J && E[J] || E[Ce];
        return typeof O == "function" ? O : null;
      }
      var ae = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ee = {
        transition: null
      }, V = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, me = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, _e = {}, Qe = null;
      function lt(E) {
        Qe = E;
      }
      _e.setExtraStackFrame = function(E) {
        Qe = E;
      }, _e.getCurrentStack = null, _e.getStackAddendum = function() {
        var E = "";
        Qe && (E += Qe);
        var O = _e.getCurrentStack;
        return O && (E += O() || ""), E;
      };
      var vt = !1, mt = !1, Et = !1, Fe = !1, Ee = !1, Te = {
        ReactCurrentDispatcher: ae,
        ReactCurrentBatchConfig: ee,
        ReactCurrentOwner: me
      };
      Te.ReactDebugCurrentFrame = _e, Te.ReactCurrentActQueue = V;
      function Re(E) {
        {
          for (var O = arguments.length, q = new Array(O > 1 ? O - 1 : 0), te = 1; te < O; te++)
            q[te - 1] = arguments[te];
          re("warn", E, q);
        }
      }
      function pe(E) {
        {
          for (var O = arguments.length, q = new Array(O > 1 ? O - 1 : 0), te = 1; te < O; te++)
            q[te - 1] = arguments[te];
          re("error", E, q);
        }
      }
      function re(E, O, q) {
        {
          var te = Te.ReactDebugCurrentFrame, xe = te.getStackAddendum();
          xe !== "" && (O += "%s", q = q.concat([xe]));
          var ft = q.map(function(Ie) {
            return String(Ie);
          });
          ft.unshift("Warning: " + O), Function.prototype.apply.call(console[E], console, ft);
        }
      }
      var ke = {};
      function _(E, O) {
        {
          var q = E.constructor, te = q && (q.displayName || q.name) || "ReactClass", xe = te + "." + O;
          if (ke[xe])
            return;
          pe("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", O, te), ke[xe] = !0;
        }
      }
      var le = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(E) {
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
        enqueueForceUpdate: function(E, O, q) {
          _(E, "forceUpdate");
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
        enqueueReplaceState: function(E, O, q, te) {
          _(E, "replaceState");
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
        enqueueSetState: function(E, O, q, te) {
          _(E, "setState");
        }
      }, ne = Object.assign, fe = {};
      Object.freeze(fe);
      function ve(E, O, q) {
        this.props = E, this.context = O, this.refs = fe, this.updater = q || le;
      }
      ve.prototype.isReactComponent = {}, ve.prototype.setState = function(E, O) {
        if (typeof E != "object" && typeof E != "function" && E != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, E, O, "setState");
      }, ve.prototype.forceUpdate = function(E) {
        this.updater.enqueueForceUpdate(this, E, "forceUpdate");
      };
      {
        var De = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, z = function(E, O) {
          Object.defineProperty(ve.prototype, E, {
            get: function() {
              Re("%s(...) is deprecated in plain JavaScript React classes. %s", O[0], O[1]);
            }
          });
        };
        for (var je in De)
          De.hasOwnProperty(je) && z(je, De[je]);
      }
      function ue() {
      }
      ue.prototype = ve.prototype;
      function nt(E, O, q) {
        this.props = E, this.context = O, this.refs = fe, this.updater = q || le;
      }
      var Ct = nt.prototype = new ue();
      Ct.constructor = nt, ne(Ct, ve.prototype), Ct.isPureReactComponent = !0;
      function ht() {
        var E = {
          current: null
        };
        return Object.seal(E), E;
      }
      var he = Array.isArray;
      function Rt(E) {
        return he(E);
      }
      function Ft(E) {
        {
          var O = typeof Symbol == "function" && Symbol.toStringTag, q = O && E[Symbol.toStringTag] || E.constructor.name || "Object";
          return q;
        }
      }
      function rt(E) {
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
        if (rt(E))
          return pe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ft(E)), Pt(E);
      }
      function Xt(E, O, q) {
        var te = E.displayName;
        if (te)
          return te;
        var xe = O.displayName || O.name || "";
        return xe !== "" ? q + "(" + xe + ")" : q;
      }
      function Xn(E) {
        return E.displayName || "Context";
      }
      function zt(E) {
        if (E == null)
          return null;
        if (typeof E.tag == "number" && pe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
          return E.displayName || E.name || null;
        if (typeof E == "string")
          return E;
        switch (E) {
          case b:
            return "Fragment";
          case T:
            return "Portal";
          case N:
            return "Profiler";
          case y:
            return "StrictMode";
          case A:
            return "Suspense";
          case B:
            return "SuspenseList";
        }
        if (typeof E == "object")
          switch (E.$$typeof) {
            case M:
              var O = E;
              return Xn(O) + ".Consumer";
            case k:
              var q = E;
              return Xn(q._context) + ".Provider";
            case j:
              return Xt(E, E.render, "ForwardRef");
            case P:
              var te = E.displayName || null;
              return te !== null ? te : zt(E.type) || "Memo";
            case H: {
              var xe = E, ft = xe._payload, Ie = xe._init;
              try {
                return zt(Ie(ft));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Gn = Object.prototype.hasOwnProperty, Zn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, dn, Je, Mt;
      Mt = {};
      function fr(E) {
        if (Gn.call(E, "ref")) {
          var O = Object.getOwnPropertyDescriptor(E, "ref").get;
          if (O && O.isReactWarning)
            return !1;
        }
        return E.ref !== void 0;
      }
      function yn(E) {
        if (Gn.call(E, "key")) {
          var O = Object.getOwnPropertyDescriptor(E, "key").get;
          if (O && O.isReactWarning)
            return !1;
        }
        return E.key !== void 0;
      }
      function An(E, O) {
        var q = function() {
          dn || (dn = !0, pe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        q.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: q,
          configurable: !0
        });
      }
      function gi(E, O) {
        var q = function() {
          Je || (Je = !0, pe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        q.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: q,
          configurable: !0
        });
      }
      function Ea(E) {
        if (typeof E.ref == "string" && me.current && E.__self && me.current.stateNode !== E.__self) {
          var O = zt(me.current.type);
          Mt[O] || (pe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O, E.ref), Mt[O] = !0);
        }
      }
      var Ae = function(E, O, q, te, xe, ft, Ie) {
        var ut = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: S,
          // Built-in properties that belong on the element
          type: E,
          key: O,
          ref: q,
          props: Ie,
          // Record the component responsible for creating this element.
          _owner: ft
        };
        return ut._store = {}, Object.defineProperty(ut._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(ut, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: te
        }), Object.defineProperty(ut, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: xe
        }), Object.freeze && (Object.freeze(ut.props), Object.freeze(ut)), ut;
      };
      function et(E, O, q) {
        var te, xe = {}, ft = null, Ie = null, ut = null, Nt = null;
        if (O != null) {
          fr(O) && (Ie = O.ref, Ea(O)), yn(O) && (ct(O.key), ft = "" + O.key), ut = O.__self === void 0 ? null : O.__self, Nt = O.__source === void 0 ? null : O.__source;
          for (te in O)
            Gn.call(O, te) && !Zn.hasOwnProperty(te) && (xe[te] = O[te]);
        }
        var qt = arguments.length - 2;
        if (qt === 1)
          xe.children = q;
        else if (qt > 1) {
          for (var gn = Array(qt), fn = 0; fn < qt; fn++)
            gn[fn] = arguments[fn + 2];
          Object.freeze && Object.freeze(gn), xe.children = gn;
        }
        if (E && E.defaultProps) {
          var Sn = E.defaultProps;
          for (te in Sn)
            xe[te] === void 0 && (xe[te] = Sn[te]);
        }
        if (ft || Ie) {
          var bn = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          ft && An(xe, bn), Ie && gi(xe, bn);
        }
        return Ae(E, ft, Ie, ut, Nt, me.current, xe);
      }
      function At(E, O) {
        var q = Ae(E.type, O, E.ref, E._self, E._source, E._owner, E.props);
        return q;
      }
      function tn(E, O, q) {
        if (E == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + E + ".");
        var te, xe = ne({}, E.props), ft = E.key, Ie = E.ref, ut = E._self, Nt = E._source, qt = E._owner;
        if (O != null) {
          fr(O) && (Ie = O.ref, qt = me.current), yn(O) && (ct(O.key), ft = "" + O.key);
          var gn;
          E.type && E.type.defaultProps && (gn = E.type.defaultProps);
          for (te in O)
            Gn.call(O, te) && !Zn.hasOwnProperty(te) && (O[te] === void 0 && gn !== void 0 ? xe[te] = gn[te] : xe[te] = O[te]);
        }
        var fn = arguments.length - 2;
        if (fn === 1)
          xe.children = q;
        else if (fn > 1) {
          for (var Sn = Array(fn), bn = 0; bn < fn; bn++)
            Sn[bn] = arguments[bn + 2];
          xe.children = Sn;
        }
        return Ae(E.type, ft, Ie, ut, Nt, qt, xe);
      }
      function rn(E) {
        return typeof E == "object" && E !== null && E.$$typeof === S;
      }
      var Yn = ".", Nn = ":";
      function Mr(E) {
        var O = /[=:]/g, q = {
          "=": "=0",
          ":": "=2"
        }, te = E.replace(O, function(xe) {
          return q[xe];
        });
        return "$" + te;
      }
      var cn = !1, zr = /\/+/g;
      function an(E) {
        return E.replace(zr, "$&/");
      }
      function on(E, O) {
        return typeof E == "object" && E !== null && E.key != null ? (ct(E.key), Mr("" + E.key)) : O.toString(36);
      }
      function ii(E, O, q, te, xe) {
        var ft = typeof E;
        (ft === "undefined" || ft === "boolean") && (E = null);
        var Ie = !1;
        if (E === null)
          Ie = !0;
        else
          switch (ft) {
            case "string":
            case "number":
              Ie = !0;
              break;
            case "object":
              switch (E.$$typeof) {
                case S:
                case T:
                  Ie = !0;
              }
          }
        if (Ie) {
          var ut = E, Nt = xe(ut), qt = te === "" ? Yn + on(ut, 0) : te;
          if (Rt(Nt)) {
            var gn = "";
            qt != null && (gn = an(qt) + "/"), ii(Nt, O, gn, "", function(md) {
              return md;
            });
          } else
            Nt != null && (rn(Nt) && (Nt.key && (!ut || ut.key !== Nt.key) && ct(Nt.key), Nt = At(
              Nt,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              q + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (Nt.key && (!ut || ut.key !== Nt.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                an("" + Nt.key) + "/"
              ) : "") + qt
            )), O.push(Nt));
          return 1;
        }
        var fn, Sn, bn = 0, Vt = te === "" ? Yn : te + Nn;
        if (Rt(E))
          for (var $i = 0; $i < E.length; $i++)
            fn = E[$i], Sn = Vt + on(fn, $i), bn += ii(fn, O, q, Sn, xe);
        else {
          var pu = ce(E);
          if (typeof pu == "function") {
            var hs = E;
            pu === hs.entries && (cn || Re("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), cn = !0);
            for (var hd = pu.call(hs), si, ms = 0; !(si = hd.next()).done; )
              fn = si.value, Sn = Vt + on(fn, ms++), bn += ii(fn, O, q, Sn, xe);
          } else if (ft === "object") {
            var ys = String(E);
            throw new Error("Objects are not valid as a React child (found: " + (ys === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : ys) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return bn;
      }
      function Fa(E, O, q) {
        if (E == null)
          return E;
        var te = [], xe = 0;
        return ii(E, te, "", "", function(ft) {
          return O.call(q, ft, xe++);
        }), te;
      }
      function yo(E) {
        var O = 0;
        return Fa(E, function() {
          O++;
        }), O;
      }
      function ll(E, O, q) {
        Fa(E, function() {
          O.apply(this, arguments);
        }, q);
      }
      function tu(E) {
        return Fa(E, function(O) {
          return O;
        }) || [];
      }
      function zi(E) {
        if (!rn(E))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return E;
      }
      function go(E) {
        var O = {
          $$typeof: M,
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
        O.Provider = {
          $$typeof: k,
          _context: O
        };
        var q = !1, te = !1, xe = !1;
        {
          var ft = {
            $$typeof: M,
            _context: O
          };
          Object.defineProperties(ft, {
            Provider: {
              get: function() {
                return te || (te = !0, pe("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), O.Provider;
              },
              set: function(Ie) {
                O.Provider = Ie;
              }
            },
            _currentValue: {
              get: function() {
                return O._currentValue;
              },
              set: function(Ie) {
                O._currentValue = Ie;
              }
            },
            _currentValue2: {
              get: function() {
                return O._currentValue2;
              },
              set: function(Ie) {
                O._currentValue2 = Ie;
              }
            },
            _threadCount: {
              get: function() {
                return O._threadCount;
              },
              set: function(Ie) {
                O._threadCount = Ie;
              }
            },
            Consumer: {
              get: function() {
                return q || (q = !0, pe("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), O.Consumer;
              }
            },
            displayName: {
              get: function() {
                return O.displayName;
              },
              set: function(Ie) {
                xe || (Re("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Ie), xe = !0);
              }
            }
          }), O.Consumer = ft;
        }
        return O._currentRenderer = null, O._currentRenderer2 = null, O;
      }
      var Ca = -1, Si = 0, Ta = 1, Ei = 2;
      function Vr(E) {
        if (E._status === Ca) {
          var O = E._result, q = O();
          if (q.then(function(ft) {
            if (E._status === Si || E._status === Ca) {
              var Ie = E;
              Ie._status = Ta, Ie._result = ft;
            }
          }, function(ft) {
            if (E._status === Si || E._status === Ca) {
              var Ie = E;
              Ie._status = Ei, Ie._result = ft;
            }
          }), E._status === Ca) {
            var te = E;
            te._status = Si, te._result = q;
          }
        }
        if (E._status === Ta) {
          var xe = E._result;
          return xe === void 0 && pe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, xe), "default" in xe || pe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, xe), xe.default;
        } else
          throw E._result;
      }
      function wa(E) {
        var O = {
          // We use these fields to store the result.
          _status: Ca,
          _result: E
        }, q = {
          $$typeof: H,
          _payload: O,
          _init: Vr
        };
        {
          var te, xe;
          Object.defineProperties(q, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return te;
              },
              set: function(ft) {
                pe("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), te = ft, Object.defineProperty(q, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return xe;
              },
              set: function(ft) {
                pe("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), xe = ft, Object.defineProperty(q, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return q;
      }
      function Ci(E) {
        E != null && E.$$typeof === P ? pe("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof E != "function" ? pe("forwardRef requires a render function but was given %s.", E === null ? "null" : typeof E) : E.length !== 0 && E.length !== 2 && pe("forwardRef render functions accept exactly two parameters: props and ref. %s", E.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), E != null && (E.defaultProps != null || E.propTypes != null) && pe("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var O = {
          $$typeof: j,
          render: E
        };
        {
          var q;
          Object.defineProperty(O, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return q;
            },
            set: function(te) {
              q = te, !E.name && !E.displayName && (E.displayName = te);
            }
          });
        }
        return O;
      }
      var D;
      D = Symbol.for("react.module.reference");
      function ye(E) {
        return !!(typeof E == "string" || typeof E == "function" || E === b || E === N || Ee || E === y || E === A || E === B || Fe || E === Z || vt || mt || Et || typeof E == "object" && E !== null && (E.$$typeof === H || E.$$typeof === P || E.$$typeof === k || E.$$typeof === M || E.$$typeof === j || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        E.$$typeof === D || E.getModuleId !== void 0));
      }
      function Me(E, O) {
        ye(E) || pe("memo: The first argument must be a component. Instead received: %s", E === null ? "null" : typeof E);
        var q = {
          $$typeof: P,
          type: E,
          compare: O === void 0 ? null : O
        };
        {
          var te;
          Object.defineProperty(q, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return te;
            },
            set: function(xe) {
              te = xe, !E.name && !E.displayName && (E.displayName = xe);
            }
          });
        }
        return q;
      }
      function Ve() {
        var E = ae.current;
        return E === null && pe(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), E;
      }
      function _t(E) {
        var O = Ve();
        if (E._context !== void 0) {
          var q = E._context;
          q.Consumer === E ? pe("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : q.Provider === E && pe("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return O.useContext(E);
      }
      function Ht(E) {
        var O = Ve();
        return O.useState(E);
      }
      function Ot(E, O, q) {
        var te = Ve();
        return te.useReducer(E, O, q);
      }
      function it(E) {
        var O = Ve();
        return O.useRef(E);
      }
      function Jn(E, O) {
        var q = Ve();
        return q.useEffect(E, O);
      }
      function Tn(E, O) {
        var q = Ve();
        return q.useInsertionEffect(E, O);
      }
      function wn(E, O) {
        var q = Ve();
        return q.useLayoutEffect(E, O);
      }
      function Er(E, O) {
        var q = Ve();
        return q.useCallback(E, O);
      }
      function Ti(E, O) {
        var q = Ve();
        return q.useMemo(E, O);
      }
      function nu(E, O, q) {
        var te = Ve();
        return te.useImperativeHandle(E, O, q);
      }
      function Yt(E, O) {
        {
          var q = Ve();
          return q.useDebugValue(E, O);
        }
      }
      function pd() {
        var E = Ve();
        return E.useTransition();
      }
      function oi(E) {
        var O = Ve();
        return O.useDeferredValue(E);
      }
      function Lt() {
        var E = Ve();
        return E.useId();
      }
      function wi(E, O, q) {
        var te = Ve();
        return te.useSyncExternalStore(E, O, q);
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
              log: ne({}, E, {
                value: ru
              }),
              info: ne({}, E, {
                value: Eo
              }),
              warn: ne({}, E, {
                value: ra
              }),
              error: ne({}, E, {
                value: fs
              }),
              group: ne({}, E, {
                value: Hr
              }),
              groupCollapsed: ne({}, E, {
                value: ds
              }),
              groupEnd: ne({}, E, {
                value: ps
              })
            });
          }
          So < 0 && pe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var li = Te.ReactCurrentDispatcher, $r;
      function To(E, O, q) {
        {
          if ($r === void 0)
            try {
              throw Error();
            } catch (xe) {
              var te = xe.stack.trim().match(/\n( *(at )?)/);
              $r = te && te[1] || "";
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
      function ou(E, O) {
        if (!E || wo)
          return "";
        {
          var q = bo.get(E);
          if (q !== void 0)
            return q;
        }
        var te;
        wo = !0;
        var xe = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var ft;
        ft = li.current, li.current = null, au();
        try {
          if (O) {
            var Ie = function() {
              throw Error();
            };
            if (Object.defineProperty(Ie.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Ie, []);
              } catch (Vt) {
                te = Vt;
              }
              Reflect.construct(E, [], Ie);
            } else {
              try {
                Ie.call();
              } catch (Vt) {
                te = Vt;
              }
              E.call(Ie.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Vt) {
              te = Vt;
            }
            E();
          }
        } catch (Vt) {
          if (Vt && te && typeof Vt.stack == "string") {
            for (var ut = Vt.stack.split(`
`), Nt = te.stack.split(`
`), qt = ut.length - 1, gn = Nt.length - 1; qt >= 1 && gn >= 0 && ut[qt] !== Nt[gn]; )
              gn--;
            for (; qt >= 1 && gn >= 0; qt--, gn--)
              if (ut[qt] !== Nt[gn]) {
                if (qt !== 1 || gn !== 1)
                  do
                    if (qt--, gn--, gn < 0 || ut[qt] !== Nt[gn]) {
                      var fn = `
` + ut[qt].replace(" at new ", " at ");
                      return E.displayName && fn.includes("<anonymous>") && (fn = fn.replace("<anonymous>", E.displayName)), typeof E == "function" && bo.set(E, fn), fn;
                    }
                  while (qt >= 1 && gn >= 0);
                break;
              }
          }
        } finally {
          wo = !1, li.current = ft, Co(), Error.prepareStackTrace = xe;
        }
        var Sn = E ? E.displayName || E.name : "", bn = Sn ? To(Sn) : "";
        return typeof E == "function" && bo.set(E, bn), bn;
      }
      function Vi(E, O, q) {
        return ou(E, !1);
      }
      function vd(E) {
        var O = E.prototype;
        return !!(O && O.isReactComponent);
      }
      function bi(E, O, q) {
        if (E == null)
          return "";
        if (typeof E == "function")
          return ou(E, vd(E));
        if (typeof E == "string")
          return To(E);
        switch (E) {
          case A:
            return To("Suspense");
          case B:
            return To("SuspenseList");
        }
        if (typeof E == "object")
          switch (E.$$typeof) {
            case j:
              return Vi(E.render);
            case P:
              return bi(E.type, O, q);
            case H: {
              var te = E, xe = te._payload, ft = te._init;
              try {
                return bi(ft(xe), O, q);
              } catch {
              }
            }
          }
        return "";
      }
      var Zt = {}, lu = Te.ReactDebugCurrentFrame;
      function ul(E) {
        if (E) {
          var O = E._owner, q = bi(E.type, E._source, O ? O.type : null);
          lu.setExtraStackFrame(q);
        } else
          lu.setExtraStackFrame(null);
      }
      function uu(E, O, q, te, xe) {
        {
          var ft = Function.call.bind(Gn);
          for (var Ie in E)
            if (ft(E, Ie)) {
              var ut = void 0;
              try {
                if (typeof E[Ie] != "function") {
                  var Nt = Error((te || "React class") + ": " + q + " type `" + Ie + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[Ie] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Nt.name = "Invariant Violation", Nt;
                }
                ut = E[Ie](O, Ie, te, q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (qt) {
                ut = qt;
              }
              ut && !(ut instanceof Error) && (ul(xe), pe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", te || "React class", q, Ie, typeof ut), ul(null)), ut instanceof Error && !(ut.message in Zt) && (Zt[ut.message] = !0, ul(xe), pe("Failed %s type: %s", q, ut.message), ul(null));
            }
        }
      }
      function Qt(E) {
        if (E) {
          var O = E._owner, q = bi(E.type, E._source, O ? O.type : null);
          lt(q);
        } else
          lt(null);
      }
      var su;
      su = !1;
      function cu() {
        if (me.current) {
          var E = zt(me.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
      function wt(E) {
        if (E !== void 0) {
          var O = E.fileName.replace(/^.*[\\\/]/, ""), q = E.lineNumber;
          return `

Check your code at ` + O + ":" + q + ".";
        }
        return "";
      }
      function sl(E) {
        return E != null ? wt(E.__source) : "";
      }
      var In = {};
      function aa(E) {
        var O = cu();
        if (!O) {
          var q = typeof E == "string" ? E : E.displayName || E.name;
          q && (O = `

Check the top-level render call using <` + q + ">.");
        }
        return O;
      }
      function Br(E, O) {
        if (!(!E._store || E._store.validated || E.key != null)) {
          E._store.validated = !0;
          var q = aa(O);
          if (!In[q]) {
            In[q] = !0;
            var te = "";
            E && E._owner && E._owner !== me.current && (te = " It was passed a child from " + zt(E._owner.type) + "."), Qt(E), pe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', q, te), Qt(null);
          }
        }
      }
      function Ro(E, O) {
        if (typeof E == "object") {
          if (Rt(E))
            for (var q = 0; q < E.length; q++) {
              var te = E[q];
              rn(te) && Br(te, O);
            }
          else if (rn(E))
            E._store && (E._store.validated = !0);
          else if (E) {
            var xe = ce(E);
            if (typeof xe == "function" && xe !== E.entries)
              for (var ft = xe.call(E), Ie; !(Ie = ft.next()).done; )
                rn(Ie.value) && Br(Ie.value, O);
          }
        }
      }
      function Vn(E) {
        {
          var O = E.type;
          if (O == null || typeof O == "string")
            return;
          var q;
          if (typeof O == "function")
            q = O.propTypes;
          else if (typeof O == "object" && (O.$$typeof === j || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          O.$$typeof === P))
            q = O.propTypes;
          else
            return;
          if (q) {
            var te = zt(O);
            uu(q, E.props, "prop", te, E);
          } else if (O.PropTypes !== void 0 && !su) {
            su = !0;
            var xe = zt(O);
            pe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", xe || "Unknown");
          }
          typeof O.getDefaultProps == "function" && !O.getDefaultProps.isReactClassApproved && pe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function ln(E) {
        {
          for (var O = Object.keys(E.props), q = 0; q < O.length; q++) {
            var te = O[q];
            if (te !== "children" && te !== "key") {
              Qt(E), pe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", te), Qt(null);
              break;
            }
          }
          E.ref !== null && (Qt(E), pe("Invalid attribute `ref` supplied to `React.Fragment`."), Qt(null));
        }
      }
      function Sc(E, O, q) {
        var te = ye(E);
        if (!te) {
          var xe = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (xe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ft = sl(O);
          ft ? xe += ft : xe += cu();
          var Ie;
          E === null ? Ie = "null" : Rt(E) ? Ie = "array" : E !== void 0 && E.$$typeof === S ? (Ie = "<" + (zt(E.type) || "Unknown") + " />", xe = " Did you accidentally export a JSX literal instead of a component?") : Ie = typeof E, pe("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ie, xe);
        }
        var ut = et.apply(this, arguments);
        if (ut == null)
          return ut;
        if (te)
          for (var Nt = 2; Nt < arguments.length; Nt++)
            Ro(arguments[Nt], E);
        return E === b ? ln(ut) : Vn(ut), ut;
      }
      var ia = !1;
      function dr(E) {
        var O = Sc.bind(null, E);
        return O.type = E, ia || (ia = !0, Re("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(O, "type", {
          enumerable: !1,
          get: function() {
            return Re("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: E
            }), E;
          }
        }), O;
      }
      function Ri(E, O, q) {
        for (var te = tn.apply(this, arguments), xe = 2; xe < arguments.length; xe++)
          Ro(arguments[xe], te.type);
        return Vn(te), te;
      }
      function Ec(E, O) {
        var q = ee.transition;
        ee.transition = {};
        var te = ee.transition;
        ee.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          E();
        } finally {
          if (ee.transition = q, q === null && te._updatedFibers) {
            var xe = te._updatedFibers.size;
            xe > 10 && Re("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), te._updatedFibers.clear();
          }
        }
      }
      var Hi = !1, xo = null;
      function Cc(E) {
        if (xo === null)
          try {
            var O = ("require" + Math.random()).slice(0, 7), q = c && c[O];
            xo = q.call(c, "timers").setImmediate;
          } catch {
            xo = function(xe) {
              Hi === !1 && (Hi = !0, typeof MessageChannel > "u" && pe("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var ft = new MessageChannel();
              ft.port1.onmessage = xe, ft.port2.postMessage(void 0);
            };
          }
        return xo(E);
      }
      var Ua = 0, _o = !1;
      function Oo(E) {
        {
          var O = Ua;
          Ua++, V.current === null && (V.current = []);
          var q = V.isBatchingLegacy, te;
          try {
            if (V.isBatchingLegacy = !0, te = E(), !q && V.didScheduleLegacyUpdate) {
              var xe = V.current;
              xe !== null && (V.didScheduleLegacyUpdate = !1, Do(xe));
            }
          } catch (Sn) {
            throw ja(O), Sn;
          } finally {
            V.isBatchingLegacy = q;
          }
          if (te !== null && typeof te == "object" && typeof te.then == "function") {
            var ft = te, Ie = !1, ut = {
              then: function(Sn, bn) {
                Ie = !0, ft.then(function(Vt) {
                  ja(O), Ua === 0 ? fu(Vt, Sn, bn) : Sn(Vt);
                }, function(Vt) {
                  ja(O), bn(Vt);
                });
              }
            };
            return !_o && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Ie || (_o = !0, pe("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), ut;
          } else {
            var Nt = te;
            if (ja(O), Ua === 0) {
              var qt = V.current;
              qt !== null && (Do(qt), V.current = null);
              var gn = {
                then: function(Sn, bn) {
                  V.current === null ? (V.current = [], fu(Nt, Sn, bn)) : Sn(Nt);
                }
              };
              return gn;
            } else {
              var fn = {
                then: function(Sn, bn) {
                  Sn(Nt);
                }
              };
              return fn;
            }
          }
        }
      }
      function ja(E) {
        E !== Ua - 1 && pe("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ua = E;
      }
      function fu(E, O, q) {
        {
          var te = V.current;
          if (te !== null)
            try {
              Do(te), Cc(function() {
                te.length === 0 ? (V.current = null, O(E)) : fu(E, O, q);
              });
            } catch (xe) {
              q(xe);
            }
          else
            O(E);
        }
      }
      var ko = !1;
      function Do(E) {
        if (!ko) {
          ko = !0;
          var O = 0;
          try {
            for (; O < E.length; O++) {
              var q = E[O];
              do
                q = q(!0);
              while (q !== null);
            }
            E.length = 0;
          } catch (te) {
            throw E = E.slice(O + 1), te;
          } finally {
            ko = !1;
          }
        }
      }
      var cl = Sc, du = Ri, vs = dr, ui = {
        map: Fa,
        forEach: ll,
        count: yo,
        toArray: tu,
        only: zi
      };
      v.Children = ui, v.Component = ve, v.Fragment = b, v.Profiler = N, v.PureComponent = nt, v.StrictMode = y, v.Suspense = A, v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Te, v.cloneElement = du, v.createContext = go, v.createElement = cl, v.createFactory = vs, v.createRef = ht, v.forwardRef = Ci, v.isValidElement = rn, v.lazy = wa, v.memo = Me, v.startTransition = Ec, v.unstable_act = Oo, v.useCallback = Er, v.useContext = _t, v.useDebugValue = Yt, v.useDeferredValue = oi, v.useEffect = Jn, v.useId = Lt, v.useImperativeHandle = nu, v.useInsertionEffect = Tn, v.useLayoutEffect = wn, v.useMemo = Ti, v.useReducer = Ot, v.useRef = it, v.useState = Ht, v.useSyncExternalStore = wi, v.useTransition = pd, v.version = p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(GD, _v)), _v;
}
var kw;
function eu() {
  return kw || (kw = 1, function(c) {
    ({}).NODE_ENV === "production" ? c.exports = WD() : c.exports = YD();
  }(BD)), Ay;
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
var Dw;
function QD() {
  if (Dw)
    return Tv;
  Dw = 1;
  var c = eu(), v = Symbol.for("react.element"), p = Symbol.for("react.fragment"), S = Object.prototype.hasOwnProperty, T = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };
  function y(N, k, M) {
    var j, A = {}, B = null, P = null;
    M !== void 0 && (B = "" + M), k.key !== void 0 && (B = "" + k.key), k.ref !== void 0 && (P = k.ref);
    for (j in k)
      S.call(k, j) && !b.hasOwnProperty(j) && (A[j] = k[j]);
    if (N && N.defaultProps)
      for (j in k = N.defaultProps, k)
        A[j] === void 0 && (A[j] = k[j]);
    return {
      $$typeof: v,
      type: N,
      key: B,
      ref: P,
      props: A,
      _owner: T.current
    };
  }
  return Tv.Fragment = p, Tv.jsx = y, Tv.jsxs = y, Tv;
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
var Aw;
function qD() {
  return Aw || (Aw = 1, {}.NODE_ENV !== "production" && function() {
    var c = eu(), v = Symbol.for("react.element"), p = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), N = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), H = Symbol.iterator, Z = "@@iterator";
    function J(D) {
      if (D === null || typeof D != "object")
        return null;
      var ye = H && D[H] || D[Z];
      return typeof ye == "function" ? ye : null;
    }
    var Ce = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ce(D) {
      {
        for (var ye = arguments.length, Me = new Array(ye > 1 ? ye - 1 : 0), Ve = 1; Ve < ye; Ve++)
          Me[Ve - 1] = arguments[Ve];
        ae("error", D, Me);
      }
    }
    function ae(D, ye, Me) {
      {
        var Ve = Ce.ReactDebugCurrentFrame, _t = Ve.getStackAddendum();
        _t !== "" && (ye += "%s", Me = Me.concat([_t]));
        var Ht = Me.map(function(Ot) {
          return String(Ot);
        });
        Ht.unshift("Warning: " + ye), Function.prototype.apply.call(console[D], console, Ht);
      }
    }
    var ee = !1, V = !1, me = !1, _e = !1, Qe = !1, lt;
    lt = Symbol.for("react.module.reference");
    function vt(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === S || D === b || Qe || D === T || D === M || D === j || _e || D === P || ee || V || me || typeof D == "object" && D !== null && (D.$$typeof === B || D.$$typeof === A || D.$$typeof === y || D.$$typeof === N || D.$$typeof === k || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === lt || D.getModuleId !== void 0));
    }
    function mt(D, ye, Me) {
      var Ve = D.displayName;
      if (Ve)
        return Ve;
      var _t = ye.displayName || ye.name || "";
      return _t !== "" ? Me + "(" + _t + ")" : Me;
    }
    function Et(D) {
      return D.displayName || "Context";
    }
    function Fe(D) {
      if (D == null)
        return null;
      if (typeof D.tag == "number" && ce("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof D == "function")
        return D.displayName || D.name || null;
      if (typeof D == "string")
        return D;
      switch (D) {
        case S:
          return "Fragment";
        case p:
          return "Portal";
        case b:
          return "Profiler";
        case T:
          return "StrictMode";
        case M:
          return "Suspense";
        case j:
          return "SuspenseList";
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case N:
            var ye = D;
            return Et(ye) + ".Consumer";
          case y:
            var Me = D;
            return Et(Me._context) + ".Provider";
          case k:
            return mt(D, D.render, "ForwardRef");
          case A:
            var Ve = D.displayName || null;
            return Ve !== null ? Ve : Fe(D.type) || "Memo";
          case B: {
            var _t = D, Ht = _t._payload, Ot = _t._init;
            try {
              return Fe(Ot(Ht));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ee = Object.assign, Te = 0, Re, pe, re, ke, _, le, ne;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function ve() {
      {
        if (Te === 0) {
          Re = console.log, pe = console.info, re = console.warn, ke = console.error, _ = console.group, le = console.groupCollapsed, ne = console.groupEnd;
          var D = {
            configurable: !0,
            enumerable: !0,
            value: fe,
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
            log: Ee({}, D, {
              value: Re
            }),
            info: Ee({}, D, {
              value: pe
            }),
            warn: Ee({}, D, {
              value: re
            }),
            error: Ee({}, D, {
              value: ke
            }),
            group: Ee({}, D, {
              value: _
            }),
            groupCollapsed: Ee({}, D, {
              value: le
            }),
            groupEnd: Ee({}, D, {
              value: ne
            })
          });
        }
        Te < 0 && ce("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = Ce.ReactCurrentDispatcher, je;
    function ue(D, ye, Me) {
      {
        if (je === void 0)
          try {
            throw Error();
          } catch (_t) {
            var Ve = _t.stack.trim().match(/\n( *(at )?)/);
            je = Ve && Ve[1] || "";
          }
        return `
` + je + D;
      }
    }
    var nt = !1, Ct;
    {
      var ht = typeof WeakMap == "function" ? WeakMap : Map;
      Ct = new ht();
    }
    function he(D, ye) {
      if (!D || nt)
        return "";
      {
        var Me = Ct.get(D);
        if (Me !== void 0)
          return Me;
      }
      var Ve;
      nt = !0;
      var _t = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ht;
      Ht = z.current, z.current = null, ve();
      try {
        if (ye) {
          var Ot = function() {
            throw Error();
          };
          if (Object.defineProperty(Ot.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ot, []);
            } catch (Yt) {
              Ve = Yt;
            }
            Reflect.construct(D, [], Ot);
          } else {
            try {
              Ot.call();
            } catch (Yt) {
              Ve = Yt;
            }
            D.call(Ot.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Yt) {
            Ve = Yt;
          }
          D();
        }
      } catch (Yt) {
        if (Yt && Ve && typeof Yt.stack == "string") {
          for (var it = Yt.stack.split(`
`), Jn = Ve.stack.split(`
`), Tn = it.length - 1, wn = Jn.length - 1; Tn >= 1 && wn >= 0 && it[Tn] !== Jn[wn]; )
            wn--;
          for (; Tn >= 1 && wn >= 0; Tn--, wn--)
            if (it[Tn] !== Jn[wn]) {
              if (Tn !== 1 || wn !== 1)
                do
                  if (Tn--, wn--, wn < 0 || it[Tn] !== Jn[wn]) {
                    var Er = `
` + it[Tn].replace(" at new ", " at ");
                    return D.displayName && Er.includes("<anonymous>") && (Er = Er.replace("<anonymous>", D.displayName)), typeof D == "function" && Ct.set(D, Er), Er;
                  }
                while (Tn >= 1 && wn >= 0);
              break;
            }
        }
      } finally {
        nt = !1, z.current = Ht, De(), Error.prepareStackTrace = _t;
      }
      var Ti = D ? D.displayName || D.name : "", nu = Ti ? ue(Ti) : "";
      return typeof D == "function" && Ct.set(D, nu), nu;
    }
    function Rt(D, ye, Me) {
      return he(D, !1);
    }
    function Ft(D) {
      var ye = D.prototype;
      return !!(ye && ye.isReactComponent);
    }
    function rt(D, ye, Me) {
      if (D == null)
        return "";
      if (typeof D == "function")
        return he(D, Ft(D));
      if (typeof D == "string")
        return ue(D);
      switch (D) {
        case M:
          return ue("Suspense");
        case j:
          return ue("SuspenseList");
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case k:
            return Rt(D.render);
          case A:
            return rt(D.type, ye, Me);
          case B: {
            var Ve = D, _t = Ve._payload, Ht = Ve._init;
            try {
              return rt(Ht(_t), ye, Me);
            } catch {
            }
          }
        }
      return "";
    }
    var Pt = Object.prototype.hasOwnProperty, ct = {}, Xt = Ce.ReactDebugCurrentFrame;
    function Xn(D) {
      if (D) {
        var ye = D._owner, Me = rt(D.type, D._source, ye ? ye.type : null);
        Xt.setExtraStackFrame(Me);
      } else
        Xt.setExtraStackFrame(null);
    }
    function zt(D, ye, Me, Ve, _t) {
      {
        var Ht = Function.call.bind(Pt);
        for (var Ot in D)
          if (Ht(D, Ot)) {
            var it = void 0;
            try {
              if (typeof D[Ot] != "function") {
                var Jn = Error((Ve || "React class") + ": " + Me + " type `" + Ot + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof D[Ot] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Jn.name = "Invariant Violation", Jn;
              }
              it = D[Ot](ye, Ot, Ve, Me, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Tn) {
              it = Tn;
            }
            it && !(it instanceof Error) && (Xn(_t), ce("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ve || "React class", Me, Ot, typeof it), Xn(null)), it instanceof Error && !(it.message in ct) && (ct[it.message] = !0, Xn(_t), ce("Failed %s type: %s", Me, it.message), Xn(null));
          }
      }
    }
    var Gn = Array.isArray;
    function Zn(D) {
      return Gn(D);
    }
    function dn(D) {
      {
        var ye = typeof Symbol == "function" && Symbol.toStringTag, Me = ye && D[Symbol.toStringTag] || D.constructor.name || "Object";
        return Me;
      }
    }
    function Je(D) {
      try {
        return Mt(D), !1;
      } catch {
        return !0;
      }
    }
    function Mt(D) {
      return "" + D;
    }
    function fr(D) {
      if (Je(D))
        return ce("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", dn(D)), Mt(D);
    }
    var yn = Ce.ReactCurrentOwner, An = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, gi, Ea, Ae;
    Ae = {};
    function et(D) {
      if (Pt.call(D, "ref")) {
        var ye = Object.getOwnPropertyDescriptor(D, "ref").get;
        if (ye && ye.isReactWarning)
          return !1;
      }
      return D.ref !== void 0;
    }
    function At(D) {
      if (Pt.call(D, "key")) {
        var ye = Object.getOwnPropertyDescriptor(D, "key").get;
        if (ye && ye.isReactWarning)
          return !1;
      }
      return D.key !== void 0;
    }
    function tn(D, ye) {
      if (typeof D.ref == "string" && yn.current && ye && yn.current.stateNode !== ye) {
        var Me = Fe(yn.current.type);
        Ae[Me] || (ce('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Fe(yn.current.type), D.ref), Ae[Me] = !0);
      }
    }
    function rn(D, ye) {
      {
        var Me = function() {
          gi || (gi = !0, ce("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ye));
        };
        Me.isReactWarning = !0, Object.defineProperty(D, "key", {
          get: Me,
          configurable: !0
        });
      }
    }
    function Yn(D, ye) {
      {
        var Me = function() {
          Ea || (Ea = !0, ce("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ye));
        };
        Me.isReactWarning = !0, Object.defineProperty(D, "ref", {
          get: Me,
          configurable: !0
        });
      }
    }
    var Nn = function(D, ye, Me, Ve, _t, Ht, Ot) {
      var it = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: v,
        // Built-in properties that belong on the element
        type: D,
        key: ye,
        ref: Me,
        props: Ot,
        // Record the component responsible for creating this element.
        _owner: Ht
      };
      return it._store = {}, Object.defineProperty(it._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(it, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ve
      }), Object.defineProperty(it, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _t
      }), Object.freeze && (Object.freeze(it.props), Object.freeze(it)), it;
    };
    function Mr(D, ye, Me, Ve, _t) {
      {
        var Ht, Ot = {}, it = null, Jn = null;
        Me !== void 0 && (fr(Me), it = "" + Me), At(ye) && (fr(ye.key), it = "" + ye.key), et(ye) && (Jn = ye.ref, tn(ye, _t));
        for (Ht in ye)
          Pt.call(ye, Ht) && !An.hasOwnProperty(Ht) && (Ot[Ht] = ye[Ht]);
        if (D && D.defaultProps) {
          var Tn = D.defaultProps;
          for (Ht in Tn)
            Ot[Ht] === void 0 && (Ot[Ht] = Tn[Ht]);
        }
        if (it || Jn) {
          var wn = typeof D == "function" ? D.displayName || D.name || "Unknown" : D;
          it && rn(Ot, wn), Jn && Yn(Ot, wn);
        }
        return Nn(D, it, Jn, _t, Ve, yn.current, Ot);
      }
    }
    var cn = Ce.ReactCurrentOwner, zr = Ce.ReactDebugCurrentFrame;
    function an(D) {
      if (D) {
        var ye = D._owner, Me = rt(D.type, D._source, ye ? ye.type : null);
        zr.setExtraStackFrame(Me);
      } else
        zr.setExtraStackFrame(null);
    }
    var on;
    on = !1;
    function ii(D) {
      return typeof D == "object" && D !== null && D.$$typeof === v;
    }
    function Fa() {
      {
        if (cn.current) {
          var D = Fe(cn.current.type);
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
          var ye = D.fileName.replace(/^.*[\\\/]/, ""), Me = D.lineNumber;
          return `

Check your code at ` + ye + ":" + Me + ".";
        }
        return "";
      }
    }
    var ll = {};
    function tu(D) {
      {
        var ye = Fa();
        if (!ye) {
          var Me = typeof D == "string" ? D : D.displayName || D.name;
          Me && (ye = `

Check the top-level render call using <` + Me + ">.");
        }
        return ye;
      }
    }
    function zi(D, ye) {
      {
        if (!D._store || D._store.validated || D.key != null)
          return;
        D._store.validated = !0;
        var Me = tu(ye);
        if (ll[Me])
          return;
        ll[Me] = !0;
        var Ve = "";
        D && D._owner && D._owner !== cn.current && (Ve = " It was passed a child from " + Fe(D._owner.type) + "."), an(D), ce('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Me, Ve), an(null);
      }
    }
    function go(D, ye) {
      {
        if (typeof D != "object")
          return;
        if (Zn(D))
          for (var Me = 0; Me < D.length; Me++) {
            var Ve = D[Me];
            ii(Ve) && zi(Ve, ye);
          }
        else if (ii(D))
          D._store && (D._store.validated = !0);
        else if (D) {
          var _t = J(D);
          if (typeof _t == "function" && _t !== D.entries)
            for (var Ht = _t.call(D), Ot; !(Ot = Ht.next()).done; )
              ii(Ot.value) && zi(Ot.value, ye);
        }
      }
    }
    function Ca(D) {
      {
        var ye = D.type;
        if (ye == null || typeof ye == "string")
          return;
        var Me;
        if (typeof ye == "function")
          Me = ye.propTypes;
        else if (typeof ye == "object" && (ye.$$typeof === k || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ye.$$typeof === A))
          Me = ye.propTypes;
        else
          return;
        if (Me) {
          var Ve = Fe(ye);
          zt(Me, D.props, "prop", Ve, D);
        } else if (ye.PropTypes !== void 0 && !on) {
          on = !0;
          var _t = Fe(ye);
          ce("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _t || "Unknown");
        }
        typeof ye.getDefaultProps == "function" && !ye.getDefaultProps.isReactClassApproved && ce("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Si(D) {
      {
        for (var ye = Object.keys(D.props), Me = 0; Me < ye.length; Me++) {
          var Ve = ye[Me];
          if (Ve !== "children" && Ve !== "key") {
            an(D), ce("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ve), an(null);
            break;
          }
        }
        D.ref !== null && (an(D), ce("Invalid attribute `ref` supplied to `React.Fragment`."), an(null));
      }
    }
    function Ta(D, ye, Me, Ve, _t, Ht) {
      {
        var Ot = vt(D);
        if (!Ot) {
          var it = "";
          (D === void 0 || typeof D == "object" && D !== null && Object.keys(D).length === 0) && (it += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Jn = yo(_t);
          Jn ? it += Jn : it += Fa();
          var Tn;
          D === null ? Tn = "null" : Zn(D) ? Tn = "array" : D !== void 0 && D.$$typeof === v ? (Tn = "<" + (Fe(D.type) || "Unknown") + " />", it = " Did you accidentally export a JSX literal instead of a component?") : Tn = typeof D, ce("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Tn, it);
        }
        var wn = Mr(D, ye, Me, _t, Ht);
        if (wn == null)
          return wn;
        if (Ot) {
          var Er = ye.children;
          if (Er !== void 0)
            if (Ve)
              if (Zn(Er)) {
                for (var Ti = 0; Ti < Er.length; Ti++)
                  go(Er[Ti], D);
                Object.freeze && Object.freeze(Er);
              } else
                ce("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              go(Er, D);
        }
        return D === S ? Si(wn) : Ca(wn), wn;
      }
    }
    function Ei(D, ye, Me) {
      return Ta(D, ye, Me, !0);
    }
    function Vr(D, ye, Me) {
      return Ta(D, ye, Me, !1);
    }
    var wa = Vr, Ci = Ei;
    wv.Fragment = S, wv.jsx = wa, wv.jsxs = Ci;
  }()), wv;
}
(function(c) {
  ({}).NODE_ENV === "production" ? c.exports = QD() : c.exports = qD();
})($D);
const Jl = Mv.Fragment, Ke = Mv.jsx, na = Mv.jsxs;
var xv = {}, xE = {}, KD = {
  get exports() {
    return xE;
  },
  set exports(c) {
    xE = c;
  }
}, ni = {}, My = {}, XD = {
  get exports() {
    return My;
  },
  set exports(c) {
    My = c;
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
var Mw;
function ZD() {
  return Mw || (Mw = 1, function(c) {
    function v(re, ke) {
      var _ = re.length;
      re.push(ke);
      e:
        for (; 0 < _; ) {
          var le = _ - 1 >>> 1, ne = re[le];
          if (0 < T(ne, ke))
            re[le] = ke, re[_] = ne, _ = le;
          else
            break e;
        }
    }
    function p(re) {
      return re.length === 0 ? null : re[0];
    }
    function S(re) {
      if (re.length === 0)
        return null;
      var ke = re[0], _ = re.pop();
      if (_ !== ke) {
        re[0] = _;
        e:
          for (var le = 0, ne = re.length, fe = ne >>> 1; le < fe; ) {
            var ve = 2 * (le + 1) - 1, De = re[ve], z = ve + 1, je = re[z];
            if (0 > T(De, _))
              z < ne && 0 > T(je, De) ? (re[le] = je, re[z] = _, le = z) : (re[le] = De, re[ve] = _, le = ve);
            else if (z < ne && 0 > T(je, _))
              re[le] = je, re[z] = _, le = z;
            else
              break e;
          }
      }
      return ke;
    }
    function T(re, ke) {
      var _ = re.sortIndex - ke.sortIndex;
      return _ !== 0 ? _ : re.id - ke.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var b = performance;
      c.unstable_now = function() {
        return b.now();
      };
    } else {
      var y = Date, N = y.now();
      c.unstable_now = function() {
        return y.now() - N;
      };
    }
    var k = [], M = [], j = 1, A = null, B = 3, P = !1, H = !1, Z = !1, J = typeof setTimeout == "function" ? setTimeout : null, Ce = typeof clearTimeout == "function" ? clearTimeout : null, ce = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ae(re) {
      for (var ke = p(M); ke !== null; ) {
        if (ke.callback === null)
          S(M);
        else if (ke.startTime <= re)
          S(M), ke.sortIndex = ke.expirationTime, v(k, ke);
        else
          break;
        ke = p(M);
      }
    }
    function ee(re) {
      if (Z = !1, ae(re), !H)
        if (p(k) !== null)
          H = !0, Re(V);
        else {
          var ke = p(M);
          ke !== null && pe(ee, ke.startTime - re);
        }
    }
    function V(re, ke) {
      H = !1, Z && (Z = !1, Ce(Qe), Qe = -1), P = !0;
      var _ = B;
      try {
        for (ae(ke), A = p(k); A !== null && (!(A.expirationTime > ke) || re && !mt()); ) {
          var le = A.callback;
          if (typeof le == "function") {
            A.callback = null, B = A.priorityLevel;
            var ne = le(A.expirationTime <= ke);
            ke = c.unstable_now(), typeof ne == "function" ? A.callback = ne : A === p(k) && S(k), ae(ke);
          } else
            S(k);
          A = p(k);
        }
        if (A !== null)
          var fe = !0;
        else {
          var ve = p(M);
          ve !== null && pe(ee, ve.startTime - ke), fe = !1;
        }
        return fe;
      } finally {
        A = null, B = _, P = !1;
      }
    }
    var me = !1, _e = null, Qe = -1, lt = 5, vt = -1;
    function mt() {
      return !(c.unstable_now() - vt < lt);
    }
    function Et() {
      if (_e !== null) {
        var re = c.unstable_now();
        vt = re;
        var ke = !0;
        try {
          ke = _e(!0, re);
        } finally {
          ke ? Fe() : (me = !1, _e = null);
        }
      } else
        me = !1;
    }
    var Fe;
    if (typeof ce == "function")
      Fe = function() {
        ce(Et);
      };
    else if (typeof MessageChannel < "u") {
      var Ee = new MessageChannel(), Te = Ee.port2;
      Ee.port1.onmessage = Et, Fe = function() {
        Te.postMessage(null);
      };
    } else
      Fe = function() {
        J(Et, 0);
      };
    function Re(re) {
      _e = re, me || (me = !0, Fe());
    }
    function pe(re, ke) {
      Qe = J(function() {
        re(c.unstable_now());
      }, ke);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(re) {
      re.callback = null;
    }, c.unstable_continueExecution = function() {
      H || P || (H = !0, Re(V));
    }, c.unstable_forceFrameRate = function(re) {
      0 > re || 125 < re ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : lt = 0 < re ? Math.floor(1e3 / re) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return B;
    }, c.unstable_getFirstCallbackNode = function() {
      return p(k);
    }, c.unstable_next = function(re) {
      switch (B) {
        case 1:
        case 2:
        case 3:
          var ke = 3;
          break;
        default:
          ke = B;
      }
      var _ = B;
      B = ke;
      try {
        return re();
      } finally {
        B = _;
      }
    }, c.unstable_pauseExecution = function() {
    }, c.unstable_requestPaint = function() {
    }, c.unstable_runWithPriority = function(re, ke) {
      switch (re) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          re = 3;
      }
      var _ = B;
      B = re;
      try {
        return ke();
      } finally {
        B = _;
      }
    }, c.unstable_scheduleCallback = function(re, ke, _) {
      var le = c.unstable_now();
      switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? le + _ : le) : _ = le, re) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return ne = _ + ne, re = {
        id: j++,
        callback: ke,
        priorityLevel: re,
        startTime: _,
        expirationTime: ne,
        sortIndex: -1
      }, _ > le ? (re.sortIndex = _, v(M, re), p(k) === null && re === p(M) && (Z ? (Ce(Qe), Qe = -1) : Z = !0, pe(ee, _ - le))) : (re.sortIndex = ne, v(k, re), H || P || (H = !0, Re(V))), re;
    }, c.unstable_shouldYield = mt, c.unstable_wrapCallback = function(re) {
      var ke = B;
      return function() {
        var _ = B;
        B = ke;
        try {
          return re.apply(this, arguments);
        } finally {
          B = _;
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
var Lw;
function JD() {
  return Lw || (Lw = 1, function(c) {
    ({}).NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var v = !1, p = !1, S = 5;
      function T(Ae, et) {
        var At = Ae.length;
        Ae.push(et), N(Ae, et, At);
      }
      function b(Ae) {
        return Ae.length === 0 ? null : Ae[0];
      }
      function y(Ae) {
        if (Ae.length === 0)
          return null;
        var et = Ae[0], At = Ae.pop();
        return At !== et && (Ae[0] = At, k(Ae, At, 0)), et;
      }
      function N(Ae, et, At) {
        for (var tn = At; tn > 0; ) {
          var rn = tn - 1 >>> 1, Yn = Ae[rn];
          if (M(Yn, et) > 0)
            Ae[rn] = et, Ae[tn] = Yn, tn = rn;
          else
            return;
        }
      }
      function k(Ae, et, At) {
        for (var tn = At, rn = Ae.length, Yn = rn >>> 1; tn < Yn; ) {
          var Nn = (tn + 1) * 2 - 1, Mr = Ae[Nn], cn = Nn + 1, zr = Ae[cn];
          if (M(Mr, et) < 0)
            cn < rn && M(zr, Mr) < 0 ? (Ae[tn] = zr, Ae[cn] = et, tn = cn) : (Ae[tn] = Mr, Ae[Nn] = et, tn = Nn);
          else if (cn < rn && M(zr, et) < 0)
            Ae[tn] = zr, Ae[cn] = et, tn = cn;
          else
            return;
        }
      }
      function M(Ae, et) {
        var At = Ae.sortIndex - et.sortIndex;
        return At !== 0 ? At : Ae.id - et.id;
      }
      var j = 1, A = 2, B = 3, P = 4, H = 5;
      function Z(Ae, et) {
      }
      var J = typeof performance == "object" && typeof performance.now == "function";
      if (J) {
        var Ce = performance;
        c.unstable_now = function() {
          return Ce.now();
        };
      } else {
        var ce = Date, ae = ce.now();
        c.unstable_now = function() {
          return ce.now() - ae;
        };
      }
      var ee = 1073741823, V = -1, me = 250, _e = 5e3, Qe = 1e4, lt = ee, vt = [], mt = [], Et = 1, Fe = null, Ee = B, Te = !1, Re = !1, pe = !1, re = typeof setTimeout == "function" ? setTimeout : null, ke = typeof clearTimeout == "function" ? clearTimeout : null, _ = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function le(Ae) {
        for (var et = b(mt); et !== null; ) {
          if (et.callback === null)
            y(mt);
          else if (et.startTime <= Ae)
            y(mt), et.sortIndex = et.expirationTime, T(vt, et);
          else
            return;
          et = b(mt);
        }
      }
      function ne(Ae) {
        if (pe = !1, le(Ae), !Re)
          if (b(vt) !== null)
            Re = !0, fr(fe);
          else {
            var et = b(mt);
            et !== null && yn(ne, et.startTime - Ae);
          }
      }
      function fe(Ae, et) {
        Re = !1, pe && (pe = !1, An()), Te = !0;
        var At = Ee;
        try {
          var tn;
          if (!p)
            return ve(Ae, et);
        } finally {
          Fe = null, Ee = At, Te = !1;
        }
      }
      function ve(Ae, et) {
        var At = et;
        for (le(At), Fe = b(vt); Fe !== null && !v && !(Fe.expirationTime > At && (!Ae || Xn())); ) {
          var tn = Fe.callback;
          if (typeof tn == "function") {
            Fe.callback = null, Ee = Fe.priorityLevel;
            var rn = Fe.expirationTime <= At, Yn = tn(rn);
            At = c.unstable_now(), typeof Yn == "function" ? Fe.callback = Yn : Fe === b(vt) && y(vt), le(At);
          } else
            y(vt);
          Fe = b(vt);
        }
        if (Fe !== null)
          return !0;
        var Nn = b(mt);
        return Nn !== null && yn(ne, Nn.startTime - At), !1;
      }
      function De(Ae, et) {
        switch (Ae) {
          case j:
          case A:
          case B:
          case P:
          case H:
            break;
          default:
            Ae = B;
        }
        var At = Ee;
        Ee = Ae;
        try {
          return et();
        } finally {
          Ee = At;
        }
      }
      function z(Ae) {
        var et;
        switch (Ee) {
          case j:
          case A:
          case B:
            et = B;
            break;
          default:
            et = Ee;
            break;
        }
        var At = Ee;
        Ee = et;
        try {
          return Ae();
        } finally {
          Ee = At;
        }
      }
      function je(Ae) {
        var et = Ee;
        return function() {
          var At = Ee;
          Ee = et;
          try {
            return Ae.apply(this, arguments);
          } finally {
            Ee = At;
          }
        };
      }
      function ue(Ae, et, At) {
        var tn = c.unstable_now(), rn;
        if (typeof At == "object" && At !== null) {
          var Yn = At.delay;
          typeof Yn == "number" && Yn > 0 ? rn = tn + Yn : rn = tn;
        } else
          rn = tn;
        var Nn;
        switch (Ae) {
          case j:
            Nn = V;
            break;
          case A:
            Nn = me;
            break;
          case H:
            Nn = lt;
            break;
          case P:
            Nn = Qe;
            break;
          case B:
          default:
            Nn = _e;
            break;
        }
        var Mr = rn + Nn, cn = {
          id: Et++,
          callback: et,
          priorityLevel: Ae,
          startTime: rn,
          expirationTime: Mr,
          sortIndex: -1
        };
        return rn > tn ? (cn.sortIndex = rn, T(mt, cn), b(vt) === null && cn === b(mt) && (pe ? An() : pe = !0, yn(ne, rn - tn))) : (cn.sortIndex = Mr, T(vt, cn), !Re && !Te && (Re = !0, fr(fe))), cn;
      }
      function nt() {
      }
      function Ct() {
        !Re && !Te && (Re = !0, fr(fe));
      }
      function ht() {
        return b(vt);
      }
      function he(Ae) {
        Ae.callback = null;
      }
      function Rt() {
        return Ee;
      }
      var Ft = !1, rt = null, Pt = -1, ct = S, Xt = -1;
      function Xn() {
        var Ae = c.unstable_now() - Xt;
        return !(Ae < ct);
      }
      function zt() {
      }
      function Gn(Ae) {
        if (Ae < 0 || Ae > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Ae > 0 ? ct = Math.floor(1e3 / Ae) : ct = S;
      }
      var Zn = function() {
        if (rt !== null) {
          var Ae = c.unstable_now();
          Xt = Ae;
          var et = !0, At = !0;
          try {
            At = rt(et, Ae);
          } finally {
            At ? dn() : (Ft = !1, rt = null);
          }
        } else
          Ft = !1;
      }, dn;
      if (typeof _ == "function")
        dn = function() {
          _(Zn);
        };
      else if (typeof MessageChannel < "u") {
        var Je = new MessageChannel(), Mt = Je.port2;
        Je.port1.onmessage = Zn, dn = function() {
          Mt.postMessage(null);
        };
      } else
        dn = function() {
          re(Zn, 0);
        };
      function fr(Ae) {
        rt = Ae, Ft || (Ft = !0, dn());
      }
      function yn(Ae, et) {
        Pt = re(function() {
          Ae(c.unstable_now());
        }, et);
      }
      function An() {
        ke(Pt), Pt = -1;
      }
      var gi = zt, Ea = null;
      c.unstable_IdlePriority = H, c.unstable_ImmediatePriority = j, c.unstable_LowPriority = P, c.unstable_NormalPriority = B, c.unstable_Profiling = Ea, c.unstable_UserBlockingPriority = A, c.unstable_cancelCallback = he, c.unstable_continueExecution = Ct, c.unstable_forceFrameRate = Gn, c.unstable_getCurrentPriorityLevel = Rt, c.unstable_getFirstCallbackNode = ht, c.unstable_next = z, c.unstable_pauseExecution = nt, c.unstable_requestPaint = gi, c.unstable_runWithPriority = De, c.unstable_scheduleCallback = ue, c.unstable_shouldYield = Xn, c.unstable_wrapCallback = je, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(vE)), vE;
}
var Nw;
function bb() {
  return Nw || (Nw = 1, function(c) {
    ({}).NODE_ENV === "production" ? c.exports = ZD() : c.exports = JD();
  }(XD)), My;
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
var Iw;
function eA() {
  if (Iw)
    return ni;
  Iw = 1;
  var c = eu(), v = bb();
  function p(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++)
      r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var S = /* @__PURE__ */ new Set(), T = {};
  function b(n, r) {
    y(n, r), y(n + "Capture", r);
  }
  function y(n, r) {
    for (T[n] = r, n = 0; n < r.length; n++)
      S.add(r[n]);
  }
  var N = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), k = Object.prototype.hasOwnProperty, M = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, j = {}, A = {};
  function B(n) {
    return k.call(A, n) ? !0 : k.call(j, n) ? !1 : M.test(n) ? A[n] = !0 : (j[n] = !0, !1);
  }
  function P(n, r, o, u) {
    if (o !== null && o.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return u ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function H(n, r, o, u) {
    if (r === null || typeof r > "u" || P(n, r, o, u))
      return !0;
    if (u)
      return !1;
    if (o !== null)
      switch (o.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function Z(n, r, o, u, f, h, C) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = f, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = h, this.removeEmptyString = C;
  }
  var J = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    J[n] = new Z(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    J[r] = new Z(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    J[n] = new Z(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    J[n] = new Z(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    J[n] = new Z(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    J[n] = new Z(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    J[n] = new Z(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    J[n] = new Z(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    J[n] = new Z(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Ce = /[\-:]([a-z])/g;
  function ce(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(Ce, ce);
    J[r] = new Z(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Ce, ce);
    J[r] = new Z(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Ce, ce);
    J[r] = new Z(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    J[n] = new Z(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), J.xlinkHref = new Z("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    J[n] = new Z(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ae(n, r, o, u) {
    var f = J.hasOwnProperty(r) ? J[r] : null;
    (f !== null ? f.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (H(r, o, f, u) && (o = null), u || f === null ? B(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : f.mustUseProperty ? n[f.propertyName] = o === null ? f.type === 3 ? !1 : "" : o : (r = f.attributeName, u = f.attributeNamespace, o === null ? n.removeAttribute(r) : (f = f.type, o = f === 3 || f === 4 && o === !0 ? "" : "" + o, u ? n.setAttributeNS(u, r, o) : n.setAttribute(r, o))));
  }
  var ee = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, V = Symbol.for("react.element"), me = Symbol.for("react.portal"), _e = Symbol.for("react.fragment"), Qe = Symbol.for("react.strict_mode"), lt = Symbol.for("react.profiler"), vt = Symbol.for("react.provider"), mt = Symbol.for("react.context"), Et = Symbol.for("react.forward_ref"), Fe = Symbol.for("react.suspense"), Ee = Symbol.for("react.suspense_list"), Te = Symbol.for("react.memo"), Re = Symbol.for("react.lazy"), pe = Symbol.for("react.offscreen"), re = Symbol.iterator;
  function ke(n) {
    return n === null || typeof n != "object" ? null : (n = re && n[re] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var _ = Object.assign, le;
  function ne(n) {
    if (le === void 0)
      try {
        throw Error();
      } catch (o) {
        var r = o.stack.trim().match(/\n( *(at )?)/);
        le = r && r[1] || "";
      }
    return `
` + le + n;
  }
  var fe = !1;
  function ve(n, r) {
    if (!n || fe)
      return "";
    fe = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", {
          set: function() {
            throw Error();
          }
        }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (X) {
            var u = X;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (X) {
            u = X;
          }
          n.call(r.prototype);
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
        for (var f = X.stack.split(`
`), h = u.stack.split(`
`), C = f.length - 1, x = h.length - 1; 1 <= C && 0 <= x && f[C] !== h[x]; )
          x--;
        for (; 1 <= C && 0 <= x; C--, x--)
          if (f[C] !== h[x]) {
            if (C !== 1 || x !== 1)
              do
                if (C--, x--, 0 > x || f[C] !== h[x]) {
                  var L = `
` + f[C].replace(" at new ", " at ");
                  return n.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", n.displayName)), L;
                }
              while (1 <= C && 0 <= x);
            break;
          }
      }
    } finally {
      fe = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? ne(n) : "";
  }
  function De(n) {
    switch (n.tag) {
      case 5:
        return ne(n.type);
      case 16:
        return ne("Lazy");
      case 13:
        return ne("Suspense");
      case 19:
        return ne("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = ve(n.type, !1), n;
      case 11:
        return n = ve(n.type.render, !1), n;
      case 1:
        return n = ve(n.type, !0), n;
      default:
        return "";
    }
  }
  function z(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case _e:
        return "Fragment";
      case me:
        return "Portal";
      case lt:
        return "Profiler";
      case Qe:
        return "StrictMode";
      case Fe:
        return "Suspense";
      case Ee:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case mt:
          return (n.displayName || "Context") + ".Consumer";
        case vt:
          return (n._context.displayName || "Context") + ".Provider";
        case Et:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Te:
          return r = n.displayName || null, r !== null ? r : z(n.type) || "Memo";
        case Re:
          r = n._payload, n = n._init;
          try {
            return z(n(r));
          } catch {
          }
      }
    return null;
  }
  function je(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return z(r);
      case 8:
        return r === Qe ? "StrictMode" : "Mode";
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
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function ue(n) {
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
  function nt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Ct(n) {
    var r = nt(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var f = o.get, h = o.set;
      return Object.defineProperty(n, r, {
        configurable: !0,
        get: function() {
          return f.call(this);
        },
        set: function(C) {
          u = "" + C, h.call(this, C);
        }
      }), Object.defineProperty(n, r, {
        enumerable: o.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(C) {
          u = "" + C;
        },
        stopTracking: function() {
          n._valueTracker = null, delete n[r];
        }
      };
    }
  }
  function ht(n) {
    n._valueTracker || (n._valueTracker = Ct(n));
  }
  function he(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var o = r.getValue(), u = "";
    return n && (u = nt(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== o ? (r.setValue(n), !0) : !1;
  }
  function Rt(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Ft(n, r) {
    var o = r.checked;
    return _({}, r, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: o ?? n._wrapperState.initialChecked
    });
  }
  function rt(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    o = ue(r.value != null ? r.value : o), n._wrapperState = {
      initialChecked: u,
      initialValue: o,
      controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null
    };
  }
  function Pt(n, r) {
    r = r.checked, r != null && ae(n, "checked", r, !1);
  }
  function ct(n, r) {
    Pt(n, r);
    var o = ue(r.value), u = r.type;
    if (o != null)
      u === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Xn(n, r.type, o) : r.hasOwnProperty("defaultValue") && Xn(n, r.type, ue(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Xt(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function Xn(n, r, o) {
    (r !== "number" || Rt(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var zt = Array.isArray;
  function Gn(n, r, o, u) {
    if (n = n.options, r) {
      r = {};
      for (var f = 0; f < o.length; f++)
        r["$" + o[f]] = !0;
      for (o = 0; o < n.length; o++)
        f = r.hasOwnProperty("$" + n[o].value), n[o].selected !== f && (n[o].selected = f), f && u && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + ue(o), r = null, f = 0; f < n.length; f++) {
        if (n[f].value === o) {
          n[f].selected = !0, u && (n[f].defaultSelected = !0);
          return;
        }
        r !== null || n[f].disabled || (r = n[f]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Zn(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(p(91));
    return _({}, r, {
      value: void 0,
      defaultValue: void 0,
      children: "" + n._wrapperState.initialValue
    });
  }
  function dn(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null)
          throw Error(p(92));
        if (zt(o)) {
          if (1 < o.length)
            throw Error(p(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = {
      initialValue: ue(o)
    };
  }
  function Je(n, r) {
    var o = ue(r.value), u = ue(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), u != null && (n.defaultValue = "" + u);
  }
  function Mt(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
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
  function yn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? fr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var An, gi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, u, f) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, u, f);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (An = An || document.createElement("div"), An.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = An.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function Ea(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
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
  }, et = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ae).forEach(function(n) {
    et.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Ae[r] = Ae[n];
    });
  });
  function At(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || Ae.hasOwnProperty(n) && Ae[n] ? ("" + r).trim() : r + "px";
  }
  function tn(n, r) {
    n = n.style;
    for (var o in r)
      if (r.hasOwnProperty(o)) {
        var u = o.indexOf("--") === 0, f = At(o, r[o], u);
        o === "float" && (o = "cssFloat"), u ? n.setProperty(o, f) : n[o] = f;
      }
  }
  var rn = _({
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
  function Yn(n, r) {
    if (r) {
      if (rn[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(p(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(p(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(p(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(p(62));
    }
  }
  function Nn(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
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
  var Mr = null;
  function cn(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var zr = null, an = null, on = null;
  function ii(n) {
    if (n = Os(n)) {
      if (typeof zr != "function")
        throw Error(p(280));
      var r = n.stateNode;
      r && (r = at(r), zr(n.stateNode, n.type, r));
    }
  }
  function Fa(n) {
    an ? on ? on.push(n) : on = [n] : an = n;
  }
  function yo() {
    if (an) {
      var n = an, r = on;
      if (on = an = null, ii(n), r)
        for (n = 0; n < r.length; n++)
          ii(r[n]);
    }
  }
  function ll(n, r) {
    return n(r);
  }
  function tu() {
  }
  var zi = !1;
  function go(n, r, o) {
    if (zi)
      return n(r, o);
    zi = !0;
    try {
      return ll(n, r, o);
    } finally {
      zi = !1, (an !== null || on !== null) && (tu(), yo());
    }
  }
  function Ca(n, r) {
    var o = n.stateNode;
    if (o === null)
      return null;
    var u = at(o);
    if (u === null)
      return null;
    o = u[r];
    e:
      switch (r) {
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
      throw Error(p(231, r, typeof o));
    return o;
  }
  var Si = !1;
  if (N)
    try {
      var Ta = {};
      Object.defineProperty(Ta, "passive", {
        get: function() {
          Si = !0;
        }
      }), window.addEventListener("test", Ta, Ta), window.removeEventListener("test", Ta, Ta);
    } catch {
      Si = !1;
    }
  function Ei(n, r, o, u, f, h, C, x, L) {
    var X = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, X);
    } catch (Se) {
      this.onError(Se);
    }
  }
  var Vr = !1, wa = null, Ci = !1, D = null, ye = {
    onError: function(n) {
      Vr = !0, wa = n;
    }
  };
  function Me(n, r, o, u, f, h, C, x, L) {
    Vr = !1, wa = null, Ei.apply(ye, arguments);
  }
  function Ve(n, r, o, u, f, h, C, x, L) {
    if (Me.apply(this, arguments), Vr) {
      if (Vr) {
        var X = wa;
        Vr = !1, wa = null;
      } else
        throw Error(p(198));
      Ci || (Ci = !0, D = X);
    }
  }
  function _t(n) {
    var r = n, o = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (o = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? o : null;
  }
  function Ht(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function Ot(n) {
    if (_t(n) !== n)
      throw Error(p(188));
  }
  function it(n) {
    var r = n.alternate;
    if (!r) {
      if (r = _t(n), r === null)
        throw Error(p(188));
      return r !== n ? null : n;
    }
    for (var o = n, u = r; ; ) {
      var f = o.return;
      if (f === null)
        break;
      var h = f.alternate;
      if (h === null) {
        if (u = f.return, u !== null) {
          o = u;
          continue;
        }
        break;
      }
      if (f.child === h.child) {
        for (h = f.child; h; ) {
          if (h === o)
            return Ot(f), n;
          if (h === u)
            return Ot(f), r;
          h = h.sibling;
        }
        throw Error(p(188));
      }
      if (o.return !== u.return)
        o = f, u = h;
      else {
        for (var C = !1, x = f.child; x; ) {
          if (x === o) {
            C = !0, o = f, u = h;
            break;
          }
          if (x === u) {
            C = !0, u = f, o = h;
            break;
          }
          x = x.sibling;
        }
        if (!C) {
          for (x = h.child; x; ) {
            if (x === o) {
              C = !0, o = h, u = f;
              break;
            }
            if (x === u) {
              C = !0, u = h, o = f;
              break;
            }
            x = x.sibling;
          }
          if (!C)
            throw Error(p(189));
        }
      }
      if (o.alternate !== u)
        throw Error(p(190));
    }
    if (o.tag !== 3)
      throw Error(p(188));
    return o.stateNode.current === o ? n : r;
  }
  function Jn(n) {
    return n = it(n), n !== null ? Tn(n) : null;
  }
  function Tn(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = Tn(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var wn = v.unstable_scheduleCallback, Er = v.unstable_cancelCallback, Ti = v.unstable_shouldYield, nu = v.unstable_requestPaint, Yt = v.unstable_now, pd = v.unstable_getCurrentPriorityLevel, oi = v.unstable_ImmediatePriority, Lt = v.unstable_UserBlockingPriority, wi = v.unstable_NormalPriority, So = v.unstable_LowPriority, ru = v.unstable_IdlePriority, Eo = null, ra = null;
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
  function li(n) {
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
  function $r(n, r) {
    var o = n.pendingLanes;
    if (o === 0)
      return 0;
    var u = 0, f = n.suspendedLanes, h = n.pingedLanes, C = o & 268435455;
    if (C !== 0) {
      var x = C & ~f;
      x !== 0 ? u = li(x) : (h &= C, h !== 0 && (u = li(h)));
    } else
      C = o & ~f, C !== 0 ? u = li(C) : h !== 0 && (u = li(h));
    if (u === 0)
      return 0;
    if (r !== 0 && r !== u && !(r & f) && (f = u & -u, h = r & -r, f >= h || f === 16 && (h & 4194240) !== 0))
      return r;
    if (u & 4 && (u |= o & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= u; 0 < r; )
        o = 31 - Hr(r), f = 1 << o, u |= n[o], r &= ~f;
    return u;
  }
  function To(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
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
        return r + 5e3;
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
  function wo(n, r) {
    for (var o = n.suspendedLanes, u = n.pingedLanes, f = n.expirationTimes, h = n.pendingLanes; 0 < h; ) {
      var C = 31 - Hr(h), x = 1 << C, L = f[C];
      L === -1 ? (!(x & o) || x & u) && (f[C] = To(x, r)) : L <= r && (n.expiredLanes |= x), h &= ~x;
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
    for (var r = [], o = 0; 31 > o; o++)
      r.push(n);
    return r;
  }
  function Vi(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Hr(r), n[r] = o;
  }
  function vd(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var f = 31 - Hr(o), h = 1 << f;
      r[f] = 0, u[f] = -1, n[f] = -1, o &= ~h;
    }
  }
  function bi(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var u = 31 - Hr(o), f = 1 << u;
      f & r | n[u] & r && (n[u] |= r), o &= ~f;
    }
  }
  var Zt = 0;
  function lu(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var ul, uu, Qt, su, cu, wt = !1, sl = [], In = null, aa = null, Br = null, Ro = /* @__PURE__ */ new Map(), Vn = /* @__PURE__ */ new Map(), ln = [], Sc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ia(n, r) {
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
        Ro.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Vn.delete(r.pointerId);
    }
  }
  function dr(n, r, o, u, f, h) {
    return n === null || n.nativeEvent !== h ? (n = {
      blockedOn: r,
      domEventName: o,
      eventSystemFlags: u,
      nativeEvent: h,
      targetContainers: [f]
    }, r !== null && (r = Os(r), r !== null && uu(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, f !== null && r.indexOf(f) === -1 && r.push(f), n);
  }
  function Ri(n, r, o, u, f) {
    switch (r) {
      case "focusin":
        return In = dr(In, n, r, o, u, f), !0;
      case "dragenter":
        return aa = dr(aa, n, r, o, u, f), !0;
      case "mouseover":
        return Br = dr(Br, n, r, o, u, f), !0;
      case "pointerover":
        var h = f.pointerId;
        return Ro.set(h, dr(Ro.get(h) || null, n, r, o, u, f)), !0;
      case "gotpointercapture":
        return h = f.pointerId, Vn.set(h, dr(Vn.get(h) || null, n, r, o, u, f)), !0;
    }
    return !1;
  }
  function Ec(n) {
    var r = za(n.target);
    if (r !== null) {
      var o = _t(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = Ht(o), r !== null) {
            n.blockedOn = r, cu(n.priority, function() {
              Qt(o);
            });
            return;
          }
        } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Hi(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = du(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var u = new o.constructor(o.type, o);
        Mr = u, o.target.dispatchEvent(u), Mr = null;
      } else
        return r = Os(o), r !== null && uu(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function xo(n, r, o) {
    Hi(n) && o.delete(r);
  }
  function Cc() {
    wt = !1, In !== null && Hi(In) && (In = null), aa !== null && Hi(aa) && (aa = null), Br !== null && Hi(Br) && (Br = null), Ro.forEach(xo), Vn.forEach(xo);
  }
  function Ua(n, r) {
    n.blockedOn === r && (n.blockedOn = null, wt || (wt = !0, v.unstable_scheduleCallback(v.unstable_NormalPriority, Cc)));
  }
  function _o(n) {
    function r(f) {
      return Ua(f, n);
    }
    if (0 < sl.length) {
      Ua(sl[0], n);
      for (var o = 1; o < sl.length; o++) {
        var u = sl[o];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (In !== null && Ua(In, n), aa !== null && Ua(aa, n), Br !== null && Ua(Br, n), Ro.forEach(r), Vn.forEach(r), o = 0; o < ln.length; o++)
      u = ln[o], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < ln.length && (o = ln[0], o.blockedOn === null); )
      Ec(o), o.blockedOn === null && ln.shift();
  }
  var Oo = ee.ReactCurrentBatchConfig, ja = !0;
  function fu(n, r, o, u) {
    var f = Zt, h = Oo.transition;
    Oo.transition = null;
    try {
      Zt = 1, Do(n, r, o, u);
    } finally {
      Zt = f, Oo.transition = h;
    }
  }
  function ko(n, r, o, u) {
    var f = Zt, h = Oo.transition;
    Oo.transition = null;
    try {
      Zt = 4, Do(n, r, o, u);
    } finally {
      Zt = f, Oo.transition = h;
    }
  }
  function Do(n, r, o, u) {
    if (ja) {
      var f = du(n, r, o, u);
      if (f === null)
        Dc(n, r, u, cl, o), ia(n, u);
      else if (Ri(f, n, r, o, u))
        u.stopPropagation();
      else if (ia(n, u), r & 4 && -1 < Sc.indexOf(n)) {
        for (; f !== null; ) {
          var h = Os(f);
          if (h !== null && ul(h), h = du(n, r, o, u), h === null && Dc(n, r, u, cl, o), h === f)
            break;
          f = h;
        }
        f !== null && u.stopPropagation();
      } else
        Dc(n, r, u, null, o);
    }
  }
  var cl = null;
  function du(n, r, o, u) {
    if (cl = null, n = cn(u), n = za(n), n !== null)
      if (r = _t(n), r === null)
        n = null;
      else if (o = r.tag, o === 13) {
        if (n = Ht(r), n !== null)
          return n;
        n = null;
      } else if (o === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
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
          case oi:
            return 1;
          case Lt:
            return 4;
          case wi:
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
  var ui = null, E = null, O = null;
  function q() {
    if (O)
      return O;
    var n, r = E, o = r.length, u, f = "value" in ui ? ui.value : ui.textContent, h = f.length;
    for (n = 0; n < o && r[n] === f[n]; n++)
      ;
    var C = o - n;
    for (u = 1; u <= C && r[o - u] === f[h - u]; u++)
      ;
    return O = f.slice(n, 1 < u ? 1 - u : void 0);
  }
  function te(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function xe() {
    return !0;
  }
  function ft() {
    return !1;
  }
  function Ie(n) {
    function r(o, u, f, h, C) {
      this._reactName = o, this._targetInst = f, this.type = u, this.nativeEvent = h, this.target = C, this.currentTarget = null;
      for (var x in n)
        n.hasOwnProperty(x) && (o = n[x], this[x] = o ? o(h) : h[x]);
      return this.isDefaultPrevented = (h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1) ? xe : ft, this.isPropagationStopped = ft, this;
    }
    return _(r.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var o = this.nativeEvent;
        o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = xe);
      },
      stopPropagation: function() {
        var o = this.nativeEvent;
        o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = xe);
      },
      persist: function() {
      },
      isPersistent: xe
    }), r;
  }
  var ut = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(n) {
      return n.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Nt = Ie(ut), qt = _({}, ut, {
    view: 0,
    detail: 0
  }), gn = Ie(qt), fn, Sn, bn, Vt = _({}, qt, {
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
    relatedTarget: function(n) {
      return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
    },
    movementX: function(n) {
      return "movementX" in n ? n.movementX : (n !== bn && (bn && n.type === "mousemove" ? (fn = n.screenX - bn.screenX, Sn = n.screenY - bn.screenY) : Sn = fn = 0, bn = n), fn);
    },
    movementY: function(n) {
      return "movementY" in n ? n.movementY : Sn;
    }
  }), $i = Ie(Vt), pu = _({}, Vt, {
    dataTransfer: 0
  }), hs = Ie(pu), hd = _({}, qt, {
    relatedTarget: 0
  }), si = Ie(hd), ms = _({}, ut, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ys = Ie(ms), md = _({}, ut, {
    clipboardData: function(n) {
      return "clipboardData" in n ? n.clipboardData : window.clipboardData;
    }
  }), Hy = Ie(md), $y = _({}, ut, {
    data: 0
  }), yd = Ie($y), gd = {
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
  }, Uv = {
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
  function Pv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = jv[n]) ? !!r[n] : !1;
  }
  function Sd() {
    return Pv;
  }
  var Bi = _({}, qt, {
    key: function(n) {
      if (n.key) {
        var r = gd[n.key] || n.key;
        if (r !== "Unidentified")
          return r;
      }
      return n.type === "keypress" ? (n = te(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Uv[n.keyCode] || "Unidentified" : "";
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
    charCode: function(n) {
      return n.type === "keypress" ? te(n) : 0;
    },
    keyCode: function(n) {
      return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
    },
    which: function(n) {
      return n.type === "keypress" ? te(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
    }
  }), By = Ie(Bi), Ed = _({}, Vt, {
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
  }), Tc = Ie(Ed), Cd = _({}, qt, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Sd
  }), Wy = Ie(Cd), wc = _({}, ut, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), zv = Ie(wc), oa = _({}, Vt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Wi = Ie(oa), er = [9, 13, 27, 32], ci = N && "CompositionEvent" in window, fl = null;
  N && "documentMode" in document && (fl = document.documentMode);
  var bc = N && "TextEvent" in window && !fl, Vv = N && (!ci || fl && 8 < fl && 11 >= fl), vu = String.fromCharCode(32), Hv = !1;
  function $v(n, r) {
    switch (n) {
      case "keyup":
        return er.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
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
  function Gy(n, r) {
    switch (n) {
      case "compositionend":
        return Rc(r);
      case "keypress":
        return r.which !== 32 ? null : (Hv = !0, vu);
      case "textInput":
        return n = r.data, n === vu && Hv ? null : n;
      default:
        return null;
    }
  }
  function Yy(n, r) {
    if (hu)
      return n === "compositionend" || !ci && $v(n, r) ? (n = q(), O = E = ui = null, hu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Vv && r.locale !== "ko" ? null : r.data;
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
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Bv[n.type] : r === "textarea";
  }
  function Gv(n, r, o, u) {
    Fa(u), r = Rs(r, "onChange"), 0 < r.length && (o = new Nt("onChange", "change", null, o, u), n.push({
      event: o,
      listeners: r
    }));
  }
  var gs = null, mu = null;
  function yu(n) {
    kc(n, 0);
  }
  function gu(n) {
    var r = Eu(n);
    if (he(r))
      return n;
  }
  function Yv(n, r) {
    if (n === "change")
      return r;
  }
  var Td = !1;
  if (N) {
    var wd;
    if (N) {
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
      var r = [];
      Gv(r, mu, n, cn(n)), go(yu, r);
    }
  }
  function Qy(n, r, o) {
    n === "focusin" ? (qv(), gs = r, mu = o, gs.attachEvent("onpropertychange", Kv)) : n === "focusout" && qv();
  }
  function qy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return gu(mu);
  }
  function Ky(n, r) {
    if (n === "click")
      return gu(r);
  }
  function Xv(n, r) {
    if (n === "input" || n === "change")
      return gu(r);
  }
  function Xy(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Pa = typeof Object.is == "function" ? Object.is : Xy;
  function Ss(n, r) {
    if (Pa(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var o = Object.keys(n), u = Object.keys(r);
    if (o.length !== u.length)
      return !1;
    for (u = 0; u < o.length; u++) {
      var f = o[u];
      if (!k.call(r, f) || !Pa(n[f], r[f]))
        return !1;
    }
    return !0;
  }
  function Zv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function Jv(n, r) {
    var o = Zv(n);
    n = 0;
    for (var u; o; ) {
      if (o.nodeType === 3) {
        if (u = n + o.textContent.length, n <= r && u >= r)
          return {
            node: o,
            offset: r - n
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
  function eh(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? eh(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function xc() {
    for (var n = window, r = Rt(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o)
        n = r.contentWindow;
      else
        break;
      r = Rt(n.document);
    }
    return r;
  }
  function Gi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function _c(n) {
    var r = xc(), o = n.focusedElem, u = n.selectionRange;
    if (r !== o && o && o.ownerDocument && eh(o.ownerDocument.documentElement, o)) {
      if (u !== null && Gi(o)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in o)
          o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var f = o.textContent.length, h = Math.min(u.start, f);
          u = u.end === void 0 ? h : Math.min(u.end, f), !n.extend && h > u && (f = u, u = h, h = f), f = Jv(o, h);
          var C = Jv(o, u);
          f && C && (n.rangeCount !== 1 || n.anchorNode !== f.node || n.anchorOffset !== f.offset || n.focusNode !== C.node || n.focusOffset !== C.offset) && (r = r.createRange(), r.setStart(f.node, f.offset), n.removeAllRanges(), h > u ? (n.addRange(r), n.extend(C.node, C.offset)) : (r.setEnd(C.node, C.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; )
        n.nodeType === 1 && r.push({
          element: n,
          left: n.scrollLeft,
          top: n.scrollTop
        });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++)
        n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var th = N && "documentMode" in document && 11 >= document.documentMode, fi = null, Rd = null, Es = null, xd = !1;
  function nh(n, r, o) {
    var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    xd || fi == null || fi !== Rt(u) || (u = fi, "selectionStart" in u && Gi(u) ? u = {
      start: u.selectionStart,
      end: u.selectionEnd
    } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
      anchorNode: u.anchorNode,
      anchorOffset: u.anchorOffset,
      focusNode: u.focusNode,
      focusOffset: u.focusOffset
    }), Es && Ss(Es, u) || (Es = u, u = Rs(Rd, "onSelect"), 0 < u.length && (r = new Nt("onSelect", "select", null, r, o), n.push({
      event: r,
      listeners: u
    }), r.target = fi)));
  }
  function Oc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var dl = {
    animationend: Oc("Animation", "AnimationEnd"),
    animationiteration: Oc("Animation", "AnimationIteration"),
    animationstart: Oc("Animation", "AnimationStart"),
    transitionend: Oc("Transition", "TransitionEnd")
  }, _d = {}, Od = {};
  N && (Od = document.createElement("div").style, "AnimationEvent" in window || (delete dl.animationend.animation, delete dl.animationiteration.animation, delete dl.animationstart.animation), "TransitionEvent" in window || delete dl.transitionend.transition);
  function pr(n) {
    if (_d[n])
      return _d[n];
    if (!dl[n])
      return n;
    var r = dl[n], o;
    for (o in r)
      if (r.hasOwnProperty(o) && o in Od)
        return _d[n] = r[o];
    return n;
  }
  var kd = pr("animationend"), rh = pr("animationiteration"), ah = pr("animationstart"), ih = pr("transitionend"), oh = /* @__PURE__ */ new Map(), lh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Yi(n, r) {
    oh.set(n, r), b(r, [n]);
  }
  for (var Cs = 0; Cs < lh.length; Cs++) {
    var pl = lh[Cs], Zy = pl.toLowerCase(), Ts = pl[0].toUpperCase() + pl.slice(1);
    Yi(Zy, "on" + Ts);
  }
  Yi(kd, "onAnimationEnd"), Yi(rh, "onAnimationIteration"), Yi(ah, "onAnimationStart"), Yi("dblclick", "onDoubleClick"), Yi("focusin", "onFocus"), Yi("focusout", "onBlur"), Yi(ih, "onTransitionEnd"), y("onMouseEnter", ["mouseout", "mouseover"]), y("onMouseLeave", ["mouseout", "mouseover"]), y("onPointerEnter", ["pointerout", "pointerover"]), y("onPointerLeave", ["pointerout", "pointerover"]), b("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), b("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), b("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), b("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), b("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), b("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ws = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Jy = new Set("cancel close invalid load scroll toggle".split(" ").concat(ws));
  function uh(n, r, o) {
    var u = n.type || "unknown-event";
    n.currentTarget = o, Ve(u, r, void 0, n), n.currentTarget = null;
  }
  function kc(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var u = n[o], f = u.event;
      u = u.listeners;
      e: {
        var h = void 0;
        if (r)
          for (var C = u.length - 1; 0 <= C; C--) {
            var x = u[C], L = x.instance, X = x.currentTarget;
            if (x = x.listener, L !== h && f.isPropagationStopped())
              break e;
            uh(f, x, X), h = L;
          }
        else
          for (C = 0; C < u.length; C++) {
            if (x = u[C], L = x.instance, X = x.currentTarget, x = x.listener, L !== h && f.isPropagationStopped())
              break e;
            uh(f, x, X), h = L;
          }
      }
    }
    if (Ci)
      throw n = D, Ci = !1, D = null, n;
  }
  function En(n, r) {
    var o = r[Fd];
    o === void 0 && (o = r[Fd] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    o.has(u) || (sh(r, n, 2, !1), o.add(u));
  }
  function Ao(n, r, o) {
    var u = 0;
    r && (u |= 4), sh(o, n, u, r);
  }
  var Qi = "_reactListening" + Math.random().toString(36).slice(2);
  function Su(n) {
    if (!n[Qi]) {
      n[Qi] = !0, S.forEach(function(o) {
        o !== "selectionchange" && (Jy.has(o) || Ao(o, !1, n), Ao(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Qi] || (r[Qi] = !0, Ao("selectionchange", !1, r));
    }
  }
  function sh(n, r, o, u) {
    switch (vs(r)) {
      case 1:
        var f = fu;
        break;
      case 4:
        f = ko;
        break;
      default:
        f = Do;
    }
    o = f.bind(null, r, o, n), f = void 0, !Si || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (f = !0), u ? f !== void 0 ? n.addEventListener(r, o, {
      capture: !0,
      passive: f
    }) : n.addEventListener(r, o, !0) : f !== void 0 ? n.addEventListener(r, o, {
      passive: f
    }) : n.addEventListener(r, o, !1);
  }
  function Dc(n, r, o, u, f) {
    var h = u;
    if (!(r & 1) && !(r & 2) && u !== null)
      e:
        for (; ; ) {
          if (u === null)
            return;
          var C = u.tag;
          if (C === 3 || C === 4) {
            var x = u.stateNode.containerInfo;
            if (x === f || x.nodeType === 8 && x.parentNode === f)
              break;
            if (C === 4)
              for (C = u.return; C !== null; ) {
                var L = C.tag;
                if ((L === 3 || L === 4) && (L = C.stateNode.containerInfo, L === f || L.nodeType === 8 && L.parentNode === f))
                  return;
                C = C.return;
              }
            for (; x !== null; ) {
              if (C = za(x), C === null)
                return;
              if (L = C.tag, L === 5 || L === 6) {
                u = h = C;
                continue e;
              }
              x = x.parentNode;
            }
          }
          u = u.return;
        }
    go(function() {
      var X = h, Se = cn(o), we = [];
      e: {
        var ge = oh.get(n);
        if (ge !== void 0) {
          var Pe = Nt, We = n;
          switch (n) {
            case "keypress":
              if (te(o) === 0)
                break e;
            case "keydown":
            case "keyup":
              Pe = By;
              break;
            case "focusin":
              We = "focus", Pe = si;
              break;
            case "focusout":
              We = "blur", Pe = si;
              break;
            case "beforeblur":
            case "afterblur":
              Pe = si;
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
              Pe = $i;
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
              Pe = zv;
              break;
            case "scroll":
              Pe = gn;
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
          var qe = (r & 4) !== 0, qn = !qe && n === "scroll", $ = qe ? ge !== null ? ge + "Capture" : null : ge;
          qe = [];
          for (var F = X, Y; F !== null; ) {
            Y = F;
            var Oe = Y.stateNode;
            if (Y.tag === 5 && Oe !== null && (Y = Oe, $ !== null && (Oe = Ca(F, $), Oe != null && qe.push(bs(F, Oe, Y)))), qn)
              break;
            F = F.return;
          }
          0 < qe.length && (ge = new Pe(ge, We, null, o, Se), we.push({
            event: ge,
            listeners: qe
          }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ge = n === "mouseover" || n === "pointerover", Pe = n === "mouseout" || n === "pointerout", ge && o !== Mr && (We = o.relatedTarget || o.fromElement) && (za(We) || We[qi]))
            break e;
          if ((Pe || ge) && (ge = Se.window === Se ? Se : (ge = Se.ownerDocument) ? ge.defaultView || ge.parentWindow : window, Pe ? (We = o.relatedTarget || o.toElement, Pe = X, We = We ? za(We) : null, We !== null && (qn = _t(We), We !== qn || We.tag !== 5 && We.tag !== 6) && (We = null)) : (Pe = null, We = X), Pe !== We)) {
            if (qe = $i, Oe = "onMouseLeave", $ = "onMouseEnter", F = "mouse", (n === "pointerout" || n === "pointerover") && (qe = Tc, Oe = "onPointerLeave", $ = "onPointerEnter", F = "pointer"), qn = Pe == null ? ge : Eu(Pe), Y = We == null ? ge : Eu(We), ge = new qe(Oe, F + "leave", Pe, o, Se), ge.target = qn, ge.relatedTarget = Y, Oe = null, za(Se) === X && (qe = new qe($, F + "enter", We, o, Se), qe.target = Y, qe.relatedTarget = qn, Oe = qe), qn = Oe, Pe && We)
              t: {
                for (qe = Pe, $ = We, F = 0, Y = qe; Y; Y = vl(Y))
                  F++;
                for (Y = 0, Oe = $; Oe; Oe = vl(Oe))
                  Y++;
                for (; 0 < F - Y; )
                  qe = vl(qe), F--;
                for (; 0 < Y - F; )
                  $ = vl($), Y--;
                for (; F--; ) {
                  if (qe === $ || $ !== null && qe === $.alternate)
                    break t;
                  qe = vl(qe), $ = vl($);
                }
                qe = null;
              }
            else
              qe = null;
            Pe !== null && Dd(we, ge, Pe, qe, !1), We !== null && qn !== null && Dd(we, qn, We, qe, !0);
          }
        }
        e: {
          if (ge = X ? Eu(X) : window, Pe = ge.nodeName && ge.nodeName.toLowerCase(), Pe === "select" || Pe === "input" && ge.type === "file")
            var Xe = Yv;
          else if (Wv(ge))
            if (Td)
              Xe = Xv;
            else {
              Xe = qy;
              var Ge = Qy;
            }
          else
            (Pe = ge.nodeName) && Pe.toLowerCase() === "input" && (ge.type === "checkbox" || ge.type === "radio") && (Xe = Ky);
          if (Xe && (Xe = Xe(n, X))) {
            Gv(we, Xe, o, Se);
            break e;
          }
          Ge && Ge(n, ge, X), n === "focusout" && (Ge = ge._wrapperState) && Ge.controlled && ge.type === "number" && Xn(ge, "number", ge.value);
        }
        switch (Ge = X ? Eu(X) : window, n) {
          case "focusin":
            (Wv(Ge) || Ge.contentEditable === "true") && (fi = Ge, Rd = X, Es = null);
            break;
          case "focusout":
            Es = Rd = fi = null;
            break;
          case "mousedown":
            xd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            xd = !1, nh(we, o, Se);
            break;
          case "selectionchange":
            if (th)
              break;
          case "keydown":
          case "keyup":
            nh(we, o, Se);
        }
        var tt;
        if (ci)
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
        St && (Vv && o.locale !== "ko" && (hu || St !== "onCompositionStart" ? St === "onCompositionEnd" && hu && (tt = q()) : (ui = Se, E = "value" in ui ? ui.value : ui.textContent, hu = !0)), Ge = Rs(X, St), 0 < Ge.length && (St = new yd(St, n, null, o, Se), we.push({
          event: St,
          listeners: Ge
        }), tt ? St.data = tt : (tt = Rc(o), tt !== null && (St.data = tt)))), (tt = bc ? Gy(n, o) : Yy(n, o)) && (X = Rs(X, "onBeforeInput"), 0 < X.length && (Se = new yd("onBeforeInput", "beforeinput", null, o, Se), we.push({
          event: Se,
          listeners: X
        }), Se.data = tt));
      }
      kc(we, r);
    });
  }
  function bs(n, r, o) {
    return {
      instance: n,
      listener: r,
      currentTarget: o
    };
  }
  function Rs(n, r) {
    for (var o = r + "Capture", u = []; n !== null; ) {
      var f = n, h = f.stateNode;
      f.tag === 5 && h !== null && (f = h, h = Ca(n, o), h != null && u.unshift(bs(n, h, f)), h = Ca(n, r), h != null && u.push(bs(n, h, f))), n = n.return;
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
  function Dd(n, r, o, u, f) {
    for (var h = r._reactName, C = []; o !== null && o !== u; ) {
      var x = o, L = x.alternate, X = x.stateNode;
      if (L !== null && L === u)
        break;
      x.tag === 5 && X !== null && (x = X, f ? (L = Ca(o, h), L != null && C.unshift(bs(o, L, x))) : f || (L = Ca(o, h), L != null && C.push(bs(o, L, x)))), o = o.return;
    }
    C.length !== 0 && n.push({
      event: r,
      listeners: C
    });
  }
  var Ad = /\r\n?/g, eg = /\u0000|\uFFFD/g;
  function Md(n) {
    return (typeof n == "string" ? n : "" + n).replace(Ad, `
`).replace(eg, "");
  }
  function Ac(n, r, o) {
    if (r = Md(r), Md(n) !== r && o)
      throw Error(p(425));
  }
  function Mc() {
  }
  var Ld = null, hl = null;
  function xs(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var ml = typeof setTimeout == "function" ? setTimeout : void 0, ch = typeof clearTimeout == "function" ? clearTimeout : void 0, Nd = typeof Promise == "function" ? Promise : void 0, Id = typeof queueMicrotask == "function" ? queueMicrotask : typeof Nd < "u" ? function(n) {
    return Nd.resolve(null).then(n).catch(tg);
  } : ml;
  function tg(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Mo(n, r) {
    var o = r, u = 0;
    do {
      var f = o.nextSibling;
      if (n.removeChild(o), f && f.nodeType === 8)
        if (o = f.data, o === "/$") {
          if (u === 0) {
            n.removeChild(f), _o(r);
            return;
          }
          u--;
        } else
          o !== "$" && o !== "$?" && o !== "$!" || u++;
      o = f;
    } while (o);
    _o(r);
  }
  function di(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function _s(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          o === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Lo = Math.random().toString(36).slice(2), xi = "__reactFiber$" + Lo, yl = "__reactProps$" + Lo, qi = "__reactContainer$" + Lo, Fd = "__reactEvents$" + Lo, ng = "__reactListeners$" + Lo, Ud = "__reactHandles$" + Lo;
  function za(n) {
    var r = n[xi];
    if (r)
      return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[qi] || o[xi]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null)
          for (n = _s(n); n !== null; ) {
            if (o = n[xi])
              return o;
            n = _s(n);
          }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function Os(n) {
    return n = n[xi] || n[qi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Eu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(p(33));
  }
  function at(n) {
    return n[yl] || null;
  }
  var No = [], xn = -1;
  function kt(n) {
    return {
      current: n
    };
  }
  function nn(n) {
    0 > xn || (n.current = No[xn], No[xn] = null, xn--);
  }
  function un(n, r) {
    xn++, No[xn] = n.current, n.current = r;
  }
  var _i = {}, gt = kt(_i), Hn = kt(!1), la = _i;
  function Va(n, r) {
    var o = n.type.contextTypes;
    if (!o)
      return _i;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r)
      return u.__reactInternalMemoizedMaskedChildContext;
    var f = {}, h;
    for (h in o)
      f[h] = r[h];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = f), f;
  }
  function Mn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Ha() {
    nn(Hn), nn(gt);
  }
  function Io(n, r, o) {
    if (gt.current !== _i)
      throw Error(p(168));
    un(gt, r), un(Hn, o);
  }
  function ks(n, r, o) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function")
      return o;
    u = u.getChildContext();
    for (var f in u)
      if (!(f in r))
        throw Error(p(108, je(n) || "Unknown", f));
    return _({}, o, u);
  }
  function Lc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || _i, la = gt.current, un(gt, n), un(Hn, Hn.current), !0;
  }
  function fh(n, r, o) {
    var u = n.stateNode;
    if (!u)
      throw Error(p(169));
    o ? (n = ks(n, r, la), u.__reactInternalMemoizedMergedChildContext = n, nn(Hn), nn(gt), un(gt, n)) : nn(Hn), un(Hn, o);
  }
  var ba = null, vr = !1, Ds = !1;
  function jd(n) {
    ba === null ? ba = [n] : ba.push(n);
  }
  function Pd(n) {
    vr = !0, jd(n);
  }
  function ua() {
    if (!Ds && ba !== null) {
      Ds = !0;
      var n = 0, r = Zt;
      try {
        var o = ba;
        for (Zt = 1; n < o.length; n++) {
          var u = o[n];
          do
            u = u(!0);
          while (u !== null);
        }
        ba = null, vr = !1;
      } catch (f) {
        throw ba !== null && (ba = ba.slice(n + 1)), wn(oi, ua), f;
      } finally {
        Zt = r, Ds = !1;
      }
    }
    return null;
  }
  var Fo = [], sa = 0, gl = null, Cu = 0, ca = [], Lr = 0, $a = null, Cr = 1, Ki = "";
  function Ra(n, r) {
    Fo[sa++] = Cu, Fo[sa++] = gl, gl = n, Cu = r;
  }
  function zd(n, r, o) {
    ca[Lr++] = Cr, ca[Lr++] = Ki, ca[Lr++] = $a, $a = n;
    var u = Cr;
    n = Ki;
    var f = 32 - Hr(u) - 1;
    u &= ~(1 << f), o += 1;
    var h = 32 - Hr(r) + f;
    if (30 < h) {
      var C = f - f % 5;
      h = (u & (1 << C) - 1).toString(32), u >>= C, f -= C, Cr = 1 << 32 - Hr(r) + f | o << f | u, Ki = h + n;
    } else
      Cr = 1 << h | o << f | u, Ki = n;
  }
  function Nc(n) {
    n.return !== null && (Ra(n, 1), zd(n, 1, 0));
  }
  function Vd(n) {
    for (; n === gl; )
      gl = Fo[--sa], Fo[sa] = null, Cu = Fo[--sa], Fo[sa] = null;
    for (; n === $a; )
      $a = ca[--Lr], ca[Lr] = null, Ki = ca[--Lr], ca[Lr] = null, Cr = ca[--Lr], ca[Lr] = null;
  }
  var xa = null, fa = null, _n = !1, Ba = null;
  function Hd(n, r) {
    var o = Ka(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function dh(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, xa = n, fa = di(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, xa = n, fa = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = $a !== null ? {
          id: Cr,
          overflow: Ki
        } : null, n.memoizedState = {
          dehydrated: r,
          treeContext: o,
          retryLane: 1073741824
        }, o = Ka(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, xa = n, fa = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ic(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Fc(n) {
    if (_n) {
      var r = fa;
      if (r) {
        var o = r;
        if (!dh(n, r)) {
          if (Ic(n))
            throw Error(p(418));
          r = di(o.nextSibling);
          var u = xa;
          r && dh(n, r) ? Hd(u, o) : (n.flags = n.flags & -4097 | 2, _n = !1, xa = n);
        }
      } else {
        if (Ic(n))
          throw Error(p(418));
        n.flags = n.flags & -4097 | 2, _n = !1, xa = n;
      }
    }
  }
  function ph(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    xa = n;
  }
  function Uc(n) {
    if (n !== xa)
      return !1;
    if (!_n)
      return ph(n), _n = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !xs(n.type, n.memoizedProps)), r && (r = fa)) {
      if (Ic(n))
        throw vh(), Error(p(418));
      for (; r; )
        Hd(n, r), r = di(r.nextSibling);
    }
    if (ph(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(p(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                fa = di(n.nextSibling);
                break e;
              }
              r--;
            } else
              o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        fa = null;
      }
    } else
      fa = xa ? di(n.stateNode.nextSibling) : null;
    return !0;
  }
  function vh() {
    for (var n = fa; n; )
      n = di(n.nextSibling);
  }
  function Fn() {
    fa = xa = null, _n = !1;
  }
  function $d(n) {
    Ba === null ? Ba = [n] : Ba.push(n);
  }
  var jc = ee.ReactCurrentBatchConfig;
  function _a(n, r) {
    if (n && n.defaultProps) {
      r = _({}, r), n = n.defaultProps;
      for (var o in n)
        r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  var Oi = kt(null), Pc = null, Uo = null, Bd = null;
  function Wd() {
    Bd = Uo = Pc = null;
  }
  function jo(n) {
    var r = Oi.current;
    nn(Oi), n._currentValue = r;
  }
  function hr(n, r, o) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === o)
        break;
      n = n.return;
    }
  }
  function Le(n, r) {
    Pc = n, Bd = Uo = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (tr = !0), n.firstContext = null);
  }
  function Qn(n) {
    var r = n._currentValue;
    if (Bd !== n)
      if (n = {
        context: n,
        memoizedValue: r,
        next: null
      }, Uo === null) {
        if (Pc === null)
          throw Error(p(308));
        Uo = n, Pc.dependencies = {
          lanes: 0,
          firstContext: n
        };
      } else
        Uo = Uo.next = n;
    return r;
  }
  var Tr = null;
  function Gd(n) {
    Tr === null ? Tr = [n] : Tr.push(n);
  }
  function hh(n, r, o, u) {
    var f = r.interleaved;
    return f === null ? (o.next = o, Gd(r)) : (o.next = f.next, f.next = o), r.interleaved = o, Xi(n, u);
  }
  function Xi(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; )
      n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var Po = !1;
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
  function ir(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = {
      baseState: n.baseState,
      firstBaseUpdate: n.firstBaseUpdate,
      lastBaseUpdate: n.lastBaseUpdate,
      shared: n.shared,
      effects: n.effects
    });
  }
  function Zi(n, r) {
    return {
      eventTime: n,
      lane: r,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function zo(n, r, o) {
    var u = n.updateQueue;
    if (u === null)
      return null;
    if (u = u.shared, Ut & 2) {
      var f = u.pending;
      return f === null ? r.next = r : (r.next = f.next, f.next = r), u.pending = r, Xi(n, o);
    }
    return f = u.interleaved, f === null ? (r.next = r, Gd(u)) : (r.next = f.next, f.next = r), u.interleaved = r, Xi(n, o);
  }
  function zc(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, bi(n, o);
    }
  }
  function Qd(n, r) {
    var o = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, o === u)) {
      var f = null, h = null;
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
          h === null ? f = h = C : h = h.next = C, o = o.next;
        } while (o !== null);
        h === null ? f = h = r : h = h.next = r;
      } else
        f = h = r;
      o = {
        baseState: u.baseState,
        firstBaseUpdate: f,
        lastBaseUpdate: h,
        shared: u.shared,
        effects: u.effects
      }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function Vo(n, r, o, u) {
    var f = n.updateQueue;
    Po = !1;
    var h = f.firstBaseUpdate, C = f.lastBaseUpdate, x = f.shared.pending;
    if (x !== null) {
      f.shared.pending = null;
      var L = x, X = L.next;
      L.next = null, C === null ? h = X : C.next = X, C = L;
      var Se = n.alternate;
      Se !== null && (Se = Se.updateQueue, x = Se.lastBaseUpdate, x !== C && (x === null ? Se.firstBaseUpdate = X : x.next = X, Se.lastBaseUpdate = L));
    }
    if (h !== null) {
      var we = f.baseState;
      C = 0, Se = X = L = null, x = h;
      do {
        var ge = x.lane, Pe = x.eventTime;
        if ((u & ge) === ge) {
          Se !== null && (Se = Se.next = {
            eventTime: Pe,
            lane: 0,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          });
          e: {
            var We = n, qe = x;
            switch (ge = r, Pe = o, qe.tag) {
              case 1:
                if (We = qe.payload, typeof We == "function") {
                  we = We.call(Pe, we, ge);
                  break e;
                }
                we = We;
                break e;
              case 3:
                We.flags = We.flags & -65537 | 128;
              case 0:
                if (We = qe.payload, ge = typeof We == "function" ? We.call(Pe, we, ge) : We, ge == null)
                  break e;
                we = _({}, we, ge);
                break e;
              case 2:
                Po = !0;
            }
          }
          x.callback !== null && x.lane !== 0 && (n.flags |= 64, ge = f.effects, ge === null ? f.effects = [x] : ge.push(x));
        } else
          Pe = {
            eventTime: Pe,
            lane: ge,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          }, Se === null ? (X = Se = Pe, L = we) : Se = Se.next = Pe, C |= ge;
        if (x = x.next, x === null) {
          if (x = f.shared.pending, x === null)
            break;
          ge = x, x = ge.next, ge.next = null, f.lastBaseUpdate = ge, f.shared.pending = null;
        }
      } while (1);
      if (Se === null && (L = we), f.baseState = L, f.firstBaseUpdate = X, f.lastBaseUpdate = Se, r = f.shared.interleaved, r !== null) {
        f = r;
        do
          C |= f.lane, f = f.next;
        while (f !== r);
      } else
        h === null && (f.shared.lanes = 0);
      no |= C, n.lanes = C, n.memoizedState = we;
    }
  }
  function Sl(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var u = n[r], f = u.callback;
        if (f !== null) {
          if (u.callback = null, u = o, typeof f != "function")
            throw Error(p(191, f));
          f.call(u);
        }
      }
  }
  var mh = new c.Component().refs;
  function qd(n, r, o, u) {
    r = n.memoizedState, o = o(u, r), o = o == null ? r : _({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var Vc = {
    isMounted: function(n) {
      return (n = n._reactInternals) ? _t(n) === n : !1;
    },
    enqueueSetState: function(n, r, o) {
      n = n._reactInternals;
      var u = Ur(), f = nr(n), h = Zi(u, f);
      h.payload = r, o != null && (h.callback = o), r = zo(n, h, f), r !== null && (jr(r, n, f, u), zc(r, n, f));
    },
    enqueueReplaceState: function(n, r, o) {
      n = n._reactInternals;
      var u = Ur(), f = nr(n), h = Zi(u, f);
      h.tag = 1, h.payload = r, o != null && (h.callback = o), r = zo(n, h, f), r !== null && (jr(r, n, f, u), zc(r, n, f));
    },
    enqueueForceUpdate: function(n, r) {
      n = n._reactInternals;
      var o = Ur(), u = nr(n), f = Zi(o, u);
      f.tag = 2, r != null && (f.callback = r), r = zo(n, f, u), r !== null && (jr(r, n, u, o), zc(r, n, u));
    }
  };
  function yh(n, r, o, u, f, h, C) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, h, C) : r.prototype && r.prototype.isPureReactComponent ? !Ss(o, u) || !Ss(f, h) : !0;
  }
  function gh(n, r, o) {
    var u = !1, f = _i, h = r.contextType;
    return typeof h == "object" && h !== null ? h = Qn(h) : (f = Mn(r) ? la : gt.current, u = r.contextTypes, h = (u = u != null) ? Va(n, f) : _i), r = new r(o, h), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Vc, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = f, n.__reactInternalMemoizedMaskedChildContext = h), r;
  }
  function Sh(n, r, o, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, u), r.state !== n && Vc.enqueueReplaceState(r, r.state, null);
  }
  function Hc(n, r, o, u) {
    var f = n.stateNode;
    f.props = o, f.state = n.memoizedState, f.refs = mh, Yd(n);
    var h = r.contextType;
    typeof h == "object" && h !== null ? f.context = Qn(h) : (h = Mn(r) ? la : gt.current, f.context = Va(n, h)), f.state = n.memoizedState, h = r.getDerivedStateFromProps, typeof h == "function" && (qd(n, r, h, o), f.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (r = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), r !== f.state && Vc.enqueueReplaceState(f, f.state, null), Vo(n, o, f, u), f.state = n.memoizedState), typeof f.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Tu(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1)
            throw Error(p(309));
          var u = o.stateNode;
        }
        if (!u)
          throw Error(p(147, n));
        var f = u, h = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === h ? r.ref : (r = function(C) {
          var x = f.refs;
          x === mh && (x = f.refs = {}), C === null ? delete x[h] : x[h] = C;
        }, r._stringRef = h, r);
      }
      if (typeof n != "string")
        throw Error(p(284));
      if (!o._owner)
        throw Error(p(290, n));
    }
    return n;
  }
  function $c(n, r) {
    throw n = Object.prototype.toString.call(r), Error(p(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Eh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Ch(n) {
    function r($, F) {
      if (n) {
        var Y = $.deletions;
        Y === null ? ($.deletions = [F], $.flags |= 16) : Y.push(F);
      }
    }
    function o($, F) {
      if (!n)
        return null;
      for (; F !== null; )
        r($, F), F = F.sibling;
      return null;
    }
    function u($, F) {
      for ($ = /* @__PURE__ */ new Map(); F !== null; )
        F.key !== null ? $.set(F.key, F) : $.set(F.index, F), F = F.sibling;
      return $;
    }
    function f($, F) {
      return $ = qo($, F), $.index = 0, $.sibling = null, $;
    }
    function h($, F, Y) {
      return $.index = Y, n ? (Y = $.alternate, Y !== null ? (Y = Y.index, Y < F ? ($.flags |= 2, F) : Y) : ($.flags |= 2, F)) : ($.flags |= 1048576, F);
    }
    function C($) {
      return n && $.alternate === null && ($.flags |= 2), $;
    }
    function x($, F, Y, Oe) {
      return F === null || F.tag !== 6 ? (F = qs(Y, $.mode, Oe), F.return = $, F) : (F = f(F, Y), F.return = $, F);
    }
    function L($, F, Y, Oe) {
      var Xe = Y.type;
      return Xe === _e ? Se($, F, Y.props.children, Oe, Y.key) : F !== null && (F.elementType === Xe || typeof Xe == "object" && Xe !== null && Xe.$$typeof === Re && Eh(Xe) === F.type) ? (Oe = f(F, Y.props), Oe.ref = Tu($, F, Y), Oe.return = $, Oe) : (Oe = Tf(Y.type, Y.key, Y.props, null, $.mode, Oe), Oe.ref = Tu($, F, Y), Oe.return = $, Oe);
    }
    function X($, F, Y, Oe) {
      return F === null || F.tag !== 4 || F.stateNode.containerInfo !== Y.containerInfo || F.stateNode.implementation !== Y.implementation ? (F = jl(Y, $.mode, Oe), F.return = $, F) : (F = f(F, Y.children || []), F.return = $, F);
    }
    function Se($, F, Y, Oe, Xe) {
      return F === null || F.tag !== 7 ? (F = Ul(Y, $.mode, Oe, Xe), F.return = $, F) : (F = f(F, Y), F.return = $, F);
    }
    function we($, F, Y) {
      if (typeof F == "string" && F !== "" || typeof F == "number")
        return F = qs("" + F, $.mode, Y), F.return = $, F;
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case V:
            return Y = Tf(F.type, F.key, F.props, null, $.mode, Y), Y.ref = Tu($, null, F), Y.return = $, Y;
          case me:
            return F = jl(F, $.mode, Y), F.return = $, F;
          case Re:
            var Oe = F._init;
            return we($, Oe(F._payload), Y);
        }
        if (zt(F) || ke(F))
          return F = Ul(F, $.mode, Y, null), F.return = $, F;
        $c($, F);
      }
      return null;
    }
    function ge($, F, Y, Oe) {
      var Xe = F !== null ? F.key : null;
      if (typeof Y == "string" && Y !== "" || typeof Y == "number")
        return Xe !== null ? null : x($, F, "" + Y, Oe);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case V:
            return Y.key === Xe ? L($, F, Y, Oe) : null;
          case me:
            return Y.key === Xe ? X($, F, Y, Oe) : null;
          case Re:
            return Xe = Y._init, ge($, F, Xe(Y._payload), Oe);
        }
        if (zt(Y) || ke(Y))
          return Xe !== null ? null : Se($, F, Y, Oe, null);
        $c($, Y);
      }
      return null;
    }
    function Pe($, F, Y, Oe, Xe) {
      if (typeof Oe == "string" && Oe !== "" || typeof Oe == "number")
        return $ = $.get(Y) || null, x(F, $, "" + Oe, Xe);
      if (typeof Oe == "object" && Oe !== null) {
        switch (Oe.$$typeof) {
          case V:
            return $ = $.get(Oe.key === null ? Y : Oe.key) || null, L(F, $, Oe, Xe);
          case me:
            return $ = $.get(Oe.key === null ? Y : Oe.key) || null, X(F, $, Oe, Xe);
          case Re:
            var Ge = Oe._init;
            return Pe($, F, Y, Ge(Oe._payload), Xe);
        }
        if (zt(Oe) || ke(Oe))
          return $ = $.get(Y) || null, Se(F, $, Oe, Xe, null);
        $c(F, Oe);
      }
      return null;
    }
    function We($, F, Y, Oe) {
      for (var Xe = null, Ge = null, tt = F, St = F = 0, gr = null; tt !== null && St < Y.length; St++) {
        tt.index > St ? (gr = tt, tt = null) : gr = tt.sibling;
        var Kt = ge($, tt, Y[St], Oe);
        if (Kt === null) {
          tt === null && (tt = gr);
          break;
        }
        n && tt && Kt.alternate === null && r($, tt), F = h(Kt, F, St), Ge === null ? Xe = Kt : Ge.sibling = Kt, Ge = Kt, tt = gr;
      }
      if (St === Y.length)
        return o($, tt), _n && Ra($, St), Xe;
      if (tt === null) {
        for (; St < Y.length; St++)
          tt = we($, Y[St], Oe), tt !== null && (F = h(tt, F, St), Ge === null ? Xe = tt : Ge.sibling = tt, Ge = tt);
        return _n && Ra($, St), Xe;
      }
      for (tt = u($, tt); St < Y.length; St++)
        gr = Pe(tt, $, St, Y[St], Oe), gr !== null && (n && gr.alternate !== null && tt.delete(gr.key === null ? St : gr.key), F = h(gr, F, St), Ge === null ? Xe = gr : Ge.sibling = gr, Ge = gr);
      return n && tt.forEach(function(Ko) {
        return r($, Ko);
      }), _n && Ra($, St), Xe;
    }
    function qe($, F, Y, Oe) {
      var Xe = ke(Y);
      if (typeof Xe != "function")
        throw Error(p(150));
      if (Y = Xe.call(Y), Y == null)
        throw Error(p(151));
      for (var Ge = Xe = null, tt = F, St = F = 0, gr = null, Kt = Y.next(); tt !== null && !Kt.done; St++, Kt = Y.next()) {
        tt.index > St ? (gr = tt, tt = null) : gr = tt.sibling;
        var Ko = ge($, tt, Kt.value, Oe);
        if (Ko === null) {
          tt === null && (tt = gr);
          break;
        }
        n && tt && Ko.alternate === null && r($, tt), F = h(Ko, F, St), Ge === null ? Xe = Ko : Ge.sibling = Ko, Ge = Ko, tt = gr;
      }
      if (Kt.done)
        return o($, tt), _n && Ra($, St), Xe;
      if (tt === null) {
        for (; !Kt.done; St++, Kt = Y.next())
          Kt = we($, Kt.value, Oe), Kt !== null && (F = h(Kt, F, St), Ge === null ? Xe = Kt : Ge.sibling = Kt, Ge = Kt);
        return _n && Ra($, St), Xe;
      }
      for (tt = u($, tt); !Kt.done; St++, Kt = Y.next())
        Kt = Pe(tt, $, St, Kt.value, Oe), Kt !== null && (n && Kt.alternate !== null && tt.delete(Kt.key === null ? St : Kt.key), F = h(Kt, F, St), Ge === null ? Xe = Kt : Ge.sibling = Kt, Ge = Kt);
      return n && tt.forEach(function(Tg) {
        return r($, Tg);
      }), _n && Ra($, St), Xe;
    }
    function qn($, F, Y, Oe) {
      if (typeof Y == "object" && Y !== null && Y.type === _e && Y.key === null && (Y = Y.props.children), typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case V:
            e: {
              for (var Xe = Y.key, Ge = F; Ge !== null; ) {
                if (Ge.key === Xe) {
                  if (Xe = Y.type, Xe === _e) {
                    if (Ge.tag === 7) {
                      o($, Ge.sibling), F = f(Ge, Y.props.children), F.return = $, $ = F;
                      break e;
                    }
                  } else if (Ge.elementType === Xe || typeof Xe == "object" && Xe !== null && Xe.$$typeof === Re && Eh(Xe) === Ge.type) {
                    o($, Ge.sibling), F = f(Ge, Y.props), F.ref = Tu($, Ge, Y), F.return = $, $ = F;
                    break e;
                  }
                  o($, Ge);
                  break;
                } else
                  r($, Ge);
                Ge = Ge.sibling;
              }
              Y.type === _e ? (F = Ul(Y.props.children, $.mode, Oe, Y.key), F.return = $, $ = F) : (Oe = Tf(Y.type, Y.key, Y.props, null, $.mode, Oe), Oe.ref = Tu($, F, Y), Oe.return = $, $ = Oe);
            }
            return C($);
          case me:
            e: {
              for (Ge = Y.key; F !== null; ) {
                if (F.key === Ge)
                  if (F.tag === 4 && F.stateNode.containerInfo === Y.containerInfo && F.stateNode.implementation === Y.implementation) {
                    o($, F.sibling), F = f(F, Y.children || []), F.return = $, $ = F;
                    break e;
                  } else {
                    o($, F);
                    break;
                  }
                else
                  r($, F);
                F = F.sibling;
              }
              F = jl(Y, $.mode, Oe), F.return = $, $ = F;
            }
            return C($);
          case Re:
            return Ge = Y._init, qn($, F, Ge(Y._payload), Oe);
        }
        if (zt(Y))
          return We($, F, Y, Oe);
        if (ke(Y))
          return qe($, F, Y, Oe);
        $c($, Y);
      }
      return typeof Y == "string" && Y !== "" || typeof Y == "number" ? (Y = "" + Y, F !== null && F.tag === 6 ? (o($, F.sibling), F = f(F, Y), F.return = $, $ = F) : (o($, F), F = qs(Y, $.mode, Oe), F.return = $, $ = F), C($)) : o($, F);
    }
    return qn;
  }
  var wu = Ch(!0), Th = Ch(!1), As = {}, pi = kt(As), Ms = kt(As), bu = kt(As);
  function El(n) {
    if (n === As)
      throw Error(p(174));
    return n;
  }
  function Kd(n, r) {
    switch (un(bu, r), un(Ms, n), un(pi, As), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : yn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = yn(r, n);
    }
    nn(pi), un(pi, r);
  }
  function Ho() {
    nn(pi), nn(Ms), nn(bu);
  }
  function st(n) {
    El(bu.current);
    var r = El(pi.current), o = yn(r, n.type);
    r !== o && (un(Ms, n), un(pi, o));
  }
  function It(n) {
    Ms.current === n && (nn(pi), nn(Ms));
  }
  var dt = kt(0);
  function Un(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Wa = [];
  function Bc() {
    for (var n = 0; n < Wa.length; n++)
      Wa[n]._workInProgressVersionPrimary = null;
    Wa.length = 0;
  }
  var Wc = ee.ReactCurrentDispatcher, Xd = ee.ReactCurrentBatchConfig, Cl = 0, On = null, se = null, $t = null, pt = !1, ki = !1, Oa = 0, Tl = 0;
  function kn() {
    throw Error(p(321));
  }
  function wl(n, r) {
    if (r === null)
      return !1;
    for (var o = 0; o < r.length && o < n.length; o++)
      if (!Pa(n[o], r[o]))
        return !1;
    return !0;
  }
  function $o(n, r, o, u, f, h) {
    if (Cl = h, On = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Wc.current = n === null || n.memoizedState === null ? ag : ig, n = o(u, f), ki) {
      h = 0;
      do {
        if (ki = !1, Oa = 0, 25 <= h)
          throw Error(p(301));
        h += 1, $t = se = null, r.updateQueue = null, Wc.current = Jd, n = o(u, f);
      } while (ki);
    }
    if (Wc.current = uf, r = se !== null && se.next !== null, Cl = 0, $t = se = On = null, pt = !1, r)
      throw Error(p(300));
    return n;
  }
  function bl() {
    var n = Oa !== 0;
    return Oa = 0, n;
  }
  function Ga() {
    var n = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return $t === null ? On.memoizedState = $t = n : $t = $t.next = n, $t;
  }
  function da() {
    if (se === null) {
      var n = On.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = se.next;
    var r = $t === null ? On.memoizedState : $t.next;
    if (r !== null)
      $t = r, se = n;
    else {
      if (n === null)
        throw Error(p(310));
      se = n, n = {
        memoizedState: se.memoizedState,
        baseState: se.baseState,
        baseQueue: se.baseQueue,
        queue: se.queue,
        next: null
      }, $t === null ? On.memoizedState = $t = n : $t = $t.next = n;
    }
    return $t;
  }
  function Rl(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ls(n) {
    var r = da(), o = r.queue;
    if (o === null)
      throw Error(p(311));
    o.lastRenderedReducer = n;
    var u = se, f = u.baseQueue, h = o.pending;
    if (h !== null) {
      if (f !== null) {
        var C = f.next;
        f.next = h.next, h.next = C;
      }
      u.baseQueue = f = h, o.pending = null;
    }
    if (f !== null) {
      h = f.next, u = u.baseState;
      var x = C = null, L = null, X = h;
      do {
        var Se = X.lane;
        if ((Cl & Se) === Se)
          L !== null && (L = L.next = {
            lane: 0,
            action: X.action,
            hasEagerState: X.hasEagerState,
            eagerState: X.eagerState,
            next: null
          }), u = X.hasEagerState ? X.eagerState : n(u, X.action);
        else {
          var we = {
            lane: Se,
            action: X.action,
            hasEagerState: X.hasEagerState,
            eagerState: X.eagerState,
            next: null
          };
          L === null ? (x = L = we, C = u) : L = L.next = we, On.lanes |= Se, no |= Se;
        }
        X = X.next;
      } while (X !== null && X !== h);
      L === null ? C = u : L.next = x, Pa(u, r.memoizedState) || (tr = !0), r.memoizedState = u, r.baseState = C, r.baseQueue = L, o.lastRenderedState = u;
    }
    if (n = o.interleaved, n !== null) {
      f = n;
      do
        h = f.lane, On.lanes |= h, no |= h, f = f.next;
      while (f !== n);
    } else
      f === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function Ns(n) {
    var r = da(), o = r.queue;
    if (o === null)
      throw Error(p(311));
    o.lastRenderedReducer = n;
    var u = o.dispatch, f = o.pending, h = r.memoizedState;
    if (f !== null) {
      o.pending = null;
      var C = f = f.next;
      do
        h = n(h, C.action), C = C.next;
      while (C !== f);
      Pa(h, r.memoizedState) || (tr = !0), r.memoizedState = h, r.baseQueue === null && (r.baseState = h), o.lastRenderedState = h;
    }
    return [h, u];
  }
  function Gc() {
  }
  function Yc(n, r) {
    var o = On, u = da(), f = r(), h = !Pa(u.memoizedState, f);
    if (h && (u.memoizedState = f, tr = !0), u = u.queue, Is(Kc.bind(null, o, u, n), [n]), u.getSnapshot !== r || h || $t !== null && $t.memoizedState.tag & 1) {
      if (o.flags |= 2048, xl(9, qc.bind(null, o, u, f, r), void 0, null), jn === null)
        throw Error(p(349));
      Cl & 30 || Qc(o, r, f);
    }
    return f;
  }
  function Qc(n, r, o) {
    n.flags |= 16384, n = {
      getSnapshot: r,
      value: o
    }, r = On.updateQueue, r === null ? (r = {
      lastEffect: null,
      stores: null
    }, On.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function qc(n, r, o, u) {
    r.value = o, r.getSnapshot = u, Xc(r) && Zc(n);
  }
  function Kc(n, r, o) {
    return o(function() {
      Xc(r) && Zc(n);
    });
  }
  function Xc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !Pa(n, o);
    } catch {
      return !0;
    }
  }
  function Zc(n) {
    var r = Xi(n, 1);
    r !== null && jr(r, n, 1, -1);
  }
  function Jc(n) {
    var r = Ga();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Rl,
      lastRenderedState: n
    }, r.queue = n, n = n.dispatch = lf.bind(null, On, n), [r.memoizedState, n];
  }
  function xl(n, r, o, u) {
    return n = {
      tag: n,
      create: r,
      destroy: o,
      deps: u,
      next: null
    }, r = On.updateQueue, r === null ? (r = {
      lastEffect: null,
      stores: null
    }, On.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (u = o.next, o.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function ef() {
    return da().memoizedState;
  }
  function _l(n, r, o, u) {
    var f = Ga();
    On.flags |= n, f.memoizedState = xl(1 | r, o, void 0, u === void 0 ? null : u);
  }
  function Ji(n, r, o, u) {
    var f = da();
    u = u === void 0 ? null : u;
    var h = void 0;
    if (se !== null) {
      var C = se.memoizedState;
      if (h = C.destroy, u !== null && wl(u, C.deps)) {
        f.memoizedState = xl(r, o, h, u);
        return;
      }
    }
    On.flags |= n, f.memoizedState = xl(1 | r, o, h, u);
  }
  function tf(n, r) {
    return _l(8390656, 8, n, r);
  }
  function Is(n, r) {
    return Ji(2048, 8, n, r);
  }
  function nf(n, r) {
    return Ji(4, 2, n, r);
  }
  function rf(n, r) {
    return Ji(4, 4, n, r);
  }
  function Zd(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function Ru(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Ji(4, 4, Zd.bind(null, r, n), o);
  }
  function af() {
  }
  function xu(n, r) {
    var o = da();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && wl(r, u[1]) ? u[0] : (o.memoizedState = [n, r], n);
  }
  function Bo(n, r) {
    var o = da();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && wl(r, u[1]) ? u[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function pa(n, r, o) {
    return Cl & 21 ? (Pa(o, r) || (o = iu(), On.lanes |= o, no |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, tr = !0), n.memoizedState = o);
  }
  function rg(n, r) {
    var o = Zt;
    Zt = o !== 0 && 4 > o ? o : 4, n(!0);
    var u = Xd.transition;
    Xd.transition = {};
    try {
      n(!1), r();
    } finally {
      Zt = o, Xd.transition = u;
    }
  }
  function Cn() {
    return da().memoizedState;
  }
  function of(n, r, o) {
    var u = nr(n);
    if (o = {
      lane: u,
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, _u(n))
      Fs(r, o);
    else if (o = hh(n, r, o, u), o !== null) {
      var f = Ur();
      jr(o, n, u, f), wh(o, r, u);
    }
  }
  function lf(n, r, o) {
    var u = nr(n), f = {
      lane: u,
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (_u(n))
      Fs(r, f);
    else {
      var h = n.alternate;
      if (n.lanes === 0 && (h === null || h.lanes === 0) && (h = r.lastRenderedReducer, h !== null))
        try {
          var C = r.lastRenderedState, x = h(C, o);
          if (f.hasEagerState = !0, f.eagerState = x, Pa(x, C)) {
            var L = r.interleaved;
            L === null ? (f.next = f, Gd(r)) : (f.next = L.next, L.next = f), r.interleaved = f;
            return;
          }
        } catch {
        } finally {
        }
      o = hh(n, r, f, u), o !== null && (f = Ur(), jr(o, n, u, f), wh(o, r, u));
    }
  }
  function _u(n) {
    var r = n.alternate;
    return n === On || r !== null && r === On;
  }
  function Fs(n, r) {
    ki = pt = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function wh(n, r, o) {
    if (o & 4194240) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, bi(n, o);
    }
  }
  var uf = {
    readContext: Qn,
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
    readContext: Qn,
    useCallback: function(n, r) {
      return Ga().memoizedState = [n, r === void 0 ? null : r], n;
    },
    useContext: Qn,
    useEffect: tf,
    useImperativeHandle: function(n, r, o) {
      return o = o != null ? o.concat([n]) : null, _l(4194308, 4, Zd.bind(null, r, n), o);
    },
    useLayoutEffect: function(n, r) {
      return _l(4194308, 4, n, r);
    },
    useInsertionEffect: function(n, r) {
      return _l(4, 2, n, r);
    },
    useMemo: function(n, r) {
      var o = Ga();
      return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
    },
    useReducer: function(n, r, o) {
      var u = Ga();
      return r = o !== void 0 ? o(r) : r, u.memoizedState = u.baseState = r, n = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: n,
        lastRenderedState: r
      }, u.queue = n, n = n.dispatch = of.bind(null, On, n), [u.memoizedState, n];
    },
    useRef: function(n) {
      var r = Ga();
      return n = {
        current: n
      }, r.memoizedState = n;
    },
    useState: Jc,
    useDebugValue: af,
    useDeferredValue: function(n) {
      return Ga().memoizedState = n;
    },
    useTransition: function() {
      var n = Jc(!1), r = n[0];
      return n = rg.bind(null, n[1]), Ga().memoizedState = n, [r, n];
    },
    useMutableSource: function() {
    },
    useSyncExternalStore: function(n, r, o) {
      var u = On, f = Ga();
      if (_n) {
        if (o === void 0)
          throw Error(p(407));
        o = o();
      } else {
        if (o = r(), jn === null)
          throw Error(p(349));
        Cl & 30 || Qc(u, r, o);
      }
      f.memoizedState = o;
      var h = {
        value: o,
        getSnapshot: r
      };
      return f.queue = h, tf(Kc.bind(null, u, h, n), [n]), u.flags |= 2048, xl(9, qc.bind(null, u, h, o, r), void 0, null), o;
    },
    useId: function() {
      var n = Ga(), r = jn.identifierPrefix;
      if (_n) {
        var o = Ki, u = Cr;
        o = (u & ~(1 << 32 - Hr(u) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = Oa++, 0 < o && (r += "H" + o.toString(32)), r += ":";
      } else
        o = Tl++, r = ":" + r + "r" + o.toString(32) + ":";
      return n.memoizedState = r;
    },
    unstable_isNewReconciler: !1
  }, ig = {
    readContext: Qn,
    useCallback: xu,
    useContext: Qn,
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
    useDeferredValue: function(n) {
      var r = da();
      return pa(r, se.memoizedState, n);
    },
    useTransition: function() {
      var n = Ls(Rl)[0], r = da().memoizedState;
      return [n, r];
    },
    useMutableSource: Gc,
    useSyncExternalStore: Yc,
    useId: Cn,
    unstable_isNewReconciler: !1
  }, Jd = {
    readContext: Qn,
    useCallback: xu,
    useContext: Qn,
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
    useDeferredValue: function(n) {
      var r = da();
      return se === null ? r.memoizedState = n : pa(r, se.memoizedState, n);
    },
    useTransition: function() {
      var n = Ns(Rl)[0], r = da().memoizedState;
      return [n, r];
    },
    useMutableSource: Gc,
    useSyncExternalStore: Yc,
    useId: Cn,
    unstable_isNewReconciler: !1
  };
  function Ou(n, r) {
    try {
      var o = "", u = r;
      do
        o += De(u), u = u.return;
      while (u);
      var f = o;
    } catch (h) {
      f = `
Error generating stack: ` + h.message + `
` + h.stack;
    }
    return {
      value: n,
      source: r,
      stack: f,
      digest: null
    };
  }
  function Us(n, r, o) {
    return {
      value: n,
      source: null,
      stack: o ?? null,
      digest: r ?? null
    };
  }
  function sf(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var og = typeof WeakMap == "function" ? WeakMap : Map;
  function bh(n, r, o) {
    o = Zi(-1, o), o.tag = 3, o.payload = {
      element: null
    };
    var u = r.value;
    return o.callback = function() {
      mf || (mf = !0, Ml = u), sf(n, r);
    }, o;
  }
  function js(n, r, o) {
    o = Zi(-1, o), o.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var f = r.value;
      o.payload = function() {
        return u(f);
      }, o.callback = function() {
        sf(n, r);
      };
    }
    var h = n.stateNode;
    return h !== null && typeof h.componentDidCatch == "function" && (o.callback = function() {
      sf(n, r), typeof u != "function" && (Mi === null ? Mi = /* @__PURE__ */ new Set([this]) : Mi.add(this));
      var C = r.stack;
      this.componentDidCatch(r.value, {
        componentStack: C !== null ? C : ""
      });
    }), o;
  }
  function Rh(n, r, o) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new og();
      var f = /* @__PURE__ */ new Set();
      u.set(r, f);
    } else
      f = u.get(r), f === void 0 && (f = /* @__PURE__ */ new Set(), u.set(r, f));
    f.has(o) || (f.add(o), n = pg.bind(null, n, r, o), r.then(n, n));
  }
  function ep(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function tp(n, r, o, u, f) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = f, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = Zi(-1, 1), r.tag = 2, zo(o, r, 1))), o.lanes |= 1), n);
  }
  var lg = ee.ReactCurrentOwner, tr = !1;
  function or(n, r, o, u) {
    r.child = n === null ? Th(r, null, o, u) : wu(r, n.child, o, u);
  }
  function Wo(n, r, o, u, f) {
    o = o.render;
    var h = r.ref;
    return Le(r, f), u = $o(n, r, o, u, h, f), o = bl(), n !== null && !tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, wr(n, r, f)) : (_n && o && Nc(r), r.flags |= 1, or(n, r, u, f), r.child);
  }
  function cf(n, r, o, u, f) {
    if (n === null) {
      var h = o.type;
      return typeof h == "function" && !Ep(h) && h.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = h, va(n, r, h, u, f)) : (n = Tf(o.type, null, u, r, r.mode, f), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (h = n.child, !(n.lanes & f)) {
      var C = h.memoizedProps;
      if (o = o.compare, o = o !== null ? o : Ss, o(C, u) && n.ref === r.ref)
        return wr(n, r, f);
    }
    return r.flags |= 1, n = qo(h, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function va(n, r, o, u, f) {
    if (n !== null) {
      var h = n.memoizedProps;
      if (Ss(h, u) && n.ref === r.ref)
        if (tr = !1, r.pendingProps = u = h, (n.lanes & f) !== 0)
          n.flags & 131072 && (tr = !0);
        else
          return r.lanes = n.lanes, wr(n, r, f);
    }
    return ku(n, r, o, u, f);
  }
  function Ol(n, r, o) {
    var u = r.pendingProps, f = u.children, h = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        }, un(Iu, ka), ka |= o;
      else {
        if (!(o & 1073741824))
          return n = h !== null ? h.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = {
            baseLanes: n,
            cachePool: null,
            transitions: null
          }, r.updateQueue = null, un(Iu, ka), ka |= n, null;
        r.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        }, u = h !== null ? h.baseLanes : o, un(Iu, ka), ka |= u;
      }
    else
      h !== null ? (u = h.baseLanes | o, r.memoizedState = null) : u = o, un(Iu, ka), ka |= u;
    return or(n, r, f, o), r.child;
  }
  function Dt(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function ku(n, r, o, u, f) {
    var h = Mn(o) ? la : gt.current;
    return h = Va(r, h), Le(r, f), o = $o(n, r, o, u, h, f), u = bl(), n !== null && !tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, wr(n, r, f)) : (_n && u && Nc(r), r.flags |= 1, or(n, r, o, f), r.child);
  }
  function np(n, r, o, u, f) {
    if (Mn(o)) {
      var h = !0;
      Lc(r);
    } else
      h = !1;
    if (Le(r, f), r.stateNode === null)
      Nr(n, r), gh(r, o, u), Hc(r, o, u, f), u = !0;
    else if (n === null) {
      var C = r.stateNode, x = r.memoizedProps;
      C.props = x;
      var L = C.context, X = o.contextType;
      typeof X == "object" && X !== null ? X = Qn(X) : (X = Mn(o) ? la : gt.current, X = Va(r, X));
      var Se = o.getDerivedStateFromProps, we = typeof Se == "function" || typeof C.getSnapshotBeforeUpdate == "function";
      we || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (x !== u || L !== X) && Sh(r, C, u, X), Po = !1;
      var ge = r.memoizedState;
      C.state = ge, Vo(r, u, C, f), L = r.memoizedState, x !== u || ge !== L || Hn.current || Po ? (typeof Se == "function" && (qd(r, o, Se, u), L = r.memoizedState), (x = Po || yh(r, o, x, u, ge, L, X)) ? (we || typeof C.UNSAFE_componentWillMount != "function" && typeof C.componentWillMount != "function" || (typeof C.componentWillMount == "function" && C.componentWillMount(), typeof C.UNSAFE_componentWillMount == "function" && C.UNSAFE_componentWillMount()), typeof C.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = L), C.props = u, C.state = L, C.context = X, u = x) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      C = r.stateNode, ir(n, r), x = r.memoizedProps, X = r.type === r.elementType ? x : _a(r.type, x), C.props = X, we = r.pendingProps, ge = C.context, L = o.contextType, typeof L == "object" && L !== null ? L = Qn(L) : (L = Mn(o) ? la : gt.current, L = Va(r, L));
      var Pe = o.getDerivedStateFromProps;
      (Se = typeof Pe == "function" || typeof C.getSnapshotBeforeUpdate == "function") || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (x !== we || ge !== L) && Sh(r, C, u, L), Po = !1, ge = r.memoizedState, C.state = ge, Vo(r, u, C, f);
      var We = r.memoizedState;
      x !== we || ge !== We || Hn.current || Po ? (typeof Pe == "function" && (qd(r, o, Pe, u), We = r.memoizedState), (X = Po || yh(r, o, X, u, ge, We, L) || !1) ? (Se || typeof C.UNSAFE_componentWillUpdate != "function" && typeof C.componentWillUpdate != "function" || (typeof C.componentWillUpdate == "function" && C.componentWillUpdate(u, We, L), typeof C.UNSAFE_componentWillUpdate == "function" && C.UNSAFE_componentWillUpdate(u, We, L)), typeof C.componentDidUpdate == "function" && (r.flags |= 4), typeof C.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof C.componentDidUpdate != "function" || x === n.memoizedProps && ge === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && ge === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = We), C.props = u, C.state = We, C.context = L, u = X) : (typeof C.componentDidUpdate != "function" || x === n.memoizedProps && ge === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && ge === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return xh(n, r, o, u, h, f);
  }
  function xh(n, r, o, u, f, h) {
    Dt(n, r);
    var C = (r.flags & 128) !== 0;
    if (!u && !C)
      return f && fh(r, o, !1), wr(n, r, h);
    u = r.stateNode, lg.current = r;
    var x = C && typeof o.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && C ? (r.child = wu(r, n.child, null, h), r.child = wu(r, null, x, h)) : or(n, r, x, h), r.memoizedState = u.state, f && fh(r, o, !0), r.child;
  }
  function _h(n) {
    var r = n.stateNode;
    r.pendingContext ? Io(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Io(n, r.context, !1), Kd(n, r.containerInfo);
  }
  function ff(n, r, o, u, f) {
    return Fn(), $d(f), r.flags |= 256, or(n, r, o, u), r.child;
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
  function ap(n, r, o) {
    var u = r.pendingProps, f = dt.current, h = !1, C = (r.flags & 128) !== 0, x;
    if ((x = C) || (x = n !== null && n.memoizedState === null ? !1 : (f & 2) !== 0), x ? (h = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (f |= 1), un(dt, f & 1), n === null)
      return Fc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (C = u.children, n = u.fallback, h ? (u = r.mode, h = r.child, C = {
        mode: "hidden",
        children: C
      }, !(u & 1) && h !== null ? (h.childLanes = 0, h.pendingProps = C) : h = Qs(C, u, 0, null), n = Ul(n, u, o, null), h.return = r, n.return = r, h.sibling = n, r.child = h, r.child.memoizedState = rp(o), r.memoizedState = kl, n) : ip(r, C));
    if (f = n.memoizedState, f !== null && (x = f.dehydrated, x !== null))
      return ug(n, r, C, u, x, f, o);
    if (h) {
      h = u.fallback, C = r.mode, f = n.child, x = f.sibling;
      var L = {
        mode: "hidden",
        children: u.children
      };
      return !(C & 1) && r.child !== f ? (u = r.child, u.childLanes = 0, u.pendingProps = L, r.deletions = null) : (u = qo(f, L), u.subtreeFlags = f.subtreeFlags & 14680064), x !== null ? h = qo(x, h) : (h = Ul(h, C, o, null), h.flags |= 2), h.return = r, u.return = r, u.sibling = h, r.child = u, u = h, h = r.child, C = n.child.memoizedState, C = C === null ? rp(o) : {
        baseLanes: C.baseLanes | o,
        cachePool: null,
        transitions: C.transitions
      }, h.memoizedState = C, h.childLanes = n.childLanes & ~o, r.memoizedState = kl, u;
    }
    return h = n.child, n = h.sibling, u = qo(h, {
      mode: "visible",
      children: u.children
    }), !(r.mode & 1) && (u.lanes = o), u.return = r, u.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function ip(n, r) {
    return r = Qs({
      mode: "visible",
      children: r
    }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Du(n, r, o, u) {
    return u !== null && $d(u), wu(r, n.child, null, o), n = ip(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function ug(n, r, o, u, f, h, C) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, u = Us(Error(p(422))), Du(n, r, C, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (h = u.fallback, f = r.mode, u = Qs({
        mode: "visible",
        children: u.children
      }, f, 0, null), h = Ul(h, f, C, null), h.flags |= 2, u.return = r, h.return = r, u.sibling = h, r.child = u, r.mode & 1 && wu(r, n.child, null, C), r.child.memoizedState = rp(C), r.memoizedState = kl, h);
    if (!(r.mode & 1))
      return Du(n, r, C, null);
    if (f.data === "$!") {
      if (u = f.nextSibling && f.nextSibling.dataset, u)
        var x = u.dgst;
      return u = x, h = Error(p(419)), u = Us(h, u, void 0), Du(n, r, C, u);
    }
    if (x = (C & n.childLanes) !== 0, tr || x) {
      if (u = jn, u !== null) {
        switch (C & -C) {
          case 4:
            f = 2;
            break;
          case 16:
            f = 8;
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
            f = 32;
            break;
          case 536870912:
            f = 268435456;
            break;
          default:
            f = 0;
        }
        f = f & (u.suspendedLanes | C) ? 0 : f, f !== 0 && f !== h.retryLane && (h.retryLane = f, Xi(n, f), jr(u, n, f, -1));
      }
      return yp(), u = Us(Error(p(421))), Du(n, r, C, u);
    }
    return f.data === "$?" ? (r.flags |= 128, r.child = n.child, r = vg.bind(null, n), f._reactRetry = r, null) : (n = h.treeContext, fa = di(f.nextSibling), xa = r, _n = !0, Ba = null, n !== null && (ca[Lr++] = Cr, ca[Lr++] = Ki, ca[Lr++] = $a, Cr = n.id, Ki = n.overflow, $a = r), r = ip(r, u.children), r.flags |= 4096, r);
  }
  function op(n, r, o) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), hr(n.return, r, o);
  }
  function df(n, r, o, u, f) {
    var h = n.memoizedState;
    h === null ? n.memoizedState = {
      isBackwards: r,
      rendering: null,
      renderingStartTime: 0,
      last: u,
      tail: o,
      tailMode: f
    } : (h.isBackwards = r, h.rendering = null, h.renderingStartTime = 0, h.last = u, h.tail = o, h.tailMode = f);
  }
  function lp(n, r, o) {
    var u = r.pendingProps, f = u.revealOrder, h = u.tail;
    if (or(n, r, u.children, o), u = dt.current, u & 2)
      u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && op(n, o, r);
            else if (n.tag === 19)
              op(n, o, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      u &= 1;
    }
    if (un(dt, u), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (f) {
        case "forwards":
          for (o = r.child, f = null; o !== null; )
            n = o.alternate, n !== null && Un(n) === null && (f = o), o = o.sibling;
          o = f, o === null ? (f = r.child, r.child = null) : (f = o.sibling, o.sibling = null), df(r, !1, f, o, h);
          break;
        case "backwards":
          for (o = null, f = r.child, r.child = null; f !== null; ) {
            if (n = f.alternate, n !== null && Un(n) === null) {
              r.child = f;
              break;
            }
            n = f.sibling, f.sibling = o, o = f, f = n;
          }
          df(r, !0, o, null, h);
          break;
        case "together":
          df(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Nr(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function wr(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), no |= r.lanes, !(o & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(p(153));
    if (r.child !== null) {
      for (n = r.child, o = qo(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; )
        n = n.sibling, o = o.sibling = qo(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function eo(n, r, o) {
    switch (r.tag) {
      case 3:
        _h(r), Fn();
        break;
      case 5:
        st(r);
        break;
      case 1:
        Mn(r.type) && Lc(r);
        break;
      case 4:
        Kd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, f = r.memoizedProps.value;
        un(Oi, u._currentValue), u._currentValue = f;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (un(dt, dt.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? ap(n, r, o) : (un(dt, dt.current & 1), n = wr(n, r, o), n !== null ? n.sibling : null);
        un(dt, dt.current & 1);
        break;
      case 19:
        if (u = (o & r.childLanes) !== 0, n.flags & 128) {
          if (u)
            return lp(n, r, o);
          r.flags |= 128;
        }
        if (f = r.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), un(dt, dt.current), u)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Ol(n, r, o);
    }
    return wr(n, r, o);
  }
  var Ps, Dl, Ya, lr;
  Ps = function(n, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6)
        n.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === r)
        break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r)
          return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, Dl = function() {
  }, Ya = function(n, r, o, u) {
    var f = n.memoizedProps;
    if (f !== u) {
      n = r.stateNode, El(pi.current);
      var h = null;
      switch (o) {
        case "input":
          f = Ft(n, f), u = Ft(n, u), h = [];
          break;
        case "select":
          f = _({}, f, {
            value: void 0
          }), u = _({}, u, {
            value: void 0
          }), h = [];
          break;
        case "textarea":
          f = Zn(n, f), u = Zn(n, u), h = [];
          break;
        default:
          typeof f.onClick != "function" && typeof u.onClick == "function" && (n.onclick = Mc);
      }
      Yn(o, u);
      var C;
      o = null;
      for (X in f)
        if (!u.hasOwnProperty(X) && f.hasOwnProperty(X) && f[X] != null)
          if (X === "style") {
            var x = f[X];
            for (C in x)
              x.hasOwnProperty(C) && (o || (o = {}), o[C] = "");
          } else
            X !== "dangerouslySetInnerHTML" && X !== "children" && X !== "suppressContentEditableWarning" && X !== "suppressHydrationWarning" && X !== "autoFocus" && (T.hasOwnProperty(X) ? h || (h = []) : (h = h || []).push(X, null));
      for (X in u) {
        var L = u[X];
        if (x = f != null ? f[X] : void 0, u.hasOwnProperty(X) && L !== x && (L != null || x != null))
          if (X === "style")
            if (x) {
              for (C in x)
                !x.hasOwnProperty(C) || L && L.hasOwnProperty(C) || (o || (o = {}), o[C] = "");
              for (C in L)
                L.hasOwnProperty(C) && x[C] !== L[C] && (o || (o = {}), o[C] = L[C]);
            } else
              o || (h || (h = []), h.push(X, o)), o = L;
          else
            X === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0, x = x ? x.__html : void 0, L != null && x !== L && (h = h || []).push(X, L)) : X === "children" ? typeof L != "string" && typeof L != "number" || (h = h || []).push(X, "" + L) : X !== "suppressContentEditableWarning" && X !== "suppressHydrationWarning" && (T.hasOwnProperty(X) ? (L != null && X === "onScroll" && En("scroll", n), h || x === L || (h = [])) : (h = h || []).push(X, L));
      }
      o && (h = h || []).push("style", o);
      var X = h;
      (r.updateQueue = X) && (r.flags |= 4);
    }
  }, lr = function(n, r, o, u) {
    o !== u && (r.flags |= 4);
  };
  function zs(n, r) {
    if (!_n)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var o = null; r !== null; )
            r.alternate !== null && (o = r), r = r.sibling;
          o === null ? n.tail = null : o.sibling = null;
          break;
        case "collapsed":
          o = n.tail;
          for (var u = null; o !== null; )
            o.alternate !== null && (u = o), o = o.sibling;
          u === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null;
      }
  }
  function Ir(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, u = 0;
    if (r)
      for (var f = n.child; f !== null; )
        o |= f.lanes | f.childLanes, u |= f.subtreeFlags & 14680064, u |= f.flags & 14680064, f.return = n, f = f.sibling;
    else
      for (f = n.child; f !== null; )
        o |= f.lanes | f.childLanes, u |= f.subtreeFlags, u |= f.flags, f.return = n, f = f.sibling;
    return n.subtreeFlags |= u, n.childLanes = o, r;
  }
  function sg(n, r, o) {
    var u = r.pendingProps;
    switch (Vd(r), r.tag) {
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
        return Ir(r), null;
      case 1:
        return Mn(r.type) && Ha(), Ir(r), null;
      case 3:
        return u = r.stateNode, Ho(), nn(Hn), nn(gt), Bc(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (Uc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ba !== null && (Ys(Ba), Ba = null))), Dl(n, r), Ir(r), null;
      case 5:
        It(r);
        var f = El(bu.current);
        if (o = r.type, n !== null && r.stateNode != null)
          Ya(n, r, o, u, f), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null)
              throw Error(p(166));
            return Ir(r), null;
          }
          if (n = El(pi.current), Uc(r)) {
            u = r.stateNode, o = r.type;
            var h = r.memoizedProps;
            switch (u[xi] = r, u[yl] = h, n = (r.mode & 1) !== 0, o) {
              case "dialog":
                En("cancel", u), En("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                En("load", u);
                break;
              case "video":
              case "audio":
                for (f = 0; f < ws.length; f++)
                  En(ws[f], u);
                break;
              case "source":
                En("error", u);
                break;
              case "img":
              case "image":
              case "link":
                En("error", u), En("load", u);
                break;
              case "details":
                En("toggle", u);
                break;
              case "input":
                rt(u, h), En("invalid", u);
                break;
              case "select":
                u._wrapperState = {
                  wasMultiple: !!h.multiple
                }, En("invalid", u);
                break;
              case "textarea":
                dn(u, h), En("invalid", u);
            }
            Yn(o, h), f = null;
            for (var C in h)
              if (h.hasOwnProperty(C)) {
                var x = h[C];
                C === "children" ? typeof x == "string" ? u.textContent !== x && (h.suppressHydrationWarning !== !0 && Ac(u.textContent, x, n), f = ["children", x]) : typeof x == "number" && u.textContent !== "" + x && (h.suppressHydrationWarning !== !0 && Ac(u.textContent, x, n), f = ["children", "" + x]) : T.hasOwnProperty(C) && x != null && C === "onScroll" && En("scroll", u);
              }
            switch (o) {
              case "input":
                ht(u), Xt(u, h, !0);
                break;
              case "textarea":
                ht(u), Mt(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof h.onClick == "function" && (u.onclick = Mc);
            }
            u = f, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            C = f.nodeType === 9 ? f : f.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = fr(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = C.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = C.createElement(o, {
              is: u.is
            }) : (n = C.createElement(o), o === "select" && (C = n, u.multiple ? C.multiple = !0 : u.size && (C.size = u.size))) : n = C.createElementNS(n, o), n[xi] = r, n[yl] = u, Ps(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (C = Nn(o, u), o) {
                case "dialog":
                  En("cancel", n), En("close", n), f = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  En("load", n), f = u;
                  break;
                case "video":
                case "audio":
                  for (f = 0; f < ws.length; f++)
                    En(ws[f], n);
                  f = u;
                  break;
                case "source":
                  En("error", n), f = u;
                  break;
                case "img":
                case "image":
                case "link":
                  En("error", n), En("load", n), f = u;
                  break;
                case "details":
                  En("toggle", n), f = u;
                  break;
                case "input":
                  rt(n, u), f = Ft(n, u), En("invalid", n);
                  break;
                case "option":
                  f = u;
                  break;
                case "select":
                  n._wrapperState = {
                    wasMultiple: !!u.multiple
                  }, f = _({}, u, {
                    value: void 0
                  }), En("invalid", n);
                  break;
                case "textarea":
                  dn(n, u), f = Zn(n, u), En("invalid", n);
                  break;
                default:
                  f = u;
              }
              Yn(o, f), x = f;
              for (h in x)
                if (x.hasOwnProperty(h)) {
                  var L = x[h];
                  h === "style" ? tn(n, L) : h === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0, L != null && gi(n, L)) : h === "children" ? typeof L == "string" ? (o !== "textarea" || L !== "") && Ea(n, L) : typeof L == "number" && Ea(n, "" + L) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (T.hasOwnProperty(h) ? L != null && h === "onScroll" && En("scroll", n) : L != null && ae(n, h, L, C));
                }
              switch (o) {
                case "input":
                  ht(n), Xt(n, u, !1);
                  break;
                case "textarea":
                  ht(n), Mt(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + ue(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, h = u.value, h != null ? Gn(n, !!u.multiple, h, !1) : u.defaultValue != null && Gn(n, !!u.multiple, u.defaultValue, !0);
                  break;
                default:
                  typeof f.onClick == "function" && (n.onclick = Mc);
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
            u && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Ir(r), null;
      case 6:
        if (n && r.stateNode != null)
          lr(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null)
            throw Error(p(166));
          if (o = El(bu.current), El(pi.current), Uc(r)) {
            if (u = r.stateNode, o = r.memoizedProps, u[xi] = r, (h = u.nodeValue !== o) && (n = xa, n !== null))
              switch (n.tag) {
                case 3:
                  Ac(u.nodeValue, o, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Ac(u.nodeValue, o, (n.mode & 1) !== 0);
              }
            h && (r.flags |= 4);
          } else
            u = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u), u[xi] = r, r.stateNode = u;
        }
        return Ir(r), null;
      case 13:
        if (nn(dt), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (_n && fa !== null && r.mode & 1 && !(r.flags & 128))
            vh(), Fn(), r.flags |= 98560, h = !1;
          else if (h = Uc(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!h)
                throw Error(p(318));
              if (h = r.memoizedState, h = h !== null ? h.dehydrated : null, !h)
                throw Error(p(317));
              h[xi] = r;
            } else
              Fn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Ir(r), h = !1;
          } else
            Ba !== null && (Ys(Ba), Ba = null), h = !0;
          if (!h)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, r.mode & 1 && (n === null || dt.current & 1 ? sr === 0 && (sr = 3) : yp())), r.updateQueue !== null && (r.flags |= 4), Ir(r), null);
      case 4:
        return Ho(), Dl(n, r), n === null && Su(r.stateNode.containerInfo), Ir(r), null;
      case 10:
        return jo(r.type._context), Ir(r), null;
      case 17:
        return Mn(r.type) && Ha(), Ir(r), null;
      case 19:
        if (nn(dt), h = r.memoizedState, h === null)
          return Ir(r), null;
        if (u = (r.flags & 128) !== 0, C = h.rendering, C === null)
          if (u)
            zs(h, !1);
          else {
            if (sr !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (C = Un(n), C !== null) {
                  for (r.flags |= 128, zs(h, !1), u = C.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = o, o = r.child; o !== null; )
                    h = o, n = u, h.flags &= 14680066, C = h.alternate, C === null ? (h.childLanes = 0, h.lanes = n, h.child = null, h.subtreeFlags = 0, h.memoizedProps = null, h.memoizedState = null, h.updateQueue = null, h.dependencies = null, h.stateNode = null) : (h.childLanes = C.childLanes, h.lanes = C.lanes, h.child = C.child, h.subtreeFlags = 0, h.deletions = null, h.memoizedProps = C.memoizedProps, h.memoizedState = C.memoizedState, h.updateQueue = C.updateQueue, h.type = C.type, n = C.dependencies, h.dependencies = n === null ? null : {
                      lanes: n.lanes,
                      firstContext: n.firstContext
                    }), o = o.sibling;
                  return un(dt, dt.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            h.tail !== null && Yt() > Uu && (r.flags |= 128, u = !0, zs(h, !1), r.lanes = 4194304);
          }
        else {
          if (!u)
            if (n = Un(C), n !== null) {
              if (r.flags |= 128, u = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), zs(h, !0), h.tail === null && h.tailMode === "hidden" && !C.alternate && !_n)
                return Ir(r), null;
            } else
              2 * Yt() - h.renderingStartTime > Uu && o !== 1073741824 && (r.flags |= 128, u = !0, zs(h, !1), r.lanes = 4194304);
          h.isBackwards ? (C.sibling = r.child, r.child = C) : (o = h.last, o !== null ? o.sibling = C : r.child = C, h.last = C);
        }
        return h.tail !== null ? (r = h.tail, h.rendering = r, h.tail = r.sibling, h.renderingStartTime = Yt(), r.sibling = null, o = dt.current, un(dt, u ? o & 1 | 2 : o & 1), r) : (Ir(r), null);
      case 22:
      case 23:
        return mp(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && r.mode & 1 ? ka & 1073741824 && (Ir(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Ir(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p(156, r.tag));
  }
  function up(n, r) {
    switch (Vd(r), r.tag) {
      case 1:
        return Mn(r.type) && Ha(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Ho(), nn(Hn), nn(gt), Bc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return It(r), null;
      case 13:
        if (nn(dt), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(p(340));
          Fn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return nn(dt), null;
      case 4:
        return Ho(), null;
      case 10:
        return jo(r.type._context), null;
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
  function Au(n, r) {
    var o = n.ref;
    if (o !== null)
      if (typeof o == "function")
        try {
          o(null);
        } catch (u) {
          Bn(n, r, u);
        }
      else
        o.current = null;
  }
  function Hs(n, r, o) {
    try {
      o();
    } catch (u) {
      Bn(n, r, u);
    }
  }
  var kh = !1;
  function Dh(n, r) {
    if (Ld = ja, n = xc(), Gi(n)) {
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
            var f = u.anchorOffset, h = u.focusNode;
            u = u.focusOffset;
            try {
              o.nodeType, h.nodeType;
            } catch {
              o = null;
              break e;
            }
            var C = 0, x = -1, L = -1, X = 0, Se = 0, we = n, ge = null;
            t:
              for (; ; ) {
                for (var Pe; we !== o || f !== 0 && we.nodeType !== 3 || (x = C + f), we !== h || u !== 0 && we.nodeType !== 3 || (L = C + u), we.nodeType === 3 && (C += we.nodeValue.length), (Pe = we.firstChild) !== null; )
                  ge = we, we = Pe;
                for (; ; ) {
                  if (we === n)
                    break t;
                  if (ge === o && ++X === f && (x = C), ge === h && ++Se === u && (L = C), (Pe = we.nextSibling) !== null)
                    break;
                  we = ge, ge = we.parentNode;
                }
                we = Pe;
              }
            o = x === -1 || L === -1 ? null : {
              start: x,
              end: L
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
    }, ja = !1, Be = r; Be !== null; )
      if (r = Be, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Be = n;
      else
        for (; Be !== null; ) {
          r = Be;
          try {
            var We = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (We !== null) {
                    var qe = We.memoizedProps, qn = We.memoizedState, $ = r.stateNode, F = $.getSnapshotBeforeUpdate(r.elementType === r.type ? qe : _a(r.type, qe), qn);
                    $.__reactInternalSnapshotBeforeUpdate = F;
                  }
                  break;
                case 3:
                  var Y = r.stateNode.containerInfo;
                  Y.nodeType === 1 ? Y.textContent = "" : Y.nodeType === 9 && Y.documentElement && Y.removeChild(Y.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(p(163));
              }
          } catch (Oe) {
            Bn(r, r.return, Oe);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Be = n;
            break;
          }
          Be = r.return;
        }
    return We = kh, kh = !1, We;
  }
  function $s(n, r, o) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var f = u = u.next;
      do {
        if ((f.tag & n) === n) {
          var h = f.destroy;
          f.destroy = void 0, h !== void 0 && Hs(r, o, h);
        }
        f = f.next;
      } while (f !== u);
    }
  }
  function Bs(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & n) === n) {
          var u = o.create;
          o.destroy = u();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function sp(n) {
    var r = n.ref;
    if (r !== null) {
      var o = n.stateNode;
      switch (n.tag) {
        case 5:
          n = o;
          break;
        default:
          n = o;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function cp(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, cp(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[xi], delete r[yl], delete r[Fd], delete r[ng], delete r[Ud])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Ah(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function pf(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Ah(n.return))
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
  function Mu(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6)
      n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = Mc));
    else if (u !== 4 && (n = n.child, n !== null))
      for (Mu(n, r, o), n = n.sibling; n !== null; )
        Mu(n, r, o), n = n.sibling;
  }
  function Di(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6)
      n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null))
      for (Di(n, r, o), n = n.sibling; n !== null; )
        Di(n, r, o), n = n.sibling;
  }
  var Ln = null, mr = !1;
  function Qa(n, r, o) {
    for (o = o.child; o !== null; )
      Lu(n, r, o), o = o.sibling;
  }
  function Lu(n, r, o) {
    if (ra && typeof ra.onCommitFiberUnmount == "function")
      try {
        ra.onCommitFiberUnmount(Eo, o);
      } catch {
      }
    switch (o.tag) {
      case 5:
        ur || Au(o, r);
      case 6:
        var u = Ln, f = mr;
        Ln = null, Qa(n, r, o), Ln = u, mr = f, Ln !== null && (mr ? (n = Ln, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : Ln.removeChild(o.stateNode));
        break;
      case 18:
        Ln !== null && (mr ? (n = Ln, o = o.stateNode, n.nodeType === 8 ? Mo(n.parentNode, o) : n.nodeType === 1 && Mo(n, o), _o(n)) : Mo(Ln, o.stateNode));
        break;
      case 4:
        u = Ln, f = mr, Ln = o.stateNode.containerInfo, mr = !0, Qa(n, r, o), Ln = u, mr = f;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!ur && (u = o.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          f = u = u.next;
          do {
            var h = f, C = h.destroy;
            h = h.tag, C !== void 0 && (h & 2 || h & 4) && Hs(o, r, C), f = f.next;
          } while (f !== u);
        }
        Qa(n, r, o);
        break;
      case 1:
        if (!ur && (Au(o, r), u = o.stateNode, typeof u.componentWillUnmount == "function"))
          try {
            u.props = o.memoizedProps, u.state = o.memoizedState, u.componentWillUnmount();
          } catch (x) {
            Bn(o, r, x);
          }
        Qa(n, r, o);
        break;
      case 21:
        Qa(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (ur = (u = ur) || o.memoizedState !== null, Qa(n, r, o), ur = u) : Qa(n, r, o);
        break;
      default:
        Qa(n, r, o);
    }
  }
  function to(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new Oh()), r.forEach(function(u) {
        var f = hg.bind(null, n, u);
        o.has(u) || (o.add(u), u.then(f, f));
      });
    }
  }
  function vi(n, r) {
    var o = r.deletions;
    if (o !== null)
      for (var u = 0; u < o.length; u++) {
        var f = o[u];
        try {
          var h = n, C = r, x = C;
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
            throw Error(p(160));
          Lu(h, C, f), Ln = null, mr = !1;
          var L = f.alternate;
          L !== null && (L.return = null), f.return = null;
        } catch (X) {
          Bn(f, r, X);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Mh(r, n), r = r.sibling;
  }
  function Mh(n, r) {
    var o = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (vi(r, n), Ai(n), u & 4) {
          try {
            $s(3, n, n.return), Bs(3, n);
          } catch (qe) {
            Bn(n, n.return, qe);
          }
          try {
            $s(5, n, n.return);
          } catch (qe) {
            Bn(n, n.return, qe);
          }
        }
        break;
      case 1:
        vi(r, n), Ai(n), u & 512 && o !== null && Au(o, o.return);
        break;
      case 5:
        if (vi(r, n), Ai(n), u & 512 && o !== null && Au(o, o.return), n.flags & 32) {
          var f = n.stateNode;
          try {
            Ea(f, "");
          } catch (qe) {
            Bn(n, n.return, qe);
          }
        }
        if (u & 4 && (f = n.stateNode, f != null)) {
          var h = n.memoizedProps, C = o !== null ? o.memoizedProps : h, x = n.type, L = n.updateQueue;
          if (n.updateQueue = null, L !== null)
            try {
              x === "input" && h.type === "radio" && h.name != null && Pt(f, h), Nn(x, C);
              var X = Nn(x, h);
              for (C = 0; C < L.length; C += 2) {
                var Se = L[C], we = L[C + 1];
                Se === "style" ? tn(f, we) : Se === "dangerouslySetInnerHTML" ? gi(f, we) : Se === "children" ? Ea(f, we) : ae(f, Se, we, X);
              }
              switch (x) {
                case "input":
                  ct(f, h);
                  break;
                case "textarea":
                  Je(f, h);
                  break;
                case "select":
                  var ge = f._wrapperState.wasMultiple;
                  f._wrapperState.wasMultiple = !!h.multiple;
                  var Pe = h.value;
                  Pe != null ? Gn(f, !!h.multiple, Pe, !1) : ge !== !!h.multiple && (h.defaultValue != null ? Gn(f, !!h.multiple, h.defaultValue, !0) : Gn(f, !!h.multiple, h.multiple ? [] : "", !1));
              }
              f[yl] = h;
            } catch (qe) {
              Bn(n, n.return, qe);
            }
        }
        break;
      case 6:
        if (vi(r, n), Ai(n), u & 4) {
          if (n.stateNode === null)
            throw Error(p(162));
          f = n.stateNode, h = n.memoizedProps;
          try {
            f.nodeValue = h;
          } catch (qe) {
            Bn(n, n.return, qe);
          }
        }
        break;
      case 3:
        if (vi(r, n), Ai(n), u & 4 && o !== null && o.memoizedState.isDehydrated)
          try {
            _o(r.containerInfo);
          } catch (qe) {
            Bn(n, n.return, qe);
          }
        break;
      case 4:
        vi(r, n), Ai(n);
        break;
      case 13:
        vi(r, n), Ai(n), f = n.child, f.flags & 8192 && (h = f.memoizedState !== null, f.stateNode.isHidden = h, !h || f.alternate !== null && f.alternate.memoizedState !== null || (pp = Yt())), u & 4 && to(n);
        break;
      case 22:
        if (Se = o !== null && o.memoizedState !== null, n.mode & 1 ? (ur = (X = ur) || Se, vi(r, n), ur = X) : vi(r, n), Ai(n), u & 8192) {
          if (X = n.memoizedState !== null, (n.stateNode.isHidden = X) && !Se && n.mode & 1)
            for (Be = n, Se = n.child; Se !== null; ) {
              for (we = Be = Se; Be !== null; ) {
                switch (ge = Be, Pe = ge.child, ge.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    $s(4, ge, ge.return);
                    break;
                  case 1:
                    Au(ge, ge.return);
                    var We = ge.stateNode;
                    if (typeof We.componentWillUnmount == "function") {
                      u = ge, o = ge.return;
                      try {
                        r = u, We.props = r.memoizedProps, We.state = r.memoizedState, We.componentWillUnmount();
                      } catch (qe) {
                        Bn(u, o, qe);
                      }
                    }
                    break;
                  case 5:
                    Au(ge, ge.return);
                    break;
                  case 22:
                    if (ge.memoizedState !== null) {
                      fp(we);
                      continue;
                    }
                }
                Pe !== null ? (Pe.return = ge, Be = Pe) : fp(we);
              }
              Se = Se.sibling;
            }
          e:
            for (Se = null, we = n; ; ) {
              if (we.tag === 5) {
                if (Se === null) {
                  Se = we;
                  try {
                    f = we.stateNode, X ? (h = f.style, typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none") : (x = we.stateNode, L = we.memoizedProps.style, C = L != null && L.hasOwnProperty("display") ? L.display : null, x.style.display = At("display", C));
                  } catch (qe) {
                    Bn(n, n.return, qe);
                  }
                }
              } else if (we.tag === 6) {
                if (Se === null)
                  try {
                    we.stateNode.nodeValue = X ? "" : we.memoizedProps;
                  } catch (qe) {
                    Bn(n, n.return, qe);
                  }
              } else if ((we.tag !== 22 && we.tag !== 23 || we.memoizedState === null || we === n) && we.child !== null) {
                we.child.return = we, we = we.child;
                continue;
              }
              if (we === n)
                break e;
              for (; we.sibling === null; ) {
                if (we.return === null || we.return === n)
                  break e;
                Se === we && (Se = null), we = we.return;
              }
              Se === we && (Se = null), we.sibling.return = we.return, we = we.sibling;
            }
        }
        break;
      case 19:
        vi(r, n), Ai(n), u & 4 && to(n);
        break;
      case 21:
        break;
      default:
        vi(r, n), Ai(n);
    }
  }
  function Ai(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (Ah(o)) {
              var u = o;
              break e;
            }
            o = o.return;
          }
          throw Error(p(160));
        }
        switch (u.tag) {
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (Ea(f, ""), u.flags &= -33);
            var h = pf(n);
            Di(n, h, f);
            break;
          case 3:
          case 4:
            var C = u.stateNode.containerInfo, x = pf(n);
            Mu(n, x, C);
            break;
          default:
            throw Error(p(161));
        }
      } catch (L) {
        Bn(n, n.return, L);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Lh(n, r, o) {
    Be = n, Nu(n);
  }
  function Nu(n, r, o) {
    for (var u = (n.mode & 1) !== 0; Be !== null; ) {
      var f = Be, h = f.child;
      if (f.tag === 22 && u) {
        var C = f.memoizedState !== null || Vs;
        if (!C) {
          var x = f.alternate, L = x !== null && x.memoizedState !== null || ur;
          x = Vs;
          var X = ur;
          if (Vs = C, (ur = L) && !X)
            for (Be = f; Be !== null; )
              C = Be, L = C.child, C.tag === 22 && C.memoizedState !== null ? Ih(f) : L !== null ? (L.return = C, Be = L) : Ih(f);
          for (; h !== null; )
            Be = h, Nu(h), h = h.sibling;
          Be = f, Vs = x, ur = X;
        }
        Nh(n);
      } else
        f.subtreeFlags & 8772 && h !== null ? (h.return = f, Be = h) : Nh(n);
    }
  }
  function Nh(n) {
    for (; Be !== null; ) {
      var r = Be;
      if (r.flags & 8772) {
        var o = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                ur || Bs(5, r);
                break;
              case 1:
                var u = r.stateNode;
                if (r.flags & 4 && !ur)
                  if (o === null)
                    u.componentDidMount();
                  else {
                    var f = r.elementType === r.type ? o.memoizedProps : _a(r.type, o.memoizedProps);
                    u.componentDidUpdate(f, o.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
                  }
                var h = r.updateQueue;
                h !== null && Sl(r, h, u);
                break;
              case 3:
                var C = r.updateQueue;
                if (C !== null) {
                  if (o = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        o = r.child.stateNode;
                        break;
                      case 1:
                        o = r.child.stateNode;
                    }
                  Sl(r, C, o);
                }
                break;
              case 5:
                var x = r.stateNode;
                if (o === null && r.flags & 4) {
                  o = x;
                  var L = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      L.autoFocus && o.focus();
                      break;
                    case "img":
                      L.src && (o.src = L.src);
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
                if (r.memoizedState === null) {
                  var X = r.alternate;
                  if (X !== null) {
                    var Se = X.memoizedState;
                    if (Se !== null) {
                      var we = Se.dehydrated;
                      we !== null && _o(we);
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
                throw Error(p(163));
            }
          ur || r.flags & 512 && sp(r);
        } catch (ge) {
          Bn(r, r.return, ge);
        }
      }
      if (r === n) {
        Be = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, Be = o;
        break;
      }
      Be = r.return;
    }
  }
  function fp(n) {
    for (; Be !== null; ) {
      var r = Be;
      if (r === n) {
        Be = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, Be = o;
        break;
      }
      Be = r.return;
    }
  }
  function Ih(n) {
    for (; Be !== null; ) {
      var r = Be;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              Bs(4, r);
            } catch (L) {
              Bn(r, o, L);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var f = r.return;
              try {
                u.componentDidMount();
              } catch (L) {
                Bn(r, f, L);
              }
            }
            var h = r.return;
            try {
              sp(r);
            } catch (L) {
              Bn(r, h, L);
            }
            break;
          case 5:
            var C = r.return;
            try {
              sp(r);
            } catch (L) {
              Bn(r, C, L);
            }
        }
      } catch (L) {
        Bn(r, r.return, L);
      }
      if (r === n) {
        Be = null;
        break;
      }
      var x = r.sibling;
      if (x !== null) {
        x.return = r.return, Be = x;
        break;
      }
      Be = r.return;
    }
  }
  var vf = Math.ceil, Ws = ee.ReactCurrentDispatcher, dp = ee.ReactCurrentOwner, Fr = ee.ReactCurrentBatchConfig, Ut = 0, jn = null, $n = null, yr = 0, ka = 0, Iu = kt(0), sr = 0, Gs = null, no = 0, hf = 0, Fu = 0, Al = null, Wr = null, pp = 0, Uu = 1 / 0, ro = null, mf = !1, Ml = null, Mi = null, Go = !1, Yo = null, yf = 0, ju = 0, gf = null, Ll = -1, Nl = 0;
  function Ur() {
    return Ut & 6 ? Yt() : Ll !== -1 ? Ll : Ll = Yt();
  }
  function nr(n) {
    return n.mode & 1 ? Ut & 2 && yr !== 0 ? yr & -yr : jc.transition !== null ? (Nl === 0 && (Nl = iu()), Nl) : (n = Zt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : vs(n.type)), n) : 1;
  }
  function jr(n, r, o, u) {
    if (50 < ju)
      throw ju = 0, gf = null, Error(p(185));
    Vi(n, o, u), (!(Ut & 2) || n !== jn) && (n === jn && (!(Ut & 2) && (hf |= o), sr === 4 && qa(n, yr)), Pr(n, u), o === 1 && Ut === 0 && !(r.mode & 1) && (Uu = Yt() + 500, vr && ua()));
  }
  function Pr(n, r) {
    var o = n.callbackNode;
    wo(n, r);
    var u = $r(n, n === jn ? yr : 0);
    if (u === 0)
      o !== null && Er(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (o != null && Er(o), r === 1)
        n.tag === 0 ? Pd(Fh.bind(null, n)) : jd(Fh.bind(null, n)), Id(function() {
          !(Ut & 6) && ua();
        }), o = null;
      else {
        switch (lu(u)) {
          case 1:
            o = oi;
            break;
          case 4:
            o = Lt;
            break;
          case 16:
            o = wi;
            break;
          case 536870912:
            o = ru;
            break;
          default:
            o = wi;
        }
        o = Sp(o, Pu.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function Pu(n, r) {
    if (Ll = -1, Nl = 0, Ut & 6)
      throw Error(p(327));
    var o = n.callbackNode;
    if (Vu() && n.callbackNode !== o)
      return null;
    var u = $r(n, n === jn ? yr : 0);
    if (u === 0)
      return null;
    if (u & 30 || u & n.expiredLanes || r)
      r = Ef(n, u);
    else {
      r = u;
      var f = Ut;
      Ut |= 2;
      var h = Sf();
      (jn !== n || yr !== r) && (ro = null, Uu = Yt() + 500, Il(n, r));
      do
        try {
          fg();
          break;
        } catch (x) {
          Uh(n, x);
        }
      while (1);
      Wd(), Ws.current = h, Ut = f, $n !== null ? r = 0 : (jn = null, yr = 0, r = sr);
    }
    if (r !== 0) {
      if (r === 2 && (f = bo(n), f !== 0 && (u = f, r = vp(n, f))), r === 1)
        throw o = Gs, Il(n, 0), qa(n, u), Pr(n, Yt()), o;
      if (r === 6)
        qa(n, u);
      else {
        if (f = n.current.alternate, !(u & 30) && !hp(f) && (r = Ef(n, u), r === 2 && (h = bo(n), h !== 0 && (u = h, r = vp(n, h))), r === 1))
          throw o = Gs, Il(n, 0), qa(n, u), Pr(n, Yt()), o;
        switch (n.finishedWork = f, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            Fl(n, Wr, ro);
            break;
          case 3:
            if (qa(n, u), (u & 130023424) === u && (r = pp + 500 - Yt(), 10 < r)) {
              if ($r(n, 0) !== 0)
                break;
              if (f = n.suspendedLanes, (f & u) !== u) {
                Ur(), n.pingedLanes |= n.suspendedLanes & f;
                break;
              }
              n.timeoutHandle = ml(Fl.bind(null, n, Wr, ro), r);
              break;
            }
            Fl(n, Wr, ro);
            break;
          case 4:
            if (qa(n, u), (u & 4194240) === u)
              break;
            for (r = n.eventTimes, f = -1; 0 < u; ) {
              var C = 31 - Hr(u);
              h = 1 << C, C = r[C], C > f && (f = C), u &= ~h;
            }
            if (u = f, u = Yt() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * vf(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = ml(Fl.bind(null, n, Wr, ro), u);
              break;
            }
            Fl(n, Wr, ro);
            break;
          case 5:
            Fl(n, Wr, ro);
            break;
          default:
            throw Error(p(329));
        }
      }
    }
    return Pr(n, Yt()), n.callbackNode === o ? Pu.bind(null, n) : null;
  }
  function vp(n, r) {
    var o = Al;
    return n.current.memoizedState.isDehydrated && (Il(n, r).flags |= 256), n = Ef(n, r), n !== 2 && (r = Wr, Wr = o, r !== null && Ys(r)), n;
  }
  function Ys(n) {
    Wr === null ? Wr = n : Wr.push.apply(Wr, n);
  }
  function hp(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null))
          for (var u = 0; u < o.length; u++) {
            var f = o[u], h = f.getSnapshot;
            f = f.value;
            try {
              if (!Pa(h(), f))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (o = r.child, r.subtreeFlags & 16384 && o !== null)
        o.return = r, r = o;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function qa(n, r) {
    for (r &= ~Fu, r &= ~hf, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - Hr(r), u = 1 << o;
      n[o] = -1, r &= ~u;
    }
  }
  function Fh(n) {
    if (Ut & 6)
      throw Error(p(327));
    Vu();
    var r = $r(n, 0);
    if (!(r & 1))
      return Pr(n, Yt()), null;
    var o = Ef(n, r);
    if (n.tag !== 0 && o === 2) {
      var u = bo(n);
      u !== 0 && (r = u, o = vp(n, u));
    }
    if (o === 1)
      throw o = Gs, Il(n, 0), qa(n, r), Pr(n, Yt()), o;
    if (o === 6)
      throw Error(p(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Fl(n, Wr, ro), Pr(n, Yt()), null;
  }
  function zu(n, r) {
    var o = Ut;
    Ut |= 1;
    try {
      return n(r);
    } finally {
      Ut = o, Ut === 0 && (Uu = Yt() + 500, vr && ua());
    }
  }
  function Qo(n) {
    Yo !== null && Yo.tag === 0 && !(Ut & 6) && Vu();
    var r = Ut;
    Ut |= 1;
    var o = Fr.transition, u = Zt;
    try {
      if (Fr.transition = null, Zt = 1, n)
        return n();
    } finally {
      Zt = u, Fr.transition = o, Ut = r, !(Ut & 6) && ua();
    }
  }
  function mp() {
    ka = Iu.current, nn(Iu);
  }
  function Il(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, ch(o)), $n !== null)
      for (o = $n.return; o !== null; ) {
        var u = o;
        switch (Vd(u), u.tag) {
          case 1:
            u = u.type.childContextTypes, u != null && Ha();
            break;
          case 3:
            Ho(), nn(Hn), nn(gt), Bc();
            break;
          case 5:
            It(u);
            break;
          case 4:
            Ho();
            break;
          case 13:
            nn(dt);
            break;
          case 19:
            nn(dt);
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
    if (jn = n, $n = n = qo(n.current, null), yr = ka = r, sr = 0, Gs = null, Fu = hf = no = 0, Wr = Al = null, Tr !== null) {
      for (r = 0; r < Tr.length; r++)
        if (o = Tr[r], u = o.interleaved, u !== null) {
          o.interleaved = null;
          var f = u.next, h = o.pending;
          if (h !== null) {
            var C = h.next;
            h.next = f, u.next = C;
          }
          o.pending = u;
        }
      Tr = null;
    }
    return n;
  }
  function Uh(n, r) {
    do {
      var o = $n;
      try {
        if (Wd(), Wc.current = uf, pt) {
          for (var u = On.memoizedState; u !== null; ) {
            var f = u.queue;
            f !== null && (f.pending = null), u = u.next;
          }
          pt = !1;
        }
        if (Cl = 0, $t = se = On = null, ki = !1, Oa = 0, dp.current = null, o === null || o.return === null) {
          sr = 1, Gs = r, $n = null;
          break;
        }
        e: {
          var h = n, C = o.return, x = o, L = r;
          if (r = yr, x.flags |= 32768, L !== null && typeof L == "object" && typeof L.then == "function") {
            var X = L, Se = x, we = Se.tag;
            if (!(Se.mode & 1) && (we === 0 || we === 11 || we === 15)) {
              var ge = Se.alternate;
              ge ? (Se.updateQueue = ge.updateQueue, Se.memoizedState = ge.memoizedState, Se.lanes = ge.lanes) : (Se.updateQueue = null, Se.memoizedState = null);
            }
            var Pe = ep(C);
            if (Pe !== null) {
              Pe.flags &= -257, tp(Pe, C, x, h, r), Pe.mode & 1 && Rh(h, X, r), r = Pe, L = X;
              var We = r.updateQueue;
              if (We === null) {
                var qe = /* @__PURE__ */ new Set();
                qe.add(L), r.updateQueue = qe;
              } else
                We.add(L);
              break e;
            } else {
              if (!(r & 1)) {
                Rh(h, X, r), yp();
                break e;
              }
              L = Error(p(426));
            }
          } else if (_n && x.mode & 1) {
            var qn = ep(C);
            if (qn !== null) {
              !(qn.flags & 65536) && (qn.flags |= 256), tp(qn, C, x, h, r), $d(Ou(L, x));
              break e;
            }
          }
          h = L = Ou(L, x), sr !== 4 && (sr = 2), Al === null ? Al = [h] : Al.push(h), h = C;
          do {
            switch (h.tag) {
              case 3:
                h.flags |= 65536, r &= -r, h.lanes |= r;
                var $ = bh(h, L, r);
                Qd(h, $);
                break e;
              case 1:
                x = L;
                var F = h.type, Y = h.stateNode;
                if (!(h.flags & 128) && (typeof F.getDerivedStateFromError == "function" || Y !== null && typeof Y.componentDidCatch == "function" && (Mi === null || !Mi.has(Y)))) {
                  h.flags |= 65536, r &= -r, h.lanes |= r;
                  var Oe = js(h, x, r);
                  Qd(h, Oe);
                  break e;
                }
            }
            h = h.return;
          } while (h !== null);
        }
        gp(o);
      } catch (Xe) {
        r = Xe, $n === o && o !== null && ($n = o = o.return);
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
    (sr === 0 || sr === 3 || sr === 2) && (sr = 4), jn === null || !(no & 268435455) && !(hf & 268435455) || qa(jn, yr);
  }
  function Ef(n, r) {
    var o = Ut;
    Ut |= 2;
    var u = Sf();
    (jn !== n || yr !== r) && (ro = null, Il(n, r));
    do
      try {
        cg();
        break;
      } catch (f) {
        Uh(n, f);
      }
    while (1);
    if (Wd(), Ut = o, Ws.current = u, $n !== null)
      throw Error(p(261));
    return jn = null, yr = 0, sr;
  }
  function cg() {
    for (; $n !== null; )
      jh($n);
  }
  function fg() {
    for (; $n !== null && !Ti(); )
      jh($n);
  }
  function jh(n) {
    var r = zh(n.alternate, n, ka);
    n.memoizedProps = n.pendingProps, r === null ? gp(n) : $n = r, dp.current = null;
  }
  function gp(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = up(o, r), o !== null) {
          o.flags &= 32767, $n = o;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          sr = 6, $n = null;
          return;
        }
      } else if (o = sg(o, r, ka), o !== null) {
        $n = o;
        return;
      }
      if (r = r.sibling, r !== null) {
        $n = r;
        return;
      }
      $n = r = n;
    } while (r !== null);
    sr === 0 && (sr = 5);
  }
  function Fl(n, r, o) {
    var u = Zt, f = Fr.transition;
    try {
      Fr.transition = null, Zt = 1, dg(n, r, o, u);
    } finally {
      Fr.transition = f, Zt = u;
    }
    return null;
  }
  function dg(n, r, o, u) {
    do
      Vu();
    while (Yo !== null);
    if (Ut & 6)
      throw Error(p(327));
    o = n.finishedWork;
    var f = n.finishedLanes;
    if (o === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current)
      throw Error(p(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var h = o.lanes | o.childLanes;
    if (vd(n, h), n === jn && ($n = jn = null, yr = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || Go || (Go = !0, Sp(wi, function() {
      return Vu(), null;
    })), h = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || h) {
      h = Fr.transition, Fr.transition = null;
      var C = Zt;
      Zt = 1;
      var x = Ut;
      Ut |= 4, dp.current = null, Dh(n, o), Mh(o, n), _c(hl), ja = !!Ld, hl = Ld = null, n.current = o, Lh(o), nu(), Ut = x, Zt = C, Fr.transition = h;
    } else
      n.current = o;
    if (Go && (Go = !1, Yo = n, yf = f), h = n.pendingLanes, h === 0 && (Mi = null), fs(o.stateNode), Pr(n, Yt()), r !== null)
      for (u = n.onRecoverableError, o = 0; o < r.length; o++)
        f = r[o], u(f.value, {
          componentStack: f.stack,
          digest: f.digest
        });
    if (mf)
      throw mf = !1, n = Ml, Ml = null, n;
    return yf & 1 && n.tag !== 0 && Vu(), h = n.pendingLanes, h & 1 ? n === gf ? ju++ : (ju = 0, gf = n) : ju = 0, ua(), null;
  }
  function Vu() {
    if (Yo !== null) {
      var n = lu(yf), r = Fr.transition, o = Zt;
      try {
        if (Fr.transition = null, Zt = 16 > n ? 16 : n, Yo === null)
          var u = !1;
        else {
          if (n = Yo, Yo = null, yf = 0, Ut & 6)
            throw Error(p(331));
          var f = Ut;
          for (Ut |= 4, Be = n.current; Be !== null; ) {
            var h = Be, C = h.child;
            if (Be.flags & 16) {
              var x = h.deletions;
              if (x !== null) {
                for (var L = 0; L < x.length; L++) {
                  var X = x[L];
                  for (Be = X; Be !== null; ) {
                    var Se = Be;
                    switch (Se.tag) {
                      case 0:
                      case 11:
                      case 15:
                        $s(8, Se, h);
                    }
                    var we = Se.child;
                    if (we !== null)
                      we.return = Se, Be = we;
                    else
                      for (; Be !== null; ) {
                        Se = Be;
                        var ge = Se.sibling, Pe = Se.return;
                        if (cp(Se), Se === X) {
                          Be = null;
                          break;
                        }
                        if (ge !== null) {
                          ge.return = Pe, Be = ge;
                          break;
                        }
                        Be = Pe;
                      }
                  }
                }
                var We = h.alternate;
                if (We !== null) {
                  var qe = We.child;
                  if (qe !== null) {
                    We.child = null;
                    do {
                      var qn = qe.sibling;
                      qe.sibling = null, qe = qn;
                    } while (qe !== null);
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
                  var $ = h.sibling;
                  if ($ !== null) {
                    $.return = h.return, Be = $;
                    break e;
                  }
                  Be = h.return;
                }
          }
          var F = n.current;
          for (Be = F; Be !== null; ) {
            C = Be;
            var Y = C.child;
            if (C.subtreeFlags & 2064 && Y !== null)
              Y.return = C, Be = Y;
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
                    } catch (Xe) {
                      Bn(x, x.return, Xe);
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
          if (Ut = f, ua(), ra && typeof ra.onPostCommitFiberRoot == "function")
            try {
              ra.onPostCommitFiberRoot(Eo, n);
            } catch {
            }
          u = !0;
        }
        return u;
      } finally {
        Zt = o, Fr.transition = r;
      }
    }
    return !1;
  }
  function Ph(n, r, o) {
    r = Ou(o, r), r = bh(n, r, 1), n = zo(n, r, 1), r = Ur(), n !== null && (Vi(n, 1, r), Pr(n, r));
  }
  function Bn(n, r, o) {
    if (n.tag === 3)
      Ph(n, n, o);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Ph(r, n, o);
          break;
        } else if (r.tag === 1) {
          var u = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Mi === null || !Mi.has(u))) {
            n = Ou(o, n), n = js(r, n, 1), r = zo(r, n, 1), n = Ur(), r !== null && (Vi(r, 1, n), Pr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function pg(n, r, o) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = Ur(), n.pingedLanes |= n.suspendedLanes & o, jn === n && (yr & o) === o && (sr === 4 || sr === 3 && (yr & 130023424) === yr && 500 > Yt() - pp ? Il(n, 0) : Fu |= o), Pr(n, r);
  }
  function Cf(n, r) {
    r === 0 && (n.mode & 1 ? (r = Co, Co <<= 1, !(Co & 130023424) && (Co = 4194304)) : r = 1);
    var o = Ur();
    n = Xi(n, r), n !== null && (Vi(n, r, o), Pr(n, o));
  }
  function vg(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), Cf(n, o);
  }
  function hg(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var u = n.stateNode, f = n.memoizedState;
        f !== null && (o = f.retryLane);
        break;
      case 19:
        u = n.stateNode;
        break;
      default:
        throw Error(p(314));
    }
    u !== null && u.delete(r), Cf(n, o);
  }
  var zh;
  zh = function(n, r, o) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Hn.current)
        tr = !0;
      else {
        if (!(n.lanes & o) && !(r.flags & 128))
          return tr = !1, eo(n, r, o);
        tr = !!(n.flags & 131072);
      }
    else
      tr = !1, _n && r.flags & 1048576 && zd(r, Cu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Nr(n, r), n = r.pendingProps;
        var f = Va(r, gt.current);
        Le(r, o), f = $o(null, r, u, n, f, o);
        var h = bl();
        return r.flags |= 1, typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Mn(u) ? (h = !0, Lc(r)) : h = !1, r.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, Yd(r), f.updater = Vc, r.stateNode = f, f._reactInternals = r, Hc(r, u, n, o), r = xh(null, r, u, !0, h, o)) : (r.tag = 0, _n && h && Nc(r), or(null, r, f, o), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Nr(n, r), n = r.pendingProps, f = u._init, u = f(u._payload), r.type = u, f = r.tag = yg(u), n = _a(u, n), f) {
            case 0:
              r = ku(null, r, u, n, o);
              break e;
            case 1:
              r = np(null, r, u, n, o);
              break e;
            case 11:
              r = Wo(null, r, u, n, o);
              break e;
            case 14:
              r = cf(null, r, u, _a(u.type, n), o);
              break e;
          }
          throw Error(p(306, u, ""));
        }
        return r;
      case 0:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : _a(u, f), ku(n, r, u, f, o);
      case 1:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : _a(u, f), np(n, r, u, f, o);
      case 3:
        e: {
          if (_h(r), n === null)
            throw Error(p(387));
          u = r.pendingProps, h = r.memoizedState, f = h.element, ir(n, r), Vo(r, u, null, o);
          var C = r.memoizedState;
          if (u = C.element, h.isDehydrated)
            if (h = {
              element: u,
              isDehydrated: !1,
              cache: C.cache,
              pendingSuspenseBoundaries: C.pendingSuspenseBoundaries,
              transitions: C.transitions
            }, r.updateQueue.baseState = h, r.memoizedState = h, r.flags & 256) {
              f = Ou(Error(p(423)), r), r = ff(n, r, u, o, f);
              break e;
            } else if (u !== f) {
              f = Ou(Error(p(424)), r), r = ff(n, r, u, o, f);
              break e;
            } else
              for (fa = di(r.stateNode.containerInfo.firstChild), xa = r, _n = !0, Ba = null, o = Th(r, null, u, o), r.child = o; o; )
                o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (Fn(), u === f) {
              r = wr(n, r, o);
              break e;
            }
            or(n, r, u, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return st(r), n === null && Fc(r), u = r.type, f = r.pendingProps, h = n !== null ? n.memoizedProps : null, C = f.children, xs(u, f) ? C = null : h !== null && xs(u, h) && (r.flags |= 32), Dt(n, r), or(n, r, C, o), r.child;
      case 6:
        return n === null && Fc(r), null;
      case 13:
        return ap(n, r, o);
      case 4:
        return Kd(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = wu(r, null, u, o) : or(n, r, u, o), r.child;
      case 11:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : _a(u, f), Wo(n, r, u, f, o);
      case 7:
        return or(n, r, r.pendingProps, o), r.child;
      case 8:
        return or(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return or(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (u = r.type._context, f = r.pendingProps, h = r.memoizedProps, C = f.value, un(Oi, u._currentValue), u._currentValue = C, h !== null)
            if (Pa(h.value, C)) {
              if (h.children === f.children && !Hn.current) {
                r = wr(n, r, o);
                break e;
              }
            } else
              for (h = r.child, h !== null && (h.return = r); h !== null; ) {
                var x = h.dependencies;
                if (x !== null) {
                  C = h.child;
                  for (var L = x.firstContext; L !== null; ) {
                    if (L.context === u) {
                      if (h.tag === 1) {
                        L = Zi(-1, o & -o), L.tag = 2;
                        var X = h.updateQueue;
                        if (X !== null) {
                          X = X.shared;
                          var Se = X.pending;
                          Se === null ? L.next = L : (L.next = Se.next, Se.next = L), X.pending = L;
                        }
                      }
                      h.lanes |= o, L = h.alternate, L !== null && (L.lanes |= o), hr(h.return, o, r), x.lanes |= o;
                      break;
                    }
                    L = L.next;
                  }
                } else if (h.tag === 10)
                  C = h.type === r.type ? null : h.child;
                else if (h.tag === 18) {
                  if (C = h.return, C === null)
                    throw Error(p(341));
                  C.lanes |= o, x = C.alternate, x !== null && (x.lanes |= o), hr(C, o, r), C = h.sibling;
                } else
                  C = h.child;
                if (C !== null)
                  C.return = h;
                else
                  for (C = h; C !== null; ) {
                    if (C === r) {
                      C = null;
                      break;
                    }
                    if (h = C.sibling, h !== null) {
                      h.return = C.return, C = h;
                      break;
                    }
                    C = C.return;
                  }
                h = C;
              }
          or(n, r, f.children, o), r = r.child;
        }
        return r;
      case 9:
        return f = r.type, u = r.pendingProps.children, Le(r, o), f = Qn(f), u = u(f), r.flags |= 1, or(n, r, u, o), r.child;
      case 14:
        return u = r.type, f = _a(u, r.pendingProps), f = _a(u.type, f), cf(n, r, u, f, o);
      case 15:
        return va(n, r, r.type, r.pendingProps, o);
      case 17:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : _a(u, f), Nr(n, r), r.tag = 1, Mn(u) ? (n = !0, Lc(r)) : n = !1, Le(r, o), gh(r, u, f), Hc(r, u, f, o), xh(null, r, u, !0, n, o);
      case 19:
        return lp(n, r, o);
      case 22:
        return Ol(n, r, o);
    }
    throw Error(p(156, r.tag));
  };
  function Sp(n, r) {
    return wn(n, r);
  }
  function mg(n, r, o, u) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ka(n, r, o, u) {
    return new mg(n, r, o, u);
  }
  function Ep(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function yg(n) {
    if (typeof n == "function")
      return Ep(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Et)
        return 11;
      if (n === Te)
        return 14;
    }
    return 2;
  }
  function qo(n, r) {
    var o = n.alternate;
    return o === null ? (o = Ka(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : {
      lanes: r.lanes,
      firstContext: r.firstContext
    }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function Tf(n, r, o, u, f, h) {
    var C = 2;
    if (u = n, typeof n == "function")
      Ep(n) && (C = 1);
    else if (typeof n == "string")
      C = 5;
    else
      e:
        switch (n) {
          case _e:
            return Ul(o.children, f, h, r);
          case Qe:
            C = 8, f |= 8;
            break;
          case lt:
            return n = Ka(12, o, r, f | 2), n.elementType = lt, n.lanes = h, n;
          case Fe:
            return n = Ka(13, o, r, f), n.elementType = Fe, n.lanes = h, n;
          case Ee:
            return n = Ka(19, o, r, f), n.elementType = Ee, n.lanes = h, n;
          case pe:
            return Qs(o, f, h, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case vt:
                  C = 10;
                  break e;
                case mt:
                  C = 9;
                  break e;
                case Et:
                  C = 11;
                  break e;
                case Te:
                  C = 14;
                  break e;
                case Re:
                  C = 16, u = null;
                  break e;
              }
            throw Error(p(130, n == null ? n : typeof n, ""));
        }
    return r = Ka(C, o, r, f), r.elementType = n, r.type = u, r.lanes = h, r;
  }
  function Ul(n, r, o, u) {
    return n = Ka(7, n, u, r), n.lanes = o, n;
  }
  function Qs(n, r, o, u) {
    return n = Ka(22, n, u, r), n.elementType = pe, n.lanes = o, n.stateNode = {
      isHidden: !1
    }, n;
  }
  function qs(n, r, o) {
    return n = Ka(6, n, null, r), n.lanes = o, n;
  }
  function jl(n, r, o) {
    return r = Ka(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = {
      containerInfo: n.containerInfo,
      pendingChildren: null,
      implementation: n.implementation
    }, r;
  }
  function gg(n, r, o, u, f) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ou(0), this.expirationTimes = ou(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ou(0), this.identifierPrefix = u, this.onRecoverableError = f, this.mutableSourceEagerHydrationData = null;
  }
  function wf(n, r, o, u, f, h, C, x, L) {
    return n = new gg(n, r, o, x, L), r === 1 ? (r = 1, h === !0 && (r |= 8)) : r = 0, h = Ka(3, null, null, r), n.current = h, h.stateNode = n, h.memoizedState = {
      element: u,
      isDehydrated: o,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }, Yd(h), n;
  }
  function Vh(n, r, o) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: me,
      key: u == null ? null : "" + u,
      children: n,
      containerInfo: r,
      implementation: o
    };
  }
  function Cp(n) {
    if (!n)
      return _i;
    n = n._reactInternals;
    e: {
      if (_t(n) !== n || n.tag !== 1)
        throw Error(p(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Mn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(p(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (Mn(o))
        return ks(n, o, r);
    }
    return r;
  }
  function Hh(n, r, o, u, f, h, C, x, L) {
    return n = wf(o, u, !0, n, f, h, C, x, L), n.context = Cp(null), o = n.current, u = Ur(), f = nr(o), h = Zi(u, f), h.callback = r ?? null, zo(o, h, f), n.current.lanes = f, Vi(n, f, u), Pr(n, u), n;
  }
  function Ks(n, r, o, u) {
    var f = r.current, h = Ur(), C = nr(f);
    return o = Cp(o), r.context === null ? r.context = o : r.pendingContext = o, r = Zi(h, C), r.payload = {
      element: n
    }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = zo(f, r, C), n !== null && (jr(n, f, C, h), zc(n, f, C)), C;
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
  function $h(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function Tp(n, r) {
    $h(n, r), (n = n.alternate) && $h(n, r);
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
    var r = this._internalRoot;
    if (r === null)
      throw Error(p(409));
    Ks(n, r, null, null);
  }, ao.prototype.unmount = Rf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Qo(function() {
        Ks(null, n, null, null);
      }), r[qi] = null;
    }
  };
  function ao(n) {
    this._internalRoot = n;
  }
  ao.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = su();
      n = {
        blockedOn: null,
        target: n,
        priority: r
      };
      for (var o = 0; o < ln.length && r !== 0 && r < ln[o].priority; o++)
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
  function Sg(n, r, o, u, f) {
    if (f) {
      if (typeof u == "function") {
        var h = u;
        u = function() {
          var X = bf(C);
          h.call(X);
        };
      }
      var C = Hh(r, u, n, 0, null, !1, !1, "", Wh);
      return n._reactRootContainer = C, n[qi] = C.current, Su(n.nodeType === 8 ? n.parentNode : n), Qo(), C;
    }
    for (; f = n.lastChild; )
      n.removeChild(f);
    if (typeof u == "function") {
      var x = u;
      u = function() {
        var X = bf(L);
        x.call(X);
      };
    }
    var L = wf(n, 0, !1, null, null, !1, !1, "", Wh);
    return n._reactRootContainer = L, n[qi] = L.current, Su(n.nodeType === 8 ? n.parentNode : n), Qo(function() {
      Ks(r, L, o, u);
    }), L;
  }
  function _f(n, r, o, u, f) {
    var h = o._reactRootContainer;
    if (h) {
      var C = h;
      if (typeof f == "function") {
        var x = f;
        f = function() {
          var L = bf(C);
          x.call(L);
        };
      }
      Ks(r, C, n, f);
    } else
      C = Sg(o, r, n, f, u);
    return bf(C);
  }
  ul = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = li(r.pendingLanes);
          o !== 0 && (bi(r, o | 1), Pr(r, Yt()), !(Ut & 6) && (Uu = Yt() + 500, ua()));
        }
        break;
      case 13:
        Qo(function() {
          var u = Xi(n, 1);
          if (u !== null) {
            var f = Ur();
            jr(u, n, 1, f);
          }
        }), Tp(n, 1);
    }
  }, uu = function(n) {
    if (n.tag === 13) {
      var r = Xi(n, 134217728);
      if (r !== null) {
        var o = Ur();
        jr(r, n, 134217728, o);
      }
      Tp(n, 134217728);
    }
  }, Qt = function(n) {
    if (n.tag === 13) {
      var r = nr(n), o = Xi(n, r);
      if (o !== null) {
        var u = Ur();
        jr(o, n, r, u);
      }
      Tp(n, r);
    }
  }, su = function() {
    return Zt;
  }, cu = function(n, r) {
    var o = Zt;
    try {
      return Zt = n, r();
    } finally {
      Zt = o;
    }
  }, zr = function(n, r, o) {
    switch (r) {
      case "input":
        if (ct(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; )
            o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var u = o[r];
            if (u !== n && u.form === n.form) {
              var f = at(u);
              if (!f)
                throw Error(p(90));
              he(u), ct(u, f);
            }
          }
        }
        break;
      case "textarea":
        Je(n, o);
        break;
      case "select":
        r = o.value, r != null && Gn(n, !!o.multiple, r, !1);
    }
  }, ll = zu, tu = Qo;
  var Eg = {
    usingClientEntryPoint: !1,
    Events: [Os, Eu, at, Fa, yo, zu]
  }, Hu = {
    findFiberByHostInstance: za,
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
    currentDispatcherRef: ee.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(n) {
      return n = Jn(n), n === null ? null : n.stateNode;
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
  return ni.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Eg, ni.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!bp(r))
      throw Error(p(200));
    return Vh(n, r, null, o);
  }, ni.createRoot = function(n, r) {
    if (!bp(n))
      throw Error(p(299));
    var o = !1, u = "", f = wp;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (f = r.onRecoverableError)), r = wf(n, 1, !1, null, null, o, !1, u, f), n[qi] = r.current, Su(n.nodeType === 8 ? n.parentNode : n), new Rf(r);
  }, ni.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(p(188)) : (n = Object.keys(n).join(","), Error(p(268, n)));
    return n = Jn(r), n = n === null ? null : n.stateNode, n;
  }, ni.flushSync = function(n) {
    return Qo(n);
  }, ni.hydrate = function(n, r, o) {
    if (!xf(r))
      throw Error(p(200));
    return _f(null, n, r, !0, o);
  }, ni.hydrateRoot = function(n, r, o) {
    if (!bp(n))
      throw Error(p(405));
    var u = o != null && o.hydratedSources || null, f = !1, h = "", C = wp;
    if (o != null && (o.unstable_strictMode === !0 && (f = !0), o.identifierPrefix !== void 0 && (h = o.identifierPrefix), o.onRecoverableError !== void 0 && (C = o.onRecoverableError)), r = Hh(r, null, n, 1, o ?? null, f, !1, h, C), n[qi] = r.current, Su(n), u)
      for (n = 0; n < u.length; n++)
        o = u[n], f = o._getVersion, f = f(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, f] : r.mutableSourceEagerHydrationData.push(o, f);
    return new ao(r);
  }, ni.render = function(n, r, o) {
    if (!xf(r))
      throw Error(p(200));
    return _f(null, n, r, !1, o);
  }, ni.unmountComponentAtNode = function(n) {
    if (!xf(n))
      throw Error(p(40));
    return n._reactRootContainer ? (Qo(function() {
      _f(null, null, n, !1, function() {
        n._reactRootContainer = null, n[qi] = null;
      });
    }), !0) : !1;
  }, ni.unstable_batchedUpdates = zu, ni.unstable_renderSubtreeIntoContainer = function(n, r, o, u) {
    if (!xf(o))
      throw Error(p(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(p(38));
    return _f(n, r, o, !1, u);
  }, ni.version = "18.2.0-next-9e3b772b8-20220608", ni;
}
var ri = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fw;
function tA() {
  return Fw || (Fw = 1, {}.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var c = eu(), v = bb(), p = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, S = !1;
    function T(e) {
      S = e;
    }
    function b(e) {
      if (!S) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        N("warn", e, a);
      }
    }
    function y(e) {
      if (!S) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        N("error", e, a);
      }
    }
    function N(e, t, a) {
      {
        var i = p.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var s = a.map(function(d) {
          return String(d);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var k = 0, M = 1, j = 2, A = 3, B = 4, P = 5, H = 6, Z = 7, J = 8, Ce = 9, ce = 10, ae = 11, ee = 12, V = 13, me = 14, _e = 15, Qe = 16, lt = 17, vt = 18, mt = 19, Et = 21, Fe = 22, Ee = 23, Te = 24, Re = 25, pe = !0, re = !1, ke = !1, _ = !1, le = !1, ne = !0, fe = !1, ve = !1, De = !0, z = !0, je = !0, ue = /* @__PURE__ */ new Set(), nt = {}, Ct = {};
    function ht(e, t) {
      he(e, t), he(e + "Capture", t);
    }
    function he(e, t) {
      nt[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), nt[e] = t;
      {
        var a = e.toLowerCase();
        Ct[a] = e, e === "onDoubleClick" && (Ct.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        ue.add(t[i]);
    }
    var Rt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ft = Object.prototype.hasOwnProperty;
    function rt(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
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
    function Xt(e, t) {
      if (Pt(e))
        return y("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, rt(e)), ct(e);
    }
    function Xn(e) {
      if (Pt(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rt(e)), ct(e);
    }
    function zt(e, t) {
      if (Pt(e))
        return y("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, rt(e)), ct(e);
    }
    function Gn(e, t) {
      if (Pt(e))
        return y("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, rt(e)), ct(e);
    }
    function Zn(e) {
      if (Pt(e))
        return y("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", rt(e)), ct(e);
    }
    function dn(e) {
      if (Pt(e))
        return y("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", rt(e)), ct(e);
    }
    var Je = 0, Mt = 1, fr = 2, yn = 3, An = 4, gi = 5, Ea = 6, Ae = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", et = Ae + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", At = new RegExp("^[" + Ae + "][" + et + "]*$"), tn = {}, rn = {};
    function Yn(e) {
      return Ft.call(rn, e) ? !0 : Ft.call(tn, e) ? !1 : At.test(e) ? (rn[e] = !0, !0) : (tn[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function Nn(e, t, a) {
      return t !== null ? t.type === Je : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Mr(e, t, a, i) {
      if (a !== null && a.type === Je)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var l = e.toLowerCase().slice(0, 5);
          return l !== "data-" && l !== "aria-";
        }
        default:
          return !1;
      }
    }
    function cn(e, t, a, i) {
      if (t === null || typeof t > "u" || Mr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case yn:
            return !t;
          case An:
            return t === !1;
          case gi:
            return isNaN(t);
          case Ea:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function zr(e) {
      return on.hasOwnProperty(e) ? on[e] : null;
    }
    function an(e, t, a, i, l, s, d) {
      this.acceptsBooleans = t === fr || t === yn || t === An, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = d;
    }
    var on = {}, ii = [
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
    ii.forEach(function(e) {
      on[e] = new an(
        e,
        Je,
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
      var t = e[0], a = e[1];
      on[t] = new an(
        t,
        Mt,
        !1,
        // mustUseProperty
        a,
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
        yn,
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
        yn,
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
        An,
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
        Ea,
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
        gi,
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
    var Fa = /[\-\:]([a-z])/g, yo = function(e) {
      return e[1].toUpperCase();
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
        Mt,
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
        Mt,
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
        Mt,
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
        Mt,
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
      Mt,
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
        Mt,
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
    var tu = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, zi = !1;
    function go(e) {
      !zi && tu.test(e) && (zi = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Ca(e, t, a, i) {
      if (i.mustUseProperty) {
        var l = i.propertyName;
        return e[l];
      } else {
        Xt(a, t), i.sanitizeURL && go("" + a);
        var s = i.attributeName, d = null;
        if (i.type === An) {
          if (e.hasAttribute(s)) {
            var m = e.getAttribute(s);
            return m === "" ? !0 : cn(t, a, i, !1) ? m : m === "" + a ? a : m;
          }
        } else if (e.hasAttribute(s)) {
          if (cn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === yn)
            return a;
          d = e.getAttribute(s);
        }
        return cn(t, a, i, !1) ? d === null ? a : d : d === "" + a ? a : d;
      }
    }
    function Si(e, t, a, i) {
      {
        if (!Yn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return Xt(a, t), l === "" + a ? a : l;
      }
    }
    function Ta(e, t, a, i) {
      var l = zr(t);
      if (!Nn(t, l, i)) {
        if (cn(t, a, l, i) && (a = null), i || l === null) {
          if (Yn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Xt(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var d = l.mustUseProperty;
        if (d) {
          var m = l.propertyName;
          if (a === null) {
            var g = l.type;
            e[m] = g === yn ? !1 : "";
          } else
            e[m] = a;
          return;
        }
        var w = l.attributeName, R = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(w);
        else {
          var U = l.type, I;
          U === yn || U === An && a === !0 ? I = "" : (Xt(a, w), I = "" + a, l.sanitizeURL && go(I.toString())), R ? e.setAttributeNS(R, w, I) : e.setAttribute(w, I);
        }
      }
    }
    var Ei = Symbol.for("react.element"), Vr = Symbol.for("react.portal"), wa = Symbol.for("react.fragment"), Ci = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), ye = Symbol.for("react.provider"), Me = Symbol.for("react.context"), Ve = Symbol.for("react.forward_ref"), _t = Symbol.for("react.suspense"), Ht = Symbol.for("react.suspense_list"), Ot = Symbol.for("react.memo"), it = Symbol.for("react.lazy"), Jn = Symbol.for("react.scope"), Tn = Symbol.for("react.debug_trace_mode"), wn = Symbol.for("react.offscreen"), Er = Symbol.for("react.legacy_hidden"), Ti = Symbol.for("react.cache"), nu = Symbol.for("react.tracing_marker"), Yt = Symbol.iterator, pd = "@@iterator";
    function oi(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Yt && e[Yt] || e[pd];
      return typeof t == "function" ? t : null;
    }
    var Lt = Object.assign, wi = 0, So, ru, Eo, ra, fs, Hr, ds;
    function ps() {
    }
    ps.__reactDisabledLog = !0;
    function gc() {
      {
        if (wi === 0) {
          So = console.log, ru = console.info, Eo = console.warn, ra = console.error, fs = console.group, Hr = console.groupCollapsed, ds = console.groupEnd;
          var e = { configurable: !0, enumerable: !0, value: ps, writable: !0 };
          Object.defineProperties(console, { info: e, log: e, warn: e, error: e, group: e, groupCollapsed: e, groupEnd: e });
        }
        wi++;
      }
    }
    function au() {
      {
        if (wi--, wi === 0) {
          var e = { configurable: !0, enumerable: !0, writable: !0 };
          Object.defineProperties(console, { log: Lt({}, e, { value: So }), info: Lt({}, e, { value: ru }), warn: Lt({}, e, { value: Eo }), error: Lt({}, e, { value: ra }), group: Lt({}, e, { value: fs }), groupCollapsed: Lt({}, e, { value: Hr }), groupEnd: Lt({}, e, { value: ds }) });
        }
        wi < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Co = p.ReactCurrentDispatcher, li;
    function $r(e, t, a) {
      {
        if (li === void 0)
          try {
            throw Error();
          } catch (l) {
            var i = l.stack.trim().match(/\n( *(at )?)/);
            li = i && i[1] || "";
          }
        return `
` + li + e;
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
        var a = wo.get(e);
        if (a !== void 0)
          return a;
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
      var I = e ? e.displayName || e.name : "", Q = I ? $r(I) : "";
      return typeof e == "function" && wo.set(e, Q), Q;
    }
    function ou(e, t, a) {
      return iu(e, !0);
    }
    function Vi(e, t, a) {
      return iu(e, !1);
    }
    function vd(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function bi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return iu(e, vd(e));
      if (typeof e == "string")
        return $r(e);
      switch (e) {
        case _t:
          return $r("Suspense");
        case Ht:
          return $r("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Ve:
            return Vi(e.render);
          case Ot:
            return bi(e.type, t, a);
          case it: {
            var i = e, l = i._payload, s = i._init;
            try {
              return bi(s(l), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Zt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case P:
          return $r(e.type);
        case Qe:
          return $r("Lazy");
        case V:
          return $r("Suspense");
        case mt:
          return $r("SuspenseList");
        case k:
        case j:
        case _e:
          return Vi(e.type);
        case ae:
          return Vi(e.type.render);
        case M:
          return ou(e.type);
        default:
          return "";
      }
    }
    function lu(e) {
      try {
        var t = "", a = e;
        do
          t += Zt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function ul(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var l = t.displayName || t.name || "";
      return l !== "" ? a + "(" + l + ")" : a;
    }
    function uu(e) {
      return e.displayName || "Context";
    }
    function Qt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case wa:
          return "Fragment";
        case Vr:
          return "Portal";
        case D:
          return "Profiler";
        case Ci:
          return "StrictMode";
        case _t:
          return "Suspense";
        case Ht:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Me:
            var t = e;
            return uu(t) + ".Consumer";
          case ye:
            var a = e;
            return uu(a._context) + ".Provider";
          case Ve:
            return ul(e, e.render, "ForwardRef");
          case Ot:
            var i = e.displayName || null;
            return i !== null ? i : Qt(e.type) || "Memo";
          case it: {
            var l = e, s = l._payload, d = l._init;
            try {
              return Qt(d(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function su(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function cu(e) {
      return e.displayName || "Context";
    }
    function wt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Te:
          return "Cache";
        case Ce:
          var i = a;
          return cu(i) + ".Consumer";
        case ce:
          var l = a;
          return cu(l._context) + ".Provider";
        case vt:
          return "DehydratedFragment";
        case ae:
          return su(a, a.render, "ForwardRef");
        case Z:
          return "Fragment";
        case P:
          return a;
        case B:
          return "Portal";
        case A:
          return "Root";
        case H:
          return "Text";
        case Qe:
          return Qt(a);
        case J:
          return a === Ci ? "StrictMode" : "Mode";
        case Fe:
          return "Offscreen";
        case ee:
          return "Profiler";
        case Et:
          return "Scope";
        case V:
          return "Suspense";
        case mt:
          return "SuspenseList";
        case Re:
          return "TracingMarker";
        case M:
        case k:
        case lt:
        case j:
        case me:
        case _e:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var sl = p.ReactDebugCurrentFrame, In = null, aa = !1;
    function Br() {
      {
        if (In === null)
          return null;
        var e = In._debugOwner;
        if (e !== null && typeof e < "u")
          return wt(e);
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
    function Ri(e) {
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
    function Hi(e, t) {
      Ec[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || y("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || y("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function xo(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Cc(e) {
      return e._valueTracker;
    }
    function Ua(e) {
      e._valueTracker = null;
    }
    function _o(e) {
      var t = "";
      return e && (xo(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Oo(e) {
      var t = xo(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      dn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var l = a.get, s = a.set;
        Object.defineProperty(e, t, { configurable: !0, get: function() {
          return l.call(this);
        }, set: function(m) {
          dn(m), i = "" + m, s.call(this, m);
        } }), Object.defineProperty(e, t, { enumerable: a.enumerable });
        var d = { getValue: function() {
          return i;
        }, setValue: function(m) {
          dn(m), i = "" + m;
        }, stopTracking: function() {
          Ua(e), delete e[t];
        } };
        return d;
      }
    }
    function ja(e) {
      Cc(e) || (e._valueTracker = Oo(e));
    }
    function fu(e) {
      if (!e)
        return !1;
      var t = Cc(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = _o(e);
      return i !== a ? (t.setValue(i), !0) : !1;
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
    function ui(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function E(e, t) {
      var a = e, i = t.checked, l = Lt({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: i ?? a._wrapperState.initialChecked });
      return l;
    }
    function O(e, t) {
      Hi("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !cl && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Br() || "A component", t.type), cl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Do && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Br() || "A component", t.type), Do = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = { initialChecked: t.checked != null ? t.checked : t.defaultChecked, initialValue: Ri(t.value != null ? t.value : i), controlled: ui(t) };
    }
    function q(e, t) {
      var a = e, i = t.checked;
      i != null && Ta(a, "checked", i, !1);
    }
    function te(e, t) {
      var a = e;
      {
        var i = ui(t);
        !a._wrapperState.controlled && i && !vs && (y("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), vs = !0), a._wrapperState.controlled && !i && !du && (y("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), du = !0);
      }
      q(e, t);
      var l = Ri(t.value), s = t.type;
      if (l != null)
        s === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = dr(l)) : a.value !== dr(l) && (a.value = dr(l));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? ut(a, t.type, l) : t.hasOwnProperty("defaultValue") && ut(a, t.type, Ri(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function xe(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, s = l === "submit" || l === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var d = dr(i._wrapperState.initialValue);
        a || d !== i.value && (i.value = d), i.defaultValue = d;
      }
      var m = i.name;
      m !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, m !== "" && (i.name = m);
    }
    function ft(e, t) {
      var a = e;
      te(a, t), Ie(a, t);
    }
    function Ie(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Xt(a, "name");
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < l.length; s++) {
          var d = l[s];
          if (!(d === e || d.form !== e.form)) {
            var m = um(d);
            if (!m)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            fu(d), te(d, m);
          }
        }
      }
    }
    function ut(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ko(e.ownerDocument) !== e) && (a == null ? e.defaultValue = dr(e._wrapperState.initialValue) : e.defaultValue !== dr(a) && (e.defaultValue = dr(a)));
    }
    var Nt = !1, qt = !1, gn = !1;
    function fn(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? c.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || qt || (qt = !0, y("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (gn || (gn = !0, y("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Nt && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Nt = !0);
    }
    function Sn(e, t) {
      t.value != null && e.setAttribute("value", dr(Ri(t.value)));
    }
    var bn = Array.isArray;
    function Vt(e) {
      return bn(e);
    }
    var $i;
    $i = !1;
    function pu() {
      var e = Br();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var hs = ["value", "defaultValue"];
    function hd(e) {
      {
        Hi("select", e);
        for (var t = 0; t < hs.length; t++) {
          var a = hs[t];
          if (e[a] != null) {
            var i = Vt(e[a]);
            e.multiple && !i ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, pu()) : !e.multiple && i && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, pu());
          }
        }
      }
    }
    function si(e, t, a, i) {
      var l = e.options;
      if (t) {
        for (var s = a, d = {}, m = 0; m < s.length; m++)
          d["$" + s[m]] = !0;
        for (var g = 0; g < l.length; g++) {
          var w = d.hasOwnProperty("$" + l[g].value);
          l[g].selected !== w && (l[g].selected = w), w && i && (l[g].defaultSelected = !0);
        }
      } else {
        for (var R = dr(Ri(a)), U = null, I = 0; I < l.length; I++) {
          if (l[I].value === R) {
            l[I].selected = !0, i && (l[I].defaultSelected = !0);
            return;
          }
          U === null && !l[I].disabled && (U = l[I]);
        }
        U !== null && (U.selected = !0);
      }
    }
    function ms(e, t) {
      return Lt({}, t, { value: void 0 });
    }
    function ys(e, t) {
      var a = e;
      hd(t), a._wrapperState = { wasMultiple: !!t.multiple }, t.value !== void 0 && t.defaultValue !== void 0 && !$i && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), $i = !0);
    }
    function md(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? si(a, !!t.multiple, i, !1) : t.defaultValue != null && si(a, !!t.multiple, t.defaultValue, !0);
    }
    function Hy(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? si(a, !!t.multiple, l, !1) : i !== !!t.multiple && (t.defaultValue != null ? si(a, !!t.multiple, t.defaultValue, !0) : si(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function $y(e, t) {
      var a = e, i = t.value;
      i != null && si(a, !!t.multiple, i, !1);
    }
    var yd = !1;
    function gd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Lt({}, t, { value: void 0, defaultValue: void 0, children: dr(a._wrapperState.initialValue) });
      return i;
    }
    function Uv(e, t) {
      var a = e;
      Hi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !yd && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Br() || "A component"), yd = !0);
      var i = t.value;
      if (i == null) {
        var l = t.children, s = t.defaultValue;
        if (l != null) {
          y("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Vt(l)) {
              if (l.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              l = l[0];
            }
            s = l;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = { initialValue: Ri(i) };
    }
    function jv(e, t) {
      var a = e, i = Ri(t.value), l = Ri(t.defaultValue);
      if (i != null) {
        var s = dr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      l != null && (a.defaultValue = dr(l));
    }
    function Pv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
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
    var Wy = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, wc, zv = Wy(function(e, t) {
      if (e.namespaceURI === Ed && !("innerHTML" in e)) {
        wc = wc || document.createElement("div"), wc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = wc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), oa = 1, Wi = 3, er = 8, ci = 9, fl = 11, bc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Wi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
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
    function Rc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(vu.hasOwnProperty(e) && vu[e]) ? t + "px" : (Gn(t, e), ("" + t).trim());
    }
    var hu = /([A-Z])/g, Gy = /^ms-/;
    function Yy(e) {
      return e.replace(hu, "-$1").toLowerCase().replace(Gy, "-ms-");
    }
    var Bv = function() {
    };
    {
      var Wv = /^(?:webkit|moz|o)[A-Z]/, Gv = /^-ms-/, gs = /-(.)/g, mu = /;\s*$/, yu = {}, gu = {}, Yv = !1, Td = !1, wd = function(e) {
        return e.replace(gs, function(t, a) {
          return a.toUpperCase();
        });
      }, bd = function(e) {
        yu.hasOwnProperty(e) && yu[e] || (yu[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          wd(e.replace(Gv, "ms-"))
        ));
      }, Qv = function(e) {
        yu.hasOwnProperty(e) && yu[e] || (yu[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, qv = function(e, t) {
        gu.hasOwnProperty(t) && gu[t] || (gu[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(mu, "")));
      }, Kv = function(e, t) {
        Yv || (Yv = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Qy = function(e, t) {
        Td || (Td = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Bv = function(e, t) {
        e.indexOf("-") > -1 ? bd(e) : Wv.test(e) ? Qv(e) : mu.test(t) && qv(e, t), typeof t == "number" && (isNaN(t) ? Kv(e, t) : isFinite(t) || Qy(e, t));
      };
    }
    var qy = Bv;
    function Ky(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Yy(i)) + ":", t += Rc(i, l, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Xv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || qy(i, t[i]);
          var s = Rc(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Xy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Pa(e) {
      var t = {};
      for (var a in e)
        for (var i = Vv[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function Ss(e, t) {
      {
        if (!t)
          return;
        var a = Pa(e), i = Pa(t), l = {};
        for (var s in a) {
          var d = a[s], m = i[s];
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
    }, Jv = Lt({ menuitem: !0 }, Zv), eh = "__html";
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
    }, fi = {}, Rd = new RegExp("^(aria)-[" + et + "]*$"), Es = new RegExp("^(aria)[A-Z][" + et + "]*$");
    function xd(e, t) {
      {
        if (Ft.call(fi, t) && fi[t])
          return !0;
        if (Es.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = th.hasOwnProperty(a) ? a : null;
          if (i == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), fi[t] = !0, !0;
          if (t !== i)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), fi[t] = !0, !0;
        }
        if (Rd.test(t)) {
          var l = t.toLowerCase(), s = th.hasOwnProperty(l) ? l : null;
          if (s == null)
            return fi[t] = !0, !1;
          if (t !== s)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), fi[t] = !0, !0;
        }
      }
      return !0;
    }
    function nh(e, t) {
      {
        var a = [];
        for (var i in t) {
          var l = xd(e, i);
          l || a.push(i);
        }
        var s = a.map(function(d) {
          return "`" + d + "`";
        }).join(", ");
        a.length === 1 ? y("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && y("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
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
      var pr = {}, kd = /^on./, rh = /^on[^A-Z]/, ah = new RegExp("^(aria)-[" + et + "]*$"), ih = new RegExp("^(aria)[A-Z][" + et + "]*$");
      Od = function(e, t, a, i) {
        if (Ft.call(pr, t) && pr[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), pr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, d = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var m = d.hasOwnProperty(l) ? d[l] : null;
          if (m != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, m), pr[t] = !0, !0;
          if (kd.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), pr[t] = !0, !0;
        } else if (kd.test(t))
          return rh.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), pr[t] = !0, !0;
        if (ah.test(t) || ih.test(t))
          return !0;
        if (l === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), pr[t] = !0, !0;
        if (l === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), pr[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), pr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), pr[t] = !0, !0;
        var g = zr(t), w = g !== null && g.type === Je;
        if (_c.hasOwnProperty(l)) {
          var R = _c[l];
          if (R !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, R), pr[t] = !0, !0;
        } else if (!w && t !== l)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), pr[t] = !0, !0;
        return typeof a == "boolean" && Mr(t, a, g, !1) ? (a ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), pr[t] = !0, !0) : w ? !0 : Mr(t, a, g, !1) ? (pr[t] = !0, !1) : ((a === "false" || a === "true") && g !== null && g.type === yn && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), pr[t] = !0), !0);
      };
    }
    var oh = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var s = Od(e, l, t[l], a);
          s || i.push(l);
        }
        var d = i.map(function(m) {
          return "`" + m + "`";
        }).join(", ");
        i.length === 1 ? y("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e) : i.length > 1 && y("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e);
      }
    };
    function lh(e, t, a) {
      Gi(e, t) || oh(e, t, a);
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
    var En = null, Ao = null, Qi = null;
    function Su(e) {
      var t = Wu(e);
      if (t) {
        if (typeof En != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = um(a);
          En(t.stateNode, t.type, i);
        }
      }
    }
    function sh(e) {
      En = e;
    }
    function Dc(e) {
      Ao ? Qi ? Qi.push(e) : Qi = [e] : Ao = e;
    }
    function bs() {
      return Ao !== null || Qi !== null;
    }
    function Rs() {
      if (Ao) {
        var e = Ao, t = Qi;
        if (Ao = null, Qi = null, Su(e), t)
          for (var a = 0; a < t.length; a++)
            Su(t[a]);
      }
    }
    var vl = function(e, t) {
      return e(t);
    }, Dd = function() {
    }, Ad = !1;
    function eg() {
      var e = bs();
      e && (Dd(), Rs());
    }
    function Md(e, t, a) {
      if (Ad)
        return e(t, a);
      Ad = !0;
      try {
        return vl(e, t, a);
      } finally {
        Ad = !1, eg();
      }
    }
    function Ac(e, t, a) {
      vl = e, Dd = a;
    }
    function Mc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Ld(e, t, a) {
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
          return !!(a.disabled && Mc(t));
        default:
          return !1;
      }
    }
    function hl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = um(a);
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
    if (Rt)
      try {
        var ml = {};
        Object.defineProperty(ml, "passive", { get: function() {
          xs = !0;
        } }), window.addEventListener("test", ml, ml), window.removeEventListener("test", ml, ml);
      } catch {
        xs = !1;
      }
    function ch(e, t, a, i, l, s, d, m, g) {
      var w = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, w);
      } catch (R) {
        this.onError(R);
      }
    }
    var Nd = ch;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Id = document.createElement("react");
      Nd = function(t, a, i, l, s, d, m, g, w) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var R = document.createEvent("Event"), U = !1, I = !0, Q = window.event, K = Object.getOwnPropertyDescriptor(window, "event");
        function ie() {
          Id.removeEventListener(oe, ot, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = Q);
        }
        var He = Array.prototype.slice.call(arguments, 3);
        function ot() {
          U = !0, ie(), a.apply(i, He), I = !1;
        }
        var Ze, Wt = !1, jt = !1;
        function W(G) {
          if (Ze = G.error, Wt = !0, Ze === null && G.colno === 0 && G.lineno === 0 && (jt = !0), G.defaultPrevented && Ze != null && typeof Ze == "object")
            try {
              Ze._suppressLogging = !0;
            } catch {
            }
        }
        var oe = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", W), Id.addEventListener(oe, ot, !1), R.initEvent(oe, !1, !1), Id.dispatchEvent(R), K && Object.defineProperty(window, "event", K), U && I && (Wt ? jt && (Ze = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ze = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ze)), window.removeEventListener("error", W), !U)
          return ie(), ch.apply(this, arguments);
      };
    }
    var tg = Nd, Mo = !1, di = null, _s = !1, Lo = null, xi = { onError: function(e) {
      Mo = !0, di = e;
    } };
    function yl(e, t, a, i, l, s, d, m, g) {
      Mo = !1, di = null, tg.apply(xi, arguments);
    }
    function qi(e, t, a, i, l, s, d, m, g) {
      if (yl.apply(this, arguments), Mo) {
        var w = Ud();
        _s || (_s = !0, Lo = w);
      }
    }
    function Fd() {
      if (_s) {
        var e = Lo;
        throw _s = !1, Lo = null, e;
      }
    }
    function ng() {
      return Mo;
    }
    function Ud() {
      if (Mo) {
        var e = di;
        return Mo = !1, di = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function za(e) {
      return e._reactInternals;
    }
    function Os(e) {
      return e._reactInternals !== void 0;
    }
    function Eu(e, t) {
      e._reactInternals = t;
    }
    var at = (
      /*                      */
      0
    ), No = (
      /*                */
      1
    ), xn = (
      /*                    */
      2
    ), kt = (
      /*                       */
      4
    ), nn = (
      /*                */
      16
    ), un = (
      /*                 */
      32
    ), _i = (
      /*                     */
      64
    ), gt = (
      /*                   */
      128
    ), Hn = (
      /*            */
      256
    ), la = (
      /*                          */
      512
    ), Va = (
      /*                     */
      1024
    ), Mn = (
      /*                      */
      2048
    ), Ha = (
      /*                    */
      4096
    ), Io = (
      /*                   */
      8192
    ), ks = (
      /*             */
      16384
    ), Lc = Mn | kt | _i | la | Va | ks, fh = (
      /*               */
      32767
    ), ba = (
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
    ), Pd = (
      /*                    */
      2097152
    ), ua = (
      /*                 */
      4194304
    ), Fo = (
      /*                */
      8388608
    ), sa = (
      /*               */
      16777216
    ), gl = (
      /*              */
      33554432
    ), Cu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      kt | Va | 0
    ), ca = xn | kt | nn | un | la | Ha | Io, Lr = kt | _i | la | Io, $a = Mn | nn, Cr = ua | Fo | Pd, Ki = p.ReactCurrentOwner;
    function Ra(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (xn | Ha)) !== at && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === A ? a : null;
    }
    function zd(e) {
      if (e.tag === V) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Nc(e) {
      return e.tag === A ? e.stateNode.containerInfo : null;
    }
    function Vd(e) {
      return Ra(e) === e;
    }
    function xa(e) {
      {
        var t = Ki.current;
        if (t !== null && t.tag === M) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", wt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = za(e);
      return l ? Ra(l) === l : !1;
    }
    function fa(e) {
      if (Ra(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function _n(e) {
      var t = e.alternate;
      if (!t) {
        var a = Ra(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
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
              return fa(s), e;
            if (g === l)
              return fa(s), t;
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
      if (i.tag !== A)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Ba(e) {
      var t = _n(e);
      return t !== null ? Hd(t) : null;
    }
    function Hd(e) {
      if (e.tag === P || e.tag === H)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Hd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function dh(e) {
      var t = _n(e);
      return t !== null ? Ic(t) : null;
    }
    function Ic(e) {
      if (e.tag === P || e.tag === H)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== B) {
          var a = Ic(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Fc = v.unstable_scheduleCallback, ph = v.unstable_cancelCallback, Uc = v.unstable_shouldYield, vh = v.unstable_requestPaint, Fn = v.unstable_now, $d = v.unstable_getCurrentPriorityLevel, jc = v.unstable_ImmediatePriority, _a = v.unstable_UserBlockingPriority, Oi = v.unstable_NormalPriority, Pc = v.unstable_LowPriority, Uo = v.unstable_IdlePriority, Bd = v.unstable_yieldValue, Wd = v.unstable_setDisableYieldValue, jo = null, hr = null, Le = null, Qn = !1, Tr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Gd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        De && (e = Lt({}, e, { getLaneLabelMap: zo, injectProfilingHooks: Zi })), jo = t.inject(e), hr = t;
      } catch (a) {
        y("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function hh(e, t) {
      if (hr && typeof hr.onScheduleFiberRoot == "function")
        try {
          hr.onScheduleFiberRoot(jo, e, t);
        } catch (a) {
          Qn || (Qn = !0, y("React instrumentation encountered an error: %s", a));
        }
    }
    function Xi(e, t) {
      if (hr && typeof hr.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & gt) === gt;
          if (z) {
            var i;
            switch (t) {
              case Nr:
                i = jc;
                break;
              case wr:
                i = _a;
                break;
              case eo:
                i = Oi;
                break;
              case Ps:
                i = Uo;
                break;
              default:
                i = Oi;
                break;
            }
            hr.onCommitFiberRoot(jo, e, i, a);
          }
        } catch (l) {
          Qn || (Qn = !0, y("React instrumentation encountered an error: %s", l));
        }
    }
    function Po(e) {
      if (hr && typeof hr.onPostCommitFiberRoot == "function")
        try {
          hr.onPostCommitFiberRoot(jo, e);
        } catch (t) {
          Qn || (Qn = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Yd(e) {
      if (hr && typeof hr.onCommitFiberUnmount == "function")
        try {
          hr.onCommitFiberUnmount(jo, e);
        } catch (t) {
          Qn || (Qn = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function ir(e) {
      if (typeof Bd == "function" && (Wd(e), T(e)), hr && typeof hr.setStrictMode == "function")
        try {
          hr.setStrictMode(jo, e);
        } catch (t) {
          Qn || (Qn = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Zi(e) {
      Le = e;
    }
    function zo() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < On; a++) {
          var i = rg(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function zc(e) {
      Le !== null && typeof Le.markCommitStarted == "function" && Le.markCommitStarted(e);
    }
    function Qd() {
      Le !== null && typeof Le.markCommitStopped == "function" && Le.markCommitStopped();
    }
    function Vo(e) {
      Le !== null && typeof Le.markComponentRenderStarted == "function" && Le.markComponentRenderStarted(e);
    }
    function Sl() {
      Le !== null && typeof Le.markComponentRenderStopped == "function" && Le.markComponentRenderStopped();
    }
    function mh(e) {
      Le !== null && typeof Le.markComponentPassiveEffectMountStarted == "function" && Le.markComponentPassiveEffectMountStarted(e);
    }
    function qd() {
      Le !== null && typeof Le.markComponentPassiveEffectMountStopped == "function" && Le.markComponentPassiveEffectMountStopped();
    }
    function Vc(e) {
      Le !== null && typeof Le.markComponentPassiveEffectUnmountStarted == "function" && Le.markComponentPassiveEffectUnmountStarted(e);
    }
    function yh() {
      Le !== null && typeof Le.markComponentPassiveEffectUnmountStopped == "function" && Le.markComponentPassiveEffectUnmountStopped();
    }
    function gh(e) {
      Le !== null && typeof Le.markComponentLayoutEffectMountStarted == "function" && Le.markComponentLayoutEffectMountStarted(e);
    }
    function Sh() {
      Le !== null && typeof Le.markComponentLayoutEffectMountStopped == "function" && Le.markComponentLayoutEffectMountStopped();
    }
    function Hc(e) {
      Le !== null && typeof Le.markComponentLayoutEffectUnmountStarted == "function" && Le.markComponentLayoutEffectUnmountStarted(e);
    }
    function Tu() {
      Le !== null && typeof Le.markComponentLayoutEffectUnmountStopped == "function" && Le.markComponentLayoutEffectUnmountStopped();
    }
    function $c(e, t, a) {
      Le !== null && typeof Le.markComponentErrored == "function" && Le.markComponentErrored(e, t, a);
    }
    function Eh(e, t, a) {
      Le !== null && typeof Le.markComponentSuspended == "function" && Le.markComponentSuspended(e, t, a);
    }
    function Ch(e) {
      Le !== null && typeof Le.markLayoutEffectsStarted == "function" && Le.markLayoutEffectsStarted(e);
    }
    function wu() {
      Le !== null && typeof Le.markLayoutEffectsStopped == "function" && Le.markLayoutEffectsStopped();
    }
    function Th(e) {
      Le !== null && typeof Le.markPassiveEffectsStarted == "function" && Le.markPassiveEffectsStarted(e);
    }
    function As() {
      Le !== null && typeof Le.markPassiveEffectsStopped == "function" && Le.markPassiveEffectsStopped();
    }
    function pi(e) {
      Le !== null && typeof Le.markRenderStarted == "function" && Le.markRenderStarted(e);
    }
    function Ms() {
      Le !== null && typeof Le.markRenderYielded == "function" && Le.markRenderYielded();
    }
    function bu() {
      Le !== null && typeof Le.markRenderStopped == "function" && Le.markRenderStopped();
    }
    function El(e) {
      Le !== null && typeof Le.markRenderScheduled == "function" && Le.markRenderScheduled(e);
    }
    function Kd(e, t) {
      Le !== null && typeof Le.markForceUpdateScheduled == "function" && Le.markForceUpdateScheduled(e, t);
    }
    function Ho(e, t) {
      Le !== null && typeof Le.markStateUpdateScheduled == "function" && Le.markStateUpdateScheduled(e, t);
    }
    var st = (
      /*                         */
      0
    ), It = (
      /*                 */
      1
    ), dt = (
      /*                    */
      2
    ), Un = (
      /*               */
      8
    ), Wa = (
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
    ), $t = (
      /*                          */
      0
    ), pt = (
      /*                        */
      1
    ), ki = (
      /*    */
      2
    ), Oa = (
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
    ), Ga = (
      /*                        */
      128
    ), da = (
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
    ), pa = (
      /*                   */
      1073741824
    );
    function rg(e) {
      {
        if (e & pt)
          return "Sync";
        if (e & ki)
          return "InputContinuousHydration";
        if (e & Oa)
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
        if (e & pa)
          return "Offscreen";
      }
    }
    var Cn = -1, of = bl, lf = Ji;
    function _u(e) {
      switch (tr(e)) {
        case pt:
          return pt;
        case ki:
          return ki;
        case Oa:
          return Oa;
        case Tl:
          return Tl;
        case kn:
          return kn;
        case wl:
          return wl;
        case bl:
        case Ga:
        case da:
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
        case pa:
          return pa;
        default:
          return y("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Fs(e, t) {
      var a = e.pendingLanes;
      if (a === se)
        return se;
      var i = se, l = e.suspendedLanes, s = e.pingedLanes, d = a & af;
      if (d !== se) {
        var m = d & ~l;
        if (m !== se)
          i = _u(m);
        else {
          var g = d & s;
          g !== se && (i = _u(g));
        }
      } else {
        var w = a & ~l;
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
      (i & Oa) !== se && (i |= a & kn);
      var I = e.entangledLanes;
      if (I !== se)
        for (var Q = e.entanglements, K = i & I; K > 0; ) {
          var ie = Wo(K), He = 1 << ie;
          i |= Q[ie], K &= ~He;
        }
      return i;
    }
    function wh(e, t) {
      for (var a = e.eventTimes, i = Cn; t > 0; ) {
        var l = Wo(t), s = 1 << l, d = a[l];
        d > i && (i = d), t &= ~s;
      }
      return i;
    }
    function uf(e, t) {
      switch (e) {
        case pt:
        case ki:
        case Oa:
          return t + 250;
        case Tl:
        case kn:
        case wl:
        case bl:
        case Ga:
        case da:
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
          return Cn;
        case Ru:
        case xu:
        case Bo:
        case pa:
          return Cn;
        default:
          return y("Should have found matching lanes. This is a bug in React."), Cn;
      }
    }
    function ag(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, d = a; d > 0; ) {
        var m = Wo(d), g = 1 << m, w = s[m];
        w === Cn ? ((g & i) === se || (g & l) !== se) && (s[m] = uf(g, t)) : w <= t && (e.expiredLanes |= g), d &= ~g;
      }
    }
    function ig(e) {
      return _u(e.pendingLanes);
    }
    function Jd(e) {
      var t = e.pendingLanes & ~pa;
      return t !== se ? t : t & pa ? pa : se;
    }
    function Ou(e) {
      return (e & pt) !== se;
    }
    function Us(e) {
      return (e & af) !== se;
    }
    function sf(e) {
      return (e & _l) === e;
    }
    function og(e) {
      var t = pt | Oa | kn;
      return (e & t) === se;
    }
    function bh(e) {
      return (e & $o) === e;
    }
    function js(e, t) {
      var a = ki | Oa | Tl | kn;
      return (t & a) !== se;
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
    function va(e, t) {
      return (e & t) !== se;
    }
    function Ol(e, t) {
      return (e & t) === t;
    }
    function Dt(e, t) {
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
      return e !== $t && e < t ? e : t;
    }
    function ff(e) {
      for (var t = [], a = 0; a < On; a++)
        t.push(e);
      return t;
    }
    function kl(e, t, a) {
      e.pendingLanes |= t, t !== Bo && (e.suspendedLanes = se, e.pingedLanes = se);
      var i = e.eventTimes, l = cf(t);
      i[l] = a;
    }
    function rp(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var l = Wo(i), s = 1 << l;
        a[l] = Cn, i &= ~s;
      }
    }
    function ap(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function ip(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = se, e.pingedLanes = se, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, s = e.expirationTimes, d = a; d > 0; ) {
        var m = Wo(d), g = 1 << m;
        i[m] = se, l[m] = Cn, s[m] = Cn, d &= ~g;
      }
    }
    function Du(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, l = a; l; ) {
        var s = Wo(l), d = 1 << s;
        // Is this one of the newly entangled lanes?
        d & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), l &= ~d;
      }
    }
    function ug(e, t) {
      var a = tr(t), i;
      switch (a) {
        case Oa:
          i = ki;
          break;
        case kn:
          i = Tl;
          break;
        case bl:
        case Ga:
        case da:
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
          i = $t;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== $t ? $t : i;
    }
    function op(e, t, a) {
      if (Tr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = cf(a), s = 1 << l, d = i[l];
          d.add(t), a &= ~s;
        }
    }
    function df(e, t) {
      if (Tr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = cf(t), s = 1 << l, d = a[l];
          d.size > 0 && (d.forEach(function(m) {
            var g = m.alternate;
            (g === null || !i.has(g)) && i.add(m);
          }), d.clear()), t &= ~s;
        }
    }
    function lp(e, t) {
      return null;
    }
    var Nr = pt, wr = Oa, eo = kn, Ps = Bo, Dl = $t;
    function Ya() {
      return Dl;
    }
    function lr(e) {
      Dl = e;
    }
    function zs(e, t) {
      var a = Dl;
      try {
        return Dl = e, t();
      } finally {
        Dl = a;
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
      return up(Nr, t) ? up(wr, t) ? Us(t) ? eo : Ps : wr : Nr;
    }
    function ur(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Oh;
    function Be(e) {
      Oh = e;
    }
    function Au(e) {
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
    function Ah(e) {
      cp = e;
    }
    var pf = !1, Mu = [], Di = null, Ln = null, mr = null, Qa = /* @__PURE__ */ new Map(), Lu = /* @__PURE__ */ new Map(), to = [], vi = [
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
    function Mh(e) {
      return vi.indexOf(e) > -1;
    }
    function Ai(e, t, a, i, l) {
      return { blockedOn: e, domEventName: t, eventSystemFlags: a, nativeEvent: l, targetContainers: [i] };
    }
    function Lh(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Di = null;
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
          var a = t.pointerId;
          Qa.delete(a);
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
    function Nu(e, t, a, i, l, s) {
      if (e === null || e.nativeEvent !== s) {
        var d = Ai(t, a, i, l, s);
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
    function Nh(e, t, a, i, l) {
      switch (t) {
        case "focusin": {
          var s = l;
          return Di = Nu(Di, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var d = l;
          return Ln = Nu(Ln, e, t, a, i, d), !0;
        }
        case "mouseover": {
          var m = l;
          return mr = Nu(mr, e, t, a, i, m), !0;
        }
        case "pointerover": {
          var g = l, w = g.pointerId;
          return Qa.set(w, Nu(Qa.get(w) || null, e, t, a, i, g)), !0;
        }
        case "gotpointercapture": {
          var R = l, U = R.pointerId;
          return Lu.set(U, Nu(Lu.get(U) || null, e, t, a, i, R)), !0;
        }
      }
      return !1;
    }
    function fp(e) {
      var t = Js(e.target);
      if (t !== null) {
        var a = Ra(t);
        if (a !== null) {
          var i = a.tag;
          if (i === V) {
            var l = zd(a);
            if (l !== null) {
              e.blockedOn = l, cp(e.priority, function() {
                Dh(a);
              });
              return;
            }
          } else if (i === A) {
            var s = a.stateNode;
            if (ur(s)) {
              e.blockedOn = Nc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Ih(e) {
      for (var t = Bs(), a = { blockedOn: null, target: e, priority: t }, i = 0; i < to.length && up(t, to[i].priority); i++)
        ;
      to.splice(i, 0, a), i === 0 && fp(a);
    }
    function vf(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Al(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
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
    function Ws(e, t, a) {
      vf(e) && a.delete(t);
    }
    function dp() {
      pf = !1, Di !== null && vf(Di) && (Di = null), Ln !== null && vf(Ln) && (Ln = null), mr !== null && vf(mr) && (mr = null), Qa.forEach(Ws), Lu.forEach(Ws);
    }
    function Fr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, pf || (pf = !0, v.unstable_scheduleCallback(v.unstable_NormalPriority, dp)));
    }
    function Ut(e) {
      if (Mu.length > 0) {
        Fr(Mu[0], e);
        for (var t = 1; t < Mu.length; t++) {
          var a = Mu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Di !== null && Fr(Di, e), Ln !== null && Fr(Ln, e), mr !== null && Fr(mr, e);
      var i = function(m) {
        return Fr(m, e);
      };
      Qa.forEach(i), Lu.forEach(i);
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
    var jn = p.ReactCurrentBatchConfig, $n = !0;
    function yr(e) {
      $n = !!e;
    }
    function ka() {
      return $n;
    }
    function Iu(e, t, a) {
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
      return l.bind(null, t, a, e);
    }
    function sr(e, t, a, i) {
      var l = Ya(), s = jn.transition;
      jn.transition = null;
      try {
        lr(Nr), no(e, t, a, i);
      } finally {
        lr(l), jn.transition = s;
      }
    }
    function Gs(e, t, a, i) {
      var l = Ya(), s = jn.transition;
      jn.transition = null;
      try {
        lr(wr), no(e, t, a, i);
      } finally {
        lr(l), jn.transition = s;
      }
    }
    function no(e, t, a, i) {
      $n && hf(e, t, a, i);
    }
    function hf(e, t, a, i) {
      var l = Al(e, t, a, i);
      if (l === null) {
        kg(e, t, i, Fu, a), Lh(e, i);
        return;
      }
      if (Nh(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Lh(e, i), t & pl && Mh(e)) {
        for (; l !== null; ) {
          var s = Wu(l);
          s !== null && Au(s);
          var d = Al(e, t, a, i);
          if (d === null && kg(e, t, i, Fu, a), d === l)
            break;
          l = d;
        }
        l !== null && i.stopPropagation();
        return;
      }
      kg(e, t, i, null, a);
    }
    var Fu = null;
    function Al(e, t, a, i) {
      Fu = null;
      var l = kc(i), s = Js(l);
      if (s !== null) {
        var d = Ra(s);
        if (d === null)
          s = null;
        else {
          var m = d.tag;
          if (m === V) {
            var g = zd(d);
            if (g !== null)
              return g;
            s = null;
          } else if (m === A) {
            var w = d.stateNode;
            if (ur(w))
              return Nc(d);
            s = null;
          } else
            d !== s && (s = null);
        }
      }
      return Fu = s, null;
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
            case _a:
              return wr;
            case Oi:
            case Pc:
              return eo;
            case Uo:
              return Ps;
            default:
              return eo;
          }
        }
        default:
          return eo;
      }
    }
    function pp(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Uu(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function ro(e, t, a, i) {
      return e.addEventListener(t, a, { capture: !0, passive: i }), a;
    }
    function mf(e, t, a, i) {
      return e.addEventListener(t, a, { passive: i }), a;
    }
    var Ml = null, Mi = null, Go = null;
    function Yo(e) {
      return Ml = e, Mi = gf(), !0;
    }
    function yf() {
      Ml = null, Mi = null, Go = null;
    }
    function ju() {
      if (Go)
        return Go;
      var e, t = Mi, a = t.length, i, l = gf(), s = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === l[s - i]; i++)
        ;
      var m = i > 1 ? 1 - i : void 0;
      return Go = l.slice(e, m), Go;
    }
    function gf() {
      return "value" in Ml ? Ml.value : Ml.textContent;
    }
    function Ll(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Nl() {
      return !0;
    }
    function Ur() {
      return !1;
    }
    function nr(e) {
      function t(a, i, l, s, d) {
        this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = s, this.target = d, this.currentTarget = null;
        for (var m in e)
          if (e.hasOwnProperty(m)) {
            var g = e[m];
            g ? this[m] = g(s) : this[m] = s[m];
          }
        var w = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return w ? this.isDefaultPrevented = Nl : this.isDefaultPrevented = Ur, this.isPropagationStopped = Ur, this;
      }
      return Lt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Nl);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Nl);
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
    var jr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
      return e.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 }, Pr = nr(jr), Pu = Lt({}, jr, { view: 0, detail: 0 }), vp = nr(Pu), Ys, hp, qa;
    function Fh(e) {
      e !== qa && (qa && e.type === "mousemove" ? (Ys = e.screenX - qa.screenX, hp = e.screenY - qa.screenY) : (Ys = 0, hp = 0), qa = e);
    }
    var zu = Lt({}, Pu, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Cf, button: 0, buttons: 0, relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    }, movementX: function(e) {
      return "movementX" in e ? e.movementX : (Fh(e), Ys);
    }, movementY: function(e) {
      return "movementY" in e ? e.movementY : hp;
    } }), Qo = nr(zu), mp = Lt({}, zu, { dataTransfer: 0 }), Il = nr(mp), Uh = Lt({}, Pu, { relatedTarget: 0 }), Sf = nr(Uh), yp = Lt({}, jr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ef = nr(yp), cg = Lt({}, jr, { clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    } }), fg = nr(cg), jh = Lt({}, jr, { data: 0 }), gp = nr(jh), Fl = gp, dg = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Vu = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" };
    function Ph(e) {
      if (e.key) {
        var t = dg[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Ll(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Vu[e.keyCode] || "Unidentified" : "";
    }
    var Bn = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function pg(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Bn[e];
      return i ? !!a[i] : !1;
    }
    function Cf(e) {
      return pg;
    }
    var vg = Lt({}, Pu, {
      key: Ph,
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
      charCode: function(e) {
        return e.type === "keypress" ? Ll(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Ll(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), hg = nr(vg), zh = Lt({}, zu, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Sp = nr(zh), mg = Lt({}, Pu, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Cf }), Ka = nr(mg), Ep = Lt({}, jr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), yg = nr(Ep), qo = Lt({}, zu, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Tf = nr(qo), Ul = [9, 13, 27, 32], Qs = 229, qs = Rt && "CompositionEvent" in window, jl = null;
    Rt && "documentMode" in document && (jl = document.documentMode);
    var gg = Rt && "TextEvent" in window && !jl, wf = Rt && (!qs || jl && jl > 8 && jl <= 11), Vh = 32, Cp = String.fromCharCode(Vh);
    function Hh() {
      ht("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ht("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ht("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ht("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
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
          return Ul.indexOf(t.keyCode) !== -1;
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
    function bp(e, t, a, i, l) {
      var s, d;
      if (qs ? s = $h(t) : ao ? Bh(t, i) && (s = "onCompositionEnd") : Tp(t, i) && (s = "onCompositionStart"), !s)
        return null;
      wf && !Rf(i) && (!ao && s === "onCompositionStart" ? ao = Yo(l) : s === "onCompositionEnd" && ao && (d = ju()));
      var m = qh(a, s);
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
          var a = t.which;
          return a !== Vh ? null : (Ks = !0, Cp);
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
          var a = ju();
          return yf(), ao = !1, a;
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
    function Sg(e, t, a, i, l) {
      var s;
      if (gg ? s = xf(t, i) : s = Wh(t, i), !s)
        return null;
      var d = qh(a, "onBeforeInput");
      if (d.length > 0) {
        var m = new Fl("onBeforeInput", "beforeinput", null, i, l);
        e.push({ event: m, listeners: d }), m.data = s;
      }
    }
    function _f(e, t, a, i, l, s, d) {
      bp(e, t, a, i, l), Sg(e, t, a, i, l);
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
      if (!Rt)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Of() {
      ht("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      Dc(i);
      var l = qh(t, "onChange");
      if (l.length > 0) {
        var s = new Pr("onChange", "change", null, a, i);
        e.push({ event: s, listeners: l });
      }
    }
    var r = null, o = null;
    function u(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function f(e) {
      var t = [];
      n(t, o, e, kc(e)), Md(h, t);
    }
    function h(e) {
      i1(e, 0);
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
    var L = !1;
    Rt && (L = Cg("input") && (!document.documentMode || document.documentMode > 9));
    function X(e, t) {
      r = e, o = t, r.attachEvent("onpropertychange", we);
    }
    function Se() {
      r && (r.detachEvent("onpropertychange", we), r = null, o = null);
    }
    function we(e) {
      e.propertyName === "value" && C(o) && f(e);
    }
    function ge(e, t, a) {
      e === "focusin" ? (Se(), X(t, a)) : e === "focusout" && Se();
    }
    function Pe(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return C(o);
    }
    function We(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function qe(e, t) {
      if (e === "click")
        return C(t);
    }
    function qn(e, t) {
      if (e === "input" || e === "change")
        return C(t);
    }
    function $(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || ut(e, "number", e.value);
    }
    function F(e, t, a, i, l, s, d) {
      var m = a ? Nf(a) : window, g, w;
      if (u(m) ? g = x : Hu(m) ? L ? g = qn : (g = Pe, w = ge) : We(m) && (g = qe), g) {
        var R = g(t, a);
        if (R) {
          n(e, R, i, l);
          return;
        }
      }
      w && w(t, m, a), t === "focusout" && $(m);
    }
    function Y() {
      he("onMouseEnter", ["mouseout", "mouseover"]), he("onMouseLeave", ["mouseout", "mouseover"]), he("onPointerEnter", ["pointerout", "pointerover"]), he("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Oe(e, t, a, i, l, s, d) {
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
        var I, Q;
        if (g) {
          var K = i.relatedTarget || i.toElement;
          if (I = a, Q = K ? Js(K) : null, Q !== null) {
            var ie = Ra(Q);
            (Q !== ie || Q.tag !== P && Q.tag !== H) && (Q = null);
          }
        } else
          I = null, Q = a;
        if (I !== Q) {
          var He = Qo, ot = "onMouseLeave", Ze = "onMouseEnter", Wt = "mouse";
          (t === "pointerout" || t === "pointerover") && (He = Sp, ot = "onPointerLeave", Ze = "onPointerEnter", Wt = "pointer");
          var jt = I == null ? R : Nf(I), W = Q == null ? R : Nf(Q), oe = new He(ot, Wt + "leave", I, i, l);
          oe.target = jt, oe.relatedTarget = W;
          var G = null, be = Js(l);
          if (be === a) {
            var $e = new He(Ze, Wt + "enter", Q, i, l);
            $e.target = W, $e.relatedTarget = jt, G = $e;
          }
          ER(e, oe, G, I, Q);
        }
      }
    }
    function Xe(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ge = typeof Object.is == "function" ? Object.is : Xe;
    function tt(e, t) {
      if (Ge(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var s = a[l];
        if (!Ft.call(t, s) || !Ge(e[s], t[s]))
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
    function Kt(e, t) {
      for (var a = St(e), i = 0, l = 0; a; ) {
        if (a.nodeType === Wi) {
          if (l = i + a.textContent.length, i <= t && l >= t)
            return { node: a, offset: t - i };
          i = l;
        }
        a = St(gr(a));
      }
    }
    function Ko(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
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
    function Tg(e, t, a, i, l) {
      var s = 0, d = -1, m = -1, g = 0, w = 0, R = e, U = null;
      e:
        for (; ; ) {
          for (var I = null; R === t && (a === 0 || R.nodeType === Wi) && (d = s + a), R === i && (l === 0 || R.nodeType === Wi) && (m = s + l), R.nodeType === Wi && (s += R.nodeValue.length), (I = R.firstChild) !== null; )
            U = R, R = I;
          for (; ; ) {
            if (R === e)
              break e;
            if (U === t && ++g === a && (d = s), U === i && ++w === l && (m = s), (I = R.nextSibling) !== null)
              break;
            R = U, U = R.parentNode;
          }
          R = I;
        }
      return d === -1 || m === -1 ? null : { start: d, end: m };
    }
    function tR(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var l = i.getSelection(), s = e.textContent.length, d = Math.min(t.start, s), m = t.end === void 0 ? d : Math.min(t.end, s);
        if (!l.extend && d > m) {
          var g = m;
          m = d, d = g;
        }
        var w = Kt(e, d), R = Kt(e, m);
        if (w && R) {
          if (l.rangeCount === 1 && l.anchorNode === w.node && l.anchorOffset === w.offset && l.focusNode === R.node && l.focusOffset === R.offset)
            return;
          var U = a.createRange();
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
    function nR(e) {
      return e && e.ownerDocument && QE(e.ownerDocument.documentElement, e);
    }
    function rR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function qE() {
      for (var e = window, t = ko(); t instanceof e.HTMLIFrameElement; ) {
        if (rR(t))
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
    function aR() {
      var e = qE();
      return { focusedElem: e, selectionRange: wg(e) ? oR(e) : null };
    }
    function iR(e) {
      var t = qE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && nR(a)) {
        i !== null && wg(a) && lR(a, i);
        for (var l = [], s = a; s = s.parentNode; )
          s.nodeType === oa && l.push({ element: s, left: s.scrollLeft, top: s.scrollTop });
        typeof a.focus == "function" && a.focus();
        for (var d = 0; d < l.length; d++) {
          var m = l[d];
          m.element.scrollLeft = m.left, m.element.scrollTop = m.top;
        }
      }
    }
    function oR(e) {
      var t;
      return "selectionStart" in e ? t = { start: e.selectionStart, end: e.selectionEnd } : t = Ko(e), t || { start: 0, end: 0 };
    }
    function lR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : tR(e, t);
    }
    var uR = Rt && "documentMode" in document && document.documentMode <= 11;
    function sR() {
      ht("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var kf = null, bg = null, Rp = null, Rg = !1;
    function cR(e) {
      if ("selectionStart" in e && wg(e))
        return { start: e.selectionStart, end: e.selectionEnd };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset };
    }
    function fR(e) {
      return e.window === e ? e.document : e.nodeType === ci ? e : e.ownerDocument;
    }
    function KE(e, t, a) {
      var i = fR(a);
      if (!(Rg || kf == null || kf !== ko(i))) {
        var l = cR(kf);
        if (!Rp || !tt(Rp, l)) {
          Rp = l;
          var s = qh(bg, "onSelect");
          if (s.length > 0) {
            var d = new Pr("onSelect", "select", null, t, a);
            e.push({ event: d, listeners: s }), d.target = kf;
          }
        }
      }
    }
    function dR(e, t, a, i, l, s, d) {
      var m = a ? Nf(a) : window;
      switch (t) {
        case "focusin":
          (Hu(m) || m.contentEditable === "true") && (kf = m, bg = a, Rp = null);
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
          if (uR)
            break;
        case "keydown":
        case "keyup":
          KE(e, i, l);
      }
    }
    function Gh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Df = { animationend: Gh("Animation", "AnimationEnd"), animationiteration: Gh("Animation", "AnimationIteration"), animationstart: Gh("Animation", "AnimationStart"), transitionend: Gh("Transition", "TransitionEnd") }, xg = {}, XE = {};
    Rt && (XE = document.createElement("div").style, "AnimationEvent" in window || (delete Df.animationend.animation, delete Df.animationiteration.animation, delete Df.animationstart.animation), "TransitionEvent" in window || delete Df.transitionend.transition);
    function Yh(e) {
      if (xg[e])
        return xg[e];
      if (!Df[e])
        return e;
      var t = Df[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in XE)
          return xg[e] = t[a];
      return e;
    }
    var ZE = Yh("animationend"), JE = Yh("animationiteration"), e1 = Yh("animationstart"), t1 = Yh("transitionend"), n1 = /* @__PURE__ */ new Map(), r1 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function $u(e, t) {
      n1.set(e, t), ht(t, [e]);
    }
    function pR() {
      for (var e = 0; e < r1.length; e++) {
        var t = r1[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        $u(a, "on" + i);
      }
      $u(ZE, "onAnimationEnd"), $u(JE, "onAnimationIteration"), $u(e1, "onAnimationStart"), $u("dblclick", "onDoubleClick"), $u("focusin", "onFocus"), $u("focusout", "onBlur"), $u(t1, "onTransitionEnd");
    }
    function vR(e, t, a, i, l, s, d) {
      var m = n1.get(t);
      if (m !== void 0) {
        var g = Pr, w = t;
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
            g = Ka;
            break;
          case ZE:
          case JE:
          case e1:
            g = Ef;
            break;
          case t1:
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
          t === "scroll", I = gR(a, m, i.type, R, U);
          if (I.length > 0) {
            var Q = new g(m, w, null, i, l);
            e.push({ event: Q, listeners: I });
          }
        }
      }
    }
    pR(), Y(), Of(), sR(), Hh();
    function hR(e, t, a, i, l, s, d) {
      vR(e, t, a, i, l, s);
      var m = (s & Zy) === 0;
      m && (Oe(e, t, a, i, l), F(e, t, a, i, l), dR(e, t, a, i, l), _f(e, t, a, i, l));
    }
    var xp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], _g = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(xp));
    function a1(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, qi(i, t, void 0, e), e.currentTarget = null;
    }
    function mR(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var s = t[l], d = s.instance, m = s.currentTarget, g = s.listener;
          if (d !== i && e.isPropagationStopped())
            return;
          a1(e, g, m), i = d;
        }
      else
        for (var w = 0; w < t.length; w++) {
          var R = t[w], U = R.instance, I = R.currentTarget, Q = R.listener;
          if (U !== i && e.isPropagationStopped())
            return;
          a1(e, Q, I), i = U;
        }
    }
    function i1(e, t) {
      for (var a = (t & pl) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], s = l.event, d = l.listeners;
        mR(s, d, a);
      }
      Fd();
    }
    function yR(e, t, a, i, l) {
      var s = kc(a), d = [];
      hR(d, e, i, a, s, t), i1(d, t);
    }
    function Pn(e, t) {
      _g.has(e) || y('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = Yx(t), l = CR(e, a);
      i.has(l) || (o1(t, e, Cs, a), i.add(l));
    }
    function Og(e, t, a) {
      _g.has(e) && !t && y('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= pl), o1(a, e, i, t);
    }
    var Qh = "_reactListening" + Math.random().toString(36).slice(2);
    function _p(e) {
      if (!e[Qh]) {
        e[Qh] = !0, ue.forEach(function(a) {
          a !== "selectionchange" && (_g.has(a) || Og(a, !1, e), Og(a, !0, e));
        });
        var t = e.nodeType === ci ? e : e.ownerDocument;
        t !== null && (t[Qh] || (t[Qh] = !0, Og("selectionchange", !1, t)));
      }
    }
    function o1(e, t, a, i, l) {
      var s = Iu(e, t, a), d = void 0;
      xs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (d = !0), e = e, i ? d !== void 0 ? ro(e, t, s, d) : Uu(e, t, s) : d !== void 0 ? mf(e, t, s, d) : pp(e, t, s);
    }
    function l1(e, t) {
      return e === t || e.nodeType === er && e.parentNode === t;
    }
    function kg(e, t, a, i, l) {
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
              if (g === A || g === B) {
                var w = m.stateNode.containerInfo;
                if (l1(w, d))
                  break;
                if (g === B)
                  for (var R = m.return; R !== null; ) {
                    var U = R.tag;
                    if (U === A || U === B) {
                      var I = R.stateNode.containerInfo;
                      if (l1(I, d))
                        return;
                    }
                    R = R.return;
                  }
                for (; w !== null; ) {
                  var Q = Js(w);
                  if (Q === null)
                    return;
                  var K = Q.tag;
                  if (K === P || K === H) {
                    m = s = Q;
                    continue e;
                  }
                  w = w.parentNode;
                }
              }
              m = m.return;
            }
        }
      }
      Md(function() {
        return yR(e, t, a, s);
      });
    }
    function Op(e, t, a) {
      return { instance: e, listener: t, currentTarget: a };
    }
    function gR(e, t, a, i, l, s) {
      for (var d = t !== null ? t + "Capture" : null, m = i ? d : t, g = [], w = e, R = null; w !== null; ) {
        var U = w, I = U.stateNode, Q = U.tag;
        if (Q === P && I !== null && (R = I, m !== null)) {
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
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var s = l, d = s.stateNode, m = s.tag;
        if (m === P && d !== null) {
          var g = d, w = hl(l, a);
          w != null && i.unshift(Op(l, w, g));
          var R = hl(l, t);
          R != null && i.push(Op(l, R, g));
        }
        l = l.return;
      }
      return i;
    }
    function Af(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== P);
      return e || null;
    }
    function SR(e, t) {
      for (var a = e, i = t, l = 0, s = a; s; s = Af(s))
        l++;
      for (var d = 0, m = i; m; m = Af(m))
        d++;
      for (; l - d > 0; )
        a = Af(a), l--;
      for (; d - l > 0; )
        i = Af(i), d--;
      for (var g = l; g--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Af(a), i = Af(i);
      }
      return null;
    }
    function u1(e, t, a, i, l) {
      for (var s = t._reactName, d = [], m = a; m !== null && m !== i; ) {
        var g = m, w = g.alternate, R = g.stateNode, U = g.tag;
        if (w !== null && w === i)
          break;
        if (U === P && R !== null) {
          var I = R;
          if (l) {
            var Q = hl(m, s);
            Q != null && d.unshift(Op(m, Q, I));
          } else if (!l) {
            var K = hl(m, s);
            K != null && d.push(Op(m, K, I));
          }
        }
        m = m.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function ER(e, t, a, i, l) {
      var s = i && l ? SR(i, l) : null;
      i !== null && u1(e, t, i, s, !1), l !== null && a !== null && u1(e, a, l, s, !0);
    }
    function CR(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Xa = !1, kp = "dangerouslySetInnerHTML", Kh = "suppressContentEditableWarning", Bu = "suppressHydrationWarning", s1 = "autoFocus", Xs = "children", Zs = "style", Xh = "__html", Dg, Zh, Dp, c1, Jh, f1, d1;
    Dg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Zh = function(e, t) {
      Oc(e, t), _d(e, t), lh(e, t, { registrationNameDependencies: nt, possibleRegistrationNames: Ct });
    }, f1 = Rt && !document.documentMode, Dp = function(e, t, a) {
      if (!Xa) {
        var i = em(a), l = em(t);
        l !== i && (Xa = !0, y("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, c1 = function(e) {
      if (!Xa) {
        Xa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), y("Extra attributes from the server: %s", t);
      }
    }, Jh = function(e, t) {
      t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, d1 = function(e, t) {
      var a = e.namespaceURI === Bi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var TR = /\r\n?/g, wR = /\u0000|\uFFFD/g;
    function em(e) {
      Zn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(TR, `
`).replace(wR, "");
    }
    function tm(e, t, a, i) {
      var l = em(t), s = em(e);
      if (s !== l && (i && (Xa || (Xa = !0, y('Text content did not match. Server: "%s" Client: "%s"', s, l))), a && pe))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function p1(e) {
      return e.nodeType === ci ? e : e.ownerDocument;
    }
    function bR() {
    }
    function nm(e) {
      e.onclick = bR;
    }
    function RR(e, t, a, i, l) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var d = i[s];
          if (s === Zs)
            d && Object.freeze(d), Xv(t, d);
          else if (s === kp) {
            var m = d ? d[Xh] : void 0;
            m != null && zv(t, m);
          } else if (s === Xs)
            if (typeof d == "string") {
              var g = e !== "textarea" || d !== "";
              g && bc(t, d);
            } else
              typeof d == "number" && bc(t, "" + d);
          else
            s === Kh || s === Bu || s === s1 || (nt.hasOwnProperty(s) ? d != null && (typeof d != "function" && Jh(s, d), s === "onScroll" && Pn("scroll", t)) : d != null && Ta(t, s, d, l));
        }
    }
    function xR(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], d = t[l + 1];
        s === Zs ? Xv(e, d) : s === kp ? zv(e, d) : s === Xs ? bc(e, d) : Ta(e, s, d, i);
      }
    }
    function _R(e, t, a, i) {
      var l, s = p1(a), d, m = i;
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
      return m === Bi && !l && Object.prototype.toString.call(d) === "[object HTMLUnknownElement]" && !Ft.call(Dg, e) && (Dg[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), d;
    }
    function OR(e, t) {
      return p1(t).createTextNode(e);
    }
    function kR(e, t, a, i) {
      var l = Gi(t, a);
      Zh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Pn("cancel", e), Pn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Pn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var d = 0; d < xp.length; d++)
            Pn(xp[d], e);
          s = a;
          break;
        case "source":
          Pn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Pn("error", e), Pn("load", e), s = a;
          break;
        case "details":
          Pn("toggle", e), s = a;
          break;
        case "input":
          O(e, a), s = E(e, a), Pn("invalid", e);
          break;
        case "option":
          fn(e, a), s = a;
          break;
        case "select":
          ys(e, a), s = ms(e, a), Pn("invalid", e);
          break;
        case "textarea":
          Uv(e, a), s = gd(e, a), Pn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (xc(t, s), RR(t, e, i, s, l), t) {
        case "input":
          ja(e), xe(e, a, !1);
          break;
        case "textarea":
          ja(e), Pv(e);
          break;
        case "option":
          Sn(e, a);
          break;
        case "select":
          md(e, a);
          break;
        default:
          typeof s.onClick == "function" && nm(e);
          break;
      }
    }
    function DR(e, t, a, i, l) {
      Zh(t, i);
      var s = null, d, m;
      switch (t) {
        case "input":
          d = E(e, a), m = E(e, i), s = [];
          break;
        case "select":
          d = ms(e, a), m = ms(e, i), s = [];
          break;
        case "textarea":
          d = gd(e, a), m = gd(e, i), s = [];
          break;
        default:
          d = a, m = i, typeof d.onClick != "function" && typeof m.onClick == "function" && nm(e);
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
            g === kp || g === Xs || g === Kh || g === Bu || g === s1 || (nt.hasOwnProperty(g) ? s || (s = []) : (s = s || []).push(g, null));
      for (g in m) {
        var I = m[g], Q = d != null ? d[g] : void 0;
        if (!(!m.hasOwnProperty(g) || I === Q || I == null && Q == null))
          if (g === Zs)
            if (I && Object.freeze(I), Q) {
              for (w in Q)
                Q.hasOwnProperty(w) && (!I || !I.hasOwnProperty(w)) && (R || (R = {}), R[w] = "");
              for (w in I)
                I.hasOwnProperty(w) && Q[w] !== I[w] && (R || (R = {}), R[w] = I[w]);
            } else
              R || (s || (s = []), s.push(g, R)), R = I;
          else if (g === kp) {
            var K = I ? I[Xh] : void 0, ie = Q ? Q[Xh] : void 0;
            K != null && ie !== K && (s = s || []).push(g, K);
          } else
            g === Xs ? (typeof I == "string" || typeof I == "number") && (s = s || []).push(g, "" + I) : g === Kh || g === Bu || (nt.hasOwnProperty(g) ? (I != null && (typeof I != "function" && Jh(g, I), g === "onScroll" && Pn("scroll", e)), !s && Q !== I && (s = [])) : (s = s || []).push(g, I));
      }
      return R && (Ss(R, m[Zs]), (s = s || []).push(Zs, R)), s;
    }
    function AR(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && q(e, l);
      var s = Gi(a, i), d = Gi(a, l);
      switch (xR(e, t, s, d), a) {
        case "input":
          te(e, l);
          break;
        case "textarea":
          jv(e, l);
          break;
        case "select":
          Hy(e, l);
          break;
      }
    }
    function MR(e) {
      {
        var t = e.toLowerCase();
        return _c.hasOwnProperty(t) && _c[t] || null;
      }
    }
    function LR(e, t, a, i, l, s, d) {
      var m, g;
      switch (m = Gi(t, a), Zh(t, a), t) {
        case "dialog":
          Pn("cancel", e), Pn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Pn("load", e);
          break;
        case "video":
        case "audio":
          for (var w = 0; w < xp.length; w++)
            Pn(xp[w], e);
          break;
        case "source":
          Pn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Pn("error", e), Pn("load", e);
          break;
        case "details":
          Pn("toggle", e);
          break;
        case "input":
          O(e, a), Pn("invalid", e);
          break;
        case "option":
          fn(e, a);
          break;
        case "select":
          ys(e, a), Pn("invalid", e);
          break;
        case "textarea":
          Uv(e, a), Pn("invalid", e);
          break;
      }
      xc(t, a);
      {
        g = /* @__PURE__ */ new Set();
        for (var R = e.attributes, U = 0; U < R.length; U++) {
          var I = R[U].name.toLowerCase();
          switch (I) {
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
      var Q = null;
      for (var K in a)
        if (a.hasOwnProperty(K)) {
          var ie = a[K];
          if (K === Xs)
            typeof ie == "string" ? e.textContent !== ie && (a[Bu] !== !0 && tm(e.textContent, ie, s, d), Q = [Xs, ie]) : typeof ie == "number" && e.textContent !== "" + ie && (a[Bu] !== !0 && tm(e.textContent, ie, s, d), Q = [Xs, "" + ie]);
          else if (nt.hasOwnProperty(K))
            ie != null && (typeof ie != "function" && Jh(K, ie), K === "onScroll" && Pn("scroll", e));
          else if (d && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof m == "boolean") {
            var He = void 0, ot = m && fe ? null : zr(K);
            if (a[Bu] !== !0) {
              if (!(K === Kh || K === Bu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              K === "value" || K === "checked" || K === "selected")) {
                if (K === kp) {
                  var Ze = e.innerHTML, Wt = ie ? ie[Xh] : void 0;
                  if (Wt != null) {
                    var jt = d1(e, Wt);
                    jt !== Ze && Dp(K, Ze, jt);
                  }
                } else if (K === Zs) {
                  if (g.delete(K), f1) {
                    var W = Ky(ie);
                    He = e.getAttribute("style"), W !== He && Dp(K, He, W);
                  }
                } else if (m && !fe)
                  g.delete(K.toLowerCase()), He = Si(e, K, ie), ie !== He && Dp(K, He, ie);
                else if (!Nn(K, ot, m) && !cn(K, ie, ot, m)) {
                  var oe = !1;
                  if (ot !== null)
                    g.delete(ot.attributeName), He = Ca(e, K, ie, ot);
                  else {
                    var G = i;
                    if (G === Bi && (G = Tc(t)), G === Bi)
                      g.delete(K.toLowerCase());
                    else {
                      var be = MR(K);
                      be !== null && be !== K && (oe = !0, g.delete(be)), g.delete(K);
                    }
                    He = Si(e, K, ie);
                  }
                  var $e = fe;
                  !$e && ie !== He && !oe && Dp(K, He, ie);
                }
              }
            }
          }
        }
      switch (d && // $FlowFixMe - Should be inferred as not undefined.
      g.size > 0 && a[Bu] !== !0 && c1(g), t) {
        case "input":
          ja(e), xe(e, a, !0);
          break;
        case "textarea":
          ja(e), Pv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && nm(e);
          break;
      }
      return Q;
    }
    function NR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Ag(e, t) {
      {
        if (Xa)
          return;
        Xa = !0, y("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Mg(e, t) {
      {
        if (Xa)
          return;
        Xa = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Lg(e, t, a) {
      {
        if (Xa)
          return;
        Xa = !0, y("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ng(e, t) {
      {
        if (t === "" || Xa)
          return;
        Xa = !0, y('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function IR(e, t, a) {
      switch (t) {
        case "input":
          ft(e, a);
          return;
        case "textarea":
          Sd(e, a);
          return;
        case "select":
          $y(e, a);
          return;
      }
    }
    var Ap = function() {
    }, Mp = function() {
    };
    {
      var FR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], v1 = [
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
      ], UR = v1.concat(["button"]), jR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], h1 = { current: null, formTag: null, aTagInScope: null, buttonTagInScope: null, nobrTagInScope: null, pTagInButtonScope: null, listItemTagAutoclosing: null, dlItemTagAutoclosing: null };
      Mp = function(e, t) {
        var a = Lt({}, e || h1), i = { tag: t };
        return v1.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), UR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), FR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var PR = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return jR.indexOf(t) === -1;
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
            return t == null;
        }
        return !0;
      }, zR = function(e, t) {
        switch (e) {
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
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, m1 = {};
      Ap = function(e, t, a) {
        a = a || h1;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && y("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = PR(e, l) ? null : i, d = s ? null : zR(e, a), m = s || d;
        if (m) {
          var g = m.tag, w = !!s + "|" + e + "|" + g;
          if (!m1[w]) {
            m1[w] = !0;
            var R = e, U = "";
            if (e === "#text" ? /\S/.test(t) ? R = "Text nodes" : (R = "Whitespace text nodes", U = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : R = "<" + e + ">", s) {
              var I = "";
              g === "table" && e === "tr" && (I += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), y("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", R, g, U, I);
            } else
              y("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", R, g);
          }
        }
      };
    }
    var rm = "suppressHydrationWarning", am = "$", im = "/$", Lp = "$?", Np = "$!", VR = "style", Ig = null, Fg = null;
    function HR(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ci:
        case fl: {
          t = i === ci ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : Cd(null, "");
          break;
        }
        default: {
          var s = i === er ? e.parentNode : e, d = s.namespaceURI || null;
          t = s.tagName, a = Cd(d, t);
          break;
        }
      }
      {
        var m = t.toLowerCase(), g = Mp(null, m);
        return { namespace: a, ancestorInfo: g };
      }
    }
    function $R(e, t, a) {
      {
        var i = e, l = Cd(i.namespace, t), s = Mp(i.ancestorInfo, t);
        return { namespace: l, ancestorInfo: s };
      }
    }
    function FI(e) {
      return e;
    }
    function BR(e) {
      Ig = ka(), Fg = aR();
      var t = null;
      return yr(!1), t;
    }
    function WR(e) {
      iR(Fg), yr(Ig), Ig = null, Fg = null;
    }
    function GR(e, t, a, i, l) {
      var s;
      {
        var d = i;
        if (Ap(e, null, d.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var m = "" + t.children, g = Mp(d.ancestorInfo, e);
          Ap(null, m, g);
        }
        s = d.namespace;
      }
      var w = _R(e, t, a, s);
      return Up(l, w), Bg(w, t), w;
    }
    function YR(e, t) {
      e.appendChild(t);
    }
    function QR(e, t, a, i, l) {
      switch (kR(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function qR(e, t, a, i, l, s) {
      {
        var d = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var m = "" + i.children, g = Mp(d.ancestorInfo, t);
          Ap(null, m, g);
        }
      }
      return DR(e, t, a, i);
    }
    function Ug(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function KR(e, t, a, i) {
      {
        var l = a;
        Ap(null, e, l.ancestorInfo);
      }
      var s = OR(e, t);
      return Up(i, s), s;
    }
    function XR() {
      var e = window.event;
      return e === void 0 ? eo : Wr(e.type);
    }
    var jg = typeof setTimeout == "function" ? setTimeout : void 0, ZR = typeof clearTimeout == "function" ? clearTimeout : void 0, Pg = -1, y1 = typeof Promise == "function" ? Promise : void 0, JR = typeof queueMicrotask == "function" ? queueMicrotask : typeof y1 < "u" ? function(e) {
      return y1.resolve(null).then(e).catch(ex);
    } : jg;
    function ex(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function tx(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function nx(e, t, a, i, l, s) {
      AR(e, t, a, i, l), Bg(e, l);
    }
    function g1(e) {
      bc(e, "");
    }
    function rx(e, t, a) {
      e.nodeValue = a;
    }
    function ax(e, t) {
      e.appendChild(t);
    }
    function ix(e, t) {
      var a;
      e.nodeType === er ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && nm(a);
    }
    function ox(e, t, a) {
      e.insertBefore(t, a);
    }
    function lx(e, t, a) {
      e.nodeType === er ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function ux(e, t) {
      e.removeChild(t);
    }
    function sx(e, t) {
      e.nodeType === er ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function zg(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === er) {
          var s = l.data;
          if (s === im)
            if (i === 0) {
              e.removeChild(l), Ut(t);
              return;
            } else
              i--;
          else
            (s === am || s === Lp || s === Np) && i++;
        }
        a = l;
      } while (a);
      Ut(t);
    }
    function cx(e, t) {
      e.nodeType === er ? zg(e.parentNode, t) : e.nodeType === oa && zg(e, t), Ut(e);
    }
    function fx(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function dx(e) {
      e.nodeValue = "";
    }
    function px(e, t) {
      e = e;
      var a = t[VR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Rc("display", i);
    }
    function vx(e, t) {
      e.nodeValue = t;
    }
    function hx(e) {
      e.nodeType === oa ? e.textContent = "" : e.nodeType === ci && e.documentElement && e.removeChild(e.documentElement);
    }
    function mx(e, t, a) {
      return e.nodeType !== oa || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function yx(e, t) {
      return t === "" || e.nodeType !== Wi ? null : e;
    }
    function gx(e) {
      return e.nodeType !== er ? null : e;
    }
    function S1(e) {
      return e.data === Lp;
    }
    function Vg(e) {
      return e.data === Np;
    }
    function Sx(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), { message: i, digest: a, stack: l };
    }
    function Ex(e, t) {
      e._reactRetry = t;
    }
    function om(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === oa || t === Wi)
          break;
        if (t === er) {
          var a = e.data;
          if (a === am || a === Np || a === Lp)
            break;
          if (a === im)
            return null;
        }
      }
      return e;
    }
    function Ip(e) {
      return om(e.nextSibling);
    }
    function Cx(e) {
      return om(e.firstChild);
    }
    function Tx(e) {
      return om(e.firstChild);
    }
    function wx(e) {
      return om(e.nextSibling);
    }
    function bx(e, t, a, i, l, s, d) {
      Up(s, e), Bg(e, a);
      var m;
      {
        var g = l;
        m = g.namespace;
      }
      var w = (s.mode & It) !== st;
      return LR(e, t, a, m, i, w, d);
    }
    function Rx(e, t, a, i) {
      return Up(a, e), a.mode & It, NR(e, t);
    }
    function xx(e, t) {
      Up(t, e);
    }
    function _x(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === er) {
          var i = t.data;
          if (i === im) {
            if (a === 0)
              return Ip(t);
            a--;
          } else
            (i === am || i === Np || i === Lp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function E1(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === er) {
          var i = t.data;
          if (i === am || i === Np || i === Lp) {
            if (a === 0)
              return t;
            a--;
          } else
            i === im && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Ox(e) {
      Ut(e);
    }
    function kx(e) {
      Ut(e);
    }
    function Dx(e) {
      return e !== "head" && e !== "body";
    }
    function Ax(e, t, a, i) {
      var l = !0;
      tm(t.nodeValue, a, i, l);
    }
    function Mx(e, t, a, i, l, s) {
      if (t[rm] !== !0) {
        var d = !0;
        tm(i.nodeValue, l, s, d);
      }
    }
    function Lx(e, t) {
      t.nodeType === oa ? Ag(e, t) : t.nodeType === er || Mg(e, t);
    }
    function Nx(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === oa ? Ag(a, t) : t.nodeType === er || Mg(a, t));
      }
    }
    function Ix(e, t, a, i, l) {
      (l || t[rm] !== !0) && (i.nodeType === oa ? Ag(a, i) : i.nodeType === er || Mg(a, i));
    }
    function Fx(e, t, a) {
      Lg(e, t);
    }
    function Ux(e, t) {
      Ng(e, t);
    }
    function jx(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Lg(i, t);
      }
    }
    function Px(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ng(a, t);
      }
    }
    function zx(e, t, a, i, l, s) {
      (s || t[rm] !== !0) && Lg(a, i);
    }
    function Vx(e, t, a, i, l) {
      (l || t[rm] !== !0) && Ng(a, i);
    }
    function Hx(e) {
      y("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function $x(e) {
      _p(e);
    }
    var Mf = Math.random().toString(36).slice(2), Lf = "__reactFiber$" + Mf, Hg = "__reactProps$" + Mf, Fp = "__reactContainer$" + Mf, $g = "__reactEvents$" + Mf, Bx = "__reactListeners$" + Mf, Wx = "__reactHandles$" + Mf;
    function Gx(e) {
      delete e[Lf], delete e[Hg], delete e[$g], delete e[Bx], delete e[Wx];
    }
    function Up(e, t) {
      t[Lf] = e;
    }
    function lm(e, t) {
      t[Fp] = e;
    }
    function C1(e) {
      e[Fp] = null;
    }
    function jp(e) {
      return !!e[Fp];
    }
    function Js(e) {
      var t = e[Lf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Fp] || a[Lf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = E1(e); l !== null; ) {
              var s = l[Lf];
              if (s)
                return s;
              l = E1(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Wu(e) {
      var t = e[Lf] || e[Fp];
      return t && (t.tag === P || t.tag === H || t.tag === V || t.tag === A) ? t : null;
    }
    function Nf(e) {
      if (e.tag === P || e.tag === H)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function um(e) {
      return e[Hg] || null;
    }
    function Bg(e, t) {
      e[Hg] = t;
    }
    function Yx(e) {
      var t = e[$g];
      return t === void 0 && (t = e[$g] = /* @__PURE__ */ new Set()), t;
    }
    var T1 = {}, w1 = p.ReactDebugCurrentFrame;
    function sm(e) {
      if (e) {
        var t = e._owner, a = bi(e.type, e._source, t ? t.type : null);
        w1.setExtraStackFrame(a);
      } else
        w1.setExtraStackFrame(null);
    }
    function io(e, t, a, i, l) {
      {
        var s = Function.call.bind(Ft);
        for (var d in e)
          if (s(e, d)) {
            var m = void 0;
            try {
              if (typeof e[d] != "function") {
                var g = Error((i || "React class") + ": " + a + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              m = e[d](t, d, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              m = w;
            }
            m && !(m instanceof Error) && (sm(l), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, d, typeof m), sm(null)), m instanceof Error && !(m.message in T1) && (T1[m.message] = !0, sm(l), y("Failed %s type: %s", a, m.message), sm(null));
          }
      }
    }
    var Wg = [], cm;
    cm = [];
    var Pl = -1;
    function Gu(e) {
      return { current: e };
    }
    function ha(e, t) {
      if (Pl < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== cm[Pl] && y("Unexpected Fiber popped."), e.current = Wg[Pl], Wg[Pl] = null, cm[Pl] = null, Pl--;
    }
    function ma(e, t, a) {
      Pl++, Wg[Pl] = e.current, cm[Pl] = a, e.current = t;
    }
    var Gg;
    Gg = {};
    var hi = {};
    Object.freeze(hi);
    var zl = Gu(hi), Xo = Gu(!1), Yg = hi;
    function If(e, t, a) {
      return a && Zo(t) ? Yg : zl.current;
    }
    function b1(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Ff(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return hi;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var d in i)
          s[d] = t[d];
        {
          var m = wt(e) || "Unknown";
          io(i, s, "context", m);
        }
        return l && b1(e, t, s), s;
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
      ha(Xo, e), ha(zl, e);
    }
    function Qg(e) {
      ha(Xo, e), ha(zl, e);
    }
    function R1(e, t, a) {
      {
        if (zl.current !== hi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ma(zl, t, e), ma(Xo, a, e);
      }
    }
    function x1(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = wt(e) || "Unknown";
            Gg[s] || (Gg[s] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var d = i.getChildContext();
        for (var m in d)
          if (!(m in l))
            throw new Error((wt(e) || "Unknown") + '.getChildContext(): key "' + m + '" is not defined in childContextTypes.');
        {
          var g = wt(e) || "Unknown";
          io(l, d, "child context", g);
        }
        return Lt({}, a, d);
      }
    }
    function pm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || hi;
        return Yg = zl.current, ma(zl, a, e), ma(Xo, Xo.current, e), !0;
      }
    }
    function _1(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = x1(e, t, Yg);
          i.__reactInternalMemoizedMergedChildContext = l, ha(Xo, e), ha(zl, e), ma(zl, l, e), ma(Xo, a, e);
        } else
          ha(Xo, e), ma(Xo, a, e);
      }
    }
    function Qx(e) {
      {
        if (!Vd(e) || e.tag !== M)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case A:
              return t.stateNode.context;
            case M: {
              var a = t.type;
              if (Zo(a))
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
    function O1(e) {
      Vl === null ? Vl = [e] : Vl.push(e);
    }
    function qx(e) {
      qg = !0, O1(e);
    }
    function k1() {
      qg && Qu();
    }
    function Qu() {
      if (!Kg && Vl !== null) {
        Kg = !0;
        var e = 0, t = Ya();
        try {
          var a = !0, i = Vl;
          for (lr(Nr); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          Vl = null, qg = !1;
        } catch (s) {
          throw Vl !== null && (Vl = Vl.slice(e + 1)), Fc(jc, Qu), s;
        } finally {
          lr(t), Kg = !1;
        }
      }
      return null;
    }
    var Uf = [], jf = 0, hm = null, mm = 0, Li = [], Ni = 0, ec = null, Hl = 1, $l = "";
    function Kx(e) {
      return nc(), (e.flags & jd) !== at;
    }
    function Xx(e) {
      return nc(), mm;
    }
    function Zx() {
      var e = $l, t = Hl, a = t & ~Jx(t);
      return a.toString(32) + e;
    }
    function tc(e, t) {
      nc(), Uf[jf++] = mm, Uf[jf++] = hm, hm = e, mm = t;
    }
    function D1(e, t, a) {
      nc(), Li[Ni++] = Hl, Li[Ni++] = $l, Li[Ni++] = ec, ec = e;
      var i = Hl, l = $l, s = ym(i) - 1, d = i & ~(1 << s), m = a + 1, g = ym(t) + s;
      if (g > 30) {
        var w = s - s % 5, R = (1 << w) - 1, U = (d & R).toString(32), I = d >> w, Q = s - w, K = ym(t) + Q, ie = m << Q, He = ie | I, ot = U + l;
        Hl = 1 << K | He, $l = ot;
      } else {
        var Ze = m << s, Wt = Ze | d, jt = l;
        Hl = 1 << g | Wt, $l = jt;
      }
    }
    function Xg(e) {
      nc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        tc(e, a), D1(e, a, i);
      }
    }
    function ym(e) {
      return 32 - Bc(e);
    }
    function Jx(e) {
      return 1 << ym(e) - 1;
    }
    function Zg(e) {
      for (; e === hm; )
        hm = Uf[--jf], Uf[jf] = null, mm = Uf[--jf], Uf[jf] = null;
      for (; e === ec; )
        ec = Li[--Ni], Li[Ni] = null, $l = Li[--Ni], Li[Ni] = null, Hl = Li[--Ni], Li[Ni] = null;
    }
    function e_() {
      return nc(), ec !== null ? { id: Hl, overflow: $l } : null;
    }
    function t_(e, t) {
      nc(), Li[Ni++] = Hl, Li[Ni++] = $l, Li[Ni++] = ec, Hl = t.id, $l = t.overflow, ec = e;
    }
    function nc() {
      Yr() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Gr = null, Ii = null, oo = !1, rc = !1, qu = null;
    function n_() {
      oo && y("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function A1() {
      rc = !0;
    }
    function r_() {
      return rc;
    }
    function a_(e) {
      var t = e.stateNode.containerInfo;
      return Ii = Tx(t), Gr = e, oo = !0, qu = null, rc = !1, !0;
    }
    function i_(e, t, a) {
      return Ii = wx(t), Gr = e, oo = !0, qu = null, rc = !1, a !== null && t_(e, a), !0;
    }
    function M1(e, t) {
      switch (e.tag) {
        case A: {
          Lx(e.stateNode.containerInfo, t);
          break;
        }
        case P: {
          var a = (e.mode & It) !== st;
          Ix(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case V: {
          var i = e.memoizedState;
          i.dehydrated !== null && Nx(i.dehydrated, t);
          break;
        }
      }
    }
    function L1(e, t) {
      M1(e, t);
      var a = uD();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= nn) : i.push(a);
    }
    function Jg(e, t) {
      {
        if (rc)
          return;
        switch (e.tag) {
          case A: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case P:
                var i = t.type;
                t.pendingProps, Fx(a, i);
                break;
              case H:
                var l = t.pendingProps;
                Ux(a, l);
                break;
            }
            break;
          }
          case P: {
            var s = e.type, d = e.memoizedProps, m = e.stateNode;
            switch (t.tag) {
              case P: {
                var g = t.type, w = t.pendingProps, R = (e.mode & It) !== st;
                zx(
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
              case H: {
                var U = t.pendingProps, I = (e.mode & It) !== st;
                Vx(
                  s,
                  d,
                  m,
                  U,
                  // TODO: Delete this argument when we remove the legacy root API.
                  I
                );
                break;
              }
            }
            break;
          }
          case V: {
            var Q = e.memoizedState, K = Q.dehydrated;
            if (K !== null)
              switch (t.tag) {
                case P:
                  var ie = t.type;
                  t.pendingProps, jx(K, ie);
                  break;
                case H:
                  var He = t.pendingProps;
                  Px(K, He);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function N1(e, t) {
      t.flags = t.flags & ~Ha | xn, Jg(e, t);
    }
    function I1(e, t) {
      switch (e.tag) {
        case P: {
          var a = e.type;
          e.pendingProps;
          var i = mx(t, a);
          return i !== null ? (e.stateNode = i, Gr = e, Ii = Cx(i), !0) : !1;
        }
        case H: {
          var l = e.pendingProps, s = yx(t, l);
          return s !== null ? (e.stateNode = s, Gr = e, Ii = null, !0) : !1;
        }
        case V: {
          var d = gx(t);
          if (d !== null) {
            var m = { dehydrated: d, treeContext: e_(), retryLane: pa };
            e.memoizedState = m;
            var g = sD(d);
            return g.return = e, e.child = g, Gr = e, Ii = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function eS(e) {
      return (e.mode & It) !== st && (e.flags & gt) === at;
    }
    function tS(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function nS(e) {
      if (oo) {
        var t = Ii;
        if (!t) {
          eS(e) && (Jg(Gr, e), tS()), N1(Gr, e), oo = !1, Gr = e;
          return;
        }
        var a = t;
        if (!I1(e, t)) {
          eS(e) && (Jg(Gr, e), tS()), t = Ip(a);
          var i = Gr;
          if (!t || !I1(e, t)) {
            N1(Gr, e), oo = !1, Gr = e;
            return;
          }
          L1(i, a);
        }
      }
    }
    function o_(e, t, a) {
      var i = e.stateNode, l = !rc, s = bx(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = s, s !== null;
    }
    function l_(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Rx(t, a, e);
      if (i) {
        var l = Gr;
        if (l !== null)
          switch (l.tag) {
            case A: {
              var s = l.stateNode.containerInfo, d = (l.mode & It) !== st;
              Ax(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                d
              );
              break;
            }
            case P: {
              var m = l.type, g = l.memoizedProps, w = l.stateNode, R = (l.mode & It) !== st;
              Mx(
                m,
                g,
                w,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                R
              );
              break;
            }
          }
      }
      return i;
    }
    function u_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      xx(a, e);
    }
    function s_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return _x(a);
    }
    function F1(e) {
      for (var t = e.return; t !== null && t.tag !== P && t.tag !== A && t.tag !== V; )
        t = t.return;
      Gr = t;
    }
    function gm(e) {
      if (e !== Gr)
        return !1;
      if (!oo)
        return F1(e), oo = !0, !1;
      if (e.tag !== A && (e.tag !== P || Dx(e.type) && !Ug(e.type, e.memoizedProps))) {
        var t = Ii;
        if (t)
          if (eS(e))
            U1(e), tS();
          else
            for (; t; )
              L1(e, t), t = Ip(t);
      }
      return F1(e), e.tag === V ? Ii = s_(e) : Ii = Gr ? Ip(e.stateNode) : null, !0;
    }
    function c_() {
      return oo && Ii !== null;
    }
    function U1(e) {
      for (var t = Ii; t; )
        M1(e, t), t = Ip(t);
    }
    function Pf() {
      Gr = null, Ii = null, oo = !1, rc = !1;
    }
    function j1() {
      qu !== null && (MT(qu), qu = null);
    }
    function Yr() {
      return oo;
    }
    function rS(e) {
      qu === null ? qu = [e] : qu.push(e);
    }
    var f_ = p.ReactCurrentBatchConfig, d_ = null;
    function p_() {
      return f_.transition;
    }
    var lo = { recordUnsafeLifecycleWarnings: function(e, t) {
    }, flushPendingUnsafeLifecycleWarnings: function() {
    }, recordLegacyContextWarning: function(e, t) {
    }, flushLegacyContextWarning: function() {
    }, discardPendingWarnings: function() {
    } };
    {
      var v_ = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Un && (t = a), a = a.return;
        return t;
      }, ac = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Pp = [], zp = [], Vp = [], Hp = [], $p = [], Bp = [], ic = /* @__PURE__ */ new Set();
      lo.recordUnsafeLifecycleWarnings = function(e, t) {
        ic.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Pp.push(e), e.mode & Un && typeof t.UNSAFE_componentWillMount == "function" && zp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Vp.push(e), e.mode & Un && typeof t.UNSAFE_componentWillReceiveProps == "function" && Hp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && $p.push(e), e.mode & Un && typeof t.UNSAFE_componentWillUpdate == "function" && Bp.push(e));
      }, lo.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Pp.length > 0 && (Pp.forEach(function(I) {
          e.add(wt(I) || "Component"), ic.add(I.type);
        }), Pp = []);
        var t = /* @__PURE__ */ new Set();
        zp.length > 0 && (zp.forEach(function(I) {
          t.add(wt(I) || "Component"), ic.add(I.type);
        }), zp = []);
        var a = /* @__PURE__ */ new Set();
        Vp.length > 0 && (Vp.forEach(function(I) {
          a.add(wt(I) || "Component"), ic.add(I.type);
        }), Vp = []);
        var i = /* @__PURE__ */ new Set();
        Hp.length > 0 && (Hp.forEach(function(I) {
          i.add(wt(I) || "Component"), ic.add(I.type);
        }), Hp = []);
        var l = /* @__PURE__ */ new Set();
        $p.length > 0 && ($p.forEach(function(I) {
          l.add(wt(I) || "Component"), ic.add(I.type);
        }), $p = []);
        var s = /* @__PURE__ */ new Set();
        if (Bp.length > 0 && (Bp.forEach(function(I) {
          s.add(wt(I) || "Component"), ic.add(I.type);
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
        if (a.size > 0) {
          var R = ac(a);
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
      var Sm = /* @__PURE__ */ new Map(), P1 = /* @__PURE__ */ new Set();
      lo.recordLegacyContextWarning = function(e, t) {
        var a = v_(e);
        if (a === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!P1.has(e.type)) {
          var i = Sm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Sm.set(a, i)), i.push(e));
        }
      }, lo.flushLegacyContextWarning = function() {
        Sm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(wt(s) || "Component"), P1.add(s.type);
            });
            var l = ac(i);
            try {
              ln(a), y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              Vn();
            }
          }
        });
      }, lo.discardPendingWarnings = function() {
        Pp = [], zp = [], Vp = [], Hp = [], $p = [], Bp = [], Sm = /* @__PURE__ */ new Map();
      };
    }
    function uo(e, t) {
      if (e && e.defaultProps) {
        var a = Lt({}, t), i = e.defaultProps;
        for (var l in i)
          a[l] === void 0 && (a[l] = i[l]);
        return a;
      }
      return t;
    }
    var aS = Gu(null), iS;
    iS = {};
    var Em = null, zf = null, oS = null, Cm = !1;
    function Tm() {
      Em = null, zf = null, oS = null, Cm = !1;
    }
    function z1() {
      Cm = !0;
    }
    function V1() {
      Cm = !1;
    }
    function H1(e, t, a) {
      ma(aS, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== iS && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = iS;
    }
    function lS(e, t) {
      var a = aS.current;
      ha(aS, t), e._currentValue = a;
    }
    function uS(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (Ol(i.childLanes, t) ? l !== null && !Ol(l.childLanes, t) && (l.childLanes = Dt(l.childLanes, t)) : (i.childLanes = Dt(i.childLanes, t), l !== null && (l.childLanes = Dt(l.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && y("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function h_(e, t, a) {
      m_(e, t, a);
    }
    function m_(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, s = i.dependencies;
        if (s !== null) {
          l = i.child;
          for (var d = s.firstContext; d !== null; ) {
            if (d.context === t) {
              if (i.tag === M) {
                var m = or(a), g = Bl(Cn, m);
                g.tag = bm;
                var w = i.updateQueue;
                if (w !== null) {
                  var R = w.shared, U = R.pending;
                  U === null ? g.next = g : (g.next = U.next, U.next = g), R.pending = g;
                }
              }
              i.lanes = Dt(i.lanes, a);
              var I = i.alternate;
              I !== null && (I.lanes = Dt(I.lanes, a)), uS(i.return, a, e), s.lanes = Dt(s.lanes, a);
              break;
            }
            d = d.next;
          }
        } else if (i.tag === ce)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === vt) {
          var Q = i.return;
          if (Q === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          Q.lanes = Dt(Q.lanes, a);
          var K = Q.alternate;
          K !== null && (K.lanes = Dt(K.lanes, a)), uS(Q, a, e), l = i.sibling;
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
            var ie = l.sibling;
            if (ie !== null) {
              ie.return = l.return, l = ie;
              break;
            }
            l = l.return;
          }
        i = l;
      }
    }
    function Vf(e, t) {
      Em = e, zf = null, oS = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (va(a.lanes, t) && av(), a.firstContext = null);
      }
    }
    function Sr(e) {
      Cm && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (oS !== e) {
        var a = { context: e, memoizedValue: t, next: null };
        if (zf === null) {
          if (Em === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          zf = a, Em.dependencies = { lanes: se, firstContext: a };
        } else
          zf = zf.next = a;
      }
      return t;
    }
    var oc = null;
    function sS(e) {
      oc === null ? oc = [e] : oc.push(e);
    }
    function y_() {
      if (oc !== null) {
        for (var e = 0; e < oc.length; e++) {
          var t = oc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, l = t.pending;
            if (l !== null) {
              var s = l.next;
              l.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        oc = null;
      }
    }
    function $1(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, sS(t)) : (a.next = l.next, l.next = a), t.interleaved = a, wm(e, i);
    }
    function g_(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, sS(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function S_(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, sS(t)) : (a.next = l.next, l.next = a), t.interleaved = a, wm(e, i);
    }
    function Za(e, t) {
      return wm(e, t);
    }
    var E_ = wm;
    function wm(e, t) {
      e.lanes = Dt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Dt(a.lanes, t)), a === null && (e.flags & (xn | Ha)) !== at && BT(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = Dt(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = Dt(a.childLanes, t) : (l.flags & (xn | Ha)) !== at && BT(e), i = l, l = l.return;
      if (i.tag === A) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var B1 = 0, W1 = 1, bm = 2, cS = 3, Rm = !1, fS, xm;
    fS = !1, xm = null;
    function dS(e) {
      var t = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: se }, effects: null };
      e.updateQueue = t;
    }
    function G1(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var l = { baseState: i.baseState, firstBaseUpdate: i.firstBaseUpdate, lastBaseUpdate: i.lastBaseUpdate, shared: i.shared, effects: i.effects };
        t.updateQueue = l;
      }
    }
    function Bl(e, t) {
      var a = { eventTime: e, lane: t, tag: B1, payload: null, callback: null, next: null };
      return a;
    }
    function Ku(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var l = i.shared;
      if (xm === l && !fS && (y("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), fS = !0), Ek()) {
        var s = l.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, E_(e, a);
      } else
        return S_(e, l, t, a);
    }
    function _m(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (ep(a)) {
          var s = l.lanes;
          s = np(s, e.pendingLanes);
          var d = Dt(s, a);
          l.lanes = d, Du(e, d);
        }
      }
    }
    function pS(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var l = i.updateQueue;
        if (a === l) {
          var s = null, d = null, m = a.firstBaseUpdate;
          if (m !== null) {
            var g = m;
            do {
              var w = { eventTime: g.eventTime, lane: g.lane, tag: g.tag, payload: g.payload, callback: g.callback, next: null };
              d === null ? s = d = w : (d.next = w, d = w), g = g.next;
            } while (g !== null);
            d === null ? s = d = t : (d.next = t, d = t);
          } else
            s = d = t;
          a = { baseState: l.baseState, firstBaseUpdate: s, lastBaseUpdate: d, shared: l.shared, effects: l.effects }, e.updateQueue = a;
          return;
        }
      }
      var R = a.lastBaseUpdate;
      R === null ? a.firstBaseUpdate = t : R.next = t, a.lastBaseUpdate = t;
    }
    function C_(e, t, a, i, l, s) {
      switch (a.tag) {
        case W1: {
          var d = a.payload;
          if (typeof d == "function") {
            z1();
            var m = d.call(s, i, l);
            {
              if (e.mode & Un) {
                ir(!0);
                try {
                  d.call(s, i, l);
                } finally {
                  ir(!1);
                }
              }
              V1();
            }
            return m;
          }
          return d;
        }
        case cS:
          e.flags = e.flags & ~vr | gt;
        case B1: {
          var g = a.payload, w;
          if (typeof g == "function") {
            z1(), w = g.call(s, i, l);
            {
              if (e.mode & Un) {
                ir(!0);
                try {
                  g.call(s, i, l);
                } finally {
                  ir(!1);
                }
              }
              V1();
            }
          } else
            w = g;
          return w == null ? i : Lt({}, i, w);
        }
        case bm:
          return Rm = !0, i;
      }
      return i;
    }
    function Om(e, t, a, i) {
      var l = e.updateQueue;
      Rm = !1, xm = l.shared;
      var s = l.firstBaseUpdate, d = l.lastBaseUpdate, m = l.shared.pending;
      if (m !== null) {
        l.shared.pending = null;
        var g = m, w = g.next;
        g.next = null, d === null ? s = w : d.next = w, d = g;
        var R = e.alternate;
        if (R !== null) {
          var U = R.updateQueue, I = U.lastBaseUpdate;
          I !== d && (I === null ? U.firstBaseUpdate = w : I.next = w, U.lastBaseUpdate = g);
        }
      }
      if (s !== null) {
        var Q = l.baseState, K = se, ie = null, He = null, ot = null, Ze = s;
        do {
          var Wt = Ze.lane, jt = Ze.eventTime;
          if (Ol(i, Wt)) {
            if (ot !== null) {
              var oe = {
                eventTime: jt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: $t,
                tag: Ze.tag,
                payload: Ze.payload,
                callback: Ze.callback,
                next: null
              };
              ot = ot.next = oe;
            }
            Q = C_(e, l, Ze, Q, t, a);
            var G = Ze.callback;
            if (G !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ze.lane !== $t) {
              e.flags |= _i;
              var be = l.effects;
              be === null ? l.effects = [Ze] : be.push(Ze);
            }
          } else {
            var W = { eventTime: jt, lane: Wt, tag: Ze.tag, payload: Ze.payload, callback: Ze.callback, next: null };
            ot === null ? (He = ot = W, ie = Q) : ot = ot.next = W, K = Dt(K, Wt);
          }
          if (Ze = Ze.next, Ze === null) {
            if (m = l.shared.pending, m === null)
              break;
            var $e = m, Ue = $e.next;
            $e.next = null, Ze = Ue, l.lastBaseUpdate = $e, l.shared.pending = null;
          }
        } while (!0);
        ot === null && (ie = Q), l.baseState = ie, l.firstBaseUpdate = He, l.lastBaseUpdate = ot;
        var yt = l.shared.interleaved;
        if (yt !== null) {
          var xt = yt;
          do
            K = Dt(K, xt.lane), xt = xt.next;
          while (xt !== yt);
        } else
          s === null && (l.shared.lanes = se);
        mv(K), e.lanes = K, e.memoizedState = Q;
      }
      xm = null;
    }
    function T_(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function Y1() {
      Rm = !1;
    }
    function km() {
      return Rm;
    }
    function Q1(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l], d = s.callback;
          d !== null && (s.callback = null, T_(d, a));
        }
    }
    var vS = {}, q1 = new c.Component().refs, hS, mS, yS, gS, SS, K1, Dm, ES, CS, TS;
    {
      hS = /* @__PURE__ */ new Set(), mS = /* @__PURE__ */ new Set(), yS = /* @__PURE__ */ new Set(), gS = /* @__PURE__ */ new Set(), ES = /* @__PURE__ */ new Set(), SS = /* @__PURE__ */ new Set(), CS = /* @__PURE__ */ new Set(), TS = /* @__PURE__ */ new Set();
      var X1 = /* @__PURE__ */ new Set();
      Dm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          X1.has(a) || (X1.add(a), y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, K1 = function(e, t) {
        if (t === void 0) {
          var a = Qt(e) || "Component";
          SS.has(a) || (SS.add(a), y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(vS, "_processChildContext", { enumerable: !1, value: function() {
        throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
      } }), Object.freeze(vS);
    }
    function wS(e, t, a, i) {
      var l = e.memoizedState, s = a(i, l);
      {
        if (e.mode & Un) {
          ir(!0);
          try {
            s = a(i, l);
          } finally {
            ir(!1);
          }
        }
        K1(t, s);
      }
      var d = s == null ? l : Lt({}, l, s);
      if (e.memoizedState = d, e.lanes === se) {
        var m = e.updateQueue;
        m.baseState = d;
      }
    }
    var bS = { isMounted: xa, enqueueSetState: function(e, t, a) {
      var i = za(e), l = Ma(), s = as(i), d = Bl(l, s);
      d.payload = t, a != null && (Dm(a, "setState"), d.callback = a);
      var m = Ku(i, d, s);
      m !== null && (Ar(m, i, s, l), _m(m, i, s)), Ho(i, s);
    }, enqueueReplaceState: function(e, t, a) {
      var i = za(e), l = Ma(), s = as(i), d = Bl(l, s);
      d.tag = W1, d.payload = t, a != null && (Dm(a, "replaceState"), d.callback = a);
      var m = Ku(i, d, s);
      m !== null && (Ar(m, i, s, l), _m(m, i, s)), Ho(i, s);
    }, enqueueForceUpdate: function(e, t) {
      var a = za(e), i = Ma(), l = as(a), s = Bl(i, l);
      s.tag = bm, t != null && (Dm(t, "forceUpdate"), s.callback = t);
      var d = Ku(a, s, l);
      d !== null && (Ar(d, a, l, i), _m(d, a, l)), Kd(a, l);
    } };
    function Z1(e, t, a, i, l, s, d) {
      var m = e.stateNode;
      if (typeof m.shouldComponentUpdate == "function") {
        var g = m.shouldComponentUpdate(i, s, d);
        {
          if (e.mode & Un) {
            ir(!0);
            try {
              g = m.shouldComponentUpdate(i, s, d);
            } finally {
              ir(!1);
            }
          }
          g === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Qt(t) || "Component");
        }
        return g;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !tt(a, i) || !tt(l, s) : !0;
    }
    function w_(e, t, a) {
      var i = e.stateNode;
      {
        var l = Qt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), i.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !CS.has(t) && (CS.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Qt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var d = i.props !== a;
        i.props !== void 0 && d && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !yS.has(t) && (yS.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Qt(t))), typeof i.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var m = i.state;
        m && (typeof m != "object" || Vt(m)) && y("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function J1(e, t) {
      t.updater = bS, e.stateNode = t, Eu(t, e), t._reactInternalInstance = vS;
    }
    function eC(e, t, a) {
      var i = !1, l = hi, s = hi, d = t.contextType;
      if ("contextType" in t) {
        var m = (
          // Allow null for conditional declaration
          d === null || d !== void 0 && d.$$typeof === Me && d._context === void 0
        );
        if (!m && !TS.has(t)) {
          TS.add(t);
          var g = "";
          d === void 0 ? g = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof d != "object" ? g = " However, it is set to a " + typeof d + "." : d.$$typeof === ye ? g = " Did you accidentally pass the Context.Provider instead?" : d._context !== void 0 ? g = " Did you accidentally pass the Context.Consumer instead?" : g = " However, it is set to an object with keys {" + Object.keys(d).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Qt(t) || "Component", g);
        }
      }
      if (typeof d == "object" && d !== null)
        s = Sr(d);
      else {
        l = If(e, t, !0);
        var w = t.contextTypes;
        i = w != null, s = i ? Ff(e, l) : hi;
      }
      var R = new t(a, s);
      if (e.mode & Un) {
        ir(!0);
        try {
          R = new t(a, s);
        } finally {
          ir(!1);
        }
      }
      var U = e.memoizedState = R.state !== null && R.state !== void 0 ? R.state : null;
      J1(e, R);
      {
        if (typeof t.getDerivedStateFromProps == "function" && U === null) {
          var I = Qt(t) || "Component";
          mS.has(I) || (mS.add(I), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", I, R.state === null ? "null" : "undefined", I));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof R.getSnapshotBeforeUpdate == "function") {
          var Q = null, K = null, ie = null;
          if (typeof R.componentWillMount == "function" && R.componentWillMount.__suppressDeprecationWarning !== !0 ? Q = "componentWillMount" : typeof R.UNSAFE_componentWillMount == "function" && (Q = "UNSAFE_componentWillMount"), typeof R.componentWillReceiveProps == "function" && R.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? K = "componentWillReceiveProps" : typeof R.UNSAFE_componentWillReceiveProps == "function" && (K = "UNSAFE_componentWillReceiveProps"), typeof R.componentWillUpdate == "function" && R.componentWillUpdate.__suppressDeprecationWarning !== !0 ? ie = "componentWillUpdate" : typeof R.UNSAFE_componentWillUpdate == "function" && (ie = "UNSAFE_componentWillUpdate"), Q !== null || K !== null || ie !== null) {
            var He = Qt(t) || "Component", ot = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            gS.has(He) || (gS.add(He), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, He, ot, Q !== null ? `
  ` + Q : "", K !== null ? `
  ` + K : "", ie !== null ? `
  ` + ie : ""));
          }
        }
      }
      return i && b1(e, l, s), R;
    }
    function b_(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", wt(e) || "Component"), bS.enqueueReplaceState(t, t.state, null));
    }
    function tC(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var s = wt(e) || "Component";
          hS.has(s) || (hS.add(s), y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        bS.enqueueReplaceState(t, t.state, null);
      }
    }
    function RS(e, t, a, i) {
      w_(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = q1, dS(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        l.context = Sr(s);
      else {
        var d = If(e, t, !0);
        l.context = Ff(e, d);
      }
      {
        if (l.state === a) {
          var m = Qt(t) || "Component";
          ES.has(m) || (ES.add(m), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", m));
        }
        e.mode & Un && lo.recordLegacyContextWarning(e, l), lo.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var g = t.getDerivedStateFromProps;
      if (typeof g == "function" && (wS(e, t, g, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (b_(e, l), Om(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var w = kt;
        w |= ua, (e.mode & Wa) !== st && (w |= sa), e.flags |= w;
      }
    }
    function R_(e, t, a, i) {
      var l = e.stateNode, s = e.memoizedProps;
      l.props = s;
      var d = l.context, m = t.contextType, g = hi;
      if (typeof m == "object" && m !== null)
        g = Sr(m);
      else {
        var w = If(e, t, !0);
        g = Ff(e, w);
      }
      var R = t.getDerivedStateFromProps, U = typeof R == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !U && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== a || d !== g) && tC(e, l, a, g), Y1();
      var I = e.memoizedState, Q = l.state = I;
      if (Om(e, a, l, i), Q = e.memoizedState, s === a && I === Q && !fm() && !km()) {
        if (typeof l.componentDidMount == "function") {
          var K = kt;
          K |= ua, (e.mode & Wa) !== st && (K |= sa), e.flags |= K;
        }
        return !1;
      }
      typeof R == "function" && (wS(e, t, R, a), Q = e.memoizedState);
      var ie = km() || Z1(e, t, s, a, I, Q, g);
      if (ie) {
        if (!U && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var He = kt;
          He |= ua, (e.mode & Wa) !== st && (He |= sa), e.flags |= He;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var ot = kt;
          ot |= ua, (e.mode & Wa) !== st && (ot |= sa), e.flags |= ot;
        }
        e.memoizedProps = a, e.memoizedState = Q;
      }
      return l.props = a, l.state = Q, l.context = g, ie;
    }
    function x_(e, t, a, i, l) {
      var s = t.stateNode;
      G1(e, t);
      var d = t.memoizedProps, m = t.type === t.elementType ? d : uo(t.type, d);
      s.props = m;
      var g = t.pendingProps, w = s.context, R = a.contextType, U = hi;
      if (typeof R == "object" && R !== null)
        U = Sr(R);
      else {
        var I = If(t, a, !0);
        U = Ff(t, I);
      }
      var Q = a.getDerivedStateFromProps, K = typeof Q == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !K && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (d !== g || w !== U) && tC(t, s, i, U), Y1();
      var ie = t.memoizedState, He = s.state = ie;
      if (Om(t, i, s, l), He = t.memoizedState, d === g && ie === He && !fm() && !km() && !ke)
        return typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || ie !== e.memoizedState) && (t.flags |= kt), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || ie !== e.memoizedState) && (t.flags |= Va), !1;
      typeof Q == "function" && (wS(t, a, Q, i), He = t.memoizedState);
      var ot = km() || Z1(t, a, m, i, ie, He, U) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ke;
      return ot ? (!K && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, He, U), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, He, U)), typeof s.componentDidUpdate == "function" && (t.flags |= kt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Va)) : (typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || ie !== e.memoizedState) && (t.flags |= kt), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || ie !== e.memoizedState) && (t.flags |= Va), t.memoizedProps = i, t.memoizedState = He), s.props = i, s.state = He, s.context = U, ot;
    }
    var xS, _S, OS, kS, DS, nC = function(e, t) {
    };
    xS = !1, _S = !1, OS = {}, kS = {}, DS = {}, nC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = wt(t) || "Component";
        kS[a] || (kS[a] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Wp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Un || ve) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var l = wt(e) || "Component";
          OS[l] || (y('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), OS[l] = !0);
        }
        if (a._owner) {
          var s = a._owner, d;
          if (s) {
            var m = s;
            if (m.tag !== M)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            d = m.stateNode;
          }
          if (!d)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var g = d;
          zt(i, "ref");
          var w = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === w)
            return t.ref;
          var R = function(U) {
            var I = g.refs;
            I === q1 && (I = g.refs = {}), U === null ? delete I[w] : I[w] = U;
          };
          return R._stringRef = w, R;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Am(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Mm(e) {
      {
        var t = wt(e) || "Component";
        if (DS[t])
          return;
        DS[t] = !0, y("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function rC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function aC(e) {
      function t(W, oe) {
        if (e) {
          var G = W.deletions;
          G === null ? (W.deletions = [oe], W.flags |= nn) : G.push(oe);
        }
      }
      function a(W, oe) {
        if (!e)
          return null;
        for (var G = oe; G !== null; )
          t(W, G), G = G.sibling;
        return null;
      }
      function i(W, oe) {
        for (var G = /* @__PURE__ */ new Map(), be = oe; be !== null; )
          be.key !== null ? G.set(be.key, be) : G.set(be.index, be), be = be.sibling;
        return G;
      }
      function l(W, oe) {
        var G = vc(W, oe);
        return G.index = 0, G.sibling = null, G;
      }
      function s(W, oe, G) {
        if (W.index = G, !e)
          return W.flags |= jd, oe;
        var be = W.alternate;
        if (be !== null) {
          var $e = be.index;
          return $e < oe ? (W.flags |= xn, oe) : $e;
        } else
          return W.flags |= xn, oe;
      }
      function d(W) {
        return e && W.alternate === null && (W.flags |= xn), W;
      }
      function m(W, oe, G, be) {
        if (oe === null || oe.tag !== H) {
          var $e = rE(G, W.mode, be);
          return $e.return = W, $e;
        } else {
          var Ue = l(oe, G);
          return Ue.return = W, Ue;
        }
      }
      function g(W, oe, G, be) {
        var $e = G.type;
        if ($e === wa)
          return R(W, oe, G.props.children, be, G.key);
        if (oe !== null && (oe.elementType === $e || // Keep this check inline so it only runs on the false path:
        QT(oe, G) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof $e == "object" && $e !== null && $e.$$typeof === it && rC($e) === oe.type)) {
          var Ue = l(oe, G.props);
          return Ue.ref = Wp(W, oe, G), Ue.return = W, Ue._debugSource = G._source, Ue._debugOwner = G._owner, Ue;
        }
        var yt = nE(G, W.mode, be);
        return yt.ref = Wp(W, oe, G), yt.return = W, yt;
      }
      function w(W, oe, G, be) {
        if (oe === null || oe.tag !== B || oe.stateNode.containerInfo !== G.containerInfo || oe.stateNode.implementation !== G.implementation) {
          var $e = aE(G, W.mode, be);
          return $e.return = W, $e;
        } else {
          var Ue = l(oe, G.children || []);
          return Ue.return = W, Ue;
        }
      }
      function R(W, oe, G, be, $e) {
        if (oe === null || oe.tag !== Z) {
          var Ue = os(G, W.mode, be, $e);
          return Ue.return = W, Ue;
        } else {
          var yt = l(oe, G);
          return yt.return = W, yt;
        }
      }
      function U(W, oe, G) {
        if (typeof oe == "string" && oe !== "" || typeof oe == "number") {
          var be = rE("" + oe, W.mode, G);
          return be.return = W, be;
        }
        if (typeof oe == "object" && oe !== null) {
          switch (oe.$$typeof) {
            case Ei: {
              var $e = nE(oe, W.mode, G);
              return $e.ref = Wp(W, null, oe), $e.return = W, $e;
            }
            case Vr: {
              var Ue = aE(oe, W.mode, G);
              return Ue.return = W, Ue;
            }
            case it: {
              var yt = oe._payload, xt = oe._init;
              return U(W, xt(yt), G);
            }
          }
          if (Vt(oe) || oi(oe)) {
            var vn = os(oe, W.mode, G, null);
            return vn.return = W, vn;
          }
          Am(W, oe);
        }
        return typeof oe == "function" && Mm(W), null;
      }
      function I(W, oe, G, be) {
        var $e = oe !== null ? oe.key : null;
        if (typeof G == "string" && G !== "" || typeof G == "number")
          return $e !== null ? null : m(W, oe, "" + G, be);
        if (typeof G == "object" && G !== null) {
          switch (G.$$typeof) {
            case Ei:
              return G.key === $e ? g(W, oe, G, be) : null;
            case Vr:
              return G.key === $e ? w(W, oe, G, be) : null;
            case it: {
              var Ue = G._payload, yt = G._init;
              return I(W, oe, yt(Ue), be);
            }
          }
          if (Vt(G) || oi(G))
            return $e !== null ? null : R(W, oe, G, be, null);
          Am(W, G);
        }
        return typeof G == "function" && Mm(W), null;
      }
      function Q(W, oe, G, be, $e) {
        if (typeof be == "string" && be !== "" || typeof be == "number") {
          var Ue = W.get(G) || null;
          return m(oe, Ue, "" + be, $e);
        }
        if (typeof be == "object" && be !== null) {
          switch (be.$$typeof) {
            case Ei: {
              var yt = W.get(be.key === null ? G : be.key) || null;
              return g(oe, yt, be, $e);
            }
            case Vr: {
              var xt = W.get(be.key === null ? G : be.key) || null;
              return w(oe, xt, be, $e);
            }
            case it:
              var vn = be._payload, Jt = be._init;
              return Q(W, oe, G, Jt(vn), $e);
          }
          if (Vt(be) || oi(be)) {
            var cr = W.get(G) || null;
            return R(oe, cr, be, $e, null);
          }
          Am(oe, be);
        }
        return typeof be == "function" && Mm(oe), null;
      }
      function K(W, oe, G) {
        {
          if (typeof W != "object" || W === null)
            return oe;
          switch (W.$$typeof) {
            case Ei:
            case Vr:
              nC(W, G);
              var be = W.key;
              if (typeof be != "string")
                break;
              if (oe === null) {
                oe = /* @__PURE__ */ new Set(), oe.add(be);
                break;
              }
              if (!oe.has(be)) {
                oe.add(be);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", be);
              break;
            case it:
              var $e = W._payload, Ue = W._init;
              K(Ue($e), oe, G);
              break;
          }
        }
        return oe;
      }
      function ie(W, oe, G, be) {
        for (var $e = null, Ue = 0; Ue < G.length; Ue++) {
          var yt = G[Ue];
          $e = K(yt, $e, W);
        }
        for (var xt = null, vn = null, Jt = oe, cr = 0, en = 0, rr = null; Jt !== null && en < G.length; en++) {
          Jt.index > en ? (rr = Jt, Jt = null) : rr = Jt.sibling;
          var ga = I(W, Jt, G[en], be);
          if (ga === null) {
            Jt === null && (Jt = rr);
            break;
          }
          e && Jt && ga.alternate === null && t(W, Jt), cr = s(ga, cr, en), vn === null ? xt = ga : vn.sibling = ga, vn = ga, Jt = rr;
        }
        if (en === G.length) {
          if (a(W, Jt), Yr()) {
            var ea = en;
            tc(W, ea);
          }
          return xt;
        }
        if (Jt === null) {
          for (; en < G.length; en++) {
            var yi = U(W, G[en], be);
            yi !== null && (cr = s(yi, cr, en), vn === null ? xt = yi : vn.sibling = yi, vn = yi);
          }
          if (Yr()) {
            var La = en;
            tc(W, La);
          }
          return xt;
        }
        for (var Na = i(W, Jt); en < G.length; en++) {
          var Sa = Q(Na, W, en, G[en], be);
          Sa !== null && (e && Sa.alternate !== null && Na.delete(Sa.key === null ? en : Sa.key), cr = s(Sa, cr, en), vn === null ? xt = Sa : vn.sibling = Sa, vn = Sa);
        }
        if (e && Na.forEach(function(ad) {
          return t(W, ad);
        }), Yr()) {
          var Kl = en;
          tc(W, Kl);
        }
        return xt;
      }
      function He(W, oe, G, be) {
        var $e = oi(G);
        if (typeof $e != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          G[Symbol.toStringTag] === "Generator" && (_S || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), _S = !0), G.entries === $e && (xS || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), xS = !0);
          var Ue = $e.call(G);
          if (Ue)
            for (var yt = null, xt = Ue.next(); !xt.done; xt = Ue.next()) {
              var vn = xt.value;
              yt = K(vn, yt, W);
            }
        }
        var Jt = $e.call(G);
        if (Jt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var cr = null, en = null, rr = oe, ga = 0, ea = 0, yi = null, La = Jt.next(); rr !== null && !La.done; ea++, La = Jt.next()) {
          rr.index > ea ? (yi = rr, rr = null) : yi = rr.sibling;
          var Na = I(W, rr, La.value, be);
          if (Na === null) {
            rr === null && (rr = yi);
            break;
          }
          e && rr && Na.alternate === null && t(W, rr), ga = s(Na, ga, ea), en === null ? cr = Na : en.sibling = Na, en = Na, rr = yi;
        }
        if (La.done) {
          if (a(W, rr), Yr()) {
            var Sa = ea;
            tc(W, Sa);
          }
          return cr;
        }
        if (rr === null) {
          for (; !La.done; ea++, La = Jt.next()) {
            var Kl = U(W, La.value, be);
            Kl !== null && (ga = s(Kl, ga, ea), en === null ? cr = Kl : en.sibling = Kl, en = Kl);
          }
          if (Yr()) {
            var ad = ea;
            tc(W, ad);
          }
          return cr;
        }
        for (var Cv = i(W, rr); !La.done; ea++, La = Jt.next()) {
          var ol = Q(Cv, W, ea, La.value, be);
          ol !== null && (e && ol.alternate !== null && Cv.delete(ol.key === null ? ea : ol.key), ga = s(ol, ga, ea), en === null ? cr = ol : en.sibling = ol, en = ol);
        }
        if (e && Cv.forEach(function(zD) {
          return t(W, zD);
        }), Yr()) {
          var PD = ea;
          tc(W, PD);
        }
        return cr;
      }
      function ot(W, oe, G, be) {
        if (oe !== null && oe.tag === H) {
          a(W, oe.sibling);
          var $e = l(oe, G);
          return $e.return = W, $e;
        }
        a(W, oe);
        var Ue = rE(G, W.mode, be);
        return Ue.return = W, Ue;
      }
      function Ze(W, oe, G, be) {
        for (var $e = G.key, Ue = oe; Ue !== null; ) {
          if (Ue.key === $e) {
            var yt = G.type;
            if (yt === wa) {
              if (Ue.tag === Z) {
                a(W, Ue.sibling);
                var xt = l(Ue, G.props.children);
                return xt.return = W, xt._debugSource = G._source, xt._debugOwner = G._owner, xt;
              }
            } else if (Ue.elementType === yt || // Keep this check inline so it only runs on the false path:
            QT(Ue, G) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof yt == "object" && yt !== null && yt.$$typeof === it && rC(yt) === Ue.type) {
              a(W, Ue.sibling);
              var vn = l(Ue, G.props);
              return vn.ref = Wp(W, Ue, G), vn.return = W, vn._debugSource = G._source, vn._debugOwner = G._owner, vn;
            }
            a(W, Ue);
            break;
          } else
            t(W, Ue);
          Ue = Ue.sibling;
        }
        if (G.type === wa) {
          var Jt = os(G.props.children, W.mode, be, G.key);
          return Jt.return = W, Jt;
        } else {
          var cr = nE(G, W.mode, be);
          return cr.ref = Wp(W, oe, G), cr.return = W, cr;
        }
      }
      function Wt(W, oe, G, be) {
        for (var $e = G.key, Ue = oe; Ue !== null; ) {
          if (Ue.key === $e)
            if (Ue.tag === B && Ue.stateNode.containerInfo === G.containerInfo && Ue.stateNode.implementation === G.implementation) {
              a(W, Ue.sibling);
              var yt = l(Ue, G.children || []);
              return yt.return = W, yt;
            } else {
              a(W, Ue);
              break;
            }
          else
            t(W, Ue);
          Ue = Ue.sibling;
        }
        var xt = aE(G, W.mode, be);
        return xt.return = W, xt;
      }
      function jt(W, oe, G, be) {
        var $e = typeof G == "object" && G !== null && G.type === wa && G.key === null;
        if ($e && (G = G.props.children), typeof G == "object" && G !== null) {
          switch (G.$$typeof) {
            case Ei:
              return d(Ze(W, oe, G, be));
            case Vr:
              return d(Wt(W, oe, G, be));
            case it:
              var Ue = G._payload, yt = G._init;
              return jt(W, oe, yt(Ue), be);
          }
          if (Vt(G))
            return ie(W, oe, G, be);
          if (oi(G))
            return He(W, oe, G, be);
          Am(W, G);
        }
        return typeof G == "string" && G !== "" || typeof G == "number" ? d(ot(W, oe, "" + G, be)) : (typeof G == "function" && Mm(W), a(W, oe));
      }
      return jt;
    }
    var Hf = aC(!0), iC = aC(!1);
    function __(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = vc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = vc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function O_(e, t) {
      for (var a = e.child; a !== null; )
        rD(a, t), a = a.sibling;
    }
    var Gp = {}, Xu = Gu(Gp), Yp = Gu(Gp), Lm = Gu(Gp);
    function Nm(e) {
      if (e === Gp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function oC() {
      var e = Nm(Lm.current);
      return e;
    }
    function AS(e, t) {
      ma(Lm, t, e), ma(Yp, e, e), ma(Xu, Gp, e);
      var a = HR(t);
      ha(Xu, e), ma(Xu, a, e);
    }
    function $f(e) {
      ha(Xu, e), ha(Yp, e), ha(Lm, e);
    }
    function MS() {
      var e = Nm(Xu.current);
      return e;
    }
    function lC(e) {
      Nm(Lm.current);
      var t = Nm(Xu.current), a = $R(t, e.type);
      t !== a && (ma(Yp, e, e), ma(Xu, a, e));
    }
    function LS(e) {
      Yp.current === e && (ha(Xu, e), ha(Yp, e));
    }
    var k_ = 0, uC = 1, sC = 1, Qp = 2, so = Gu(k_);
    function NS(e, t) {
      return (e & t) !== 0;
    }
    function Bf(e) {
      return e & uC;
    }
    function IS(e, t) {
      return e & uC | t;
    }
    function D_(e, t) {
      return e | t;
    }
    function Zu(e, t) {
      ma(so, t, e);
    }
    function Wf(e) {
      ha(so, e);
    }
    function A_(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Im(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === V) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || S1(i) || Vg(i))
              return t;
          }
        } else if (t.tag === mt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & gt) !== at;
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
    var Ja = (
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
    ), FS = [];
    function US() {
      for (var e = 0; e < FS.length; e++) {
        var t = FS[e];
        t._workInProgressVersionPrimary = null;
      }
      FS.length = 0;
    }
    function M_(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ze = p.ReactCurrentDispatcher, qp = p.ReactCurrentBatchConfig, jS, Gf;
    jS = /* @__PURE__ */ new Set();
    var lc = se, pn = null, xr = null, _r = null, Fm = !1, Kp = !1, Xp = 0, L_ = 0, N_ = 25, de = null, Fi = null, Ju = -1, PS = !1;
    function sn() {
      {
        var e = de;
        Fi === null ? Fi = [e] : Fi.push(e);
      }
    }
    function Ne() {
      {
        var e = de;
        Fi !== null && (Ju++, Fi[Ju] !== e && I_(e));
      }
    }
    function Yf(e) {
      e != null && !Vt(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", de, typeof e);
    }
    function I_(e) {
      {
        var t = wt(pn);
        if (!jS.has(t) && (jS.add(t), Fi !== null)) {
          for (var a = "", i = 30, l = 0; l <= Ju; l++) {
            for (var s = Fi[l], d = l === Ju ? e : s, m = l + 1 + ". " + s; m.length < i; )
              m += " ";
            m += d + `
`, a += m;
          }
          y(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ya() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function zS(e, t) {
      if (PS)
        return !1;
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", de), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, de, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Ge(e[a], t[a]))
          return !1;
      return !0;
    }
    function Qf(e, t, a, i, l, s) {
      lc = s, pn = t, Fi = e !== null ? e._debugHookTypes : null, Ju = -1, PS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = se, e !== null && e.memoizedState !== null ? ze.current = AC : Fi !== null ? ze.current = DC : ze.current = kC;
      var d = a(i, l);
      if (Kp) {
        var m = 0;
        do {
          if (Kp = !1, Xp = 0, m >= N_)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          m += 1, PS = !1, xr = null, _r = null, t.updateQueue = null, Ju = -1, ze.current = MC, d = a(i, l);
        } while (Kp);
      }
      ze.current = qm, t._debugHookTypes = Fi;
      var g = xr !== null && xr.next !== null;
      if (lc = se, pn = null, xr = null, _r = null, de = null, Fi = null, Ju = -1, e !== null && (e.flags & Cr) !== (t.flags & Cr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & It) !== st && y("Internal React error: Expected static flag was missing. Please notify the React team."), Fm = !1, g)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return d;
    }
    function qf() {
      var e = Xp !== 0;
      return Xp = 0, e;
    }
    function cC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Wa) !== st ? t.flags &= ~(gl | sa | Mn | kt) : t.flags &= ~(Mn | kt), e.lanes = ku(e.lanes, a);
    }
    function fC() {
      if (ze.current = qm, Fm) {
        for (var e = pn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Fm = !1;
      }
      lc = se, pn = null, xr = null, _r = null, Fi = null, Ju = -1, de = null, bC = !1, Kp = !1, Xp = 0;
    }
    function el() {
      var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return _r === null ? pn.memoizedState = _r = e : _r = _r.next = e, _r;
    }
    function Ui() {
      var e;
      if (xr === null) {
        var t = pn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = xr.next;
      var a;
      if (_r === null ? a = pn.memoizedState : a = _r.next, a !== null)
        _r = a, a = _r.next, xr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        xr = e;
        var i = { memoizedState: xr.memoizedState, baseState: xr.baseState, baseQueue: xr.baseQueue, queue: xr.queue, next: null };
        _r === null ? pn.memoizedState = _r = i : _r = _r.next = i;
      }
      return _r;
    }
    function dC() {
      return { lastEffect: null, stores: null };
    }
    function VS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function HS(e, t, a) {
      var i = el(), l;
      a !== void 0 ? l = a(t) : l = t, i.memoizedState = i.baseState = l;
      var s = { pending: null, interleaved: null, lanes: se, dispatch: null, lastRenderedReducer: e, lastRenderedState: l };
      i.queue = s;
      var d = s.dispatch = P_.bind(null, pn, s);
      return [i.memoizedState, d];
    }
    function $S(e, t, a) {
      var i = Ui(), l = i.queue;
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
        var R = d.next, U = s.baseState, I = null, Q = null, K = null, ie = R;
        do {
          var He = ie.lane;
          if (Ol(lc, He)) {
            if (K !== null) {
              var Ze = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: $t,
                action: ie.action,
                hasEagerState: ie.hasEagerState,
                eagerState: ie.eagerState,
                next: null
              };
              K = K.next = Ze;
            }
            if (ie.hasEagerState)
              U = ie.eagerState;
            else {
              var Wt = ie.action;
              U = e(U, Wt);
            }
          } else {
            var ot = { lane: He, action: ie.action, hasEagerState: ie.hasEagerState, eagerState: ie.eagerState, next: null };
            K === null ? (Q = K = ot, I = U) : K = K.next = ot, pn.lanes = Dt(pn.lanes, He), mv(He);
          }
          ie = ie.next;
        } while (ie !== null && ie !== R);
        K === null ? I = U : K.next = Q, Ge(U, i.memoizedState) || av(), i.memoizedState = U, i.baseState = I, i.baseQueue = K, l.lastRenderedState = U;
      }
      var jt = l.interleaved;
      if (jt !== null) {
        var W = jt;
        do {
          var oe = W.lane;
          pn.lanes = Dt(pn.lanes, oe), mv(oe), W = W.next;
        } while (W !== jt);
      } else
        d === null && (l.lanes = se);
      var G = l.dispatch;
      return [i.memoizedState, G];
    }
    function BS(e, t, a) {
      var i = Ui(), l = i.queue;
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
    function UI(e, t, a) {
    }
    function jI(e, t, a) {
    }
    function WS(e, t, a) {
      var i = pn, l = el(), s, d = Yr();
      if (d) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Gf || s !== a() && (y("The result of getServerSnapshot should be cached to avoid an infinite loop"), Gf = !0);
      } else {
        if (s = t(), !Gf) {
          var m = t();
          Ge(s, m) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Gf = !0);
        }
        var g = py();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        js(g, lc) || pC(i, t, s);
      }
      l.memoizedState = s;
      var w = { value: s, getSnapshot: t };
      return l.queue = w, Vm(hC.bind(null, i, w, e), [e]), i.flags |= Mn, Zp(br | Qr, vC.bind(null, i, w, s, t), void 0, null), s;
    }
    function Um(e, t, a) {
      var i = pn, l = Ui(), s = t();
      if (!Gf) {
        var d = t();
        Ge(s, d) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Gf = !0);
      }
      var m = l.memoizedState, g = !Ge(m, s);
      g && (l.memoizedState = s, av());
      var w = l.queue;
      if (ev(hC.bind(null, i, w, e), [e]), w.getSnapshot !== t || g || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      _r !== null && _r.memoizedState.tag & br) {
        i.flags |= Mn, Zp(br | Qr, vC.bind(null, i, w, s, t), void 0, null);
        var R = py();
        if (R === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        js(R, lc) || pC(i, t, s);
      }
      return s;
    }
    function pC(e, t, a) {
      e.flags |= ks;
      var i = { getSnapshot: t, value: a }, l = pn.updateQueue;
      if (l === null)
        l = dC(), pn.updateQueue = l, l.stores = [i];
      else {
        var s = l.stores;
        s === null ? l.stores = [i] : s.push(i);
      }
    }
    function vC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, mC(t) && yC(e);
    }
    function hC(e, t, a) {
      var i = function() {
        mC(t) && yC(e);
      };
      return a(i);
    }
    function mC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Ge(a, i);
      } catch {
        return !0;
      }
    }
    function yC(e) {
      var t = Za(e, pt);
      t !== null && Ar(t, e, pt, Cn);
    }
    function jm(e) {
      var t = el();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = { pending: null, interleaved: null, lanes: se, dispatch: null, lastRenderedReducer: VS, lastRenderedState: e };
      t.queue = a;
      var i = a.dispatch = z_.bind(null, pn, a);
      return [t.memoizedState, i];
    }
    function GS(e) {
      return $S(VS);
    }
    function YS(e) {
      return BS(VS);
    }
    function Zp(e, t, a, i) {
      var l = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = pn.updateQueue;
      if (s === null)
        s = dC(), pn.updateQueue = s, s.lastEffect = l.next = l;
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
        var a = { current: e };
        return t.memoizedState = a, a;
      }
    }
    function Pm(e) {
      var t = Ui();
      return t.memoizedState;
    }
    function Jp(e, t, a, i) {
      var l = el(), s = i === void 0 ? null : i;
      pn.flags |= e, l.memoizedState = Zp(br | t, a, void 0, s);
    }
    function zm(e, t, a, i) {
      var l = Ui(), s = i === void 0 ? null : i, d = void 0;
      if (xr !== null) {
        var m = xr.memoizedState;
        if (d = m.destroy, s !== null) {
          var g = m.deps;
          if (zS(s, g)) {
            l.memoizedState = Zp(t, a, d, s);
            return;
          }
        }
      }
      pn.flags |= e, l.memoizedState = Zp(br | t, a, d, s);
    }
    function Vm(e, t) {
      return (pn.mode & Wa) !== st ? Jp(gl | Mn | Fo, Qr, e, t) : Jp(Mn | Fo, Qr, e, t);
    }
    function ev(e, t) {
      return zm(Mn, Qr, e, t);
    }
    function qS(e, t) {
      return Jp(kt, Jo, e, t);
    }
    function Hm(e, t) {
      return zm(kt, Jo, e, t);
    }
    function KS(e, t) {
      var a = kt;
      return a |= ua, (pn.mode & Wa) !== st && (a |= sa), Jp(a, Rr, e, t);
    }
    function $m(e, t) {
      return zm(kt, Rr, e, t);
    }
    function gC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
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
    function XS(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = kt;
      return l |= ua, (pn.mode & Wa) !== st && (l |= sa), Jp(l, Rr, gC.bind(null, t, e), i);
    }
    function Bm(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return zm(kt, Rr, gC.bind(null, t, e), i);
    }
    function F_(e, t) {
    }
    var Wm = F_;
    function ZS(e, t) {
      var a = el(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Gm(e, t) {
      var a = Ui(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (zS(i, s))
          return l[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function JS(e, t) {
      var a = el(), i = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, i], l;
    }
    function Ym(e, t) {
      var a = Ui(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (zS(i, s))
          return l[0];
      }
      var d = e();
      return a.memoizedState = [d, i], d;
    }
    function e0(e) {
      var t = el();
      return t.memoizedState = e, e;
    }
    function SC(e) {
      var t = Ui(), a = xr, i = a.memoizedState;
      return CC(t, i, e);
    }
    function EC(e) {
      var t = Ui();
      if (xr === null)
        return t.memoizedState = e, e;
      var a = xr.memoizedState;
      return CC(t, a, e);
    }
    function CC(e, t, a) {
      var i = !og(lc);
      if (i) {
        if (!Ge(a, t)) {
          var l = tp();
          pn.lanes = Dt(pn.lanes, l), mv(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, av()), e.memoizedState = a, a;
    }
    function U_(e, t, a) {
      var i = Ya();
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
      var e = jm(!1), t = e[0], a = e[1], i = U_.bind(null, a), l = el();
      return l.memoizedState = i, [t, i];
    }
    function TC() {
      var e = GS(), t = e[0], a = Ui(), i = a.memoizedState;
      return [t, i];
    }
    function wC() {
      var e = YS(), t = e[0], a = Ui(), i = a.memoizedState;
      return [t, i];
    }
    var bC = !1;
    function j_() {
      return bC;
    }
    function n0() {
      var e = el(), t = py(), a = t.identifierPrefix, i;
      if (Yr()) {
        var l = Zx();
        i = ":" + a + "R" + l;
        var s = Xp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var d = L_++;
        i = ":" + a + "r" + d.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Qm() {
      var e = Ui(), t = e.memoizedState;
      return t;
    }
    function P_(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = as(e), l = { lane: i, action: a, hasEagerState: !1, eagerState: null, next: null };
      if (RC(e))
        xC(t, l);
      else {
        var s = $1(e, t, l, i);
        if (s !== null) {
          var d = Ma();
          Ar(s, e, i, d), _C(s, t, i);
        }
      }
      OC(e, i);
    }
    function z_(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = as(e), l = { lane: i, action: a, hasEagerState: !1, eagerState: null, next: null };
      if (RC(e))
        xC(t, l);
      else {
        var s = e.alternate;
        if (e.lanes === se && (s === null || s.lanes === se)) {
          var d = t.lastRenderedReducer;
          if (d !== null) {
            var m;
            m = ze.current, ze.current = co;
            try {
              var g = t.lastRenderedState, w = d(g, a);
              if (l.hasEagerState = !0, l.eagerState = w, Ge(w, g)) {
                g_(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              ze.current = m;
            }
          }
        }
        var R = $1(e, t, l, i);
        if (R !== null) {
          var U = Ma();
          Ar(R, e, i, U), _C(R, t, i);
        }
      }
      OC(e, i);
    }
    function RC(e) {
      var t = e.alternate;
      return e === pn || t !== null && t === pn;
    }
    function xC(e, t) {
      Kp = Fm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function _C(e, t, a) {
      if (ep(a)) {
        var i = t.lanes;
        i = np(i, e.pendingLanes);
        var l = Dt(i, a);
        t.lanes = l, Du(e, l);
      }
    }
    function OC(e, t, a) {
      Ho(e, t);
    }
    var qm = { readContext: Sr, useCallback: ya, useContext: ya, useEffect: ya, useImperativeHandle: ya, useInsertionEffect: ya, useLayoutEffect: ya, useMemo: ya, useReducer: ya, useRef: ya, useState: ya, useDebugValue: ya, useDeferredValue: ya, useTransition: ya, useMutableSource: ya, useSyncExternalStore: ya, useId: ya, unstable_isNewReconciler: re }, kC = null, DC = null, AC = null, MC = null, tl = null, co = null, Km = null;
    {
      var r0 = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, bt = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      kC = { readContext: function(e) {
        return Sr(e);
      }, useCallback: function(e, t) {
        return de = "useCallback", sn(), Yf(t), ZS(e, t);
      }, useContext: function(e) {
        return de = "useContext", sn(), Sr(e);
      }, useEffect: function(e, t) {
        return de = "useEffect", sn(), Yf(t), Vm(e, t);
      }, useImperativeHandle: function(e, t, a) {
        return de = "useImperativeHandle", sn(), Yf(a), XS(e, t, a);
      }, useInsertionEffect: function(e, t) {
        return de = "useInsertionEffect", sn(), Yf(t), qS(e, t);
      }, useLayoutEffect: function(e, t) {
        return de = "useLayoutEffect", sn(), Yf(t), KS(e, t);
      }, useMemo: function(e, t) {
        de = "useMemo", sn(), Yf(t);
        var a = ze.current;
        ze.current = tl;
        try {
          return JS(e, t);
        } finally {
          ze.current = a;
        }
      }, useReducer: function(e, t, a) {
        de = "useReducer", sn();
        var i = ze.current;
        ze.current = tl;
        try {
          return HS(e, t, a);
        } finally {
          ze.current = i;
        }
      }, useRef: function(e) {
        return de = "useRef", sn(), QS(e);
      }, useState: function(e) {
        de = "useState", sn();
        var t = ze.current;
        ze.current = tl;
        try {
          return jm(e);
        } finally {
          ze.current = t;
        }
      }, useDebugValue: function(e, t) {
        return de = "useDebugValue", sn(), void 0;
      }, useDeferredValue: function(e) {
        return de = "useDeferredValue", sn(), e0(e);
      }, useTransition: function() {
        return de = "useTransition", sn(), t0();
      }, useMutableSource: function(e, t, a) {
        return de = "useMutableSource", sn(), void 0;
      }, useSyncExternalStore: function(e, t, a) {
        return de = "useSyncExternalStore", sn(), WS(e, t, a);
      }, useId: function() {
        return de = "useId", sn(), n0();
      }, unstable_isNewReconciler: re }, DC = { readContext: function(e) {
        return Sr(e);
      }, useCallback: function(e, t) {
        return de = "useCallback", Ne(), ZS(e, t);
      }, useContext: function(e) {
        return de = "useContext", Ne(), Sr(e);
      }, useEffect: function(e, t) {
        return de = "useEffect", Ne(), Vm(e, t);
      }, useImperativeHandle: function(e, t, a) {
        return de = "useImperativeHandle", Ne(), XS(e, t, a);
      }, useInsertionEffect: function(e, t) {
        return de = "useInsertionEffect", Ne(), qS(e, t);
      }, useLayoutEffect: function(e, t) {
        return de = "useLayoutEffect", Ne(), KS(e, t);
      }, useMemo: function(e, t) {
        de = "useMemo", Ne();
        var a = ze.current;
        ze.current = tl;
        try {
          return JS(e, t);
        } finally {
          ze.current = a;
        }
      }, useReducer: function(e, t, a) {
        de = "useReducer", Ne();
        var i = ze.current;
        ze.current = tl;
        try {
          return HS(e, t, a);
        } finally {
          ze.current = i;
        }
      }, useRef: function(e) {
        return de = "useRef", Ne(), QS(e);
      }, useState: function(e) {
        de = "useState", Ne();
        var t = ze.current;
        ze.current = tl;
        try {
          return jm(e);
        } finally {
          ze.current = t;
        }
      }, useDebugValue: function(e, t) {
        return de = "useDebugValue", Ne(), void 0;
      }, useDeferredValue: function(e) {
        return de = "useDeferredValue", Ne(), e0(e);
      }, useTransition: function() {
        return de = "useTransition", Ne(), t0();
      }, useMutableSource: function(e, t, a) {
        return de = "useMutableSource", Ne(), void 0;
      }, useSyncExternalStore: function(e, t, a) {
        return de = "useSyncExternalStore", Ne(), WS(e, t, a);
      }, useId: function() {
        return de = "useId", Ne(), n0();
      }, unstable_isNewReconciler: re }, AC = { readContext: function(e) {
        return Sr(e);
      }, useCallback: function(e, t) {
        return de = "useCallback", Ne(), Gm(e, t);
      }, useContext: function(e) {
        return de = "useContext", Ne(), Sr(e);
      }, useEffect: function(e, t) {
        return de = "useEffect", Ne(), ev(e, t);
      }, useImperativeHandle: function(e, t, a) {
        return de = "useImperativeHandle", Ne(), Bm(e, t, a);
      }, useInsertionEffect: function(e, t) {
        return de = "useInsertionEffect", Ne(), Hm(e, t);
      }, useLayoutEffect: function(e, t) {
        return de = "useLayoutEffect", Ne(), $m(e, t);
      }, useMemo: function(e, t) {
        de = "useMemo", Ne();
        var a = ze.current;
        ze.current = co;
        try {
          return Ym(e, t);
        } finally {
          ze.current = a;
        }
      }, useReducer: function(e, t, a) {
        de = "useReducer", Ne();
        var i = ze.current;
        ze.current = co;
        try {
          return $S(e, t, a);
        } finally {
          ze.current = i;
        }
      }, useRef: function(e) {
        return de = "useRef", Ne(), Pm();
      }, useState: function(e) {
        de = "useState", Ne();
        var t = ze.current;
        ze.current = co;
        try {
          return GS(e);
        } finally {
          ze.current = t;
        }
      }, useDebugValue: function(e, t) {
        return de = "useDebugValue", Ne(), Wm();
      }, useDeferredValue: function(e) {
        return de = "useDeferredValue", Ne(), SC(e);
      }, useTransition: function() {
        return de = "useTransition", Ne(), TC();
      }, useMutableSource: function(e, t, a) {
        return de = "useMutableSource", Ne(), void 0;
      }, useSyncExternalStore: function(e, t, a) {
        return de = "useSyncExternalStore", Ne(), Um(e, t);
      }, useId: function() {
        return de = "useId", Ne(), Qm();
      }, unstable_isNewReconciler: re }, MC = { readContext: function(e) {
        return Sr(e);
      }, useCallback: function(e, t) {
        return de = "useCallback", Ne(), Gm(e, t);
      }, useContext: function(e) {
        return de = "useContext", Ne(), Sr(e);
      }, useEffect: function(e, t) {
        return de = "useEffect", Ne(), ev(e, t);
      }, useImperativeHandle: function(e, t, a) {
        return de = "useImperativeHandle", Ne(), Bm(e, t, a);
      }, useInsertionEffect: function(e, t) {
        return de = "useInsertionEffect", Ne(), Hm(e, t);
      }, useLayoutEffect: function(e, t) {
        return de = "useLayoutEffect", Ne(), $m(e, t);
      }, useMemo: function(e, t) {
        de = "useMemo", Ne();
        var a = ze.current;
        ze.current = Km;
        try {
          return Ym(e, t);
        } finally {
          ze.current = a;
        }
      }, useReducer: function(e, t, a) {
        de = "useReducer", Ne();
        var i = ze.current;
        ze.current = Km;
        try {
          return BS(e, t, a);
        } finally {
          ze.current = i;
        }
      }, useRef: function(e) {
        return de = "useRef", Ne(), Pm();
      }, useState: function(e) {
        de = "useState", Ne();
        var t = ze.current;
        ze.current = Km;
        try {
          return YS(e);
        } finally {
          ze.current = t;
        }
      }, useDebugValue: function(e, t) {
        return de = "useDebugValue", Ne(), Wm();
      }, useDeferredValue: function(e) {
        return de = "useDeferredValue", Ne(), EC(e);
      }, useTransition: function() {
        return de = "useTransition", Ne(), wC();
      }, useMutableSource: function(e, t, a) {
        return de = "useMutableSource", Ne(), void 0;
      }, useSyncExternalStore: function(e, t, a) {
        return de = "useSyncExternalStore", Ne(), Um(e, t);
      }, useId: function() {
        return de = "useId", Ne(), Qm();
      }, unstable_isNewReconciler: re }, tl = { readContext: function(e) {
        return r0(), Sr(e);
      }, useCallback: function(e, t) {
        return de = "useCallback", bt(), sn(), ZS(e, t);
      }, useContext: function(e) {
        return de = "useContext", bt(), sn(), Sr(e);
      }, useEffect: function(e, t) {
        return de = "useEffect", bt(), sn(), Vm(e, t);
      }, useImperativeHandle: function(e, t, a) {
        return de = "useImperativeHandle", bt(), sn(), XS(e, t, a);
      }, useInsertionEffect: function(e, t) {
        return de = "useInsertionEffect", bt(), sn(), qS(e, t);
      }, useLayoutEffect: function(e, t) {
        return de = "useLayoutEffect", bt(), sn(), KS(e, t);
      }, useMemo: function(e, t) {
        de = "useMemo", bt(), sn();
        var a = ze.current;
        ze.current = tl;
        try {
          return JS(e, t);
        } finally {
          ze.current = a;
        }
      }, useReducer: function(e, t, a) {
        de = "useReducer", bt(), sn();
        var i = ze.current;
        ze.current = tl;
        try {
          return HS(e, t, a);
        } finally {
          ze.current = i;
        }
      }, useRef: function(e) {
        return de = "useRef", bt(), sn(), QS(e);
      }, useState: function(e) {
        de = "useState", bt(), sn();
        var t = ze.current;
        ze.current = tl;
        try {
          return jm(e);
        } finally {
          ze.current = t;
        }
      }, useDebugValue: function(e, t) {
        return de = "useDebugValue", bt(), sn(), void 0;
      }, useDeferredValue: function(e) {
        return de = "useDeferredValue", bt(), sn(), e0(e);
      }, useTransition: function() {
        return de = "useTransition", bt(), sn(), t0();
      }, useMutableSource: function(e, t, a) {
        return de = "useMutableSource", bt(), sn(), void 0;
      }, useSyncExternalStore: function(e, t, a) {
        return de = "useSyncExternalStore", bt(), sn(), WS(e, t, a);
      }, useId: function() {
        return de = "useId", bt(), sn(), n0();
      }, unstable_isNewReconciler: re }, co = { readContext: function(e) {
        return r0(), Sr(e);
      }, useCallback: function(e, t) {
        return de = "useCallback", bt(), Ne(), Gm(e, t);
      }, useContext: function(e) {
        return de = "useContext", bt(), Ne(), Sr(e);
      }, useEffect: function(e, t) {
        return de = "useEffect", bt(), Ne(), ev(e, t);
      }, useImperativeHandle: function(e, t, a) {
        return de = "useImperativeHandle", bt(), Ne(), Bm(e, t, a);
      }, useInsertionEffect: function(e, t) {
        return de = "useInsertionEffect", bt(), Ne(), Hm(e, t);
      }, useLayoutEffect: function(e, t) {
        return de = "useLayoutEffect", bt(), Ne(), $m(e, t);
      }, useMemo: function(e, t) {
        de = "useMemo", bt(), Ne();
        var a = ze.current;
        ze.current = co;
        try {
          return Ym(e, t);
        } finally {
          ze.current = a;
        }
      }, useReducer: function(e, t, a) {
        de = "useReducer", bt(), Ne();
        var i = ze.current;
        ze.current = co;
        try {
          return $S(e, t, a);
        } finally {
          ze.current = i;
        }
      }, useRef: function(e) {
        return de = "useRef", bt(), Ne(), Pm();
      }, useState: function(e) {
        de = "useState", bt(), Ne();
        var t = ze.current;
        ze.current = co;
        try {
          return GS(e);
        } finally {
          ze.current = t;
        }
      }, useDebugValue: function(e, t) {
        return de = "useDebugValue", bt(), Ne(), Wm();
      }, useDeferredValue: function(e) {
        return de = "useDeferredValue", bt(), Ne(), SC(e);
      }, useTransition: function() {
        return de = "useTransition", bt(), Ne(), TC();
      }, useMutableSource: function(e, t, a) {
        return de = "useMutableSource", bt(), Ne(), void 0;
      }, useSyncExternalStore: function(e, t, a) {
        return de = "useSyncExternalStore", bt(), Ne(), Um(e, t);
      }, useId: function() {
        return de = "useId", bt(), Ne(), Qm();
      }, unstable_isNewReconciler: re }, Km = { readContext: function(e) {
        return r0(), Sr(e);
      }, useCallback: function(e, t) {
        return de = "useCallback", bt(), Ne(), Gm(e, t);
      }, useContext: function(e) {
        return de = "useContext", bt(), Ne(), Sr(e);
      }, useEffect: function(e, t) {
        return de = "useEffect", bt(), Ne(), ev(e, t);
      }, useImperativeHandle: function(e, t, a) {
        return de = "useImperativeHandle", bt(), Ne(), Bm(e, t, a);
      }, useInsertionEffect: function(e, t) {
        return de = "useInsertionEffect", bt(), Ne(), Hm(e, t);
      }, useLayoutEffect: function(e, t) {
        return de = "useLayoutEffect", bt(), Ne(), $m(e, t);
      }, useMemo: function(e, t) {
        de = "useMemo", bt(), Ne();
        var a = ze.current;
        ze.current = co;
        try {
          return Ym(e, t);
        } finally {
          ze.current = a;
        }
      }, useReducer: function(e, t, a) {
        de = "useReducer", bt(), Ne();
        var i = ze.current;
        ze.current = co;
        try {
          return BS(e, t, a);
        } finally {
          ze.current = i;
        }
      }, useRef: function(e) {
        return de = "useRef", bt(), Ne(), Pm();
      }, useState: function(e) {
        de = "useState", bt(), Ne();
        var t = ze.current;
        ze.current = co;
        try {
          return YS(e);
        } finally {
          ze.current = t;
        }
      }, useDebugValue: function(e, t) {
        return de = "useDebugValue", bt(), Ne(), Wm();
      }, useDeferredValue: function(e) {
        return de = "useDeferredValue", bt(), Ne(), EC(e);
      }, useTransition: function() {
        return de = "useTransition", bt(), Ne(), wC();
      }, useMutableSource: function(e, t, a) {
        return de = "useMutableSource", bt(), Ne(), void 0;
      }, useSyncExternalStore: function(e, t, a) {
        return de = "useSyncExternalStore", bt(), Ne(), Um(e, t);
      }, useId: function() {
        return de = "useId", bt(), Ne(), Qm();
      }, unstable_isNewReconciler: re };
    }
    var es = v.unstable_now, LC = 0, Xm = -1, tv = -1, Zm = -1, a0 = !1, Jm = !1;
    function NC() {
      return a0;
    }
    function V_() {
      Jm = !0;
    }
    function H_() {
      a0 = !1, Jm = !1;
    }
    function $_() {
      a0 = Jm, Jm = !1;
    }
    function IC() {
      return LC;
    }
    function FC() {
      LC = es();
    }
    function i0(e) {
      tv = es(), e.actualStartTime < 0 && (e.actualStartTime = es());
    }
    function UC(e) {
      tv = -1;
    }
    function ey(e, t) {
      if (tv >= 0) {
        var a = es() - tv;
        e.actualDuration += a, t && (e.selfBaseDuration = a), tv = -1;
      }
    }
    function nl(e) {
      if (Xm >= 0) {
        var t = es() - Xm;
        Xm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case A:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case ee:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function o0(e) {
      if (Zm >= 0) {
        var t = es() - Zm;
        Zm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case A:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case ee:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
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
    function s0(e, t, a) {
      return { value: e, source: null, stack: a ?? null, digest: t ?? null };
    }
    function B_(e, t) {
      return !0;
    }
    function c0(e, t) {
      try {
        var a = B_(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, s = t.stack, d = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === M)
            return;
          console.error(i);
        }
        var m = l ? wt(l) : null, g = m ? "The above error occurred in the <" + m + "> component:" : "The above error occurred in one of your React components:", w;
        if (e.tag === A)
          w = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var R = wt(e) || "Anonymous";
          w = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + R + ".");
        }
        var U = g + `
` + d + `

` + ("" + w);
        console.error(U);
      } catch (I) {
        setTimeout(function() {
          throw I;
        });
      }
    }
    var W_ = typeof WeakMap == "function" ? WeakMap : Map;
    function jC(e, t, a) {
      var i = Bl(Cn, a);
      i.tag = cS, i.payload = { element: null };
      var l = t.value;
      return i.callback = function() {
        Uk(l), c0(e, t);
      }, i;
    }
    function f0(e, t, a) {
      var i = Bl(Cn, a);
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
        qT(e), c0(e, t), typeof l != "function" && Ik(this);
        var g = t.value, w = t.stack;
        this.componentDidCatch(g, { componentStack: w !== null ? w : "" }), typeof l != "function" && (va(e.lanes, pt) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", wt(e) || "Unknown"));
      }), i;
    }
    function PC(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new W_(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var s = jk.bind(null, e, t, a);
        Tr && yv(e, a), t.then(s, s);
      }
    }
    function G_(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        l.add(a);
    }
    function Y_(e, t) {
      var a = e.tag;
      if ((e.mode & It) === st && (a === k || a === ae || a === _e)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function zC(e) {
      var t = e;
      do {
        if (t.tag === V && A_(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function VC(e, t, a, i, l) {
      if ((e.mode & It) === st) {
        if (e === t)
          e.flags |= vr;
        else {
          if (e.flags |= gt, a.flags |= Ds, a.flags &= ~(Lc | ba), a.tag === M) {
            var s = a.alternate;
            if (s === null)
              a.tag = lt;
            else {
              var d = Bl(Cn, pt);
              d.tag = bm, Ku(a, d, pt);
            }
          }
          a.lanes = Dt(a.lanes, pt);
        }
        return e;
      }
      return e.flags |= vr, e.lanes = l, e;
    }
    function Q_(e, t, a, i, l) {
      if (a.flags |= ba, Tr && yv(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        Y_(a), Yr() && a.mode & It && A1();
        var d = zC(t);
        if (d !== null) {
          d.flags &= ~Hn, VC(d, t, a, e, l), d.mode & It && PC(e, s, l), G_(d, e, s);
          return;
        } else {
          if (!Ou(l)) {
            PC(e, s, l), B0();
            return;
          }
          var m = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = m;
        }
      } else if (Yr() && a.mode & It) {
        A1();
        var g = zC(t);
        if (g !== null) {
          (g.flags & vr) === at && (g.flags |= Hn), VC(g, t, a, e, l), rS(uc(i, a));
          return;
        }
      }
      i = uc(i, a), _k(i);
      var w = t;
      do {
        switch (w.tag) {
          case A: {
            var R = i;
            w.flags |= vr;
            var U = or(l);
            w.lanes = Dt(w.lanes, U);
            var I = jC(w, R, U);
            pS(w, I);
            return;
          }
          case M:
            var Q = i, K = w.type, ie = w.stateNode;
            if ((w.flags & gt) === at && (typeof K.getDerivedStateFromError == "function" || ie !== null && typeof ie.componentDidCatch == "function" && !zT(ie))) {
              w.flags |= vr;
              var He = or(l);
              w.lanes = Dt(w.lanes, He);
              var ot = f0(w, Q, He);
              pS(w, ot);
              return;
            }
            break;
        }
        w = w.return;
      } while (w !== null);
    }
    function q_() {
      return null;
    }
    var nv = p.ReactCurrentOwner, fo = !1, d0, rv, p0, v0, h0, sc, m0, ty;
    d0 = {}, rv = {}, p0 = {}, v0 = {}, h0 = {}, sc = !1, m0 = {}, ty = {};
    function Da(e, t, a, i) {
      e === null ? t.child = iC(t, null, a, i) : t.child = Hf(t, e.child, a, i);
    }
    function K_(e, t, a, i) {
      t.child = Hf(t, e.child, null, i), t.child = Hf(t, null, a, i);
    }
    function HC(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && io(
          s,
          i,
          // Resolved props
          "prop",
          Qt(a)
        );
      }
      var d = a.render, m = t.ref, g, w;
      Vf(t, l), Vo(t);
      {
        if (nv.current = t, ia(!0), g = Qf(e, t, d, i, m, l), w = qf(), t.mode & Un) {
          ir(!0);
          try {
            g = Qf(e, t, d, i, m, l), w = qf();
          } finally {
            ir(!1);
          }
        }
        ia(!1);
      }
      return Sl(), e !== null && !fo ? (cC(e, t, l), Wl(e, t, l)) : (Yr() && w && Xg(t), t.flags |= No, Da(e, t, g, l), t.child);
    }
    function $C(e, t, a, i, l) {
      if (e === null) {
        var s = a.type;
        if (tD(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var d = s;
          return d = rd(s), t.tag = _e, t.type = d, S0(t, s), BC(e, t, d, i, l);
        }
        {
          var m = s.propTypes;
          m && io(
            m,
            i,
            // Resolved props
            "prop",
            Qt(s)
          );
        }
        var g = tE(a.type, null, i, t, t.mode, l);
        return g.ref = t.ref, g.return = t, t.child = g, g;
      }
      {
        var w = a.type, R = w.propTypes;
        R && io(
          R,
          i,
          // Resolved props
          "prop",
          Qt(w)
        );
      }
      var U = e.child, I = R0(e, l);
      if (!I) {
        var Q = U.memoizedProps, K = a.compare;
        if (K = K !== null ? K : tt, K(Q, i) && e.ref === t.ref)
          return Wl(e, t, l);
      }
      t.flags |= No;
      var ie = vc(U, i);
      return ie.ref = t.ref, ie.return = t, t.child = ie, ie;
    }
    function BC(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === it) {
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
            Qt(s)
          );
        }
      }
      if (e !== null) {
        var R = e.memoizedProps;
        if (tt(R, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (fo = !1, t.pendingProps = i = R, R0(e, l))
            (e.flags & Ds) !== at && (fo = !0);
          else
            return t.lanes = e.lanes, Wl(e, t, l);
      }
      return y0(e, t, a, i, l);
    }
    function WC(e, t, a) {
      var i = t.pendingProps, l = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || _)
        if ((t.mode & It) === st) {
          var d = { baseLanes: se, cachePool: null, transitions: null };
          t.memoizedState = d, vy(t, a);
        } else if (va(a, pa)) {
          var U = { baseLanes: se, cachePool: null, transitions: null };
          t.memoizedState = U;
          var I = s !== null ? s.baseLanes : a;
          vy(t, I);
        } else {
          var m = null, g;
          if (s !== null) {
            var w = s.baseLanes;
            g = Dt(w, a);
          } else
            g = a;
          t.lanes = t.childLanes = pa;
          var R = { baseLanes: g, cachePool: m, transitions: null };
          return t.memoizedState = R, t.updateQueue = null, vy(t, g), null;
        }
      else {
        var Q;
        s !== null ? (Q = Dt(s.baseLanes, a), t.memoizedState = null) : Q = a, vy(t, Q);
      }
      return Da(e, t, l, a), t.child;
    }
    function X_(e, t, a) {
      var i = t.pendingProps;
      return Da(e, t, i, a), t.child;
    }
    function Z_(e, t, a) {
      var i = t.pendingProps.children;
      return Da(e, t, i, a), t.child;
    }
    function J_(e, t, a) {
      {
        t.flags |= kt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, s = l.children;
      return Da(e, t, s, a), t.child;
    }
    function GC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= la, t.flags |= Pd);
    }
    function y0(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && io(
          s,
          i,
          // Resolved props
          "prop",
          Qt(a)
        );
      }
      var d;
      {
        var m = If(t, a, !0);
        d = Ff(t, m);
      }
      var g, w;
      Vf(t, l), Vo(t);
      {
        if (nv.current = t, ia(!0), g = Qf(e, t, a, i, d, l), w = qf(), t.mode & Un) {
          ir(!0);
          try {
            g = Qf(e, t, a, i, d, l), w = qf();
          } finally {
            ir(!1);
          }
        }
        ia(!1);
      }
      return Sl(), e !== null && !fo ? (cC(e, t, l), Wl(e, t, l)) : (Yr() && w && Xg(t), t.flags |= No, Da(e, t, g, l), t.child);
    }
    function YC(e, t, a, i, l) {
      {
        switch (mD(t)) {
          case !1: {
            var s = t.stateNode, d = t.type, m = new d(t.memoizedProps, s.context), g = m.state;
            s.updater.enqueueSetState(s, g, null);
            break;
          }
          case !0: {
            t.flags |= gt, t.flags |= vr;
            var w = new Error("Simulated error coming from DevTools"), R = or(l);
            t.lanes = Dt(t.lanes, R);
            var U = f0(t, uc(w, t), R);
            pS(t, U);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var I = a.propTypes;
          I && io(
            I,
            i,
            // Resolved props
            "prop",
            Qt(a)
          );
        }
      }
      var Q;
      Zo(a) ? (Q = !0, pm(t)) : Q = !1, Vf(t, l);
      var K = t.stateNode, ie;
      K === null ? (ry(e, t), eC(t, a, i), RS(t, a, i, l), ie = !0) : e === null ? ie = R_(t, a, i, l) : ie = x_(e, t, a, i, l);
      var He = g0(e, t, a, ie, Q, l);
      {
        var ot = t.stateNode;
        ie && ot.props !== i && (sc || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", wt(t) || "a component"), sc = !0);
      }
      return He;
    }
    function g0(e, t, a, i, l, s) {
      GC(e, t);
      var d = (t.flags & gt) !== at;
      if (!i && !d)
        return l && _1(t, a, !1), Wl(e, t, s);
      var m = t.stateNode;
      nv.current = t;
      var g;
      if (d && typeof a.getDerivedStateFromError != "function")
        g = null, UC();
      else {
        Vo(t);
        {
          if (ia(!0), g = m.render(), t.mode & Un) {
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
      return t.flags |= No, e !== null && d ? K_(e, t, g, s) : Da(e, t, g, s), t.memoizedState = m.state, l && _1(t, a, !0), t.child;
    }
    function QC(e) {
      var t = e.stateNode;
      t.pendingContext ? R1(e, t.pendingContext, t.pendingContext !== t.context) : t.context && R1(e, t.context, !1), AS(e, t.containerInfo);
    }
    function eO(e, t, a) {
      if (QC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, s = l.element;
      G1(e, t), Om(t, i, null, a);
      var d = t.memoizedState;
      t.stateNode;
      var m = d.element;
      if (l.isDehydrated) {
        var g = { element: m, isDehydrated: !1, cache: d.cache, pendingSuspenseBoundaries: d.pendingSuspenseBoundaries, transitions: d.transitions }, w = t.updateQueue;
        if (w.baseState = g, t.memoizedState = g, t.flags & Hn) {
          var R = uc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return qC(e, t, m, a, R);
        } else if (m !== s) {
          var U = uc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return qC(e, t, m, a, U);
        } else {
          a_(t);
          var I = iC(t, null, m, a);
          t.child = I;
          for (var Q = I; Q; )
            Q.flags = Q.flags & ~xn | Ha, Q = Q.sibling;
        }
      } else {
        if (Pf(), m === s)
          return Wl(e, t, a);
        Da(e, t, m, a);
      }
      return t.child;
    }
    function qC(e, t, a, i, l) {
      return Pf(), rS(l), t.flags |= Hn, Da(e, t, a, i), t.child;
    }
    function tO(e, t, a) {
      lC(t), e === null && nS(t);
      var i = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, d = l.children, m = Ug(i, l);
      return m ? d = null : s !== null && Ug(i, s) && (t.flags |= un), GC(e, t), Da(e, t, d, a), t.child;
    }
    function nO(e, t) {
      return e === null && nS(t), null;
    }
    function rO(e, t, a, i) {
      ry(e, t);
      var l = t.pendingProps, s = a, d = s._payload, m = s._init, g = m(d);
      t.type = g;
      var w = t.tag = nD(g), R = uo(g, l), U;
      switch (w) {
        case k:
          return S0(t, g), t.type = g = rd(g), U = y0(null, t, g, R, i), U;
        case M:
          return t.type = g = q0(g), U = YC(null, t, g, R, i), U;
        case ae:
          return t.type = g = K0(g), U = HC(null, t, g, R, i), U;
        case me: {
          if (t.type !== t.elementType) {
            var I = g.propTypes;
            I && io(
              I,
              R,
              // Resolved for outer only
              "prop",
              Qt(g)
            );
          }
          return U = $C(
            null,
            t,
            g,
            uo(g.type, R),
            // The inner type can have defaults too
            i
          ), U;
        }
      }
      var Q = "";
      throw g !== null && typeof g == "object" && g.$$typeof === it && (Q = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + g + ". " + ("Lazy element type must resolve to a class or function." + Q));
    }
    function aO(e, t, a, i, l) {
      ry(e, t), t.tag = M;
      var s;
      return Zo(a) ? (s = !0, pm(t)) : s = !1, Vf(t, l), eC(t, a, i), RS(t, a, i, l), g0(null, t, a, !0, s, l);
    }
    function iO(e, t, a, i) {
      ry(e, t);
      var l = t.pendingProps, s;
      {
        var d = If(t, a, !1);
        s = Ff(t, d);
      }
      Vf(t, i);
      var m, g;
      Vo(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var w = Qt(a) || "Unknown";
          d0[w] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", w, w), d0[w] = !0);
        }
        t.mode & Un && lo.recordLegacyContextWarning(t, null), ia(!0), nv.current = t, m = Qf(null, t, a, l, s, i), g = qf(), ia(!1);
      }
      if (Sl(), t.flags |= No, typeof m == "object" && m !== null && typeof m.render == "function" && m.$$typeof === void 0) {
        var R = Qt(a) || "Unknown";
        rv[R] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), rv[R] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof m == "object" && m !== null && typeof m.render == "function" && m.$$typeof === void 0
      ) {
        {
          var U = Qt(a) || "Unknown";
          rv[U] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", U, U, U), rv[U] = !0);
        }
        t.tag = M, t.memoizedState = null, t.updateQueue = null;
        var I = !1;
        return Zo(a) ? (I = !0, pm(t)) : I = !1, t.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, dS(t), J1(t, m), RS(t, a, l, i), g0(null, t, a, !0, I, i);
      } else {
        if (t.tag = k, t.mode & Un) {
          ir(!0);
          try {
            m = Qf(null, t, a, l, s, i), g = qf();
          } finally {
            ir(!1);
          }
        }
        return Yr() && g && Xg(t), Da(null, t, m, i), S0(t, a), t.child;
      }
    }
    function S0(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Br();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", s = e._debugSource;
          s && (l = s.fileName + ":" + s.lineNumber), h0[l] || (h0[l] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var d = Qt(t) || "Unknown";
          v0[d] || (y("%s: Function components do not support getDerivedStateFromProps.", d), v0[d] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var m = Qt(t) || "Unknown";
          p0[m] || (y("%s: Function components do not support contextType.", m), p0[m] = !0);
        }
      }
    }
    var E0 = { dehydrated: null, treeContext: null, retryLane: $t };
    function C0(e) {
      return { baseLanes: e, cachePool: q_(), transitions: null };
    }
    function oO(e, t) {
      var a = null;
      return { baseLanes: Dt(e.baseLanes, t), cachePool: a, transitions: e.transitions };
    }
    function lO(e, t, a, i) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return NS(e, Qp);
    }
    function uO(e, t) {
      return ku(e.childLanes, t);
    }
    function KC(e, t, a) {
      var i = t.pendingProps;
      yD(t) && (t.flags |= gt);
      var l = so.current, s = !1, d = (t.flags & gt) !== at;
      if (d || lO(l, e) ? (s = !0, t.flags &= ~gt) : (e === null || e.memoizedState !== null) && (l = D_(l, sC)), l = Bf(l), Zu(t, l), e === null) {
        nS(t);
        var m = t.memoizedState;
        if (m !== null) {
          var g = m.dehydrated;
          if (g !== null)
            return pO(t, g);
        }
        var w = i.children, R = i.fallback;
        if (s) {
          var U = sO(t, w, R, a), I = t.child;
          return I.memoizedState = C0(a), t.memoizedState = E0, U;
        } else
          return T0(t, w);
      } else {
        var Q = e.memoizedState;
        if (Q !== null) {
          var K = Q.dehydrated;
          if (K !== null)
            return vO(e, t, d, i, K, Q, a);
        }
        if (s) {
          var ie = i.fallback, He = i.children, ot = fO(e, t, He, ie, a), Ze = t.child, Wt = e.child.memoizedState;
          return Ze.memoizedState = Wt === null ? C0(a) : oO(Wt, a), Ze.childLanes = uO(e, a), t.memoizedState = E0, ot;
        } else {
          var jt = i.children, W = cO(e, t, jt, a);
          return t.memoizedState = null, W;
        }
      }
    }
    function T0(e, t, a) {
      var i = e.mode, l = { mode: "visible", children: t }, s = w0(l, i);
      return s.return = e, e.child = s, s;
    }
    function sO(e, t, a, i) {
      var l = e.mode, s = e.child, d = { mode: "hidden", children: t }, m, g;
      return (l & It) === st && s !== null ? (m = s, m.childLanes = se, m.pendingProps = d, e.mode & dt && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = 0, m.treeBaseDuration = 0), g = os(a, l, i, null)) : (m = w0(d, l), g = os(a, l, i, null)), m.return = e, g.return = e, m.sibling = g, e.child = m, g;
    }
    function w0(e, t, a) {
      return XT(e, t, se, null);
    }
    function XC(e, t) {
      return vc(e, t);
    }
    function cO(e, t, a, i) {
      var l = e.child, s = l.sibling, d = XC(l, { mode: "visible", children: a });
      if ((t.mode & It) === st && (d.lanes = i), d.return = t, d.sibling = null, s !== null) {
        var m = t.deletions;
        m === null ? (t.deletions = [s], t.flags |= nn) : m.push(s);
      }
      return t.child = d, d;
    }
    function fO(e, t, a, i, l) {
      var s = t.mode, d = e.child, m = d.sibling, g = { mode: "hidden", children: a }, w;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & It) === st && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== d
      ) {
        var R = t.child;
        w = R, w.childLanes = se, w.pendingProps = g, t.mode & dt && (w.actualDuration = 0, w.actualStartTime = -1, w.selfBaseDuration = d.selfBaseDuration, w.treeBaseDuration = d.treeBaseDuration), t.deletions = null;
      } else
        w = XC(d, g), w.subtreeFlags = d.subtreeFlags & Cr;
      var U;
      return m !== null ? U = vc(m, i) : (U = os(i, s, l, null), U.flags |= xn), U.return = t, w.return = t, w.sibling = U, t.child = w, U;
    }
    function ny(e, t, a, i) {
      i !== null && rS(i), Hf(t, e.child, null, a);
      var l = t.pendingProps, s = l.children, d = T0(t, s);
      return d.flags |= xn, t.memoizedState = null, d;
    }
    function dO(e, t, a, i, l) {
      var s = t.mode, d = { mode: "visible", children: a }, m = w0(d, s), g = os(i, s, l, null);
      return g.flags |= xn, m.return = t, g.return = t, m.sibling = g, t.child = m, (t.mode & It) !== st && Hf(t, e.child, null, l), g;
    }
    function pO(e, t, a) {
      return (e.mode & It) === st ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = pt) : Vg(t) ? e.lanes = Tl : e.lanes = pa, null;
    }
    function vO(e, t, a, i, l, s, d) {
      if (a)
        if (t.flags & Hn) {
          t.flags &= ~Hn;
          var W = s0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return ny(e, t, d, W);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= gt, null;
          var oe = i.children, G = i.fallback, be = dO(e, t, oe, G, d), $e = t.child;
          return $e.memoizedState = C0(d), t.memoizedState = E0, be;
        }
      else {
        if (n_(), (t.mode & It) === st)
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
            var R = Sx(l);
            m = R.digest, g = R.message, w = R.stack;
          }
          var U;
          g ? U = new Error(g) : U = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var I = s0(U, m, w);
          return ny(e, t, d, I);
        }
        var Q = va(d, e.childLanes);
        if (fo || Q) {
          var K = py();
          if (K !== null) {
            var ie = ug(K, d);
            if (ie !== $t && ie !== s.retryLane) {
              s.retryLane = ie;
              var He = Cn;
              Za(e, ie), Ar(K, e, ie, He);
            }
          }
          B0();
          var ot = s0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return ny(e, t, d, ot);
        } else if (S1(l)) {
          t.flags |= gt, t.child = e.child;
          var Ze = Pk.bind(null, e);
          return Ex(l, Ze), null;
        } else {
          i_(t, l, s.treeContext);
          var Wt = i.children, jt = T0(t, Wt);
          return jt.flags |= Ha, jt;
        }
      }
    }
    function ZC(e, t, a) {
      e.lanes = Dt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Dt(i.lanes, t)), uS(e.return, t, a);
    }
    function hO(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === V) {
          var l = i.memoizedState;
          l !== null && ZC(i, a, e);
        } else if (i.tag === mt)
          ZC(i, a, e);
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
    function mO(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Im(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function yO(e) {
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
    function gO(e, t) {
      e !== void 0 && !ty[e] && (e !== "collapsed" && e !== "hidden" ? (ty[e] = !0, y('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (ty[e] = !0, y('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function JC(e, t) {
      {
        var a = Vt(e), i = !a && typeof oi(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function SO(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Vt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!JC(e[a], a))
              return;
        } else {
          var i = oi(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var s = l.next(), d = 0; !s.done; s = l.next()) {
                if (!JC(s.value, d))
                  return;
                d++;
              }
          } else
            y('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function b0(e, t, a, i, l) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: i, tail: a, tailMode: l } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = l);
    }
    function eT(e, t, a) {
      var i = t.pendingProps, l = i.revealOrder, s = i.tail, d = i.children;
      yO(l), gO(s, l), SO(d, l), Da(e, t, d, a);
      var m = so.current, g = NS(m, Qp);
      if (g)
        m = IS(m, Qp), t.flags |= gt;
      else {
        var w = e !== null && (e.flags & gt) !== at;
        w && hO(t, t.child, a), m = Bf(m);
      }
      if (Zu(t, m), (t.mode & It) === st)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var R = mO(t.child), U;
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
            var I = null, Q = t.child;
            for (t.child = null; Q !== null; ) {
              var K = Q.alternate;
              if (K !== null && Im(K) === null) {
                t.child = Q;
                break;
              }
              var ie = Q.sibling;
              Q.sibling = I, I = Q, Q = ie;
            }
            b0(
              t,
              !0,
              // isBackwards
              I,
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
    function EO(e, t, a) {
      AS(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Hf(t, null, i, a) : Da(e, t, i, a), t.child;
    }
    var tT = !1;
    function CO(e, t, a) {
      var i = t.type, l = i._context, s = t.pendingProps, d = t.memoizedProps, m = s.value;
      {
        "value" in s || tT || (tT = !0, y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var g = t.type.propTypes;
        g && io(g, s, "prop", "Context.Provider");
      }
      if (H1(t, l, m), d !== null) {
        var w = d.value;
        if (Ge(w, m)) {
          if (d.children === s.children && !fm())
            return Wl(e, t, a);
        } else
          h_(t, l, a);
      }
      var R = s.children;
      return Da(e, t, R, a), t.child;
    }
    var nT = !1;
    function TO(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (nT || (nT = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Vf(t, a);
      var d = Sr(i);
      Vo(t);
      var m;
      return nv.current = t, ia(!0), m = s(d), ia(!1), Sl(), t.flags |= No, Da(e, t, m, a), t.child;
    }
    function av() {
      fo = !0;
    }
    function ry(e, t) {
      (t.mode & It) === st && e !== null && (e.alternate = null, t.alternate = null, t.flags |= xn);
    }
    function Wl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), UC(), mv(t.lanes), va(a, t.childLanes) ? (__(e, t), t.child) : null;
    }
    function wO(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var l = i.child;
          if (l === null)
            throw new Error("Expected parent to have a child.");
          for (; l.sibling !== t; )
            if (l = l.sibling, l === null)
              throw new Error("Expected to find the previous sibling.");
          l.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= nn) : s.push(e), a.flags |= xn, a;
      }
    }
    function R0(e, t) {
      var a = e.lanes;
      return !!va(a, t);
    }
    function bO(e, t, a) {
      switch (t.tag) {
        case A:
          QC(t), t.stateNode, Pf();
          break;
        case P:
          lC(t);
          break;
        case M: {
          var i = t.type;
          Zo(i) && pm(t);
          break;
        }
        case B:
          AS(t, t.stateNode.containerInfo);
          break;
        case ce: {
          var l = t.memoizedProps.value, s = t.type._context;
          H1(t, s, l);
          break;
        }
        case ee:
          {
            var d = va(a, t.childLanes);
            d && (t.flags |= kt);
            {
              var m = t.stateNode;
              m.effectDuration = 0, m.passiveEffectDuration = 0;
            }
          }
          break;
        case V: {
          var g = t.memoizedState;
          if (g !== null) {
            if (g.dehydrated !== null)
              return Zu(t, Bf(so.current)), t.flags |= gt, null;
            var w = t.child, R = w.childLanes;
            if (va(a, R))
              return KC(e, t, a);
            Zu(t, Bf(so.current));
            var U = Wl(e, t, a);
            return U !== null ? U.sibling : null;
          } else
            Zu(t, Bf(so.current));
          break;
        }
        case mt: {
          var I = (e.flags & gt) !== at, Q = va(a, t.childLanes);
          if (I) {
            if (Q)
              return eT(e, t, a);
            t.flags |= gt;
          }
          var K = t.memoizedState;
          if (K !== null && (K.rendering = null, K.tail = null, K.lastEffect = null), Zu(t, so.current), Q)
            break;
          return null;
        }
        case Fe:
        case Ee:
          return t.lanes = se, WC(e, t, a);
      }
      return Wl(e, t, a);
    }
    function rT(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return wO(e, t, tE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || fm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          fo = !0;
        else {
          var s = R0(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & gt) === at)
            return fo = !1, bO(e, t, a);
          (e.flags & Ds) !== at ? fo = !0 : fo = !1;
        }
      } else if (fo = !1, Yr() && Kx(t)) {
        var d = t.index, m = Xx();
        D1(t, m, d);
      }
      switch (t.lanes = se, t.tag) {
        case j:
          return iO(e, t, t.type, a);
        case Qe: {
          var g = t.elementType;
          return rO(e, t, g, a);
        }
        case k: {
          var w = t.type, R = t.pendingProps, U = t.elementType === w ? R : uo(w, R);
          return y0(e, t, w, U, a);
        }
        case M: {
          var I = t.type, Q = t.pendingProps, K = t.elementType === I ? Q : uo(I, Q);
          return YC(e, t, I, K, a);
        }
        case A:
          return eO(e, t, a);
        case P:
          return tO(e, t, a);
        case H:
          return nO(e, t);
        case V:
          return KC(e, t, a);
        case B:
          return EO(e, t, a);
        case ae: {
          var ie = t.type, He = t.pendingProps, ot = t.elementType === ie ? He : uo(ie, He);
          return HC(e, t, ie, ot, a);
        }
        case Z:
          return X_(e, t, a);
        case J:
          return Z_(e, t, a);
        case ee:
          return J_(e, t, a);
        case ce:
          return CO(e, t, a);
        case Ce:
          return TO(e, t, a);
        case me: {
          var Ze = t.type, Wt = t.pendingProps, jt = uo(Ze, Wt);
          if (t.type !== t.elementType) {
            var W = Ze.propTypes;
            W && io(
              W,
              jt,
              // Resolved for outer only
              "prop",
              Qt(Ze)
            );
          }
          return jt = uo(Ze.type, jt), $C(e, t, Ze, jt, a);
        }
        case _e:
          return BC(e, t, t.type, t.pendingProps, a);
        case lt: {
          var oe = t.type, G = t.pendingProps, be = t.elementType === oe ? G : uo(oe, G);
          return aO(e, t, oe, be, a);
        }
        case mt:
          return eT(e, t, a);
        case Et:
          break;
        case Fe:
          return WC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Kf(e) {
      e.flags |= kt;
    }
    function aT(e) {
      e.flags |= la, e.flags |= Pd;
    }
    var iT, x0, oT, lT;
    iT = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === P || l.tag === H)
          YR(e, l.stateNode);
        else if (l.tag !== B) {
          if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
        }
        if (l === t)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            return;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }, x0 = function(e, t) {
    }, oT = function(e, t, a, i, l) {
      var s = e.memoizedProps;
      if (s !== i) {
        var d = t.stateNode, m = MS(), g = qR(d, a, s, i, l, m);
        t.updateQueue = g, g && Kf(t);
      }
    }, lT = function(e, t, a, i) {
      a !== i && Kf(t);
    };
    function iv(e, t) {
      if (!Yr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
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
      var t = e.alternate !== null && e.alternate.child === e.child, a = se, i = at;
      if (t) {
        if ((e.mode & dt) !== st) {
          for (var g = e.selfBaseDuration, w = e.child; w !== null; )
            a = Dt(a, Dt(w.lanes, w.childLanes)), i |= w.subtreeFlags & Cr, i |= w.flags & Cr, g += w.treeBaseDuration, w = w.sibling;
          e.treeBaseDuration = g;
        } else
          for (var R = e.child; R !== null; )
            a = Dt(a, Dt(R.lanes, R.childLanes)), i |= R.subtreeFlags & Cr, i |= R.flags & Cr, R.return = e, R = R.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & dt) !== st) {
          for (var l = e.actualDuration, s = e.selfBaseDuration, d = e.child; d !== null; )
            a = Dt(a, Dt(d.lanes, d.childLanes)), i |= d.subtreeFlags, i |= d.flags, l += d.actualDuration, s += d.treeBaseDuration, d = d.sibling;
          e.actualDuration = l, e.treeBaseDuration = s;
        } else
          for (var m = e.child; m !== null; )
            a = Dt(a, Dt(m.lanes, m.childLanes)), i |= m.subtreeFlags, i |= m.flags, m.return = e, m = m.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function RO(e, t, a) {
      if (c_() && (t.mode & It) !== st && (t.flags & gt) === at)
        return U1(t), Pf(), t.flags |= Hn | ba | vr, !1;
      var i = gm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (u_(t), qr(t), (t.mode & dt) !== st) {
            var l = a !== null;
            if (l) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Pf(), (t.flags & gt) === at && (t.memoizedState = null), t.flags |= kt, qr(t), (t.mode & dt) !== st) {
            var d = a !== null;
            if (d) {
              var m = t.child;
              m !== null && (t.treeBaseDuration -= m.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return j1(), !0;
    }
    function uT(e, t, a) {
      var i = t.pendingProps;
      switch (Zg(t), t.tag) {
        case j:
        case Qe:
        case _e:
        case k:
        case ae:
        case Z:
        case J:
        case ee:
        case Ce:
        case me:
          return qr(t), null;
        case M: {
          var l = t.type;
          return Zo(l) && dm(t), qr(t), null;
        }
        case A: {
          var s = t.stateNode;
          if ($f(t), Qg(t), US(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var d = gm(t);
            if (d)
              Kf(t);
            else if (e !== null) {
              var m = e.memoizedState;
              // Check if this is a client root
              (!m.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Hn) !== at) && (t.flags |= Va, j1());
            }
          }
          return x0(e, t), qr(t), null;
        }
        case P: {
          LS(t);
          var g = oC(), w = t.type;
          if (e !== null && t.stateNode != null)
            oT(e, t, w, i, g), e.ref !== t.ref && aT(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return qr(t), null;
            }
            var R = MS(), U = gm(t);
            if (U)
              o_(t, g, R) && Kf(t);
            else {
              var I = GR(w, i, g, R, t);
              iT(I, t, !1, !1), t.stateNode = I, QR(I, w, i, g) && Kf(t);
            }
            t.ref !== null && aT(t);
          }
          return qr(t), null;
        }
        case H: {
          var Q = i;
          if (e && t.stateNode != null) {
            var K = e.memoizedProps;
            lT(e, t, K, Q);
          } else {
            if (typeof Q != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var ie = oC(), He = MS(), ot = gm(t);
            ot ? l_(t) && Kf(t) : t.stateNode = KR(Q, ie, He, t);
          }
          return qr(t), null;
        }
        case V: {
          Wf(t);
          var Ze = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Wt = RO(e, t, Ze);
            if (!Wt)
              return t.flags & vr ? t : null;
          }
          if ((t.flags & gt) !== at)
            return t.lanes = a, (t.mode & dt) !== st && u0(t), t;
          var jt = Ze !== null, W = e !== null && e.memoizedState !== null;
          if (jt !== W && jt) {
            var oe = t.child;
            if (oe.flags |= Io, (t.mode & It) !== st) {
              var G = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !le);
              G || NS(so.current, sC) ? xk() : B0();
            }
          }
          var be = t.updateQueue;
          if (be !== null && (t.flags |= kt), qr(t), (t.mode & dt) !== st && jt) {
            var $e = t.child;
            $e !== null && (t.treeBaseDuration -= $e.treeBaseDuration);
          }
          return null;
        }
        case B:
          return $f(t), x0(e, t), e === null && $x(t.stateNode.containerInfo), qr(t), null;
        case ce:
          var Ue = t.type._context;
          return lS(Ue, t), qr(t), null;
        case lt: {
          var yt = t.type;
          return Zo(yt) && dm(t), qr(t), null;
        }
        case mt: {
          Wf(t);
          var xt = t.memoizedState;
          if (xt === null)
            return qr(t), null;
          var vn = (t.flags & gt) !== at, Jt = xt.rendering;
          if (Jt === null)
            if (vn)
              iv(xt, !1);
            else {
              var cr = Ok() && (e === null || (e.flags & gt) === at);
              if (!cr)
                for (var en = t.child; en !== null; ) {
                  var rr = Im(en);
                  if (rr !== null) {
                    vn = !0, t.flags |= gt, iv(xt, !1);
                    var ga = rr.updateQueue;
                    return ga !== null && (t.updateQueue = ga, t.flags |= kt), t.subtreeFlags = at, O_(t, a), Zu(t, IS(so.current, Qp)), t.child;
                  }
                  en = en.sibling;
                }
              xt.tail !== null && Fn() > kT() && (t.flags |= gt, vn = !0, iv(xt, !1), t.lanes = Zd);
            }
          else {
            if (!vn) {
              var ea = Im(Jt);
              if (ea !== null) {
                t.flags |= gt, vn = !0;
                var yi = ea.updateQueue;
                if (yi !== null && (t.updateQueue = yi, t.flags |= kt), iv(xt, !0), xt.tail === null && xt.tailMode === "hidden" && !Jt.alternate && !Yr())
                  return qr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Fn() * 2 - xt.renderingStartTime > kT() && a !== pa && (t.flags |= gt, vn = !0, iv(xt, !1), t.lanes = Zd);
            }
            if (xt.isBackwards)
              Jt.sibling = t.child, t.child = Jt;
            else {
              var La = xt.last;
              La !== null ? La.sibling = Jt : t.child = Jt, xt.last = Jt;
            }
          }
          if (xt.tail !== null) {
            var Na = xt.tail;
            xt.rendering = Na, xt.tail = Na.sibling, xt.renderingStartTime = Fn(), Na.sibling = null;
            var Sa = so.current;
            return vn ? Sa = IS(Sa, Qp) : Sa = Bf(Sa), Zu(t, Sa), Na;
          }
          return qr(t), null;
        }
        case Et:
          break;
        case Fe:
        case Ee: {
          $0(t);
          var Kl = t.memoizedState, ad = Kl !== null;
          if (e !== null) {
            var Cv = e.memoizedState, ol = Cv !== null;
            ol !== ad && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !_ && (t.flags |= Io);
          }
          return !ad || (t.mode & It) === st ? qr(t) : va(il, pa) && (qr(t), t.subtreeFlags & (xn | kt) && (t.flags |= Io)), null;
        }
        case Te:
          return null;
        case Re:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function xO(e, t, a) {
      switch (Zg(t), t.tag) {
        case M: {
          var i = t.type;
          Zo(i) && dm(t);
          var l = t.flags;
          return l & vr ? (t.flags = l & ~vr | gt, (t.mode & dt) !== st && u0(t), t) : null;
        }
        case A: {
          t.stateNode, $f(t), Qg(t), US();
          var s = t.flags;
          return (s & vr) !== at && (s & gt) === at ? (t.flags = s & ~vr | gt, t) : null;
        }
        case P:
          return LS(t), null;
        case V: {
          Wf(t);
          var d = t.memoizedState;
          if (d !== null && d.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Pf();
          }
          var m = t.flags;
          return m & vr ? (t.flags = m & ~vr | gt, (t.mode & dt) !== st && u0(t), t) : null;
        }
        case mt:
          return Wf(t), null;
        case B:
          return $f(t), null;
        case ce:
          var g = t.type._context;
          return lS(g, t), null;
        case Fe:
        case Ee:
          return $0(t), null;
        case Te:
          return null;
        default:
          return null;
      }
    }
    function sT(e, t, a) {
      switch (Zg(t), t.tag) {
        case M: {
          var i = t.type.childContextTypes;
          i != null && dm(t);
          break;
        }
        case A: {
          t.stateNode, $f(t), Qg(t), US();
          break;
        }
        case P: {
          LS(t);
          break;
        }
        case B:
          $f(t);
          break;
        case V:
          Wf(t);
          break;
        case mt:
          Wf(t);
          break;
        case ce:
          var l = t.type._context;
          lS(l, t);
          break;
        case Fe:
        case Ee:
          $0(t);
          break;
      }
    }
    var cT = null;
    cT = /* @__PURE__ */ new Set();
    var ay = !1, Kr = !1, _O = typeof WeakSet == "function" ? WeakSet : Set, Ye = null, Xf = null, Zf = null;
    function OO(e) {
      yl(null, function() {
        throw e;
      }), Ud();
    }
    var kO = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & dt)
        try {
          rl(), t.componentWillUnmount();
        } finally {
          nl(e);
        }
      else
        t.componentWillUnmount();
    };
    function fT(e, t) {
      try {
        ts(Rr, e);
      } catch (a) {
        Dn(e, t, a);
      }
    }
    function _0(e, t, a) {
      try {
        kO(e, a);
      } catch (i) {
        Dn(e, t, i);
      }
    }
    function DO(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Dn(e, t, i);
      }
    }
    function dT(e, t) {
      try {
        vT(e);
      } catch (a) {
        Dn(e, t, a);
      }
    }
    function Jf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (z && je && e.mode & dt)
              try {
                rl(), i = a(null);
              } finally {
                nl(e);
              }
            else
              i = a(null);
          } catch (l) {
            Dn(e, t, l);
          }
          typeof i == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", wt(e));
        } else
          a.current = null;
    }
    function iy(e, t, a) {
      try {
        a();
      } catch (i) {
        Dn(e, t, i);
      }
    }
    var pT = !1;
    function AO(e, t) {
      BR(e.containerInfo), Ye = t, MO();
      var a = pT;
      return pT = !1, a;
    }
    function MO() {
      for (; Ye !== null; ) {
        var e = Ye, t = e.child;
        (e.subtreeFlags & Cu) !== at && t !== null ? (t.return = e, Ye = t) : LO();
      }
    }
    function LO() {
      for (; Ye !== null; ) {
        var e = Ye;
        ln(e);
        try {
          NO(e);
        } catch (a) {
          Dn(e, e.return, a);
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
    function NO(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Va) !== at) {
        switch (ln(e), e.tag) {
          case k:
          case ae:
          case _e:
            break;
          case M: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !sc && (s.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", wt(e) || "instance"), s.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", wt(e) || "instance"));
              var d = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : uo(e.type, i), l);
              {
                var m = cT;
                d === void 0 && !m.has(e.type) && (m.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", wt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = d;
            }
            break;
          }
          case A: {
            {
              var g = e.stateNode;
              hx(g.containerInfo);
            }
            break;
          }
          case P:
          case H:
          case B:
          case lt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Vn();
      }
    }
    function po(e, t, a) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var s = l.next, d = s;
        do {
          if ((d.tag & e) === e) {
            var m = d.destroy;
            d.destroy = void 0, m !== void 0 && ((e & Qr) !== Ja ? Vc(t) : (e & Rr) !== Ja && Hc(t), (e & Jo) !== Ja && gv(!0), iy(t, a, m), (e & Jo) !== Ja && gv(!1), (e & Qr) !== Ja ? yh() : (e & Rr) !== Ja && Tu());
          }
          d = d.next;
        } while (d !== s);
      }
    }
    function ts(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next, s = l;
        do {
          if ((s.tag & e) === e) {
            (e & Qr) !== Ja ? mh(t) : (e & Rr) !== Ja && gh(t);
            var d = s.create;
            (e & Jo) !== Ja && gv(!0), s.destroy = d(), (e & Jo) !== Ja && gv(!1), (e & Qr) !== Ja ? qd() : (e & Rr) !== Ja && Sh();
            {
              var m = s.destroy;
              if (m !== void 0 && typeof m != "function") {
                var g = void 0;
                (s.tag & Rr) !== at ? g = "useLayoutEffect" : (s.tag & Jo) !== at ? g = "useInsertionEffect" : g = "useEffect";
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
    function IO(e, t) {
      if ((t.flags & kt) !== at)
        switch (t.tag) {
          case ee: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, s = i.onPostCommit, d = IC(), m = t.alternate === null ? "mount" : "update";
            NC() && (m = "nested-update"), typeof s == "function" && s(l, m, a, d);
            var g = t.return;
            e:
              for (; g !== null; ) {
                switch (g.tag) {
                  case A:
                    var w = g.stateNode;
                    w.passiveEffectDuration += a;
                    break e;
                  case ee:
                    var R = g.stateNode;
                    R.passiveEffectDuration += a;
                    break e;
                }
                g = g.return;
              }
            break;
          }
        }
    }
    function FO(e, t, a, i) {
      if ((a.flags & Lr) !== at)
        switch (a.tag) {
          case k:
          case ae:
          case _e: {
            if (!Kr)
              if (a.mode & dt)
                try {
                  rl(), ts(Rr | br, a);
                } finally {
                  nl(a);
                }
              else
                ts(Rr | br, a);
            break;
          }
          case M: {
            var l = a.stateNode;
            if (a.flags & kt && !Kr)
              if (t === null)
                if (a.type === a.elementType && !sc && (l.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", wt(a) || "instance"), l.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", wt(a) || "instance")), a.mode & dt)
                  try {
                    rl(), l.componentDidMount();
                  } finally {
                    nl(a);
                  }
                else
                  l.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : uo(a.type, t.memoizedProps), d = t.memoizedState;
                if (a.type === a.elementType && !sc && (l.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", wt(a) || "instance"), l.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", wt(a) || "instance")), a.mode & dt)
                  try {
                    rl(), l.componentDidUpdate(s, d, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    nl(a);
                  }
                else
                  l.componentDidUpdate(s, d, l.__reactInternalSnapshotBeforeUpdate);
              }
            var m = a.updateQueue;
            m !== null && (a.type === a.elementType && !sc && (l.props !== a.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", wt(a) || "instance"), l.state !== a.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", wt(a) || "instance")), Q1(a, m, l));
            break;
          }
          case A: {
            var g = a.updateQueue;
            if (g !== null) {
              var w = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case P:
                    w = a.child.stateNode;
                    break;
                  case M:
                    w = a.child.stateNode;
                    break;
                }
              Q1(a, g, w);
            }
            break;
          }
          case P: {
            var R = a.stateNode;
            if (t === null && a.flags & kt) {
              var U = a.type, I = a.memoizedProps;
              tx(R, U, I);
            }
            break;
          }
          case H:
            break;
          case B:
            break;
          case ee: {
            {
              var Q = a.memoizedProps, K = Q.onCommit, ie = Q.onRender, He = a.stateNode.effectDuration, ot = IC(), Ze = t === null ? "mount" : "update";
              NC() && (Ze = "nested-update"), typeof ie == "function" && ie(a.memoizedProps.id, Ze, a.actualDuration, a.treeBaseDuration, a.actualStartTime, ot);
              {
                typeof K == "function" && K(a.memoizedProps.id, Ze, He, ot), Lk(a);
                var Wt = a.return;
                e:
                  for (; Wt !== null; ) {
                    switch (Wt.tag) {
                      case A:
                        var jt = Wt.stateNode;
                        jt.effectDuration += He;
                        break e;
                      case ee:
                        var W = Wt.stateNode;
                        W.effectDuration += He;
                        break e;
                    }
                    Wt = Wt.return;
                  }
              }
            }
            break;
          }
          case V: {
            BO(e, a);
            break;
          }
          case mt:
          case lt:
          case Et:
          case Fe:
          case Ee:
          case Re:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Kr || a.flags & la && vT(a);
    }
    function UO(e) {
      switch (e.tag) {
        case k:
        case ae:
        case _e: {
          if (e.mode & dt)
            try {
              rl(), fT(e, e.return);
            } finally {
              nl(e);
            }
          else
            fT(e, e.return);
          break;
        }
        case M: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && DO(e, e.return, t), dT(e, e.return);
          break;
        }
        case P: {
          dT(e, e.return);
          break;
        }
      }
    }
    function jO(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === P) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? fx(l) : px(i.stateNode, i.memoizedProps);
            } catch (d) {
              Dn(e, e.return, d);
            }
          }
        } else if (i.tag === H) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? dx(s) : vx(s, i.memoizedProps);
            } catch (d) {
              Dn(e, e.return, d);
            }
        } else if (!((i.tag === Fe || i.tag === Ee) && i.memoizedState !== null && i !== e)) {
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
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function vT(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case P:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var l;
          if (e.mode & dt)
            try {
              rl(), l = t(i);
            } finally {
              nl(e);
            }
          else
            l = t(i);
          typeof l == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", wt(e));
        } else
          t.hasOwnProperty("current") || y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", wt(e)), t.current = i;
      }
    }
    function PO(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function hT(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, hT(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === P) {
          var a = e.stateNode;
          a !== null && Gx(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function zO(e) {
      for (var t = e.return; t !== null; ) {
        if (mT(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function mT(e) {
      return e.tag === P || e.tag === A || e.tag === B;
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
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== P && t.tag !== H && t.tag !== vt; ) {
            if (t.flags & xn || t.child === null || t.tag === B)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & xn))
            return t.stateNode;
        }
    }
    function VO(e) {
      var t = zO(e);
      switch (t.tag) {
        case P: {
          var a = t.stateNode;
          t.flags & un && (g1(a), t.flags &= ~un);
          var i = yT(e);
          k0(e, i, a);
          break;
        }
        case A:
        case B: {
          var l = t.stateNode.containerInfo, s = yT(e);
          O0(e, s, l);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function O0(e, t, a) {
      var i = e.tag, l = i === P || i === H;
      if (l) {
        var s = e.stateNode;
        t ? lx(a, s, t) : ix(a, s);
      } else if (i !== B) {
        var d = e.child;
        if (d !== null) {
          O0(d, t, a);
          for (var m = d.sibling; m !== null; )
            O0(m, t, a), m = m.sibling;
        }
      }
    }
    function k0(e, t, a) {
      var i = e.tag, l = i === P || i === H;
      if (l) {
        var s = e.stateNode;
        t ? ox(a, s, t) : ax(a, s);
      } else if (i !== B) {
        var d = e.child;
        if (d !== null) {
          k0(d, t, a);
          for (var m = d.sibling; m !== null; )
            k0(m, t, a), m = m.sibling;
        }
      }
    }
    var Xr = null, vo = !1;
    function HO(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case P: {
                Xr = i.stateNode, vo = !1;
                break e;
              }
              case A: {
                Xr = i.stateNode.containerInfo, vo = !0;
                break e;
              }
              case B: {
                Xr = i.stateNode.containerInfo, vo = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Xr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        gT(e, t, a), Xr = null, vo = !1;
      }
      PO(a);
    }
    function ns(e, t, a) {
      for (var i = a.child; i !== null; )
        gT(e, t, i), i = i.sibling;
    }
    function gT(e, t, a) {
      switch (Yd(a), a.tag) {
        case P:
          Kr || Jf(a, t);
        case H: {
          {
            var i = Xr, l = vo;
            Xr = null, ns(e, t, a), Xr = i, vo = l, Xr !== null && (vo ? sx(Xr, a.stateNode) : ux(Xr, a.stateNode));
          }
          return;
        }
        case vt: {
          Xr !== null && (vo ? cx(Xr, a.stateNode) : zg(Xr, a.stateNode));
          return;
        }
        case B: {
          {
            var s = Xr, d = vo;
            Xr = a.stateNode.containerInfo, vo = !0, ns(e, t, a), Xr = s, vo = d;
          }
          return;
        }
        case k:
        case ae:
        case me:
        case _e: {
          if (!Kr) {
            var m = a.updateQueue;
            if (m !== null) {
              var g = m.lastEffect;
              if (g !== null) {
                var w = g.next, R = w;
                do {
                  var U = R, I = U.destroy, Q = U.tag;
                  I !== void 0 && ((Q & Jo) !== Ja ? iy(a, t, I) : (Q & Rr) !== Ja && (Hc(a), a.mode & dt ? (rl(), iy(a, t, I), nl(a)) : iy(a, t, I), Tu())), R = R.next;
                } while (R !== w);
              }
            }
          }
          ns(e, t, a);
          return;
        }
        case M: {
          if (!Kr) {
            Jf(a, t);
            var K = a.stateNode;
            typeof K.componentWillUnmount == "function" && _0(a, t, K);
          }
          ns(e, t, a);
          return;
        }
        case Et: {
          ns(e, t, a);
          return;
        }
        case Fe: {
          if (
            // TODO: Remove this dead flag
            a.mode & It
          ) {
            var ie = Kr;
            Kr = ie || a.memoizedState !== null, ns(e, t, a), Kr = ie;
          } else
            ns(e, t, a);
          break;
        }
        default: {
          ns(e, t, a);
          return;
        }
      }
    }
    function $O(e) {
      e.memoizedState;
    }
    function BO(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var s = l.dehydrated;
            s !== null && kx(s);
          }
        }
      }
    }
    function ST(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new _O()), t.forEach(function(i) {
          var l = zk.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Tr)
              if (Xf !== null && Zf !== null)
                yv(Zf, Xf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function WO(e, t, a) {
      Xf = a, Zf = e, ln(t), ET(t, e), ln(t), Xf = null, Zf = null;
    }
    function ho(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l];
          try {
            HO(e, t, s);
          } catch (g) {
            Dn(s, t, g);
          }
        }
      var d = Sc();
      if (t.subtreeFlags & ca)
        for (var m = t.child; m !== null; )
          ln(m), ET(m, e), m = m.sibling;
      ln(d);
    }
    function ET(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case k:
        case ae:
        case me:
        case _e: {
          if (ho(t, e), al(e), l & kt) {
            try {
              po(Jo | br, e, e.return), ts(Jo | br, e);
            } catch (yt) {
              Dn(e, e.return, yt);
            }
            if (e.mode & dt) {
              try {
                rl(), po(Rr | br, e, e.return);
              } catch (yt) {
                Dn(e, e.return, yt);
              }
              nl(e);
            } else
              try {
                po(Rr | br, e, e.return);
              } catch (yt) {
                Dn(e, e.return, yt);
              }
          }
          return;
        }
        case M: {
          ho(t, e), al(e), l & la && i !== null && Jf(i, i.return);
          return;
        }
        case P: {
          ho(t, e), al(e), l & la && i !== null && Jf(i, i.return);
          {
            if (e.flags & un) {
              var s = e.stateNode;
              try {
                g1(s);
              } catch (yt) {
                Dn(e, e.return, yt);
              }
            }
            if (l & kt) {
              var d = e.stateNode;
              if (d != null) {
                var m = e.memoizedProps, g = i !== null ? i.memoizedProps : m, w = e.type, R = e.updateQueue;
                if (e.updateQueue = null, R !== null)
                  try {
                    nx(d, R, w, g, m, e);
                  } catch (yt) {
                    Dn(e, e.return, yt);
                  }
              }
            }
          }
          return;
        }
        case H: {
          if (ho(t, e), al(e), l & kt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var U = e.stateNode, I = e.memoizedProps, Q = i !== null ? i.memoizedProps : I;
            try {
              rx(U, Q, I);
            } catch (yt) {
              Dn(e, e.return, yt);
            }
          }
          return;
        }
        case A: {
          if (ho(t, e), al(e), l & kt && i !== null) {
            var K = i.memoizedState;
            if (K.isDehydrated)
              try {
                Ox(t.containerInfo);
              } catch (yt) {
                Dn(e, e.return, yt);
              }
          }
          return;
        }
        case B: {
          ho(t, e), al(e);
          return;
        }
        case V: {
          ho(t, e), al(e);
          var ie = e.child;
          if (ie.flags & Io) {
            var He = ie.stateNode, ot = ie.memoizedState, Ze = ot !== null;
            if (He.isHidden = Ze, Ze) {
              var Wt = ie.alternate !== null && ie.alternate.memoizedState !== null;
              Wt || Rk();
            }
          }
          if (l & kt) {
            try {
              $O(e);
            } catch (yt) {
              Dn(e, e.return, yt);
            }
            ST(e);
          }
          return;
        }
        case Fe: {
          var jt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & It
          ) {
            var W = Kr;
            Kr = W || jt, ho(t, e), Kr = W;
          } else
            ho(t, e);
          if (al(e), l & Io) {
            var oe = e.stateNode, G = e.memoizedState, be = G !== null, $e = e;
            if (oe.isHidden = be, be && !jt && ($e.mode & It) !== st) {
              Ye = $e;
              for (var Ue = $e.child; Ue !== null; )
                Ye = Ue, YO(Ue), Ue = Ue.sibling;
            }
            jO($e, be);
          }
          return;
        }
        case mt: {
          ho(t, e), al(e), l & kt && ST(e);
          return;
        }
        case Et:
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
          VO(e);
        } catch (a) {
          Dn(e, e.return, a);
        }
        e.flags &= ~xn;
      }
      t & Ha && (e.flags &= ~Ha);
    }
    function GO(e, t, a) {
      Xf = a, Zf = t, Ye = e, CT(e, t, a), Xf = null, Zf = null;
    }
    function CT(e, t, a) {
      for (var i = (e.mode & It) !== st; Ye !== null; ) {
        var l = Ye, s = l.child;
        if (l.tag === Fe && i) {
          var d = l.memoizedState !== null, m = d || ay;
          if (m) {
            D0(e, t, a);
            continue;
          } else {
            var g = l.alternate, w = g !== null && g.memoizedState !== null, R = w || Kr, U = ay, I = Kr;
            ay = m, Kr = R, Kr && !I && (Ye = l, QO(l));
            for (var Q = s; Q !== null; )
              Ye = Q, CT(
                Q,
                // New root; bubble back up to here and stop.
                t,
                a
              ), Q = Q.sibling;
            Ye = l, ay = U, Kr = I, D0(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & Lr) !== at && s !== null ? (s.return = l, Ye = s) : D0(e, t, a);
      }
    }
    function D0(e, t, a) {
      for (; Ye !== null; ) {
        var i = Ye;
        if ((i.flags & Lr) !== at) {
          var l = i.alternate;
          ln(i);
          try {
            FO(t, l, i, a);
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
    function YO(e) {
      for (; Ye !== null; ) {
        var t = Ye, a = t.child;
        switch (t.tag) {
          case k:
          case ae:
          case me:
          case _e: {
            if (t.mode & dt)
              try {
                rl(), po(Rr, t, t.return);
              } finally {
                nl(t);
              }
            else
              po(Rr, t, t.return);
            break;
          }
          case M: {
            Jf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && _0(t, t.return, i);
            break;
          }
          case P: {
            Jf(t, t.return);
            break;
          }
          case Fe: {
            var l = t.memoizedState !== null;
            if (l) {
              TT(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ye = a) : TT(e);
      }
    }
    function TT(e) {
      for (; Ye !== null; ) {
        var t = Ye;
        if (t === e) {
          Ye = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ye = a;
          return;
        }
        Ye = t.return;
      }
    }
    function QO(e) {
      for (; Ye !== null; ) {
        var t = Ye, a = t.child;
        if (t.tag === Fe) {
          var i = t.memoizedState !== null;
          if (i) {
            wT(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ye = a) : wT(e);
      }
    }
    function wT(e) {
      for (; Ye !== null; ) {
        var t = Ye;
        ln(t);
        try {
          UO(t);
        } catch (i) {
          Dn(t, t.return, i);
        }
        if (Vn(), t === e) {
          Ye = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ye = a;
          return;
        }
        Ye = t.return;
      }
    }
    function qO(e, t, a, i) {
      Ye = t, KO(t, e, a, i);
    }
    function KO(e, t, a, i) {
      for (; Ye !== null; ) {
        var l = Ye, s = l.child;
        (l.subtreeFlags & $a) !== at && s !== null ? (s.return = l, Ye = s) : XO(e, t, a, i);
      }
    }
    function XO(e, t, a, i) {
      for (; Ye !== null; ) {
        var l = Ye;
        if ((l.flags & Mn) !== at) {
          ln(l);
          try {
            ZO(t, l, a, i);
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
    function ZO(e, t, a, i) {
      switch (t.tag) {
        case k:
        case ae:
        case _e: {
          if (t.mode & dt) {
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
    function JO(e) {
      Ye = e, ek();
    }
    function ek() {
      for (; Ye !== null; ) {
        var e = Ye, t = e.child;
        if ((Ye.flags & nn) !== at) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              Ye = l, rk(l, e);
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
        (e.subtreeFlags & $a) !== at && t !== null ? (t.return = e, Ye = t) : tk();
      }
    }
    function tk() {
      for (; Ye !== null; ) {
        var e = Ye;
        (e.flags & Mn) !== at && (ln(e), nk(e), Vn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ye = t;
          return;
        }
        Ye = e.return;
      }
    }
    function nk(e) {
      switch (e.tag) {
        case k:
        case ae:
        case _e: {
          e.mode & dt ? (l0(), po(Qr | br, e, e.return), o0(e)) : po(Qr | br, e, e.return);
          break;
        }
      }
    }
    function rk(e, t) {
      for (; Ye !== null; ) {
        var a = Ye;
        ln(a), ik(a, t), Vn();
        var i = a.child;
        i !== null ? (i.return = a, Ye = i) : ak(e);
      }
    }
    function ak(e) {
      for (; Ye !== null; ) {
        var t = Ye, a = t.sibling, i = t.return;
        if (hT(t), t === e) {
          Ye = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ye = a;
          return;
        }
        Ye = i;
      }
    }
    function ik(e, t) {
      switch (e.tag) {
        case k:
        case ae:
        case _e: {
          e.mode & dt ? (l0(), po(Qr, e, t), o0(e)) : po(Qr, e, t);
          break;
        }
      }
    }
    function ok(e) {
      switch (e.tag) {
        case k:
        case ae:
        case _e: {
          try {
            ts(Rr | br, e);
          } catch (a) {
            Dn(e, e.return, a);
          }
          break;
        }
        case M: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            Dn(e, e.return, a);
          }
          break;
        }
      }
    }
    function lk(e) {
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
    function uk(e) {
      switch (e.tag) {
        case k:
        case ae:
        case _e: {
          try {
            po(Rr | br, e, e.return);
          } catch (a) {
            Dn(e, e.return, a);
          }
          break;
        }
        case M: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && _0(e, e.return, t);
          break;
        }
      }
    }
    function sk(e) {
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
    var ck = [];
    function fk() {
      ck.forEach(function(e) {
        return e();
      });
    }
    var dk = p.ReactCurrentActQueue;
    function pk(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function bT() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && dk.current !== null && y("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var vk = Math.ceil, A0 = p.ReactCurrentDispatcher, M0 = p.ReactCurrentOwner, Zr = p.ReactCurrentBatchConfig, mo = p.ReactCurrentActQueue, Or = (
      /*             */
      0
    ), RT = (
      /*               */
      1
    ), Jr = (
      /*                */
      2
    ), ji = (
      /*                */
      4
    ), Gl = 0, lv = 1, cc = 2, oy = 3, uv = 4, xT = 5, L0 = 6, Bt = Or, Aa = null, Kn = null, kr = se, il = se, N0 = Gu(se), Dr = Gl, sv = null, ly = se, cv = se, uy = se, fv = null, ei = null, I0 = 0, _T = 500, OT = 1 / 0, hk = 500, Yl = null;
    function dv() {
      OT = Fn() + hk;
    }
    function kT() {
      return OT;
    }
    var sy = !1, F0 = null, ed = null, fc = !1, rs = null, pv = se, U0 = [], j0 = null, mk = 50, vv = 0, P0 = null, z0 = !1, cy = !1, yk = 50, td = 0, fy = null, hv = Cn, dy = se, DT = !1;
    function py() {
      return Aa;
    }
    function Ma() {
      return (Bt & (Jr | ji)) !== Or ? Fn() : (hv !== Cn || (hv = Fn()), hv);
    }
    function as(e) {
      var t = e.mode;
      if ((t & It) === st)
        return pt;
      if ((Bt & Jr) !== Or && kr !== se)
        return or(kr);
      var a = p_() !== d_;
      if (a) {
        if (Zr.transition !== null) {
          var i = Zr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return dy === $t && (dy = tp()), dy;
      }
      var l = Ya();
      if (l !== $t)
        return l;
      var s = XR();
      return s;
    }
    function gk(e) {
      var t = e.mode;
      return (t & It) === st ? pt : lg();
    }
    function Ar(e, t, a, i) {
      Hk(), DT && y("useInsertionEffect must not schedule updates."), z0 && (cy = !0), kl(e, a, i), (Bt & Jr) !== se && e === Aa ? Wk(t) : (Tr && op(e, t, a), Gk(t), e === Aa && ((Bt & Jr) === Or && (cv = Dt(cv, a)), Dr === uv && is(e, kr)), ti(e, i), a === pt && Bt === Or && (t.mode & It) === st && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !mo.isBatchingLegacy && (dv(), k1()));
    }
    function Sk(e, t, a) {
      var i = e.current;
      i.lanes = t, kl(e, t, a), ti(e, a);
    }
    function Ek(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Bt & Jr) !== Or
      );
    }
    function ti(e, t) {
      var a = e.callbackNode;
      ag(e, t);
      var i = Fs(e, e === Aa ? kr : se);
      if (i === se) {
        a !== null && GT(a), e.callbackNode = null, e.callbackPriority = $t;
        return;
      }
      var l = tr(i), s = e.callbackPriority;
      if (s === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(mo.current !== null && a !== Y0)) {
        a == null && s !== pt && y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && GT(a);
      var d;
      if (l === pt)
        e.tag === Yu ? (mo.isBatchingLegacy !== null && (mo.didScheduleLegacyUpdate = !0), qx(LT.bind(null, e))) : O1(LT.bind(null, e)), mo.current !== null ? mo.current.push(Qu) : JR(function() {
          (Bt & (Jr | ji)) === Or && Qu();
        }), d = null;
      else {
        var m;
        switch (Vs(i)) {
          case Nr:
            m = jc;
            break;
          case wr:
            m = _a;
            break;
          case eo:
            m = Oi;
            break;
          case Ps:
            m = Uo;
            break;
          default:
            m = Oi;
            break;
        }
        d = Q0(m, AT.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = d;
    }
    function AT(e, t) {
      if (H_(), hv = Cn, dy = se, (Bt & (Jr | ji)) !== Or)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = ql();
      if (i && e.callbackNode !== a)
        return null;
      var l = Fs(e, e === Aa ? kr : se);
      if (l === se)
        return null;
      var s = !js(e, l) && !Rh(e, l) && !t, d = s ? Dk(e, l) : hy(e, l);
      if (d !== Gl) {
        if (d === cc) {
          var m = Jd(e);
          m !== se && (l = m, d = V0(e, m));
        }
        if (d === lv) {
          var g = sv;
          throw dc(e, se), is(e, l), ti(e, Fn()), g;
        }
        if (d === L0)
          is(e, l);
        else {
          var w = !js(e, l), R = e.current.alternate;
          if (w && !Tk(R)) {
            if (d = hy(e, l), d === cc) {
              var U = Jd(e);
              U !== se && (l = U, d = V0(e, U));
            }
            if (d === lv) {
              var I = sv;
              throw dc(e, se), is(e, l), ti(e, Fn()), I;
            }
          }
          e.finishedWork = R, e.finishedLanes = l, Ck(e, d, l);
        }
      }
      return ti(e, Fn()), e.callbackNode === a ? AT.bind(null, e) : null;
    }
    function V0(e, t) {
      var a = fv;
      if (ur(e)) {
        var i = dc(e, t);
        i.flags |= Hn, Hx(e.containerInfo);
      }
      var l = hy(e, t);
      if (l !== cc) {
        var s = ei;
        ei = a, s !== null && MT(s);
      }
      return l;
    }
    function MT(e) {
      ei === null ? ei = e : ei.push.apply(ei, e);
    }
    function Ck(e, t, a) {
      switch (t) {
        case Gl:
        case lv:
          throw new Error("Root did not complete. This is a bug in React.");
        case cc: {
          pc(e, ei, Yl);
          break;
        }
        case oy: {
          if (is(e, a), sf(a) && // do not delay if we're inside an act() scope
          !YT()) {
            var i = I0 + _T - Fn();
            if (i > 10) {
              var l = Fs(e, se);
              if (l !== se)
                break;
              var s = e.suspendedLanes;
              if (!Ol(s, a)) {
                Ma(), ap(e, s);
                break;
              }
              e.timeoutHandle = jg(pc.bind(null, e, ei, Yl), i);
              break;
            }
          }
          pc(e, ei, Yl);
          break;
        }
        case uv: {
          if (is(e, a), bh(a))
            break;
          if (!YT()) {
            var d = wh(e, a), m = d, g = Fn() - m, w = Vk(g) - g;
            if (w > 10) {
              e.timeoutHandle = jg(pc.bind(null, e, ei, Yl), w);
              break;
            }
          }
          pc(e, ei, Yl);
          break;
        }
        case xT: {
          pc(e, ei, Yl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Tk(e) {
      for (var t = e; ; ) {
        if (t.flags & ks) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
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
      if ($_(), (Bt & (Jr | ji)) !== Or)
        throw new Error("Should not already be working.");
      ql();
      var t = Fs(e, se);
      if (!va(t, pt))
        return ti(e, Fn()), null;
      var a = hy(e, t);
      if (e.tag !== Yu && a === cc) {
        var i = Jd(e);
        i !== se && (t = i, a = V0(e, i));
      }
      if (a === lv) {
        var l = sv;
        throw dc(e, se), is(e, t), ti(e, Fn()), l;
      }
      if (a === L0)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, pc(e, ei, Yl), ti(e, Fn()), null;
    }
    function wk(e, t) {
      t !== se && (Du(e, Dt(t, pt)), ti(e, Fn()), (Bt & (Jr | ji)) === Or && (dv(), Qu()));
    }
    function H0(e, t) {
      var a = Bt;
      Bt |= RT;
      try {
        return e(t);
      } finally {
        Bt = a, Bt === Or && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !mo.isBatchingLegacy && (dv(), k1());
      }
    }
    function bk(e, t, a, i, l) {
      var s = Ya(), d = Zr.transition;
      try {
        return Zr.transition = null, lr(Nr), e(t, a, i, l);
      } finally {
        lr(s), Zr.transition = d, Bt === Or && dv();
      }
    }
    function Ql(e) {
      rs !== null && rs.tag === Yu && (Bt & (Jr | ji)) === Or && ql();
      var t = Bt;
      Bt |= RT;
      var a = Zr.transition, i = Ya();
      try {
        return Zr.transition = null, lr(Nr), e ? e() : void 0;
      } finally {
        lr(i), Zr.transition = a, Bt = t, (Bt & (Jr | ji)) === Or && Qu();
      }
    }
    function NT() {
      return (Bt & (Jr | ji)) !== Or;
    }
    function vy(e, t) {
      ma(N0, il, e), il = Dt(il, t);
    }
    function $0(e) {
      il = N0.current, ha(N0, e);
    }
    function dc(e, t) {
      e.finishedWork = null, e.finishedLanes = se;
      var a = e.timeoutHandle;
      if (a !== Pg && (e.timeoutHandle = Pg, ZR(a)), Kn !== null)
        for (var i = Kn.return; i !== null; ) {
          var l = i.alternate;
          sT(l, i), i = i.return;
        }
      Aa = e;
      var s = vc(e.current, null);
      return Kn = s, kr = il = t, Dr = Gl, sv = null, ly = se, cv = se, uy = se, fv = null, ei = null, y_(), lo.discardPendingWarnings(), s;
    }
    function IT(e, t) {
      do {
        var a = Kn;
        try {
          if (Tm(), fC(), Vn(), M0.current = null, a === null || a.return === null) {
            Dr = lv, sv = t, Kn = null;
            return;
          }
          if (z && a.mode & dt && ey(a, !0), De)
            if (Sl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Eh(a, i, kr);
            } else
              $c(a, t, kr);
          Q_(e, a.return, a, t, kr), PT(a);
        } catch (l) {
          t = l, Kn === a && a !== null ? (a = a.return, Kn = a) : a = Kn;
          continue;
        }
        return;
      } while (!0);
    }
    function FT() {
      var e = A0.current;
      return A0.current = qm, e === null ? qm : e;
    }
    function UT(e) {
      A0.current = e;
    }
    function Rk() {
      I0 = Fn();
    }
    function mv(e) {
      ly = Dt(e, ly);
    }
    function xk() {
      Dr === Gl && (Dr = oy);
    }
    function B0() {
      (Dr === Gl || Dr === oy || Dr === cc) && (Dr = uv), Aa !== null && (Us(ly) || Us(cv)) && is(Aa, kr);
    }
    function _k(e) {
      Dr !== uv && (Dr = cc), fv === null ? fv = [e] : fv.push(e);
    }
    function Ok() {
      return Dr === Gl;
    }
    function hy(e, t) {
      var a = Bt;
      Bt |= Jr;
      var i = FT();
      if (Aa !== e || kr !== t) {
        if (Tr) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (yv(e, kr), l.clear()), df(e, t);
        }
        Yl = lp(), dc(e, t);
      }
      pi(t);
      do
        try {
          kk();
          break;
        } catch (s) {
          IT(e, s);
        }
      while (!0);
      if (Tm(), Bt = a, UT(i), Kn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return bu(), Aa = null, kr = se, Dr;
    }
    function kk() {
      for (; Kn !== null; )
        jT(Kn);
    }
    function Dk(e, t) {
      var a = Bt;
      Bt |= Jr;
      var i = FT();
      if (Aa !== e || kr !== t) {
        if (Tr) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (yv(e, kr), l.clear()), df(e, t);
        }
        Yl = lp(), dv(), dc(e, t);
      }
      pi(t);
      do
        try {
          Ak();
          break;
        } catch (s) {
          IT(e, s);
        }
      while (!0);
      return Tm(), UT(i), Bt = a, Kn !== null ? (Ms(), Gl) : (bu(), Aa = null, kr = se, Dr);
    }
    function Ak() {
      for (; Kn !== null && !Uc(); )
        jT(Kn);
    }
    function jT(e) {
      var t = e.alternate;
      ln(e);
      var a;
      (e.mode & dt) !== st ? (i0(e), a = W0(t, e, il), ey(e, !0)) : a = W0(t, e, il), Vn(), e.memoizedProps = e.pendingProps, a === null ? PT(e) : Kn = a, M0.current = null;
    }
    function PT(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ba) === at) {
          ln(t);
          var l = void 0;
          if ((t.mode & dt) === st ? l = uT(a, t, il) : (i0(t), l = uT(a, t, il), ey(t, !1)), Vn(), l !== null) {
            Kn = l;
            return;
          }
        } else {
          var s = xO(a, t);
          if (s !== null) {
            s.flags &= fh, Kn = s;
            return;
          }
          if ((t.mode & dt) !== st) {
            ey(t, !1);
            for (var d = t.actualDuration, m = t.child; m !== null; )
              d += m.actualDuration, m = m.sibling;
            t.actualDuration = d;
          }
          if (i !== null)
            i.flags |= ba, i.subtreeFlags = at, i.deletions = null;
          else {
            Dr = L0, Kn = null;
            return;
          }
        }
        var g = t.sibling;
        if (g !== null) {
          Kn = g;
          return;
        }
        t = i, Kn = t;
      } while (t !== null);
      Dr === Gl && (Dr = xT);
    }
    function pc(e, t, a) {
      var i = Ya(), l = Zr.transition;
      try {
        Zr.transition = null, lr(Nr), Mk(e, t, a, i);
      } finally {
        Zr.transition = l, lr(i);
      }
      return null;
    }
    function Mk(e, t, a, i) {
      do
        ql();
      while (rs !== null);
      if ($k(), (Bt & (Jr | ji)) !== Or)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, s = e.finishedLanes;
      if (zc(s), l === null)
        return Qd(), null;
      if (s === se && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = se, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = $t;
      var d = Dt(l.lanes, l.childLanes);
      ip(e, d), e === Aa && (Aa = null, Kn = null, kr = se), ((l.subtreeFlags & $a) !== at || (l.flags & $a) !== at) && (fc || (fc = !0, j0 = a, Q0(Oi, function() {
        return ql(), null;
      })));
      var m = (l.subtreeFlags & (Cu | ca | Lr | $a)) !== at, g = (l.flags & (Cu | ca | Lr | $a)) !== at;
      if (m || g) {
        var w = Zr.transition;
        Zr.transition = null;
        var R = Ya();
        lr(Nr);
        var U = Bt;
        Bt |= ji, M0.current = null, AO(e, l), FC(), WO(e, l, s), WR(e.containerInfo), e.current = l, Ch(s), GO(l, e, s), wu(), vh(), Bt = U, lr(R), Zr.transition = w;
      } else
        e.current = l, FC();
      var I = fc;
      if (fc ? (fc = !1, rs = e, pv = s) : (td = 0, fy = null), d = e.pendingLanes, d === se && (ed = null), I || $T(e.current, !1), Xi(l.stateNode, i), Tr && e.memoizedUpdaters.clear(), fk(), ti(e, Fn()), t !== null)
        for (var Q = e.onRecoverableError, K = 0; K < t.length; K++) {
          var ie = t[K], He = ie.stack, ot = ie.digest;
          Q(ie.value, { componentStack: He, digest: ot });
        }
      if (sy) {
        sy = !1;
        var Ze = F0;
        throw F0 = null, Ze;
      }
      return va(pv, pt) && e.tag !== Yu && ql(), d = e.pendingLanes, va(d, pt) ? (V_(), e === P0 ? vv++ : (vv = 0, P0 = e)) : vv = 0, Qu(), Qd(), null;
    }
    function ql() {
      if (rs !== null) {
        var e = Vs(pv), t = sg(eo, e), a = Zr.transition, i = Ya();
        try {
          return Zr.transition = null, lr(t), Nk();
        } finally {
          lr(i), Zr.transition = a;
        }
      }
      return !1;
    }
    function Lk(e) {
      U0.push(e), fc || (fc = !0, Q0(Oi, function() {
        return ql(), null;
      }));
    }
    function Nk() {
      if (rs === null)
        return !1;
      var e = j0;
      j0 = null;
      var t = rs, a = pv;
      if (rs = null, pv = se, (Bt & (Jr | ji)) !== Or)
        throw new Error("Cannot flush passive effects while already rendering.");
      z0 = !0, cy = !1, Th(a);
      var i = Bt;
      Bt |= ji, JO(t.current), qO(t, t.current, a, e);
      {
        var l = U0;
        U0 = [];
        for (var s = 0; s < l.length; s++) {
          var d = l[s];
          IO(t, d);
        }
      }
      As(), $T(t.current, !0), Bt = i, Qu(), cy ? t === fy ? td++ : (td = 0, fy = t) : td = 0, z0 = !1, cy = !1, Po(t);
      {
        var m = t.current.stateNode;
        m.effectDuration = 0, m.passiveEffectDuration = 0;
      }
      return !0;
    }
    function zT(e) {
      return ed !== null && ed.has(e);
    }
    function Ik(e) {
      ed === null ? ed = /* @__PURE__ */ new Set([e]) : ed.add(e);
    }
    function Fk(e) {
      sy || (sy = !0, F0 = e);
    }
    var Uk = Fk;
    function VT(e, t, a) {
      var i = uc(a, t), l = jC(e, i, pt), s = Ku(e, l, pt), d = Ma();
      s !== null && (kl(s, pt, d), ti(s, d));
    }
    function Dn(e, t, a) {
      if (OO(a), gv(!1), e.tag === A) {
        VT(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === A) {
          VT(i, e, a);
          return;
        } else if (i.tag === M) {
          var l = i.type, s = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !zT(s)) {
            var d = uc(a, e), m = f0(i, d, pt), g = Ku(i, m, pt), w = Ma();
            g !== null && (kl(g, pt, w), ti(g, w));
            return;
          }
        }
        i = i.return;
      }
      y(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function jk(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = Ma();
      ap(e, a), Yk(e), Aa === e && Ol(kr, a) && (Dr === uv || Dr === oy && sf(kr) && Fn() - I0 < _T ? dc(e, se) : uy = Dt(uy, a)), ti(e, l);
    }
    function HT(e, t) {
      t === $t && (t = gk(e));
      var a = Ma(), i = Za(e, t);
      i !== null && (kl(i, t, a), ti(i, a));
    }
    function Pk(e) {
      var t = e.memoizedState, a = $t;
      t !== null && (a = t.retryLane), HT(e, a);
    }
    function zk(e, t) {
      var a = $t, i;
      switch (e.tag) {
        case V:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case mt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), HT(e, a);
    }
    function Vk(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : vk(e / 1960) * 1960;
    }
    function Hk() {
      if (vv > mk)
        throw vv = 0, P0 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      td > yk && (td = 0, fy = null, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function $k() {
      lo.flushLegacyContextWarning(), lo.flushPendingUnsafeLifecycleWarnings();
    }
    function $T(e, t) {
      ln(e), my(e, sa, uk), t && my(e, gl, sk), my(e, sa, ok), t && my(e, gl, lk), Vn();
    }
    function my(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== l && i.child !== null && s !== at ? i = i.child : ((i.flags & t) !== at && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var yy = null;
    function BT(e) {
      {
        if ((Bt & Jr) !== Or || !(e.mode & It))
          return;
        var t = e.tag;
        if (t !== j && t !== A && t !== M && t !== k && t !== ae && t !== me && t !== _e)
          return;
        var a = wt(e) || "ReactComponent";
        if (yy !== null) {
          if (yy.has(a))
            return;
          yy.add(a);
        } else
          yy = /* @__PURE__ */ new Set([a]);
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
      var Bk = null;
      W0 = function(e, t, a) {
        var i = ZT(Bk, t);
        try {
          return rT(e, t, a);
        } catch (s) {
          if (r_() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Tm(), fC(), sT(e, t), ZT(t, i), t.mode & dt && i0(t), yl(null, rT, null, e, t, a), ng()) {
            var l = Ud();
            typeof l == "object" && l !== null && l._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var WT = !1, G0;
    G0 = /* @__PURE__ */ new Set();
    function Wk(e) {
      if (aa && !j_())
        switch (e.tag) {
          case k:
          case ae:
          case _e: {
            var t = Kn && wt(Kn) || "Unknown", a = t;
            if (!G0.has(a)) {
              G0.add(a);
              var i = wt(e) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case M: {
            WT || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), WT = !0);
            break;
          }
        }
    }
    function yv(e, t) {
      if (Tr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          op(e, i, t);
        });
      }
    }
    var Y0 = {};
    function Q0(e, t) {
      {
        var a = mo.current;
        return a !== null ? (a.push(t), Y0) : Fc(e, t);
      }
    }
    function GT(e) {
      if (e !== Y0)
        return ph(e);
    }
    function YT() {
      return mo.current !== null;
    }
    function Gk(e) {
      {
        if (e.mode & It) {
          if (!bT())
            return;
        } else if (!pk() || Bt !== Or || e.tag !== k && e.tag !== ae && e.tag !== _e)
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

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, wt(e));
          } finally {
            t ? ln(e) : Vn();
          }
        }
      }
    }
    function Yk(e) {
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
    var Pi = null, nd = null, Qk = function(e) {
      Pi = e;
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
            var a = rd(e.render);
            if (e.render !== a) {
              var i = { $$typeof: Ve, render: a };
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
        var a = e.elementType, i = t.type, l = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case M: {
            typeof i == "function" && (l = !0);
            break;
          }
          case k: {
            (typeof i == "function" || s === it) && (l = !0);
            break;
          }
          case ae: {
            (s === Ve || s === it) && (l = !0);
            break;
          }
          case me:
          case _e: {
            (s === Ot || s === it) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var d = Pi(a);
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
    var qk = function(e, t) {
      {
        if (Pi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        ql(), Ql(function() {
          X0(e.current, i, a);
        });
      }
    }, Kk = function(e, t) {
      {
        if (e.context !== hi)
          return;
        ql(), Ql(function() {
          Sv(t, e, null, null);
        });
      }
    };
    function X0(e, t, a) {
      {
        var i = e.alternate, l = e.child, s = e.sibling, d = e.tag, m = e.type, g = null;
        switch (d) {
          case k:
          case _e:
          case M:
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
          U !== void 0 && (a.has(U) ? R = !0 : t.has(U) && (d === M ? R = !0 : w = !0));
        }
        if (nd !== null && (nd.has(e) || i !== null && nd.has(i)) && (R = !0), R && (e._debugNeedsRemount = !0), R || w) {
          var I = Za(e, pt);
          I !== null && Ar(I, e, pt, Cn);
        }
        l !== null && !R && X0(l, t, a), s !== null && X0(s, t, a);
      }
    }
    var Xk = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return Z0(e.current, i, a), a;
      }
    };
    function Z0(e, t, a) {
      {
        var i = e.child, l = e.sibling, s = e.tag, d = e.type, m = null;
        switch (s) {
          case k:
          case _e:
          case M:
            m = d;
            break;
          case ae:
            m = d.render;
            break;
        }
        var g = !1;
        m !== null && t.has(m) && (g = !0), g ? Zk(e, a) : i !== null && Z0(i, t, a), l !== null && Z0(l, t, a);
      }
    }
    function Zk(e, t) {
      {
        var a = Jk(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case P:
              t.add(i.stateNode);
              return;
            case B:
              t.add(i.stateNode.containerInfo);
              return;
            case A:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function Jk(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === P)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
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
    function eD(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = at, this.subtreeFlags = at, this.deletions = null, this.lanes = se, this.childLanes = se, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !J0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var mi = function(e, t, a, i) {
      return new eD(e, t, a, i);
    };
    function eE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function tD(e) {
      return typeof e == "function" && !eE(e) && e.defaultProps === void 0;
    }
    function nD(e) {
      if (typeof e == "function")
        return eE(e) ? M : k;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Ve)
          return ae;
        if (t === Ot)
          return me;
      }
      return j;
    }
    function vc(e, t) {
      var a = e.alternate;
      a === null ? (a = mi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = at, a.subtreeFlags = at, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Cr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case j:
        case k:
        case _e:
          a.type = rd(e.type);
          break;
        case M:
          a.type = q0(e.type);
          break;
        case ae:
          a.type = K0(e.type);
          break;
      }
      return a;
    }
    function rD(e, t) {
      e.flags &= Cr | xn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = se, e.lanes = t, e.child = null, e.subtreeFlags = at, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = at, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function aD(e, t, a) {
      var i;
      return e === vm ? (i = It, t === !0 && (i |= Un, i |= Wa)) : i = st, Tr && (i |= dt), mi(A, null, null, i);
    }
    function tE(e, t, a, i, l, s) {
      var d = j, m = e;
      if (typeof e == "function")
        eE(e) ? (d = M, m = q0(m)) : m = rd(m);
      else if (typeof e == "string")
        d = P;
      else {
        e:
          switch (e) {
            case wa:
              return os(a.children, l, s, t);
            case Ci:
              d = J, l |= Un, (l & It) !== st && (l |= Wa);
              break;
            case D:
              return iD(a, l, s, t);
            case _t:
              return oD(a, l, s, t);
            case Ht:
              return lD(a, l, s, t);
            case wn:
              return XT(a, l, s, t);
            case Er:
            case Jn:
            case Ti:
            case nu:
            case Tn:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case ye:
                    d = ce;
                    break e;
                  case Me:
                    d = Ce;
                    break e;
                  case Ve:
                    d = ae, m = K0(m);
                    break e;
                  case Ot:
                    d = me;
                    break e;
                  case it:
                    d = Qe, m = null;
                    break e;
                }
              var g = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var w = i ? wt(i) : null;
                w && (g += `

Check the render method of \`` + w + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + g));
            }
          }
      }
      var R = mi(d, a, t, l);
      return R.elementType = e, R.type = m, R.lanes = s, R._debugOwner = i, R;
    }
    function nE(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, s = e.key, d = e.props, m = tE(l, s, d, i, t, a);
      return m._debugSource = e._source, m._debugOwner = e._owner, m;
    }
    function os(e, t, a, i) {
      var l = mi(Z, e, i, t);
      return l.lanes = a, l;
    }
    function iD(e, t, a, i) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = mi(ee, e, i, t | dt);
      return l.elementType = D, l.lanes = a, l.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, l;
    }
    function oD(e, t, a, i) {
      var l = mi(V, e, i, t);
      return l.elementType = _t, l.lanes = a, l;
    }
    function lD(e, t, a, i) {
      var l = mi(mt, e, i, t);
      return l.elementType = Ht, l.lanes = a, l;
    }
    function XT(e, t, a, i) {
      var l = mi(Fe, e, i, t);
      l.elementType = wn, l.lanes = a;
      var s = { isHidden: !1 };
      return l.stateNode = s, l;
    }
    function rE(e, t, a) {
      var i = mi(H, e, null, t);
      return i.lanes = a, i;
    }
    function uD() {
      var e = mi(P, null, null, st);
      return e.elementType = "DELETED", e;
    }
    function sD(e) {
      var t = mi(vt, null, null, st);
      return t.stateNode = e, t;
    }
    function aE(e, t, a) {
      var i = e.children !== null ? e.children : [], l = mi(B, i, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function ZT(e, t) {
      return e === null && (e = mi(j, null, null, st)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function cD(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Pg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = $t, this.eventTimes = ff(se), this.expirationTimes = ff(Cn), this.pendingLanes = se, this.suspendedLanes = se, this.pingedLanes = se, this.expiredLanes = se, this.mutableReadLanes = se, this.finishedLanes = se, this.entangledLanes = se, this.entanglements = ff(se), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], d = 0; d < On; d++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case vm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Yu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function JT(e, t, a, i, l, s, d, m, g, w) {
      var R = new cD(e, t, a, m, g), U = aD(t, s);
      R.current = U, U.stateNode = R;
      {
        var I = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        U.memoizedState = I;
      }
      return dS(U), R;
    }
    var iE = "18.2.0";
    function fD(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Xn(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Vr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var oE, lE;
    oE = !1, lE = {};
    function ew(e) {
      if (!e)
        return hi;
      var t = za(e), a = Qx(t);
      if (t.tag === M) {
        var i = t.type;
        if (Zo(i))
          return x1(t, i, a);
      }
      return a;
    }
    function dD(e, t) {
      {
        var a = za(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var l = Ba(a);
        if (l === null)
          return null;
        if (l.mode & Un) {
          var s = wt(a) || "Component";
          if (!lE[s]) {
            lE[s] = !0;
            var d = In;
            try {
              ln(l), a.mode & Un ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              d ? ln(d) : Vn();
            }
          }
        }
        return l.stateNode;
      }
    }
    function tw(e, t, a, i, l, s, d, m) {
      var g = !1, w = null;
      return JT(e, t, g, w, a, i, l, s, d);
    }
    function nw(e, t, a, i, l, s, d, m, g, w) {
      var R = !0, U = JT(a, i, R, e, l, s, d, m, g);
      U.context = ew(null);
      var I = U.current, Q = Ma(), K = as(I), ie = Bl(Q, K);
      return ie.callback = t ?? null, Ku(I, ie, K), Sk(U, K, Q), U;
    }
    function Sv(e, t, a, i) {
      hh(t, e);
      var l = t.current, s = Ma(), d = as(l);
      El(d);
      var m = ew(a);
      t.context === null ? t.context = m : t.pendingContext = m, aa && In !== null && !oE && (oE = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, wt(In) || "Unknown"));
      var g = Bl(s, d);
      g.payload = { element: e }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), g.callback = i);
      var w = Ku(l, g, d);
      return w !== null && (Ar(w, l, d, s), _m(w, l, d)), d;
    }
    function gy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case P:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function pD(e) {
      switch (e.tag) {
        case A: {
          var t = e.stateNode;
          if (ur(t)) {
            var a = ig(t);
            wk(t, a);
          }
          break;
        }
        case V: {
          Ql(function() {
            var l = Za(e, pt);
            if (l !== null) {
              var s = Ma();
              Ar(l, e, pt, s);
            }
          });
          var i = pt;
          uE(e, i);
          break;
        }
      }
    }
    function rw(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = _h(a.retryLane, t));
    }
    function uE(e, t) {
      rw(e, t);
      var a = e.alternate;
      a && rw(a, t);
    }
    function vD(e) {
      if (e.tag === V) {
        var t = Ru, a = Za(e, t);
        if (a !== null) {
          var i = Ma();
          Ar(a, e, t, i);
        }
        uE(e, t);
      }
    }
    function hD(e) {
      if (e.tag === V) {
        var t = as(e), a = Za(e, t);
        if (a !== null) {
          var i = Ma();
          Ar(a, e, t, i);
        }
        uE(e, t);
      }
    }
    function aw(e) {
      var t = dh(e);
      return t === null ? null : t.stateNode;
    }
    var iw = function(e) {
      return null;
    };
    function mD(e) {
      return iw(e);
    }
    var ow = function(e) {
      return !1;
    };
    function yD(e) {
      return ow(e);
    }
    var lw = null, uw = null, sw = null, cw = null, fw = null, dw = null, pw = null, vw = null, hw = null;
    {
      var mw = function(e, t, a) {
        var i = t[a], l = Vt(e) ? e.slice() : Lt({}, e);
        return a + 1 === t.length ? (Vt(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = mw(e[i], t, a + 1), l);
      }, yw = function(e, t) {
        return mw(e, t, 0);
      }, gw = function(e, t, a, i) {
        var l = t[i], s = Vt(e) ? e.slice() : Lt({}, e);
        if (i + 1 === t.length) {
          var d = a[i];
          s[d] = s[l], Vt(s) ? s.splice(l, 1) : delete s[l];
        } else
          s[l] = gw(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            a,
            i + 1
          );
        return s;
      }, Sw = function(e, t, a) {
        if (t.length !== a.length) {
          b("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              b("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return gw(e, t, a, 0);
      }, Ew = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var l = t[a], s = Vt(e) ? e.slice() : Lt({}, e);
        return s[l] = Ew(e[l], t, a + 1, i), s;
      }, Cw = function(e, t, a) {
        return Ew(e, t, 0, a);
      }, sE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      lw = function(e, t, a, i) {
        var l = sE(e, t);
        if (l !== null) {
          var s = Cw(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = Lt({}, e.memoizedProps);
          var d = Za(e, pt);
          d !== null && Ar(d, e, pt, Cn);
        }
      }, uw = function(e, t, a) {
        var i = sE(e, t);
        if (i !== null) {
          var l = yw(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = Lt({}, e.memoizedProps);
          var s = Za(e, pt);
          s !== null && Ar(s, e, pt, Cn);
        }
      }, sw = function(e, t, a, i) {
        var l = sE(e, t);
        if (l !== null) {
          var s = Sw(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = Lt({}, e.memoizedProps);
          var d = Za(e, pt);
          d !== null && Ar(d, e, pt, Cn);
        }
      }, cw = function(e, t, a) {
        e.pendingProps = Cw(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Za(e, pt);
        i !== null && Ar(i, e, pt, Cn);
      }, fw = function(e, t) {
        e.pendingProps = yw(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Za(e, pt);
        a !== null && Ar(a, e, pt, Cn);
      }, dw = function(e, t, a) {
        e.pendingProps = Sw(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Za(e, pt);
        i !== null && Ar(i, e, pt, Cn);
      }, pw = function(e) {
        var t = Za(e, pt);
        t !== null && Ar(t, e, pt, Cn);
      }, vw = function(e) {
        iw = e;
      }, hw = function(e) {
        ow = e;
      };
    }
    function gD(e) {
      var t = Ba(e);
      return t === null ? null : t.stateNode;
    }
    function SD(e) {
      return null;
    }
    function ED() {
      return In;
    }
    function CD(e) {
      var t = e.findFiberByHostInstance, a = p.ReactCurrentDispatcher;
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
        currentDispatcherRef: a,
        findHostInstanceByFiber: gD,
        findFiberByHostInstance: t || SD,
        // React Refresh
        findHostInstancesForRefresh: Xk,
        scheduleRefresh: qk,
        scheduleRoot: Kk,
        setRefreshHandler: Qk,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: ED,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: iE
      });
    }
    var Tw = typeof reportError == "function" ? (
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
        var a = t.containerInfo;
        if (a.nodeType !== er) {
          var i = aw(t.current);
          i && i.parentNode !== a && y("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
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
        }), C1(t);
      }
    };
    function TD(e, t) {
      if (!Ey(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      ww(e);
      var a = !1, i = !1, l = "", s = Tw;
      t != null && (t.hydrate ? b("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Ei && y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var d = tw(e, vm, null, a, i, l, s);
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
    function bD(e, t, a) {
      if (!Ey(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      ww(e), t === void 0 && y("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, s = !1, d = !1, m = "", g = Tw;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (m = a.identifierPrefix), a.onRecoverableError !== void 0 && (g = a.onRecoverableError));
      var w = nw(t, null, e, vm, i, s, d, m, g);
      if (lm(w.current, e), _p(e), l)
        for (var R = 0; R < l.length; R++) {
          var U = l[R];
          M_(w, U);
        }
      return new Sy(w);
    }
    function Ey(e) {
      return !!(e && (e.nodeType === oa || e.nodeType === ci || e.nodeType === fl || !ne));
    }
    function Ev(e) {
      return !!(e && (e.nodeType === oa || e.nodeType === ci || e.nodeType === fl || e.nodeType === er && e.nodeValue === " react-mount-point-unstable "));
    }
    function ww(e) {
      e.nodeType === oa && e.tagName && e.tagName.toUpperCase() === "BODY" && y("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), jp(e) && (e._reactRootContainer ? y("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : y("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var RD = p.ReactCurrentOwner, bw;
    bw = function(e) {
      if (e._reactRootContainer && e.nodeType !== er) {
        var t = aw(e._reactRootContainer.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = fE(e), l = !!(i && Wu(i));
      l && !a && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === oa && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function fE(e) {
      return e ? e.nodeType === ci ? e.documentElement : e.firstChild : null;
    }
    function Rw() {
    }
    function xD(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var I = gy(d);
            s.call(I);
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
          Rw
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
            var I = gy(R);
            w.call(I);
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
          Rw
        );
        e._reactRootContainer = R, lm(R.current, e);
        var U = e.nodeType === er ? e.parentNode : e;
        return _p(U), Ql(function() {
          Sv(t, R, a, i);
        }), R;
      }
    }
    function _D(e, t) {
      e !== null && typeof e != "function" && y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Cy(e, t, a, i, l) {
      bw(a), _D(l === void 0 ? null : l, "render");
      var s = a._reactRootContainer, d;
      if (!s)
        d = xD(a, t, e, l, i);
      else {
        if (d = s, typeof l == "function") {
          var m = l;
          l = function() {
            var g = gy(d);
            m.call(g);
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
          var a = t.stateNode._warnedAboutRefsInRender;
          a || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Qt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === oa ? e : dD(e, "findDOMNode");
    }
    function kD(e, t, a) {
      if (y("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Ev(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = jp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Cy(null, e, t, !0, a);
    }
    function DD(e, t, a) {
      if (y("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Ev(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = jp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Cy(null, e, t, !1, a);
    }
    function AD(e, t, a, i) {
      if (y("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Ev(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Os(e))
        throw new Error("parentComponent must be a valid React Component");
      return Cy(e, t, a, !1, i);
    }
    function MD(e) {
      if (!Ev(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = jp(e) && e._reactRootContainer === void 0;
        t && y("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = fE(e), i = a && !Wu(a);
          i && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Ql(function() {
          Cy(null, null, e, !1, function() {
            e._reactRootContainer = null, C1(e);
          });
        }), !0;
      } else {
        {
          var l = fE(e), s = !!(l && Wu(l)), d = e.nodeType === oa && Ev(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", d ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Be(pD), kh(vD), $s(hD), sp(Ya), Ah(zs), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), sh(IR), Ac(H0, bk, Ql);
    function LD(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ey(t))
        throw new Error("Target container is not a DOM element.");
      return fD(e, t, null, a);
    }
    function ND(e, t, a, i) {
      return AD(e, t, a, i);
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
    function FD(e, t, a) {
      return dE.usingClientEntryPoint || y('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), bD(e, t, a);
    }
    function UD(e) {
      return NT() && y("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Ql(e);
    }
    var jD = CD({ findFiberByHostInstance: Js, bundleType: 1, version: iE, rendererPackageName: "react-dom" });
    if (!jD && Rt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var xw = window.location.protocol;
      /^(https?|file):$/.test(xw) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (xw === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ri.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dE, ri.createPortal = LD, ri.createRoot = ID, ri.findDOMNode = OD, ri.flushSync = UD, ri.hydrate = kD, ri.hydrateRoot = FD, ri.render = DD, ri.unmountComponentAtNode = MD, ri.unstable_batchedUpdates = H0, ri.unstable_renderSubtreeIntoContainer = ND, ri.version = iE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ri;
}
(function(c) {
  function v() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if ({}.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v);
      } catch (p) {
        console.error(p);
      }
    }
  }
  ({}).NODE_ENV === "production" ? (v(), c.exports = eA()) : c.exports = tA();
})(KD);
var bv = xE;
if ({}.NODE_ENV === "production")
  xv.createRoot = bv.createRoot, xv.hydrateRoot = bv.hydrateRoot;
else {
  var Ty = bv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  xv.createRoot = function(c, v) {
    Ty.usingClientEntryPoint = !0;
    try {
      return bv.createRoot(c, v);
    } finally {
      Ty.usingClientEntryPoint = !1;
    }
  }, xv.hydrateRoot = function(c, v, p) {
    Ty.usingClientEntryPoint = !0;
    try {
      return bv.hydrateRoot(c, v, p);
    } finally {
      Ty.usingClientEntryPoint = !1;
    }
  };
}
var Wn = eu();
const zy = /* @__PURE__ */ wb(Wn);
const ss = (c) => {
  const v = c.split(":");
  if (v.length === 6) {
    const [, p, S, T, b, y] = v;
    return { namespace: p, system: S, authcontext: T, id: b, revision: y };
  } else if (v.length === 5) {
    const [, p, S, T, b] = v;
    return { namespace: p, system: S, id: T, revision: b };
  }
  throw new Error("urn is not of length 5 or 6");
}, Rb = (c, v, p = !0) => {
  let S;
  const { authcontext: T, system: b, id: y, revision: N } = ss(c);
  if (T)
    if (p)
      S = `/api/${b}/elements/${y}/revisions/${N}?authcontext=${T}&version=2`;
    else {
      const k = y.indexOf("+");
      S = `/api/${b}/elements/${y.slice(
        0,
        k
      )}/revisions/${N}?authcontext=${T}&version=2`;
    }
  else
    S = `/api/${b}/elements/${y}/revisions/${N}?projectId=${v}`;
  return S;
};
function Uw(c, v) {
  let p = {};
  for (const [S, T] of Object.entries(c))
    S !== v && (p[S] = T);
  return p;
}
const nA = [
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
], rA = {
  ...Object.fromEntries(nA.map((c) => [c, c])),
  buildings: "building",
  roads: "road",
  tree_area: "vegetation",
  tree_line: "vegetation",
  ConceptualRoot: "generic",
  ConceptualElement: "generic",
  "property-boundaries": "property_boundary"
  //temporary, to support deprecated category naming
}, Tt = 0, Zl = 3.2808399, wy = 0.3047999995367042, xb = "root", ar = {
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
}, cd = Symbol("IDBStore");
class aA {
  /**
   * Create a database.
   * @param {string} dbName
   * @param {string} storeName
   */
  constructor(v = "composi-idb", p = "composi-store") {
    this.storeName = p, this.dbName = v, this._dbp = new Promise((T, b) => {
      const y = indexedDB.open(v, 1);
      y.onerror = () => b(y.error), y.onsuccess = () => {
        T(y.result);
      }, y.onupgradeneeded = () => {
        y.result.createObjectStore(p);
      };
    }), this[cd] = (T, b) => this._dbp.then((y) => new Promise((N, k) => {
      const M = y.transaction(this.storeName, T);
      M.oncomplete = () => N(), M.onabort = M.onerror = () => k(M.error), b(M.objectStore(this.storeName));
    }));
  }
}
let hE;
function Nv() {
  return hE || (hE = new aA()), hE;
}
function iA(c, v = Nv()) {
  let p;
  return v[cd]("readonly", (S) => {
    p = S.get(c);
  }).then(() => p.result);
}
function oA(c, v, p = Nv()) {
  return p[cd]("readwrite", (S) => {
    S.put(v, c);
  });
}
function lA(c, v = Nv()) {
  return v[cd]("readwrite", (p) => {
    p.delete(c);
  });
}
function uA(c = Nv()) {
  return c[cd]("readwrite", (v) => {
    v.clear();
  });
}
function sA(c = Nv()) {
  const v = [];
  return c[cd]("readonly", (p) => (
    // This would be store.getAllKeys(),
    // but it isn't supported by Edge or Safari.
    // And openKeyCursor isn't supported by Safari.
    (p.openKeyCursor || p.openCursor).call(p).onsuccess = function() {
      this.result && (v.push(this.result.key), this.result.continue());
    }
  )).then(() => v);
}
const Ly = {
  get: iA,
  set: oA,
  remove: lA,
  clear: uA,
  keys: sA,
  name: "composi-idb",
  storeName: "composi-store"
};
function cA(c, v) {
  Ly.set(c, v);
}
async function _b(c) {
  return await Ly.get(c);
}
async function fA(c) {
  const v = await Ly.keys();
  for (const p of v)
    p.includes(c) && (await Ly.remove(p), console.log(`removing ${p} from cache`));
}
function PE(c, v) {
  FormIt.Layers.AddLayer(c, v, !0);
  let p = FormIt.Layers.GetLayerID(v), S;
  return p == WSM.INVALID_ID ? console.error("Cannot retrieve the Forma layer") : (S = Ob(c, v), S == WSM.INVALID_ID && (console.error("Cannot retrieve the Forma WSM layer"), p = void 0)), [p, S];
}
async function Ob(c, v) {
  const p = await WSM.APIGetAllObjectsByTypeReadOnly(c, WSM.nObjectType.nLayerType);
  let S = WSM.INVALID_ID;
  for (let T = 0; T < p.length; T++)
    if ((await WSM.APIGetLayerDataReadOnly(c, p[T])).name == v) {
      S = p[T];
      break;
    }
  return S;
}
async function dA() {
  const c = [
    "site_limit",
    "building",
    "vegetation",
    "generic",
    "road",
    "rails",
    "property_boundary",
    "zone",
    "building_envelope"
  ], v = Object.values(ar).filter(
    (b) => c.includes(b)
  );
  let p = [];
  for (const b of v)
    p.push(Ny(b));
  return p.push(Ny(ar.FORMA_CONTEXT)), (await Promise.all(p)).filter((b) => b.formItLayerId === WSM.INVALID_ID || b.wsmLayerId === -1).length === 0;
}
async function Ny(c = ar.FORMA_CONTEXT) {
  const v = await FormIt.Layers.GetLayerID(c);
  if (v === WSM.INVALID_ID) {
    const p = await Promise.all(PE(Tt, c)), S = {
      formItLayerId: p[0],
      wsmLayerId: p[1]
    }, T = S.formItLayerId, b = S.wsmLayerId, y = "FormIt::OutOfContextLayer";
    if (T === WSM.INVALID_ID || !b)
      return S;
    if (!WSM.Utils.SetOrCreateStringAttributeForObject(
      Tt,
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
    formItLayerId: v,
    wsmLayerId: v !== WSM.INVALID_ID ? await Ob(Tt, c) : -1
  };
}
function kb(c, v) {
  for (const [p, S] of Object.entries(v))
    for (const T of S)
      if (c.includes(T))
        return p;
}
const ls = "https://local.autodeskforma.eu:3001";
class pA {
  getWorkspaces() {
    return fetch(`${ls}/api/workspaces`).then((v) => {
      if (!v.ok)
        throw new Error(v.statusText);
      return v.json();
    });
  }
  getProjects(v) {
    return fetch(`${ls}/api/projects?customer=${v}&include_archived=false`).then((p) => {
      if (!p.ok)
        throw new Error(p.statusText);
      return p.json();
    });
  }
  countProposals(v) {
    return fetch(`${ls}/api/proposal/elements/count?authcontext=${v}`).then((p) => {
      if (!p.ok)
        throw new Error(p.statusText);
      return p.json();
    });
  }
  getProposals(v) {
    return fetch(`${ls}/api/proposal/elements?authcontext=${v}&version=2`).then((p) => {
      if (!p.ok)
        throw new Error(p.statusText);
      return p.json();
    });
  }
  getElement(v, p, S, T) {
    try {
      const b = `/api/${v}/elements/${p}/revisions/${S}?authcontext=${T}&version=2`;
      return fetch(b).then((y) => {
        if (!y.ok)
          throw new Error(y.statusText);
        return y.json();
      });
    } catch {
      return null;
    }
  }
  getProposalElement(v, p) {
    try {
      const S = `/api/proposal/elements/${v}?authcontext=${p}`;
      return fetch(S).then((T) => {
        if (!T.ok)
          throw new Error(T.statusText);
        return T.json();
      });
    } catch {
      return null;
    }
  }
  FormatThumbnailUrl(v, p) {
    return `${ls}/api/thumbnails/v2/${p}?size=170&authcontext=${v}&projectId=${v}`;
  }
  FormatConceptualWorkerUrl() {
    return `${ls}/web-components/conceptual-design/conceptual-design-terrain-worker-initiator.mjs`;
  }
  fetchRawDatas(v) {
    return v.indexOf("/") === 0 && (v = `${ls}${v}`), fetch(v, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": "true"
      }
    });
  }
  getAsJson(v) {
    return v.indexOf("/") === 0 && (v = `${ls}${v}`), fetch(v, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": "true"
      }
    }).then((p) => {
      if (p.ok) {
        var S = p.json();
        return S;
      }
      return !1;
    });
  }
}
const ai = new pA();
async function id(c) {
  FormIt.FormaAddIn.DeleteTempFile(c);
}
async function Vy(c, v, p, S) {
  if (!v)
    await ai.fetchRawDatas(c.fetchUrl).then(async (T) => {
      let b = await T.arrayBuffer();
      return Array.from(new Uint8Array(b));
    }).then(async (T) => {
      let b = await FormIt.FormaAddIn.CreateTempPath(c.savePath);
      p && id(b), await FormIt.FormaAddIn.MakeBlobFile(b, T).then(() => {
        S && (c.tempGlbLocation = b, S(c));
      });
    });
  else {
    let T = await FormIt.FormaAddIn.CreateTempPath(c.savePath);
    if (T === "{}")
      return !0;
    p && id(T), await FormIt.FormaAddIn.MakeBlobFile(T, v).then(() => {
      S && (c.tempGlbLocation = T, S(c));
    });
  }
}
var vA = typeof global == "object" && global && global.Object === Object && global;
const Db = vA;
var hA = typeof self == "object" && self && self.Object === Object && self, mA = Db || hA || Function("return this")();
const cs = mA;
var yA = cs.Symbol;
const Iy = yA;
var Ab = Object.prototype, gA = Ab.hasOwnProperty, SA = Ab.toString, Rv = Iy ? Iy.toStringTag : void 0;
function EA(c) {
  var v = gA.call(c, Rv), p = c[Rv];
  try {
    c[Rv] = void 0;
    var S = !0;
  } catch {
  }
  var T = SA.call(c);
  return S && (v ? c[Rv] = p : delete c[Rv]), T;
}
var CA = Object.prototype, TA = CA.toString;
function wA(c) {
  return TA.call(c);
}
var bA = "[object Null]", RA = "[object Undefined]", jw = Iy ? Iy.toStringTag : void 0;
function Iv(c) {
  return c == null ? c === void 0 ? RA : bA : jw && jw in Object(c) ? EA(c) : wA(c);
}
function zE(c) {
  return c != null && typeof c == "object";
}
var xA = Array.isArray;
const _A = xA;
function Mb(c) {
  var v = typeof c;
  return c != null && (v == "object" || v == "function");
}
var OA = "[object AsyncFunction]", kA = "[object Function]", DA = "[object GeneratorFunction]", AA = "[object Proxy]";
function Lb(c) {
  if (!Mb(c))
    return !1;
  var v = Iv(c);
  return v == kA || v == DA || v == OA || v == AA;
}
var MA = cs["__core-js_shared__"];
const mE = MA;
var Pw = function() {
  var c = /[^.]+$/.exec(mE && mE.keys && mE.keys.IE_PROTO || "");
  return c ? "Symbol(src)_1." + c : "";
}();
function LA(c) {
  return !!Pw && Pw in c;
}
var NA = Function.prototype, IA = NA.toString;
function yc(c) {
  if (c != null) {
    try {
      return IA.call(c);
    } catch {
    }
    try {
      return c + "";
    } catch {
    }
  }
  return "";
}
var FA = /[\\^$.*+?()[\]{}|]/g, UA = /^\[object .+?Constructor\]$/, jA = Function.prototype, PA = Object.prototype, zA = jA.toString, VA = PA.hasOwnProperty, HA = RegExp("^" + zA.call(VA).replace(FA, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function $A(c) {
  if (!Mb(c) || LA(c))
    return !1;
  var v = Lb(c) ? HA : UA;
  return v.test(yc(c));
}
function BA(c, v) {
  return c == null ? void 0 : c[v];
}
function Fv(c, v) {
  var p = BA(c, v);
  return $A(p) ? p : void 0;
}
var WA = Fv(cs, "WeakMap");
const _E = WA;
var GA = 9007199254740991;
function Nb(c) {
  return typeof c == "number" && c > -1 && c % 1 == 0 && c <= GA;
}
function YA(c) {
  return c != null && Nb(c.length) && !Lb(c);
}
var QA = Object.prototype;
function Ib(c) {
  var v = c && c.constructor, p = typeof v == "function" && v.prototype || QA;
  return c === p;
}
var qA = "[object Arguments]";
function zw(c) {
  return zE(c) && Iv(c) == qA;
}
var Fb = Object.prototype, KA = Fb.hasOwnProperty, XA = Fb.propertyIsEnumerable, ZA = zw(function() {
  return arguments;
}()) ? zw : function(c) {
  return zE(c) && KA.call(c, "callee") && !XA.call(c, "callee");
};
const JA = ZA;
function eM() {
  return !1;
}
var Ub = typeof exports == "object" && exports && !exports.nodeType && exports, Vw = Ub && typeof module == "object" && module && !module.nodeType && module, tM = Vw && Vw.exports === Ub, Hw = tM ? cs.Buffer : void 0, nM = Hw ? Hw.isBuffer : void 0, rM = nM || eM;
const aM = rM;
var iM = "[object Arguments]", oM = "[object Array]", lM = "[object Boolean]", uM = "[object Date]", sM = "[object Error]", cM = "[object Function]", fM = "[object Map]", dM = "[object Number]", pM = "[object Object]", vM = "[object RegExp]", hM = "[object Set]", mM = "[object String]", yM = "[object WeakMap]", gM = "[object ArrayBuffer]", SM = "[object DataView]", EM = "[object Float32Array]", CM = "[object Float64Array]", TM = "[object Int8Array]", wM = "[object Int16Array]", bM = "[object Int32Array]", RM = "[object Uint8Array]", xM = "[object Uint8ClampedArray]", _M = "[object Uint16Array]", OM = "[object Uint32Array]", zn = {};
zn[EM] = zn[CM] = zn[TM] = zn[wM] = zn[bM] = zn[RM] = zn[xM] = zn[_M] = zn[OM] = !0;
zn[iM] = zn[oM] = zn[gM] = zn[lM] = zn[SM] = zn[uM] = zn[sM] = zn[cM] = zn[fM] = zn[dM] = zn[pM] = zn[vM] = zn[hM] = zn[mM] = zn[yM] = !1;
function kM(c) {
  return zE(c) && Nb(c.length) && !!zn[Iv(c)];
}
function DM(c) {
  return function(v) {
    return c(v);
  };
}
var jb = typeof exports == "object" && exports && !exports.nodeType && exports, Ov = jb && typeof module == "object" && module && !module.nodeType && module, AM = Ov && Ov.exports === jb, yE = AM && Db.process, MM = function() {
  try {
    var c = Ov && Ov.require && Ov.require("util").types;
    return c || yE && yE.binding && yE.binding("util");
  } catch {
  }
}();
const $w = MM;
var Bw = $w && $w.isTypedArray, LM = Bw ? DM(Bw) : kM;
const NM = LM;
function IM(c, v) {
  return function(p) {
    return c(v(p));
  };
}
var FM = IM(Object.keys, Object);
const UM = FM;
var jM = Object.prototype, PM = jM.hasOwnProperty;
function zM(c) {
  if (!Ib(c))
    return UM(c);
  var v = [];
  for (var p in Object(c))
    PM.call(c, p) && p != "constructor" && v.push(p);
  return v;
}
var VM = Fv(cs, "Map");
const OE = VM;
var HM = Fv(cs, "DataView");
const kE = HM;
var $M = Fv(cs, "Promise");
const DE = $M;
var BM = Fv(cs, "Set");
const AE = BM;
var Ww = "[object Map]", WM = "[object Object]", Gw = "[object Promise]", Yw = "[object Set]", Qw = "[object WeakMap]", qw = "[object DataView]", GM = yc(kE), YM = yc(OE), QM = yc(DE), qM = yc(AE), KM = yc(_E), hc = Iv;
(kE && hc(new kE(new ArrayBuffer(1))) != qw || OE && hc(new OE()) != Ww || DE && hc(DE.resolve()) != Gw || AE && hc(new AE()) != Yw || _E && hc(new _E()) != Qw) && (hc = function(c) {
  var v = Iv(c), p = v == WM ? c.constructor : void 0, S = p ? yc(p) : "";
  if (S)
    switch (S) {
      case GM:
        return qw;
      case YM:
        return Ww;
      case QM:
        return Gw;
      case qM:
        return Yw;
      case KM:
        return Qw;
    }
  return v;
});
const XM = hc;
var ZM = "[object Map]", JM = "[object Set]", eL = Object.prototype, tL = eL.hasOwnProperty;
function Pb(c) {
  if (c == null)
    return !0;
  if (YA(c) && (_A(c) || typeof c == "string" || typeof c.splice == "function" || aM(c) || NM(c) || JA(c)))
    return !c.length;
  var v = XM(c);
  if (v == ZM || v == JM)
    return !c.size;
  if (Ib(c))
    return !zM(c).length;
  for (var p in c)
    if (tL.call(c, p))
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
function iL(c) {
  return typeof c == "string" && aL.test(c);
}
var ta = [];
for (var gE = 0; gE < 256; ++gE)
  ta.push((gE + 256).toString(16).substr(1));
function oL(c) {
  var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, p = (ta[c[v + 0]] + ta[c[v + 1]] + ta[c[v + 2]] + ta[c[v + 3]] + "-" + ta[c[v + 4]] + ta[c[v + 5]] + "-" + ta[c[v + 6]] + ta[c[v + 7]] + "-" + ta[c[v + 8]] + ta[c[v + 9]] + "-" + ta[c[v + 10]] + ta[c[v + 11]] + ta[c[v + 12]] + ta[c[v + 13]] + ta[c[v + 14]] + ta[c[v + 15]]).toLowerCase();
  if (!iL(p))
    throw TypeError("Stringified UUID is invalid");
  return p;
}
function fd(c, v, p) {
  c = c || {};
  var S = c.random || (c.rng || rL)();
  if (S[6] = S[6] & 15 | 64, S[8] = S[8] & 63 | 128, v) {
    p = p || 0;
    for (var T = 0; T < 16; ++T)
      v[p + T] = S[T];
    return v;
  }
  return oL(S);
}
const kv = (c) => {
  const v = [...c];
  return v[0] = c[0], v[1] = c[4], v[2] = c[8], v[3] = c[12], v[4] = c[1], v[5] = c[5], v[6] = c[9], v[7] = c[13], v[8] = c[2], v[9] = c[6], v[10] = c[10], v[11] = c[14], v[12] = c[3], v[13] = c[7], v[14] = c[11], v[15] = c[15], v;
};
function lL(c, v) {
  const p = {}, S = (T, b = []) => {
    var M;
    const y = c[T.urn];
    if (!y)
      throw new Error(`Child ${T.key} points to unknown urn ${T.urn}`);
    const N = [...b, T.key], k = N.join("/");
    p[k] = T.urn, (M = y.children) == null || M.forEach((j) => S(j, N));
  };
  return S({ urn: v, key: xb }), p;
}
function uL(c, v, p) {
  var b, y, N;
  const S = {}, T = [];
  for (const [k, M] of Object.entries(v)) {
    const j = c[M], A = k.split("/").slice(0, 2).join("/"), B = j.properties.spacemakerObjectStorageReferenceFormats, P = (B == null ? void 0 : B[0]) === "axm", { system: H } = ss(j.urn), Z = sL(k, c, v);
    if (H === "integrate" && P) {
      const ce = {
        ...j,
        parentTransform: j.transform,
        path: k
      };
      T.push(ce);
      continue;
    }
    if (j.properties.category === "ConceptualElement")
      continue;
    const Ce = (N = (y = (b = j.properties) == null ? void 0 : b.geometry) == null ? void 0 : y.volumeMesh) == null ? void 0 : N.url;
    if (Ce) {
      const ce = ss(M).id, ae = j.properties.geometry.volumeMesh.id;
      S[Ce] || (S[Ce] = {
        elements: []
      });
      const ee = p == null ? void 0 : p.includes(A);
      S[Ce].elements.push({
        transform: Z,
        needsConverted: ee,
        id: ce,
        geometryId: ae,
        properties: j == null ? void 0 : j.properties,
        urn: j.urn,
        fullIdPath: k
      });
    }
  }
  return { glbUrlMap: S, axmList: T };
}
function sL(c, v, p) {
  const S = c.split("/");
  let T, b = 0, y = S[b];
  return T = zb(
    y,
    b,
    p,
    v,
    T,
    S
  ), T;
}
const zb = (c, v, p, S, T, b) => {
  var Z, J;
  const y = c.split("/"), N = y.length > 1 ? y.slice(0, v).join("/") : void 0, k = p[N], M = S[k], j = (J = (Z = M == null ? void 0 : M.children) == null ? void 0 : Z.find(
    (Ce) => Ce.key === y.slice(-1).toString()
  )) == null ? void 0 : J.transform, A = p[y.join("/")], B = S[A], P = B == null ? void 0 : B.transform;
  return T = Kw(
    T,
    Kw(j, P)
  ), v++, b.slice(v).length > 0 && (c = b.slice(0, v + 1).join("/"), zb(
    c,
    v,
    p,
    S,
    T,
    b
  )), T;
}, Kw = (c, v) => {
  let p = c;
  if (v)
    if (c) {
      let S = WSM.Geom.Transf3d();
      S.data = kv(c);
      const T = WSM.Geom.Transf3d();
      T.data = kv(v), WSM.Transf3d.Multiply(S, T).then((b) => {
        p = kv(b.data);
      });
    } else
      p = v;
  return p;
};
async function cL(c, v) {
  return new Promise(async (p, S) => {
    try {
      const T = "terrain.window.WSM", b = ss(v.urn).revision, y = await fL(
        `3d-sketch-terrain-${c}-revision-${b}`
      );
      let N = Array.from(y);
      await Vy(
        {
          savePath: T
        },
        N,
        !0,
        async (k) => {
          let M = k.tempGlbLocation;
          const j = await WSM.APIGetIdOfActiveDeltaReadOnly(Tt);
          await FormIt.ImportFile(M, !1, WSM.INVALID_ID, !1);
          const A = await WSM.APIGetIdOfActiveDeltaReadOnly(Tt), P = (await WSM.APIGetCreatedChangedAndDeletedInDeltaRangeReadOnly(
            Tt,
            j,
            A,
            [WSM.nObjectType.nGroupType]
          )).created;
          if (await id(M), P.length === 1)
            p({
              allIdsCreated: P,
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
async function fL(c) {
  let v = 0;
  return new Promise((p, S) => {
    try {
      const T = setInterval(async () => {
        const b = await _b(c);
        b ? (clearInterval(T), p(b)) : (v++, v % 100 === 0 && console.log(`Did not find cache for ${c}, still waiting.`));
      }, 100);
    } catch (T) {
      S(T);
    }
  });
}
async function dL(c, v, p, S, T) {
  const b = `${p}.glb`, y = c.includes("/terrain/"), N = !c.includes("/parametric/");
  return new Promise(async (k, M) => {
    try {
      await Vy(
        {
          fetchUrl: c,
          savePath: b
        },
        null,
        !0,
        async (j) => {
          let A = j.tempGlbLocation;
          const B = [], P = [];
          let H = [], Z;
          if (v.forEach((J) => {
            J.needsConverted ? P.push(J) : B.push(J);
          }), B.length > 0) {
            const J = await Xw({
              fileLocation: A,
              elementDetails: B,
              isTerrain: y,
              transform: void 0
              //May not be needed as we multiply the transform for each node now?
            });
            if (!J) {
              id(A);
              const ee = `Failed to request and load file into memory for url - ${c}`;
              console.warn(ee), M(ee);
              return;
            }
            let Ce = kb(
              B[0].fullIdPath,
              S
            );
            Ce || (Ce = ar.FORMA_CONTEXT);
            const ce = await Ny(Ce);
            await FormIt.Layers.AssignLayerToObjects(ce.formItLayerId, [
              Tt,
              J
            ]);
            const ae = !T.includes(Ce);
            FormIt.Layers.SetLayerVisibility(Ce, ae), FormIt.Layers.SetLayerPickable(Ce, !1), H = [...H, J];
          }
          if (P.length > 0) {
            const J = await Xw({
              fileLocation: b,
              elementDetails: P,
              isTerrain: y,
              transform: void 0
              //May not be needed as we calculate the total transform for each node now?
            }), Ce = WSM.APIGetGroupReferencedHistoryReadOnly(
              Tt,
              J
            ), ce = WSM.APIGetAllObjectsByTypeReadOnly(Ce, WSM.nMeshType), ae = Math.sqrt(3) / 2;
            WSM.APIConvertMeshesToObjects(Ce, ce, ae), Z = J, H = [...H, J];
          }
          id(A), k({
            allIdsCreated: H,
            idEditingForConversion: Z,
            isTerrain: y,
            needElevationFix: N
          });
        }
      );
    } catch (j) {
      M(`Failed to request and load file into memory for url - ${c} - error: ${j}`);
    }
  });
}
async function pL(c, v, p, S) {
  return new Promise(async (T, b) => {
    var N;
    let y = `/api/spacemaker-object-storage/v1/${(N = c == null ? void 0 : c.properties) == null ? void 0 : N.spacemakerObjectStorageReferences[0]}`;
    try {
      const k = `${fd()}.axm`, M = await WSM.APIGetIdOfActiveDeltaReadOnly(Tt);
      await Vy(
        {
          fetchUrl: y,
          savePath: k
        },
        null,
        !0,
        async (j) => {
          let A = j.tempGlbLocation;
          await FormIt.ImportFile(A, !1, Tt, !1), await id(A), await WSM.APIGetIdOfActiveDeltaReadOnly(Tt).then(async (B) => {
            await WSM.APIGetCreatedChangedAndDeletedInDeltaRangeReadOnly(
              Tt,
              M,
              B,
              [WSM.nObjectType.nInstanceType]
            ).then(async (P) => {
              if (P.created.length > 0) {
                if (c.parentTransform) {
                  c.parentTransform[12] *= Zl, c.parentTransform[13] *= Zl, c.parentTransform[14] *= Zl;
                  const H = WSM.Geom.Transf3d();
                  H.data = kv(c.parentTransform), WSM.APITransformObjects(Tt, P.created, H);
                }
                if (!v) {
                  let H = kb(c.path, p);
                  H || (H = ar.FORMA_CONTEXT), await Ny(H).then(async (Z) => {
                    const J = !S.includes(H);
                    await FormIt.Layers.AssignLayerToObjects(Z.formItLayerId, P.created), await FormIt.Layers.SetLayerVisibility(H, J), await FormIt.Layers.SetLayerPickable(Z.formItLayerId, !1);
                  });
                }
                for (const H of P.created) {
                  const Z = !Pb(await WSM.APIGetObjectLevelsReadOnly(Tt, H));
                  if (v && Z) {
                    let Ce = (await Promise.all(PE(Tt, ar.FORMA_BUILDINGS)))[0];
                    await FormIt.Layers.AssignLayerToObjects(Ce, H), await FormIt.Layers.SetLayerPickable(Ce, !1);
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
async function Xw({
  fileLocation: c,
  elementDetails: v,
  isTerrain: p,
  transform: S
}) {
  const b = v.map((J) => ({
    objectName: "GltfNodeInfo",
    id: J.geometryId,
    transform: J.transform || [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
  })).filter((J) => J.id);
  let y = await WSM.Geom.Transf3d();
  S && (y.data = kv(S));
  const N = await WSM.Geom.Point3d(0, 0, 0), k = await WSM.Vector3d.Vector3d(Zl, Zl, Zl), M = await WSM.Transf3d.MakeScalingTransform(N, k);
  y = await WSM.Transf3d.Multiply(M, y);
  const j = await WSM.APIGetIdOfActiveDeltaReadOnly(Tt);
  await WSM.Gltf.APILoadGltfFile(
    Tt,
    c,
    y,
    WSM.INVALID_ID,
    p ? WSM.nGeneratedNormalsOptions.nSmoothNormals : WSM.nGeneratedNormalsOptions.nUnsharedNormals,
    b || [],
    !p
  );
  const A = await WSM.APIGetIdOfActiveDeltaReadOnly(Tt), P = (await WSM.APIGetCreatedChangedAndDeletedInDeltaRangeReadOnly(
    Tt,
    j,
    A,
    [WSM.nObjectType.nMeshType, WSM.nObjectType.nInstanceType]
  )).created, H = await WSM.Utils.CreateAlignedAndCenteredGroup(Tt, P), Z = await WSM.APIGetObjectsByTypeReadOnly(
    Tt,
    H,
    WSM.nObjectType.nInstanceType
  );
  if (Z.length !== 1) {
    console.error("Created instanceIds should be 1");
    return;
  }
  return Z[0];
}
async function Vb(c, v, p, S) {
  typeof c == "string" && (c = {
    key: fd(),
    urn: c,
    transform: void 0
  });
  let T;
  if (p[c.urn])
    T = p[c.urn], await Zw(T, v, p, S);
  else {
    const b = Rb(c.urn, v);
    await ai.getAsJson(b).then(async (y) => {
      for (const [N, k] of Object.entries(y))
        N.indexOf(":integrate:") > -1 && S.push(N), p[N] = k;
      T = p[c.urn], await Zw(T, v, p, S);
    });
  }
}
async function Zw(c, v, p, S) {
  var T;
  if (((T = c.children) == null ? void 0 : T.length) > 0)
    for (const b of c.children)
      await Vb(
        b,
        v,
        p,
        S
      );
}
const Jw = (c) => {
  let v;
  const p = /* @__PURE__ */ new Set(), S = (k, M) => {
    const j = typeof k == "function" ? k(v) : k;
    if (j !== v) {
      const A = v;
      v = M ? j : Object.assign({}, v, j), p.forEach((B) => B(v, A));
    }
  }, T = () => v, N = {
    setState: S,
    getState: T,
    subscribe: (k) => (p.add(k), () => p.delete(k)),
    destroy: () => p.clear()
  };
  return v = c(S, T, N), N;
}, vL = (c) => c ? Jw(c) : Jw;
var ME = {}, hL = {
  get exports() {
    return ME;
  },
  set exports(c) {
    ME = c;
  }
}, SE = {}, Fy = {}, mL = {
  get exports() {
    return Fy;
  },
  set exports(c) {
    Fy = c;
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
var eb;
function yL() {
  if (eb)
    return EE;
  eb = 1;
  var c = eu();
  function v(A, B) {
    return A === B && (A !== 0 || 1 / A === 1 / B) || A !== A && B !== B;
  }
  var p = typeof Object.is == "function" ? Object.is : v, S = c.useState, T = c.useEffect, b = c.useLayoutEffect, y = c.useDebugValue;
  function N(A, B) {
    var P = B(), H = S({
      inst: {
        value: P,
        getSnapshot: B
      }
    }), Z = H[0].inst, J = H[1];
    return b(function() {
      Z.value = P, Z.getSnapshot = B, k(Z) && J({
        inst: Z
      });
    }, [A, P, B]), T(function() {
      return k(Z) && J({
        inst: Z
      }), A(function() {
        k(Z) && J({
          inst: Z
        });
      });
    }, [A]), y(P), P;
  }
  function k(A) {
    var B = A.getSnapshot;
    A = A.value;
    try {
      var P = B();
      return !p(A, P);
    } catch {
      return !0;
    }
  }
  function M(A, B) {
    return B();
  }
  var j = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? M : N;
  return EE.useSyncExternalStore = c.useSyncExternalStore !== void 0 ? c.useSyncExternalStore : j, EE;
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
var tb;
function gL() {
  return tb || (tb = 1, {}.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var c = eu(), v = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(ae) {
      {
        for (var ee = arguments.length, V = new Array(ee > 1 ? ee - 1 : 0), me = 1; me < ee; me++)
          V[me - 1] = arguments[me];
        S("error", ae, V);
      }
    }
    function S(ae, ee, V) {
      {
        var me = v.ReactDebugCurrentFrame, _e = me.getStackAddendum();
        _e !== "" && (ee += "%s", V = V.concat([_e]));
        var Qe = V.map(function(lt) {
          return String(lt);
        });
        Qe.unshift("Warning: " + ee), Function.prototype.apply.call(console[ae], console, Qe);
      }
    }
    function T(ae, ee) {
      return ae === ee && (ae !== 0 || 1 / ae === 1 / ee) || ae !== ae && ee !== ee;
    }
    var b = typeof Object.is == "function" ? Object.is : T, y = c.useState, N = c.useEffect, k = c.useLayoutEffect, M = c.useDebugValue, j = !1, A = !1;
    function B(ae, ee, V) {
      j || c.startTransition !== void 0 && (j = !0, p("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var me = ee();
      if (!A) {
        var _e = ee();
        b(me, _e) || (p("The result of getSnapshot should be cached to avoid an infinite loop"), A = !0);
      }
      var Qe = y({
        inst: {
          value: me,
          getSnapshot: ee
        }
      }), lt = Qe[0].inst, vt = Qe[1];
      return k(function() {
        lt.value = me, lt.getSnapshot = ee, P(lt) && vt({
          inst: lt
        });
      }, [ae, me, ee]), N(function() {
        P(lt) && vt({
          inst: lt
        });
        var mt = function() {
          P(lt) && vt({
            inst: lt
          });
        };
        return ae(mt);
      }, [ae]), M(me), me;
    }
    function P(ae) {
      var ee = ae.getSnapshot, V = ae.value;
      try {
        var me = ee();
        return !b(V, me);
      } catch {
        return !0;
      }
    }
    function H(ae, ee, V) {
      return ee();
    }
    var Z = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", J = !Z, Ce = J ? H : B, ce = c.useSyncExternalStore !== void 0 ? c.useSyncExternalStore : Ce;
    CE.useSyncExternalStore = ce, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), CE;
}
var nb;
function Hb() {
  return nb || (nb = 1, function(c) {
    ({}).NODE_ENV === "production" ? c.exports = yL() : c.exports = gL();
  }(mL)), Fy;
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
var rb;
function SL() {
  if (rb)
    return SE;
  rb = 1;
  var c = eu(), v = Hb();
  function p(M, j) {
    return M === j && (M !== 0 || 1 / M === 1 / j) || M !== M && j !== j;
  }
  var S = typeof Object.is == "function" ? Object.is : p, T = v.useSyncExternalStore, b = c.useRef, y = c.useEffect, N = c.useMemo, k = c.useDebugValue;
  return SE.useSyncExternalStoreWithSelector = function(M, j, A, B, P) {
    var H = b(null);
    if (H.current === null) {
      var Z = {
        hasValue: !1,
        value: null
      };
      H.current = Z;
    } else
      Z = H.current;
    H = N(function() {
      function Ce(me) {
        if (!ce) {
          if (ce = !0, ae = me, me = B(me), P !== void 0 && Z.hasValue) {
            var _e = Z.value;
            if (P(_e, me))
              return ee = _e;
          }
          return ee = me;
        }
        if (_e = ee, S(ae, me))
          return _e;
        var Qe = B(me);
        return P !== void 0 && P(_e, Qe) ? _e : (ae = me, ee = Qe);
      }
      var ce = !1, ae, ee, V = A === void 0 ? null : A;
      return [function() {
        return Ce(j());
      }, V === null ? void 0 : function() {
        return Ce(V());
      }];
    }, [j, A, B, P]);
    var J = T(M, H[0], H[1]);
    return y(function() {
      Z.hasValue = !0, Z.value = J;
    }, [J]), k(J), J;
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
var ab;
function EL() {
  return ab || (ab = 1, {}.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var c = eu(), v = Hb();
    function p(j, A) {
      return j === A && (j !== 0 || 1 / j === 1 / A) || j !== j && A !== A;
    }
    var S = typeof Object.is == "function" ? Object.is : p, T = v.useSyncExternalStore, b = c.useRef, y = c.useEffect, N = c.useMemo, k = c.useDebugValue;
    function M(j, A, B, P, H) {
      var Z = b(null), J;
      Z.current === null ? (J = {
        hasValue: !1,
        value: null
      }, Z.current = J) : J = Z.current;
      var Ce = N(function() {
        var V = !1, me, _e, Qe = function(Et) {
          if (!V) {
            V = !0, me = Et;
            var Fe = P(Et);
            if (H !== void 0 && J.hasValue) {
              var Ee = J.value;
              if (H(Ee, Fe))
                return _e = Ee, Ee;
            }
            return _e = Fe, Fe;
          }
          var Te = me, Re = _e;
          if (S(Te, Et))
            return Re;
          var pe = P(Et);
          return H !== void 0 && H(Re, pe) ? Re : (me = Et, _e = pe, pe);
        }, lt = B === void 0 ? null : B, vt = function() {
          return Qe(A());
        }, mt = lt === null ? void 0 : function() {
          return Qe(lt());
        };
        return [vt, mt];
      }, [A, B, P, H]), ce = Ce[0], ae = Ce[1], ee = T(j, ce, ae);
      return y(function() {
        J.hasValue = !0, J.value = ee;
      }, [ee]), k(ee), ee;
    }
    TE.useSyncExternalStoreWithSelector = M, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), TE;
}
(function(c) {
  ({}).NODE_ENV === "production" ? c.exports = SL() : c.exports = EL();
})(hL);
const CL = /* @__PURE__ */ wb(ME), {
  useSyncExternalStoreWithSelector: TL
} = CL;
function wL(c, v = c.getState, p) {
  const S = TL(c.subscribe, c.getState, c.getServerState || c.getState, v, p);
  return Wn.useDebugValue(S), S;
}
const ib = (c) => {
  const v = typeof c == "function" ? vL(c) : c, p = (S, T) => wL(v, S, T);
  return Object.assign(p, v), p;
}, bL = (c) => c ? ib(c) : ib;
var RL = bL;
const wE = (c, v) => {
  if (!c.includes(v))
    throw new Error(`'${v}' not found. It must be provided in initialState as a property key.`);
}, xL = (c) => {
  const v = RL(() => c), p = Object.keys(c), S = (T, b) => {
    ({}).NODE_ENV !== "production" && wE(p, T), v.setState((y) => {
      return {
        [T]: (N = y[T], k = b, typeof k == "function" ? k(N) : k)
      };
      var N, k;
    });
  };
  return {
    useGlobalState: (T) => {
      ({}).NODE_ENV !== "production" && wE(p, T);
      const b = Wn.useCallback((y) => y[T], [T]);
      return [v(b), Wn.useCallback((y) => S(T, y), [T])];
    },
    getGlobalState: (T) => ({}.NODE_ENV !== "production" && wE(p, T), v.getState()[T]),
    setGlobalState: S,
    subscribe: (T, b) => {
      v.subscribe((y, N) => {
        y[T] !== N[T] && b(y[T]);
      });
    }
  };
}, _L = "urn:adsk-forma-elements:dummy:none:id-dummy:1337", OL = {
  elements: {},
  synced: !1,
  terrainElevationTransf3d: null,
  rootUrn: _L,
  loadedIntegrate: [],
  mapHistoryIdToInitialDeltaId: /* @__PURE__ */ new Map()
}, { useGlobalState: Ry, setGlobalState: Dv } = xL(OL);
function kL(c, v, p, S) {
  let T = [];
  for (const b of c.children)
    T.push(Vb(
      b,
      v,
      p,
      S
    ));
  return T;
}
async function DL(c, v, p, S, T, b) {
  const y = lL(c, v.urn), { glbUrlMap: N, axmList: k } = uL(
    c,
    y,
    S
  );
  let M, j, A = [], B = [];
  for (const [P, H] of Object.entries(N))
    if (P.includes("terrain")) {
      const Z = H.elements[0];
      if (M) {
        if (M !== Z.id)
          throw new Error(
            `Found terrain id ${Z.id} does not match id of previously found terrain id ${M}. Unable to determine which terrain to load.`
          );
        console.warn(
          `Found a duplicate terrain in proposal. This may not be a problem. ${Z.id}`
        );
      } else
        M = Z.id, j = cL(p.proposalId, Z);
    } else
      A.push(dL(
        P,
        H.elements,
        fd(),
        T,
        b
      ));
  for (const P of k) {
    const H = P.path === S;
    B.push(
      pL(
        P,
        H,
        T,
        b
      )
    );
  }
  await Promise.all([
    j,
    ...A,
    ...B
  ]).then(([P, ...H]) => {
    AL(P).then(async () => {
      ML(P, H, p.projectId);
    });
  });
}
async function AL(c) {
  const v = c.allIdsCreated[0];
  let p;
  const S = await WSM.APIGetObjectsByTypeReadOnly(
    Tt,
    v,
    WSM.nObjectType.nInstanceType
  );
  S.length === 1 ? p = S[0] : console.error("Error getting terrain instance, did not create 1 instance");
  let b = (await Promise.all(PE(Tt, ar.FORMA_TERRAIN)))[0];
  await FormIt.Layers.AssignLayerToObjects(b, p), await FormIt.Layers.SetLayerPickable(b, !1);
  const y = await WSM.APIGetGroupReferencedHistoryReadOnly(Tt, v), N = await WSM.APIGetAllObjectsByTypeReadOnly(y, WSM.nObjectType.nMeshType), k = {
    //@ts-ignore
    [WSM.INFERENCE_HINT_FORCEZNORMAL]: !0,
    //@ts-ignore
    [WSM.INFERENCE_HINT_NO_VERTEX_INF]: !0
  };
  await WSM.Utils.SetOrCreateStringAttributeForObject(
    y,
    N[0],
    //@ts-ignore
    WSM.INFERENCE_HINT,
    JSON.stringify(k)
  );
}
async function ML(c, v, p) {
  const S = c.allIdsCreated[0], T = await WSM.APIGetStringAttributesByKeyReadOnly(
    Tt,
    S,
    //@ts-ignore
    FormIt.TERRAIN_KEY
  );
  if (T.length === 1) {
    const b = await WSM.APIGetStringAttributeKeyValueReadOnly(Tt, T[0]), y = Number(b.sValue);
    let N = await WSM.Geom.Transf3d(), k = await WSM.Geom.Vector3d(0, 0, y);
    await WSM.Geom.TranslateTransform(
      N,
      k
    ).then(async (M) => {
      Dv("terrainElevationTransf3d", M);
      const j = v.filter((A) => !A.isTerrain && A.needElevationFix);
      for (const A of j)
        await WSM.APITransformObjects(Tt, A.allIdsCreated, M), A.idEditingForConversion && await FormIt.GroupEdit.SetInContextEditingPath(A.idEditingForConversion);
    });
  } else
    throw new Error("Error reading terrain transform from cached wsm, could not read attribute");
}
async function LL(c, v, p) {
  var y;
  const S = await ai.getProposalElement(
    v,
    c
  );
  if (!S)
    return;
  const T = Object.values(S).find(
    (N) => N.properties.category === "proposal"
  ), b = (y = T == null ? void 0 : T.children) == null ? void 0 : y.find((N) => N.urn.includes("terrain"));
  NL(b, c, v.proposalId, p);
}
async function NL(c, v, p, S) {
  var N, k, M;
  const T = ss(c.urn).revision;
  let b = `3d-sketch-terrain-${p}-revision-${T}`;
  if (await _b(b))
    S && S();
  else {
    const j = Rb(c.urn, v), B = await (await fetch(j)).json();
    let P, H;
    if (WSM.APIDeleteAllHistories(), WSM.APICreateHistory(Tt), FormIt.UndoManagement.BeginState(), Object.entries(B).length === 1)
      for (const [, V] of Object.entries(B))
        P = (M = (k = (N = V.properties) == null ? void 0 : N.geometry) == null ? void 0 : k.volumeMesh) == null ? void 0 : M.url, H = await FL(V.properties, v);
    else
      throw new Error("Did not find exactly one terrain urn");
    const Z = "terrain.glb", J = "terrain.wsm";
    let Ce = await WSM.Geom.Transf3d();
    const ce = await WSM.Geom.Point3d(0, 0, 0), ae = await WSM.Geom.Vector3d(Zl, Zl, Zl), ee = await WSM.Geom.MakeScalingTransform(ce, ae);
    await WSM.Transf3d.Multiply(ee, Ce).then(async (V) => {
      Ce = V, await Vy(
        {
          fetchUrl: P,
          savePath: Z,
          transf3d: Ce,
          materialId: H,
          tempWsmLocation: J,
          key: b,
          proposalId: p,
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
async function IL(c, v) {
  await WSM.Glft.APILoadGltfFile(
    Tt,
    c.tempGlbLocation,
    c.transf3d,
    WSM.INVALID_ID,
    !0,
    [],
    !1
  ).then(async () => {
    const p = await WSM.APIGetAllObjectsByTypeReadOnly(0, WSM.nObjectType.nMeshType);
    if (await WSM.APISetObjectsMaterial(Tt, p, c.materialId), p.length !== 1)
      throw new Error("3D Sketch terrain worker - Did not create exactly one terrain mesh");
    const T = (await WSM.APIGetBoxReadOnly(Tt, p[0])).lower.z - 1, b = await WSM.Geom.TranslateTransform(
      await WSM.Geom.Transf3d(),
      await WSM.Geom.Vector3d(0, 0, -T)
    ), y = await WSM.Utils.CreateAlignedAndCenteredGroup(Tt, p);
    await WSM.APITransformObject(Tt, y, b), await WSM.Utils.SetOrCreateStringAttributeForObject(
      Tt,
      y,
      //@ts-ignore
      FormIt.TERRAIN_KEY,
      JSON.stringify(-T)
    ), await FormIt.UndoManagement.EndState("Initial State"), await WSM.APISaveToFileReadOnly(Tt, y, c.tempWsmLocation, 0, !0, 1, []);
    const N = window.FormItModule.FormIt_ReadFile(tempWsmLocation);
    fA(`3d-sketch-terrain-${c.proposalId}`), cA(c.key, N), console.log(`persisted terrain in cache: ${c.proposalId}-revision-${c.terrainRevisionId}`), v && v();
  });
}
async function FL(c, v) {
  const p = await ai.getAsJson(`/api/projects/${v}`), S = "/texture/v2", T = c.geoReference.srid, b = encodeURIComponent(JSON.stringify(c.bbox)), y = `${S}/texture.jpeg?countryCode=${p.countryCode}&srid=${T}&bbox=${b}&size=4096&projectId=${v}`, [N] = await Promise.all([await ai.getAsJson(y)]), k = N.link, M = "terrainTexture.jpeg", j = await fetch(k);
  if (j.ok) {
    const A = await j.blob();
    let B = await FormIt.FormaAddIn.CreateTempPath(M);
    const P = await createImageBitmap(A, { imageOrientation: "flipY" }), H = new self.OffscreenCanvas(P.width, P.height);
    H.getContext("bitmaprenderer").transferFromImageBitmap(P);
    const J = await H.convertToBlob(), Ce = new Uint8Array(await J.arrayBuffer()), ce = await WSM.APICreateTexture(Tt, [...Ce], !0, B);
    return await WSM.APICreateMaterial(
      Tt,
      WSM.Color(225, 225, 225, 255),
      1,
      1,
      ce
    );
  }
}
var $b = {};
(function(c) {
  Object.defineProperty(c, "__esModule", {
    value: !0
  }), c.ReferenceType = void 0, function(v) {
    v.INLINE = "Inline", v.REMOTE = "Remote";
  }(c.ReferenceType || (c.ReferenceType = {}));
})($b);
const ob = (c) => [
  c[0],
  c[4],
  c[8],
  c[12],
  c[1],
  c[5],
  c[9],
  c[13],
  c[2],
  c[6],
  c[10],
  c[14],
  c[3],
  c[7],
  c[11],
  c[15]
], UL = (c) => {
  const v = {}, p = [], S = [];
  for (const T of c.indices) {
    const [b, y, N] = c.vertices.slice(T * 3, T * 3 + 3);
    v[b] || (v[b] = {}), v[b][y] || (v[b][y] = {}), v[b][y][N] || (v[b][y][N] = S.length / 3, S.push(b, y, N)), p.push(v[b][y][N]);
  }
  return { ...c, indices: p, vertices: S };
}, jL = (c) => {
  let v = [], p = [];
  for (const S of c) {
    const T = p.length / 3;
    v = v.concat(S.indices.map((b) => b + T)), p = p.concat(S.vertices);
  }
  return { ...c[0], indices: v, vertices: p };
}, PL = async (c, v, p) => {
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
  await lb(v, T, S, c);
  for (const [, y] of Object.entries(p))
    await lb(y.flat(), T, S, c, !0);
  return b;
};
async function lb(c, v, p, S, T = !1) {
  const b = 0.3047999995367042, y = await WSM.Geom.Point3d(0, 0, 0), N = await WSM.Geom.Vector3d(b, b, b), k = await WSM.Geom.MakeScalingTransform(y, N);
  for (const M of c) {
    const j = UL(jL(M.meshes)), A = {
      id: fd(),
      children: [],
      properties: {
        category: "ConceptualElement",
        geometry: {
          type: $b.ReferenceType.INLINE,
          format: "Mesh",
          verts: j.vertices,
          faces: j.indices
        }
      }
    };
    if (T && (A.properties.subcategory = "ConceptualBuildingFloor"), M.transforms.length > 1) {
      v[A.id] = A;
      for (const B of M.transforms) {
        let P = await WSM.Geom.Transf3d();
        B.data && (P.data = B.data), S && S.data && (P = await WSM.Transf3d.Multiply(S, P)), P = await WSM.Transf3d.Multiply(k, P), p.children.push({
          id: A.id,
          transform: ob(P.data)
        });
      }
    } else {
      let B = await WSM.Geom.Transf3d();
      M.transforms[0].data && (B.data = M.transforms[0].data), S && S.data && (B = await WSM.Transf3d.Multiply(S, B)), B = await WSM.Transf3d.Multiply(k, B), v[A.id] = {
        ...A
      }, p.children.push({
        id: A.id,
        transform: ob(B.data)
      });
    }
  }
}
async function zL(c, v, p) {
  FormIt.Layers.SetLayerVisibility(v, !1).then(() => {
    WSM.Utils.GetAllGeometryInformation(Tt).then((S) => {
      FormIt.Layers.SetLayerVisibility(v, !0).then(() => {
        VL(c).then(() => {
          BL(Tt, S, p);
        });
      });
    });
  });
}
async function VL(c) {
  await c.forEach(async (v) => {
    v.layerData && (v.layerData.Visible = v.previousVisiblity, await FormIt.Layers.SetLayersVisibility([v.layerData]));
  });
}
async function HL() {
  const c = [
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
  let v = [];
  for (const p of c) {
    let S = await $L(p);
    S.layerData && v.push(S);
  }
  return v;
}
async function $L(c) {
  const v = await FormIt.Layers.GetLayerID(c);
  let p = !1, S;
  return v != WSM.INVALID_ID && (S = await FormIt.Layers.GetLayerData(v), p = S.Visible, S.Visible = !1, await FormIt.Layers.SetLayersVisibility([S])), {
    layerData: S,
    previousVisiblity: p
  };
}
async function BL(c = WSM.INVALID_ID, v, p) {
  WSM.Utils.ComputeGeometryFromLevels(Tt, !1, c).then((S) => {
    let T = {};
    S && S.map((b) => {
      const { outer_loop: y, inner_loops: N } = b.second[0], M = [y.vertices.map((j) => [
        j.x * wy,
        j.y * wy
      ])];
      if (N.length > 0) {
        const j = N[0].vertices.map((A) => [
          A.x * wy,
          A.y * wy
        ]);
        M.push(j);
      }
      return M;
    }), p && p(v, T);
  });
}
async function WL(c) {
  await FormIt.GroupEdit.EndEditInContext();
  let v;
  if (c)
    await FormIt.Selection.AddSelections(c), v = await Bb();
  else {
    await FormIt.Selection.SelectAll();
    const S = (await FormIt.Selection.GetSelections()).map(
      (T) => T.ids[0].Object
    );
    S.length > 100 && console.warn(
      `We are saving ${S.length} instances. Consider using a set here.`
    ), v = await GL(S);
  }
  return v;
}
async function GL(c) {
  const v = [], p = await WSM.APIGetAllObjectsByTypeReadOnly(Tt, WSM.nObjectType.nLevelType);
  p && p.forEach(async (T) => {
    const b = await WSM.APIGetObjectsByTypeReadOnly(
      Tt,
      T,
      WSM.nObjectType.nLevelAttributeType
    );
    if (b.length === 0)
      v.push(T);
    else {
      b.length > 1 && console.warn(`Found a level with more than one level attribute. ${T}`);
      const y = await WSM.APIGetObjectsByTypeReadOnly(
        Tt,
        b[0],
        WSM.nInstanceType,
        !0
      );
      y.length == 0 ? v.push(T) : (y.length > 1 && console.warn(`Found a level on more than one instance. ${T}`), c.includes(y[0]) || v.push(T));
    }
  }), FormIt.UndoManagement.BeginState(), v.length > 0 && await WSM.APIDeleteObjects(Tt, v);
  let S = await Bb();
  return FormIt.UndoManagement.RejectState(), FormIt.Selection.ClearSelections(), S;
}
async function Bb() {
  let c = await FormIt.FormaAddIn.SaveCurrentAXMtoTempFile(!0), v = await FormIt.FormaAddIn.ReadFileandMakeBlob(c);
  for (var p = new Uint8Array(v.length), S = 0; S < p.length; S++)
    p[S] = v[S];
  return p;
}
async function YL(c, v, p) {
  const S = new Blob([c]), T = new File([S], "internalRepresentation.axm");
  await QL(T, v).then((b) => {
    p && p(b);
  });
}
async function QL(c, v) {
  const p = JSON.stringify({
    projectId: v
  });
  try {
    const S = await fetch("/api/spacemaker-object-storage/v1/", {
      method: "POST",
      body: p,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": "true"
      }
    });
    if (S.ok) {
      const { id: T, url: b, fields: y } = await S.json(), N = new FormData();
      if (Object.keys(y).forEach((M) => {
        N.append(M, y[M]);
      }), N.append("file", c), (await fetch(b, {
        method: "POST",
        body: N,
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
async function qL(c, v, p, S, T, b, y) {
  debugger;
  const N = FormItInterface.CallMethod("FormItPlugin.getAllInstancesToBeSaved", [b]), k = FormItInterface.CallMethod("FormItPlugin.getFloorGeometriesByBuildingId", [N]);
  if (S.length === 0 && Pb(k)) {
    await VE({
      elementId: v,
      authContext: p,
      urnToDelete: "",
      elementResponseMap: T,
      proposalElement: null
    });
    return;
  }
  PL(
    c,
    S,
    k
  ).then((M) => {
    y && y(M);
  });
}
async function KL(c, v, p, S, T, b, y, N, k, M) {
  let j = p.proposalId, A = p.urn;
  const B = c ? await WSM.Geom.InvertTransform(c) : void 0;
  WL(b).then(async (P) => {
    if (!P) {
      console.error("Can't save temporary wsm file.");
      return;
    }
    qL(
      B,
      j,
      S,
      v,
      y,
      N,
      async (H) => {
        let Z = await od(S, j), J = "", Ce = "", ce = !1, ae = Object.entries(H.elements).map(([ee, V]) => ee);
        if (y) {
          let ee = y[A];
          if (ee) {
            const V = Object.values(ee.children).filter(
              (me) => {
                let _e = me.urn.indexOf(":integrate:") > 0, Qe = !1;
                return k && (Qe = (k == null ? void 0 : k.indexOf(me.urn)) > -1), !Qe && _e;
              }
            );
            for (const me of V) {
              Ce = me.urn, Ce && (J = ss(Ce).id);
              let Qe = { projectId: S, editingElementId: J, proposalId: j }, lt = { editingElementUrn: Ce, deletingElementUrn: null };
              ae.indexOf(J) !== -1 ? (ae = ae.filter((mt) => {
              }), await xy(
                Qe,
                H,
                P,
                T,
                lt,
                Z,
                y,
                M
              )) : (J = "", ce = await xy(
                { projectId: S, editingElementId: J, proposalId: j },
                H,
                P,
                T,
                { editingElementUrn: null, deletingElementUrn: Ce },
                Z,
                y,
                M
              ));
            }
            ae.length > 0 && (ce && (Z = await od(S, j)), Ce = "", J = "", await xy(
              { projectId: S, editingElementId: J, proposalId: j },
              H,
              P,
              T,
              { editingElementUrn: null, deletingElementUrn: null },
              Z,
              y,
              M
            ));
          } else
            await xy(
              { projectId: S, editingElementId: J, proposalId: j },
              H,
              P,
              T,
              { editingElementUrn: null, deletingElementUrn: null },
              Z,
              y,
              M
            );
        }
      }
    );
  });
}
async function xy(c, v, p, S, T, b, y, N) {
  let k = c.projectId, M = c.editingElementId, j = c.proposalId, A = T.editingElementUrn, B = T.deletingElementUrn;
  if (!B)
    YL(
      p,
      k,
      async (P) => {
        if (!P) {
          N && N(!1);
          return;
        }
        await XL(
          k,
          v,
          P,
          M,
          S,
          j,
          A,
          b,
          y,
          N
        );
      }
    );
  else
    return await VE({
      elementId: j,
      authContext: k,
      elementResponseMap: y,
      urnToDelete: B,
      proposalElement: b
    });
}
async function XL(c, v, p, S, T, b, y, N, k, M) {
  ZL(
    c,
    v,
    p,
    S,
    T
  ).then(async (j) => {
    !j || typeof j == "string" || j instanceof String ? M && M(j) : j ? VE({
      elementId: b,
      authContext: c,
      elementResponseMap: k,
      createdUrn: j.urn,
      proposalElement: N
    }).then((A) => {
      M && M(A);
    }) : M && M(!1);
  });
}
async function ZL(c, v, p, S, T) {
  let b = await v;
  const y = b.elements[b.rootElement].properties;
  y.spacemakerObjectStorageReferences = [p], y.spacemakerObjectStorageReferenceFormats = ["axm"], T.length > 0 && (y.areaStatsReps = {
    grossFloorPolygons: T
  });
  const N = await JL(c);
  if (N) {
    const k = await eN(N.url, JSON.stringify(b));
    try {
      if (k) {
        const M = S ? `/api/integrate/elements/${S}?version=2&authcontext=${c}&s3Id=${N.id}` : `/api/integrate/elements?version=2&authcontext=${c}&s3Id=${N.id}`;
        let j = await fetch(M, {
          method: "POST"
        }).catch((A) => {
          throw console.log(A), new Error(A);
        });
        if (j.ok)
          return await j.json();
        {
          let A = await j.json(), B = `${A.errorMessage}: ${A.errors ? A.errors[0].message : "no detail can be found"}`;
          return console.log(B), B;
        }
      }
    } catch {
      return !1;
    }
  }
  return !1;
}
async function VE({
  elementId: c,
  authContext: v,
  elementResponseMap: p,
  createdUrn: S,
  urnToDelete: T,
  proposalElement: b
}) {
  b === null ? b = await od(v, c) : p = Uw(p, b.urn);
  const { revision: y } = ss(b.urn);
  if (T)
    p = Uw(p, T), b.children = b.children.filter((N) => N.urn !== T);
  else if (S)
    b.children.push({
      urn: S,
      key: fd()
    });
  else
    return console.error("not a valid update, bad parameters"), !1;
  try {
    return (await fetch(
      `/api/proposal/elements/${c}/revisions/${y}?version=2&authcontext=${v}`,
      {
        method: "PUT",
        body: JSON.stringify(b)
      }
    )).ok ? (Object.values(b.children).filter(
      (k) => k.urn.indexOf("integrate") > -1
    ).forEach(
      (k) => {
        p[k.urn] || (p[k.urn] = k);
      }
    ), od(v, c).then((k) => {
      p[k.urn] = k;
    }), Dv("elements", p), !0) : !1;
  } catch {
    return !1;
  }
}
async function od(c, v) {
  const p = await ai.getProposalElement(
    v,
    c
  );
  if (p === null) {
    console.error("proposal can't be retrieved to be updated");
    return;
  }
  return Object.values(p).find(
    (T) => T.properties.category === "proposal"
  );
}
async function JL(c) {
  try {
    const v = await fetch(`/api/integrate/upload_link?authcontext=${c}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": "true"
      }
    });
    if (v.ok)
      return await v.json();
  } catch {
    return !1;
  }
  return !1;
}
async function eN(c, v) {
  try {
    return (await fetch(c, {
      method: "PUT",
      body: v
    })).ok;
  } catch {
    return !1;
  }
}
class tN {
  getCookie(v) {
    const p = v.length + 1;
    return document.cookie.split(";").map((S) => S.trim()).filter((S) => S.substring(0, p) === `${v}=`).map((S) => decodeURIComponent(S.substring(p)))[0] || null;
  }
  accessSpacemaker(v) {
    let p = null;
    if (v) {
      p = window.open("https://app.spacemaker.ai/auth/login?rd=https%3A%2F%2Fapp.spacemaker.ai%2Fprojects", "_blank", "width= 500px, height=500px");
      let S = setInterval(() => {
        this.getCookie("ajs_user_id") !== null && (clearInterval(S), p !== null && p.close());
      }, 1e3);
    } else {
      const T = "https://local.autodeskforma.eu:3001?loggedIn=1";
      window.location.replace(`https://app.autodeskforma.eu/auth/login?rd=${T}`);
    }
  }
  async save({
    projectId: v,
    proposal: p,
    elementResponseMap: S,
    terrainElevationTransf3d: T,
    loadedIntegrateElements: b,
    mapHistoryIdToInitialDeltaId: y
  }, N) {
    await FormIt.Model.IsModified() && this.beforeSaveLayerHandling().then(async () => {
      HL().then(async (M) => {
        zL(
          M,
          ar.FORMA_BUILDINGS,
          (j, A) => {
            A || (A = {}), KL(
              T,
              j,
              p,
              v,
              A,
              0,
              S,
              y,
              b,
              N
            );
          }
        );
      });
    });
  }
  async beforeSaveLayerHandling() {
    const v = [], p = [], S = await WSM.APIGetAllNonOwnedReadOnly(Tt);
    for (const T of S) {
      const b = await WSM.APIGetObjectTypeReadOnly(Tt, T);
      b === WSM.nObjectType.nBodyType || b === WSM.nObjectType.nMeshType ? v.push(T) : (b === WSM.nFaceType || b === WSM.nEdgeType || b === WSM.nVertexType || b === WSM.nLineMeshType || b === WSM.nPointMeshType) && p.push(T);
    }
    if (v.length > 0 || p.length > 0) {
      await FormIt.UndoManagement.BeginState();
      for (const T of v)
        await WSM.Utils.CreateAlignedAndCenteredGroup(Tt, [T]);
      p.length > 0 && await WSM.Utils.CreateAlignedAndCenteredGroup(Tt, p), await FormIt.UndoManagement.EndState("Move toplevels to instances");
    }
  }
  async getElementsAndSaveCache(v, p) {
    await LL(v.projectId, v.proposalId, p);
  }
  getTopLevelObjects(v, p, S = xb) {
    let T = v[p];
    const b = T.children || [], y = b == null ? void 0 : b.find((k) => {
      var M, j, A;
      return (A = (j = (M = T.properties) == null ? void 0 : M.flags) == null ? void 0 : j[k.key]) == null ? void 0 : A.scenario;
    }), N = [];
    for (let k of b)
      k !== y && N.push({ child: k, parentPath: S, scenario: !1 });
    return N;
  }
  buildElementInfo(v, p, S, T) {
    var k;
    const b = T[v.urn], y = p + "/" + v.key, N = rA[(k = b.properties) == null ? void 0 : k.category] ?? "generic";
    return N === "terrain" ? [] : [
      {
        path: y,
        category: N,
        scenario: S,
        element: b
      }
    ];
  }
  async fetchAndLoadElements(v, p, S) {
    const T = await ai.getProposalElement(
      p.proposalId,
      p.projectId
    );
    if (!T)
      return;
    const b = Object.values(T).find((H) => H.properties.category === "proposal"), y = {
      [b.urn]: b
    };
    let N = [], k = {
      [b.urn]: b
    };
    for (const H of b.children) {
      const Z = ss(H.urn);
      let J = Z.system, Ce = Z.id, ce = Z.revision;
      await ai.getElement(
        J,
        Ce,
        ce,
        p.projectId
      ).then((ae) => {
        let ee = H.urn;
        k[ee] = ae[H.urn];
      });
    }
    const M = this.getTopLevelObjects(y, b.urn), j = { proposal: {}, scenario: {} }, A = M.flatMap(
      ({ child: H, parentPath: Z }) => this.buildElementInfo(
        H,
        Z,
        !1,
        k
      )
    );
    for (const H of A) {
      const Z = H.scenario ? "scenario" : "proposal";
      j[Z][H.category] = j[Z][H.category] ?? [], j[Z][H.category].push(H.path);
    }
    let B = j.proposal;
    if (await dA()) {
      let H = kL(b, p.projectId, y, N);
      await Promise.all(H).then(async () => {
        DL(y, b, p, "", B, v).then(() => {
          S(p.proposalId, y, N);
        });
      });
    }
  }
}
const Uy = new tN();
class nN extends Wn.Component {
  constructor(v) {
    super(v), this.state = {
      loggedIn: !1
    };
  }
  static login() {
    return Uy.accessSpacemaker(!1), null;
  }
  render() {
    return /* @__PURE__ */ Ke(Jl, {});
  }
}
class HE {
  constructor() {
    Ia(this, "id");
    Ia(this, "urn");
    Ia(this, "name");
    Ia(this, "metadata");
    Ia(this, "version");
    this.id = "", this.urn = "", this.name = "", this.version = "1", this.metadata = null;
  }
  Fill(v, p, S, T, b) {
    if (this.id = v, this.version = S, p === null || p === "") {
      let y = v.split("prop_");
      this.name = `prop_${y[1].substring(0, 2)}`;
    } else
      this.name = p;
    this.urn = b, this.metadata = T;
  }
}
var ld = {}, rN = {
  get exports() {
    return ld;
  },
  set exports(c) {
    ld = c;
  }
}, hn = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ub;
function aN() {
  if (ub)
    return hn;
  ub = 1;
  var c = typeof Symbol == "function" && Symbol.for, v = c ? Symbol.for("react.element") : 60103, p = c ? Symbol.for("react.portal") : 60106, S = c ? Symbol.for("react.fragment") : 60107, T = c ? Symbol.for("react.strict_mode") : 60108, b = c ? Symbol.for("react.profiler") : 60114, y = c ? Symbol.for("react.provider") : 60109, N = c ? Symbol.for("react.context") : 60110, k = c ? Symbol.for("react.async_mode") : 60111, M = c ? Symbol.for("react.concurrent_mode") : 60111, j = c ? Symbol.for("react.forward_ref") : 60112, A = c ? Symbol.for("react.suspense") : 60113, B = c ? Symbol.for("react.suspense_list") : 60120, P = c ? Symbol.for("react.memo") : 60115, H = c ? Symbol.for("react.lazy") : 60116, Z = c ? Symbol.for("react.block") : 60121, J = c ? Symbol.for("react.fundamental") : 60117, Ce = c ? Symbol.for("react.responder") : 60118, ce = c ? Symbol.for("react.scope") : 60119;
  function ae(V) {
    if (typeof V == "object" && V !== null) {
      var me = V.$$typeof;
      switch (me) {
        case v:
          switch (V = V.type, V) {
            case k:
            case M:
            case S:
            case b:
            case T:
            case A:
              return V;
            default:
              switch (V = V && V.$$typeof, V) {
                case N:
                case j:
                case H:
                case P:
                case y:
                  return V;
                default:
                  return me;
              }
          }
        case p:
          return me;
      }
    }
  }
  function ee(V) {
    return ae(V) === M;
  }
  return hn.AsyncMode = k, hn.ConcurrentMode = M, hn.ContextConsumer = N, hn.ContextProvider = y, hn.Element = v, hn.ForwardRef = j, hn.Fragment = S, hn.Lazy = H, hn.Memo = P, hn.Portal = p, hn.Profiler = b, hn.StrictMode = T, hn.Suspense = A, hn.isAsyncMode = function(V) {
    return ee(V) || ae(V) === k;
  }, hn.isConcurrentMode = ee, hn.isContextConsumer = function(V) {
    return ae(V) === N;
  }, hn.isContextProvider = function(V) {
    return ae(V) === y;
  }, hn.isElement = function(V) {
    return typeof V == "object" && V !== null && V.$$typeof === v;
  }, hn.isForwardRef = function(V) {
    return ae(V) === j;
  }, hn.isFragment = function(V) {
    return ae(V) === S;
  }, hn.isLazy = function(V) {
    return ae(V) === H;
  }, hn.isMemo = function(V) {
    return ae(V) === P;
  }, hn.isPortal = function(V) {
    return ae(V) === p;
  }, hn.isProfiler = function(V) {
    return ae(V) === b;
  }, hn.isStrictMode = function(V) {
    return ae(V) === T;
  }, hn.isSuspense = function(V) {
    return ae(V) === A;
  }, hn.isValidElementType = function(V) {
    return typeof V == "string" || typeof V == "function" || V === S || V === M || V === b || V === T || V === A || V === B || typeof V == "object" && V !== null && (V.$$typeof === H || V.$$typeof === P || V.$$typeof === y || V.$$typeof === N || V.$$typeof === j || V.$$typeof === J || V.$$typeof === Ce || V.$$typeof === ce || V.$$typeof === Z);
  }, hn.typeOf = ae, hn;
}
var mn = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sb;
function iN() {
  return sb || (sb = 1, {}.NODE_ENV !== "production" && function() {
    var c = typeof Symbol == "function" && Symbol.for, v = c ? Symbol.for("react.element") : 60103, p = c ? Symbol.for("react.portal") : 60106, S = c ? Symbol.for("react.fragment") : 60107, T = c ? Symbol.for("react.strict_mode") : 60108, b = c ? Symbol.for("react.profiler") : 60114, y = c ? Symbol.for("react.provider") : 60109, N = c ? Symbol.for("react.context") : 60110, k = c ? Symbol.for("react.async_mode") : 60111, M = c ? Symbol.for("react.concurrent_mode") : 60111, j = c ? Symbol.for("react.forward_ref") : 60112, A = c ? Symbol.for("react.suspense") : 60113, B = c ? Symbol.for("react.suspense_list") : 60120, P = c ? Symbol.for("react.memo") : 60115, H = c ? Symbol.for("react.lazy") : 60116, Z = c ? Symbol.for("react.block") : 60121, J = c ? Symbol.for("react.fundamental") : 60117, Ce = c ? Symbol.for("react.responder") : 60118, ce = c ? Symbol.for("react.scope") : 60119;
    function ae(he) {
      return typeof he == "string" || typeof he == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      he === S || he === M || he === b || he === T || he === A || he === B || typeof he == "object" && he !== null && (he.$$typeof === H || he.$$typeof === P || he.$$typeof === y || he.$$typeof === N || he.$$typeof === j || he.$$typeof === J || he.$$typeof === Ce || he.$$typeof === ce || he.$$typeof === Z);
    }
    function ee(he) {
      if (typeof he == "object" && he !== null) {
        var Rt = he.$$typeof;
        switch (Rt) {
          case v:
            var Ft = he.type;
            switch (Ft) {
              case k:
              case M:
              case S:
              case b:
              case T:
              case A:
                return Ft;
              default:
                var rt = Ft && Ft.$$typeof;
                switch (rt) {
                  case N:
                  case j:
                  case H:
                  case P:
                  case y:
                    return rt;
                  default:
                    return Rt;
                }
            }
          case p:
            return Rt;
        }
      }
    }
    var V = k, me = M, _e = N, Qe = y, lt = v, vt = j, mt = S, Et = H, Fe = P, Ee = p, Te = b, Re = T, pe = A, re = !1;
    function ke(he) {
      return re || (re = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), _(he) || ee(he) === k;
    }
    function _(he) {
      return ee(he) === M;
    }
    function le(he) {
      return ee(he) === N;
    }
    function ne(he) {
      return ee(he) === y;
    }
    function fe(he) {
      return typeof he == "object" && he !== null && he.$$typeof === v;
    }
    function ve(he) {
      return ee(he) === j;
    }
    function De(he) {
      return ee(he) === S;
    }
    function z(he) {
      return ee(he) === H;
    }
    function je(he) {
      return ee(he) === P;
    }
    function ue(he) {
      return ee(he) === p;
    }
    function nt(he) {
      return ee(he) === b;
    }
    function Ct(he) {
      return ee(he) === T;
    }
    function ht(he) {
      return ee(he) === A;
    }
    mn.AsyncMode = V, mn.ConcurrentMode = me, mn.ContextConsumer = _e, mn.ContextProvider = Qe, mn.Element = lt, mn.ForwardRef = vt, mn.Fragment = mt, mn.Lazy = Et, mn.Memo = Fe, mn.Portal = Ee, mn.Profiler = Te, mn.StrictMode = Re, mn.Suspense = pe, mn.isAsyncMode = ke, mn.isConcurrentMode = _, mn.isContextConsumer = le, mn.isContextProvider = ne, mn.isElement = fe, mn.isForwardRef = ve, mn.isFragment = De, mn.isLazy = z, mn.isMemo = je, mn.isPortal = ue, mn.isProfiler = nt, mn.isStrictMode = Ct, mn.isSuspense = ht, mn.isValidElementType = ae, mn.typeOf = ee;
  }()), mn;
}
(function(c) {
  ({}).NODE_ENV === "production" ? c.exports = aN() : c.exports = iN();
})(rN);
function oN(c) {
  function v(ne, fe, ve, De, z) {
    for (var je = 0, ue = 0, nt = 0, Ct = 0, ht, he, Rt = 0, Ft = 0, rt, Pt = rt = ht = 0, ct = 0, Xt = 0, Xn = 0, zt = 0, Gn = ve.length, Zn = Gn - 1, dn, Je = "", Mt = "", fr = "", yn = "", An; ct < Gn; ) {
      if (he = ve.charCodeAt(ct), ct === Zn && ue + Ct + nt + je !== 0 && (ue !== 0 && (he = ue === 47 ? 10 : 47), Ct = nt = je = 0, Gn++, Zn++), ue + Ct + nt + je === 0) {
        if (ct === Zn && (0 < Xt && (Je = Je.replace(B, "")), 0 < Je.trim().length)) {
          switch (he) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              Je += ve.charAt(ct);
          }
          he = 59;
        }
        switch (he) {
          case 123:
            for (Je = Je.trim(), ht = Je.charCodeAt(0), rt = 1, zt = ++ct; ct < Gn; ) {
              switch (he = ve.charCodeAt(ct)) {
                case 123:
                  rt++;
                  break;
                case 125:
                  rt--;
                  break;
                case 47:
                  switch (he = ve.charCodeAt(ct + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Pt = ct + 1; Pt < Zn; ++Pt)
                          switch (ve.charCodeAt(Pt)) {
                            case 47:
                              if (he === 42 && ve.charCodeAt(Pt - 1) === 42 && ct + 2 !== Pt) {
                                ct = Pt + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (he === 47) {
                                ct = Pt + 1;
                                break e;
                              }
                          }
                        ct = Pt;
                      }
                  }
                  break;
                case 91:
                  he++;
                case 40:
                  he++;
                case 34:
                case 39:
                  for (; ct++ < Zn && ve.charCodeAt(ct) !== he; )
                    ;
              }
              if (rt === 0)
                break;
              ct++;
            }
            switch (rt = ve.substring(zt, ct), ht === 0 && (ht = (Je = Je.replace(A, "").trim()).charCodeAt(0)), ht) {
              case 64:
                switch (0 < Xt && (Je = Je.replace(B, "")), he = Je.charCodeAt(1), he) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Xt = fe;
                    break;
                  default:
                    Xt = Re;
                }
                if (rt = v(fe, Xt, rt, he, z + 1), zt = rt.length, 0 < re && (Xt = p(Re, Je, Xn), An = N(3, rt, Xt, fe, Fe, Et, zt, he, z, De), Je = Xt.join(""), An !== void 0 && (zt = (rt = An.trim()).length) === 0 && (he = 0, rt = "")), 0 < zt)
                  switch (he) {
                    case 115:
                      Je = Je.replace(me, y);
                    case 100:
                    case 109:
                    case 45:
                      rt = Je + "{" + rt + "}";
                      break;
                    case 107:
                      Je = Je.replace(ce, "$1 $2"), rt = Je + "{" + rt + "}", rt = Te === 1 || Te === 2 && b("@" + rt, 3) ? "@-webkit-" + rt + "@" + rt : "@" + rt;
                      break;
                    default:
                      rt = Je + rt, De === 112 && (rt = (Mt += rt, ""));
                  }
                else
                  rt = "";
                break;
              default:
                rt = v(fe, p(fe, Je, Xn), rt, De, z + 1);
            }
            fr += rt, rt = Xn = Xt = Pt = ht = 0, Je = "", he = ve.charCodeAt(++ct);
            break;
          case 125:
          case 59:
            if (Je = (0 < Xt ? Je.replace(B, "") : Je).trim(), 1 < (zt = Je.length))
              switch (Pt === 0 && (ht = Je.charCodeAt(0), ht === 45 || 96 < ht && 123 > ht) && (zt = (Je = Je.replace(" ", ":")).length), 0 < re && (An = N(1, Je, fe, ne, Fe, Et, Mt.length, De, z, De)) !== void 0 && (zt = (Je = An.trim()).length) === 0 && (Je = "\0\0"), ht = Je.charCodeAt(0), he = Je.charCodeAt(1), ht) {
                case 0:
                  break;
                case 64:
                  if (he === 105 || he === 99) {
                    yn += Je + ve.charAt(ct);
                    break;
                  }
                default:
                  Je.charCodeAt(zt - 1) !== 58 && (Mt += T(Je, ht, he, Je.charCodeAt(2)));
              }
            Xn = Xt = Pt = ht = 0, Je = "", he = ve.charCodeAt(++ct);
        }
      }
      switch (he) {
        case 13:
        case 10:
          ue === 47 ? ue = 0 : 1 + ht === 0 && De !== 107 && 0 < Je.length && (Xt = 1, Je += "\0"), 0 < re * _ && N(0, Je, fe, ne, Fe, Et, Mt.length, De, z, De), Et = 1, Fe++;
          break;
        case 59:
        case 125:
          if (ue + Ct + nt + je === 0) {
            Et++;
            break;
          }
        default:
          switch (Et++, dn = ve.charAt(ct), he) {
            case 9:
            case 32:
              if (Ct + je + ue === 0)
                switch (Rt) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    dn = "";
                    break;
                  default:
                    he !== 32 && (dn = " ");
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
              Ct + ue + je === 0 && (Xt = Xn = 1, dn = "\f" + dn);
              break;
            case 108:
              if (Ct + ue + je + Ee === 0 && 0 < Pt)
                switch (ct - Pt) {
                  case 2:
                    Rt === 112 && ve.charCodeAt(ct - 3) === 58 && (Ee = Rt);
                  case 8:
                    Ft === 111 && (Ee = Ft);
                }
              break;
            case 58:
              Ct + ue + je === 0 && (Pt = ct);
              break;
            case 44:
              ue + nt + Ct + je === 0 && (Xt = 1, dn += "\r");
              break;
            case 34:
            case 39:
              ue === 0 && (Ct = Ct === he ? 0 : Ct === 0 ? he : Ct);
              break;
            case 91:
              Ct + ue + nt === 0 && je++;
              break;
            case 93:
              Ct + ue + nt === 0 && je--;
              break;
            case 41:
              Ct + ue + je === 0 && nt--;
              break;
            case 40:
              if (Ct + ue + je === 0) {
                if (ht === 0)
                  switch (2 * Rt + 3 * Ft) {
                    case 533:
                      break;
                    default:
                      ht = 1;
                  }
                nt++;
              }
              break;
            case 64:
              ue + nt + Ct + je + Pt + rt === 0 && (rt = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Ct + je + nt))
                switch (ue) {
                  case 0:
                    switch (2 * he + 3 * ve.charCodeAt(ct + 1)) {
                      case 235:
                        ue = 47;
                        break;
                      case 220:
                        zt = ct, ue = 42;
                    }
                    break;
                  case 42:
                    he === 47 && Rt === 42 && zt + 2 !== ct && (ve.charCodeAt(zt + 2) === 33 && (Mt += ve.substring(zt, ct + 1)), dn = "", ue = 0);
                }
          }
          ue === 0 && (Je += dn);
      }
      Ft = Rt, Rt = he, ct++;
    }
    if (zt = Mt.length, 0 < zt) {
      if (Xt = fe, 0 < re && (An = N(2, Mt, Xt, ne, Fe, Et, zt, De, z, De), An !== void 0 && (Mt = An).length === 0))
        return yn + Mt + fr;
      if (Mt = Xt.join(",") + "{" + Mt + "}", Te * Ee !== 0) {
        switch (Te !== 2 || b(Mt, 2) || (Ee = 0), Ee) {
          case 111:
            Mt = Mt.replace(ee, ":-moz-$1") + Mt;
            break;
          case 112:
            Mt = Mt.replace(ae, "::-webkit-input-$1") + Mt.replace(ae, "::-moz-$1") + Mt.replace(ae, ":-ms-input-$1") + Mt;
        }
        Ee = 0;
      }
    }
    return yn + Mt + fr;
  }
  function p(ne, fe, ve) {
    var De = fe.trim().split(J);
    fe = De;
    var z = De.length, je = ne.length;
    switch (je) {
      case 0:
      case 1:
        var ue = 0;
        for (ne = je === 0 ? "" : ne[0] + " "; ue < z; ++ue)
          fe[ue] = S(ne, fe[ue], ve).trim();
        break;
      default:
        var nt = ue = 0;
        for (fe = []; ue < z; ++ue)
          for (var Ct = 0; Ct < je; ++Ct)
            fe[nt++] = S(ne[Ct] + " ", De[ue], ve).trim();
    }
    return fe;
  }
  function S(ne, fe, ve) {
    var De = fe.charCodeAt(0);
    switch (33 > De && (De = (fe = fe.trim()).charCodeAt(0)), De) {
      case 38:
        return fe.replace(Ce, "$1" + ne.trim());
      case 58:
        return ne.trim() + fe.replace(Ce, "$1" + ne.trim());
      default:
        if (0 < 1 * ve && 0 < fe.indexOf("\f"))
          return fe.replace(Ce, (ne.charCodeAt(0) === 58 ? "" : "$1") + ne.trim());
    }
    return ne + fe;
  }
  function T(ne, fe, ve, De) {
    var z = ne + ";", je = 2 * fe + 3 * ve + 4 * De;
    if (je === 944) {
      ne = z.indexOf(":", 9) + 1;
      var ue = z.substring(ne, z.length - 1).trim();
      return ue = z.substring(0, ne).trim() + ue + ";", Te === 1 || Te === 2 && b(ue, 1) ? "-webkit-" + ue + ue : ue;
    }
    if (Te === 0 || Te === 2 && !b(z, 1))
      return z;
    switch (je) {
      case 1015:
        return z.charCodeAt(10) === 97 ? "-webkit-" + z + z : z;
      case 951:
        return z.charCodeAt(3) === 116 ? "-webkit-" + z + z : z;
      case 963:
        return z.charCodeAt(5) === 110 ? "-webkit-" + z + z : z;
      case 1009:
        if (z.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + z + z;
      case 978:
        return "-webkit-" + z + "-moz-" + z + z;
      case 1019:
      case 983:
        return "-webkit-" + z + "-moz-" + z + "-ms-" + z + z;
      case 883:
        if (z.charCodeAt(8) === 45)
          return "-webkit-" + z + z;
        if (0 < z.indexOf("image-set(", 11))
          return z.replace(mt, "$1-webkit-$2") + z;
        break;
      case 932:
        if (z.charCodeAt(4) === 45)
          switch (z.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + z.replace("-grow", "") + "-webkit-" + z + "-ms-" + z.replace("grow", "positive") + z;
            case 115:
              return "-webkit-" + z + "-ms-" + z.replace("shrink", "negative") + z;
            case 98:
              return "-webkit-" + z + "-ms-" + z.replace("basis", "preferred-size") + z;
          }
        return "-webkit-" + z + "-ms-" + z + z;
      case 964:
        return "-webkit-" + z + "-ms-flex-" + z + z;
      case 1023:
        if (z.charCodeAt(8) !== 99)
          break;
        return ue = z.substring(z.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + ue + "-webkit-" + z + "-ms-flex-pack" + ue + z;
      case 1005:
        return H.test(z) ? z.replace(P, ":-webkit-") + z.replace(P, ":-moz-") + z : z;
      case 1e3:
        switch (ue = z.substring(13).trim(), fe = ue.indexOf("-") + 1, ue.charCodeAt(0) + ue.charCodeAt(fe)) {
          case 226:
            ue = z.replace(V, "tb");
            break;
          case 232:
            ue = z.replace(V, "tb-rl");
            break;
          case 220:
            ue = z.replace(V, "lr");
            break;
          default:
            return z;
        }
        return "-webkit-" + z + "-ms-" + ue + z;
      case 1017:
        if (z.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (fe = (z = ne).length - 10, ue = (z.charCodeAt(fe) === 33 ? z.substring(0, fe) : z).substring(ne.indexOf(":", 7) + 1).trim(), je = ue.charCodeAt(0) + (ue.charCodeAt(7) | 0)) {
          case 203:
            if (111 > ue.charCodeAt(8))
              break;
          case 115:
            z = z.replace(ue, "-webkit-" + ue) + ";" + z;
            break;
          case 207:
          case 102:
            z = z.replace(ue, "-webkit-" + (102 < je ? "inline-" : "") + "box") + ";" + z.replace(ue, "-webkit-" + ue) + ";" + z.replace(ue, "-ms-" + ue + "box") + ";" + z;
        }
        return z + ";";
      case 938:
        if (z.charCodeAt(5) === 45)
          switch (z.charCodeAt(6)) {
            case 105:
              return ue = z.replace("-items", ""), "-webkit-" + z + "-webkit-box-" + ue + "-ms-flex-" + ue + z;
            case 115:
              return "-webkit-" + z + "-ms-flex-item-" + z.replace(Qe, "") + z;
            default:
              return "-webkit-" + z + "-ms-flex-line-pack" + z.replace("align-content", "").replace(Qe, "") + z;
          }
        break;
      case 973:
      case 989:
        if (z.charCodeAt(3) !== 45 || z.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (vt.test(ne) === !0)
          return (ue = ne.substring(ne.indexOf(":") + 1)).charCodeAt(0) === 115 ? T(ne.replace("stretch", "fill-available"), fe, ve, De).replace(":fill-available", ":stretch") : z.replace(ue, "-webkit-" + ue) + z.replace(ue, "-moz-" + ue.replace("fill-", "")) + z;
        break;
      case 962:
        if (z = "-webkit-" + z + (z.charCodeAt(5) === 102 ? "-ms-" + z : "") + z, ve + De === 211 && z.charCodeAt(13) === 105 && 0 < z.indexOf("transform", 10))
          return z.substring(0, z.indexOf(";", 27) + 1).replace(Z, "$1-webkit-$2") + z;
    }
    return z;
  }
  function b(ne, fe) {
    var ve = ne.indexOf(fe === 1 ? ":" : "{"), De = ne.substring(0, fe !== 3 ? ve : 10);
    return ve = ne.substring(ve + 1, ne.length - 1), ke(fe !== 2 ? De : De.replace(lt, "$1"), ve, fe);
  }
  function y(ne, fe) {
    var ve = T(fe, fe.charCodeAt(0), fe.charCodeAt(1), fe.charCodeAt(2));
    return ve !== fe + ";" ? ve.replace(_e, " or ($1)").substring(4) : "(" + fe + ")";
  }
  function N(ne, fe, ve, De, z, je, ue, nt, Ct, ht) {
    for (var he = 0, Rt = fe, Ft; he < re; ++he)
      switch (Ft = pe[he].call(j, ne, Rt, ve, De, z, je, ue, nt, Ct, ht)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          Rt = Ft;
      }
    if (Rt !== fe)
      return Rt;
  }
  function k(ne) {
    switch (ne) {
      case void 0:
      case null:
        re = pe.length = 0;
        break;
      default:
        if (typeof ne == "function")
          pe[re++] = ne;
        else if (typeof ne == "object")
          for (var fe = 0, ve = ne.length; fe < ve; ++fe)
            k(ne[fe]);
        else
          _ = !!ne | 0;
    }
    return k;
  }
  function M(ne) {
    return ne = ne.prefix, ne !== void 0 && (ke = null, ne ? typeof ne != "function" ? Te = 1 : (Te = 2, ke = ne) : Te = 0), M;
  }
  function j(ne, fe) {
    var ve = ne;
    if (33 > ve.charCodeAt(0) && (ve = ve.trim()), le = ve, ve = [le], 0 < re) {
      var De = N(-1, fe, ve, ve, Fe, Et, 0, 0, 0, 0);
      De !== void 0 && typeof De == "string" && (fe = De);
    }
    var z = v(Re, ve, fe, 0, 0);
    return 0 < re && (De = N(-2, z, ve, ve, Fe, Et, z.length, 0, 0, 0), De !== void 0 && (z = De)), le = "", Ee = 0, Et = Fe = 1, z;
  }
  var A = /^\0+/g, B = /[\0\r\f]/g, P = /: */g, H = /zoo|gra/, Z = /([,: ])(transform)/g, J = /,\r+?/g, Ce = /([\t\r\n ])*\f?&/g, ce = /@(k\w+)\s*(\S*)\s*/, ae = /::(place)/g, ee = /:(read-only)/g, V = /[svh]\w+-[tblr]{2}/, me = /\(\s*(.*)\s*\)/g, _e = /([\s\S]*?);/g, Qe = /-self|flex-/g, lt = /[^]*?(:[rp][el]a[\w-]+)[^]*/, vt = /stretch|:\s*\w+\-(?:conte|avail)/, mt = /([^-])(image-set\()/, Et = 1, Fe = 1, Ee = 0, Te = 1, Re = [], pe = [], re = 0, ke = null, _ = 0, le = "";
  return j.use = k, j.set = M, c !== void 0 && M(c), j;
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
function uN(c) {
  var v = /* @__PURE__ */ Object.create(null);
  return function(p) {
    return v[p] === void 0 && (v[p] = c(p)), v[p];
  };
}
var sN = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, cb = /* @__PURE__ */ uN(
  function(c) {
    return sN.test(c) || c.charCodeAt(0) === 111 && c.charCodeAt(1) === 110 && c.charCodeAt(2) < 91;
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
}, Wb = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, BE = {};
BE[$E.ForwardRef] = dN;
BE[$E.Memo] = Wb;
function fb(c) {
  return $E.isMemo(c) ? Wb : BE[c.$$typeof] || cN;
}
var pN = Object.defineProperty, vN = Object.getOwnPropertyNames, db = Object.getOwnPropertySymbols, hN = Object.getOwnPropertyDescriptor, mN = Object.getPrototypeOf, pb = Object.prototype;
function Gb(c, v, p) {
  if (typeof v != "string") {
    if (pb) {
      var S = mN(v);
      S && S !== pb && Gb(c, S, p);
    }
    var T = vN(v);
    db && (T = T.concat(db(v)));
    for (var b = fb(c), y = fb(v), N = 0; N < T.length; ++N) {
      var k = T[N];
      if (!fN[k] && !(p && p[k]) && !(y && y[k]) && !(b && b[k])) {
        var M = hN(v, k);
        try {
          pN(c, k, M);
        } catch {
        }
      }
    }
  }
  return c;
}
var yN = Gb;
function Xl() {
  return (Xl = Object.assign || function(c) {
    for (var v = 1; v < arguments.length; v++) {
      var p = arguments[v];
      for (var S in p)
        Object.prototype.hasOwnProperty.call(p, S) && (c[S] = p[S]);
    }
    return c;
  }).apply(this, arguments);
}
var vb = function(c, v) {
  for (var p = [c[0]], S = 0, T = v.length; S < T; S += 1)
    p.push(v[S], c[S + 1]);
  return p;
}, LE = function(c) {
  return c !== null && typeof c == "object" && (c.toString ? c.toString() : Object.prototype.toString.call(c)) === "[object Object]" && !ld.typeOf(c);
}, jy = Object.freeze([]), us = Object.freeze({});
function Lv(c) {
  return typeof c == "function";
}
function NE(c) {
  return {}.NODE_ENV !== "production" && typeof c == "string" && c || c.displayName || c.name || "Component";
}
function WE(c) {
  return c && typeof c.styledComponentId == "string";
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
  for (var c = arguments.length <= 0 ? void 0 : arguments[0], v = [], p = 1, S = arguments.length; p < S; p += 1)
    v.push(p < 0 || arguments.length <= p ? void 0 : arguments[p]);
  return v.forEach(function(T) {
    c = c.replace(/%[a-z]/, T);
  }), c;
}
function dd(c) {
  for (var v = arguments.length, p = new Array(v > 1 ? v - 1 : 0), S = 1; S < v; S++)
    p[S - 1] = arguments[S];
  throw {}.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + c + " for more information." + (p.length > 0 ? " Args: " + p.join(", ") : "")) : new Error(EN.apply(void 0, [SN[c]].concat(p)).trim());
}
var CN = function() {
  function c(p) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = p;
  }
  var v = c.prototype;
  return v.indexOfGroup = function(p) {
    for (var S = 0, T = 0; T < p; T++)
      S += this.groupSizes[T];
    return S;
  }, v.insertRules = function(p, S) {
    if (p >= this.groupSizes.length) {
      for (var T = this.groupSizes, b = T.length, y = b; p >= y; )
        (y <<= 1) < 0 && dd(16, "" + p);
      this.groupSizes = new Uint32Array(y), this.groupSizes.set(T), this.length = y;
      for (var N = b; N < y; N++)
        this.groupSizes[N] = 0;
    }
    for (var k = this.indexOfGroup(p + 1), M = 0, j = S.length; M < j; M++)
      this.tag.insertRule(k, S[M]) && (this.groupSizes[p]++, k++);
  }, v.clearGroup = function(p) {
    if (p < this.length) {
      var S = this.groupSizes[p], T = this.indexOfGroup(p), b = T + S;
      this.groupSizes[p] = 0;
      for (var y = T; y < b; y++)
        this.tag.deleteRule(T);
    }
  }, v.getGroup = function(p) {
    var S = "";
    if (p >= this.length || this.groupSizes[p] === 0)
      return S;
    for (var T = this.groupSizes[p], b = this.indexOfGroup(p), y = b + T, N = b; N < y; N++)
      S += this.tag.getRule(N) + `/*!sc*/
`;
    return S;
  }, c;
}(), Dy = /* @__PURE__ */ new Map(), Py = /* @__PURE__ */ new Map(), Av = 1, _y = function(c) {
  if (Dy.has(c))
    return Dy.get(c);
  for (; Py.has(Av); )
    Av++;
  var v = Av++;
  return {}.NODE_ENV !== "production" && ((0 | v) < 0 || v > 1 << 30) && dd(16, "" + v), Dy.set(c, v), Py.set(v, c), v;
}, TN = function(c) {
  return Py.get(c);
}, wN = function(c, v) {
  v >= Av && (Av = v + 1), Dy.set(c, v), Py.set(v, c);
}, bN = "style[" + ud + '][data-styled-version="5.3.9"]', RN = new RegExp("^" + ud + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), xN = function(c, v, p) {
  for (var S, T = p.split(","), b = 0, y = T.length; b < y; b++)
    (S = T[b]) && c.registerName(v, S);
}, _N = function(c, v) {
  for (var p = (v.textContent || "").split(`/*!sc*/
`), S = [], T = 0, b = p.length; T < b; T++) {
    var y = p[T].trim();
    if (y) {
      var N = y.match(RN);
      if (N) {
        var k = 0 | parseInt(N[1], 10), M = N[2];
        k !== 0 && (wN(M, k), xN(c, M, N[3]), c.getTag().insertRules(k, S)), S.length = 0;
      } else
        S.push(y);
    }
  }
}, ON = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Yb = function(c) {
  var v = document.head, p = c || v, S = document.createElement("style"), T = function(N) {
    for (var k = N.childNodes, M = k.length; M >= 0; M--) {
      var j = k[M];
      if (j && j.nodeType === 1 && j.hasAttribute(ud))
        return j;
    }
  }(p), b = T !== void 0 ? T.nextSibling : null;
  S.setAttribute(ud, "active"), S.setAttribute("data-styled-version", "5.3.9");
  var y = ON();
  return y && S.setAttribute("nonce", y), p.insertBefore(S, b), S;
}, kN = function() {
  function c(p) {
    var S = this.element = Yb(p);
    S.appendChild(document.createTextNode("")), this.sheet = function(T) {
      if (T.sheet)
        return T.sheet;
      for (var b = document.styleSheets, y = 0, N = b.length; y < N; y++) {
        var k = b[y];
        if (k.ownerNode === T)
          return k;
      }
      dd(17);
    }(S), this.length = 0;
  }
  var v = c.prototype;
  return v.insertRule = function(p, S) {
    try {
      return this.sheet.insertRule(S, p), this.length++, !0;
    } catch {
      return !1;
    }
  }, v.deleteRule = function(p) {
    this.sheet.deleteRule(p), this.length--;
  }, v.getRule = function(p) {
    var S = this.sheet.cssRules[p];
    return S !== void 0 && typeof S.cssText == "string" ? S.cssText : "";
  }, c;
}(), DN = function() {
  function c(p) {
    var S = this.element = Yb(p);
    this.nodes = S.childNodes, this.length = 0;
  }
  var v = c.prototype;
  return v.insertRule = function(p, S) {
    if (p <= this.length && p >= 0) {
      var T = document.createTextNode(S), b = this.nodes[p];
      return this.element.insertBefore(T, b || null), this.length++, !0;
    }
    return !1;
  }, v.deleteRule = function(p) {
    this.element.removeChild(this.nodes[p]), this.length--;
  }, v.getRule = function(p) {
    return p < this.length ? this.nodes[p].textContent : "";
  }, c;
}(), AN = function() {
  function c(p) {
    this.rules = [], this.length = 0;
  }
  var v = c.prototype;
  return v.insertRule = function(p, S) {
    return p <= this.length && (this.rules.splice(p, 0, S), this.length++, !0);
  }, v.deleteRule = function(p) {
    this.rules.splice(p, 1), this.length--;
  }, v.getRule = function(p) {
    return p < this.length ? this.rules[p] : "";
  }, c;
}(), hb = GE, MN = {
  isServer: !GE,
  useCSSOMInjection: !gN
}, Qb = function() {
  function c(p, S, T) {
    p === void 0 && (p = us), S === void 0 && (S = {}), this.options = Xl({}, MN, {}, p), this.gs = S, this.names = new Map(T), this.server = !!p.isServer, !this.server && GE && hb && (hb = !1, function(b) {
      for (var y = document.querySelectorAll(bN), N = 0, k = y.length; N < k; N++) {
        var M = y[N];
        M && M.getAttribute(ud) !== "active" && (_N(b, M), M.parentNode && M.parentNode.removeChild(M));
      }
    }(this));
  }
  c.registerId = function(p) {
    return _y(p);
  };
  var v = c.prototype;
  return v.reconstructWithOptions = function(p, S) {
    return S === void 0 && (S = !0), new c(Xl({}, this.options, {}, p), this.gs, S && this.names || void 0);
  }, v.allocateGSInstance = function(p) {
    return this.gs[p] = (this.gs[p] || 0) + 1;
  }, v.getTag = function() {
    return this.tag || (this.tag = (T = (S = this.options).isServer, b = S.useCSSOMInjection, y = S.target, p = T ? new AN(y) : b ? new kN(y) : new DN(y), new CN(p)));
    var p, S, T, b, y;
  }, v.hasNameForId = function(p, S) {
    return this.names.has(p) && this.names.get(p).has(S);
  }, v.registerName = function(p, S) {
    if (_y(p), this.names.has(p))
      this.names.get(p).add(S);
    else {
      var T = /* @__PURE__ */ new Set();
      T.add(S), this.names.set(p, T);
    }
  }, v.insertRules = function(p, S, T) {
    this.registerName(p, S), this.getTag().insertRules(_y(p), T);
  }, v.clearNames = function(p) {
    this.names.has(p) && this.names.get(p).clear();
  }, v.clearRules = function(p) {
    this.getTag().clearGroup(_y(p)), this.clearNames(p);
  }, v.clearTag = function() {
    this.tag = void 0;
  }, v.toString = function() {
    return function(p) {
      for (var S = p.getTag(), T = S.length, b = "", y = 0; y < T; y++) {
        var N = TN(y);
        if (N !== void 0) {
          var k = p.names.get(N), M = S.getGroup(y);
          if (k && M && k.size) {
            var j = ud + ".g" + y + '[id="' + N + '"]', A = "";
            k !== void 0 && k.forEach(function(B) {
              B.length > 0 && (A += B + ",");
            }), b += "" + M + j + '{content:"' + A + `"}/*!sc*/
`;
          }
        }
      }
      return b;
    }(this);
  }, c;
}(), LN = /(a)(d)/gi, mb = function(c) {
  return String.fromCharCode(c + (c > 25 ? 39 : 97));
};
function IE(c) {
  var v, p = "";
  for (v = Math.abs(c); v > 52; v = v / 52 | 0)
    p = mb(v % 52) + p;
  return (mb(v % 52) + p).replace(LN, "$1-$2");
}
var mc = function(c, v) {
  for (var p = v.length; p; )
    c = 33 * c ^ v.charCodeAt(--p);
  return c;
}, qb = function(c) {
  return mc(5381, c);
};
function NN(c) {
  for (var v = 0; v < c.length; v += 1) {
    var p = c[v];
    if (Lv(p) && !WE(p))
      return !1;
  }
  return !0;
}
var IN = qb("5.3.9"), FN = function() {
  function c(v, p, S) {
    this.rules = v, this.staticRulesId = "", this.isStatic = {}.NODE_ENV === "production" && (S === void 0 || S.isStatic) && NN(v), this.componentId = p, this.baseHash = mc(IN, p), this.baseStyle = S, Qb.registerId(p);
  }
  return c.prototype.generateAndInjectStyles = function(v, p, S) {
    var T = this.componentId, b = [];
    if (this.baseStyle && b.push(this.baseStyle.generateAndInjectStyles(v, p, S)), this.isStatic && !S.hash)
      if (this.staticRulesId && p.hasNameForId(T, this.staticRulesId))
        b.push(this.staticRulesId);
      else {
        var y = sd(this.rules, v, p, S).join(""), N = IE(mc(this.baseHash, y) >>> 0);
        if (!p.hasNameForId(T, N)) {
          var k = S(y, "." + N, void 0, T);
          p.insertRules(T, N, k);
        }
        b.push(N), this.staticRulesId = N;
      }
    else {
      for (var M = this.rules.length, j = mc(this.baseHash, S.hash), A = "", B = 0; B < M; B++) {
        var P = this.rules[B];
        if (typeof P == "string")
          A += P, {}.NODE_ENV !== "production" && (j = mc(j, P + B));
        else if (P) {
          var H = sd(P, v, p, S), Z = Array.isArray(H) ? H.join("") : H;
          j = mc(j, Z + B), A += Z;
        }
      }
      if (A) {
        var J = IE(j >>> 0);
        if (!p.hasNameForId(T, J)) {
          var Ce = S(A, "." + J, void 0, T);
          p.insertRules(T, J, Ce);
        }
        b.push(J);
      }
    }
    return b.join(" ");
  }, c;
}(), UN = /^\s*\/\/.*$/gm, jN = [":", "[", ".", "#"];
function PN(c) {
  var v, p, S, T, b = c === void 0 ? us : c, y = b.options, N = y === void 0 ? us : y, k = b.plugins, M = k === void 0 ? jy : k, j = new oN(N), A = [], B = function(Z) {
    function J(Ce) {
      if (Ce)
        try {
          Z(Ce + "}");
        } catch {
        }
    }
    return function(Ce, ce, ae, ee, V, me, _e, Qe, lt, vt) {
      switch (Ce) {
        case 1:
          if (lt === 0 && ce.charCodeAt(0) === 64)
            return Z(ce + ";"), "";
          break;
        case 2:
          if (Qe === 0)
            return ce + "/*|*/";
          break;
        case 3:
          switch (Qe) {
            case 102:
            case 112:
              return Z(ae[0] + ce), "";
            default:
              return ce + (vt === 0 ? "/*|*/" : "");
          }
        case -2:
          ce.split("/*|*/}").forEach(J);
      }
    };
  }(function(Z) {
    A.push(Z);
  }), P = function(Z, J, Ce) {
    return J === 0 && jN.indexOf(Ce[p.length]) !== -1 || Ce.match(T) ? Z : "." + v;
  };
  function H(Z, J, Ce, ce) {
    ce === void 0 && (ce = "&");
    var ae = Z.replace(UN, ""), ee = J && Ce ? Ce + " " + J + " { " + ae + " }" : ae;
    return v = ce, p = J, S = new RegExp("\\" + p + "\\b", "g"), T = new RegExp("(\\" + p + "\\b){2,}"), j(Ce || !J ? "" : J, ee);
  }
  return j.use([].concat(M, [function(Z, J, Ce) {
    Z === 2 && Ce.length && Ce[0].lastIndexOf(p) > 0 && (Ce[0] = Ce[0].replace(S, P));
  }, B, function(Z) {
    if (Z === -2) {
      var J = A;
      return A = [], J;
    }
  }])), H.hash = M.length ? M.reduce(function(Z, J) {
    return J.name || dd(15), mc(Z, J.name);
  }, 5381).toString() : "", H;
}
var Kb = zy.createContext();
Kb.Consumer;
var Xb = zy.createContext(), zN = (Xb.Consumer, new Qb()), FE = PN();
function VN() {
  return Wn.useContext(Kb) || zN;
}
function HN() {
  return Wn.useContext(Xb) || FE;
}
var $N = function() {
  function c(v, p) {
    var S = this;
    this.inject = function(T, b) {
      b === void 0 && (b = FE);
      var y = S.name + b.hash;
      T.hasNameForId(S.id, y) || T.insertRules(S.id, y, b(S.rules, y, "@keyframes"));
    }, this.toString = function() {
      return dd(12, String(S.name));
    }, this.name = v, this.id = "sc-keyframes-" + v, this.rules = p;
  }
  return c.prototype.getName = function(v) {
    return v === void 0 && (v = FE), this.name + v.hash;
  }, c;
}(), BN = /([A-Z])/, WN = /([A-Z])/g, GN = /^ms-/, YN = function(c) {
  return "-" + c.toLowerCase();
};
function yb(c) {
  return BN.test(c) ? c.replace(WN, YN).replace(GN, "-ms-") : c;
}
var gb = function(c) {
  return c == null || c === !1 || c === "";
};
function sd(c, v, p, S) {
  if (Array.isArray(c)) {
    for (var T, b = [], y = 0, N = c.length; y < N; y += 1)
      (T = sd(c[y], v, p, S)) !== "" && (Array.isArray(T) ? b.push.apply(b, T) : b.push(T));
    return b;
  }
  if (gb(c))
    return "";
  if (WE(c))
    return "." + c.styledComponentId;
  if (Lv(c)) {
    if (typeof (M = c) != "function" || M.prototype && M.prototype.isReactComponent || !v)
      return c;
    var k = c(v);
    return {}.NODE_ENV !== "production" && ld.isElement(k) && console.warn(NE(c) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), sd(k, v, p, S);
  }
  var M;
  return c instanceof $N ? p ? (c.inject(p, S), c.getName(S)) : c : LE(c) ? function j(A, B) {
    var P, H, Z = [];
    for (var J in A)
      A.hasOwnProperty(J) && !gb(A[J]) && (Array.isArray(A[J]) && A[J].isCss || Lv(A[J]) ? Z.push(yb(J) + ":", A[J], ";") : LE(A[J]) ? Z.push.apply(Z, j(A[J], J)) : Z.push(yb(J) + ": " + (P = J, (H = A[J]) == null || typeof H == "boolean" || H === "" ? "" : typeof H != "number" || H === 0 || P in lN ? String(H).trim() : H + "px") + ";"));
    return B ? [B + " {"].concat(Z, ["}"]) : Z;
  }(c) : c.toString();
}
var Sb = function(c) {
  return Array.isArray(c) && (c.isCss = !0), c;
};
function QN(c) {
  for (var v = arguments.length, p = new Array(v > 1 ? v - 1 : 0), S = 1; S < v; S++)
    p[S - 1] = arguments[S];
  return Lv(c) || LE(c) ? Sb(sd(vb(jy, [c].concat(p)))) : p.length === 0 && c.length === 1 && typeof c[0] == "string" ? c : Sb(sd(vb(c, p)));
}
var Eb = /invalid hook call/i, Oy = /* @__PURE__ */ new Set(), qN = function(c, v) {
  if ({}.NODE_ENV !== "production") {
    var p = "The component " + c + (v ? ' with the id of "' + v + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, S = console.error;
    try {
      var T = !0;
      console.error = function(b) {
        if (Eb.test(b))
          T = !1, Oy.delete(p);
        else {
          for (var y = arguments.length, N = new Array(y > 1 ? y - 1 : 0), k = 1; k < y; k++)
            N[k - 1] = arguments[k];
          S.apply(void 0, [b].concat(N));
        }
      }, Wn.useRef(), T && !Oy.has(p) && (console.warn(p), Oy.add(p));
    } catch (b) {
      Eb.test(b.message) && Oy.delete(p);
    } finally {
      console.error = S;
    }
  }
}, KN = function(c, v, p) {
  return p === void 0 && (p = us), c.theme !== p.theme && c.theme || v || p.theme;
}, XN = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ZN = /(^-|-$)/g;
function bE(c) {
  return c.replace(XN, "-").replace(ZN, "");
}
var JN = function(c) {
  return IE(qb(c) >>> 0);
};
function ky(c) {
  return typeof c == "string" && ({}.NODE_ENV === "production" || c.charAt(0) === c.charAt(0).toLowerCase());
}
var UE = function(c) {
  return typeof c == "function" || typeof c == "object" && c !== null && !Array.isArray(c);
}, eI = function(c) {
  return c !== "__proto__" && c !== "constructor" && c !== "prototype";
};
function tI(c, v, p) {
  var S = c[p];
  UE(v) && UE(S) ? Zb(S, v) : c[p] = v;
}
function Zb(c) {
  for (var v = arguments.length, p = new Array(v > 1 ? v - 1 : 0), S = 1; S < v; S++)
    p[S - 1] = arguments[S];
  for (var T = 0, b = p; T < b.length; T++) {
    var y = b[T];
    if (UE(y))
      for (var N in y)
        eI(N) && tI(c, y[N], N);
  }
  return c;
}
var Jb = zy.createContext();
Jb.Consumer;
var RE = {};
function eR(c, v, p) {
  var S = WE(c), T = !ky(c), b = v.attrs, y = b === void 0 ? jy : b, N = v.componentId, k = N === void 0 ? function(ce, ae) {
    var ee = typeof ce != "string" ? "sc" : bE(ce);
    RE[ee] = (RE[ee] || 0) + 1;
    var V = ee + "-" + JN("5.3.9" + ee + RE[ee]);
    return ae ? ae + "-" + V : V;
  }(v.displayName, v.parentComponentId) : N, M = v.displayName, j = M === void 0 ? function(ce) {
    return ky(ce) ? "styled." + ce : "Styled(" + NE(ce) + ")";
  }(c) : M, A = v.displayName && v.componentId ? bE(v.displayName) + "-" + v.componentId : v.componentId || k, B = S && c.attrs ? Array.prototype.concat(c.attrs, y).filter(Boolean) : y, P = v.shouldForwardProp;
  S && c.shouldForwardProp && (P = v.shouldForwardProp ? function(ce, ae, ee) {
    return c.shouldForwardProp(ce, ae, ee) && v.shouldForwardProp(ce, ae, ee);
  } : c.shouldForwardProp);
  var H, Z = new FN(p, A, S ? c.componentStyle : void 0), J = Z.isStatic && y.length === 0, Ce = function(ce, ae) {
    return function(ee, V, me, _e) {
      var Qe = ee.attrs, lt = ee.componentStyle, vt = ee.defaultProps, mt = ee.foldedComponentIds, Et = ee.shouldForwardProp, Fe = ee.styledComponentId, Ee = ee.target;
      ({}).NODE_ENV !== "production" && Wn.useDebugValue(Fe);
      var Te = function(De, z, je) {
        De === void 0 && (De = us);
        var ue = Xl({}, z, {
          theme: De
        }), nt = {};
        return je.forEach(function(Ct) {
          var ht, he, Rt, Ft = Ct;
          for (ht in Lv(Ft) && (Ft = Ft(ue)), Ft)
            ue[ht] = nt[ht] = ht === "className" ? (he = nt[ht], Rt = Ft[ht], he && Rt ? he + " " + Rt : he || Rt) : Ft[ht];
        }), [ue, nt];
      }(KN(V, Wn.useContext(Jb), vt) || us, V, Qe), Re = Te[0], pe = Te[1], re = function(De, z, je, ue) {
        var nt = VN(), Ct = HN(), ht = z ? De.generateAndInjectStyles(us, nt, Ct) : De.generateAndInjectStyles(je, nt, Ct);
        return {}.NODE_ENV !== "production" && Wn.useDebugValue(ht), {}.NODE_ENV !== "production" && !z && ue && ue(ht), ht;
      }(lt, _e, Re, {}.NODE_ENV !== "production" ? ee.warnTooManyClasses : void 0), ke = me, _ = pe.$as || V.$as || pe.as || V.as || Ee, le = ky(_), ne = pe !== V ? Xl({}, V, {}, pe) : V, fe = {};
      for (var ve in ne)
        ve[0] !== "$" && ve !== "as" && (ve === "forwardedAs" ? fe.as = ne[ve] : (Et ? Et(ve, cb, _) : !le || cb(ve)) && (fe[ve] = ne[ve]));
      return V.style && pe.style !== V.style && (fe.style = Xl({}, V.style, {}, pe.style)), fe.className = Array.prototype.concat(mt, Fe, re !== Fe ? re : null, V.className, pe.className).filter(Boolean).join(" "), fe.ref = ke, Wn.createElement(_, fe);
    }(H, ce, ae, J);
  };
  return Ce.displayName = j, (H = zy.forwardRef(Ce)).attrs = B, H.componentStyle = Z, H.displayName = j, H.shouldForwardProp = P, H.foldedComponentIds = S ? Array.prototype.concat(c.foldedComponentIds, c.styledComponentId) : jy, H.styledComponentId = A, H.target = S ? c.target : c, H.withComponent = function(ce) {
    var ae = v.componentId, ee = function(me, _e) {
      if (me == null)
        return {};
      var Qe, lt, vt = {}, mt = Object.keys(me);
      for (lt = 0; lt < mt.length; lt++)
        Qe = mt[lt], _e.indexOf(Qe) >= 0 || (vt[Qe] = me[Qe]);
      return vt;
    }(v, ["componentId"]), V = ae && ae + "-" + (ky(ce) ? ce : bE(NE(ce)));
    return eR(ce, Xl({}, ee, {
      attrs: B,
      componentId: V
    }), p);
  }, Object.defineProperty(H, "defaultProps", {
    get: function() {
      return this._foldedDefaultProps;
    },
    set: function(ce) {
      this._foldedDefaultProps = S ? Zb({}, c.defaultProps, ce) : ce;
    }
  }), {}.NODE_ENV !== "production" && (qN(j, A), H.warnTooManyClasses = function(ce, ae) {
    var ee = {}, V = !1;
    return function(me) {
      if (!V && (ee[me] = !0, Object.keys(ee).length >= 200)) {
        var _e = ae ? ' with the id of "' + ae + '"' : "";
        console.warn("Over 200 classes were generated for component " + ce + _e + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), V = !0, ee = {};
      }
    };
  }(j, A)), Object.defineProperty(H, "toString", {
    value: function() {
      return "." + H.styledComponentId;
    }
  }), T && yN(H, c, {
    attrs: !0,
    componentStyle: !0,
    displayName: !0,
    foldedComponentIds: !0,
    shouldForwardProp: !0,
    styledComponentId: !0,
    target: !0,
    withComponent: !0
  }), H;
}
var jE = function(c) {
  return function v(p, S, T) {
    if (T === void 0 && (T = us), !ld.isValidElementType(S))
      return dd(1, String(S));
    var b = function() {
      return p(S, T, QN.apply(void 0, arguments));
    };
    return b.withConfig = function(y) {
      return v(p, S, Xl({}, T, {}, y));
    }, b.attrs = function(y) {
      return v(p, S, Xl({}, T, {
        attrs: Array.prototype.concat(T.attrs, y).filter(Boolean)
      }));
    }, b;
  }(eR, c);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(c) {
  jE[c] = jE(c);
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
`, Cb = Rn.div`
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
`, Tb = Rn.div`
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
function RI(c) {
  const { proposal: v, proposalSelectionHandler: p, isSelected: S } = c, T = ai.FormatThumbnailUrl(v.projectId, v.urn);
  return /* @__PURE__ */ Ke(Jl, { children: /* @__PURE__ */ Ke(
    mI,
    {
      onClick: () => {
        p(v.id);
      },
      children: /* @__PURE__ */ Ke(
        yI,
        {
          id: v.proposalId,
          className: S ? "proposal selected" : "proposal",
          children: /* @__PURE__ */ na(Tb, { className: "infos", children: [
            /* @__PURE__ */ Ke(SI, { children: /* @__PURE__ */ Ke(EI, { children: /* @__PURE__ */ Ke("img", { alt: "Site Preview", src: T, width: "56", height: "56" }) }) }),
            /* @__PURE__ */ Ke(CI, { children: /* @__PURE__ */ Ke(Tb, { children: /* @__PURE__ */ na(gI, { children: [
              /* @__PURE__ */ Ke(TI, { children: v.name }),
              /* @__PURE__ */ Ke(wI, { children: /* @__PURE__ */ Ke(bI, { children: v.creationDate }) })
            ] }) }) })
          ] })
        }
      )
    }
  ) });
}
function xI(c) {
  const { proposals: v, proposalSelectionHandler: p, selectedProposalId: S } = c;
  return v ? /* @__PURE__ */ Ke(Jl, { children: /* @__PURE__ */ Ke("div", { "data-checkly": "ProposalList", children: /* @__PURE__ */ Ke(hI, { children: v == null ? void 0 : v.map((T) => /* @__PURE__ */ Ke(
    RI,
    {
      proposal: T,
      proposalSelectionHandler: p,
      isSelected: T.proposalId === S
    },
    T.proposalId
  )) }) }) }) : /* @__PURE__ */ Ke(Jl, { children: /* @__PURE__ */ Ke("div", { "data-checkly": "ProposalList" }) });
}
function _I(c) {
  const { project: v, projectSelectionHandler: p, proposalSelectionHandler: S, isSelected: T, selectedProposalId: b } = c, y = ai.FormatThumbnailUrl(v.projectId, v.urn);
  return /* @__PURE__ */ na(Jl, { children: [
    /* @__PURE__ */ Ke(
      rI,
      {
        onClick: () => {
          p(v.id);
        },
        children: /* @__PURE__ */ na(
          aI,
          {
            id: v.projectId,
            className: T ? "project selected" : "project",
            children: [
              /* @__PURE__ */ na(Cb, { className: "infos", children: [
                /* @__PURE__ */ Ke(uI, { children: /* @__PURE__ */ Ke(sI, { children: /* @__PURE__ */ Ke(
                  "img",
                  {
                    alt: "Site Preview",
                    src: y,
                    width: "115",
                    height: "115"
                  }
                ) }) }),
                /* @__PURE__ */ Ke(cI, { children: /* @__PURE__ */ Ke(Cb, { children: /* @__PURE__ */ na(iI, { children: [
                  /* @__PURE__ */ Ke(oI, { children: v.proposalCount }),
                  /* @__PURE__ */ Ke(lI, { children: "Proposals" })
                ] }) }) })
              ] }),
              /* @__PURE__ */ na(fI, { children: [
                /* @__PURE__ */ Ke(dI, { children: v.name }),
                /* @__PURE__ */ Ke(pI, { children: /* @__PURE__ */ Ke(vI, { children: v.creationTime }) })
              ] })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ Ke(
      "div",
      {
        id: v.proposalsListContainer,
        className: T ? "visible" : "hidden",
        children: /* @__PURE__ */ Ke(
          xI,
          {
            proposals: v.proposals,
            proposalSelectionHandler: S,
            selectedProposalId: b
          }
        )
      }
    )
  ] });
}
function OI(c) {
  const { projects: v, projectSelectionHandler: p, proposalSelectionHandler: S, selectedProjectId: T, selectedProposalId: b } = c;
  if (!v)
    return /* @__PURE__ */ Ke(Jl, { children: /* @__PURE__ */ Ke("div", { "data-checkly": "ProjectList" }) });
  function y(k) {
    document.querySelectorAll(".project.selected").forEach((A) => {
      A.classList.remove("selected");
    }), document.querySelectorAll(".visible").forEach((A) => {
      A.classList.remove("visible"), A.classList.add("hidden");
    }), N(""), p(k);
  }
  function N(k) {
    document.querySelectorAll(".proposal.selected").forEach((j) => {
      j.classList.remove("selected");
    }), S(k);
  }
  return /* @__PURE__ */ Ke(Jl, { children: /* @__PURE__ */ Ke("div", { id: "projectlist-container", "data-checkly": "ProjectList", children: /* @__PURE__ */ Ke(nI, { children: v == null ? void 0 : v.map((k) => /* @__PURE__ */ Ke(
    _I,
    {
      project: k,
      projectSelectionHandler: y,
      proposalSelectionHandler: N,
      isSelected: k.projectId === T,
      selectedProposalId: b
    },
    k.projectId
  )) }) }) });
}
class kI extends HE {
  constructor() {
    super(...arguments);
    Ia(this, "projectId");
    Ia(this, "newestProposalId");
    Ia(this, "creationTime");
    Ia(this, "proposalCount");
    Ia(this, "proposals");
    Ia(this, "proposalsListContainer");
  }
  Fill(p, S, T, b) {
    super.Fill(p, S, T, b, ""), this.projectId = this.id, this.newestProposalId = "", this.creationTime = "", this.proposalCount = 0;
  }
}
class DI extends HE {
  constructor() {
    super(...arguments);
    Ia(this, "proposalId");
    Ia(this, "projectId");
    Ia(this, "creationDate");
  }
  Fill(p, S, T, b, y) {
    super.Fill(p, S, T, b, y), this.proposalId = this.id, this.creationDate = "";
  }
}
async function AI(c, v) {
  const p = async (S) => {
    try {
      await (await import(S)).default(v, c);
    } catch (T) {
      console.log("error in terrain worker initiator", T);
    }
  };
  if (v && c) {
    let S = ai.FormatConceptualWorkerUrl();
    p(S);
  }
}
function MI() {
  function c(Ee, Te) {
    Ee.then(Te).catch((Re) => console.log(Re));
  }
  function v(Ee) {
    try {
      let Te = Ee !== null && Ee.length > 0;
      if (document.getElementById("message").style.display = Te ? "block" : "none", Te) {
        Qe || (Z("info"), P(""));
        let Re = Ee.map((pe) => {
          var re = new HE();
          return re.Fill(pe.id, pe.name, pe.version, pe.metadata, pe.urn), re;
        });
        Ce(Re), Re.length > 0 && T(Re[0].id);
      }
    } catch {
      const Re = "Unable to read workspaces";
      throw Z("error"), P(Re), new Error(Re);
    }
  }
  async function p(Ee) {
    try {
      let Te = Ee.filter((Re) => Re.metadata !== null && !Re.metadata.isDraft && Re.version !== 1).map((Re) => {
        var pe = new kI();
        pe.Fill(Re.id, Re.name, Re.version, Re.metadata);
        let ke = new Date().getTime() - Re.created, _ = Math.floor(ke / (1e3 * 24 * 60 * 60));
        return pe.creationTime = _ == 0 ? "Today" : `${_} days ago`, pe;
      });
      await S(Te), Qe || (Z("info"), P(""));
    } catch {
      const Re = "Unable to read projects from selected workspace";
      throw Z("error"), P(Re), new Error(Re);
    }
  }
  async function S(Ee) {
    try {
      for (const Te of Ee)
        await ai.getProposals(Te.projectId).then((Re) => {
          Te.proposals = Re.map((pe) => {
            var re = new DI();
            const ke = pe.urn.split(":");
            let _ = ke[ke.length - 2], le = ke[ke.length - 1], ne = pe.properties.name;
            re.Fill(_, ne, le, pe.metadata, pe.urn);
            let fe = new Date(pe.metadata.createdAt), ve = fe.getHours(), De = fe.getMinutes();
            return fe.getDate() === new Date().getDate() ? re.creationDate = `Today ${ve}:${De} ${ve < 12 ? "AM" : "PM"}` : re.creationDate = `${fe.toLocaleString()}`, re.projectId = Te.projectId, me && me.id === re.id && (_e(re), Qe && od(Te.projectId, me.proposalId).then((z) => {
              vt[z.urn] = z;
            })), re;
          }), Te.proposals.sort(function(pe, re) {
            return new Date(pe.metadata.createdAt).getTime() - new Date(re.metadata.createdAt).getTime();
          }), Te.proposals.length > 0 && (Te.newestProposalId = Te.proposals[0].id, Te.urn = Te.proposals[0].urn, Te.proposalCount = Te.proposals.length), Te.proposalsListContainer = `project-${Te.projectId}-proposals-list`;
        });
      V(Ee), Qe ? H !== "error" && lt(!1) : (Z("info"), P(""));
    } catch {
      const Re = "Unable to read proposals from projects";
      throw Z("error"), P(Re), new Error(Re);
    }
  }
  function T(Ee) {
    c(
      ai.getProjects(Ee),
      p.bind(this)
    );
  }
  function b() {
    let Ee = document.getElementById("workspace-select");
    Ee !== null && T(Ee.value);
  }
  async function y(Ee) {
    if (ce !== null && (ce == null ? void 0 : ce.projectId) === Ee)
      ae(null), _e(null);
    else {
      let Te = ee == null ? void 0 : ee.filter((Re) => Re.projectId == Ee);
      ae(Te !== null ? Te[0] : null);
    }
    k("");
  }
  async function N(Ee) {
    if (me !== null && (me == null ? void 0 : me.proposalId) === Ee)
      _e(null), Ee = "";
    else if (ce !== null) {
      let Te = ce.proposals.filter((Re) => Re.proposalId == Ee);
      Te !== null && Te.length > 0 ? (_e(Te[0]), od(ce.projectId, Te[0].proposalId).then((Re) => {
        vt[Re.urn] = Re;
      })) : _e(null);
    } else
      _e(null);
    k(Ee);
  }
  async function k(Ee) {
    const Te = ce !== null && (ce == null ? void 0 : ce.projectId) !== "" && Ee !== "";
    let Re = document.getElementById("sync-btn"), pe = document.getElementById("load-btn");
    if (Re !== null) {
      let re = Re, ke = !Te;
      re.disabled = ke, ke ? re.classList.contains("disabled") || re.classList.add("disabled") : re.classList.remove("disabled");
    }
    if (pe !== null) {
      let re = pe, ke = !Te;
      re.disabled = ke, ke ? re.classList.contains("disabled") || re.classList.add("disabled") : re.classList.remove("disabled");
    }
  }
  async function M() {
    let Ee = document.getElementById("working-container");
    Ee.style.display = "flex";
    let Te = document.getElementById("plugin-container");
    Te.classList.add("disabled");
    let Re = document.getElementById("message");
    Re.className = "info", Re.textContent = "Loading datas from Forma...", FormIt.NewFile(!0), AI(me.projectId, me.proposalId), Uy.fetchAndLoadElements(
      [],
      me,
      async (pe, re, ke) => {
        Z(pe ? "success" : "error"), P(pe ? "Datas have been loaded from Forma" : "Loading failed"), Ee.style.display = "none", Te.classList.remove("disabled"), await j(), Dv("elements", re), Dv("loadedIntegrate", ke);
      }
    );
  }
  async function j() {
    const Ee = /* @__PURE__ */ new Map();
    (await WSM.APIGetAllReachableHistoriesReadOnly(
      Tt,
      !1
    )).forEach(async (Re) => {
      const pe = await WSM.APIGetIdOfActiveDeltaReadOnly(Re);
      Ee.set(Re, pe), Dv("mapHistoryIdToInitialDeltaId", Ee);
    });
  }
  function A() {
    let Ee = document.getElementById("projectlist-container");
    Ee.classList.add("disabled");
    let Te = document.getElementById("message");
    Te.className = "info", Te.textContent = "Sending datas to Forma...";
    let Re = ce.projectId;
    Uy.save(
      {
        projectId: Re,
        proposal: me,
        elementResponseMap: vt,
        terrainElevationTransf3d: Et,
        loadedIntegrateElements: mt,
        mapHistoryIdToInitialDeltaId: Fe
      },
      (pe) => {
        lt(!0), pe && (typeof pe == "string" || pe instanceof String) ? (Z("error"), P(`Synchronization failed: ${pe}`)) : (Z(pe ? "success" : "error"), P(pe ? "Datas have been synchronized successfully on Forma" : "Synchronization failed")), Ee.classList.remove("disabled");
      }
    );
  }
  const [B, P] = Wn.useState(""), [H, Z] = Wn.useState("info"), [J, Ce] = Wn.useState(), [ce, ae] = Wn.useState(null), [ee, V] = Wn.useState(), [me, _e] = Wn.useState(null), [Qe, lt] = Wn.useState(!1), [vt] = Ry("elements"), [mt] = Ry("loadedIntegrate"), [Et] = Ry("terrainElevationTransf3d"), [Fe] = Ry("mapHistoryIdToInitialDeltaId");
  return Wn.useEffect(() => {
    let Ee = document.getElementById("sync-btn");
    Ee !== null && (Ee.disabled = !0);
    let Te = document.getElementById("load-btn");
    Te !== null && (Te.disabled = !0);
  }, []), Wn.useEffect(() => {
    c(
      ai.getWorkspaces(),
      v.bind(this)
    );
  }, [Qe]), /* @__PURE__ */ na("div", { id: "FormaControls", className: "col-md-12", children: [
    /* @__PURE__ */ na("div", { id: "working-container", className: "hidden", children: [
      /* @__PURE__ */ Ke(
        "img",
        {
          id: "working-screen",
          src: "assets/favicon.svg",
          width: "115",
          height: "115"
        }
      ),
      /* @__PURE__ */ Ke("label", { children: "Fetching from Forma..." })
    ] }),
    /* @__PURE__ */ na("div", { id: "plugin-container", className: "plugin", children: [
      /* @__PURE__ */ na("div", { id: "plugin-content", children: [
        /* @__PURE__ */ Ke(
          "select",
          {
            id: "workspace-select",
            className: "fetchSelect",
            onChange: b.bind(this),
            defaultValue: "",
            children: J == null ? void 0 : J.map(({ id: Ee, name: Te }) => /* @__PURE__ */ Ke("option", { value: Ee, children: Te }, Ee))
          }
        ),
        /* @__PURE__ */ Ke(
          OI,
          {
            projects: ee,
            projectSelectionHandler: y,
            proposalSelectionHandler: N,
            selectedProjectId: ce == null ? void 0 : ce.projectId,
            selectedProposalId: me == null ? void 0 : me.proposalId
          }
        ),
        /* @__PURE__ */ na("div", { id: "action", children: [
          /* @__PURE__ */ Ke("button", { className: "st blue disabled", id: "load-btn", onClick: M, children: "Fetch from Forma" }),
          /* @__PURE__ */ Ke("button", { className: "st gray disabled", id: "sync-btn", onClick: A, children: "Send to Forma" })
        ] })
      ] }),
      /* @__PURE__ */ Ke("label", { id: "message", className: H, children: B })
    ] })
  ] });
}
function LI() {
  let c = window.location.href.indexOf("loggedIn=1") > -1, v = Uy.getCookie("ajs_user_id"), p = null;
  return c = c || v !== null, c ? p = /* @__PURE__ */ Ke(MI, {}) : p = /* @__PURE__ */ na("div", { id: "LoginControls", className: "", children: [
    /* @__PURE__ */ Ke("h4", { children: "Start plugin to select a project" }),
    /* @__PURE__ */ na("button", { id: "LoginButton", className: "button is-link", onClick: nN.login, children: [
      /* @__PURE__ */ Ke("span", { children: "Start plugin" }),
      /* @__PURE__ */ Ke("i", { className: "fab fa-github fa-lg" })
    ] })
  ] }), { loggedIn: c, node: p };
}
function NI() {
  const [c, v] = Wn.useState(!1), [p, S] = Wn.useState(/* @__PURE__ */ Ke(Jl, {}));
  return Wn.useEffect(() => {
    let T = LI();
    T !== null && (v(T.loggedIn), S(T.node));
  }, []), /* @__PURE__ */ Ke("div", { id: "PluginWrapper", children: /* @__PURE__ */ na("div", { id: "PluginContainer", children: [
    /* @__PURE__ */ Ke("h1", { className: "title", children: "FormIt-Forma" }),
    /* @__PURE__ */ Ke("h3", { className: "title", children: "Send data between FormIt and Forma" }),
    /* @__PURE__ */ Ke("div", { id: "AppControls", children: /* @__PURE__ */ Ke("div", { className: "container mt-3", children: /* @__PURE__ */ Ke("div", { id: "app", children: p }) }) }),
    /* @__PURE__ */ na("div", { id: "NoAccess", hidden: !0, children: [
      /* @__PURE__ */ Ke("div", { children: /* @__PURE__ */ Ke("div", { className: "alertIcon" }) }),
      /* @__PURE__ */ na("div", { children: [
        "It looks like your web browser is in private or incognito mode. FormIt-Forma plugin needs to save data to the local storage, so it can only be used in standard browsing mode.",
        /* @__PURE__ */ Ke("br", {}),
        /* @__PURE__ */ Ke("br", {}),
        "To use FormIt-Forma Plugin, please switch to standard browsing mode."
      ] })
    ] })
  ] }) });
}
const II = xv.createRoot(
  document.getElementById("root")
);
II.render(
  /* @__PURE__ */ Ke(Jl, { children: /* @__PURE__ */ Ke("div", { id: "MainControls", children: /* @__PURE__ */ Ke(NI, {}) }) })
);
//# sourceMappingURL=formit-plugin.mjs.map
