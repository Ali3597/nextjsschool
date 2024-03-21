import Image from 'next/image'
import Link from "next/link";

export default  async function Page() {
    const movies = await fetch("http://localhost:3000/api/movies").then((res) => res.json());
  return (<>
  
    <div className="flex flex-wrap justify-around">
    {movies.map((movie)=>(
            
  
            <Link href={`/movies/${movie.id}`} key={movie.id} className="m-5 sm:max-w-xl ">
              <div className="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
          
                    <Image  width={200}
      height={100} src={movie.poster?movie.poster : "/movie.jpg"} alt=""/>
               
                <div className="flex flex-col w-1/2 space-y-4">
                  <div className="flex justify-between items-start">
                    <h2 className="text-3xl font-bold">{movie.title}</h2>
                    <div className="bg-yellow-400 font-bold rounded-xl p-2">{movie.imdb.rating}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{movie.type}</div>
                    <div className="text-lg text-gray-800">{movie.year}</div>
                  </div>
                    <p className=" text-gray-400 max-h-40 overflow-y-hidden">{movie.plot}</p>
                  
                </div>
          
              </div>
            </Link>
            
          
        )
    )}
    </div>
    </>
  );
}
