import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../src/utils/constants';
import Constants from "expo-constants";
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

const imgurl1 = "https://i.ibb.co/3cVw6PN/artificial-intelligence-jpg.png";

export default function Play() {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={[COLORS.PERSIAN_BLUE, "transparent"]}
        style={styles.background}
      >
        <View style={{ width: "100%", height: 50, flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 1 }}><Text style={{ flex: 1, textAlign: "center", fontSize: 20, padding: 10, color: COLORS.FRENCH_GRAY, fontWeight: "bold" }}>Playing Now</Text></View>
          <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", position: "absolute" }} onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color={COLORS.FRENCH_GRAY} /><Text style={{ color: COLORS.FRENCH_GRAY }}>Return</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: "100%", paddingVertical: 32, alignItems: "center" }}>
          <Image source={{ uri: imgurl1 }} style={{ width: "60%", aspectRatio: 1, borderRadius: 10 }} />
        </View>
        <View>
          <Text style={{color: COLORS.VISTERIA, fontSize: 12, paddingLeft: 24, marginBottom: 8, fontWeight: "bold"}}>FEBRUARY 17, 2024</Text>
          <Text style={{color: COLORS.FRENCH_GRAY, fontSize: 22, paddingHorizontal: 24}} numberOfLines={1}>OptiMUS: Scalable Optimization Modeling with (MI)LP Solvers and Large Language Models</Text>
          <Text style={{color: COLORS.VISTERIA, fontSize: 16, paddingLeft: 24, marginTop: 8, fontWeight: "bold"}}>By Viral Damaniya, Et al.</Text>
        </View>
        {/* <View style={{height: "50%"}} /> */}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
  },
  background: {
    paddingTop: Constants.statusBarHeight+4,
  }
});
