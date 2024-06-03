 

import './App.css'
import Hello from './components/Hello'
 import Props from './components/Props'

 const athletes = [
  {
    name: "Lebron James",
    mainphoto: " https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/LeBron_James_-_51959723161.jpg/640px-LeBron_James_-_51959723161.jpg",
    description: " LeBron James, born December 30, 1984, is an American professional basketball player widely regarded as one of the greatest in NBA history. Known for his versatility, athleticism, and leadership, he has won multiple NBA championships and MVP awards."
  },
  {
    name: "Lionel Messi",
    mainphoto: "https://i.pinimg.com/736x/27/17/f1/2717f1387a9b8c7c34a6dc06249104b3.jpg",
    description: "Lionel Messi is an Argentine professional footballer widely regarded as one of the greatest players of all time. Known for his exceptional dribbling, vision, and goal-scoring abilities, he has won numerous awards and broken countless records throughout his career."
  },
  {
    name: "Cristiano Ronaldo",
    mainphoto: "https://pbs.twimg.com/media/Fi4NdxCX0AEp8sr.jpg:large",
    description: "Cristiano Ronaldo, born February 5, 1985, is a Portuguese professional footballer known for his exceptional skills, athleticism, and prolific goal-scoring. Widely regarded as one of the greatest footballers of all time, he has won numerous awards and titles."
  },
  {
    name: "Virat Kohli",
    mainphoto: " https://static.tnn.in/photo/107445066/107445066.jpg",
    description: " Virat Kohli, born November 5, 1988, is an Indian cricketer and former captain known for his aggressive batting style and consistent performance. Widely regarded as one of the best batsmen in the world, he has numerous records and accolades."
  },
  {
    name: "Kylian Mbappe",
    mainphoto: "https://w0.peakpx.com/wallpaper/807/212/HD-wallpaper-mbappe-club-dontalleo-francia-futbol-kylian-kylian-mbappe-legend-psg-thumbnail.jpg",
    description: " Kylian Mbappé is a French professional footballer known for his incredible speed, dribbling, and goal-scoring abilities. A key player for Paris Saint-Germain and the French national team, he is regarded as one of the best young talents in football."
  },
  {
    name: "Tiger Woods",
    mainphoto: "https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2018/12/14/5c13d7523644f60975b10c90_04_2005_Masters_SunPM_220.JPG.rend.hgtvcom.616.924.suffix/1573252276479.jpeg",
    description: "Tiger Woods, born December 30, 1975, is an American professional golfer widely regarded as one of the greatest golfers of all time. Known for his incredible skill and numerous victories, he has transformed and popularized the sport globally."
  },
  {
    name: "Lewis Hamilton",
    mainphoto: "https://www.essentiallysports.com/stories/f1-news-lewis-hamiltons-25000-worth-privacy-protection-genius/assets/7.png",
    description: "Lewis Hamilton, born January 7, 1985, is a British Formula 1 driver known for his exceptional skill and record-breaking achievements. He has won multiple World Championships and is considered one of the greatest drivers in the history of the sport."
  },
  {
    name: "Neymar Jr.",
    mainphoto: " https://i.pinimg.com/736x/56/6f/1b/566f1bbf2e83f437413a6274ee6511a9.jpg ",
    description: "Neymar Jr., born February 5, 1992, is a Brazilian professional footballer known for his flair, creativity, and goal-scoring prowess. He has played for top clubs like Barcelona and Paris Saint-Germain, and is widely regarded as one of the best players in the world."
  },
  {
    name: "Paras Khadka",
    mainphoto: "https://pbs.twimg.com/media/FD9eM4bVUAY4ufU.jpg:large",
    description: "Paras Khadka is a former Nepalese cricketer and captain of the national team. Known for his all-round skills, leadership, and significant contributions to Nepalese cricket, he played a key role in elevating the sport's profile in Nepal."
  },
  {
   name: "Roger Federer",
   mainphoto: "https://wallpapercave.com/wp/wp2361894.jpg",
   description: "Roger Federer, born August 8, 1981, is a Swiss professional tennis player widely regarded as one of the greatest in the sport's history. Known for his elegant style, versatility, and record-breaking achievements, he has won numerous Grand Slam titles and held the world No. 1 ranking for a record 310 weeks."
  },
  {
    name:"Michael Jordan",
    mainphoto: "https://i.pinimg.com/474x/2e/f7/87/2ef7879703bedc9b9be8a5ed724b2f4e.jpg",
    description: "Michael Jordan, born February 17, 1963, is an American former professional basketball player, widely regarded as one of the greatest athletes of all time. Known for his extraordinary athleticism and competitiveness, he dominated the NBA during the 1990s with the Chicago Bulls, winning six championships."
  },
  {
    name: "Magnus Carlsen",
    mainphoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Carlsen_Magnus_%2830238051906%29.jpg/1464px-Carlsen_Magnus_%2830238051906%29.jpg",
    description: "Magnus Carlsen, born November 30, 1990, is a Norwegian chess grandmaster and reigning World Chess Champion. Known for his strategic brilliance and versatility, Carlsen has dominated the chess world, holding the highest Elo rating in history."
  },

];

function App() {
  
  return (
    <>
    <div className="container">
     
      {athletes.map((athlete, index) => (
        <Hello
          key={index}
          name={athlete.name}
          mainphoto={athlete.mainphoto}
          description={athlete.description}
          className="card"
        />
      ))}

     <Props
     name = "aditya"
     description = "aditya is a good boy"
     age = {22}
     marriagestatus = {true}
    
     />

     </div>
     </>
     
  );
}

export default App;
