import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './SearchFilter/SearchFilter';
import { MainWrap, Title } from './App.styled';


export const App = () => {
  return (
    <MainWrap>
      <Title>Phonebook</Title>
      <ContactForm/>
      <Filter/>

      <Title>Contacts</Title>
      <ContactList/>
    </MainWrap>
  );
};
