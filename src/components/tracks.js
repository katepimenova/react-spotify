import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import PlayButton from 'react-play-button';

let Tracks = React.createClass({
  getInitialState() {
    return {currentTrack: null};
  },
  playTrack(trackId) {
    this.setState({currentTrack: trackId});
  },
  stopTrack() {
    this.setState({currentTrack: null});
  },
  renderTrack(track) {
    if (!track.preview_url) return null;
    return (
      <div key={track.id} className='row'>
        <div className='col-xs-1'>
          <PlayButton
            audioId={track.id}
            url={track.preview_url}
            active={track.id === this.state.currentTrack}
            size={30}
            progressCircleWidth={5}
            progressCircleColor='#29A0C0'
            idleBackgroundColor='#191b1d'
            activeBackgroundColor='#000000'
            play={_.partial(this.playTrack, track.id)}
            stop={_.partial(this.stopTrack, track.id)}
          />
        </div>
        <div className='col-xs-11'>{track.name}</div>
      </div>
    );
  },
  render() {
    return (
      <div className='tracksContainer'>
        {_.map(this.props.album.tracks.items, track => this.renderTrack(track))}
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    album: state.album
  };
}

export default connect(mapStateToProps)(Tracks);
