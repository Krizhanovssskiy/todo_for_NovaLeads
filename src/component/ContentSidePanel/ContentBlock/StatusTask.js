import React, { Fragment } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  ListItemIcon,
  } from "@material-ui/core";
import { CheckCircle } from '@material-ui/icons';
import idGenerator from 'react-id-generator';

export default function StatusTask (props) {
  const {
    statuses,
    classes,
    statusTask,
    handleChange,  } = props;
  return (
    <Fragment>
      <ListItemIcon>
        <CheckCircle />
      </ListItemIcon>
      <FormControl
        variant="outlined"
        className={classes.selectFormControl}
      >
        <InputLabel
          htmlFor="outlined-status-simple"
        >
          Статус
        </InputLabel>
        <Select
          value={statusTask}
          onChange={handleChange('statusTask')}
          input={
            <OutlinedInput
              labelWidth={50}
              name="statusTask"
              id="outlined-status-simple"
            />
          }
        >
          {
            statuses.map((item) => (
              <MenuItem
                key={idGenerator('status')}
                value={item}
              >
                {item}
              </MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Fragment>
  )
}
