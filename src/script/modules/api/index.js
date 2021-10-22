const api = (config, callBack) => {
  fetch(config.url, {
      method: config.method,
      body: config.body,
      headers: config.headers
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      callBack(data);
    });
};

export default api;
