import MapJson from "../utils/MapJson";

const getAirportMark = async () => {
    const result = [];
    
    await Promise.all(MapJson.map(async (item) => {
      const [loc, lat, long] = item;
      result.push({
        loc: loc,
        lat: lat.toString(),
        long: long.toString(),
      });
    }));
    
    const response = {
      code: 200,
      data: result,
      message: "Success",
    };
    console.log('RESPONSE NETWORK', response)
    return response;
  };

const AirportMarkRepository = {
  getAirportMark,
};

export default AirportMarkRepository;
