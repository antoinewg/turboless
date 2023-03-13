import { describe, it, expect } from "vitest";

import { formatJSONResponse } from "../response";

describe("formatJSONResponse", () => {
  it("should return status 200", () => {
    const result = formatJSONResponse({ message: "Hello world" });
    expect(result.statusCode).toEqual(200);
    expect(result.body).toEqual('{"message":"Hello world"}');
  });
});
