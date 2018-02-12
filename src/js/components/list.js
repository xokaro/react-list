import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ListItem from './list_item';

class List extends Component {
    constructor(){
        super();

        this.state = {
            allItems: [],
            allItemsHandler: [],
            searchByName: '',
            selectBrand: '',
            selectCategory: ''
        };
    }

    componentWillReceiveProps(props){
        this.setState({ 
            allItems: props.items,
            allItemsHandler: props.items
        })
    }

    updateSearchByName(event){
        let e = event.target.value;

        this.setState({
            searchByName: e,
            allItems: this.state.allItemsHandler.filter(
                (item) => {
                    return item.name.toLowerCase().indexOf(e.toLowerCase()) !== -1;
                }   
            ),
        })
    }

    updateSelectBrand(event){
        let brandValue = event.target.value;

        this.setState({
            selectBrand: brandValue,
            allItems: this.state.allItemsHandler.filter(
                item => {
                    if(brandValue != undefined && brandValue != 'Select brand') { 
                        return item.brand.indexOf(brandValue) !== -1 
                    } else {
                        return item.brand;
                    }
                }
            ),
        })
    }

    updateSelectCategory(event){
        let categoryValue = event.target.value;

        this.setState({
            selectCategory: categoryValue,
            allItems: this.state.allItemsHandler.filter(
                (item) => {
                    if(categoryValue != undefined && categoryValue != 'Select category') { 
                        return item.category.indexOf(categoryValue) !== -1; 
                    } else {
                        return item.category;
                    }
                }
            )
        })
    }
    
    render(){
        return (
            <div className="main-container">
                <div className="filters-container">
                    <input 
                        type="text" 
                        value={this.state.searchByName} 
                        onChange={this.updateSearchByName.bind(this)} 
                        className="filters-container__searchbar"
                        placeholder="Search..."
                       />

                    <select 
                        className="filters-container__brands" 
                        onChange={this.updateSelectBrand.bind(this)}
                        value={this.state.selectBrandValue}
                    >
                        <option key="00" value="Select brand">Select brand</option>
                        {this.props.brands.map((item, index) => <option key={index} value={item}> {item} </option> )}
                    </select>
                    <select className="filters-container__categories"
                        onChange={this.updateSelectCategory.bind(this)}
                    >
                    <option key="00">Select category</option>
                        {this.props.categories.map((item, index) => <option key={index} value={item}> {item} </option> )}
                    </select>
                </div>
                <ul className="all-items">
                    {this.state.allItems.map((item) => <ListItem item={item} key={item.id} />)}
                </ul>
            </div>
        ); 
    }
}


export default List;