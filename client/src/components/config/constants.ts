const production = {   
   url: 'https://memory-palace-creator.vercel.app'
  };
  const development = {
    url: 'http://localhost:5000'
  };
  export const config = process.env.NODE_ENV === 'development' ? development : production;