// rafce => ES7 React/Redux/...
import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
// import ChannelContainer from './components/ChannelContainer';
// import ChannelListContainer from './components/ChannelListContainer';

import { ChannelListContainer, ChannelContainer, Auth } from './components';

import './App.css';

const apiKey = '2k7f48ykkhsk';

const client = StreamChat.getInstance(apiKey);
//* Fix Auth
const authToken = false;

const App = () => {
  if(!authToken) return <Auth />
  
  return(
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer

        />
        <ChannelContainer

        />
      </Chat>
    </div>
  );
}

export default App;