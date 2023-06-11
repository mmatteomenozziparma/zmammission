<?php

use Frontend\frontend;

include "include.php";
$fe = new Frontend;
$fe->head();
$fe->menu();
$fe->footer();
$fe->js();
