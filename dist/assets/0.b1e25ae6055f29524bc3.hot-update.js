webpackHotUpdate(0,{

/***/ "2KgV":
false,

/***/ "4jel":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
// function getId(products){
// 	return products.reduce((maxId,products) => {
// 		return Math.max(products.id, maxId)
// 	}, -1) + 1
// }

var productReducer = function productReducer() {
	var product = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	switch (action.type) {
		case 'LINKING':
			return {
				patch_url: product.patch_url,
				id: action.id
				// return products.map((product) => {
				// 	return product.patch_url === product.patch_url ? 
				// 	Object.assign({}, product, {completed: !product.completed}) : product
				// })
				// case 'INFO_PRODUCT':
				// 	return {
				// 		name: products.name,
				// 		price: products.price,
				// 		id: action.id
				// 	}
				// case 'INCREASE_NUMBER':
				// 	return {
				// 		quantity: action.quantity,
				// 	}
				// case 'DECREASE_NUMBER':
				// 	return {
				// 		quantity: action.quantity,
				// 	}
			};default:
			return product;
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
function configureStore() {
	var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { products: [] };

	return finalCreateStore(reducer, initialState);
}

/* ADVANCE REDUCER */
// export default function configureStore(initialState = {product: {}}){
// 	return finalCreateStore(rootReducer, initialState)
// }

/***/ })

})
//# sourceMappingURL=modules.map