import { FC } from 'react';
import './App.css';
import Sidenav from './components/Sidenav';
import ChatContent from './components/ChatContent';

const App:FC = () => {
  return (
    <section className="main-layout relative">
      <Sidenav/>
      <main className="chat-content-container pl-[65px] w-full h-screen">
        <ChatContent/> 
      </main>
      
    </section>
  );
}

export default App;
