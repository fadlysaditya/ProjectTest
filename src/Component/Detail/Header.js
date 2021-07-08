import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Back from '../../assets/back.png';

export class Header extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <>
        <View
          style={{
            backgroundColor: 'red',
            height: 80,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('PDP')}>
            <Image source={Back} style={{height: 40, width: 40}} />
          </TouchableOpacity>

          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 23,
              color: 'white',
            }}>
            Dummy Nation
          </Text>
          <Image
            source={require('../../assets/images.png')}
            style={{height: 25, width: 25, marginRight: 10}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            height: 40,
            backgroundColor: 'red',
          }}>
          <TouchableOpacity>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
              Schedule
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
              Media
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
              Circuit
            </Text>
            <View style={{height: 3, backgroundColor: 'white'}} />
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default function (props) {
  const navigation = useNavigation();

  return <Header {...props} navigation={navigation} />;
}
