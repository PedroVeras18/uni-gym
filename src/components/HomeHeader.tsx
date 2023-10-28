import { TouchableOpacity } from 'react-native';
import { XStack, YStack, Text } from 'tamagui';

import { useAuthService } from '@store/useAuth';

import { UserPhoto } from './UserPhoto';
import defaulUserPhotoImg from '@assets/userPhotoDefault.png';

import { SignOut } from 'phosphor-react-native';

export function HomeHeader() {

    const { userAuth, logout } = useAuthService();

    return (
        <XStack bg="#202024" pt={50} pb={5} px={20} alignItems="center">
            <UserPhoto
                source={defaulUserPhotoImg}
                size={10}
                alt="Imagem do usuário"
                mr={4}
            />

            <YStack ml={10} flex={1}>
                <Text color="#E1E1E6" fontSize={15}>
                    Olá,
                </Text>

                <Text color="#E1E1E6" fontSize={15} fontWeight='bold'>
                    {userAuth?.name}
                </Text>
            </YStack>


            <TouchableOpacity onPress={logout}>
                <SignOut size={32} weight="bold" color='#FFF' />
            </TouchableOpacity>
        </XStack>
    );
}