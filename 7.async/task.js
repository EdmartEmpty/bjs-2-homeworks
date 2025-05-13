class AlarmClock {
    constructor(){
       this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time,callback){
        if (time === null || callback === undefined){
            throw new Error('Отсутствуют обязательные аргументы');
        }
        for(let alarm of this.alarmCollection){
            if(alarm.time === time){
                console.warn('Уже присутствует звонок на это же время');
            }
        }
        let alarm = {time,callback,canCall:true};
        this.alarmCollection.push(alarm);
    }
    removeClock(timeRemove){
     this.alarmCollection = this.alarmCollection.filter(x => x.time !== timeRemove);
    }

    getCurrentFormattedTime(){
        let timeNow = new Date();
        return timeNow.toLocaleString("ru",{hour:"2-digit",minute:"2-digit"});
    }
    start(){
        if(this.intervalId !== null){
            return;
        }


        function interval(){
            console.log(typeof Array.from(this.alarmCollection));
        //   alarmCollection.foreach(function(x){
        //          if(x.time === getCurrentFormattedTime() && x.canCall === true){
        //              x.callback();
        //              x.canCall = false;
        //          }
        //      })
            }
           let cos =  interval.bind(this);
           
        setInterval(cos,1000);
    }
}

let t =  new AlarmClock();
const l = function() {console.log("привет")};

console.log(t.getCurrentFormattedTime());
t.addClock("22:30",l);

t.start();
