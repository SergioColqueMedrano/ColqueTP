
import { MousePosition, State } from "../initialstate/intialState";


export type Action =
  | { type: 'updateMousePosition'; payload: MousePosition }| { type: 'selectEntity' };

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'updateMousePosition':
      return {
        ...state,
        ui: {
          ...state.ui,
          mouse: {
            x: action.payload.x,
            y: action.payload.y,
          },
        },
      };
      case'selectEntity':
      return {
        ...state,
        ui: {
          ...state.ui,
          selectedId: null,

        },
      };
    default:
      throw new Error('Unhandled action type');
  }
}
