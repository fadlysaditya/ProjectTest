import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

export class Header extends Component {
  render() {
    return (
      <>
        <View
          style={{
            backgroundColor: 'red',
            height: 80,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 23,
              color: 'white',
              marginLeft: 150,
            }}>
            RACING
          </Text>
          <Image
            source={require('../../assets/images.png')}
            style={{height: 25, marginLeft: 120, width: 25}}
          />
        </View>
      </>
    );
  }
}

export default Header;
