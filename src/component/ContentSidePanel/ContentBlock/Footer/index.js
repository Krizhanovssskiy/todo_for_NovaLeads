import React from 'react';
import { Button } from "@material-ui/core";

export default function Footer (props) {
  const {
    classes,
    onSave,
    onCancel
  } = props;
  return(
    <footer className={classes.footer}>
      <Button
        onClick={onCancel}
        variant="outlined"
        color="primary"
        className={classes.button}
      >
        Отмена
      </Button>
      <Button
        onClick={(e) => onSave(e)}
        variant="outlined"
        color="secondary"
        className={classes.button}
      >
        Сохранить
      </Button>
    </footer>
  )
}