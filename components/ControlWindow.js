import React, {useState} from "react";
import {
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ControlWindow = (props) => {
  const { showIcon, cardWidth } = props;
  const [onText, setOnText] = useState(false)
  const [bgColor, setBgColor] = useState(false)
  const handleClick = () => {
    setOnText(!onText)
    setBgColor(current => !current)
  }

  return (
    <TouchableOpacity 
    onPress={() => {handleClick()}}
    style={[styles.container, { width: windowWidth * cardWidth },{backgroundColor: onText ? '#f7dae0' : '#fff'}]}>
      <TouchableOpacity
      style={styles.box}>
        <View style={{ flexDirection: "row" , alignItems: "center" }}>
          <View>
            {showIcon ? (
              <View style={{ paddingLeft: windowWidth / 32, paddingRight: windowWidth / 12}}>
                <AntDesign name="rightcircle" size={windowHeight/32} color="#767676" />
              </View>
            ) : (
              <></>
            )}
          </View>
          <View style={{flexDirection: 'column'}}>
            
          <Text
            style={{
              fontFamily: "sans-serif-medium",
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            Window Roller Blind
          </Text>
          <Text
            style={{
              fontFamily: "sans-serif-medium",
              fontSize: 16,
              color: "#919191",
              fontWeight: "600",
            }}
          >
            {onText ? 'ON' : 'OFF'}
          </Text>
          </View>
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 1,
    paddingVertical: windowHeight * 0.03,
    marginBottom: windowHeight * 0.01,
    alignItems: "flex-start",
  },

  box: {
      alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default ControlWindow;
