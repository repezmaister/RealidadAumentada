import React, {useState} from 'react';
import {Alert, StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroTrackingStateConstants,
  ViroARSceneNavigator,
  ViroTrackingState,
  ViroTrackingReason,
  ViroVideo,
} from '@viro-community/react-viro';

const HelloWorldSceneAR = () => {
  const [_, setText] = useState('Initializing AR...');

  function onInitialized(state: ViroTrackingState, reason: ViroTrackingReason) {
    console.log('guncelleme', state, reason);
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setText('Hello World!');
    } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      // Handle loss of tracking
    }
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroVideo
        source={require('./src/assets/videos/number_1.mp4')}
        height={2}
        width={2}
        loop={true}
        position={[0, -3, -6]}
        onClick={() => Alert.alert('Open video 1')}
      />
      <ViroVideo
        source={require('./src/assets/videos/number_2.mp4')}
        height={2}
        width={2}
        loop={true}
        position={[0, 0, -6]}
        onClick={() => Alert.alert('Open video 2')}
      />
      <ViroVideo
        source={require('./src/assets/videos/number_3.mp4')}
        height={2}
        width={2}
        loop={true}
        position={[0, 3, -6]}
        onClick={() => Alert.alert('Open video 3')}
      />
      <ViroVideo
        source={require('./src/assets/videos/number_1.mp4')}
        height={2}
        width={2}
        loop={true}
        position={[-3, 0, -6]}
        onClick={() => Alert.alert('Open video 4')}
      />
      <ViroVideo
        source={require('./src/assets/videos/number_3.mp4')}
        height={2}
        width={2}
        loop={true}
        position={[3, 0, -6]}
        onClick={() => Alert.alert('Open video 5')}
      />
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
