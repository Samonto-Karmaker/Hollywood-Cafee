import React from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const MenuItem = props => {
    return(
        <div>
            <Card style={{margin: "15px"}}>
                <CardBody>
                    <CardImg
                        width = "100%"
                        alt = {props.dish.name}
                        src = {props.dish.image}
                        style = {{opacity: "0.5"}}
                    />
                    <CardImgOverlay>
                        <CardTitle 
                            style={{cursor: "pointer", fontSize: "50px"}} 
                            onClick = {() => props.onDishSelect(props.dish)}
                        >
                            {props.dish.name}
                        </CardTitle>
                    </CardImgOverlay>
                </CardBody>  
            </Card>
        </div>
    )
}

export default MenuItem