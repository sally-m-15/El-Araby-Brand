import { cities } from '@/data/auth/locations/cities';
import { countries } from '@/data/auth/locations/countries';
import { governorates } from '@/data/auth/locations/governorates';

export function useLocations() {
  function getLocationOptions(fieldId, formValues) {
    if (fieldId === 'country') {
      return countries;
    }
    if (fieldId === 'governorate') {
      return governorates;
    }
    if (fieldId === 'city') {
      return cities[formValues?.governorate] || [];
    }
    return [];
  }

  return { getLocationOptions };
}