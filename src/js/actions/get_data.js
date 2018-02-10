import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from '../components/list';

const API_URL = '';

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
            <List items={this.state.items} />
        )
    }
}

export default GetData;
