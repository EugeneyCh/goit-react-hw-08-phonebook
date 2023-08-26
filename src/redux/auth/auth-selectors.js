export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user.name;

export const selectIsRefreshing = state => state.auth.isrefreshing;

export const selectError = state => state.auth.isError;

// const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

// const authSelectors = {
//   getIsLoggedIn,
//   getUsername,
// };
// export default authSelectors;
