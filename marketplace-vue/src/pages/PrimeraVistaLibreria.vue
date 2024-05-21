<template>
    <div class="m-primera-vista-de">
      <div class="div-2">
        <div class="overlap-group">
          <div class="text-wrapper-6">Buscar Producto</div>
        </div>
        <Component class="component-2-instance" />
        <div class="rectangle" />
        <div class="overlap">
          <div class="text-wrapper-7">Agregar productos</div>
        </div>
        <div class="overlap-2">
          <div class="text-wrapper-8">Quitar productos</div>
        </div>
        <div class="overlap-3">
          <div class="ellipse" />
          <div class="ellipse-2" />
          <div class="ellipse-3" />
        </div>
        <Component56 class="component-56-instance" image="image-18-12.png" />
        <Component58 class="component-58-instance" image="image-18-13.png" />
        <Component59 class="component-59-instance" image="image-18-14.png" />
        <Component60 class="component-60-instance" image="image-18-15.png" />
        <div class="overlap-4">
          <Component56 class="component-21" image="image-18-16.png" />
          <Component62 class="component-21" image="image-18-17.png" />
        </div>
        <Component63 class="component-63-instance" image="image-18-18.png" />
        <Component64 class="component-64-instance" image="image-18-19.png" />
        <Component65 class="component-65-instance" image="image-18-20.png" />
        <div class="overlap-5">
          <Component56 class="component-21" image="image-18-21.png" />
          <Component67 class="component-21" image="image-18-22.png" />
        </div>
        <Component68 class="component-68-instance" image="image-18-23.png" />
        <Component69 class="component-69-instance" image="image-18-24.png" />
        <Component70 class="component-70-instance" image="image-18-25.png" />
        <img class="pappel-copia" alt="Pappel copia" src="pappel-copia-removebg-preview-3.png" />
      </div>
    </div>
</template>
  
<script>
  import { Component } from "./Component";
  import { Component56 } from "./Component56";
  import { Component58 } from "./Component58";
  import { Component59 } from "./Component59";
  import { Component60 } from "./Component60";
  import { Component62 } from "./Component62";
  import { Component63 } from "./Component63";
  import { Component64 } from "./Component64";
  import { Component65 } from "./Component65";
  import { Component67 } from "./Component67";
  import { Component68 } from "./Component68";
  import { Component69 } from "./Component69";
  import { Component70 } from "./Component70";
  
  export default {
    name: "MPrimeraVistaDe",
    components: {
      Component,
      Component56,
      Component58,
      Component59,
      Component60,
      Component62,
      Component63,
      Component64,
      Component65,
      Component67,
      Component68,
      Component69,
      Component70,
    },
  };
</script>
  
<style>
  .m-primera-vista-de {
    background-color: #f1ecd0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
  
  .m-primera-vista-de .div-2 {
    background-color: #f1ecd0;
    height: 1024px;
    position: relative;
    width: 1440px;
  }
  
  .m-primera-vista-de .overlap-group {
    background-image: url(./rectangle-2.svg);
    background-size: 100% 100%;
    height: 62px;
    left: 289px;
    position: absolute;
    top: 47px;
    width: 906px;
  }
  
  .m-primera-vista-de .text-wrapper-6 {
    color: #000000;
    font-family: "Inter-Medium", Helvetica;
    font-size: 20px;
    font-weight: 500;
    height: 34px;
    left: 25px;
    letter-spacing: 0;
    line-height: normal;
    opacity: 0.5;
    position: absolute;
    top: 13px;
    width: 284px;
  }
  
  .m-primera-vista-de .component-2-instance {
    background-color: #f0dbaf !important;
    left: 27px !important;
    position: absolute !important;
    top: 24px !important;
  }
  
  .m-primera-vista-de .rectangle {
    background-color: #f0dbaf;
    box-shadow: 0px 4px 4px #00000040;
    height: 69px;
    left: 1321px;
    position: absolute;
    top: 24px;
    width: 79px;
  }
  
  .m-primera-vista-de .overlap {
    background-color: #38c115;
    border: 1px solid;
    border-color: #000000;
    border-radius: 40px;
    height: 49px;
    left: 202px;
    position: absolute;
    top: 139px;
    width: 334px;
  }
  
  .m-primera-vista-de .text-wrapper-7 {
    color: #ffffff;
    font-family: "Inter-Bold", Helvetica;
    font-size: 30px;
    font-weight: 700;
    height: 36px;
    left: 27px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 4px;
    white-space: nowrap;
  }
  
  .m-primera-vista-de .overlap-2 {
    background-color: #fc0202;
    border: 1px solid;
    border-color: #000000;
    border-radius: 40px;
    height: 49px;
    left: 861px;
    position: absolute;
    top: 139px;
    width: 334px;
  }
  
  .m-primera-vista-de .text-wrapper-8 {
    color: #ffffff;
    font-family: "Inter-Bold", Helvetica;
    font-size: 30px;
    font-weight: 700;
    height: 36px;
    left: 41px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 4px;
    white-space: nowrap;
  }
  
  .m-primera-vista-de .overlap-3 {
    background-color: #f0dbaf;
    border: 1px solid;
    border-color: #000000;
    height: 826px;
    left: 1376px;
    position: absolute;
    top: 162px;
    width: 48px;
  }
  
  .m-primera-vista-de .ellipse {
    background-color: #ffffff;
    border-radius: 7.5px;
    height: 15px;
    left: 18px;
    position: absolute;
    top: 430px;
    width: 15px;
  }
  
  .m-primera-vista-de .ellipse-2 {
    background-color: #ffffff;
    border-radius: 7.5px;
    height: 15px;
    left: 18px;
    position: absolute;
    top: 380px;
    width: 15px;
  }
  
  .m-primera-vista-de .ellipse-3 {
    background-color: #ffffff;
    border-radius: 7.5px;
    height: 15px;
    left: 18px;
    position: absolute;
    top: 330px;
    width: 15px;
  }
  
  .m-primera-vista-de .component-56-instance {
    left: 73px !important;
    position: absolute !important;
    top: 219px !important;
  }
  
  .m-primera-vista-de .component-58-instance {
    left: 406px !important;
    position: absolute !important;
    top: 219px !important;
  }
  
  .m-primera-vista-de .component-59-instance {
    left: 739px !important;
    position: absolute !important;
    top: 219px !important;
  }
  
  .m-primera-vista-de .component-60-instance {
    left: 1072px !important;
    position: absolute !important;
    top: 219px !important;
  }
  
  .m-primera-vista-de .overlap-4 {
    border-radius: 10px;
    height: 199px;
    left: 73px;
    position: absolute;
    top: 503px;
    width: 250px;
  }
  
  .m-primera-vista-de .component-21 {
    left: 0 !important;
    position: absolute !important;
    top: 0 !important;
  }
  
  .m-primera-vista-de .component-63-instance {
    left: 406px !important;
    position: absolute !important;
    top: 503px !important;
  }
  
  .m-primera-vista-de .component-64-instance {
    left: 739px !important;
    position: absolute !important;
    top: 503px !important;
  }
  
  .m-primera-vista-de .component-65-instance {
    left: 1072px !important;
    position: absolute !important;
    top: 503px !important;
  }
  
  .m-primera-vista-de .overlap-5 {
    border-radius: 10px;
    height: 199px;
    left: 73px;
    position: absolute;
    top: 787px;
    width: 250px;
  }
  
  .m-primera-vista-de .component-68-instance {
    left: 406px !important;
    position: absolute !important;
    top: 787px !important;
  }
  
  .m-primera-vista-de .component-69-instance {
    left: 739px !important;
    position: absolute !important;
    top: 787px !important;
  }
  
  .m-primera-vista-de .component-70-instance {
    left: 1072px !important;
    position: absolute !important;
    top: 787px !important;
  }
  
  .m-primera-vista-de .pappel-copia {
    height: 98px;
    left: 139px;
    position: absolute;
    top: 24px;
    width: 100px;
  }
</style>
  