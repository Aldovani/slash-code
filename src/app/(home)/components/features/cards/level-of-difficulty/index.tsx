import { Card } from "../../../card";

export function LevelOfDifficulty() {
  return (
    <Card.Root className="lg:col-start-1 lg:col-end-5 sm:col-start-5 col-end-10 col-start-1  ">
      <Card.Content className="flex items-center justify-center py-10 ">
        <ul className="flex flex-col items-center px-10">
          <li className="rounded-t-lg border-b-transparent text-center font-medium w-[calc(260px_-_90px)] py-3 text-violet-600 border border-slate-200 bg-white">Especialista</li>
          <li className="rounded-t-lg border-b-transparent text-center font-medium w-[calc(260px_-_60px)] py-3 text-violet-600 border border-slate-200 bg-white">Avançado</li>
          <li className="rounded-t-lg border-b-transparent text-center font-medium w-[calc(260px_-_30px)] py-3 text-violet-600 border border-slate-200 bg-white">Intermediário</li>
          <li className="rounded-lg text-center font-medium w-[260px] py-3 text-violet-600 border border-slate-200 bg-white">Iniciante</li>
        </ul>
      </Card.Content>

      <Card.Header>
        <Card.Title>Níveis de dificuldade</Card.Title>
        <Card.Description className="mt-2">
          Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </Card.Description>
      </Card.Header>
    </Card.Root>
  );
}
