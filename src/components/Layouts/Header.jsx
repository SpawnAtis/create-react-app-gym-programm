import React from 'react';
import styled from 'styled-components';
import { AppBar, Toolbar, Typography } from '@material-ui/core/';
import CreateDialog from '../Exercises/Dialogs/Create';

const Logo = styled(Typography)`
  flex: 1;
`;

const Header = ({ muscles, onExerciseCreate }) => (
  <AppBar position="static">
    <Toolbar>
      <Logo variant="headline" color="inherit">
        Exercise database
      </Logo>
      <CreateDialog muscles={muscles} onCreate={onExerciseCreate} />
    </Toolbar>
  </AppBar>
);

export default Header;
