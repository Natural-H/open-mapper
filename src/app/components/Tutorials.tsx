import { useState, useRef, useEffect } from 'react'
import { Link, useParams } from 'react-router'
import { ArrowLeft, ChevronRight, ChevronLeft } from 'lucide-react'
import { programs } from '../data/programs'

export default function Tutorials() {
  const { id } = useParams<{ id: string }>()
  const program = programs.find((p) => p.id === id)
  const [selectedTutorial, setSelectedTutorial] = useState(0)
  const [activeStep, setActiveStep] = useState<string>('')
  const stepRefs = useRef<(HTMLElement | null)[]>([])
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    stepRefs.current = stepRefs.current.slice(0, currentTutorial?.steps.length ?? 0)
  }, [selectedTutorial])

  useEffect(() => {
    setActiveStep('')
    if (contentRef.current) contentRef.current.scrollTop = 0
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [selectedTutorial])

  useEffect(() => {
    if (currentTutorial?.steps.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveStep(entry.target.id)
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0.1 }
    )
    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })
    return () => observer.disconnect()
  }, [selectedTutorial])

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
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

  if (program.tutorials.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="border-b border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <Link
              to={`/program/${program.id}`}
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a {program.name}
            </Link>
          </div>
        </header>
        <main className="max-w-3xl mx-auto px-6 py-16 text-center">
          <p className="text-gray-500 text-lg">
            Aún no hay tutoriales disponibles para {program.name}.
          </p>
        </main>
      </div>
    )
  }

  const currentTutorial = program.tutorials[selectedTutorial]

  const scrollToStep = (index: number) => {
    const el = document.getElementById(`step-${index}`)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link
            to={`/program/${program.id}`}
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {program.name}
          </Link>
          <span className="text-sm text-gray-400 font-mono">
            {program.name} — Tutoriales
          </span>
        </div>
      </header>

      <div className="max-w-7xl mx-auto">
        <div className="flex">
          <aside className="hidden lg:block w-64 flex-shrink-0 border-r border-gray-200 bg-white">
            <div className="sticky top-0 overflow-y-auto max-h-screen py-6 px-4">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
                Tutoriales
              </h3>
              <nav className="space-y-0.5">
                {program.tutorials.map((tutorial, index) => (
                  <button
                    key={tutorial.id}
                    onClick={() => setSelectedTutorial(index)}
                    className={`w-full text-left px-3 py-2 rounded-r-sm text-sm transition-colors relative ${
                      selectedTutorial === index
                        ? 'text-indigo-700 bg-indigo-50 font-medium'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {selectedTutorial === index && (
                      <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-indigo-600 rounded-full" />
                    )}
                    {tutorial.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          <main ref={contentRef} className="flex-1 min-w-0">
            <div className="max-w-3xl mx-auto px-6 py-10">
              <div className="mb-2">
                {selectedTutorial > 0 && (
                  <button
                    onClick={() => setSelectedTutorial(selectedTutorial - 1)}
                    className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    {program.tutorials[selectedTutorial - 1]?.title}
                  </button>
                )}
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                {currentTutorial.title}
              </h1>
              <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                {currentTutorial.content}
              </p>

              {currentTutorial.steps.length === 0 ? (
                <p className="text-gray-400">No hay pasos definidos para este tutorial.</p>
              ) : (
                <div className="space-y-10">
                  {currentTutorial.steps.map((step, index) => (
                    <section
                      key={index}
                      id={`step-${index}`}
                      ref={(el) => {
                        stepRefs.current[index] = el
                      }}
                      className="scroll-mt-20"
                    >
                      <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-3">
                        <span className="flex items-center justify-center w-7 h-7 rounded-md bg-indigo-100 text-indigo-700 text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </span>
                        Paso {index + 1}
                      </h2>
                      <div className="bg-gray-900 text-gray-100 rounded-lg p-5 font-mono text-sm leading-relaxed whitespace-pre-wrap">
                        {step}
                      </div>
                    </section>
                  ))}
                </div>
              )}

              <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between">
                {selectedTutorial > 0 ? (
                  <button
                    onClick={() => setSelectedTutorial(selectedTutorial - 1)}
                    className="group inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
                    <div className="text-left">
                      <div className="text-xs text-gray-400">Anterior</div>
                      <div className="font-medium">
                        {program.tutorials[selectedTutorial - 1]?.title}
                      </div>
                    </div>
                  </button>
                ) : (
                  <div />
                )}
                {selectedTutorial < program.tutorials.length - 1 ? (
                  <button
                    onClick={() => setSelectedTutorial(selectedTutorial + 1)}
                    className="group inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors text-right"
                  >
                    <div>
                      <div className="text-xs text-gray-400">Siguiente</div>
                      <div className="font-medium">
                        {program.tutorials[selectedTutorial + 1]?.title}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </main>

          {currentTutorial.steps.length > 0 && (
            <aside className="hidden xl:block w-56 flex-shrink-0">
              <div className="sticky top-0 overflow-y-auto max-h-screen py-10 px-4">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  En esta página
                </h3>
                <nav className="space-y-1">
                  {currentTutorial.steps.map((step, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToStep(index)}
                      className={`block w-full text-left text-sm py-1.5 px-3 rounded transition-colors ${
                        activeStep === `step-${index}`
                          ? 'text-indigo-700 bg-indigo-50 font-medium'
                          : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100'
                      }`}
                    >
                      Paso {index + 1}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  )
}
