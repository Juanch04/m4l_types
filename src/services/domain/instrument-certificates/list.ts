import { DInstrumentCertificatesCatalogListModel, DInstrumentCertificatesCatalogModel } from "./catalog";

export interface DInstrumentCertificatesAuthUserOptionsModel {
  authUserOptions: {
    edit: boolean;
    view: boolean;
  };
}

export interface DInstrumentCertificatesCatalogModelWithAuthUserOptions extends
  DInstrumentCertificatesCatalogListModel,
  DInstrumentCertificatesAuthUserOptionsModel {}

export interface DInstrumentCertificatesListServiceModel {
  certificates: DInstrumentCertificatesCatalogModelWithAuthUserOptions[];
  pager: DInstrumentCertificatesCatalogModel['pager'];
}
