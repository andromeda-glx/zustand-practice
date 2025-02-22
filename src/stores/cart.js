import { create } from "zustand";

const useCart = create((set) => ({
    items: [],
    quantity: 0,
    addToCart: (item) => set((state) => {
        const newItemID = Number(item.target.dataset.productId);
        const founded = state.items.find(item => item.id === newItemID);

        if (founded) {
            founded.quantity++;
            state.quantity++;
            return { items: [...state.items] }
        }
        else {
            state.quantity++;
            return { items: [...state.items, { id: newItemID, quantity: 1 }] }
        }

    }),
    removeItem: (id) => set((state) => state.createItems.filter(item => item.id !== id)),
    clearItems: () => set({}),
}));

export default useCart;