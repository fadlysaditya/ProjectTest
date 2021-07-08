import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Go from '../../assets/Button.png';

const Map = ({onPress, Date, Month, Round, Nation, Event, Event1}) => {
  return (
    <TouchableOpacity
      style={{
        height: 100,
        width: 380,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 5,
        flexDirection: 'row',
        borderRadius: 8,
      }}
      onPress={onPress}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 10,
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{Date}</Text>
        <View style={{backgroundColor: '#e0e1e6', width: 80, borderRadius: 20}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              alignSelf: 'center',
              color: '#28292c',
            }}>
            {Month}
          </Text>
        </View>
      </View>
      <View style={{width: 2, backgroundColor: '#e0e1e6'}} />
      <View style={{marginLeft: 10, marginTop: 10}}>
        <Text style={{color: 'red', fontSize: 12, fontWeight: 'bold'}}>
          {Round}
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
          {Nation}
        </Text>
        <Text>{Event}</Text>
        <Text>{Event1}</Text>
      </View>

      <Image
        source={Go}
        style={{
          height: 20,
          width: 20,
          position: 'absolute',
          top: 40,
          right: 10,
        }}
      />
    </TouchableOpacity>
  );
};

class List extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <>
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
              Upcoming
            </Text>
            <View style={{height: 3, backgroundColor: 'white'}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
              past
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <Map
            Date="18-20"
            Month="JUN"
            Round="ROUND 7"
            Nation="France"
            Event="Formula 1 Emirates Grand Pric De"
            Event1="France 2021"
            onPress={() => this.props.navigation.navigate("Detail")}
          />
          <Map
            Date="25-27"
            Month="JUN"
            Round="ROUND 8"
            Nation="Austria"
            Event="Formula 1 Grosser Preis Der"
            Event1="Steiermark 2021"
            onPress={() => this.props.navigation.navigate("Detail")}
          />
          <Map
            Date="02-04"
            Month="JUL"
            Round="ROUND 9"
            Nation="Austria"
            Event="Formula 1 Grosser Preis Von"
            Event1="Osterreich 2021"
            onPress={() => this.props.navigation.navigate("Detail")}
          />
          <Map
            Date="16-18"
            Month="JUL"
            Round="ROUND 10"
            Nation="Great Britain"
            Event="Formula 1 Pirelli British"
            Event1="Grand Prix 2021"
            onPress={() => this.props.navigation.navigate("Detail")}
          />
          <Map
            Date="30-01"
            Month="JUL-AUG"
            Round="ROUND 11"
            Nation="Hungary"
            Event="Formula 1 Magyar Nagydij 2021"
            onPress={() => this.props.navigation.navigate("Detail")}
          />
          <Map
            Date="27-29"
            Month="AUG"
            Round="ROUND 12"
            Nation="Belgium"
            Event="Formula 1 Rolex Belgian"
            Event1="Gran Prix 2021"
            onPress={() => this.props.navigation.navigate("Detail")}
          />
          <Map
            Date="30-02"
            Month="AUG-SEP"
            Round="ROUND 13"
            Nation="France"
            Event="Formula 1 Rolex Belgian"
            Event1="Gran Prix 2021"
            onPress={() => this.props.navigation.navigate("Detail")}
          />
        </ScrollView>
      </>
    );
  }
}

export default function(props) {
  const navigation = useNavigation();

  return <List {...props} navigation={navigation} />;
}
