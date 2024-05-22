type GridProps = {
    rows: number;
    columns: number;
  };
  
  const Unidad: React.FC<GridProps> = ({ rows, columns }) => {
    const rowIndexes = Array.from({ length: rows }, (_, i) => i);
    const columnIndexes = Array.from({ length: columns }, (_, i) => i);
  
    return (
      <div className="relative top-[750px] left-[100px]">
        
        <div className="isometric">
        Unidad
        <div className="unit">
        {rowIndexes.map((row) => (
          <div key={row} className="flex flex-nowrap">
            {columnIndexes.map((col) => (
              <div
                key={col}
                className="relative inline-block bg-yellow-500 box-border border-2"
                style={{
                  width: 'var(--gridSizePx)',
                  minWidth: 'var(--gridSizePx)',
                  height: 'var(--gridSizePx)',
                }}
              /> 
            ))}
            
          </div>
        ))}
        </div>
        </div>
      </div>
    );
  };
  
  export default Unidad;

  
                
           