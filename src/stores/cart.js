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
                        return {
                            items: state.items.map(item => item.id === itemID ? { ...item, quantity: item.quantity + 1 } : item),
                        }
                    }
                    else {
                        return {
                            items: [...state.items, { id: itemID, quantity: 1 }],
                        }
                    }

                })

                set((state) => {
                    return {
                        totalQuantity: state.getTotalQuantity()
                    }
                })

            },
            removeFromCart: (itemID, removeAll = false) => {
                if (removeAll) {
                    set((state) => {
                        return {
                            items: state.items.filter(item => item.id !== itemID)
                        }
                    })
                }
                else{
                    set((state) => {
                        return {
                            items: state.items.map(item => {
                                return item.id === itemID 
                                    ? {...item, quantity: item.quantity - 1}
                                    : item;
                            })
                        }
                    })
                }

                set((state) => {
                    return {
                        totalQuantity: state.getTotalQuantity(),
                        items: state.items.filter(item => item.quantity !== 0)
                    }
                })
            }
        },

        getTotalQuantity: () => {
            let total = 0;
            get().items.forEach(item => total += item?.quantity || 0);

            return total;
        },
        setTotalPrice: (totalPrice) => {
            set(state => {
                return {
                    invoice: {
                        ...state.invoice,
                        totalPrice: totalPrice
                    }
                }
            })
        }
    }

});

export default useCart;