# How to quickly and effectively read other people's code

Just the other day, a fellow STCer (Self-Taught Coder) asked me the following question:

> How do you go about understanding someone else's code? I am starting to feel more comfortable with my own code, but whenever I try to look at something someone else  wrote I feel totally lost. I know some of this is unavoidable, especially if the code is poorly (or not at all) documented, but right now I have no strategy at all. Any tips would be greatly appreciated!

I love this question for a few reasons:

1. The method I'll recommend for reading and understanding someone else's code will also help you: 1) better understand you own code; and 2) help you increase the speed and ease with which you understand all new pieces of code you approach.
2. It sheds light on one of the most important aspects of learning a new skills, like programming: exposure to high quantity, high quality examples of expertise.

There are a lot of wins here. Let's start at the beginning.

### What's the best way to read and understand someone else's code?

The best way I've ever discovered to read and understand someone else's code is to:

#### 1.Find one thing you know the code does, and trace those actions backward, starting at the end.

Say, for example, you know that the code you're viewing ultimately creates a file with a list of movie titles. Figure out where in the code -- the specific, few lines -- it generates that file.

Then, move one step backward and figure out how it places the info in the file.

Then, move another step backward and figure out where the info came from.

And so on...

##### Let's call those connected pieces of code a "chain of actions"

Inevitably, using this approach will lead you through a bunch of different areas of the code. And that will probably give you a good deal of insight into things such as:

- how the body of code is organized(where variables are defined, where different types of functions are located, etc)
- the person's style of coding
- how the person who wrote the code thinks and problem solves (this is harder to describe, but it comes intuitively the more examples you see)

And by doing that, you'll gradually begin to understand more and more of that full body of code. So where you started with:

[ a big file of code that doesn't really mean much at all to you ]

you'll now be looking at:

[ still a big file of code, but where you now understand a few specific sections ]

It's almost as if you were originally standing in a room that was pitch-black, and, one at a time, different lights throughout the room were turned on to gradually reveal more details of the room's appearance.

