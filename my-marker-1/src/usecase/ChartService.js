import ChartRepository from "../repositories/ChartRepository";


const getListCarrier = () => {
    return ChartRepository.getCarrierOverNoise()
}

const getSignalNoise = () => {
    return ChartRepository.getSignalOverNoise()
}

const ChartService = {
    getListCarrier,
    getSignalNoise
  };
  
  export default ChartService;