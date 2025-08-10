import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { scale, verticalScale } from '@/utils/styling';
import Typo from './Typo';
import { colors, radius } from '@/constants/theme';
import Button from './Button';
import { Image } from 'expo-image';

const Package = () => {
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
                width: scale(100),
                height: verticalScale(30),
                borderRadius: radius._10,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typo
                style={{ fontFamily: 'Poppins_600SemiBold' }}
                size={13}
                color={colors.white}
              >
                Book Now
              </Typo>
            </Button>
          </View>
        </View>
      </View>
    );
  };
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
  return (
    <>
      <FlatList
        style={{ marginTop: verticalScale(20) }}
        data={beautyPackages}
        renderItem={renderPackageItems}
        horizontal={false}
      />
    </>
  );
};

export default Package;

const styles = StyleSheet.create({
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
});
