import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";
import LoadComments from "./LoadComments";

const DishDetails = props => {
    return(
        <div>
            <Card style={{marginTop: "15px"}}>
                <CardImg top 
                    src = {props.dish.image}
                    alt = {props.dish.name} 
                />
                <CardBody style={{textAlign: "left"}}>
                    <CardTitle>
                        <h2>{props.dish.name}</h2>
                    </CardTitle>
                    <CardText>
                        <p>{props.dish.description}</p>
                        <p>Category: {props.dish.category}</p>
                        <p>tk{props.dish.price}/-</p>
                    </CardText>
                    <hr/>
                    <LoadComments comments = {props.dish.comments} />
                </CardBody>
            </Card>
        </div>
    )
}

export default DishDetails