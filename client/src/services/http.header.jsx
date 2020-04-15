function getOptions() {
    let options = {};
      options.headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      };  
    return options;
  }
  
  export default getOptions;
  