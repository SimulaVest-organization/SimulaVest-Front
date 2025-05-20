import Header from "@/components/Header";
import { Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
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
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <Image src="/Brazil-flag.svg" alt="Brasil" width={32} height={24} className="rounded" />
                <span>Brasil</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <Image src="/Usa-flag.svg" alt="EUA" width={32} height={24} className="rounded" />
                <span>EUA</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <Image src="/Canada-flag.svg" alt="Canadá" width={32} height={24} className="rounded" />
                <span>Canadá</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <Image src="/Europe-flag.svg" alt="Europa" width={32} height={24} className="rounded" />
                <span>Europa</span>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1">
            {/* Welcome message */}
            <div className="mb-8 text-center">
              <h1 className="text-2xl font-bold">Seja Bem-vindo à Plataforma Educacional</h1>
              <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Link href="/library" className="text-blue-600 hover:text-blue-800 font-medium">
                  Biblioteca de Desafios →
                </Link>
              </div>
            </div>

            {/* Subject selection */}
            <div className="mb-12">
              <h2 className="text-xl font-medium mb-6">Selecione a matéria</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
                <SubjectIcon name="Matemática" icon="/math-icon.png" formula="1x-(2-5y+2x)=(x+5)/5" />
                <SubjectIcon name="Física" icon="/physics-icon.png" formula="PV=nRT" />
                <SubjectIcon name="Química" icon="/chemistry-icon.png" formula="H2O" />
                <SubjectIcon name="Biologia" icon="/biology-icon.png" formula="DNA" />
                <SubjectIcon name="História" icon="/history-icon.png" />
                <SubjectIcon name="Geografia" icon="/geography-icon.png" />
                <SubjectIcon name="Filosofia" icon="/philosophy-icon.png" />
              </div>
            </div>

            {/* Statistics */}
            <div>
              <h2 className="text-xl font-medium mb-6">Conheça as estatísticas</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <StatCard position="1st" />
                <StatCard position="2nd" />
                <StatCard position="3rd" />
                <StatCard position="4t" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SubjectIcon({ name, icon, formula }: { name: string; icon: string; formula?: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-2 relative overflow-hidden">
        <Image src={icon || "/placeholder.svg"} alt={name} width={40} height={40} />
        {formula && (
          <div className="absolute inset-0 flex items-center justify-center text-[8px] font-mono opacity-30">
            {formula}
          </div>
        )}
      </div>
      <span className="text-sm">{name}</span>
    </div>
  )
}

function StatCard({ position }: { position: string }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
      <div className="flex items-center justify-center space-x-2 mb-2">
        <div className="w-8 h-8 bg-gray-300 rounded-sm"></div>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
      <span className="text-sm font-medium">{position}</span>
    </div>
  )
}