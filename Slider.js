/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';

import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Slider from '@react-native-community/slider';

class HealthSlider extends React.Component<$FlowFixMeProps, $FlowFixMeState> {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

  static defaultProps = {
    value: 0,
  };

  state = {
    value: this.props.value,
  };

  handleChange(theValue) {
      if (this.props.onChange && this.props.name) {
        this.props.onChange(this.props.name, theValue);
      }
      this.setState({ value: theValue })
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>
          {this.state.value && +this.state.value.toFixed(3)}
        </Text>
        <Slider
          {...this.props}
          onValueChange={this.handleChange}
        />
        <View style={styles.divider}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 20,
  },
  divider: {
    marginBottom: 40
  },
});

export default HealthSlider;
