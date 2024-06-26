import React, { useEffect, useState } from "react";
import { Gradient } from "./Gradient.js";
import { Container } from "./styles";

//@ts-ignore
import ColorThief from "colorthief";

interface MeshGradientAnimationProps {
  id: string;
  radius: number;
  leftradius: number;
  opacity: boolean;
  children: React.ReactNode;
  rightradius: number;
  img: string;
  blur: number;
}

function MeshGradientAnimation({
  id,
  radius,
  leftradius,
  opacity,
  children,
  img,
}: MeshGradientAnimationProps) {
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    const imgElement = new Image();
    imgElement.crossOrigin = "Anonymous";
    imgElement.src = img;
    imgElement.onload = () => {
      const colorThief = new ColorThief();
      const result = colorThief.getPalette(imgElement, 5);
      const hexColors = result.map((rgb: any) =>
        rgbToHex(rgb[0], rgb[1], rgb[2])
      );
      setColors(hexColors);
    };
  }, [img]);

  useEffect(() => {
    const gradient: any = new Gradient();
    gradient.initGradient("#" + id);
  }, [colors]);

  const rgbToHex = (r: number, g: number, b: number): string => {
    const toHex = (c: number) => {
      const hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  return (
    <Container
      colors={colors}
      radius={radius}
      leftradius={leftradius}
      opacity={opacity}
      className="mesh-gradient"
    >
      <canvas id={id} data-transition-in></canvas>
      <section className="content">{children}</section>
    </Container>
  );
}

export default React.memo(MeshGradientAnimation);
