const CONTACTS = [
  { label: "Instagram", value: "@julidesignco" },
  { label: "Dribbble", value: "juliDesignCo" },
  { label: "Pinterest", value: "@julidesignco" },
  { label: "Gmail", value: "juliahrabwork@gmail.com" },
  { label: "Creative Market", value: "juliDesignco" },
];

export default function BrandDesigner() {
  return (
    <section>
      <div className="relative aspect-1440/1320 w-full overflow-hidden">
        <div className="absolute inset-x-0 top-0 aspect-1440/1940 overflow-hidden">
          <img
            src="/images/designer.png"
            alt="Hand holding an orange Bella shopping bag"
            className="h-full w-full origin-bottom scale-125 object-cover object-bottom select-none"
          />
        </div>
      </div>

      <div className="bg-white px-10 py-16 text-ink md:py-24 md:pr-16 md:pl-[24.2%]">
        <h3 className="text-2xl leading-[1.15] font-medium uppercase md:text-4xl">
          <span className="block">designer</span>
          <span className="block">yuliia hrabynska</span>
        </h3>

        <dl className="mt-10 space-y-3 text-sm leading-6 md:mt-14 md:text-base">
          {CONTACTS.map(({ label, value }) => (
            <div key={label} className="flex gap-1">
              <dt className="font-bold">{label}:</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="relative aspect-4000/2236 w-full overflow-hidden">
        <img
          src="/images/billboard.png"
          alt="Bella billboard mockup on an orange wall"
          className="absolute inset-0 h-full w-full object-cover object-[50%_36.1%] select-none"
        />
      </div>
    </section>
  );
}
