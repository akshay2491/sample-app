import React from 'react';
import TodoItems from './todo-items-list';
import CreateTodos from './create-todo';
import {Jumbotron} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Navbar,Grid,Row,Col} from 'react-bootstrap';

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
			<div className='container'>
			<Navbar>
			    <Navbar.Header>
			      <Navbar.Brand>
			        <a href="#">ToDo Application</a>
			      </Navbar.Brand>
			    </Navbar.Header>
		  	</Navbar>
			<Jumbotron>
		  		<div className='container'>
			  		<Grid>
					    <Row className="show-grid">
					      <Col xs={12} md={8}>
					      	<CreateTodos  todos ={this.state.todos} createTask = {this.createTask.bind(this)}/>
					      </Col>
					      <Col xs={6} md={4}>
					      	<TodoItems 
								toggleTask = {this.toggleTask.bind(this)}
								editButton = {this.editButton.bind(this)}
								deleteTask = {this.deleteTask.bind(this)}
								todos ={this.state.todos}/>
					      </Col>
					    </Row>
				    </Grid>
			    </div>
			</Jumbotron>
			</div>
		);
	}

	toggleTask (task) {
		const foundTodo = _.find(this.state.todos, todo => todo.task === task);
		foundTodo.isCompleted = ! foundTodo.isCompleted;
		this.setState({todos :this.state.todos});
	}

	deleteTask (task) {
		_.remove(this.state.todos , todo => todo.task === task);
		this.setState({todos:this.state.todos});
	}

	editButton(oldTask, newTask) {
		const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
		foundTodo.task = newTask;
		this.setState({todos:this.state.todos});
	}

	createTask (task) {
		this.state.todos.push({
			task,
			isCompleted:false
		});
		this.setState({todos:this.state.todos});
	}
}