import axios from 'axios'

const maskAPI = 'https://facee-309423.wl.r.appspot.com'

export default function handleUpload(updateImage, updateMasks, setLoading) {
    function handleChange(e) {
        const imgFile = e[0]
        const imgBlob = URL.createObjectURL(imgFile)
        updateMasks([])
        updateImage(imgBlob)

        // After loading true until a response is back
        setLoading(true)

        // eslint-disable-next-line no-undef
        const data = new FormData()
        data.append('file', imgFile)

        // eslint-disable-next-line no-undef
        const queryParams = new URLSearchParams(window.location.search)
        const endpoint = queryParams.get('endpoint')

        axios
            .post(`${maskAPI}/${endpoint || 'detect'}`, data)
            .then((res) => {
                // then print response status
                console.log('Uploaded from Axios')
                console.log(res.data)
                updateMasks(res.data)
                setLoading(false)
            })
            .catch((err) => {
                console.log('rip')
                console.log(err)
                setLoading(false)
            })
    }
    return handleChange
}
