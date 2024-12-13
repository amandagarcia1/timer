const timeElement = document.querySelector('.time');
const resetButton = document.getElementById('resetButton'); // Adicione um botão de reinício ao HTML

// Definindo a data de contagem regressiva
const countDownDate = new Date('December 20, 2024 00:00:00').getTime();

let intervalId;

function updateCount() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  // Calculando dias, horas, minutos e segundos
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timeElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(intervalId);
    timeElement.textContent = "A contagem acabou!";
  }
}

// Iniciando a contagem
function startCount() {
  intervalId = setInterval(updateCount, 1000);
}

// Reiniciando a contagem
function resetCount() {
  clearInterval(intervalId);
  startCount();
}

// Chamando a função para iniciar a contagem
startCount();

// Adicionando um event listener ao botão de reinício
resetButton.addEventListener('click', resetCount);