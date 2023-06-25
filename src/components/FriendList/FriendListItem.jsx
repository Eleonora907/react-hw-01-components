import PropTypes from 'prop-types';
import { Avatar, FrItem, Status, UserName } from './FriendListItem.styled';


export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
    <FrItem>
      <Status online={isOnline}>{isOnline}</Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <UserName>{name}</UserName>
    </FrItem></>
  );
};


FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number,
};
