import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Stats = ({ title, stats }) => {
  return (
    <>
      <Statistics>
      {title && <StatsTitle>{title}</StatsTitle>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </StatsItem>
        ))}
      </StatsList>
      </Statistics>
    </>
  );
};

const Statistics = styled.section `
display: flex;
flex-direction: column;
margin-top: 30px;
align-items: center;
background-color: aqua;
width: 400px;
margin-left: auto;
margin-right: auto;
padding: 40px;
`

const StatsTitle = styled.h2 `
text-transform: uppercase;
padding: 25px;
background-color: white;
width: 100%;
text-align: center;
`

const StatsList = styled.ul `
display: flex;
width:100%;
justify-content: space-between;
`
const bgColor = Math.floor(Math.random() * 16777215).toString(16);

const StatsItem = styled.li `
display: flex;
flex-direction: column;
justify-content: space-between;
padding-top: 10px;
padding-bottom: 10px;
`




Stats.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  })),
};
