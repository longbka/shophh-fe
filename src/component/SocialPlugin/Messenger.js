import React from 'react';
import { CustomChat, FacebookProvider } from 'react-facebook';
const Messenger = () => {
  return (
    <>
      <FacebookProvider appId="869452877828671">
        <CustomChat pageId="100258375831916" />
      </FacebookProvider>
    </>
  );
};

export default Messenger;
