import supertest from "supertest";
import baseURL from "./baseURL";
const request = supertest(baseURL.baseUrl);

export default request;