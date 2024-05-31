'use client'
import Image from "next/image";
import Header from '../components/Header.js';
import Banner from '../components/banner.js';
import Carousel from '../components/carousel.js';
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch('https://links.papareact.com/pyp').then(response => response.json())
    .then(json => setData(json))
    .catch(error => console.error(error));
  },[])
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

          {data?.map((item) => (
            <h1>{item.location}</h1>
          ))}
        </section>
      </main>
    </div>
  );
}
