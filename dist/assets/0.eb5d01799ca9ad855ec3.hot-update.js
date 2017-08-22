webpackHotUpdate(0,{

/***/ "z7GU":
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

var _reactRedux = __webpack_require__("RH2O");

var _redux = __webpack_require__("2KeS");

var _cart_actions = __webpack_require__("xu7D");

var _cart_actions2 = _interopRequireDefault(_cart_actions);

var _Cart = __webpack_require__("qqCb");

var _Cart2 = _interopRequireDefault(_Cart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import TextInput from './TextInput'


var AppCart = function (_Component) {
	_inherits(AppCart, _Component);

	function AppCart() {
		_classCallCheck(this, AppCart);

		return _possibleConstructorReturn(this, (AppCart.__proto__ || Object.getPrototypeOf(AppCart)).apply(this, arguments));
	}

	_createClass(AppCart, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_ProductList2.default, null),
				_react2.default.createElement(_Cart2.default, null)
			);
		}
	}]);

	return AppCart;
}(_react.Component);

function mapStateToProps(state) {
	return state;
}

function mapDispatchToProps(dispatch) {
	return {
		actions: (0, _redux.bindActionCreators)(_cart_actions2.default, dispatch)
	};
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AppCart);

/***/ })

})
//# sourceMappingURL=modules.map