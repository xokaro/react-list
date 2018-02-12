import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../sass/style.scss';
import List from './components/list';

const API_URL = 'https://raw.githubusercontent.com/xokaro/react-list/master/src/data2/data.json';

class App extends Component {
    constructor(){
        super();

        this.state = {
            items: [],
            brands: [],
            categories: [],
            isLoading: true
        }
    }

    componentDidMount(){
        fetch(API_URL)
        .then(result => result.json())
            .then(
                data => {
                    this.setState({
                        items: data,
                        isLoading: false,
                        brands: [...new Set(data.map(item => item.brand ))],
                        categories: [...new Set(data.map(item => item.category ))]
                    })
                },
                error => {
                    this.setState({
                        isLoading: false, error
                    })
                }
            ) 
    }

    render(){
        return (
            <List items={this.state.items} 
                  brands={this.state.brands} 
                  categories={this.state.categories}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));