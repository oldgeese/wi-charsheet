import styled from '@emotion/styled';
import { ThemeProvider } from '@mui/material/styles';
import { Character, newCharacter } from '@wi-charsheet/character';
import { Charsheet } from '@wi-charsheet/ui';
import { useEffect, useState } from 'react';
import { theme } from './styles/theme';

const StyledApp = styled.div` `

export function App() {

  const [character, setCharacter] = useState<Character>(newCharacter())

  useEffect(() => {
    setCharacter(newCharacter())
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <Charsheet character={character}/>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
