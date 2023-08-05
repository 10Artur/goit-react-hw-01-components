import styled from 'styled-components';

export const FriendsListContainer = styled.div `
  width: 1200px;
  background-color: white;
  margin: 0 auto 200px auto;
  padding: 50px 25px 50px 25px;
  border-radius: 10px;
  box-shadow: 0px 2px 11px 3px rgba(0, 0, 0, 0.71);
`;
export const FriendsListItems = styled.ul `
  display: flex;
  gap: 20px;
`;

export const FriendsListItem = styled.li `
  text-align: center;
  padding: 20px;
  outline: 2px solid LightSkyBlue;
  border-radius: 15px;
`;

export const FriendListStatus = styled.span `
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.$isOnline ? 'green' : 'red')};
`;

export const FriendsListImg = styled.img `
  margin-bottom: 40px;
`;

export const FriendsListName = styled.p `
  font-weight: 500;
  font-size: 22px;
`;