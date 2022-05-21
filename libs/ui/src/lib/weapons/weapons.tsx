import styled from 'styled-components';

/* eslint-disable-next-line */
export interface WeaponsProps {}

const StyledWeapons = styled.div`
  color: pink;
`;

export function Weapons(props: WeaponsProps) {
  return (
    <StyledWeapons>
      <h1>Welcome to Weapons!</h1>
    </StyledWeapons>
  );
}

export default Weapons;
