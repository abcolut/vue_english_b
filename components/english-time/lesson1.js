export default
    {
        mixAnswers: false,
        mixQuestions: true,
        questions: [
            {
                "id": 0,
                "question": "She ___ (work) here for three years now.",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "has been working.",
                "good": ["Present", "Perfect", "Continuous"],
                "description": "has been working. Действие началось в прошлом и продолжается до сих пор. Маркер for указывает на длительность, поэтому используется Present Perfect (или Present Perfect Continuous, если хочется подчеркнуть процесс)."
            },
            {
                "id": 1,
                "question": "What ___ (you / do) at 8 PM last night? I called you, but you didn’t answer.",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "were you doing.",
                "good": ["Past", "Continuous"],
                "description": "were you doing. Вопрос о действии, которое находилось в процессе в конкретный момент в прошлом (at 8 PM last night). Для этого используется Past Continuous."
            },
            {
                "id": 2,
                "question": "They ___ (just / finish) the project, so they can finally relax.",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "have just finished.",
                "good": ["Present", "Perfect"],
                "description": "have just finished. Слово just («только что») — классический маркер Present Perfect. Действие завершилось недавно, и его результат важен сейчас (they can relax)."
            },
            {
                "id": 3,
                "question": "Every Monday, I ___ (meet) my tutor to practice speaking.",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "meet",
                "good": ["Present"],
                "description": "meet. Регулярное, повторяющееся действие. Слова-маркеры every Monday требуют Present Simple."
            },
            {
                "id": 4,
                "question": "While I ___ (walk) to the bus stop, it started to rain.",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "was walking.",
                "good": ["Past", "Continuous"],
                "description": "was walking. Длительное фоновое действие в прошлом (while I was walking) прерывается коротким действием (it started to rain). Для фона используется Past Continuous. ## Если бы мы сказали I had walked to the bus stop…, это значило бы «я уже дошёл до остановки до того, как…», а по смыслу как раз наоборот: дождь начался, пока я ещё шёл."
            },
            {
                "id": 5,
                "question": "___ (you / ever / visit) the new art gallery in the city center?",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "Have you ever visited",
                "good": ["Present", "Perfect"],
                "description": "Have you ever visited. Вопрос о жизненном опыте без привязки к конкретному времени. Слово ever — маркер Present Perfect."
            },
            {
                "id": 6,
                "question": "He ___ (not / reply) to my email yet. I’m starting to worry.",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "hasn’t replied",
                "good": ["Present", "Perfect"],
                "description": "hasn’t replied. Слово yet в отрицаниях — маркер Present Perfect. Действие ожидается к текущему моменту, но ещё не произошло."
            },
            {
                "id": 7,
                "question": "Look at those dark clouds! It ___ (rain) soon.",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "is going to rain.",
                "good": ["BeGoingTo"],
                "description": "is going to rain. Предсказание, основанное на очевидных фактах в настоящем (Look at those dark clouds!). Для таких прогнозов используется конструкция be going to."
            },
            {
                "id": 8,
                "question": "We ___ (have) dinner when the doorbell rang.",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "were having",
                "good": ["Past", "Continuous"],
                "description": "were having. Длительное действие в прошлом (were having dinner) было прервано коротким действием (the doorbell rang). Для длительного действия нужен Past Continuous."
            },
            {
                "id": 9,
                "question": "She ___ (buy) a new laptop last week.",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "bought.",
                "good": ["Past"],
                "description": "bought. Указан конкретный момент в прошлом (last week). Это маркер Past Simple для завершённых действий."
            },
            {
                "id": 10,
                "question": "I think I ___ (leave) my wallet at home. I can’t find it anywhere.",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "have left.",
                "good": ["Present", "Perfect"],
                "description": "have left. Действие произошло в прошлом, но его результат важен сейчас (I can’t find it). Это типичная ситуация для Present Perfect."
            },
            {
                "id": 11,
                "question": "Right now, they ___ (discuss) the budget for the next quarter.",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "are discussing",
                "good": ["Present", "Continuous"],
                "description": "are discussing. Действие происходит в момент речи. Маркер right now требует Present Continuous."
            },
            {
                "id": 12,
                "question": "How long ___ (you / know) each other?",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "have you known.",
                "good": ["Present", "Perfect"],
                "description": "have you known. Вопрос о продолжительности действия, которое началось в прошлом и всё ещё актуально. Вопрос How long…? с таким смыслом требует Present Perfect. Тут ключ — в типе глагола. Know («знать») — это глагол состояния (stative verb), а не глагол действия. Он описывает состояние, а не процесс.\n Глаголы состояния не используют в Continuous (ни в Present Continuous, ни в Present Perfect Continuous). Нельзя сказать “I am knowing” или “I have been knowing”. \n Для таких глаголов, когда речь идёт о длительности («как долго?»), используют Present Perfect: How long have you known…?"
            },
            {
                "id": 13,
                "question": "When I ___ (arrive) at the station, the train had already left.",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "arrived.",
                "good": ["Past"],
                "description": "arrived. Два действия в прошлом: одно (поезд уехал) произошло раньше другого (я приехал). Для более позднего действия используется Past Simple. ### Continuous Нужно сменить ситуацию так, чтобы одно действие было процессом, а второе — коротким событием, которое его перебивает. When I was walking to the station, the train left.  While I was waiting at the station, the train arrived."
            },
            {
                "id": 14,
                "question": "He usually ___ (take) the subway, but today he ___ (drive) to work because his car is fixed.",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "takes; is driving.",
                "good": ["Present", "Continuous"],
                "description": "is driving. Takes — регулярное действие (Present Simple, маркер usually). Is driving — временное исключение из рутины в текущий период (Present Continuous, маркер today)."
            },
            {
                "id": 15,
                "question": "They ___ (not / see) each other since they had that big argument.",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "haven’t seen.",
                "good": ["Present", "Perfect"],
                "description": "haven’t seen. Действие не происходило с определённого момента в прошлом до настоящего времени. Маркер since требует Present Perfect."
            },
            {
                "id": 16,
                "question": "What time ___ (the meeting / start)? It’s scheduled for 3 PM.",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "does the meeting start.",
                "good": ["Present"],
                "description": "does the meeting start. Речь идёт о запланированном событии по расписанию. Для таких случаев используется Present Simple."
            },
            {
                "id": 17,
                "question": "I ___ (read) three books this month already.",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "have read.",
                "good": ["Present", "Perfect"],
                "description": "have read. Период времени ещё не закончился (this month), и есть указание на количество (three books). Это случай Present Perfect для действий в незавершённом периоде."
            },
            {
                "id": 18,
                "question": "At this time tomorrow, we ___ (fly) over the Atlantic Ocean.",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "will be flying.",
                "good": ["Future", "Continuous"],
                "description": "will be flying. Действие будет в процессе в конкретный момент в будущем (at this time tomorrow). Для этого используется Future Continuous."
            },
            {
                "id": 19,
                "question": "She ___ (study) French for two years before she moved to Paris.",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "had been studying.",
                "good": ["Past", "Perfect", "Continuous"],
                "description": "had been studying. Действие (изучение языка) длилось определённый период и завершилось до другого действия в прошлом (before she moved). Для длительного действия, предшествующего другому в прошлом, используется Past Perfect Continuous."
            },
            {
                "id": 20,
                "question": "The system ___ (restart) automatically every night at 2 AM.",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "restarts",
                "good": ["Present"],
                "description": "restarts. Регулярное, повторяющееся действие (каждую ночь) - Present Simple."
            },
            {
                "id": 21,
                "question": "Right now, the developers ___ (debug) the new feature in the test environment. ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "are debugging",
                "good": ["Present", "Continuous"],
                "description": "are debugging. Действие происходит в момент речи («right now») - Present Continuous."
            },
            {
                "id": 22,
                "question": "She ___ (send) the bug report to the team yesterday. ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "sent",
                "good": ["Past"],
                "description": "sent. Указано конкретное время в прошлом («yesterday») - Past Simple."
            },
            {
                "id": 23,
                "question": "We ___ (not / receive) any error notifications this week yet. ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "haven’t received",
                "good": ["Present", "Perfect"],
                "description": "haven’t received. Период ещё не закончился («this week»), есть маркер «yet» - Present Perfect."
            },
            {
                "id": 24,
                "question": "While the server ___ (update), the website was offline for 30 minutes. ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "was being updated",
                "good": ["Past", "Continuous"],
                "description": "was being updated. Длительное фоновое действие в прошлом, которое прерывалось - Past Continuous."
            },
            {
                "id": 25,
                "question": "By the time the manager arrived, the team ___ (already / finish) the deployment. ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "had already finished",
                "good": ["Past", "Perfect"],
                "description": "had already finished. Одно действие завершилось до другого в прошлом («by the time») - Past Perfect."
            },
            {
                "id": 26,
                "question": "Look at the screen! The progress bar ___ (move) very slowly. ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "is moving",
                "good": ["Present", "Continuous"],
                "description": "is moving. Привлечение внимания к действию, которое происходит прямо сейчас («Look!») - Present Continuous."
            },
            {
                "id": 27,
                "question": " He ___ (work) as a DevOps engineer for five years before he switched to cloud architecture. ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "had been working",
                "good": ["Past", "Perfect", "Continuous"],
                "description": "had been working. Длительное действие, которое продолжалось до определённого момента в прошлом - Past Perfect Continuous."
            },
            {
                "id": 28,
                "question": "Every Friday, the IT department ___ (release) a small update for the internal tools. ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "releases",
                "good": ["Present"],
                "description": "releases. Регулярность («Every Friday») - Present Simple."
            },
            {
                "id": 29,
                "question": "I think I ___ (leave) my laptop in the meeting room. I can’t find it. ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "have left",
                "good": ["Present", "Perfect"],
                "description": "have left. Действие в прошлом, результат важен сейчас (ноутбук не найден) - Present Perfect. Важное уточнение про «процесс, начатый давно -  Это частая путаница: Present Perfect не про долгий процесс, а про связь прошлого с настоящим. ## I left my laptop in the meeting room. (Past Simple) - Звучит как констатация факта из прошлого: «Я оставил ноутбук в переговорке». Без акцента на том, что это важно сейчас."
            },
            {
                "id": 30,
                "question": "They ___ (test) the new API all morning, so they’re tired now. ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "have been testing",
                "good": ["Present", "Perfect", "Continuous"],
                "description": "have been testing. Акцент на длительности действия, которое началось в прошлом и только что закончилось, с видимым результатом - Present Perfect Continuous."
            },
            {
                "id": 31,
                "question": "Last month, the company ___ (launch) a new mobile app for its employees. ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "launched",
                "good": ["Past"],
                "description": "launched. Конкретный момент в прошлом («last month») - Past Simple. *** perfect - By the end of last month, the company had launched a new mobile app for its employees. — К концу прошлого месяца компания уже запустила новое мобильное приложение для сотрудников. (Акцент: к этому моменту в прошлом запуск уже состоялся.)"
            },
            {
                "id": 32,
                "question": "At 3 PM yesterday, I ___ (write) code for the payment module. ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "was writing",
                "good": ["Past", "Continuous"],
                "description": "was writing. Действие находилось в процессе в конкретный момент в прошлом - Past Continuous. \n *** Past Simple (wrote) использовали бы, если смысл был не про «процесс в момент», а про факт или короткое завершённое действие в прошлом. Yesterday I wrote code for the payment module."
            },
            {
                "id": 33,
                "question": "This is the first time we ___ (use) this monitoring tool in production. ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "have used",
                "good": ["Present", "Perfect"],
                "description": "have used. Конструкция «This is the first time» требует Present Perfect для описания опыта."
            },
            {
                "id": 34,
                "question": "The network ___ (be) unstable since we upgraded the router. ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "has been",
                "good": ["Present", "Perfect"],
                "description": "has been. Состояние началось в прошлом («since») и продолжается до сих пор - Present Perfect."
            },
            {
                "id": 35,
                "question": "When I opened the terminal, the script ___ (already / run). ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "had already run",
                "good": ["Past", "Perfect"],
                "description": "had already run.  already («уже»). Оно почти всегда указывает на завершённость: к какому‑то моменту действие уже произошло. А момент у нас тоже в прошлом — when I opened the terminal. Поэтому и нужно Past Perfect: действие «скрипт отработал» случилось раньше, чем «я открыл терминал». Действие завершилось до другого действия в прошлом («when I opened») - Past Perfect."
            },
            {
                "id": 36,
                "question": "If the database ___ (crash), we will switch to the backup immediately. ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "crashes",
                "good": ["Present"],
                "description": "crashes. Условное предложение первого типа (реальная возможность в будущем): в части с «if» используется Present Simple."
            },
            {
                "id": 37,
                "question": "How long ___ (you / wait) for the build to complete? ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "have you been waiting",
                "good": ["Present", "Perfect", "Continuous"],
                "description": "have you been waiting. Вопрос о длительности действия, которое всё ещё продолжается - Present Perfect Continuous."
            },
            {
                "id": 38,
                "question": "He usually ___ (check) his email first thing in the morning. ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "checks",
                "good": ["Present"],
                "description": "checks. Привычка, регулярное действие («usually») - Present Simple."
            },
            {
                "id": 39,
                "question": "I ___ (just / install) the latest security patch on my machine. ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "have just installed",
                "good": ["Present", "Perfect"],
                "description": "have just installed. Маркер «just» («только что») - Present Perfect."
            },
            {
                "id": 40,
                "question": "Yesterday, they ___ (merge) the feature branch into the main repository. ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "merged",
                "good": ["Past"],
                "description": "merged. Конкретное завершённое действие в прошлом («yesterday») - Past Simple."
            },
            {
                "id": 41,
                "question": "Right now, a new user ___ (register) on the platform. You can see the notification pop up. ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "is registering",
                "good": ["Present", "Continuous"],
                "description": "is registering. Действие происходит в момент речи - Present Continuous."
            },
            {
                "id": 42,
                "question": "Before we deployed the update, we ___ (run) all unit tests. ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "had run",
                "good": ["Past", "Perfect"],
                "description": "had run. Действие произошло до другого действия в прошлом («before») - Past Perfect."
            },
            {
                "id": 43,
                "question": "She ___ (study) computer science at university when she decided to focus on cybersecurity. ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "was studying",
                "good": ["Past", "Continuous"],
                "description": "was studying. Длительное фоновое действие в прошлом, прерванное коротким действием - Past Continuous. #  She had studied computer science for two years before she decided… — «Она изучала информатику два года до того, как решила…» — тут важен порядок и предшествование."
            },
            {
                "id": 44,
                "question": "The new version of the software ___ (become) very popular among developers recently. ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "has become",
                "good": ["Present", "Perfect"],
                "description": "has become. Изменение, произошедшее за период, который ещё не закончился («recently») - Present Perfect."
            },
            {
                "id": 45,
                "question": "Every time a user logs in, the system ___ (verify) their credentials. ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "verifies",
                "good": ["Present"],
                "description": "verifies. Повторяющееся действие при каждом входе - Present Simple."
            },
            {
                "id": 46,
                "question": "I ___ (wait) for the download to finish for over an hour. It’s taking forever!",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "have been waiting",
                "good": ["Present", "Perfect", "Continuous"],
                "description": "have been waiting. Акцент на длительности ожидания, которое продолжается до сих пор («for over an hour») - Present Perfect Continuous"
            },
            {
                "id": 47,
                "question": "In 2020, our team ___ (build) the first prototype of the chatbot. ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "built",
                "good": ["Past"],
                "description": "built. Конкретный год в прошлом - Past Simple."
            },
            {
                "id": 48,
                "question": "At this time tomorrow, we ___ (demonstrate) the new dashboard to the client.",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "will be demonstrating",
                "good": " Future Continuous",
                "description": "will be demonstrating. Действие будет в процессе в конкретный момент в будущем («at this time tomorrow») - Future Continuous."
            },
            {
                "id": 49,
                "question": "Have you ___ (ever / try) programming in Rust? ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "ever tried",
                "good": ["Present", "Perfect"],
                "description": "ever tried. Вопрос об опыте без привязки к конкретному времени («ever») - Present Perfect."
            },
            {
                "id": 50,
                "question": "The error message ___ (appear) on the screen when I clicked the button. ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "appeared",
                "good": ["Past"],
                "description": "appeared. В конструкциях с when для таких «цепочек» коротких действий оба глагола ставят в Past Simple. *** Короткое завершённое действие в прошлом, следующее за другим - Past Simple. *** perfect -  The error message had already appeared on the screen before I clicked the button. *** - contiuous - The error message was loading on the screen when I clicked the button"
            },
            {
                "id": 51,
                "question": "Currently, the company ___ (develop) a new AI-powered tool for customer support. ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "is developing",
                "good": ["Present", "Continuous"],
                "description": "is developing. Процесс в текущий период («currently») - Present Continuous."
            },
            {
                "id": 52,
                "question": "By next Friday, we ___ (complete) the migration to the new cloud infrastructure. ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "will have completed",
                "good": ["Future", "Perfect"],
                "description": "will have completed. Действие завершится к определённому моменту в будущем («by next Friday») - Future Perfect."
            },
            {
                "id": 53,
                "question": "He ___ (work) on this bug fix for three days before he found the root cause. ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "had been working",
                "good": ["Past", "Perfect", "Continuous"],
                "description": "had been working. Длительное действие в прошлом до другого момента в прошлом - Past Perfect Continuous."
            },
            {
                "id": 54,
                "question": "Whenever there is a system outage, the alert ___ (send) to all admins automatically. ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "is sent",
                "good": ["Present"],
                "description": "is sent. Общее правило/регулярное действие при условии - Present Simple (в пассивном залоге, но по времени это Present Simple)."
            },
            {
                "id": 55,
                "question": "I ___ (not / see) any new commits in the repository today. ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "haven’t seen",
                "good": ["Present", "Perfect"],
                "description": "haven’t seen. Незавершённый период времени («today») + результат важен сейчас - Present Perfect."
            },
            {
                "id": 56,
                "question": "Last week, the security team ___ (discover) a vulnerability in the old plugin. ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "discovered",
                "good": ["Past"],
                "description": "discovered. Конкретный период в прошлом («last week») - Past Simple."
            },
            {
                "id": 57,
                "question": "While I ___ (browse) the documentation, I found a useful code snippet. ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "was browsing",
                "good": ["Past", "Continuous"],
                "description": "was browsing. Длительное фоновое действие в прошлом, во время которого произошло короткое действие - Past Continuous."
            },
            {
                "id": 58,
                "question": "She ___ (already / configure) the virtual machine, so you can start using it now. ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "has already configured",
                "good": ["Present", "Perfect"],
                "description": "has already configured. Результат действия важен в настоящем («so you can start using it») + маркер «already» - Present Perfect."
            },
            {
                "id": 59,
                "question": "Tomorrow, the lead developer ___ (present) the project roadmap to the stakeholders. ",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "will present",
                "good": ["Future"],
                "description": "will present. Запланированное действие в будущем - Future Simple."
            },


            // {
            //     "id": 60,
            //     "question": "The server is overloaded and the logs show errors. It ___ (crash) any minute now.",
            //     "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
            //     "good2": "is going to ...",
            //     "good": ["BeGoingTo"],
            //     "description": "is going to ... Предсказание, основанное на очевидных фактах в настоящем."
            // },
            // {
            //     "id": 61,
            //     "question": "I’ve downloaded the new IDE, so I ___ (install) it this evening.",
            //     "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
            //     "good2": "is going to ...",
            //     "good": ["BeGoingTo"],
            //     "description": "is going to ... Предсказание, основанное на очевидных фактах в настоящем."
            // },
            // {
            //     "id": 62,
            //     "question": "Look at the memory usage graph—it’s climbing fast. We ___ (run out) of RAM soon.",
            //     "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
            //     "good2": "is going to ...",
            //     "good": ["BeGoingTo"],
            //     "description": "is going to ... Предсказание, основанное на очевидных фактах в настоящем."
            // },
            // {
            //     "id": 63,
            //     "question": "She’s reading the documentation for React. She ___ (start) a new frontend project next week.",
            //     "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
            //     "good2": "is going to ...",
            //     "good": ["BeGoingTo"],
            //     "description": "is going to ... Предсказание, основанное на очевидных фактах в настоящем."
            // },
            // {
            //     "id": 64,
            //     "question": "The battery icon is flashing red. My laptop ___ (shut down) in two minutes.",
            //     "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
            //     "good2": "is going to ...",
            //     "good": ["BeGoingTo"],
            //     "description": "is going to ... Предсказание, основанное на очевидных фактах в настоящем."
            // },
            // {
            //     "id": 65,
            //     "question": "They’ve booked the conference room and invited the team. They ___ (have) a sprint planning meeting tomorrow.",
            //     "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
            //     "good2": "is going to ...",
            //     "good": ["BeGoingTo"],
            //     "description": "is going to ... Предсказание, основанное на очевидных фактах в настоящем."
            // },
            // {
            //     "id": 66,
            //     "question": "I’ve saved all the files to the external drive. I ___ (format) the old disk tomorrow.",
            //     "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
            //     "good2": "is going to ...",
            //     "good": ["BeGoingTo"],
            //     "description": "is going to ... Предсказание, основанное на очевидных фактах в настоящем."
            // },
            // {
            //     "id": 67,
            //     "question": "The CI/CD pipeline failed three times in a row. The team ___ (investigate) the issue right after lunch.",
            //     "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
            //     "good2": "is going to ...",
            //     "good": ["BeGoingTo"],
            //     "description": "is going to ... Предсказание, основанное на очевидных фактах в настоящем."
            // },
            // {
            //     "id": 68,
            //     "question": "He’s collecting user feedback and writing requirements. He ___ (design) a new UI layout soon.",
            //     "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
            //     "good2": "is going to ...",
            //     "good": ["BeGoingTo"],
            //     "description": "is going to ... Предсказание, основанное на очевидных фактах в настоящем."
            // },
            // {
            //     "id": 69,
            //     "question": "The update is downloading automatically. Your system ___ (restart) once it’s finished.",
            //     "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
            //     "good2": "is going to ...",
            //     "good": ["BeGoingTo"],
            //     "description": "is going to ... Предсказание, основанное на очевидных фактах в настоящем."
            // },


            {
                "id": 70,
                "question": "I ___ (install) the latest update yesterday, and now the app keeps crashing",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "installed",
                "good": ["Past"],
                "description": "installed (Past Simple — есть маркер yesterday)"
            },
            {
                "id": 71,
                "question": "She ___ (never / work) with this framework before, but she’s getting the hang of it really fast",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "has never worked",
                "good": ["Present", "Perfect"],
                "description": "has never worked (маркер NEVER - Present Perfect — жизненный опыт)"
            },
            {
                "id": 72,
                "question": "We ___ (finish) the database migration last night, so the new feature is ready for testing.",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "finished",
                "good": ["Past"],
                "description": "finished (Past Simple — есть маркер last night)"
            },
            {
                "id": 73,
                "question": "He ___ (just / fix) the bug in the login module—you can test it now.",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "has just fixed",
                "good": ["Present", "Perfect"],
                "description": "has just fixed (Present Perfect — маркер just, результат важен сейчас)"
            },
            {
                "id": 74,
                "question": "They ___ (release) the beta version two weeks ago, and since then they ___ (receive) a lot of useful feedback.",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "released",
                "good": ["Past"],
                "description": "released (Past Simple — конкретное время two weeks ago); have received (Present Perfect — период ещё не закончился, важен результат к текущему моменту)."
            },
            {
                "id": 75,
                "question": "When I ____ (logg) in to the dashboard, the system had already crashed and all the metrics were gone",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "logged",
                "good": ["Past"],
                "description": "past simle в связке с had"
            },
            {
                "id": 76,
                "question": "When she ____ (open) the pull request, the team had already merged a conflicting commit.",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "opened",
                "good": ["Past"],
                "description": "past simle в связке с had"
            },
            {
                "id": 77,
                "question": "When we ____ (arrive) at the sprint review, the client had already listed all the bugs they found.",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "arrived",
                "good": ["Past"],
                "description": "past simle в связке с had"
            },
            {
                "id": 78,
                "question": "When he ____ (check) the server logs, the backup process had already failed three times.",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "checked",
                "good": ["Past"],
                "description": "past simle в связке с had"
            },
            {
                "id": 79,
                "question": "When I ____ (start) debugging the script, the error had already disappeared and the code ran smoothly.",
                "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
                "good2": "started",
                "good": ["Past"],
                "description": "past simle в связке с had"
            }
        ],

        prompts: [
            "Запланированное действие? - simple",
            "Результат важен сейчас? - perfect",
            "Действие будет в процессе в момент времени?",
            "Действие закончено с результатом?",
            "Предсказание на основании очевидных фактов?",
            "Фоновое действие? - continous",
            "Изменение, произошедшее за период, который ещё не закончился - Present Perfect",
            "Незавершённый период времени («today») + результат важен сейчас - Present Perfect. (haven’t seen)",
        ]
    }

// {
//     "id": 80,
//     "question": "",
//       "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
//     "good2": "",
//     "good": [""],
//     "description": ""
// },
// {
//     "id": 81,
//     "question": "",
//       "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
//     "good2": "",
//     "good": [""],
//     "description": ""
// },
// {
//     "id": 82,
//     "question": "",
//       "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
//     "good2": "",
//     "good": [""],
//     "description": ""
// },
// {
//     "id": 83,
//     "question": "",
//       "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
//     "good2": "",
//     "good": [""],
//     "description": ""
// },
// {
//     "id": 84,
//     "question": "",
//       "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
//     "good2": "",
//     "good": [""],
//     "description": ""
// },
// {
//     "id": 85,
//     "question": "",
//       "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
//     "good2": "",
//     "good": [""],
//     "description": ""
// },
// {
//     "id": 86,
//     "question": "",
//       "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
//     "good2": "",
//     "good": "",
//     "description": ""
// },
// {
//     "id": 87,
//     "question": "",
//       "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
//     "good2": "",
//     "good": [""],
//     "description": ""
// },
// {
//     "id": 88,
//     "question": "",
//       "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
//     "good2": "",
//     "good": [""],
//     "description": ""
// },
// {
//     "id": 89,
//     "question": "",
//       "answers": ["Past", "Present", "Future", "Perfect", "Continuous", "BeGoingTo"],
//     "good2": "",
//     "good": [""],
//     "description": ""
// }

