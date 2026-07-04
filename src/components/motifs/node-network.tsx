const nodes: [number, number][] = [
  [40, 60],
  [140, 20],
  [230, 90],
  [180, 190],
  [70, 170],
  [300, 40],
  [320, 160],
  [250, 230],
  [10, 230],
  [120, 110],
];

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 9],
  [9, 0],
  [9, 3],
  [3, 4],
  [4, 0],
  [2, 5],
  [5, 6],
  [6, 7],
  [7, 3],
  [4, 8],
];

export function NodeNetwork({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 330 260"
      aria-hidden="true"
      className={`pointer-events-none absolute ${className ?? ""}`}
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="var(--color-gold-700)"
          strokeWidth="0.75"
          opacity="0.5"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 3 : 2} fill="var(--color-gold-500)" opacity="0.7" />
      ))}
    </svg>
  );
}
