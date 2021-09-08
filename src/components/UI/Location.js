import { LocationMarkerIcon } from "@heroicons/react/solid";

export default function Location(props) {
    let fullLocation = `${props.location}, Finland`;

    const onClickHandler = () => {
      props.onSelect(fullLocation);
    };
  return (
    <div
      className="cursor-pointer hover:underline flex items-center space-x-2"
      onClick={onClickHandler}
    >
      <LocationMarkerIcon className="h-8 text-gray-700" />
      <p className="text-lg font-normal font-Mulish text-grayish">
        {fullLocation || "location"}
      </p>
    </div>
  );
}
