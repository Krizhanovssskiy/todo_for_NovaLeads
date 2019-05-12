import React, { Component } from 'react';
import ContentSidePanel from './ContentSidePanel';
import SimpleTable from './TablWithTasks'
import { Divider } from '@material-ui/core';
import idGenerator from 'react-id-generator';

class App extends Component {

  state = {
    arrayObj: [],
    rightDrawer: false,
    anchorEl: null,
    selectedIndex: '',
  };

  handleClickListStatus = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  toggleClickListStatus = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuItemStatus = (status, inx) => {
    this.setState(({ arrayObj }) => ({
      arrayObj: [
        ...arrayObj.slice(0, inx),
        {
          ...arrayObj[inx],
          statusTask: status,
          ...arrayObj.slice(inx + 1)
        },
      ],
        anchorEl: null
      })
    )
  };

  handleCloseStatus = () => {
    this.setState({ anchorEl: null });
  };

  toggleBtnDelEdit = (inx) => {
    this.setState(({arrayObj}) => ({
      arrayObj: [
        ...arrayObj.slice(0, inx),
        {
          ...arrayObj[inx],
          editDeleteItem: !arrayObj[inx].editDeleteItem
        },
        ...arrayObj.slice(inx + 1)

      ]
    }))
  };

  deleteTask = (inx) => {
    this.setState(({arrayObj}) => ({
      arrayObj: [
        ...arrayObj.slice(0, inx),
        ...arrayObj.slice(inx + 1)
      ]
    }))
  };

  // ??????
  editTask = (inx) => {
    console.log(inx);
    this.toggleDrawer()
  };

  Submit =  (obj) => {
    this.setState(({ arrayObj }) => {
      return {
        arrayObj: [
          ...arrayObj,
          {
            ...obj,
            id: idGenerator(),
            editDeleteItem: false
          }
        ]
      }
    })
  };

  toggleDrawer = () => {
    this.setState(({rightDrawer}) => ({
        rightDrawer: !rightDrawer
      }
    ))
  };

  render() {
    const {
      arrayObj,
      rightDrawer,
      anchorEl,
      selectedIndex,
    } = this.state;
    console.log(this.state);
    return (
      <div>
        <h1>Список задач</h1>
        <Divider/>
        <ContentSidePanel
          rightDrawer={rightDrawer}
          toggleDrawer={this.toggleDrawer}
          onSave={this.Submit}
        />
        <SimpleTable
          handleClickListStatus={this.handleClickListStatus}
          handleMenuItemStatus={this.handleMenuItemStatus}
          handleCloseStatus={this.handleCloseStatus}
          editTask={this.editTask}
          deleteTask={this.deleteTask}
          toggleBtnDelEdit={this.toggleBtnDelEdit}
          selectedIndex={selectedIndex}
          anchorEl={anchorEl}
          arrayObj={arrayObj}
        />
      </div>
    );
  }
}

export default App;
