import React, { Fragment,useState  } from 'react';
import JSZip from 'jszip';


import type { HomepageProps } from '../types/homePage';
import FileUploader from '@common/FileUploader';

const HomepageComponent: React.FC<HomepageProps> = () => {
    const [dicomFiles, setDicomFiles] = useState<ArrayBuffer[]>([]);
    const [error, setError] = useState<string | null>(null);
    console.log('d',dicomFiles);

    const handleZipUpload = async (file: File) => {


        try {
            const zip = new JSZip();
            const loadedZip = await zip.loadAsync(file);

            const extractedDicomFiles: ArrayBuffer[] = [];

            for (const filename of Object.keys(loadedZip.files)) {
                const zipEntry = loadedZip.files[filename];
                if (!zipEntry.dir && (filename.endsWith('.dcm') || filename.endsWith('.dicom'))) {
                    const arrayBuffer = await zipEntry.async('arraybuffer');
                    extractedDicomFiles.push(arrayBuffer);
                    // You could also parse the DICOM data here using dicomParser
                    // and then potentially load it into a viewer like Cornerstone.
                }
            }
            console.log('extractedDicomFiles',extractedDicomFiles);
            setDicomFiles(extractedDicomFiles);
        } catch (error) {
            console.error('Error processing ZIP file:', error);
        }

    };



  return (
    <Fragment>
      <div
        id={'section-uploader'}
        style={{
          width: '100%',
          height: '100%',
        }}
        className={''}
      >
          <FileUploader handleZipUpload={handleZipUpload} error={error} setError={setError}/>
      </div>
    </Fragment>
  );
};

export default HomepageComponent;
