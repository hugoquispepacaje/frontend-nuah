import axios from 'axios';
import Item from '../models/Item';
import { GetItemByIdResponse, GetItemsResponse } from '../models/ItemResponse';
import { urlBackend } from './utiles';
const itemUrl = 'item/';

const getItems:Promise<GetItemsResponse> = axios.get(`${urlBackend}${itemUrl}`);
const getItemById = (_id:string):Promise<GetItemByIdResponse> => {
  return axios.get(`${urlBackend}${itemUrl}${_id}`)
};

export { getItems, getItemById };