<template>
  <div
    class="rotating-card-container"
    :class="{ 'manual-flip': manualRotate, hover: manualRotateState }"
  >
    <md-card
      class="md-card-rotate"
      :class="[cardClass, cardColor]"
    >
      <div
        class="front"
        :class="{ 'front-background': layerBackground }"
        :style="bgFrontFullCards(frontCardImage)"
      >
        <md-card-content v-if="$slots.frontRotateCardContent">
          <slot name="frontRotateCardContent" />
        </md-card-content>
        <md-card-actions v-if="$slots.frontCardAction">
          <slot name="frontCardAction" />
        </md-card-actions>
      </div>

      <div
        class="back"
        :class="{ 'back-background': layerBackground }"
        :style="bgBackFullCards(backCardImage)"
      >
        <md-card-content v-if="$slots.backRotateCardContent">
          <slot name="backRotateCardContent" />
        </md-card-content>
      </div>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "RotatingCard",
  props: {
    frontCardImage: String,
    backCardImage: String,
    cardClass: String,
    cardBg: String,
    layerBackground: Boolean,
    manualRotate: Boolean,
    manualRotateState: Boolean
  },
  computed: {
    cardColor() {
      return this.cardBg ? `bg-${this.cardBg}` : "";
    }
  },
  methods: {
    bgFrontFullCards(frontCardImage) {
      if (this.frontCardImage) {
        return {
          backgroundImage: `url(${frontCardImage})`
        };
      }
    },
    bgBackFullCards(backCardImage) {
      if (this.backCardImage) {
        return {
          backgroundImage: `url(${backCardImage})`
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.rotating-card-container{
  @include perspective(800px);

  .md-card-rotate{
    background: transparent;
    box-shadow: none;

    &:after{
      display: none;
    }
  }

  .md-card {
    @include transitions(.8s,$transition-bezier-rotating-card);
    @include transform-style(preserve-3d);
    position: relative;

    .back, .front {
      @include backface-visibility(hidden);
      @include shadow-2dp();
      position: absolute;
      background-color: $white-color;
      border-radius: $border-radius-large;
      top: 0;
      left: 0;
      justify-content:center;
      align-content:center;
      display: flex;
      flex-direction: column;

      .md-card-body{
        justify-content:center;
        align-content:center;
        display: flex;
        flex-direction: column;
      }
    }

    .front {
      z-index: 2;
      position: relative;
    }

    .back {
      @include rotateY-180();
      z-index: 5;
      text-align: center;

      width: 100%;
      height: 100%;

      &.back-background{
        &:after{
          position: absolute;
          z-index: 1;
          width: 100%;
          height: 100%;
          display: block;
          left: 0;
          top: 0;
          content: "";
          background-color: rgba(0,0,0,.56);
          border-radius: $border-radius-large;
        }
      }
      .md-card-footer{
        .md-button{
          margin: 0;
        }
      }

      .md-card-body{
        padding-left: 15px;
        padding-right: 15px;
      }
    }
  }

  &:not(.manual-flip):hover{
    .md-card{
      @include rotateY-180();
    }
  }


  &.hover.manual-flip{
    .md-card{
      @include rotateY-180();
    }
  }

  .md-card-profile &{
    .front{
      text-align: left;
    }
  }
}


</style>
