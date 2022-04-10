import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

import { COLORS, FONTS, icons, SIZES } from "../constants/index2";

const PriceAlert = ({ customContainerStyle }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: SIZES.padding * 4.5,
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.radius,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
        ...customContainerStyle,
        ...styles.shadow,
      }}
    >
      <Image
        source={icons.notification_color}
        style={{ width: 30, height: 30 }}
      />

      <View style={{ flex: 1, marginLeft: SIZES.radius }}>
        <Text style={{ ...FONTS.h3 }}>Set Price Alert</Text>
        <Text style={{ ...FONTS.body4 }}>
          Get notifed when your investments are moving
        </Text>
      </View>

      <Image
        source={icons.right_arrow}
        style={{ width: 25, height: 25, tintColor: COLORS.gray }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});

export default PriceAlert;