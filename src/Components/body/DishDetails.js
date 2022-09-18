import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";
import LoadComments from "./LoadComments";
import CommentForm from "./CommentForm";

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
                        {props.dish.description}
                    </CardText>
                    <CardText>
                        Category: {props.dish.category}
                    </CardText>
                    <CardText>
                        tk{props.dish.price}/-
                    </CardText>
                    <hr/>
                    <LoadComments comments = {props.dish.comments} />
                    <hr/>
                    <CommentForm />
                </CardBody>
            </Card>
        </div>
    )
}

export default DishDetails