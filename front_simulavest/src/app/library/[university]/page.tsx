"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Link from "next/link";
import { Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ExamPhase {
  id: string;
  name: string;
}

export default function UniversityExamPage({
  params,
}: {
  params: { university: string };
}) {
  const router = useRouter();
  const [selectedPhase, setSelectedPhase] = useState<string>("fase1");
  const [time, setTime] = useState<string>("");
  const [questions, setQuestions] = useState<string>("");
  const [day, setDay] = useState<string>("1");

  // Get university details based on the URL parameter
  const university = params.university.toLowerCase();

  // University data mapping
  const universityData: Record<
    string,
    { name: string; fullName: string; logo: string; year: string }
  > = {
    fuvest: {
      name: "Fuvest",
      fullName: "Universidade de São Paulo",
      logo: "/fuvest.svg",
      year: "2023",
    },
    ufpa: {
      name: "UFPA",
      fullName: "Universidade Federal do Pará",
      logo: "/ufpa.svg",
      year: "2023",
    },
    unesp: {
      name: "Unesp",
      fullName: "Universidade Estadual Paulista",
      logo: "/unesp.svg",
      year: "2023",
    },
    unicamp: {
      name: "Unicamp",
      fullName: "Universidade Estadual de Campinas",
      logo: "/unicamp.svg",
      year: "2023",
    },
    ufpr: {
      name: "UFPR",
      fullName: "Universidade Federal do Paraná",
      logo: "/ufpr.png",
      year: "2023",
    },
    uea: {
      name: "UEA",
      fullName: "Universidade do Estado do Amazonas",
      logo: "/uea.png",
      year: "2023",
    },
    uepa: {
      name: "UEPA",
      fullName: "Universidade Estadual do Pará",
      logo: "/uepa.jpg",
      year: "2023",
    },
    uerj: {
      name: "UERJ",
      fullName: "Universidade Estadual do Rio de Janeiro",
      logo: "/uerj.png",
      year: "2023",
    },
    uneb: {
      name: "UNEB",
      fullName: "Universidade do Estado da Bahia",
      logo: "/uneb.svg",
      year: "2023",
    },
    ufsc: {
      name: "UFSC",
      fullName: "Universidade Federal de Santa Catarina",
      logo: "/ufsc.svg",
      year: "2023",
    },
    enem: {
      name: "ENEM",
      fullName: "Exame Nacional do Ensino Médio",
      logo: "/enem.webp",
      year: "2023",
    },
    est: {
      name: "EST",
      fullName: "Faculdade EST",
      logo: "/est.svg",
      year: "2023",
    },
    famerp: {
      name: "FAMERP",
      fullName: "Faculdade de Medicina de São José do Rio Preto",
      logo: "/famerp.svg",
      year: "2023",
    },
    fdv: {
      name: "FDV",
      fullName: "Instituto de Ensino Superior de Vitória",
      logo: "/fdv.svg",
      year: "2023",
    },
    ime: {
      name: "IME",
      fullName: "Instituto Militar de Engenharia",
      logo: "/ime.svg",
      year: "2023",
    },
    ita: {
      name: "ITA",
      fullName: "Instituto Tecnologico de Aeronáutica",
      logo: "/ita.jpg",
      year: "2023",
    },
    mackenzie: {
      name: "MACKENZIE",
      fullName: "Universidade Presbiteriana Mackenzie",
      logo: "/mackenzie.svg",
      year: "2023",
    },
    mandic: {
      name: "SÃO LEOPOLDO MANDIC",
      fullName: "A Faculdade de Medicina e Odontologia São Leopoldo Mandic",
      logo: "/mandic.webp",
      year: "2023",
    },
    puccampinas: {
      name: "PUC CAMPINAS",
      fullName: "Pontifícia Universidade Católica de Campinas",
      logo: "/Puc-Camp.png",
      year: "2023",
    },
    pucgoias: {
      name: "PUC GOIÁS",
      fullName: "Pontifícia Universidade Católica de Goiás",
      logo: "/Puc-Goias.png",
      year: "2023",
    },
    pucminas: {
      name: "PUC MINAS",
      fullName: "Pontifícia Universidade Católica de Minas Gerais",
      logo: "/Puc-minas.png",
      year: "2023",
    },
    pucrs: {
      name: "PUC RIO GRANDE DO SUL",
      fullName: "Pontifícia Universidade Católica do Rio Grande do Sul",
      logo: "/PUC-RS.png",
      year: "2023",
    },
    pucsp: {
      name: "PUC SÃO PAULO",
      fullName: "Pontifícia Universidade Católica de São Paulo",
      logo: "/Puc-SP.svg",
      year: "2023",
    },
    uem: {
      name: "UEM",
      fullName: "Universidade Estadual de Maringá",
      logo: "/uem.jpg",
      year: "2023",
    },
    uenf: {
      name: "UENF",
      fullName: "Universidade Estadual do Norte Fluminense Darcy Ribeiro",
      logo: "/uenf.jpg",
      year: "2023",
    },
    ufabc: {
      name: "UFABC",
      fullName: "Universidade Federal do ABC",
      logo: "/ufabc.png",
      year: "2023",
    },
    ufba: {
      name: "UFBA",
      fullName: "Universidade Federal da Bahia",
      logo: "/Ufba.png",
      year: "2023",
    },
    ufc: {
      name: "UFC",
      fullName: "Universidade Federal do Ceará",
      logo: "/Ufc.png",
      year: "2023",
    },
    ufcspa: {
      name: "UFCSPA",
      fullName: "Universidade Federal de Ciências da Saúde de Porto Alegre",
      logo: "/ufcspa.jpg",
      year: "2023",
    },
    uff: {
      name: "UFF",
      fullName: "Universidade Federal Fluminense",
      logo: "/uff.png",
      year: "2023",
    },
    ufg: {
      name: "UFG",
      fullName: "Universidade Federal de Goiás Campus Samambaia",
      logo: "/Ufg.png",
      year: "2023",
    },
    ufjf: {
      name: "UFJF",
      fullName: "Universidade Federal de Juiz de Fora",
      logo: "/ufjf.png",
      year: "2023",
    },
    ufla: {
      name: "UFLA",
      fullName: "Universidade Federal de Lavras",
      logo: "/ufla.svg",
      year: "2023",
    },
    ufmg: {
      name: "UFMG",
      fullName: "Universidade Federal de Minas Gerais",
      logo: "/Ufmg.svg",
      year: "2023",
    },
    ufms: {
      name: "UFMS",
      fullName: "Universidade Federal de Mato Grosso do Sul",
      logo: "/Ufms.svg",
      year: "2023",
    },
    ufpe: {
      name: "UFPE",
      fullName: "Universidade Federal de Pernambuco",
      logo: "/Ufpe.svg",
      year: "2023",
    },
    ufrgs: {
      name: "UFRGS",
      fullName: "Universidade Federal do Rio Grande do Sul",
      logo: "/Ufrgs.svg",
      year: "2023",
    },
    ufrj: {
      name: "UFRJ",
      fullName: "Universidade Federal do Rio de Janeiro",
      logo: "/ufrj.svg",
      year: "2023",
    },
    ufrn: {
      name: "UFRN",
      fullName: "Universidade Federal do Rio Grande do Norte",
      logo: "/Ufrn.PNG",
      year: "2023",
    },
    ufs: {
      name: "UFS",
      fullName: "Universidade Federal de Sergipe",
      logo: "/ufs.jpg",
      year: "2023",
    },
  };

  const currentUniversity = universityData[university] || {
    name: "Unknown",
    fullName: "Unknown University",
    logo: "/placeholder.svg",
    year: "2023",
  };

  const examPhases: ExamPhase[] = [
    { id: "fase1", name: "1ª Fase" },
    { id: "fase2", name: "2ª Fase" },
  ];

  const handleStartExam = () => {
    // Validate inputs
    if (!time) {
      alert("Por favor, preencha o campo de tempo.");
      return;
    }

    if (selectedPhase === "fase1" && !questions) {
      alert("Por favor, preencha o campo de quantidade de questões.");
      return;
    }

    // Navigate to the exam simulation page with appropriate parameters
    if (selectedPhase === "fase1") {
      router.push(
        `/simulation/${university}?phase=${selectedPhase}&time=${time}&questions=${questions}`
      );
    } else {
      router.push(
        `/simulation/${university}?phase=${selectedPhase}&time=${time}&day=${day}`
      );
    }
  };

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
                <Link href="/library">
                  <Image
                    src="/Brazil-flag.svg"
                    alt="Brasil"
                    width={32}
                    height={24}
                    className="rounded"
                  />
                  <span>Brasil</span>
                </Link>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <Link href="/Em-DEV">
                  <Image
                    src="/USA-flag.svg"
                    alt="EUA"
                    width={32}
                    height={24}
                    className="rounded"
                  />
                  <span>EUA</span>
                </Link>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <Link href="/Em-DEV">
                  <Image
                    src="/Canada-flag.svg"
                    alt="Canadá"
                    width={32}
                    height={24}
                    className="rounded"
                  />
                  <span>Canadá</span>
                </Link>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <Link href="/Em-DEV">
                  <Image
                    src="/Europe-flag.svg"
                    alt="Europa"
                    width={32}
                    height={24}
                    className="rounded"
                  />
                  <span>Europa</span>
                </Link>
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
                      className={`flex items-center gap-2 px-4 py-2 rounded-md ${selectedPhase === phase.id
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
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tempo (minutos)
                </label>
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Quantidade de questões
                  </label>
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Dia
                  </label>
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
  );
}
