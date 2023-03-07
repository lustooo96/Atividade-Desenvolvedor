function fatorial(numeroFatorial) {
  let numeroComResultadoDoFatorial = 1;

  if (numeroFatorial === 0 || numeroFatorial === 1) return 1;
  else if (numeroFatorial < 0) return null;

  for (let i = 1; i <= numeroFatorial; i += 1) {
    numeroComResultadoDoFatorial *= i;
  }

  return numeroComResultadoDoFatorial;
}

console.log(fatorial(4));
