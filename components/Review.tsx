import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useRef, useState } from 'react';
import Typo from './Typo';
import StarRating from './StarRating';
import { colors, spacingY } from '@/constants/theme';
import { scale, verticalScale } from '@/utils/styling';
import Input from './Input';
import { ImageSquareIcon } from 'phosphor-react-native';
import { Image } from 'expo-image';

const Review = () => {
  const reviews = [
    {
      image: require('../assets/images/review_profile.png'),
      name: 'Vicky Pirachel',
      days: 2,
      rating: 5,
      comment:
        'The people working here are just so nice and helpful and make you feel so comfortable!',
    },
    {
      image: require('../assets/images/review_profile2.png'),
      name: 'Natalia Wierz',
      days: 2,
      rating: 3,
      comment:
        'The people working here are just so nice and helpful and make you feel so comfortable!',
    },
    {
      image: require('../assets/images/review_profile3.png'),
      name: 'Rina Baldwin',
      days: 2,
      rating: 2,
      comment:
        'The people working here are just so nice and helpful and make you feel so comfortable!',
    },
    {
      image: require('../assets/images/review_profile.png'),
      name: 'Vicky Pirachel',
      days: 2,
      rating: 4,
      comment:
        'The people working here are just so nice and helpful and make you feel so comfortable!',
    },
  ];
  const [comment, setComment] = useState('');

  const renderItem = ({ item, index }) => {
    return (
      // Main Container
      <View key={index} style={styles.container}>
        {/* Nested Container */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Image
              source={item.image}
              style={{
                width: scale(54),
                height: verticalScale(60),
                overflow: 'cover',
              }}
            />
            {/* Name and Rating Container */}
            <View style={{ marginLeft: verticalScale(10) }}>
              <Typo style={{ fontFamily: 'Poppins_600SemiBold' }}>
                {item.name}
              </Typo>
              <StarRating rating={item.rating} />
            </View>
          </View>

          {/* Days Container */}
          <Typo
            size={11}
            color={colors.textLight}
            style={{
              fontFamily: 'Poppins_400Regular',
              marginBottom: spacingY._20,
            }}
          >
            {item.days} days ago
          </Typo>
        </View>
        <Typo
          size={13}
          color={colors.text_600}
          style={{
            fontFamily: 'Poppins_400Regular',
            lineHeight: 21,
            marginTop: spacingY._10,
          }}
        >
          {item.comment}
        </Typo>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header Row */}
      <View style={styles.headerRow}>
        <Typo
          color={colors.textDark}
          size={13}
          style={{ fontFamily: 'Poppins_400Regular' }}
        >
          Write your review
        </Typo>
        <StarRating size={verticalScale(13)} rating={2} />
      </View>

      <Input
        icon={<ImageSquareIcon size={verticalScale(30)} color={colors.black} />}
        value={comment}
        onChangeText={text => setComment(text)}
        placeholder="Leave your Experience"
      />

      {/* Review Section */}
      <View style={{ marginTop: spacingY._10 }}>
        <Typo style={{ fontFamily: 'Poppins_600SemiBold' }} size={13}>
          All reviews (76)
        </Typo>

        <FlatList data={reviews} renderItem={renderItem} />
      </View>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  container: {
    marginVertical: spacingY._20,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
