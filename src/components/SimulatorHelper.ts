import { taxasData } from '../assets/data/taxas';

export function calcularTaxaEfetiva(tipo: string): number {
  const cdi = taxasData.cdiAtualEstimado;
  switch (tipo) {
    case 'cdi_100': return cdi;
    case 'cdb_95': return cdi * (taxasData.cdbConservador / 100);
    case 'cdb_105': return cdi * (taxasData.cdbMedio / 100);
    case 'cdb_120': return cdi * (taxasData.cdbAgressivo / 100);
    default: return cdi;
  }
}
