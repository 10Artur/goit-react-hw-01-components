import { Profile } from './Profile/Profile';
import userData from '../user.json';
import { GlobalStyle } from 'GlobalStyle';

export const App = () => {
  return (
    <div>
      <Profile user={userData} /> <GlobalStyle />
    </div>
  );
};
