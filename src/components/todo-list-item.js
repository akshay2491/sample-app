import React from 'react';

export default class TodosListItem extends React.Component {

	constructor(props) {
		super(props);

		this.state= {
			isEditing: false
		}
	}

	changeState () {
		if(this.state.isEditing) 
			return (
				<td>
					<button onClick={this.saveTask.bind(this)}>Save</button>
					<button onClick={this.onCancel.bind(this)}>cancel</button>
				</td>
			)

		return (
				<td>
				<button onClick={this.clickEdit.bind(this)}>Edit</button>
				<button onClick={this.deleteTask.bind(this)}>Delete</button>
				</td>
			)
	}

	renderTask () {
		const {task , isCompleted} = this.props;
		const taskStyle = {
			color:isCompleted ? 'red':'green',
			cursor: 'pointer'
		};

		if(this.state.isEditing) {
			return (
				<td>
				<form onSubmit={this.saveTask.bind(this)}>
					<input type='text' defaultValue={task} ref='newTask'/>
				</form>
				</td>
			)
		}

		return (
		<td 
		style={taskStyle}
		onClick={this.props.toggleTask.bind(this,task)}
		>
		{task}
		</td>
		);

	}

	render() {
		return (
			<tr>
				{this.renderTask()}
				{this.changeState()}
			</tr>
		);
	}

	clickEdit() {
		this.setState({isEditing: true});
	}

	onCancel() {
		this.setState({isEditing: false});
	}

	saveTask(event) {
		event.preventDefault();
		const oldTask = this.props.task;
		const newTask = this.refs.newTask.value;
		this.props.editButton(oldTask,newTask);
		this.setState({isEditing:false});
	}

	deleteTask () {
		const task = this.props.task;
		this.props.deleteTask(task);
	}
}