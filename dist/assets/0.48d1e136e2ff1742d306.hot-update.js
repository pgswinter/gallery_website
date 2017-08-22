webpackHotUpdate(0,{

/***/ "IxWO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("O27J");

var _App = __webpack_require__("JyrS");

var _App2 = _interopRequireDefault(_App);

var _store = __webpack_require__("hDKS");

var _store2 = _interopRequireDefault(_store);

var _reactRedux = __webpack_require__("RH2O");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
	todos: 'hello world'
};

var store = (0, _store2.default)(initialState);

(0, _reactDom.render)(_react2.default.createElement(
	_reactRedux.Provider,
	{ store: store },
	_react2.default.createElement(_App2.default, null)
), document.getElementById('app'));

/***/ })

})
//# sourceMappingURL=modules.map