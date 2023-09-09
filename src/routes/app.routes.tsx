import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import HomeSvg from '@assets/home.svg';
import HistorySvg from '@assets/history.svg';
import ProfileSvg from '@assets/profile.svg';

import { Home } from "@screens/Home"
import { Exercise } from "@screens/Exercise"
import { History } from "@screens/History"
import { Profile } from "@screens/Profile"

type AppRoutes = {
    home: undefined;
    exercise: {
        exerciseId: string;
    };
    profile: undefined;
    history: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen
                    name='home'
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, }) => (
                            <HomeSvg />
                        )
                    }}
                />
                <Screen
                    name='history'
                    component={History}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <HistorySvg />
                        )
                    }}
                />
                <Screen
                    name='profile'
                    component={Profile}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <ProfileSvg />
                        )
                    }}
                />
                <Screen
                    name='exercise'
                    component={Exercise}
                    options={{ tabBarButton: () => null }}
                />
            </Navigator>
        </NavigationContainer>
    )
}