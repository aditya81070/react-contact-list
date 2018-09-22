import React, { Component } from 'react'
import ListContacts from './ListContact'
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
  state = {
    contacts: []
  }
  componentDidMount () {
    ContactsAPI.getAll()
      .then((contacts) => {
        this.setState({ contacts })
      })
  }
  contactRemove = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id!==contact.id)
    }))
    ContactsAPI.remove(contact)
  }

  render () {
    return (
      <ListContacts onDeleteContact={this.contactRemove} contacts={this.state.contacts}  />
    )
  }
}

export default App
