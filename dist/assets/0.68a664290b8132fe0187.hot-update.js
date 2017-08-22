webpackHotUpdate(0,{

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

/***/ "OzIH":
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
	todos: _todoReducer2.default,
	user: _userReducer2.default
});

exports.default = rootReducer;

/***/ }),

/***/ "oXyX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = configureStore;

var _redux = __webpack_require__("2KeS");

var _reducers = __webpack_require__("OzIH");

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxLogger = __webpack_require__("oSVy");

var _reduxThunk = __webpack_require__("4ufr");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: add middleware
var finalCreateStore = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxLogger.createLogger)()))(_redux.createStore);

/*** LEGACY REDUCER */
// export default function configureStore(initialState = {todos: []}){
// 	return finalCreateStore(reducer, initialState)
// }

/* ADVANCE REDUCER */
function configureStore() {
	var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { todos: [], user: {} };

	return finalCreateStore(_reducers2.default, initialState);
}

/***/ }),

/***/ "uucT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function getId(todos) {
	return todos.todos.reduce(function (maxId, todo) {
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

/***/ }),

/***/ "vlCR":
false

})
//# sourceMappingURL=modules.map