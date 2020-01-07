import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import NetInfo from "@react-native-community/netinfo";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const { width } = Dimensions.get('window');

function MiniOfflineSign() {
  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>No Internet Connection</Text>
    </View>
  );
}

class OfflineNotice extends Component {
  state = {
    isConnected: true
  };

  componentDidMount() {
    NetInfo.fetch().then(state => {
        console.log("Connection type", state.type);
        console.log("Is connected?", state.isConnected);
      });
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange = (isConnected) => {
    if (isConnected) {
      this.setState({ isConnected });
    } else {
      this.setState({ isConnected });
    }
  };

  render() {
    if (!this.state.isConnected) {
      return <MiniOfflineSign />;
    }
    return null;
  }
}

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#b52424',
    height: hp('4%'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
    top:hp('3.3%'),
    elevation:5
  },
  offlineText: { color: '#fff' }
});

export default OfflineNotice;