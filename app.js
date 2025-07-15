function play(playerChoice) {
  const choices = ['グー', 'チョキ', 'パー'];
  const aiChoice = choices[Math.floor(Math.random() * choices.length)];

  let result = '';
  if (playerChoice === aiChoice) {
    result = '引き分け！';
  } else if (
    (playerChoice === 'グー' && aiChoice === 'チョキ') ||
    (playerChoice === 'チョキ' && aiChoice === 'パー') ||
    (playerChoice === 'パー' && aiChoice === 'グー')
  ) {
    result = `あなたの勝ち！ AIは${aiChoice}`;
  } else {
    result = `あなたの負け... AIは${aiChoice}`;
  }

  document.getElementById('result').innerText = result;
}
