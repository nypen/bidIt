interface Category {
    categoryId: string;
    name?: string;
}

const initializeCategory = (): Category => ({
    categoryId: "",
    name: "",
});

export {
    Category,
    initializeCategory,
};