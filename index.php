<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dentist</title>
    <meta name="description" content="Dentist's website">
    <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet">
    <link href="packages/fontello/css/fontello.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" type="text/css" href="slick/slick.css" />
    <link rel="stylesheet" type="text/css" href="slick/slick-theme.css" />
    <link href="packages/menu/menu.css" rel="stylesheet" type="text/css">
    <link href="css/style.css" rel="stylesheet" type="text/css">
</head>

<body>
    <header>
        <?php require "packages/menu/menu.html" ?>
    </header>
    <main>
        <?php require "html/main.html" ?>
    </main>
    <footer>
        <?php require "html/footer.html" ?>
    </footer>
    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <!-- SLIDER -->
    <script type="text/javascript" src="slick/slick.min.js"></script>
    <!-- SLIDER -->
    <script>
        $(document).ready(function() {
            $(".slideClinic").slick({
                prevArrow: '<i class="demo-icon icon-ico_arrow-left slick-my-next"></i>',
                nextArrow: '<i class="demo-icon icon-ico_arrow-right slick-my-prev"></i>',
                slidesToShow: 1,
                slidesToScroll: 1,
                // autoplay: true,
                // autoplaySpeed: 3000,
                dots: true,
                arrows: false,
                responsive: [{
                    breakpoint: 980,
                    settings: {
                        dots: true,
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                }, {
                    breakpoint: 650,
                    settings: {
                        dots: true,
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }]
            });

        });
    </script>
    <!-- MINE -->
    <script src="packages/menu/menu.js" type="text/javascript"></script>
    <script src="js/events.js" type="text/javascript"></script>
</body>

</html>