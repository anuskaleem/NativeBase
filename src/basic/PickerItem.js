import React, { Component } from 'react';
import { Picker } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';
import Reactotron from 'reactotron-react-native'

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';

class Item extends Component {
  Reactotron.logImportant("logging from picker item")
  console.log("logging from picker item")
  render() {
    return <Picker.Item ref={c => (this._root = c)} {...this.props} />;
  }
}

Item.propTypes = {
  ...Picker.Item.propTypes
};

const StyledItem = connectStyle('NativeBase.Item', {}, mapPropsToStyleNames)(
  Item
);

export { StyledItem as Item };
