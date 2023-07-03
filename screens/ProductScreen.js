import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import COLORS from "../theme";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const ProductScreen = (props) => {
  const item = props.route.params;
  const [count, setCount] = useState(1);
  const navigation = useNavigation();
  return (
    <View
      style={{ paddingHorizontal: 15, flex: 1, backgroundColor: COLORS.white }}
    >
      <SafeAreaView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-sharp" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 name="shopping-cart" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View
            style={{
              height: 300,
              justifyContent: "center",
              alignItems: "center",
              marginTop: -5
            }}
          >
            <Image
              style={{
                flex: 1,
                resizeMode: "center",
                shadowColor: "#b3b3b3",
                shadowOffset: { width: 0, height: 20 },
                shadowRadius: 50,
                shadowOpacity: 1,
              }}
              source={item.img}
            />
          </View>
        </ScrollView>

        <View
          style={{ backgroundColor: "#ededee", padding: 15, borderRadius: 12 }}
        >
          <Text style={{ fontWeight: "bold", marginBottom: 15, marginTop: 10 }}>
            __Best choice
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 25,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {item.name}
            </Text>
            <View
              style={{
                paddingVertical: 10,
                backgroundColor: COLORS.green,
                position: "absolute",
                right: -15,
                paddingRight: 15,
                paddingLeft: 15,
                borderTopLeftRadius: "50%",
                borderBottomLeftRadius: "50%",
              }}
            >
              <Text style={{ color: COLORS.white, fontWeight: "600" }}>
                ${item.price}
              </Text>
            </View>
          </View>

          <View>
            <Text style={{ fontWeight: "bold", marginBottom: 15 }}>About</Text>
            <Text style={{ color: "#b3b3b3" }}>{item.about}</Text>
          </View>

          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => setCount(count - 1)}
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  borderRadius: 8,
                  borderColor: "#333",
                  borderWidth: 1,
                }}
              >
                <FontAwesome name="minus" size={15} color="black" />
              </TouchableOpacity>

              <Text style={{ marginHorizontal: 10, fontWeight: "bold" }}>
                {count}
              </Text>

              <TouchableOpacity
                onPress={() => setCount(count + 1)}
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  borderRadius: 8,
                  borderColor: "#333",
                  borderWidth: 1,
                }}
              >
                <FontAwesome name="plus" size={15} color="black" />
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                style={{
                  paddingVertical: 15,
                  backgroundColor: COLORS.green,
                  paddingHorizontal: 50,
                  borderRadius: "50%",
                }}
              >
                <Text style={{ color: COLORS.white, fontWeight: "bold" }}>
                  Buy
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});
