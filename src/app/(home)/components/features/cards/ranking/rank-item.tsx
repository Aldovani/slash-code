import { Award, Trophy } from "lucide-react";

type RankItemProps = {
  name: string;
  score: number;
  position: number;
};

export function RankItem({ name, position, score }: RankItemProps) {
  return (
    <li className="px-4 py-3 gap-8 flex justify-between items-center border border-slate-200 rounded-lg">
      {position === 1 && (
        <span className="text-violet-600">
          <Trophy />
        </span>
      )}
      {(position === 2 || position === 3) && (
        <span className="text-violet-600">
          <Award />
        </span>
      )}
      {position > 3 && <span className="text-slate-400">{position}</span>}
      <span className="text-slate-500 font-medium truncate	">{name}</span>

      <span className="text-slate-400 font-medium">{score}</span>
    </li>
  );
}
