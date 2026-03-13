const chatbot = document.getElementById("chatbot");
const toggle = document.getElementById("chat-toggle");

const input = document.getElementById("chat-input");
const messages = document.getElementById("chat-messages");

let greeted = false;

/* suggestions */

const prompts = [
"Tell me about your skills",
"Show me your projects",
"What is your journey from Nepal?",
"How can I contact you?",
"Can I download your resume?"
];

/* open chatbot */

toggle.addEventListener("click", () => {

chatbot.classList.toggle("open");

if(!greeted && chatbot.classList.contains("open")){

setTimeout(()=>{

addMessage(
"Hi! 👋 I'm Saman's portfolio assistant. Ask me about his skills, projects, experience, or background.",
"bot-msg"
);

showSuggestions();

},300);

greeted = true;

}

});

/* suggestion buttons created with JS */

function showSuggestions(){

const container = document.createElement("div");

container.style.display="flex";
container.style.flexWrap="wrap";
container.style.gap="6px";
container.style.margin="6px";

prompts.forEach(text=>{

const btn=document.createElement("button");

btn.innerText=text;

btn.style.background="#1f2937";
btn.style.color="#00f2ff";
btn.style.border="none";
btn.style.padding="6px 10px";
btn.style.borderRadius="12px";
btn.style.cursor="pointer";
btn.style.fontSize="12px";

btn.onclick=()=>{

addMessage(text,"user-msg");

const reply=getReply(text);

setTimeout(()=>{
addMessage(reply,"bot-msg");
},400);

};

container.appendChild(btn);

});

messages.appendChild(container);

}

/* user input */

input.addEventListener("keypress", function(e){

if(e.key === "Enter"){

const text = input.value.trim();

if(text === "") return;

addMessage(text,"user-msg");

const reply = getReply(text);

setTimeout(()=>{
addMessage(reply,"bot-msg");
},400);

input.value="";

}

});

/* add message */

function addMessage(text,className){

const msg=document.createElement("div");

msg.className=className;

msg.innerText=text;

messages.appendChild(msg);

messages.scrollTop=messages.scrollHeight;

}

/* fuzzy matching */

function contains(text,keywords){

text=text.toLowerCase();

for(let word of keywords){
if(text.includes(word)) return true;
}

return false;

}

/* chatbot brain */

function getReply(text){

text=text.toLowerCase();

/* greetings */

if(contains(text,["hi","hello","hey","helo","hii"])){
return "Hello! Feel free to ask about Saman's skills, projects, experience, or his journey from Nepal.";
}

/* skills */

if(contains(text,["skill","skills","technology","tech","skils"])){
return "Saman works with JavaScript, Python, SQL, AWS, cybersecurity, and data analytics.";
}

/* projects */

if(contains(text,["project","projects","github","repo","projct"])){
return "You can explore Saman's projects in the Projects section which loads directly from GitHub.";
}

/* journey */

if(contains(text,["nepal","journey","background","where"])){
return "Saman grew up in Nepal and moved to the United States as an international student to pursue Computer Science at Weber State University.";
}

/* resume */

if(contains(text,["resume","cv","download"])){
return "You can download Saman's resume using the Download Resume button at the top of the page.";
}

/* contact */

if(contains(text,["contact","email","phone","reach","contat"])){
return "You can contact Saman at saman.chapagain2108@gmail.com or call (571) 567-7749.";
}

/* fallback */

return "Try asking about Saman's skills, projects, experience, or how to contact him.";

}