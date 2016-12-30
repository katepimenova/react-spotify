import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import Tracks from './tracks';

let Albums = React.createClass({
  displayAlbum(album) {
    this.props.dispatch({
      type: 'FETCH_ALBUM',
      albumID: album.id
    });
  },
  hideAlbum() {
    this.props.dispatch({
      type: 'HIDE_ALBUM'
    });
  },
  renderAlbumPreview(album) {
    return (
      <div key={album.id} className='albumContainer col-xs-3'>
        <div className='album' onClick={_.partial(this.displayAlbum, album)}>
          <div className='imageContainer'>
            {album.images.length > 0 ?
              <img src={album.images[1].url}></img>
              :
              <img src='https://developer.spotify.com/wp-content/uploads/2014/06/spotify-design.png'></img>
            }
          </div>
          <h4>{album.name}</h4>
        </div>
      </div>
    );
  },
  renderAlbumDescription() {
    const album = this.props.album;
    return (
      <div>
        <div className='albumTitle row'>
          <div className='col-xs-8'>
            <h3>{album.name}</h3>
          </div>
          <div className='col-xs-4 text-right'>
            <button
              className='btn'
              onClick={this.hideAlbum}>
              Back to albums list
            </button>
          </div>
        </div>
        <div className='row'>
          <div className='imageContainer col-xs-3'>
            <img src={album.images[1].url} />
          </div>
          <div className='col-xs-9'>
            <div className='row'>
              <label className='col-xs-3'>Label: </label>
              <div className='col-xs-8'>{album.label || '-'}</div>
              <label className='col-xs-3'>Popularity: </label>
              <div className='col-xs-8'>{album.popularity || '-'}</div>
              <label className='col-xs-3'>Release date: </label>
              <div className='col-xs-8'>{album.release_date || '-'}</div>
              <label className='col-xs-3'>External Urls: </label>
              <div className='col-xs-8'>
                {_.map(album.external_urls, (url, name) => <a key={name} href={url} target='blank'>{name}</a>)}
              </div>
            </div>
          </div>
        </div>
        <div className='tracks'>
          <Tracks />
        </div>
      </div>
    );
  },
  render() {
    const {albums, album, artistName} = this.props;
    if (_.isEmpty(albums.items)) return <h2>Nothing found</h2>;
    if (album.isShown) return this.renderAlbumDescription();
    return (
      <div className='albumsContainer'>
        {albums.isFetching ?
          <div className='loading'>
            Loading...
            <progress className='progress progress-striped progress-info' max='100'></progress>
          </div>
        :
          <div className='row'>
            <h2 className='col-xs-12'>{artistName} related albums:</h2>
            {_.map(albums.items, album => this.renderAlbumPreview(album))}
          </div>
        }
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    albums: state.albums,
    album: state.album
  };
}

export default connect(mapStateToProps)(Albums);
