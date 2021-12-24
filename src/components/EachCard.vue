<template>
  <a class="card" :href="url" style="margin-top: 50px;margin-right: 10px;margin-left: 10px">
    <div class="card__background" :style="{backgroundImage: 'url(' + picUrl + ')', backgroundSize:'cover'}">
    </div>
    <div class="card__content" style="bottom: 0;background-color: rgba(234,234,234,0.93)">
      <h3 class="card__heading" style="font-family: 华文中宋;color: #752626;font-size: 20px">{{name}}</h3>
      <p class="card__category" style="color: #905E5E">{{content}}</p>
    </div>
  </a>
</template>

<script>
export default {
  name: "EachCard",
  props:{
    picUrl:URL,
    name:String,
    content:String,
    url:URL,
  },
  data(){
  },
  mounted() {
  }
}
</script>

<style scoped>
.card{
  list-style: none;
  position: relative;
}

.card:before{
  content: '';
  display: block;
  padding-bottom: 150%;
  width: 100%;
}

.card__background{
  background-size: cover;
  background-position: center;
  border-radius: var(--spacing-l);
  bottom: 0;
  filter: brightness(1.1) saturate(1.2) contrast(0.85);
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform-origin: center;
  trsnsform: scale(1) translateZ(0);
  transition:
      filter 200ms linear,
      transform 200ms linear;
}

.card:hover .card__background{
  transform: scale(1.05) translateZ(0);
}

.card-grid:hover > .card:not(:hover) .card__background{
  filter: brightness(0.8) saturate(1) contrast(1.2) blur(0px);
}

.card__content{
  left: 0;
  padding: var(--spacing-l);
  position: absolute;
  bottom: 0;
  padding:30px;
}

.card__category{
  font-size: 0.9rem;
  /*margin-bottom: var(--spacing-s);*/
  text-transform: uppercase;
  text-align: left;
}

.card__heading{
  color: var(--text-lighter);
  font-size: 1.9rem;
  text-shadow: 2px 2px 20px rgba(0,0,0,0.2);
  line-height: 1.4;
  word-spacing: 100vw;
}

</style>
