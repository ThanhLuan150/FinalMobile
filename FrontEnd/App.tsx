import React from 'react';
import {View} from 'react-native';
import RegisterPhone from './android/app/src/Screens/Registers/RegisterPhone';

function App(): React.JSX.Element {
  return (
    <View style={{flex: 1}}>
      <RegisterPhone/>
    </View>
  );
}

export default App;
