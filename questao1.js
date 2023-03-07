function palindromo(stringPalindromo) {
  const palindromoFormatado = stringPalindromo
    .replace(/\s/g, '')
    .toLowerCase();

  if (!palindromoFormatado) return false;

  for (let i = 0; i < palindromoFormatado.length / 2; i += 1) {
    if (
      palindromoFormatado[i] !==
      palindromoFormatado[palindromoFormatado.length - 1 - i]
    )
      return false;
  }

  return true;
}

console.log('palindromo', palindromo('renner'));
