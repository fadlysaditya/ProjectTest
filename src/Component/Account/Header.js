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
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 23,
              color: 'white',
            }}>
            RACING
          </Text>
          <Image
            source={require('../../assets/images.png')}
            style={{
              height: 25,
              width: 25,
              position: 'absolute',
              top: 30,
              right: 10,
            }}
          />
        </View>
      </>
    );
  }
}

export default Header;
