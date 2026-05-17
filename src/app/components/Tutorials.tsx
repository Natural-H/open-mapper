import { useState } from "react";
import { Link, useParams } from "react-router";
import { ArrowLeft, BookOpen, CheckCircle } from "lucide-react";
import { programs } from "../data/programs";

export default function Tutorials() {
  const { id } = useParams<{ id: string }>();
  const program = programs.find((p) => p.id === id);
  const [selectedTutorial, setSelectedTutorial] = useState(0);

  if (!program) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Programa no encontrado
          </h2>
          <Link
            to="/"
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  if (program.tutorials.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <header className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <Link
              to={`/program/${program.id}`}
              className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium mb-4"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver al programa
            </Link>
            <h1 className="text-4xl font-bold text-indigo-600">
              Tutoriales de {program.name}
            </h1>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <p className="text-gray-600 text-lg">
              Aún no hay tutoriales disponibles para este programa.
            </p>
          </div>
        </main>
      </div>
    );
  }

  const currentTutorial = program.tutorials[selectedTutorial];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link
            to={`/program/${program.id}`}
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver al programa
          </Link>
          <h1 className="text-4xl font-bold text-indigo-600">
            Tutoriales de {program.name}
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
              <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-600" />
                Contenido
              </h2>
              <nav className="space-y-2">
                {program.tutorials.map((tutorial, index) => (
                  <button
                    key={tutorial.id}
                    onClick={() => setSelectedTutorial(index)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      selectedTutorial === index
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-50 text-gray-700 hover:bg-indigo-50"
                    }`}
                  >
                    <div className="font-medium text-sm">{tutorial.title}</div>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-3">
                  {currentTutorial.title}
                </h2>
                <p className="text-gray-600 text-lg">
                  {currentTutorial.content}
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Pasos a seguir
                </h3>
                <div className="space-y-4">
                  {currentTutorial.steps.map((step, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed">{step}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                {selectedTutorial > 0 && (
                  <button
                    onClick={() => setSelectedTutorial(selectedTutorial - 1)}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                  >
                    Tutorial anterior
                  </button>
                )}
                {selectedTutorial < program.tutorials.length - 1 && (
                  <button
                    onClick={() => setSelectedTutorial(selectedTutorial + 1)}
                    className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium ml-auto"
                  >
                    Siguiente tutorial
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
