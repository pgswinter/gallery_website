webpackHotUpdate(0,{

/***/ "olLp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var actions = {
	addTodo: function addTodo(text) {
		return {
			type: 'ADD_TODO',
			text: text
		};
	},

	completeTodo: function completeTodo(id) {
		return {
			type: 'COMPLETE_TODO',
			id: id
		};
	},

	deleteTodo: function deleteTodo(id) {
		return {
			type: 'DELETE_TODO',
			id: id
		};
	},

	createNewUserId: function createNewUserId() {
		return {
			type: 'CREATE_USER_ID',
			id: Math.round(Math.random() * 100)
		};
	},

	createNewUserIdIfOdd: function createNewUserIdIfOdd() {
		return function (dispatch, getState) {
			var _getState = getState(),
			    user = _getState.user;

			if (user.id % 2 === 0) {}
		};
	}
};

exports.default = actions;

// dispatch looks like a argument to inject(injection) to each of actions at another place - example: store
// dispatch(addTodo('some text'))

/***/ })

})
//# sourceMappingURL=modules.map