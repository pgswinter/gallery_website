webpackHotUpdate(0,{

/***/ "2KgV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__("2KeS");

var _todoReducer = __webpack_require__("uucT");

var _todoReducer2 = _interopRequireDefault(_todoReducer);

var _userReducer = __webpack_require__("9HJP");

var _userReducer2 = _interopRequireDefault(_userReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
	todos: _todoReducer2.default
});

exports.default = rootReducer;

/***/ }),

/***/ "9HJP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var userReducer = function userReducer() {
	var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	switch (action.type) {
		case 'CREATE_USER_ID':
			return {
				username: user.username,
				id: action.id
			};
		default:
			return user;
	}
};

exports.default = userReducer;

/***/ }),

/***/ "uucT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function getId(todos) {
	return todos.reduce(function (maxId, todo) {
		return Math.max(todo.id, maxId);
	}, -1) + 1;
}

var todoReducer = function todoReducer() {
	var todos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var action = arguments[1];

	switch (action.type) {
		case 'ADD_TODO':
			console.log('got to correct to do case');
			return [{
				text: action.text,
				complete: false,
				id: getId(todos)
			}].concat(_toConsumableArray(todos));
		case 'COMPLETE_TODO':
			return todos.map(function (todo) {
				return todo.id === action.id ? Object.assign({}, todo, { completed: !todo.completed }) : todo;
			});
		case 'DELETE_TODO':
			return todos.filter(function (todo) {
				return todo.id !== action.id;
			});
		default:
			return todos;
	}
};

exports.default = todoReducer;

/***/ })

})
//# sourceMappingURL=modules.map