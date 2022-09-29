<template>
<div
  @mouseover="classes.active = true"
  @mouseleave="classes.active = false"
  @click="checkAnswer()"
  :class="classes"
  class="answer"
>
  <span class="answer-letter">{{String.fromCharCode(65 + index)}}</span>
  <div class="answer-text">
    <p>{{answer}}</p>
  </div>
</div>
</template>

<script>

export default {
  name: 'TestAnswer',
  data(){
    return {
      classes:{
          active: false,
          selectedTrue: false,
          selectedFalse: false,
        }
    };
  },
  props: {
    answer: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    rightIndex: {
      type: Number,
      required: true,
    }
  },
  methods: {
        checkAnswer() {
            if(this.index === this.rightIndex){
              this.classes.selectedTrue = true
            }
            else
              this.classes.selectedFalse = true
        }
    },
    watch: {
      answer: {
        handler() {
        this.classes.selectedTrue = false
        this.classes.selectedFalse = false

        },
        deep: true
      },
    }
}
</script>
<style scoped>
  .answer {
    width: 600px;
    display: flex;
    padding: 5px 0px;
    transition: background-color .25s;
    border-bottom: 1px solid rgb(0, 0, 0, 0.25);
    background: #C2B9B0;
    cursor: pointer;
  }

.answer-letter{
  min-width: 50px;
  max-width: 50px;
  min-height: 50px;
  max-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 2px solid rgba(7, 66, 103, 0.5);
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0px 5px;
}

.answer-text {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  color: #C2B9B0;
  user-select: none;
}


p {
  font-weight: 500;
  margin: 10px;
  color: rgb(122, 122, 122)
}

.active {
  background: rgb(2, 4, 4);
}

.selectedTrue {
  background: rgb(82, 174, 104);
}

.selectedFalse {
  background: rgb(168, 77, 45);
}

</style>