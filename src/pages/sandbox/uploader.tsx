import React from 'react';

import Layout from '@/components/layout/Layout';

import Uploader from '@/features/Uploader';

export default function uploader() {
  return (
    <Layout>
      <div className='container mx-auto pt-4'>
        <div>File uploader</div>
        <Uploader
          onSuccess={(ids) => {
            console.log('uploaded file ids ', ids);
          }}
        />
      </div>
    </Layout>
  );
}
