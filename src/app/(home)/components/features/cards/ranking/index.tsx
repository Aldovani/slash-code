"use client";
import { motion } from "framer-motion";

import { Card } from "../../../card";
import { RankCard } from "./rank-card";
import { RankItem } from "./rank-item";

export function Ranking() {
  return (
    <Card.Root className="col-start-1 col-end-10   lg:col-start-5 lg:col-end-[14] overflow-hidden  ">
      <Card.Header>
        <Card.Title>
          Ranking e pontuação{" "}
          <span className="text-slate-500 text-sm">(Em breve)</span>
        </Card.Title>
        <Card.Description className="mt-2 max-w-[830px]">
          Supere seus limites e veja seu nome no topo da tabela! Complete
          desafios, acumule pontos e compare seu desempenho com outros
          desenvolvedores. Quanto mais você avança, maior será sua conquista.
        </Card.Description>
      </Card.Header>
      <Card.Content className=" overflow-hidden relative flex justify-center items-center pt-10 sm:px-5 px-2">
        <motion.div
          initial={{
            translateX: -100,
            translateY: 90,
            rotate: -12,
            opacity: 0,
          }}
          whileInView={{
            translateX: -120,
            translateY: 105,
            rotate: -12,
            opacity: 1,
          }}
          transition={{ delay: 1, duration: 0.5 }}
          animate
          className="absolute top-0 sm:block hidden"  
        >
          <RankCard>
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
        </motion.div>

        <motion.div
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 20, opacity: 1}}
          transition={{ duration: 0.5 }}
          className="relative z-[2] bg-white shadow-2xl shadow-slate-300  "
        >
          <RankCard>
            <RankItem
              name="Jaqueline Ayla de Paula"
              position={1}
              score={1500}
            />
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
        </motion.div>

        <motion.div
          className="absolute top-0  sm:block hidden "
          initial={{ translateX: 100, translateY: 90, rotate: 12, opacity: 0 }}
          whileInView={{
            translateX: 120,
            translateY: 105,
            rotate: 12,
            opacity: 1,
          }}
          transition={{ delay: 1, duration: 0.5 }}
          animate
        >
          <RankCard>
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
        </motion.div>
      </Card.Content>
    </Card.Root>
  );
}
