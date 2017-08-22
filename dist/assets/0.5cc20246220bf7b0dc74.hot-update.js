webpackHotUpdate(0,{

/***/ "6Htm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductItem = function (_Component) {
	_inherits(ProductItem, _Component);

	function ProductItem() {
		_classCallCheck(this, ProductItem);

		return _possibleConstructorReturn(this, (ProductItem.__proto__ || Object.getPrototypeOf(ProductItem)).apply(this, arguments));
	}

	_createClass(ProductItem, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "product-item" },
				_react2.default.createElement("img", { src: "", alt: "" }),
				_react2.default.createElement(
					"label",
					{ className: "name-product" },
					this.props.product.name
				),
				_react2.default.createElement(
					"label",
					{ htmlFor: "", className: "price-product" },
					this.props.product.price
				)
			);
		}
	}]);

	return ProductItem;
}(_react.Component);

exports.default = ProductItem;

/***/ }),

/***/ "Hpfm":
false,

/***/ "z7GU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _ProductItem = __webpack_require__("6Htm");

var _ProductItem2 = _interopRequireDefault(_ProductItem);

var _TodoList = __webpack_require__("zjmV");

var _TodoList2 = _interopRequireDefault(_TodoList);

var _reactRedux = __webpack_require__("RH2O");

var _redux = __webpack_require__("2KeS");

var _actions = __webpack_require__("olLp");

var _actions2 = _interopRequireDefault(_actions);

var _UserInfo = __webpack_require__("7iWm");

var _UserInfo2 = _interopRequireDefault(_UserInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })

})
//# sourceMappingURL=modules.map