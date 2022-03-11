import { expect, test } from "vitest";
import shortestStr from "./shortest-string";
import shortestStrEnum from "./shortest-string-enum";

test("missing", () => {
  expect(shortestStr("ab", "abc")).toBe(null);
  expect(shortestStr("ab", "abc")).toBe(shortestStrEnum("ab", "abc"));
});

test("test", () => {
  expect(shortestStr("abbcdcab", "abc")).toBe("cab");
  expect(shortestStr("abbcdcab", "abc")).toBe(
    shortestStrEnum("abbcdcab", "abc")
  );
  expect(shortestStr("dadbcabdac", "abcd")).toBe(
    shortestStrEnum("dadbcabdac", "abcd")
  );
  expect(shortestStr("bbadacc", "abcd")).toBe(
    shortestStrEnum("bbadacc", "abcd")
  );
});
