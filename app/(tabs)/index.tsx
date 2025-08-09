import ScreenWrapper from '@/components/ScreenWrapper';
import StarRating from '@/components/StarRating';
import Typo from '@/components/Typo';
import { colors, radius, spacingX } from '@/constants/theme';
import { verticalScale } from '@/utils/styling';
import { router } from 'expo-router';
import {
  BellIcon,
  CalendarDotsIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  Star,
  StarHalf,
} from 'phosphor-react-native';
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

const Home = () => {
  const services_Data = [
    {
      title: 'Haircuts',
      image: require('../../assets/images/service_Image_1.png'),
    },
    {
      title: 'Skin Care',
      image: require('../../assets/images/service_Image_2.png'),
    },
    {
      title: 'Hair Color',
      image: require('../../assets/images/service_Image_3.png'),
    },
    {
      title: 'Haircuts',
      image: require('../../assets/images/service_Image_1.png'),
    },
  ];

  const saloon_Data = [
    {
      title: 'Bella Rinova',
      image: require('../../assets/images/saloon_Image_1.png'),
      address: '6391 Elgin St. Celina, Delaware 1...0299',
      distance: 5,
    },
    {
      title: 'Bella Rinova',
      image: require('../../assets/images/saloon_Image_2.png'),
      address: '6391 Elgin St. Celina, Delaware 1...0299',
      distance: 5,
    },
  ];

  const popular_saloon_Data = [
    {
      title: 'Bella Rinova',
      image: require('../../assets/images/saloon_Image_1.png'),
      address: '6391 Elgin St. Celina, Delaware 1...0299',
      distance: 5,
    },
    {
      title: 'Bella Rinova',
      image: require('../../assets/images/saloon_Image_2.png'),
      address: '6391 Elgin St. Celina, Delaware 1...0299',
      distance: 5,
    },
    {
      title: 'Bella Rinova',
      image: require('../../assets/images/saloon_Image_3.png'),
      address: '6391 Elgin St. Celina, Delaware 1...0299',
      distance: 5,
    },
    // ... add more items here
  ];

  const itemRender = ({ item, index }: any) => {
    return (
      <View key={index} style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <Typo size={verticalScale(13)} fontWeight={'400'}>
          {item.title}
        </Typo>
      </View>
    );
  };

  const saloonItemRender = ({ item, index }: any) => {
    return (
      <TouchableOpacity
        onPress={() => router.navigate('/screens/saloon_Detail')}
        key={index}
        style={styles.saloon_slide}
      >
        <Image source={item.image} style={styles.saloon_image} />
        <View>
          {/* Title Container */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}
          >
            <Typo size={verticalScale(17)} fontWeight={'800'}>
              {item.title}
            </Typo>
            <StarRating rating={5} />
          </View>

          {/* Address Container */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: verticalScale(5),
            }}
          >
            <Typo
              color={colors.textLight}
              size={verticalScale(15)}
              fontWeight={'600'}
            >
              {item.address}
            </Typo>
            <View style={{ flexDirection: 'row' }}>
              <MapPinIcon size={15} />
              <Typo
                color={colors.textDark}
                size={verticalScale(13)}
                fontWeight={'400'}
              >
                {item.distance} km
              </Typo>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

 

  const popularSaloonItemRender = ({ item, index }: any) => {
    return (
      <View key={index} style={styles.popular_saloon_slide}>
        <Image source={item.image} style={styles.image} />
        <View>
          {/* Title Container */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}
          >
            <Typo size={verticalScale(17)} fontWeight={'800'}>
              {item.title}
            </Typo>
          </View>

          {/* Address Container */}
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',

              marginTop: verticalScale(5),
            }}
          >
            <Typo
              color={colors.textLight}
              size={verticalScale(15)}
              fontWeight={'600'}
            >
              {item.address}
            </Typo>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              <StarRating rating={5} size={verticalScale(13)} />
              <View style={{ flexDirection: 'row' }}>
                <MapPinIcon size={15} />
                <Typo
                  color={colors.textDark}
                  size={verticalScale(13)}
                  fontWeight={'400'}
                >
                  {item.distance} km
                </Typo>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScreenWrapper style={{ backgroundColor: colors.white }}>
      <FlatList
        data={popular_saloon_Data}
        renderItem={popularSaloonItemRender}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.container}>
            {/* Header Section */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}
            >
              <Image
                source={require('../../assets/images/profile.png')}
                style={{ height: 40, width: 40 }}
              />
              <View style={{ flexDirection: 'row', gap: 10 }}>
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

                <TouchableOpacity
                  onPress={() => {
                    router.push('/(modals)/searchSaloonModal');
                  }}
                  style={{
                    padding: verticalScale(10),
                    borderRadius: radius._15,
                    borderWidth: 1,
                    borderColor: colors.neutral300,
                  }}
                >
                  <MagnifyingGlassIcon size={verticalScale(20)} />
                </TouchableOpacity>
              </View>
            </View>

            <Typo size={verticalScale(20)} fontWeight="700">
              Hi, Umar
            </Typo>

            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
            >
              <MapPinIcon color={colors.neutral600} size={15} />
              <Typo
                color={colors.neutral600}
                size={verticalScale(13)}
                fontWeight="400"
              >
                6391 Elgin St. Celina, Delaware 10299
              </Typo>
            </View>

            {/* Appointment Section */}
            <Typo style={{ fontFamily: 'Poppins_600SemiBold' }} size={17}>
              Appointment
            </Typo>
            <View
              style={{
                backgroundColor: colors.primary,
                padding: verticalScale(20),
                borderRadius: radius._20,
                alignItems: 'center',
                marginTop: verticalScale(10),
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: verticalScale(30),
                }}
              >
                <CalendarDotsIcon color={colors.white} size={20} />
                <Typo
                  color={colors.white}
                  size={verticalScale(13)}
                  fontWeight="500"
                >
                  At The Galleria Hair Salon
                </Typo>
                <Typo color={colors.white} size={verticalScale(13)}>
                  9:00 AM
                </Typo>
              </View>
            </View>

            {/* Services Section */}
            <View style={{ marginTop: verticalScale(10) }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typo style={{ fontFamily: 'Poppins_600SemiBold' }} size={17}>
                  Services
                </Typo>
                <TouchableOpacity>
                  <Typo fontWeight="400" color={colors.neutral600} size={15}>
                    View All
                  </Typo>
                </TouchableOpacity>
              </View>
              <FlatList
                horizontal
                data={services_Data}
                keyExtractor={(_, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                renderItem={itemRender}
              />
            </View>

            {/* Nearest Saloon Section */}
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typo style={{ fontFamily: 'Poppins_600SemiBold' }} size={17}>
                  Nearest Saloon
                </Typo>
                <TouchableOpacity>
                  <Typo fontWeight="400" color={colors.neutral600} size={15}>
                    View All
                  </Typo>
                </TouchableOpacity>
              </View>
              <FlatList
                horizontal
                data={saloon_Data}
                keyExtractor={(_, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                renderItem={saloonItemRender}
              />
            </View>

            {/* Popular Saloon Section Header */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: verticalScale(5),
              }}
            >
              <Typo style={{ fontFamily: 'Poppins_600SemiBold' }} size={17}>
                Popular Saloon
              </Typo>
              <TouchableOpacity>
                <Typo fontWeight="400" color={colors.neutral600} size={15}>
                  View All
                </Typo>
              </TouchableOpacity>
            </View>
          </View>
        }
      />
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: verticalScale(20),
    paddingHorizontal: spacingX._10,
    gap: verticalScale(10),
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: verticalScale(8),
    margin: verticalScale(7),
  },
  saloon_slide: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: verticalScale(10),
    margin: verticalScale(8),
  },
  popular_saloon_slide: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: verticalScale(8),
    margin: verticalScale(10),
  },

  swipper_container: {
    height: 180,
  },
  popular_swipper_container: {
    height: verticalScale(500),
  },

  image: {
    // width: width * 0.35,
    height: verticalScale(100),
    width: verticalScale(100),

    borderRadius: radius._20,
  },
  saloon_image: {
    // width: width * 0.35,
    height: verticalScale(100),
    width: verticalScale(300),

    borderRadius: radius._20,
  },
  popular_saloon_image: {
    // width: width * 0.35,
    height: verticalScale(100),
    width: verticalScale(100),

    borderRadius: radius._20,
  },

  starContainer: {
    gap: verticalScale(2),
    marginTop: verticalScale(5),
    flexDirection: 'row',
  },
});
