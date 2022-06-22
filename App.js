import React, {useState} from 'react';
import { Dimensions, StyleSheet, Text, View, StatusBar,TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Card from "./components/Card";
import ControlWindow from "./components/ControlWindow"

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


export default function App() {
  const [bgColor, setBgColor] = useState(false)
  const handleClick = () => {
    setBgColor(current => !current)
  }



  return (
    <View style={[styles.container, ,{ backgroundColor: bgColor ? "grey" : '#fafafa'}]}>
      <StatusBar style="dark" />

    
        <View style={styles.top}>
          <Ionicons name="md-chevron-back-outline" size={windowWidth/14} color="#7b7b7b" />
          <Ionicons name="ios-menu" size={windowWidth/14} color="#7b7b7b" />
        </View>
        <View style={{ marginTop: windowHeight / 36 }}>
          <Text style={{ fontSize: 24, fontWeight: "600" }}>Shade Control</Text>
          <Text style={{ color: "#b0b0b0", fontWeight: "500" }}>
            Living Room
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: "#767676",
              fontWeight: "800",
              fontSize: 16,
              marginTop: windowHeight * 0.02,
            }}
          >
            SCENES
          </Text>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Card cardWidth={0.47} showIcon={true} text={"All Off"} />
            <Card cardWidth={0.47} showIcon={true} text={"Bright"} />
            <Card cardWidth={0.47} showIcon={true} text={"All Off"} />
            <Card cardWidth={0.47} showIcon={true} text={"Bright"} />
          </View>
        </View>
        <View>
          <Text
            style={{
              color: "#767676",
              fontWeight: "800",
              fontSize: 16,
              marginTop: windowHeight * 0.01,
            }}
          >
            GROUP CONTROLS
          </Text>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Card cardWidth={0.47} showIcon={false} text={"More Open"} />
            <Card cardWidth={0.47} showIcon={false} text={"More Close"} />
          </View>
        </View>
        <View>
          <Text
            style={{
              color: "#767676",
              fontWeight: "800",
              fontSize: 16,
              marginTop: windowHeight * 0.01,
            }}
          >
          CONTROLS
          </Text>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <ControlWindow cardWidth={1} showIcon={true}/>
            {/* <Card cardWidth={1} showIcon={false} text={"Window Roller Bline"} /> */}
          </View>
        </View>
        <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Card style={{color:'#a973a9'}} cardWidth={0.3} showIcon={false} text={"Open"} />
            <Card cardWidth={0.3} showIcon={false} text={"Pause"} />
            <Card cardWidth={0.3} showIcon={false} text={"Close"} />
            <TouchableOpacity
            onPress={handleClick}
            >
            <Card cardWidth={0.47} showIcon={false} text={"Blackout"} />
            </TouchableOpacity>
            <Card cardWidth={0.47} showIcon={false} text={"Flip+"} />
          </View>
      </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fafafa",
    padding: windowHeight * 0.01,
 
  },

  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: windowHeight / 52,
 
  },
});
