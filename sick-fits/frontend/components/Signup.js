import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "./styles/Form";
import Error from "./ErrorMessage";

class Signup extends Component {
    render() {
        return (
            <Form>
                <fieldset>
                    <h2>Sign Up For An Account</h2>
                    <label htmlFor="email">
                        Email
                        <imput type="text" name="email" />
                    </label>
                    <label htmlFor="name">
                        Name
                        <imput type="text" name="name" />
                    </label>
                    <label htmlFor="password">
                        Password
                        <imput type="text" name="password" />
                    </label>
                </fieldset>
            </Form>
        );
    }
}

export default Signup;