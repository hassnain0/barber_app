import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Button from './Button'
import Typo from './Typo'
import { verticalScale } from '@/utils/styling'
import { colors, radius } from '@/constants/theme'
import { CaretDownIcon } from 'phosphor-react-native'
import { router } from 'expo-router'

const Services = () => {

     const services = [
       { id: '1', name: 'Hair Wash', types: 12 },
       { id: '2', name: 'Hair Cut', types: 12 },
       { id: '3', name: 'Hair Coloring', types: 7 },
       { id: '4', name: 'Eye Makeup', types: 2 },
       { id: '5', name: 'Shaving', types: 6 },
       { id: '6', name: 'Hairdryer', types: 3 },
    ];
    
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
  return (
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
  )
}

export default Services

const styles = StyleSheet.create({

     serviceContainer: {
        margin: verticalScale(5),
        padding: verticalScale(20),
        gap: verticalScale(10),
        flexDirection: 'row',
        backgroundColor: colors.neutral50,
        borderRadius: radius._15,
        justifyContent: 'space-between',
      },
})