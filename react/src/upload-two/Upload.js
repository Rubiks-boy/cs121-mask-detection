// import React, { useState } from 'react'
import React from 'react'
import axios from 'axios'
import './Upload.css'

export default function Upload(props) {
    // let [file, fileUpload] = useState(null);

    function handleChange(e) {
        const objURL = URL.createObjectURL(e.target.files[0])
        // fileUpload(objURL);
        props.updateImage(objURL)
        console.log(objURL)

        const data = new FormData()
        data.append('file', e.target.files[0])

        // TODO: Fill in this URL automatically with env
        // vars, based on whether it's dev or prod
        axios
            .post('http://127.0.0.1:5000/test')
            .then((res) => {
                // then print response status
                console.log('Uploaded from Axios')
                console.log(res.data)
                props.updateMasks(res.data)
            })
            .catch((err) => {
                console.log('rip')
                console.log(err)
            })
    }

    return (
        <div>
            <input type="file" onChange={handleChange} />
            {/* <img src={file}/> */}
        </div>
    )
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
