import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Animated,
  StyleSheet,
} from "react-native";
import { React, useState } from "react";
import {
  VictoryScatter,
  VictoryLine,
  VictoryChart,
  VictoryAxis,
} from "victory-native";

import { VictoryCustomTheme } from "../styles";
import { dummyData, COLORS, FONTS, SIZES, icons } from "../constants/index2";
import {
  Navigation,
  FocusedStatusBar,
  HeaderBar,
  TextButton,
  CurrencyLabel,
  PriceAlert,
} from "../components";

const Stats = () => {
  const scrollX = new Animated.Value(0);
  const numberOfCharts = [1, 2, 3];

  const [selectedCurrency, setSelectedCurrency] = useState(
    dummyData.trendingCurrencies[0]
  );

  const [chartOptions, setChartOptions] = useState(dummyData.chartOptions);
  const [selectedOptions, setSelectedOptions] = useState(chartOptions[0]);

  function optionOnClickHandler(option) {
    setSelectedOptions(option);
  }

  function renderDots() {
    const dotPostion = Animated.divide(scrollX, SIZES.width);

    return (
      <View style={{ height: 30, marginTop: 15 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {numberOfCharts.map((item, index) => {
            const opacity = dotPostion.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });

            const dotSize = dotPostion.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
              extrapolate: "clamp",
            });

            const dotColor = dotPostion.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [COLORS.gray, COLORS.primary, COLORS.gray],
              extrapolate: "clamp",
            });

            return (
              <Animated.View
                key={`dot-${index}`}
                opacity={opacity}
                style={{
                  borderRadius: SIZES.radius,
                  marginHorizontal: 6,
                  width: dotSize,
                  height: dotSize,
                  backgroundColor: dotColor,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }

  function renderChart() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          alignItems: "center",
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
          ...styles.shadow,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.padding,
            marginHorizontal: SIZES.padding,
          }}
        >
          <View style={{ flex: 1 }}>
            <CurrencyLabel
              icon={selectedCurrency?.image}
              currency={selectedCurrency?.currency}
              code={selectedCurrency?.code}
            />
          </View>

          <View>
            <Text style={{ ...FONTS.h3 }}>${selectedCurrency?.amount}</Text>
            <Text
              style={{
                color:
                  selectedCurrency?.type == "I" ? COLORS.green : COLORS.red,
              }}
            >
              {selectedCurrency?.changes}
            </Text>
          </View>
        </View>

        <Animated.ScrollView
          horizontal
          pagingEnabled
          scrollEventThrottle={16}
          snapToAlignment="center"
          snapToInterval={SIZES.width - 40}
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
        >
          {numberOfCharts.map((item, index) => (
            <View
              key={`chart-${index}`}
              style={{ marginLeft: index == 0 ? SIZES.base : 0 }}
            >
              <View style={{ marginTop: -25 }}>
                <VictoryChart
                  theme={VictoryCustomTheme}
                  height={220}
                  width={SIZES.width - 40}
                >
                  <VictoryLine
                    style={{
                      data: { stroke: COLORS.secondary },
                      parent: { border: "1px solid #ccc" },
                    }}
                    data={selectedCurrency?.chartData}
                    categories={{
                      x: ["90 DAY", "60 DAY", "30 DAY", "1 DAY"],
                      y: ["15", "30", "45"],
                    }}
                  />
                  <VictoryScatter
                    data={selectedCurrency?.chartData}
                    size={7}
                    style={{ data: { fill: COLORS.secondary } }}
                  />
                  <VictoryAxis style={{ grid: { stroke: "transparent" } }} />
                  <VictoryAxis
                    dependentAxis
                    style={{
                      axis: { stroke: "transparent" },
                      grid: { stroke: "grey" },
                    }}
                  />
                </VictoryChart>
              </View>
            </View>
          ))}
        </Animated.ScrollView>

        <View
          style={{
            width: "100%",
            paddingHorizontal: SIZES.padding,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {chartOptions.map((option) => {
            return (
              <TextButton
                key={`option-${option.id}`}
                label={option.label}
                customContainerStyle={{
                  height: 30,
                  width: 60,
                  marginRight: 2,
                  marginLeft: 2,
                  borderRadius: 15,
                  backgroundColor:
                    selectedOptions.id == option.id
                      ? COLORS.primary
                      : COLORS.lightGray,
                }}
                customLabelStyle={{
                  color:
                    selectedOptions.id == option.id
                      ? COLORS.white
                      : COLORS.gray,
                  ...FONTS.body5,
                }}
                onPress={() => optionOnClickHandler(option)}
              />
            );
          })}
        </View>

        {renderDots()}
      </View>
    );
  }

  function renderBuy() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.radius,
          padding: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
          ...styles.shadow,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: SIZES.radius,
          }}
        >
          <View style={{ flex: 1 }}>
            <CurrencyLabel
              icon={selectedCurrency.image}
              currency={`${selectedCurrency.currency} status`}
              code={selectedCurrency.code}
            />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ marginRight: SIZES.base }}>
              <Text style={{ ...FONTS.h3 }}>
                ${selectedCurrency.wallet.value}
              </Text>
              <Text
                style={{
                  textAlign: "right",
                  color: COLORS.gray,
                  ...FONTS.body4,
                }}
              >
                {selectedCurrency.wallet.crypto}% 
              </Text>
            </View>
            <Image
              source={icons.right_arrow}
              resizeMode="cover"
              style={{ width: 20, height: 20, tintColor: COLORS.gray }}
            />
          </View>
        </View>

        <TextButton label="Back it" />
      </View>
    );
  }

  function renderAbout() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.radius,
          padding: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
          ...styles.shadow,
        }}
      >
        <Text style={{ ...FONTS.h3 }}>About {selectedCurrency.currency}</Text>
        <Text style={{ marginTop: SIZES.base, ...FONTS.body3 }}>
          {selectedCurrency.description}
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGray1 }}>
      <FocusedStatusBar background={COLORS.primary} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderBar right={true} />

        <View
          style={{ flex: 1, paddingBottom: SIZES.padding, marginBottom: 100 }}
        >
          {renderChart()}
          {renderBuy()}
          {renderAbout()}
          <PriceAlert
            customContainerStyle={{
              marginTop: SIZES.padding,
              marginHorizontal: SIZES.radius,
            }}
          />
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

export default Stats;
