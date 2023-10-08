import { Button, Dialog, Divider } from '@mui/material';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Slider from '@mui/material/Slider';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

import Modal from '@/components/Modal';

import useListingsStore from '@/store/useListingsStore';

interface Iprops {
  isOpen: boolean;
  onClose: () => void;
}

// const amenitiesOptions = [
//   {
//     label: 'WIFI',
//     value: 'WIFI',
//   },
//   {
//     label: 'TV',
//     value: 'TV',
//   },
//   {
//     label: 'AC',
//     value: 'AC',
//   },
//   {
//     label: 'KITCHEN',
//     value: 'KITCHEN',
//   },
//   {
//     label: 'PARKING',
//     value: 'PARKING',
//   },
//   {
//     label: 'ELEVATOR',
//     value: 'ELEVATOR',
//   },
//   {
//     label: 'BUSINESS CENTER',
//     value: 'BUSINESS CENTER',
//   },
//   {
//     label: 'PLAYGROUND',
//     value: 'PLAYGROUND',
//   },
//   {
//     label: 'MOVIE THEATRE',
//     value: 'MOVIE THEATRE',
//   },
//   {
//     label: 'PARTY ROOM',
//     value: 'PARTY ROOM',
//   },
// ];

const bedroomOptions = [
  {
    label: '1',
    value: 1,
  },
  {
    label: '2',
    value: 2,
  },
  {
    label: '3',
    value: 3,
  },
  {
    label: '4',
    value: 4,
  },
  {
    label: '5',
    value: 5,
  },
  {
    label: '6',
    value: 6,
  },
  {
    label: '7',
    value: 7,
  },
  {
    label: '8',
    value: 8,
  },
];

const FlatTypeOptions = [
  {
    label: 'Apartment',
    value: 'apartment',
  },
  {
    label: 'House',
    value: 'house',
  },
  {
    label: 'Villa',
    value: 'villa',
  },
  {
    label: 'Penthouse',
    value: 'penthouse',
  },
];

const FilterModal = (props: Iprops) => {
  const {
    minPrice,
    maxPrice,
    bathrooms,
    bedrooms,
    kitchen,
    query,
    purpose,
    setPurpose,
    setBathrooms,
    setBedrooms,
    setKitchen,
    setMinPrice,
    setMaxPrice,
    setExtraFiilterActive,
  } = useListingsStore();
  // const [flatType, setFlatType] = useState('');

  const [checked, setChecked] = useState(true);

  const { isOpen, onClose } = props;

  const handleClear = () => {
    setMinPrice(0);
    setMaxPrice(0);
    setBathrooms(0);
    setBedrooms(0);
    setKitchen(0);

    // setFlatType('');
    setExtraFiilterActive(false);
  };

  const router = useRouter();

  const handleApply = () => {
    router.push(
      `/?query=${query}&min=${minPrice}&max=${maxPrice}&purpose=${purpose}&bedRoom=${bedrooms}&bathRoom=${bathrooms}&kitchen=${kitchen}`
    );
    setExtraFiilterActive(true);
    onClose();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className='rounded-xl p-2'
      fullWidth
      maxWidth='md'
    >
      <div className='p-9'>
        <div className=''>
          <IconButton onClick={onClose} className='absolute left-1 top-1'>
            <IoCloseOutline className='text-[25px] ' />
          </IconButton>
          <h1 className='text-primary-main text-center text-base font-bold'>
            Filter
          </h1>
        </div>
        <Divider className='mt-4' />
        <div className='mt-2 flex flex-col gap-4 '>
          <div className='flex flex-col gap-2'>
            <h2 className='text-primary-main text-sm font-medium'>
              Price(USD)
            </h2>
            <div className='flex gap-5'>
              <span
                className={` px-3 py-1 text-white ${
                  purpose == 'sell' ? 'bg-primary-main' : 'bg-secondary-main'
                } cursor-pointer rounded-3xl`}
                onClick={() => setPurpose('sell')}
              >
                Buy
              </span>

              <span
                className={` px-3 py-1 text-white ${
                  purpose == 'rent' ? 'bg-primary-main' : 'bg-secondary-main'
                } cursor-pointer rounded-3xl`}
                onClick={() => setPurpose('rent')}
              >
                Rent
              </span>
            </div>
            <div>
              <span className='text-primary-main  text-sm font-medium'>
                Min Price
              </span>
            </div>
            <Slider
              min={1000}
              max={100000}
              defaultValue={Number(router.query.m)}
              onChange={(e, value) => setMinPrice(value as number)}
              value={minPrice}
              valueLabelDisplay='auto'
              aria-label='min price'
            />{' '}
            <span className='text-primary-main  text-sm font-medium'>
              Max Price
            </span>
            <Slider
              min={1000}
              max={1000000}
              onChange={(e, value) => setMaxPrice(value as number)}
              value={maxPrice}
              valueLabelDisplay='on'
            />{' '}
            <div className='flex flex-wrap gap-2'>
              <input
                placeholder='Min'
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className='border-primary-main rounded-md border-2 p-2'
              />
              <input
                type='text'
                placeholder='Max'
                className='border-primary-main rounded-md border-2 p-2'
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
            </div>
            <Divider className='mt-4' />
            <div className=' gap-2'>
              <h2 className='text-primary-main text-sm font-normal'>
                Bedrooms
              </h2>
              <div className='mt-2'>
                {bedroomOptions.map((item, index) => (
                  <Chip
                    onClick={() => setBedrooms(item.value)}
                    key={index}
                    label={item.label}
                    variant='outlined'
                    className={`mx-2 px-2 py-1 ${
                      bedrooms === item.value
                        ? 'bg-primary-main text-white'
                        : 'text-primary-main bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>
            <Divider className='mt-4' />
            <div className=' gap-2'>
              <h2 className='text-primary-main text-sm font-normal'>
                Bathrooms
              </h2>
              <div className='mt-2'>
                {bedroomOptions.map((item, index) => (
                  <Chip
                    onClick={() => setBathrooms(item.value)}
                    key={index}
                    label={item.label}
                    variant='outlined'
                    className={`mx-2 px-2 py-1 ${
                      bathrooms === item.value
                        ? 'bg-primary-main text-white'
                        : 'text-primary-main bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>
            <Divider className='mt-4' />
            <div className=' gap-2'>
              <h2 className='text-primary-main text-sm font-normal'>Kitchen</h2>
              <div className='mt-2'>
                {bedroomOptions.map((item, index) => (
                  <Chip
                    onClick={() => setKitchen(item.value)}
                    key={index}
                    label={item.label}
                    variant='outlined'
                    className={`mx-2 px-2 py-1 ${
                      kitchen === item.value
                        ? 'bg-primary-main text-white'
                        : 'text-primary-main bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>
            {/* //!no extra flat type filter as we are already using same in home */}
            {/* <Divider className='mt-4' /> */}
            {/* <div className=' gap-2'>
              <h1 className='text-primary-main nt-2 text-sm font-normal'>
                Booking Type
              </h1>

              <div className='mt-2'>
                <div className='flex w-full justify-between'>
                  <div className='text-sm font-medium leading-[150%]'>Sale</div>
                  <Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                </div>
                <div className='flex w-full justify-between'>
                  <div className='text-sm font-medium leading-[150%]'>Rent</div>
                  <Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                </div>
              </div>
            </div>
            <Divider className='mt-4' />
            <div>
              <h1 className='text-primary-main text-sm font-normal'>
                Amenitites
              </h1>

              <div className='mt-2'>
                {amenitiesOptions.map((item, index) => (
                  <Chip
                    onClick={() => setAmenities([...amenities, item.value])}
                    key={index}
                    label={item.label}
                    variant='outlined'
                    className={`mx-2 my-2 px-2  py-1 ${
                      amenities.includes(item.value)
                        ? 'bg-primary-main text-white'
                        : 'text-primary-main bg-white'
                    }`}
                  />
                ))}
              </div>
            </div> */}
            <Divider className='mt-4' />
            <div className='flex justify-end gap-2'>
              <Button
                className='text-primary-main bg-white'
                variant='outlined'
                onClick={handleClear}
              >
                Clear
              </Button>
              <Button
                className='bg-primary-main text-white'
                variant='contained'
                onClick={handleApply}
              >
                Apply
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default FilterModal;
