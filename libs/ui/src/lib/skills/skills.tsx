import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SkillsProps {}

const StyledSkills = styled.div`
  color: pink;
`;

export function Skills(props: SkillsProps) {
  return (
    <StyledSkills>
      <h1>Welcome to Skills!</h1>
    </StyledSkills>
  );
}

export default Skills;
