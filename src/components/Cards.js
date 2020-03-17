import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 5em auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 5%;
  font-family: "Roboto Slab";
  padding: 10px;
  .card {
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4em 2.5em;
    color: #73787b;
    position: relative;
  }
  h1 {
    color: #eaf4dd;
    font-weight: 700;
    font-size: 103px;
    position: absolute;
    top: 0.25em;
    z-index: 0;
  }
  h4 {
    font-weight: 500;
    margin-top: 2em;
    z-index: 2;
  }
  p {
    font-size: 15px;
    margin-top: 1em;
    text-align: center;
  }
  svg {
    margin-top: 2em;
  }
`;
const Cards = () => {
  return (
    <Container>
      <div
        className="card"
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-easing="ease"
        data-sal-duration="1000"
      >
        <h1>01</h1>
        <h4>Natural Process</h4>
        <svg
          width="95"
          height="10"
          viewBox="0 0 95 10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 8l11.54-6 11.538 6 11.54-6 11.538 6 11.538-6 11.54 6L81.77 2 94 8"
            stroke-width="3"
            stroke="#84BE39"
            fill="none"
            fill-rule="evenodd"
          ></path>
        </svg>
        <p>
          Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
          Maecenas tempus, tellus eget condimentum.
        </p>
      </div>
      <div
        className="card"
        data-sal="slide-up"
        data-sal-delay="500"
        data-sal-easing="ease"
        data-sal-duration="1000"
      >
        <h1>02</h1>
        <h4>Healthy Products</h4>
        <svg
          width="95"
          height="10"
          viewBox="0 0 95 10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 8l11.54-6 11.538 6 11.54-6 11.538 6 11.538-6 11.54 6L81.77 2 94 8"
            stroke-width="3"
            stroke="#84BE39"
            fill="none"
            fill-rule="evenodd"
          ></path>
        </svg>
        <p>
          Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
          Maecenas tempus, tellus eget condimentum.
        </p>
      </div>
      <div
        className="card"
        data-sal="slide-up"
        data-sal-delay="1000"
        data-sal-easing="ease"
        data-sal-duration="1000"
      >
        <h1>03</h1>
        <h4>Full of Vitamins</h4>
        <svg
          width="95"
          height="10"
          viewBox="0 0 95 10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 8l11.54-6 11.538 6 11.54-6 11.538 6 11.538-6 11.54 6L81.77 2 94 8"
            stroke-width="3"
            stroke="#84BE39"
            fill="none"
            fill-rule="evenodd"
          ></path>
        </svg>
        <p>
          Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
          Maecenas tempus, tellus eget condimentum.
        </p>
      </div>
    </Container>
  );
};

export default Cards;
