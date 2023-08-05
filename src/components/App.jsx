import { Profile } from './Profile/Profile';
import userData from '../user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data.json';
import { FriendsList } from './FriendList/FriendList';
import friendsData from '../friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';
import { GlobalStyle } from 'components/GlobalStyle';

export const App = () => {
  return (
    <div>
      <Profile user={userData} />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friendsData} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </div>
  );
};
