import type {ChangeEvent} from 'react';
import FileInputStyles from './FileUploader.module.scss';
import {FileUploadSvg} from '@assets/svg';


const FileUploader = () => {

  const handleInputChange =(e:ChangeEvent<HTMLInputElement>)=>{
    const file = e.target.files?.[0]
    console.log('file',file);
  }


  return (
    <div className={FileInputStyles.DragAndDrop}
    >
      <input  type="file" accept=".zip" onChange={handleInputChange} />
      <div className="upload-icon"><FileUploadSvg/></div>
      <h2 style={{ fontSize: "1.125rem", fontWeight: 600 }}>Upload DICOM ZIP</h2>
      <p>Drag and drop your ZIP file here, or click to select</p>
      <p style={{ fontSize: "0.75rem",  fontWeight: 500 }}>
       <strong>Note : Use Zip With . dcm Extension</strong>
      </p>

    </div>
  );
};

export default FileUploader;
