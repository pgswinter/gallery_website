webpackHotUpdate(0,{

/***/ "uucT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function getId(state) {
	return state.todos.reduce(function (maxId, todo) {
		return Math.max(todo.id, maxId);
	}, -1) + 1;
}

var todoReducer = function todoReducer(state, action) {
	switch (action.type) {
		case 'ADD_TODO':
			console.log('got to correct to do case');
			return Object.assign({}, state, {
				todos: [{
					text: action.text,
					complete: false,
					id: getId(state)
				}].concat(_toConsumableArray(state.todos))
			});
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