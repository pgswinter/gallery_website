webpackHotUpdate(0,{

/***/ "HzY3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _TextDisplay = __webpack_require__("iiSW");

var _TextDisplay2 = _interopRequireDefault(_TextDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextInput = function (_Component) {
	_inherits(TextInput, _Component);

	function TextInput(props, context) {
		_classCallCheck(this, TextInput);

		var _this = _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).call(this, props, context));

		_this.state = {
			inputText: 'initial text'
		};
		return _this;
	}

	_createClass(TextInput, [{
		key: 'deleteLetter',
		value: function deleteLetter() {
			// take current this.state.inputText
			// delete letter
			// update state
			this.setState({
				inputText: this.state.inputText.substring(0, this.state.inputText.length - 1)
			});
		}
	}, {
		key: 'handleChange',
		value: function handleChange(e) {
			this.setState({
				inputText: e.target.value
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement('input', {
					type: 'text',
					placeholder: 'This is going to be text',
					value: this.state.inputText,
					onChange: this.handleChange.bind(this)
				}),
				_react2.default.createElement(_TextDisplay2.default, { text: this.state.inputText, deleteLetter: this.deleteLetter })
			);
		}
	}]);

	return TextInput;
}(_react.Component);

exports.default = TextInput;

/***/ }),

/***/ "iiSW":
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

var TextDisplay = function (_Component) {
	_inherits(TextDisplay, _Component);

	function TextDisplay() {
		_classCallCheck(this, TextDisplay);

		return _possibleConstructorReturn(this, (TextDisplay.__proto__ || Object.getPrototypeOf(TextDisplay)).apply(this, arguments));
	}

	_createClass(TextDisplay, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					null,
					this.props.text
				),
				_react2.default.createElement(
					'button',
					{ onClick: this.handleClick },
					'Delete a text'
				)
			);
		}
	}]);

	return TextDisplay;
}(_react.Component);

exports.default = TextDisplay;

/***/ })

})
//# sourceMappingURL=modules.map