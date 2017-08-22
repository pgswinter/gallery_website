webpackHotUpdate(0,{

/***/ "2KgV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__("2KeS");

var _cartReducer = __webpack_require__("4jel");

var _cartReducer2 = _interopRequireDefault(_cartReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
	cart: _cartReducer2.default
});

exports.default = rootReducer;

/***/ }),

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

/***/ "uucT":
false

})
//# sourceMappingURL=modules.map