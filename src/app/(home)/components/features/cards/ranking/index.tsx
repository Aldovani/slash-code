import { Card } from "../../../card";
import { RankCard } from "./rank-card";
import { RankItem } from "./rank-item";

export function Ranking() {
  return (
    <Card.Root className="col-start-1 col-end-10   lg:col-start-5 lg:col-end-[14] overflow-hidden  ">
      <Card.Header>
        <Card.Title>Ranking e pontuação</Card.Title>
        <Card.Description className="mt-2 max-w-[530px]">
          Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu{" "}
        </Card.Description>
      </Card.Header>
      <Card.Content className=" overflow-hidden relative flex justify-center items-center pt-10">
        <RankCard className="absolute top-0  -translate-x-[162px] translate-y-[80px] -rotate-12 ">
          <RankItem
            name="Julio Alexandre das Neves"
            position={5}
            score={1500}
          />
          <RankItem
            name="Evelyn Mariana Aline Mendes"
            position={6}
            score={800}
          />
          <RankItem
            name="Leandro Miguel Ruan Monteiro"
            position={6}
            score={550}
          />
          <RankItem name="Leonardo Cauã Novaes" position={8} score={300} />
        </RankCard>

        <RankCard className="relative z-[2] translate-y-[10px] bg-white shadow-2xl shadow-slate-300 ">
          <RankItem name="Jaqueline Ayla de Paula" position={1} score={1500} />
          <RankItem
            name="Manuela Brenda Tânia Assunção"
            position={2}
            score={800}
          />
          <RankItem name="Stefany Juliana Lima" position={3} score={550} />
          <RankItem
            name="Cecília Silvana Simone Oliveira"
            position={4}
            score={300}
          />
        </RankCard>

        <RankCard className="absolute top-0  translate-x-[162px] translate-y-[80px] rotate-12 ">
          <RankItem name="Jaqueline Ayla de Paula" position={1} score={200} />
          <RankItem
            name="Manuela Brenda Tânia Assunção"
            position={2}
            score={180}
          />
          <RankItem name="Stefany Juliana Lima" position={3} score={100} />
          <RankItem
            name="Cecília Silvana Simone Oliveira"
            position={4}
            score={70}
          />
        </RankCard>
      </Card.Content>
    </Card.Root>
  );
}
