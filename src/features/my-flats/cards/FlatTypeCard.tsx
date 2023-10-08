import { IconButton } from '@mui/material';
import { BsCheck2Circle } from 'react-icons/bs';

interface IflatType {
  label: string;
  checked: boolean;
  features: string[];
}

export const FlatTypeCard = (props: IflatType) => {
  const { label, checked, features } = props;
  return (
    <div
      className={` z-10 h-full  min-w-[300px] max-w-[300px] flex-grow cursor-pointer rounded-lg  p-3 shadow-md ${
        checked ? 'bg-slate-200' : 'bg-slate-100'
      }`}
    >
      <div className='flex  w-full justify-center  text-center align-middle'>
        <h3 className=' text-primary-main text-lg font-bold'>{label}</h3>
      </div>
      <div className=''>
        {features.map((f) => (
          <div key={f} className='flex'>
            <IconButton>
              <BsCheck2Circle />
            </IconButton>
            <span className='relative top-2'>{f}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
