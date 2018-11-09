import React, { Component } from 'react';
import '../../node_modules/video-react/dist/video-react.css';
import '../css/videoplayer.css';
import { Player, ControlBar, ReplayControl,
  ForwardControl, CurrentTimeDisplay, BigPlayButton,
  TimeDivider, PlaybackRateMenuButton, VolumeMenuButton } from 'video-react';

class Videopage extends Component {
  render() {
    return (
      <div className = "ui container" id="videoContainer">
        <Player playsInline>
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
          <BigPlayButton position="center" />
          <ControlBar>
            <ReplayControl seconds={10} order={1.1} />
            <ForwardControl seconds={30} order={1.2} />
            <CurrentTimeDisplay order={4.1} />
            <TimeDivider order={4.2} />
            <VolumeMenuButton order={6.1}/>
            <PlaybackRateMenuButton
              rates={[5, 2, 1, 0.5, 0.1]}
              order={7.1}
            />
          </ControlBar>
          
        </Player>
      </div>
    )
  }
}

export default Videopage;
