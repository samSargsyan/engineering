import "./categories.scss";
import plumbing from "../../images/plumbing.png";
import tileSettling from "../../images/tileSettling.png";
import painting from "../../images/painting.jpg";
import insulation from "../../images/insulation.png";
import electrician from "../../images/electrician.png";
import engineer from "../../images/engineer.jpg";
import plaster from "../../images/plaster.jpg";
import quantitySurveyor from "../../images/quantitySurveyor.jpg";
import projectManager from "../../images/projectManager.png";
import lightingDesigner from "../../images/lightingDesigner.png";
import glassConstructing from "../../images/glassConstructing.jpg";
import windowInstallation from "../../images/windowInstallation.jpg";
import flooringInstallation from "../../images/flooringInstallation.png";
import hvacTechnician from "../../images/hvacTechnician.png";
import landSurveyor from "../../images/landSurveyor.png";
import concreteConstructor from "../../images/concreteConstructor.png";
import { useState } from "react";

const Categories = () => {
  const categories = [
    { name: "Plumbing", img: plumbing },
    { name: "Tile Setter", img: tileSettling },
    { name: "Painting", img: painting },
    { name: "Insulation", img: insulation },
    { name: "Electrician", img: electrician },
    { name: "Engineer", img: engineer },
    { name: "Plaster", img: plaster },
    { name: "Quantity Surveyor", img: quantitySurveyor },
    { name: "Project Manager", img: projectManager },
    { name: "Lighting Designer", img: lightingDesigner },
    { name: "Glass Constructing", img: glassConstructing },
    { name: "Window Installation", img: windowInstallation },
    { name: "Flooring Installation", img: flooringInstallation },
    { name: "HVAC Technician", img: hvacTechnician },
    { name: "Land Surveyor", img: landSurveyor },
    { name: "Concrete Contractor", img: concreteConstructor },
  ];

  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <>
      <div className="categoryCards">
        {categories
          .filter((item, index) => {
            return isShowMore ? true : index < 8;
          })
          .map((category, index) => (
            <div key={index} className="categoryCard">
              <img src={category.img} alt={category.name} />
              <span>{category.name}</span>
            </div>
          ))}
      </div>
      <button className="showMore" onClick={() => setIsShowMore(!isShowMore)}>
        {isShowMore ? "Show Less" : "Show More"}
      </button>
    </>
  );
};

export default Categories;
