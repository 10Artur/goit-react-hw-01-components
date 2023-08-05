import {
  FriendListStatus,
  FriendsListContainer,
  FriendsListImg,
  FriendsListItem,
  FriendsListItems,
  FriendsListName,
} from './FriendList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <FriendsListContainer>
      <FriendsListItems>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendsListItem key={id}>
            <FriendListStatus $isOnline={isOnline}></FriendListStatus>
            <FriendsListImg src={avatar} alt="avatar" />
            <FriendsListName>{name}</FriendsListName>
          </FriendsListItem>
        ))}
      </FriendsListItems>
    </FriendsListContainer>
  );
};
