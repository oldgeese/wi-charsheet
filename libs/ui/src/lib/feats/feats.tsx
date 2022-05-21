import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FeatsProps {}

const StyledFeats = styled.div`
  color: pink;
`;

export function Feats(props: FeatsProps) {
  return (
    <StyledFeats>
      <h1>Welcome to Feats!</h1>
    </StyledFeats>
  );
}

export default Feats;
