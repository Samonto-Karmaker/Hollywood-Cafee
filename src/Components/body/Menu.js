import React, {Component} from "react";
import MenuItem from "./MenuItem";
import DishDetails from "./DishDetails";
import {CardColumns, Modal, ModalBody, ModalFooter, Button} from "reactstrap"
import {connect} from "react-redux"
import { newComment } from "../../redux/actions";

const mapStatetoProps = state => {
    return{
        dishes: state.dishes
    }
}

const mapDispatchtoProps = dispatch =>{
    return{
        newComment: (dishId, rating, author, comment) => dispatch(
            newComment(dishId, rating, author, comment)
        )
    }
}


class Menu extends Component{
    state = {
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
        const menu = this.props.dishes.map(item => {
            return(
                <MenuItem 
                    dish = {item} 
                    key={item.id} 
                    onDishSelect = {this.onDishSelect}/>
            )
        })

        let details = null
        if(this.state.selectedDish != null){
            details = <DishDetails dish = {this.state.selectedDish} newComment={this.props.newComment}/>
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

export default connect(mapStatetoProps, mapDispatchtoProps)(Menu)