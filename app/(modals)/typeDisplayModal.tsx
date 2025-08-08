import { FlatList, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from '@/components/ScreenWrapper';
import { colors, radius, spacingX, spacingY } from '@/constants/theme';
import Typo from '@/components/Typo';
import { scale, verticalScale } from '@/utils/styling';
import { Image } from 'expo-image';
import { X } from 'phosphor-react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Button from '@/components/Button';
import { ManTypeProps } from '@/types';
import { useLocalSearchParams, useRouter } from 'expo-router';

const manType: ManTypeProps[] = [
  {
    name: 'Temple fade',
    booked: 1023,
    price: 5.0,
    selected: false,
    image: require('@/assets/images/type_Image_1.png'),
  },
  {
    name: 'Undercut',
    booked: 708,
    price: 6.0,
    selected: false,
    image: require('@/assets/images/type_Image_2.png'),
  },
  {
    name: 'Regular haircut',
    booked: 669,
    price: 5.0,
    selected: false,
    image: require('@/assets/images/type_Image_3.png'),
  },
  {
    name: 'Quiff',
    booked: 356,
    price: 6.0,
    selected: false,
    image: require('@/assets/images/type_Image_2.png'),
  },
  {
    name: 'Crew cut',
    booked: 213,
    price: 5.0,
    selected: false,
    image: require('@/assets/images/type_Image_3.png'),
  },
  {
    name: 'Comb over',
    booked: 209,
    price: 6.0,
    selected: false,
    image: require('@/assets/images/type_Image_4.png'),
  },
  {
    name: 'Temple fade',
    booked: 1023,
    price: 5.0,
    selected: false,
    image: require('@/assets/images/type_Image_1.png'),
  },
  {
    name: 'Undercut',
    booked: 708,
    price: 6.0,
    selected: false,
    image: require('@/assets/images/type_Image_2.png'),
  },
  {
    name: 'Regular haircut',
    booked: 669,
    price: 5.0,
    selected: false,
    image: require('@/assets/images/type_Image_3.png'),
  },
  {
    name: 'Quiff',
    booked: 356,
    price: 6.0,
    selected: false,
    image: require('@/assets/images/type_Image_2.png'),
  },
  {
    name: 'Crew cut',
    booked: 213,
    price: 5.0,
    selected: false,
    image: require('@/assets/images/type_Image_3.png'),
  },
  {
    name: 'Comb over',
    booked: 209,
    price: 6.0,
    selected: false,
    image: require('@/assets/images/type_Image_4.png'),
  },
];
const typeDisplayModal = () => {
  const { Types } = useLocalSearchParams();

  const [selectedType, setSelectedType] = useState<String>('Man');
  const [types, setTypes] = useState<ManTypeProps[]>(manType);
  const router = useRouter();

  const numberOfItems = Types ? parseInt(Types as string, 10) : types.length;
  const dataToRender = types.slice(0, numberOfItems);

  // Array of Objects

  const renderManItem = ({ item }: { item: ManTypeProps }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setTypes(prevTypes =>
            prevTypes.map(t =>
              t.name === item.name ? { ...t, selected: !t.selected } : t,
            ),
          );
        }}
        style={[
          item.selected ? styles.renderActiveContainer : styles.renderContainer,
        ]}
      >
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={item.image}
              style={{
                width: scale(80),
                height: verticalScale(69),
                borderRadius: radius._20,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: spacingX._10,
              }}
            >
              <View>
                <Typo
                  color={colors.black}
                  style={{ fontFamily: 'Poppins_600SemiBold' }}
                >
                  {item.name}
                </Typo>
                <Typo
                  size={13}
                  color={colors.textLight}
                  style={{ fontFamily: 'Poppins_400Regular' }}
                >
                  {item.booked} booked
                </Typo>
                <Typo
                  size={13}
                  color={colors.primaryDark}
                  style={{ fontFamily: 'Poppins_400Regular' }}
                >
                  ${item.price.toFixed(2)}
                </Typo>
              </View>
            </View>
          </View>
          <BouncyCheckbox
            isChecked={item.selected}
            size={26}
            fillColor={colors.primary}
            unFillColor="#EBEBEB"
            innerIconStyle={{ borderColor: 'transparent' }}
            onPress={() => {
              setTypes(prevTypes =>
                prevTypes.map(t =>
                  t.name === item.name ? { ...t, selected: !t.selected } : t,
                ),
              );
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScreenWrapper>
      {/* Main Container */}
      <ScrollView style={styles.container}>
        <View style={styles.nestedContainer}>
          {/* Header Nested Container */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: verticalScale(10),
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={[
                  selectedType == 'Man'
                    ? styles.activeButtonContainer
                    : styles.nonActiveButtonContainer,
                ]}
                onPress={() => setSelectedType('Man')}
              >
                <Typo
                  size={13}
                  color={
                    selectedType == 'Man' ? colors.white : colors.textLight
                  }
                  style={{ fontFamily: 'Poppins_600SemiBold' }}
                >
                  Man
                </Typo>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setSelectedType('Woman')}
                style={[
                  selectedType == 'Woman'
                    ? styles.activeButtonContainer
                    : styles.nonActiveButtonContainer,
                ]}
              >
                <Typo
                  size={13}
                  color={
                    selectedType == 'Woman' ? colors.white : colors.textLight
                  }
                  style={{ fontFamily: 'Poppins_600SemiBold' }}
                >
                  Woman
                </Typo>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
              style={{ marginTop: spacingY._10 }}
            >
              <X size={18} />
            </TouchableOpacity>
          </View>

          {/* FlatList Container */}
          <View>
            <FlatList
              data={dataToRender}
              renderItem={renderManItem}
              keyExtractor={(item, index) => item?.name + index}
              horizontal={false}
              showsVerticalScrollIndicator={false}
            />
          </View>
         
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default typeDisplayModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    paddingHorizontal: spacingX._10,
    paddingVertical: spacingY._20,
  },
  nestedContainer: {
    paddingHorizontal: spacingX._10,
  },
  activeButtonContainer: {
    backgroundColor: colors.textDark,
    alignItems: 'center',
    padding: verticalScale(12),
    width: scale(70),
    borderRadius: radius._25,
  },
  nonActiveButtonContainer: {
    alignItems: 'center',
    padding: verticalScale(12),
    width: scale(70),
    borderRadius: radius._25,
  },
  renderContainer: {
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: colors.neutral50,
    flexDirection: 'row',
    borderRadius: radius._20,
    padding: verticalScale(10),
    marginTop: verticalScale(15),
  },
  renderActiveContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.neutral50,
    flexDirection: 'row',
    borderRadius: radius._15,
    padding: verticalScale(10),
    marginTop: verticalScale(15),
  },
});
