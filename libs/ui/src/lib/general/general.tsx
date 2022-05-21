import styled from 'styled-components';

/* eslint-disable-next-line */
export interface GeneralProps {}

const StyledGeneral = styled.div`
  color: pink;
`;

export function General(props: GeneralProps) {
  return (
    <StyledGeneral>
      <h1>Welcome to General!</h1>
    </StyledGeneral>
  );
}

export default General;
