import styled from '@emotion/styled';
import { ThemeProvider } from '@mui/material/styles';
import { getAll, getById } from '@wi-charsheet/service';
import { Dashboard, EditChar, NewChar, ViewChar } from '@wi-charsheet/ui';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { theme } from './styles/theme';

const StyledApp = styled.div` `

const rootLoader = async() => {
  const all = await getAll()
  return { characters: all }
}

const childLoader = async({ params }: any) => {
  const character = await getById(params.id)
  return character
}

const router = createBrowserRouter([
  { path: '/', loader: rootLoader,  element: <Dashboard /> },
  { index: true, loader: rootLoader,  element: <Dashboard /> },
  { path: 'newchar', element: <NewChar /> },
  { path: 'viewchar/:id', loader: childLoader, element: <ViewChar /> },
  { path: 'editchar/:id', loader: childLoader, element: <EditChar /> },
])

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <RouterProvider router={router} />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
