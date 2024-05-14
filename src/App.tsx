import { useState } from "react";
import Map from "./components/Map";
import LocationSearch from "./components/LocationSearch";
import type { Place } from "./api/place";

function App() {
  const [place, setPlace] = useState<Place | null>(null);

  return (
    <div className='h-screen w-screen grid grid-cols-12'>
      <div className='col-span-6 md:col-span-4 lg:col-span-3 p-2'>
        <LocationSearch onPlaceClick={(p) => setPlace(p)} />
      </div>
      <div className='col-span-6 md:col-span-8 lg:col-span-9'>
        <Map place={place} />
      </div>
    </div>
  );
}

export default App;
