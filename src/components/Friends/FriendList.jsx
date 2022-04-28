import { FriendListItem } from "./FriendListItem"

export function FriendList(props){
    return (
        <ul className="friend-list">
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