
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
	switch(action.type) {
		case "ADD_RESTAURANT":
		const restaurant = { id:cuidFn(), text: action.text}
		return {...state, restaurants: [...state.restaurants, restaurant]}

		case "DELETE_RESTAURANT":
		const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
		return { ...state, restaurants };

		case 'ADD_REVIEW':

      const review = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuidFn() };
      return { ...state,
        reviews: [...state.reviews, review]
      }

      case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id);
      return {...state, reviews }


		default:
		return state;
	}
};



// export default function manageBand(state = {
//   bands: []
// }, action) {
//   switch (action.type) {
//     case 'ADD_BAND':
//       const band = { id: Math.random(), name: action.name }
//       return { ...state, bands: [...state.bands, band] }

//        // return { bands: state.bands.concat(band)}
//     case 'DELETE_BAND':
//       const bands = state.bands.filter(band => band.id !== action.id);
//       return { bands };


        // return { bands: state.bands.filter(band => band.id !== action.id)}
//     default:
//       return state;
//   }
// };
