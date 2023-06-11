$document.ready(function(){
//imizailizzaionone dei simboli
let giocatore1='x';
let giocatore2='o';
let currentPlayer='x';
let gameOver=false;//partota in corso 
let gioco='pvp';//inizializzaione del tipo
//imsiniazioni oggetti constanti 
const tabella= $('.tabella ') ;
const messaggio =$('.messaggio ');
// tipo patyita
$('.modeSelection input').on('change', function() {
    gioca = $(this).val();//imposta il modo di guocare
    drawLaunchTable();
});
//sekezione del simbolo 
$('.symbolSelection select').on('change',function()
{
    const giocatore= $(this).attr('id');//inizializza il giocatore
    const symbol= $(this).val();//iniializza il simbolo 
    giocatore==(giocatore==='giocatore1-symbol')?giocatore1=symbol:giocatore2=symbol;//seleziona simbolo
    drawLaunchTable();
}
);
function mossa(){
    if ((gameOver)||$(this).text()!=='') {
         return true;
    }
}
//stato della partita
$(this).text(currentPlayer)
if (gamewinner(currentPlayer)) {
    message.text('il ${currentPlayer} ha vinto');
    gameOver=true;
} //vince giocatore
    
else if(pep())
{
    message.text("It's a draw!");
    gameOver = true;
}//la partitaè in pareggio
else 
{
   currentPlayer=currentPlayer=== giocatore1?giocatore2:giocatore1;//controlla di chi è il tuno 
   //contrlla se il p2 è umano 
   gioco=((gioco==='pvc')&&(currentPlayer=giocatore2))?computer():message.text('è il tuo turno: ${currentPlayer}');

}
function computer()
{
        const availableCells = Array.from(cells).filter(function(cell) {
            return cell.textContent === '';
        });

        const randomCell = availableCells[Math.floor(Math.random() * availableCells.length)];//mossa generata dal pc
        randomCell.textContent = currentPlayer;

        if (gamewinner(currentPlayer)) {
            document.querySelector('.message').textContent = `Player ${currentPlayer} wins!`;
            gameOver = true;
        } 
        else if (pep()) {
            document.querySelector('.message').textContent = "It's a draw!";
            gameOver = true;
        } 
        else 
        {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
};
$(document).ready(function () {
        drawLaunchTable();
    });
    
  function drawLaunchTable() 
  {
    tabella.empty();
    gameOver = false;

    for (let i = 0; i < 9; i++) 
    {
        const cell=$('<div>').addClass('cell');//crea tabella
        cell.on('click',mossa);//mossa fatta
        tabella.append('cell');//mossa in tabella
      
        
        
    }
    message.text('è il turno di {giocatore}');
    
  }
 
  
  
  function gamewinner(giocatore) 
  {

    const cells=$('.cells');
    const cv=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[3,4,5],[6,7,8],[8,5,2],[6,4,2]];
    for (combin in cv) {
        const [sw1,sw2,sw3]=combin;
        if ((cells.eq(sw1).text()===giocatore)&&(cells.eq(sw2).text()===giocatore)&&(cells.eq(sw3).text()===giocatore))      
        {
            return true;  
        }
    }
    return false;
  }
function pep(){
    const cells = $('.cell');
    return cells.filter(function() {
        return $(this).text() === '';
    }).length === 0;
}
});

