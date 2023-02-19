// your code here
//post variables
const post = document.getElementById('submit').addEventListener('click', function(){
  let name = document.getElementById('name').value;
  let message = document.getElementById('message').value;
  let posts = document.getElementById('posted') // points to ul aka posts = ul
  let postText = document.createElement('li');
  let lineBreak = document.createElement('hr')
  let postName = document.createElement('li')
  
  // posting function
  postText.innerHTML = message
  postName.innerHTML ='Posted By: '+ name
  postText.style.listStyleType = 'none';
  postName.style.listStyleType = 'none';
  let del = document.createElement('button');
  del.innerHTML = 'delete';
  posts.append(postText, postName, del);
  
  //create buttons for DOM to retrieve
  let upvote = document.createElement('button');
  let downvote = document.createElement('button');
  upvote.innerHTML = 'like';
  downvote.innerHTML = 'dislike';
  posts.append(upvote, downvote);
  

  //upvote function
  let likes = 0;
  let dislikes = 0;
  upvote.addEventListener('click', function(){
    likes +=1;
    if (likes <= 1){
      upvote.innerHTML = likes + ' like!'
    } else {
      upvote.innerHTML = likes + ' likes!'
    }
   
  })

  //downvote function
  downvote.addEventListener('click', function(){
    dislikes +=1;
    if (dislikes <= 1){
      downvote.innerHTML = dislikes + ' dislike!'
    } else {
      downvote.innerHTML = dislikes + ' dislikes!'
    }
  })

  //delete post function
 
  del.addEventListener('click', function(){
    postText.remove();
    postName.remove();
    del.remove();
    upvote.remove();
    downvote.remove();
    lineBreak.remove();
  })
  

posts.append(lineBreak)
})
