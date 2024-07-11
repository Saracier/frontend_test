import { AbbreviateStringPipe } from './abbreviate-string.pipe';

describe('AbbreviateStringPipe', () => {
  it('create an instance', () => {
    const pipe = new AbbreviateStringPipe();
    expect(pipe).toBeTruthy();
  });
});
