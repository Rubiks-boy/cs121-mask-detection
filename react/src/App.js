import React, { useState } from 'react'
import Viewer from './components/presentation/Viewer'
import './App.css'
import UploadIntro from './components/io/UploadIntro'
import Upload from './components/io/Upload'

function App() {
    const [image, updateImage] = useState(null)
    const [masks, updateMasks] = useState([])

    const introUpload = <UploadIntro updateImage={updateImage} updateMasks={updateMasks} />
    const hasUpload = (
        <>
            <Upload updateImage={updateImage} updateMasks={updateMasks} />
            <Viewer image={image} boxes={masks} />
        </>
    )

    return <>{image === null ? introUpload : hasUpload}</>
}

export default App
