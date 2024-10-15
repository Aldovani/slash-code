import Image from "next/image";

type LanguageProps = {
  name: string;
  url: string;
};

export function LanguageItem({ name, url }: LanguageProps) {
  return (
    <div className="border bg-white border-slate-200 rounded-xl p-3">
      <Image width={40} alt={name} height={40} src={url} />
    </div>
  );
}
