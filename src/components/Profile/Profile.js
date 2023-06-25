// import { Stats } from 'components/Stats/Stats';
import PropTypes from 'prop-types';
import {
  Card,
  Image,
  Label,
  Quantity,
  StatItem,
  Statistics,
  UserCard,
  UserLocation,
  UserName,
  UserTag,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <>
      <Card>
        <UserCard>
          <Image src={avatar} alt={tag} />
          <UserName>{username}</UserName>
          <UserTag>@{tag}</UserTag>
          <UserLocation>{location}</UserLocation>
        </UserCard>

        <Statistics>
          {Object.entries(stats).map(([key, value]) => {
            return (
              <StatItem key={key}>
                <Label>{key}</Label>
                <Quantity>{value}</Quantity>
              </StatItem>
            );
          })}
        </Statistics>
      </Card>
    </>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
