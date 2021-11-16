export const getMovieRequest = async (searchTerm) => {
    
    const params = {
      apikey: 'f21935f6',
      s: searchTerm,
    };
    const url = new URL('https://www.omdbapi.com/');
    Object.keys(params).forEach((key) => {
      url.searchParams.append(key, params[key]);
    });
    try {
      const response = await fetch(url.href);
      const responsejson = await response.json();
      // console.log(`inside fetch function`)
      return responsejson;
    } catch (e) {
      console.log(`Error ${e}`);
      return e
    }
  };

export const getMovieDetail = async(id)=>{
  const params = {
    apikey: 'f21935f6',
    i: id,
  };
  const url = new URL('https://www.omdbapi.com/');
  Object.keys(params).forEach((key) => {
    url.searchParams.append(key, params[key]);
  });
  try {
    const response = await fetch(url.href);
    const responsejson = await response.json();
    return responsejson;
  } catch (e) {
    console.log(`Error ${e}`);
    return e
  }
}