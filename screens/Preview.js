import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import PagerView from "react-native-pager-view";

import { COLORS } from "../constants";
import { FocusedStatusBar } from "../components";
import { PreviewPage01, PreviewPage02 } from "../components";

const Preview = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />

      <PagerView style={{ flex: 1 }} initialPage={0} showPageIndicator={true}>
        <View key="1">
          <PreviewPage01 />
        </View>
        <View key="2">
          <PreviewPage02 />
        </View>
      </PagerView>
    </SafeAreaView>
  );
};

export default Preview;
