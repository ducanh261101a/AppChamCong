import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  Animated,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {SvgXml} from '../../Components';
import styles from './styles';
import {
  ONBOARDING_START_BUTTON_TITLE,
  ONBOARDING_CONTENT_TAB_1,
  ONBOARDING_CONTENT_TAB_2,
  ONBOARDING_CONTENT_TAB_3,
} from '../../Shared/text';
import images from '../../Shared/images';

const Content = ({index}) => {
  if (index === 0)
    return (
      <Text style={[styles.contentTab, styles.contentCommon]}>
        {ONBOARDING_CONTENT_TAB_1}
      </Text>
    );

  if (index === 1)
    return (
      <View style={{marginTop: 10}}>
        <Text style={[styles.contentBold, styles.contentCommon]}>
          {ONBOARDING_CONTENT_TAB_2.line1}
        </Text>
        <Text style={[styles.contentCommon]}>
          {ONBOARDING_CONTENT_TAB_2.line2}
        </Text>
      </View>
    );

  return (
    <View>
      <View style={[styles.contentTab]}>
        <Text style={[styles.contentBold, styles.contentCommon]}>
          {ONBOARDING_CONTENT_TAB_3.line1.part1}
        </Text>
        <Text style={[styles.contentCommon]}>
          {ONBOARDING_CONTENT_TAB_3.line1.part2}
        </Text>
      </View>
      <Text style={[styles.contentBold, styles.contentCommon]}>
        {ONBOARDING_CONTENT_TAB_3.line2}
      </Text>
    </View>
  );
};

const NextButton = ({index}) => {
  if (index < 2)
    return (
      <Image
        style={styles.nextIcon}
        source={require('../../Assets/Images/Icon-Next.png')}
      />
    );

  return (
    <View style={styles.startBtn}>
      <Image
        style={styles.startBtnIcon}
        source={require('../../Assets/Images/Button-Start.png')}
      />
      <Text style={styles.startBtnTitle}>{ONBOARDING_START_BUTTON_TITLE}</Text>
    </View>
  );
};

const PanigationDot = ({index}) => {
  if (index === 0)
    return (
      <View style={styles.panigationDot}>
        <SvgXml xml={images.DotPanigationFocus} />
        <View style={styles.panigationDotNotFocus} />
        <View style={styles.panigationDotNotFocus} />
      </View>
    );

  if (index === 1)
    return (
      <View style={styles.panigationDot}>
        <View style={styles.panigationDotNotFocus} />
        <SvgXml xml={images.DotPanigationFocus} />
        <View style={styles.panigationDotNotFocus} />
      </View>
    );

  return (
    <View style={styles.panigationDot}>
      <View style={styles.panigationDotNotFocus} />
      <View style={styles.panigationDotNotFocus} />
      <SvgXml xml={images.DotPanigationFocus} />
    </View>
  );
};

export default function OnboardingScreen({navigation}) {
  const {width} = useWindowDimensions();
  const indexValue = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);

  const handleStart = async () => {
    navigation.replace('LoginScreen');
  };

  const handleNext = async () => {
    Animated.timing(indexValue, {
      toValue: -width * (index + 1),
      duration: 500,
      useNativeDriver: true,
    }).start();
    setIndex(index + 1);
  };

  const OnboardingImage = () => {
    return (
      <View style={styles.imageContainer}>
        <Animated.View
          style={[styles.imageLayout, {transform: [{translateX: indexValue}]}]}>
          <View style={[styles.imageView, {alignItems: 'center'}]}>
            <SvgXml
              style={styles.onboardingImage1}
              xml={images.OnboardingImage1}
            />
          </View>
          <View style={styles.imageView}>
            <SvgXml
              style={styles.onboardingImage2}
              width={width}
              xml={images.OnboardingImage2}
            />
          </View>
          <View style={styles.imageView}>
            <SvgXml
              style={styles.onboardingImage3}
              width={width}
              xml={images.OnboardingImage3}
            />
          </View>
        </Animated.View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.onboardingBox}>
        <View style={styles.content}>
          <SvgXml xml={images.WelcomeText} width="100%" />
          <Content index={index} />
        </View>
        <View style={styles.panigation}>
          <PanigationDot index={index} />
          <TouchableOpacity
            onPress={() => {
              if (index < 2) {
                handleNext();
              } else {
                handleStart();
              }
            }}>
            <NextButton index={index} />
          </TouchableOpacity>
        </View>
      </View>
      <OnboardingImage />
      <Image
        style={styles.logo}
        source={require('../../Assets/Images/Logo.png')}
        resizeMode="contain"
      />
    </View>
  );
}
