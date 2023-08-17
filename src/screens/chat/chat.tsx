import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from '@ui-kitten/components';
// import {realmContext} from '../../database';
import {getRealm} from '../../database';
// const {useRealm, useQuery} = realmContext;
const schemaName = 'Chats';

export const ChatView = ({}): React.ReactElement => {
  //   const realm = useRealm();
  const [ChatList, setChatList] = useState<Array<[]>>([]);
  //   const schemaNames = useQuery(schemaName);

  useEffect(() => {
    getRealm().then(realm => {
      const chats = realm.objects('Chats');
      realm.subscriptions.update(mutableSubs => {
        mutableSubs.add(chats);
      });
    });

    return fetchChatListCall();
  }, []);

  const fetchChatListCall = () => {
    getRealm()
      .then(realm => {
        const chatsList = realm.objects(schemaName);
        console.log(chatsList, 'chatsList');
        setChatList(chatsList);
        // setLoading(false);
        chatsList.addListener(() => {
          setChatList([...chatsList]);
        });
        return () => {
          const chatsList = realm.objects(schemaName);
          chatsList.removeAllListeners();
          realm.close();
        };
      })
      .catch(error => {
        // setLoading(false);
        console.log(error, 'ERROR');
      });
  };

  //   useEffect(() => {
  //     realm.subscriptions.update(mutableSubs => {
  //       // Create subscription for filtered results.
  //       mutableSubs.add(schemaNames);
  //     });
  //     fetchChatListCall();
  //   }, []);
  //   const chats = realm.objects(schemaName);
  //   //   const createItems = useCallback();
  //   function onChatChange(chats, changes) {
  //     // Handle deleted Dog objects
  //     changes.deletions.forEach(index => {
  //       // You cannot directly access deleted objects,
  //       // but you can update a UI list, etc. based on the index.
  //       console.log(`Looks like Dog #${index} has left the realm.`);
  //     });
  //     // // Handle newly added Dog objects
  //     changes.insertions.forEach(index => {
  //       const insertedChat = chats[index];
  //       console.log(`Welcome our new friend, ${JSON.stringify(insertedChat)}!`);
  //     });
  //     // // Handle Dog objects that were modified
  //     changes.modifications.forEach(index => {
  //       const modifiedChat = chats[index];
  //       console.log(`Hey ${JSON.stringify(modifiedChat)}, you look different!`);
  //     });
  //   }

  //   const fetchChatListCall = () => {
  //     setChatList(chats);

  //     chats.addListener(onChatChange);
  //     chats.addListener(() => {
  //       setChatList([...chats]);
  //     });
  //     return () => {
  //       chats.removeAllListeners();
  //       realm.close();
  //     };
  //   };
  const onSent = async () => {
    // const realm = await getRealm();
    getRealm().then(realm => {
      const newMsg = {
        //   _id: new ObjectId(),
        sender: 'daniyal',
        receiver: 'hussain',
        message: 'hey new msg',
        realm_id: '2F6092d4c594587f582ef165a0', // should be userId or add any static for test project.
        conversationId: 'daniyalhussain',
        // status: 'delivered',
      };
      realm.write(() => {
        realm.create(schemaName, newMsg);
      });
    });
  };
  return (
    <View style={styles.safeArea}>
      <Text>Chat</Text>
      {ChatList.map((e, i) => (
        <View
          key={e._id}
          style={{
            width: '100%',
            alignItems: e.receiver == 'daniyal' ? 'flex-start' : 'flex-end',
          }}>
          <Text>
            {i + 1} {e?.message}
          </Text>
        </View>
      ))}
      <Button onPress={onSent}>Sent</Button>
    </View>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
