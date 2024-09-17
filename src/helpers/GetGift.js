export const GetGit = async (category) => {
  let apyKey = "Y0IZE7ohVYO3ZBYYLRBeoDbHH7Ga6Bbd";
  const url1 = `https://api.giphy.com/v1/gifs/search?api_key=${apyKey}&q=${category}`;
  const resp = await fetch(url1);
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
