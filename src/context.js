import React, { Component } from 'react';
import ReactDOM from "react-dom";
const Context = React.createContext();


const reducer = ( state,action) => {
    const { contacts } = state;
    switch (action.type) {
        case 'DELETE_CONTACT':

            return {
                ...state, contacts: contacts.filter(contact => contact.id !== action.payload)
            };

        default:
            return state;
    }


}
export class Provider extends Component {

    state = {
        contacts: [

            {
                id: 1,
                name: 'jone doe',
                email: "jdoe@gmail.com",
                phone: '555-555-555'


            },

            {
                id: 2,
                name: 'adil juvane',
                email: "juvane@gmail.com",
                phone: '555-444-333'

            },
            {
                id: 3,
                name: 'olly esse',
                email: "ollyesee@gmail.com",
                phone: '111-222-555'
            },
        ],
        dispatch: (action) => { this.setState(state => reducer(state, action)) } 

    };
    render() {


       

        return (
            <Context.Provider value={this.state}>{this.props.children}</Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;