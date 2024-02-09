function processor(transmission) {
   if (transmission.indexOf("::") < 0 || transmission.indexOf("::", transmission.indexOf("::") + 2) !== -1) {
      return -1;
   }

   let parts = transmission.split("::");

   let id = Number(parts[0]);

   let rawData = parts[1];
   if (rawData[0] !== "<" || rawData[rawData.length - 1] !== ">") {
      return -1;
   }
   if (isNaN(id)) {
      return -1;
   }

   return {
      id: id,
      rawData: rawData.trim().substring(1, rawData.length - 1), // Fix: trim leading and trailing whitespace
   };
}

module.exports = processor;

/*function processor(transmission) {
    if (transmission.indexOf("::") < 0) {
           return -1;
    }
    
    let parts = transmission.split("::");

    let id = Number(parts[0]);
    
    let rawData = parts[1];
  if (rawData[0] !== "<" || rawData[rawData.length - 1] !== ">") {
    return -1;
  }
  if (isNaN(id)) {
    return -1;
    }

    return {
    id: id,
    rawData: rawData.substring(1, rawData.length - 1), // Exclude < and > symbols
  };
}
  
module.exports = processor;*/