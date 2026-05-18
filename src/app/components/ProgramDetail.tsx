import { Link, useParams } from 'react-router'
import {
  ArrowLeft,
  ExternalLink,
  BookOpen,
  Download,
  ClipboardCopy
} from 'lucide-react'
import { programs, categories } from '../data/programs'

export default function ProgramDetail() {
  const { id } = useParams<{ id: string }>()
  const program = programs.find((p) => p.id === id)

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
    )
  }

  let parsedName = ''

  if (program.scoopBucket) parsedName += program.scoopBucket + '/'
  if (program.scoopName) parsedName += program.scoopName

  const categoryName = categories.find((c) => c.id === program.category)?.name
  const alternativePrograms = program.alternatives
    ? programs.filter((p) => program.alternatives?.includes(p.id))
    : []

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver al inicio
          </Link>
          <h1 className="text-4xl font-bold text-indigo-600">Open Mapper</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div>
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
                  {categoryName}
                </span>
                <h2 className="text-4xl font-bold text-gray-800 mb-2">
                  {program.name}
                </h2>
                <p className="text-gray-600">
                  Desarrollado por{' '}
                  <span className="font-medium text-gray-800">
                    {program.developer}
                  </span>
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  {program.description}
                </p>
              </div>

              {program.scoopName != null && program.scoopBucket != null && (
                <div className="space-y-4 mb-6">
                  <p className="text-gray-700">
                    Instalar en Windows usando Scoop:
                  </p>
                  <div className="flex flex-row grow">
                    <div className="flex flex-col gap-y-3 grow">
                      <div
                        className="border-2 bg-gray-100 rounded-sm flex flex-row hover:bg-gray-200 transition-colors hover:cursor-pointer"
                        onClick={() => {
                          navigator.clipboard.writeText(
                            `scoop bucket add ${program.scoopBucket}`
                          )
                        }}
                      >
                        <div className="p-1 flex flex-row justify-between grow">
                          <p className="code text-gray-900">{`scoop bucket add ${program.scoopBucket}`}</p>
                          <ClipboardCopy />
                        </div>
                      </div>
                      <div
                        className="border-2 bg-gray-100 rounded-sm flex flex-row hover:bg-gray-200 transition-colors hover:cursor-pointer"
                        onClick={() => {
                          navigator.clipboard.writeText(
                            `scoop install ${parsedName}`
                          )
                        }}
                      >
                        <div className="p-1 flex flex-row justify-between grow">
                          <p className="code text-gray-900">{`scoop install ${parsedName}`}</p>
                          <ClipboardCopy />
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex flex-col w-10 bg-gray-100 border-2 mx-2 rounded-sm justify-center align-center hover:bg-gray-200 transition-colors hover:cursor-pointer"
                      onClick={() => {
                        navigator.clipboard.writeText(
                          `scoop bucket add ${program.scoopBucket}\nscoop install ${parsedName}`
                        )
                      }}
                    >
                      <ClipboardCopy className="mx-auto" />
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-4">
                <a
                  href={program.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                >
                  <ExternalLink className="w-5 h-5" />
                  Visitar sitio web
                </a>
                {program.tutorials.length > 0 && (
                  <Link
                    to={`/program/${program.id}/tutorials`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    <BookOpen className="w-5 h-5" />
                    Ver tutoriales
                  </Link>
                )}
              </div>
            </div>

            <div>
              {program.images.length > 0 ? (
                <div className="space-y-4">
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img
                      src={program.images[0]}
                      alt={`${program.name} preview`}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  {program.images.slice(1).map((image, index) => (
                    <div
                      key={index}
                      className="rounded-lg overflow-hidden shadow-md"
                    >
                      <img
                        src={image}
                        alt={`${program.name} screenshot ${index + 2}`}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg h-64 flex items-center justify-center text-white text-6xl font-bold shadow-md">
                  {program.name.charAt(0)}
                </div>
              )}
            </div>
          </div>

          {alternativePrograms.length > 0 && (
            <div className="border-t border-gray-200 p-8 bg-gray-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Alternativas similares
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {alternativePrograms.map((alt) => (
                  <Link
                    key={alt.id}
                    to={`/program/${alt.id}`}
                    className="bg-white rounded-lg p-5 shadow-md hover:shadow-xl transition-shadow group"
                  >
                    <h4 className="text-lg font-bold text-gray-800 group-hover:text-indigo-600 transition-colors mb-2">
                      {alt.name}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {alt.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
