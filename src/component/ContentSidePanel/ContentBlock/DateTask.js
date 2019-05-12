import React, { Fragment } from 'react';
import {
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  ListItemIcon, } from "@material-ui/core";
import { DateRange } from '@material-ui/icons';
import idGenerator from 'react-id-generator';

const style = {
  div: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}

export default function DateTask (props) {
  const {
    dateTask,
    classes,
    taskImportance,
    handleChange,
    importanceOfTheTasks } = props;
  return (
    <Fragment>
      <div className={classes.textField}>
        <div style={style.div}>
          <ListItemIcon>
            <DateRange />
          </ListItemIcon>
          <TextField
            id="date"
            label="Дата выполнения"
            type="date"
            value={dateTask}
            onChange={handleChange('dateTask')}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
            variant="outlined"
          />
        </div>
        {dateTask ?
          <FormControl
            component="fieldset"
            className={classes.radioForm}
          >
            <FormLabel
              component="legend"
            >
              Срочность задачи
            </FormLabel>
            <RadioGroup
              aria-label="ImportanceOfTheTask"
              name="importanceOfTheTask"
              className={classes.radioGroup}
              value={taskImportance}
              onChange={handleChange('taskImportance')}
            >
              {
                importanceOfTheTasks.map((item) => (
                  <FormControlLabel
                    key={idGenerator('taskImportance')}
                    className={classes.radioBtn}
                    value={item}
                    control={<Radio />}
                    label={item}
                  />
                ))
              }
            </RadioGroup>
          </FormControl>
          : ''}
      </div>

    </Fragment>
  )
}
