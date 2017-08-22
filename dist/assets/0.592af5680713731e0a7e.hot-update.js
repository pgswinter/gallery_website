webpackHotUpdate(0,{

/***/ "olLp":
false,

/***/ "xu7D":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var actions = {
	linking: function linking(patch_url) {
		return {
			type: "LINKING",
			patch_url: patch_url
		};
	},
	createInfoProduct: function createInfoProduct() {
		return {
			type: "INFO_PRODUCT",
			id: Math.round(Math.random() * 100)
		};
	},
	increaseNumber: function increaseNumber(quantity) {
		return {
			type: "INCREASE_NUMBER",
			quantity: quantity + 1
		};
	},
	decreaseNumber: function decreaseNumber(quantity) {
		return {
			type: "DECREASE_NUMBER",
			quantity: quantity - 1
		};
	}
};

exports.default = actions;

/***/ }),

/***/ "z7GU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _ProductItem = __webpack_require__("6Htm");

var _ProductItem2 = _interopRequireDefault(_ProductItem);

var _ProductList = __webpack_require__("rlgs");

var _ProductList2 = _interopRequireDefault(_ProductList);

var _reactRedux = __webpack_require__("RH2O");

var _redux = __webpack_require__("2KeS");

var _cart_actions = __webpack_require__("xu7D");

var _cart_actions2 = _interopRequireDefault(_cart_actions);

var _UserInfo = __webpack_require__("7iWm");

var _UserInfo2 = _interopRequireDefault(_UserInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })

})
//# sourceMappingURL=modules.map