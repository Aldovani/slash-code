import { Award, Trophy } from "lucide-react";

type RankItemProps = {
  name: string;
  score: number;
  position: number;
};

export function RankItem({ name, position, score }: RankItemProps) {
  return (
    <li className="px-4 py-3 flex-1 gap-8 flex justify-between items-center border border-slate-200 rounded-lg">
      {position === 1 && (
        <span>
          <Trophy className="sm:size-6 size-4 text-violet-600" />
        </span>
      )}
      {(position === 2 || position === 3) && (
        <span>
          <Award className="sm:size-6 size-4 text-violet-600" />
        </span>
      )}
      {position > 3 && <span className="text-slate-500 text-xs">{position}</span>}
      <span className="text-slate-500 font-medium truncate text-[8px] sm:text-base max-w-[50%]	">
        {name}
      </span>

      <span className="sm:block  text-slate-500 font-medium text-xs sm:text-base">
        {score}
      </span>
    </li>
  );
}
