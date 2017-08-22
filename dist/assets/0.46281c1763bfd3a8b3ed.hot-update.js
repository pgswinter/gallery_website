webpackHotUpdate(0,{

/***/ "9HJP":
false,

/***/ "OzIH":
false,

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

	return finalCreateStore(_reducer2.default, initialState);
}

/***/ }),

/***/ "uucT":
false,

/***/ "vlCR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// function getId(state){
// 	return state.todos.reduce((maxId,todo) => {
// 		return Math.max(todo.id, maxId)
// 	}, -1) + 1
// }

// let reducer = function(state, action){
// 	switch(action.type){
// 		case 'ADD_TODO':
// 			console.log('got to correct to do case')
// 			return Object.assign({},state, {
// 				todos:[{
// 					text: action.text,
// 					complete: false,
// 					id: getId(state)
// 				}, ...state.todos]
// 			})
// 		case 'COMPLETE_TODO':
// 			return Object.assign({}, state, {
// 				todos: state.todos.map((todo) => {
// 					return todo.id === action.id ? 
// 					Object.assign({}, todo, {completed: !todo.completed}) : todo
// 				})
// 			})
// 		case 'DELETE_TODO':
// 			return Object.assign({}, state, {
// 				todos: state.todos.filter((todo) => {
// 					return todo.id !== action.id
// 				})
// 			})
// 		case 'CREATE_USER_ID':
// 			return Object.assign({},state,{
// 				user:{
// 					username: state.user.username,
// 					id: action.id
// 				}
// 			})
// 		default:
// 			return state;
// 	}
// }

// export default reducer


/***/ })

})
//# sourceMappingURL=modules.map