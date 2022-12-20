import { expect } from "chai";
import request from "../config/common";

describe("Getting details of a given pet", () => {
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

    petId = res.body.id;
    petStatus = res.body.status;
  });

  // Getting the details of the newly created pet
  it("GET /pet/{petId}", async () => {
    const res = await request
      .get(`pet/${petId}`)
      // Verifying that the status code of the response is 200
      .expect(200);

    // Verifying that the new pet has the details given previously (id and status)
    expect(res.body.id).to.eq(petId);
    expect(res.body.status).to.eq(petStatus);
  });
});

describe("Getting the details of a pet that is not available", () => {
  it("GET /pet/{petId}", async () => {
    const res = await request
      .get("pet/121212121345534")
      // Verifying that the status code of the response is 200
      .expect(404);

    // Validating expected retrieval failure response
    expect(res.body.message).to.eq("Pet not found");
  });

  it("GET /pet/{petId}", async () => {
    const res = await request
      .get("pet/121212121345535")
      // Verifying that the status code of the response is 200
      .expect(404);

    // Validating expected retrieval failure response
    expect(res.body.message).to.eq("Pet not found");
  });
});
