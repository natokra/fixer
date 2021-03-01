import styled from "styled-components";

export const BrazilIcon = () => (
  <Container
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
  >
    <CircleGreen cx="256" cy="256" r="256" />
    <Polygon points="256,100.174 467.478,256 256,411.826 44.522,256 " />
    <CircleWhite cx="256" cy="256" r="89.043" />
    <g>
      <Path
        d="M211.478,250.435c-15.484,0-30.427,2.355-44.493,6.725c0.623,48.64,40.227,87.884,89.015,87.884
		c30.168,0,56.812-15.017,72.919-37.968C301.362,272.579,258.961,250.435,211.478,250.435z"
      />
      <Path
        d="M343.393,273.06c1.072-5.524,1.651-11.223,1.651-17.06c0-49.178-39.866-89.043-89.043-89.043
		c-36.694,0-68.194,22.201-81.826,53.899c12.05-2.497,24.526-3.812,37.305-3.812C263.197,217.043,309.983,238.541,343.393,273.06z"
      />
    </g>
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

const Container = styled.svg({  height: "20px"});

const Path = styled.path({
  fill: "#0052B4",
});

const CircleWhite = styled.circle({
  fill: "#F0F0F0",
});

const CircleGreen = styled.circle({
  fill: "#6DA544",
});

const Polygon = styled.polygon({
  fill: "#FFDA44",
});
