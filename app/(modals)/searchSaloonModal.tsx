import Button from "@/components/Button";
import Input from "@/components/Input";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, radius, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { Image } from "expo-image";
import { MagnifyingGlassIcon, MapPinIcon, X } from "phosphor-react-native";
import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
const searchSaloon = () => {
  //use State Hooks
  const [selectedItem, setSelectedItem] = useState<string>("All");

  const searchItems = [
    "All",
    "Haircuts",
    "MakeUp",
    "Massage",
    "Nails",
    "Spa",
    "Bridal",
    "Packages",
  ];
  const popularArtists = [
    {
      name: "Lilly",
      image: require("@/assets/images/artistImage_1.png"),
      specilatiy: "Hair Stylist",
    },
    {
      name: "Lee",
      image: require("@/assets/images/artistImage_2.png"),
      specilatiy: "Hair Stylist",
    },
    {
      name: "Connor",
      image: require("@/assets/images/artistImage_3.png"),
      specilatiy: "Hair Stylist",
    },
    {
      name: "Jason",
      image: require("@/assets/images/artistImage_4.png"),
      specilatiy: "Hair Stylist",
    },
  ];

  const searchResults = [
    {
      name: "Green Apple",
      image: require("@/assets/images/saloon_Image_1.png"),
      address: "123, Main Street, City",
      rating: 4.5,
      distance: 15,
    },
    {
      name: "Green Apple",
      image: require("@/assets/images/saloon_Image_2.png"),
      address: "123, Main Street, City",
      rating: 4.5,
      distance: 15,
    },
    {
      name: "Green Apple",
      image: require("@/assets/images/saloon_Image_3.png"),
      address: "123, Main Street, City",
      rating: 4.5,
      distance: 15,
    },
    {
      name: "Green Apple",
      image: require("@/assets/images/saloon_Image_1.png"),
      address: "123, Main Street, City",
      rating: 4.5,
      distance: 15,
    },
    {
      name: "Green Apple",
      image: require("@/assets/images/saloon_Image_1.png"),
      address: "123, Main Street, City",
      rating: 4.5,
      distance: 15,
    },
  ];

  const renderItem = ({ index, item }) => (
    <View
      style={{
        flexDirection: "row",
        gap: verticalScale(10),
        paddingHorizontal: verticalScale(20),
      }}
      key={index}
    >
      <TouchableOpacity onPress={() => handlePress(item)}>
        <Typo
          size={13}
          color={colors.text_100}
          style={[
            styles.itemText,
            item === selectedItem ? styles.activeItem : {},
          ]}
        >
          {item}
        </Typo>
        {item === selectedItem && <View style={styles.underline} />}
      </TouchableOpacity>
    </View>
  );

  const renderPopularArtist = ({ index, item }) => (
    <View
      key={index}
      style={{
        paddingHorizontal: verticalScale(20),
        alignItems: "center",
        marginVertical: verticalScale(10),
      }}
    >
      <Image source={item.image} style={{ width: 64, height: 64 }} />
      <View style={{ alignItems: "center", marginTop: verticalScale(5) }}>
        <Typo size={13} color={colors.textDark}>
          {item.name}
        </Typo>
        <Typo size={11} color={colors.text_200}>
          {item.specilatiy}
        </Typo>
      </View>
    </View>
  );

  const renderSearchItem = ({ index, item }) => (
    <View
      key={index}
      style={{
        flexDirection: "row",
        paddingHorizontal: verticalScale(5),
        alignItems: "flex-start",
        marginVertical: verticalScale(15),
      }}
    >
      {/* Thumbnail */}
      <View
        style={{
          borderRadius: radius._17,
          overflow: "hidden",
          marginBottom: verticalScale(5),
        }}
      >
        <Image
          source={item.image}
          style={{ width: 96, height: verticalScale(80) }}
        />
      </View>

      {/* Details */}
      <View style={{ flex: 1, paddingHorizontal: verticalScale(20) }}>
        <Typo size={15} color={colors.textDark}>
          {item.name}
        </Typo>
        <Typo size={15} color={colors.textLight}>
          {item.address}
        </Typo>

        {/* Rating, Distance, Book Button */}
        <View
          style={{
            flexDirection: "row",
            marginTop: verticalScale(5),
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left side: Rating + Distance */}
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Typo size={13} color={"#FFAB36"}>
              ⭐ {item.rating}
            </Typo>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MapPinIcon size={15} color={colors.textDark} />
              <Typo size={13} color={colors.textDark}>
                {" "}
                {item.distance} km
              </Typo>
            </View>
          </View>

          {/* Right side: Book Button */}
          <Button
            style={{
              width: 60,
              height: verticalScale(30),
              borderRadius: radius._10,
              backgroundColor: colors.primary, // Adjust to your theme
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typo color={colors.white} size={13}>
              Book
            </Typo>
          </Button>
        </View>
      </View>
    </View>
  );

  const handlePress = (item: string) => {
    setSelectedItem(item);
  };
  return (
    <ScreenWrapper>
      <ScrollView
        keyboardDismissMode="none"
        automaticallyAdjustKeyboardInsets={true}
      >
        {/* Main Container */}
        <View style={styles.container}>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              paddingHorizontal: verticalScale(20),
              paddingTop: verticalScale(10),
            }}
          >
            <Input
              placeholder="Search "
              icon={<MagnifyingGlassIcon color={colors.neutral400} />}
              filter={true}
              containerStyle={styles.containerStyle}
            />
            <X
              size={16}
              color={colors.black}
              style={{ paddingLeft: verticalScale(15) }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: verticalScale(20),
              marginTop: verticalScale(20),
            }}
          >
            <FlatList
              data={searchItems}
              renderItem={renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View
            style={{
              paddingHorizontal: verticalScale(15),
              paddingTop: verticalScale(10),
            }}
          >
            <Typo size={17} color={colors.textDark} fontWeight={"600"}>
              Popular Artist
            </Typo>
            <View style={{ paddingTop: verticalScale(10) }}>
              <FlatList
                data={popularArtists}
                renderItem={renderPopularArtist}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: verticalScale(15),
              paddingTop: verticalScale(10),
            }}
          >
            <Typo size={13} color={colors.textDark} fontWeight={"600"}>
              Results Found(246)
            </Typo>
            <FlatList
              data={searchResults}
              renderItem={renderSearchItem}
              horizontal={false}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};
export default searchSaloon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
   
        paddingVertical: spacingY._20,
  },
  containerStyle: {
    flexDirection: "row",
    height: verticalScale(60),
    alignItems: "center",
    backgroundColor: colors.neutral50,
    justifyContent: "center",
    borderColor: colors.neutral300,
    borderRadius: radius._17,
    borderCurve: "continuous",
    gap: spacingX._20,
    marginTop: spacingX._10,
    width: "90%",
  },
  starContainer: {
    gap: verticalScale(2),
    marginTop: verticalScale(5),
    flexDirection: "row",
  },
  itemText: {
    fontSize: 16,
    color: colors.text_100,
    paddingVertical: 10,
  },
  activeItem: {
    fontWeight: "bold",
    color: colors.textDark,
  },
  underline: {
    height: 3,
    backgroundColor: colors.primary,
    marginTop: 4,
    borderRadius: 2,
  },
});
