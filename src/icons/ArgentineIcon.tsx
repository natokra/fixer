import styled from "styled-components";

export const ArgentineIcon = () => (
  <Container
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    // style="enable-background:new 0 0 512 512;"
    xmlSpace="preserve"
  >
    <Circle cx="256" cy="256" r="256" />
    <g>
      <Path d="M256,0C154.506,0,66.81,59.065,25.402,144.696h461.195C445.19,59.065,357.493,0,256,0z" />
      <Path d="M256,512c101.493,0,189.19-59.065,230.598-144.696H25.402C66.81,452.935,154.506,512,256,512z" />
    </g>
    <Polygon
      points="332.515,256 301.25,270.707 317.899,300.986 283.949,294.491 279.647,328.787 256,303.563 
	232.352,328.787 228.051,294.491 194.101,300.985 210.749,270.706 179.485,256 210.75,241.293 194.101,211.015 228.05,217.509 
	232.353,183.213 256,208.437 279.648,183.213 283.949,217.509 317.9,211.015 301.251,241.294 "
    />
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
  </Container>
);

const Container = styled.svg({
  height: "20px"
});

const Circle = styled.circle({
  fill: "#F0F0F0",
});

const Path = styled.path({
  fill: "#338AF3",
});

const Polygon = styled.polygon({
  fill: "#FFDA44",
});
