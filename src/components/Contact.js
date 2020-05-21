import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../context';

class Contact extends Component {

    state = {
        showContactInfo: false,
    };




showClick = () => {
    const { showContactInfo } = this.state;

    this.setState({
        showContactInfo: !showContactInfo


    });
    console.log(this.state);
}

onDeleteClick = (id, dispatch) => {
    console.log(id )
    dispatch({ type: "DELETE_CONTACT", payload: this.props.id, })
}

render() {
    const { id, name, email, phone } = this.props;

    return (


        <Consumer>
            {value => {
                const { dispatch } = value;
                return (
                    <div className="card card-body mb-3">

                        <h4> {name}<i onClick={this.showClick} className="fas fa-sort-down " style={{ cursor: 'pointer' }} />
                            <i className="fas fa-times" style={{ cursor: 'pointer', color: 'red', float: 'right' }} onClick={this.onDeleteClick.bind(this,id,dispatch)}></i>

                        </h4>
                        {this.state.showContactInfo ? <ul className="list-group">
                            <li className="list-group-item">email:{email}</li>
                            <li className="list-group-item" >phone:{phone}</li>
                        </ul> : null}


                    </div>

                );
            }}
        </Consumer>


    );
}
}


// Contacts.PropTypes = {
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     phone: PropTypes.string.isRequired


// };
export default Contact;