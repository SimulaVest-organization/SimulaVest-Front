import Image from "next/image"
import { Plus } from "lucide-react";
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Header from "@/components/Header"

export default function LibraryPage() {
  // Years for the filter
  const years = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014]

  // Universities data
  const universities = [
    { name: "FUVEST", logo: "/fuvest.svg", fullName: "Universidade de São Paulo" },
    { name: "UFPA", logo: "/ufpa.svg", fullName: "Universidade Federal do Pará" },
    { name: "UNESP", logo: "/unesp.svg", fullName: "Universidade Estadual Paulista" },
    { name: "UNICAMP", logo: "/unicamp.svg", fullName: "Universidade Estadual de Campinas" },
    { name: "UFPR", logo: "/ufpr.png", fullName: "Universidade Federal do Paraná" },
    { name: "UEA", logo: "/uea.png", fullName: "Universidade do Estado do Amazonas" },
    { name: "UEPA", logo: "/uepa.jpg", fullName: "Universidade Estadual do Pará" },
    { name: "UNEB", logo: "/uneb.svg", fullName: "Universidade do Estado da Bahia" },
    { name: "UFSC", logo: "/ufsc.svg", fullName: "Universidade Federal de Santa Catarina" },
    { name: "ENEM", logo: "/enem.webp", fullName: "Exame Nacional do Ensino Médio" },
    { name: "EST", logo: "/est.svg", fullName: "Faculdade EST" },
    { name: "FAMERP", logo: "/famerp.svg", fullName: "Faculdade de Medicina de São José do Rio Preto" },
    { name: "FDV", logo: "/fdv.svg", fullName: "Instituto de Ensino Superior de Vitória" },
    { name: "IME", logo: "/ime.svg", fullName: "Instituto Militar de Engenharia" },
    { name: "ITA", logo: "/ita.jpg", fullName: "Instituto Tecnologico de Aeronáutica" },
    { name: "MACKENZIE", logo: "/mackenzie.svg", fullName: "Universidade Presbiteriana Mackenzie" },
    { name: "SÃO LEOPOLDO MANDIC", logo: "/mandic.webp", fullName: "A Faculdade de Medicina e Odontologia São Leopoldo Mandic" },
    { name: "PUC CAMPINAS", logo: "/Puc-Camp.png", fullName: "Pontifícia Universidade Católica de Campinas" },
    { name: "PUC GOIÁS", logo: "/Puc-Goias.png", fullName: "Pontifícia Universidade Católica de Goiás" },
    { name: "PUC MINAS", logo: "/Puc-minas.png", fullName: "Pontifícia Universidade Católica de Minas Gerais" },
    { name: "PUC RIO GRANDE DO SUL", logo: "/PUC-RS.png", fullName: "Pontifícia Universidade Católica do Rio Grande do Sul" },
    { name: "PUC SÃO PAULO", logo: "/Puc-SP.svg", fullName: "Pontifícia Universidade Católica de São Paulo" },
    { name: "UEM", logo: "/uem.jpg", fullName: "Universidade Estadual de Maringá" },
    { name: "UENF", logo: "/uenf.jpg", fullName: "Universidade Estadual do Norte Fluminense Darcy Ribeiro" },
    { name: "UERJ", logo: "/uerj.png", fullName: "Universidade do Estado do Rio de Janeiro" },
    { name: "UFABC", logo: "/ufabc.png", fullName: "Universidade Federal do ABC" },
    { name: "UFBA", logo: "/Ufba.png", fullName: "Universidade Federal da Bahia" },
    { name: "UFC", logo: "/Ufc.png", fullName: "Universidade Federal do Ceará" },
    { name: "UFCSPA", logo: "/ufcspa.jpg", fullName: "Universidade Federal de Ciências da Saúde de Porto Alegre" },
    { name: "UFF", logo: "/uff.png", fullName: "Universidade Federal Fluminense" },
    { name: "UFG", logo: "/Ufg.png", fullName: "Universidade Federal de Goiás Campus Samambaia" },
    { name: "UFJF", logo: "/ufjf.png", fullName: "Universidade Federal de Juiz de Fora" },
    { name: "UFLA", logo: "/ufla.svg", fullName: "Universidade Federal de Lavras" },
    { name: "UFMG", logo: "/Ufmg.svg", fullName: "Universidade Federal de Minas Gerais" },
    { name: "UFMS", logo: "/Ufms.svg", fullName: "Universidade Federal de Mato Grosso do Sul" },
    { name: "UFPA", logo: "/ufpa.svg", fullName: "Universidade Federal do Pará" },
    { name: "UFPE", logo: "/Ufpe.svg", fullName: "Universidade Federal de Pernambuco" },
    { name: "UFRGS", logo: "/Ufrgs.svg", fullName: "Universidade Federal do Rio Grande do Sul" },
    { name: "UFRJ", logo: "/ufrj.svg", fullName: "Universidade Federal do Rio de Janeiro" },
    { name: "UFRN", logo: "/Ufrn.PNG", fullName: "Universidade Federal do Ceará" },
    { name: "UFS", logo: "/ufs.jpg", fullName: "Universidade Federal de Ciências da Saúde de Porto Alegre" },
    { name: "UFSC", logo: "/UFSC.svg", fullName: "Universidade Federal Fluminense" },
    { name: "UFU", logo: "/ufu.png", fullName: "Universidade Federal de Goiás Campus Samambaia" },
    { name: "UFV", logo: "/Ufv.png", fullName: "Universidade Federal de Juiz de Fora" },
    { name: "UNEB", logo: "/uneb.svg", fullName: "Universidade Federal de Lavras" },
    { name: "UNESP", logo: "/Unesp.svg", fullName: "Universidade Federal de Minas Gerais" },
    { name: "UNICAMP", logo: "/unicamp.svg", fullName: "Universidade Federal de Mato Grosso do Sul" },
    { name: "UNICHRISTUS", logo: "/unichristus.svg", fullName: "Universidade Federal do Pará" },
    { name: "UNIFESP", logo: "/Unifesp.svg", fullName: "Universidade Federal do Rio Grande do Sul" },
  ]

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
                  <Image src="/Brazil-flag.svg" alt="Brasil" width={32} height={24} className="rounded" />
                  <span>Brasil</span>
                </Link>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <Link href="/Em-DEV">
                  <Image src="/USA-flag.svg" alt="EUA" width={32} height={24} className="rounded" />
                  <span>EUA</span>
                </Link>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <Link href="/Em-DEV">
                  <Image src="/Canada-flag.svg" alt="Canadá" width={32} height={24} className="rounded" />
                  <span>Canadá</span>
                </Link>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <Link href="/Em-DEV">
                  <Image src="/Europe-flag.svg" alt="Europa" width={32} height={24} className="rounded" />
                  <span>Europa</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1">
            {/* Title */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold">Conheça os seus desafios</h1>
            </div>

            {/* Year filter */}
            <div className="mt-8 mb-4">
              <h3 className="text-sm font-medium text-gray-500 mb-3">Ano</h3>
              <div className="flex flex-wrap space-x-2">
                {years.map((year) => (
                  <div
                    key={year}
                    className={`px-3 py-1.5 rounded-md cursor-pointer text-sm ${year === 2023 ? "bg-blue-100 text-blue-700 font-medium" : "hover:bg-gray-100"
                      }`}
                  >
                    {year}
                  </div>
                ))}
              </div>
            </div>

            {/* Institution filter */}
            <div className="mb-8">
              <div className="flex items-center">
                <span className="mr-2 text-sm font-medium">Instituição:</span>
                <Select defaultValue="todas">
                  <SelectTrigger className="w-[180px] h-8 text-sm">
                    <SelectValue placeholder="Todas" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todas">Todas</SelectItem>
                    <SelectItem value="particualr">Particular</SelectItem>
                    <SelectItem value="estadual">Estadual</SelectItem>
                    <SelectItem value="federal">Federal</SelectItem>
                    <SelectItem value="militar">Militar</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* University grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {universities.map((university) => (
                <Link href={`/library/${university.name.toLowerCase()}`} key={university.name}>
                  <div className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow flex flex-col items-center text-center h-full">
                    <div className="h-20 flex items-center justify-center mb-3">
                      <Image
                        src={university.logo || "/placeholder.svg"}
                        alt={university.name}
                        width={80}
                        height={80}
                        className="object-contain max-h-20"
                      />
                    </div>
                    <h3 className="font-medium text-sm">{university.name}</h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">{university.fullName}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
