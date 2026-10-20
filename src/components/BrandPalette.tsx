export default function BrandPalette() {
  return (
    <section>
      <div className="relative aspect-1440/1800 w-full">
        <img
          src="/images/palette.png"
          alt=""
          className="absolute inset-0 h-full w-full object-fill object-center select-none"
        />
          </div>
           <div className="relative mt-[-24%] flex items-center justify-center bg-white px-10 py-10 text-ink md:px-16 md:py-16">
        <div className="w-fit max-w-3xl text-left">
          <h3 className="text-2xl font-medium uppercase md:text-4xl">brand color</h3>
          <h3 className="mt-1 text-2xl font-medium uppercase md:text-4xl">
            palette
          </h3>
          <p className="mt-6 text-sm leading-relaxed text-black/70 md:text-base">
            The pristine purity of white serves as the canvas, embodying the brand's commitment to elegance. A touch of enchanting orange infuses vibrancy and energy, adding a playful yet refined element to each piece. Beige, reminiscent of timeless simplicity, brings a sense of warmth, complementing the luxurious gemstones and enhancing the overall aesthetic. Black, the epitome of sophistication, weaves a thread of bold contrast throughout, creating a harmonious blend that defines the brand's identity. This carefully curated palette invites you to experience the beauty of Bella Jewelry – a celebration of elegance and individuality.
          </p>
        </div>
      </div>
    </section>
  );
}
