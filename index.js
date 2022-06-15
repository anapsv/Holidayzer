import express, { application } from 'express';

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "3/1/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
  ];

  const app = express();
  app.get('/holidays', (request, response) => {
    response.send(holidays)
  })
  app.listen(5000)

  app.get('/is-today-holiday', (request, response) => {
    response.send(frase)

  })
let frase = "Não, hoje não é feriado";
  const hoje = new Date();
console.log(hoje.toLocaleDateString());
for(let i = 0; i < holidays.length; i++){
  if(hoje.toLocaleDateString() === holidays[i].date){
    frase = `Sim, hoje é ${holidays[i].name}`;
  }
}