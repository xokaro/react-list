import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from '../app';

const API_URL = 'https://raw.githubusercontent.com/xokaro/react-list/master/src/data2/data.json';

class GetData extends Component {
    constructor(){
        super();

        this.state = {
            items: [],
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
                        isLoading: false
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
            <App items={this.state.items} />
        )
    }
}

export default GetData;
