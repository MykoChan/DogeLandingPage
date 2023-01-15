const capitalized = require("./capitalized");

test("capitalizes first letter", () => {
    const c = capitalized("test");
    console.log(c);
    expect(c).toBe("Test");
});
