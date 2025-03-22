function calcular(tipo, valor) {

    if(tipo === 'acao'){

      if (valor === 'c') {
        //limpar o visor (id resultado)
        document.getElementById('resultado').value = ''
      }
      //seleciona operação aritmética
      if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
        document.getElementById('resultado').value += valor
      }

      if (valor === '=') {
        // biome-ignore lint/style/noVar: <explanation>
        // biome-ignore lint/correctness/noInnerDeclarations: <explanation>
                // biome-ignore lint/security/noGlobalEval: <explanation>
                                var valor_campo = eval(document.getElementById('resultado').value)
       
        document.getElementById('resultado').value = valor_campo
      }

    }else if(tipo === 'valor') {
      //manter valores no visor
      document.getElementById('resultado').value += valor
    }
  }