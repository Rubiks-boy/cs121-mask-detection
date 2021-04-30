import axios from 'axios'

const maskAPI = 'https://facee-309423.wl.r.appspot.com'

function uploadImage(formData, updateMasks, setLoading) {
    // eslint-disable-next-line no-undef
    const queryParams = new URLSearchParams(window.location.search)
    const endpoint = queryParams.get('endpoint')

    // After loading true until a response is back
    setLoading(true)

    axios
        .post(`${maskAPI}/${endpoint || 'detect'}`, formData)
        .then((res) => {
            // then print response status
            updateMasks(res.data)
            setLoading(false)
        })
        .catch((err) => {
            console.log(err)
            setLoading(false)
        })
}

export default function handleUpload(updateImage, updateMasks, setLoading) {
    function handleChange(e) {
        // typeof e is diffrent between click upload and drag-n-drop
        const imgFile = 'target' in e ? e.target.files[0] : e[0]
        const imgBlob = URL.createObjectURL(imgFile)
        updateMasks([])
        updateImage(imgBlob)

        // eslint-disable-next-line no-undef
        const data = new FormData()
        data.append('file', imgFile)

        uploadImage(data, updateMasks, setLoading)
    }
    return handleChange
}
