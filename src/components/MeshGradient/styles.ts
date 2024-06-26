import styled from "styled-components";

export const Container : any = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${(props: any) =>
    props.colors ? props.colors[0] : "#000"};

  border-radius: ${(props: any) =>
    props.radius ? props.radius : 0}px !important;
  border-bottom-left-radius: ${(props: any) =>
    props.leftradius && props.leftradius}px !important;
  canvas {
    width: 100%;
    height: 100%;
    --gradient-color-1: ${(props: any) =>
      props.colors ? props.colors[0] : "#000"};
    --gradient-color-2: ${(props: any) =>
      props.colors ? props.colors[1] : "#000"};
    --gradient-color-3: ${(props: any) =>
      props.colors ? props.colors[2] : "#000"};
    --gradient-color-4: ${(props: any) =>
      props.colors ? props.colors[3] : "#000"};

    animation-name: example;
    animation-duration: 4s;
    animation-timing-function: ease-in-out;
    opacity: 0.5;
  }

  @keyframes example {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.5;
    }
  }

  .content {
    position: absolute;
    width: 100%;
    height: 100%;

    background-color: ${(props: any) =>
      props.opacity ? "rgba(0,0,0,0.3)" : "transparent"};

    top: 0;
    z-index: 0;
  }
`;
