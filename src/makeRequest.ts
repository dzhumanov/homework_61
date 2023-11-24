const makeRequest = async (url: string) => {
  const response = await fetch(url);

  if (response.ok) {
    return response.json();
  }

  throw new Error("Something is wrong");
};

export default makeRequest;