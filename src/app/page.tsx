"use client";
import { Link } from "@nextui-org/link";
import { GithubIcon, Logo } from "@/components/icons";
import Container from "@/components/container";
import TitleDesc from "@/components/title-desc";
import { COLORS } from "@/constants/colors";
import useTranslation from "next-translate/useTranslation";
import { motion } from "framer-motion";
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const items = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
};

gsap.registerPlugin(ScrollTrigger);

const images_rolls = [
  "/mock/pt-Br/event/event-arraia-dos-calouros.png",
  "/mock/pt-Br/event/event-casa-de-praia.png",
  "/mock/pt-Br/event/event-nyc-squad-2025.png",
  "/mock/pt-Br/event/event-maratona-de-series.png",
  "/mock/pt-Br/event/event-andes-ski-trip.png",
  // Add more images as needed
];

export default function Home() {
  const main = useRef(null);
  const mainFlow = useRef(null);
  const containerFlow = useRef(null);
  const wordByWordP = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const images = [
      "#image1",
      "#image2",
      "#image3",
      "#image4",
      "#image5",
      "#text-central",
    ];
    images.forEach((image, index) => {
      gsap.to(image, {
        y: index % 2 == 0 ? -400 : -250, // Adjust the value as per your requirement
        scrollTrigger: {
          trigger: main.current,
          start: "top 20%",
          end: "bottom top",
          scrub: true,
        },
      });
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

    const images_roll: any = document.querySelector(".image-rollevent");
    ScrollTrigger.create({
      trigger: ".image-rollevent",
      start: "top bottom", // Adjust these to control when the animation starts
      end: "bottom center", // Adjust these to control when the animation ends
      scrub: true,
      onUpdate: (self) => {
        // Calculate the index of the image based on the scroll progress
        const scrollProgress = self.progress;
        const index = Math.min(
          images_rolls.length - 1,
          Math.floor(scrollProgress * images_rolls.length)
        );
        images_roll.src = images_rolls[index];
      },
    });

    // Word-by-word scroll animation for the special <p>
    const wordP = wordByWordP.current;
    if (wordP) {
      const wordSpans = wordP.querySelectorAll(".gsap-word");
      gsap.set(wordSpans, { opacity: 0, y: 30 });
      gsap.to(wordSpans, {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: wordP,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <div ref={mainFlow}>
      <div className="mt-[200px]">
        <motion.section
          variants={variants}
          initial="hidden"
          animate="show"
          className="flex max-w-[1462px] mx-auto gap-8 justify-center"
          ref={main}
        >
          <motion.img
            variants={items}
            style={{ paddingTop: "100px" }}
            src={"/mock/pt-Br/event/event-andes-ski-trip.png"}
            alt="Evento Andes Ski Trip"
            id="image1"
            className="w-[20%] block min-w-[180px]"
            loading="lazy"
          />
          <motion.img
            variants={items}
            style={{ paddingBottom: "100px" }}
            src="/mock/pt-Br/event/event-arraia-dos-calouros.png"
            alt="Evento Arraiá dos Calouros"
            loading="lazy"
            id="image2"
            className="w-[20%] block min-w-[180px]"
          />

          <motion.img
            variants={items}
            style={{ paddingBottom: "100px" }}
            src="/mock/pt-Br/event/event-casa-de-praia.png"
            alt="Evento Casa de Praia"
            loading="lazy"
            id="image3"
            className="w-[20%] block min-w-[180px]"
          />

          <motion.img
            variants={items}
            style={{ paddingBottom: "100px" }}
            src="/mock/pt-Br/event/event-churras-da-galera.png"
            alt="Evento Churras da Galera"
            loading="lazy"
            id="image4"
            className="w-[20%] block min-w-[180px]"
          />
          <motion.img
            variants={items}
            style={{ paddingTop: "100px" }}
            src="/mock/pt-Br/event/event-futebol-chopp.png"
            alt="Evento Futebol Chopp"
            id="image5"
            className="w-[20%] block min-w-[180px]"
            loading="lazy"
          />
        </motion.section>
      </div>

      <section className="container mx-auto flex flex-col items-center justify-center mb-8 mt-4">
        <div
          className="flex flex-col items-center justify-center"
          id="text-central"
        >
          <Logo className="textanimation" />
          <h3 className="textanimation">nosso role</h3>
          <h1 className=" my-2 text-3xl text-center sm:text-4xl md:text6xl lg:text-5xl textanimation">
            A rede social para <br /> fazer social
          </h1>

          <p className="w-full text-center font-normal text-[#DFDFE8] px-2 sm:text-base md:text-lg md:w-4/5 lg:text-xl textanimation">
            Descubra eventos feitos para você, crie o seu com poucos cliques,
            venda ingressos, divida despesas e mantenha todos engajados antes,
            durante e depois. É organização, pagamento e interação social
            reunidos em uma plataforma intuitiva que faz a logística sumir e a
            memória ficar.
          </p>
          <div className="mt-[20vh]" />
          <p
            ref={wordByWordP}
            className="max-w-2xl mx-auto text-center font-normal text-[#DFDFE8] px-2 sm:text-2xl md:text-3xl md:w-4/5 lg:text-4xl xl:text-5xl textanimation"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              fontWeight: "500",
            }}
          >
            {`Porque momentos marcantes merecem tecnologia à altura, e todo grande rolê começa aqui.`
              .split(" ")
              .map((word, i) => (
                <span
                  key={i}
                  className="gsap-word text-3xl opacity-0 inline-block whitespace-pre"
                  style={{
                    opacity: 0,
                    display: "inline-block",
                    whiteSpace: "pre",
                  }}
                >
                  {word + (i === 5 ? "\n" : " ")}
                </span>
              ))}
          </p>
        </div>
      </section>
      <div className="bg-[#161617] py-16">
        <div className="container mx-auto">
          <h1 className={`text-green pb-4 pt-8 textanimation`}>Conheça</h1>
        </div>
        <div className="container mx-auto grid grid-cols-12 gap-x-[15px] gap-y-[15px] md:gap-y-[20px] md:gap-x-[20px] lg:gap-x-[20px] lg:gap-y-[20px] px-3">
          <Container className="col-span-12 md:col-span-12 lg:col-span-4 max-h-[700px] overflow-hidden">
            <TitleDesc
              title="Interaja, conecte-se e compartilhe."
              desc="Rede Social ideal para quem quer curtir a vida e festejar com amigos, compartilhando memórias e criando conexões."
              titleClassName={"text-green"}
            />

            <div className="flex items-center w-full justify-center pt-16">
              <motion.img
                variants={items}
                src="/mock/pt-Br/profile/pietra.png"
                alt="Imagem de uma tela de evento"
                className="w-[70%] textanimation"
                loading="lazy"
              />
            </div>
          </Container>
          <Container className="col-span-12 md:col-span-12 lg:col-span-4 overflow-hidden max-h-[700px]">
            <TitleDesc
              title="Crie eventos do seu jeito"
              desc="Um rolê é muito diverso e nosso app possibilita que você crie ele do seu jeito, seja público ou privado."
              titleClassName={"text-green"}
            />

            <div className="flex items-center w-full justify-center pt-16">
              <motion.img
                variants={items}
                src="https://nossorole-public.s3.sa-east-1.amazonaws.com/landingpage/secondsection/12.png"
                alt="Imagem de uma tela de evento"
                className="w-[50%] image-rollevent"
                loading="lazy"
              />
            </div>
          </Container>
          <Container className="col-span-12 md:col-span-12 lg:col-span-4 max-h-[700px] flex justify-between flex-col overflow-hidden">
            <div className="flex flex-col justify-between w-full flex-1 ">
              <div className="-mt-36 flex items-center justify-center w-full">
                <img
                  src="/mock/pt-Br/home-page/app-home.png"
                  alt="Imagem de uma tela de evento"
                  className="w-[70%] textanimation max-w-72"
                  loading="lazy"
                />
              </div>
              <div className="pb-5">
                <TitleDesc
                  title="Uma rede social"
                  desc="Encontre os eventos que mais combinam com você e adquira seus ingressos de forma prática dentro do app"
                  titleClassName={"text-green"}
                />
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* Seu role */}

      <div className="container mx-auto my-14">
        <h1 className={`text-pink pb-4 pt-8 textanimation`}>Seu role</h1>

        <div className="container mx-auto grid grid-cols-12 gap-x-[15px] gap-y-[15px] md:gap-y-[20px] md:gap-x-[20px] lg:gap-x-[25px] lg:gap-y-[25px] px-3">
          <Container className="col-span-12 bg-[#161617] overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/5">
                <TitleDesc
                  title="Crie do seu jeito"
                  titleClassName={"text-pink"}
                />

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
          </Container>
          <Container className="col-span-12 lg:col-span-6 bg-[#161617] overflow-hidden">
            <TitleDesc
              title="Divida contas e despesas"
              desc="Todo mundo fechou mas a conta não? Divida os custos com seus amigos e divirta-se sem preocupação"
              titleClassName={"text-pink"}
            />

            <div className="h-[550px] lg:h-[700px] w-full flex justify-center items-center mt-10 ">
              <img
                src="/mock/pt-Br/expenses/expense-home.png"
                alt="Imagem de uma tela de evento"
                className="w-[60%] max-w-[300px] lg:max-w-[400px] mt-10 lg:mt-20 textanimation"
                loading="lazy"
              />
            </div>
          </Container>
          <Container className="col-span-12 lg:col-span-6 bg-[#161617] overflow-hidden">
            <TitleDesc
              title="Sabe quem te deve?"
              desc="Sem planilha e sem calculadora, nos organizamos quanto você deve, quanto te devem e quem ainda não pagou!"
              titleClassName={"text-pink"}
            />
            <div className="h-[500px] lg:h-[700px] flex items-center justify-center ">
              <img
                src="/expenses_division.png"
                alt="Imagem de uma tela de evento"
                className="w-full object-cover p-8 pointer-events-none	textanimation"
                loading="lazy"
              />
            </div>
          </Container>
          <Container className="col-span-12 lg:col-span-8 bg-[#161617] overflow-hidden">
            <TitleDesc
              title="Convide seus amigos"
              desc="Seja pelo Instagram, Whatsapp, Facebook ou X, o seu rolê merece ser compartilhado. Copie o link  e não deixe ninguém de fora."
              titleClassName={"text-pink"}
            />
            <div className="h-[600px] lg:h-[700px] flex-1 flex justify-center">
              <div className="flex flex-1 gap-6 lg:gap-10 justify-center items-center overflow-x-hidden min-w-[600px] lg:-mr-10 ">
                <img
                  src="/mock/pt-Br/invite/invite-ski.png"
                  alt="Imagem de uma tela de evento"
                  className="w-[25%] mt-10 lg:mt-20 textanimation"
                  loading="lazy"
                />
                <img
                  src="/mock/pt-Br/profile/glad.png"
                  alt="Imagem de uma tela de evento"
                  className="w-[25%] -mt-10 lg:-mt-20 textanimation"
                  loading="lazy"
                />
              </div>
            </div>
          </Container>
          <Container className="col-span-4 bg-[#161617] overflow-hidden">
            <TitleDesc
              title="Galeria do rolê"
              desc="Compartilhe e registre momentos únicos do seu rolê."
              titleClassName={"text-pink"}
            />

            <div className="h-[700px] lg:h-[700px] w-full flex flex-1 justify-center items-center mt-10 ">
              <img
                src="/mock/pt-Br/gallery/galeria-nyc.png"
                alt="Imagem de uma tela de evento"
                className="w-[80%] max-w-[300px] lg:max-w-[600px] mt-10 lg:mt-20 textanimation"
                loading="lazy"
              />
            </div>
          </Container>
        </div>
      </div>

      {/* Social */}
      <div className="bg-[#161617] py-16">
        <div className="container mx-auto">
          <h1 className={`text-purple pb-4 pt-8 textanimation`}>Social</h1>
        </div>

        <div className="container mx-auto grid grid-cols-12 gap-x-[15px] gap-y-[15px] md:gap-y-[20px] md:gap-x-[20px] lg:gap-x-[25px] lg:gap-y-[25px] px-3">
          <Container className="col-span-12  overflow-hidden">
            <div className="flex">
              <div className="w-2/5">
                <TitleDesc
                  title="Crie do seu jeito"
                  titleClassName={"text-purple"}
                />

                <div className="w-3/4 mt-64 ml-10">
                  <h1 className="my-auto textanimation">
                    Descubra qual rolê seus amigos estão confirmando
                  </h1>
                </div>
              </div>

              <div className="h-[800px] bg-red flex-1" />
            </div>
          </Container>

          <Container className="col-span-8  overflow-hidden">
            <TitleDesc
              title="Crie do seu jeito"
              titleClassName={"text-purple"}
            />

            <div className="h-[800px] bg-red flex-1" />
          </Container>
          <Container className="col-span-4  overflow-hidden">
            <TitleDesc
              title="Crie do seu jeito"
              titleClassName={"text-purple"}
            />

            <div className="h-[800px] bg-red flex-1" />
          </Container>
        </div>
      </div>

      {/* Organizadores */}
      <div className="container mx-auto">
        <h1 className={`text-cyan pb-4 pt-8 textanimation`}>
          Para organizadores
        </h1>
      </div>

      <div className="container mx-auto grid grid-cols-12 gap-x-[15px] gap-y-[15px] md:gap-y-[20px] md:gap-x-[20px] lg:gap-x-[25px] lg:gap-y-[25px] px-3">
        <Container className="col-span-12  overflow-hidden bg-[#161617]">
          <div className="flex">
            <div className="w-2/5">
              <TitleDesc
                title="Crie do seu jeito"
                titleClassName={"text-cyan"}
              />

              <div className="w-3/4 mt-64 ml-10">
                <h1 className="my-auto textanimation">
                  Seu evento, do seu jeito. Crie e Compartilhe.
                </h1>
              </div>
            </div>

            <div className="h-[800px] bg-red flex-1" />
          </div>
        </Container>

        <Container className="col-span-6  overflow-hidden bg-[#161617]">
          <TitleDesc title="Crie do seu jeito" titleClassName={"text-cyan"} />

          <div className="h-[800px] bg-red flex-1" />
        </Container>
        <Container className="col-span-6  overflow-hidden bg-[#161617]">
          <TitleDesc title="Crie do seu jeito" titleClassName={"text-cyan"} />

          <div className="h-[800px] bg-red flex-1" />
        </Container>
      </div>
    </div>
  );
}
