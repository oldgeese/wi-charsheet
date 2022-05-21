import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Abilities as Data } from '@wi-charsheet/abilities';
import styled from '@emotion/styled';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export interface AbilitiesProps {
  abilities: Data
}

const StyledAbilities = styled('div')`
  position: relative;
`

const ComsumedExp = styled(Typography)`
  padding-left: 16px;
  text-decoration: underline;
` as typeof Typography

const Exp = styled('div')`
  position: absolute;
  top: 0px;
  left: 50%;
`

const FullCount = styled('div')`
  position: absolute;
  top: 60px;
  left: 50%;
`

const CapacityContainer = styled('div')`
  position: absolute;
  top: 0px;
  left: 80%;
  width: 200px;
  height: 200px;
  border: 2px solid black;
`

const CapacityBorder = styled('div')`
  width: 140px;
  height: 140px;
  border-top: 30px solid #F9F9F9;
  border-left: 30px solid #EEEEEE;
  border-bottom: 30px solid #333333;
  border-right: 30px solid #CCCCCC
`

const CapacityTopLabel = styled('div')`
  position: absolute;
  top: 2px;
  width: 100%;
  text-align: center;
`

const Capacity = styled('div')`
  border-bottom: 2px solid black;
  border-bottom-width: 90%;
  width: 100%;
  height: 80%;
`

const InitialCapacity = styled('div')`
  width: 100%;
  height: 20%;
`

export function Abilities(props: AbilitiesProps) {
  const p = props.abilities
  return (
    <StyledAbilities>
      <div>
        <Typography variant="h6" component="span">▽能力値</Typography>
        <ComsumedExp component="span">消費経験点:{p.comsumedExp.toString()}</ComsumedExp>
      </div>
      <Exp>
        <Box sx={{
          border: '1px solid black',
          padding: '10px',
        }}>
          保有経験点:{p.exp.toString()}
        </Box>
      </Exp>
      <FullCount>
        <Box sx={{
          border: '1px solid black',
          padding: '10px',
        }}>
          フルカウント:{p.fullCount.toString()}
        </Box>
      </FullCount>
      <CapacityContainer>
        <CapacityTopLabel>&lt;器&gt;</CapacityTopLabel>
        <CapacityBorder>
          <Capacity>{p.capacity.toString()}</Capacity>
          <InitialCapacity>初期値: {p.initialCapacity.toString()}点</InitialCapacity>
        </CapacityBorder>
      </CapacityContainer>
      <TableContainer>
        <Table aria-label="ability table">
          <TableHead>
            <TableRow>
              <TableCell>能力値</TableCell>
              <TableCell>筋力</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell variant="head">筋力: {p.strength}</TableCell>
              <TableCell >{p.strength + p.strength}%</TableCell>
              <TableCell variant="head">敏捷</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">敏捷: {p.dexterity}</TableCell>
              <TableCell >{p.dexterity + p.strength}%</TableCell>
              <TableCell >{p.dexterity + p.dexterity}%</TableCell>
              <TableCell variant="head">技術</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">技術: {p.technique}</TableCell>
              <TableCell >{p.technique + p.strength}%</TableCell>
              <TableCell >{p.technique + p.dexterity}%</TableCell>
              <TableCell >{p.technique + p.technique}%</TableCell>
              <TableCell variant="head">知力</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">知力: {p.intelligence}</TableCell>
              <TableCell >{p.intelligence + p.strength}%</TableCell>
              <TableCell >{p.intelligence + p.dexterity}%</TableCell>
              <TableCell >{p.intelligence + p.technique}%</TableCell>
              <TableCell >{p.intelligence + p.intelligence}%</TableCell>
              <TableCell variant="head">感性</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">感性: {p.sensibility}</TableCell>
              <TableCell >{p.sensibility + p.strength}%</TableCell>
              <TableCell >{p.sensibility + p.dexterity}%</TableCell>
              <TableCell >{p.sensibility + p.technique}%</TableCell>
              <TableCell >{p.sensibility + p.intelligence}%</TableCell>
              <TableCell >{p.sensibility + p.sensibility}%</TableCell>
              <TableCell variant="head">魅力</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">魅力: {p.charisma}</TableCell>
              <TableCell >{p.charisma + p.strength}%</TableCell>
              <TableCell >{p.charisma + p.dexterity}%</TableCell>
              <TableCell >{p.charisma + p.technique}%</TableCell>
              <TableCell >{p.charisma + p.intelligence}%</TableCell>
              <TableCell >{p.charisma + p.sensibility}%</TableCell>
              <TableCell >{p.charisma + p.charisma}%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </StyledAbilities>
  )
}

export default Abilities
