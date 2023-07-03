import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { categories } from "../data";
import COLORS from "../theme";

const CatergoryList = () => {
  const [active, setActive] = useState(1);
  const [data, setData] = useState(categories)
  return (
    <View style={{ paddingHorizontal: 15, marginTop: 20 }}>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          let isActive = item.id === active;
          return (
            <TouchableOpacity
              onPress={() => setActive(item.id)}
              style={[
                styles.none,
                isActive && styles.active
              ]}
            >
              <Text
                style={{
                  color: isActive ? COLORS.green : "#a3a3a3",
                  fontSize: 15,
                }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
      />

    </View>
  );
};

export default CatergoryList;

const styles = StyleSheet.create({
  active: {paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.green,

},
    none: {
        marginRight: 18
    }
});
