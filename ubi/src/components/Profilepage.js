import React, { Component } from 'react'
import { Grid, Menu, Segment, Image, Rail, Header, Sticky } from 'semantic-ui-react'
import _ from 'lodash'
import { connect } from 'react-redux';

const Placeholder = () => <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />

class Profilepage extends Component {
  state = { activeItem: 'Home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const { activeItem } = this.state
    const { contextRef } = this.state

    return (
      <Grid style={{height: '200vh'}}>
        <Grid.Column width={3}>
        </Grid.Column>
        <Grid.Column width={13}>
          <div ref={this.handleContextRef}>
            <Segment>
              {_.times(10, i => <Placeholder key={i} />)}
            </Segment>

            <Rail style={{left:"-211px", top:"14px"}}>
            <Sticky context={contextRef} offset = {0}>
              <Menu vertical tabular>
                <Menu.Item>
                  {/* <p>
                  <img avatar src= {process.env.PUBLIC_URL+'/avatar/small/elliot.jpg'} />
                  <div style={{"overflow-wrap": "break-word", "width" : "100%"}}>rzhang74</div>
                  </p> */}
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
  username: State.user.username
});

export default connect(mapStateToProps, {})(Profilepage);