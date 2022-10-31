import React, { memo, useState } from "react";
import {
  LayoutAnimation,
  Platform,
  Pressable,
  UIManager,
  View,
} from "react-native";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Accordion = ({ header, body, containerStyle, onToggle }) => {
  const [show, setShow] = useState(false);

  const onShowHandler = () => {
    setShow(!show);
    onToggle(!show);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  return (
    <View style={containerStyle}>
      <Pressable onPress={onShowHandler}>{header ? header() : null}</Pressable>
      {show && body ? body() : null}
    </View>
  );
};

export default memo(Accordion);
