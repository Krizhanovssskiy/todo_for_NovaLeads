import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { dataInput } from "../dataInput";

const { statuses } = dataInput;
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleListMenu extends React.Component {

  render() {
    const {
      classes,
      anchorEl,
      statusTask,
      inxTaskItem,
      handleClickListStatus,
      handleMenuItemStatus,
      handleCloseStatus,
      toggleBtnDelEdit,
    } = this.props;

    return (
      <div className={classes.root}>
        <List component="nav">
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="lock-menu"
            aria-label="When device is locked"
            onClick={handleClickListStatus}
          >
            <ListItemText>
              {statusTask}
            </ListItemText>
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseStatus}
        >
          {statuses.map((option) => (
            <MenuItem
              key={option}
              onClick={() => handleMenuItemStatus(option, inxTaskItem)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

SimpleListMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleListMenu);