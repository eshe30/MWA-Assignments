<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script>
        (function(){
            'use strict'
            const item = {
                "name": "Biscuits",
                "type": "regular",
                "category": "food",
                "price": 2.0
            };
            function applyCoupon(category) {
                return function (discount) {
                    return function (myItem) {
                        if (myItem.category == category) {
                            myItem.price *= 1-discount; 
                        }
                        return myItem;
                    }
                }
            }
            const x = applyCoupon("food")(0.1)(item).price === 1.8;
            console.log("applyCoupon", x);
        })();
        </script>
</body>
</html>