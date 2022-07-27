import PropTypes from 'prop-types';
import { StyledButton } from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({
  onClickIncrementGood,
  onClickIncrementNeutral,
  onClickIncrementBad,
}) => {
  return (
    <div>
      <StyledButton type="button" onClick={onClickIncrementGood}>
        Good
      </StyledButton>
      <StyledButton type="button" onClick={onClickIncrementNeutral}>
        Neutral
      </StyledButton>
      <StyledButton type="button" onClick={onClickIncrementBad}>
        Bad
      </StyledButton>      
    </div>
  );
};

FeedbackOptions.propTypes = {
  onClickIncrementGood: PropTypes.func,
  onClickIncrementNeutral: PropTypes.func,
  onClickIncrementBad: PropTypes.func,
};
