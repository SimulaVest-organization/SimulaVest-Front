"use client"

import { useState } from "react";
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus } from "lucide-react";
import Link from "next/link"
import Header from "@/components/Header"

export default function CreatePage() {
  // State to track if images have loaded successfully
  const [imagesLoaded, setImagesLoaded] = useState({
    brazil: true,
    usa: true,
    canada: true,
    europe: true,
  })

  // Handle image load errors
  const handleImageError = (country: keyof typeof imagesLoaded) => {
    setImagesLoaded((prev) => ({
      ...prev,
      [country]: false,
    }))
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
            <div className="flex justify-center mb-6">
              <Link href="/create">
                <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white shadow-md">
                  <Plus className="w-6 h-6" />
                </button>
              </Link>
            </div>
            <div className="space-y-4">
              <Link href="/library">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <Image src="/Brazil-flag.svg" alt="Brasil" width={32} height={24} className="rounded" />
                  <span>Brasil</span>
                </div>
                </Link>
              <Link href="/Em-DEV">
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <Image src="/Usa-flag.svg" alt="EUA" width={32} height={24} className="rounded" />
                <span>EUA</span>
              </div>
              </Link>
              <Link href="/Em-DEV">
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <Image src="/Canada-flag.svg" alt="Canadá" width={32} height={24} className="rounded" />
                <span>Canadá</span>
              </div>
              </Link>
              <Link href="/Em-DEV">
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <Image src="/Europe-flag.svg" alt="Europa" width={32} height={24} className="rounded" />
                <span>Europa</span>
              </div>
              </Link>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1">
            {/* Title */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold">Gerador de Simulados</h1>
            </div>

            {/* Simulation Type Tabs */}
            <Tabs defaultValue="real" className="mb-8">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="real">Simulado Real</TabsTrigger>
                <TabsTrigger value="estudo">Simulado Estudo</TabsTrigger>
              </TabsList>

              <TabsContent value="real" className="mt-6">
                <div className="space-y-6">
                  {/* University/Institution Selection */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Universidade/Instituição</label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione uma instituição" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="fuvest">FUVEST</SelectItem>
                        <SelectItem value="ufpa">UFPA</SelectItem>
                        <SelectItem value="unesp">UNESP</SelectItem>
                        <SelectItem value="unicamp">UNICAMP</SelectItem>
                        <SelectItem value="ufpr">UFPR</SelectItem>
                        <SelectItem value="uea">UEA</SelectItem>
                        <SelectItem value="uepa">UEPA</SelectItem>
                        <SelectItem value="uneb">UNEB</SelectItem>
                        <SelectItem value="ufsc">UFSC</SelectItem>
                        <SelectItem value="enem">ENEM</SelectItem>
                        <SelectItem value="est">EST</SelectItem>
                        <SelectItem value="famerp">FAMERP</SelectItem>
                        <SelectItem value="fdv">FDV</SelectItem>
                        <SelectItem value="ime">IME</SelectItem>
                        <SelectItem value="ita">ITA</SelectItem>
                        <SelectItem value="mackenzie">MACKENZIE</SelectItem>
                        <SelectItem value="mandic">SÃO LEOPOLDO MANDIC</SelectItem>
                        <SelectItem value="puccampinas">PUC CAMPINAS</SelectItem>
                        <SelectItem value="pucgoias">PUC GOIÁS</SelectItem>
                        <SelectItem value="pucminas">PUC MINAS</SelectItem>
                        <SelectItem value="pucrs">PUC RIO GRANDE DO SUL</SelectItem>
                        <SelectItem value="pucsp">PUC SÃO PAULO</SelectItem>
                        <SelectItem value="uem">UEM</SelectItem>
                        <SelectItem value="uenf">UENF</SelectItem>
                        <SelectItem value="uerj">UERJ</SelectItem>
                        <SelectItem value="ufabc">UFABC</SelectItem>
                        <SelectItem value="ufba">UFBA</SelectItem>
                        <SelectItem value="ufc">UFC</SelectItem>
                        <SelectItem value="ufcspa">UFCSPA</SelectItem>
                        <SelectItem value="uff">UFF</SelectItem>
                        <SelectItem value="ufg">UFG</SelectItem>
                        <SelectItem value="ufjf">UFJF</SelectItem>
                        <SelectItem value="ufla">UFLA</SelectItem>
                        <SelectItem value="ufmg">UFMG</SelectItem>
                        <SelectItem value="ufms">UFMS</SelectItem>
                        <SelectItem value="ufpa">UFPA</SelectItem>
                        <SelectItem value="ufpe">UFPE</SelectItem>
                        <SelectItem value="ufrgs">UFRGS</SelectItem>
                        <SelectItem value="ufrj">UFRJ</SelectItem>
                        <SelectItem value="ufrn">UFRN</SelectItem>
                        <SelectItem value="ufs">UFS</SelectItem>
                        <SelectItem value="ufu">UFU</SelectItem>
                        <SelectItem value="ufv">UFV</SelectItem>
                        <SelectItem value="unichristus">UNICHRISTUS</SelectItem>
                        <SelectItem value="unifesp">UNIFESP</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Exam Year Selection */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Ano da Prova</label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione o ano" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2020">2020</SelectItem>
                        <SelectItem value="2019">2019</SelectItem>
                        <SelectItem value="2018">2018</SelectItem>
                        <SelectItem value="2017">2017</SelectItem>
                        <SelectItem value="2016">2016</SelectItem>
                        <SelectItem value="2015">2015</SelectItem>
                        <SelectItem value="2014">2014</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Start Button */}
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 shadow-sm transition-colors">
                    Iniciar Simulado Real
                  </button>
                </div>
              </TabsContent>

              <TabsContent value="estudo" className="mt-6">
                <div className="space-y-6">
                  {/* Subject Selection */}
                  {/* University/Institution Selection */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Universidade/Instituição</label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione uma instituição" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="fuvest">FUVEST</SelectItem>
                        <SelectItem value="ufpa">UFPA</SelectItem>
                        <SelectItem value="unesp">UNESP</SelectItem>
                        <SelectItem value="unicamp">UNICAMP</SelectItem>
                        <SelectItem value="ufpr">UFPR</SelectItem>
                        <SelectItem value="uea">UEA</SelectItem>
                        <SelectItem value="uepa">UEPA</SelectItem>
                        <SelectItem value="uneb">UNEB</SelectItem>
                        <SelectItem value="ufsc">UFSC</SelectItem>
                        <SelectItem value="enem">ENEM</SelectItem>
                        <SelectItem value="est">EST</SelectItem>
                        <SelectItem value="famerp">FAMERP</SelectItem>
                        <SelectItem value="fdv">FDV</SelectItem>
                        <SelectItem value="ime">IME</SelectItem>
                        <SelectItem value="ita">ITA</SelectItem>
                        <SelectItem value="mackenzie">MACKENZIE</SelectItem>
                        <SelectItem value="mandic">SÃO LEOPOLDO MANDIC</SelectItem>
                        <SelectItem value="puccampinas">PUC CAMPINAS</SelectItem>
                        <SelectItem value="pucgoias">PUC GOIÁS</SelectItem>
                        <SelectItem value="pucminas">PUC MINAS</SelectItem>
                        <SelectItem value="pucrs">PUC RIO GRANDE DO SUL</SelectItem>
                        <SelectItem value="pucsp">PUC SÃO PAULO</SelectItem>
                        <SelectItem value="uem">UEM</SelectItem>
                        <SelectItem value="uenf">UENF</SelectItem>
                        <SelectItem value="uerj">UERJ</SelectItem>
                        <SelectItem value="ufabc">UFABC</SelectItem>
                        <SelectItem value="ufba">UFBA</SelectItem>
                        <SelectItem value="ufc">UFC</SelectItem>
                        <SelectItem value="ufcspa">UFCSPA</SelectItem>
                        <SelectItem value="uff">UFF</SelectItem>
                        <SelectItem value="ufg">UFG</SelectItem>
                        <SelectItem value="ufjf">UFJF</SelectItem>
                        <SelectItem value="ufla">UFLA</SelectItem>
                        <SelectItem value="ufmg">UFMG</SelectItem>
                        <SelectItem value="ufms">UFMS</SelectItem>
                        <SelectItem value="ufpa">UFPA</SelectItem>
                        <SelectItem value="ufpe">UFPE</SelectItem>
                        <SelectItem value="ufrgs">UFRGS</SelectItem>
                        <SelectItem value="ufrj">UFRJ</SelectItem>
                        <SelectItem value="ufrn">UFRN</SelectItem>
                        <SelectItem value="ufs">UFS</SelectItem>
                        <SelectItem value="ufu">UFU</SelectItem>
                        <SelectItem value="ufv">UFV</SelectItem>
                        <SelectItem value="unichristus">UNICHRISTUS</SelectItem>
                        <SelectItem value="unifesp">UNIFESP</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Matéria Específicas</label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione uma matéria" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="matematica">Matemática</SelectItem>
                        <SelectItem value="fisica">Física</SelectItem>
                        <SelectItem value="quimica">Química</SelectItem>
                        <SelectItem value="biologia">Biologia</SelectItem>
                        <SelectItem value="historia">História</SelectItem>
                        <SelectItem value="geografia">Geografia</SelectItem>
                        <SelectItem value="filosofia">Filosofia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {/* Number of Questions */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Número de Questões</label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione a quantidade" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="10">10 questões</SelectItem>
                        <SelectItem value="20">20 questões</SelectItem>
                        <SelectItem value="30">30 questões</SelectItem>
                        <SelectItem value="40">40 questões</SelectItem>
                        <SelectItem value="50">50 questões</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Start Button */}
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 shadow-sm transition-colors">
                    Iniciar Simulado Estudo
                  </button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
