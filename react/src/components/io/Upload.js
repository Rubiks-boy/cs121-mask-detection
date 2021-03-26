import React from 'react'
// import axios from 'axios'
import handleUpload from './UploadImage'

// const maskAPI = 'http://localhost:5000'
// const maskAPI = 'https://hirsch-cs121-demo.herokuapp.com'

export default function Upload(props) {
    // function handleChange(e) {
    //     const objURL = URL.createObjectURL(e.target.files[0])
    //     // fileUpload(objURL);
    //     props.updateImage(objURL)
    //     console.log(objURL)

    //     const data = new FormData()
    //     data.append('file', e.target.files[0])

    //     const queryParams = new URLSearchParams(window.location.search)
    //     const endpoint = queryParams.get('endpoint')

    //     axios
    //         .post(`${maskAPI}/${endpoint || 'detect'}`)
    //         .then((res) => {
    //             // then print response status
    //             console.log('Uploaded from Axios')
    //             console.log(res.data)
    //             props.updateMasks(res.data)
    //         })
    //         .catch((err) => {
    //             console.log('rip')
    //             console.log(err)
    //         })
    // }

    const handleChange = handleUpload(props.updateImage, props.updateMasks)

    return (
        <div>
            <input type="file" onChange={handleChange} />
            {/* <img src={file}/> */}
        </div>
    )
}
