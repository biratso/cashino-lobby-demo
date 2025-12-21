import React from 'react';
import { View, StyleSheet, Image, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '@shared/constants/theme';
import CoinSwitcher from '@shared/components/CoinSwitcher';

interface HeaderProps {
    coinBalance?: number;
}

const Header: React.FC<HeaderProps> = ({ coinBalance = 456.92 }) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: Platform.OS === 'web' ? 16 : insets.top + 16 }]}>
            <View style={styles.logo}>
                <Image
                    source={require('@/assets/logo.png')}
                    resizeMode="contain"
                    style={styles.logoImage}
                />
            </View>
            <CoinSwitcher coinBalance={coinBalance} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background.secondary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    logo: {
        width: 24,
        height: 34,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
});

export default Header;