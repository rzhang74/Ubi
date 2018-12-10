import React, { Component } from 'react';
import { Feed } from 'semantic-ui-react';
import { Button, Comment, Form, Container, Header, Divider, Image, TextArea, Segment} from 'semantic-ui-react';
import { getFeed } from "../actions/get";
import api from "../api";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CommunityPage extends Component {
  token = "66a56026b02761c8da764d80e2001ec58e0dd32f";

  state = {
    data: {
      message : '',
      imageAddr : '',
      videoAddr : ''
    }
  }

  handleClick = () => api.user.addFeed(this.state.data, this.token)

  onChange = e => 
    this.setState({
      data: {...this.state.data, [e.target.name] : e.target.value}
    });


  componentWillMount(){
    // console.log(this.props.uid)
    this.props.getFeed(this.token)
  }

  render() {
    var feed = this.props.feed;
    var {data} = this.state;

    return (
      <div>
        
          {feed.map((f) => ( 
            <Feed>
              <Feed.Event>
                <Feed.Label image={process.env.PUBLIC_URL+'/avatar/medium/b.png'} />
                <Feed.Content>
                  <Feed.Date>3 days ago</Feed.Date>
                  <Feed.Summary>
                    You shared a text momemt.
                  </Feed.Summary>
                  <Feed.Extra text>{f.message}</Feed.Extra>
                  {
                  <Feed.Extra images>
                    <a>
                      <img src='https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2014/13-explainerwha.jpg' style={{width:"300px"}}/>
                    </a>
                  </Feed.Extra>
                  }
                </Feed.Content>
              </Feed.Event>
            </Feed>
          ))}
       
          
        <Divider section/>
        <Form reply onSubmit={this.handleClick}>
          <Form.Group inline>
          <Image avatar src={process.env.PUBLIC_URL+'/avatar/medium/b.png'} style={{height:"3.5em", width:"3.5em", "margin-right": "3em"}}/>
          <TextArea placeholder='Tell us more' style={{height:"6em", width:"100%", "margin-right": "2em"}} name="message" value={data.message} onChange={this.onChange}/>
          <Button content='Add  Feed' primary style={{height:"5.8em", width:"5.8em"}} />
          </Form.Group>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = State => ({
  feed: State.user.feed,
  uid: State.user.uid
});

export default connect(mapStateToProps, { getFeed })(CommunityPage);
