import { ScrollView, YStack, Image } from "tamagui";

import BackgroundImg from '@assets/background.png'

export function SignIn() {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <YStack bg='#121214' h='100%'>
                <Image
                    source={BackgroundImg}
                    defaultSource={BackgroundImg}
                    alt="Pessoas treinando"
                    resizeMode="contain"
                    position="absolute"
                />
            </YStack>
        </ScrollView>
    )
}