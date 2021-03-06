import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Button
} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import axios from 'axios';

import Map from '../components/Map.js'
import RiddleModal from '../components/RiddleModal.js'
import Gold from '../components/Gold.js'

export default class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  // Render any loading content that you like here
  render() {
    return (
      <View style={{flex: 1}}>
        <Map />
        <RiddleModal/>
        <NavigationEvents
          onWillFocus={() => {
            this.props.screenProps.getGold();
          }}
        />
        <Button
          title={'Profile'}
          style={{ backgroundColor: 'black' }}
          onPress={() => this.props.navigation.navigate('Profile')}
        />
        <Gold goldAmount={this.props.screenProps.goldAmount} />
      
      </View>
    );
  }
}