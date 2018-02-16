import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../sass/style.scss';
import FilterContainer from './components/filter_container';

const API_URL = 'https://raw.githubusercontent.com/xokaro/react-list/master/src/data2/data.json';

/**
 * @componentName App
 * Main page component
 */
class App extends Component {
    /**
     * @param {array} items Will contain all items data.
     * @param {boolean} isLoading Controls if the data is already rendered.
     */
    constructor(){
        super();

        this.state = {
            items: [],
            isLoading: true
        }
    }

    /**
     * Fetch data from API.
     * @param {string} API_URL Url with data.
     */
    componentDidMount(){
        fetch(API_URL)
        .then(result => result.json())
            .then(
                data => {
                    this.setState({
                        items: data,
                        isLoading: false,
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
            <FilterContainer items={this.state.items} loading={this.state.isLoading} />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));