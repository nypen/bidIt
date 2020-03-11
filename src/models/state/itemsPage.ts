import { Item } from '../item';

interface ItemsPage{
    items : Item[],
}

const initializeItemsPage = (): ItemsPage => ({
    items: [],
});

export{
    ItemsPage,
    initializeItemsPage,
};
