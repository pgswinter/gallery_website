webpackHotUpdate(0,{

/***/ "cKAp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = configureStore;

var _redux = __webpack_require__("2KeS");

var _index_cart = __webpack_require__("2KgV");

var _index_cart2 = _interopRequireDefault(_index_cart);

var _reduxLogger = __webpack_require__("oSVy");

var _reduxThunk = __webpack_require__("4ufr");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: add middleware
var finalCreateStore = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxLogger.createLogger)()))(_redux.createStore);

/*** LEGACY REDUCER */
function configureStore() {
	var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { todos: [] };

	return finalCreateStore(reducer, initialState);
}

/* ADVANCE REDUCER */
// export default function configureStore(initialState = {product: {}}){
// 	return finalCreateStore(rootReducer, initialState)
// }

/***/ })

})
//# sourceMappingURL=modules.map