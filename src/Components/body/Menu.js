import React, {Component} from "react";
import DISHES from "../../data/dishes"
import MenuItem from "./MenuItem";
import DishDetails from "./DishDetails";
import {CardColumns, Modal, ModalBody, ModalFooter, Button} from "reactstrap"

class Menu extends Component{
    state = {
        dishes: DISHES,
        selectedDish: null,
        modalOpen: false
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    onDishSelect = dish => {
        this.setState({
            selectedDish: dish,
        })
        this.toggleModal()
    }

    render(){
        document.title = "Menu"
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
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen = {this.state.modalOpen}>
                        <ModalBody>
                            {details}
                        </ModalBody>
                        <ModalFooter>
                            <Button color = "secondary" onClick = {this.toggleModal}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default Menu