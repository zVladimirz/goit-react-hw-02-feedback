import { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './App.styled';
import SectionWrapper from 'components/SectionWrapper';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';

class App extends Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementFeedback = e => {
    this.setState(prevState => ({
      [e.target.innerText]: prevState[e.target.innerText] + 1,
    }));
  };
  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage() {
    return Math.round(this.state.good / (this.countTotalFeedback() / 100));
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Wrapper>
        <SectionWrapper title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.incrementFeedback}
          />
        </SectionWrapper>

        <SectionWrapper title="Statistics">
          {this.state.bad || this.state.good || this.state.neutral ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <p>There is no feedback</p>
          )}
        </SectionWrapper>
      </Wrapper>
    );
  }
}

export default App;
