import { ICountry, NewCountry } from './country.model';

export const sampleWithRequiredData: ICountry = {
  id: 4746,
  code: 'SCSI Configuration deposit',
};

export const sampleWithPartialData: ICountry = {
  id: 17392,
  code: 'Japan engineer',
};

export const sampleWithFullData: ICountry = {
  id: 14843,
  countryName: 'Mandatory',
  code: 'Profound Shoes',
};

export const sampleWithNewData: NewCountry = {
  code: 'Nebraska Program panel',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
