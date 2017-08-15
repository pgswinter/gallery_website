webpackHotUpdate(0,{

/***/ "KMf1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _ToDoInput = __webpack_require__("Hpfm");

var _ToDoInput2 = _interopRequireDefault(_ToDoInput);

var _TodoList = __webpack_require__("zjmV");

var _TodoList2 = _interopRequireDefault(_TodoList);

var _reactRedux = __webpack_require__("RH2O");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import TextInput from './TextInput'


var App = function (_Component) {
	_inherits(App, _Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'app' },
					_react2.default.createElement(
						'h1',
						null,
						'Todo List'
					)
				),
				_react2.default.createElement(_ToDoInput2.default, { dispatch: this.props.dispatch }),
				_react2.default.createElement(_TodoList2.default, { dispatch: this.props.dispatch, todos: this.props.todos })
			);
		}
	}]);

	return App;
}(_react.Component);

function mapStateToProps(state) {
	return state;
}

function mapDispatchToProps(dispatch) {}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ })

})
//# sourceMappingURL=modules.map