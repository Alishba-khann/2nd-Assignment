import Image from 'next/image';
import img001 from '../public/img001.png';
import img002 from '../public/img002.png';
import img003 from '../public/img003.png';
import img004 from '../public/img004.png';
import img005 from '../public/img005.png';
import img006 from '../public/img006.png';

export default function Product() {
  return (
    <div className='flex flex-col justify-between items-center gap-2 bg-[#252B42]'>
      {/* Main Image */}
      <div>
        <Image src={img001} alt='perfume' width={1400} height={200} priority />
      </div>
      
      {/* Smaller Images */}
      <div className='flex justify-around w-full'>
        <Image src={img002} alt='perfume' width={500} height={400} />
        <Image src={img003} alt='perfume' width={500} height={400} />
      </div>

      <div className='flex justify-around w-full'>
        <Image src={img004} alt='perfume' width={1400} height={200} />
      </div>

      <div className='flex justify-around w-full'>
        <Image src={img005} alt='perfume' width={500} height={400} />
        <Image src={img006} alt='perfume' width={500} height={400} />
      </div>
    </div>
  );
}
