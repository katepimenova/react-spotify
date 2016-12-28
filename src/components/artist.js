import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import ArtistDetails from './artistDetails';
import Albums from './albums';

let Artist = React.createClass({
  componentWillMount() {
    let artistID = this.props.artist.id || _.split(window.location.href, '/artist/')[1];
    if (_.isEmpty(this.props.artist)) {
      this.fetchArtistDetails(artistID);
    }
    this.props.dispatch({
      type: 'ARTIST_FETCH_ALBUMS',
      artistID: artistID
    });
  },
  fetchArtistDetails(artistID) {
    this.props.dispatch({
      type: 'ARTIST_FETCH_DETAILS',
      artistID: artistID
    });
  },
  render() {
    if (_.isEmpty(this.props.artist)) return <div>Atrist not found</div>;
    return (
      <div className='row'>
        <div className='col-xs-4'>
          <ArtistDetails artist={this.props.artist} />
        </div>
        <div className='col-xs-8'>
          <Albums albums={this.props.albums} />
        </div>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    artist: state.artist,
    albums: state.albums
  };
}

export default connect(mapStateToProps)(Artist);
