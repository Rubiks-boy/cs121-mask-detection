import mask from './mask-clipart.png';
import data from './data.json';
// import Box from './components/Box'
// import MaskResults from './components/MaskResults';
import Viewer from './components/Viewer';
import UploadImage from './upload/UploadImage';
import ImageUpload from './upload/ImagePreview';
import './App.css';
import Upload from './upload-two/Upload';

function App() {
  return (
    // <MaskResults image={mask} boxes={data} />
    // <Viewer image={mask} boxes={data} />
    // <UploadImage />
    // <ImageUpload />
    <Upload/>

  );
}

export default App;
