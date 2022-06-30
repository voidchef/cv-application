import axios from "axios";
const baseUrl = "http://localhost:3001/api";

const config = {
  headers: {
    Authorization: "",
  },
};

const getToken = async () => {
  const request = axios.get(`${baseUrl}/auth`);
  const response = await request;
  config.headers.Authorization = `Bearer ${response.data.token}`;
};

const getAll = async () => {
  const request = axios.get(`${baseUrl}/getAll`, config);
  const response = await request;
  return response.data;
};

const create = async (group: string, newObject: object) => {
  const request = axios.post(`${baseUrl}/post/${group}`, newObject, config);
  const response = await request;
  return response.data;
};

const update = async (id: string, group: string, newObject: object) => {
  const request = axios.patch(
    `${baseUrl}/update/${group}/${id}`,
    newObject,
    config
  );
  const response = await request;
  return response.data;
};

const remove = async (group: string, id: string) => {
  const request = axios.delete(`${baseUrl}/delete/${group}/${id}`, config);
  const response = await request;
  return response.data;
};

const Services = {
  getToken,
  getAll,
  create,
  update,
  remove,
};

export default Services;
