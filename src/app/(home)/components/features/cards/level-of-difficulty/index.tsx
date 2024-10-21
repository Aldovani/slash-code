"use client";

import { motion } from "framer-motion";
import { Card } from "../../../card";

export function LevelOfDifficulty() {
  return (
    <Card.Root className="lg:col-start-1 lg:col-end-5 sm:col-start-1 col-end-10 col-start-1  ">
      <Card.Content className="flex items-center justify-center py-10 ">
        <ul className="flex flex-col items-center md:px-10 px-5 w-full">
          <motion.li
            initial={{ translateY: 10, opacity: 0 }}
            transition={{  }}
            whileInView={{ translateY: 0, opacity: 1 }}
            className="hover:text-violet-50 hover:bg-violet-600 hover:border-violet-600 transition-all  rounded-t-lg border-b-transparent text-center font-medium  w-[calc(100%_-_30%)] py-3 text-violet-600 border border-slate-200 bg-white"
          >
            Especialista
          </motion.li>
          <motion.li
            initial={{ translateY: 10, opacity: 0 }}
            transition={{ delay: 0.2 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            className="hover:text-violet-50 hover:bg-violet-400 hover:border-violet-400 transition-all  rounded-t-lg border-b-transparent text-center font-medium  w-[calc(100%_-_20%)] py-3 text-violet-600 border border-slate-200 bg-white"
          >
            Avançado
          </motion.li>
          <motion.li
            initial={{ translateY: 10, opacity: 0 }}
            transition={{ delay: 0.4 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            className=" hover:bg-violet-200 hover:border-violet-200 transition-all  rounded-t-lg border-b-transparent text-center font-medium  w-[calc(100%_-_10%)] py-3 text-violet-600 border border-slate-200 bg-white"
          >
            Intermediário
          </motion.li>
          <motion.li
            initial={{ translateY: 10, opacity: 0 }}
            transition={{ delay: 0.6 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            className=" hover:bg-violet-50 hover:border-violet-50 transition-all  rounded-lg text-center font-medium  w-[100%] py-3 text-violet-600 border border-slate-200 bg-white"
          >
            Iniciante
          </motion.li>
        </ul>
      </Card.Content>

      <Card.Header>
        <Card.Title>Níveis de dificuldade</Card.Title>
        <Card.Description className="mt-2">
          Encontre o desafio certo para o seu nível, de iniciante a
          especialista. Nossos desafios são feitos para garantir aprendizado e
          evolução, independentemente de onde você está na sua jornada.
        </Card.Description>
      </Card.Header>
    </Card.Root>
  );
}
