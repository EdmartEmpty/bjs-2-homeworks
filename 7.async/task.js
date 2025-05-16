class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        if (this.alarmCollection.some(x => x.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }
        let alarm = { time, callback, canCall: true };
        this.alarmCollection.push(alarm);
    }
    removeClock(timeRemove) {
        this.alarmCollection = this.alarmCollection.filter(x => x.time !== timeRemove);
    }

    getCurrentFormattedTime() {
        let timeNow = new Date();
        return timeNow.toLocaleString("ru", { hour: "2-digit", minute: "2-digit" });
    }
    start() {
        if (this.intervalId !== null) {
            return;
        }

        let timeBinded = this.getCurrentFormattedTime.bind(this);
        const chek = () => this.alarmCollection.forEach(
            function (x) {
                if (x.time === timeBinded() && x.canCall === true) {
                    x.callback();
                    x.canCall = false;

                }
            });

        this.intervalId = setInterval(chek, 1000);


    }
    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    };

    resetAllCalls() {
        this.alarmCollection.forEach(x => x.canCall = true);
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}






