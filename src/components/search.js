import React from 'react';
import {connect} from 'react-redux';

let SearchInput = React.createClass({
  setInputFieldValue(e) {
    this.props.dispatch({
      type: 'SET_ARTIST_NAME',
      artistName: e.target.value
    });
  },
  searchItems(e) {
    if (!e.keyCode || e && e.keyCode == 13 && e.shiftKey == false) {
      this.props.dispatch({
        type: 'ARTISTS_FETCH_LIST',
        artistName: this.props.artistName,
        isFetching: true
      });
    }
  },
  render() {
    return (
      <div className='search-box row'>
        <div className='col-xs-6'>
          <h2>Looking for music? Type Artist name ...</h2>
        </div>
        <div className='col-xs-6'>
          <div className='input-group'>
            <input
              type='text'
              className='form-control'
              placeholder='eg. Taylor Swift'
              onChange={this.setInputFieldValue}
              onKeyDown={this.searchItems}
              defaultValue={this.props.artistName}
            />
            <span className='input-group-btn'>
              <button className='btn btn-secondary' type='button' onClick={this.searchItems}>Search</button>
            </span>
          </div>
        </div>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    artistName: state.search.artistName
  };
}

export default connect(mapStateToProps)(SearchInput);
