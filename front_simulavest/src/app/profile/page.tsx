"use client"

import type React from "react"

import { useState } from "react";
import Image from "next/image"
import Header from "@/components/Header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, BookOpen, BarChart2, Settings } from "lucide-react";
import { Link } from "lucide-react";
import { Plus } from "lucide-react";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile")

  const [formData, setFormData] = useState({
    fullName: "",
    email: "XXXXX@gmail.com",
    institution: "",
    targetExam: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Mock user data
  const userData = {
    nickname: "NickName",
    email: "XXXXX@gmail.com",
    stats: {
      simulados: 12,
      questoes: 540,
      acertos: 378,
      percentagem: 70,
    },
    recentExams: [
      { name: "ENEM Simulado", date: "10/05/2023", score: 720 },
      { name: "FUVEST", date: "22/04/2023", score: 68 },
      { name: "Simulado Personalizado", date: "15/04/2023", score: 82 },
    ],
    subjectPerformance: [
      { subject: "Matemática", percentage: 80 },
      { subject: "Português", percentage: 60 },
      { subject: "Física", percentage: 75 },
      { subject: "Química", percentage: 65 },
      { subject: "Biologia", percentage: 50 },
    ],
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
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
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
            <h1 className="text-2xl font-bold mb-6">Profile</h1>

            {/* Profile navigation */}
            <div className="mb-8">
              <Tabs defaultValue="profile" onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-4 w-full max-w-md">
                  <TabsTrigger value="profile" className="flex items-center gap-2">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                          fill="currentColor"
                        />
                        <path
                          d="M12.0002 14.5C6.99016 14.5 2.91016 17.86 2.91016 22C2.91016 22.28 3.13016 22.5 3.41016 22.5H20.5902C20.8702 22.5 21.0902 22C21.0902 17.86 17.0102 14.5 12.0002 14.5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <span className="hidden sm:inline">Profile</span>
                  </TabsTrigger>
                  <TabsTrigger value="simulados" className="flex items-center gap-2">
                    <BookOpen size={18} />
                    <span className="hidden sm:inline">Simulados</span>
                  </TabsTrigger>
                  <TabsTrigger value="estatisticas" className="flex items-center gap-2">
                    <BarChart2 size={18} />
                    <span className="hidden sm:inline">Estatísticas</span>
                  </TabsTrigger>
                  <TabsTrigger value="configuracoes" className="flex items-center gap-2">
                    <Settings size={18} />
                    <span className="hidden sm:inline">Configurações</span>
                  </TabsTrigger>
                </TabsList>

                {/* Profile Tab Content */}
                <TabsContent value="profile" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* User info card */}
                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <div className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold mb-4">
                          M
                        </div>
                        <h2 className="text-xl font-medium mb-1">{userData.nickname}</h2>
                        <p className="text-gray-500 mb-4">{userData.email}</p>
                        <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
                          <Edit size={16} />
                          Editar Perfil
                        </button>
                      </div>
                    </div>

                    {/* Statistics card */}
                    <div className="bg-white border rounded-lg p-6 shadow-sm md:col-span-2">
                      <h3 className="text-lg font-medium mb-4">Estatísticas</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                          <p className="text-gray-500 text-sm">Simulados</p>
                          <p className="text-2xl font-bold text-blue-600">{userData.stats.simulados}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-gray-500 text-sm">Questões</p>
                          <p className="text-2xl font-bold text-blue-600">{userData.stats.questoes}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-gray-500 text-sm">Acertos</p>
                          <p className="text-2xl font-bold text-blue-600">{userData.stats.acertos}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-gray-500 text-sm">% de Acertos</p>
                          <p className="text-2xl font-bold text-blue-600">{userData.stats.percentagem}%</p>
                        </div>
                      </div>
                    </div>

                    {/* Recent exams card */}
                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <h3 className="text-lg font-medium mb-4">Simulados Recentes</h3>
                      <div className="space-y-4">
                        {userData.recentExams.map((exam, index) => (
                          <div key={index} className="border-b pb-3 last:border-0 last:pb-0">
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="font-medium">{exam.name}</p>
                                <p className="text-sm text-gray-500">{exam.date}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-sm text-gray-500">Pontuação</p>
                                <p className="font-bold text-blue-600">{exam.score}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Subject performance card */}
                    <div className="bg-white border rounded-lg p-6 shadow-sm md:col-span-2">
                      <h3 className="text-lg font-medium mb-4">Desempenho por matéria</h3>
                      <div className="space-y-4">
                        {userData.subjectPerformance.map((subject, index) => (
                          <div key={index} className="space-y-1">
                            <div className="flex justify-between items-center">
                              <span>{subject.subject}</span>
                              <span className="font-medium">{subject.percentage}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div
                                className="bg-blue-600 h-2.5 rounded-full"
                                style={{ width: `${subject.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Simulados Tab Content */}
                <TabsContent value="simulados" className="mt-6">
                  <div className="bg-white border rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-medium mb-4">Histórico de Simulados</h3>
                    <div className="space-y-4">
                      {userData.recentExams.concat(userData.recentExams).map((exam, index) => (
                        <div key={index} className="border-b pb-3 last:border-0 last:pb-0">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium">{exam.name}</p>
                              <p className="text-sm text-gray-500">{exam.date}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-500">Pontuação</p>
                              <p className="font-bold text-blue-600">{exam.score}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Estatisticas Tab Content */}
                <TabsContent value="estatisticas" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Statistics card */}
                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <h3 className="text-lg font-medium mb-4">Estatísticas Gerais</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <p className="text-gray-500 text-sm">Simulados</p>
                          <p className="text-2xl font-bold text-blue-600">{userData.stats.simulados}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-gray-500 text-sm">Questões</p>
                          <p className="text-2xl font-bold text-blue-600">{userData.stats.questoes}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-gray-500 text-sm">Acertos</p>
                          <p className="text-2xl font-bold text-blue-600">{userData.stats.acertos}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-gray-500 text-sm">% de Acertos</p>
                          <p className="text-2xl font-bold text-blue-600">{userData.stats.percentagem}%</p>
                        </div>
                      </div>
                    </div>

                    {/* Subject performance card */}
                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <h3 className="text-lg font-medium mb-4">Desempenho por matéria</h3>
                      <div className="space-y-4">
                        {userData.subjectPerformance.map((subject, index) => (
                          <div key={index} className="space-y-1">
                            <div className="flex justify-between items-center">
                              <span>{subject.subject}</span>
                              <span className="font-medium">{subject.percentage}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div
                                className="bg-blue-600 h-2.5 rounded-full"
                                style={{ width: `${subject.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Monthly progress */}
                    <div className="bg-white border rounded-lg p-6 shadow-sm md:col-span-2">
                      <h3 className="text-lg font-medium mb-4">Progresso Mensal</h3>
                      <div className="h-64 flex items-end justify-between px-4">
                        {["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"].map((month, index) => (
                          <div key={index} className="flex flex-col items-center">
                            <div
                              className="w-12 bg-blue-500 rounded-t-md"
                              style={{
                                height: `${Math.floor(Math.random() * 150) + 30}px`,
                                opacity: index === 4 ? 1 : 0.7, // Highlight current month
                              }}
                            ></div>
                            <span className="text-sm mt-2">{month}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Configuracoes Tab Content */}
                <TabsContent value="configuracoes" className="mt-6">
                  <div className="bg-white border rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-medium mb-6">Configuração de Perfil</h3>

                    <div className="space-y-6 max-w-md">
                      {/* Full name */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nome completo</label>
                        <input
                          type="text"
                          name="fullName"
                          placeholder="Nome completo"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="email@exemplo.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      {/* School/Institution */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Escola/Instituição</label>
                        <input
                          type="text"
                          name="institution"
                          placeholder="Colégio Objetivo (por exemplo)"
                          value={formData.institution}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      {/* Target Exam */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Prova Alvo</label>
                        <input
                          type="text"
                          name="targetExam"
                          placeholder="Digite o nome da prova alvo (ex: FUVEST, ENEM, etc.)"
                          value={formData.targetExam}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      {/* Profile Icon */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Icone de Perfil</label>
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                            M
                          </div>
                          <button className="text-blue-600 hover:text-blue-800 font-medium">Alterar</button>
                        </div>
                      </div>

                      {/* Save button */}
                      <div className="pt-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
                          Salvar Alterações
                        </button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
