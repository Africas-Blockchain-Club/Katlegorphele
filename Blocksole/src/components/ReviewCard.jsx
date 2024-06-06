import { star } from "../assets/icons"

const ReviewCard = ( {imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img
        src={imgURL}
        alt="Customer"
        className="rounded-full object-cover w-[120px] h-[120px]"/>
        <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
        <div className="mt-3 flex justify-center items-center gap-1">
            <img
            src={star}
            width={24}
            height={24}
            className="object-contain m-0"/>
            <img
            src={star}
            width={24}
            height={24}
            className="object-contain m-0"/>
            <img
            src={star}
            width={24}
            height={24}
            className="object-contain m-0"/>
            <img
            src={star}
            width={24}
            height={24}
            className="object-contain m-0"/>
            <img
            src={star}
            width={24}
            height={24}
            className="object-contain m-0"/>
            <p className="text-xl text-slate-gray font-montserrat">({rating})</p>
        </div>
        <h4 className="text-2xl text-center font-palanquin font-bold">{customerName}</h4>
    </div>
  )
}

export default ReviewCard