<template>
    <h3 class="text-center">Конвертор формата markdown в формат json для Карточек английского языка</h3>
    <v-row>
        <textarea v-model="textIn" placeholder="разместите сюда текст маркдаун" class="col-12 textarea"></textarea>
    </v-row>
    <v-row>
        <v-btn @click="go">Создать файл</v-btn>
    </v-row>

    <v-row v-if=resJSON>
        <div v-for="x of resJSON">
            <br><b>id:</b> {{ x.id }}
            <br><b>question:</b> <span v-if="x.question">{{ x.question }}</span><span v-else>
                <h1 class="error">!!!!</h1>
            </span>
            <br><b>answers:</b> <span v-if="x.answers">{{ x.answers }}</span><span v-else>
                <h1 class="error">!!!!</h1>
            </span>
            <br><b>good:</b> <span v-if="x.good">{{ x.good }}</span><span v-else>
                <h1 class="error">!!!!</h1>
            </span>
            <br><b>description:</b> <span v-if="x.description">{{ x.description }}</span><span v-else>
                <h1 class="error">!!!!</h1>
            </span>
        </div>
    </v-row>


    <v-row>
        <v-col>
            <h3 class="text-center"> Структура markdown файла</h3>
            <pre>


        #Question
            вопрос
        ##Answers
            Ответ1
            Ответ2
        ##Good
            Правильный ответ
        ##Description
            Описание
        </pre>

        </v-col>
    </v-row>


    <!-- <v-row v-if="textOut">
        Результат:
        <div>{{ textOut }}</div>
    </v-row> -->

</template>
<script setup lang="tsx">
const textIn = ref("")
const textOut = ref("")
let resJSON = ref()
const go = () => {
    resJSON.value = parseQuestionsToJson(textIn.value)
    textOut.value = JSON.stringify(resJSON.value, null, 2);
}


function parseQuestionsToJson(text: string) {
    // Разбиваем текст на блоки по #Question
    const blocks = text.split(/\n#Question\s*/).filter(block => block.trim() !== '');
    let id = 0

    const result = blocks.map(block => {
        const lines = block.split('\n').map(line => line.trim()).filter(line => line !== '');

        let question = '';
        const answers = [];
        let good = '';
        let description = '';

        let currentSection = null;

        for (const line of lines) {
            if (line.startsWith('##Answers') || line.startsWith('##answers') || line.startsWith('Варианты ответов:')) {
                currentSection = 'answers';
                continue;
            }
            if (line.startsWith('##Good') || line.startsWith('##good') || line.startsWith('Правильный ответ:')) {
                currentSection = 'good';
                continue;
            }
            if (line.startsWith('##Description') || line.startsWith('##description') || line.startsWith('Объяснение:')) {
                currentSection = 'description';
                continue;
            }
            if (line.startsWith('##End') || line.startsWith('##end')) {
                currentSection = 'end';
                continue;
            }

            // Первая непустая строка вне секций — это вопрос (если не было явного #Question в начале блока)
            if (currentSection === null && !question) {
                question = line;
                continue;
            }

            if (currentSection === 'answers') {
                answers.push(line);
            } else if (currentSection === 'good') {
                good = line;
            } else if (currentSection === 'description') {
                description = description + "\n" + line;
            }
            if (currentSection === 'end') {
                // пропускаем
            }
        }
        id++

        return {
            id,
            question,
            answers,
            good,
            description
        };
    });

    return result
    // return JSON.stringify(result, null, 2);
}

</script>
<style scoped>
.textarea {
    width: 100%;
}

.error {
    color: brown
}
</style>