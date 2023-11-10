import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/SearchFilter/SearchFilter';
import { MainWrap } from './Contacts.styled';


export const ContactsPage = ()=>{
    return(
<MainWrap>
        <h1>Phonebook</h1>
      <ContactForm/>
      <Filter/>

      <h2>Contacts</h2>
      <ContactList/> 
      </MainWrap>
    )
}