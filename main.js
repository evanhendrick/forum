// your code here
const post = document.getElementById('submit').addEventListener('click', function(){
  let name = document.getElementById('name').value;
  let message = document.getElementById('message').value;
  // name.innerHTML['style'].fontWeight = 'bold';
  let posts = document.getElementById('posted') // points to ul so posts = ul
  let li1 = document.createElement('li');
  li1.innerHTML = message
  li2 = document.createElement('li')
  li2.innerHTML ='Posted By: '+ name
  li1.style.listStyleType = 'none';
  li2.style.listStyleType = 'none';
  posts.append(li1, li2);
 
  
  //create buttons for DOM to retrieve
  
  // let upvote = document.createElement('button');
  // let downvote = document.createElement('button');
  // upvote.innerHTML = 'like';
  // downvote.innerHTML = 'dislike';
  // posts.append(upvote, downvote);
  
  //delete button


  // var del = document.createElement('button');
  // del.innerHTML = 'delete'
  // posts.append(del)
  // del.addEventListener('click', function (){
  //   // posts.remove(li1.innerHTML, li2.innerHTML)
  // })


  //upvote function

  // upvote.addEventListener('click', function(){
  //   let userLike = '';
  //   if (userLike.length=0){
  //     userLike = document.createElement('div')
  //     userLike.innerText = name +' liked this'
  //     posts.append(userLike);
  //   } else {
  //     // posts.remove(userLike)
  //   }
   
  // })

  //delete button
 

})

  //add upvote and downvote button


  //delete button
  //edit button