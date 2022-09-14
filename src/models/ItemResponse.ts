import Item from "./Item";

interface GetItemsResponse {
  data: {
    items: Item[];
  };
}

interface GetItemByIdResponse {
  data: {
    item: Item;
  };
}

export {
  type GetItemsResponse,
  type GetItemByIdResponse,
}