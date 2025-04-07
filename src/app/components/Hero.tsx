import React from "react";

// components/Hero.tsx
const Hero = () => {
    return (
      <section className="h-screen bg-cover bg-center" style={{ backgroundColor: "#4a90e2" }} >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl font-bold">Hi, I&apos;m Isaac!</h1>
            <p className="mt-2 text-lg">I&apos;m a second-year Software Engineering student at Sh effield Hallam University.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  