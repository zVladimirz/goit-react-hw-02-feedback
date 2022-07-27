import PropTypes from 'prop-types';
import { TitleSectionWrapper } from './SectionWrapper.styled';

export const SectionWrapper = ({ title, children }) => {
  return (
    <section title={title}>
      <TitleSectionWrapper>{title}</TitleSectionWrapper>
      {children}
    </section>
  );
};
SectionWrapper.propTypes = {
  title: PropTypes.string,
};
