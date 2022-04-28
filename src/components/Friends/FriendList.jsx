import { FriendListItem } from "./FriendListItem"
import s from "../Friends/FriendList.module.css"

export function FriendList(props){
    return (
        <ul className={s.friendsList}>
            {props.items.map((item) =>
                <FriendListItem
                key={item.id}
                avatar={item.avatar}
                name={item.name}
                isOnline={item.isOnline}
            />)}  
</ul>
    )
}