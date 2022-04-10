import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { React, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  dummyData,
  COLORS,
  SIZES,
  FONTS,
  icons,
  images,
} from "../constants/index2";

import {
  PriceAlert,
  Navigation,
  FocusedStatusBar,
  TransactionHistory,
} from "../components";

const Profile = () => {
  const navigation = useNavigation();

  const [trending, setTrending] = useState(dummyData.trendingCurrencies);
  const [transactionHistory, setTransactionHistory] = useState(
    dummyData.transactionHistory
  );

  function renderHeader() {
    const renderItem = ({ item, index }) => (
      <TouchableOpacity
        style={{
          width: 180,
          paddingVertical: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          marginLeft: index == 0 ? SIZES.padding : 0,
          marginRight: SIZES.radius,
          borderRadius: 10,
          backgroundColor: COLORS.white,
          ...styles.shadow,
          marginBottom: SIZES.radius,
        }}
        onPress={() => navigation.navigate("Stats")}
      >
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image
              source={item.image}
              resizeMode="cover"
              style={{ marginTop: 5, width: 25, height: 25 }}
            />
          </View>
          <View>
            <Text style={{ ...FONTS.h2 }}>{item.currency}</Text>
            <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
              {item.code}
            </Text>
          </View>
        </View>

        <View style={{ marginTop: SIZES.radius }}>
          <Text style={{ ...FONTS.h2 }}>${item.amount}</Text>
          <Text
            style={{
              color: item.type == "I" ? COLORS.green : COLORS.red,
              ...FONTS.h3,
            }}
          >
            {item.changes}
          </Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={{ width: "100%", height: 290, ...styles.shadow }}>
        <ImageBackground
          source={images.banner}
          resizeMode="cover"
          style={{ flex: 1, alignItems: "center" }}
        >
          <View
            style={{
              marginTop: SIZES.padding,
              width: "100%",
              alignItems: "flex-end",
              paddingHorizontal: SIZES.padding,
            }}
          >
            <TouchableOpacity
              style={{
                width: 35,
                height: 35,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => console.log("On press")}
            >
              <Image
                source={icons.notification_white}
                resizeMode="contain"
                style={{ flex: 1 }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{ color: COLORS.white, ...FONTS }}>
              Your Current Money
            </Text>
            <Text
              style={{
                marginTop: SIZES.base,
                color: COLORS.white,
                ...FONTS.h1,
              }}
            >
              ${dummyData.portfolio.balance}
            </Text>
            <Text style={{ color: COLORS.white, ...FONTS.body5 }}>
              {dummyData.portfolio.changes} Last 24 Hours
            </Text>
          </View>

          <View style={{ position: "absolute", bottom: "-30%" }}>
            <Text
              style={{
                marginLeft: SIZES.padding,
                color: COLORS.white,
                ...FONTS.h2,
              }}
            >
              Trending
            </Text>
            <FlatList
              contentContainerStyle={{ marginTop: SIZES.base }}
              data={trending}
              renderItem={renderItem}
              keyExtractor={(item) => `${item.id}`}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }

  function renderAlert() {
    return (
      <View style={{ marginLeft: 25, marginRight: 25 }}>
        <PriceAlert />
      </View>
    );
  }

  function renderNotices() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          padding: 20,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.secondary,
          ...styles.shadow,
        }}
      >
        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
          Investing Safety
        </Text>
        <Text
          style={{
            marginTop: SIZES.base,
            color: COLORS.white,
            ...FONTS.body4,
            lineHeight: 18,
          }}
        >
          It's very difficult to time an investment, especially when the market
          is volatile. Learn how to use dollar cost averaging to your advantage.
        </Text>

        <TouchableOpacity
          style={{ marginTop: SIZES.base }}
          onPress={() => console.log("Learn more")}
        >
          <Text
            style={{
              textDecorationLine: "underline",
              color: COLORS.green,
              ...FONTS.h3,
            }}
          >
            Learn More
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderTransactionsHistory() {
    return (
      <TransactionHistory
        customContainerStyle={{ ...styles.shadow }}
        history={transactionHistory}
      />
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, paddingBottom: 130 }}>
          {renderHeader()}
          {renderAlert()}
          {renderNotices()}
          {renderTransactionsHistory()}
        </View>
      </ScrollView>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
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

export default Profile;
