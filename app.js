function play(userChoice) {
  const choices = ['グー', 'チョキ', 'パー'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let result;

  if (userChoice === computerChoice) {
    result = '引き分け！';
  } else if (
    (userChoice === 'グー' && computerChoice === 'チョキ') ||
    (userChoice === 'チョキ' && computerChoice === 'パー') ||
    (userChoice === 'パー' && computerChoice === 'グー')
  ) {
    result = 'あなたの勝ち！ 🎉';
  } else {
    result = 'コンピュータの勝ち！ 💻';
  }

  document.getElementById('result').textContent = 
    `あなた: ${userChoice}, コンピュータ: ${computerChoice} -> ${result}`;
}
