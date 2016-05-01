import React from 'react';

export default class CreateTodos extends React.Component {
	
	render() {
		return (
			<form onSubmit={this.handleCreate.bind(this)}>
				<input type='text' ref='createInput' />
				<button>Add</button>
			</form>
		);
	}

	handleCreate(event) {
		event.preventDefault();
		console.log(this.refs.createInput)
	}
}