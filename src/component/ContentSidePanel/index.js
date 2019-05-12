import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Drawer,
  Button,
  Divider,
} from '@material-ui/core';
import Header from './Header';
import ContentBlock from './ContentBlock';

const styles = {
  header: {
    position: 'fixed',
    width: '100%',
    height: 70,
    top: 0,
    right: 0,
    left: 0,
    textAlign: 'center',
  },

  sidePanel: {
    width: 500,
    height: '100%',
    paddingTop: 70,
    paddingBottom: 70,
    overflow: 'hidden',
  },


};

const ContentSidePanel = (props) => {

    const {
      classes,
      rightDrawer,
      onSave,
      toggleDrawer,
    } = props;

    const sideList = (
      <div className={classes.sidePanel}>

        <Header classes={classes} />

        <Divider />

        <ContentBlock
          onSave={onSave}
          onCancel={toggleDrawer}
        />

        <Divider />

      </div>
    );
    return (
      <div>
        <Button
          onClick={() => toggleDrawer()}
          color='primary'
          variant='contained'
        >
          Добавить задачу
        </Button>

        <Drawer
          anchor="right"
          open={rightDrawer}
          onClose={() => toggleDrawer()}
        >
          {sideList}
        </Drawer>
      </div>
    );
  };

ContentSidePanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentSidePanel);