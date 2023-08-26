export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

// export const getContacts = state => {
//   return {
//     items: state.contacts.items,
//     isLoading: state.contacts.isLoading,
//     error: state.contacts.error,
//     filter: state.filter,
//   };
// };
