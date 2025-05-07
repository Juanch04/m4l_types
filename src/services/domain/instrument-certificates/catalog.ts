import { Pager } from "../../../common/Pager";

export interface DInstrumentCertificatesCatalogListModel {
  id: string;
  instrumentId: number;
  calibrationInstrumentId: number | null;
  status: {
    id: number;
    name: string;
  };
  code: string;
  issuerName: string;
  issueDate: Date;
  visible: boolean;
  createdByLab: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface DInstrumentCertificatesCatalogModel {
  certificates: DInstrumentCertificatesCatalogListModel[];
  pager: Pager;
}
