'use client' 

import Header from "./components/header";
import Card from "./components/cardHome/index";
import Link from 'next/link';

export default function Home() {

  return (
    <>
        <Header />
        <div className="flex gap-10 flex-wrap justify-around ">            
            <Card 
              name="Characters"
              link="characters"
            />            
            <Card 
              name="Episodes"
              link="episodes"
            />
            <Card 
              name="Locations"
              link="locations"
            />            
        </div>        
    </>
  );
}
