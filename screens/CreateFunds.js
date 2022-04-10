import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { COLORS, FONTS, SIZES, assets } from "../constants";
import { icons } from "../constants/index2";
import { FocusedStatusBar, TextButton } from "../components";

const CreateFunds = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={{ zIndex: 2, marginTop: 20, marginLeft: 20 }}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={icons.back_arrow}
            resizeMode="contain"
            style={{ width: 25, height: 25, tintColor: COLORS.gray }}
          />
          <Text
            style={{
              marginLeft: SIZES.base,
              fontFamily: FONTS.bold,
              fontSize: SIZES.large,
              color: COLORS.primary,
            }}
          >
            Back
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginLeft: 30, marginRight: 30 }}>
        <Text
          style={{
            marginTop: 50,
            fontFamily: FONTS.bold,
            fontSize: SIZES.extraLarge,
            color: COLORS.primary,
          }}
        >
          Submit campaign
        </Text>

        <View style={{ marginTop: SIZES.font }}>
          <Text
            style={{
              marginLeft: 5,
              marginBottom: 5,
              fontFamily: FONTS.medium,
              fontSize: SIZES.medium,
              color: COLORS.primary,
            }}
          >
            Name of campaign:
          </Text>
          <View
            style={{
              width: "100%",
              borderRadius: SIZES.font,
              backgroundColor: COLORS.input,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: SIZES.font,
              paddingVertical: SIZES.small - 2,
            }}
          >
            <Image resizeMode="contain" style={{ width: 20, height: 20 }} />
            <TextInput placeholder="Name of project" style={{ flex: 1 }} />
          </View>
        </View>

        <View style={{ marginTop: SIZES.font }}>
          <Text
            style={{
              marginLeft: 5,
              marginBottom: 5,
              fontFamily: FONTS.medium,
              fontSize: SIZES.medium,
              color: COLORS.primary,
            }}
          >
            Name of company:
          </Text>
          <View
            style={{
              width: "100%",
              borderRadius: SIZES.font,
              backgroundColor: COLORS.input,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: SIZES.font,
              paddingVertical: SIZES.small - 2,
            }}
          >
            <Image resizeMode="contain" style={{ width: 20, height: 20 }} />
            <TextInput placeholder="KickIO" style={{ flex: 1 }} />
          </View>
        </View>

        <View style={{ marginTop: SIZES.font }}>
          <Text
            style={{
              marginLeft: 5,
              marginBottom: 5,
              fontFamily: FONTS.medium,
              fontSize: SIZES.medium,
              color: COLORS.primary,
            }}
          >
            Campaign description:
          </Text>
          <View
            style={{
              width: "100%",
              borderRadius: SIZES.font,
              backgroundColor: COLORS.input,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: SIZES.font,
              paddingVertical: 50,
            }}
          >
            <Image resizeMode="contain" style={{ width: 20, height: 20 }} />
            <TextInput placeholder="Campaign description" style={{ flex: 1 }} />
          </View>
        </View>

        <View style={{ marginTop: SIZES.font }}>
          <Text
            style={{
              marginLeft: 5,
              marginBottom: 5,
              fontFamily: FONTS.medium,
              fontSize: SIZES.medium,
              color: COLORS.primary,
            }}
          >
            Type of campaign:
          </Text>
          <View
            style={{
              width: "100%",
              borderRadius: SIZES.font,
              backgroundColor: COLORS.input,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: SIZES.font,
              paddingVertical: SIZES.small - 2,
            }}
          >
            <Image resizeMode="contain" style={{ width: 20, height: 20 }} />
            <TextInput placeholder="Type of campaign" style={{ flex: 1 }} />
          </View>
        </View>

        <View style={{ marginTop: SIZES.font, marginBottom: 20 }}>
          <Text
            style={{
              marginLeft: 5,
              marginBottom: 5,
              fontFamily: FONTS.medium,
              fontSize: SIZES.medium,
              color: COLORS.primary,
            }}
          >
            Campaign duration:
          </Text>
          <View
            style={{
              width: "100%",
              borderRadius: SIZES.font,
              backgroundColor: COLORS.input,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: SIZES.font,
              paddingVertical: SIZES.small - 2,
            }}
          >
            <Image resizeMode="contain" style={{ width: 20, height: 20 }} />
            <TextInput placeholder="Campaign duration" style={{ flex: 1 }} />
          </View>
        </View>

        <TextButton label="Submit" />
      </View>
    </SafeAreaView>
  );
};

export default CreateFunds;
