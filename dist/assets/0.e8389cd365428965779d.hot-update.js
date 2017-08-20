webpackHotUpdate(0,{

/***/ "94jC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var reducer = function reducer(state, action) {
	switch (action.type) {
		case 'RENDER_TEXT':
			return Object.assign({}, state, {
				todos: [{
					text: action.text,
					completed: false
				}].concat(_toConsumableArray(state.todos))
			});
		default:
			return state;
	}
};
exports.default = reducer;

/***/ })

})
//# sourceMappingURL=modules.map