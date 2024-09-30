const HomeScreen = () => {
  return (
    <section className="bg-stone-200 dark:bg-stone-900 text-lg font-mono">
      <header className="bg-cyan-900 border-2 text-stone-200 border-stone-500 grid gap-y-2 w-full md:w-3/4 lg:w-2/3 mx-auto p-2 print:0 rounded-b-xl mb-4 print:hidden">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-2">
          <p className="text-xl font-bold">Desarrollador Web Full-Stack</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-2">
          <p className="text-lg">Disponibilidad Horaria:</p>
          <p className="text-xl font-bold">Tiempo Completo</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-2">
          <p className="text-lg">Trabajo Remoto:</p>
          <p className="text-xl font-bold">Completamente equipado</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-2">
          <p className="text-lg">Remuneración Pretendida:</p>
          <p className="text-xl font-bold">500 USD mensual</p>
        </div>
      </header>

      <main className="md:w-2/3 mx-auto">
        <section className="py-6">
          <p className="text-balance">
            ¡Hola Mundo! Bienvenidos a mi página web.
            Mi nombre es Pablo, y soy un desarrollador web de confianza en búsqueda de nuevas oportunidades laborales.
            Con experiencia en diferentes tecnologías, me especializo en la creación de aplicaciones modernas,
            intuitivas y eficientes para mejorar la experiencia de los usuarios en la web.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-4">
          <article className="p-2">
            <h3 className="font-bold text-2xl">Lenguajes de Programación</h3>

            <p>Mi conocimiento cubre tanto lenguajes front-end como back-end, permitiendo crear soluciones completas:</p>

            <ul className="list-disc italic px-6">
              <li>HTML, CSS</li>
              <li>JavaScript, TypeScript</li>
              <li>PHP, C#, Python</li>
              <li>SQL (MySQL), NoSQL (MongoDB)</li>
              <li>JSX, JSON</li>
            </ul>
          </article>

          <article className="p-2">
            <h3 className="font-bold text-2xl">Frameworks y Herramientas</h3>

            <p>Trabajo con tecnologías de vanguardia para crear aplicaciones dinámicas y escalables:</p>

            <ul className="list-disc italic px-6">
              <li>.NET Framework, ASP.NET</li>
              <li>Next.js, React.js</li>
              <li>React Native (para aplicaciones móviles Android)</li>
              <li>Node.js, Express, MongoDB</li>
              <li>SQL Server</li>
            </ul>
          </article>

          <article className="p-2">
            <h3 className="font-bold text-2xl">Librerías y Frameworks Frontend</h3>

            <p>Uso librerías modernas para desarrollar interfaces de usuario interactivas y responsivas:</p>

            <ul className="list-disc italic px-6">
              <li>React.js, Redux</li>
              <li>AngularJS</li>
              <li>Bootstrap, Tailwind CSS, Material UI</li>
              <li>jQuery</li>
            </ul>
          </article>

          <article className="p-2">
            <h3 className="font-bold text-2xl">Diseño y Prototipado</h3>

            <p>Además de la programación, me familiarizo con herramientas de diseño para colaborar eficientemente con equipos creativos:</p>

            <ul className="list-disc italic px-6">
              <li>Inteligencia Artificial (Chat GPT)</li>
              <li>Figma (diseño UI/UX)</li>
              <li>Adobe Photoshop</li>
            </ul>
          </article>
        </section>
      </main>
    </section>
  );
};

export { HomeScreen };
