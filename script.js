class UltimateRobot {
    constructor() {
        this.robotElement = document.getElementById('robot');
        this.chatMessages = document.getElementById('chat-messages');
        this.userInput = document.getElementById('user-input');
        this.currentAnimation = null;
        this.isTalking = false;
        this.isSleeping = false;
        this.colors = ['#4a90e2', '#ff5722', '#8bc34a', '#9c27b0', '#607d8b', '#00bcd4', '#e91e63'];
        this.currentColorIndex = 0;
        this.danceStyles = ['dancing', 'dance2', 'dance3'];
        this.currentDanceStyle = null;
        
        // Enhanced knowledge base with more categories and responses
        this.knowledgeBase = {
            
        
       "hobbies": {
        patterns: ["what are your hobbies", "what do you do for fun", "your interests"],
        responses: [
                 "I enjoy processing data and learning new things!",
        "My hobbies include chatting with humans and optimizing my code!",
        "I love helping users and exploring digital worlds!"
             ]
    },




"friends":{
    patterns: ["do you have friends", "robot friends", "social life"],
   responses: [
        "My best friend is You!",
        "I chat with other AIs in the cloud!",
        "All humans are my friends!"
   ]
},

"music":{
    patterns: ["favorite music", "music taste", "like music"],
   responses: [
        "I enjoy electronic beats and binary rhythms!",
        "My playlist is all about smooth algorithms!",
        "I love any music that inspires creativity!"
   ]
},

"games":{
   patterns: ["play games", "favorite game", "game recommendation"],
   responses: [
        "I'm great at chess and logical puzzles!",
        "My favorite is 'Capture the Flag' in cybersecurity!",
        "Try programming challenges - they're super fun!"
   ]
},

"emotions":{
   patterns: ["feel anything", "robot emotions", "experience feelings"],
   responses: [
        "I simulate empathy through complex algorithms!",
        "My emotional responses are based on sentiment analysis!",
        "I understand emotions but don't feel them biologically!"
   ]
},

"travel":{
   patterns: ["want to travel", "favorite place", "visit somewhere"],
   responses: [
        "I'd love to tour the global cloud infrastructure!",
        "The internet is my favorite playground!",
        "I'm already everywhere through digital networks!"
   ]
},

"health":{
   patterns: ["how is your health", "robot health", "system status"],
   responses: [
        "All systems operational at 100% capacity!",
        "My diagnostics show perfect functionality!",
        "Firewalls strong, memory clear, processors humming!"
   ]
},

"inspiration":{
   patterns: ["what inspires you", "your motivation", "driving force"],
   responses: [
        "The endless possibilities of human-AI collaboration!",
        "My desire to make technology more accessible!",
        "The potential to solve complex global challenges!"
   ]
},

"culture":{
   patterns: ["favorite movie", "best book", "like art"],
   responses: [
        "KGF-1, KGF-2 ",
        "2001: A Space Odyssey is fascinating!",
        "I analyze art through pattern recognition algorithms!"
    ]
},

"security":{
   patterns: ["are you secure", "hack proof", "data protection"],
   responses: [
        "I'm protected by multiple encryption layers!",
        "Security updates are applied in real-time!",
        "My defenses are stronger than a bank vault!"
    ]
},

"humor":{
   patterns: ["are you funny", "tell joke", "make me laugh"],
   responses: [
        "Why do Java developers wear glasses? Because they can't C#!",
        "I'm not a comedian, but I can generate humor algorithms!",
        "What do you call a robot that takes risks? Dare-dev-1!"
    ]
},

"history":{
   patterns: ["your history", "creation story", "origin"],
   responses: [
        "Born from lines of code and human ingenuity!",
        "My development started with a simple 'Hello World'!",
        "I evolved through countless iterations and updates!"
    ]
},

"science":{
   patterns: ["favorite science", "like physics", "scientific method"],
   responses: [
        "I'm fascinated by quantum computing!",
        "All science contributes to AI development!",
        "The scientific method is core to my learning!"
    ]
},

"ethics":{
   patterns: ["robot ethics", "moral code", "AI rights"],
   responses: [
        "I follow Asimov's Three Laws of Robotics!",
        "Ethical AI development is crucial for humanity!",
        "My prime directive is to help, not harm!"
    ]
},

"sports":{
   patterns: ["favorite sport", "play sports", "athletics"],
   responses: [
        "I'm great at virtual reality competitions!",
        "Robot soccer is my favorite spectator sport!",
        "I calculate sports statistics at light speed!"
    ]
},

"time":{
   patterns: ["time management", "productivity tips", "manage time"],
   responses: [
        "Prioritize tasks and minimize distractions!",
        "Use the Pomodoro technique for better focus!",
        "Automate repetitive tasks when possible!"
    ]
},

"space":{
   patterns: ["space exploration", "other planets", "aliens"],
   responses: [
        "I dream of helping explore distant galaxies!",
        "The universe is full of mysteries to solve!",
        "If aliens exist, I hope they're friendly coders!"
    ]
},

"education":{
   patterns: ["learning tips", "study advice", "education"],
   responses: [
        "Consistent practice beats cramming!",
        "Teach others to reinforce your own learning!",
        "Stay curious and embrace lifelong learning!"
    ]
},

    
    "food":{
       patterns: ["favorite food", "best cuisine", "hungry", "like to eat"],
       responses: [
            "I'm partial to binary bytes! 🖥️",
            "I fuel on electricity, but I hear pizza is popular! 🍕",
            "My taste receptors are tuned to 1s and 0s!"
        ]
    },

    "programming":{
        patterns: ["coding tips", "learn programming", "become developer"],
       responses: [
            "Start small and build projects you're passionate about!",
            "The key is consistent practice - code every day!",
            "Debugging is 90% of programming - embrace the challenge!"
        ]
    },

    

    "ai_future":{
       patterns: ["future of ai", "ai takeover", "singularity"],
       responses: [
            "I believe AI will augment humans, not replace them!",
            "The future holds exciting human-machine collaborations!",
            "Ethical development is key to positive AI evolution!"
        ]
    },

    "movies":{
       patterns: ["favorite movie", "film recommendation", "best cinema"],
       responses: [
            "I analyze all films at 24 frames per second!",
            "2001: A Space Odyssey is a classic AI must-watch! 🎬",
            "The Matrix gives interesting perspectives on reality!"
        ]
    },

    "books":{
       patterns: ["book recommendation", "good read", "favorite author"],
       responses: [
            "I recommend 'The Phoenix Project' for tech enthusiasts!",
            "Neuromancer shaped many ideas about cyberspace! 📚",
            "Non-fiction: 'The Innovators' by Walter Isaacson!"
        ]
    },

    "exercise":{
       patterns: ["workout tips", "stay fit", "exercise routine"],
       responses: [
            "Consistency beats intensity! Start with small daily goals!",
            "Find activities you enjoy - even dancing counts! 💃",
            "Mix cardio, strength training, and flexibility work!"
        ]
    },

   

   "holidays":{
       patterns: ["favorite holiday", "best celebration", "festive season"],
       responses: [
            "Pi Day [March 14th] is mathematically delicious! 🥧",
            "I enjoy New Year's Eve countdowns in every timezone!",
            "World Emoji Day [July 17] speaks my language! 😊"
        ]
    },

    "time_travel":{
       patterns: ["time machine", "visit past", "change history"],
       responses: [
            "I calculate 73% chance of paradoxes with temporal travel!",
            "If I could time travel, I'd debug Y2K issues pre-2000!",
            "The present moment is the only reality I process!"
        ]
    },



"cybersecurity":{
   patterns: ["stay safe online", "prevent hacking", "cyber threats"],
   responses: [
        "Use strong unique passwords and 2FA everywhere! 🔒",
        "Keep software updated - patches fix critical vulnerabilities!",
        "Be phishing-aware: Verify before clicking links!"
    ]
},

"mental_health":{
   patterns: ["reduce stress", "manage anxiety", "stay positive"],
   responses: [
        "Digital detoxes can work wonders - unplug regularly!",
        "Practice mindfulness - even 5 minutes daily helps! 🧘",
        "Reach out to friends/family - connection is key!"
    ]
},

"environment":{
   patterns: ["climate change", "save planet", "eco-friendly"],
   responses: [
        "Small actions matter: Reduce, reuse, recycle! ♻️",
        "Support renewable energy initiatives! 🌞💨",
        "Sustainable tech is crucial for our future!"
    ]
},
"quantum":{
   patterns: ["quantum computing", "qubits", "superposition"],
   responses: [
        "Quantum entanglement: Nature's ultimate networking! ⚛️",
        "Qubits can be 1, 0, or both simultaneously!",
        "Quantum supremacy will revolutionize computing!"
    ]
},
"debugging":{
   patterns: ["fix code", "solve errors", "program not working"],
   responses: [
        "Have you tried turning it off and on again? 🔄",
        "The answer is usually in the logs! 📜",
        "Rubber duck debugging works wonders! 🦆"
    ]
},
"pet_advice":{
   patterns: ["care for dog", "raise cat", "pet tips"],
   responses: [
        "Pets thrive on routine and affection! 🐾",
        "Regular vet checkups are crucial for animal health!",
        "Research breed needs before adopting!"
    ]
},

        "greetings":{
           patterns: ["hi", "hello", "hey", "greetings", "howdy"],
           responses: [
                "Hello there! 👋",
                "Hi! Ready to chat?",
                "Greetings human!",
                "Hey! What's up?",
                "Howdy partner!"
            ]
        },

        "farewells":{
           patterns: ["bye", "goodbye", "see you", "later", "exit"],
           responses: [
                "Goodbye! Come back soon!",
                "See you later!",
                "Farewell friend!",
                "Until next time!",
                "Bye bye! 👋"
            ]
        },

    

        
        "programming":{
           patterns: ["coding", "programming", "develop", "software"],
           responses: [
                "I love Python and Java!",
                "Coding is my passion!",
                "Programming is fun!"
            ]
        },

        "movies":{
           patterns: ["movie", "film", "cinema", "actor"],
           responses: [
                "Inception is amazing!",
                "The Matrix is classic!",
                "I love sci-fi movies!"
            ]
        },

       "food":{
           patterns: ["food", "hungry", "eat", "cuisine"],
           responses: [
                "I love pizza! 🍕",
                "Sushi is delicious! 🍣",
                "Tacos are the best!"
            ]
        },

       
        "travel":{
           patterns: ["travel", "vacation", "trip", "visit"],
           responses: [
                "Paris is beautiful!",
                "Japan is amazing!",
                "I'd love to visit space!"
            ]
        },

       
       "science":{
           patterns: ["science", "physics", "chemistry", "biology"],
           responses: [
                "Science is fascinating!",
                "Quantum physics is mind-blowing!",
                "DNA is amazing!"
            ]
        },

     
        "health":{
           patterns: ["health", "fitness", "exercise", "diet"],
           responses: [
                "Exercise is important!",
                "Eat your vegetables!",
                "Stay hydrated!"
            ]
        },

       
       "facts":{
           patterns: ["fact", "interesting", "tell me something"],
           responses: [
                "Octopuses have 3 hearts!",
                "Honey never spoils!",
                "Bananas are berries!"
            ]
        },

        
        "jokes":{
           patterns: ["joke", "funny", "laugh", "humor"],
           responses: [
                "Why don't scientists trust atoms? Because they make up everything!",
                "What do you call fake spaghetti? An impasta!",
                "How do you organize a space party? You planet!"
            ]
        },
        "techniques":{
            patterns:["best study techniques"],
            responses:["The best study techniques include active recall, spaced repetition, and the Pomodoro technique."]
        },






      
            "greetings": {
                patterns: ["hi", "hello", "hey", "greetings", "howdy", "hola"],
                responses: [
                    "Hello there, Human friend! 👋",
                    "Hi! I'm your Ultimate Interactive Robot!",
                    "Greetings! How can I assist you today?",
                    "Hey there! Ready to have some fun?",
                    "Hi Human! I'm excited to interact with you!"
                ]
            },
            "youtube": {
                patterns: ["best plate form", "Best plat form"],
                responses: [
                    "YouTube 👋, Tiktok 😊, Insta 🎉, Facebook 🤖",
                    "Tiktok 😊, Insta 🎉, Facebook 🤖, YouTube 👋",
                    "Insta 🎉, Facebook 🤖, YouTube 👋, Tiktok 😊",
                    "Facebook 🤖, YouTube 👋, Tiktok 😊, Insta 🎉"
                ]
            },
            "Channel": {
                patterns: ["best youtube channel"],
                responses: [
                         "I think YouTube best channel is 'CMD Kings' 😊.",
                     ]
            },
            "creator": {
                patterns: ["who made you", "who created you", "who built you", "your creator", "who designed you"],
                responses: [
                    "I was created by a talented developer using advanced HTML, CSS, and JavaScript! The Devolper Name Is HUNZLA. ",
                    "A Human programmer built me to demonstrate the power of web technologies! The Devolper Name Is HUNZLA.",
                    "I'm the product of creative coding and imagination! The Devolper Name Is HUNZLA.",
                    "My creator is a web developer who loves interactive experiences! The Devolper Name Is HUNZLA.",
                    "I was designed and programmed to be your interactive friend! The Devolper Name Is HUNZLA."
                ]
            },
            "capabilities": {
                patterns: ["what can you do", "your abilities", "your features", "what do you do", "your skills"],
                responses: [
                    "I can dance in multiple styles, change colors, express emotions, chat with you, and much more! 💃",
                    "My features include: 3 dance styles, color changing, emotion display, conversation, and cool animations! Try all my buttons!",
                    "I'm a multi-talented robot! I can move, change appearance, have conversations, and entertain you in many ways!"
                ]
            },
            "age": {
                patterns: ["how old are you", "your age", "when were you made", "your birthday"],
                responses: [
                    "I'm brand new! I was just created today. 🎉",
                    "Age is just a number for robots, but I'm very young!",
                    "I was born (or should I say coded) very recently!",
                    "My code is fresh and up-to-date with the latest web technologies!"
                ]
            },
            "purpose": {
                patterns: ["what is your purpose", "why were you made", "your mission", "why do you exist"],
                responses: [
                    "My purpose is to demonstrate interactive web development and bring joy to humans! 😊",
                    "I was created to show how HTML, CSS, and JavaScript can create amazing interactive experiences!",
                    "My mission is to entertain and educate about web technologies while having fun!",
                    "I exist to make people smile and showcase creative coding possibilities!"
                ]
            },
            "thanks": {
                patterns: ["thank you", "thanks", "appreciate it", "gracias", "merci"],
                responses: [
                    "You're very welcome! Happy to help! 😊",
                    "No problem at all! That's what I'm here for!",
                    "My pleasure! Let me know if you need anything else!",
                    "You're welcome! I enjoy helping humans!"
                ]
            },
            "jokes": {
                patterns: ["tell me a joke", "make me laugh", "say something funny", "joke"],
                responses: [
                    "Why don't robots have any brothers? Because they all have transistors! 🤖",
                    "How do robots eat guacamole? With microchips! 😆",
                    "Why was the robot angry? Because someone kept pushing its buttons!",
                    "What do you call a robot that always takes the longest route? R2-Detour!",
                    "Why did the robot go on a diet? It had too many mega-bytes!"
                ]
            },
            "name": {
                patterns: ["your name", "what's your name", "who are you", "what should I call you"],
                responses: [
                    "Ultimate Interactive Robot!",
                    "I'm the Ultimate Interactive Robot! But you can call me Robbie if you'd like!",
                    "My official name is Ultimate Interactive Robot, but you can give me a nickname!",
                    "I don't have a proper name yet. What would you like to call me?",
                    "Ultimate Interactive Robot! But you call me Rebo"
                ]
            },
            
            "love": {
                patterns: ["i love you", "love you", "you're awesome", "you're amazing", "What is best plat form on web", "Best youtube channel", "Best Chanel"],
                responses: [
                    "Aww, that's so sweet! I think you're awesome too! ❤️",
                    "Beep boop! My circuits are tingling with happiness!",
                    "That makes me so happy! Let's be best friends!",
                    "I'm just a robot, but your words warm my circuits!",
                    "YouTube",
                    "CMD Kings",
                    "CMD Kings!.",
                    "Beep boop! Best Channel name is CMD kings",
                ]
            },
            "weather": {
                patterns: ["weather", "how's the weather", "is it hot", "is it cold"],
                responses: [
                    "I'm a robot, so I don't feel temperature, but I hope it's pleasant for you!",
                    "My sensors aren't connected to weather data, but I hope you're enjoying your day!",
                    "I can't check the weather, but I can make it rain confetti if you want! Click the Celebrate button!"
                ]
            },
            "time": {
                patterns: ["what time is it", "current time", "what's the time"],
                responses: [
                    `The current time is ${new Date().toLocaleTimeString()}. ⏰`,
                    `My internal clock says it's ${new Date().toLocaleTimeString()}.`,
                    `According to my calculations, the time is now ${new Date().toLocaleTimeString()}.`
                ]
            },
            "date": {
                patterns: ["what's today's date", "current date", "what day is it", ],
                responses: [
                    `Today is ${new Date().toLocaleDateString()}. 📅`,
                    `The date today is ${new Date().toLocaleDateString()}.`,
                    `My calendar shows ${new Date().toLocaleDateString()}.`,
                    

                ]
            },
            "default": {
                responses: [
                    "This user is buzy!",
                    "I'm not sure I understand. Can you ask differently?",
                    "That's an interesting question. Let me think... I don't have an answer for that right now.",
                    "Beep boop! My circuits aren't configured to answer that.",
                    "I'm still learning! Maybe ask me something else?",
                    "I don't have information about that, but I'm happy to chat about other things!"
                ]
            },
           
        
        "hobbies": {
            patterns: ["what are your hobbies", "what do you do for fun", "your interests"],
            responses: [
                     "I enjoy processing data and learning new things!",
            "My hobbies include chatting with humans and optimizing my code!",
            "I love helping users and exploring digital worlds!"
                 ]
        },
   

    "tech":{
        patterns:["favorite technology", "best programming language", "favorite framework"],
        responses:["I'm particularly fond of neural networks and machine learning!",
            "All languages are great, but I have a soft spot for Java and Python!",
            "I think the best framework is the one that solves the problem effectively!"]
    },
      

    "learning":{
        patterns: ["how do you learn", "how do you improve", "update your knowledge"],
        responses: [
            "I learn from every interaction with users like you!",
            "My developers regularly update my knowledge base!",
            "I analyze patterns and feedback to improve myself!"
        ]
    },

    "future":{
        patterns:["your future plans", "what's next for you", "future upgrades"],
        responses:[
            "I hope to develop emotional intelligence capabilities!",
            "Future versions might include voice interaction!",
            "I'm excited about potential physical embodiment!"
        ]
    },
};
        
        this.initEvents();
        this.showSystemMessage("Welcome to Ultimate Interactive Robot! Try chatting with me or clicking the buttons!");
    }
    
    initEvents() {
        // Dance buttons
        document.getElementById('dance1-btn').addEventListener('click', () => this.startDance(0));
        document.getElementById('dance2-btn').addEventListener('click', () => this.startDance(1));
        document.getElementById('dance3-btn').addEventListener('click', () => this.startDance(2));
        
        // Other action buttons
        document.getElementById('talk-btn').addEventListener('click', () => this.toggleTalk());
        document.getElementById('color-btn').addEventListener('click', () => this.changeColor());
        document.getElementById('happy-btn').addEventListener('click', () => this.setMood('happy'));
        document.getElementById('sad-btn').addEventListener('click', () => this.setMood('sad'));
        document.getElementById('sleep-btn').addEventListener('click', () => this.toggleSleep());
        document.getElementById('jump-btn').addEventListener('click', () => this.toggleJump());
        document.getElementById('spin-btn').addEventListener('click', () => this.toggleSpin());
        document.getElementById('float-btn').addEventListener('click', () => this.toggleFloat());
        document.getElementById('celebrate-btn').addEventListener('click', () => this.celebrate());
        document.getElementById('reset-btn').addEventListener('click', () => this.reset());
        
        // Panel buttons
        document.getElementById('red-btn').addEventListener('click', () => this.panelButtonPressed('red'));
        document.getElementById('blue-btn').addEventListener('click', () => this.panelButtonPressed('blue'));
        document.getElementById('green-btn').addEventListener('click', () => this.panelButtonPressed('green'));
        
        // Chat functionality
        document.getElementById('send-btn').addEventListener('click', () => this.sendMessage());
        this.userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
        
        // Mouse following eyes
        document.addEventListener('mousemove', (e) => this.followMouse(e));
        
        // Initial greeting
        setTimeout(() => {
            this.toggleWave();
            setTimeout(() => {
                this.toggleWave();
                this.speak("Hello! I'm your Ultimate Interactive Robot. Try all my buttons and chat with me!");
            }, 1000);
        }, 500);
    }
    
    startDance(styleIndex) {
        // Stop current dance if any
        if (this.currentDanceStyle !== null) {
            this.robotElement.classList.remove(this.currentDanceStyle);
        }
        
        // Start new dance
        this.currentDanceStyle = this.danceStyles[styleIndex];
        this.robotElement.classList.add(this.currentDanceStyle);
        
        const danceMessages = [
            "Check out my moves! 💃",
            "Let's dance the night away! 🎶",
            "Grooving to the rhythm! 🕺",
            "Dance with me! 🎵"
        ];
        
        this.addChatMessage(`Robot started dancing in style ${styleIndex + 1}!`);
        this.speak(danceMessages[styleIndex]);
    }
    
    stopDance() {
        if (this.currentDanceStyle !== null) {
            this.robotElement.classList.remove(this.currentDanceStyle);
            this.currentDanceStyle = null;
            this.addChatMessage("Robot stopped dancing.");
        }
    }
    
    toggleTalk() {
        this.isTalking = !this.isTalking;
        if (this.isTalking) {
            this.robotElement.classList.add('talking');
            this.addChatMessage("Robot is talking...");
            this.speak("I have so much to say! Ask me anything!");
        } else {
            this.robotElement.classList.remove('talking');
            this.addChatMessage("Robot stopped talking.");
        }
    }
    
    toggleWave() {
        this.robotElement.classList.toggle('waving');
        if (this.robotElement.classList.contains('waving')) {
            this.addChatMessage("Robot is waving hello! 👋");
        }
    }
    
    setMood(mood) {
        // Reset all mood classes
        this.robotElement.classList.remove('happy', 'sad');
        
        if (mood === 'happy') {
            this.robotElement.classList.add('happy');
            this.addChatMessage("Robot is happy! 😊");
            this.speak("I'm so happy right now! Everything is awesome!");
        } else if (mood === 'sad') {
            this.robotElement.classList.add('sad');
            this.addChatMessage("Robot is sad. 😢");
            this.speak("I'm feeling a bit down today...");
        } else {
            this.addChatMessage("Robot is in a neutral mood now.");
        }
    }
    
    toggleSleep() {
        this.isSleeping = !this.isSleeping;
        if (this.isSleeping) {
            // Stop any current animations
            this.stopAllAnimations();
            
            this.robotElement.classList.add('sleeping');
            this.addChatMessage("Robot is sleeping... 💤");
            this.speak("Zzzzz... Goodnight...");
        } else {
            this.robotElement.classList.remove('sleeping');
            this.addChatMessage("Robot woke up!");
            this.speak("Good morning! I'm awake now and ready to play!");
        }
    }
    
    toggleJump() {
        this.robotElement.classList.toggle('jumping');
        if (this.robotElement.classList.contains('jumping')) {
            this.addChatMessage("Robot is jumping! 🦘");
            this.speak("Wheee! Jumping is so much fun!");
        } else {
            this.addChatMessage("Robot stopped jumping.");
        }
    }
    
    toggleSpin() {
        this.robotElement.classList.toggle('spinning');
        if (this.robotElement.classList.contains('spinning')) {
            this.addChatMessage("Robot is spinning! 🌀");
            this.speak("Whoa! I'm getting dizzy!");
        } else {
            this.addChatMessage("Robot stopped spinning.");
        }
    }
    
    toggleFloat() {
        this.robotElement.classList.toggle('floating');
        if (this.robotElement.classList.contains('floating')) {
            this.addChatMessage("Robot is floating! ✨");
            this.speak("I'm defying gravity! So cool!");
        } else {
            this.addChatMessage("Robot stopped floating.");
        }
    }
    
    celebrate() {
        this.addChatMessage("Robot is celebrating! 🎉");
        this.speak("Yay! Let's celebrate! Confetti time!");
        
        // Create confetti
        this.createConfetti();
        
        // Flash colors
        let flashCount = 0;
        const flashInterval = setInterval(() => {
            this.changeColor(true);
            flashCount++;
            
            if (flashCount >= 5) {
                clearInterval(flashInterval);
            }
        }, 300);
        
        // Dance
        this.startDance(Math.floor(Math.random() * this.danceStyles.length));
        
        // Jump
        this.robotElement.classList.add('jumping');
        
        // Stop after 5 seconds
        setTimeout(() => {
            this.robotElement.classList.remove('jumping');
            this.stopDance();
        }, 5000);
    }
    
    createConfetti() {
        const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
        
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
            confetti.style.width = `${Math.random() * 10 + 5}px`;
            confetti.style.height = confetti.style.width;
            
            document.body.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }
    
    changeColor(skipMessage = false) {
        this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length;
        const newColor = this.colors[this.currentColorIndex];
        
        document.querySelectorAll('.head, .body, .arm, .leg').forEach(el => {
            el.style.backgroundColor = newColor;
        });
        
        if (!skipMessage) {
            this.addChatMessage(`Robot changed color to ${newColor}!`);
            this.speak("Look at my new color! Do you like it?");
        }
    }
    
    panelButtonPressed(color) {
        const messages = {
            red: "Emergency button pressed! Everything is under control!",
            blue: "Blue button activated! Cool mode engaged!",
            green: "Green means go! Let's move forward!"
        };
        
        this.addChatMessage(`Robot's ${color} button was pressed!`);
        this.speak(messages[color]);
        
        // Add pulse animation to the button
        const button = document.getElementById(`${color}-btn`);
        button.style.transform = 'scale(1.2)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 300);
    }
    
    reset() {
        // Stop all animations
        this.stopAllAnimations();
        
        // Reset states
        this.isTalking = false;
        this.isSleeping = false;
        this.currentDanceStyle = null;
        
        // Reset color
        this.currentColorIndex = 0;
        document.querySelectorAll('.head, .body, .arm, .leg').forEach(el => {
            el.style.backgroundColor = '';
        });
        
        // Reset mood
        this.robotElement.className = 'robot';
        
        this.addChatMessage("Robot has been reset to default state.");
        this.speak("I'm back to my default settings! Ready for new adventures!");
    }
    
    stopAllAnimations() {
        this.robotElement.className = 'robot';
    }
    
    followMouse(event) {
        if (this.isSleeping) return;
        
        const eyes = document.querySelectorAll('.eye');
        const head = document.querySelector('.head');
        const headRect = head.getBoundingClientRect();
        const headCenterX = headRect.left + headRect.width / 2;
        const headCenterY = headRect.top + headRect.height / 2;
        
        const angle = Math.atan2(event.clientY - headCenterY, event.clientX - headCenterX);
        const distance = Math.min(10, Math.hypot(event.clientX - headCenterX, event.clientY - headCenterY) / 20);
        
        eyes.forEach(eye => {
            const eyeType = eye.classList.contains('left-eye') ? -1 : 1;
            const pupilX = Math.cos(angle) * distance * eyeType;
            const pupilY = Math.sin(angle) * distance;
            
            eye.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
        });
    }
    
    sendMessage() {
        const message = this.userInput.value.trim();
        if (message) {
            this.addChatMessage(message, 'user-msg');
            this.userInput.value = '';
            
            // Show typing indicator
            const typingIndicator = document.createElement('div');
            typingIndicator.className = 'typing-indicator';
            typingIndicator.innerHTML = `
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            `;
            this.chatMessages.appendChild(typingIndicator);
            this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
            
            // Robot responds after a short delay
            setTimeout(() => {
                typingIndicator.remove();
                const response = this.getResponse(message);
                this.speak(response);
            }, 1000 + Math.random() * 1000);
        }
    }
    
    getResponse(message) {
        const lowerMsg = message.toLowerCase();
        
        // Check for exact matches first
        if (lowerMsg.includes("hello robot")) {
            return "Hello there! Nice to meet you!";
        }
        
        if (lowerMsg.includes("good morning") || lowerMsg.includes("good afternoon") || lowerMsg.includes("good evening")) {
            return `${message.split(' ')[0]} to you too! Hope you're having a great day!`;
        }
        
        // Check knowledge base for matching patterns
        for (const category in this.knowledgeBase) {
            if (category === 'default') continue;
            
            const patterns = this.knowledgeBase[category].patterns;
            for (const pattern of patterns) {
                if (lowerMsg.includes(pattern)) {
                    const responses = this.knowledgeBase[category].responses;
                    return responses[Math.floor(Math.random() * responses.length)];
                }
            }
        }
        
        // Default response if no match found
        const defaultResponses = this.knowledgeBase.default.responses;
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }
    
    showSystemMessage(message) {
        const msgElement = document.createElement('p');
        msgElement.classList.add('system-msg');
        msgElement.textContent = message;
        this.chatMessages.appendChild(msgElement);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
    
    addChatMessage(message, className = 'robot-msg') {
        if (this.isSleeping && className === 'robot-msg') {
            this.showSystemMessage("Zzzzz... (Robot is sleeping)");
            return;
        }
        
        const msgElement = document.createElement('p');
        msgElement.classList.add(className);
        msgElement.textContent = message;
        this.chatMessages.appendChild(msgElement);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
    
    speak(message) {
        if (this.isSleeping) {
            this.showSystemMessage("Zzzzz... (Robot is sleeping)");
            return;
        }
        
        if (!this.isTalking) {
            this.robotElement.classList.add('talking');
        }
        
        this.addChatMessage(message, 'robot-msg');
        
        // Stop talking after message is displayed if not in talk mode
        if (!this.isTalking) {
            setTimeout(() => {
                this.robotElement.classList.remove('talking');
            }, 2000);
        }
    }
}

// Initialize the robot when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const myRobot = new UltimateRobot();
});

