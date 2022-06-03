import { fetchRegions } from '../services/api';

import mockCategories from '../../fixture/categories';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function setCategoires(categories) {
  return {
    type: 'setCategoires',
    payload: {
      categories,
    },
  };
}

export function setErrorMessage(errorMessage) {
  return {
    type: 'setErrorMessage',
    payload: {
      errorMessage: errorMessage ? `${errorMessage} 잠시 후 다시 시도해주세요` : null,
    },
  };
}

export function loadRegions() {
  return async (dispatch) => {
    try {
      const regions = await fetchRegions();

      dispatch(setRegions(regions));
    } catch (error) {
      dispatch(setErrorMessage(error.message));
    }
  };
}

export function loadCategories() {
  return async (dispatch) => {
    try {
      dispatch(setCategoires(mockCategories));
    } catch (error) {
      dispatch(setErrorMessage(error.message));
    }
  };
}
