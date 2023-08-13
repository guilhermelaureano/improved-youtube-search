import { expect } from '@jest/globals';
import { mockResponse, mockResult } from '../mock/mockGetParameter';
import { getParameter } from './getParameter';

describe('getParameter', () => {
  it('should get the parameters and return an array for each of the items ', () => {
    const { items } = mockResponse;
    const data = getParameter(items);

    expect(data).toStrictEqual(mockResult);
  });
});
