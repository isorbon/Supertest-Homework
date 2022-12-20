import { expect } from "chai";
import request from "../config/common";

describe("Updating details of a given pet", () => {
  let petId, petStatus;

  // Creating a new pet
  it("POST /pet", async () => {
    const data = {
      id: Math.floor(Math.random() * 999999999),
      status: "available",
    };

    const res = await request
      .post("pet")
      .send(data)
      // Verifying that the status code of the response is 200
      .expect(200);
  });

  // Getting the details of the newly created pet
  it("PUT /pet", async () => {
    const data = {
      id: Math.floor(Math.random() * 333333),
      status: "sold",
    };

    const res = await request
      .put("pet")
      .send(data)
      // Verifying that the status code of the response is 200
      .expect(200);

    // assigning the data
    petId = res.body.id;
    petStatus = res.body.status;
    // Verifying that the new pet has the details given previously (id and status)
    expect(res.body.id).to.eq(petId);
    expect(res.body.status).to.eq(petStatus);
  });
});
