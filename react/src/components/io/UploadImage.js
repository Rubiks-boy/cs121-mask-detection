import axios from 'axios'

// const maskAPI = 'http://localhost:5000'
const maskAPI = 'https://hirsch-cs121-demo.herokuapp.com'

export default function handleUpload(updateImage, updateMasks) {
    function handleChange(e) {
        const objURL = URL.createObjectURL(e.target.files[0])
        // fileUpload(objURL);
        updateImage(objURL)
        console.log(objURL)

        const data = new FormData()
        data.append('file', e.target.files[0])

        const queryParams = new URLSearchParams(window.location.search)
        const endpoint = queryParams.get('endpoint')

        axios
            .post(`${maskAPI}/${endpoint || 'detect'}`, data)
            .then((res) => {
                // then print response status
                console.log('Uploaded from Axios')
                console.log(res.data)
                updateMasks(res.data)
            })
            .catch((err) => {
                console.log('rip')
                console.log(err)
            })
    }
    return handleChange
}
