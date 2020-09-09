const enhancer = require('./enhancer.js');

describe("enhancer unit tests", () => {
    it("tests repair(item)", () => {
        expect(enhancer.repair({
            name: "battleaxe",
            durability: 11,
            enhancement: 2
        })).toEqual({
            name: "battleaxe",
            durability: 100,
            enhancement: 2
        })

        expect(enhancer.repair({
            name: "battleaxe",
            durability: 100,
            enhancement: 2
        })).toEqual({
            name: "battleaxe",
            durability: 100,
            enhancement: 2
        })

        expect(enhancer.repair({
            name: "battleaxe",
            durability: 0,
            enhancement: 2
        })).toEqual({
            name: "battleaxe",
            durability: 100,
            enhancement: 2
        })
    })
})