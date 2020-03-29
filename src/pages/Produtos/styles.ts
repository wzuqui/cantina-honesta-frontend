import styled from "styled-components";

export const Style = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;

  > .container {
    margin: 0 auto;
    padding: 24px;
    max-width: 940px;

    > h3 {
      font-weight: bold;
    }
  }

  .produtosLista {
    margin-top: 24px;
    max-width: 940px;
    flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
  }

  .card {
    padding: 18px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 18px;
    width: 100%;
    cursor: pointer;
    transition: box-shadow 0.2s;

    &:hover {
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.5);
    }

    > .cardContainer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;

      > div:first-child {
        display: grid;
        grid-template-rows: 1fr 20px;
      }

      > div .cardTitulo {
        line-height: 24px;
      }

      > div .cardDescricao {
        margin-top: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        color: #bbb;
      }

      > div .cardValor {
        color: #e02141;
      }

      > .cardFoto {
        position: relative;

        > img {
          border-radius: 8px;
          object-fit: cover;
          height: 140px;
        }
        > .cardAdicionar {
          position: absolute;
          bottom: 0;
          right: 0;
          background-color: #fff;
          box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.4);

          border-radius: 50%;
          width: 40px;
          height: 40px;
          line-height: 40px;
          font-size: 35px;
          font-weight: 700;
          text-align: center;
        }
      }
    }
  }
`;
