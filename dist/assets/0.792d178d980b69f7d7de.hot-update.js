webpackHotUpdate(0,{

/***/ "TQP2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("O27J");

var _App = __webpack_require__("KMf1");

var _App2 = _interopRequireDefault(_App);

var _store = __webpack_require__("oXyX");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
	todos: [{
		id: 0,
		completed: false,
		text: 'Initial todo for demo purchase'
	}]
};

var store = configureStore(initialState);

(0, _reactDom.render)(_react2.default.createElement(_App2.default, null), document.getElementById('app'));

/***/ })

})
//# sourceMappingURL=modules.map