import { Image } from 'expo-image';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../utils/constants';
import { router } from 'expo-router';

const MediumCard = React.memo(({data_details}) => {
    const imgUrl = data_details[`image_url`];
    const date = data_details[`date`];
    const title = data_details[`title`];
    console.log(data_details);
    return (
        <TouchableOpacity style={{width: "100%", height: 120, flexDirection: "row", padding: 4, alignItems: "center"}} activeOpacity={0.4} onPress={() => router.push({pathname: "/play", params: data_details})}>
            <Image style={{height: "80%", aspectRatio: 1}} source={{uri: imgUrl}} />
            <View style={{flex: 1, padding: 4, flexDirection: 'column', alignItems: "flex-start", marginLeft: 8}}>
                <Text style={{color: COLORS.FRENCH_GRAY, fontSize: 10, paddingBottom: 8}}>{date}</Text>
                <Text style={{color: COLORS.FRENCH_GRAY, lineHeight: 24, fontSize: 12, fontWeight: "bold"}} numberOfLines={2}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
});
 
export default MediumCard;