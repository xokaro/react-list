import React from 'react';

/**
 * @componentName ListItem
 * @description Creates single element content.
 * @param {object} item Single item data.
 */
const ListItem = ({ item }) => {

    const name = item.name,
          brand = item.brand,
          category = item.category,
          date = item.date,
          id = item.id;

    return (
        <li key={id} className="all-items__item">
            <div className="all-items__name"> {name} </div>
            <div className="all-items__details-container">
                <div className="all-items__brand all-items__item-content">Brand: <span className="all-items__brand--bolded">{brand}</span></div>
                <div className="all-items__category all-items__item-content">Category: <span className="all-items__brand--bolded">{category}</span></div>
                <div className="all-items__date all-items__item-content">Release date: <span className="all-items__brand--bolded">{date}</span></div>
            </div>
        </li>
    )
}

export default ListItem;