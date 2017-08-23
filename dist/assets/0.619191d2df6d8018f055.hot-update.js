webpackHotUpdate(0,{

/***/ "JyrS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("RH2O");

var _actions = __webpack_require__("Wl4n");

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
	_inherits(App, _Component);

	function App(props, context) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props, context));

		_this.state = {
			inputText: 'App here'
		};
		return _this;
	}

	_createClass(App, [{
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
			console.log('xxx');
			this.props.dispatch(renderText(this.state.inputText));
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'p',
					null,
					'state was initial from App: ',
					this.state.inputText
				),
				_react2.default.createElement(
					'p',
					null,
					'state will be changed. Data get from a Object at Client. Process at Store. Connect by Dispatch. Solution will be process at Actions. Result: ',
					this.props.todos.map(function (todo) {
						return _react2.default.createElement(
							'span',
							{ key: todo.id },
							todo.text
						);
					})
				),
				_react2.default.createElement('input', { type: 'text', value: this.state.inputText, onChange: this.handleChange.bind(this) }),
				_react2.default.createElement('button', { type: 'submit', onSubmit: this.handleSubmit.bind(this) })
			);
		}
	}]);

	return App;
}(_react.Component);

function mapStateToProps(state) {
	return state;
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ }),

/***/ "Wl4n":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var actions = {
	renderText: function renderText(text) {
		return {
			type: 'RENDER_TEXT',
			text: text
		};
	}
};

exports.default = actions;

/***/ })

})
//# sourceMappingURL=modules.map