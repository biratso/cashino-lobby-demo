import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from '@shared/components/Icon';

interface CoinSwitcherProps {
    coinBalance?: number;
}

const CoinSwitcher: React.FC<CoinSwitcherProps> = ({ coinBalance = 456.92 }) => {
    const [activeCoin, setActiveCoin] = useState<'gc' | 'sc'>('gc');

    return (
        <View style={styles.coinSwitcher}>
            {/* GC Coin Button */}
            <TouchableOpacity
                style={[
                    styles.coinButton,
                    styles.gcCoinButton,
                    activeCoin === 'gc' && styles.activeCoinButton,
                ]}
                onPress={() => setActiveCoin('gc')}
                activeOpacity={0.9}
            >
                {activeCoin === 'gc' && (
                    <LinearGradient
                        colors={[
                            "rgba(255,255,255,0.2)",
                            "rgba(255,255,255,0.15)",
                            "rgba(255,255,255,0.1)",
                            "rgba(255,255,255,0.05)",
                            "rgba(255,255,255,0)",
                            "rgba(0,0,0,0)",
                            "rgba(0,0,0,0.05)",
                            "rgba(0,0,0,0.1)",
                        ]}
                        locations={[0, 0.1, 0.2, 0.25, 0.2797, 0.8494, 0.95, 1]}
                        style={styles.activeGradient}
                    >
                        <LinearGradient
                            colors={["rgba(255,255,255,0.12)", "rgba(255,255,255,0)"]}
                            locations={[0, 1]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={styles.topInset}
                        />
                        <LinearGradient
                            colors={["rgba(0,0,0,0.2)", "rgba(0,0,0,0)"]}
                            locations={[0, 1]}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 0, y: 0 }}
                            style={styles.bottomInset}
                        />
                    </LinearGradient>
                )}
                <Icon name="gc-coin" size={24} color="#FFFFFF" />
                <Text style={styles.coinValue}>{coinBalance.toFixed(2)}</Text>
            </TouchableOpacity>

            {/* SC Coin Button */}
            <TouchableOpacity
                style={[
                    styles.coinButton,
                    activeCoin === 'sc' && styles.activeCoinButton,
                ]}
                onPress={() => setActiveCoin('sc')}
                activeOpacity={0.9}
            >
                {activeCoin === 'sc' && (
                    <LinearGradient
                        colors={[
                            "rgba(255,255,255,0.2)",
                            "rgba(255,255,255,0.15)",
                            "rgba(255,255,255,0.1)",
                            "rgba(255,255,255,0.05)",
                            "rgba(255,255,255,0)",
                            "rgba(0,0,0,0)",
                            "rgba(0,0,0,0.05)",
                            "rgba(0,0,0,0.1)",
                        ]}
                        locations={[0, 0.1, 0.2, 0.25, 0.2797, 0.8494, 0.95, 1]}
                        style={styles.activeGradient}
                    >
                        <LinearGradient
                            colors={["rgba(255,255,255,0.12)", "rgba(255,255,255,0)"]}
                            locations={[0, 1]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={styles.topInset}
                        />
                        <LinearGradient
                            colors={["rgba(0,0,0,0.2)", "rgba(0,0,0,0)"]}
                            locations={[0, 1]}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 0, y: 0 }}
                            style={styles.bottomInset}
                        />
                    </LinearGradient>
                )}
                <Icon name="sc-coin" size={24} color="#FFFFFF" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    // Coin Switcher Container
    coinSwitcher: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        backgroundColor: '#1E1A25',
        borderRadius: 100,
        padding: 2,
    },

    // Coin Buttons
    coinButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 100,
        position: 'relative',
        overflow: 'hidden',
    },

    gcCoinButton: {
        paddingHorizontal: 28,
    },

    activeCoinButton: {
        backgroundColor: '#E09400',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 6,
        borderWidth: 2,
        borderColor: '#7D5200',
        margin: -2,
    },

    activeGradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 100,
    },

    topInset: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 5,
    },

    bottomInset: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 3,
    },

    // Coin Value
    coinValue: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
        lineHeight: 22,
    },
});

export default CoinSwitcher;