export async function getData1(url, callback, handleError) {
  try {
    const request = await fetch(url);
    const response = await request.json();
    callback(response);
  } catch (error) {
    handleError(error);
  }
}

export function getData(url, callback) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
