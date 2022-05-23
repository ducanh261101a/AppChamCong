import {View} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function Dot({type, size}) {
  const [color, setColor] = useState('');
  useEffect(() => {
    switch (type) {
      case 'red':
        setColor('#FF5A5A');
        break;

      case 'green':
        setColor('#30DA88');
        break;

      case 'yellow':
        setColor('#FFCB76');
        break;

      case 'blue':
        setColor('#00D1FF');
        break;
      default:
        return;
    }
  });

  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: color,
        borderColor: color,
        borderWidth: 1,
      }}
    />
  );
}
