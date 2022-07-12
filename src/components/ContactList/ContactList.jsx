const ContactList = ({array}) =>{
    return(<ul>
        {/* {this.state.filter === ""} ?
        {this.state.contacts.map(contact => { return <li key={contact.id}>{contact.name}: {contact.number}</li> })}
        : */}
        {/* {visibleContacts.map(contact => { return <li key={contact.id}>{contact.name}: {contact.number}</li> })} */}
        {array.map(contact=>{return <li key={contact.id}>{contact.name}: {contact.number}</li>})}
      </ul>)
}
export default ContactList;