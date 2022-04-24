import {View, Text, useWindowDimensions} from 'react-native';
import React, {Fragment, useState} from 'react';
import mockup from './mockup';
import QuickNavItem from '../QuickNavItem/QuickNavItem';
import images from '../../Shared/images';
export default function QuickNav() {
  const {width} = useWindowDimensions();
  const maxWidth = width - 25 * 2 - 5 * 2;
  const widthItem = (width - 25 * 2 - 5 * 2 - 1) / 5;
  const [listNav, setListNav] = useState(mockup.slice(0, 7));
  const [isFull, setIsFull] = useState(false);
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
      {listNav.map((item, index) => {
        return (
          <QuickNavItem
            key={index}
            width={widthItem}
            icon={item.icon}
            label={item.label}
            code={item.code}
          />
        );
      })}
      <QuickNavItem
        width={widthItem}
        icon={images.XemThemIcon}
        onPress={() => {
          setIsFull(!isFull);
          if (isFull) {
            setListNav(mockup.slice(0, 7));
          } else {
            setListNav(mockup);
          }
        }}
        label={isFull ? 'Thu gọn' : 'Xem thêm'}
        code="xem-them"
      />
    </View>
  );
}
