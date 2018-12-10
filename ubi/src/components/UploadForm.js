import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import axios from 'axios';

const options = [
  { key: 'm', text: 'Music', value: 'music' },
  { key: 'g', text: 'Gaming', value: 'gaming' },
  { key: 'd', text: 'Dancing', value: 'dancing' },
  { key: 'mo', text: 'Movies', value: 'movies' },
  { key: 'a', text: 'Anime', value: 'anime' },
  { key: 'o', text: 'Other', value: 'other' },
]

class UploadForm extends Component {
  state = {video:null, thumbnail:null}

  handleChange = (e, { value }) => this.setState({ value })

  videoChangedHandler = (event) => {
    const file = event.target.files[0]
    console.log(file)
    this.setState({video: file})
  }

  thumbnailChangedHandler = (event) => {
    const file = event.target.files[0]
    console.log(file)
    this.setState({thumbnail: file})
  }

  uploadHandler = () => {
    console.log(this.state.thumbnail)
    const formData = new FormData()
    formData.append('myFile', this.state.thumbnail, this.state.thumbnail.name)
    console.log(formData)
    axios.post('http://localhost:8000/api/recieve_thumbnail', formData)
  }

  render() {
    const { value } = this.state
    return (
      <Form onSubmit={this.uploadHandler}> 
        <Form.Group widths='equal'>
          <Form.Input fluid label='Video name' placeholder='Video name' />
          <Form.Select fluid label='Category' options={options} placeholder='Category' style={{top:"23px"}}  />
        </Form.Group>
        
        <Form.TextArea label='Description' placeholder='Tell us more about the video...' />
        
        {/* <Form.label>Upload Video</Form.label> */}
        <Form.Input label="Upload Video" type="file" class="inputfile" onChange={this.videoChangedHandler}/>
        
        <Form.Input fluid label='Or video link' placeholder='Video link' />

        <Form.Input label="Upload Thumbnail" type="file" class="inputfile" onChange={this.thumbnailChangedHandler}/>

        <Form.Input fluid label='Or thumbnail link' placeholder='thumbnail link'/>

        <Form.Button onClick={this.uploadhandler}>Submit</Form.Button>
      </Form>
    )
  }
}

export default UploadForm