import { useState } from "react";
import { Link } from "react-router";
import { Search, Filter } from "lucide-react";
import { programs, categories } from "../data/programs";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPrograms = programs.filter((program) => {
    const matchesSearch =
      program.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (program.alternatives && program.alternatives.some((altId) => {
        const altProgram = programs.find((p) => p.id === altId);
        return altProgram?.name.toLowerCase().includes(searchQuery.toLowerCase());
      }));

    const matchesCategory =
      selectedCategory === "all" || program.category === selectedCategory;

    return matchesSearch && matchesCategory && !program.isProprietary;
  });

  const popularPrograms = programs.filter(
    (p) => !p.isProprietary && ["davinci-resolve", "gimp", "audacity", "vscode", "canva", "inkscape"].includes(p.id)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-indigo-600">Open Mapper</h1>
          <p className="text-gray-600 mt-2">
            Descubre alternativas gratuitas a software propietario
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Busca por nombre de programa (ej: Photoshop, GIMP)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="text-gray-600 w-5 h-5" />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-700 hover:bg-indigo-50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {searchQuery === "" && selectedCategory === "all" && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Programas Populares
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularPrograms.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          </div>
        )}

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {searchQuery || selectedCategory !== "all"
              ? "Resultados de búsqueda"
              : "Todos los programas"}
          </h2>
          {filteredPrograms.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No se encontraron programas. Intenta con otra búsqueda.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPrograms.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function ProgramCard({ program }: { program: typeof programs[0] }) {
  const categoryName = categories.find((c) => c.id === program.category)?.name;

  return (
    <Link
      to={`/program/${program.id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
    >
      <div className="h-48 bg-gradient-to-br from-indigo-400 to-purple-500 relative overflow-hidden">
        {program.images.length > 0 ? (
          <img
            src={program.images[0]}
            alt={program.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">
            {program.name.charAt(0)}
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
            {program.name}
          </h3>
        </div>
        <p className="text-sm text-indigo-600 font-medium mb-2">
          {categoryName}
        </p>
        <p className="text-gray-600 text-sm line-clamp-3">
          {program.description}
        </p>
        <p className="text-xs text-gray-500 mt-3">Por {program.developer}</p>
      </div>
    </Link>
  );
}
