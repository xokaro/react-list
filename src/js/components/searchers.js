import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/**
 * @componentName Searchers
 * @description Returns all filters types, include method needed to pass data.
 */
class Searchers extends Component {

    /**
     * @param {array} props All props get from <FilterContainer />
     */
    constructor(props){
        super(props);
    }

    /**
     * 
     * @param {string} searchingType Contains chosen type of search ['searchbar', 'brand', 'category'].
     * @param event Allows event handling.
     */
    changeSearchingType(searchingType, event){
        let searchVal = event.target.value;
        this.props.changeSearchingType(searchingType, searchVal);
    }

    render(){
        return (
            <div className="filters-container">
                <input 
                    type="text" 
                    id="searchbar"
                    value={this.props.searchbar} 
                    onChange={this.changeSearchingType.bind(this, 'name')} 
                    className="filters-container__searchbar"
                    placeholder="Search..."
                />
                <select 
                    id="brand"
                    className="filters-container__brands" 
                    value={this.props.brand}
                    onChange={this.changeSearchingType.bind(this, 'brand')}
                >
                    {this.props.brandArray.map((item, index) => <option key={index} value={item}> {item} </option> )}
                </select>
                <select className="filters-container__categories"
                        id="category"
                        value={this.props.category}
                        onChange={this.changeSearchingType.bind(this, 'category')}
                >
                    {this.props.categoryArray.map((item, index) => <option key={index} value={item}> {item} </option> )}
                </select>
        </div>
        )
    }
}

export default Searchers;