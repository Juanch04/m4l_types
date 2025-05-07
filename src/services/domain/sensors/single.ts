export interface DSensorsSingleModel {
  id: number;
  version: number;
  active: boolean;
  typeName: string;
  magnitude: {
    id: number;
    name: string;
    unit: string;
    symbol: string;
    imageUrl: string;
  };
  sensorPresentation: {
    id: number;
    name: string;
    imageUrl: string;
  };
  indicatorPresentation: {
    id: number;
    name: string;
    imageUrl: string;
  };
  location: string;
  serie: string;
  reference: string;
  manufacturer: string;
  model: string;
  measureRangeMin: number;
  measureRangeMax: number;
  measureResolution: number;
  insurableValue: number;
  imageUrl: string | null;
  calibrationType: {
    id: number;
    name: string;
    requireCoverage: boolean;
  };
  coverageState: string;
  coverageCity: string;
  qtyPoints: number;
  points: number[];
  procedure: {
    id: number;
    locationCityName: string;
    locationName: string;
    locationId: number;
    magnitude: {
      name: string;
      unit: string;
      symbol: string;
    };
    norm: string;
    normDescription: string;
    technology: string;
    ranges: Array<{
      cmcMinClosed: boolean;
      cmcMin: number;
      cmcMaxClosed: boolean;
      cmcMax: number;
      cmcUncertainty: number;
    }>;
    resolution: number;
    workingDeliveryDays: number;
    price: number;
    accreditorName: string | null;
    restrictions: string;
    conformityDecisionRule: string;
  };
  accredited: boolean;
  receiver: {
    id: number | null;
    name: string | null;
  };
  calibrationPeriod: {
    years: number;
    months: number;
    days: number;
  };
  conformity: {
    required: boolean;
    acceptanceLimit: number | null;
    decisionRule: string | null;
  };
  lastCalibration: Date | null;
  nextCalibration: Date | null;
  orderStatus: {
    hasBeenInOrder: boolean;
    isInOpenOrder: boolean;
    openOrderId: number | null;
    name: string | null;
  };
  status: {
    hasBeenInOrder: boolean;
    isInOpenOrder: boolean;
    openOrderId: number | null;
    name: string | null;
  };
  customer: {
    id: number;
    companyName: string;
    email: string;
    contactName: string | null;
    firstPhone: string;
    cityName: string;
  };
  createdAt: Date;
  updatedAt: Date;
}
