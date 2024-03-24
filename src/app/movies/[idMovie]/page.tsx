import Image from 'next/image'

export const dynamic ='force-dynamic'

 
export default async function Page({ params }: { params: { idMovie: string } }) {
  const movie  = await fetch(`http://localhost:3000/api/movies/${params.idMovie}`).then((res) => res.json());


  
 
  return  <div   className="m-5 sm:max-w-xl ">
  <div className="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">

        <Image  width={200}
height={100} src={movie.data.poster? movie.data.poster : "/movie.jpg"} alt=""/>
   
    <div className="flex flex-col w-1/2 space-y-4">
      <div className="flex justify-between items-start">
        <h2 className="text-3xl font-bold">{movie.title}</h2>
        <div className="bg-yellow-400 font-bold rounded-xl p-2">{movie.data.imdb.rating ?movie.data.imdb.rating:7}</div>
      </div>
      <div>
        <div className="text-sm text-gray-400">{movie.data.type}</div>
        <div className="text-lg text-gray-800">{movie.data.year}</div>
      </div>
        <p className=" text-gray-400 max-h-40 overflow-y-hidden">{movie.data.plot}</p>
      
    </div>

  </div>
</div>
}