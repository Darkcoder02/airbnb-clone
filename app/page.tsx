import Header from '../components/Header';
import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import SmallCard from '../components/SmallCard';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'airbnb-clone'
}

async function getExploreData(){
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G',{
    method: 'GET',
  }).then((res)=>res.json());

  return exploreData;
}

export default async function Home() {
  const exploreData = await getExploreData();
  return (
    <div>
      <Header />
      <Banner />
      <main className="p-4 max-w-7xl mx-auto">
        <section className="pt-6">
          <Carousel />
        </section>
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map(({img,location,distance}: any) => (
              <SmallCard 
              key={distance}
              distance={distance}
              location={location}/>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

