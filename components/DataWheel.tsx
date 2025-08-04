import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { colors, radius } from '@/constants/theme'; // or use your own colors
import { scale, verticalScale } from '@/utils/styling';


const generateMonthDates = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth(); // 0-indexed
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const dayLabels = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const dates = [];

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    dates.push({
      day: dayLabels[date.getDay()],
      date: day.toString(),
    });
  }

  return dates;
};
export default function DateWheelExpo() {
const [selectedIndex, setSelectedIndex] = useState(new Date().getDate() - 1); // select today
  const { width } = useWindowDimensions();
  const itemWidth = 64;
  const flatRef = useRef(null);
  const monthDates = generateMonthDates();
  

  return (
    <View style={[styles.container, { width }]}>
     <FlatList
        data={monthDates}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: (width - itemWidth) / 2,
        }}
        snapToInterval={itemWidth}
        decelerationRate="fast"
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item, index }) => {
          const isSelected = index === selectedIndex;
          return (
            <TouchableOpacity
              onPress={() => setSelectedIndex(index)}
              style={{ width: itemWidth, alignItems: 'center', paddingVertical: 10 }}
            >
              <Text
                style={[
                  styles.dayText,
                  { color: isSelected ? colors.primary : '#999' },
                ]}
              >
                {item.day}
              </Text>
              <Text
                style={[
                  styles.dateText,
                  {
                    color: isSelected ? colors.primary : '#999',
                    fontWeight: isSelected ? '600' : '400',
                  },
                ]}
              >
                {item.date}
              </Text>
            </TouchableOpacity>
          );
        }}
        initialScrollIndex={selectedIndex}
        getItemLayout={(_, index) => ({
          length: itemWidth,
          offset: itemWidth * index,
          index,
        })}
      />
      <View
        style={[
          styles.highlight,
          {
            left: (width - itemWidth) / 2,
            width: itemWidth,
          },
        ]}
        pointerEvents="none"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: verticalScale(80),
  },
  dayText: {
    fontSize: 14,
    marginBottom: 4,
  },
  dateText: {
    fontSize: 18,
  },
  highlight: {
    position: 'absolute',
    height: verticalScale(100),
    width:verticalScale(40),
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: radius._20,
  },
});
