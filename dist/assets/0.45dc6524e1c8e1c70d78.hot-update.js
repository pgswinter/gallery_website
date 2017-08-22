webpackHotUpdate(0,{

/***/ "cCw8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("O27J");

var _AppCart = __webpack_require__("z7GU");

var _AppCart2 = _interopRequireDefault(_AppCart);

var _store = __webpack_require__("oXyX");

var _store2 = _interopRequireDefault(_store);

var _reactRedux = __webpack_require__("RH2O");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
	product: {
		name: 'kurt',
		id: 13
	}
};

var store = (0, _store2.default)(initialState);

(0, _reactDom.render)(_react2.default.createElement(
	_reactRedux.Provider,
	{ store: store },
	_react2.default.createElement(_AppCart2.default, null)
), document.getElementById('app-cart'));

/***/ })

})
//# sourceMappingURL=modules.map