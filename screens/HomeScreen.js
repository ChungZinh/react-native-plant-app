import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import COLORS from "../theme";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import CatergoryList from "../components/CatergoryList";
import plants from "../data";
import CardProduct from "../components/CardProduct";
const HomeScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar />
      <SafeAreaView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 15,
            paddingHorizontal: 15,
          }}
        >
          <Text
            style={{ fontSize: 18, fontWeight: "bold", color: COLORS.dark }}
          >
            Welcome to
          </Text>
          <TouchableOpacity>
            <FontAwesome5 name="shopping-cart" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={{ paddingHorizontal: 15, marginTop: 4 }}>
          <Text
            style={{ fontWeight: "600", fontSize: 30, color: COLORS.green }}
          >
            Plant Shop
          </Text>
        </View>

        {/* SEARCH BAR */}

        <View
          style={{
            paddingHorizontal: 15,
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#E0E0E0",
              padding: 8,
              borderRadius: 5,
              width: "86%",
            }}
          >
            <Ionicons name="search" size={22} color={COLORS.green} />
            <TextInput style={{ marginLeft: 5 }} placeholder="Search" />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.green,
              width: 40,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="filter" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Catergory */}

        <CatergoryList />

        {/* List Product */}

        <ScrollView>
          <View style={{ padding: 15 }}>
            <FlatList
              data={plants}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              numColumns={2}
              scrollToOverflowEnabled
              renderItem={({ item }) => {
                return <CardProduct item={item} />;
              }}
              keyExtractor={(item) => item.id}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
