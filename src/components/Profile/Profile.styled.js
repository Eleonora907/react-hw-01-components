import styled from 'styled-components';

export const Card = styled.div`
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
`;

export const UserCard = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

export const Image = styled.img`
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const UserName = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 7px;
`;

export const UserTag = styled.p`
  color: grey;
  margin-bottom: 7px;
`;
export const UserLocation = styled.p`
  color: grey;
  margin-bottom: 7px;
`;
export const Statistics = styled.ul`
  display: flex;
  background-color: lightgray;
  width: 100%;
  justify-content: space-between;
`;
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  width: 100%;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const Label = styled.span`
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const Quantity = styled.span`
  font-weight: bold;
`;
