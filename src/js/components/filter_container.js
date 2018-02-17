import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import Searchers from './searchers';

/**
 * @componentName FilterContainer
 * @description Creates filters container and generates filtered list.
 */
class FilterContainer extends Component{

    /**
     * @param {array} allItems Initialization of param which will hold items array 
     */
    constructor(props){
        super(props);

        this.state = {
            allItems: []
        }
    }

    /**
     * @param {array} props All props get from <App />
     */
    componentWillReceiveProps(props){
        this.setState({
            allItems: props.items,
        })
    }

    /**
     * Add value to filters types.
     * @param {string} searchingType Contains chosen type of search ['name', 'brand', 'category'].
     * @param {string} searchVal Contains value of chosen element/typed in data.
     */
    filterAllItems(searchingType, searchVal){
        switch (searchingType){
            case 'name':
                this.setState({
                    name: searchVal
                })
                break;
            case 'brand':
                this.setState({
                    brand: searchVal
                })
                break;
            case 'category':
                this.setState({
                    category: searchVal
                })
                break;
            default: 
                break;
        }
    }


    render(){
        let arr = ['name', 'brand', 'category'],
            itemsArray = this.props.items,
            check = false;

        arr.map((filtered) => {
            let filterBy = this.state[filtered];

            if(filterBy != undefined) {
                itemsArray = itemsArray.filter((item) => {
                    return item[filtered].toLowerCase().indexOf(filterBy.toLowerCase()) !== -1;
                })
            }
            else if( 
                (this.state.name == '' || this.state.name == undefined) 
                && (this.state.brand == 'Select brand' || this.state.brand == undefined) 
                && (this.state.category == 'Select category'  || this.state.category == undefined) 
            ){
                check = true;
            }
        })

        if(check) {
            itemsArray = this.state.allItems;
            check = false;
        }

        /**
         * @param {array} categoryArray Contains unique values for categories.
         * @param {array} brandArray Contains unique values for brands.
         */
        const brandArray = ['Select brand', ...new Set(this.props.items.map(item => item.brand))],
              categoryArray = ['Select category', ...new Set(this.props.items.map(item => item.category))];

        return(
            <div className="main-container">
                <Searchers 
                    items={this.state.allItems}
                    brandArray={brandArray}
                    categoryArray={categoryArray}
                    changeSearchingType={this.filterAllItems.bind(this)}
                />
                <List items={itemsArray} loading={this.props.loading}/>
            </div>
        )
    }
}

export default FilterContainer;