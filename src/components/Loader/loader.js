import React from 'react';
import { MutatingDots } from 'react-loader-spinner';

function Loader() {
  return (
    <MutatingDots
      height="100"
      width="100"
      color="#305ad9"
      secondaryColor="#d9cd30"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
      }}
      wrapperClass=""
      visible={true}
    />
  );
}

export default Loader;
