import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

export default function Avatar({size, uri, width, height, borderWidth}) {
  return (
    <View
      style={[
        styles.containerCommon,
        size === 'small' && styles.containerSmall,
        size === 'medium' && styles.containerMedium,
        size === 'large' && styles.containerLarge,
        size === 'other' && {
          width: width,
          height: height,
          borderWidth: borderWidth,
        },
      ]}>
      {uri && (
        <Image
          source={{
            uri: uri,
          }}
          style={styles.image}
        />
      )}
    </View>
  );
}
