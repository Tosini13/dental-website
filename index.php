<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dentist</title>
    <meta name="description" content="Dentist's website">
    <link href="https://fonts.googleapis.com/css?family=Alegreya:700|Ubuntu&display=swap" rel="stylesheet">
    <link href="packages/fontello/css/fontello.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" type="text/css" href="slick/slick.css" />
    <link rel="stylesheet" type="text/css" href="slick/slick-theme.css" />
    <link href="packages/menu/menu.css" rel="stylesheet" type="text/css">
    <link href="css/style.css" rel="stylesheet" type="text/css">
</head>

<body>
    <!-- <div class="startPage">
        <img src="images/logo/tooth.svg">
    </div> -->
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
    <!-- React -->
    <!-- <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script> -->
    <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
    <script src="js/teamReact.js" type='text/javascript'></script>
    <script src="js/serviceReact.js" type='text/javascript'></script>
    <!-- SLIDER -->
    <script type="text/javascript" src="slick/slick.min.js"></script>
    <!-- MINE -->
    <script src="js/structure.js" type="text/javascript"></script>
    <script src="packages/menu/menu.js" type="text/javascript"></script>
    <script>
        function scrollPhoto() {
            let photos = document.querySelectorAll("img.break");
            for (let photo of photos) {
                photo.style.transform = "translateY(" + (document.documentElement.scrollTop - photo.offsetTop) * 0.2 + "px)";
            }
        }

        window.onscroll = function() {
            headerStickyToggle();
            scrollPhoto();
        };


        $("#slideClinic").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            arrows: false,
        });

        var manager = new Manager();

        manager.clinic = new Clinic("One of the newest Private Dental Clinic in Szczecin, our Team represented by the best specialists studied in the best universities in Europe and USA performs dental procedures at the highest level dentistry mainly for adults, but as well for children." +
            "<br><br>Every year our medical staff participates in international trainings, improving their professional qualifications, thanks to which they use the possibility of using the latest techniques of modern dentistry in everyday work." +
            "<br><br>As a result patients in our clinic can get professional help and comprehensive information about dental treatment on site.", "clinic1.jpg", "clinic2.jpg", "clinic3.jpg");

        manager.team.push(new Member("dr", "James Dubble", "Dr James Dubble has long dentist experience in private clinics in London were he was one of the best dentists. In the end of 2019 he decided to move to Poland and he founded his own dental clinic.", "member1.jpg"));
        manager.team.push(new Member("dr", "Anna Robertson", "Dr Anna Robertson was the best and the most talented student in Uppsala where she came to Poland to develope her skills with the best team in the country.", "member2.jpg"));
        manager.team.push(new Member("dr", "Christopher Robson", "His decription. Dr Christopher Robson was graduated in Oxford in 1988. After that period he was working as a dentist in Manchester. However the biggest fame he gained in London were he has met his friend - dr James Dubble.", "member3.jpg"));
        manager.team.push(new Member("", "Eve Harly", "Eve Harly is yound student of Jagiellonian University. As the best out of her colleagues she got opportunity to prosper with the best team in Szczecin.", "member4.jpg"));

        manager.services.push(new Service("Teeth whitening", "The process of tooth whitening lightens the colour of a tooth. Tooth whitening can be achieved by either changing the intrinsic colour or by removing and controlling the formation of extrinsic stains.", "service1.jpg", "14.99"));
        manager.services.push(new Service("Scaling and root planing", "Scaling and root planing, also known as conventional periodontal therapy, non-surgical periodontal therapy, or deep cleaning, is a procedure involving removal of dental plaque and calculus and then smoothing, or planing, of the surfaces of the roots.", "service2.jpg", "20.00"));
        manager.services.push(new Service("Dental fluorosis", "Dental fluorosis is a common disorder, characterized by hypomineralization of tooth enamel caused by ingestion of excessive fluoride during enamel formation.", "service3.jpg", "5"));
        manager.services.push(new Service("Tooth polishing", "Tooth polishing is done to smooth the surfaces of teeth and restorations. The purpose of polishing is to remove extrinsic stains, remove dental plaque accumulation, increase aesthetics and to reduce corrosion of metallic restorations.", "service4.jpg", "20.5"));

        manager.style = new Style("bg1.jpg", "bg2.jpg", "bg3.jpg");

        console.log(manager);

        manager.createClinic();
        manager.createTeam();
        manager.createService();
        manager.createPrice();
        manager.createStyle();

        // window.onload = () => {
        //     let startPage = document.getElementsByClassName("startPage")[0];
        //     startPage.classList.add("startPageClosed");
        // }
    </script>
</body>

</html>