"use client";
import Image from "next/image";
import MeshGradientAnimation from "../../../components/MeshGradient";

import React from "react";
import Container from "@/components/container";
import { Button } from "@nextui-org/button";

export default function EventPage() {
  return (
    <div className="-mt-16">
      <div className="h-[700px]">
        <MeshGradientAnimation
          blur={10}
          radius={0}
          leftradius={0}
          rightradius={0}
          opacity={true}
          img={
            "https://images.unsplash.com/photo-1622711321771-4a00d2bc0350?q=80&w=4664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          id={"mesh-gradient-profile"}
        >
          <div className="flex-1 h-[700px] flex items-end justify-end">
            <div className="w-[1024px] max-w-[1024px] mx-auto bg-gray flex flex-row p-8 rounded-3xl shadow-2xl rounded-b-[0px] gap-4">
              <Image
                width={300}
                height={600}
                alt="image event"
                className="rounded-3xl"
                src="https://images.unsplash.com/photo-1622711321771-4a00d2bc0350?q=80&w=4664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl">Noite eletronica no meu carro</h3>
                  <p className="text-base font-normal text-ellipsis line-clamp-3 mt-3">
                    Sit duis deserunt minim deserunt eu magna sit. Dolore sit
                    incididunt velit Lorem dolor incididunt consequat cillum
                    qui. Mollit aute excepteur minim magna ut proident mollit
                    incididunt ex sunt. Ad nisi esse proident amet. Adipisicing
                    ex est pariatur elit laborum. Cupidatat laborum cupidatat
                    amet velit labore dolor commodo. Magna nostrud ut nostrud
                    deserunt magna eiusmod officia sunt qui velit exercitation
                    Lorem duis eu.
                  </p>
                </div>
                <div className="flex justify-between">
                  <Button
                    radius="full"
                    color="default"
                    className="bg-white text-black font-semibold"
                  >
                    Comprar
                  </Button>

                  <div className="flex bg-[#333333] rounded-full items-center justify-center p-1">
                    <Image
                      alt="image event"
                      className="rounded-full"
                      height={30}
                      width={30}
                      objectFit="cover"
                      style={{
                        maxHeight: 30,
                      }}
                      src="https://images.unsplash.com/photo-1622711321771-4a00d2bc0350?q=80&w=4664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <p className="mx-2 text-sm  font-normal text-[#B2B2B2]">
                      Pedro Maia Frigo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MeshGradientAnimation>
      </div>
      <section className="container mx-auto mt-4">
        <div className="container mx-auto grid grid-cols-12 gap-x-[15px] gap-y-[15px] md:gap-y-[20px] md:gap-x-[20px] px-3">
          <div className=" col-span-12 md:col-span-12 lg:col-span-3 ">
            <h1 className="text-2xl mb-2">Informações</h1>
            <Container className="bg-gray  rounded-2xl h-full p-5">
              <h3 className="text-xl mb-3">Geral</h3>

              <p className="opacity-70 font-normal text-sm">Início do evento</p>
              <h3 className="mb-2 text-lg">22/01/2002 às 23:00</h3>
              <p className="opacity-70 font-normal text-sm">Fim do evento</p>
              <h3 className="mb-2 text-lg">22/01/2002 às 23:00</h3>
              <p className="opacity-70 font-normal text-sm">Duração</p>
              <h3 className="mb-2 text-lg">6 horas</h3>
              <p className="opacity-70 font-normal text-sm">Endereço</p>
              <h3 className="mb-2 text-lg">Rua Eugenio Feder,70</h3>
            </Container>
          </div>
          <div className="col-span-12 md:col-span-12 lg:col-span-5 ">
            <h1 className="text-2xl mb-2 opacity-0">.</h1>

            <Container className=" bg-gray rounded-xl h-full p-5">
              <h3 className="text-xl mb-3">Detalhes</h3>
              <p className="opacity-70 font-normal text-base">
                Sit duis deserunt minim deserunt eu magna sit. Dolore sit
                incididunt velit Lorem dolor incididunt consequat cillum qui.
                Mollit aute excepteur minim magna ut proident mollit incididunt
                ex sunt. Ad nisi esse proident amet. Adipisicing ex est pariatur
                elit laborum. Cupidatat laborum cupidatat amet velit labore
                dolor commodo. Magna nostrud ut nostrud deserunt magna eiusmod
                officia sunt qui velit exercitation Lorem duis eu.
              </p>
            </Container>
          </div>

          <div className="col-span-12 md:col-span-12 lg:col-span-4 md:mt-8 lg:mt-0 mt-8 ">
            <h1 className="text-2xl mb-2">Participantes</h1>
            <Container className="bg-gray rounded-xl h-full p-5 ">
              <h3 className="text-xl">Organizadores</h3>
            </Container>
          </div>
        </div>
      </section>
    </div>
  );
}
