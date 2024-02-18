import { Image } from 'expo-image';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../utils/constants';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

const BigCard = React.memo(({ imgUrl, name }) => {

    return (
        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={[COLORS.PERSIAN_BLUE, COLORS.FRENCH_GRAY]}
                style={styles.background}
            >
                <Image source={{ uri: imgUrl }} style={styles.img} contentFit='cover' />
                <Text style={{ color: COLORS.BLACK, fontSize: 16, padding: 8, fontWeight: '600' }} numberOfLines={3}>{name}</Text>
                <TouchableOpacity>
                    <AntDesign style={{ paddingLeft: 100 }} name="playcircleo" size={35} color="black" />
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        width: 240,
        height: 300,
        // borderWidth: 0.2,
        borderColor: COLORS.FRENCH_GRAY,
        borderRadius: 10,
        elevation: 5,
    },
    background: {
        flex: 1,
        borderRadius: 10,
    },
    img: {
        width: 216,
        height: 160,
        margin: 12,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    }
});

export default BigCard;