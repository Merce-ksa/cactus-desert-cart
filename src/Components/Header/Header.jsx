import React from 'react';
import {
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import globals from '../../assets/styles/globals';

export default function Header() {
  return (
    <View style={globals.header}>
      <Image
        key="logo-drinksAndCo"
        source={require('../../assets/img/logo.png')}
        style={globals.headerLogo}
        testID="logoDrinksAndCo"
      />
      <TouchableOpacity
        testID="profile-navigate"
      >
        <Image
          key="user-icon"
          style={globals.userIcon}
          source={require('../../assets/img/user-icon.png')}
          testID="userIcon"
        />
      </TouchableOpacity>
    </View>
  );
}
