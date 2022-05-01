import { FriendListItem } from "./FriendListItem";
import PropTypes from 'prop-types';
import s from "../Friends/FriendList.module.css";

export function FriendList({items}){
    return (
        <ul className={s.friendsList}>
            {items.map(({id,avatar,name,isOnline}) =>
                <FriendListItem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
            />)}  
</ul>
    )
}

FriendList.propTypes = {
    items: PropTypes.array.isRequired
}