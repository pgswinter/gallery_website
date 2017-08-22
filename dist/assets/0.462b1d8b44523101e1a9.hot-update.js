webpackHotUpdate(0,{

/***/ "4jel":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var productReducer = function productReducer() {
	var products = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	switch (action.type) {
		case 'LINKING':
			return products.map(function (product) {
				return product.patch_url === product.patch_url ? Object.assign({}, product, { completed: !product.completed }) : product;
			});
		case 'INFO_PRODUCT':
			return {
				name: products.name,
				price: products.price,
				id: action.id
			};
		case 'INCREASE_NUMBER':
			return {
				quantity: action.quantity
			};
		case 'DECREASE_NUMBER':
			return {
				quantity: action.quantity
			};
		default:
			return products;
	}
};

exports.default = productReducer;

/***/ }),

/***/ "cKAp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = configureStore;

var _redux = __webpack_require__("2KeS");

var _cartReducer = __webpack_require__("4jel");

var _cartReducer2 = _interopRequireDefault(_cartReducer);

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

	return finalCreateStore(_cartReducer2.default, initialState);
}

/***/ })

})
//# sourceMappingURL=modules.map