import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Header from '../Component/Account/Header';
import List from '../Component/Account/List';
import BottomNav from '../Component/Account/BottomNav';

export class Account extends Component {
  render() {
    return (
      <>
        <Header/>
        <List/>
        <BottomNav/>
      </>
    );
  }
}

export default Account;
