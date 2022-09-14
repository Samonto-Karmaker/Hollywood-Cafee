import React, {Component} from "react";
import {Button, Form, FormGroup, Label, Input, Col} from "reactstrap"

class Contact extends Component{

    state = {
        firstname: "",
        lastname: "",
        telnum: "",
        email: "",
        agree: false,
        contactType: "Email",
        message: ""
    }

    render(){
        return(
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send Us Your Feedback</h3>
                    </div>
                    <div className="col-12">
                        <Form>
                            <FormGroup row>
                                <Label htmlFor="firstname" md = {2}>First Name: </Label>
                                <Col md = {10}>
                                    <Input type="text" name="firstname" placeholder="First Name" value={this.state.firstname} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md = {2}>Last Name: </Label>
                                <Col md = {10}>
                                    <Input type="text" name="lastname" placeholder="Last Name" value={this.state.lastname} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md = {2}>Telephone No. </Label>
                                <Col md = {10}>
                                    <Input type="tel" name="telnum" placeholder="Tel. No." value={this.state.telnum} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md = {2}>Email </Label>
                                <Col md = {10}>
                                    <Input type="email" name="email" placeholder="abc@xyz.com" value={this.state.email} />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md= {{size: 15, offset: 1}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type = "checkbox" name="agree" checked={this.state.agree} />
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md = {{size: 3, offset: 1}}>
                                    <Input type="select" name="contactType" value={this.state.contactType}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md = {2}>Your Feedback: </Label>
                                <Col md = {10}>
                                    <Input type="textarea" name="message" value={this.state.message} rows = "12"/>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="secondary">
                                        Submit Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact