import { create } from 'zustand';
import { FormDataProps } from '@screens/SignUp';

export interface AuthServiceProps {
    userAuth: FormDataProps | null;
    authenticate: (data: FormDataProps) => void;
    logout: () => void;
}

export const useAuthService = create<AuthServiceProps>(
    (set) => ({
        userAuth: null,

        authenticate: async (data: FormDataProps) => {
            // Fazer chamada na api e atribuir o retorno ao userAuth.
            set(() => ({ userAuth: data }))
        },

        logout: () => {
            set(() => ({ userAuth: null }));
        }
    })
)