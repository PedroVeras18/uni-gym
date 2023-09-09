import { Controller, useForm } from 'react-hook-form';
import { ScrollView, YStack, Image, Stack, Text } from "tamagui";

import { useAuthService } from '@store/useaAuth';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '../routes/auth.routes';

import LogoSVG from '@assets/logoUniGym.svg'
import BackgroundImg from '@assets/background.png'

export type FormDataProps = {
    name: string;
    email: string;
    password: string;
    password_confirm?: string;
}

const signUpSchema = yup.object({
    name: yup.string().required('Informe o nome.'),
    email: yup.string().required('Informe o e-mail').email('E-mail inválido.'),
    password: yup.string().required('Informe a senha').min(6, 'A senha deve ter pelo menos 6 dígitos.'),
    password_confirm: yup.string().oneOf([yup.ref('password')], 'A confirmação da senha não confere')
});

export function SignUp() {
    const { authenticate } = useAuthService();
    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        resolver: yupResolver(signUpSchema),
    });

    function handleGoBack() {
        navigation.goBack();
    }

    async function handleSignUp({ name, email, password }: FormDataProps) {
        authenticate({name, email, password})
    }

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
                        name="name"
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder="Nome"
                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.name?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder="E-mail"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.email?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder="Senha"
                                secureTextEntry
                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.password?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="password_confirm"
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder="Confirmar a Senha"
                                secureTextEntry
                                onChangeText={onChange}
                                value={value}
                                onSubmitEditing={handleSubmit(handleSignUp)}
                                returnKeyType="send"
                                errorMessage={errors.password_confirm?.message}
                            />
                        )}
                    />

                    <Button
                        title="Criar e acessar"
                        onPress={handleSubmit(handleSignUp)}
                    />

                    <YStack mt={50}>
                        <Text textAlign='center' color="#FFF" fontSize={15}>
                            Ainda não tem acesso?
                        </Text>

                        <Button
                            title="Voltar para o login"
                            typeButton="outline"
                            onPress={handleGoBack}
                        />
                    </YStack>
                </Stack>
            </YStack>
        </ScrollView>
    )
}