webpackHotUpdate(0,{

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
	users: _userReducer2.default
});

exports.default = rootReducer;

/***/ })

})
//# sourceMappingURL=modules.map