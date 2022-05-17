import { db } from "firebaseConfig";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VerPrediction = () => {
  const { userId } = useParams();

  const [userPrediction, setUserPrediction] = useState();

  const getPrediction = async () => {
    const prediction = await db
      .firestore()
      .collection("predictions")
      .doc(userId)
      .get();
    setUserPrediction(prediction.data());
  };

  const getOctavosA = () => {
    let octavosA = [];
    const octavos = userPrediction.octavos;
    for (let i = 0; i < octavos.length; i) {
      const esPar = i % 2 === 0;
      octavosA.push(octavos[i]);
      esPar ? (i = i + 3) : (i = i + 1);
    }
    return octavosA;
  };

  const getOctavosB = () => {
    let octavosB = [];
    const octavos = userPrediction.octavos;
    for (let i = 1; i < octavos.length; i) {
      const esPar = i % 2 === 0;
      octavosB.push(octavos[i]);
      esPar ? (i = i + 3) : (i = i + 1);
    }
    return octavosB;
  };

  console.log(userPrediction);

  useEffect(() => {
    getPrediction();
  });
  return (
    <section className="knockoutRound">
      {userPrediction && (
        <>
          <Octavos
            octavosEquipos={getOctavosA()}
            grupo={"A"}
            cuartos={userPrediction.cuartosA}
          />
          <Cuartos
            cuartosEquipos={userPrediction.cuartosA}
            grupo={"A"}
            semis={userPrediction.semisA}
          />
          <Semis
            semisEquipos={userPrediction.semisA}
            grupo={"A"}
            final={userPrediction.final}
          />
          <Final
            finalistas={userPrediction.final.finalistas}
            tercerPuesto={userPrediction.final.tercerPuesto}
            ganadores={userPrediction.ganadores}
          />
          <Semis
            semisEquipos={userPrediction.semisB}
            grupo={"B"}
            final={userPrediction.final}
          />
          <Cuartos
            cuartosEquipos={userPrediction.cuartosB}
            grupo={"B"}
            semis={userPrediction.semisB}
          />
          <Octavos
            octavosEquipos={getOctavosB()}
            grupo={"B"}
            cuartos={userPrediction.cuartosB}
          />
        </>
      )}
    </section>
  );
};

const Octavos = ({ octavosEquipos, grupo, cuartos }) => {
  console.log(cuartos);
  return (
    <div className="octavos">
      <h3 className="title">Octavos {grupo}</h3>
      {octavosEquipos.map((country, idx) => {
        let esPar = idx % 2 === 0;
        let estaEnCuartos = cuartos.map((cuartoPais) =>
          cuartoPais.name === country.name ? true : false
        );
        return (
          <>
            {esPar && idx !== 0 && <span className="espacio"></span>}
            <button
              className={
                estaEnCuartos.includes(true)
                  ? "country title success"
                  : "country title"
              }
              onClick={() => null}
            >
              <img src={country.flag} alt="flag icon" />
              {country.name}
            </button>
            {esPar && (
              <h2 className="title" style={{ margin: 0 }}>
                VS
              </h2>
            )}
          </>
        );
      })}
    </div>
  );
};

const Cuartos = ({ cuartosEquipos, grupo, semis }) => {
  return (
    <div className="cuartos">
      <h3 className="title">Cuartos {grupo}</h3>
      {cuartosEquipos.map((country, idx) => {
        let esPar = idx % 2 === 0;
        let estaEnSemis = semis.map((equipoSemis) =>
          equipoSemis.name === country.name ? true : false
        );
        return country ? (
          <>
            {esPar && idx !== 0 && <span className="espacio"></span>}
            <button
              className={
                estaEnSemis.includes(true)
                  ? "country title success"
                  : "country title"
              }
              onClick={() => null}
            >
              <img src={country.flag} alt="flag icon" />
              {country.name}
            </button>
            {esPar && (
              <h2 className="title" style={{ margin: 0 }}>
                VS
              </h2>
            )}
          </>
        ) : (
          <>
            <button className="country vacio"> </button>
          </>
        );
      })}
    </div>
  );
};

const Semis = ({ semisEquipos, grupo, final }) => {
  return (
    <div className="semis">
      <h3 className="title">Semis {grupo}</h3>
      {semisEquipos.map((country, idx) => {
        let esPar = idx % 2 === 0;
        let estaEnLaFinal = final.finalistas.map((equipoSemis) =>
          equipoSemis.name === country.name ? true : false
        );
        return country ? (
          <>
            {esPar && idx !== 0 && <span className="espacio"></span>}
            <button
              className={
                estaEnLaFinal.includes(true)
                  ? "country title success"
                  : "country title"
              }
              onClick={() => null}
            >
              <img src={country.flag} alt="flag icon" />
              {country.name}
            </button>
            {esPar && (
              <h2 className="title" style={{ margin: 0 }}>
                VS
              </h2>
            )}
          </>
        ) : (
          <>
            <button className="country vacio"> </button>
          </>
        );
      })}
    </div>
  );
};

const Final = ({ finalistas, tercerPuesto, ganadores }) => {
  return (
    <div className="finalContainer">
      <div className="final">
        <h3 className="title">Final</h3>
        {finalistas.map((country, idx) => {
          let esElGanador = ganadores.ganador.map(
            (equipoGanador) => equipoGanador.name === country.name ? true : false
          );
          let esPar = idx % 2 === 0;
          return country ? (
            <>
              <button
                className={
                  esElGanador.includes(true)
                    ? "country title success"
                    : "country title"
                }
                onClick={() => null}
              >
                <img src={country.flag} alt="flag icon" />
                {country.name}
              </button>
              {esPar && (
                <h2 className="title" style={{ margin: 0 }}>
                  VS
                </h2>
              )}
            </>
          ) : (
            <>
              <button className="country vacio">{"  "}</button>
            </>
          );
        })}
      </div>
      <div className="tercer">
        <h3 className="title">Tercer puesto</h3>
        {tercerPuesto.map((country, idx) => {
          let esPar = idx % 2 === 0;
          let esElGanador = ganadores.tercero.map(
            (equipoGanador) => equipoGanador.name === country.name ? true : false
          );
          return country ? (
            <>
              <button
                className={
                  esElGanador.includes(true)
                    ? "country title success"
                    : "country title"
                }
                onClick={() => null}
              >
                <img src={country.flag} alt="flag icon" />
                {country.name}
              </button>
              {esPar && (
                <h2 className="title" style={{ margin: 0 }}>
                  VS
                </h2>
              )}
            </>
          ) : (
            <>
              <button className="country vacio">{"  "}</button>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default VerPrediction;
