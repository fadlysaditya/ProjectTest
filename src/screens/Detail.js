import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Header from '../Component/Detail/Header';
import Nation from '../Component/Detail/Nation';

export class Detail extends Component {
  render() {
    return (
      <>
        <Header/>
        <Nation/>
      </>
    );
  }
}

export default Detail;
