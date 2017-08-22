import React, {Component} from 'react'
import {connect} from 'react-redux'

class App extends Component{
	constructor(props, context){
		super(props, context)
		this.state = {
			inputText: 'App here'
		}
	}

	renderText(){
		console.log('prepare loading ...')
	}
	render(){
		return(
			<div>
				<p>state was initial from App: {this.state.inputText}</p>
				<p>state will be changed. Data get from a Object at Client. Process at Store. Connect by Dispatch. Solution will be process at Actions. Result: {
					this.props.todos.map(todo=>{
						return <span key={todo.id}>{todo.text}</span>
					})
				}</p>
			</div>
		)
	}
}

function mapStateToProps(state){
	return state;
}

export default connect(mapStateToProps)(App)