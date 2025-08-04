import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Star, MapPinIcon } from 'phosphor-react-native';
import { LocationCardProps } from '@/types';
import { verticalScale } from '@/utils/styling';
import { colors } from '@/constants/theme';



const LocationCard = ({
  image,
  name,
  address,
  rating,
  distance,
}:LocationCardProps) => {
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          size={16}
          weight={i < fullStars ? 'fill' : 'regular'}
          color="#FFA500"
          style={{ marginRight: 2 }}
        />
      );
    }

    return <View style={styles.starContainer}>{stars}</View>;
  };

  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.address} numberOfLines={1} ellipsizeMode="tail">
          {address}
        </Text>

        <View style={styles.footer}>
          {renderStars()}
          <View style={styles.distanceContainer}>
            <MapPinIcon size={16} color={colors.textDark} />
            <Text style={styles.distance}>{distance} km</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LocationCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
    marginVertical: verticalScale(10),
    marginHorizontal: verticalScale(10),
    height:verticalScale(120),
  },
  image: {
    width: verticalScale(120),
    height: verticalScale(100),
    borderRadius: 12,
  },
  content: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontWeight: '700',
    fontSize: 16,
    color: '#2e2e2e',
  },
  address: {
    fontSize: 13,
    color: '#999',
    marginTop: 2,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },
  starContainer: {
    flexDirection: 'row',
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  distance: {
    fontSize: 13,
    color: '#444',
    marginLeft: 4,
  },
});
