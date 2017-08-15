webpackHotUpdate(0,{

/***/ "9HJP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var userReducer = function userReducer() {
	var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	switch (action.type) {
		case 'CREATE_USER_ID':
			return Object.assign({}, {
				user: {
					username: user.username,
					id: action.id
				}
			});
		default:
			return user;
	}
};

exports.default = userReducer;

/***/ })

})
//# sourceMappingURL=modules.map