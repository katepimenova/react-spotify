import _ from 'lodash';
import React from 'react';

let ArtistDetails = React.createClass({
  render() {
    const artist = this.props.artist;
    return (
      <div className='artist'>
        <div className='imageContainer'>
          {artist.images.length > 0 ?
            <img src={artist.images[1].url}></img>
            :
            <img src='https://developer.spotify.com/wp-content/uploads/2014/06/spotify-design.png'></img>
          }
        </div>
        <h3>{artist.name}</h3>
        <div className='info row'>
          {artist.genres.length > 0 && [
            <div className='col-xs-3' key='label'>
              <span>Genres:</span>
            </div>,
            <div className='col-xs-9' key='genres'>
              {_.map(artist.genres).join(', ')}
            </div>
          ]}
          <div className='col-xs-3'>
            <span>Followers:</span>
          </div>
          <div className='col-xs-9'>
            {artist.followers.total}
          </div>
        </div>
      </div>
    );
  }
});

export default ArtistDetails;
