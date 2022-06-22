import React from "react";
import {
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;



const Card = (props) => {
//   console.log(props);
  const { text, showIcon, cardWidth } = props;
    
  return (
    
    <TouchableOpacity style={[styles.container, {width: windowWidth * cardWidth}]}>
        <View style={styles.box}>
          <Text style={{ fontFamily: 'sans-serif-medium', fontSize: 16, color: '#919191', fontWeight: '600' }} >{text}</Text>
          
          { showIcon ? 
            <View  style={{ paddingRight: windowWidth / 12 }}>
            <FontAwesome name="rocket" size={windowHeight/32} color="#8a0000" />
          </View> : <></>}
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 1,
    paddingVertical: windowHeight * 0.03,
    flexDirection: "row",
    marginBottom: windowHeight * 0.01,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",

  },

  box: { 
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row-reverse",
  },
});

export default Card;
