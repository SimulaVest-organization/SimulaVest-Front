"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { CheckCircle2 } from "lucide-react"
import Header from "@/components/Header"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ExamPhase {
  id: string
  name: string
}

export default function UniversityExamPage({ params }: { params: { university: string } }) {
  const router = useRouter()
  const [selectedPhase, setSelectedPhase] = useState<string>("fase1")
  const [time, setTime] = useState<string>("")
  const [questions, setQuestions] = useState<string>("")
  const [day, setDay] = useState<string>("1")

  // Get university details based on the URL parameter
  const university = params.university.toLowerCase()

  // University data mapping
  const universityData: Record<string, { name: string; fullName: string; logo: string; year: string }> = {
    fuvest: {
      name: "Fuvest",
      fullName: "Universidade de São Paulo",
      logo: "/images/fuvest-logo.png",
      year: "2023",
    },
    ufpa: {
      name: "UFPA",
      fullName: "Universidade Federal do Pará",
      logo: "/images/ufpa-logo.png",
      year: "2023",
    },
    unesp: {
      name: "Unesp",
      fullName: "Universidade Estadual Paulista",
      logo: "/images/unesp-logo.png",
      year: "2023",
    },
    unicamp: {
      name: "Unicamp",
      fullName: "Universidade Estadual de Campinas",
      logo: "/images/unicamp-logo.png",
      year: "2023",
    },
    ufpr: {
      name: "UFPR",
      fullName: "Universidade Federal do Paraná",
      logo: "/images/ufpr-logo.png",
      year: "2023",
    },
    uea: {
      name: "UEA",
      fullName: "Universidade do Estado do Amazonas",
      logo: "/images/uea-logo.png",
      year: "2023",
    },
    uepa: {
      name: "UEPA",
      fullName: "Universidade Estadual do Pará",
      logo: "/images/uepa-logo.png",
      year: "2023",
    },
    uerj: {
      name: "UERJ",
      fullName: "Universidade Estadual do Rio de Janeiro",
      logo: "/images/uerj-logo.png",
      year: "2023",
    },
    uneb: {
      name: "UNEB",
      fullName: "Universidade do Estado da Bahia",
      logo: "/images/uneb-logo.png",
      year: "2023",
    },
    ufsc: {
      name: "UFSC",
      fullName: "Universidade Federal de Santa Catarina",
      logo: "/images/ufsc-logo.png",
      year: "2023",
    },
  }

  const currentUniversity = universityData[university] || {
    name: "Unknown",
    fullName: "Unknown University",
    logo: "/placeholder.svg",
    year: "2023",
  }

  const examPhases: ExamPhase[] = [
    { id: "fase1", name: "1ª Fase" },
    { id: "fase2", name: "2ª Fase" },
  ]

  const handleStartExam = () => {
    // Validate inputs
    if (!time) {
      alert("Por favor, preencha o campo de tempo.")
      return
    }

    if (selectedPhase === "fase1" && !questions) {
      alert("Por favor, preencha o campo de quantidade de questões.")
      return
    }

    // Navigate to the exam simulation page with appropriate parameters
    if (selectedPhase === "fase1") {
      router.push(`/simulation/${university}?phase=${selectedPhase}&time=${time}&questions=${questions}`)
    } else {
      router.push(`/simulation/${university}?phase=${selectedPhase}&time=${time}&day=${day}`)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header component */}
      <Header />

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left sidebar - Countries */}
          <div className="w-full md:w-1/5">
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-100 cursor-pointer">
                <Image src="/images/brazil-flag.png" alt="Brasil" width={32} height={24} className="rounded" />
                <span>Brasil</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <Image src="/images/usa-flag.png" alt="EUA" width={32} height={24} className="rounded" />
                <span>EUA</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <Image src="/images/canada-flag.png" alt="Canadá" width={32} height={24} className="rounded" />
                <span>Canadá</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <Image src="/images/europe-flag.png" alt="Europa" width={32} height={24} className="rounded" />
                <span>Europa</span>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1">
            {/* University title and logo */}
            <div className="mb-8 flex flex-col items-center">
              <h1 className="text-2xl font-bold mb-4">
                {currentUniversity.name.toUpperCase()} {currentUniversity.year}
              </h1>
              <div className="w-32 h-32 flex items-center justify-center mb-4">
                <Image
                  src={currentUniversity.logo || "/placeholder.svg"}
                  alt={currentUniversity.name}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600">{currentUniversity.fullName}</p>
            </div>

            {/* Exam configuration */}
            <div className="max-w-md mx-auto">
              {/* Phase selection */}
              <div className="mb-6">
                <div className="flex space-x-4">
                  {examPhases.map((phase) => (
                    <button
                      key={phase.id}
                      className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                        selectedPhase === phase.id
                          ? "bg-blue-100 text-blue-700 font-medium"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                      onClick={() => setSelectedPhase(phase.id)}
                    >
                      {selectedPhase === phase.id && <CheckCircle2 size={16} />}
                      {phase.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time input */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Tempo (minutos)</label>
                <input
                  type="number"
                  placeholder="Ex: 90"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Conditional field based on selected phase */}
              {selectedPhase === "fase1" ? (
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Quantidade de questões</label>
                  <input
                    type="number"
                    placeholder="Ex: 180"
                    value={questions}
                    onChange={(e) => setQuestions(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ) : (
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Dia</label>
                  <Select value={day} onValueChange={setDay}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione o dia" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Dia 1</SelectItem>
                      <SelectItem value="2">Dia 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Start button */}
              <button
                onClick={handleStartExam}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg flex items-center justify-center shadow-sm transition-colors"
              >
                Iniciar Simulado
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
