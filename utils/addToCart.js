import { getCookie, setCookie } from "cookies-next";

const getCartItems = () => {
    const cartItems = getCookie("cartItems");
    return cartItems ? JSON.parse(cartItems) : [];
};

const setCartItems = (cartItems) => {
    setCookie("cartItems", JSON.stringify(cartItems));
};

const addToCart = (product, quantity) => {
    const cartItems = getCartItems();
    const existingItem = cartItems.find((i) => i.id === product.id);
    if (existingItem) {
        const removeCart = cartItems.filter((item) => item.id !== product.id);
        setCartItems(removeCart);
    } else {
        cartItems.push({ id: product.id, title: product?.title?.rendered,price: product?.course_price,qty: quantity });
        setCartItems(cartItems);
    }
   
};

const removeFromCart = (productId) => {
    const cartItems = getCartItems().filter((item) => item.id !== productId);
    setCartItems(cartItems);
};

const updateCartItemQuantity = (productId, quantity) => {
    const cartItems = getCartItems().map((item) =>
        item.id === productId ? { ...item, qty: quantity } : item
    );
    setCartItems(cartItems);
};



export { getCartItems, addToCart, removeFromCart, updateCartItemQuantity };