import _ from 'lodash';
import React from 'react';

let Albums = React.createClass({
  renderAlbum(album) {
    return (
      <div key={album.id}>
        {album.name}
      </div>
    );
  },
  render() {
    const albums = this.props.albums;
    return (
      <div className='albumsContainer'>
        <div className='row'>
          {_.map(albums.items, album => this.renderAlbum(album))}
        </div>
      </div>
    );
  }
});

export default Albums;

