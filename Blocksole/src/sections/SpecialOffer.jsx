import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'> Explore 
          <span className='text-coral-red'> Exclusive </span>
          Offers
        </h2>
        <p className='mt-4 info-text'>
        Join us as we pioneer a new era in 
        sneaker culture! BlockSole is proud 
        to announce our partnership with 
        artists to craft one-of-a-kind 
        sneakers and NFTs, transforming 
        footwear into coveted collectible 
        items of the future. 
        </p>
        <p className='mt-6 info-text'>
        Together, 
        we're revolutionizing the way 
        sneakers are created and collected, 
        blending artistry with blockchain 
        technology to offer unique pieces 
        that celebrate individuality and 
        creativity. Be part of this 
        groundbreaking movement and own a piece of sneaker 
        history with BlockSole."
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' iconURL={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;