import * as React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {ChatView} from './src/screens/chat/chat';
import {NavigationContainer} from '@react-navigation/native';
// import {AppProvider, createRealmContext, UserProvider} from '@realm/react';
// import {realmContext, WelcomeView} from './src/database';
import {ActivityIndicator, View} from 'react-native';

// const {RealmProvider} = realmContext;
const App = () => {
  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        {/* <AppProvider id={'devicesync-vhnuj'}>
          <UserProvider fallback={WelcomeView}> */}
        <AppWrapper />
        {/* </UserProvider>
        </AppProvider> */}
      </ApplicationProvider>
    </React.Fragment>
  );
};
const loadingIndicator = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

const AppWrapper = () => {
  return (
    // <RealmProvider
    //   sync={{
    //     flexible: true,
    //     onError: (_, error) => {
    //       console.log(error);
    //     },
    //   }}
    //   fallback={loadingIndicator}>
    <NavigationContainer>
      <ChatView />
    </NavigationContainer>
    // </RealmProvider>
  );
};

export default App;
