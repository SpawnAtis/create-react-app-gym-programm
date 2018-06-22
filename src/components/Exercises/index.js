import React, { Fragment } from 'react';
import styled from 'styled-components';
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import Form from './Form';

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
  muscles,
  exercises,
  category,
  editMode,
  onSelect,
  exercise,
  exercise: {
    id,
    title = 'Welcome!',
    description = 'Please select an exercise from the list on the left.'
  },
  onDelete,
  onSelectEdit,
  onEdit
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
                      <ListItemSecondaryAction>
                        <IconButton onClick={() => onSelectEdit(id)}>
                          <Edit />
                        </IconButton>
                        <IconButton onClick={() => onDelete(id)}>
                          <Delete />
                        </IconButton>
                      </ListItemSecondaryAction>
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
        {editMode ? (
          <Form exercise={exercise} muscles={muscles} onSubmit={onEdit} />
        ) : (
          <Fragment>
            <Typography variant="display1">{title}</Typography>
            <DescriptionHeadline variant="subheading">
              {description}
            </DescriptionHeadline>
          </Fragment>
        )}
      </CustomPaper>
    </Grid>
  </Grid>
);

export default Exercises;
