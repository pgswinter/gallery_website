webpackHotUpdate(0,{

/***/ "cCw8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("O27J");

var _AppCart = __webpack_require__("z7GU");

var _AppCart2 = _interopRequireDefault(_AppCart);

var _cart_store = __webpack_require__("cKAp");

var _cart_store2 = _interopRequireDefault(_cart_store);

var _reactRedux = __webpack_require__("RH2O");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
	product: {
		name: 'hammer',
		id: 13
	}
};

var store = (0, _cart_store2.default)(initialState);

(0, _reactDom.render)(_react2.default.createElement(
	_reactRedux.Provider,
	{ store: store },
	_react2.default.createElement(_AppCart2.default, null)
), document.getElementById('app-cart'));

/***/ }),

/***/ "cKAp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = configureStore;

var _redux = __webpack_require__("2KeS");

var _reducers = __webpack_require__("OzIH");

var _reducers2 = _interopRequireDefault(_reducers);

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

	return finalCreateStore(_reducers2.default, initialState);
}

/***/ }),

/***/ "oXyX":
false

})
//# sourceMappingURL=modules.map