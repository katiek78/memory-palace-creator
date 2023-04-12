const production = {
   // url: 'https://vercel.com/katiek78/memory-palace-creator/AzGccDCxSTV62rpRqbD3DLi9we7C'
   url: 'https://memory-palace-creator.vercel.app'
  };
  const development = {
    url: 'http://localhost:5000'
  };
  export const config = process.env.NODE_ENV === 'development' ? development : production;