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
					<button onClick={this.clickEdit.bind(this)}>Save</button>
					<button onClick={this.onCancel.bind(this)}>cancel</button>
				</td>
			)

		return (
				<td>
				<button onClick={this.clickEdit.bind(this)}>Edit</button>
				<button>Delete</button>
				</td>
			)
	}

	render() {
		return (
			<tr>
				<td>{this.props.task}</td>
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
}