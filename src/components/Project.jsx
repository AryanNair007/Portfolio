import React from "react";

function Project(props) {
  const proj = props.projectDetails;

  return (
    <div className="proj-1">
      <div className="proj-img">
        <img src={proj.image} alt={proj.image_alt} />
      </div>
      <div className="proj-txt">
        <div className="proj-name">{proj.name}</div>
        <div className="proj-discription">{proj.discription}</div>
      </div>
    </div>
  );
}

export default Project;

// Offline voting denies 1/3 of eligible voters as people are mobile and
// don&rsquo;t live in one place.Blockchain technology used for Online
// Voting removes this problem and provides better security and
// tranparency. Lorem ipsum dolor sit amet consectetur adipisicing elit.
// Modi omnis aut hic accusantium esse ipsum! Adipisci at tempore quia
// tempora! Lorem ipsum dolor sit amet consectetur adipisicing elit.
// Quia, dolorem?

//   <div class="proj-2">
//     <div class="proj-txt">
//       <div class="proj-name">Review Good or Bad?</div>
//       <div class="proj-discription">
//         Sentiment analysis using machine learning in python. It return
//         "good" or "bad" depending on the tone of the review. This can be
//         used to analyse customer satisfaction in any online review System
//         from Restarauts to corporate companies. Lorem ipsum dolor sit amet
//         consectetur adipisicing elit. Consequatur dicta quas officia? Odio
//         dolorum officiis quis quae, aliquam error quam!.
//       </div>
//     </div>
//     <div class="img-2 proj-img"></div>
//   </div>
//   <div class="proj-3">
//     <div class="img-3 proj-img"></div>
//     <div class="proj-txt">
//       <div class="proj-name">Undefeatable in TIC-TAC-TOE</div>
//       <div class="proj-discription">
//         Play a game with your peers in a nice 80's inspired style of
//         tic-tac-toe game OR play against a computer where winning is
//         impossible Draw is the best outcome. Lorem ipsum dolor, sit amet
//         consectetur adipisicing elit. Maiores similique iusto aliquam, minus
//         aut harum. Ad rerum cupiditate hic mollitia. Lorem ipsum dolor sit
//         amet consectetur adipisicing elit. Adipisci, repellendus.Adipisci at
//         tempore quia tempora! Lorem ipsum dolor sit amet consectetur
//         adipisicing elit. Quia, dolorem?
//       </div>
//     </div>
//   </div>

{
  /* <div class="proj-1">1. E-Voting System using BlockChain</div>
<div class="proj-2">2. Good Review or Bad Review?</div>
<div class="proj-3">3. Tic-Tac-Toe Game with optimal play</div>
<div class="proj-2">4. Library Management using Pyton and Sql</div>
<div class="proj-3">5. Company turnover prediction using Linear Regression Model</div>
<div class="proj-2">6. Self Balancing Bike using Control System <div>*/
}
