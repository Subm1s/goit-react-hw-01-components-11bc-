// import PropTypes from 'prop-types';
import Friend from '..//data/friends.json';
import s from './Friends.module.css';

export default function FriendsList({ name, avatar, isOnline }){
    const friendStatus = isOnline ? s.online : s.offline;
    return (
Friend.map(el =>(
    <li className={s.item} key={el.id}>
        <span className={friendStatus}>{el.isOnline}</span>
        <img className={s.avatar} src={el.avatar} alt={el.name} width="48" />
        <p className={s.name}>{el.name}</p>
    </li>
),)
    );
}

