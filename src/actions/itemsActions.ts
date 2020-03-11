import { Item } from '../models';

enum ItemsActionTypes {
    GetItems = "GetItems",
    SetItems = "SetItems",
    PostItem = "PostItem",
}

type GetItems = {
    type: ItemsActionTypes.GetItems,
};

type PostItem = {
    type: ItemsActionTypes.PostItem,
    userId:string,
    name: string,
    description: string,
    country:string,
    duration:string,
    firstbid:string,
    buyprice?: string,
};

type SetItems = {
    type: ItemsActionTypes.SetItems,
    items: Item[],
};

type GetItemsAction =
    GetItems;

const getItems = (): GetItems => ({
    type: ItemsActionTypes.GetItems,
});
type PostItemAction = PostItem;

const postItem = (userId:string,name: string, description: string,country:string
    ,duration:string,firstbid:string,buyprice?: string): PostItem =>({
    type: ItemsActionTypes.PostItem,
    userId,
    name,
    description,
    country,
    duration,
    firstbid,
    buyprice,
});

type ItemsAction =
    SetItems;

const setItems = (items: Item[]): SetItems => ({
    type: ItemsActionTypes.SetItems,
    items,
});

export {
    GetItemsAction,
    PostItemAction,
    ItemsAction,
    ItemsActionTypes,
    getItems,
    setItems,
    postItem,
};