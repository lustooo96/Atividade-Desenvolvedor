function fatorial(numeroFatorial) {
  let numeroComResultadoDoFatorial = 1;

  if (numeroFatorial === 0 || numeroFatorial === 1) return 1;
  else if (numeroFatorial < 0) return null;

  for (i = 1; i <= numeroFatorial; i++) {
    numeroComResultadoDoFatorial *= i;
  }

  return numeroComResultadoDoFatorial;
}

console.log(fatorial(4));
