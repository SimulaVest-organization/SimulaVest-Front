import Image from "next/image"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Header from "@/components/Header"

export default function LibraryPage() {
  // Years for the filter
  const years = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014]

  // Universities data
  const universities = [
    { name: "Fuvest", logo: "/images/fuvest-logo.png", fullName: "Universidade de São Paulo" },
    { name: "UFPA", logo: "/images/ufpa-logo.png", fullName: "Universidade Federal do Pará" },
    { name: "Unesp", logo: "/images/unesp-logo.png", fullName: "Universidade Estadual Paulista" },
    { name: "Unicamp", logo: "/images/unicamp-logo.png", fullName: "Universidade Estadual de Campinas" },
    { name: "UFPR", logo: "/images/ufpr-logo.png", fullName: "Universidade Federal do Paraná" },
    { name: "UEA", logo: "/images/uea-logo.png", fullName: "Universidade do Estado do Amazonas" },
    { name: "UEPA", logo: "/images/uepa-logo.png", fullName: "Universidade Estadual do Pará" },
    { name: "UERJ", logo: "/images/uerj-logo.png", fullName: "Universidade Estadual do Rio de Janeiro" },
    { name: "UNEB", logo: "/images/uneb-logo.png", fullName: "Universidade do Estado da Bahia" },
    { name: "UFSC", logo: "/images/ufsc-logo.png", fullName: "Universidade Federal de Santa Catarina" },
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
            <div className="space-y-4 mb-8">
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
                    className={`px-3 py-1.5 rounded-md cursor-pointer text-sm ${
                      year === 2023 ? "bg-blue-100 text-blue-700 font-medium" : "hover:bg-gray-100"
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
