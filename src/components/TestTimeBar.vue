<template>
    <div class="questions-progress">
        <div class="questions-progress-wrapper">
            <div class="test-title">
                <p>Тест для категории B</p>
            </div>
            <div class="remaining-time">
                <p>Осталось времени:</p>
                <div class="time-counter">29:45</div>
            </div>
            <div class="answered">
                <p>Количество вопросов:</p>
                <div class="counter">{{questionNumber}} из 20</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "TestTimeBar",
    props: {
        questionNumber: {
        type: Number,
        required: true,
        },
  }
}
</script>
<style scoped>

.questions-progress {
    width: var(--page-max-width);
    max-height: 70px;
    display: flex;
    justify-content: center;
    background-color: #C2B9B0;
    border: 0.5px solid;
    margin: 10px 0;
}

.questions-progress-wrapper {
    width: 100%;
    margin: 16px;
    display: flex;
    justify-content: space-between;
}

.test-title {
    font-weight: 400;
    margin: 0px 5px;
    display: flex;
    align-items: center;
}

.remaining-time {
    font-weight: 500;
    margin: 0px 5px;
    display: flex;
    align-items: center;
}

.time-counter {
    font-weight: 500;
    margin: 0px 5px;
    display: flex;
    align-items: center;
}

/* .time-progress-bar {
    --width: 240px;
    width: var(--time-progress-bar-width);
    height: 10px;
    border-radius: 4px;
    background-color: rgb(0, 84, 136);
    display: flex;
    align-items: center;
} */

/* .passed {
    width: 60%;
    height: 6px;
    margin: 2px;
    border-radius: 2px;
    background-color: rgb(252, 139, 41);
    display: flex;
    align-items: center;
} */

.answered {
    margin: 0px 5px;
    display: flex;
    align-items: center;
}

.counter {
    padding: 10px;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    font-weight: 900;
    display: flex;
    align-items: center;
    margin-left: 10px;
}

</style>
