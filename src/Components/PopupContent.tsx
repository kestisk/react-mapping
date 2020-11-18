import React from "react";
import thick from "../assets/images/thick.svg";
import { DepotType } from "./type";
import styled from "styled-components";
type DepotProps = {
  depot: DepotType;
};
export const PopupContent: React.FC<DepotProps> = ({ depot }) => {
  return (
    <PopupContainer>
      <BlockContainer>
        <div className="subTitle">name</div>
        <div className="name">{depot.stationName}</div>
      </BlockContainer>
      <div style={{ display: "flex" }}>
        <BlockContainer>
          <div className="subTitle">is it a depot</div>
          {depot.isDepot ? (
            <img src={thick} />
          ) : (
            <div style={{ color: "#4833ff" }}>-</div>
          )}
        </BlockContainer>
        <BlockContainer>
          <div className="subTitle">Latitude</div>
          <div className="name">{depot.latitude}</div>
        </BlockContainer>
        <BlockContainer>
          <div className="subTitle">Longitude</div>
          <div className="name">{depot.longitude}</div>
        </BlockContainer>
      </div>

      <div className="title">Refuel</div>
      <div style={{ display: "flex" }}>
        <BlockContainer>
          <div className="subTitle">Diesel</div>
          {depot.isFuelDiesel ? (
            <img src={thick} />
          ) : (
            <div style={{ color: "#4833ff" }}>-</div>
          )}
        </BlockContainer>
        <BlockContainer>
          <div className="subTitle">Petrol</div>
          {depot.isFuelPetrol ? (
            <img src={thick} />
          ) : (
            <div style={{ color: "#4833ff" }}>-</div>
          )}
        </BlockContainer>
      </div>
      <div className="title">Recharge</div>
      <div style={{ display: "flex" }}>
        <BlockContainer>
          <div className="subTitle">Residential</div>
          {depot.isElectricResidential ? (
            <img src={thick} />
          ) : (
            <div style={{ color: "#4833ff" }}>-</div>
          )}
        </BlockContainer>
        <BlockContainer>
          <div className="subTitle">Public</div>
          {depot.isElectricPublic ? (
            <img src={thick} />
          ) : (
            <div style={{ color: "#4833ff" }}>-</div>
          )}
        </BlockContainer>
        <BlockContainer>
          <div className="subTitle">Fast</div>
          {depot.isElectricFast ? (
            <img src={thick} />
          ) : (
            <div style={{ color: "#4833ff" }}>-</div>
          )}
        </BlockContainer>
        <BlockContainer>
          <div className="subTitle">Rapid</div>
          {depot.isElectricRapidDC ? (
            <img src={thick} />
          ) : (
            <div style={{ color: "#4833ff" }}>-</div>
          )}
        </BlockContainer>
        <div>
          <div className="subTitle">Bays</div>
          <div style={{ color: "#4833ff" }}>{depot.bays}</div>
        </div>
      </div>
    </PopupContainer>
  );
};
const BlockContainer = styled.div`
  margin-left: 10px;
`;
const PopupContainer = styled.div`
  height: 310px;
  width: 358px;
`;
