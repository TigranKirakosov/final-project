// import { API_REQUEST, apiError, apiSuccess } from './api.actions';

// export const apiMiddleware = ({ dispatch }) => next => action => {
//     next(action);

//     processApiRequest(action, dispatch);
// };

// const processApiRequest = async (action: any, dispatch: any) => {
//     if (action.type.includes(API_REQUEST)) {
//         const { body, url, method, feature } = action.meta;
//         try {
//             const response = await fetch(url, { body, method });
//             const data = await response.json();
//             dispatch(apiSuccess({ response: data, feature }));
//         } catch (error) {
//             dispatch(apiError({ error: error, feature }));
//         }
//     }
// }
