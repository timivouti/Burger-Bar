import React from 'react';
import { Image, View } from 'react-native';

const HeaderPicture = () => {
  return (
    <View>
      <Image
        style={{ width: 400, height: 200 }}
        source={require('../img/burger.jpg')}
      />
    </View>
  );
};

export { HeaderPicture };
