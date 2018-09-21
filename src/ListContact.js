import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }
  
  state = {
    query: ''
  }

  UpdateQuery = (query) => {
    this.setState({
      query: query.trim()
    })
  }
  render () {
    return (
      <div className='list-contacts'>
      <div className='list-contacts-top'>
        <input 
          className='search-contacts'
          type='text'
          placeholder='Search Contacts'
          value ={this.state.query}
          onChange={(event) => this.UpdateQuery(event.target.value)} />
      </div>
        <ol className='contact-list'>
          {this.props.contacts.map((contact) =>
            (<li key={contact.id} className='contact-list-item'>
              <div className='contact-avatar' style={{ backgroundImage: `url(${contact.avatarURL})` }} />
              <div className='contact-details'>
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>
              <button onClick={() => this.props.onDeleteContact(contact)} className='contact-remove'>
                Close
              </button>
            </li>)
          )}
        </ol>
      </div>
      
    )
  }
}

export default ListContacts
