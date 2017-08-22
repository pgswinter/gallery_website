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
					{ htmlFor: "", className: "id-product" },
					this.props.product.id
				),
				_react2.default.createElement(
					"label",
					{ className: "name-product" },
					this.props.product.name
				),
				_react2.default.createElement(
					"label",
					{ htmlFor: "", className: "price-product" },
					this.props.product.price
				),
				_react2.default.createElement(
					"a",
					{ href: "" },
					"Buy"
				)
			);
		}
	}]);

	return ProductItem;
}(_react.Component);

exports.default = ProductItem;

/***/ }),

/***/ "7iWm":
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

var UserInfo = function (_Component) {
	_inherits(UserInfo, _Component);

	function UserInfo() {
		_classCallCheck(this, UserInfo);

		return _possibleConstructorReturn(this, (UserInfo.__proto__ || Object.getPrototypeOf(UserInfo)).apply(this, arguments));
	}

	_createClass(UserInfo, [{
		key: 'handleNewId',
		value: function handleNewId() {
			this.props.actions.createNewUserId();
		}
	}, {
		key: 'handleNewIdIfOdd',
		value: function handleNewIdIfOdd() {
			this.props.actions.createNewUserIdIfOdd();
		}
	}, {
		key: 'handleNewIdAsync',
		value: function handleNewIdAsync() {
			this.props.actions.createNewUserIdAsync();
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'li',
				null,
				_react2.default.createElement(
					'div',
					null,
					'username: ',
					this.props.user.username
				),
				_react2.default.createElement(
					'div',
					null,
					'id: ',
					this.props.user.id
				),
				_react2.default.createElement(
					'button',
					{ onClick: this.handleNewId.bind(this) },
					'Update with random ID'
				),
				_react2.default.createElement(
					'button',
					{ onClick: this.handleNewIdIfOdd.bind(this) },
					'Update only if Odd'
				),
				_react2.default.createElement(
					'button',
					{ onClick: this.handleNewIdAsync.bind(this) },
					'Update async'
				)
			);
		}
	}]);

	return UserInfo;
}(_react.Component);

exports.default = UserInfo;

/***/ }),

/***/ "rlgs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _ProductList = __webpack_require__("rlgs");

var _ProductList2 = _interopRequireDefault(_ProductList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductList = function (_Component) {
	_inherits(ProductList, _Component);

	function ProductList() {
		_classCallCheck(this, ProductList);

		return _possibleConstructorReturn(this, (ProductList.__proto__ || Object.getPrototypeOf(ProductList)).apply(this, arguments));
	}

	_createClass(ProductList, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'ul',
				null,
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(_ProductList2.default, null)
				)
			);
		}
	}]);

	return ProductList;
}(_react.Component);

exports.default = ProductList;

/***/ }),

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