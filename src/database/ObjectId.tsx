// To Generate MongoDb ObjectId
export const generateMongoObjectID = () => {
  var timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
  return (
    timestamp +
    'xxxxxxxxxxxxxxxx'
      .replace(/[x]/g, function () {
        return ((Math.random() * 16) | 0).toString(16);
      })
      .toLowerCase()
  );
};

// import {createRealmContext} from '@realm/react';
// import {Chat} from '../schema';

// export const realmContext = createRealmContext({
//   schema: [Chat],
// });
