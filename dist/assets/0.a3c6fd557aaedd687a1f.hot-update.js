webpackHotUpdate(0,{

/***/ "oXyX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = configureStore;

var _redux = __webpack_require__("2KeS");

var _reducer = __webpack_require__("vlCR");

var _reducer2 = _interopRequireDefault(_reducer);

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

	return finalCreateStore(rootReducer, initialState);
}

/***/ })

})
//# sourceMappingURL=modules.map