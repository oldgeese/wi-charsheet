import styled from 'styled-components';

import { GeneralInformation as Data } from '@wi-charsheet/general-information'

export interface GeneralInformationProps {
  generalInformation: Data
}

const StyledGeneralInformation = styled.div` `

export function GeneralInformation(props: GeneralInformationProps) {
  const p = props.generalInformation
  return (
    <StyledGeneralInformation>
      <div>{p.plName}</div>
      <div>{p.pcName}</div>
      <div>{p.race}</div>
      <div>{p.age.toString()}</div>
      <div>{p.gender}</div>
      <div>{p.shapeAndOriginOfCapacity}</div>
      <div>{p.reason}</div>
      <div>{p.appearance}</div>
      <div>{p.keys.map((key) =>
        <div>
          <div>{key.name}</div>
          <div>{key.used.toString()}</div>
        </div>
      )}</div>
    </StyledGeneralInformation>
  );
}

export default GeneralInformation;
