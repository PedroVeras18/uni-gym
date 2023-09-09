import { YStack, Text } from "tamagui";
import { HomeHeader } from "@components/HomeHeader";

export function Home() {
    return (
        <YStack>
            <HomeHeader />

            <Text
                textAlign="center"
                fontWeight='bold'
                mt={20} fontSize={20}
            >
                Tela Home
            </Text>
        </YStack>
    )
}