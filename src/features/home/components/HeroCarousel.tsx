import React, { useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, NativeSyntheticEvent, NativeScrollEvent, Dimensions, Platform } from 'react-native';
import { colors, layout, typography, borderRadius, spacing } from '@shared/constants/theme';
import ImageBackground from '@/src/shared/components/ImageBackground';
import Text from '@shared/components/Text';
import { Icon } from '@/src/shared/components/Icon';

const slides = [
  {
    id: '1',
    image: 'https://res.cloudinary.com/dyhqhx8tb/image/upload/v1766255064/Header_4_od44ba.png',
    headline: 'choose funz for a\nnext-level gaming\nexperience!',
    gcAmount: '1,500,999',
    fcAmount: '85.00',
  },
  {
    id: '2',
    image: 'https://res.cloudinary.com/dyhqhx8tb/image/upload/v1766255064/Header_4_od44ba.png',
    headline: 'discover amazing games\nwith funz platform!',
    gcAmount: '2,000,000',
    fcAmount: '120.00',
  },
  {
    id: '3',
    image: 'https://res.cloudinary.com/dyhqhx8tb/image/upload/v1766255064/Header_4_od44ba.png',
    headline: 'win big with funz\nultimate gaming fun!',
    gcAmount: '3,500,000',
    fcAmount: '200.00',
  },
];

const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);
    setCurrentIndex(roundIndex);
  };

  const goToSlide = (index: number) => {
    flatListRef.current?.scrollToIndex({ index, animated: true });
    setCurrentIndex(index);
  };

  const renderSlide = ({ item }: { item: typeof slides[0] }) => (
    <ImageBackground source={item.image} style={styles.slide}>
      {/* Main Content */}
      <View style={styles.content}>
          {/* <Text style={styles.headline}>
            {item.headline}
          </Text> */}

        {/* <View style={styles.coinDisplays}>
          <View style={styles.coinRow}>
            <View style={[styles.coinIcon, { backgroundColor: colors.coins.gc }]}>
              <Text style={styles.coinIconText}>GC</Text>
            </View>
            <Text style={styles.coinAmount}>{item.gcAmount}</Text>
          </View>

          <View style={styles.coinRow}>
            <View style={[styles.coinIcon, { backgroundColor: colors.coins.fc }]}>
              <Text style={styles.coinIconText}>FC</Text>
            </View>
            <Text style={styles.coinAmount}>{item.fcAmount}</Text>
          </View>
        </View> */}

        {/* CTA Button */}
        <TouchableOpacity style={styles.ctaButton} activeOpacity={0.9}>
          <Icon name="play" size={16} style={styles.playIcon} />
          <Text style={styles.ctaText}>Play Now!</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderSlide}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
      />

      {/* Carousel Dots */}
      <View style={styles.carouselDots}>
        {slides.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.dot, currentIndex === index && styles.dotActive]}
            onPress={() => goToSlide(index)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: layout.heroHeight,
    position: 'relative',
    backgroundColor: colors.background.primary,
  },
  slide: {
    width: Dimensions.get('window').width,
    height: layout.heroHeight,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xxxl,
  },
  headlineContainer: {
    borderWidth: 1,
    borderColor: '#000000',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: 8,
    padding: 8,
  },
  headline: {
    fontFamily: typography.fontFamily,
    fontSize: 32,
    fontWeight: '700',
    color: colors.text.primary,
    textAlign: 'center',
    lineHeight: 32,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
    textTransform: 'capitalize',
  },
  coinDisplays: {
    alignItems: 'center',
    marginBottom: spacing.xxl,
  },
  coinRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.sm,
  },
  coinIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  coinIconText: {
    color: colors.text.primary,
    fontSize: 12,
    fontWeight: typography.fontWeight.bold,
  },
  coinAmount: {
    color: colors.text.primary,
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    bottom: '25%',
    backgroundColor: '#FFAB17',
    borderWidth: 2,
    borderColor: '#FFEBC7',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.sm,
    shadowColor: '#BB7E13',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 6,
  },
  playIcon: {
    color: '#000000',
    fontSize: 18,
    marginRight: 8,
  },
  ctaText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: typography.fontWeight.semibold,
  },
  carouselDots: {
    position: 'absolute',
    bottom: Platform.OS === 'web' ? spacing.xxxxl : spacing.xxl,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: colors.text.primary,
  },
  dotActive: {
    backgroundColor: colors.text.primary,
    width: 8,
  },
});

export default HeroCarousel;