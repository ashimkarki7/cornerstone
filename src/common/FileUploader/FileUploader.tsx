import React, {useRef} from 'react';
import type {ChangeEvent,DragEvent} from 'react';
import FileInputStyles from './FileUploader.module.scss';
import {FileUploadSvg} from '@assets/svg';
import type { UploaderProps } from '../types.ts';


const FileUploader: React.FC<UploaderProps> = (props) => {
  const { handleZipUpload, error,setError }= props;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dragOverRef = useRef(false);

  const handleFileSelect = (file: File) => {
    setError(null);
    if (file?.name?.endsWith(".zip")) {
      handleZipUpload(file);
    } else {
      setError("Please select a ZIP file containing DICOM files.")
      alert("Please select a ZIP file containing DICOM files.")
    }
  }

  const handleInputChange =(e:ChangeEvent<HTMLInputElement>)=>{
    setError(null);
    const file = e.target.files?.[0];
    if (file?.name?.endsWith(".zip")) {
      handleZipUpload(file);
    }else {
      setError("Please select a ZIP file containing DICOM files.")
      alert("Please select a ZIP file containing DICOM files.")
    }
  }


  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    dragOverRef.current = true
  }

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    dragOverRef.current = false
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    dragOverRef.current = false

    const file = e.dataTransfer.files?.[0]
    if (file) {
      handleFileSelect(file)
    }
  }


  return (
    <div className={FileInputStyles.DragAndDrop}
         onDragOver={handleDragOver}
         onDragLeave={handleDragLeave}
         onDrop={handleDrop}
         onClick={() => fileInputRef.current?.click()}
    >
      <input ref={fileInputRef} type="file" accept=".zip" onChange={handleInputChange} />
      <div className="upload-icon"><FileUploadSvg/></div>
      <h2 style={{ fontSize: "1.125rem", fontWeight: 600 }}>Upload DICOM ZIP</h2>
      <p>Drag and drop your ZIP file here, or click to select</p>
      <p style={{ fontSize: "0.75rem",  fontWeight: 500 }}>
       <strong>Note : Use Zip With . dcm Extension</strong>
      </p>


      {error && <div className={FileInputStyles.Error_message}>{error}</div>}

    </div>
  );
};

export default FileUploader;
