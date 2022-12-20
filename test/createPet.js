import { expect } from "chai";
import request from "../config/common";

describe("Create Pet record", () => {
  // Setting the request body
  it("POST /pet", async () => {
    const data = {
      id: Math.floor(Math.random() * 999999999),
      status: "available",
    };

    const res = await request.post("pet").send(data)
     // Verifying that the status code of the response is 200
    .expect(200);

    console.log(res.body);

    // Verifying that the new pet has the details given previously (id and status)
    expect(res.body).to.deep.include(data);
  });
});
