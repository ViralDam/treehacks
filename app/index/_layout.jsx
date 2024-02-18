import { Stack } from 'expo-router';

const HomeLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="index"
                href="/"
            />
            <Stack.Screen
                name="play"
                href="play"
            />
        </Stack>
    );
}

export default HomeLayout;