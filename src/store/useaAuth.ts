import { create } from 'zustand';
import { FormDataProps } from '@screens/SignUp';

type userAuthProps = FormDataProps & {
    avatar?: string;
}

export interface AuthServiceProps {
    userAuth: userAuthProps | null;
    authenticate: (data: FormDataProps) => void;
    logout: () => void;
}

export const useAuthService = create<AuthServiceProps>(
    (set) => ({
        userAuth: null,

        authenticate: async (data: userAuthProps) => {
            // Fazer chamada na api e atribuir o retorno ao userAuth.
            set(() => ({ userAuth: data }))
        },

        logout: () => {
            set(() => ({ userAuth: null }));
        }
    })
)