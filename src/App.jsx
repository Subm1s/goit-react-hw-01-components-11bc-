import React from 'react';
import './App.css';

import Profile from './components/Profile/Profile';
import Statistic from './components/Statistic/Statistic';
import Friends from './components/Friends/Friends';
import Transaction from './components/Transaction/Transaction';

import user from './components/data/user.json';
import statisticalData from './components/data/statistical-data.json';
import friends from './components/data/friends.json';
import transaction from './components/data/transactions.json'



export default function App() {
    return (
      <div className="App">
        <Profile
          user={user}
        />
        <Statistic title="Upload stats" stats={statisticalData} />
        <Statistic stats={statisticalData} />
        <Friends 
        friends={friends}
        />
        <Transaction 
        items={transaction}/>
      </div>
    );
  }

