import React, { Fragment,  } from 'react';


import type { HomepageProps } from '../types/homePage';

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
          <div id={'uploader'} >uplaod</div>
      </div>
    </Fragment>
  );
};

export default HomepageComponent;
