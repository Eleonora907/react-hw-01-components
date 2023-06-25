import styled from 'styled-components';

export const TransTable = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
`;

export const TransHeader = styled.td`
  text-align: center;
  width: 200px;
  height: 50px;
  background-color: lightblue;
  color: white;
`;

export const TransBody = styled.tbody`
  text-align: center;
`;

export const TransColumn = styled.td`
  width: 200px;
`;

export const TransItem = styled.tr`
  &:nth-child(even) {
    background-color: white;
  }

  &:nth-child(odd) {
    background-color: grey;
  }
`;
