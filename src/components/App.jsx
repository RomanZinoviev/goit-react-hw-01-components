import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./Friends/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import user from "./Profile/user.json";
import data from "./Statistics/data.json";
import friends from "./Friends/friends.json";
import transactions from "./TransactionHistory/transactions.json"


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
      React homework template
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <Statistics
        title="Upload stats"  
        data={data}
      />
      <FriendList
      items={friends}
      />
      <TransactionHistory
        items={transactions}        
      />
    </div>
  );
};
