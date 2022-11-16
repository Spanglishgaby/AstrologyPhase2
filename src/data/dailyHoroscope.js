const arrayOfHoroscope = [
    {
       Horoscope: "Consider whether or not you're spending enough time with everyone who's special to you, Aries. If more hours are going to work colleagues, friends, or partner, there might be an imbalance that you need to look at. Sit down and create a chart of where your time has gone lately. If one portion is considerably larger than the others, make a point of spending some time with the people represented by the smaller portions."
    },
    {
        Horoscope:"If your partner acts quickly on his or her passions today, you will probably want to slow things down a bit. Nice and easy is the phrase of the day for you, so create an environment that will allow for more time in such circumstances. Let your partner know how you feel and what you'd like to see happen. No one is a mind reader. There's far less chance of any misunderstanding when there is open communication."
    },
    {
        Horoscope:"Consider planning a romantic interlude. With the influence from today's planetary aspects, it will be easy to connect with that special someone. Make dinner with your spouse or partner or make a date with someone new who's caught your eye, if possible. Don't let shyness or insecurity stand in your way. If you're single, consider loving the most important person in your life - you - by doing something special."
    },
    {
        Horoscope:"If things haven't been going too well with those you spend most of your time with, Scorpio, it might be time to consider your expectations of them. Ask what kinds of demands you place on others and if they're fair. Is it possible that you expect the same from others that you give, but perhaps they aren't able to match your level of performance? Consider talking with the people involved to find out how they feel."
    },
    {
        Horoscope:"Take it slow and easy today. With the energy from the day's aspects, rushing around isn't likely to get you too far. In fact, you're more apt to make mistakes or leave a bunch of things unfinished. Make your to-do list and go about each thing one at a time at an even pace. Even if you don't finish everything, what you accomplish will be done well."
    },
    {
        Horoscope:" It may be time to look at where you are in life. Are you where you thought you'd be? If so, congratulations. This is a real accomplishment. If not, take heart. Many people discover that they aren't anywhere close. The key is to write down solid goals and the steps needed to reach them. It's your life after all. Mapping out your route is up to you."
    },
    {
        Horoscope:" If you're feeling irritable and wrung out today, it may be a result of putting far too much pressure on yourself. It might be wise to take a look at the expectations you have of yourself. Consider if you would you place the same demands on those closest to you. If the answer is no, it's time to revamp your life to suit the one you're closest to - you."
    }
  ]
  
  export const getRandomHoroscope = () => 
    arrayOfHoroscope[Math.floor(Math.random() * arrayOfHoroscope.length)]
  
   
   