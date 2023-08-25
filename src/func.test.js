import {add,subt} from './func';

test('to test arithmetic',()=>{

   expect(add(10,10)).toBe(20);

   expect(add(10,20)).toBe(30);

})

test('to test arithmetic oper',()=>{

    expect(subt(10,10)).toBe(0);
 
    expect(subt(10,20)).toBe(-10);
 
 })