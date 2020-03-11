import { User } from './user';
import { Category } from './category';

interface Item {
    itemId: string;
    isActive: boolean;
    name: string;
    description: string;
    numOfBids: number;
    category : Category[];
    seller : User;
    currently: number; 
    firstbid: number;
    ends: string;
    highestBid: number;
}

export {
    Item,
};