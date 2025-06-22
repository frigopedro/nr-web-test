"use client";
import { AnimatedText } from "@/components/animated-text";

import { AnimatedTitle } from "@/components/animated-title";
import { title } from "@/components/primitives";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Container from "@/components/container";
import TitleDesc from "@/components/title-desc";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsPage() {
  const sectionsRef = useRef<HTMLDivElement>(null);
  const containerFlow = useRef(null);
  useEffect(() => {
    if (sectionsRef.current) {
      // Animate sections on scroll
      const sections = sectionsRef.current.querySelectorAll("section");
      const textAnimation = document.querySelectorAll(".textanimation");
      textAnimation.forEach((textAnimation, index) => {
        gsap.fromTo(
          textAnimation,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,

            scrollTrigger: {
              trigger: textAnimation,
              start: "top bottom",
              end: "top 70%",
              scrub: 2,
            },
          }
        );
      });

      const containers = document.querySelectorAll(".animationcontainer");
      containers.forEach((container, index) => {
        gsap.fromTo(
          container,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            stagger: 4,

            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "top 60%",
              scrub: 2,
            },
          }
        );
      });
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }
  }, []);
  return (
    <div className="">
      {" "}
      <div className="z-1">
        <div className="h-[40vh]" />
        <div className="mx-auto sm:w-5/6 md:w-3/4 lg:w-3/6">
          <h1 className="main-title text-6xl md:text-8xl font-bold text-center mb-8  opacity-80">
            <AnimatedText text="Somos uma equipe que une engenharia, design e produção de eventos com uma única ambição: tornar invisível o esforço de reunir pessoas. O Nosso Rolê nasceu da convicção de que todo encontro digno de lembrança — de um churrasco entre amigos a um festival urbano — merece uma infraestrutura elegante que simplifique ingressos, pagamentos e interação social em um só gesto." />
          </h1>
        </div>
      </div>
      <div className="h-[10vh]"></div>
      <div className="container mx-auto grid grid-cols-12 gap-x-[15px] gap-y-[15px] md:gap-y-[20px] md:gap-x-[20px] lg:gap-x-[25px] lg:gap-y-[25px] px-3 mb-44">
        <Container className="col-span-12 bg-[#161617] overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5">
              <TitleDesc title="Fundadores" titleClassName={"text-pink"} />

              <div className="lg:w-3/4 mx-10 mb-6 lg:mx-0 lg:mt-40 lg:ml-10">
                <h1
                  className="my-auto text-3xl lg:text-6xl textanimation"
                  ref={containerFlow}
                >
                  Os iniciadores
                </h1>
                <div className="mt-2" />
                <p className="text-lg">
                  Pedro e Igor, cofundadores do Nosso Rolê, conheceram-se no
                  ensino médio e, entre um rolê e outro, perceberam o mesmo
                  vazio: informações dispersas, pagamentos fragmentados,
                  organização caótica. Sem encontrar uma plataforma que
                  integrasse todos esses pontos, decidiram criar o aplicativo
                  que faltava — um espaço único onde a experiência do evento, do
                  convite ao pós-festa, finalmente se torna fluida e completa.
                </p>
              </div>
            </div>

            <div className="h-[800px] flex-1 flex justify-center">
              <div className="flex flex-1 gap-6 lg:gap-10 justify-center items-center overflow-x-hidden min-w-[600px] lg:-mr-10 ">
                <img
                  src="/mock/pt-Br/profile/pedro.png"
                  alt="Imagem de uma tela de evento"
                  className="w-[35%] mt-10 lg:mt-20 textanimation"
                  loading="lazy"
                />
                <img
                  src="/mock/pt-Br/profile/igor.png"
                  alt="Imagem de uma tela de evento"
                  className="w-[35%] -mt-10 lg:-mt-20 textanimation"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Container>
        {/* <Container className="col-span-12 bg-[#161617] overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5">
              <TitleDesc title="Time de ouro" titleClassName={"text-pink"} />

              <div className="lg:w-3/4 mx-10 mb-6 lg:mx-0 lg:mt-64 lg:ml-10">
                <h1
                  className="my-auto text-3xl lg:text-6xl textanimation"
                  ref={containerFlow}
                >
                  Seu evento, do seu jeito. Crie e Compartilhe.
                </h1>
              </div>
            </div>

            <div className="h-[800px] flex-1 flex justify-center">
              <div className="flex flex-1 gap-6 lg:gap-10 justify-center items-center overflow-x-hidden min-w-[600px] lg:-mr-10 ">
                <img
                  src="/mock/pt-Br/event/event-viagem-para-foz.png"
                  alt="Imagem de uma tela de evento"
                  className="w-[30%] mt-10 lg:mt-20 textanimation"
                  loading="lazy"
                />
                <img
                  src="/mock/pt-Br/gallery/galeria-ski.png"
                  alt="Imagem de uma tela de evento"
                  className="w-[30%] -mt-10 lg:-mt-20 textanimation"
                  loading="lazy"
                />
                <img
                  src="/mock/pt-Br/event/event-andes-ski-trip.png"
                  alt="Imagem de uma tela de evento"
                  className="w-[30%] mt-10 lg:mt-20 textanimation"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Container> */}
      </div>
    </div>
  );
}
