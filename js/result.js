/**
 * Initialize the variable for summary and transcription button.
 */
document.getElementById('q1').addEventListener('click', function() {
    q1_text = document.getElementById('q1').textContent;
    document.getElementById('send_message').value = q1_text;
});

document.getElementById('q2').addEventListener('click', function() {
    q2_text = document.getElementById('q2').textContent;
    document.getElementById('send_message').value = q2_text;
});

document.getElementById('q3').addEventListener('click', function() {
    q3_text = document.getElementById('q3').textContent;
    document.getElementById('send_message').value = q3_text;
});

const summaryButton = document.getElementById('summary_button');
const transcriptionButton = document.getElementById('result_transcription_button');
const summary = document.getElementById('result_summary');
const defaultContent = summary.textContent;
const transcription = "A little under 72 hours ago a language model was released that could end up being as consequential as GPT-4. Now I know you're thinking that's a bold claim but let's see if you agree with it after watching what happened. I will explain as best as I can what was released and how revelations in the last 24 hours from Apple, Amazon, Britain and Baidu make it particularly significant. The model was Stanford's Alpaca and here is the key line. Alpaca behaves qualitatively similarly to OpenAI's TxDAV3 while being surprisingly small and easy and cheap to reproduce at under $600. Now that is cool but how does that change the world? Well first it wasn't supposed to get this cheap this fast. Just six weeks ago or five weeks before they released the model, ARK Investment Management put out this prediction that the 2020 cost of GPT-3 at $4.6 million would take until 2030 to fall to something as insignificant as $30. If Stanford have done what they claim then 99% of this cost reduction has happened within five weeks of this prediction being published not eight years. As AI researcher Eliezer Yudkowsky puts it, I don't think people realize what a big deal it is that Stanford retrained a Lama model by cheaply fine-tuning it. Now I'm going to explain all of this in a moment. He then goes on, I'm not sure I can convey how much this is a brand new idiom of AI as a technology. Now Stanford claim their model performs comparably to DaVinci 3 which is GPT-3.5. Of course I'm going to test and analyze this in a moment but how could it be that a $600 model can compete with ChatGPT? Well do you remember how Meta open-sourced their Lama models about two weeks ago? Stanford used the weakest of these open-source models, the 7 billion parameter one and then essentially they recruited GPT-3.5 to train that Meta model. How could they possibly do this? Well they used self-instruct and I dug into the literature to find the original paper on self-instruct. This was released in December of last year and I'm going to give you the 30-second summary of how it works. Essentially you start off with some human-made examples of exemplar prompts and outputs. These are fed into the language model and then you ask it to generate thousands more such instances. You filter out the bad ones and then put all the good examples back into the language model. Then it understands the instructions much better and produces thousands more examples. As the paper says this is almost human annotation free and remember this stat it only leaves a 5% gap behind instruct GPT. What is instruct GPT? Well it's the breakthrough that led to ChatGPT in the first place. Look at the original GPT-3. If you gave a prompt like explain the moon landing to a six-year-old in a few sentences you got this gobbledygook here. After months of onerous human training called reinforcement learning with human feedback it was able to follow instructions much better and produce an outcome like this. But this relied on so much human labeling and human ranking of outputs from best to worst. Stanford and the self-instruct breakthrough showed that you could cut all of those costs. So in summary they used an open source meta model and got GPT-3.5 to train it. One advanced model teaching another. As Yudkowsky points out these models have enough pseudo-intelligence that they can stare at other models and imitate them. Indeed OpenAI may have even predicted that this was possible. In their terms of service it says you may not use output from the services like ChatGPT to develop models that compete with OpenAI. So they knew it was possible and even Stanford admit that this breakthrough enables more people including bad actors to create new cheap models. Yudkowsky also points out that one of the reasons why ChatGPT and GPT-4 are so good is that they rest on proprietary data and that that was supposed to give them a competitive moat which is now revealed people can quite cheaply steal. Just before I test and demonstrate Alpaca in action let me summarize how it works. Using the self-instruct process you get GPT-3.5 similar to ChatGPT to create thousands and thousands in this case 52,000 instruction following examples automatically filtered by quality. Stanford then used an open source model, indeed the weakest of the LLAMA models, and trained it using those examples. The end result? Alpaca. So let's see it in action and compare it to ChatGPT and GPT-4. Oh and just quickly you know that training of the LLAMA model with those 52,000 examples it only took three hours and cost less than a hundred dollars. The first example I'm going to show you does not come from me. I found it in this academic paper linked in the description and it's a task which requires understanding detailed and dissonant scenarios, applying appropriate legal precedents, and choosing the correct explanation. The correct answer if you want to read through it or not is B. Alpaca gets this question right or I should say it gets it right about 80% of the time. You can keep clicking generate and sometimes you do get the answer D but about 80% of the time four times in five you get the correct answer B. How about ChatGPT? Well every time I've tried it it's gotten the wrong answer of C. And GPT-4? Shocking even to me it also gets it wrong and picks C. Now before you get too excited I am not saying that it is better than or even as good as GPT-4 or ChatGPT. It's not but remember it's only seven billion parameters and six hundred dollars worth. Take this example. I asked it for an example of an animal that begins with the same letter as the capital city of France and it said elephant. No idea where it got that. Now in fairness ChatGPT gave me lion and GPT-4 gave me ferret but there are other questions where alpaca definitely flops. For example this math question which ChatGPT and GPT-4 uniformly get right alpaca simply gets it wrong every time. I tried asking it in lots of different ways with chain of thought prompting but no every time it gets it wrong. It's definitely not better than those models but by the end of the video you'll see why it's revolutionary anyway. At this point if you're learning anything please don't forget to leave a like or a comment to let me know. Basic addition and subtraction it does better and yes it can crank out poems, solve some hella swag common sense problems and generate literary analogies. But at this point I want to remind you of three things. First that it was using the weakest of the LLAMA open source models. They could have used the 65 billion parameter model for a bit more cost. I'm sure the results would have been even more impressive. Next you remember it was trained by examples generated using the DaVinci 3 model. Well that cost them about 0.03 dollars per 1000 tokens but as of 48 hours ago they could have used the GPT-4 API at a very similar cost. So it wasn't the best open source model and it wasn't trained by the best GPT model. I am genuinely curious as to what the results would have been if it had been trained by the 65 billion parameter model using a GPT-4 API. Maybe someone's going to do that maybe even this week. But just before we get on to Apple, Amazon, Britain and Baidu I just want to restate this was all done for $600 or less. They even say there were training efficiencies they could have done for example using the H100 GPUs that would have further reduced the cost. The question is if it's so easy and cheap to imitate a larger model what's going to happen when Apple release their large language model? It was only revealed yesterday in the New York Times that they are indeed working on one and don't forget they have far more money than the other companies mentioned. Amazon recently stated that they have been working on similar tech to chatGPT for a long time and looking in the literature as early as mid last year they had a model called AlexaTM that outperformed GPT-3. And as you may already know Baidu demonstrated their Ernie bot today although they didn't allow anyone else to use it. Apparently it's better in the Chinese language than even GPT-4 but because they didn't release a paper and we can't check it we simply don't know. And of course we can't forget Google who just two days ago announced the Palm API. What would have happened if Stanford's model had used that one? I'm sure we will soon find out but to take us back to the start I have one overriding observation and two questions. First these models weren't supposed to get this cheap this fast. That is going to upend the economics of large language models. And my questions are these. Does this mean that all incentive is gone for Microsoft or Google to pour in billions of dollars producing these cutting edge models if anyone can just easily reproduce them? Will they react by making the models even more closed and disallowing GPT-5 from having an API? We don't know. But as even nation states enter this quote-unquote arms race spending hundreds of millions of pounds in this case to build BritGPT are these companies and governments drifting into a war on two fronts where they compete with each other but also with outsiders who are trying to cheaply imitate their models. If you've learned anything in this video please do leave a like and leave a comment but either way have a wonderful day.";

document.getElementById('summary_button').addEventListener('click', function() {
    summary.textContent = defaultContent;
});

document.getElementById('result_transcription_button').addEventListener('click', function() {
    summary.textContent = transcription;
});