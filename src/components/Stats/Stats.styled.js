import styled from 'styled-components';

export const Statistics = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  align-items: center;
  background-color: aqua;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px;
`;

export const StatsTitle = styled.h2`
  text-transform: uppercase;
  padding: 25px;
  background-color: white;
  width: 100%;
  text-align: center;
`;

export const StatsList = styled.ul`
  display: flex;
  width: 100%;
`;


export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:100%;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #${props => props.bgColor};
`;
