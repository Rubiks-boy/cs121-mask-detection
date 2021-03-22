import React, { useState } from 'react'
import Viewer from './components/presentation/Viewer'
import './App.css'
import Upload from './components/io/Upload'

function App() {
    const [image, updateImage] = useState(null)
    const [masks, updateMasks] = useState([])

    return (
        <>
            <Upload updateImage={updateImage} updateMasks={updateMasks} />
            <Viewer image={image} boxes={masks} />
        </>
    )
}

export default App
