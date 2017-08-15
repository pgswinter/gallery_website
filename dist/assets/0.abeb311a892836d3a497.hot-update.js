webpackHotUpdate(0,{

/***/ "oXyX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = configureStore;

var _redux = __webpack_require__("2KeS");

var _reducers = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./reducers\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxLogger = __webpack_require__("oSVy");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: add middleware
var finalCreateStore = (0, _redux.compose)((0, _redux.applyMiddleware)((0, _reduxLogger.createLogger)()))(_redux.createStore);

/*** LEGACY REDUCER */
// export default function configureStore(initialState = {todos: []}){
// 	return finalCreateStore(reducer, initialState)
// }

/* ADVANCE REDUCER */
function configureStore() {
	var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { todos: [], user: {} };

	return finalCreateStore(_reducers2.default, initialState);
}

/***/ }),

/***/ "vlCR":
false

})
//# sourceMappingURL=modules.map