import React, { Component } from 'react';
import QueuedSong from './QueuedSong'

export default class Queue extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Queue">
        {this.props.songs.map((song) => {
          return (
            <QueuedSong song={song} socket={this.props.socket}/>
          );
        })}
      </div>
    );
  }
}