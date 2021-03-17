// import React, { useState } from 'react'
import React from 'react'
import axios from 'axios'
import './Upload.css'

// const maskAPI = 'http://localhost:5000'
const maskAPI = 'https://hirsch-cs121-demo.herokuapp.com'

export default function Upload(props) {
    // let [file, fileUpload] = useState(null);

    function handleChange(e) {
        const objURL = URL.createObjectURL(e.target.files[0])
        // fileUpload(objURL);
        props.updateImage(objURL)
        console.log(objURL)

        const data = new FormData()
        data.append('file', e.target.files[0])

        const queryParams = new URLSearchParams(window.location.search)
        const endpoint = queryParams.get('endpoint')

        axios
            .post(`${maskAPI}/${endpoint || 'detect'}`)
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
