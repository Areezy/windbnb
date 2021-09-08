import Location from "./Location"
import data from "../../stays.json"
import _ from 'lodash';

export default function LocationList(props) {
    const locationArray = data.map((apartment) => {
        return apartment.city;
    })
    const locations = _.uniq(locationArray);

    const onSelectHandler = (location) => {
        props.onSelect(location);
    }


    return (
        <div className="p-9 space-y-7" >
            { locations.map((location) => {
                return (
                  <Location
                    onSelect={onSelectHandler}
                    key={location}
                    location={location}
                  />
                );
            })}
        </div>
    )
}
