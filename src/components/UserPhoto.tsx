import { Image, ImageProps } from "tamagui";

type Props = ImageProps & {
    size: number;
}

export function UserPhoto({ size, ...rest }: Props) {
    return (
        <Image
            w={size}
            h={size}
            borderRadius={100}
            borderWidth={2}
            borderColor="gray.400"
            {...rest}
        />
    );
}