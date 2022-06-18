import React from 'react'
import FavoriteBandCard from './FavoriteBandCard';
import { BandContext } from '../../pages/Favorites';


export default function DayWrapper(props) {
    // const favoritedBands = React.useContext(BandContext);
  return (

      <div className={`h-fit row-start-1 row-end-2 col-start-${props.index+1} col-end-${props.index+2}`}>
            {props.array
                .map((band) => (
                    <FavoriteBandCard bandObj={band} />
                    ))}
      </div>
  );
}

