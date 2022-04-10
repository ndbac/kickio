import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SHADOWS, assets } from "../constants";

import { dummyData } from "../constants/index2";

const Navigation = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        position: "absolute",
        flexDirection: "row",
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: COLORS.white,
        borderRadius: 15,
        height: 75,
        justifyContent: "space-between",
        alignItems: "center",
        ...SHADOWS.dark,
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image
          source={assets.home}
          resizeMode="contain"
          style={{ width: 45, height: 42, marginLeft: 20, marginRight: 20 }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("CreateFunds")}>
        <Image
          source={assets.funding}
          resizeMode="contain"
          style={{ width: 47, height: 47, marginLeft: 20, marginRight: 20 }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Stats")}>
        <Image
          source={assets.stats}
          resizeMode="contain"
          style={{ width: 47, height: 47, marginLeft: 20, marginRight: 20 }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Image
          source={assets.profile}
          resizeMode="contain"
          style={{ width: 50, height: 50, marginLeft: 20, marginRight: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Navigation;
