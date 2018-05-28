import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';
import { Add } from '@material-ui/icons';

const ExerciseFieldInput = styled(TextField)`
  width: 500px;
`;

const ExerciseFrom = styled(FormControl)`
  width: 500px;
`;

class CreateDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      exercise: {
        title: '',
        description: '',
        muscles: ''
      }
    };
  }

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  };

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      exercise: {
        ...this.state.exercise,
        [name]: value
      }
    });
  };

  handleSumbit = () => {
    const { exercise } = this.state;
    this.props.onCreate({
      ...exercise,
      id: exercise.title.toLocaleLowerCase().replace(/ /g, '-')
    });
    this.setState({
      exercise: {
        title: '',
        description: '',
        muscles: ''
      }
    });
  };

  render() {
    const {
      open,
      exercise: { title, description, muscles }
    } = this.state;
    const { muscles: categories } = this.props;

    return (
      <Fragment>
        <Button variant="fab" mini onClick={this.handleToggle}>
          <Add />
        </Button>
        <Dialog
          open={open}
          onClose={this.handleToggle}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create new exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please, fill out the form below
            </DialogContentText>
            <form action="">
              <ExerciseFieldInput
                label="Title"
                value={title}
                onChange={this.handleChange('title')}
                margin="normal"
              />
              <br />
              <ExerciseFrom margin="normal">
                <InputLabel htmlFor="muscles">Muscles</InputLabel>
                <Select value={muscles} onChange={this.handleChange('muscles')}>
                  {categories.map(category => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </ExerciseFrom>
              <br />
              <ExerciseFieldInput
                multiline
                rows="6"
                label="Description"
                value={description}
                onChange={this.handleChange('description')}
                margin="normal"
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button
              color="primary"
              variant="raised"
              onClick={this.handleSumbit}
            >
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

export default CreateDialog;
