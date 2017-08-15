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
			// dispatch an action
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
				)
			);
		}
	}]);

	return UserInfo;
}(_react.Component);

exports.default = UserInfo;

/***/ }),

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
// Using DISPATCH


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
			// *** Using DISPATCH
			// this.props.dispatch(actions.addTodo(this.state.inputText))
			// *** WITHOUT DISPATCH
			this.props.addTodo(this.state.inputText);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'form',
					{ onSubmit: this.handleSubmit.bind(this) },
					_react2.default.createElement('input', {
						type: 'text',
						placeholder: 'Type in yout todo',
						value: this.state.inputText,
						onChange: this.handleChange.bind(this)
					}),
					_react2.default.createElement('input', { type: 'submit', text: 'Submit' })
				)
			);
		}
	}]);

	return ToDoInput;
}(_react.Component);

exports.default = ToDoInput;

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

var _TodoList = __webpack_require__("zjmV");

var _TodoList2 = _interopRequireDefault(_TodoList);

var _reactRedux = __webpack_require__("RH2O");

var _redux = __webpack_require__("2KeS");

var _actions = __webpack_require__("olLp");

var _actions2 = _interopRequireDefault(_actions);

var _UserInfo = __webpack_require__("7iWm");

var _UserInfo2 = _interopRequireDefault(_UserInfo);

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
			/*
   **** BIND WITH DISPATCH ****
   return (
   	<div>
   		<div className="app"><h1>Todo List</h1></div>
   		<ToDoInput dispatch={this.props.dispatch} />
   		<TodoList dispatch={this.props.dispatch} todos={this.props.todos}/>
   	</div>
   )
   */
			/* BIND WITHOUT DISPATCH */
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
				_react2.default.createElement(_UserInfo2.default, { createNewUserId: '' }),
				_react2.default.createElement(_ToDoInput2.default, { addTodo: this.props.actions.addTodo }),
				_react2.default.createElement(_TodoList2.default, { actions: this.props.actions, todos: this.props.todos })
			);
		}
	}]);

	return App;
}(_react.Component);

function mapStateToProps(state) {
	return state;
}

function mapDispatchToProps(dispatch) {
	return {
		actions: (0, _redux.bindActionCreators)(_actions2.default, dispatch)
	};
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

/***/ }),

/***/ "i00I":
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

var TodoItem = function (_Component) {
	_inherits(TodoItem, _Component);

	function TodoItem() {
		_classCallCheck(this, TodoItem);

		return _possibleConstructorReturn(this, (TodoItem.__proto__ || Object.getPrototypeOf(TodoItem)).apply(this, arguments));
	}

	_createClass(TodoItem, [{
		key: 'handleComplete',
		value: function handleComplete() {
			/* HAVE DISPATCH */
			/* this.props.dispatch(actions.completeTodo(this.props.todo.id)) */
			/* WITHOUT DISPATCH */
			this.props.actions.completeTodo(this.props.todo.id);
		}
	}, {
		key: 'handleDelete',
		value: function handleDelete() {
			/* HAVE DISPATCH */
			/* this.props.dispatch(actions.deleteTodo(this.props.todo.id)) */
			/* WITHOUT DISPATCH */
			this.props.actions.deleteTodo(this.props.todo.id);
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
					this.props.todo.text
				),
				_react2.default.createElement(
					'button',
					{ onClick: this.handleComplete.bind(this) },
					'Mark as completed'
				),
				_react2.default.createElement(
					'button',
					{ onClick: this.handleDelete.bind(this) },
					'Delete todo'
				)
			);
		}
	}]);

	return TodoItem;
}(_react.Component);

exports.default = TodoItem;

/***/ }),

/***/ "olLp":
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: D:/WORKSPACE/PROJECT/picture_workspace/src/components/gallery/redux/actions.js: Identifier directly after number (26:24)\n\n\u001b[0m \u001b[90m 24 | \u001b[39m\t\t\u001b[36mreturn\u001b[39m{\n \u001b[90m 25 | \u001b[39m\t\t\ttype\u001b[33m:\u001b[39m \u001b[32m'CREATE_USER_ID'\u001b[39m\u001b[33m,\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 26 | \u001b[39m\t\t\tid\u001b[33m:\u001b[39m \u001b[33mMath\u001b[39m\u001b[33m.\u001b[39mrandom()\u001b[33m*\u001b[39m\u001b[35m10.\u001b[39mslice(\u001b[35m0\u001b[39m\u001b[33m,\u001b[39m\u001b[35m2\u001b[39m) \u001b[33m*\u001b[39m \u001b[35m100\u001b[39m\n \u001b[90m    | \u001b[39m\t\t\t                     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 27 | \u001b[39m\t\t}\n \u001b[90m 28 | \u001b[39m\t}\n \u001b[90m 29 | \u001b[39m}\u001b[0m\n");

/***/ }),

/***/ "zjmV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _TodoItem = __webpack_require__("i00I");

var _TodoItem2 = _interopRequireDefault(_TodoItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoList = function (_Component) {
	_inherits(TodoList, _Component);

	function TodoList() {
		_classCallCheck(this, TodoList);

		return _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).apply(this, arguments));
	}

	_createClass(TodoList, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'ul',
				null,
				this.props.todos.map(function (todo) {
					/* HAVE DISPATCH */
					/* return <TodoItem key={todo.id} todo={todo} dispatch={this.props.dispatch}/>*/
					/* WITHOUT DISPATCH */
					return _react2.default.createElement(_TodoItem2.default, { key: todo.id, todo: todo, actions: _this2.props.actions });
				})
			);
		}
	}]);

	return TodoList;
}(_react.Component);

exports.default = TodoList;

/***/ })

})
//# sourceMappingURL=modules.map