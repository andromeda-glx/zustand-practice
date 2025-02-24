import { create } from "zustand";

const useCart = create((set, get) => {
    return {
        items: [],
        totalQuantity: 0,
        invoice: {
            totalPrice: 0,
            totalDiscount: 0,
            deliveryCost: 0,
            finalPrice: 0,
        },
        actions: {
            addToCart: (itemID) => {
                const idExist = get().items.some(item => item.id === itemID);

                set((state) => {
                    if (idExist) {
                        console.log("Item quantity increased!");
                        return {
                            items: state.items.map(item => item.id === itemID ? {...item, quantity: item.quantity + 1} : item),
                            totalQuantity: state.totalQuantity + 1
                        }
                    }
                    else{
                        console.log("New item added!");
                        return {
                            items: [...state.items, {id: itemID, quantity: 1}],
                            totalQuantity: state.totalQuantity + 1
                        }
                    }
                })
            },
            removeFromCart: () => { }
        },
    }

});

export default useCart;