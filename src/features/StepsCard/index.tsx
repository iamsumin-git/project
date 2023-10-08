interface Iprops {
  title: string;
  isActive: boolean;
}

const StepsCard = (props: Iprops) => {
  const { title, isActive } = props;
  return (
    <div className='flex flex-col'>
      <h1
        className={`text-2xl font-semibold leading-[150%] ${
          isActive ? 'text-primary-main' : ''
        }`}
      >
        {title}
      </h1>
      {isActive && <div className='bg-primary-main mt-1 h-[2px] w-full'></div>}
    </div>
  );
};

export default StepsCard;
