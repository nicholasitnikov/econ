
const CartReducer = (state, action) => {

  switch (action.type) {

    case 'EMPTY_CART':
      return []

    case 'LOAD_CART':
      return JSON.parse(action.payload)

    case 'DECREASE_QUANTITY':

      if(state.some((el) => el.id === action.payload.id)) {
        let newState = [...state].map((product) => {
          return product.id === action.payload.id ? {...product, quantity: product.quantity-1} : product;
        }).filter((el) => el.quantity !== 0);
         
        return newState;
      }

      return state

    case 'INCREASE_QUANTITY':

      if(state.some((el) => el.id === action.payload.id)) {
        let newState = [...state].map((product) => {
          return product.id === action.payload.id ? {...product, quantity: product.quantity+1} : product;
        });

        return newState;
      }

      return state

    case 'ADD_TO_CART':

      if(state.some((el) => el.id === action.payload.id)) {
        let newState = [...state].map((product) => {
          return product.id === action.payload.id ? {...product, quantity: product.quantity+1} : product;
        });

        return newState;
      }

      const newState = [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          brand: action.payload.brand,
          image: action.payload.image,
          price: action.payload.price,
          quantity: 1
        }
      ]

      return newState;

    default:
      return state
  }

}

export default CartReducer
