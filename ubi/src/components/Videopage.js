import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../node_modules/video-react/dist/video-react.css';
import '../css/videoplayer.css';
import { Player, ControlBar, ReplayControl,
  ForwardControl, CurrentTimeDisplay, BigPlayButton,
  TimeDivider, PlaybackRateMenuButton, VolumeMenuButton } from 'video-react';
import { Button, Comment, Form, Container, Header, Divider, Image, TextArea, Segment} from 'semantic-ui-react';
import { watchVideo } from "../actions/get";
import { connect } from 'react-redux';
import CommentPage from './CommentPage';

class Videopage extends Component {
  componentWillMount(){
    // console.log(this.props.match.params.vid)
    var vid = this.props.match.params.vid
    this.props.watchVideo(vid)
  }

  // componentDidMount(_prevProps, _prevState) {
  //   this.forceUpdate();
  // }

  //video and comment renderer
  render() {
    var vid = this.props.match.params.vid
    var video = this.props.watch
    var videoNotFound =  Object.keys(video).length === 0
    console.log(video)
    console.log(video.address)
    console.log(process.env.PUBLIC_URL+video.address)

    return (
      <div>

        {/* video header */}
        <div style={{"margin-bottom": "25px", "margin-top": "55px"}}>

          {videoNotFound && <Header as='h2' floated='left'>[Some Type] Video Title: with Its Meaningless Subtitle</Header>}
          {!videoNotFound && <Header as='h2' floated='left'>{"[" +  video.category.charAt(0).toUpperCase() +  video.category.slice(1) + "] " + video.name}</Header>}
          
          {videoNotFound && <div id="right-title" style={{position:'relative', top:'-9px'}}>
            <Header as='h3' floated='right' style={{position:'relative', top:'-1px'}}>
              <div style={{position:'relative', left:'4px', top:'-1px'}}>Patrick</div>
              <Button size="mini" floated='right'>follow</Button>
            </Header>

            <Image circular floated='right' src={process.env.PUBLIC_URL+'/avatar/small/patrick.png'} style={{ width:"3.5em"}}/>
          </div>}
          {!videoNotFound && <div id="right-title" style={{position:'relative', top:'-9px'}}>
            <Header as='h3' floated='right' style={{position:'relative', top:'-1px'}}>
              <div style={{position:'relative', left:'4px', top:'-1px'}}>{video.user.email}</div>
              <Button size="mini" floated='right'>follow</Button>
            </Header>

            <Image circular floated='right' src={process.env.PUBLIC_URL+'/avatar/small/patrick.png'} style={{ width:"3.5em"}}/>
          </div>}

        </div>

        <Divider clearing section/>
        
        {/* video player */}
        <div ref="video" className = "ui container" id="videoContainer">

          {videoNotFound && <Player ref="player" playsInline>
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
          </Player>}

          {!videoNotFound && <Player ref="player" playsInline src={process.env.PUBLIC_URL+video.address}>
            {/* <source src={process.env.PUBLIC_URL+video.address} /> causd video not rerender*/}
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
          </Player>}

        </div>

         <Divider section/>

        {/* description */}
        {videoNotFound && <Container fluid>
          <Header as='h2'>Description</Header>
          <p>
            Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf
            ancestors, which would have been pack hunters with complex body language. These
            sophisticated forms of social cognition and communication may account for their
            trainability, playfulness, and ability to fit into human households and social situations,
            and these attributes have given dogs a relationship with humans that has enabled them to
            become one of the most successful species on the planet today.
          </p>
          <p>
            The dogs' value to early human hunter-gatherers led to them quickly becoming ubiquitous
            across world cultures. Dogs perform many roles for people, such as hunting, herding, pulling
            loads, protection, assisting police and military, companionship, and, more recently, aiding
            handicapped individuals. This impact on human society has given them the nickname "man's
            best friend" in the Western world. In some cultures, however, dogs are also a source of
            meat.
          </p>
        </Container>}

        {!videoNotFound && <Container fluid>
          <Header as='h2'>Description</Header>
          <p>{video.description}</p>
        </Container>}
        
        <Divider section/>

        <CommentPage vid={vid} history={this.props.history}></CommentPage>

      </div>
    )
  } 
}

const mapStateToProps = State => ({
  watch: State.video.watch,
  wid: State.video.watch.vid
});

export default connect(mapStateToProps, { watchVideo })(Videopage);
