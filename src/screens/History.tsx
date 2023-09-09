import { YStack, Text } from "tamagui";
import { ScreenHeader } from "@components/ScreenHeader";

export function History() {
    return (
        <YStack>
            <ScreenHeader
                title="Histórico de Exercícios"
            />

            <Text
                textAlign="center"
                fontWeight='bold'
                mt={20} fontSize={20}
            >
                Histórico
            </Text>
        </YStack>
    )
}