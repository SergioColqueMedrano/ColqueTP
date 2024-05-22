
type GridProps = {
  rows: number;
  columns: number;
};

const Grid: React.FC<GridProps> = ({ rows, columns }) => {
  const rowIndexes = Array.from({ length: rows }, (_, i) => i);
  const columnIndexes = Array.from({ length: columns }, (_, i) => i);

  return (
    <div className="relative top-[150px] left-[100px]">
      <div className="isometric">
      {rowIndexes.map((row) => (
        <div key={row} className="flex flex-nowrap">
          {columnIndexes.map((col) => (
            <div
              key={col}
              className="relative inline-block bg-green-600 box-border border-2"
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
  );
};

export default Grid;
