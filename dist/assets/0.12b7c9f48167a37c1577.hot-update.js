webpackHotUpdate(0,{

/***/ "4jel":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
function getId(todos) {
	return todos.reduce(function (maxId, todo) {
		return Math.max(todo.id, maxId);
	}, -1) + 1;
}

var productReducer = function productReducer() {
	var products = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
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

/***/ })

})
//# sourceMappingURL=modules.map