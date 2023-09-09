import { Input as TamaguiInput, InputProps, YStack, Text } from "tamagui"

type Props = InputProps & {
    errorMessage?: string | null;
}

export function Input({ errorMessage, ...rest }: Props) {
    return (
        <YStack mt={5}>
            <TamaguiInput
                bg='#121214'
                width={350}
                h={60}
                color='#FFF'
                placeholderTextColor='#7C7C8A'
                {...rest}
            />
            <Text mt={5} fontWeight='bold' color='red'>{errorMessage}</Text>
        </YStack>
    )
}