export const getData = async () => {
  let data = await fetch(
    //`https://gnews.io/api/v4/top-headlines?country=us&lang=en&category=general&apikey=1cf43bcc7010fe55ad6dc100d915a036 `
    `https://www.hpb.health.gov.lk/api/get-current-statistical`
  );
  data = await data.json();
  return data.data;
};
