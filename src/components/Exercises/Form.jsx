import React, { Component } from 'react';
import styled from 'styled-components';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@material-ui/core';

const ExerciseFieldInput = styled(TextField)`
  width: 500px;
`;

const ExerciseForm = styled(FormControl)`
  width: 500px;
`;
class Form extends Component {
  constructor(props) {
    super(props);

    this.state = this.getInitState();
  }

  componentWillReceiveProps({ exercise }) {
    this.setState({
      ...exercise
    });
  }

  getInitState() {
    const { exercise } = this.props;

    return (
      exercise || {
        title: '',
        description: '',
        muscles: ''
      }
    );
  }

  handleChange = name => ({ target: { value } }) =>
    this.setState({
      [name]: value
    });

  handleSumbit = () => {
    // TODO: validate
    this.props.onSubmit({
      id: this.state.title.toLocaleLowerCase().replace(/ /g, '-'),
      ...this.state
    });

    this.setState(this.getInitState());
  };

  render() {
    const { title, description, muscles } = this.state;
    const { exercise, muscles: categories } = this.props;

    return (
      <form action="">
        <ExerciseFieldInput
          label="Title"
          value={title}
          onChange={this.handleChange('title')}
          margin="normal"
        />
        <br />
        <ExerciseForm margin="normal">
          <InputLabel htmlFor="muscles">Muscles</InputLabel>
          <Select value={muscles} onChange={this.handleChange('muscles')}>
            {categories.map(category => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </ExerciseForm>
        <br />
        <ExerciseFieldInput
          multiline
          rows="6"
          label="Description"
          value={description}
          onChange={this.handleChange('description')}
          margin="normal"
        />
        <br />
        <Button color="primary" variant="raised" onClick={this.handleSumbit}>
          {exercise ? 'Edit' : 'Create'}
        </Button>
      </form>
    );
  }
}

export default Form;
