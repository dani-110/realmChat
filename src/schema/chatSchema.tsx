import {BSON} from 'realm';

export const ChatSchema = {
  name: 'Chats',
  properties: {
    _id: {type: 'objectId', default: () => new BSON.ObjectId()},
    sender: 'string',
    receiver: 'string',
    message: 'string',
    realm_id: 'string', // should be userId or add any static for test project.
    conversationId: 'string',
  },
  primaryKey: '_id',
};
// import {BSON} from 'realm';

// export class ChatSchema extends Realm.Object<ChatSchema> {
//   _id!: BSON.ObjectId;
//   sender!: string;
//   receiver!: string;
//   message!: string;
//   realm_id!: string;
//   conversationId!: string;
//   status!: string;

//   static schema: Realm.ObjectSchema = {
//     name: 'Chat',
//     primaryKey: '_id',
//     properties: {
//       _id: {type: 'objectId', default: () => new BSON.ObjectId()},
//       sender: 'string',
//       receiver: 'string',
//       message: 'string?',
//       realm_id: 'string?', // should be userId or add any static for test project.
//       conversationId: 'string',
//     },
//   };
// }
