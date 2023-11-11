import {ContactItems, DeleteButton, SpanName} from './ContactListItem.styled'
export const ContactListItem = ({contact, handleDeleteContacts}) =>{
    return(
        <ContactItems><p><SpanName>{contact.name}:</SpanName> {contact.number}</p><DeleteButton type="button" onClick={() => handleDeleteContacts(contact.id)}>Delete</DeleteButton></ContactItems>
    )
}