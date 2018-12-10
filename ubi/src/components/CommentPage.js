import React, { Component } from 'react';
import { Button, Comment, Form, Container, Header, Divider, Image, TextArea, Segment} from 'semantic-ui-react';
import { getComment } from "../actions/get";
import api from "../api";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class CommentPage extends Component {
  token = "66a56026b02761c8da764d80e2001ec58e0dd32f";

  state = {
    data: {
      vid : this.props.vid,
      content : '',
      parent_cid : -1
    }
  }

  componentWillMount(){
    this.props.getComment(this.props.vid)
  }

  componentDidUpdate(prevProps) {
    if(this.props.comment.length != prevProps.comment.length)
    {
      this.forceUpdate();
    }
  } 

  handleClick = () => api.video.addComment(this.state.data, this.token)

  onChange = e => 
    this.setState({
      data: {...this.state.data, [e.target.name] : e.target.value}
    });

  

  render() {
    var comment = this.props.comment;
    var {data} = this.state;
    return (
      <div>
        {/* comment */}
        <Comment.Group style={{"max-width":"100%", "margin-bottom": "25px"}}>
          <Header as='h2' style={{"margin-bottom":"15px"}}>{comment.length} Comments</Header>

          <Form reply onSubmit={this.handleClick}>
            <Form.Group inline>
            <Image avatar src={process.env.PUBLIC_URL+'/avatar/medium/b.png'} style={{height:"3.5em", width:"3.5em", "margin-right": "3em"}}/>
            <TextArea placeholder='Tell us more' style={{height:"6em", width:"100%", "margin-right": "2em"}} name="content" value={data.content} onChange={this.onChange}/>
            <Button content='Add  Reply' primary style={{height:"5.8em", width:"5.8em"}} />
            </Form.Group>
          </Form>

          <Divider section/>

          {this.props.comment.map((c) => (
            <Comment>
              <Comment.Avatar as='a' src={process.env.PUBLIC_URL+'/avatar/medium/b.png'} />
              <Comment.Content>
                <Comment.Author as='a'>{c.user.email}</Comment.Author>
                <Comment.Metadata>
                  <span>Just now</span>
                </Comment.Metadata>
                <Comment.Text>{c.content}</Comment.Text>
                <Comment.Actions>
                  <a>Reply</a>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          ))}
          
      </Comment.Group>
      </div>
    )
  }
}

const mapStateToProps = State => ({
  comment: State.video.comment,
});

export default connect(mapStateToProps, { getComment })(CommentPage);