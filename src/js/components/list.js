import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ListItem from './list_item';

/**
 * @componentName List
 * @description Returns list of items.
 * @param {array} items Allows to pass data to lower level component.
 * @param {boolean} loading Checks if data is already loaded.
 */
const List = ({ items, loading }) => {
    if(!loading) {
        if(items.length == 0){
            return <div className='no-item'>Upsss... looks like we do not have this item, please try again.</div>
        } else {
        return <ul className="all-items">
                    { items.map((item) => <ListItem item={item} key={item.id} />) }
                </ul>
        }
    } else {
        return <div className='loader'></div>
    }
}

export default List;