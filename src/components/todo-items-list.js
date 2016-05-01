import _ from 'lodash';
import React from 'react';
import TodoItemsHeader from './todo-item-header';
import TodosListItem from './todo-list-item';
import CreateTodos from './create-todo';

export default class TodoItems extends React.Component {
	renderItems() {
		return _.map(this.props.todos,(todo,index) => <TodosListItem key={index} {...todo} />);
	}

	render() {
		return (
			<table>
				<CreateTodos />
				<TodoItemsHeader />
				<tbody>
				{this.renderItems()}
				</tbody>
			</table>	
		);
	}
}