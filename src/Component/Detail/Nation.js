import React, {Component} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import Flag from '../../assets/Flag_of_France.png';
import Circuit from '../../assets/France_Circuit.png';

export class Nation extends Component {
  render() {
    return (
      <>
        <ScrollView>
          <View
            style={{marginVertical: 10, marginLeft: 10, flexDirection: 'row'}}>
            <Image
              source={Flag}
              style={{width: 60, height: 40, borderRadius: 8}}
            />
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                FRANCE 2021
              </Text>
              <Text>Circuit Paul Ricard</Text>
            </View>
          </View>
          <Image
            source={Circuit}
            style={{width: 355, height: 200, alignSelf: 'center'}}
          />
          <View
            style={{
              height: 80,
              width: 355,
              borderRightColor: 'red',
              borderTopColor: 'red',
              borderTopWidth: 8,
              borderRightWidth: 8,
              borderTopEndRadius: 25,
              alignSelf: 'center',
              marginTop: 20,
            }}>
            <Text style={{fontSize: 17, marginVertical: 5,color: '#28292c',}}>
              Circuit length
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 30, fontWeight: 'bold'}}>5.842</Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginTop: 15,
                  marginLeft: 5,
                }}>
                KM
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              height: 80,
              width: 355,
              marginTop: 10,
            }}>
            <View
              style={{
                height: 80,
                width: 175,
                borderRightColor: '#e0e1e6',
                borderBottomColor: '#e0e1e6',
                borderBottomWidth: 2,
                borderRightWidth: 2,
                borderBottomEndRadius: 25,
                marginRight: 5,
              }}>
              <Text style={{color: '#28292c',fontSize: 17, marginVertical: 5, marginTop: 10}}>
                No. of laps
              </Text>
              <Text style={{fontSize: 30, fontWeight: 'bold'}}>53</Text>
            </View>
            <View
              style={{
                height: 80,
                width: 175,
                borderRightColor: '#e0e1e6',
                borderBottomColor: '#e0e1e6',
                borderBottomWidth: 2,
                borderRightWidth: 2,
                borderBottomEndRadius: 25,
              }}>
              <Text style={{color: '#28292c',fontSize: 17, marginVertical: 5, marginTop: 10}}>
                First Grand Prix
              </Text>
              <Text style={{fontSize: 30, fontWeight: 'bold'}}>1971</Text>
            </View>
          </View>
          <View
            style={{
              height: 80,
              width: 355,
              borderRightColor: '#e0e1e6',
              borderBottomColor: '#e0e1e6',
              borderBottomWidth: 2,
              borderRightWidth: 2,
              borderBottomEndRadius: 25,
              alignSelf: 'center',
              marginTop: 20,
            }}>
            <Text style={{color: '#28292c',fontSize: 17, marginVertical: 5}}>Race distance</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 30, fontWeight: 'bold'}}>309.69</Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginTop: 15,
                  marginLeft: 5,
                }}>
                KM
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 110,
              width: 355,
              borderRightColor: '#e0e1e6',
              borderBottomColor: '#e0e1e6',
              borderBottomWidth: 2,
              borderRightWidth: 2,
              borderBottomEndRadius: 25,
              alignSelf: 'center',
              marginVertical: 20,
            }}>
            <Text style={{color: '#28292c',fontSize: 17, marginVertical: 5}}>Lap Reacord</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 30, fontWeight: 'bold'}}>1:32.740</Text>
            </View>
            <Text>Sebastian Vetel (2019)</Text>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default Nation;
