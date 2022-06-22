const getFlowers = async () => {
  return await fetch("http://localhost:3000/flowers").then((response) =>
    response.json()
  );
};

export { getFlowers };
