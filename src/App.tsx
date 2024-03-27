import { useState } from 'react';
import bolo from './images/bolo.svg';
import IMbottom from './images/bottom-image.svg';
import IMtop from './images/top-image.svg';
import { useTime } from './hooks/useTime';
import { useForm } from 'react-hook-form';
import { Comemoracao, Container, Content, Definir, Timer } from './styles';
import { Fogos } from './components/Fogos';

function App() {

  const { register, handleSubmit, formState:{ errors }} = useForm();

  const [dataFin, setDataFin] = useState("");
  const [stateTimer, setStateTimer] = useState(false);

  const [days, hour, minute, seconds] = useTime(dataFin, stateTimer);
  const [showDefinir, setShowDefinir] = useState(true);
  const [showTimer, setShowTimer] = useState(false);
  const [showComemora, setShowComemora] = useState(false);

  const frases = [
    `Que este novo ano traga consigo toda a felicidade e 
    realizações que você merece. Parabéns pelo seu dia especial!`,
    `Hoje celebramos não apenas seu nascimento, mas também a luz e a 
    alegria que você trouxe para sua família. Feliz aniversário!`,
    `Neste dia tão especial, desejo que você receba todo o amor e 
    carinho que você compartilha com o mundo. Feliz aniversário!`,
    `Que seu aniversário seja tão radiante quanto o seu sorriso e 
    tão cheio de surpresas quanto os seus sonhos. Parabéns e celebre em grande estilo!`
  ];

  const onSubmit = (data: any) => {
    const now = new Date();
    const textDate = `${data.mes}-${data.dia}-${now.getFullYear()}-23:59:59`;
    const date = new Date(textDate);
    if (date > now) {
      setDataFin(textDate);
      setStateTimer(true);
      setTimeout(() => {
        setShowDefinir(false);
        setShowTimer(true);
      }, 500);
    }else{
      setDataFin(`${data.mes}-${data.dia}-${now.getFullYear()+1}-23:59:59`)
      setStateTimer(true);
      setShowDefinir(false);
      setShowTimer(true);
    }
  }

  const comemorar = () => {
    setShowTimer(false);
    setStateTimer(false);
    setShowComemora(true);
  }

  return (
    <Container>
      <img src={IMtop} className="image-wave-top" alt="logo" />
      <Content>
        {showDefinir && 
          <Definir>
            <h1>Coloque o dia do seu aniversário</h1>
            <div className='forms'>
              <div className='labels'>
                <label htmlFor="">Dia</label>
                <input 
                  type="text"
                  className={errors?.dia && "input-error"}
                  maxLength={2} 
                  {...register("dia", { required: true, max: 31, min: 1})}
                />
              </div>
              <div className='labels'>
                <label htmlFor="">Mês</label>
                <input 
                  type="text" 
                  className={errors?.mes && "input-error"}
                  maxLength={2} 
                  {...register("mes", { required: true, max: 12, min: 1 })} 
                />
              </div>
            </div>
            <button type='submit' onClick={() => handleSubmit(onSubmit)()}>
              Definir
            </button>
          </Definir>
        }
        {showTimer &&
          <>
            <Timer>
              <h1 className="title">Seu aniversário será em...</h1>

              <table className="relogio">
                <tr className="titles">
                  <th>Dias</th>
                  <th>Horas</th>
                  <th>Minutos</th>
                  <th>Segundos</th>
                </tr>
                <tr className="ponteiros">
                  <td style={{ display: 'flex',  }}>
                    <h1 className="numero">{days <  10 ? "0" + days: days}</h1>
                  </td>
                  <td className='twopoints'>
                    <h1 className="ponto">:</h1>
                  </td>
                  <td style={{ display: 'flex',  }}>
                    <h1 className="numero">{hour <  10 ? "0" + hour: hour}</h1>
                  </td>
                  <td className='twopoints'>
                    <h1 className="ponto">:</h1>
                  </td>
                  <td style={{ display: 'flex',  }}>
                    <h1 className="numero">{minute <  10 ? "0" + minute: minute}</h1>
                  </td>
                  <td className='twopoints'>
                    <h1 className="ponto">:</h1>
                  </td>
                  <td style={{ display: 'flex',  }}>
                    <h1 className="numero">{seconds <  10 ? "0" + seconds: seconds}</h1>
                  </td>
                </tr>
              </table>
              <button className="botao" onClick={comemorar}>
                Comemore Agora
              </button>
            </Timer>
            <div className="image-cake">
              <img src={bolo} className="image-cake" alt="logo" />
            </div>
          </>
        }
        {showComemora && 
          <Comemoracao>
            <Fogos />
            <div className='mensagem'>
              <h1>Parabéns para você pelo seu dia</h1>
              <p>{frases[Math.floor(Math.random() * 4)]}</p>
            </div>
          </Comemoracao>
        }
      </Content>
      <img src={IMbottom} className="image-wave-bottom" alt="logo" />
    </Container>
  );
}

export default App;
