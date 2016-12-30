import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
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
    this.props.dispatch({
      type: 'HIDE_ALBUM'
    });
  },
  fetchArtistDetails(artistID) {
    this.props.dispatch({
      type: 'ARTIST_FETCH_DETAILS',
      artistID: artistID
    });
  },
  render() {
    const artist = this.props.artist;
    if (_.isEmpty(artist)) return <div>Atrist not found</div>;
    return (
      <div className='artistDetails row'>
        <div className='col-xs-3'>
          <Link to='/'>
            <button className='btn'>
              Search another artist
            </button>
          </Link>
          <ArtistDetails artist={artist} />
        </div>
        <div className='col-xs-9'>
          <Albums artistName={artist.name} />
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
