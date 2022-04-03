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
        1. Lựa chọn Dự án đầu tư
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
          Đầu tư đơn giản, an toàn chỉ từ 50.000 đồng
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
          Đơn giản, dễ dàng, minh bạch và hoàn toàn miễn lệ phí
        </Text>
      </View>

      <ButtonContent
        minWidth={120}
        fontSize={SIZES.font}
        data={"Kéo sang để tiếp tục"}
      />
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
        2. Nạp tiền và Trải nghiệm
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
          Nạp tiền và theo dõi tài sản tăng trưởng
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
          Tạo dựng thói quen tích lũy, đầu tư thường xuyên, đều đặn
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
