import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import SearchInput from './search';
import ArtistDetails from './artistDetails';

let Artists = React.createClass({
  showArtist(artist) {
    this.props.dispatch({
      type: 'ARTIST_DISPLAY_DETAILS',
      artist: artist
    });
  },
  renderArtistCard(artist) {
    return (
      <div className='artistContainer col-xs-3' key={artist.id}>
        <Link to={'artist/' + artist.id} onClick={_.partial(this.showArtist, artist)}>
          <ArtistDetails artist={artist} />
        </Link>
      </div>
    );
  },
  render() {
    let artists = this.props.artists;
    return (
      <div>
        <SearchInput />
        {artists.isFetching ?
          <div className='loading'>
            Loading...
            <progress className='progress progress-striped progress-info' max='100'></progress>
          </div>
        :
          <div className='artistsContainer row'>
            {artists.items.length === 0 ?
              <div className='nothingFound col-xs-12'>Nothing Found</div>
            :
              _.map(artists.items, artist => this.renderArtistCard(artist))
            }

          </div>
        }

      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    artists: state.artists
  };
}

export default connect(mapStateToProps)(Artists);
