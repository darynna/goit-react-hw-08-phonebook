import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import {ContactsList} from "./ContactList.styled"
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts} from 'redux/reducer';
import {  selectError, selectisLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { Loading } from 'components/isLoading';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {

  const dispatch = useDispatch()
  const isLoading = useSelector(selectisLoading)
  const error = useSelector(selectError)
  const contacts = useSelector(selectVisibleContacts)

  useEffect(()=>{
    dispatch(fetchContacts());
}, [dispatch])


  const handleDeleteContacts = contactId => {
    dispatch(deleteContact(contactId))
  };

  return (

<>
    {isLoading && <Loading/>}
    {error && Notify.failure('Sorry, something went wrong!')}

    <ContactsList>
      {contacts && contacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} handleDeleteContacts={handleDeleteContacts}/>
      ))}
    </ContactsList>
    </>
  );
};
