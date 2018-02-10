import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ListItem from './list_item';

const List = (props) => {
    const listItem = props.items.map((item) => {
        return (
            console.log(item)
        );
    });


    return (
        <ul className="all-items">
            {listItem}
        </ul>
    ); 
}


export default List;