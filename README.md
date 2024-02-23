# Must Have README Generator

Code to prompt the user, via the command line, with a series of questions to create a high quality readme file for their latest project.

The purpose of this project was to allow a user to create a README file by answering a series of questions that were provided to the user via the command line.

---

Link to a video demo: An example of the prompts being answered in the command line, followed by the README file being created:
[Screencastify link of demo](https://drive.google.com/file/d/1bQgsj2VhZjOn-KgFtz4F8jdeFYCok3EN/view?usp=drive_link)

---

**Table of contents**

- [Motivation](#item-one)
- [What are the problems identified?](#item-two)
- [What are the solutions?](#item-three)
- [What was learned?](#item-four)
- [Usage](#item-five)
- [Credits](#item-six)
- [License](#item-seven)

---

<a id="item-one"></a>

### MOTIVATION

My motivation for making the weather dashboard app was to learn how to create a README file through prompts on the command line using the INquirer package.

<a id="item-two"></a>

### WHAT ARE THE PROBLEMS IDENTIFIED?

For my challenge I needed to address the following problems:

- Problem 1: How do I install inquirer?
- Problem 2: How do I use initiate inquirer to create and ask prompts via the command line?
- Problem 3: How do I capture the prompt answers - the data - and use it to create a README markdown file?
- Problem 4: How do I use multiple modules - JS files - in my project?
- Problem 5: How do I write the markdown file?

<a id="item-three"></a>

### WHAT ARE THE SOLUTIONS?

- Solution to problem 1: I installed inquirer@8.2.4 into my develop folder of my project using the terminal on my mac.
- Solution to problem 2: In order to include the File System module, I used the require() method. I then used the require() function to bring in the requirer module.
- Solution to problem 3: When using inquirer, I used .prompt to provide the questions and .then to capture my answers - the data.
- Solution to problem 4: I was given starter code in two different JS files. I learned how to link them with require and module.exports.
- Solution to problem 5: I used a template literal to create the content of the markdown file. I was able to write the markdown file with the built-in Node module fs to use the writeToFile() method.

<a id="item-four"></a>

### WHAT WAS LEARNED?

I learned how to use inquirer to create a series of prompts that could be answered on the command line, learned how to write files with the built-in Node module fs - the writeToFile() method - and I continued to better understand using template literals.

<a id="item-five"></a>

### USAGE

The deployed page through GitHub can be found at the following [link](https://alexahnbaum.github.io/Challenge_6_How-s_The_Weather-/)

<a id="item-six"></a>

### CREDITS

During the course of this challenge, I reviewed class content, went to office hours to get advice/guidance from my boot camp teaching assistant, Nick Gambino, and worked with my boot camp classmate, Keegan Royal-Eisenberg.

<a id="item-seven"></a>

### LICENSE

none
