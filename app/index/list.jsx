import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { COLORS } from "../../src/utils/constants";
import MediumCard from "../../src/components/MediumCard";
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState, useRef } from "react";
import LottieView from 'lottie-react-native';

const ListScreen = () => {
    const animation = useRef(null);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const params = useLocalSearchParams();
    const { headText } = params;

    useEffect(() => {
        const getData = async () => {
            const resp = await fetch(`http://10.19.191.222:8000/query/${headText}`)
            const respJson = await resp.json()
            setData(respJson)
            setIsLoading(false)
        }
        setIsLoading(true);
        getData();
    }, []);

    return (
        <View style={styles.container}>
            <View style={{ width: "100%", height: 50, flexDirection: "row", alignItems: "center" }}>
                <View style={{ flex: 1 }}><Text style={{ flex: 1, textAlign: "center", fontSize: 20, padding: 10, color: COLORS.FRENCH_GRAY, fontWeight: "bold" }}>{headText}</Text></View>
                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", position: "absolute" }} onPress={() => router.back()}>
                    <Ionicons name="chevron-back" size={24} color={COLORS.FRENCH_GRAY} />
                </TouchableOpacity>
            </View>
            {data && data.length > 0 && !isLoading ?
                <FlatList
                    data={data}
                    renderItem={
                        ({ item }) => (<MediumCard data_details={item} />)
                    }
                    ItemSeparatorComponent={
                        <View style={{ borderBottomColor: COLORS.FRENCH_GRAY, borderWidth: 0.5 }} />
                    }
                /> : (<View style={styles.animationContainer}>
                    <LottieView
                        autoPlay
                        ref={animation}
                        style={{
                            width: 200,
                            height: 200,
                            backgroundColor: COLORS.BLACK,
                        }}
                        source={require('../../assets/loading.json')}
                    />
                </View>)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: COLORS.BLACK,
        paddingHorizontal: 16,
    },
    headerText: {
        fontSize: 24,
        color: COLORS.FRENCH_GRAY,
        paddingTop: 32,
        fontWeight: "bold",
        paddingBottom: 20,
    },
    animationContainer: {
        backgroundColor: COLORS.BLACK,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
});

export default ListScreen;