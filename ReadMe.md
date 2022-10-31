# react-native-accordion

Animated accordion for React Native.

## Installation

```
npm install @beingrahulvyas/react-native-accordion
```

## Properties

| Prop           | Description                                                                      |
| -------------- | -------------------------------------------------------------------------------- |
| header         | A function that should return a component. It represets the header of accordion. |
| body           | A function that should return a component. It represets the body of accordion.   |
| containerStyle | styling for main accordion container                                             |
| onToggle |  |

## Example

```
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Accordian from '@beingrahulvyas/react-native-accordion';

const App = () => {
  return (
    <Accordian
        header={() => <Text style={styles.headerTextStyle}>Header</Text>}
        containerStyle={styles.acondianContainer}
        body={() => (
            <Text>
              Loremuswdc saucasdbcusdc bsduchsd bcsdcsdbsd cs
              dcbsdcsdbcsdbckbsdcsdcsdb cs dcbsdc sd csdbcsdbcsd v sdovisdf
              vbsdjv h
            </Text>
        )}
    />
  );
};

const styles = StyleSheet.create({
  headerTextStyle: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontWeight: '600',
    color: '#000',
    borderBottomWidth: 1,
  },
  acondianContainer: {
    margin: 4,
    borderWidth: 1,
    borderColor: '#cacaca',
    borderRadius: 4,
    overflow: 'hidden',
  },
});
```
