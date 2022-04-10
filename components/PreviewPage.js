import { View, Text, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, FONTS, assets } from "../constants";
import { ButtonContent } from "./Button";

export const PreviewPage01 = () => {
  return (
    <View style={{ paddingLeft: 45, paddingRight: 45 }}>
      <View style={{ alignItems: "center" }}>
        <Image
          source={assets.brand}
          resizeMode="contain"
          style={{
            width: "50%",
            height: "50%",
            marginTop: 50,
          }}
        />
      </View>

      <Text
        style={{
          fontFamily: FONTS.bold,
          fontSize: SIZES.extraLarge,
          color: COLORS.primary,
          marginBottom: SIZES.extraLarge,
          textAlign: "center",
        }}
      >
        1. Decide project
      </Text>

      <View style={{ flexDirection: "row" }}>
        <Image
          source={assets.check}
          resizeMode="contain"
          style={{
            width: 15,
            height: 15,
            marginTop: 5,
            marginRight: 5,
          }}
        />

        <Text
          style={{
            fontFamily: FONTS.medium,
            fontSize: SIZES.medium,
            color: COLORS.primary,
            marginBottom: SIZES.font,
          }}
        >
          Safe investment from only $2
        </Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <Image
          source={assets.check}
          resizeMode="contain"
          style={{
            width: 15,
            height: 15,
            marginTop: 5,
            marginRight: 5,
          }}
        />

        <Text
          style={{
            fontFamily: FONTS.medium,
            fontSize: SIZES.medium,
            color: COLORS.primary,
            marginBottom: SIZES.extraLarge,
          }}
        >
          Simple, easy, transparent and completely free of fees
        </Text>
      </View>

      <Text
        style={{
          textAlign: "center",
          fontFamily: FONTS.medium,
          fontSize: SIZES.medium,
          color: COLORS.primary,
          marginBottom: SIZES.extraLarge,
        }}
      >
        1/2
      </Text>
    </View>
  );
};

export const PreviewPage02 = () => {
  const navigation = useNavigation();

  return (
    <View style={{ paddingLeft: 45, paddingRight: 45 }}>
      <View style={{ alignItems: "center" }}>
        <Image
          source={assets.brand}
          resizeMode="contain"
          style={{
            width: "50%",
            height: "50%",
            marginTop: 50,
          }}
        />
      </View>

      <Text
        style={{
          fontFamily: FONTS.bold,
          fontSize: SIZES.extraLarge,
          color: COLORS.primary,
          marginBottom: SIZES.extraLarge,
          textAlign: "center",
        }}
      >
        2. Recharge & Investing
      </Text>

      <View style={{ flexDirection: "row" }}>
        <Image
          source={assets.check}
          resizeMode="contain"
          style={{
            width: 15,
            height: 15,
            marginTop: 5,
            marginRight: 5,
          }}
        />

        <Text
          style={{
            fontFamily: FONTS.medium,
            fontSize: SIZES.medium,
            color: COLORS.primary,
            marginBottom: SIZES.font,
          }}
        >
          Top up and track your asset growth
        </Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <Image
          source={assets.check}
          resizeMode="contain"
          style={{
            width: 15,
            height: 15,
            marginTop: 5,
            marginRight: 5,
          }}
        />

        <Text
          style={{
            fontFamily: FONTS.medium,
            fontSize: SIZES.medium,
            color: COLORS.primary,
            marginBottom: SIZES.extraLarge,
          }}
        >
          Build a habit of accumulating and investing regularly
        </Text>
      </View>

      <ButtonContent
        minWidth={120}
        fontSize={SIZES.font}
        data={"Về trang chủ"}
        handlePress={() => navigation.navigate("Home")}
      />
    </View>
  );
};
