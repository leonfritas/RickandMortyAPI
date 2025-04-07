'use client';

import { useEffect, useState } from "react";
import { getRAMAPICharacter } from "../service/api";
import CardCharacter from "../components/cardCharacter";

export default function Characters() {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        async function fetchData() {
            const response = await getRAMAPICharacter();
            setData(response.results); 
            console.log(response.results);
        }

        fetchData();
    }, []);

    return (
        <>
            <p>Characters</p>
            <div className="flex flex-wrap justify-around gap-5">
                {data.length > 0 ? (
                    data.map((object) => (
                        <CardCharacter 
                            id={object.id}
                            name={object.name}
                            species={object.species}
                            image={object.image}
                        />    
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    );
}
