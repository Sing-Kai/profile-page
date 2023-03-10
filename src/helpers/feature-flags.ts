import features from "../data/features"

const featureFlag = (feature: string = "") => {
  return features.includes(feature);
}

export default featureFlag