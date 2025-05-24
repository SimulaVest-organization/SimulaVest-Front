"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import Header from "@/components/Header"
import { Link } from "lucide-react"
import { Plus } from "lucide-react";

interface Question {
  id: number
  text: string
  options: string[]
  correctAnswer?: number
}

export default function SimulationPage({ params }: { params: { university: string } }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const university = params.university
  const phase = searchParams.get("phase") || "fase1"
  const totalTime = Number.parseInt(searchParams.get("time") || "90")
  const totalQuestions = Number.parseInt(searchParams.get("questions") || "10")
  const day = searchParams.get("day") || "1"

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [timeRemaining, setTimeRemaining] = useState(totalTime * 60) // Convert to seconds

  // Sample questions (in a real app, these would come from an API)
  const questions: Question[] = [
    {
      id: 1,
      text: "Write two different reactions related to the decomposition of CaCO3 (s)",
      options: ["Metáfora", "Trocadilho", "Sinédoque", "Eufemismo", "Comparação"],
      correctAnswer: 1,
    },
    {
      id: 2,
      text: "Qual é a capital do Brasil?",
      options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador", "Belo Horizonte"],
      correctAnswer: 2,
    },
    {
      id: 3,
      text: "Qual é o valor de π (pi) arredondado para duas casas decimais?",
      options: ["3.12", "3.14", "3.16", "3.18", "3.20"],
      correctAnswer: 1,
    },
  ]

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          // Handle time's up scenario
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Format time remaining as minutes:seconds
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      // Handle end of exam
      alert("Fim do simulado!")
      router.push("/")
    }
  }

  // Get university details
  const universityData: Record<string, { name: string; year: string }> = {
    fuvest: { name: "FUVEST", year: "2023" },
    ufpa: { name: "UFPA", year: "2023" },
    unesp: { name: "UNESP", year: "2023" },
    unicamp: { name: "UNICAMP", year: "2023" },
    ufpr: { name: "UFPR", year: "2023" },
    uea: { name: "UEA", year: "2023" },
    uepa: { name: "UEPA", year: "2023" },
    uerj: { name: "UERJ", year: "2023" },
    uneb: { name: "UNEB", year: "2023" },
    ufsc: { name: "UFSC", year: "2023" },
  }

  const currentUniversity = universityData[university] || { name: "Unknown", year: "2023" }

  // Display phase and day information
  const phaseDisplay = phase === "fase1" ? "1ª Fase" : `2ª Fase - Dia ${day}`

  return (
    <div className="min-h-screen bg-white">
      {/* Header component */}
      <Header />

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left sidebar - Countries */}
          <div className="w-full md:w-1/5">
            <div className="flex justify-center mb-6">
              <Link href="/create">
                <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white shadow-md">
                  <Plus className="w-6 h-6" />
                </button>
              </Link>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-100 cursor-pointer">
                <Link href="library">
                  <Image src="/images/brazil-flag.png" alt="Brasil" width={32} height={24} className="rounded" />
                  <span>Brasil</span>
                </Link>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <Link href="Em-DEV">
                  <Image src="/images/usa-flag.png" alt="EUA" width={32} height={24} className="rounded" />
                  <span>EUA</span>
                </Link>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <Link href="Em-DEV">
                  <Image src="/images/canada-flag.png" alt="Canadá" width={32} height={24} className="rounded" />
                  <span>Canadá</span>
                </Link>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <Link href="Em-DEV">
                  <Image src="/images/europe-flag.png" alt="Europa" width={32} height={24} className="rounded" />
                  <span>Europa</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1">
            {/* Exam header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-xl font-bold">
                  {currentUniversity.name} {currentUniversity.year}
                </h1>
                <p className="text-sm text-gray-600">{phaseDisplay}</p>
              </div>
              <div className="text-sm font-medium">
                Tempo (restante) = <span className="text-blue-600">{formatTime(timeRemaining)} minutos</span>
              </div>
            </div>

            {/* Question */}
            <div className="bg-white border rounded-lg p-6 mb-6 shadow-sm">
              <h2 className="text-lg font-medium mb-4">Questão {currentQuestion + 1}</h2>
              <p className="mb-6">{questions[currentQuestion]?.text}</p>

              {/* Example of a chemistry question with additional content */}
              {currentQuestion === 0 && (
                <div className="mb-6 space-y-4">
                  <div className="p-4 bg-gray-50 rounded-md">
                    <p className="font-medium mb-2">a) Reaction 1 to decompose CaCO3(s) (with heat):</p>
                    <p className="italic text-gray-600">Surprised</p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-md">
                    <p className="font-medium mb-2">b) Reaction 2 to decompose CaCO3(s) (with diluted acid):</p>
                    <p className="italic text-gray-600">Astonished</p>
                  </div>

                  <p className="font-medium">
                    No meme, a inadequação da resposta à questão está baseada no efeito de sentido proveniente da
                    presença de
                  </p>
                </div>
              )}

              {/* Answer options */}
              <div className="space-y-3">
                {questions[currentQuestion]?.options.map((option, index) => (
                  <div
                    key={index}
                    className={`p-3 border rounded-md cursor-pointer ${selectedAnswer === index ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:bg-gray-50"
                      }`}
                    onClick={() => setSelectedAnswer(index)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-end">
              <button
                onClick={handleNextQuestion}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
              >
                Próximo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
