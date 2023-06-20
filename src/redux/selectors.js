export const selectContacts = state => state.contacts.contacts.items;
export const selectFilter = state => state.filter;


export const selectError = state => state.contacts.contacts.error;
export const selectIsLoading = state => state.contacts.contacts.isLoading;