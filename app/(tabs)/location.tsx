import Input from "@/components/Input";
import LocationCard from "@/components/LocationCards";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, radius, spacingX } from "@/constants/theme";
import { SearchItems } from "@/types";
import { verticalScale } from "@/utils/styling";
import { MagnifyingGlassIcon, MapPinIcon } from "phosphor-react-native";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import { StatusBar } from 'react-native';
import mapStyle from '../../constants/mapStyle.json';
import {Image} from 'expo-image';
const LocationScreen = () => {
  const nearestSaloon: SearchItems[] = [
    {
      name: "Lilly",
      image: require('@/assets/images/saloon_Image_1.png'),
      address: "6391 Elgin St. Celina, Delaware 10299",
      rating:4,
      distance: 25,
    },
    {
      name: "Lee",
      image: require('@/assets/images/saloon_Image_2.png'),
      address: "6391 Elgin St. Celina, Delaware 10299",
      rating: 3,
      distance: 25,
    },
    {
      name: "Connor",
      image: require('@/assets/images/saloon_Image_3.png'),
      address: "6391 Elgin St. Celina, Delaware 10299",
      rating: 4,
      distance: 25,
    },
    {
      name: "Jason",
      image: require('@/assets/images/saloon_Image_1.png'),
      address: "6391 Elgin St. Celina, Delaware 10299",
      rating: 4,
      distance: 25,
    },
  ];
  
  const HeaderComponent=()=>{
    return(
      <View style={{alignItems:'center',justifyContent:"center",    marginTop:verticalScale(30)}}>
        <View style={{flexDirection:"row",alignItems:'flex-start'}}>
          <MapPinIcon/>
        <Typo fontWeight={"400"} size={14}>6391 Elgin St. Celina, Delaware 10299</Typo>
        </View>
        <View style={{marginBottom:verticalScale(10)}}>
         <Input  placeholder="Search " icon={<MagnifyingGlassIcon  color={colors.neutral400}/>} filter={true} containerStyle={styles.containerStyle}  />
      </View>
      </View>
    )
  } 

  const renderItem = ({ item }: { item: SearchItems }) => (
    <View >
      <LocationCard
        name={item.name}
        image={item.image}
        address={item.address}
        rating={item.rating}
        distance={item.distance}
      />
    </View>
  );

  const MapMarker={
    latitude: 25.4304,
        longitude: 68.2809,
        latitudeDelta: 10,
        longitudeDelta: 10,
  }
  const MapMarker2={
    latitude: 25.5304,
        longitude: 68.2809,
        latitudeDelta: 10,
        longitudeDelta: 10,
  }
  const MapMarker3={
    latitude: 25.6304,
        longitude: 68.2809,
        latitudeDelta: 10,
        longitudeDelta: 10,
  }
  return (
    <ScreenWrapper>
      <StatusBar hidden />
      <View style={{ flex: 1,alignItems:'center',justifyContent:"center", }}>
        <MapView
        customMapStyle={mapStyle}
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
        latitude: 25.4304,
        longitude: 68.2809,
        latitudeDelta: 10,
        longitudeDelta: 10,
          }}
        >
          <Marker coordinate={MapMarker}>
            <Image source={require('../../assets/images/artistImage_1.png')} style={styles.marker}/>
          </Marker>
 <Marker coordinate={MapMarker2}>
            <Image source={require('../../assets/images/artistImage_1.png')} style={styles.marker}/>
          </Marker>
          <Marker coordinate={MapMarker3}>
            <Image source={require('../../assets/images/artistImage_1.png')} style={styles.marker}/>
          </Marker>
        </MapView>
        <View style={styles.topComponent}>
          <HeaderComponent/>
        </View>
        {/* Horizontal list overlay */}
        <View style={styles.cardContainer}>
          <FlatList
            data={nearestSaloon}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  topComponent:{
    position: 'absolute',
    top:0,
    left: 0,
    right: 0,
    paddingHorizontal: verticalScale(2),
    backgroundColor:colors.white,
    marginHorizontal:verticalScale(1),
    borderBottomLeftRadius:radius._30,
    borderBottomRightRadius:radius._30,

    
  },
  cardContainer: {
    position: 'absolute',
    bottom: verticalScale(60),
    left: 0,
    right: 0,
    paddingHorizontal: verticalScale(2),
  },
   containerStyle:{
  
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
          width: '90%',
  
    },
    marker:
    {
      width:verticalScale(30),
      height:verticalScale(30),
      backgroundColor:colors.white,
      borderRadius:radius._10
    }
});
