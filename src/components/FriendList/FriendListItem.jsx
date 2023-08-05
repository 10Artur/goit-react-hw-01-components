import {
  FriendListStatus,
  FriendsListImg,
  FriendsListItem,
  FriendsListName,
} from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsListItem>
      <FriendListStatus $isOnline={isOnline}> </FriendListStatus>
      <FriendsListImg src={avatar} alt="avatar" />
      <FriendsListName> {name} </FriendsListName>
    </FriendsListItem>
  );
};
