import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";

const DishDetails = props => {
    return(
        <div>
            <Card style={{marginTop: "15px"}}>
                <CardImg top 
                    src = {props.dish.image}
                    alt = {props.dish.name} 
                />
                <CardBody style={{textAlign: "left"}}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        <p>{props.dish.description}</p>
                        <p>Category: {props.dish.category}</p>
                        <p>tk{props.dish.price}/-</p>
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default DishDetails