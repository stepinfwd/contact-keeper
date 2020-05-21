import React, { Component } from 'react'
import Contact from "./Contact"
import ReactDOM from "react-dom";
import { Consumer } from "../context"

class Contacts extends Component {

    render() {

        return (
            <Consumer>{value => {
                const { contacts } = value;
                return (

                    <div>
                        {contacts.map(contact =>
                            (<Contact name={contact.name} email={contact.email} phone={contact.phone} id={contact.id} />))}

                    </div>
                )
            }

            }</Consumer>
        )

    }
}
export default Contacts;