import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '913629344417-thkr28mj5ao619dcvcb8lks413hf95g9.apps.googleusercontent.com',
  offlineAccess: true,
});

const App = () => {
  const [userGoogleInfo, setUserGoogleInfo] = useState({});
  const [loaded, setLoaded] = useState(false);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      setUserGoogleInfo(userInfo);
      setLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(userGoogleInfo);

  return (
    <View>
      <Text>App JS</Text>
      <GoogleSigninButton
        onPress={signIn}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        style={{width: 100, height: 100}}
      />
      {loaded ? (
        <View>
          <Text>{userGoogleInfo?.user?.name}</Text>
          <Text>{userGoogleInfo?.user?.email}</Text>
          <Image
            style={{width: 100, height: 100}}
            source={{uri: userGoogleInfo?.user?.photo}}
          />
        </View>
      ) : (
        <Text>Not Signed In</Text>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
