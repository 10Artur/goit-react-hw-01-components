import { Profile } from './Profile/Profile';
import userData from '../data/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json';
import { FriendsList } from './FriendList/FriendList';
import friendsData from '../data/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';
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
