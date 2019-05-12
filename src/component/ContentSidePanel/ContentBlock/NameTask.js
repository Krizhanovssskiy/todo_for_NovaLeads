import React, {Fragment} from 'react';
import { TextField, ListItemIcon } from "@material-ui/core";
import { Input } from '@material-ui/icons';

export default function NameTask (props) {
  const {
    name,
    classes,
    handleChange } = props;

  return (
    <Fragment>
      <ListItemIcon>
        <Input />
      </ListItemIcon>
      <TextField
        id="outlined-with-placeholder"
        label="Название задачи"
        value={name}
        onChange={handleChange('nameTask')}
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
    </Fragment>
  )
}
