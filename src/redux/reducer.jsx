import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { requestAddContacts, requestContacts, requestDeleteContacts } from "service/API";
const phonebookInitialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: ""
  };


  export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
      try {
        const contacts = await requestContacts();
        return contacts;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );  



export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const contact = await requestAddContacts(newContact);

      return contact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const product = await requestDeleteContacts(contactId);
      return product;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const contactsSlice = createSlice({
  name: "contacts",
  initialState: phonebookInitialState,
  reducers: {
   setFilter(state, action) {
        state.filter = action.payload
      },
  },
  extraReducers: (builder) => 
  builder.addCase(fetchContacts.pending, (state, action)=>{
    state.contacts.isLoading = true
    state.contacts.error = null
  } )
  .addCase(fetchContacts.fulfilled, (state, action)=>{
    state.contacts.isLoading = false
    state.contacts.items = action.payload
  })
  .addCase(fetchContacts.rejected , (state, action)=>{
    state.isLoading = false
    state.contacts.error = action.payload
  })
  .addCase(addContact.pending, (state, action)=>{
    state.contacts.isLoading = true
    state.contacts.error = null
  } )
  .addCase(addContact.fulfilled, (state, action)=>{
    state.contacts.isLoading = false
    state.contacts.items.unshift(action.payload)
  })
  .addCase(addContact.rejected , (state, action)=>{
    state.isLoading = false
    state.contacts.error = action.payload
  })
  .addCase(deleteContact.pending, (state, action)=>{
    state.contacts.isLoading = true
    state.contacts.error = null
  } )
  .addCase(deleteContact.fulfilled, (state, action)=>{
    state.contacts.isLoading = false
    state.contacts.items = state.contacts.items.filter((contact)=> contact.id !== action.payload.id)
  })
  .addCase(deleteContact.rejected , (state, action)=>{
    state.isLoading = false
    state.contacts.error = action.payload
  })
});

export const { addContacts, deleteContacts, setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer