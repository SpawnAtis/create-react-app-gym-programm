import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { exercises, muscles } from '../store';

class App extends Component {
  constructor() {
    super();

    this.state = {
      exercises,
      category: 'all',
      exercise: {}
    };
  }

  grouppedExercisesByMuscles = () =>
    Object.entries(
      this.state.exercises.reduce((groupedExercises, exercise) => {
        const { muscles } = exercise;
        groupedExercises[muscles] = groupedExercises[muscles]
          ? [...groupedExercises[muscles], exercise]
          : [exercise];
        return groupedExercises;
      }, {})
    );

  handleCategorySelect = category => {
    this.setState({ category });
  };

  handleExerciseSelect = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }));
  };

  handleExerciseCreate = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [...exercises, exercise]
    }));
  };

  render() {
    const exercises = this.grouppedExercisesByMuscles();
    const { category, exercise } = this.state;
    return (
      <Fragment>
        <Header
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />
        <Exercises
          exercise={exercise}
          category={category}
          exercises={exercises}
          onSelect={this.handleExerciseSelect}
        />
        <Footer
          muscles={muscles}
          onSelect={this.handleCategorySelect}
          category={category}
        />
      </Fragment>
    );
  }
}

export default App;
