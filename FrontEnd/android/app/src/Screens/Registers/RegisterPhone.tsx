// import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
const RegisterScreen = () => {
  const [name, onChangeName] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  // const [text, onChangeText] = React.useState('');
  // const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.sectionContainer}>
          <View style={styles.children}>
            <Image
              source={require('../../Image/logo.png')}
              style={styles.imageLogo}
            />
            <Text style={styles.sectionTitle}>WashWizie</Text>

            <View style={styles.input}>
              <TextInput
                onChangeText={onChangeName}
                value={name}
                placeholderTextColor="gray"
                placeholder="Tên đăng nhập"
                cursorColor={'#CCEBFC'}
                style={styles.textInput}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                onChangeText={onChangeNumber}
                placeholderTextColor="gray"
                value={number}
                placeholder="Số điện thoại"
                style={styles.textInput}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                onChangeText={onChangeEmail}
                value={email}
                placeholderTextColor="gray"
                placeholder="Nhập email"
                keyboardType="email-address"
                style={styles.textInput}
              />
            </View>
            <TouchableOpacity style={styles.buttonRegister}>
              <Text style={styles.buttonText}>Tạo tài khoản</Text>
            </TouchableOpacity>

            <Text style={styles.termsText}>
              Bạn đã có tài khoản{' '}
              <TouchableOpacity>
                <Text style={styles.TextLogin}>Đăng nhập</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionContainer: {
    width: '100%',
    backgroundColor: '#353B51',
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
    gap: 10,
    alignItems: 'center',
  },
  children: {
    width: '100%',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    marginBottom: '10%',
    justifyContent: 'center',
  },
  imageLogo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    justifyContent: 'center',
    marginTop: 40,
  },
  input: {
    padding: 5,
    paddingLeft: '5%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#CCEBFC',
    width: '100%',
    color: 'white',
    marginBottom: 30,
  },
  textInput: {
    color: 'white',
  },
  buttonRegister: {
    padding: 20,
    marginTop: 10,
    borderRadius: 10,
    color: '#CCEBFC',
    width: '70%',
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: '#CCEBFC',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  termsText: {
    color: '#CCEBFC',
    padding: 20,
  },
  TextLogin: {
    color: 'white',
    top: 4,
    fontWeight: '700',
  },
});

export default RegisterScreen;
