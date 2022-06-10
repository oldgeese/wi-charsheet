import styled from '@emotion/styled';
import { ThemeProvider } from '@mui/material/styles';
import { Character, newCharacter } from '@wi-charsheet/character';
import { Dashboard } from '@wi-charsheet/ui';
import { useEffect, useState } from 'react';
import { theme } from './styles/theme';

const StyledApp = styled.div` `

export function App() {

  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    setCharacters([newCharacter()])
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <Dashboard characters={characters}/>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
