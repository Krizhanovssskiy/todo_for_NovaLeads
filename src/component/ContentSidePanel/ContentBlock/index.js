import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  ListItem,
  List,
} from "@material-ui/core";

import NameTask from './NameTask';
import TaskDescription from './TaskDescription';
import DateTask from './DateTask';
import StatusTask from './StatusTask';
import TegsAutoComplete from './TegsAutoComplete';

import { dataInput }from '../../dataInput';
import Footer from "./Footer";

const { importanceOfTheTasks, statuses, tegs } = dataInput;

const styles = theme => ({

  containerForm: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '100%',
    height: '100%',


  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    width: '100%',
    height: 70,
    bottom: 0,
    right: 0,
    left: 0,
    textAlign: 'center',
  },

  textField: {
    width: '100%',
    margin: 0,
  },

  listStyle: {
    margin: 0,
    boxSizing: 'border-box',
    padding: '20px 30px 20px 30px',
    overflow: 'auto',
  },

  listItemStyle: {
    display: 'flex',
    justifyContent: 'center',
    padding: 0,
    marginBottom: 15,
  },

  radioForm: {
    marginTop: 20,
    textAlign: 'center',
  },

  radioGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  radioBtn: {
    width: '50%',
    margin: 0,
  },

  selectFormControl: {
    width: '100%',
  },

  backGroundNone: {
    backgroundColor: 'none',
  },

});

class ContentBlock extends Component {
  state = {
    nameTask: '',
    taskDescription: '',
    dateTask: '',
    taskImportance : '',
    statusTask: '',
    selectedOption: null,
  };

  saveObj = (e) => {
    e.preventDefault();
    this.props.onSave({ ...this.state });

    this.setState({
      nameTask: '',
      taskDescription: '',
      dateTask: '',
      taskImportance : '',
      statusTask: '',
      selectedOption: null,
    });
    this.props.onCancel();
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const {
      classes,
      onCancel,
    } = this.props;
    const {
      nameTask,
      taskDescription,
      dateTask,
      taskImportance,
      statusTask,
      selectedOption } = this.state;

    return (
      <form
        onSubmit={(e)=>this.saveObj(e)}
        className={classes.containerForm}
      >
        <List className={classes.listStyle}>
          <ListItem className={classes.listItemStyle}>
            <NameTask
              name={nameTask}
              handleChange={this.handleChange}
              classes={classes}
            />
          </ListItem>

          <ListItem className={classes.listItemStyle}>
            <TaskDescription
              taskDescription={taskDescription}
              handleChange={this.handleChange}
              classes={classes}
            />
          </ListItem>

          <ListItem className={classes.listItemStyle}>
            <DateTask
              importanceOfTheTasks={importanceOfTheTasks}
              dateTask={dateTask}
              taskImportance={taskImportance}
              handleChange={this.handleChange}
              classes={classes}
            />
          </ListItem>

          <ListItem className={classes.listItemStyle}>
            <StatusTask
              statuses={statuses}
              statusTask={statusTask}
              handleChange={this.handleChange}
              classes={classes}
            />
          </ListItem>

{/*//Доработать*/}
{/*          <ListItem className={classes.listItemStyle}>*/}
{/*            <TegsAutoComplete*/}
{/*              selectedOption={selectedOption}*/}
{/*              handleChange={this.handleChange}*/}
{/*            />*/}
{/*          </ListItem>*/}
        </List>
        <Footer
          onCancel={onCancel}
          onSave={this.saveObj}
          classes={classes}
        />

      </form>
    );
  }
}

ContentBlock.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentBlock);