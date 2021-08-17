import { createContext } from 'react';
import { ContextState } from '../interfaces/interfaces';

export const AppContext = createContext<ContextState>({
    languageId: 'en',
    firstName: '',
    lastName: '',
    middleName: '',
    email: '',
    phoneNumber: '',
    avatar: null,
    country: '',
    isInPublicDirectory: false,
    biography: '',
    teamId: 0,
    onLanguageChange: () => { },
    onProfileChange: () => { },
});
