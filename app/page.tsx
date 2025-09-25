"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  BarChart3,
  Database,
  TrendingUp,
  Download,
  Menu,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-cyan-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-cyan-200/30 dark:border-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
              Valentina
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-slate-600 hover:text-violet-600 dark:text-slate-300 dark:hover:text-violet-400 transition-colors font-medium">
                About
              </a>
              <a href="#education" className="text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400 transition-colors font-medium">
                Education
              </a>
              <a href="#projects" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors font-medium">
                Projects
              </a>
              <a href="#contact" className="text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400 transition-colors font-medium">
                Contact
              </a>
              <ThemeToggle />
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="flex flex-col space-y-6 mt-8">
                    <a href="#about" className="text-lg font-medium text-slate-600 hover:text-violet-600 dark:text-slate-300 dark:hover:text-violet-400 transition-colors">
                      About
                    </a>
                    <a href="#education" className="text-lg font-medium text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400 transition-colors">
                      Education
                    </a>
                    <a href="#projects" className="text-lg font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
                      Projects
                    </a>
                    <a href="#contact" className="text-lg font-medium text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400 transition-colors">
                      Contact
                    </a>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-300/20 rounded-full blur-3xl"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="space-y-12"
          >
            <motion.div variants={fadeInUp} className="relative">
              <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-violet-400 via-cyan-400 to-blue-400 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-800">
                  <Image
                    src="/Valentina.jpg"
                    alt="Valentina Bentancor - Data Analyst"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-violet-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Transformando Datos
                </span>
                <br />
                <span className="text-slate-900 dark:text-white">
                  en Soluciones
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Desarrolladora de software especializada en Genexus y análisis de datos. Creando soluciones digitales innovadoras con Power BI, SQL y tecnologías modernas.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              <Badge className="text-sm py-2 px-4 bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700 text-white border-0 shadow-lg">
                <BarChart3 className="w-4 h-4 mr-2" />
                Power BI
              </Badge>
              <Badge className="text-sm py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 shadow-lg">
                <Database className="w-4 h-4 mr-2" />
                Python
              </Badge>
              <Badge className="text-sm py-2 px-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white border-0 shadow-lg">
                <TrendingUp className="w-4 h-4 mr-2" />
                SQL
              </Badge>
              <Badge className="text-sm py-2 px-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white border-0 shadow-lg">
                Genexus
              </Badge>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0"
              >
                <Download className="w-5 h-5 mr-2" />
                Descargar CV
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contáctame
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex justify-center space-x-8 mt-12"
            >
              <a href="https://github.com/valentina-bentancor" className="p-3 rounded-full bg-gradient-to-br from-violet-100 to-pink-100 dark:from-violet-900 dark:to-pink-900 hover:from-violet-200 hover:to-pink-200 dark:hover:from-violet-800 dark:hover:to-pink-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Github className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              </a>
              <a href="https://linkedin.com/in/valentina-bentancor" className="p-3 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 hover:from-blue-200 hover:to-cyan-200 dark:hover:from-blue-800 dark:hover:to-cyan-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </a>
              <a href="mailto:valentina.bentancor@email.com" className="p-3 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900 dark:to-blue-900 hover:from-cyan-200 hover:to-blue-200 dark:hover:from-cyan-800 dark:hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Mail className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-50/50 via-cyan-50/50 to-blue-50/50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-700">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent"
            >
              Sobre Mí
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-12 max-w-3xl mx-auto"
            >
              Soy Valentina Bentancor, desarrolladora de software especializada en Genexus con pasión por el análisis de datos.
              Actualmente trabajo en desarrollo de soluciones digitales y exploro el análisis de datos con Power BI, SQL y herramientas modernas.
              Mi enfoque combina desarrollo técnico con análisis riguroso para crear soluciones que generen valor real.
            </motion.p>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8">
              <motion.div variants={fadeInUp} className="text-center p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-violet-100 dark:border-slate-700">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">Análisis de Datos</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Extracción de insights valiosos desde datasets complejos usando Python, R y herramientas estadísticas avanzadas.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-slate-700">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">Business Intelligence</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Desarrollo de dashboards interactivos y reportes automatizados con Power BI, conectando datos con decisiones de negocio.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-100 dark:border-slate-700">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">Desarrollo de Software</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Desarrollo de aplicaciones web y soluciones digitales usando Genexus, Java, JavaScript, HTML y C#.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section id="education" className="py-24 bg-gradient-to-br from-white via-cyan-50/30 to-violet-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent"
            >
              Formación y Experiencia
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Education */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-semibold mb-8 text-slate-900 dark:text-white flex items-center">
                  <GraduationCap className="w-6 h-6 mr-3 text-violet-600" />
                  Educación
                </h3>
                <div className="space-y-6">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 p-6 bg-white dark:bg-slate-800">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                            <Award className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-semibold text-slate-900 dark:text-white text-lg mb-1">
                            Licenciatura en Sistemas
                          </h4>
                          <p className="text-violet-600 dark:text-violet-400 font-medium mb-2">
                            Universidad ORT Uruguay
                          </p>
                          <div className="flex items-center text-sm text-slate-500 mb-3">
                            <Calendar className="w-4 h-4 mr-1" />
                            Marzo 2025 - Diciembre 2029
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-300">
                            Informática, comunicaciones y servicios de asistencia
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 p-6 bg-white dark:bg-slate-800">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                            <Award className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-semibold text-slate-900 dark:text-white text-lg mb-1">
                            Analista en Tecnologías de la Información
                          </h4>
                          <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-2">
                            Universidad ORT Uruguay
                          </p>
                          <div className="flex items-center text-sm text-slate-500 mb-3">
                            <Calendar className="w-4 h-4 mr-1" />
                            Marzo 2022 - Noviembre 2024
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-300">
                            Tecnología de la información - Graduada
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

              {/* Experience */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-semibold mb-8 text-slate-900 dark:text-white flex items-center">
                  <MapPin className="w-6 h-6 mr-3 text-cyan-600" />
                  Experiencia
                </h3>
                <div className="space-y-6">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 p-6 bg-white dark:bg-slate-800">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                              <span className="text-xs font-bold text-emerald-600">G</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-semibold text-slate-900 dark:text-white text-lg mb-1">
                            Analista Junior Genexus
                          </h4>
                          <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-2">
                            GeneXus Consulting · Jornada parcial
                          </p>
                          <div className="flex items-center text-sm text-slate-500 mb-3">
                            <Calendar className="w-4 h-4 mr-1" />
                            Abril 2024 - Actualidad · 1 año 6 meses
                          </div>
                          <div className="flex items-center text-sm text-slate-500 mb-3">
                            <MapPin className="w-4 h-4 mr-1" />
                            Montevideo, Uruguay
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            Desarrollo de soluciones digitales para la transformación de organizaciones.
                            Especialización en Genexus con enfoque en análisis de datos usando Power BI, SQL,
                            Entity Framework, MVC, Java, JavaScript, HTML y C#.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Skills highlight */}
                  <Card className="border-0 shadow-lg p-6 bg-gradient-to-br from-violet-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700">
                    <CardContent className="p-0">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                        Tecnologías y Habilidades
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="text-xs bg-gradient-to-r from-violet-500 to-purple-600 text-white border-0">
                          Genexus
                        </Badge>
                        <Badge className="text-xs bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0">
                          Power BI
                        </Badge>
                        <Badge className="text-xs bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-0">
                          SQL
                        </Badge>
                        <Badge className="text-xs bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-0">
                          Entity Framework
                        </Badge>
                        <Badge className="text-xs bg-gradient-to-r from-orange-500 to-red-600 text-white border-0">
                          Java
                        </Badge>
                        <Badge className="text-xs bg-gradient-to-r from-yellow-500 to-orange-600 text-white border-0">
                          JavaScript
                        </Badge>
                        <Badge className="text-xs bg-gradient-to-r from-pink-500 to-rose-600 text-white border-0">
                          HTML
                        </Badge>
                        <Badge className="text-xs bg-gradient-to-r from-purple-500 to-violet-600 text-white border-0">
                          C#
                        </Badge>
                        <Badge className="text-xs bg-gradient-to-r from-slate-500 to-gray-600 text-white border-0">
                          MVC
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-24 bg-gradient-to-br from-white via-violet-50/30 to-cyan-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent"
            >
              Proyectos Destacados
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div variants={fadeInUp}>
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 p-6 bg-gradient-to-br from-white to-violet-50/50 dark:from-slate-800 dark:to-violet-900/20 hover:scale-105">
                  <CardContent className="p-0">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                        Dashboard de Ventas Interactivo
                      </h3>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      Dashboard completo en Power BI para análisis de ventas con KPIs dinámicos, segmentación de clientes y forecasting.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <Badge className="text-xs bg-gradient-to-r from-violet-500 to-purple-600 text-white border-0">
                        Power BI
                      </Badge>
                      <Badge className="text-xs bg-gradient-to-r from-blue-500 to-cyan-600 text-white border-0">
                        DAX
                      </Badge>
                      <Badge className="text-xs bg-gradient-to-r from-pink-500 to-rose-600 text-white border-0">
                        SQL Server
                      </Badge>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0 shadow-lg">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Proyecto
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 p-6 bg-gradient-to-br from-white to-blue-50/50 dark:from-slate-800 dark:to-blue-900/20 hover:scale-105">
                  <CardContent className="p-0">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                        Modelo Predictivo con ML
                      </h3>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      Sistema de machine learning para predicción de demanda y análisis de tendencias usando Python y algoritmos avanzados.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <Badge className="text-xs bg-gradient-to-r from-blue-500 to-cyan-600 text-white border-0">
                        Python
                      </Badge>
                      <Badge className="text-xs bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
                        Pandas
                      </Badge>
                      <Badge className="text-xs bg-gradient-to-r from-indigo-500 to-blue-600 text-white border-0">
                        Scikit-learn
                      </Badge>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 shadow-lg">
                      <Github className="w-4 h-4 mr-2" />
                      Ver Código
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 p-6 bg-gradient-to-br from-white to-pink-50/50 dark:from-slate-800 dark:to-pink-900/20 hover:scale-105">
                  <CardContent className="p-0">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                        Pipeline ETL Automatizado
                      </h3>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                        <Database className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      Sistema ETL robusto para extracción, transformación y carga automatizada de datos desde múltiples fuentes empresariales.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <Badge className="text-xs bg-gradient-to-r from-amber-500 to-orange-600 text-white border-0">
                        Python
                      </Badge>
                      <Badge className="text-xs bg-gradient-to-r from-slate-500 to-slate-600 text-white border-0">
                        SQL Server
                      </Badge>
                      <Badge className="text-xs bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0">
                        Apache Airflow
                      </Badge>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white border-0 shadow-lg">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Detalles
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-violet-100/50 via-cyan-100/50 to-blue-100/50 dark:from-slate-800 dark:via-violet-900/20 dark:to-cyan-900/20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-violet-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent"
            >
              ¡Conectemos!
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-700 dark:text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Estoy siempre abierta a nuevas oportunidades, proyectos desafiantes y colaboraciones interesantes.
              ¡Hablemos sobre cómo puedo ayudarte a transformar tus datos en valor!
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex justify-center space-x-8 mb-8"
            >
              <a href="mailto:valentina.bentancor@email.com" className="p-4 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-violet-100 dark:border-slate-700 hover:scale-110">
                <Mail className="w-8 h-8 text-violet-600 dark:text-violet-400" />
              </a>
              <a href="https://linkedin.com/in/valentina-bentancor" className="p-4 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-slate-700 hover:scale-110">
                <Linkedin className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </a>
              <a href="https://github.com/valentina-bentancor" className="p-4 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100 dark:border-slate-700 hover:scale-110">
                <Github className="w-8 h-8 text-pink-600 dark:text-pink-400" />
              </a>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Button className="bg-gradient-to-r from-violet-600 via-cyan-600 to-blue-600 hover:from-violet-700 hover:via-cyan-700 hover:to-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                <Mail className="w-5 h-5 mr-2" />
                Enviar Mensaje
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-violet-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800 border-t border-violet-100 dark:border-slate-700 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              Valentina Bentancor
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Software Developer & Data Analyst Specialist
            </p>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © 2024 Valentina Bentancor. Desarrollado con ❤️ usando Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </footer>
    </div>
  );
}
