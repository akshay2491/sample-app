import _ from 'lodash';
import React from 'react';
import TodoItemsHeader from './todo-item-header';
import TodosListItem from './todo-list-item';
import CreateTodos from './create-todo';

export default class TodoItems extends React.Component {
	renderItems() {
		const props =_.omit(this.props,'todos')
		return _.map(this.props.todos,(todo,index) => <TodosListItem key={index} {...todo} {...props} />);
	}

	render() {
		return (
			<table>
				<TodoItemsHeader />
				<tbody>
				{this.renderItems()}
				</tbody>
			</table>	
		);
	}
}