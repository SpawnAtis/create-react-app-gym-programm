import React, { Fragment } from 'react';
import styled from 'styled-components';
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';

const CustomPaper = styled(Paper)`
  padding: 20px;
  margin: 10px 0;
  height: 500px;
  overflow-y: auto;
`;

const CustomTypography = styled(Typography)`
  text-transform: capitalize;
`;

const DescriptionHeadline = styled(Typography)`
  && {
    margin-top: 20px;
  }
`;

const Exercises = ({
  exercises,
  category,
  onSelect,
  exercise: {
    id,
    title = 'Welcome',
    description = 'Please, select an exercises from the list on the left'
  }
}) => (
  <Grid container spacing={16}>
    <Grid item sm>
      <CustomPaper>
        {exercises.map(
          ([group, exercises]) =>
            category === 'all' || category === group ? (
              <Fragment key={group}>
                <CustomTypography variant="headline">{group}</CustomTypography>
                <List component="ul">
                  {exercises.map(({ title, id }) => (
                    <ListItem key={id} button onClick={() => onSelect(id)}>
                      <ListItemText primary={title} />
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null
        )}
      </CustomPaper>
    </Grid>
    <Grid item sm>
      <CustomPaper>
        <Typography variant="display1">{title}</Typography>
        <DescriptionHeadline variant="subheading">
          {description}
        </DescriptionHeadline>
      </CustomPaper>
    </Grid>
  </Grid>
);

export default Exercises;
