import { Footer, Header, Main } from "./components";

export default function Resume() {
  return (
    <section className="bg-stone-200 p-4 sm:p-6 rounded-xl w-full md:w-3/4 lg:w-2/3 mx-auto grid gap-2">
      <Header />

      <Main />

      <Footer />
    </section>
  );
}
