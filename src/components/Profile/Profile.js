import {
  ProfileContainer,
  ProfileItem,
  ProfileItemStats,
  ProfileItemText,
  ProfileList,
  ProfileLocation,
  ProfileName,
  ProfileTag,
  ProfileImg,
} from './Profile.styled';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <ProfileContainer>
      <div>
        <ProfileImg src={avatar} alt="User avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </div>
      <ProfileList>
        <ProfileItem>
          <ProfileItemText>Followers</ProfileItemText>
          <ProfileItemStats>{followers}</ProfileItemStats>
        </ProfileItem>
        <ProfileItem>
          <ProfileItemText>Views</ProfileItemText>
          <ProfileItemStats>{views}</ProfileItemStats>
        </ProfileItem>
        <ProfileItem>
          <ProfileItemText>Likes</ProfileItemText>
          <ProfileItemStats>{likes}</ProfileItemStats>
        </ProfileItem>
      </ProfileList>
    </ProfileContainer>
  );
};
