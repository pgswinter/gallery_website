webpackHotUpdate(0,{

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
				)
			);
		}
	}]);

	return UserInfo;
}(_react.Component);

exports.default = UserInfo;

/***/ })

})
//# sourceMappingURL=modules.map