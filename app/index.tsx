import Button from '@/components/Button';
import Typo from '@/components/Typo';
import { spacingX, spacingY } from '@/constants/theme';
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_500Medium,
} from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
const index = () => {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    Poppins_600SemiBold,
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
  });

  const router = useRouter();
  if (!fontsLoaded) {
    return null; // or a loading indicator
  }

  return (
    <View style={styles.container}>
      <Button onPress={() => router.navigate('/typeDisplayModal')}>
        <Typo>Hello</Typo>
      </Button>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    paddingHorizontal: spacingX._10,
    paddingVertical: spacingY._20,
  },
  textContainer: {
    paddingVertical: spacingY._20,
    alignItems: 'center',
  },
  textRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  footerTextContainer: {
    paddingVertical: spacingY._30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 0,
  },
});
