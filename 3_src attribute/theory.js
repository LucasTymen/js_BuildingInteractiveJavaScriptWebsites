/*
The Script Element
The src attribute

Since you know how to use a <script> element with embedded code, let’s talk about linking code. Linking code is preferable because of a programming concept called Separation of Concerns (SoC). Instead of having messy code that is all in the same file, web developers separate their code into different files, making each “concern” easier to understand and more convenient when changes must be made.

For this exercise, instead of writing JavaScript in our HTML file, we are going to write it in its own file, and then reference this code with a file path name. We will do this using an attribute that may jog your memory: the src attribute!

If this seems familiar, that’s because you may have been linking to external files with the <img> and <link> elements. The attribute is exactly the same, but now its value specifies the location of your script file.

If the file is in the same project folder, the src value will be a relative path name. Below is an example of providing a relative path for a JavaScript file.
*/

<script src="./exampleScript.js"></script>

/*
The <script> above would look for a file called exampleScript.js that is in the same folder/directory as our index.html file.

If you must refer to JavaScript hosted externally, or in a CDN, you can also link to that file location.
Instructions
1.

Add a <script> element with a src attribute that points to script.js.
Checkpoint 2 Passed

Here’s an example on how to include a <script> element with an src attribute:
*/

<script src="example.js"></script>

/*
2.

Now, click on the Codecademy logo repeatedly to see random font families and font colors. The source attribute allows our HTML file to access all of this magical JavaScript with little code.
*/
