// components/Hero.tsx
const Hero = () => {
    return (
      <section className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl font-bold">Hi, I'm Isaac!</h1>
            <p className="mt-2 text-lg">I'm a second-year Software Engineering student at Sheffield Hallam University.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  