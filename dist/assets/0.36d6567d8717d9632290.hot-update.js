webpackHotUpdate(0,{

/***/ "Hpfm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__("olLp");

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToDoInput = function (_Component) {
	_inherits(ToDoInput, _Component);

	function ToDoInput(props, context) {
		_classCallCheck(this, ToDoInput);

		var _this = _possibleConstructorReturn(this, (ToDoInput.__proto__ || Object.getPrototypeOf(ToDoInput)).call(this, props, context));

		_this.state = {
			inputText: ''
		};
		return _this;
	}

	// deleteLetter(){
	// take current this.state.inputText
	// delete letter
	// update state
	// this.setState({
	// inputText: this.state.inputText.substring(0,this.state.inputText.length-1)
	// })
	// }

	_createClass(ToDoInput, [{
		key: 'handleChange',
		value: function handleChange(e) {
			this.setState({
				inputText: e.target.value
			});
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit(e) {
			e.preventDefault();
			this.props.dispatch(_actions2.default.addTodo(this.state.inputText));
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'form',
					{ action: '', onSubmit: this.handleSubmit.bind(this) },
					_react2.default.createElement('input', {
						type: 'text',
						placeholder: 'Type in yout todo',
						value: this.state.inputText,
						onChange: this.handleChange.bind(this)
					}),
					_react2.default.createElement(
						'button',
						{ onClick: this.handleSubmit.bind(this) },
						'Submit'
					)
				)
			);
		}
	}]);

	return ToDoInput;
}(_react.Component);

exports.default = ToDoInput;

/***/ })

})
//# sourceMappingURL=modules.map