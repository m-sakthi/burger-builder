import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            state: '',
            postalCode: ''
        },
        loading: false,
        ingredients: {},
        price: 0

    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Max',
                address: {
                    street: 'testStreet',
                    country: 'India',
                },
                email: 'max@gamil.com',
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                console.log("success: ", this.state);
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error => {
                console.log("error: ", this.state);
                this.setState({ loading: false });
            });
    }

    render () {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your name" />
                <input className={classes.Input} type="email" name="email" placeholder="Your email" />
                <input className={classes.Input} type="text" name="street " placeholder="Street" />
                <input className={classes.Input} type="text" name="postal " placeholder="Postal" />
                <Button btnType="Success" clicked={this.orderHandler}>Submit</Button>
            </form>
        );
        if (this.state.loading ) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;