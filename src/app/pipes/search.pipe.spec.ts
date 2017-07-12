import {SearchPipe} from "./search.pipe";
describe('search Pipe', () => {
  it('create an instance', () => {
    const pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });
  it('should return array', () => {
    const pipe = new SearchPipe();
    const arr = [{name: "joe"},{name: "mike"}];
    const result = pipe.transform(arr, {name: "abb"});
    console.log(result);

  })
});
