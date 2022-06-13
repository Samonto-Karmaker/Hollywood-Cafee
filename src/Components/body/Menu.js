import React, {Component} from "react";
import DISHES from "../../data/dishes"
import MenuItem from "./MenuItem";
import DishDetails from "./DishDetails";

class Menu extends Component{
    state = {
        dishes: DISHES,
        selectedDish: null
    }

    onDishSelect = dish => {
        this.setState({selectedDish: dish})
    }

    render(){
        const menu = this.state.dishes.map(item => {
            return(
                <MenuItem 
                    dish = {item} 
                    key={item.id} 
                    onDishSelect = {this.onDishSelect}/>
            )
        })

        let details = null
        if(this.state.selectedDish != null){
            details = <DishDetails dish = {this.state.selectedDish} />
        }

        return(
            <div className="container">
            <div className="row">
                <div className="col-6">
                    {menu}
                </div>
                <div className="col-6">
                    {details}
                </div>
            </div>
        </div>
        )
    }
}

export default Menu