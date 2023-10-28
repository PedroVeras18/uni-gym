import { create } from 'zustand';
import { FormDataProps } from '@screens/SignUp';
import AsyncStorage from '@react-native-async-storage/async-storage';

type userAuthProps = FormDataProps & {
    avatar?: string;
}

export interface AuthServiceProps {
    userAuth: userAuthProps | null;
    authenticate: (data: FormDataProps) => void;
    logout: () => Promise<void>;
}

export const useAuthService = create<AuthServiceProps>(
    (set) => ({
        userAuth: null,

        authenticate: async (data: userAuthProps) => {
            const { password, password_confirm, ...authData } = data;
            await AsyncStorage.setItem('userAuthData', JSON.stringify(authData));
            set(() => ({ userAuth: data }))
        },

        logout: async () => {
            await AsyncStorage.removeItem('userAuthData');
            set(() => ({ userAuth: null }));
        }
    })
)