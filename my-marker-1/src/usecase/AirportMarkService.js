import AirportMarkRepository from "../repositories/AirportMarkRepository";

const getListAirport = () => {
  return AirportMarkRepository.getAirportMark();
};

const getListLocation = async () => {
    const dataMap = await AirportMarkRepository.getAirportMark(); // Assuming getAirportMark() returns a Promise
    const uniqueLocs = new Set();
    const mappedData = dataMap.data.filter(item => {
        if (uniqueLocs.has(item.loc)) {
          return false; // Exclude duplicate loc values
        }
        uniqueLocs.add(item.loc);
        return true;
      })
      .map(item => ({
        loc: item.loc,
        lat: item.lat,
        long: item.long
      }));
      return mappedData
  };
  

const AirportMarkService = {
  getListAirport,
  getListLocation,
};

export default AirportMarkService;
