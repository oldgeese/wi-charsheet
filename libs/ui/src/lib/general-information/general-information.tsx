import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { GeneralInformation as Data } from '@wi-charsheet/general-information'

export interface GeneralInformationProps {
  generalInformation: Data
}

const StyledGeneralInformation = styled('div')`
`

const PlName = styled(Typography)`
  border-bottom: 1px solid black;
  width: 100px;
` as typeof Typography

export function GeneralInformation(props: GeneralInformationProps) {
  const p = props.generalInformation
  return (
    <StyledGeneralInformation>
      <PlName>PL:{p.plName}</PlName>
      <div>名:{p.pcName}</div>
      <div>種族:{p.race}</div>
      <div>年齢:{p.age}</div>
      <div>性別:{p.gender}</div>
      <div>&lt;器&gt;の形状と由来:{p.shapeAndOriginOfCapacity}</div>
      <div>フェノメナでいる理由:{p.reason}</div>
      <div>外見の特徴など:{p.appearance}</div>
      <div>{p.keys.map((key) =>
        <div key={key.id}>
          <div>キー:{key.name}</div>
          <div>{key.used.toString()}</div>
        </div>
      )}</div>
    </StyledGeneralInformation>
  );
}

export default GeneralInformation;
