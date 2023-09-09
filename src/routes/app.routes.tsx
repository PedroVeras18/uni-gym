import { Platform } from 'react-native';
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
    const iconSize = 30;

    return (
        <NavigationContainer>
            <Navigator screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#4529f8',
                tabBarInactiveTintColor: '#C4C4CC',
                tabBarStyle: {
                    backgroundColor: '#202024',
                    borderTopWidth: 0,
                    height: Platform.OS === "android" ? 'auto' : 96,
                    paddingBottom: 20,
                    paddingTop: 2
                  }
            }}>
                <Screen
                    name='home'
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, }) => (
                            <HomeSvg fill={color} width={iconSize} height={iconSize} />
                        )
                    }}
                />
                <Screen
                    name='history'
                    component={History}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <HistorySvg fill={color} width={iconSize} height={iconSize} />
                        )
                    }}
                />
                <Screen
                    name='profile'
                    component={Profile}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <ProfileSvg fill={color} width={iconSize} height={iconSize} />
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