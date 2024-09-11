import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const selectFilterValue = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, value) => {
    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
  }
);
