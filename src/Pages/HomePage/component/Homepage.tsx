import React, { Fragment,  } from 'react';


import type { HomepageProps } from '../types/homePage';
import FileUploader from '@common/FileUploader';

const HomepageComponent: React.FC<HomepageProps> = (props: any) => {
  const { getFile  } = props;
  console.log('home', getFile);


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
          <FileUploader/>
      </div>
    </Fragment>
  );
};

export default HomepageComponent;
