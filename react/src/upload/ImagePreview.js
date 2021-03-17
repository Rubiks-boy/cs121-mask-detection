import axios from 'axios';
import React, {Component} from 'react';

// https://codepen.io/hartzis/pen/VvNGZP
export default class ImagePreview extends Component {
    constructor(props) {
      super(props);
      this.state = {
        file: '',
        imagePreviewUrl: ''
      };
      this._handleImageChange = this._handleImageChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
    }
  
    _handleSubmit(e) {
        // Create an object of formData
        const formData = new FormData();
        const file = this.state.file;
            
        // Update the formData object
        formData.append('test', 'we are trying to post');
        formData.append('file', file.fileName);
        // Details of the uploaded file
        console.log("SENDING POST REQUEST");
        
        // Request made to the backend api
        // Send formData object
        // TODO: this should be a baseurl, that changes depending on if we're deployed or in dev mode
        // (also, should probably use an endpoint that isn't called "test" lol)
        axios.post("http://localhost:5000/test", formData)
            .then(response => console.log(response));
    }
  
    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }
  
    render() {
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} />);
      }
  
      return (
        <div>
          <form onSubmit={this._handleSubmit}>
            <input type="file" onChange={this._handleImageChange} />
            {/* <button type="submit" onClick={this._handleSubmit}>Upload Image</button> */}
            <button type="submit">Upload Image</button>
          </form>
          {$imagePreview}
        </div>
      )
    }
  
  }