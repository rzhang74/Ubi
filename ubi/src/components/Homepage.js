import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button, Comment, Form } from 'semantic-ui-react';

class Homepage extends Component {
  componentDidMount() {
    document.body.style.backgroundColor = "white";
  }

  render(){
    return (
      <div>
        <h1>Home Page</h1>
        <Link to="/video">video</Link>
        <br></br>
        <Link to="/profile">profile</Link>

        <br></br>
        <Comment.Group>
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

          <Form reply>
            <Form.TextArea />
            <Button content='Add Reply' labelPosition='left' icon='edit' primary />
          </Form>
        </Comment.Group>
      </div>
    );
  }
  
}

export default Homepage;