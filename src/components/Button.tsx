import { Button as TamaguiButton, ButtonProps, Text } from "tamagui";

type Props = ButtonProps & {
    title: string;
    typeButton?: 'solid' | 'outline';
}

export function Button({ title, typeButton = 'solid', ...rest }: Props) {
    return (
        <TamaguiButton
            mt={30}
            w={350}
            h={50}
            bg={typeButton === 'outline' ? '' : '#361AE1'}
            borderColor='#361AE1'
            borderWidth={typeButton === 'outline' ? 2 : 0}
            borderRadius={10}
            {...rest}
        >
            <Text
                fontWeight='bold'
                color={typeButton === 'outline' ? '#6047fd' : '#FFF'}
            >
                {title}
            </Text>
        </TamaguiButton>
    )
}