import { Cars } from './cars';

describe('Cars', () => {
  it('should create an instance', () => {
    expect(new Cars('','',1,1,1)).toBeTruthy();
  });
});
