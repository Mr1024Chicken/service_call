import { Books } from './books';

describe('Books', () => {
  it('should create an instance', () => {
    expect(new Books('','','',1)).toBeTruthy();
  });
});
