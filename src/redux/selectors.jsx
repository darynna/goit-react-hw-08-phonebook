import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.phonebook.contacts.items;
export const selectFilter = state => state.phonebook.filter;
export const selectisLoading = state => state.phonebook.contacts.isLoading
export const selectError = state => state.phonebook.contacts.error


export const selectVisibleContacts = createSelector(
    [ selectContacts, selectFilter],
     (contacts, filter) => {
       return contacts.filter(contact => contact.name.toLowerCase()
        .includes(filter.toLowerCase()))
     }
    )