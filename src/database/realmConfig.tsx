import Realm from 'realm';
import {ChatSchema} from '../schema';
import {useApp} from '@realm/react';
// Place Your RealmApp ID Here
const Email = 'daniyalhussain995@gmail.com';
const Password = 'educatioN@021';
// Place Your RealmApp ID Here
const app = new Realm.App({id: 'devicesync-vhnuj'});
// app.emailPasswordAuth.registerUser({Email, Password});

// const cred = Realm.Credentials.emailPassword(Email, Password);
// can implement inBuilt JWT, Google, Facebook, Apple Authentication Flow.
const credentials = Realm.Credentials.anonymous(); // LoggingIn as Anonymous User.

export const getRealm = async () => {
  // loggedIn as anonymous user
  const loggedInUser = await app.logIn(credentials);

  // MongoDB RealmConfiguration
  const configuration = {
    schema: [ChatSchema], // add multiple schemas, comma seperated.
    sync: {
      flexible: true,
      user: loggedInUser, // loggedIn User
      //   partitionValue: '2F6092d4c594587f582ef165a0', // should be userId(Unique) so it can manage particular user related documents in DB by userId
    },
  };
  let realm = Realm.open(configuration);

  
  return realm;
};

// import React, {useCallback, useEffect, useState} from 'react';
// import {Alert, StyleSheet, View} from 'react-native';
// import Realm from 'realm';
// import {Button, Card, Input, Layout, Text} from '@ui-kitten/components';
// import {useApp} from '@realm/react';

// export const WelcomeView = ({}): React.ReactElement => {
//   const [Email, setEmail] = useState('daniyalhussain995@gmail.com');
//   const [Password, setPassword] = useState('educatioN@021');

//   const app = useApp();

//   useEffect(() => {
//     onPressSignUp();
//     onPressSignIn();
//   }, []);

//   const signIn = useCallback(async () => {
//     const cred = Realm.Credentials.emailPassword(Email, Password);
//     await app.logIn(cred);
//   }, [app, Email, Password]);

//   const onPressSignIn = useCallback(async () => {
//     try {
//       await signIn();
//     } catch (e) {
//       Alert.alert(`Failed to sign in: ${e.message}`);
//     }
//   }, [signIn]);

//   const onPressSignUp = useCallback(async () => {
//     try {
//       app.emailPasswordAuth.registerUser({Email, Password});
//       await signIn();
//     } catch (e) {
//       Alert.alert(`Failed to sign up: ${e.message}`);
//     }
//   }, [signIn, app, Email, Password]);
//   return (
//     <View>
//       <Text>Hey</Text>
//     </View>
//   );
// };
