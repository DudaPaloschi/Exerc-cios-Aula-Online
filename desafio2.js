const teoremaDePitagoras = (catetoA, catetoB) => {
    const hipotenusa = Math.sqrt(catetoA ** 2 + catetoB ** 2);
    return hipotenusa;
};

const resultadoHipotenusa = teoremaDePitagoras(3, 4);
console.log("Hipotenusa:", resultadoHipotenusa);