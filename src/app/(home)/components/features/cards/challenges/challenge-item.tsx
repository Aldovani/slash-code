import Image, { StaticImageData } from "next/image";
type ChallengeItem = {
  imgUrl: StaticImageData;
  name: string;
};

export function ChallengeItem({ imgUrl, name }: ChallengeItem) {
  return (
    <div
      title={`challenge ${name}`}
      className="border w-[285px] overflow-hidden  bg-white rounded-lg h-[215px] p-2 border-slate-200"
    >
      <Image alt={name} src={imgUrl} className="rounded-md" />
    </div>
  );
}
