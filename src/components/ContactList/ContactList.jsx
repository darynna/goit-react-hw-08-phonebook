import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import {ContactsList} from "./ContactList.styled"
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts} from 'redux/reducer';
import {  selectError, selectisLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { selectVisibleContacts } from 'redux/selectors';
import { selectAuthenticated } from 'redux/authSelectors';
import Loader from 'components/Loader/Loader';

export const ContactList = () => {

  const dispatch = useDispatch()
  const isLoading = useSelector(selectisLoading)
  const error = useSelector(selectError)
  const contacts = useSelector(selectVisibleContacts)
  const authenticated = useSelector(selectAuthenticated)

  useEffect(() => {
    if (authenticated === true) {
      dispatch(fetchContacts());
    }
  }, [dispatch, authenticated]);
  
  const handleDeleteContacts = contactId => {
    dispatch(deleteContact(contactId))
  };

  return (

<>
    {isLoading && <Loader/>}
    {error && Notify.failure('Sorry, something went wrong!')}

    <ContactsList>
      {contacts && contacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} handleDeleteContacts={handleDeleteContacts}/>
      ))}
    </ContactsList>
    </>
  );
};
