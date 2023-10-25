import { useContext } from "react";
import { ButtonCsv } from "./component/ButtonCsv";
import { MainContext } from "./context/MainContext";
import { Loading } from "./component/Loading";

const App = () => {
  const { loading } = useContext(MainContext);

  if (loading) return <Loading />;

  return (
    <div className="h-screen w-full">
      <div className="bg-sky-600 p-20">
        <h1 className="text-4xl font-semibold text-white text-center">
          E-ncendio
        </h1>
        <p className="text-center text-gray-300 text-lg">
          Generador de información
        </p>
      </div>

      <div className="p-10">
        <h3 className="pb-10">Descargar información en formato xlsx</h3>
        <div className="flex ">
          <ButtonCsv path={"word"} title={"Palabras"} />
          <ButtonCsv path={"phrase"} title={"Frases"} />
          <ButtonCsv path={"image"} title={"Imagenes"} />
          <ButtonCsv path={"emotion"} title={"Emociones"} />
        </div>
      </div>
    </div>
  );
};

export default App;
