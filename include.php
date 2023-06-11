<?php
session_start();
spl_autoload_register(function ($class) {
    $parts = str_replace('\\', '/', $class);
    if (file_exists(__DIR__ . "/" . $parts . ".php"))
        include __DIR__ . "/" . $parts . ".php";
});
