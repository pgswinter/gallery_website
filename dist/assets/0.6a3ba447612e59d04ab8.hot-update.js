webpackHotUpdate(0,{

/***/ "IxWO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("O27J");

var _store = __webpack_require__("hDKS");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initalState = {
	todos: [{
		id: 0,
		completed: false,
		text: 'Hello World'
	}]
};
// import App from '../components/App'


var store = (0, _store2.default)(initalState);

(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('app'));

/***/ })

})
//# sourceMappingURL=modules.map