const enhancer = require('./enhancer.js');

describe("enhancer unit tests", () => {
    it("sets durability to 100", () => {
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

    it("enhances item", () => {
        expect(enhancer.success({
            name: "battleaxe",
            durability: 10,
            enhancement: 2
        })).toEqual({
            name: "battleaxe",
            durability: 10,
            enhancement: 3
        })

        expect(enhancer.success({
            name: "battleaxe",
            durability: 0,
            enhancement: 15
        })).toEqual({
            name: "battleaxe",
            durability: 0,
            enhancement: 16
        })

        expect(enhancer.success({
            name: "battleaxe",
            durability: 100,
            enhancement: 20
        })).toEqual({
            name: "battleaxe",
            durability: 100,
            enhancement: 20
        })

        expect(enhancer.success({
            name: "battleaxe",
            durability: 100,
            enhancement: 0
        })).toEqual({
            name: "battleaxe",
            durability: 100,
            enhancement: 1
        })
    })

    it("decreases durability and/or enhancement", () => {
        expect(enhancer.fail({
            name: "battleaxe",
            durability: 10,
            enhancement: 10
        })).toEqual({
            name: "battleaxe",
            durability: 5,
            enhancement: 10
        })

        expect(enhancer.fail({
            name: "battleaxe",
            durability: 20,
            enhancement: 15
        })).toEqual({
            name: "battleaxe",
            durability: 10,
            enhancement: 15
        })

        expect(enhancer.fail({
            name: "battleaxe",
            durability: 20,
            enhancement: 16
        })).toEqual({
            name: "battleaxe",
            durability: 10,
            enhancement: 16
        })

        expect(enhancer.fail({
            name: "battleaxe",
            durability: 30,
            enhancement: 19
        })).toEqual({
            name: "battleaxe",
            durability: 20,
            enhancement: 18
        })
    })
})