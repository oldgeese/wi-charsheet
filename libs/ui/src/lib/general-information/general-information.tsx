import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { GeneralInformation as Data } from '@wi-charsheet/general-information'

export interface GeneralInformationProps {
  generalInformation: Data
}

const Title = styled(Typography)`
  border-bottom: 1px solid black;
  display: inline-block;
` as typeof Typography

const PlName = styled(Typography)`
  border-bottom: 1px solid black;
  width: 20rem;
  display: inline-block;
` as typeof Typography

const PcName = styled(Typography)`
  /* https://css-generators.com/custom-corners/ */
  position: relative;
  z-index: 0;
  min-height: 50px;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background-color: black;
    clip-path: polygon(0 0,calc(100% - 20.00px) 0,calc(100% - 10px) 10px,100% 20.00px,100% 100%,20.00px 100%,10px calc(100% - 10px),0 calc(100% - 20.00px),0 0,2px  2px ,2px calc(100% - 20.00px - 0.83px),calc(10px + 1.41px) calc(100% - 10px - 1.41px),calc(20.00px + 0.83px) calc(100% - 2px),calc(100% - 2px) calc(100% - 2px),calc(100% - 2px) calc(20.00px + 0.83px),calc(100% - 10px - 1.41px) calc(10px + 1.41px),calc(100% - 20.00px - 0.83px) 2px,2px 2px);
  }
`

const Appearance = styled('div')`
  border: 2px solid black;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
` as typeof Typography

const Key = styled('div')`
  border: 2px solid black;
  border-radius: 10px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export function GeneralInformation(props: GeneralInformationProps) {
  const p = props.generalInformation
  return (
    <Grid container item direction="column" spacing={1}>
      <Grid item container spacing={1}>
        <Grid item><Title>キャラクターシート</Title></Grid>
        <Grid item><PlName>PL:{p.plName}</PlName></Grid>
      </Grid>
      <Grid item container>
        <Grid item container direction="row" spacing={1}>
          <Grid item container direction="column" spacing={1} xs={8}>
            <Grid item><PcName><div style={{padding: '30px 20px'}}>名:{p.pcName}</div></PcName></Grid>
            <Grid item container>
              <TableContainer>
                <Table aria-label="general-information table">
                  <TableBody>
                    <TableRow>
                      <TableCell>種族:{p.race}</TableCell>
                      <TableCell>年齢:{p.age}</TableCell>
                      <TableCell>性別:{p.gender}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={3} sx={{height:'46px'}}>&lt;器&gt;の形状と由来:{p.shapeAndOriginOfCapacity}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={3} sx={{height:'46px'}}>フェノメナでいる理由:{p.reason}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Appearance><div style={{padding: '8px'}}>外見の特徴など:{p.appearance}</div></Appearance>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container spacing={1}>
        {p.keys.map((key) =>
          <Grid item xs={4}><Key key={key.id}>キー:{key.name}<Checkbox checked={key.used} sx={{}} disabled/></Key></Grid>
        )}
      </Grid>
    </Grid>
  );
}

export default GeneralInformation;
