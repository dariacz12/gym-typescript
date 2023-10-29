import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16 md:mt-12">
      <div className="just-content md: mx-auto flex w-5/6 gap-16">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Build and Deploy a Complete Typescript Fitness Application tutorial.
            For frontend, we will be using React, Typescript, Vite, Tailwind,
            Hero Icons, Framer Motion, Form Submit, React Anchor Link Smooth
            Scroll. We will also be using Cloudflare Pages for deploying our
            app.
          </p>
          <p>Build and Deploy a Complete Typescrip</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="mt-5">
            Build and Deploy a Complete Typescript. For frontend, we will be
            using Reactns
          </p>
          <p className="mt-5">Build and Deploy a Complete Typescript.</p>
          <p className="mt-5"> For frontendeactns</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="mt-5">
            Build and Deploy a Complete Typescript. For frontend, we will be
            using Reactns
          </p>
          <p>(444) 456-65433</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
