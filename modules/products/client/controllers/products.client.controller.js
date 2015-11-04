<!-- Begining of Code starts with the Tabs-->
    <div id="tabs" ng-controller="TabsCtrl">

       <div class="btn-group" role="group" >
            <button id = "tab-li" type="button" class="btn tab-btn" ng-repeat = "tab in tabs" ng-class="{activetab:isActiveTab(tab.url)}"
                ng-click="onClickTab(tab)"><b>{{tab.title}}</b></button>
        </div>

        <div id="mainView">
            <div ng-include="currentTab"></div>
        </div>
    </div>
    <script type="text/ng-template" id="one.tpl.html">
        <div id="viewOne">
<!-- Make a Division for the Initial Header Stating our Cultural products -->
<div>
    <h1 align = "center"><b> Cultural Explorer Kits </b></h1>
</div>

<section ng-controller="cltProductsController">

        <!-- Division that will be used to repeat the product blocks -->
        <!-- Product blocks contain {Product Name, Product Thumbnail, Short Description, Price, see more link}-->
         <div class="row" >
        <div class="col-lg-10 " >
            <div class=" col-lg-12 col-lg-offset-1" ng-repeat="clt in cltproducts" >
                <div class="thumbnail" style = "background-color : #2e2f33; border-color:transparent; border-radius: 20px;">
                    <h2 class="text-center" style = "color:white"><span class="label label-info" style = "background-color:#00DD00"><b>{{clt.title}}</b></span></h2>
                    <img src ="{{clt.image}}" class="img-responsive" style="height: 50vh; width: 70vh; -moz-border-radius: 5px;
    border-radius: 10px;">
                    <div class="caption">
                        <div class="row text-center">
                            <div class="col-md-12 col-xs-12">
                                <h4 style = "color:white"><b>About Product</b></h4>
                            </div>
                        </div>
                        <p style = "color:white">{{clt.text}}</p>
                        <div class="row text-center">
                            <div class="col-md-6">
                                <a class="btn btn-primary btn-product"><span class="glyphicon glyphicon-triangle-right"></span>Learn More</a>
                            </div>
                            <div class="col-md-6">
                                <a href="#" class="btn btn-success btn-product"><span class="glyphicon glyphicon-shopping-cart"></span>Add to Cart</a></div>
                            </div>

                        <p> </p>
                    </div>
                </div>
            </div>
        </div>


</section>
        </div>
    </script>

    <script type="text/ng-template" id="two.tpl.html">
        <div id="viewTwo">
        <!-- Make a Division for the Initial Header Stating our Geological products -->
<div>
    <h1 align = "center"><b> Geological Explorer Kits </b></h1>
</div>

            <section ng-controller="geoProductsController">
   <!-- Division that will be used to repeat the product blocks -->
        <!-- Product blocks contain {Product Name, Product Thumbnail, Short Description, Price, see more link}-->
         <div class="row" >
        <div class="col-lg-10 " >
            <div class=" col-lg-12 col-lg-offset-1" ng-repeat="geo in geoproducts" >
                <div class="thumbnail" style = "background-color : #2e2f33; border-color:transparent; border-radius: 20px;">
                    <h2 class="text-center" style = "color:white"><span class="label label-info" style = "background-color:#00DD00"><b>{{geo.title}}</b></span></h2>
                    <img src ="{{geo.image}}" class="img-responsive" style="height: 50vh; width: 70vh; -moz-border-radius: 5px;
    border-radius: 10px;">
                    <div class="caption">
                        <div class="row text-center">
                            <div class="col-md-12 col-xs-12">
                                <h4 style = "color:white"><b>About Product</b></h4>
                            </div>
                        </div>
                        <p style = "color:white">{{geo.text}}</p>
                        <div class="row text-center">
                            <div class="col-md-6">
                                <a class="btn btn-primary btn-product"><span class="glyphicon glyphicon-triangle-right"></span>Learn More</a>
                            </div>
                            <div class="col-md-6">
                                <a href="#" class="btn btn-success btn-product"><span class="glyphicon glyphicon-shopping-cart"></span>Add to Cart</a></div>
                            </div>

                        <p> </p>
                    </div>
                </div>
            </div>
        </div>
</section>
        </div>
    </script>


<!-- Credit Given to Piotr (https://twitter.com/zalun) and Oskar (https://twitter.com/oskar) @ JFiddle for the use of the code which allowed me to create the tabs -->
