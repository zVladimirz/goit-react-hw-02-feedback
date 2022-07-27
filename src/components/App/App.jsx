import { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './App.styled';
import { SectionWrapper } from 'components/SectionWrapper/SectionWrapper';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

export class App extends Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  // static defaultProps = {
  //   step: 1,
  //   initialValue: 0,
  // };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage() {
    return Math.round(this.state.good / (this.countTotalFeedback() / 100));
  }

  onClickIncrementGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  onClickIncrementNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  onClickIncrementBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Wrapper>
        <SectionWrapper title="Please leave feedback">
          <FeedbackOptions
            onClickIncrementGood={this.onClickIncrementGood}
            onClickIncrementNeutral={this.onClickIncrementNeutral}
            onClickIncrementBad={this.onClickIncrementBad}
          />
        </SectionWrapper>

        <SectionWrapper title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </SectionWrapper>
      </Wrapper>
    );
  }
}
