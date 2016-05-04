import React from 'react';
import {Button} from 'react-bootstrap';

export default class TodosListItem extends React.Component {

	constructor(props) {
		super(props);

		this.state= {
			isEditing: false
		}
	}

	changeState () {
		var spacing = 10;
		if(this.state.isEditing) 
			return (
				<td>
					<Button style={{marginLeft:spacing+'px'}} onClick={this.saveTask.bind(this)}>Save</Button>
					<Button style={{marginLeft:spacing+'px'}} bsStyle="primary" onClick={this.onCancel.bind(this)}>Cancel</Button>
				</td>
			)

		return (
				<td>
				<Button style={{marginLeft:spacing+'px'}} onClick={this.clickEdit.bind(this)}>Edit</Button>
				<Button style={{marginLeft:spacing+'px'}} bsStyle="primary" onClick={this.deleteTask.bind(this)}>Delete</Button>
				</td>
			)
	}

	renderTask () {
		const {task , isCompleted} = this.props;
		const taskStyle = {
			textDecoration:isCompleted ? 'line-through':'none',
			cursor: 'pointer'
		};
		const width = 125;
		if(this.state.isEditing) {
			return (
				<td>
				<form onSubmit={this.saveTask.bind(this)}>
					<input style={{width:width+'px'}} type='text' defaultValue={task} ref='newTask'/>
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