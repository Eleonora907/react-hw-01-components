import { Stats } from 'components/Stats/Stats';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card>
      <UserCard>
        <Image src={avatar} alt={tag}/>
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
  );
};

const Card = styled.div `
background-color: lightgray;
display: flex;
flex-direction: column;
width: 400px;
margin: 0 auto;
padding-top: 30px;
padding-left: 40px;
padding-right: 40px;
padding-bottom: 50px;
border: 1px solid grey;
border-radius: 5%;
`

const UserCard = styled.div`
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 30px;

`

const Image = styled.img `
border-radius: 50%;
margin-bottom: 20px;
`

const UserName = styled.p `
font-size: 20px;
font-weight: bold;
margin-bottom: 7px;
`

const UserTag = styled.p `
color: grey;
margin-bottom: 7px;
`
const UserLocation = styled.p `
color: grey;
margin-bottom: 7px;
`
const Statistics = styled.ul `
display: flex;
background-color: lightgray;
width: 100%;
justify-content: space-between;
`
const StatItem = styled.li`
display: flex;
flex-direction: column;
border: 1px solid grey;
width: 100%;
align-items: center;
padding-top: 5px;
padding-bottom: 5px;
`

const Label = styled.span`
  &::first-letter {
    text-transform: uppercase;
  }
`;

const Quantity = styled.span `
font-weight: bold;
`


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
