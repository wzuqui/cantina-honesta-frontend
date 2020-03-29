import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Cabecalho } from "../../components/Cabecalho";
import { data } from "./data";

import { Style } from "./styles";

export function Produtos() {
  const [produtos, setProdutos] = useState(data);

  return (
    <Style>
      <Cabecalho
        buscaHandler={(texto: string) => {
          texto = texto.toLowerCase();
          setProdutos(
            data.filter(
              p =>
                p.titulo.toLowerCase().includes(texto) ||
                p.descricao.toLowerCase().includes(texto)
            )
          );
        }}
      />
      <section className="container">
        <h3>Produtos</h3>
        <div className="produtosLista">
          {produtos.map(item => (
            <div key={item.titulo} className="card">
              <div className="cardContainer">
                <div>
                  <div className="cardEsquerda">
                    <div className="cardTitulo">{item.titulo}</div>
                    <div className="cardDescricao">{item.descricao}</div>
                  </div>
                  <div className="cardValor">
                    {Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL"
                    }).format(item.valor)}
                  </div>
                </div>
                <div className="cardFoto">
                  <img width="100%" src={item.foto} alt={item.titulo} />
                  <div className="cardAdicionar">
                    <FiPlus color="#e02141" size={24} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Style>
  );
}
