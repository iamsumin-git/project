export const FlatPolicy = () => {
  return <div>FlatPolicy</div>;
};

export default FlatPolicy;

// import { Button, Divider, IconButton } from '@mui/material';
// import Link from 'next/link';
// import { useEffect, useState } from 'react';
// import { FaRegBookmark } from 'react-icons/fa';
// import { FcLikePlaceholder } from 'react-icons/fc';
// import { RiShareForwardFill } from 'react-icons/ri';

// import { useFlatStore } from '@/store/flatStore';

// import { NavBar } from '@/features/layout/NavBar';
// import { ImageCard } from '@/features/my-flats/cards/ImageCard';
// import { AllAmenities } from '@/pageComponents/flats/AllAmenities';
// import { Costs } from '@/pageComponents/flats/Costs';
// import { GalleryModal } from '@/pageComponents/flats/GalleryModal';
// import { Policies } from '@/pageComponents/flats/Policies';

// export const DetailView = () => {
//   const { gallery, buildingAmenities } = useFlatStore();

//   const [bgImage, setBgImage] = useState('');

//   const [imgType, setImgType] = useState<
//     'room' | 'bathroom' | 'kitchen' | 'other' | ''
//   >('');

//   useEffect(() => {
//     const changeBackgroundImage = () => {
//       const randomIndex = Math.floor(Math.random() * gallery.length);
//       const randomImage = gallery[randomIndex].photos[0];
//       setBgImage(`${randomImage}`);
//     };

//     changeBackgroundImage();

//     const interval = setInterval(changeBackgroundImage, 7000);

//     return () => clearInterval(interval);
//   }, [gallery]);

//   return (
//     <div className='h-auto w-full'>
//       <div>
//         <NavBar />
//       </div>
//       <div className=' relative h-[86vh] w-full overflow-y-scroll  px-9'>
//         <div className=' flex   '>
//           <div className='min-w-[350px] max-w-[350px]'></div>
//           <div className=' flex-grow py-5'>
//             <h1 className=' text-primary-main text-3xl font-semibold'>
//               1Bhk/Duplex Flat for sale in Sukhedhara, Nepal
//             </h1>
//             <div className='flex flex-row-reverse'>
//               <IconButton>
//                 <FaRegBookmark className='  relative m-auto ' />
//               </IconButton>
//               <IconButton>
//                 <RiShareForwardFill />
//               </IconButton>
//               <IconButton>
//                 <FcLikePlaceholder />
//               </IconButton>
//             </div>
//           </div>
//         </div>
//         <div className='sticky top-0 z-10  flex bg-white pt-1'>
//           <div className='sticky top-0 min-w-[350px] max-w-[350px]'></div>
//           <div className='relative flex gap-3 py-1'>
//             <Link href='#gallery'>
//               {' '}
//               <div className=' bg-primary-main hover:bg-secondary-main cursor-pointer rounded-sm p-1 px-3 text-left text-white'>
//                 Gallery
//               </div>
//             </Link>
//             <Link href='#amenities'>
//               <div className=' bg-primary-main hover:bg-secondary-main cursor-pointer rounded-sm p-1 px-3 text-left text-white'>
//                 Amenities
//               </div>
//             </Link>
//             <Link href='#policies'>
//               {' '}
//               <div className=' bg-primary-main hover:bg-secondary-main cursor-pointer rounded-sm p-1 px-3 text-left text-white'>
//                 Policies
//               </div>
//             </Link>
//             <Link href='#costs'>
//               {' '}
//               <div className=' bg-primary-main hover:bg-secondary-main cursor-pointer rounded-sm p-1 px-3 text-left text-white'>
//                 Costs
//               </div>
//             </Link>
//           </div>
//         </div>
//         <div className='flex w-full '>
//           <div className='sticky top-0 z-50 min-w-[350px] max-w-[350px]'>
//             <div className='fixed top-[130px]  z-50 h-[70vh] w-[350px] p-5 '>
//               <div className='relative z-50 flex h-full w-full flex-col rounded-md bg-[#74f574] p-5'>
//                 <div className=' flex text-xl text-white'>
//                   <div className='flex-grow font-semibold'>$30,000</div>
//                   <div className=' rounded-[20px] border-[2px] bg-black px-4 py-1 text-center text-sm'>
//                     Rent
//                   </div>
//                 </div>
//                 <div className=' flex-grow'>
//                   <h2 className=' text-primary-main text-lg font-semibold'>
//                     Location Info:
//                   </h2>
//                   <Divider />
//                   <h3 className='text-lg font-medium text-blue-950'>
//                     Kathmandu, Nepal
//                   </h3>
//                   <h4 className='text-lg font-medium text-blue-950'>
//                     Kandevta Temple, House No 111
//                   </h4>

//                   <div className='flex flex-wrap'>
//                     <div className=' bg-primary-main rounded-[20px] border-[2px] px-4 py-1 text-center text-sm text-white'>
//                       3 Rooms
//                     </div>
//                     <div className=' bg-primary-main rounded-[20px] border-[2px] px-4 py-1 text-center text-sm text-white'>
//                       2 Kitchen
//                     </div>

//                     <div className=' bg-primary-main rounded-[20px] border-[2px] px-4 py-1 text-center text-sm text-white'>
//                       3 bathroom
//                     </div>

//                     <div className=' bg-primary-main rounded-[20px] border-[2px] px-4 py-1 text-center text-sm text-white'>
//                       Non-negiotable
//                     </div>
//                   </div>
//                 </div>
//                 <div>
//                   <Button variant='contained'>Request A Tour</Button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className='min-h-[1100px] flex-grow '>
//             {/* gallery part */}
//             <div className='relative h-[70vh] w-full ' id='gallery'>
//               <div className='relative mt-5 h-full w-full '>
//                 <ImageCard fileID={bgImage} />
//                 <div className='absolute bottom-0 right-0 border'>
//                   <GalleryModal src={bgImage} totalImgs={gallery.length} />
//                 </div>
//               </div>
//             </div>

//             <section className='h-auto w-full' id='amenities'>
//               <AllAmenities />
//             </section>
//             <section id='policies'>
//               <Policies flatPolicies={} />
//             </section>
//             <section id='costs'>
//               <Costs />
//             </section>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DetailView;
