import { useState } from 'react'
import { Link, useSearchParams } from 'react-router'
import { ArrowLeft, ClipboardCopy, Check, ExternalLink } from 'lucide-react'
import { programs } from '../data/programs'

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 transition-colors text-gray-300 hover:text-white"
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5" />
          Copiado
        </>
      ) : (
        <>
          <ClipboardCopy className="w-3.5 h-3.5" />
          Copiar
        </>
      )}
    </button>
  )
}

function CodeBlock({ code, label }: { code: string; label?: string }) {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-700">
      {label && (
        <div className="bg-gray-800 px-4 py-1.5 text-xs text-gray-400 border-b border-gray-700">
          {label}
        </div>
      )}
      <div className="bg-gray-900 px-4 py-3 flex items-center justify-between gap-4">
        <code className="text-sm text-gray-100 font-mono whitespace-pre-wrap break-all">
          {code}
        </code>
        <CopyButton text={code} />
      </div>
    </div>
  )
}

function StepCard({
  number,
  title,
  children
}: {
  number: number
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-4">
      <span className="flex items-center justify-center w-7 h-7 rounded-md bg-indigo-100 text-indigo-700 text-sm font-bold flex-shrink-0 mt-0.5">
        {number}
      </span>
      <div className="flex-1 min-w-0">
        <h3 className="text-base font-semibold text-gray-800 mb-2">{title}</h3>
        <div className="text-sm text-gray-600 leading-relaxed space-y-3">
          {children}
        </div>
      </div>
    </div>
  )
}

export default function ScoopGuide() {
  const [searchParams] = useSearchParams()
  const programId = searchParams.get('program')
  const program = programId ? programs.find((p) => p.id === programId) : null

  let parsedName = ''
  if (program?.scoopBucket) parsedName += program.scoopBucket + '/'
  if (program?.scoopName) parsedName += program.scoopName

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link
            to={program ? `/program/${program.id}` : '/'}
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {program ? program.name : 'Inicio'}
          </Link>
          <span className="text-sm text-gray-400 font-mono">
            Scoop — Guía de instalación
          </span>
        </div>
      </header>

      {program && program.scoopName && program.scoopBucket && (
        <div className="border-b border-indigo-200 bg-indigo-50">
          <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
            <p className="text-sm text-indigo-800">
              Instalar <strong>{program.name}</strong> con Scoop
            </p>
          </div>
        </div>
      )}

      <main className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Scoop: gestor de paquetes para Windows
        </h1>
        <p className="text-lg text-gray-500 mb-10 leading-relaxed">
          Scoop es un gestor de paquetes de línea de comandos para Windows que
          facilita la instalación, actualización y eliminación de programas sin
          necesidad de permisos de administrador.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-5">
              Requisitos previos
            </h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                Windows 7 SP1+ / Windows Server 2008+
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                PowerShell 5.0 (o superior, incluye PowerShell Core)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                .NET Framework 4.5+ (si usas Windows 10+ ya está incluido)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-5">
              Instalación de Scoop
            </h2>
            <div className="space-y-4">
              <StepCard number={1} title="Abrí PowerShell">
                <p>
                  Presioná <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-300 rounded text-xs font-mono">Win + X</kbd> y seleccioná{' '}
                  <strong>"Windows PowerShell"</strong> o <strong>"Terminal"</strong>.
                </p>
              </StepCard>

              <StepCard number={2} title="Configurá la política de ejecución">
                <p>
                  Scoop necesita permisos para ejecutar scripts. Ejecutá este
                  comando:
                </p>
                <div className="mt-2">
                  <CodeBlock
                    code="Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser"
                    label="PowerShell"
                  />
                </div>
              </StepCard>

              <StepCard number={3} title="Instalá Scoop">
                <p>
                  Ejecutá el siguiente comando para instalar Scoop:
                </p>
                <div className="mt-2">
                  <CodeBlock
                    code='irm get.scoop.sh | iex'
                    label="PowerShell"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1.5">
                  También podés usar: <code className="text-gray-500">iwr -useb get.scoop.sh | iex</code>
                </p>
              </StepCard>

              <StepCard number={4} title="Verificá la instalación">
                <p>Comprobá que Scoop se instaló correctamente:</p>
                <div className="mt-2">
                  <CodeBlock code="scoop --version" label="PowerShell" />
                </div>
              </StepCard>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-5">
              Comandos básicos
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-indigo-100 text-indigo-700 text-sm font-bold flex-shrink-0 mt-0.5">
                  1
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-gray-800 mb-2">
                    Buscar programas
                  </h3>
                  <CodeBlock code="scoop search <nombre>" label="PowerShell" />
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-indigo-100 text-indigo-700 text-sm font-bold flex-shrink-0 mt-0.5">
                  2
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-gray-800 mb-2">
                    Instalar un programa
                  </h3>
                  <CodeBlock code="scoop install <nombre>" label="PowerShell" />
                  <p className="text-xs text-gray-400 mt-1.5">
                    Ejemplo: <code className="text-gray-500">scoop install git</code>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-indigo-100 text-indigo-700 text-sm font-bold flex-shrink-0 mt-0.5">
                  3
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-gray-800 mb-2">
                    Agregar un bucket
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Algunos programas están en buckets adicionales. Agregalos
                    primero:
                  </p>
                  <CodeBlock
                    code="scoop bucket add <bucket>"
                    label="PowerShell"
                  />
                  <p className="text-xs text-gray-400 mt-1.5">
                    Ejemplo: <code className="text-gray-500">scoop bucket add extras</code>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-indigo-100 text-indigo-700 text-sm font-bold flex-shrink-0 mt-0.5">
                  4
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-gray-800 mb-2">
                    Listar programas instalados
                  </h3>
                  <CodeBlock code="scoop list" label="PowerShell" />
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-indigo-100 text-indigo-700 text-sm font-bold flex-shrink-0 mt-0.5">
                  5
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-gray-800 mb-2">
                    Actualizar programas
                  </h3>
                  <CodeBlock code="scoop update *" label="PowerShell" />
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-indigo-100 text-indigo-700 text-sm font-bold flex-shrink-0 mt-0.5">
                  6
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-gray-800 mb-2">
                    Desinstalar un programa
                  </h3>
                  <CodeBlock code="scoop uninstall <nombre>" label="PowerShell" />
                </div>
              </div>
            </div>
          </section>

          {program && program.scoopName && program.scoopBucket && (
            <section className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-indigo-900 mb-3">
                Instalar {program.name} con Scoop
              </h2>
              <p className="text-sm text-indigo-800 mb-4">
                Para instalar {program.name} en Windows usando Scoop, ejecutá
                estos comandos en PowerShell:
              </p>
              <div className="space-y-3">
                <CodeBlock
                  code={`scoop bucket add ${program.scoopBucket}`}
                  label="Paso 1: Agregar el bucket"
                />
                <CodeBlock
                  code={`scoop install ${parsedName}`}
                  label={`Paso 2: Instalar ${program.name}`}
                />
              </div>
            </section>
          )}

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-5">
              Más información
            </h2>
            <a
              href="https://scoop.sh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Sitio oficial de Scoop
            </a>
          </section>
        </div>
      </main>
    </div>
  )
}
