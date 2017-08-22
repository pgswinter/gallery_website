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

/***/ }),

/***/ "hDKS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = configureStore;

var _redux = __webpack_require__("2KeS");

var _reducer = __webpack_require__("94jC");

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var finalCreateStore = (0, _redux.compose)((0, _redux.appleMiddleware)(logger()));

function configureStore() {
	var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { todos: [] };

	return (0, _redux.createStore)(_reducer2.default, initialState);
}

/***/ })

})
//# sourceMappingURL=modules.map