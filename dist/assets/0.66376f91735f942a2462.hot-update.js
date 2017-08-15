webpackHotUpdate(0,{

/***/ "oXyX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = configureStore;

var _redux = __webpack_require__("2KeS");

var _reducer = __webpack_require__("vlCR");

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: add middleware
var finalCreateStore = {};

function configureStore() {
	var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { todos: [] };

	return finalCreateStore(_reducer2.default, initialState);
}

/***/ }),

/***/ "vlCR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = reducer;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function getId(state) {
	return state.todos.reduce(function (maxId, todo) {
		return Math.max(todo.id, maxId);
	}, -1) + 1;
}

function reducer(state, action) {
	switch (action.type) {
		case 'ADD_TODO':
			Object.assign({}, state, {
				todos: [{
					text: action.text,
					complete: false,
					id: getId(state)
				}].concat(_toConsumableArray(state.todos))
			});
		default:
			return state;
	}
}

/***/ })

})
//# sourceMappingURL=modules.map