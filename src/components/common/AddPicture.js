import React from 'react';
import { Image, TouchableHighlight, View } from 'react-native';

const AddPicture = ({ onPress }) => {
  return (
    <View>
      <TouchableHighlight onPress={onPress}>
        <Image
          style={{ width: 30, height: 30 }}
          source={require('../img/plus.png')}
        />
      </TouchableHighlight>
    </View>
  );
};

export { AddPicture };
