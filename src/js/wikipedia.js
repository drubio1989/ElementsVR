const promise = new Promise((resolve,reject) => {
  const ElementRequest = new XMLHttpRequest();
  ElementRequest.open("GET", "https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&rvsection=0&titles=Hydrogen&format=json&origin=*", true);
  ElementRequest.onload = () => {
    if (ElementRequest.status === 200) {
      resolve(ElementRequest.response);
      console.log('success');
    } else {
      reject(Error(ElementRequest.statusText));
      console.log('failure');
    }
  };

  ElementRequest.send(); // send the request
});

promise.then(function(value) {
  wikiResponse = JSON.parse(value);
  console.log(wikiResponse["query"]["pages"]["13255"]["revisions"]["0"]["*"]);
});
