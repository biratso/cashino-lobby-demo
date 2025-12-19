import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { colors, layout, typography, borderRadius } from '@shared/constants/theme';
import { Icon } from '@/src/shared/components/Icon';

interface HeaderProps {
    coinBalance?: number;
}

const Header: React.FC<HeaderProps> = ({ coinBalance = 456.92 }) => {
    return (
        <View style={styles.container}>
            {/* Logo */}
            <View style={styles.logo}>
                {/* <Text style={styles.logoText}>F</Text> */}
                <Image source={require('@/assets/logo.png')} resizeMode='contain' style={styles.logoImage} />
            </View>

            {/* Coin Balance Display */}
            <TouchableOpacity style={styles.coinBadge} activeOpacity={0.9}>
                <View style={styles.coinIcon}>
                    <Icon name="gc-coin" size={14} color={colors.text.primary} />
                </View>
                <Text style={styles.coinValue}>{coinBalance.toFixed(2)}</Text>
            </TouchableOpacity>

            {/* SC Badge */}
            <TouchableOpacity style={styles.scBadge} activeOpacity={0.9}>
                <Icon name="sc-coin" size={14} color={colors.text.primary} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: layout.headerHeight,
        backgroundColor: colors.background.secondary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginBottom: 8,
    },
    logo: {
        width: 44,
        height: 44,
        // borderRadius: 12,
        // backgroundColor: colors.purple.vibrant,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    coinBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.coins.gc,
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: borderRadius.badge,
        shadowColor: '#E09400',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
    },
    coinIcon: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },
    coinValue: {
        color: colors.text.primary,
        fontSize: typography.fontSize.xl,
        fontWeight: typography.fontWeight.bold,
    },
    scBadge: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: colors.purple.vibrant,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Header;