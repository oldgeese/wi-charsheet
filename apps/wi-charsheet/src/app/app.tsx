import styled from 'styled-components';

import { Character, newCharacter } from '@wi-charsheet/character'
import { Charsheet } from '@wi-charsheet/ui'
import { useEffect, useState } from 'react';

const StyledApp = styled.div`
`;

export function App() {

  const [character, setCharacter] = useState<Character>(newCharacter())

  useEffect(() => {
    setCharacter(newCharacter())
  }, [])

  return (
    <StyledApp>
      <Charsheet character={character}/>
    </StyledApp>
  );
}

export default App;
