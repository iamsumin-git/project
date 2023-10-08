import { Divider, IconButton } from '@mui/material';
import { ImCheckmark } from 'react-icons/im';
import { RiCheckboxBlankLine } from 'react-icons/ri';
import Select from 'react-select';

import { AllBuildingAmenities } from '@/datas/buildingAmenities';
import { AllFlatAmenities } from '@/datas/flatAmenities';
import { AllFlatPolicies } from '@/datas/policies';

import { Ipolicies, useFlatStore } from '@/store/flatStore';
import { Iamenities } from '@/store/flatStore';
const FeaturesAndPolicies = () => {
  const { buildingAmenities, setBuildingAmenities, flatTypes } = useFlatStore();

  const handleBuildingCheck = (am: Iamenities) => {
    const amIndex = buildingAmenities.findIndex((a) => a.id === am.id);
    const isChecked = amIndex !== -1;
    // if (buildingAmenities.includes(am)) {
    if (isChecked) {
      const newAm = buildingAmenities.filter((f) => am.id != f.id);
      setBuildingAmenities(newAm);
    } else {
      setBuildingAmenities([...buildingAmenities, am]);
    }
  };

  const { flatAmenities, setFlatAmenities } = useFlatStore();

  const handleFlatCheck = (am: Iamenities) => {
    const itemIndex = flatAmenities.findIndex((item) => item.id === am.id);
    const isItemChecked = itemIndex !== -1;

    if (isItemChecked) {
      const newAm = flatAmenities.filter((f) => am.id != f.id);
      setFlatAmenities(newAm);
    } else {
      setFlatAmenities([...flatAmenities, am]);
    }
  };

  const { flatPolicies, setFlatPolicies, basics, setBasic } = useFlatStore();

  const handlePolicyCheck = (p: Ipolicies) => {
    const itemIndex = flatPolicies.findIndex((item) => item.id === p.id);
    const isItemChecked = itemIndex !== -1;
    if (isItemChecked) {
      const newP = flatPolicies.filter((f) => p.id != f.id);
      setFlatPolicies(newP);
    } else {
      setFlatPolicies([...flatPolicies, p]);
    }
  };

  const roomOptions = [
    { label: '1 Room', value: 1 },
    { label: '2 Room', value: 2 },
    { label: '3 Room', value: 3 },
    { label: '4 Room', value: 4 },
    { label: '5 Room', value: 5 },
    { label: '6 Room', value: 6 },
    { label: '7 Room', value: 7 },
    { label: '8 Room', value: 8 },
    { label: '9 Room', value: 9 },
    { label: '10 Room', value: 10 },

    { label: '11 Room', value: 11 },
  ];
  const bathroomOptions = [
    { label: '1 Bath Room', value: 1 },
    { label: '2 Bath Room', value: 2 },
    { label: '3 Bath Room', value: 3 },
    { label: '4 Bath Room', value: 4 },
    { label: '5 Bath Room', value: 5 },
    { label: '6 Bath Room', value: 6 },
    { label: '7 Bath Room', value: 7 },
    { label: '8 Bath Room', value: 8 },
  ];

  const kithchenOptions = [
    { label: '1 Kitchen', value: 1 },
    { label: '2 Kitchen', value: 2 },
    { label: '3 Kitchen', value: 3 },
    { label: '4 Kitchen', value: 4 },
    { label: '5 Kitchen', value: 5 },
    { label: '6 Kitchen', value: 6 },
    { label: '7 Kitchen', value: 7 },
    { label: '8 Kitchen', value: 8 },
  ];

  const handleBasic = (data: any, from: 'room' | 'kitchen' | 'bathroom') => {
    const { kitchen, bathroom, room } = basics;
    if (from == 'kitchen') {
      setBasic({ bathroom, room, kitchen: data.value });
    } else if (from == 'bathroom') {
      setBasic({ bathroom: data.value, room, kitchen });
    } else if (from == 'room') {
      setBasic({ bathroom, room: data.value, kitchen });
    }
  };

  return (
    <div className='m-auto  h-full  w-[80%] '>
      <div className='my-5 grid grid-cols-3 gap-10 '>
        <div>
          <h3 className=' text-sm font-semibold'>Total Rooms</h3>
          <Select
            options={roomOptions}
            defaultValue={roomOptions[0]}
            onChange={(data) => handleBasic(data, 'room')}
          />
        </div>
        <div>
          <h3 className=' text-sm font-semibold'>Total Bathrooms</h3>
          <Select
            options={bathroomOptions}
            defaultValue={bathroomOptions[0]}
            onChange={(data) => handleBasic(data, 'bathroom')}
          />
        </div>
        <div>
          <h3 className=' text-sm font-semibold'>Total Kitchen</h3>
          <Select
            options={kithchenOptions}
            defaultValue={kithchenOptions[0]}
            onChange={(data) => handleBasic(data, 'kitchen')}
          />
        </div>
      </div>

      <div>
        <h3 className='text-[18px] font-semibold '>Building Amenities</h3>
        <div className='mt-5 flex flex-wrap gap-5'>
          {AllBuildingAmenities.filter((am) => {
            return am.flatType.some((e) => flatTypes.includes(e));
          }).map((a: Iamenities) => {
            const itemIndex = buildingAmenities.findIndex(
              (am) => am.id === a.id
            );
            const isItemChecked = itemIndex !== -1;
            return (
              <div
                key={a.id}
                onClick={() => handleBuildingCheck(a)}
                className={`flex min-w-[280px] cursor-pointer gap-5 rounded-md bg-slate-100 md:min-w-[300px] md:max-w-[300px] ${
                  isItemChecked ? 'bg-slate-200' : 'bg-slate-100'
                } p-2 pt-5 `}
              >
                <span className='relative top-[-8px]'>
                  <IconButton>
                    {isItemChecked ? <ImCheckmark /> : <RiCheckboxBlankLine />}
                  </IconButton>
                </span>
                {a.name}
              </div>
            );
          })}
        </div>
      </div>

      <div className='my-9'>
        <Divider />
        <h3 className='  mt-5 text-[18px] font-semibold '>Flat Amenities</h3>
        <div className='mt-5 flex flex-wrap gap-5'>
          {AllFlatAmenities.filter((am) => {
            return am.flatType.some((e) => flatTypes.includes(e));
          }).map((a: Iamenities) => {
            const itemIndex = flatAmenities.findIndex((am) => am.id === a.id);
            const isItemChecked = itemIndex !== -1;
            return (
              <div
                key={a.id}
                onClick={() => handleFlatCheck(a)}
                className={`flex min-w-[280px] cursor-pointer gap-5 rounded-md bg-slate-100 md:min-w-[300px] md:max-w-[300px] ${
                  isItemChecked ? 'bg-slate-200' : 'bg-slate-100'
                } p-2 pt-5 `}
              >
                <span className='relative top-[-8px]'>
                  <IconButton>
                    {isItemChecked ? <ImCheckmark /> : <RiCheckboxBlankLine />}
                  </IconButton>
                </span>
                {a.name}
              </div>
            );
          })}
        </div>
      </div>

      <div className='my-9'>
        <Divider />
        <h3 className='  mt-5 text-[18px] font-semibold '>Flat Policies</h3>
        <div className='mt-5 flex flex-wrap gap-5'>
          {AllFlatPolicies.filter((am) => {
            return am.flatType.some((e) => flatTypes.includes(e));
          }).map((a: Ipolicies) => {
            const itemIndex = flatPolicies.findIndex((am) => am.id === a.id);
            const isItemChecked = itemIndex !== -1;

            return (
              <div
                key={a.id}
                onClick={() => handlePolicyCheck(a)}
                className={`flex min-w-[280px] cursor-pointer gap-5 rounded-md bg-slate-100 md:min-w-[300px] md:max-w-[300px] ${
                  isItemChecked ? 'bg-slate-200' : 'bg-slate-100'
                } p-2 pt-5 `}
              >
                <span className='relative top-[-8px]'>
                  <IconButton>
                    {isItemChecked ? <ImCheckmark /> : <RiCheckboxBlankLine />}
                  </IconButton>
                </span>
                {a.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturesAndPolicies;
