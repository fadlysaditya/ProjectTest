import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import Dummy from '../../assets/fff&text=Dummy.png';

const Logo = ({img, text, onPress}) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <Image style={styles.image} source={img} />
      <Text style={styles.txt}>{text}</Text>
    </TouchableOpacity>
  );
};

class BottomNav extends Component {
  render() {
    const {navigation} = this.props;

    return (
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          borderTopWidth: 1 / 2,
          borderTopColor: 'black',
          justifyContent: 'space-between',
        }}>
        <Logo img={Dummy} text="Latest" />
        <Logo img={Dummy} text="Video" />
        <Logo img={Dummy} text="Racing" />
        <Logo img={Dummy} text="Standings" />
        <Logo img={Dummy} text="More" />
      </View>
    );
  }
}

export default BottomNav;

const styles = StyleSheet.create({
  wrapper: {height: 60, justifyContent: 'center', alignItems: 'center'},
  image: {width: 30, height: 30},
  txt: {fontSize: 12, color: '#808080', marginBottom: 10, marginHorizontal: 10},
});
