import React, { useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Image, ImageBackground } from 'expo-image';
import {
  Globe,
  HeartIcon,
  MapPin,
  NavigationArrowIcon,
  PhoneCall,
  ShareNetwork,
  Star,
  StarHalf,
} from 'phosphor-react-native';

import BackButton from '@/components/BackButton';
import Button from '@/components/Button';
import Typo from '@/components/Typo';
import { colors, radius } from '@/constants/theme';
import { scale, verticalScale } from '@/utils/styling';
import mapStyle from '@/constants/mapStyle2.json';

const { width, height } = Dimensions.get('window');

const SaloonDetail = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [selectedItem, setSelectedItem] = useState<string>('About');

  const StarRating = ({ rating = 0, size = verticalScale(13) }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <View style={styles.starContainer}>
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return <Star key={i} weight="fill" color="#FFAB36" size={size} />;
          } else if (i === fullStars && hasHalfStar) {
            return (
              <StarHalf key={i} weight="fill" color="#FFAB36" size={size} />
            );
          } else {
            return (
              <Star key={i} weight="regular" color="#EBEBEB" size={size} />
            );
          }
        })}
      </View>
    );
  };

  const popularArtists = [
    {
      name: 'Lilly',
      image: require('@/assets/images/artistImage_1.png'),
      specilatiy: 'Hair Stylist',
    },
    {
      name: 'Lee',
      image: require('@/assets/images/artistImage_2.png'),
      specilatiy: 'Hair Stylist',
    },
    {
      name: 'Connor',
      image: require('@/assets/images/artistImage_3.png'),
      specilatiy: 'Hair Stylist',
    },
    {
      name: 'Jason',
      image: require('@/assets/images/artistImage_4.png'),
      specilatiy: 'Hair Stylist',
    },
  ];

  const listItems = ['About', 'Services', 'Package', 'Gallery', 'Review'];

  const renderPopularArtist = ({ index, item }) => (
    <View
      key={index}
      style={{
        marginRight:
          index !== popularArtists.length - 1 ? verticalScale(20) : 0,
        alignItems: 'flex-start'
        justifyContent: 'flex-start'
      }}
    >
      <Image
        source={item.image}
        style={{ width: scale(70), height: verticalScale(72) }}
      />
      <View style={{ alignItems: 'center', marginTop: verticalScale(5) }}>
        <Typo size={13} color={colors.textDark}>
          {item.name}
        </Typo>
        <Typo size={11} color={colors.text_200}>
          {item.specilatiy}
        </Typo>
      </View>
    </View>
  );

  const handlePress = (item: string) => {
    setSelectedItem(item);
  };

  const renderItem = ({ index, item }) => (
    <View
      style={[item === selectedItem ? styles.activeItem : styles.listItemStyle]}
      key={index}
    >
      <TouchableOpacity onPress={() => handlePress(item)}>
        <Typo size={13} color={colors.text_100} style={styles.itemText}>
          {item}
        </Typo>
        {item === selectedItem && <View style={styles.underline} />}
      </TouchableOpacity>
    </View>
  );

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
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../../assets/images/Salon-BackgroundImage.png')}
    >
      <StatusBar hidden />
      <View style={styles.overlayHeader}>
        <BackButton color={colors.white} />
        <TouchableOpacity style={styles.favoriteBtn}>
          <HeartIcon color={colors.white} />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingTop: height * 0.35 }}
        showsVerticalScrollIndicator={false}
        style={styles.cardContainer}
      >
        <View style={styles.headerRow}>
          <Typo size={24} style={{ fontFamily: 'Poppins_600SemiBold' }}>
            Bella Rinova
          </Typo>
          <TouchableOpacity style={styles.openButton}>
            <Typo
              size={13}
              color={colors.white}
              style={{ fontFamily: 'Poppins_600SemiBold' }}
            >
              Open
            </Typo>
          </TouchableOpacity>
        </View>

        <Typo
          size={14}
          color="#5E5D65"
          style={{ fontFamily: 'Poppins_400Regular' }}
        >
          6391 Elgin St.Celina, Delaware 10299
        </Typo>

        <View style={styles.reviewContainer}>
          <StarRating size={15} rating={4} />
          <Typo
            size={13}
            color={colors.textLight}
            style={{
              fontFamily: 'Poppins_400Regular',
              marginLeft: verticalScale(6),
            }}
          >
            (76 reviews)
          </Typo>
        </View>

        <View style={styles.iconContainer}>
          {[
            ['Website', Globe],
            ['Call', PhoneCall],
            ['Direction', MapPin],
            ['Share', ShareNetwork],
          ].map(([label, Icon], index) => (
            <View key={index} style={styles.iconBox}>
              <Icon size={24} color={colors.black} />
              <Typo
                size={13}
                color={colors.black}
                style={{ fontFamily: 'Poppins_400Regular' }}
              >
                {label}
              </Typo>
            </View>
          ))}
        </View>

        <View style={{ marginTop: verticalScale(20) }}>
          <Typo
            size={15}
            color={colors.black}
            style={{ fontFamily: 'Poppins_600SemiBold' }}
          >
            Saloon specialists
          </Typo>

          <FlatList
            data={popularArtists}
            renderItem={renderPopularArtist}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: verticalScale(10) }}
          />
        </View>

        <View style={{ marginTop: verticalScale(20) }}>
          <FlatList
            data={listItems}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{ marginTop: verticalScale(20) }}>
          <Typo
            size={14}
            color={colors.text_600}
            style={{ fontFamily: 'Poppins_400Regular', lineHeight: 30 }}
          >
            Axe Hair salon is located in Houston, Virginia was formed in 2003.
            Opened with the premise of exceptional service for a fair price,
            Good ...Readmore
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
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
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
                  source={require('../../assets/images/artistImage_1.png')}
                  style={styles.marker}
                />
              </Marker>
            ))}
          </MapView>
        </View>

        <Button style={{ marginTop: verticalScale(20) }}>
          <NavigationArrowIcon color={colors.white} />
          <Typo
            style={{ fontFamily: 'Poppins_600SemiBold' }}
            color={colors.white}
          >
            Get Directions - 4km
          </Typo>
        </Button>
      </ScrollView>
    </ImageBackground>
  );
};

export default SaloonDetail;

const styles = StyleSheet.create({
  backgroundImage: {
    height: verticalScale(350),
    width: '100%',
  },
  overlayHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: verticalScale(20),
    paddingTop: verticalScale(40),
  },
  favoriteBtn: {
    backgroundColor: 'transparent',
    padding: verticalScale(6),
    borderRadius: radius._20,
  },
  cardContainer: {
    backgroundColor: colors.white,
    borderTopLeftRadius: verticalScale(30),
    borderTopRightRadius: verticalScale(30),
    paddingVertical: verticalScale(20),
    paddingHorizontal: verticalScale(20),
    marginBottom: verticalScale(50),
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: verticalScale(8),
  },
  openButton: {
    backgroundColor: '#4DC41F',
    paddingVertical: verticalScale(6),
    paddingHorizontal: verticalScale(16),
    borderRadius: radius._20,
  },
  starContainer: {
    flexDirection: 'row',
    gap: verticalScale(2),
    marginTop: verticalScale(5),
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(5),
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(20),
  },
  iconBox: {
    alignItems: 'center',
  },
  activeItem: {
    backgroundColor: '#191632',
    padding: verticalScale(10),
    paddingHorizontal: verticalScale(20),
    borderRadius: radius._20,
  },
  listItemStyle: {
    flexDirection: 'row',
    paddingHorizontal: verticalScale(20),
    padding: verticalScale(10),
  },
  mapContainer: {
    width: '100%',
    height: verticalScale(200),
    padding: verticalScale(50),
    borderRadius: radius._20,
  },
  marker: {
    width: verticalScale(30),
    height: verticalScale(30),
    backgroundColor: colors.white,
    borderRadius: radius._20,
    borderWidth: 1,
  },
});
