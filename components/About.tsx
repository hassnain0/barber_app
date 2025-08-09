import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { verticalScale } from '@/utils/styling'
import Typo from './Typo'
import { colors, radius, spacingX } from '@/constants/theme'
import Button from './Button'
import MapView, { Marker } from 'react-native-maps'

import mapStyle from '@/constants/mapStyle2.json';
import { Image } from 'expo-image'
import { NavigationArrowIcon } from 'phosphor-react-native'

const About = () => {

    //Map Markers Array
    const MapMarkers = [
      {
        latitude: 25.4304,
        longitude: 68.2809,
      },
      {
        latitude: 25.5304,
        longitude: 68.2809,
      },
      {
        latitude: 25.6304,
        longitude: 68.2809,
      },
    ];
  return (
    <>
                 <View style={{ marginTop: verticalScale(20) }}>
                   <Typo
                     size={14}
                     color={colors.text_600}
                     style={{ fontFamily: 'Poppins_400Regular', lineHeight: 30 }}
                   >
                     Axe Hair salon is located in Houston, Virginia was formed in
                     2003. Opened with the premise of exceptional service for a
                     fair price, Good ...Readmore
                   </Typo>
                 </View>
   
                 <View style={{ marginTop: verticalScale(20) }}>
                   <Typo
                     size={15}
                     color={colors.black}
                     style={{ fontFamily: 'Poppins_600SemiBold' }}
                   >
                     Opening Hours
                   </Typo>
   
                   <View
                     style={{
                       flexDirection: 'row',
                       justifyContent: 'space-between',
                       marginTop: verticalScale(20),
                     }}
                   >
                     <Typo
                       size={14}
                       color={colors.textLight}
                       style={{ fontFamily: 'Poppins_400Regular' }}
                     >
                       Monday - Friday
                     </Typo>
                     <Typo
                       size={14}
                       color={colors.black}
                       style={{ fontFamily: 'Poppins_400Regular' }}
                     >
                       8:30 am - 9:30 am
                     </Typo>
                   </View>
   
                   <View
                     style={{
                       flexDirection: 'row',
                       justifyContent: 'space-between',
                     }}
                   >
                     <Typo
                       size={14}
                       color={colors.textLight}
                       style={{ fontFamily: 'Poppins_400Regular' }}
                     >
                       Saturday - Sunday
                     </Typo>
                     <Typo
                       size={14}
                       color={colors.black}
                       style={{ fontFamily: 'Poppins_400Regular' }}
                     >
                       9:00 am - 1:00 pm
                     </Typo>
                   </View>
                 </View>
   
                 <View style={{ marginTop: verticalScale(20) }}>
                   <Typo
                     size={15}
                     color={colors.black}
                     style={{ fontFamily: 'Poppins_600SemiBold' }}
                   >
                     Contact
                   </Typo>
                   <Typo
                     size={15}
                     color={colors.primary}
                     style={{
                       fontFamily: 'Poppins_400Regular',
                       textDecorationColor: colors.primary,
                       textDecorationLine: 'underline',
                     }}
                   >
                     583 463 23 34
                   </Typo>
                 </View>
   
                 <View style={{ marginTop: verticalScale(20) }}>
                   <Typo
                     size={15}
                     color={colors.black}
                     style={{ fontFamily: 'Poppins_600SemiBold' }}
                   >
                     Address
                   </Typo>
                   <Typo
                     size={15}
                     color={colors.text_600}
                     style={{ fontFamily: 'Poppins_400Regular' }}
                   >
                     6391 Elgin St.Celina, Delaware 10299
                   </Typo>
                 </View>
   
                 <View style={styles.mapContainer}>
                   <View style={styles.mapWrapper}>
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
                       {MapMarkers.map((coord, index) => (
                         <Marker coordinate={coord} key={index}>
                           <Image
                             source={require('@/assets/images/artistImage_1.png')}
                             style={styles.marker}
                           />
                         </Marker>
                       ))}
                     </MapView>
                   </View>
                 </View>
   
                 <Button style={{ marginTop: verticalScale(20) }}>
                   <View
                     style={{
                       flexDirection: 'row',
                       alignItems: 'center',
                       marginLeft: spacingX._30,
                     }}
                   >
                     <NavigationArrowIcon
                       color={colors.white}
                       style={{
                         marginRight: verticalScale(10),
                       }}
                     />
                     <Typo
                       style={{ fontFamily: 'Poppins_600SemiBold' }}
                       color={colors.white}
                     >
                       Get Directions - 4km
                     </Typo>
                   </View>
                 </Button>
               </>
  )
}

export default About

const styles = StyleSheet.create({
  mapContainer: {
    padding: verticalScale(2), // Optional spacing around the map
  },
  marker: {
    width: verticalScale(30),
    height: verticalScale(30),
    backgroundColor: colors.white,
    borderRadius: radius._20,
    borderWidth: 1,
  },
  mapWrapper: {
    height: verticalScale(200), // Set height as needed
    borderRadius: radius._10,
    overflow: 'hidden', // IMPORTANT for borderRadius to work
  },
});