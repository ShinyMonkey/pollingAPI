# pollingAPI
Backend test

Question and Voting API
Welcome to the Question and Voting API! This is a simple application where you can create questions with options and collect votes on those options. Feel free to use this API to create, manage, and view questions and their voting data.

Features
-Create a question: You have the ability to create any number of questions.
-Add options to a question: Once you create a question, you can add multiple options to it.
-Add a vote to an option: Users can vote for their preferred option on a question.
-Delete a question: Optionally, you can delete a question. However, a question cannot be deleted if any of its options have received votes.
-Delete an option: Optionally, you can delete an option from a question. An option cannot be deleted if it has received at least one vote.
-View a question: You can view a question along with its options and the votes received by each option.
-View all questions.


Routes
-Create a Question
  Route: /questions/create
  Method: POST
  Description: Create a new question.
  Request Body: JSON object with the question details.

-Add Options to a Question
  Route: /questions/options/create/:id
  Method: POST
  Description: Add options to a specific question.
  URL Parameter: id (Question ID)
  Request Body: JSON object with option details.

-Delete a Question
  Route: /questions/delete/:id
  Method: DELETE
  Description: Delete a question. A question can only be deleted if none of its options have received votes.
  URL Parameter: id (Question ID)

-Delete an Option
  Route: /options/delete/:id
  Method: DELETE
  Description: Delete an option from a question. An option can only be deleted if it has not received any votes.
  URL Parameter: id (Option ID)

-Add Vote to an Option
  Route: /options/add_vote/:id
  Method: POST
  Description: Increment the vote count for an option.
  URL Parameter: id (Option ID)

-View a Question with Options and Votes
  Route: /questions/:id
  Method: GET
  Description: View a question along with its options and the votes received by each option.
  URL Parameter: id (Question ID)

View all Question with Options and Votes
Route: /questions/index
Method: GET
Description: View all question along with its options and the votes received by each option.
