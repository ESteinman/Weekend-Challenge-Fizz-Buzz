const { FizzBuzz } = require('./spec.helper')

describe('Fizz Buzz',  () => {
    let fizzBuzz = new FizzBuzz
    
    it('returns a number if no game are met', () =>{
       
        expect(fizzBuzz.check(1)).to.eql(1)
    });

    it('returns a fizz if number is dividable by 3', () =>{
        expect(fizzBuzz.check(3)).to.eql('fizz')
    });    
    
    it('returns a buzz if number is dividable by 5', () =>{
        expect(fizzBuzz.check(5)).to.eql('buzz')
    });

    it('returns a fizzbuzz if number is dividable by 15', () =>{
        expect(fizzBuzz.check(15)).to.eql('fizzbuzz')
    });

})