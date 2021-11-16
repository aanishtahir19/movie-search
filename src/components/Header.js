import { useState } from "react";

function Header({setSearch}) {
    const [searchLocal, setSearchLocal] = useState("")
    const handleSearch= (e)=>{
        e.preventDefault();
        setSearch(searchLocal)
    }
  return (
      <div className="fixed  top-0 bg-bg z-50 flex justify-center items-center flex-col md:flex-row w-full mx-auto p-6 text-white ">
        <div id="heading">
          <h1 className="text-2xl text-white font-bold mr-5">Movies</h1>
        </div>
        <form  onSubmit={handleSearch} className="flex items-center justify-center">
          <label htmlFor="search" className="text-lg">Search</label>
          <input
            className='text-black mx-2 m px-3 py-1 w-3/4 rounded-2xl outline-none'
            type='text'
            name='search'
            value={searchLocal}
            id='search'
            placeholder="Avengers"
            onChange={(e)=> setSearchLocal(e.target.value)}
          />
          <input type='submit' className="hidden " />
        </form>
      </div>
  );
}

export default Header;
