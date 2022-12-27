import { expect } from "chai";
import request from "../config/common";

describe("Updating details of a given pet", () => {

  const data = {
    id: Math.floor(Math.random() * 999999999),
    status: "available"
  };

  // Creating a new pet
  it("POST /pet", async () => {
    data.id;
    data.status;

    const res = await request
      .post("pet")
      .send(data)
      // Verifying that the status code of the response is 200
      .expect(200);

      console.log(res.body);
  });

  // Getting the details of the newly created pet
  it("PUT /pet", async () => {
    data.id = Math.floor(Math.random() * 333333);
    data.status = "sold";

    const res = await request
      .put("pet")
      .send(data)
      // Verifying that the status code of the response is 200
      .expect(200);

      console.log(res.body);

    // Verifying that the new pet has the details given previously (id and status)
    expect(res.body.id).to.eq(data.id);
    expect(res.body.status).to.eq(data.status);
  });
});
