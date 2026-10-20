export default function BrandTypography() {
  return (
    <section>
      <img
        src="/images/jewelry.png"
        alt=""
        width={1440}  
        height={1000}
        className="block h-auto w-full select-none"
      />
      <div className="relative mt-[2.8%] flex items-center justify-center bg-white px-10 py-10 text-ink md:px-16 md:py-16">
        <div className="w-fit max-w-3xl text-left">
          <h3 className="text-2xl font-medium uppercase md:text-4xl">brand</h3>
          <h3 className="mt-1 text-2xl font-medium uppercase md:text-4xl">
            typography
          </h3>
          <p className="mt-6 text-sm leading-relaxed text-black/70 md:text-base">
            The primary font, Elanor, gracefully takes center stage, with its timeless serifs and delicate strokes. Elanor imparts a sense of classic charm, reflecting the enduring beauty found in each piece of jewelry. Complementing this, the secondary font, Brandon Grotesque, adds a modern twist with its clean lines and contemporary aesthetic. Together, these fonts dance in perfect harmony, narrating the story of Bella Jewelry with every stroke and curve.
          </p>
        </div>
      </div>
    </section>
  );
}