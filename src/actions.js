import { fetchRegions } from './services/api';

export function selectCategory({ selectCategoryId }) {
  return {
    type: 'selectCategory',
    payload: {
      selectCategoryId,
    },
  };
}

export function selectRegion({ selectRegionId }) {
  return {
    type: 'selectRegion',
    payload: {
      selectRegionId,
    },
  };
}

export function setRegions({ regions }) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}
