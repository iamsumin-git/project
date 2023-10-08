interface Ivideo {
  url: string;
}

export const Video = (props: Ivideo) => {
  const { url } = props;
  return (
    <div className=' h-full w-full'>
      <video autoPlay loop className='h-[85vh] w-full object-cover'>
        <source src={url} type='video/mp4' />
      </video>
    </div>
  );
};
