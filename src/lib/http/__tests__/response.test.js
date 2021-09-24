import { failedResponse, successResponse } from "../response";

describe("successResponse functionality", () => {
  it('should work without "message" argument', () => {
    const res = successResponse({});
    const expectedResponse = {
      success: true,
      message: "",
      data: {},
    };
    expect(res).toMatchObject(expectedResponse);
  });

  it("should pass with message", () => {
    const msg = "sample test";
    const res = successResponse({}, msg);
    const expectedResponse = {
      success: true,
      message: msg,
      data: {},
    };
    expect(res).toMatchObject(expectedResponse);
  });
});
