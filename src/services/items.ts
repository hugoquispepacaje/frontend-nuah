import axios from 'axios';
import { GetItemByIdResponse, GetItemsResponse } from '../models/ItemResponse';
import { urlBackend } from './utiles';
const itemUrl = 'item/';

const getItems = ():Promise<GetItemsResponse> => {
  return axios.get(`${urlBackend}${itemUrl}`);
};
const getItemById = (_id:string):Promise<GetItemByIdResponse> => {
  return axios.get(`${urlBackend}${itemUrl}${_id}`)
};

export { getItems, getItemById };