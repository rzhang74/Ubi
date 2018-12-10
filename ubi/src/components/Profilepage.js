import React, { Component } from 'react'
import { Grid, Menu, Segment, Image, Rail, Header, Sticky, Card, Icon} from 'semantic-ui-react'
import _ from 'lodash'
import { connect } from 'react-redux';
import UploadForm from './UploadForm';
import Followingpage from './Followingpage';
import Followerpage from './Followerpage';
import PersonalVideoPage from './PersonalVideoPage';
import CommunityPage from './CommunityPage';

const Placeholder = () => <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />

const src = process.env.PUBLIC_URL+'/video.jpg'

class Profilepage extends Component {
  state = { activeItem: 'Home' }
  // active item handler
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  // sticky to the top handler
  handleContextRef = contextRef => this.setState({ contextRef })

  routeTo(){
    window.open('http://www.google.com'); //This will open Google in a new 
  }


  //profile page renderer
  render() {
    const { activeItem } = this.state
    const { contextRef } = this.state

    console.log(this.props.uid)
    console.log(this.props.username)

    return (
      <Grid>
        <Grid.Column width={3}>
        </Grid.Column>
        <Grid.Column width={13}>
          <div ref={this.handleContextRef}>
            <Segment>
              
              {/* {!(activeItem === 'Videos' || ) && _.times(10, i => <Placeholder key={i} />)} */}
              
              { (activeItem === 'Home') && _.times(10, i => <Placeholder key={i} />)}

              { (activeItem === 'Community') && <CommunityPage></CommunityPage>}

              { (activeItem === 'Following') && <Followingpage></Followingpage>}

              { (activeItem === 'Followers') && <Followerpage></Followerpage>}

              { (activeItem === 'Upload Video') && <UploadForm></UploadForm>}
              
              { (activeItem === 'Videos') && <PersonalVideoPage uid={this.props.uid} history={this.props.history}></PersonalVideoPage>}
            </Segment>

            {/* left header */}
            <Rail style={{left:"-211px", top:"14px"}}>
              <Sticky context={contextRef} offset = {0}>
                <Menu vertical tabular>
                  <Menu.Item>
                    <p style={{ fontSize: '1.0em' }}>
                      <Image centered circular src={process.env.PUBLIC_URL+'/avatar/medium/b.png'} size="tiny"/>
                      <p style={{ "overflow-wrap": "break-word", "width": "100%", "text-align": "center"}}><b>{this.props.username}</b></p> 
                    </p>
                  </Menu.Item>
                  <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
                  <Menu.Item name='Videos' active={activeItem === 'Videos'} onClick={this.handleItemClick} />
                  <Menu.Item name='Community' active={activeItem === 'Community'} onClick={this.handleItemClick}/>
                  <Menu.Item name='Following' active={activeItem === 'Following'} onClick={this.handleItemClick}/>
                  <Menu.Item name='Followers' active={activeItem === 'Followers'} onClick={this.handleItemClick}/>
                  <Menu.Item name='Upload Video' active={activeItem === 'Upload Video'} onClick={this.handleItemClick}/>
                </Menu>
              </Sticky>
            </Rail>
          </div>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = State => ({
  username: State.user.username,
  uid: State.user.uid
});

export default connect(mapStateToProps, {})(Profilepage);