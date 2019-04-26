function calculaJuros(){
  
    //Captura dos valores dos inputs e declaração de variáveis
    var capital = $('#capital').val();
    var taxaJuros = $('#taxaJuros').val();
    var tempoAplicacao = $('#tempoAplicacao').val();
    
    //Vamos dividir a taxa de juros por 100
    var taxaJuros = taxaJuros/100;
  
    //Com as variáveis criadas e definidas, tá na hora da gente definer o montante, usando as variáveis acima
    var montante = capital * Math.pow((1 + taxaJuros), tempoAplicacao);
    
    //Agora é mamão com açúcar! Basta definir o valor total, na var tot e o valor mensal na var men.
    var tot = montante.toString(); //Converte o total para string
    var men = tot/tempoAplicacao; //Quanto pago mensalmente?
     
    //Bora exibir isso em alguns inputs na página
    $('#total').val(tot);
    $('#mensal').val(men);
  
   }