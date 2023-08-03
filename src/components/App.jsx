import { Profile } from './Profile/Profile';
import userData from '../user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data.json';
import { GlobalStyle } from 'components/GlobalStyle';

export const App = () => {
  return (
    <div>
      <Profile user={userData} />
      <Statistics title="Upload stats" stats={data} />
      <GlobalStyle />
    </div>
  );
};
