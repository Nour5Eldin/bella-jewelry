type Swatch = {
  name: string;
  hex: string;
  rgb: string;
  cmyk: string;
  role: string;
  text: string;
};

const SWATCHES: Swatch[] = [
  {
    name: "White",
    hex: "#FFFFFF",
    rgb: "255 255 255",
    cmyk: "0 0 0 0",
    role: "Secondary color",
    text: "text-ink",
  },
  {
    name: "Autumn Blaze",
    hex: "#F57523",
    rgb: "245 117 35",
    cmyk: "0 64 89 4",
    role: "Core color",
    text: "text-white",
  },
  {
    name: "Misty Taupe",
    hex: "#E1D8D3",
    rgb: "225 216 211",
    cmyk: "7 10 13 8",
    role: "Core color",
    text: "text-ink",
  },
  {
    name: "Charcoal",
    hex: "#0F0F0F",
    rgb: "15 15 15",
    cmyk: "60 55 53 98",
    role: "Secondary color",
    text: "text-white",
  },
];

const TINTS = [
  { label: "80%", alpha: "CC" },
  { label: "50%", alpha: "80" },
  { label: "30%", alpha: "4D" },
];

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="font-bold">{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

export default function ColorSwatches() {
  return (
    <section
      aria-label="Brand color swatches"
      className="grid grid-cols-1 bg-white sm:grid-cols-2 xl:aspect-1440/730 xl:grid-cols-4"
    >
      {SWATCHES.map((s) => (
        <article
          key={s.name}
          className={`grid grid-rows-[minmax(22rem,1fr)_4.5rem_4.5rem_4.5rem] xl:h-full xl:grid-rows-[862fr_148fr_148fr_148fr] ${s.text}`}
        >
          <div
            className="flex flex-col justify-between px-[11.4%] pt-12 pb-7"
            style={{ backgroundColor: s.hex }}
          >
            <div>
              <h3 className="text-3xl leading-none font-bold tracking-tight xl:text-[clamp(1.75rem,2.1vw,2.25rem)]">
                {s.name}
              </h3>

              <dl className="mt-14 w-fit text-base leading-snug">
                <Spec label="CMYK" value={s.cmyk} />
                <Spec label="RGB" value={s.rgb} />
                <Spec label="HEX" value={s.hex} />
              </dl>
            </div>

            <p className="text-sm font-semibold uppercase">{s.role}</p>
          </div>
          {TINTS.map((t) => (
            <div
              key={t.label}
              className="flex items-center px-[11.4%] text-base font-semibold"
              style={{ backgroundColor: `${s.hex}${t.alpha}` }}
            >
              {t.label}
            </div>
          ))}
        </article>
      ))}
    </section>
  );
}
