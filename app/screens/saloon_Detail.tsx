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
import {ImageBackground } from 'expo-image';
import {
  Globe,
  HeartIcon,
  MapPin,
  PhoneCall,
  ShareNetwork,
} from 'phosphor-react-native';
import BackButton from '@/components/BackButton';
import Typo from '@/components/Typo';
import { colors, radius, spacingX } from '@/constants/theme';
import {verticalScale } from '@/utils/styling';
import Services from '@/components/Services';
import About from '@/components/About';
import Package from '@/components/Package';
import StarRating from '@/components/StarRating';
import Gallery from '@/components/Gallery';
import Specialist from '@/components/Specialist';
import Review from '@/components/Review'

LogBox.ignoreAllLogs();

const SaloonDetail = () => {
  const [selectedItem, setSelectedItem] = useState<string>('Review');

  //Flat List Data

  const listItems = ['About', 'Services', 'Packages', 'Gallery', 'Review'];


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
            <Specialist />
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

          {/*About Section*/}
          {selectedItem === 'About' && <About />}

          {/* Service Section */}
          {selectedItem === 'Services' && <Services />}

          {/* Packages Section */}
          {selectedItem === 'Packages' && <Package />}

          {/* Gallery Section */}
          {selectedItem === 'Gallery' && <Gallery />}

          {/* Review Section */}
          {selectedItem === 'Review' && <Review />}
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
