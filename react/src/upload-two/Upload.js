import React, { useState } from 'react';
import axios from 'axios';
import './Upload.css';


export default function Upload() {

    let [file, fileUpload] = useState(null);

    function handleChange(e) {
        const objURL = URL.createObjectURL(e.target.files[0]);
        fileUpload(objURL);
        console.log(objURL);

        const data = new FormData();
        data.append('file', e.target.files[0]);
        axios.post("http://172.26.72.28:5000/test", data, { // receive two parameter endpoint url ,form data 
            })
            .then(res => { // then print response status
                console.log('Uploaded from Axios');
                console.log(res.statusText)
      })
    }

    return (
        <div>
            <input type='file' onChange={handleChange}/>
            <img src={file}/>
        </div>
    );
}

// class Upload extends React.Component {
//     constructor(props){
//       super(props)
//       this.state = {
//         file: null
//       }    this.handleChange = this.handleChange.bind(this)
//     }  handleChange(event) {
//       this.setState({
//         file: URL.createObjectURL(event.target.files[0])
//       })
//     }  render() {
//       return (
//         <div>
//           <input type="file" onChange={this.handleChange}/>
//           <img src={this.state.file}/>
//         </div>
//       );
//     }
//   }
//   module.exports = Upload