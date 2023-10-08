interface Iprop {
  title: string;
  count: number;
  subtitle?: string;
}

export const SummaryCard = (props: Iprop) => {
  return (
    <div>
      <div className='h-[120px] w-[300px] rounded-lg bg-slate-200 p-5 text-center shadow-lg'>
        <h2 className=' text-primary-main text-4xl font-bold'>{props.count}</h2>
        <h3 className='  text-lg font-semibold text-black'>{props.title}</h3>
        <h3 className='  text-sm'>{props.subtitle}</h3>
      </div>
    </div>
  );
};
