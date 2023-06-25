import styled from 'styled-components';

export const FrItem = styled.li`
display: flex;
width: 200px;
justify-content: flex-start;
align-items: center;
height: 50px;
border: 1px solid grey;
border-radius: 5px;
margin-bottom: 10px;
`;
export const Status = styled.span`
margin-left: 10px;
margin-right: 10px;
width: 15px;
height: 15px;
border-radius: 50%;
background-color: ${props => (props.online ? 'green' : 'red')};
`;
export const Avatar = styled.img`
width: 30px;
height: 30px;
margin-right: 10px;
`;
export const UserName = styled.span`
font-weight: bold;
font-size: 20px;
`;