import './App.css';
import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {
    state = {
        todos: []
    };

    componentDidMount() {
        this.getTodos();
    }

    getTodos() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                {this.state.todos.map(item => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <p>{item.body}</p>
                    </div>
                ))}
            </div>
        );
    }

}

export default App;
