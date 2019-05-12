import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@material-ui/core';
import { DeleteSweep, Create } from '@material-ui/icons';
import SimpleListMenu from './ChangeStatusTask'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  btn: {
    padding: '5px',
  },
});


class SimpleTable extends Component {

  render() {
    const {
      classes,
      arrayObj,
      selectedIndex,
      anchorEl,
      toggleBtnDelEdit,
      deleteTask,
      editTask,
      handleClickListStatus,
      handleMenuItemStatus,
      handleCloseStatus,
    } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>id задачи</TableCell>
              <TableCell align="right">Статус</TableCell>
              <TableCell align="right">Название задачи</TableCell>
              <TableCell align="right">Описание задачи </TableCell>
              <TableCell align="right">Дата выполнения</TableCell>
              <TableCell align="right">Важность</TableCell>
              <TableCell align="right">Тег</TableCell>
              <TableCell align="right">Действие</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {arrayObj.map((item, inx) => (
              <TableRow
                key={item.id}
                onMouseEnter={() => toggleBtnDelEdit(inx)}
                onMouseLeave={() => toggleBtnDelEdit(inx)}
              >
                <TableCell
                  component="th"
                  scope="row"
                >
                  {item.id}
                </TableCell>
                <TableCell
                  align="right"
                >
                  <SimpleListMenu
                    inxTaskItem={inx}
                    statusTask={item.statusTask}
                    selectedIndex={selectedIndex}
                    anchorEl={anchorEl}
                    toggleBtnDelEdit={toggleBtnDelEdit}
                    handleClickListStatus={handleClickListStatus}
                    handleMenuItemStatus={handleMenuItemStatus}
                    handleCloseStatus={handleCloseStatus}
                  />
                </TableCell>
                <TableCell
                  align="right"
                >
                  {item.nameTask}
                </TableCell>
                <TableCell
                  align="right"
                >
                  {item.taskDescription}
                </TableCell>
                <TableCell
                  align="right"
                >
                  {item.dateTask}
                </TableCell>
                <TableCell
                  align="right"
                >
                  {item.taskImportance}
                </TableCell>
                <TableCell
                  align="right"
                >
                  {item.selectedOption}
                </TableCell>
                <TableCell
                  align="right"
                >
                  {
                    item.editDeleteItem
                      ?
                      <div>
                        <IconButton
                          onClick={() => deleteTask(inx)}
                          className={classes.btn}
                          aria-label="Delete"
                        >
                          <DeleteSweep />
                        </IconButton>
                        <IconButton
                          onClick={() => editTask(inx)}
                          className={classes.btn}
                          aria-label="Create"
                        >
                          <Create />
                        </IconButton>
                      </div>
                      :
                      ''
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);