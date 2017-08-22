webpackHotUpdate(0,{

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

var finalCreateStore = {};

function configureStore() {
	var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { todos: [] };

	return (0, _redux.createStore)(_reducer2.default, initialState);
}

/***/ })

})
//# sourceMappingURL=modules.map