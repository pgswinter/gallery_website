webpackHotUpdate(0,{

/***/ "Hpfm":
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: D:/WORKSPACE/PROJECT/picture_workspace/src/components/gallery/components/ToDoInput.js: Unexpected token (1:31)\n\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 1 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mReact\u001b[39m\u001b[33m,\u001b[39m {\u001b[33mComponent\u001b[39m} from react\n \u001b[90m   | \u001b[39m                               \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 2 | \u001b[39m\n \u001b[90m 3 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mTodoInput\u001b[39m \u001b[36mextends\u001b[39m \u001b[33mComponent\u001b[39m{\n \u001b[90m 4 | \u001b[39m\u001b[0m\n");

/***/ }),

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
						'This is React app!'
					)
				),
				_react2.default.createElement(TextInput, null)
			);
		}
	}]);

	return App;
}(_react.Component);

exports.default = App;

/***/ })

})
//# sourceMappingURL=modules.map