<template>
    <section class="content">
        <TestTimeBar
        :questionNumber="currentQuestion.id + 1"
        />

        <div id="touch-scroller">
                <button v-for="(question, index) in questions" :key="index"
                    class="btn"
                    @click="currentQuestionNumber = index"
                    :style="{'background-color': index === currentQuestionNumber ? '#d65d69' : ''}"
                >
                    {{index + 1}}
                </button>
            </div>

        <div class="mark-question">
            <div class="mark-question-container">
                <p>Вопрос №{{currentQuestion.id + 1}}</p>
            <input type="button" class="btn" value="Отметить">
            </div>
        </div>

        <div class="test-container">

            <div class="image-frame" v-if="currentQuestion.image === ''">
                <div class="question-text">
                    <p>{{currentQuestion.question}}</p>
                </div>
            </div>

            <div class="image-frame" v-else>
                <div class="question-text">
                    <img :src="imgUrl" alt="">
                </div>
                <p>{{currentQuestion.question}}</p>
            </div>
            
            <div class="answers-container" v-for="(answer, index) in currentQuestion.answers" :key="index"> 
                <TestAnswer 
                :answer="answer"
                :index="index"
                :rightIndex="currentQuestion.rightAnswerIndex"
                />
            </div>
        </div>
    </section>
</template>

<script>
import questionsData from "../assets/questionsData.json"
import TestTimeBar from "./TestTimeBar.vue";
import TestAnswer from "./TestAnswer.vue";

export default {
    name: "TestContent",
    data() {
        return {
            questions: questionsData,
            currentQuestionNumber : 0,
        };
    },
    components: { TestTimeBar, TestAnswer },
    
    methods: {
    },

    computed: {
        currentQuestion() {
            return this.questions[this.currentQuestionNumber]
        },

        imgUrl() {
            return require(`@/assets/img/${this.currentQuestion.image}`)
        },
    },
    
}
</script>
<style scoped>

p {
    padding-top: 4px;
    padding-bottom: 4px;
}
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    justify-content: center;
    background-color: #C2C9CF;
    border: 1px solid;
}

.mark-question {
    display: flex;
    justify-content: end;
}

.mark-question-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.question-info {
    color: white;
    margin-right: 10px;
}

.test-container {
    width: 600px;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
}

.image-frame {
    background-color: white;
}

.question-text {
    height: 400px;
    border: 2px solid rgb(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    padding-left: 10px;
}

.answers-container {
    background-color: #C2B9B0;
}

.btn-container {
    margin: 10px;
}

.btn {
    border-color: rgb(218, 44, 44) rgb(209, 209, 209) rgb(186, 186, 186);
    border-style: solid;
    border-width: 2px;
    padding: 1px 7px 2px;
    text-rendering: auto;
    color: initial;
    display: inline-block;
    text-align: start;
    margin: 5px;
    font: 400 11px system-ui;
}


</style>
