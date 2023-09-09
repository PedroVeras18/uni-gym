import { Text, Stack } from "tamagui";

type Props = {
  title: string;
}

export function ScreenHeader({ title }: Props) {
  return (
    <Stack justifyContent="center" alignItems="center" bg="#202024" pt={60} pb={20}>
      <Text color="#E1E1E6" fontSize={20} fontWeight='bold'>
        {title}
      </Text>
    </Stack>
  );
}