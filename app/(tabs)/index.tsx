import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, radius } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { Image } from "expo-image";
import {
  BellIcon,
  CalendarDotsIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
} from "phosphor-react-native";
import React from "react";
import { StyleSheet, View } from "react-native";
const Home = () => {
  return (
    <ScreenWrapper style={{ backgroundColor: colors.white }}>
      <View style={styles.container}>
        {/* Profile Image Section */}

        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <Image
            source={require("../../assets/images/profile.png")}
            style={{ height: 40, width: 40 }}
          />

          <View>
            <View
              style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
            >
              <View
                style={{
                  padding: verticalScale(10),
                  borderRadius: radius._15,
                  borderWidth: 1,
                  borderColor: colors.neutral300,
                }}
              >
                <BellIcon size={verticalScale(20)} />
              </View>
              <View
                style={{
                  padding: verticalScale(10),
                  borderRadius: radius._15,
                  borderWidth: 1,
                  borderColor: colors.neutral300,
                }}
              >
                <MagnifyingGlassIcon size={verticalScale(20)} />
              </View>
            </View>
          </View>
        </View>

        {/* Header Name */}
        <View style={{ marginTop: verticalScale(20) }}>
          <Typo size={verticalScale(20)} fontWeight={"700"}>
            Hi, Umar
          </Typo>
        </View>

        {/* Header Location Section */}
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <MapPinIcon color={colors.neutral600} size={15} />
          <Typo
            color={colors.neutral600}
            size={verticalScale(13)}
            fontWeight={"400"}
          >
            6391 Elgin St. Celina, Delaware 10299
          </Typo>
        </View>


        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            marginTop: verticalScale(20),
          }}
        >
          <Typo fontWeight={"600"} size={17}>
            Appointment
          </Typo>
          <Typo fontWeight={"400"} color={colors.neutral600} size={15}>
            Today, Morning
          </Typo>
        </View>

        {/* Appointment Section */}
        <View
          style={{
            backgroundColor: colors.primary,
            justifyContent: "space-between",
            padding: verticalScale(20),
            borderRadius: radius._20,
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: verticalScale(30),
            }}
          >
            <CalendarDotsIcon color={colors.white} size={20} />
            <Typo
              color={colors.white}
              size={verticalScale(13)}
              fontWeight={"500"}
            >
              At The Galleria Hair Salon
            </Typo>
            <Typo
              color={colors.white}
              size={verticalScale(13)}
              style={{ marginLeft: verticalScale(10) }}
            >
              9:00 AM
            </Typo>
          </View>
        </View>

        {/* Services */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: verticalScale(20),
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Typo size={verticalScale(17)} fontWeight={"700"}>
              Services
            </Typo>
            <Typo size={verticalScale(17)} fontWeight={"700"}>
              View All
            </Typo>
          </View>
        </View>

        {/* Nearest Saloon */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: verticalScale(20),
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Typo size={verticalScale(17)} fontWeight={"700"}>
              Neasrest Salon
            </Typo>
            <Typo size={verticalScale(17)} fontWeight={"700"}>
              View All
            </Typo>
          </View>
        </View>

      </View>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: verticalScale(20),
    gap: verticalScale(10),
  },
});
