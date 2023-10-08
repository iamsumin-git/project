import React, { useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import { uuid } from 'uuidv4';

// import { CONTENT_BUCKET, storage } from '@/lib/client';
import useFileUploader from './useFileUploader';
import { Viewer } from './Viewer';

interface IFileUploader {
  onSuccess: (keys: string[] | null) => void;
}

function Uploader({ onSuccess }: IFileUploader) {
  const [image, setImage] = useState<FileList | null | any>(null);

  //this needs to be shifted to the page where we want out Uploader
  const [myKeys, setMyKeys] = useState<string[]>([]);

  const handleMyKeys = (keys: string[]) => {
    setMyKeys(keys);
  };

  const { isLoading, upload, uploadError, uploadedFileIDs } = useFileUploader({
    onSuccess,
    mykeys: myKeys,
    setMyKeys: handleMyKeys,
  });

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const toUploadImages = e.target.files;
      // setImage(toUploadImage);
      setImage((prev) => [...[prev ? prev : []], ...toUploadImages]);

      const ff = Array.from(toUploadImages);
      upload(ff);
    }
  };

  const handleDragOver = (event: any) => {
    event.preventDefault();
  };

  const handleDrop = (event: any) => {
    event.preventDefault();
    setImage(event.dataTransfer.files[0]);
  };

  const newId = uuid();

  return (
    <div className='mt-5 w-full'>
      <label htmlFor={newId}>
        <div
          className='flex h-[130px] w-full flex-col justify-center divide-dotted rounded-lg border-[2px]  p-5 text-center align-middle opacity-80'
          onDrop={(e) => handleDrop(e)}
          onDragOver={(e) => handleDragOver(e)}
        >
          <div className=' border-primary-main h-full cursor-pointer rounded-lg border border-dashed p-5'>
            <p>
              <FiUpload />
            </p>
            <p className='text-sm text-gray-500'>
              Drag and Drop or
              <span className='cursor-pointer px-1 font-medium text-[#6941C6] '>
                Choose file
              </span>
              to Upload
            </p>
            <p className=' text-xs leading-[150%] text-gray-500'>
              PNG/JPEG/JPG
            </p>
          </div>
        </div>
      </label>
      <input
        type='file'
        id={newId}
        onChange={(e) => handleUpload(e)}
        className='hidden'
        multiple
      />
      <div className='flex flex-wrap '>
        {/* {keys &&
          keys?.map((keyy, index) => {
            // if (!key) return null;
            return (
              <div className='basis-[300px]' key={index}> */}
        {/* <UploadIndicator
                // keyy={keyy}
                // fileName={image[index].name} //this needs to be dynamic, image means images here
                // fileSize={image[index].size}
                // progress={progress.get(keyy)}
                // status={status.get(keyy)}
                /> */}
        {/* </div>
            );
          })} */}
      </div>
      {uploadedFileIDs && (
        <div className='my-5 mt-3 grid h-auto  w-full grid-cols-3  items-center gap-9'>
          {uploadedFileIDs.map((fileID) => {
            if (fileID) {
              // const file = storage.getFilePreview(CONTENT_BUCKET, fileID);
              return (
                <>
                  <Viewer fileID={fileID} />
                </>
              );
            }
          })}
        </div>
      )}
    </div>
  );
}

export default Uploader;
