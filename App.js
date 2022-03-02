import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import WebView from 'react-native-webview';

const WEB_URL = 'https://keep-alive.com.ua/';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <WebView source={{uri: WEB_URL}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
