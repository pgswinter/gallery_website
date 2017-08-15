webpackHotUpdate(0,{

/***/ "/zzY":
false,

/***/ "0oQ4":
false,

/***/ "0qoN":
false,

/***/ "1VmT":
false,

/***/ "1msk":
false,

/***/ "1nM6":
false,

/***/ "2+NM":
false,

/***/ "2gn9":
false,

/***/ "2ij6":
false,

/***/ "34H3":
false,

/***/ "3xMo":
false,

/***/ "4kSj":
false,

/***/ "5JGd":
false,

/***/ "5iyq":
false,

/***/ "5oUk":
false,

/***/ "6c1q":
false,

/***/ "7ofs":
false,

/***/ "7p8o":
false,

/***/ "8dLB":
false,

/***/ "8wGY":
false,

/***/ "9CHI":
false,

/***/ "9DDo":
false,

/***/ "9G4n":
false,

/***/ "AHT0":
false,

/***/ "BxZd":
false,

/***/ "CCiT":
false,

/***/ "DdOc":
false,

/***/ "GUxi":
false,

/***/ "IHon":
false,

/***/ "IJyq":
false,

/***/ "Jozb":
false,

/***/ "JwrG":
false,

/***/ "KgGA":
false,

/***/ "L94v":
false,

/***/ "LTWT":
false,

/***/ "LXg4":
false,

/***/ "MDEo":
false,

/***/ "Nfe4":
false,

/***/ "Olpr":
false,

/***/ "PySz":
false,

/***/ "QSv/":
false,

/***/ "T51W":
false,

/***/ "TLAG":
false,

/***/ "TzBB":
false,

/***/ "VD6g":
false,

/***/ "VGKQ":
false,

/***/ "VZrU":
false,

/***/ "W36v":
false,

/***/ "WHlL":
false,

/***/ "WMlg":
false,

/***/ "WNtH":
false,

/***/ "Y2CE":
false,

/***/ "YXmp":
false,

/***/ "Yg0w":
false,

/***/ "ZWgy":
false,

/***/ "ZoCq":
false,

/***/ "a1Jc":
false,

/***/ "a6WQ":
false,

/***/ "aI9I":
false,

/***/ "aItA":
false,

/***/ "baqs":
false,

/***/ "c7Hc":
false,

/***/ "d9CK":
false,

/***/ "eIrJ":
false,

/***/ "ewb2":
false,

/***/ "f9Rl":
false,

/***/ "fE2x":
false,

/***/ "fq1W":
false,

/***/ "gb4J":
false,

/***/ "ggla":
false,

/***/ "go26":
false,

/***/ "guk2":
false,

/***/ "hnYP":
false,

/***/ "iTQZ":
false,

/***/ "jnMA":
false,

/***/ "k/l/":
false,

/***/ "kdUt":
false,

/***/ "lAZW":
false,

/***/ "lm8W":
false,

/***/ "ltne":
false,

/***/ "oZoq":
false,

/***/ "olLp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var actions = {
	addTodo: function addTodo(text) {
		return {
			type: 'ADD_TODO',
			text: text
		};
	},

	completeTodo: function completeTodo(id) {
		return {
			type: 'COMPLETE_TODO',
			id: id
		};
	},

	deleteTodo: function deleteTodo(id) {
		return {
			type: 'DELETE_TODO',
			id: id
		};
	},

	createNewUserId: function createNewUserId() {
		return {
			type: 'CREATE_USER_ID',
			id: Math.round(Math.random() * 100)
		};
	},

	createNewUserIdIfOdd: function createNewUserIdIfOdd() {
		return function (dispatch, getState) {
			var _getState = getState(),
			    user = _getState.user;

			if (user.id % 2 === 0) {
				return;
			}
			dispatch(actions.createNewUserId());
		};
	},

	createNewUserIdAsync: function createNewUserIdAsync() {
		return function (dispatch) {
			// $.get('url',{
			// 	success: (res) =>{
			// 		dispatch(createNewUserId(res.data))
			// 	}
			// })
			setTimeout(function () {
				dispatch(actions.createNewUserId());
			}, 2500);
		};
	}
};

exports.default = actions;

// dispatch looks like a argument to inject(injection) to each of actions at another place - example: store
// dispatch(addTodo('some text'))

/***/ }),

/***/ "q1LG":
false,

/***/ "qJxw":
false,

/***/ "qtBK":
false,

/***/ "rTPn":
false,

/***/ "rY9R":
false,

/***/ "rYQx":
false,

/***/ "te80":
false,

/***/ "u4TT":
false,

/***/ "ukCe":
false,

/***/ "unGK":
false,

/***/ "uqwf":
false,

/***/ "vKSX":
false,

/***/ "vQGr":
false,

/***/ "wVWF":
false,

/***/ "wgNQ":
false,

/***/ "x8As":
false,

/***/ "ypSt":
false,

/***/ "z06B":
false,

/***/ "zkvI":
false,

/***/ "zpla":
false

})
//# sourceMappingURL=modules.map