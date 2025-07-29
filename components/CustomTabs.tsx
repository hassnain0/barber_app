import Home from "@/app/(tabs)";
import profile from "@/app/(tabs)/profile";
import { colors, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import {
  CalendarDotsIcon,
  CalendarIcon,
  ChatIcon,
  HouseIcon,
  MapPinIcon,
  UserIcon,
} from "phosphor-react-native";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export function CustomTabs({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const tabBarIcon: any = {
    index: (isFocused: boolean) => (
      <HouseIcon
        size={verticalScale(20)}
        weight={isFocused ? "fill" : "regular"}
        color={isFocused ? colors.black : colors.neutral700}
      />
    ),
    location: (isFocused: boolean) => (
      <MapPinIcon
        size={verticalScale(20)}
        weight={isFocused ? "fill" : "regular"}
        color={isFocused ? colors.black : colors.neutral400}
      />
    ),
    profile: (isFocused: boolean) => (
      <UserIcon
        size={verticalScale(20)}
        weight={isFocused ? "fill" : "regular"}
        color={isFocused ? colors.black : colors.neutral400}
      />
    ),
    appointment: (isFocused: boolean) => (
      <CalendarDotsIcon
        size={verticalScale(20)}
        weight={isFocused ? "fill" : "regular"}
        color={isFocused ? colors.black : colors.neutral400}
      />
    ),
    chat: (isFocused: boolean) => (
      <ChatIcon
        size={verticalScale(20)}
        weight={isFocused ? "fill" : "regular"}
        color={isFocused ? colors.black : colors.neutral400}
      />
    ),
  };
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label: any =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarItem}
          >
            {tabBarIcon[route.name] && tabBarIcon[route.name](isFocused)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const MyTabs = createBottomTabNavigator({
  tabBar: (props) => <MyTabBar {...props} />,
  screens: {
    Home: Home,
    Profile: profile,
  },
});

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    width: "100%",
    height: verticalScale(55),
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: colors.white,
    borderTopColor: colors.white,
    borderTopWidth: 1,
    position: "absolute", // Important
    bottom: 0, // Ensure full width
    zIndex: 10, // Make sure it's above other elements
  },
  tabBarItem: {
    flex: 1,
    marginBottom: spacingY._5,

    justifyContent: "center",
    alignItems: "center",
  },
});
