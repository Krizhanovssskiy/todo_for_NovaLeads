import React, { Fragment } from 'react';
import { TextField, ListItemIcon } from "@material-ui/core";
import { ChromeReaderMode } from '@material-ui/icons';


export default function TaskDescription (props) {
  const {
    taskDescription,
    classes,
    handleChange } = props;
  return (
    <Fragment>
      <ListItemIcon>
        <ChromeReaderMode/>
      </ListItemIcon>
      <TextField
        id="outlined-textarea"
        label="Описание задачи"
        value={taskDescription}
        onChange={handleChange('taskDescription')}
        multiline
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
    </Fragment>

  )
}
