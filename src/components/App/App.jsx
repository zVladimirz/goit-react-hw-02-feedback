import { Component } from 'react';
import { Wrapper } from './App.styled';
import SectionWrapper from 'components/SectionWrapper';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Notification from 'components/Notification';

class App extends Component {
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
            options={Object.keys(this.state)}
            onLeaveFeedback={this.incrementFeedback}
          />
        </SectionWrapper>

        <SectionWrapper title="Statistics">
          {bad || good || neutral ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"/>
          )}
        </SectionWrapper>
      </Wrapper>
    );
  }
}

export default App;
