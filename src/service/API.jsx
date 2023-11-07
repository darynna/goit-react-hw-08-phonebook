import axios from "axios";

const contactsInstance = axios.create({
   baseURL: 'https://654427f75a0b4b04436c1827.mockapi.io/'
})

export const requestContacts = async () =>{
    const {data} = await contactsInstance.get('/contacts')
    return data;
   }
   
   export const requestAddContacts = async (contact) =>{
      const {data} = await contactsInstance.post('/contacts', contact)
      return data;
     }
   
     export const requestDeleteContacts = async (contactId) =>{
      const {data} = await contactsInstance.delete(`/contacts/${contactId}`)
      return data;
     }
   
   