import { calculateAge } from './index';
import { filter } from './filter';

describe('util', () => {
    
    it('calculates the age from date string', () => {
        const payload = "1990-11-07";
        expect(calculateAge(payload)).toEqual(28);
    });

    it('filters the array by null', () => {
        const players = [
            {
                contractUntil: "2019-06-30",
                dateOfBirth: "1990-03-09",
                jerseyNumber: 17,
                name: "Daley Blind",
                nationality: "Netherlands",
                position: "Left-Back"
            }
        ];
        const filters = { name: null, age: null, position: '' };
        expect(filter(players, filters)).toEqual([players[0]]);
    });

    it('filters the array by age', () => {
        const players = [
            {
                contractUntil: "2019-06-30",
                dateOfBirth: "1990-03-09",
                jerseyNumber: 17,
                name: "Daley Blind",
                nationality: "Netherlands",
                position: "Left-Back"
            }
        ];
        const filters = { name: null, age: 28, position: '' };
        expect(filter(players, filters)).toEqual([players[0]]);
    });

    it('filters the array by name', () => {
        const players = [
            {
                contractUntil: "2019-06-30",
                dateOfBirth: "1990-03-09",
                jerseyNumber: 17,
                name: "Daley Blind",
                nationality: "Netherlands",
                position: "Left-Back"
            }
        ];
        const filters = { name: 'Daley', age: null, position: '' };
        expect(filter(players, filters)).toEqual([players[0]]);
    });
    it('filters the array by position', () => {
        const players = [
            {
                contractUntil: "2019-06-30",
                dateOfBirth: "1990-03-09",
                jerseyNumber: 17,
                name: "Daley Blind",
                nationality: "Netherlands",
                position: "Left-Back"
            }
        ];
        const filters = { name: null, age: null, position: 'Left-Back' };
        expect(filter(players, filters)).toEqual([players[0]]);
    });
    it('filters the array by name && position', () => {
        const players = [
            {
                contractUntil: "2019-06-30",
                dateOfBirth: "1990-03-09",
                jerseyNumber: 17,
                name: "Daley Blind",
                nationality: "Netherlands",
                position: "Left-Back"
            },{
                contractUntil: "2019-06-30",
                dateOfBirth: "1991-03-09",
                jerseyNumber: 17,
                name: "Daley Blind",
                nationality: "Netherlands",
                position: "Left-Back"
            },{
                contractUntil : "2022-06-30",
                dateOfBirth : "1993-05-13",
                jerseyNumber : 9,
                name : "Romelu Lukaku",
                nationality : "Belgium",
                position : "Centre-Forward"
              }
        ];
        const filters = { name: 'Daley', age: 28, position: 'Left-Back' };
        expect(filter(players, filters)).toEqual([players[0]]);
    });
});