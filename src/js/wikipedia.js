const promise = new Promise((resolve,reject) => {
  const ElementRequest = new XMLHttpRequest();
  ElementRequest.open("GET", "https://en.wikipedia.org/w/api.php?action=query&titles=Hydrogen&format=json&origin=*", true);
  ElementRequest.onload = () => {
    if (ElementRequest.status === 200) {
      resolve(ElementRequest.response);
    } else {
      reject(Error(ElementRequest.statusText));
    }
  };

  ElementRequest.send(); // send the request
});

promise.then(function(value) {
  console.log(value);
});
