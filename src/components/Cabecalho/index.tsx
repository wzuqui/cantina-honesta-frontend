import React from "react";
import styled from "styled-components";
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import logoImg from "../../assets/logo.png";

const Styled = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  color: #13131a;
  padding: 0 32px;
  padding-top: 10px;
  padding-bottom: 10px;

  border-bottom: 1px solid;
  border-color: #ccc;

  > .lupa {
    padding: 5px;
    border-radius: 4px;
    background-color: #f5f5f5;
    border: 1px solid #eee;
    width: 40%;

    > label {
      position: relative;
      font-size: 22px;
    }

    > label input {
      border: none;
      padding-left: 32px;
      line-height: 32px;
      width: 100%;
      background-color: transparent;
    }
    > label svg {
      position: absolute;
      height: 32px;
      left: 5px;
      color: #13131a;
      pointer-events: none;
    }
  }

  > .cliente .clientePropriedade {
    color: #ccc;
    font-weight: bold;
  }

  > .cliente .clienteValor {
    color: #333;
  }

  > .sacola {
    transition: color 0.2s;

    &:hover {
      color: #e02041;
      cursor: pointer;
    }
    svg {
      font-size: 22px;
      vertical-align: middle;
      margin: 0 5px 0 0;
    }
  }
`;

interface IProps {
  buscaHandler: (texto: string) => void;
}

export const Cabecalho: React.FC<IProps> = (props: IProps) => {
  return (
    <Styled>
      <img src={logoImg} alt="Cantina Honesta" />
      <div className="lupa">
        <label htmlFor="busca">
          <input
            onChange={e => props.buscaHandler(e.target.value)}
            placeholder="Busque por item"
          />
          <FiSearch />
        </label>
      </div>
      <div className="cliente">
        <div className="clientePropriedade">NOME</div>
        <div className="clienteValor">Willian Luis Zuqui</div>
      </div>
      <div className="sacola">
        <FiShoppingBag />
        <span className="sacolaTexto">Sacola</span>
      </div>
    </Styled>
  );
};
