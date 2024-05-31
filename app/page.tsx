

import Header from '../components/Header.js';
import Banner from '../components/Banner.js';
import Carousel from '../components/Carousel.js';


export default function Home() {
  return (
    <div className="">
      <Header/>
      <Banner/>
      <main className="max-w-7xl mx-auto">
        <section className="pt-6">
          <Carousel/>
        </section>
        <section className='pt-6'>
          <h2 className="text-4xl font-semibold pb-5">Explore</h2>

          {/* {exploreData?.map((item) => (
            <h1 key={item.location}>{item.location}</h1>
          ))} */}
        </section>
      </main>
    </div>
  );
}

// export async function getProps() {
//   const exploreData = await fetch('https://links.papareact.com/pyp').then((response) => response.json);
//   return {
//     props:{
//       exploreData
//     }
//   }
// };