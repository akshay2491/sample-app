import React from 'react';

export default class CreateTodos extends React.Component {
	
	constructor () {
		super();

		this.state = {
			error: null
		}
	}
	render() {
		return (
			<form onSubmit={this.handleCreate.bind(this)}>
				<input type='text' ref='createInput' />
				<button>Add</button>
				{this.renderError()}
			</form>
		);
	}

	renderError () {
		if(!this.state.error) {return null;}

		return <div>{this.state.error}</div>
	}

	handleCreate(event) {
		event.preventDefault();
		const createInput = this.refs.createInput;
		const task = createInput.value;
		const validateInput =this.validateInput(task);

		if(validateInput) {
			this.setState({error:validateInput});
			return;
		}
		this.setState({error:null});

		this.props.createTask(task);
		this.refs.createInput.value = '';
	}

	validateInput(task) {
		if(!task) {
			return 'Please enter the task';
		} else if(_.find(this.props.todos,todos => todos.task === task))
		 return 'Task already present';

		 else
		 	return null;
	}
}