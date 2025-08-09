import Button from "@/components/Button";
import ScreenWrapper from "@/components/ScreenWrapper";
import StarRating from "@/components/StarRating";
import Typo from "@/components/Typo";
import { colors, radius, spacingX, spacingY } from "@/constants/theme";
import { scale, verticalScale } from "@/utils/styling";
import { Image } from "expo-image";
import { router } from "expo-router";
import { MapPinIcon, Star, StarHalf } from "phosphor-react-native";
import React, { useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const paymentVerifyModal = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);


  const paymentData = [
    {
      name: "PayPal",
      accountHolder: "Umar Farooq",
      image: require("../../assets/images/Paypal.png"),
    },
    {
      name: "Master",
      accountHolder: "**** **** **** 8295",
      image: require("../../assets/images/MasterCard.png"),
    },
    {
      name: "Visa",
      accountHolder: "**** **** **** 5445",
      image: require("../../assets/images/VisaCard.png"),
    },
  ];

  const renderItem = ({ index, item }: any) => {
    const isSelected = index === selectedIndex;
    return (
      <TouchableOpacity
        key={index}
        style={[
          styles.paymentItem,
          {
            borderWidth: 2,
            borderColor: isSelected ? colors.primary : "transparent",
          },
        ]}
        onPress={() => setSelectedIndex(index)}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Image
            source={item.image}
            style={{
              width: scale(30),
              height: verticalScale(30),
              resizeMode: "contain",
            }}
          />
          <Typo
            color={colors.textLight}
            style={{ marginLeft: verticalScale(20) }}
          >
            {item.accountHolder}
          </Typo>
        </View>

        <BouncyCheckbox
          isChecked={isSelected} // ✅ Only check if selected
          size={25}
          fillColor={colors.primary}
          unFillColor="#EBEBEB"
          innerIconStyle={{ borderWidth: 2 }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View>
          <Typo style={{ fontFamily: "Poppins_600SemiBold" }} size={24}>
            Book Appointment
          </Typo>
          <View style={styles.cardContainer}>
            <Image
              source={require("../../assets/images/saloon_Image_1.png")}
              style={styles.cardImage}
            />
            <View style={{ marginLeft: verticalScale(10) }}>
              {/* Title Container */}
              <View>
                <Typo
                  style={{ fontFamily: "Poppins_400Regular" }}
                  size={verticalScale(13)}
                  fontWeight={"800"}
                >
                  Bella Rinova
                </Typo>
                <Typo
                  color={colors.textLight}
                  size={verticalScale(15)}
                  fontWeight={"600"}
                >
                  8502 Preston Rd. Inglewood, M...
                </Typo>
              </View>

              {/* Address Container */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: verticalScale(5),
                }}
              >
                <StarRating rating={5} />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <MapPinIcon size={15} />
                  <Typo
                    color={colors.textDark}
                    size={verticalScale(13)}
                    fontWeight={"400"}
                  >
                    25 km
                  </Typo>
                </View>
              </View>
            </View>
          </View>

          {/* Services Section */}
          <View style={{ marginTop: verticalScale(20) }}>
            <Typo
              size={17}
              style={{ fontFamily: "Poppins_600SemiBold" }}
              color={colors.textDark}
              fontWeight={"600"}
            >
              Services
            </Typo>

            <View style={styles.serviceContainer}>
              <View style={styles.nestedServiceContainer}>
                <Image
                  style={{
                    resizeMode: "contain",
                    width: scale(40),
                    height: verticalScale(40),
                    borderRadius: radius._6,
                  }}
                  source={require("../../assets/images/service_Image1.png")}
                />
                <Typo style={{ fontFamily: "Poppins_400Regular" }} size={15}>
                  Regular haricut
                </Typo>
              </View>
              <Typo color={colors.primary}>$ 5.00</Typo>
            </View>
            <View style={styles.serviceContainer}>
              <View style={styles.nestedServiceContainer}>
                <Image
                  style={{
                    resizeMode: "contain",
                    width: scale(40),
                    height: verticalScale(40),
                    borderRadius: radius._6,
                  }}
                  source={require("../../assets/images/service_Image2.png")}
                />
                <Typo size={15}>Classic Shaving</Typo>
              </View>
              <Typo color={colors.primary}>$ 3.12</Typo>
            </View>
          </View>

          {/* Date and Time */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: verticalScale(30),
            }}
          >
            <Typo style={{ fontFamily: "Poppins_600SemiBold" }} size={17}>
              Date & Time
            </Typo>
            <Typo size={15} color={colors.primary}>
              12 September, 12:00
            </Typo>
          </View>

          {/* Payment Section */}
          <View style={{ marginTop: verticalScale(30) }}>
            <Typo
              size={17}
              style={{ fontFamily: "Poppins_600SemiBold" }}
              color={colors.textDark}
              fontWeight={"600"}
            >
              Payment Method
            </Typo>
            <FlatList
              data={paymentData}
              renderItem={renderItem}
              horizontal={false}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: verticalScale(20),
            }}
          >
            <TouchableOpacity
              onPress={() => router.back()}
              style={{ flex: 0.25 }}
            >
              <Typo
                style={{ textAlign: "center" }}
                size={17}
                color={colors.neutral600}
              >
                Back
              </Typo>
            </TouchableOpacity>

            <Button
              onPress={() => router.push("/(modals)/verifiedModal")}
              style={{ flex: 0.75 }}
            >
              <Typo color={colors.white}>Continue $8.12</Typo>
            </Button>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default paymentVerifyModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: spacingY._10,
    paddingHorizontal: spacingX._20,
  },
  cardContainer: {
    marginTop: verticalScale(20),
    flexDirection: 'row',
    gap: verticalScale(2),
    alignItems: 'flex-start',
  },
  cardImage: {
    height: verticalScale(100),
    width: scale(100),

    borderRadius: radius._20,
  },
  starContainer: {
    gap: verticalScale(2),
    marginTop: verticalScale(5),
    flexDirection: 'row',
  },
  serviceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: verticalScale(20),
    marginTop: verticalScale(10),
  },
  nestedServiceContainer: {
    gap: verticalScale(10),
    flexDirection: 'row',
  },

  acitveItem: {
    borderColor: colors.primary,
    borderWidth: 5,
  },
  paymentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: verticalScale(6),
    gap: verticalScale(10),
    backgroundColor: colors.neutral50,
    borderRadius: radius._15,
    padding: verticalScale(15),
  },
});
