import { carrierOverNoise } from "../utils/carrier_over_noise";
import { signalToNoise } from "../utils/signal_to_noise";

const getCarrierOverNoise = async () => {
    const data = carrierOverNoise;

    const transformedData = [
        {
          label: Object.keys(data[0]).map(key => key),
          dataTime: data.map(obj => obj["300s__TIMESTAMP"]),
          termUsMin: data.map(obj => obj["AVG__TERM_US_MIN_CN0"]),
          termUsAvg: data.map(obj => obj["AVG__TERM_US_AVG_CN0"])
        }
      ];
      return transformedData
}

const getSignalOverNoise = async () => {
    const data = signalToNoise
    const transformedData = [
        {
          label: Object.keys(data[0]).map(key => key),
          dataTime: data.map(obj => obj["300s__TIMESTAMP"]),
          termDsMin: data.map(obj => obj["AVG__TERM_DS_MIN_SNR"]),
          termCurrentAvg: data.map(obj => obj["AVG__CURRENT_SNR"]),
          termDsAvg: data.map(obj => obj["AVG__TERM_DS_AVG_SNR"])
        }
      ];
      return transformedData
}

const ChartRepository = {
    getCarrierOverNoise,
    getSignalOverNoise
  };
  
  export default ChartRepository;