import styled from '@emotion/styled';
import { Character } from '@wi-charsheet/character'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

export interface DashboardProps {
  characters: Character[]
}

const StyledDashboard = styled('div')``

export function Dashboard(props: DashboardProps) {
  const {characters} = props
  return (
    <StyledDashboard>
      <Grid container item justifyContent="center">
        <Typography variant="h4" align="center" color="textPrimary">
          Wishful Instruments キャラクターデータベース
        </Typography>
        <Grid container item justifyContent="center">
          <Button variant="contained" href="/newchar">新規作成</Button>
        </Grid>
      </Grid>
      <List>
        {characters.map((c) =>
          <ListItem
            key={c.id}
            secondaryAction={
            <Button variant="contained" href={`/editchar/${c.id}`}>編集</Button>
          }
          >
            <ListItemButton component="a" href={`/viewchar/${c.id}`}>
              <ListItemAvatar>
                <Avatar src={c.generalInformation.appearance} />
              </ListItemAvatar>
              <ListItemText primary={c.generalInformation.pcName} secondary={`PL名:${c.generalInformation.plName}, 種族:${c.generalInformation.race}`} />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </StyledDashboard>
  );
}

export default Dashboard;
