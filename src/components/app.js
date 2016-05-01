import React from 'react';
import TodoItems from './todo-items-list';

const todos = [
	{
		task :'get up at 5am',
		isCompleted: false
	},{
		task :'buy some milk',
		isCompleted: true
	}];

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos
		}
	}
	
	render() {
		return (
			<div>
				<h1>ToDo app</h1>
				<TodoItems todos ={this.state.todos}/>
			</div>
		);
	}
}