type generalContextType = {
    isCardSide: boolean
    setCardSide: (view: boolean) => void
    isAlphabeticSort: boolean,
    setAlphabeticSort: (view: boolean) => void
    cart: number
    addToCart: (view: number) => void;
    wishlist: number
    addToWishlist: (view: number) => void;

};