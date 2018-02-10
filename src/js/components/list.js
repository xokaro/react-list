import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const API_URL = 'https://react-list-2c16c.firebaseio.com/';

const List = (props) => {
    const listItem = props.items.map((item) => {
        return (
            <ListItem item={item} key={item.id}/>
        );
    });


    return (
        <ul className="all-items">
            {listItem}
        </ul>
    ); 
}


export default List;