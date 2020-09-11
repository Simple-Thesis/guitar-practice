class utility {
    GetTodaysDate ()  {
        let dt = new Date();
        return this.FormatDt(dt);
    }
    GetNthInt = (n) => {
      if (!n) { return '0th' }

      switch (n) {
        case 1:
          return '1st';
        case 2: 
          return '2nd';
        case 3: 
          return '3rd';
        default:
          return n + 'th';
      }
    }
    GetRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
}

let Helpers = new utility();
export default Helpers;