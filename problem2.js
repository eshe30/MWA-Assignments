<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script> 
        (function(){
            'use strict';
            function isWeekend(){
            const todayDate=new Date();
            const day=todayDate.getDay();
             
            switch(day){
                case 0:
                case 6:
                       return true;
                default:
                       return false;
            }
        }
        console.log('isWeekend', isWeekend());
        })();
    </script>
</body>
</html>