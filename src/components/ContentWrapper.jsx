import React from 'react';
import styled from 'styled-components';
import { Grid, GridColumn } from '@atlaskit/page';
import { akGridSizeUnitless } from '@atlaskit/util-shared-styles';

const Padding = styled.div`
  margin: ${akGridSizeUnitless * 4}px ${akGridSizeUnitless * 8}px;
  padding-bottom: ${akGridSizeUnitless * 3}px;
`;

export default ({ children }) => (
  <Grid>
    <GridColumn>
      <Padding>{children}</Padding>
    </GridColumn>
  </Grid>
)