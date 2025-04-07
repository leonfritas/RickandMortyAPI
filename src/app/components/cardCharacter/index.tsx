

interface CardCharacterProps {
    id: number;
    name: string;
    species: string;
    image: string;
}
  
export default function CardCharacter(props: CardCharacterProps) {
    return (
        <div key={props.id} className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-[250px] justify-between">
            <div className="relative h-60 m-2.5 overflow-hidden text-white rounded-md">
                <img className="w-full" src={props.image} alt="card-image" />
            </div>
            <div className="p-4">
                <div className="flex items-center mb-2">
                    <h6 className="text-slate-800 text-xl font-semibold w-full">
                        {props.name} ({props.species})
                    </h6>
                </div>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2">
                <button className="w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition hover:bg-slate-700">
                    View More
                </button>
            </div>
        </div>
    );
}
  