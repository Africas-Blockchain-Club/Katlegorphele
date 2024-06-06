import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        BlockSole offers buyers transparent and secure transactions. 
        By leveraging blockchain, buyers can verify authenticity, 
        track transaction history, and ensure fair 
        pricing, solving common issues faced when 
        buying from resellers on other platforms.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
        "Step into the <span className="
        text-coral-red">future of sneaker shopping</span> with BlockSole"
        </p>
        <div className='mt-11 font-bold '>
          <Button label='Shop Now!'
          className='hover:scale-105 transition-transform duration-300' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain hover:scale-105 transition-transform duration-300 cursor-pointer'
        />
      </div>
    </section>
  );
};

export default SuperQuality;