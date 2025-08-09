import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MasonryList from 'react-native-masonry-list';
import { verticalScale } from '@/utils/styling';
const Gallery = () => {


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
  return (
    <View style={{ flex: 1, marginTop: verticalScale(20) }}>
      <MasonryList images={barberSalonImages} columns={3} spacing={0} />
    </View>
  );
};

export default Gallery;

const styles = StyleSheet.create({});
