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
            <h2 className="text-lg font-medium mb-4">Países</h2>
            <div className="space-y-4">
              <Link href="/library">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <Image
                    src="/Brazil-flag.svg"
                    alt="Brasil"
                    width={32}
                    height={24}
                    className="rounded"
                  />
                  <span>Brasil</span>
                </div>
              </Link>
              <Link href="/Em-DEV">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <Image
                    src="/Usa-flag.svg"
                    alt="EUA"
                    width={32}
                    height={24}
                    className="rounded"
                  />
                  <span>EUA</span>
                </div>
              </Link>
              <Link href="/Em-DEV">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <Image
                    src="/Canada-flag.svg"
                    alt="Canadá"
                    width={32}
                    height={24}
                    className="rounded"
                  />
                  <span>Canadá</span>
                </div>
              </Link>
              <Link href="/Em-DEV">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <Image
                    src="/Europe-flag.svg"
                    alt="Europa"
                    width={32}
                    height={24}
                    className="rounded"
                  />
                  <span>Europa</span>
                </div>
              </Link>
            </div>
          </div>
            {/* Main content - Under Development Message */}
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center p-12 bg-gray-50 rounded-xl border border-gray-200 max-w-lg">
                <Construction
                  size={64}
                  className="mx-auto text-blue-500 mb-6"
                />
                <h1 className="text-3xl font-bold mb-4 text-gray-800">
                  Em Desenvolvimento
                </h1>
                <p className="text-gray-600 mb-6">
                  Esta funcionalidade está sendo implementada e estará
                  disponível em breve. Agradecemos sua paciência!
                </p>
                <Link href="/">
                  <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
                    Voltar para a página inicial
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

import { Construction } from "lucide-react";
