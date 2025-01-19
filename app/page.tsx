import Refcard from "@/app/refcard";

export default function Home() {
  return (
      <main className="">
        <h1>
            Wallerand Avocat
        </h1>

          <div>
                <Refcard title="First " languages={["/images/languages/csharp.jpg"]} />
          </div>
      </main>
  );
}
