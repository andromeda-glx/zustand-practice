import { create } from "zustand";

const useCart = create((set, get) => {
    return {
        items: [],
        totalQuantity: 0,
        invoice: {
            totalPrice: 0, // total price is not synch with the data that's been received for the second time from the api
            totalDiscount: 0,
            deliveryCost: 0,
            finalPrice: 0,
        },
        actions: {
            addToCart: (itemID, itemPrice) => {
                const idExist = get().items.some(item => item.id === itemID);

                set((state) => {
                    if (idExist) {
                        console.log("Item quantity increased!");
                        return {
                            items: state.items.map(item => item.id === itemID ? {...item, quantity: item.quantity + 1} : item),
                            totalQuantity: state.totalQuantity + 1,
                            invoice: {
                                ...state.invoice,
                                totalPrice: state.invoice.totalPrice + itemPrice
                            }
                        }
                    }
                    else{
                        console.log("New item added!");
                        return {
                            items: [...state.items, {id: itemID, quantity: 1}],
                            totalQuantity: state.totalQuantity + 1,
                            invoice: {
                                ...state.invoice,
                                totalPrice: state.invoice.totalPrice + itemPrice
                            }
                        }
                    }
                })
            },
            removeFromCart: () => { }
        },
    }

});

export default useCart;