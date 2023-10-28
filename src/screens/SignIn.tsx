import { Controller, useForm } from 'react-hook-form';
import { ScrollView, YStack, Image, Stack, Text } from "tamagui";

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '../routes/auth.routes';

import LogoSVG from '@assets/logoUniGym.svg'
import BackgroundImg from '@assets/background.png'
import { useAuthService } from '@store/useAuth';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type FormData = {
    email: string;
    password: string;
}

export function SignIn() {
    const { authenticate } = useAuthService();
    const navigation = useNavigation<AuthNavigatorRoutesProps>();
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>()

    function handleNewAccount() {
        navigation.navigate('signUp');
    }

    async function handleSignIn({ email, password }: FormData) {
        authenticate({
            name: 'Usuário Teste',
            email: 'teste@gmail.com',
            password: 'testetesteteste',
            password_confirm: 'testetesteteste'
        })
    }

    useEffect(() => {
        const checkAuthData = async () => {
          const storedAuthData = await AsyncStorage.getItem('userAuthData');
          if (storedAuthData) {
            const parsedAuthData = JSON.parse(storedAuthData);
            authenticate(parsedAuthData);
          }
        };
    
        checkAuthData();
      }, []);

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <YStack bg='#131314' flex={1}>
                <Image
                    source={BackgroundImg}
                    defaultSource={BackgroundImg}
                    alt="Pessoas treinando"
                    resizeMode="contain"
                    position="absolute"
                />

                <Stack flex={1} justifyContent="center" alignItems="center" mt={40}>
                    <LogoSVG />

                    <Text color="#E1E1E6" fontSize={15} mt={10}>
                        Treine sua mente e o seu corpo.
                    </Text>

                    <Text fontWeight='bold' color="#E1E1E6" fontSize={30} my={30}>
                        Acesse a conta
                    </Text>

                    <Controller
                        control={control}
                        name="email"
                        rules={{ required: 'Informe o e-mail' }}
                        render={({ field: { onChange } }) => (
                            <Input
                                placeholder="E-mail"
                                keyboardType='email-address'
                                /* keyboardType="email-address" */
                                autoCapitalize="none"
                                onChangeText={onChange}
                                errorMessage={errors.email?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="password"
                        rules={{ required: 'Informe a senha' }}
                        render={({ field: { onChange } }) => (
                            <Input
                                placeholder="Senha"
                                secureTextEntry
                                onChangeText={onChange}
                                errorMessage={errors.password?.message}
                            />
                        )}
                    />

                    <Button
                        title="Acessar"
                        onPress={handleSubmit(handleSignIn)}
                    />

                    <YStack mt={50}>
                        <Text textAlign='center' color="#FFF" fontSize={15}>
                            Ainda não tem acesso?
                        </Text>

                        <Button
                            title="Criar Conta"
                            typeButton="outline"
                            onPress={handleNewAccount}
                        />
                    </YStack>
                </Stack>
            </YStack>
        </ScrollView>
    )
}