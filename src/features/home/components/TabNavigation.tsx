import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, layout, typography, spacing, borderRadius } from '@shared/constants/theme';
import Text from '@shared/components/Text';
import { Icon } from '@/src/shared/components/Icon';

interface TabNavigationProps {
    activeTab: 'all' | 'favorites';
    onTabChange: (tab: 'all' | 'favorites') => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.tab}
                onPress={() => onTabChange('all')}
                activeOpacity={0.7}
            >
                <Icon name="grid" size={18} color={'#E9DFEF'} style={styles.tabIcon} />
                <Text style={[styles.tabText, activeTab === 'all' && styles.tabTextActive]}>
                    See All Games
                </Text>
                {activeTab === 'all' && <View style={styles.activeIndicator} />}
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.tab}
                onPress={() => onTabChange('favorites')}
                activeOpacity={0.7}
            >
                <Icon name="favorite-tab" size={20} color={'#E9DFEF'} style={styles.tabIcon} />
                <Text style={[styles.tabText, activeTab === 'favorites' && styles.tabTextActive]}>
                    Favorites
                </Text>
                {activeTab === 'favorites' && <View style={styles.activeIndicator} />}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: layout.tabBarHeight,
        backgroundColor: colors.background.secondary,
        marginHorizontal: spacing.sm,
        paddingHorizontal: 20,
        marginBottom: 20,
        gap: 23,
        flexDirection: 'row',
        borderRadius: borderRadius.sm,
    },
    tab: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    tabIcon: {
        fontSize: 18,
        color: colors.text.secondary,
        marginRight: spacing.sm,
    },
    tabText: {
        fontSize: typography.fontSize.md,
        fontWeight: typography.fontWeight.semibold,
        color: '#E9DFEF',
    },
    tabTextActive: {
        color: colors.text.primary,
    },
    activeIndicator: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 2,
        backgroundColor: colors.purple.vibrant,
    },
});

export default TabNavigation;