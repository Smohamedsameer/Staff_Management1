import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/users';

export const listEmployees = () =>  axios.get(REST_API_BASE_URL);

export const addemployee =(employee) =>axios.post(REST_API_BASE_URL,employee);

export const updateemployee=(id) => axios.get(REST_API_BASE_URL + '/' + id)

export const editemployee=(employee,id) => axios.put(REST_API_BASE_URL + '/' + id,employee)


export const deleteemployee=(id) => axios.delete(REST_API_BASE_URL + '/' + id)