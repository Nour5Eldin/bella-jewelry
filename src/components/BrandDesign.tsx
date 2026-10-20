import logo from "../assets/bellajewelry.svg";

export default function BrandDesign() {
  return (
    <section>
      <div className="relative aspect-1440/1800 w-full">
        <img
          src="/images/hero.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center select-none"
        />
        <div className="absolute inset-x-0 top-0 flex h-1/2 flex-col items-center justify-center gap-6 px-6 text-center text-white">
          <img
            src={logo}
            alt="Bella Jewelry"
            className="w-full max-w-210 select-none pointer-events-none"
          />
          <h2 className="text-xl font-medium uppercase md:text-3xl select-none">
            jewelry brand
          </h2>
        </div>
      </div>
      <div className="relative mt-[-23%] flex items-center justify-center bg-white px-10 py-10 text-ink md:px-16 md:py-16">
        <div className="w-fit max-w-3xl text-left">
          <h3 className="text-2xl font-medium uppercase md:text-4xl">bella</h3>
          <h3 className="mt-1 text-2xl font-medium uppercase md:text-4xl">
            branding design
          </h3>
          <p className="mt-6 text-sm leading-relaxed text-black/70 md:text-base">
            Bella's curated collection marries classic elegance with modern
            allure, offering a range of handcrafted jewelry that transcends
            trends and captures the essence of sophistication. From delicately
            designed necklaces that grace your neckline with grace to statement
            rings that evoke a sense of glamour, each piece at Bella Jewelry
            tells a unique story. They celebrate the brilliance of carefully
            chosen gemstones, infusing designs with a touch of luxury. Bella
            Jewelry invites you to discover adornments that not only complement
            your style but also become an expression of your individuality.
          </p>
        </div>
      </div>
    </section>
  );
}
