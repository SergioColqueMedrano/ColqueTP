export interface MousePosition {
    x: number | null;
    y: number | null;
  }
  
  export interface Unit {
    id: string;
    type: string;
    position: {
      x: number;
      y: number;
    };
  }
  
  export interface State {
    units: Unit[];
    ui: {
      mouse: MousePosition;
      selectedId: string | null;
    };
  }
  
  export const initialState: State = {
    units: [
      {
        id: 'spearman1',
        type: 'Spearman',
        position: { x: 39, y: 62 },
      },
    ],
    ui: {
      mouse: {
        x: null,
        y: null,
      },
      selectedId: null,
    },
  };
  