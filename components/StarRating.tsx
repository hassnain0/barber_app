import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { verticalScale } from '@/utils/styling';
import { Star, StarHalf } from 'phosphor-react-native';



const StarRating = ({ rating = 0, size = verticalScale(13) }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <View style={styles.starContainer}>
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          return <Star key={i} weight="fill" color="#FFAB36" size={size} />;
        } else if (i === fullStars && hasHalfStar) {
          return <StarHalf key={i} weight="fill" color="#FFAB36" size={size} />;
        } else {
          return <Star key={i} weight="regular" color="#EBEBEB" size={size} />;
        }
      })}
    </View>
  );
};

export default StarRating

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: 'row',
    gap: verticalScale(2),
    marginTop: verticalScale(5),
  },
});