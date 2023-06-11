<?php

namespace Frontend;

class Frontend
{
    public $url;
    public function _construct()
    {
        $this->url;
    }
    public function head()
    { ?>

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>various exercises</title>
            <link rel="stylesheet" href="css/style.css">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js" integrity="sha384-fbbOQedDUMZZ5KreZpsbe1LCZPVmfTnH7ois6mU1QK+m14rQ1l2bGBq41eYeM/fS" crossorigin="anonymous"></script>
            <!-- bootstrap icons -->
            <link rel="stylesheet" href="<?= $this->urlGetter() ?>lib/bs_icons_1.8.3/bootstrap-icons.css">
            <!-- font awesome -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css">
        </head>

        <body>
        <?php

    }
    public function js()
    { ?>
            <script src="/Frontend/js/squareroot.js"></script>
            <script src="/Frontend/js/ticktacktoeg.js"></script>
    <?php
    }
    public function menu()
    {
        include __DIR__ . "/menu.php";
    }
    public function home()
    {
        include __DIR__ . "/home.php";
    }
    public function urlGetter()
    {
        return $this->url;
    }
    public function game()
    {
        include __DIR__ . "/game.php";
    }
    public function footer()
    {
        include __DIR__ . "footer.php";
    }
}
