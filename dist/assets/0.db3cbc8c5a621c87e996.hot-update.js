webpackHotUpdate(0,{

/***/ "9HJP":
false,

/***/ "OzIH":
false,

/***/ "cKAp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = configureStore;

var _redux = __webpack_require__("2KeS");

var _cartReducers = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./reducers/cartReducers\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _cartReducers2 = _interopRequireDefault(_cartReducers);

var _reduxLogger = __webpack_require__("oSVy");

var _reduxThunk = __webpack_require__("4ufr");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: add middleware
var finalCreateStore = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxLogger.createLogger)()))(_redux.createStore);

/*** LEGACY REDUCER */
// export default function configureStore(initialState = {todos: []}){
// 	return finalCreateStore(reducer, initialState)
// }

/* ADVANCE REDUCER */
function configureStore() {
	var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { todos: [], user: {} };

	return finalCreateStore(_cartReducers2.default, initialState);
}

/***/ }),

/***/ "uucT":
false

})
//# sourceMappingURL=modules.map