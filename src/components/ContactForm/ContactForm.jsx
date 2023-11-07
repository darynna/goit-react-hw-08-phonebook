import { useState } from 'react';
import {Form, Label, Input, AddButton} from './ContactForm.styled'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact} from 'redux/reducer';

export const ContactForm =()=> {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

 const handleChange = (e) =>{
    const {name, value} = e.target
    switch (name) {
      case 'name':
        setName(value);
        break;
    
      case 'phone':
        setPhone(value);
        break;
      default:
        return  
    }
  }

  const contacts = useSelector(selectContacts) 
  const dispatch = useDispatch()

  const handleAddContacts = newContact => {
    const hasContactDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (hasContactDuplicate) {
      Notify.failure(`${newContact.name} is already in your contacts`);
      return;
    }
    dispatch(addContact(newContact))
  };

  const handleSubmision = (e) =>{
    e.preventDefault();
    const newContact = {
      name,
      phone,
    };
    handleAddContacts(newContact);
    setName('')
    setPhone("")
  }

    return (
      <Form onSubmit={handleSubmision}>
      <Label>Name
        <Input
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          required
          onChange={handleChange}
        /></Label>
        <Label>Number
        <Input
          value={phone}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        /></Label>
        <AddButton type='submit'>Add contacts</AddButton>
      </Form>
    );
  }
