import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import COLORS from "../theme";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const width = Dimensions.get("screen").width / 2 - 25;

const CardProduct = ({ item }) => {
  const navigation = useNavigation();
  const [like, setLike] = useState(false);
  return (
    <Pressable
      style={{
        height: 225,
        backgroundColor: "#e3e3e3",
        width: width,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 15,
        padding: 15,
      }}
    >
      <View style={{ alignItems: "flex-end" }}>
        <TouchableOpacity
          onPress={() => setLike(!like)}
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: like ? "#FFC0CB" : "#d3d3d3",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="heart"
            size={20}
            color={like ? COLORS.red : COLORS.dark}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: 100,
          alignItems: "center",
          shadowColor: "#c3c3c3",
          shadowOffset: { width: 8, height: -3 },
          shadowOpacity: 1,
          shadowRadius: 1,
        }}
      >
        <Image style={{ flex: 1, resizeMode: "contain" }} source={item.img} />
      </View>

      <Text style={{ marginTop: 5, fontWeight: "600" }}>{item.name}</Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "600" }}>${item.price}</Text>
        <TouchableOpacity

            onPress={() => navigation.navigate('Product', {...item})}
          style={{
            width: 25,
            height: 25,
            backgroundColor: COLORS.green,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome name="plus" size={14} color="white" />
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

export default CardProduct;

const styles = StyleSheet.create({});
