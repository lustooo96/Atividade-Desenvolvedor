function organizarArrayETrazerArrayDeNumeros({
  arrayDeNumeros,
  quantidadeDoRetorno,
  crescente,
}) {
  const arrayDeNumerosCopiado = arrayDeNumeros.slice();

  arrayDeNumerosCopiado.sort((a, b) => b - a);

  if (crescente) arrayDeNumerosCopiado.reverse();

  const resultadoComArrayDosNumeros = arrayDeNumerosCopiado.slice(
    0,
    quantidadeDoRetorno
  );

  return resultadoComArrayDosNumeros;
}

function multiplicarValoresArray(arrayDeNumeros) {
  const valorMultiplicado = arrayDeNumeros.reduce(
    (total, valorAtual) => total * valorAtual,
    1
  );

  return valorMultiplicado;
}

function produtoMaximo(arrayDeNumeros) {
  if (arrayDeNumeros.length < 3) return 0;

  const arrayComOsTresMaioresNumeros = organizarArrayETrazerArrayDeNumeros({
    arrayDeNumeros,
    quantidadeDoRetorno: 3,
  });

  const arrayComOsDoisMenoresNumeros = organizarArrayETrazerArrayDeNumeros({
    arrayDeNumeros,
    quantidadeDoRetorno: 2,
    crescente: true,
  }).map((valor) => Math.abs(valor));

  const arrayComValoresFinais = organizarArrayETrazerArrayDeNumeros({
    arrayDeNumeros: arrayComOsTresMaioresNumeros.concat(
      arrayComOsDoisMenoresNumeros
    ),
    quantidadeDoRetorno: 3,
  });

  const produto = multiplicarValoresArray(arrayComValoresFinais);

  return produto;
}

console.log('produtoMaximo', produtoMaximo([2, -4, 5, -5, 10]));
