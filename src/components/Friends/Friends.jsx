import PropTypes from 'prop-types';
import s from './Friends.module.css';

import FriendsList from './FriendsList';

export default function Friends(){
    return(
        <>
            <ul className={s.friendList}>
                {
                    <FriendsList />
                }
            </ul>
        </>
    );
};

Friends.propTypes = {
    avatar:PropTypes.string,
    name:PropTypes.string,
    isOnline:PropTypes.bool,
}