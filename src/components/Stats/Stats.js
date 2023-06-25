import PropTypes from 'prop-types';
import { Statistics, StatsItem, StatsList, StatsTitle } from './Stats.styled';

export const Stats = ({ title, stats }) => {
  return (
    <>
      <Statistics>
        {title && <StatsTitle>{title}</StatsTitle>}
        <StatsList>
          {stats.map(({ id, label, percentage }) => {
            const bgColor = Math.floor(Math.random() * 16777215).toString(16);
            return (
              <StatsItem key={id} bgColor={bgColor}>
                <span className="label">{label}</span>
                <span className="percentage">{percentage}%</span>
              </StatsItem>
            );
          })}
        </StatsList>
      </Statistics>
    </>
  );
};

Stats.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
