import PropTypes from 'prop-types';
import styled from 'styled-components';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FrItem>
      <Status>{isOnline}</Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <UserName>{name}</UserName>
    </FrItem>
  );
};

const FrItem = styled.li`
 display : flex;    
 width:300px;
 justify-content: space-between;
`
const Status = styled.span `
  background-color: red;
  width: 10px;
  height: 10px;
  border-radius: 50%;

`
const Avatar = styled.img`
  width: 15px;

`

const UserName = styled.span`
  font-weight: bold;
`

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number,
};
