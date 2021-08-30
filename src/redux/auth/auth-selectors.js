// import { createSelector } from '@reduxjs/toolkit';

export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUserName = state => state.auth.user.name;

// Мемоизированный селектор
// export const getFilteredItems = createSelector(
//   [getItems, getFilter],
//   (allItems, filter) =>
//     allItems.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase()),
//     ),
// );
