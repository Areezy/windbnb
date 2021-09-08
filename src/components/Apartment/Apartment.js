import SuperHost from "./SuperHost";
import { StarIcon } from "@heroicons/react/solid";
export default function Apartment(props) {
  return (
    <figure className="hover:scale-105 transition transform duration-200 ease-out space-y-3 cursor-pointer hover:bg-gray-100 p-2">
      <img
        className="h-300 md:h-[350px] w-screen rounded-3xl"
        src={props.image}
        alt="apartment"
      />
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {props.superHost && <SuperHost />}
          <p className="text-gray-600 text-base">
            {props.type} {(props.bed != null && `, ${props.bed} beds`) || ""}
          </p>
        </div>
        <div className="flex items-center space-x-1 justify-self-end">
          <StarIcon className="h-4 text-orange" />
          <p className="text-gray-600">{props.rating}</p>
        </div>
      </div>
      <p className="font-bold text-lg ">{props.title}</p>
    </figure>
  );
}
