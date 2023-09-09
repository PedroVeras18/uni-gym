import { YStack, Text } from "tamagui";
import { ScreenHeader } from "@components/ScreenHeader";

export function Profile() {
    return (
        <YStack>
            <ScreenHeader
                title="Perfil"
            />

            <Text
                textAlign="center"
                fontWeight='bold'
                mt={20} fontSize={20}
            >
                Editar Perfil do Usuário
            </Text>
        </YStack>
    )
}