import React, { Component } from 'react';
import '../../node_modules/video-react/dist/video-react.css';
import '../css/videoplayer.css';
import { Player, ControlBar, ReplayControl,
  ForwardControl, CurrentTimeDisplay, BigPlayButton,
  TimeDivider, PlaybackRateMenuButton, VolumeMenuButton } from 'video-react';
import { Button, Comment, Form, Container, Header, Divider, Image, TextArea, Segment} from 'semantic-ui-react';

class Videopage extends Component {
  //video and comment renderer
  render() {
    return (
      <div>

        {/* video header */}
        <div style={{"margin-bottom": "25px", "margin-top": "55px"}}>
          <Header as='h2' floated='left'>[Some Type] Video Title: with Its Meaningless Subtitle</Header>
          
          <div id="right-title" style={{position:'relative', top:'-9px'}}>
            <Header as='h3' floated='right' style={{position:'relative', top:'-1px'}}>
              <div style={{position:'relative', left:'4px', top:'-1px'}}>Patrick</div>
              <Button size="mini" floated='right'>follow</Button>
            </Header>

            <Image circular floated='right' src={process.env.PUBLIC_URL+'/avatar/small/patrick.png'} style={{ width:"3.5em"}}/>
          </div>
        </div>

        <Divider clearing section/>
        
        {/* video player */}
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

         <Divider section/>

        {/* description */}
        <Container fluid>
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
        </Container>
        
        <Divider section/>

        {/* comment */}
        <Comment.Group style={{"max-width":"100%", "margin-bottom": "25px"}}>
          <Header as='h2' style={{"margin-bottom":"15px"}}>3 Comments</Header>
          <Form reply>
            <Form.Group inline>
            <Image avatar src={process.env.PUBLIC_URL+'/avatar/medium/b.png'} style={{height:"3.5em", width:"3.5em", "margin-right": "3em"}}/>
            <TextArea placeholder='Tell us more' style={{height:"6em", width:"100%", "margin-right": "2em"}}/>
            <Button content='Add  Reply' primary style={{height:"5.8em", width:"5.8em"}} />
            </Form.Group>
          </Form>

          <Divider section/>

          <Comment>
            <Comment.Avatar src= {process.env.PUBLIC_URL+'/avatar/small/elliot.jpg'}/>
            <Comment.Content>
              <Comment.Author as='a'>Matt</Comment.Author>
              <Comment.Metadata>
                <div>yesterday</div>
              </Comment.Metadata>
              <Comment.Text>How artistic!</Comment.Text>
              <Comment.Actions>
                <Comment.Action as='a'>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>

            <Comment.Group>
              <Comment>
                <Comment.Avatar as='a' src={process.env.PUBLIC_URL+'avatar/small/stevie.jpg'} />
                <Comment.Content>
                  <Comment.Author as='a'>Jenny Hess</Comment.Author>
                  <Comment.Metadata>
                    <span>Just now</span>
                  </Comment.Metadata>
                  <Comment.Text>Elliot you are always so right :)</Comment.Text>
                  <Comment.Actions>
                    <a>Reply</a>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
            </Comment.Group>
          </Comment>

          <Comment>
            <Comment.Avatar as='a' src={process.env.PUBLIC_URL+'avatar/small/stevie.jpg'} />
            <Comment.Content>
              <Comment.Author as='a'>Jenny Hess</Comment.Author>
              <Comment.Metadata>
                <span>Just now</span>
              </Comment.Metadata>
              <Comment.Text>Lol I am joking actually :)</Comment.Text>
              <Comment.Actions>
                <a>Reply</a>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
      </Comment.Group>
      </div>
    )
  }
}

export default Videopage;
