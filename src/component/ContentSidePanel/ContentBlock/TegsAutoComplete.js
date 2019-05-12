import React from 'react';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';

const classes = them => ({
  selectStyle: {
    width: '100%',
  }
});

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

class TegsAutoComplete extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        className={this.props.classes.selectStyle}
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        isMulti
        isSearchable
        placeholder='placeholder'
      />
    );
  }
}

export default withStyles(classes)(TegsAutoComplete);


