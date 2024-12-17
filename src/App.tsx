import "./App.css";
import { Button } from "./components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

function App() {
  return (
    <div className="h-screen bg-black text-white px-5">
      <main className="h-screen flex items-center justify-center">
        <section className="flex items-center justify-center">
          <img
            className="rounded-full w-2/5 border-solid border-2 border-orange-800 mx-4"
            src="src/assets/img/fakepj.jpg"
            alt="profile image"
          />
          <div className="flex flex-col mx-2 gap-2">
            <h1 className="text-3xl font-bold">Hola, soy Pedro :&#41;</h1>
            <h2 className="text-2xl">Desarrollador front-end junior</h2>
            <div className="flex gap-4 mt-1.5">
              <Button className="bg-orange-600 hover:bg-orange-700 hover:border-orange-700 text-xl">
                Sobre mí
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 hover:border-blue-700 text-xl">
                Mis proyectos
              </Button>
            </div>
          </div>
        </section>
      </main>

      <section>
        <header className="flex justify-between items-center py-1">
          <div className="hover-container">
            <span className="hover-text main">Pedro de Jesús</span>
            <span className="hover-text secondary">
              Ing. en Computación y Sistemas
            </span>
          </div>
        </header>
        <div className="mx-auto py-1 w-3/4">
          <h1 className="text-4xl font-bold mb-2">Sobre mí</h1>
          <Tabs defaultValue="About me" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="About me">Quien soy</TabsTrigger>
              <TabsTrigger value="Motivacion">Motivación</TabsTrigger>
              <TabsTrigger value="Habilidades">Habilidades</TabsTrigger>
            </TabsList>
            <TabsContent value="About me">Agugu</TabsContent>
            <TabsContent value="Motivacion">Agugu 2</TabsContent>
            <TabsContent value="Habilidades">Agugu 3</TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}

export default App;
