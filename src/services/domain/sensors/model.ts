import { DInstrumentsModel } from "../instruments/model";

export interface DInstrumentBySensorModel {
  instrumentId: number;
  instrumentVersion: number;
  sensorPresentationId: number;
  indicatorPresentationId: number;
  conformityAcceptanceLimit: number | null;
  conformityDecisionRule: string | null;
}

export interface DSensorsModel extends DInstrumentsModel,
  Omit<DInstrumentBySensorModel, 'instrumentId' | 'instrumentVersion'> { }