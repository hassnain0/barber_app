import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import { scale, verticalScale } from '@/utils/styling';
import Typo from './Typo';
import { colors } from '@/constants/theme';

const Specialist = () => {

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
    {
      name: 'Lilly',
      image: require('@/assets/images/artistImage_1.png'),
      specilatiy: 'Hair Stylist',
    },
  ];

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

  return (
    <View>
      <FlatList
        data={popularArtists}
        renderItem={renderPopularArtist}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: verticalScale(10) }}
      />
    </View>
  );
};

export default Specialist;

const styles = StyleSheet.create({});
