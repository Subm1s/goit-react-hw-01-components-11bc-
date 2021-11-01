import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Statistic from './components/Statistic/Statistic';
import Friends from './components/Friends/Friends';
import Transaction from './components/Transaction/Transaction';
import user from './user.json';


export default function App() {
    return (
      <div className="App">
        <Profile name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            followers={user.stats.followers}
            views={user.stats.views}
            likes={user.stats.likes} />
        <Statistic title={'Upload stats'}/>
        <Friends />
        <Transaction />
      </div>
    );
  }

