import React, { useState } from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  LogBox,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Image, ImageBackground } from 'expo-image';
import {
  CaretDownIcon,
  Globe,
  HeartIcon,
  MapPin,
  NavigationArrowIcon,
  PhoneCall,
  ShareNetwork,
  Star,
  StarHalf,
} from 'phosphor-react-native';
import MasonryList from 'react-native-masonry-list';
import BackButton from '@/components/BackButton';
import Button from '@/components/Button';
import Typo from '@/components/Typo';
import { colors, radius, spacingX } from '@/constants/theme';
import { scale, verticalScale } from '@/utils/styling';
import mapStyle from '@/constants/mapStyle2.json';
import { router } from 'expo-router';

LogBox.ignoreAllLogs();
const SaloonDetail = () => {
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
  //Flat List Data
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
  const listItems = ['About', 'Services', 'Packages', 'Gallery', 'Review'];

  const services = [
    { id: '1', name: 'Hair Wash', types: 12 },
    { id: '2', name: 'Hair Cut', types: 12 },
    { id: '3', name: 'Hair Coloring', types: 7 },
    { id: '4', name: 'Eye Makeup', types: 2 },
    { id: '5', name: 'Shaving', types: 6 },
    { id: '6', name: 'Hairdryer', types: 3 },
  ];

  const beautyPackages = [
    {
      id: '1',
      title: 'Bridal Beauty Makeup',
      description: 'Completed Package Offer till Sep 18, 2021',
      price: '$280.30',
      image: require('@/assets/images/makeupImage_1.png'),
    },
    {
      id: '2',
      title: 'Haircut & Hairstyle',
      description: 'Completed Package Offer till Sep 24, 2021',
      price: '$160.45',
      image: require('@/assets/images/makeupImage_2.png'),
    },
    {
      id: '3',
      title: 'Bridal Beauty Makeup',
      description: 'Completed Package Offer till Sep 18, 2021',
      price: '$280.30',
      image: require('@/assets/images/makeupImage_3.png'),
    },
    {
      id: '4',
      title: 'Haircut & Hairstyle',
      description: 'Completed Package Offer till Sep 18, 2021',
      price: '$160.45',
      image: require('@/assets/images/makeupImage_4.png'),
    },
  ];

  const barberSalonImages = [
    {
      uri: 'https://media.gettyimages.com/id/937443868/photo/barber-giving-a-haircut-in-his-shop.jpg?s=612x612&w=gi&k=20&c=fuDAUHsqwh1T0L4lfBVFIw5SFc6FZ0HXLUJtkr_3X_U=',
      width: 612,
      height: 408,
    },
    {
      uri: 'https://media.gettyimages.com/id/937443868/photo/barber-giving-a-haircut-in-his-shop.jpg?s=612x612&w=gi&k=20&c=fuDAUHsqwh1T0L4lfBVFIw5SFc6FZ0HXLUJtkr_3X_U=',
      width: 612,
      height: 408,
    },
    {
      uri: 'https://media.gettyimages.com/id/937443868/photo/barber-giving-a-haircut-in-his-shop.jpg?s=612x612&w=gi&k=20&c=fuDAUHsqwh1T0L4lfBVFIw5SFc6FZ0HXLUJtkr_3X_U=',
      dimensions: { width: 1080, height: 1920 },
    },
    {
      uri: 'https://media.gettyimages.com/id/937443868/photo/barber-giving-a-haircut-in-his-shop.jpg?s=612x612&w=gi&k=20&c=fuDAUHsqwh1T0L4lfBVFIw5SFc6FZ0HXLUJtkr_3X_U=',
    },
    {
      uri: 'https://media.gettyimages.com/id/937443868/photo/barber-giving-a-haircut-in-his-shop.jpg?s=612x612&w=gi&k=20&c=fuDAUHsqwh1T0L4lfBVFIw5SFc6FZ0HXLUJtkr_3X_U=',
    },
    {
      uri: 'https://media.gettyimages.com/id/937443868/photo/barber-giving-a-haircut-in-his-shop.jpg?s=612x612&w=gi&k=20&c=fuDAUHsqwh1T0L4lfBVFIw5SFc6FZ0HXLUJtkr_3X_U=',
    },
  ];

  // Render Items for Flat List

  const renderPopularArtist = ({ index, item }) => (
    <View
      key={index}
      style={{
        marginRight:
          index !== popularArtists.length - 1 ? verticalScale(20) : 0,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}
    >
      <Image
        source={item.image}
        contentFit="cover"
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
  const renderServiceItems = ({ index, item }) => {
    return (
      <View key={index} style={styles.serviceContainer}>
        <Typo
          style={{ fontFamily: 'Poppins_400Regular' }}
          size={14}
          color={colors.textLight}
        >
          {item.name}
        </Typo>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Typo
              style={{
                fontFamily: 'Poppins_400Regular',
                gap: verticalScale(20),
              }}
              size={14}
              color={colors.textDark}
            >
              {item.types} types
            </Typo>
            <TouchableOpacity
              style={{ margin: verticalScale(4) }}
              onPress={() => {
                router.push({
                  pathname: '/(modals)/typeDisplayModal',
                  params: { Types: item.types },
                });
              }}
            >
              <CaretDownIcon size={14} color={colors.textLight} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  const renderPackageItems = ({ index, item }) => {
    return (
      <View key={index} style={styles.packageContainer}>
        <Image source={item.image} style={styles.packageImage} />

        <View style={{ marginLeft: verticalScale(10), flex: 1 }}>
          <Typo
            size={15}
            style={{ fontFamily: 'Poppins_600SemiBold', flexWrap: 'wrap' }}
            color={colors.textDark}
          >
            {item.title}
          </Typo>

          <Typo
            size={13}
            style={{
              fontFamily: 'Poppins_400Regular',
              marginTop: verticalScale(4),
            }}
            color={colors.textLight}
          >
            {item.description}
          </Typo>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: verticalScale(20),
            }}
          >
            <Typo
              size={13}
              color={colors.primaryDark}
              style={{ flexShrink: 1 }}
            >
              {item.price}
            </Typo>

            <Button
              style={{
                width: scale(80),
                height: verticalScale(30),
                paddingVertical: verticalScale(4),
                borderRadius: radius._10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typo size={13} color={colors.white}>
                Book Now
              </Typo>
            </Button>
          </View>
        </View>
      </View>
    );
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

  //Functions
  const handlePress = (item: string) => {
    console.log('Pressed Items', item);
    setSelectedItem(item);
  };
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
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../assets/images/Salon-BackgroundImage.png')}
      >
        <StatusBar hidden />

        {/* Top Header Content (Back, Heart, Title) */}
        <View style={styles.overlayHeader}>
          <BackButton color={colors.white} />
          <TouchableOpacity style={styles.favoriteBtn}>
            <HeartIcon color={colors.white} />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* Scrollable Card Section */}
      <ScrollView
        style={styles.scrollableCard}
        showsVerticalScrollIndicator={false}
      >
        {/* Card Content */}
        <View style={styles.cardContainer}>
          {/* Name + Open */}
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

          {/* Address */}
          <Typo
            size={14}
            color="#5E5D65"
            style={{ fontFamily: 'Poppins_400Regular' }}
          >
            6391 Elgin St. Celina, Delaware 10299
          </Typo>

          {/* Rating */}
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

          {/* Icons Row */}
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

          {/* Specialists */}
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

          {/* Tabs */}
          <View style={{ marginTop: verticalScale(20) }}>
            <FlatList
              data={listItems}
              renderItem={renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          {/* Selected Tab Content */}
          {selectedItem === 'About' && (
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
                          source={require('../../assets/images/artistImage_1.png')}
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
          )}

          {selectedItem === 'Services' && (
            <View style={{ marginTop: verticalScale(20) }}>
              <FlatList
                data={services}
                renderItem={renderServiceItems}
                horizontal={false}
              />
              <Button style={{ marginTop: verticalScale(20) }}>
                <Typo
                  style={{ fontFamily: 'Poppins_600SemiBold' }}
                  color={colors.white}
                >
                  Book Now
                </Typo>
                <Typo
                  style={{ fontFamily: 'Poppins_600SemiBold' }}
                  color={colors.white}
                >
                  $ 8.12
                </Typo>
              </Button>
            </View>
          )}
          {selectedItem === 'Packages' && (
            <FlatList
              style={{ marginTop: verticalScale(20) }}
              data={beautyPackages}
              renderItem={renderPackageItems}
              horizontal={false}
            />
          )}
          {selectedItem === 'Gallery' && (
            <View style={{ flex: 1, marginTop: verticalScale(20) }}>
              <MasonryList images={barberSalonImages} columns={3} spacing={0} />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
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
    padding: verticalScale(2), // Optional spacing around the map
  },

  mapWrapper: {
    height: verticalScale(200), // Set height as needed
    borderRadius: radius._10,
    overflow: 'hidden', // IMPORTANT for borderRadius to work
  },
  marker: {
    width: verticalScale(30),
    height: verticalScale(30),
    backgroundColor: colors.white,
    borderRadius: radius._20,
    borderWidth: 1,
  },
  serviceContainer: {
    margin: verticalScale(5),
    padding: verticalScale(20),
    gap: verticalScale(10),
    flexDirection: 'row',
    backgroundColor: colors.neutral50,
    borderRadius: radius._15,
    justifyContent: 'space-between',
  },
  packageContainer: {
    flexDirection: 'row',
    padding: verticalScale(2),
    marginBottom: verticalScale(10),
    backgroundColor: colors.white,
    borderRadius: radius._15,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },

  packageImage: {
    width: verticalScale(100),
    height: verticalScale(100),
    borderRadius: radius._10,
    resizeMode: 'cover',
  },

  scrollableCard: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -verticalScale(30), // to overlap on image for card effect
    borderTopLeftRadius: radius._15,
    borderTopRightRadius: radius._15,
  },
  image: {
    resizeMode: 'cover',
  },
  galleryContainer: {
    marginTop: verticalScale(20),
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 0,
    margin: 0,
  },
});
