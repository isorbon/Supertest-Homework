import { expect } from "chai";
import request from "../config/common";

describe("Deleting Pet record", () => {
  let petId;

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
  });

  // Deleting the newly created pet
  it("DELETE /pet/{petId}", async () => {
    const res = await request
      .delete(`pet/${petId}`)
      // Verifying that the status code of the response is 200
      .expect(200);

    // Verifying the selected deletion response
    expect(res.body.message).to.be.eq(`${petId}`);
  });
});
