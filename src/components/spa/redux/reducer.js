let reducer = function(state,action){
	switch(action.type){
		case 'RENDER_TEXT':
			return Object.assign({},state,{
				todos:[{
					text: action.text,
					completed: false
				}, ...state.todos]
			})
		default:
			return state;
	}
		
}
export default reducer