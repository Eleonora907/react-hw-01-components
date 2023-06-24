import {FriendListItem} from 'components/FriendList/FriendListItem'
import styled  from 'styled-components';


export const FriendList = ({friends}) => {
    return <FriendsListWrapper>
        {friends.map(friends => (
          <FriendListItem {...friends} key={friends.id} />
        ))}
  </FriendsListWrapper>
}

const FriendsListWrapper = styled.ul`
display: flex;
flex-direction: column;
margin-top: 30px;
align-items: center;
`