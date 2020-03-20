const filter = require("./filter");

describe("Filter function", () => {
    test("it should filter by search term - link", () => {
        const input = [
            { id: 1, url: "https://www.url1.dev"},
            { id: 2, url: "https://www.url2.dev"},
            { id: 3, url: "https://www.link3.dev"},
        ];

        const output = [{ id: 3, url: "https://www.link3.dev"}]
        expect(filter(input, "link")).toEqual(output);

        expect(filter(input, "LINK")).toEqual(output);
    });

    test("it should filter by search term - url", function() {
        const input = [
            { id: 1, url: "https://www.url1.dev"},
            { id: 2, url: "https://www.url2.dev"},
            { id: 3, url: "https://www.link3.dev"},
        ];

        const output = [{ id: 1, url: "https://www.url1.dev"},
        { id: 2, url: "https://www.url2.dev"}]

        expect(filter(input, "uRL")).toEqual(output)
    });

    test("it should throw an error when search term is empty", function() {
        const input = [
            { id: 1, url: "https://www.url1.dev"},
            { id: 2, url: "https://www.url2.dev"},
            { id: 3, url: "https://www.link3.dev"},
        ];
        expect(() => {
            filter(input, "");
        }).toThrowError(Error("search term cannot be empty"))
    });

    test("it should throw an error when input is empty", function() {
        const input = [
        ];
        expect(() => {
            filter(input, "url");
        }).toThrowError(Error("input cannot be empty"))
    });
})

