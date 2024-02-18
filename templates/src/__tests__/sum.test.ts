import {it, expect} from 'vitest';
import {add} from '../sum';
it('add', ()=>{
  expect(add(1, 2)).toBe(3);
});