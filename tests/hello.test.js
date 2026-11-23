const { main } = require("../src/hello");

test("main prints Hello World!", () => {
  const output = jest.spyOn(console, "log").mockImplementation(() => {});
  main();
  expect(output).toHaveBeenCalledWith("Hello World!");
  output.mockRestore();
});
