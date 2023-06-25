import { FriendListItem } from 'components/FriendList/FriendListItem';
import { FriendsListWrapper } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <>
      <FriendsListWrapper>
        {friends.map(friends => (
          <FriendListItem {...friends} key={friends.id} />
        ))}
      </FriendsListWrapper>
    </>
  );
};
