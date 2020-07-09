import React from "react";
import carro from "../images/carro.png";
import moto from "../images/moto.png";
import "./body.css";

export default () => {
  return (
    <div className="body">
      <div className="top">
        <div className="tab">
          <a href="#">
            <span className="imgIco">
              <img className="car" src={carro} alt="Carro"></img>
            </span>
            <span>
              <p className="txtBuy">COMPRAR</p>
              <h3 className="txtVeicle">CARROS</h3>
            </span>
          </a>
          <a href="#">
            <span className="imgIco">
              <img className="motocicle" src={moto} alt="Moto"></img>
            </span>
            <span>
              <p className="txtBuy">COMPRAR</p>
              <h3 className="txtVeicle">MOTOS</h3>
            </span>
          </a>
        </div>
        <div className="boxButton">
          <button className="saleBtn">Vender meu Carro</button>
          <button className="saleBtn">Vender minha Moto</button>
        </div>
      </div>
      <div className="form">
        <div className="checkboxes">
          <div className="checkboxes">
              <div>
               <input type="checkbox"></input>   
              </div>
              <div>
                 <label className="txtCheckbox">Novos</label> 
              </div>
          </div>
          <div className="checkboxes">
              <div>
               <input type="checkbox"></input>   
              </div>
              <div>
                 <label className="txtCheckbox">Usados</label> 
              </div>
          </div>
        </div>
        <div className="localModel">
          <div>
            <input className='where' type="text" placeholder="Onde"></input>
            <select  className='ray'>
              <option>Raio</option>
            </select>
          </div>
          <div>
            <select className="markSelect">
              <option>Marca</option>
            </select>
          </div>
          <div>
            <select className="modelSelect">
              <option>Modelo</option>
            </select>
          </div>
        </div>
        <div className="yearVersion">
          <select className="yearSelect">
            <option>Ano desejado</option>
          </select>
          <select className="priceSelect">
            <option>Faixa de Preço</option>
          </select>
          <select className="versionSelect">
            <option>Versão</option>
          </select>
        </div>
        <div className="bActions">
          <div className="divAdvanced">
            <p className="sAdvanced">> Busca Avançada</p>
          </div>
          <div className='divClean'>
            <a href="#">
              <p className='cleanText'>Limpar Filtros</p>
            </a>
          </div>
          <div className="divSearch">
            <button className="searchBtn">Ver Ofertas</button>
          </div>
        </div>
      </div>
    </div>
  );
};
