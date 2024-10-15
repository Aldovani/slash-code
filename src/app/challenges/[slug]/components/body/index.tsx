
type ChallengeBodyProps = {
  requisitesBody: string;
  descriptionBody: string;
  ideaBody: string;
};

export function ChallengeBody({
  requisitesBody,
  descriptionBody,
  ideaBody,
}: ChallengeBodyProps) {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-2 gap-x-8 gap-y-6 mt-12">
      <section className="row-start-1 row-end-3 p-6 border border-slate-200 rounded-lg">
        <h3 className="font-medium text-slate-600">Requisitos</h3>
        <div
          className="flex flex-col gap-2 mt-4 [&_*]:text-slate-500  [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:list-disc  [&_ul]:list-inside [&_ul]:my-4"
          dangerouslySetInnerHTML={{
            __html: requisitesBody
              .replaceAll("<div>", "")
              .replaceAll("</div>", ""),
          }}
        />
      </section>

      <section className=" p-6 border border-slate-200 rounded-lg">
        <h3 className="font-medium text-slate-600">Descrição do projeto</h3>

        <div
          className="flex flex-col gap-2 mt-4 [&_*]:text-slate-500 [&_li]:flex [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:list-disc  [&_ul]:list-inside [&_ul]:my-4"
          dangerouslySetInnerHTML={{
            __html: descriptionBody
              .replaceAll("<div>", "")
              .replaceAll("</div>", ""),
          }}
        />
      </section>

      <section className=" p-6 border border-slate-200 rounded-lg">
        <h3 className="font-medium text-slate-600">Ideias posteriores </h3>

        <div
          className="flex flex-col gap-2 mt-4 [&_*]:text-slate-500 [&_li]:flex [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:list-disc  [&_ul]:list-inside [&_ul]:my-4"
          dangerouslySetInnerHTML={{
            __html: ideaBody.replaceAll("<div>", "").replaceAll("</div>", ""),
          }}
        />
      </section>
    </div>
  );
}
