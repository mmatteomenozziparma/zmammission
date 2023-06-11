<?php

use Frontend\Frontend;

$fe = new Frontend;
$fe->urlGetter();
$fe->menu();
?>
<section class="tictactoe">
    <div class="" id="modeSelection">
        <label for="pvp">
            <input type="radio" name="gioco" value="pvp" id="">pvp
        </label>
        <label for="pvc">
            <input type="radio" name="gioco" value="pvc" id="">
        </label>
    </div>
    <div class="" id="symbolSeletion">
        <label for="giocatore1">
            giocatore1:
            <select name="" id="giocatore1" class="">
                <option value="x">x</option>
                <option value="o">o</option>
            </select>
        </label>
        <label for="giocatore1">
            giocatore2:
            <select name="" id="giocatore2" class="">
                <option value="x">x</option>
                <option value="o">o</option>
            </select>
        </label>
    </div>
    <div class="tabella"></div>
    <div class="messaggio"></div>
    <script src="/Frontend/js/ticktacktoeg.js"></script>
</section>
<?php
$fe->footer();
?>