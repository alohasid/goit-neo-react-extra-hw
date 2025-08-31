import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice.js';
import { filtersReducer } from './filters/filtersSlice.js';
import { authReducer } from './auth/authSlice.js';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReducer,
        auth: authReducer,
    },
});